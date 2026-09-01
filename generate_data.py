import pandas as pd
import numpy as np
import json
import os

def process_data():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    ag_path = os.path.join(base_dir, 'agendamento.xlsx')
    esp_path = os.path.join(base_dir, 'espelhamento.xlsx')
    dts_path = os.path.join(base_dir, 'dts.xlsx')
    mot_path = os.path.join(base_dir, 'MOTORISTAS.csv')

    # 1. Agendamento
    df_ag = pd.read_excel(ag_path, sheet_name='Export')
    df_ag_clean = df_ag[
        df_ag['Revendas'].notna() & 
        (df_ag['Revendas'] != 'Total') & 
        (~df_ag['GEO'].astype(str).str.startswith('Filtros'))
    ].copy()

    ag_data = {}
    if not df_ag_clean.empty:
        row = df_ag_clean.iloc[0]
        ag_data = {
            "geo": str(row.get('GEO', 'GEO NO')),
            "revenda": str(row.get('Revendas', 'DISSOBEL/SOBRAL(CE)')),
            "grade_plan_carros": int(row.get('Grade Plan Carros', 144) or 144),
            "carros_carregados": int(row.get('Carros Carregados', 138) or 138),
            "pct_furo": float(row.get('% Furo', 0.0) or 0.0),
            "carros_agendados": int(row.get('Carros Agendados', 128) or 128),
            "pct_agendado": float(row.get('% Agendado', 0.0) or 0.0),
            "pct_chegou_adiantado": float(row.get('% Chegou Adiantado', 0.0) or 0.0),
            "pct_chegou_no_horario": float(row.get('% Chegou No Horário', row.get('% Chegou No Horrio', 0.0)) or 0.0),
            "pct_chegou_atrasado": float(row.get('% Chegou Atrasado', 0.0) or 0.0),
            "pct_entrou_adiantado": float(row.get('% Entrou Adiantado', 0.0) or 0.0),
            "pct_entrou_no_horario": float(row.get('% Entrou No Horário', row.get('% Entrou No Horrio', 0.0)) or 0.0),
            "pct_entrou_atrasado": float(row.get('% Entrou Atrasado', 0.0) or 0.0),
            "meta": 0.90
        }

    # 2. Motoristas
    motoristas_map = {}
    if os.path.exists(mot_path):
        try:
            df_mot = pd.read_csv(mot_path, sep=';')
            for _, r in df_mot.iterrows():
                placa = str(r['PLACAS ATIVAS']).strip().upper()
                motoristas_map[placa] = {
                    "transportadora": str(r['TRANSPORTADORA']).strip(),
                    "motorista": str(r['MOTORISTA']).strip()
                }
        except Exception as e:
            print("Error loading MOTORISTAS.csv:", e)

    # 3. DTS (Apoio Operacional - se disponível)
    dts_dict = {}
    if os.path.exists(dts_path):
        try:
            df_dts = pd.read_excel(dts_path, sheet_name='Export')
            df_dts_clean = df_dts[
                df_dts['DT'].notna() & 
                (~df_dts['DT'].astype(str).str.startswith('Filtros'))
            ].copy()

            for _, r in df_dts_clean.iterrows():
                dt_raw = str(r['DT']).strip().replace('.0', '')
                dts_dict[dt_raw] = {
                    "origem": str(r.get('Origem', 'N/I')).strip() if pd.notna(r.get('Origem')) else 'N/I',
                    "destino": str(r.get('Destino', 'DISSOBEL/SOBRAL(CE)')).strip() if pd.notna(r.get('Destino')) else 'DISSOBEL/SOBRAL(CE)',
                    "transportadora_dts": str(r.get('Transportadora', '')).strip() if pd.notna(r.get('Transportadora')) else '',
                    "placa_cavalo": str(r.get('Placa Cavalo', '')).strip() if pd.notna(r.get('Placa Cavalo')) else '',
                    "usuario_embarcado": str(r.get('Usuário Embarcado', r.get('Usurio Embarcado', 'Não embarcado'))).strip() if pd.notna(r.get('Usuário Embarcado', r.get('Usurio Embarcado', ''))) else 'Não embarcado',
                    "associacao": str(r.get('Associação', r.get('Associao', ''))).strip() if pd.notna(r.get('Associação', r.get('Associao', ''))) else '',
                    "fonte_associacao": str(r.get('Fonte da Associação', r.get('Fonte da Associao', ''))).strip() if pd.notna(r.get('Fonte da Associação', r.get('Fonte da Associao', ''))) else '',
                    "checklist_saida": str(r.get('Checklist Saída', r.get('Checklist Sada', 'Não Aderente'))).strip() if pd.notna(r.get('Checklist Saída', r.get('Checklist Sada', ''))) else 'Não Aderente',
                    "paradas_maiores_20min": int(r.get('Paradas maiores que 20min', 0) or 0) if pd.notna(r.get('Paradas maiores que 20min')) else 0,
                    "paradas_justificadas": int(r.get('Paradas justificadas', 0) or 0) if pd.notna(r.get('Paradas justificadas')) else 0,
                    "checklist_retorno": str(r.get('Checklist Retorno', 'Não Aderente')).strip() if pd.notna(r.get('Checklist Retorno')) else 'Não Aderente'
                }
        except Exception as e:
            print("Notice: dts.xlsx could not be processed:", e)

    # 4. Espelhamento (Viagens)
    df_esp = pd.read_excel(esp_path, sheet_name='Export')
    df_esp_clean = df_esp[
        df_esp['DT/FO'].notna() & 
        (~df_esp['Data Carreg.'].astype(str).str.startswith('Filtros'))
    ].copy()

    viagens = []
    for _, r in df_esp_clean.iterrows():
        dt_val = r['DT/FO']
        try:
            dt_num = int(dt_val)
            dt_str = str(dt_num)
        except:
            dt_str = str(dt_val).strip().replace('.0', '')

        placa_raw = str(r.get('Placa', '')).strip().upper() if pd.notna(r.get('Placa')) else ''
        if placa_raw.endswith('.0'):
            placa_raw = placa_raw[:-2]

        data_carreg = pd.to_datetime(r['Data Carreg.']) if pd.notna(r['Data Carreg.']) else None
        data_carreg_str = data_carreg.strftime('%Y-%m-%d') if data_carreg is not None else ''

        checkin_antecipado_val = 1 if r.get('Check-in Antecipado') == 1.0 else 0
        checkin_realizado_val = 1 if r.get('Check-in realizado') == 1.0 else 0
        pct_checkin_val = float(r.get('% Check-in', 0.0) or 0.0)
        espelhamento_str = str(r.get('Espelhamento', 'Nao Espelhado')).strip()
        is_espelhado = 1 if espelhamento_str.lower() == 'espelhado' else 0
        
        score_esp = float(r.get('Score Esp.', 0.0) or 0.0) if pd.notna(r.get('Score Esp.')) else 0.0
        cluster_esp = str(r.get('Cluster Score de Espelhamento', '')).strip() if pd.notna(r.get('Cluster Score de Espelhamento')) else 'Sem leitura'
        rastreador = str(r.get('Rastreador', '')).strip() if pd.notna(r.get('Rastreador')) else 'Não informado'

        # Merge DTS data
        dts_info = dts_dict.get(dt_str, {
            "origem": "Outras / Direto",
            "destino": "DISSOBEL/SOBRAL(CE)",
            "transportadora_dts": "",
            "placa_cavalo": placa_raw,
            "usuario_embarcado": "Não informado",
            "associacao": "Não informado",
            "fonte_associacao": "Não informado",
            "checklist_saida": "Não informado",
            "paradas_maiores_20min": 0,
            "paradas_justificadas": 0,
            "checklist_retorno": "Não informado"
        })

        # Merge Motorista / Transportadora
        mot_info = motoristas_map.get(placa_raw, {
            "transportadora": "DISSOBEL / Terceira",
            "motorista": "Não vinculado"
        })

        viagens.append({
            "dt": dt_str,
            "data_carregamento": data_carreg_str,
            "placa": placa_raw if placa_raw else "S/ Placa",
            "cod_sap": str(r.get('Cod. Sap', '')).replace('.0', '') if pd.notna(r.get('Cod. Sap')) else '',
            "revenda": str(r.get('Revenda', 'DISSOBEL/SOBRAL(CE)')).strip() if pd.notna(r.get('Revenda')) else 'DISSOBEL/SOBRAL(CE)',
            "checkin_antecipado": checkin_antecipado_val,  # 1 se >1h antes, 0 cc
            "checkin_realizado": checkin_realizado_val,
            "pct_checkin": pct_checkin_val,
            "espelhamento": espelhamento_str,
            "is_espelhado": is_espelhado,
            "score_esp": score_esp,
            "cluster_esp": cluster_esp,
            "rastreador": rastreador,
            "transportadora": mot_info["transportadora"],
            "motorista": mot_info["motorista"],
            "origem": dts_info["origem"],
            "destino": dts_info["destino"],
            "paradas_maiores_20min": dts_info["paradas_maiores_20min"],
            "paradas_justificadas": dts_info["paradas_justificadas"],
            "checklist_saida": dts_info["checklist_saida"],
            "checklist_retorno": dts_info["checklist_retorno"],
            "has_dts_record": dt_str in dts_dict
        })

    # Summary Output
    result = {
        "generated_at": pd.Timestamp.now().isoformat(),
        "unidade": "DISSOBEL / SOBRAL-CE",
        "geo": "GEO NO",
        "agendamento_summary": ag_data,
        "viagens": viagens,
        "metas": {
            "agendamento": 0.90,
            "checkin_1h": 0.70,
            "espelhamento": 0.95
        }
    }

    out_file = os.path.join(base_dir, 'data.json')
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    # Atualiza também INITIAL_DATA dentro do terminal.html para garantir consistência offline
    terminal_file = os.path.join(base_dir, 'terminal.html')
    if os.path.exists(terminal_file):
        try:
            with open(terminal_file, 'r', encoding='utf-8') as tf:
                content = tf.read()
            import re
            json_compact = json.dumps(result, ensure_ascii=False)
            pattern = r'const INITIAL_DATA = \{.*?\};\n\nconst T ='
            replacement = f'const INITIAL_DATA = {json_compact};\n\nconst T ='
            if re.search(pattern, content, flags=re.DOTALL):
                content = re.sub(pattern, replacement, content, flags=re.DOTALL)
                with open(terminal_file, 'w', encoding='utf-8') as tf:
                    tf.write(content)
                print(f"Updated INITIAL_DATA in {terminal_file}")
        except Exception as err:
            print("Notice: could not auto-update INITIAL_DATA in terminal.html:", err)

    print(f"Data successfully processed! Generated {len(viagens)} trips in {out_file}")
    print(f"Agendamento: {ag_data.get('pct_agendado', 0):.2%}")
    checkin_1h_pct = sum(v['checkin_antecipado'] for v in viagens) / len(viagens) if viagens else 0
    esp_pct = sum(v['is_espelhado'] for v in viagens) / len(viagens) if viagens else 0
    print(f"Check-in > 1h: {checkin_1h_pct:.2%}")
    print(f"Espelhamento: {esp_pct:.2%}")

if __name__ == '__main__':
    process_data()
