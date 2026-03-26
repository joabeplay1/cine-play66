<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CenaPlay</title>
  <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

*{margin:0;padding:0;box-sizing:border-box;}
:root{
  --bg:#0a0a0a;--bg2:#111111;--bg3:#1a1a1a;--border:#222;
  --primary:#e53e3e;--primary-dark:#c53030;
  --text:#f0f0f0;--text-muted:#888;--radius:12px;
}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;}
::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:var(--bg2);}::-webkit-scrollbar-thumb{background:var(--bg3);border-radius:3px;}

/* NAVBAR */
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

/* MAIN */
.main{max-width:1280px;margin:0 auto;padding:24px;}

/* HERO */
.hero{position:relative;border-radius:var(--radius);overflow:hidden;height:280px;margin-bottom:24px;}
.hero img{width:100%;height:100%;object-fit:cover;}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(0,0,0,.85) 0%,rgba(0,0,0,.5) 50%,transparent 100%);}
.hero-content{position:absolute;bottom:0;left:0;padding:32px;}
.hero-label{font-size:11px;text-transform:uppercase;letter-spacing:2px;color:var(--primary);font-weight:700;}
.hero-title{font-family:'Space Grotesk',sans-serif;font-size:clamp(20px,4vw,36px);font-weight:700;margin-top:6px;}

/* CATEGORIES */
.categories{display:flex;gap:8px;overflow-x:auto;padding-bottom:8px;margin-bottom:16px;}
.categories::-webkit-scrollbar{height:0;}
.cat-btn{padding:7px 16px;border-radius:999px;border:none;font-size:13px;font-weight:500;cursor:pointer;transition:all .2s;white-space:nowrap;display:flex;align-items:center;gap:6px;}
.cat-btn.active{background:var(--primary);color:#fff;box-shadow:0 4px 16px rgba(229,62,62,.3);}
.cat-btn:not(.active){background:var(--bg2);color:var(--text-muted);}
.cat-btn:not(.active):hover{color:var(--text);background:var(--bg3);}
.anime-subs{display:flex;gap:6px;padding:0 0 12px 12px;flex-wrap:wrap;}
.anime-sub-btn{padding:5px 14px;border-radius:999px;border:none;font-size:12px;font-weight:500;cursor:pointer;transition:all .2s;}
.anime-sub-btn.active{background:rgba(229,62,62,.8);color:#fff;}
.anime-sub-btn:not(.active){background:var(--bg3);color:var(--text-muted);}
.anime-sub-btn:not(.active):hover{color:var(--text);}

/* GRID */
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;}
.card{background:var(--bg2);border-radius:var(--radius);border:1px solid var(--border);overflow:hidden;cursor:pointer;transition:border-color .2s,transform .2s;}
.card:hover{border-color:rgba(229,62,62,.4);transform:translateY(-2px);}
.card-thumb{position:relative;aspect-ratio:16/9;overflow:hidden;}
.card-thumb img{width:100%;height:100%;object-fit:cover;transition:transform .4s;}
.card:hover .card-thumb img{transform:scale(1.08);}
.card-overlay{position:absolute;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s;}
.card:hover .card-overlay{opacity:1;}
.play-btn{width:52px;height:52px;border-radius:50%;background:rgba(229,62,62,.9);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;}
.badge{position:absolute;top:10px;left:10px;background:rgba(0,0,0,.7);color:#fff;font-size:10px;padding:3px 8px;border-radius:6px;}
.source-badge{position:absolute;top:10px;right:10px;background:rgba(0,0,0,.7);color:#fff;font-size:10px;padding:3px 8px;border-radius:6px;}
.card-body{padding:12px 14px;}
.card-title{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:13px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.card-meta{display:flex;gap:10px;margin-top:6px;font-size:11px;color:var(--text-muted);align-items:center;}
.star{color:#f6c90e;}

/* EMPTY */
.empty{text-align:center;padding:80px 20px;color:var(--text-muted);}

/* MODAL */
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:200;padding:20px;}
.modal-bg.hidden{display:none;}
.modal{background:var(--bg2);border:1px solid var(--border);border-radius:16px;width:100%;max-width:520px;padding:28px;max-height:90vh;overflow-y:auto;}
.modal-title{font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:700;margin-bottom:20px;}
.tabs{display:flex;gap:4px;background:var(--bg3);padding:4px;border-radius:10px;margin-bottom:20px;}
.tab-btn{flex:1;padding:8px;background:none;border:none;color:var(--text-muted);border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;transition:all .2s;}
.tab-btn.active{background:var(--primary);color:#fff;}
.form-group{margin-bottom:14px;}
.form-label{display:block;font-size:12px;color:var(--text-muted);margin-bottom:6px;}
.form-input{width:100%;padding:10px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;outline:none;}
.form-input:focus{border-color:var(--primary);}
.form-textarea{resize:none;height:80px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.form-select{width:100%;padding:10px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;outline:none;}
.btn-save{width:100%;padding:12px;background:var(--primary);color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;transition:background .2s;margin-top:8px;}
.btn-save:hover{background:var(--primary-dark);}
.modal-close{float:right;background:none;border:none;color:var(--text-muted);font-size:22px;cursor:pointer;margin-top:-4px;}
.thumb-upload{border:2px dashed var(--border);border-radius:10px;padding:20px;text-align:center;cursor:pointer;transition:all .2s;}
.thumb-upload:hover{border-color:var(--primary);background:rgba(229,62,62,.05);}
.thumb-preview{position:relative;border-radius:10px;overflow:hidden;aspect-ratio:16/9;}
.thumb-preview img{width:100%;height:100%;object-fit:cover;}
.thumb-clear{position:absolute;top:6px;right:6px;background:rgba(0,0,0,.7);border:none;border-radius:50%;width:26px;height:26px;color:#fff;cursor:pointer;font-size:16px;}

/* PLAYER */
.topbar{background:rgba(10,10,10,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 24px;height:52px;display:flex;align-items:center;}
.back-btn{background:none;border:none;color:var(--text-muted);font-size:14px;cursor:pointer;display:flex;align-items:center;gap:8px;transition:color .2s;}
.back-btn:hover{color:var(--text);}
.player-main{max-width:1100px;margin:0 auto;padding:24px;}
.player-wrap{position:relative;width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#000;box-shadow:0 25px 60px rgba(0,0,0,.6);}
.player-wrap iframe,.player-wrap video{width:100%;height:100%;border:none;}
.player-info{margin-top:24px;}
.player-title{font-family:'Space Grotesk',sans-serif;font-size:clamp(18px,3vw,28px);font-weight:700;}
.player-meta{display:flex;flex-wrap:wrap;gap:12px;margin-top:10px;font-size:13px;color:var(--text-muted);align-items:center;}
.player-desc{margin-top:16px;color:var(--text-muted);line-height:1.7;max-width:800px;}
.pill{background:var(--bg3);padding:3px 12px;border-radius:999px;font-size:12px;}

/* KARAOKE PAGE */
.karaoke-header{background:rgba(10,10,10,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 24px;height:64px;display:flex;align-items:center;gap:16px;position:sticky;top:0;z-index:100;}
.karaoke-title{display:flex;align-items:center;gap:10px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;}
.karaoke-icon{background:rgba(229,62,62,.2);border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;}
.karaoke-search-wrap{flex:1;max-width:500px;position:relative;}
.karaoke-search-wrap input{width:100%;padding:8px 16px 8px 40px;background:var(--bg2);border:1px solid var(--border);border-radius:999px;color:var(--text);font-size:14px;outline:none;}
.karaoke-search-wrap input:focus{border-color:var(--primary);}

@media(max-width:600px){
  .grid{grid-template-columns:repeat(2,1fr);}
  .hero{height:180px;}
  .logo-text{display:none;}
  .form-row{grid-template-columns:1fr;}
  .karaoke-header{gap:8px;}
}</style>
</head>
<body>
  <div id="app"></div>
  <script>// CenaPlay — Gerado automaticamente
let videos = [
  {
    "id": "69c5579c214cb829970d53f8",
    "title": "SE BEBER NAO CASE 3 KKKKKKKK",
    "description": "IRA MORRER DE RIR",
    "category": "comedia",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1mGim8GitvsKo7r2k_bO3-ziXsD-eCSs9/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c55658c9af337ccfe9972f",
    "title": "VELOZES E FURIOSOS EM ESPANHOL",
    "description": "",
    "category": "comedia",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/14YDwXv3kqaF9ipiq4a-lp1_9gXMlXEfy/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c555f755d123e4f47baf50",
    "title": "MADARA RINDO KKKKKKKKKKKKKKKKKKK",
    "description": "",
    "category": "animacao",
    "anime_subcategory": "naruto_shippuden",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/10jECUzhgdp0pMcoEAGfKFUH8xDTYGziJ/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c55267d9f959ddb246a932",
    "title": "ALOK COPACABANA 2026",
    "description": "",
    "category": "musica_ao_vivo",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1BmudgnWJShrQifYmwl-2qBlZqM01oeAS/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c551f77323776ca816f0cd",
    "title": "LEDY GAGA",
    "description": "",
    "category": "musica_ao_vivo",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1DwRlCYh9rrWiLTYWSqERNOmxJAsfjUDo/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c5515593ee76951fc75e14",
    "title": "MITSUKI DESPRTA O MODO SABIO ",
    "description": "",
    "category": "animacao",
    "anime_subcategory": "naruto_shippuden",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/15qVjhEiH-AO6U7Gt6e0rqf2bQKgvzCK2/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c550e773a926407e96bb95",
    "title": "NARUTO SE EMCONTRA COM SASKE",
    "description": "",
    "category": "animacao",
    "anime_subcategory": "naruto_shippuden",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1EsRzJ_dnrfbdLzOcu8h0NOKqDpgqNYE3/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c54ff275ca367ee9a30c74",
    "title": "DANZOU VS SASKE",
    "description": "",
    "category": "animacao",
    "anime_subcategory": "naruto_shippuden",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1FF4SWDWrw9XtmsLmlRVrHfJ_2dE_oQHC/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c54f8a1b06f7ba08533e77",
    "title": "CINE PLAY",
    "description": "",
    "category": "outro",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1QDt5mJ49dtv7sX833nPQN1IGR8xHBSLJ/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c54f60f387655140e453af",
    "title": "CINE PLAY ",
    "description": "",
    "category": "outro",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1YZeE-UG_-1HKTzG8ptwdzMSbsZLeRXwP/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c54eeb5130079d05167d5b",
    "title": "JOABE PLAY PL SINISTRO KKKKKKKKKKKKKKKK",
    "description": "",
    "category": "filme",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1a6JNQDhN5uKCdGl0DuwfLSngkgLOcR12/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c54ea7465e95012f686879",
    "title": "PL SINISTRO KKKKKKKKKK",
    "description": "",
    "category": "videos_engracados",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1GhtcgwZaJkEWpXx_MnxjhhMBun_jgDGA/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c54d9f3c8f93b816997ac6",
    "title": "TIO Chucky de Chuchu: Um nome que tira toda a pose de mau dele",
    "description": "",
    "category": "videos_engracados",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/14DyAnKhiiQuBvoxNZK0G65EZO7VyECVO/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c54c9f359931d03a59f471",
    "title": "MR BEAN",
    "description": "",
    "category": "videos_engracados",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1vLXphuxhWzdSkfjhxcKlEJiSJMUhA4w5/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c548f42307bc41a089fff7",
    "title": "EXU BARA É NOS KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
    "description": "",
    "category": "videos_engracados",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1BAgdPBELgOhWdSnoFGK5YLNRsRoA83Mv/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/cf642af4a_ChatGPTImage26demarde202611_55_18.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c547b3e93cb35d65e76254",
    "title": "TIO Chucky  Um nome que tira toda a pose de mau dele",
    "description": "",
    "category": "videos_engracados",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1tGXiLVPI-xbHCf39g9JNm-GyTwytOiqV/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/f9cfe7596_ChatGPTImage26demarde202611_47_47.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c5458c5f7127082da87512",
    "title": "O MEU AVO MORREU FAZENDO LIGAÇÃO DIRETA KKKKKKKKKKK",
    "description": "",
    "category": "videos_engracados",
    "anime_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1spzZyZ-ykx75Wlyu_kGID7yKBsiKKp4l/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/55be0c549_Gemini_Generated_Image_cjxiwucjxiwucjxi.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c40ede21f4617f8ba53059",
    "title": "Interestelar",
    "description": "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço em busca de um novo lar para a humanidade.",
    "category": "filme",
    "anime_subcategory": "",
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
    "anime_subcategory": "",
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
    "anime_subcategory": "",
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
    "anime_subcategory": "",
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
    "anime_subcategory": "",
    "source": "youtube",
    "video_url": "https://www.youtube.com/watch?v=HhesaQXLuRY",
    "thumbnail_url": "",
    "year": "2008",
    "duration": "5 temporadas",
    "rating": 9.5,
    "is_favorite": true
  }
];
let currentPage = 'home';
let currentCategory = 'all';
let currentAnimeSubcat = '';
let currentSearch = '';
let currentKaraokeSearch = '';
let animeMenuOpen = false;
let nextId = videos.length + 1;
let currentThumbFile = null;

const catLabels = {
  filme:'Filme', serie:'Série', documentario:'Documentário', animacao:'Anime',
  musica:'Música', comedia:'Comédia', acao:'Ação', musica_ao_vivo:'Ao Vivo',
  videos_engracados:'Engraçado', karaoke:'Karaokê', outro:'Outro'
};
const animeSubLabels = {
  naruto_shippuden:'Naruto Shippuden', dragon_ball:'Dragon Ball', dragon_ball_dime:'Dragon Ball Dime'
};

function getThumbnail(v) {
  if (v.thumbnail_url) return v.thumbnail_url;
  if (v.source === 'youtube') {
    const m = v.video_url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/);
    if (m) return 'https://img.youtube.com/vi/' + m[1] + '/hqdefault.jpg';
  }
  return 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80';
}
function getYTId(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/);
  return m ? m[1] : null;
}
function getDriveId(url) {
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function renderHome() {
  currentPage = 'home';
  const categories = [
    {key:'all',label:'🎞 Todos'},{key:'favoritos',label:'❤️ Favoritos'},
    {key:'filme',label:'🎬 Filmes'},{key:'serie',label:'📺 Séries'},
    {key:'acao',label:'⚔️ Ação'},{key:'comedia',label:'😂 Comédia'},
    {key:'animacao',label:'✨ Anime'},{key:'musica',label:'🎵 Música'},
    {key:'musica_ao_vivo',label:'🎤 Ao Vivo'},{key:'videos_engracados',label:'😄 Engraçados'},
    {key:'karaoke',label:'🎙 Karaokê'},{key:'documentario',label:'📚 Docs'},
  ];
  const animeSubcats = [
    {key:'',label:'Todos os Animes'},{key:'naruto_shippuden',label:'Naruto Shippuden'},
    {key:'dragon_ball',label:'Dragon Ball'},{key:'dragon_ball_dime',label:'Dragon Ball Dime'}
  ];

  document.getElementById('app').innerHTML = `
    <nav class="navbar">
      <button class="logo" onclick="renderHome()">
        <div class="logo-icon">🎬</div><span class="logo-text">CenaPlay</span>
      </button>
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input id="searchInput" type="text" placeholder="Buscar..." value="${currentSearch}" oninput="onSearch(this.value)" />
      </div>
      <div class="navbar-actions">
        <button class="btn-karaoke" onclick="renderKaraoke()">🎙 Karaokê</button>
        <button class="btn-add" onclick="openModal()">+ Adicionar</button>
      </div>
    </nav>
    <div class="main">
      <div id="heroWrap"></div>
      <div class="categories" id="catFilter">
        ${categories.map(c=>`<button class="cat-btn ${currentCategory===c.key?'active':''}" onclick="setCategory('${c.key}')">${c.label}</button>`).join('')}
      </div>
      <div id="animeSubsWrap"></div>
      <div id="gridWrap"></div>
    </div>
    <div class="modal-bg hidden" id="modalBg">
      <div class="modal">
        <button class="modal-close" onclick="closeModal()">✕</button>
        <div class="modal-title">Adicionar Vídeo</div>
        <div class="tabs">
          <button class="tab-btn active" id="tabYt" onclick="selectTab('youtube')">▶ YouTube</button>
          <button class="tab-btn" id="tabDrive" onclick="selectTab('google_drive')">◆ Drive</button>
          <button class="tab-btn" id="tabUrl" onclick="selectTab('url_direta')">● URL</button>
        </div>
        <div class="form-group">
          <label class="form-label" id="urlLabel">Cole o link do YouTube</label>
          <input class="form-input" id="videoUrl" placeholder="https://www.youtube.com/watch?v=..." />
        </div>
        <div class="form-group">
          <label class="form-label">Título *</label>
          <input class="form-input" id="videoTitle" placeholder="Nome do filme ou vídeo" />
        </div>
        <div class="form-group">
          <label class="form-label">Descrição</label>
          <textarea class="form-input form-textarea" id="videoDesc" placeholder="Sinopse..."></textarea>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Categoria</label>
            <select class="form-select" id="videoCat" onchange="onCatChange(this.value)">
              <option value="filme">Filme</option><option value="serie">Série</option>
              <option value="documentario">Documentário</option><option value="animacao">Anime</option>
              <option value="musica">Música</option><option value="comedia">Comédia</option>
              <option value="acao">Ação</option><option value="musica_ao_vivo">Música ao Vivo</option>
              <option value="videos_engracados">Vídeos Engraçados</option>
              <option value="karaoke">Karaokê</option><option value="outro">Outro</option>
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
            <input class="form-input" id="videoRating" type="number" min="0" max="10" step="0.1" />
          </div>
        </div>
        <div id="animeSubWrap" style="display:none" class="form-group">
          <label class="form-label">Série de Anime</label>
          <select class="form-select" id="animeSubcat">
            <option value="">Selecionar...</option>
            <option value="naruto_shippuden">Naruto Shippuden</option>
            <option value="dragon_ball">Dragon Ball</option>
            <option value="dragon_ball_dime">Dragon Ball Dime</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Capa do Vídeo</label>
          <div id="thumbSection">
            <label class="thumb-upload" for="thumbFileInput">
              <div style="font-size:32px;margin-bottom:8px">🖼️</div>
              <div style="font-size:14px;color:var(--text-muted)">Clique para enviar uma foto de capa</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">PNG, JPG, WEBP</div>
            </label>
            <input type="file" id="thumbFileInput" accept="image/*" style="display:none" onchange="handleThumbUpload(this)" />
            <input class="form-input" id="videoThumb" placeholder="Ou cole uma URL de imagem..." style="margin-top:8px" />
          </div>
        </div>
        <button class="btn-save" onclick="saveVideo()">+ Adicionar Vídeo</button>
      </div>
    </div>
  `;
  renderAnimeSubcats();
  renderHero();
  renderGrid();
  document.addEventListener('click', function bgClose(e) {
    const bg = document.getElementById('modalBg');
    if (bg && e.target === bg) closeModal();
  }, {once: false});
}

function handleThumbUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    currentThumbFile = e.target.result;
    const sec = document.getElementById('thumbSection');
    sec.innerHTML = `
      <div class="thumb-preview">
        <img src="${e.target.result}" />
        <button class="thumb-clear" onclick="clearThumb()">✕</button>
      </div>
    `;
  };
  reader.readAsDataURL(file);
}

function clearThumb() {
  currentThumbFile = null;
  const sec = document.getElementById('thumbSection');
  sec.innerHTML = `
    <label class="thumb-upload" for="thumbFileInput">
      <div style="font-size:32px;margin-bottom:8px">🖼️</div>
      <div style="font-size:14px;color:var(--text-muted)">Clique para enviar uma foto de capa</div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:4px">PNG, JPG, WEBP</div>
    </label>
    <input type="file" id="thumbFileInput" accept="image/*" style="display:none" onchange="handleThumbUpload(this)" />
    <input class="form-input" id="videoThumb" placeholder="Ou cole uma URL de imagem..." style="margin-top:8px" />
  `;
}

function onCatChange(val) {
  document.getElementById('animeSubWrap').style.display = val === 'animacao' ? 'block' : 'none';
}

function renderAnimeSubcats() {
  const w = document.getElementById('animeSubsWrap');
  if (!w) return;
  if (currentCategory !== 'animacao') { w.innerHTML = ''; return; }
  const subs = [{key:'',label:'Todos'},{key:'naruto_shippuden',label:'Naruto Shippuden'},{key:'dragon_ball',label:'Dragon Ball'},{key:'dragon_ball_dime',label:'Dragon Ball Dime'}];
  w.innerHTML = '<div class="anime-subs">' + subs.map(s=>`<button class="anime-sub-btn ${currentAnimeSubcat===s.key?'active':''}" onclick="setAnimeSub('${s.key}')">${s.label}</button>`).join('') + '</div>';
}

function setAnimeSub(key) {
  currentAnimeSubcat = key;
  renderAnimeSubcats();
  renderGrid();
}

function setCategory(cat) {
  currentCategory = cat;
  if (cat !== 'animacao') currentAnimeSubcat = '';
  if (cat === 'karaoke') { renderKaraoke(); return; }
  renderHome();
}

function onSearch(val) { currentSearch = val; renderHero(); renderGrid(); }

function getFiltered() {
  return videos.filter(v => {
    const ms = !currentSearch || v.title.toLowerCase().includes(currentSearch.toLowerCase());
    let mc;
    if (currentCategory === 'all') mc = true;
    else if (currentCategory === 'favoritos') mc = v.is_favorite;
    else if (currentCategory === 'animacao') {
      mc = v.category === 'animacao';
      if (mc && currentAnimeSubcat) mc = v.anime_subcategory === currentAnimeSubcat;
    } else mc = v.category === currentCategory;
    return ms && mc;
  });
}

function renderHero() {
  const w = document.getElementById('heroWrap');
  if (!w) return;
  const f = getFiltered();
  if (currentSearch || currentCategory !== 'all' || !f.length) { w.innerHTML=''; return; }
  const v = f[0];
  w.innerHTML = `<div class="hero"><img src="${getThumbnail(v)}" /><div class="hero-overlay"></div><div class="hero-content"><div class="hero-label">⭐ Em destaque</div><h2 class="hero-title">${v.title}</h2>${v.description?'<p style="margin-top:8px;font-size:14px;opacity:.75;max-width:500px">'+v.description.substring(0,120)+'...</p>':''}</div></div>`;
}

function renderGrid() {
  const w = document.getElementById('gridWrap');
  if (!w) return;
  const f = getFiltered();
  if (!f.length) { w.innerHTML='<div class="empty"><div style="font-size:64px;opacity:.3;margin-bottom:16px">🎬</div><p style="font-size:18px;font-weight:600">Nenhum vídeo encontrado</p></div>'; return; }
  w.innerHTML = '<div class="grid">' + f.map(v=>`
    <div class="card" onclick="playVideo('${v.id}')">
      <div class="card-thumb">
        <img src="${getThumbnail(v)}" alt="${v.title}" loading="lazy" />
        <div class="card-overlay"><button class="play-btn">▶</button></div>
        <span class="badge">${catLabels[v.category]||v.category}${v.anime_subcategory?(' · '+(animeSubLabels[v.anime_subcategory]||''))  :''}</span>
        <span class="source-badge">${v.source==='youtube'?'YouTube':v.source==='google_drive'?'Drive':'URL'}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${v.title}</div>
        <div class="card-meta">
          ${v.year?'<span>'+v.year+'</span>':''}
          ${v.duration?'<span>⏱ '+v.duration+'</span>':''}
          ${v.rating?'<span class="star">★ '+v.rating+'</span>':''}
        </div>
      </div>
    </div>
  `).join('') + '</div>';
}

// ── KARAOKE ───────────────────────────────────────────────────────────────────
function renderKaraoke() {
  currentPage = 'karaoke';
  document.getElementById('app').innerHTML = `
    <div class="karaoke-header">
      <button class="back-btn" onclick="renderHome()">← Voltar</button>
      <div class="karaoke-title">
        <div class="karaoke-icon">🎙</div> Karaokê
      </div>
      <div class="karaoke-search-wrap">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Pesquisar músicas de karaokê..." oninput="onKaraokeSearch(this.value)" value="${currentKaraokeSearch}" />
      </div>
    </div>
    <div class="main" id="karaokeGrid"></div>
  `;
  renderKaraokeGrid();
}

function onKaraokeSearch(val) {
  currentKaraokeSearch = val;
  renderKaraokeGrid();
}

function renderKaraokeGrid() {
  const w = document.getElementById('karaokeGrid');
  if (!w) return;
  const list = videos.filter(v => v.category === 'karaoke' && (!currentKaraokeSearch || v.title.toLowerCase().includes(currentKaraokeSearch.toLowerCase())));
  if (!list.length) { w.innerHTML = '<div class="empty"><div style="font-size:64px;opacity:.3;margin-bottom:16px">🎙</div><p style="font-size:18px;font-weight:600">' + (currentKaraokeSearch ? 'Nenhuma música encontrada' : 'Nenhuma música de karaokê adicionada') + '</p></div>'; return; }
  w.innerHTML = '<div class="grid">' + list.map(v=>`
    <div class="card" onclick="playVideo('${v.id}')">
      <div class="card-thumb">
        <img src="${getThumbnail(v)}" alt="${v.title}" loading="lazy" />
        <div class="card-overlay"><button class="play-btn">▶</button></div>
        <span class="badge">🎙 Karaokê</span>
      </div>
      <div class="card-body">
        <div class="card-title">${v.title}</div>
        <div class="card-meta">${v.year?'<span>'+v.year+'</span>':''}</div>
      </div>
    </div>
  `).join('') + '</div>';
}

// ── PLAYER ────────────────────────────────────────────────────────────────────
function playVideo(id) {
  const v = videos.find(x => x.id == id);
  if (!v) return;
  let html = '';
  if (v.source === 'youtube') {
    const ytId = getYTId(v.video_url);
    html = ytId ? '<iframe src="https://www.youtube.com/embed/'+ytId+'?autoplay=1&rel=0" allowfullscreen allow="autoplay;encrypted-media"></iframe>' : '<p style="color:#888;padding:20px">URL inválida</p>';
  } else if (v.source === 'google_drive') {
    const fId = getDriveId(v.video_url);
    html = fId ? '<iframe src="https://drive.google.com/file/d/'+fId+'/preview" allow="autoplay" allowfullscreen></iframe>' : '<p style="color:#888;padding:20px">URL inválida</p>';
  } else {
    html = '<video src="'+v.video_url+'" controls autoplay style="width:100%;height:100%"></video>';
  }
  document.getElementById('app').innerHTML = `
    <div class="topbar"><button class="back-btn" onclick="${currentPage==='karaoke'?'renderKaraoke':'renderHome'}()">← Voltar</button></div>
    <div class="player-main">
      <div class="player-wrap">${html}</div>
      <div class="player-info">
        <h1 class="player-title">${v.title}</h1>
        <div class="player-meta">
          <span class="pill">${catLabels[v.category]||v.category}</span>
          ${v.year?'<span>📅 '+v.year+'</span>':''}
          ${v.duration?'<span>⏱ '+v.duration+'</span>':''}
          ${v.rating?'<span style="color:#f6c90e">★ '+v.rating+'/10</span>':''}
        </div>
        ${v.description?'<p class="player-desc">'+v.description+'</p>':''}
      </div>
    </div>
  `;
}

// ── MODAL ─────────────────────────────────────────────────────────────────────
let currentSource = 'youtube';
function openModal() { document.getElementById('modalBg').classList.remove('hidden'); }
function closeModal() { document.getElementById('modalBg').classList.add('hidden'); currentThumbFile=null; }
function selectTab(src) {
  currentSource = src;
  ['youtube','google_drive','url_direta'].forEach(s => {
    document.getElementById('tab'+(s==='youtube'?'Yt':s==='google_drive'?'Drive':'Url')).classList.toggle('active',s===src);
  });
  const labels = {youtube:['Cole o link do YouTube','https://www.youtube.com/watch?v=...'],google_drive:['Cole o link do Google Drive','https://drive.google.com/file/d/...'],url_direta:['Cole a URL direta','https://exemplo.com/video.mp4']};
  document.getElementById('urlLabel').textContent = labels[src][0];
  document.getElementById('videoUrl').placeholder = labels[src][1];
  document.getElementById('videoUrl').value = '';
}

function saveVideo() {
  const url = document.getElementById('videoUrl').value.trim();
  const title = document.getElementById('videoTitle').value.trim();
  if (!url || !title) { alert('Preencha o título e a URL!'); return; }
  const cat = document.getElementById('videoCat').value;
  const animeEl = document.getElementById('animeSubcat');
  const video = {
    id: 'local_'+nextId++, title,
    description: document.getElementById('videoDesc').value.trim(),
    category: cat,
    anime_subcategory: cat==='animacao'&&animeEl?animeEl.value:'',
    source: currentSource, video_url: url,
    thumbnail_url: currentThumbFile || document.getElementById('videoThumb')?.value?.trim() || '',
    year: document.getElementById('videoYear').value.trim(),
    duration: document.getElementById('videoDur').value.trim(),
    rating: parseFloat(document.getElementById('videoRating').value)||0,
    is_favorite: false
  };
  videos.unshift(video);
  currentThumbFile = null;
  closeModal();
  renderHome();
}

// ── START ─────────────────────────────────────────────────────────────────────
renderHome();</script>
</body>
</html>
