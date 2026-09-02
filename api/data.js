const XLSX = require('xlsx');

const GDRIVE_FILES = {
  agendamento: "192WucjsTnTu5iB5LNTkQqS9RGHlIZbZD",
  espelhamento: "1KO8r6YmPMsksCrX3lM5zhXr2nRvf1nuf",
  motoristas: "13Qs0yl8V6OukgJ2qHMwMZkMmbZqCQZHD"
};

async function downloadDriveBuffer(fileId) {
  const url1 = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const url2 = `https://drive.usercontent.google.com/download?id=${fileId}&export=download`;
  
  try {
    const res = await fetch(url1, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length > 100) return buf;
    }
  } catch (e) {}

  const res2 = await fetch(url2, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  if (res2.ok) {
    return Buffer.from(await res2.arrayBuffer());
  }
  throw new Error(`Falha ao baixar arquivo ${fileId} do Google Drive`);
}

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (lines.length === 0) return [];
  const delimiter = lines[0].includes(';') ? ';' : ',';
  const headers = lines[0].split(delimiter).map(h => h.trim().replace(/^["']|["']$/g, ''));
  
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(delimiter);
    if (currentLine.length < headers.length) continue;
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = (currentLine[j] || '').trim().replace(/^["']|["']$/g, '');
    }
    result.push(obj);
  }
  return result;
}

async function fetchAndProcessData() {
  // 1. Download de todos os arquivos em paralelo para velocidade máxima
  const [bufAg, bufEsp, bufMot] = await Promise.all([
    downloadDriveBuffer(GDRIVE_FILES.agendamento),
    downloadDriveBuffer(GDRIVE_FILES.espelhamento),
    downloadDriveBuffer(GDRIVE_FILES.motoristas)
  ]);

  // 2. Processar Motoristas
  const motText = bufMot.toString('utf-8');
  const motRows = parseCSV(motText);
  const placaToDriver = {};
  for (const r of motRows) {
    const nome = (r['MOTORISTA'] || '').trim();
    const placasStr = (r['PLACAS ATIVAS'] || '').toString();
    const transp = (r['TRANSPORTADORA'] || 'Dedicada').trim();
    
    const placas = placasStr.replace(/[\/;]/g, ',').split(',')
      .map(p => p.trim().replace(/[- ]/g, '').toUpperCase())
      .filter(p => p.length >= 6);
      
    for (const p of placas) {
      placaToDriver[p] = { motorista: nome, transportadora: transp };
    }
  }

  // 3. Processar Agendamento
  const wbAg = XLSX.read(bufAg, { type: 'buffer' });
  const sheetAg = wbAg.Sheets[wbAg.SheetNames[0]];
  const agRows = XLSX.utils.sheet_to_json(sheetAg, { defval: '' });
  
  const cleanAg = agRows.filter(r => {
    const rev = String(r['Revendas'] || '').toLowerCase();
    const c1 = String(Object.values(r)[0] || '');
    return rev && rev !== 'total' && !c1.startsWith('Filtros');
  });

  let rowAg = cleanAg.find(r => {
    const str = JSON.stringify(r).toUpperCase();
    return str.includes('SOBRAL') || str.includes('DISSOBEL');
  }) || cleanAg[0] || {};

  const gradePlan = parseInt(rowAg['Grade Plan Carros'] || 0, 10) || 0;
  const carrosCarr = parseInt(rowAg['Carros Carregados'] || 0, 10) || 0;
  const carrosAg = parseInt(rowAg['Carros Agendados'] || 0, 10) || 0;
  const pctAg = parseFloat(rowAg['% Agendado'] || 0.0) || 0.0;
  const pctFuro = parseFloat(rowAg['% Furo'] || 0.0) || 0.0;

  const agSummary = {
    geo: String(rowAg['GEO'] || 'GEO NO'),
    revenda: String(rowAg['Revendas'] || 'DISSOBEL/SOBRAL(CE)'),
    grade_plan_carros: gradePlan,
    carros_carregados: carrosCarr,
    carros_agendados: carrosAg,
    pct_agendado: pctAg,
    pct_furo: pctFuro,
    meta: 0.90
  };

  // 4. Processar Espelhamento
  const wbEsp = XLSX.read(bufEsp, { type: 'buffer' });
  const sheetEsp = wbEsp.Sheets[wbEsp.SheetNames[0]];
  const espRows = XLSX.utils.sheet_to_json(sheetEsp, { defval: '' });

  const viagens = [];
  for (const r of espRows) {
    const keys = Object.keys(r);
    const dtKey = keys.find(k => k.toUpperCase().includes('DT')) || 'DT/FO';
    const dataKey = keys.find(k => k.toUpperCase().includes('DATA')) || 'Data Carreg.';
    
    const dtVal = String(r[dtKey] || '').trim();
    if (!dtVal || dtVal.startsWith('Filtros') || dtVal.toLowerCase() === 'total') continue;

    const placaRaw = String(r['Placa'] || '').replace(/\.0$/, '').trim().toUpperCase();
    const pClean = placaRaw.replace(/[- ]/g, '');
    const driverInfo = placaToDriver[pClean];

    const motorista = driverInfo ? driverInfo.motorista : 'Não vinculado';
    const transportadora = driverInfo ? driverInfo.transportadora : 'DISSOBEL / Terceira';

    // Check-in Antecipado
    const chkVal = r['Check-in Antecipado'];
    let isCheckin = 0;
    if (typeof chkVal === 'number') {
      isCheckin = chkVal >= 0.5 ? 1 : 0;
    } else {
      const chkTxt = String(chkVal || '').toLowerCase();
      isCheckin = (chkTxt.includes('conforme') || chkTxt.includes('ok') || chkTxt.includes('sim') || chkTxt === '1') ? 1 : 0;
    }

    // Espelhamento
    const espVal = r['Espelhamento'];
    let isEsp = 0;
    let espStr = 'Nao Espelhado';
    if (typeof espVal === 'number') {
      isEsp = espVal >= 0.5 ? 1 : 0;
      espStr = isEsp ? 'Espelhado' : 'Nao Espelhado';
    } else {
      const espTxt = String(espVal || '').toLowerCase();
      isEsp = (espTxt.includes('espelhado') || espTxt.includes('conforme') || espTxt.includes('ok') || espTxt.includes('sim') || espTxt === '1') ? 1 : 0;
      espStr = String(espVal || (isEsp ? 'Espelhado' : 'Nao Espelhado')).trim();
    }

    let dataStr = '';
    const rawDate = r[dataKey];
    if (rawDate) {
      if (typeof rawDate === 'number') {
        // Excel serial date to JS Date
        const dateObj = new Date((rawDate - 25569) * 86400 * 1000);
        dataStr = dateObj.toISOString().slice(0, 10);
      } else {
        dataStr = String(rawDate).slice(0, 10);
      }
    }

    viagens.push({
      id: viagens.length + 1,
      dt: dtVal.replace(/\.0$/, ''),
      placa: placaRaw || 'S/ Placa',
      cod_sap: String(r['Cod. Sap'] || '').replace(/\.0$/, ''),
      revenda: String(r['Revenda'] || 'DISSOBEL/SOBRAL(CE)').trim(),
      motorista,
      transportadora,
      checkin_antecipado: isCheckin,
      checkin_realizado: 1,
      pct_checkin: 1.0,
      espelhamento: espStr,
      is_espelhado: isEsp,
      score_esp: isEsp ? 1.0 : 0.0,
      cluster_esp: (isCheckin && isEsp) ? 'Check-in e espelhamento ok' : '',
      rastreador: String(r['Rastreador'] || 'MOTORA').trim(),
      origem: 'Outras / Direto',
      destino: 'DISSOBEL/SOBRAL(CE)',
      data_carregamento: dataStr
    });
  }

  return {
    generated_at: new Date().toISOString(),
    source: "Google Drive Live",
    unidade: "DISSOBEL / SOBRAL-CE",
    geo: "GEO NO",
    agendamento_summary: agSummary,
    viagens,
    metas: {
      agendamento: 0.90,
      checkin_1h: 0.70,
      espelhamento: 0.95,
      score: 0.85
    }
  };
}

// Handler para Vercel Serverless Function
module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const data = await fetchAndProcessData();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro ao sincronizar com Google Drive:", error);
    res.status(500).json({ error: error.message });
  }
};
