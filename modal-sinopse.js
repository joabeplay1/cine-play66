// ===================================================
// ARQUIVO: modal-sinopse.js
// ONDE COLAR: crie um arquivo novo chamado modal-sinopse.js
// ou cole no final do seu arquivo JavaScript principal
// ===================================================

// ---------------------------------------------------
// FUNÇÃO 1: Abrir o modal com sinopse do vídeo
// ---------------------------------------------------
function openDetailModal(videoData) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'detail-modal';

  overlay.innerHTML = `
    <div class="modal-box">

      <div class="modal-cover">
        ${videoData.thumbnail
          ? `<img src="${videoData.thumbnail}" alt="${videoData.title}" />`
          : `<div style="width:100%;height:100%;background:#1a1a1a;display:flex;align-items:center;justify-content:center;font-size:3rem;">🎬</div>`
        }
        <div class="modal-cover-gradient"></div>
        <button class="modal-close-btn" onclick="closeDetailModal()">✕</button>
        ${videoData.category
          ? `<span style="position:absolute;top:10px;left:10px;background:rgba(0,0,0,0.6);color:#fff;font-size:11px;padding:4px 10px;border-radius:6px;">${videoData.category}</span>`
          : ''
        }
      </div>

      <div class="modal-body">
        <h2 class="modal-title">${videoData.title}</h2>
        <div class="modal-meta">
          ${videoData.year     ? `<span class="modal-tag">📅 ${videoData.year}</span>`     : ''}
          ${videoData.duration ? `<span class="modal-tag">⏱ ${videoData.duration}</span>` : ''}
          ${videoData.rating   ? `<span class="modal-tag">⭐ ${videoData.rating}</span>`   : ''}
        </div>
        ${videoData.description
          ? `<p class="modal-description">${videoData.description}</p>`
          : ''
        }
      </div>

      <div class="modal-footer">
        <button class="btn-watch" onclick="watchVideo('${videoData.videoUrl}'); closeDetailModal();">
          ▶ Assistir
        </button>
        <button class="btn-fav ${videoData.isFavorite ? 'active' : ''}"
          onclick="toggleFavorite('${videoData.id}', this)">
          ♥
        </button>
      </div>
    </div>
  `;

  // Clicou fora do modal → fecha
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeDetailModal();
  });

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

// ---------------------------------------------------
// FUNÇÃO 2: Fechar o modal com animação de saída
// ---------------------------------------------------
function closeDetailModal() {
  const modal = document.getElementById('detail-modal');
  if (!modal) return;
  modal.style.opacity = '0';
  modal.style.transition = 'opacity 0.2s';
  setTimeout(() => {
    modal.remove();
    document.body.style.overflow = '';
  }, 200);
}

// ---------------------------------------------------
// FUNÇÃO 3: Animação de transição ao entrar no vídeo
// ---------------------------------------------------
function watchVideo(videoUrl) {
  const transition = document.createElement('div');
  transition.style.cssText = `
    position: fixed;
    inset: 0;
    background: black;
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  `;
  document.body.appendChild(transition);

  requestAnimationFrame(() => {
    transition.style.opacity = '1';
    setTimeout(() => {
      window.location.href = videoUrl; // vai para a página do vídeo
    }, 400);
  });
}

// ---------------------------------------------------
// FUNÇÃO 4: Ativar o modal em todos os cards
// Chame essa função depois que os cards forem criados
// ---------------------------------------------------
function ativarModalNosCards() {
  document.querySelectorAll('.video-card').forEach((card, i) => {
    // animação em cascata
    card.style.animationDelay = (i * 0.05) + 's';

    card.addEventListener('click', () => {
      openDetailModal({
        id:          card.dataset.id,
        title:       card.dataset.title,
        description: card.dataset.description,
        thumbnail:   card.dataset.thumbnail,
        videoUrl:    card.dataset.url,
        year:        card.dataset.year,
        duration:    card.dataset.duration,
        rating:      card.dataset.rating,
        category:    card.dataset.category,
        isFavorite:  card.dataset.favorite === 'true'
      });
    });
  });
}

// Chama automaticamente quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', ativarModalNosCards);