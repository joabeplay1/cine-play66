// CONFIGURAÇÕES INICIAIS
const SENHA_ACESSO = 'cineplay123';
let bancoDeDados = JSON.parse(localStorage.getItem('cineplay_v3')) || [];
let abaSelecionada = 'youtube';

// SISTEMA DE LOGIN
function iniciarApp() {
    if (sessionStorage.getItem('logado') === 'true') {
        exibirHome();
    } else {
        exibirLogin();
    }
}

function exibirLogin() {
    document.getElementById('app').innerHTML = `
        <div class="login-page">
            <div class="login-box">
                <div class="login-logo">🎬</div>
                <h1 class="login-title">Cine Play</h1>
                <p style="color:gray; margin-bottom:20px; font-size:14px;">Acesso Restrito</p>
                <input type="password" id="senhaInput" class="login-input" placeholder="Digite a senha">
                <button class="login-btn" onclick="validarSenha()">Entrar</button>
            </div>
        </div>`;
}

function validarSenha() {
    const senha = document.getElementById('senhaInput').value;
    if (senha === SENHA_ACESSO) {
        sessionStorage.setItem('logado', 'true');
        exibirHome();
    } else {
        alert('Senha incorreta, Joabe!');
    }
}

// PÁGINA INICIAL
function exibirHome() {
    document.getElementById('app').innerHTML = `
        <nav class="navbar">
            <div class="nav-content">
                <a href="#" class="logo" onclick="exibirHome()"><div class="logo-icon">🎬</div> Cine Play</a>
                <button class="btn-add" onclick="abrirModal()">+ Adicionar</button>
            </div>
        </nav>
        <div class="main">
            <div id="gradeConteudo" class="grid"></div>
        </div>
        
        <div id="modalAdd" class="modal-bg hidden">
            <div class="modal">
                <h2 style="margin-bottom:20px; font-family:Space Grotesk;">Adicionar Novo</h2>
                <div class="tabs">
                    <button id="btnYt" class="tab-btn active" onclick="trocarAba('youtube')">YouTube</button>
                    <button id="btnWeb" class="tab-btn" onclick="trocarAba('website')">Web Site</button>
                    <button id="btnDrive" class="tab-btn" onclick="trocarAba('google_drive')">Drive</button>
                </div>
                <input id="inputTitulo" class="form-input" placeholder="Título do Filme ou Site">
                <input id="inputUrl" class="form-input" placeholder="Cole o link (URL) aqui">
                <input id="inputCapa" class="form-input" placeholder="Link da Imagem de Capa (Opcional)">
                <button class="login-btn" onclick="salvarNovoConteudo()">Salvar na Minha Lista</button>
                <button onclick="fecharModal()" style="background:none; color:gray; width:100%; margin-top:15px; border:none; cursor:pointer; font-weight:600;">Fechar</button>
            </div>
        </div>`;
    atualizarGrade();
}

// LÓGICA DA GRADE (GRID)
function atualizarGrade() {
    const grade = document.getElementById('gradeConteudo');
    if (bancoDeDados.length === 0) {
        grade.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:50px; color:gray;">Nenhum conteúdo adicionado.</div>`;
        return;
    }

    grade.innerHTML = bancoDeDados.map((item, index) => `
        <div class="card" onclick="abrirPlayer(${index})">
            <div class="card-thumb">
                <img src="${item.capa || 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800'}">
                <span class="source-tag">${item.tipo.toUpperCase()}</span>
            </div>
            <div class="card-body">
                <div class="card-title">${item.titulo}</div>
            </div>
        </div>`).join('');
}

// LÓGICA DO MODAL
function abrirModal() { document.getElementById('modalAdd').classList.remove('hidden'); }
function fecharModal() { document.getElementById('modalAdd').classList.add('hidden'); }

function trocarAba(tipo) {
    abaSelecionada = tipo;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if(tipo === 'youtube') document.getElementById('btnYt').classList.add('active');
    if(tipo === 'website') document.getElementById('btnWeb').classList.add('active');
    if(tipo === 'google_drive') document.getElementById('btnDrive').classList.add('active');
}

function salvarNovoConteudo() {
    const titulo = document.getElementById('inputTitulo').value;
    const url = document.getElementById('inputUrl').value;
    const capa = document.getElementById('inputCapa').value;

    if (!titulo || !url) { alert('Preencha os campos obrigatórios!'); return; }

    bancoDeDados.unshift({ titulo, url, capa, tipo: abaSelecionada });
    localStorage.setItem('cineplay_v3', JSON.stringify(bancoDeDados));
    
    fecharModal();
    atualizarGrade();
}

// LÓGICA DO PLAYER (ABRE FILMES OU SITES)
function abrirPlayer(index) {
    const item = bancoDeDados[index];
    let codigoPlayer = '';

    if (item.tipo === 'youtube') {
        const videoId = extrairIdYoutube(item.url);
        codigoPlayer = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allowfullscreen allow="autoplay"></iframe>`;
    } 
    else if (item.tipo === 'google_drive') {
        const driveId = item.url.match(/\/d\/([a-zA-Z0-9_-]+)/)[1];
        codigoPlayer = `<iframe src="https://drive.google.com/file/d/${driveId}/preview" allowfullscreen></iframe>`;
    } 
    else {
        // Lógica para Website: Carrega o site dentro do player
        codigoPlayer = `<iframe src="${item.url}" style="width:100%; height:100%;" allowfullscreen></iframe>`;
    }

    document.getElementById('app').innerHTML = `
        <nav class="navbar"><div class="nav-content"><a href="#" class="logo" onclick="exibirHome()"><div class="logo-icon">🎬</div> Cine Play</a></div></nav>
        <div class="main">
            <div class="player-container">
                <div class="back-bar">
                    <button class="back-btn" onclick="exibirHome()">← Voltar para Galeria</button>
                </div>
                <div class="player-wrap">${codigoPlayer}</div>
                <h1 style="margin-top:25px; font-family:Space Grotesk;">${item.titulo}</h1>
                <p style="color:gray; margin-top:10px;">Fonte: ${item.tipo.toUpperCase()}</p>
            </div>
        </div>`;
}

function extrairIdYoutube(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// DISPARAR APP
iniciarApp();
