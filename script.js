function renderHero() {
  const w = document.getElementById('heroWrap');
  if (!w || !videos.length) return;
  
  // Pega o primeiro vídeo da sua lista (que tem o link direto)
  const v = videos[0]; 

  w.innerHTML = `
    <div class="hero">
      <video src="${v.video_url}" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-label">⭐ Em destaque</div>
        <h2 class="hero-title">${v.title}</h2>
        ${v.description ? '<p style="margin-top:8px;font-size:14px;opacity:.75;max-width:500px">'+v.description.substring(0,120)+'...</p>' : ''}
      </div>
    </div>`;
}
