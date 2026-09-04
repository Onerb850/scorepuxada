import os
import io
import json
import re
import socket
import pandas as pd
import requests

# Força IPv4 para downloads instantâneos no Windows e evita travamentos de DNS IPv6
try:
    import urllib3.util.connection as urllib3_cn
    def allowed_gai_family():
        return socket.AF_INET
    urllib3_cn.allowed_gai_family = allowed_gai_family
except Exception:
    pass

# IDs dos arquivos no Google Drive
GDRIVE_FILES = {
    "agendamento": "192WucjsTnTu5iB5LNTkQqS9RGHlIZbZD",
    "espelhamento": "1KO8r6YmPMsksCrX3lM5zhXr2nRvf1nuf",
    "motoristas": "13Qs0yl8V6OukgJ2qHMwMZkMmbZqCQZHD"
}

def download_drive_file(file_id, is_xlsx=True):
    """Baixa arquivo do Google Drive em memória de forma rápida e segura"""
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }
    url = f"https://drive.google.com/uc?export=download&id={file_id}"
    try:
        resp = requests.get(url, headers=headers, timeout=10)
        if resp.status_code == 200 and len(resp.content) > 100:
            return io.BytesIO(resp.content)
    except Exception as e:
        pass

    # URL alternativa caso a principal falhe
    alt_url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download"
    resp = requests.get(alt_url, headers=headers, timeout=10)
    if resp.status_code == 200:
        return io.BytesIO(resp.content)
    
    raise Exception(f"Não foi possível baixar o arquivo {file_id} do Google Drive.")

def process_gdrive_data():
    """Baixa os 3 arquivos do Google Drive e gera o JSON unificado com cálculo exato de Score"""
    # 1. Download dos arquivos
    f_ag = download_drive_file(GDRIVE_FILES["agendamento"], is_xlsx=True)
    f_esp = download_drive_file(GDRIVE_FILES["espelhamento"], is_xlsx=True)
    f_mot = download_drive_file(GDRIVE_FILES["motoristas"], is_xlsx=False)

    # 2. Carregar Motoristas
    try:
        df_mot = pd.read_csv(f_mot, sep=';', encoding='utf-8')
    except Exception:
        f_mot.seek(0)
        df_mot = pd.read_csv(f_mot, sep=';', encoding='latin1')
    
    df_mot.columns = [c.strip() for c in df_mot.columns]
    
    placa_to_driver = {}
    for idx, r in df_mot.iterrows():
        m_nome = str(r.get('MOTORISTA', '')).strip()
        placas_str = str(r.get('PLACAS ATIVAS', ''))
        transp = str(r.get('TRANSPORTADORA', 'Dedicada')).strip()
        
        placas = [p.strip().replace('-', '').replace(' ', '').upper() for p in placas_str.replace('/', ',').replace(';', ',').split(',') if p.strip()]
        for p in placas:
            if len(p) >= 6:
                placa_to_driver[p] = {"motorista": m_nome, "transportadora": transp}

    # 3. Carregar Agendamento
    df_ag = pd.read_excel(f_ag)
    df_ag.columns = [str(c).strip() for c in df_ag.columns]
    
    # Filtrar linhas válidas (ignorar totais e rodapé de filtros)
    df_ag_clean = df_ag[
        df_ag['Revendas'].notna() & 
        (df_ag['Revendas'].astype(str).str.lower() != 'total') & 
        (~df_ag.iloc[:, 0].astype(str).str.startswith('Filtros'))
    ].copy()

    row_ag = None
    if not df_ag_clean.empty:
        # Prioriza linha com SOBRAL ou DISSOBEL
        for idx, r in df_ag_clean.iterrows():
            txt = str(r.to_dict()).upper()
            if 'SOBRAL' in txt or 'DISSOBEL' in txt:
                row_ag = r
                break
        if row_ag is None:
            row_ag = df_ag_clean.iloc[0]
    elif len(df_ag) > 0:
        row_ag = df_ag.iloc[0]

    grade_plan = int(row_ag.get('Grade Plan Carros', 0)) if (row_ag is not None and pd.notna(row_ag.get('Grade Plan Carros'))) else 0
    carros_carr = int(row_ag.get('Carros Carregados', 0)) if (row_ag is not None and pd.notna(row_ag.get('Carros Carregados'))) else 0
    carros_ag = int(row_ag.get('Carros Agendados', 0)) if (row_ag is not None and pd.notna(row_ag.get('Carros Agendados'))) else 0
    pct_ag = float(row_ag.get('% Agendado', 0.0)) if (row_ag is not None and pd.notna(row_ag.get('% Agendado'))) else 0.0

    ag_data = {
        "geo": str(row_ag.get('GEO', 'GEO NO')) if row_ag is not None else 'GEO NO',
        "revenda": str(row_ag.get('Revendas', 'DISSOBEL/SOBRAL(CE)')) if row_ag is not None else 'DISSOBEL/SOBRAL(CE)',
        "grade_plan_carros": grade_plan,
        "carros_carregados": carros_carr,
        "carros_agendados": carros_ag,
        "pct_agendado": pct_ag,
        "pct_furo": float(row_ag.get('% Furo', 0.0)) if (row_ag is not None and pd.notna(row_ag.get('% Furo'))) else 0.0,
        "meta": 0.90
    }

    # 4. Carregar Espelhamento
    df_esp = pd.read_excel(f_esp)
    df_esp.columns = [str(c).strip() for c in df_esp.columns]

    # Encontrar coluna DT/FO e Data Carreg.
    dt_col = next((c for c in df_esp.columns if 'DT' in c.upper()), 'DT/FO')
    data_col = next((c for c in df_esp.columns if 'DATA' in c.upper()), 'Data Carreg.')
    
    # Filtrar linhas válidas
    df_esp_clean = df_esp[
        df_esp[dt_col].notna() & 
        (~df_esp[dt_col].astype(str).str.startswith('Filtros')) &
        (~df_esp.iloc[:, 0].astype(str).str.startswith('Filtros'))
    ].copy()

    viagens = []
    for idx, r in df_esp_clean.iterrows():
        dt_val = r.get(dt_col, '')
        try:
            dt_str = str(int(float(dt_val)))
        except:
            dt_str = str(dt_val).strip().replace('.0', '')
            
        placa_raw = str(r.get('Placa', '')).strip().upper() if pd.notna(r.get('Placa')) else ''
        if placa_raw.endswith('.0'):
            placa_raw = placa_raw[:-2]
        p_clean = placa_raw.replace('-', '').replace(' ', '').upper()
        
        driver_info = placa_to_driver.get(p_clean, None)
        if driver_info:
            motorista = driver_info["motorista"]
            transportadora = driver_info["transportadora"]
        else:
            motorista = "Não vinculado"
            transportadora = "DISSOBEL / Terceira"

        # Check-in Antecipado
        chk_raw = r.get('Check-in Antecipado', None)
        if pd.isna(chk_raw) or chk_raw == '':
            is_checkin = 0
        elif isinstance(chk_raw, (int, float)):
            is_checkin = 1 if float(chk_raw) >= 0.5 else 0
        else:
            chk_txt = str(chk_raw).strip().lower()
            has_negative = any(neg in chk_txt for neg in ['nao', 'não', 'sem', 'fora', 'atrasado', '0'])
            is_checkin = 1 if (not has_negative and (chk_txt in ['1', '1.0', 'sim', 'ok', 'conforme', 'true'] or 'conforme' in chk_txt or chk_txt == 'ok')) else 0

        # Espelhamento
        esp_raw = r.get('Espelhamento', '')
        if pd.isna(esp_raw) or esp_raw == '':
            is_esp = 0
            esp_str = "Nao Espelhado"
        elif isinstance(esp_raw, (int, float)):
            is_esp = 1 if float(esp_raw) >= 0.5 else 0
            esp_str = "Espelhado" if is_esp else "Nao Espelhado"
        else:
            esp_txt = str(esp_raw).strip().lower()
            has_negative = any(neg in esp_txt for neg in ['nao', 'não', 'sem', 'fora', '0', 'desconectado', 'inativo'])
            is_esp = 1 if (not has_negative and (esp_txt in ['espelhado', 'ok', 'sim', 'conforme', '1', '1.0'] or ('espelhado' in esp_txt and not has_negative))) else 0
            esp_str = str(esp_raw).strip()

        data_carr = r.get(data_col, '')
        if pd.notna(data_carr):
            try:
                data_str = pd.to_datetime(data_carr).strftime('%Y-%m-%d')
            except Exception:
                data_str = str(data_carr)[:10]
        else:
            data_str = ''

        viagens.append({
            "id": len(viagens) + 1,
            "dt": dt_str,
            "placa": placa_raw if placa_raw else "S/ Placa",
            "cod_sap": str(r.get('Cod. Sap', '')).replace('.0', '') if pd.notna(r.get('Cod. Sap')) else '',
            "revenda": str(r.get('Revenda', 'DISSOBEL/SOBRAL(CE)')).strip() if pd.notna(r.get('Revenda')) else 'DISSOBEL/SOBRAL(CE)',
            "motorista": motorista,
            "transportadora": transportadora,
            "checkin_antecipado": is_checkin,
            "checkin_realizado": 1 if r.get('Check-in realizado') == 1.0 else (1 if is_checkin else 0),
            "pct_checkin": float(r.get('% Check-in', 1.0) or 1.0) if pd.notna(r.get('% Check-in')) else (1.0 if is_checkin else 0.0),
            "espelhamento": esp_str,
            "is_espelhado": is_esp,
            "score_esp": float(r.get('Score Esp.', 0.0) or 0.0) if pd.notna(r.get('Score Esp.')) else 0.0,
            "cluster_esp": str(r.get('Cluster Score de Espelhamento', 'Check-in e espelhamento ok' if (is_checkin and is_esp) else '')).strip(),
            "rastreador": str(r.get('Rastreador', 'MOTORA')).strip() if pd.notna(r.get('Rastreador')) else 'Não informado',
            "origem": "Outras / Direto",
            "destino": "DISSOBEL/SOBRAL(CE)",
            "data_carregamento": data_str
        })

    result = {
        "generated_at": pd.Timestamp.now().isoformat(),
        "source": "Google Drive",
        "unidade": "DISSOBEL / SOBRAL-CE",
        "geo": "GEO NO",
        "agendamento_summary": ag_data,
        "viagens": viagens,
        "metas": {
            "agendamento": 0.90,
            "checkin_1h": 0.70,
            "espelhamento": 0.95,
            "score": 0.85
        }
    }
    return result

def sync_and_save_all():
    """Executa a sincronização e salva em data.json, index.html e terminal.html"""
    base_dir = os.path.dirname(os.path.abspath(__file__))
    data = process_gdrive_data()
    
    # 1. Salva data.json
    json_path = os.path.join(base_dir, 'data.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Salvo {json_path} ({len(data['viagens'])} viagens)")

    # 2. Atualiza INITIAL_DATA em index.html e terminal.html
    json_compact = json.dumps(data, ensure_ascii=False)
    for html_file in ['index.html', 'terminal.html']:
        path = os.path.join(base_dir, html_file)
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            pattern = r'const INITIAL_DATA = \{.*?\};\s*(?:const T =|var CURRENT_DATA)'
            match = re.search(r'const INITIAL_DATA = \{.*?\};', content, flags=re.DOTALL)
            if match:
                content = content[:match.start()] + f'const INITIAL_DATA = {json_compact};' + content[match.end():]
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Atualizado INITIAL_DATA com sucesso em {html_file}")
            else:
                print(f"Aviso: Não encontrou INITIAL_DATA em {html_file}")

    print("\n[OK] SINCRONIZACAO COMPLETA COM SUCESSO!")
    print(f"Total de Viagens: {len(data['viagens'])}")
    print(f"% Agendamento: {data['agendamento_summary'].get('pct_agendado', 0):.1%}")
    chk_pct = sum(v['checkin_antecipado'] for v in data['viagens']) / len(data['viagens']) if data['viagens'] else 0
    esp_pct = sum(v['is_espelhado'] for v in data['viagens']) / len(data['viagens']) if data['viagens'] else 0
    print(f"% Check-in > 1h: {chk_pct:.1%}")
    print(f"% Espelhamento: {esp_pct:.1%}")
    score = (data['agendamento_summary'].get('pct_agendado', 0) + chk_pct + esp_pct) / 3
    print(f"Score Geral: {score:.1%}")
    return data

if __name__ == "__main__":
    try:
        sync_and_save_all()
    except Exception as e:
        print("Erro na sincronizacao:", e)


