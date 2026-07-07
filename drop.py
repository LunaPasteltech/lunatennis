#!/usr/bin/env python3
"""Tiny local drop-box: open http://localhost:8899 and drag photos in.
Files are saved to ~/Downloads/luna-drop/."""
import http.server, socketserver, os, re, email, io

PORT = 8899
DEST = os.path.expanduser('~/Downloads/luna-drop')
os.makedirs(DEST, exist_ok=True)

PAGE = """<!doctype html><meta charset="utf-8">
<title>Drop для Luna</title>
<style>
body{font-family:-apple-system,Helvetica,sans-serif;background:#FBF8F1;color:#2B2823;
display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0}
.card{text-align:center;max-width:480px;padding:40px}
h1{font-weight:500;font-size:26px}
#z{margin-top:24px;border:2px dashed #B5613A;border-radius:12px;padding:70px 30px;
font-size:17px;color:#5A554C;transition:.2s;cursor:pointer}
#z.over{background:#F4EDDE;border-color:#5E6347}
#ok{margin-top:18px;color:#5E6347;font-size:15px;white-space:pre-line}
input{display:none}
</style>
<div class="card">
<h1>Перетащи сюда фото 🎾</h1>
<div id="z">Перетащи файл(ы) сюда<br>или кликни, чтобы выбрать</div>
<div id="ok"></div>
<input type="file" id="f" multiple accept="image/*,video/*">
</div>
<script>
const z=document.getElementById('z'),f=document.getElementById('f'),ok=document.getElementById('ok');
z.onclick=()=>f.click();
z.ondragover=e=>{e.preventDefault();z.classList.add('over')};
z.ondragleave=()=>z.classList.remove('over');
z.ondrop=e=>{e.preventDefault();z.classList.remove('over');send(e.dataTransfer.files)};
f.onchange=()=>send(f.files);
async function send(files){
  for(const file of files){
    const fd=new FormData();fd.append('file',file);
    const r=await fetch('/up',{method:'POST',body:fd});
    ok.textContent+=(r.ok?'✓ ':'✗ ')+file.name+'\\n';
  }
  ok.textContent+='Готово! Скажи Клоду «забирай».';
}
</script>"""

class H(http.server.BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def do_GET(self):
        self.send_response(200); self.send_header('Content-Type','text/html; charset=utf-8'); self.end_headers()
        self.wfile.write(PAGE.encode())
    def do_POST(self):
        ln = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(ln)
        ctype = self.headers.get('Content-Type', '')
        m = re.search(r'boundary=(.+)', ctype)
        saved = False
        if m:
            msg = email.message_from_bytes(b'Content-Type: ' + ctype.encode() + b'\r\n\r\n' + body)
            for part in msg.walk():
                fn = part.get_filename()
                if fn:
                    data = part.get_payload(decode=True)
                    safe = os.path.basename(fn)
                    with open(os.path.join(DEST, safe), 'wb') as fh: fh.write(data)
                    saved = True
        self.send_response(200 if saved else 400); self.end_headers()
        self.wfile.write(b'ok' if saved else b'no file')

with socketserver.TCPServer(('127.0.0.1', PORT), H) as httpd:
    print(f'drop-box on http://localhost:{PORT} -> {DEST}')
    httpd.serve_forever()
