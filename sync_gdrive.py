import os
import io
import json
import pandas as pd
import requests

# IDs dos arquivos no Google Drive
GDRIVE_FILES = {
    "agendamento": "192WucjsTnTu5iB5LNTkQqS9RGHlIZbZD",
    "espelhamento": "1KO8r6YmPMsksCrX3lM5zhXr2nRvf1nuf",
    "motoristas": "13Qs0yl8V6OukgJ2qHMwMZkMmbZqCQZHD"
}

def download_drive_file(file_id, is_xlsx=True):
    """Baixa arquivo público do Google Drive em memória"""
    urls_to_try = [
        f"https://drive.google.com/uc?export=download&id={file_id}",
        f"https://docs.google.com/spreadsheets/d/{file_id}/export?format=xlsx" if is_xlsx else f"https://drive.google.com/uc?export=download&id={file_id}",
        f"https://drive.usercontent.google.com/download?id={file_id}&export=download"
    ]
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }
    
    for url in urls_to_try:
        try:
            resp = requests.get(url, headers=headers, timeout=15)
            if resp.status_code == 200 and len(resp.content) > 100:
                # Verifica se não é página HTML de login
                if b"<html" not in resp.content[:200].lower() or is_xlsx == False:
                    return io.BytesIO(resp.content)
        except Exception as e:
            continue
    raise Exception(f"Não foi possível baixar o arquivo {file_id} do Google Drive.")

def process_gdrive_data():
    """Baixa os 3 arquivos do Google Drive e gera o JSON unificado"""
    # 1. Download dos arquivos
    f_ag = download_drive_file(GDRIVE_FILES["agendamento"], is_xlsx=True)
    f_esp = download_drive_file(GDRIVE_FILES["espelhamento"], is_xlsx=True)
    f_mot = download_drive_file(GDRIVE_FILES["motoristas"], is_xlsx=False)

    # 2. Carregar Motoristas
    try:
        df_mot = pd.read_csv(f_mot, sep=';', encoding='latin1')
    except Exception:
        f_mot.seek(0)
        df_mot = pd.read_csv(f_mot, sep=';', encoding='utf-8')
    
    df_mot.columns = [c.strip() for c in df_mot.columns]
    
    # 3. Carregar Agendamento
    df_ag = pd.read_excel(f_ag)
    df_ag.columns = [str(c).strip() for c in df_ag.columns]
    
    row_ag = None
    for idx, r in df_ag.iterrows():
        txt = str(r.to_dict())
        if 'SOBRAL' in txt.upper() or 'DISSOBEL' in txt.upper():
            row_ag = r
            break
    if row_ag is None and len(df_ag) > 0:
        row_ag = df_ag.iloc[0]

    ag_data = {
        "grade_plan_carros": int(row_ag.get('Grade Plan Carros', 138)) if row_ag is not None else 138,
        "carros_carregados": int(row_ag.get('Carros Carregados', 138)) if row_ag is not None else 138,
        "carros_agendados": int(row_ag.get('Carros Agendados', 128)) if row_ag is not None else 128,
        "pct_agendado": float(row_ag.get('% Agendado', 0.9275)) if row_ag is not None else 0.9275
    }

    # 4. Carregar Espelhamento
    df_esp = pd.read_excel(f_esp)
    df_esp.columns = [str(c).strip() for c in df_esp.columns]

    placa_to_driver = {}
    for idx, r in df_mot.iterrows():
        m_nome = str(r.get('MOTORISTA', '')).strip()
        placas_str = str(r.get('PLACAS ATIVAS', ''))
        transp = str(r.get('TRANSPORTADORA', 'Dedicada')).strip()
        
        placas = [p.strip().replace('-', '').replace(' ', '').upper() for p in placas_str.replace('/', ',').replace(';', ',').split(',') if p.strip()]
        for p in placas:
            if len(p) >= 6:
                placa_to_driver[p] = {"motorista": m_nome, "transportadora": transp}

    viagens = []
    for idx, r in df_esp.iterrows():
        dt_val = str(r.get('DT / FO', '')).strip()
        placa_raw = str(r.get('Placa', '')).strip()
        p_clean = placa_raw.replace('-', '').replace(' ', '').upper()
        
        driver_info = placa_to_driver.get(p_clean, None)
        if driver_info:
            motorista = driver_info["motorista"]
            transportadora = driver_info["transportadora"]
        else:
            motorista = "Não cadastrado"
            transportadora = "A verificar"

        checkin_txt = str(r.get('Check-in Antecipado', '')).strip().lower()
        is_checkin = 1 if ('conforme' in checkin_txt or 'ok' in checkin_txt or 'sim' in checkin_txt or '1' in checkin_txt) else 0

        esp_txt = str(r.get('Espelhamento', '')).strip().lower()
        is_esp = 1 if ('conforme' in esp_txt or 'ok' in esp_txt or 'sim' in esp_txt or '1' in esp_txt) else 0

        data_carr = r.get('Data Carregamento', '')
        if pd.notna(data_carr):
            data_str = pd.to_datetime(data_carr).strftime('%Y-%m-%d')
        else:
            data_str = ''

        viagens.append({
            "id": idx + 1,
            "dt": dt_val,
            "placa": placa_raw if placa_raw else "S/ Placa",
            "motorista": motorista,
            "transportadora": transportadora,
            "checkin_antecipado": is_checkin,
            "is_espelhado": is_esp,
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

if __name__ == "__main__":
    try:
        data = process_gdrive_data()
        print(f"Sucesso! Processadas {len(data['viagens'])} viagens direto do Google Drive.")
    except Exception as e:
        print("Erro:", e)
