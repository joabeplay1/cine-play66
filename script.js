// ... (mantenha suas configurações de Firebase e Vídeos do arquivo anterior) ...

// FUNÇÃO PARA ABRIR/FECHAR O CHAT
window.toggleChat = function() {
  const sidebar = document.getElementById('chatSidebar');
  sidebar.classList.toggle('active');
}

// Atualize sua função renderHome para incluir o botão correto:
function renderHome() {
  if (!isLoggedIn()) { renderLogin(); return; }
  
  document.getElementById('app').innerHTML = `
    <nav class="navbar">
      <div class="logo">🎬 <span class="logo-text">Cine Play</span></div>
      <div class="navbar-actions">
        <button onclick="toggleChat()" class="btn-chat-toggle">💬 Bate-Papo</button>
        
        <button class="btn-karaoke">🎙 Karaokê</button>
        <button class="logout-btn" onclick="logout()">Sair</button>
      </div>
    </nav>
    <div class="main">
      <h2 style="margin-bottom:20px">Catálogo</h2>
      <div class="grid" id="grid"></div>
    </div>
  `;
  renderGrid();
}

// ... (Restante das suas funções renderGrid, getYTId, etc) ...

function logout() {
  sessionStorage.removeItem('cp_auth');
  renderLogin();
}

// Iniciar
if (isLoggedIn()) renderHome(); else renderLogin();
