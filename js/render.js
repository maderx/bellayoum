/* ============================================================
   RENDER — builds portfolio rows, archive doors and galleries
   from the data files in js/data/. Runs on whichever page has
   a matching container; harmless no-op everywhere else.
   ============================================================ */

/* ── Portfolio (portfolio.html) ─────────────────────────────── */
(function(){
  const list = document.getElementById('proj-list');
  if(!list || typeof PORTFOLIO === 'undefined') return;

  list.innerHTML = PORTFOLIO.map(p=>{
    const imgs = p.images.map((f,n)=>
      `<img class="${n===0?'on':''}" src="${p.folder}/${f}" alt="${p.title}">`
    ).join('');
    return `
    <article class="proj">
      <div class="show" data-show>
        ${imgs}
        <div class="show-ui"><div class="dots"></div><span class="show-hint">Click for next</span></div>
      </div>
      <div>
        <div class="proj-num">${p.num}</div>
        <h3>${p.title}</h3>
        <dl class="credits">
          <div><dt>Date</dt><dd>${p.date}</dd></div>
          <div><dt>Director</dt><dd>${p.director}</dd></div>
          <div><dt>Venue</dt><dd>${p.venue}</dd></div>
          <div><dt>My Role</dt><dd>${p.role}</dd></div>
        </dl>
      </div>
    </article>`;
  }).join('');

  if(window.initSlideshows) window.initSlideshows();
})();

/* ── Archive doors (archive.html) ───────────────────────────── */
(function(){
  const doors = document.getElementById('door-list');
  if(!doors || typeof ARCHIVE_DOORS === 'undefined') return;

  doors.innerHTML = ARCHIVE_DOORS.map((d,n)=>`
    <a class="door" href="archive-${d.key}.html">
      <img src="${d.cover}" alt="${d.title}">
      <span class="door-idx">${String(n+1).padStart(2,'0')}</span>
      <span class="door-veil"></span>
      <span class="door-label"><b>${d.title}</b><i>${d.meta}</i></span>
    </a>`).join('');
})();

/* ── Gallery grid (archive-*.html) ──────────────────────────── */
(function(){
  const gal = document.getElementById('gallery-grid');
  if(!gal || typeof GALLERIES === 'undefined') return;

  const key = gal.dataset.gallery;
  const data = GALLERIES[key];
  if(!data) return;

  const labelEl = document.getElementById('gallery-label');
  const titleEl = document.getElementById('gallery-title');
  const subEl   = document.getElementById('gallery-subtitle');
  if(labelEl) labelEl.textContent = data.label;
  if(titleEl) titleEl.textContent = data.title;
  if(subEl)   subEl.textContent   = data.subtitle;
  document.title = `${data.title} — Archive — Bella Youm`;

  gal.innerHTML = data.items.map(it=>{
    if(it.slot) return `<figure class="${it.size} slot"></figure>`;
    return `<figure class="${it.size}"><img src="${data.folder}/${it.src}" alt="${it.caption}"><figcaption>${it.caption}</figcaption></figure>`;
  }).join('');
})();
