    // =============================================
    // CenaPlay - App de Filmes e Vídeos
    // Gerado automaticamente
    // =============================================

    let videos = [
  {
    "id": "69c40ede21f4617f8ba53059",
    "title": "Interestelar",
    "description": "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço em busca de um novo lar para a humanidade.",
    "category": "filme",
    "source": "youtube",
    "video_url": "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    "thumbnail_url": "",
    "year": "2014",
    "duration": "2h 49min",
    "rating": 8.7,
    "is_favorite": true
  },
  {
    "id": "69c40ede21f4617f8ba5305a",
    "title": "Planeta Terra II",
    "description": "Documentário da BBC que explora a beleza natural e selvagem do nosso planeta com tecnologia de câmeras de última geração.",
    "category": "documentario",
    "source": "youtube",
    "video_url": "https://www.youtube.com/watch?v=c8aFcHFu8QM",
    "thumbnail_url": "",
    "year": "2016",
    "duration": "50min",
    "rating": 9.5,
    "is_favorite": false
  },
  {
    "id": "69c40ede21f4617f8ba5305b",
    "title": "Spirited Away",
    "description": "Durante a mudança de sua família, Chihiro entra em um mundo governado por deuses, bruxas e espíritos.",
    "category": "animacao",
    "source": "youtube",
    "video_url": "https://www.youtube.com/watch?v=ByXuk9QqQkk",
    "thumbnail_url": "",
    "year": "2001",
    "duration": "2h 05min",
    "rating": 8.6,
    "is_favorite": true
  },
  {
    "id": "69c40ede21f4617f8ba5305c",
    "title": "Lofi Hip Hop Radio",
    "description": "Rádio de música lo-fi para relaxar e estudar. Transmissão ao vivo 24/7.",
    "category": "musica",
    "source": "youtube",
    "video_url": "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    "thumbnail_url": "",
    "year": "2024",
    "duration": "Ao vivo",
    "rating": 8,
    "is_favorite": false
  },
  {
    "id": "69c40ede21f4617f8ba5305d",
    "title": "Breaking Bad - Trailer",
    "description": "Um professor de química do ensino médio diagnosticado com câncer de pulmão começa a fabricar metanfetamina.",
    "category": "serie",
    "source": "youtube",
    "video_url": "https://www.youtube.com/watch?v=HhesaQXLuRY",
    "thumbnail_url": "",
    "year": "2008",
    "duration": "5 temporadas",
    "rating": 9.5,
    "is_favorite": true
  }
];
    let currentCategory = 'all';
    let currentSearch = '';
    let nextId = videos.length + 1;

    // ---- Utilitários ----

    function getThumbnail(video) {
      if (video.thumbnail_url) return video.thumbnail_url;
      if (video.source === 'youtube') {
        const match = video.video_url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/);
        if (match) return 'https://img.youtube.com/vi/' + match[1] + '/hqdefault.jpg';
      }
      return 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80';
    }

    function getYouTubeId(url) {
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/);
      return match ? match[1] : null;
    }

    function getDriveFileId(url) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      return match ? match[1] : null;
    }

    function catLabel(cat) {
      return { filme: 'Filme', serie: 'Série', documentario: 'Documentário', animacao: 'Animação', musica: 'Música', outro: 'Outro' }[cat] || cat;
    }

    function sourceName(src) {
      return src === 'youtube' ? 'YouTube' : src === 'google_drive' ? 'Drive' : 'URL';
    }

    // ---- Render Home ----

    function renderHome() {
      const app = document.getElementById('app');
      app.innerHTML = `
        <nav class="navbar">
          <button class="logo" onclick="renderHome()">
            <div class="logo-icon">🎬</div>
            <span class="logo-text">CenaPlay</span>
          </button>
          <div class="search-wrap">
            <span class="search-icon">🔍</span>
            <input id="searchInput" type="text" placeholder="Buscar filmes e vídeos..."
              value="${currentSearch}" oninput="onSearch(this.value)" />
          </div>
          <button class="btn-add" onclick="openModal()">+ Adicionar</button>
        </nav>
        <div class="home-page" id="homePage">
          <div class="main">
            <div id="heroWrap"></div>
            <div class="categories" id="catFilter"></div>
            <div id="gridWrap"></div>
          </div>
        </div>
        <div class="modal-bg hidden" id="modalBg">
          <div class="modal">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <div class="modal-title">Adicionar Vídeo</div>
            <div class="tabs">
              <button class="tab-btn active" id="tabYt" onclick="selectTab('youtube')">▶ YouTube</button>
              <button class="tab-btn" id="tabDrive" onclick="selectTab('google_drive')">◆ Google Drive</button>
              <button class="tab-btn" id="tabUrl" onclick="selectTab('url_direta')">● URL Direta</button>
            </div>
            <div id="urlHint" class="form-group">
              <label class="form-label" id="urlLabel">Cole o link do YouTube</label>
              <input class="form-input" id="videoUrl" placeholder="https://www.youtube.com/watch?v=..." />
              <p class="hint" id="urlHintText"></p>
            </div>
            <div class="form-group">
              <label class="form-label">Título *</label>
              <input class="form-input" id="videoTitle" placeholder="Nome do filme ou vídeo" />
            </div>
            <div class="form-group">
              <label class="form-label">Descrição</label>
              <textarea class="form-input form-textarea" id="videoDesc" placeholder="Sinopse ou descrição..."></textarea>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Categoria</label>
                <select class="form-select" id="videoCat">
                  <option value="filme">Filme</option>
                  <option value="serie">Série</option>
                  <option value="documentario">Documentário</option>
                  <option value="animacao">Animação</option>
                  <option value="musica">Música</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Ano</label>
                <input class="form-input" id="videoYear" placeholder="2024" />
              </div>
              <div class="form-group">
                <label class="form-label">Duração</label>
                <input class="form-input" id="videoDur" placeholder="1h 30min" />
              </div>
              <div class="form-group">
                <label class="form-label">Nota (0-10)</label>
                <input class="form-input" id="videoRating" type="number" min="0" max="10" step="0.1" placeholder="8.5" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">URL da Capa (opcional)</label>
              <input class="form-input" id="videoThumb" placeholder="https://..." />
            </div>
            <button class="btn-save" onclick="saveVideo()">+ Adicionar Vídeo</button>
          </div>
        </div>
      `;
      renderHero();
      renderCategories();
      renderGrid();
    }

    // ---- Hero ----
    function renderHero() {
      const wrap = document.getElementById('heroWrap');
      const filtered = getFiltered();
      if (currentSearch || currentCategory !== 'all' || filtered.length === 0) { wrap.innerHTML = ''; return; }
      const v = filtered[0];
      wrap.innerHTML = `
        <div class="hero">
          <img src="${getThumbnail(v)}" alt="${v.title}" />
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-label">⭐ Em destaque</div>
            <h2 class="hero-title">${v.title}</h2>
            ${v.description ? '<p style="margin-top:8px;font-size:14px;opacity:0.75;max-width:500px">' + v.description.substring(0, 120) + '...</p>' : ''}
          </div>
        </div>
      `;
    }

    // ---- Categories ----
    function renderCategories() {
      const cats = [
        { key: 'all', label: '🎞 Todos' },
        { key: 'favoritos', label: '❤️ Favoritos' },
        { key: 'filme', label: '🎬 Filmes' },
        { key: 'serie', label: '📺 Séries' },
        { key: 'documentario', label: '📚 Docs' },
        { key: 'animacao', label: '✨ Animação' },
        { key: 'musica', label: '🎵 Música' },
      ];
      const el = document.getElementById('catFilter');
      el.innerHTML = cats.map(c => `
        <button class="cat-btn ${currentCategory === c.key ? 'active' : ''}" onclick="setCategory('${c.key}')">${c.label}</button>
      `).join('');
    }

    function setCategory(cat) {
      currentCategory = cat;
      renderHome();
    }

    function onSearch(val) {
      currentSearch = val;
      renderHero();
      renderGrid();
    }

    // ---- Grid ----
    function getFiltered() {
      return videos.filter(v => {
        const matchSearch = !currentSearch || v.title.toLowerCase().includes(currentSearch.toLowerCase());
        const matchCat = currentCategory === 'all' ||
          (currentCategory === 'favoritos' ? v.is_favorite : v.category === currentCategory);
        return matchSearch && matchCat;
      });
    }

    function renderGrid() {
      const wrap = document.getElementById('gridWrap');
      const filtered = getFiltered();
      if (!filtered.length) {
        wrap.innerHTML = '<div class="empty"><div class="empty-icon">🎬</div><p style="font-size:18px;font-weight:600">Nenhum vídeo encontrado</p><p style="margin-top:8px;font-size:14px">Adicione seus filmes e vídeos favoritos</p></div>';
        return;
      }
      wrap.innerHTML = '<div class="grid">' + filtered.map(v => `
        <div class="card" onclick="playVideo('${v.id}')">
          <div class="card-thumb">
            <img src="${getThumbnail(v)}" alt="${v.title}" loading="lazy" />
            <div class="card-overlay">
              <button class="play-btn">▶</button>
            </div>
            <span class="badge">${catLabel(v.category)}</span>
            <span class="source-badge">${sourceName(v.source)}</span>
          </div>
          <div class="card-body">
            <div class="card-title">${v.title}</div>
            <div class="card-meta">
              ${v.year ? '<span>' + v.year + '</span>' : ''}
              ${v.duration ? '<span>⏱ ' + v.duration + '</span>' : ''}
              ${v.rating ? '<span class="star">★ ' + v.rating + '</span>' : ''}
            </div>
          </div>
        </div>
      `).join('') + '</div>';
    }

    // ---- Player ----
    function playVideo(id) {
      const video = videos.find(v => v.id == id);
      if (!video) return;

      let playerHTML = '';
      if (video.source === 'youtube') {
        const ytId = getYouTubeId(video.video_url);
        playerHTML = ytId
          ? '<iframe src="https://www.youtube.com/embed/' + ytId + '?autoplay=1&rel=0" allowfullscreen allow="autoplay; encrypted-media"></iframe>'
          : '<p style="color:#888;padding:20px">URL do YouTube inválida</p>';
      } else if (video.source === 'google_drive') {
        const fileId = getDriveFileId(video.video_url);
        playerHTML = fileId
          ? '<iframe src="https://drive.google.com/file/d/' + fileId + '/preview" allow="autoplay" allowfullscreen></iframe>'
          : '<p style="color:#888;padding:20px">URL do Google Drive inválida</p>';
      } else {
        playerHTML = '<video src="' + video.video_url + '" controls autoplay style="width:100%;height:100%">Navegador não suporta vídeo.</video>';
      }

      document.getElementById('app').innerHTML = `
        <div class="topbar">
          <button class="back-btn" onclick="renderHome()">← Voltar</button>
        </div>
        <div class="player-main">
          <div class="player-wrap">${playerHTML}</div>
          <div class="player-info">
            <h1 class="player-title">${video.title}</h1>
            <div class="player-meta">
              <span class="pill">${catLabel(video.category)}</span>
              ${video.year ? '<span>📅 ' + video.year + '</span>' : ''}
              ${video.duration ? '<span>⏱ ' + video.duration + '</span>' : ''}
              ${video.rating ? '<span style="color:#f6c90e">★ ' + video.rating + '/10</span>' : ''}
            </div>
            ${video.description ? '<p class="player-desc">' + video.description + '</p>' : ''}
            <p style="margin-top:12px;font-size:12px;color:#555">Fonte: ${sourceName(video.source)}</p>
          </div>
        </div>
      `;
    }

    // ---- Modal ----
    let currentSource = 'youtube';

    function openModal() {
      document.getElementById('modalBg').classList.remove('hidden');
    }
    function closeModal() {
      document.getElementById('modalBg').classList.add('hidden');
    }
    function selectTab(src) {
      currentSource = src;
      ['youtube','google_drive','url_direta'].forEach(s => {
        document.getElementById('tab' + (s === 'youtube' ? 'Yt' : s === 'google_drive' ? 'Drive' : 'Url'))
          .classList.toggle('active', s === src);
      });
      const labels = {
        youtube: ['Cole o link do YouTube', 'https://www.youtube.com/watch?v=...', ''],
        google_drive: ['Cole o link do Google Drive', 'https://drive.google.com/file/d/...', 'Certifique-se que o arquivo está público'],
        url_direta: ['Cole a URL direta do vídeo', 'https://exemplo.com/video.mp4', '']
      };
      document.getElementById('urlLabel').textContent = labels[src][0];
      document.getElementById('videoUrl').placeholder = labels[src][1];
      document.getElementById('urlHintText').textContent = labels[src][2];
      document.getElementById('videoUrl').value = '';
    }

    function saveVideo() {
      const url = document.getElementById('videoUrl').value.trim();
      const title = document.getElementById('videoTitle').value.trim();
      if (!url || !title) { alert('Preencha o título e a URL do vídeo!'); return; }
      const rating = parseFloat(document.getElementById('videoRating').value) || 0;
      const video = {
        id: 'local_' + nextId++,
        title,
        description: document.getElementById('videoDesc').value.trim(),
        category: document.getElementById('videoCat').value,
        source: currentSource,
        video_url: url,
        thumbnail_url: document.getElementById('videoThumb').value.trim(),
        year: document.getElementById('videoYear').value.trim(),
        duration: document.getElementById('videoDur').value.trim(),
        rating,
        is_favorite: false
      };
      videos.unshift(video);
      closeModal();
      renderHome();
    }

    // Fechar modal ao clicar fora
    document.addEventListener('click', function(e) {
      const bg = document.getElementById('modalBg');
      if (bg && e.target === bg) closeModal();
    });

    // ---- Start ----
    renderHome();