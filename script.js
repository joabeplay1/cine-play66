<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cine Play</title>
  <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
:root{
  --bg:#0a0a0a;--bg2:#111111;--bg3:#1a1a1a;--border:#222;
  --primary:#e53e3e;--primary-dark:#c53030;
  --text:#f0f0f0;--text-muted:#888;--radius:12px;
}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;}
::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:var(--bg2);}::-webkit-scrollbar-thumb{background:var(--bg3);border-radius:3px;}
.login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;}
.login-box{background:var(--bg2);border:1px solid var(--border);border-radius:20px;padding:40px;width:100%;max-width:400px;text-align:center;}
.login-logo{width:56px;height:56px;background:var(--primary);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 20px;}
.login-title{font-family:'Space Grotesk',sans-serif;font-size:26px;font-weight:700;margin-bottom:6px;}
.login-sub{color:var(--text-muted);font-size:14px;margin-bottom:28px;}
.login-input{width:100%;padding:12px 16px;background:var(--bg3);border:1px solid var(--border);border-radius:10px;color:var(--text);font-size:15px;outline:none;margin-bottom:12px;}
.login-input:focus{border-color:var(--primary);}
.login-btn{width:100%;padding:13px;background:var(--primary);color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s;margin-top:4px;}
.login-btn:hover{background:var(--primary-dark);}
.login-error{color:#f87171;font-size:13px;margin-top:10px;display:none;}
.logout-btn{background:var(--bg3);color:var(--text-muted);border:1px solid var(--border);padding:6px 14px;border-radius:999px;font-size:12px;cursor:pointer;transition:all .2s;}
.logout-btn:hover{color:var(--primary);border-color:var(--primary);}
.navbar{position:sticky;top:0;z-index:100;background:rgba(10,10,10,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
.logo{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--text);cursor:pointer;border:none;background:none;}
.logo-icon{width:36px;height:36px;background:var(--primary);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;}
.logo-text{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;}
.search-wrap{flex:1;max-width:420px;position:relative;}
.search-wrap input{width:100%;padding:8px 16px 8px 40px;background:var(--bg2);border:1px solid var(--border);border-radius:999px;color:var(--text);font-size:14px;outline:none;}
.search-wrap input:focus{border-color:var(--primary);}
.search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);opacity:.5;}
.navbar-actions{display:flex;gap:8px;}
.btn-add{background:var(--primary);color:#fff;border:none;padding:8px 18px;border-radius:999px;font-weight:600;font-size:14px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:background .2s;}
.btn-add:hover{background:var(--primary-dark);}
.btn-karaoke{background:var(--bg3);color:var(--text);border:1px solid var(--border);padding:8px 14px;border-radius:999px;font-weight:500;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .2s;}
.btn-karaoke:hover{border-color:var(--primary);color:var(--primary);}
.btn-chat{background:var(--bg3);color:var(--text);border:1px solid var(--border);padding:8px 14px;border-radius:999px;font-weight:500;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .2s;text-decoration:none;}
.btn-chat:hover{border-color:#4ade80;color:#4ade80;}
.main{max-width:1280px;margin:0 auto;padding:24px;}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;}
.card{background:var(--bg2);border-radius:var(--radius);border:1px solid var(--border);overflow:hidden;cursor:pointer;transition:border-color .2s,transform .2s;}
.card-thumb{position:relative;aspect-ratio:16/9;overflow:hidden;}
.card-body{padding:12px 14px;}.card-title{font-size:13px;font-weight:600;}
.tools-header{background:rgba(10,10,10,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 24px;height:64px;display:flex;align-items:center;gap:16px;}
.tool-textarea{width:100%;height:200px;background:var(--bg3);border:1px solid var(--border);border-radius:10px;color:var(--text);padding:12px;outline:none;resize:none;}
.btn-tool{padding:10px 20px;background:var(--primary);color:#fff;border:none;border-radius:8px;cursor:pointer;margin-top:10px;}
.tool-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.player-wrap{width:100%;aspect-ratio:16/9;background:#000;}
.player-wrap iframe{width:100%;height:100%;border:none;}
@media(max-width:600px){.tool-grid{grid-template-columns:1fr;}}
</style>
</head>
<body>
  <div id="app"></div>
  <script>
const ACCESS_PASSWORD = 'cineplay123';
const MINHA_CHAVE_IA = AIzaSyD16h0dRFmM5pzpCw78mnODpUSOX1tTRjQ

let videos = [
  { "id": "1", "title": "Mitsuki: Origem Misteriosa", "category": "animacao", "source": "google_drive", "video_url": "https://drive.google.com/file/d/1NfjWymfzeOriz_jcwKOzWmhS4XIAX-25/view", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/6dd6c17bd_Gemini_Generated_Image_s55xpas55xpas55x.png" },
  { "id": "2", "title": "Itachi vs Sasuke: Susano-o", "category": "animacao", "source": "google_drive", "video_url": "https://drive.google.com/file/d/1GM4VaZyZEbmx0wrJ6yTGV1TwICWToqYd/view", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/662fb6012_Gemini_Generated_Image_x980ugx980ugx980.png" },
  { "id": "3", "title": "Bom Samaritano - Anderson Freire", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/Y94NtSWj0Bc", "thumbnail_url": "" },
  { "id": "4", "title": "Velozes e Furiosos 10", "category": "filme", "source": "google_drive", "video_url": "https://drive.google.com/file/d/1DIT8TFazBzka0TZp1T6NfO-lkX6rnHYr/view", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/1a35508f5_Gemini_Generated_Image_tgsldytgsldytgsl.png" },
  { "id": "5", "title": "Me Atraiu - Gabriela Rocha", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/QTM8Tjqu1HQ", "thumbnail_url": "" }
  // Adicione mais vídeos aqui conforme desejar
];

let currentCategory = 'all';

function isLoggedIn() { return sessionStorage.getItem('cp_auth') === '1'; }
function renderLogin() {
  document.getElementById('app').innerHTML = `<div class="login-page"><div class="login-box"><div class="login-logo">🎬</div><div class="login-title">Cine Play</div><input class="login-input" type="password" id="loginPass" placeholder="Senha" /><button class="login-btn" onclick="doLogin()">Entrar</button><div class="login-error" id="loginError">Senha incorreta.</div></div></div>`;
}
function doLogin() { if (document.getElementById('loginPass').value === ACCESS_PASSWORD) { sessionStorage.setItem('cp_auth', '1'); renderHome(); } else { document.getElementById('loginError').style.display = 'block'; } }

function getYTId(url) { 
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/);
  return m ? m[1] : null; 
}
function getDriveId(url) {
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

function renderHome() {
  if (!isLoggedIn()) { renderLogin(); return; }
  document.getElementById('app').innerHTML = `
    <nav class="navbar"><div class="logo" onclick="renderHome()">🎬 Cine Play</div>
    <div class="navbar-actions">
      <button class="btn-karaoke" onclick="renderFerramentas()">🔧 Ferramentas</button>
      <button class="logout-btn" onclick="sessionStorage.clear();renderLogin()">Sair</button>
    </div></nav>
    <div class="main"><div class="grid" id="gridWrap"></div></div>`;
  renderGrid();
}

function renderGrid() {
  const f = videos;
  document.getElementById('gridWrap').innerHTML = f.map(v => `
    <div class="card" onclick="playVideo('${v.id}')">
      <div class="card-thumb"><img src="${v.thumbnail_url || 'https://via.placeholder.com/300x169/111/fff?text=CinePlay'}" style="width:100%"></div>
      <div class="card-body"><div class="card-title">${v.title}</div></div>
    </div>`).join('');
}

function playVideo(id) {
  const v = videos.find(x => x.id === id);
  let embed = '';
  if(v.source === 'youtube') embed = `<iframe src="https://www.youtube.com/embed/${getYTId(v.video_url)}?autoplay=1" allowfullscreen allow="autoplay"></iframe>`;
  else embed = `<iframe src="https://drive.google.com/file/d/${getDriveId(v.video_url)}/preview" allow="autoplay"></iframe>`;
  
  document.getElementById('app').innerHTML = `
    <div class="topbar"><button class="back-btn" onclick="renderHome()">← Voltar</button></div>
    <div class="player-main"><div class="player-wrap">${embed}</div><h1 style="padding:20px">${v.title}</h1></div>`;
}

function renderFerramentas() {
  document.getElementById('app').innerHTML = `
    <div class="tools-header"><button class="back-btn" onclick="renderHome()">← Voltar</button><h1>Ferramentas</h1></div>
    <div class="main">
      <div class="tool-grid">
        <div>
          <h3>Texto Original</h3>
          <textarea class="tool-textarea" id="corrInput" placeholder="Digite aqui..."></textarea>
          <button class="btn-tool" id="btnCorr" onclick="corrigirTexto()">✨ Corrigir com IA</button>
        </div>
        <div>
          <h3>Texto Corrigido</h3>
          <textarea class="tool-textarea" id="corrOutput" readonly></textarea>
        </div>
      </div>
    </div>`;
}

async function corrigirTexto() {
    const input = document.getElementById('corrInput').value;
    if(!input) return;
    const btn = document.getElementById('btnCorr');
    const out = document.getElementById('corrOutput');

    btn.disabled = true; btn.textContent = '⏳ Corrigindo...';
    out.value = 'Aguarde...';

    try {
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${MINHA_CHAVE_IA}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ contents: [{ parts: [{ text: "Corrija a gramática e ortografia deste texto em português. Retorne apenas o texto corrigido: " + input }] }] })
        });
        const data = await resp.json();
        out.value = data.candidates[0].content.parts[0].text;
    } catch(e) { out.value = 'Erro ao conectar com a IA.'; }
    btn.disabled = false; btn.textContent = '✨ Corrigir com IA';
}

renderLogin();
  </script>
</body>
</html>
