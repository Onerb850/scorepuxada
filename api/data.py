from http.server import BaseHTTPRequestHandler
import json
import os
import sys

# Adiciona o diretório raiz ao path para importar sync_gdrive
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import sync_gdrive

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            # Tenta buscar os dados mais recentes direto do Google Drive
            data = sync_gdrive.process_gdrive_data()
            response_json = json.dumps(data, ensure_ascii=False)
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.end_headers()
            self.wfile.write(response_json.encode('utf-8'))
        except Exception as e:
            # Fallback gracioso para data.json local
            try:
                base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
                json_path = os.path.join(base_dir, 'data.json')
                with open(json_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                data['notice'] = f'Fallback local utilizado devido a: {str(e)}'
                response_json = json.dumps(data, ensure_ascii=False)
                self.send_response(200)
                self.send_header('Content-type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
                self.end_headers()
                self.wfile.write(response_json.encode('utf-8'))
            except Exception as inner_err:
                self.send_response(500)
                self.send_header('Content-type', 'application/json; charset=utf-8')
                self.end_headers()
                err_resp = json.dumps({"error": str(e), "inner_error": str(inner_err)})
                self.wfile.write(err_resp.encode('utf-8'))
