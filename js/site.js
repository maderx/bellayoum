/* ============================================================
   BELLA YOUM — shared site behavior
   Loaded on every page: header spotlight, language toggle,
   curtain intro (index only), portfolio slideshows.
   ============================================================ */

/* ── soft password gate (client-side only, not real security) ── */
(function(){
  const GATE_KEY = 'by-gate-ok';
  const PASSWORD = '2222';
  const gate = document.getElementById('gate');
  if(!gate) return;

  const form  = document.getElementById('gate-form');
  const input = document.getElementById('gate-pw');
  const box   = document.getElementById('gate-box');
  const error = document.getElementById('gate-error');

  form.addEventListener('submit', e=>{
    e.preventDefault();
    if(input.value === PASSWORD){
      localStorage.setItem(GATE_KEY, '1');
      gate.style.display = 'none';
    } else {
      error.classList.add('on');
      box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
      input.value = '';
      input.focus();
    }
  });
})();

/* ── Fresnel followspot on header nav ───────────────────────── */
(function(){
  const head = document.getElementById('head');
  const beam = document.getElementById('beam');
  const pool = document.getElementById('pool');
  if(!head || !beam || !pool) return;
  const targets = [...document.querySelectorAll('[data-spot]')];

  function aim(el){
    const h = head.getBoundingClientRect(), r = el.getBoundingClientRect();
    const lx = h.width/2, ly = 36;                    // the lens
    const cx = r.left-h.left+r.width/2;                // what we're lighting
    const cy = r.top-h.top+r.height+10;
    const top = 8, bot = r.width/2+40;                 // cone half-widths

    beam.style.clipPath =
      `polygon(${lx-top}px ${ly}px, ${lx+top}px ${ly}px, ${cx+bot}px ${cy}px, ${cx-bot}px ${cy}px)`;
    beam.style.background =
      `radial-gradient(circle 520px at ${lx}px ${ly}px,
        rgba(255,255,255,.36) 0%, rgba(255,255,255,.14) 46%, rgba(255,255,255,0) 100%)`;
    beam.classList.add('on');

    pool.style.left = cx+'px'; pool.style.top = (cy-16)+'px';
    pool.style.width = Math.max(120, r.width+80)+'px';
    pool.classList.add('on');
  }
  targets.forEach(a=>{
    a.addEventListener('mouseenter', ()=>aim(a));
    a.addEventListener('focus', ()=>aim(a));
  });
  head.addEventListener('mouseleave', ()=>{
    beam.classList.remove('on'); pool.classList.remove('on');
  });
})();

/* ── slideshows (portfolio thumbnails) ──────────────────────── */
function initSlideshows(){
  document.querySelectorAll('[data-show]').forEach(box=>{
    if(box.dataset.showInit) return;
    box.dataset.showInit = '1';
    const imgs = [...box.querySelectorAll('img')], dots = box.querySelector('.dots');
    if(!imgs.length) return;
    imgs.forEach(()=>dots.insertAdjacentHTML('beforeend', '<span class="dot"></span>'));
    const marks = [...dots.children]; let i = 0;
    const paint = ()=>{
      imgs.forEach((im,n)=>im.classList.toggle('on', n===i));
      marks.forEach((m,n)=>m.classList.toggle('on', n===i));
    };
    paint();
    box.addEventListener('click', ()=>{ i=(i+1)%imgs.length; paint(); });
  });
}
initSlideshows();
window.initSlideshows = initSlideshows;

/* ── replay the curtain intro (opening page only) ───────────── */
const replayBtn = document.getElementById('replay');
if(replayBtn){
  replayBtn.onclick = ()=>{
    const old = document.getElementById('intro');
    if(old) old.replaceWith(old.cloneNode(true));
  };
}

/* ── language: EN / KR, remembered across pages ─────────────── */
(function(){
  const buttons = document.querySelectorAll('.lang button');
  if(!buttons.length) return;

  function applyLang(lang){
    const kr = lang === 'kr';
    buttons.forEach(b=>b.classList.toggle('on', b.dataset.lang===lang));
    document.querySelectorAll('[data-kr]').forEach(el=>{
      el.textContent = kr ? el.dataset.kr : el.dataset.en;
    });
  }

  buttons.forEach(b=>b.addEventListener('click', ()=>{
    localStorage.setItem('by-lang', b.dataset.lang);
    applyLang(b.dataset.lang);
  }));

  const saved = localStorage.getItem('by-lang');
  if(saved === 'kr') applyLang('kr');
})();
