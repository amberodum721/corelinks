/* ═══ CoreLinks Layout JS ═══ */

/*
 ┌─────────────────────────────────────────────────────────┐
 │  HOW TO ADD ADSTERRA ADS — REPLACE THESE PLACEHOLDERS  │
 │                                                         │
 │  1. Sign up at adsterra.com as a Publisher              │
 │  2. Dashboard → Websites → Add Website                  │
 │  3. Create ad zones for each format below               │
 │  4. Replace the <div class="ad-placeholder"> with the   │
 │     JavaScript code Adsterra gives you                  │
 │                                                         │
 │  FORMATS TO CREATE IN ADSTERRA DASHBOARD:              │
 │   • 728x90  Leaderboard Banner                         │
 │   • 300x250 Medium Rectangle                           │
 │   • 160x600 Wide Skyscraper                            │
 │   • 468x60  Half Banner                                │
 │   • Native Banner (auto-size)                          │
 │   • Social Bar (In-Page Push) — highest CPM            │
 │   • Popunder — extra passive income per visitor        │
 └─────────────────────────────────────────────────────────┘
*/

/* ── AD PLACEHOLDERS ─────────────────────────────────── */
/* Replace each template string with your Adsterra code  */

const AD = {
  top:    `<div style="display:flex;justify-content:center;align-items:center;width:728px;max-width:100%;overflow:hidden"><script>atOptions={'key':'b7541b7455aed29f707d4eecdbdeb799','format':'iframe','height':90,'width':728,'params':{}};</script><script src="https://www.highperformanceformat.com/b7541b7455aed29f707d4eecdbdeb799/invoke.js"></script></div>`,
  mid:    `<div style="display:flex;justify-content:center;align-items:center;width:728px;max-width:100%;overflow:hidden"><script>atOptions={'key':'b7541b7455aed29f707d4eecdbdeb799','format':'iframe','height':90,'width':728,'params':{}};</script><script src="https://www.highperformanceformat.com/b7541b7455aed29f707d4eecdbdeb799/invoke.js"></script></div>`,
  half:   `<div style="display:flex;justify-content:center;align-items:center;width:468px;max-width:100%;overflow:hidden"><script>atOptions={'key':'80fa29ee14ab0eb876045874cbfcc7a0','format':'iframe','height':60,'width':468,'params':{}};</script><script src="https://www.highperformanceformat.com/80fa29ee14ab0eb876045874cbfcc7a0/invoke.js"></script></div>`,
  box:    `<div style="display:flex;justify-content:center;align-items:center;width:300px;max-width:100%;overflow:hidden;flex-shrink:0"><script>atOptions={'key':'1dccbfbf79cd21cec3a96adc766f47f4','format':'iframe','height':250,'width':300,'params':{}};</script><script src="https://www.highperformanceformat.com/1dccbfbf79cd21cec3a96adc766f47f4/invoke.js"></script></div>`,
  sky:    `<div style="display:flex;justify-content:center;align-items:center;width:160px;max-width:100%;overflow:hidden;flex-shrink:0"><script>atOptions={'key':'fe24f4a5fe3326fcf51f14992e0c86ad','format':'iframe','height':600,'width':160,'params':{}};</script><script src="https://www.highperformanceformat.com/fe24f4a5fe3326fcf51f14992e0c86ad/invoke.js"></script></div>`,
  native: `<script async="async" data-cfasync="false" src="https://pl28917709.effectivegatecpm.com/3990d9e21b58a40bffc13804806817f6/invoke.js"></script><div id="container-3990d9e21b58a40bffc13804806817f6"></div>`,
  mobile: `<div style="display:flex;justify-content:center;align-items:center;width:320px;max-width:100%;overflow:hidden"><script>atOptions={'key':'9e6ebfa3f905f2661d487c0577beca79','format':'iframe','height':50,'width':320,'params':{}};</script><script src="https://www.highperformanceformat.com/9e6ebfa3f905f2661d487c0577beca79/invoke.js"></script></div>`,
  box2:   `<div style="display:flex;justify-content:center;align-items:center;width:160px;max-width:100%;overflow:hidden;flex-shrink:0"><script>atOptions={'key':'5af135e17ad7faaaeb36e23014b1d68a','format':'iframe','height':300,'width':160,'params':{}};</script><script src="https://www.highperformanceformat.com/5af135e17ad7faaaeb36e23014b1d68a/invoke.js"></script></div>`,
};

/*
 ┌──────────────────────────────────────────────────────────┐
 │  ADSTERRA POPUNDER — Paste Adsterra Popunder script     │
 │  BELOW this comment block (before the closing </body>)  │
 │  Popunders fire once per visitor session automatically  │
 │  — no visible zone needed, pure passive income          │
 └──────────────────────────────────────────────────────────┘
 <!-- PASTE ADSTERRA POPUNDER SCRIPT HERE -->
*/

/* ── TOPBAR ── */
function renderTopbar() {
  document.getElementById('topbar').innerHTML = `
  <header class="topbar">
    <div class="tb-inner">
      <a href="/" class="logo">
        <div class="logo-mark">⚡</div>
        <span class="lname">CoreLinks</span>
      </a>
      <div class="tb-search" style="position:relative">
        <input type="text" id="ts" placeholder="Search tools…" autocomplete="off"/>
        <span class="icon">🔍</span>
        <div id="sr2"></div>
      </div>
      <nav class="tb-nav">
        <a href="/">Home</a>
        <a href="/video">Movies</a>
        <a href="/ai">AI</a>
        <a href="/developer-tools">Dev</a>
        <a href="/beginners-guide" style="color:var(--accent2)">📖 Start Here</a>
      </nav>
      <div class="mob-menu-btn" onclick="toggleMobMenu()" id="mob-btn">☰</div>
    </div>
  </header>`;
}

/* ── TOP AD ── */
function renderTopAd() {
  document.getElementById('top-ad').innerHTML = `<div class="ad-strip">${AD.top}</div>`;
}

/* ── LEFT NAV ── */
function renderLeftNav() {
  document.getElementById('lnav').innerHTML = `
  <nav class="lnav">
    <div class="lnav-sec">
      <span class="lnav-label">Wiki</span>
      <a href="/privacy"><span class="ni">🛡️</span> Adblock / Privacy</a>
      <a href="/ai"><span class="ni">🤖</span> Artificial Intelligence</a>
      <a href="/video"><span class="ni">📺</span> Movies / TV / Anime</a>
      <a href="/audio"><span class="ni">🎵</span> Music / Podcasts</a>
      <a href="/gaming"><span class="ni">🎮</span> Gaming / Emulation</a>
      <a href="/reading"><span class="ni">📚</span> Books / Comics / Manga</a>
      <a href="/downloading"><span class="ni">⬇️</span> Downloading</a>
      <a href="/torrenting"><span class="ni">🌊</span> Torrenting</a>
      <a href="/educational"><span class="ni">🎓</span> Educational</a>
      <a href="/mobile"><span class="ni">📱</span> Android / iOS</a>
      <a href="/linux-macos"><span class="ni">🐧</span> Linux / macOS</a>
      <a href="/non-english"><span class="ni">🌍</span> Non-English</a>
      <a href="/misc"><span class="ni">✨</span> Miscellaneous</a>
    </div>
    <div class="lnav-sec">
      <span class="lnav-label">Tools</span>
      <a href="/system-tools"><span class="ni">⚙️</span> System Tools</a>
      <a href="/file-tools"><span class="ni">📁</span> File Tools</a>
      <a href="/internet-tools"><span class="ni">🌐</span> Internet Tools</a>
      <a href="/social-media-tools"><span class="ni">📣</span> Social Media</a>
      <a href="/text-tools"><span class="ni">📝</span> Text Tools</a>
      <a href="/gaming-tools"><span class="ni">🕹️</span> Gaming Tools</a>
      <a href="/image-tools"><span class="ni">🖼️</span> Image Tools</a>
      <a href="/video-tools"><span class="ni">🎬</span> Video Tools</a>
      <a href="/audio-tools"><span class="ni">🎧</span> Audio Tools</a>
      <a href="/developer-tools"><span class="ni">💻</span> Developer Tools</a>
    </div>
    <div class="lnav-sec">
      <span class="lnav-label">Site</span>
      <a href="/beginners-guide"><span class="ni">🌱</span> Beginners Guide</a>
      <a href="/submit"><span class="ni">🚀</span> Submit a Tool</a>
      <a href="/advertise"><span class="ni">💰</span> Advertise</a>
      <a href="/unsafe"><span class="ni">⚠️</span> Unsafe Sites</a>
    </div>
    <!-- SIDEBAR SKYSCRAPER AD — replace with Adsterra 160x600 -->
    <div style="margin-top:16px">${AD.sky}</div>
  </nav>`;
}

/* ── RIGHT COL — 3 ad boxes + trending + TOC ── */
function renderRightCol(toc = []) {
  const tocHtml = toc.length ? `
    <div class="rcol-card">
      <div class="rcol-title">On This Page</div>
      ${toc.map(t=>`<a href="#${t.id}" class="rcol-link"><span class="rcol-dot"></span>${t.label}</a>`).join('')}
    </div>` : '';

  document.getElementById('rcol').innerHTML = `
    ${tocHtml}
    <!-- RIGHT SIDEBAR AD 1 — 300x250 -->
    ${AD.box}
    <div class="rcol-card">
      <div class="rcol-title">🔥 Trending</div>
      <a href="/video#streaming" class="rcol-link"><span class="rcol-dot"></span>Cineby</a>
      <a href="/ai#chatbots" class="rcol-link"><span class="rcol-dot"></span>ChatGPT Free</a>
      <a href="/privacy#adblock" class="rcol-link"><span class="rcol-dot"></span>uBlock Origin</a>
      <a href="/video#anime" class="rcol-link"><span class="rcol-dot"></span>HiAnime</a>
      <a href="/torrenting#clients" class="rcol-link"><span class="rcol-dot"></span>qBittorrent</a>
      <a href="/developer-tools#editors" class="rcol-link"><span class="rcol-dot"></span>VS Code</a>
    </div>
    <!-- RIGHT SIDEBAR AD 2 — 160x300 -->
    ${AD.box2}
    <div class="rcol-card">
      <div class="rcol-title">📚 Start Here</div>
      <a href="/beginners-guide" class="rcol-link"><span class="rcol-dot"></span>Beginners Guide</a>
      <a href="/privacy" class="rcol-link"><span class="rcol-dot"></span>Stay Safe Online</a>
      <a href="/unsafe" class="rcol-link"><span class="rcol-dot"></span>Sites to Avoid</a>
    </div>
    <!-- RIGHT SIDEBAR AD 3 — sticky 300x250 -->
    <div style="position:sticky;top:80px">${AD.box}</div>`;
}

/* ── FOOTER ── */
function renderMobileUI() {
  // Mobile bottom nav
  if (!document.getElementById('mobile-nav')) {
    const nav = document.createElement('nav');
    nav.className = 'mobile-nav';
    nav.id = 'mobile-nav';
    nav.innerHTML = `
      <a href="/" class="highlight"><span class="mni">⚡</span>Home</a>
      <a href="/video"><span class="mni">📺</span>Movies</a>
      <a href="/ai"><span class="mni">🤖</span>AI</a>
      <a href="/gaming"><span class="mni">🎮</span>Gaming</a>
      <a href="/beginners-guide"><span class="mni">🌱</span>Guide</a>`;
    document.body.appendChild(nav);
  }

  // Mobile drawer (full nav)
  if (!document.getElementById('mob-drawer')) {
    const drawer = document.createElement('div');
    drawer.className = 'mob-drawer';
    drawer.id = 'mob-drawer';
    drawer.innerHTML = `<div class="lnav" id="mob-lnav"></div>`;
    document.body.appendChild(drawer);
    // Render left nav inside drawer too
    const tmp = document.getElementById('lnav');
    document.getElementById('mob-lnav').innerHTML = tmp ? tmp.innerHTML : '';
  }

  // Inject Popunder (once per page)
  if (!document.getElementById('adsterra-popunder')) {
    const s = document.createElement('script');
    s.id  = 'adsterra-popunder';
    s.src = 'https://pl28916747.effectivegatecpm.com/72/4e/0b/724e0bdb2ab80c733aa27f402aca9ab1.js';
    document.head.appendChild(s);
  }

  // Inject Social Bar (above </body>)
  if (!document.getElementById('adsterra-socialbar')) {
    const s = document.createElement('script');
    s.id  = 'adsterra-socialbar';
    s.src = 'https://pl28917703.effectivegatecpm.com/51/73/86/51738656e6dc85212cb85d85b8d52262.js';
    document.body.appendChild(s);
  }

  // Active state for bottom nav
  const p = location.pathname;
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    if (a.getAttribute('href') === p) a.classList.add('active');
  });

  // Mobile ad — inject full-width ad card after first tool section
  document.querySelectorAll('.tool-section').forEach((sec, i) => {
    if (i === 1 && !sec.querySelector('.mob-ad-card')) {
      const ad = document.createElement('div');
      ad.className = 'mob-ad-card';
      ad.innerHTML = `<div class="ad-label">Advertisement</div>
        <div class="ad-placeholder" style="width:100%;min-height:100px;background:var(--bg);border:1px dashed var(--border2);border-radius:7px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:.7rem;font-family:var(--fm)">Ads</div>`;
      sec.after(ad);
    }
  });
}

function toggleMobMenu() {
  const drawer = document.getElementById('mob-drawer');
  const btn = document.getElementById('mob-btn');
  if (!drawer) return;
  const open = drawer.classList.toggle('open');
  btn.textContent = open ? '✕' : '☰';
  document.body.style.overflow = open ? 'hidden' : '';
}

function renderFooter() {
  document.getElementById('footer-ad').innerHTML = `<div class="ad-strip">${AD.mid}</div>`;
  document.getElementById('footer').innerHTML = `
  <footer>
    <div class="ft-grid">
      <div class="ft-brand">
        <div class="logo" style="margin-bottom:10px">
          <div class="logo-mark">⚡</div>
          <span class="lname" style="margin-left:9px">CoreLinks</span>
        </div>
        <p>The largest curated collection of free tools, software & resources. 100% free, updated daily. No paywalls.</p>
      </div>
      <div class="ft-col">
        <h4>Wiki</h4>
        <a href="/privacy">Adblock / Privacy</a>
        <a href="/ai">Artificial Intelligence</a>
        <a href="/video">Movies / TV / Anime</a>
        <a href="/audio">Music / Podcasts</a>
        <a href="/gaming">Gaming / Emulation</a>
        <a href="/reading">Books / Comics</a>
        <a href="/educational">Educational</a>
        <a href="/misc">Miscellaneous</a>
      </div>
      <div class="ft-col">
        <h4>Tools</h4>
        <a href="/system-tools">System Tools</a>
        <a href="/file-tools">File Tools</a>
        <a href="/internet-tools">Internet Tools</a>
        <a href="/image-tools">Image Tools</a>
        <a href="/video-tools">Video Tools</a>
        <a href="/developer-tools">Developer Tools</a>
        <a href="/audio-tools">Audio Tools</a>
      </div>
      <div class="ft-col">
        <h4>Site</h4>
        <a href="/beginners-guide">Beginners Guide</a>
        <a href="/submit">Submit a Tool</a>
        <a href="/advertise">Advertise With Us</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/dmca">DMCA</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/sitemap">Sitemap</a>
      </div>
    </div>
    <!-- FOOTER NATIVE AD — replace with Adsterra Native Banner -->
    <div style="display:flex;justify-content:center;margin-bottom:20px">${AD.native}</div>
    <div class="ft-bottom">
      <span class="ft-copy">© 2026 CoreLinks · This site is a directory of links and does not host any files. All trademarks belong to their respective owners.</span>
      <div class="ft-links">
        <a href="/privacy-policy">Privacy</a>
        <a href="/dmca">DMCA</a>
        <a href="/disclaimer">Disclaimer</a>
      </div>
    </div>
  </footer>
  <!-- STICKY BOTTOM MOBILE AD — Adsterra 320x50 or Social Bar -->
  <div id="sticky-bottom-ad" style="position:fixed;bottom:0;left:0;right:0;display:none;justify-content:center;align-items:center;background:var(--bg);border-top:1px solid var(--accent);padding:8px 12px;z-index:290">
    ${AD.mobile}
    <button onclick="document.getElementById('sticky-bottom-ad').style.display='none'"
      style="position:absolute;top:4px;right:8px;background:none;border:none;color:var(--muted);cursor:pointer;font-size:.85rem;line-height:1">✕</button>
  </div>
  <script>
    // On mobile, push sticky ad above the bottom nav (56px)
    (function(){
      function positionStickyAd(){
        const el = document.getElementById('sticky-bottom-ad');
        if(!el) return;
        const isMobile = window.innerWidth <= 780;
        el.style.bottom = isMobile ? '56px' : '0px';
      }
      // Show after 4 seconds
      setTimeout(()=>{
        const el = document.getElementById('sticky-bottom-ad');
        if(el){ positionStickyAd(); el.style.display='flex'; }
      }, 4000);
      window.addEventListener('resize', positionStickyAd);
    })();
  </script>`;
}

/* ── SEARCH DB ── */
const DB = [
  {n:'Cineby',c:'Movie Streaming',u:'/video#streaming',e:'📺'},
  {n:'Fmovies+',c:'Movie Streaming',u:'/video#streaming',e:'📺'},
  {n:'Rive',c:'Movie Streaming',u:'/video#streaming',e:'📺'},
  {n:'Tubi',c:'Free Legal Streaming',u:'/video#free-ads',e:'📺'},
  {n:'HiAnime',c:'Anime Streaming',u:'/video#anime',e:'🎌'},
  {n:'AnimeKai',c:'Anime Streaming',u:'/video#anime',e:'🎌'},
  {n:'Miruro',c:'Anime Streaming',u:'/video#anime',e:'🎌'},
  {n:'animepahe',c:'Anime Streaming',u:'/video#anime',e:'🎌'},
  {n:'ChatGPT',c:'AI Chatbot',u:'/ai#chatbots',e:'🤖'},
  {n:'Gemini',c:'AI Chatbot',u:'/ai#chatbots',e:'🤖'},
  {n:'Claude AI',c:'AI Chatbot',u:'/ai#chatbots',e:'🤖'},
  {n:'Perplexity',c:'AI Search',u:'/ai#ai-search',e:'🔎'},
  {n:'DeepSeek',c:'AI Chatbot',u:'/ai#chatbots',e:'🤖'},
  {n:'Copilot',c:'AI Chatbot',u:'/ai#chatbots',e:'🤖'},
  {n:'uBlock Origin',c:'Adblocking',u:'/privacy#adblock',e:'🛡️'},
  {n:'Bitwarden',c:'Password Manager',u:'/privacy#passwords',e:'🔑'},
  {n:'ProtonVPN',c:'VPN',u:'/privacy#vpn',e:'🔐'},
  {n:'Brave Browser',c:'Privacy Browser',u:'/privacy#browsers',e:'🌐'},
  {n:'qBittorrent',c:'Torrent Client',u:'/torrenting#clients',e:'🌊'},
  {n:'Nyaa',c:'Anime Torrents',u:'/torrenting#anime',e:'🌊'},
  {n:'1337x',c:'Torrent Indexer',u:'/torrenting#indexers',e:'🌊'},
  {n:'VLC',c:'Media Player',u:'/video#players',e:'▶️'},
  {n:'MPV',c:'Media Player',u:'/video#players',e:'▶️'},
  {n:'DaVinci Resolve',c:'Video Editor',u:'/video-tools#editors',e:'🎬'},
  {n:'OBS Studio',c:'Screen Recorder',u:'/video-tools#recording',e:'🎬'},
  {n:'Handbrake',c:'Video Converter',u:'/video-tools#converters',e:'🎬'},
  {n:'GIMP',c:'Image Editor',u:'/image-tools#editors',e:'🖼️'},
  {n:'Figma',c:'UI Design',u:'/image-tools#design',e:'🎨'},
  {n:'Inkscape',c:'Vector Editor',u:'/image-tools#vector',e:'✏️'},
  {n:'VS Code',c:'Code Editor',u:'/developer-tools#editors',e:'💻'},
  {n:'Audacity',c:'Audio Editor',u:'/audio-tools#editors',e:'🎧'},
  {n:'7-Zip',c:'File Archiver',u:'/system-tools#archivers',e:'📦'},
  {n:'Calibre',c:'Ebook Manager',u:'/reading#managers',e:'📚'},
  {n:'Khan Academy',c:'Free Education',u:'/educational#courses',e:'🎓'},
  {n:'Project Gutenberg',c:'Free Ebooks',u:'/reading#ebooks',e:'📖'},
  {n:'yt-dlp',c:'Video Downloader',u:'/social-media-tools#downloaders',e:'⬇️'},
  {n:'JDownloader',c:'Download Manager',u:'/downloading#managers',e:'⬇️'},
  {n:'Mega',c:'Cloud Storage',u:'/downloading#storage',e:'☁️'},
  {n:'PCSX2',c:'PS2 Emulator',u:'/gaming#emulation',e:'🕹️'},
  {n:'RetroArch',c:'Multi-System Emulator',u:'/gaming#emulation',e:'🕹️'},
];

function initSearch(inputId, resultsId) {
  const inp = document.getElementById(inputId);
  const box = document.getElementById(resultsId);
  if (!inp || !box) return;
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { box.style.display='none'; return; }
    const hits = DB.filter(t => t.n.toLowerCase().includes(q) || t.c.toLowerCase().includes(q)).slice(0,8);
    box.innerHTML = hits.length
      ? hits.map(t=>`<div class="sri" onclick="location.href='${t.u}'"><span style="font-size:1.1rem">${t.e}</span><div><div class="sr-name">${t.n}</div><div class="sr-cat">${t.c}</div></div></div>`).join('')
      : `<div style="padding:11px 14px;color:var(--muted);font-size:.8rem">No results for "${q}"</div>`;
    box.style.display='block';
  });
  document.addEventListener('click', e => {
    if (!inp.contains(e.target)&&!box.contains(e.target)) box.style.display='none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const p = location.pathname.split('/').pop() || '/';
  document.querySelectorAll('.lnav a,.tb-nav a').forEach(a => {
    if (a.getAttribute('href') === p) a.classList.add('active');
  });
  initSearch('hs','sr');
  initSearch('ts','sr2');
  renderMobileUI();
});

/* ── VISITOR TRACKER ──────────────────────────────────── */
(function() {
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxvnKDPHxgIYK6DGjA-I0t6Hg99fVLvACkBkFQfiuHkIe_xT5NjpwVON40WCyDHe3lc/exec";

  fetch("https://api.ipify.org?format=json")
    .then(r => r.json())
    .then(data => {
      const params = new URLSearchParams({
        ip:       data.ip                              || "Unknown",
        ref:      document.referrer                    || "Direct",
        page:     window.location.pathname,
        ua:       navigator.userAgent,
        lang:     navigator.language                   || "Unknown",
        screen:   screen.width + "x" + screen.height,
        touch:    navigator.maxTouchPoints > 0 ? "Yes" : "No",
        tz:       Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
        platform: navigator.platform                   || "Unknown",
      });
      fetch(SCRIPT_URL + "?" + params.toString(), {
        method: "GET",
        mode:   "no-cors",
      }).catch(() => {});
    })
    .catch(() => {});
})();
