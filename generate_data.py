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
    df_ag = None
    try:
        # Tenta carregar aba 'Carros Carregados', 'Export' ou a primeira disponível
        xl = pd.ExcelFile(ag_path)
        target_sheet = xl.sheet_names[0]
        for s in xl.sheet_names:
            if 'carreg' in s.lower() or 'export' in s.lower():
                target_sheet = s
                break
        df_ag = pd.read_excel(ag_path, sheet_name=target_sheet)
    except Exception as e:
        print("Erro ao ler agendamento.xlsx:", e)

    ag_data = {}
    if df_ag is not None and not df_ag.empty:
        # Remove linhas de total ou filtros
        def is_valid_ag_row(r):
            first_val = str(r.iloc[0]).strip().lower()
            rev_val = str(r.get('Revendas', '')).strip().lower()
            return not (first_val.startswith('filtros') or rev_val == 'total' or first_val == 'total')

        df_ag_clean = df_ag[df_ag.apply(is_valid_ag_row, axis=1)].copy()

        # Busca linha de Sobral/Dissobel ou primeira linha válida
        row = None
        for _, r in df_ag_clean.iterrows():
            row_str = str(r.to_dict()).upper()
            if 'SOBRAL' in row_str or 'DISSOBEL' in row_str:
                row = r
                break
        if row is None and not df_ag_clean.empty:
            row = df_ag_clean.iloc[0]

        if row is not None:
            def get_ag_val(r, *keywords, default=0):
                for k in r.keys():
                    k_clean = str(k).lower().replace('\ufffd', '').strip()
                    for kw in keywords:
                        if kw.lower() in k_clean:
                            val = r[k]
                            if pd.isna(val): return default
                            try:
                                return float(val)
                            except:
                                return val
                return default

            carros_carr = int(get_ag_val(row, 'carros carregados', 'carregados', default=138))
            carros_agen = int(get_ag_val(row, 'carros agendados', 'agendados', default=128))
            grade_plan = int(get_ag_val(row, 'grade plan', 'grade', default=144))
            pct_agen = float(get_ag_val(row, '% agendado', default=0.0))
            pct_fur = float(get_ag_val(row, '% furo', default=0.0))

            ag_data = {
                "geo": str(row.get('GEO', 'GEO NO')),
                "revenda": str(row.get('Revendas', 'DISSOBEL/SOBRAL(CE)')),
                "grade_plan_carros": grade_plan,
                "carros_carregados": carros_carr,
                "pct_furo": pct_fur,
                "carros_agendados": carros_agen,
                "pct_agendado": pct_agen,
                "pct_chegou_adiantado": float(get_ag_val(row, 'chegou adiantado', default=0.0)),
                "pct_chegou_no_horario": float(get_ag_val(row, 'chegou no hor', default=0.0)),
                "pct_chegou_atrasado": float(get_ag_val(row, 'chegou atrasado', default=0.0)),
                "pct_entrou_adiantado": float(get_ag_val(row, 'entrou adiantado', default=0.0)),
                "pct_entrou_no_horario": float(get_ag_val(row, 'entrou no hor', default=0.0)),
                "pct_entrou_atrasado": float(get_ag_val(row, 'entrou atrasado', default=0.0)),
                "meta": 0.90
            }

    # 2. Motoristas
    motoristas_map = {}
    if os.path.exists(mot_path):
        try:
            try:
                df_mot = pd.read_csv(mot_path, sep=';', encoding='utf-8-sig')
            except:
                df_mot = pd.read_csv(mot_path, sep=';', encoding='latin1')
            
            # Normaliza nomes de colunas removendo BOM e espaços
            df_mot.columns = [c.replace('\ufeff', '').strip().upper() for c in df_mot.columns]
            
            for _, r in df_mot.iterrows():
                placa = str(r.get('PLACAS ATIVAS', '')).strip().upper().replace('-', '')
                if placa:
                    motoristas_map[placa] = {
                        "transportadora": str(r.get('TRANSPORTADORA', 'Dedicada')).strip(),
                        "motorista": str(r.get('MOTORISTA', 'Motorista')).strip()
                    }
        except Exception as e:
            print("Error loading MOTORISTAS.csv:", e)

    # 3. DTS (Apoio Operacional / Nova Aba DT's)
    dts_dict = {}
    dts_records = []
    
    # Busca por variações de maiúsculas/minúsculas do nome do arquivo
    found_dts_path = None
    for cand in ['DTs.xlsx', 'dts.xlsx', 'DTS.xlsx']:
        p = os.path.join(base_dir, cand)
        if os.path.exists(p):
            found_dts_path = p
            break

    if found_dts_path:
        try:
            df_dts = pd.read_excel(found_dts_path, sheet_name='Export')
            
            def get_col_val(row, *keywords):
                for k in row.keys():
                    k_clean = str(k).lower().replace('\ufffd', '').strip()
                    for kw in keywords:
                        if kw.lower() in k_clean:
                            val = row[k]
                            if pd.isna(val): return ''
                            val_str = str(val).strip()
                            # Normaliza caracteres corrompidos comuns
                            val_str = val_str.replace('\ufffd', 'ã').replace('N?o', 'Não')
                            return val_str
                return ''

            df_dts_clean = df_dts[
                df_dts.iloc[:, 0].notna() & 
                (~df_dts.iloc[:, 0].astype(str).str.startswith('Filtros'))
            ].copy()

            for _, r in df_dts_clean.iterrows():
                dt_raw = str(r.iloc[0]).strip().replace('.0', '')
                if not dt_raw or dt_raw.lower() == 'nan':
                    continue

                origem_val = get_col_val(r, 'origem') or 'N/I'
                destino_val = get_col_val(r, 'destino') or 'DISSOBEL/SOBRAL(CE)'
                transp_dts = get_col_val(r, 'transportadora')
                placa_val = get_col_val(r, 'placa').upper().replace('-', '')
                usuario_emb = get_col_val(r, 'embarcado', 'usu') or 'Não embarcado'
                if 'embarcado' in usuario_emb.lower() and ('n' in usuario_emb.lower()[:3] or 'ñ' in usuario_emb.lower()[:3]):
                    usuario_emb = 'Não embarcado'
                
                assoc_val = get_col_val(r, 'associa') or 'Indefinido'
                fonte_val = get_col_val(r, 'fonte') or 'Indefinido'
                
                chk_saida = get_col_val(r, 'checklist sa', 'saida', 'sada') or 'Não Aderente'
                if 'aderente' in chk_saida.lower() and ('n' in chk_saida.lower()[:3] or 'ñ' in chk_saida.lower()[:3]):
                    chk_saida = 'Não Aderente'

                chk_retorno = get_col_val(r, 'retorno') or 'Não Aderente'
                if 'aderente' in chk_retorno.lower() and ('n' in chk_retorno.lower()[:3] or 'ñ' in chk_retorno.lower()[:3]):
                    chk_retorno = 'Não Aderente'

                try:
                    paradas_20 = int(float(get_col_val(r, 'maiores que 20', '20min') or 0))
                except:
                    paradas_20 = 0

                try:
                    paradas_just = int(float(get_col_val(r, 'justificadas') or 0))
                except:
                    paradas_just = 0

                # Busca motorista e transportadora vinculados pela placa
                mot_match = motoristas_map.get(placa_val, {
                    "transportadora": "Dedicada / Não cadastrado",
                    "motorista": "Não vinculado"
                })

                is_aderente = 1 if assoc_val.strip().lower() == 'aderente' else 0

                dts_item = {
                    "dt": dt_raw,
                    "origem": origem_val,
                    "destino": destino_val,
                    "transportadora_dts": transp_dts,
                    "transportadora": mot_match["transportadora"],
                    "motorista": mot_match["motorista"],
                    "placa_cavalo": placa_val,
                    "usuario_embarcado": usuario_emb,
                    "associacao": assoc_val,
                    "is_aderente": is_aderente,
                    "fonte_associacao": fonte_val,
                    "checklist_saida": chk_saida,
                    "paradas_maiores_20min": paradas_20,
                    "paradas_justificadas": paradas_just,
                    "checklist_retorno": chk_retorno
                }

                dts_dict[dt_raw] = dts_item
                dts_records.append(dts_item)
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

        chk_raw = r.get('Check-in Antecipado', None)
        if pd.isna(chk_raw) or chk_raw == '':
            checkin_antecipado_val = 0
        elif isinstance(chk_raw, (int, float)):
            checkin_antecipado_val = 1 if float(chk_raw) >= 0.5 else 0
        else:
            chk_txt = str(chk_raw).strip().lower()
            has_negative = any(neg in chk_txt for neg in ['nao', 'não', 'sem', 'fora', 'atrasado', '0'])
            checkin_antecipado_val = 1 if (not has_negative and (chk_txt in ['1', '1.0', 'sim', 'ok', 'conforme', 'true'] or 'conforme' in chk_txt or chk_txt == 'ok')) else 0

        checkin_realizado_val = 1 if r.get('Check-in realizado') == 1.0 else 0
        pct_checkin_val = float(r.get('% Check-in', 0.0) or 0.0)

        esp_raw = r.get('Espelhamento', '')
        if pd.isna(esp_raw) or esp_raw == '':
            is_espelhado = 0
            espelhamento_str = "Nao Espelhado"
        elif isinstance(esp_raw, (int, float)):
            is_espelhado = 1 if float(esp_raw) >= 0.5 else 0
            espelhamento_str = "Espelhado" if is_espelhado else "Nao Espelhado"
        else:
            esp_txt = str(esp_raw).strip().lower()
            has_negative = any(neg in esp_txt for neg in ['nao', 'não', 'sem', 'fora', '0', 'desconectado', 'inativo'])
            is_espelhado = 1 if (not has_negative and (esp_txt in ['espelhado', 'ok', 'sim', 'conforme', '1', '1.0'] or ('espelhado' in esp_txt and not has_negative))) else 0
            espelhamento_str = str(esp_raw).strip()
        
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
        "dts_records": dts_records,
        "metas": {
            "agendamento": 0.90,
            "checkin_1h": 0.70,
            "espelhamento": 0.95
        }
    }

    out_file = os.path.join(base_dir, 'data.json')
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    # Atualiza também INITIAL_DATA dentro do terminal.html e index.html para garantir consistência offline
    json_compact = json.dumps(result, ensure_ascii=False)
    for html_name in ['index.html', 'terminal.html']:
        html_path = os.path.join(base_dir, html_name)
        if os.path.exists(html_path):
            try:
                with open(html_path, 'r', encoding='utf-8') as tf:
                    content = tf.read()
                import re
                match = re.search(r'const INITIAL_DATA = \{.*?\};', content, flags=re.DOTALL)
                if match:
                    content = content[:match.start()] + f'const INITIAL_DATA = {json_compact};' + content[match.end():]
                    with open(html_path, 'w', encoding='utf-8') as tf:
                        tf.write(content)
                    print(f"Updated INITIAL_DATA in {html_name}")
            except Exception as err:
                print(f"Notice: could not auto-update INITIAL_DATA in {html_name}:", err)

    print(f"Data successfully processed! Generated {len(viagens)} trips in {out_file}")
    print(f"Agendamento: {ag_data.get('pct_agendado', 0):.2%}")
    checkin_1h_pct = sum(v['checkin_antecipado'] for v in viagens) / len(viagens) if viagens else 0
    esp_pct = sum(v['is_espelhado'] for v in viagens) / len(viagens) if viagens else 0
    print(f"Check-in > 1h: {checkin_1h_pct:.2%}")
    print(f"Espelhamento: {esp_pct:.2%}")

if __name__ == '__main__':
    process_data()
