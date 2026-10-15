/* ============================================================
   COURSE ENGINE
   Renders COURSE_DATA (see content/*.js) into the #sheet-slot,
   manages navigation state, module completion, journal/DnD/branch/
   knowledge-check interactivity, and SCORM read/write.
   ============================================================ */

const State = {
  moduleIdx: 0,
  pageIdx: 0,
  completedPages: {},   // "m-p" -> true
  journalText: {},      // pageKey -> text
  kcResults: {},        // pageKey -> {correct, total}
  finalAssessment: { answers:{}, submitted:false, score:0, max:0 },
  moduleStamped: {}      // moduleIdx -> true
};

function pageKey(m,p){ return `${m}-${p}`; }

function saveState(){
  SCORM.saveSuspendData(State);
  SCORM.setLocation(`${State.moduleIdx}.${State.pageIdx}`);
}
function loadState(){
  const saved = SCORM.loadSuspendData();
  if (saved){ Object.assign(State, saved); }
}

/* ---------- Progress calculations ---------- */
function totalPages(){ return COURSE_DATA.reduce((acc,m)=>acc+m.pages.length,0); }
function completedCount(){ return Object.keys(State.completedPages).length; }
function moduleComplete(mIdx){
  const mod = COURSE_DATA[mIdx];
  for(let p=0;p<mod.pages.length;p++){ if(!State.completedPages[pageKey(mIdx,p)]) return false; }
  return true;
}

/* ---------- Render dispatch ---------- */
const RENDERERS = {
  welcome: renderWelcome,
  outcomes: renderOutcomes,
  timeline: renderTimeline,
  scenario: renderScenario,
  video: renderVideo,
  journal: renderJournal,
  tps: renderTPS,
  dnd: renderDnd,
  branch: renderBranch,
  kc: renderKC,
  summary: renderSummary,
  selfassessment: renderPPSA,
  finalassessment: renderFinalAssessment,
  certificate: renderCertificate
};

function renderCurrentPage(){
  const mod = COURSE_DATA[State.moduleIdx];
  const page = mod.pages[State.pageIdx];
  const slot = document.getElementById('sheet-slot');
  slot.innerHTML = '';
  const fn = RENDERERS[page.type];
  const el = fn ? fn(page, mod) : document.createElement('div');
  slot.appendChild(el);
  buildFooter(mod, page);
  updateRail();
  updateVitals();
  window.scrollTo({top:0, behavior:'instant'});
  State.completedPages[pageKey(State.moduleIdx,State.pageIdx)] = true;
  saveState();
  checkCourseCompletion();
}

/* ---------- Shell builders ---------- */
function el(tag, cls, html){
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function buildFooter(mod, page){
  const footer = document.getElementById('nav-footer');
  footer.innerHTML = '';
  const prevBtn = el('button','btn btn-ghost','&larr; Back');
  prevBtn.onclick = goPrev;
  prevBtn.disabled = (State.moduleIdx===0 && State.pageIdx===0);

  const isLastPageOfModule = State.pageIdx === mod.pages.length - 1;
  const isLastModule = State.moduleIdx === COURSE_DATA.length - 1;
  let label = 'Continue &rarr;';
  if (isLastPageOfModule && isLastModule) label = 'Finish course &rarr;';
  else if (isLastPageOfModule) label = 'Next module &rarr;';
  const nextBtn = el('button','btn btn-primary', label);
  nextBtn.onclick = goNext;
  nextBtn.id = 'next-btn';

  footer.appendChild(prevBtn);
  footer.appendChild(nextBtn);
}

function goPrev(){
  if (State.pageIdx>0){ State.pageIdx--; }
  else if (State.moduleIdx>0){ State.moduleIdx--; State.pageIdx = COURSE_DATA[State.moduleIdx].pages.length-1; }
  renderCurrentPage();
}
function goNext(){
  const mod = COURSE_DATA[State.moduleIdx];
  if (State.pageIdx < mod.pages.length-1){ State.pageIdx++; }
  else if (State.moduleIdx < COURSE_DATA.length-1){
    if (!State.moduleStamped[State.moduleIdx]) stampModule(State.moduleIdx);
    State.moduleIdx++; State.pageIdx = 0;
  } else {
    if (!State.moduleStamped[State.moduleIdx]) stampModule(State.moduleIdx);
  }
  renderCurrentPage();
}
function jumpTo(mIdx){
  State.moduleIdx = mIdx; State.pageIdx = 0; renderCurrentPage();
}
function stampModule(mIdx){ State.moduleStamped[mIdx]=true; saveState(); }

function updateRail(){
  document.querySelectorAll('.tab').forEach(t=>{
    const idx = parseInt(t.dataset.idx,10);
    t.classList.toggle('active', idx===State.moduleIdx);
    t.classList.toggle('done', moduleComplete(idx));
  });
}
function updateVitals(){
  const pct = Math.round((completedCount()/totalPages())*100);
  const bar = document.getElementById('vitals-fill');
  if (bar) bar.setAttribute('width', pct+'%');
  const meta = document.getElementById('vitals-pct');
  if (meta) meta.textContent = pct+'% complete';
  const modmeta = document.getElementById('vitals-module');
  if (modmeta) modmeta.textContent = COURSE_DATA[State.moduleIdx].title;
}
function checkCourseCompletion(){
  if (completedCount() >= totalPages()){
    SCORM.setCompletion('completed');
  }
}

/* ============================================================
   TEMPLATE 1 — WELCOME
   ============================================================ */
function renderWelcome(page){
  const w = el('div');
  w.innerHTML = `
    <div class="eyebrow"><span class="code">${page.code||'START'}</span> Welcome</div>
    <h2 style="font-size:34px;max-width:16ch;">${page.title}</h2>
    <p class="lede">${page.lede}</p>
    <div class="grid grid-3 mt-24">
      ${(page.stats||[]).map(s=>`
        <div class="card">
          <small class="tag">${s.label}</small>
          <div style="font-family:var(--f-display);font-size:26px;color:var(--teal-dark)">${s.value}</div>
        </div>`).join('')}
    </div>
    ${page.note ? `<div class="scenario mt-24"><strong>Why this matters at the bedside:</strong> ${page.note}</div>`:''}
  `;
  return w;
}

/* ============================================================
   TEMPLATE 2 — LEARNING OUTCOMES (Bloom-tagged)
   ============================================================ */
function renderOutcomes(page){
  const w = el('div');
  w.innerHTML = `
    <div class="eyebrow"><span class="code">${page.code||'OUTCOMES'}</span> Learning Outcomes</div>
    <h2>${page.title||'By the end of this module, you will be able to:'}</h2>
    <div class="mt-24">
      ${page.outcomes.map(o=>`
        <div class="card" style="margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:14px;">
          <span>${o.text}</span>
          <span class="chip b${o.bloomLevel}">${o.bloom}</span>
        </div>`).join('')}
    </div>
    <p class="mt-24" style="font-size:13px;color:var(--ink-soft);">Bloom's Taxonomy tags (Remember &rarr; Create) indicate the cognitive depth expected at each checkpoint.</p>
  `;
  return w;
}

/* ============================================================
   TEMPLATE 3 — INTERACTIVE TIMELINE
   ============================================================ */
function renderTimeline(page){
  const w = el('div');
  w.innerHTML = `
    <div class="eyebrow"><span class="code">${page.code||'TIMELINE'}</span> ${page.kicker||'Interactive Timeline'}</div>
    <h2>${page.title}</h2>
    <p class="lede">${page.lede||''}</p>
    <div class="timeline mt-24">
      ${page.items.map((it,i)=>`
        <div class="tl-item" data-i="${i}">
          <div class="tl-dot">${i+1}</div>
          <div class="tl-period">${it.period}</div>
          <h4>${it.title}</h4>
          <p>${it.desc}</p>
          ${it.action?`<p class="mono" style="font-size:12.5px;color:var(--teal-dark);background:#EAF3F2;display:inline-block;padding:4px 10px;border-radius:6px;">Preceptor action: ${it.action}</p>`:''}
        </div>`).join('')}
    </div>
  `;
  // click-to-highlight interaction
  setTimeout(()=>{
    w.querySelectorAll('.tl-item').forEach(item=>{
      item.addEventListener('click', ()=>{
        w.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('active'));
        item.classList.add('active');
      });
    });
  },0);
  return w;
}

/* ============================================================
   TEMPLATE 4 — CLINICAL SCENARIO (with dialogue)
   ============================================================ */
function renderScenario(page){
  const w = el('div');
  w.innerHTML = `
    <div class="eyebrow"><span class="code">${page.code||'SCENARIO'}</span> ${page.kicker||'Clinical Scenario'}</div>
    <h2>${page.title}</h2>
    <div class="scenario ${page.alert?'alert':''}">${page.setup}</div>
    ${(page.dialogue||[]).map(d=>`
      <div class="dialogue ${d.role}">
        <div class="who">${d.name}</div>
        <div class="bubble">${d.text}</div>
      </div>`).join('')}
    ${page.tip?`<div class="card mt-24"><h4>Key Tip</h4><p style="margin:0;">${page.tip}</p></div>`:''}
  `;
  return w;
}

/* ============================================================
   TEMPLATE 5 — VIDEO PLACEHOLDER
   ============================================================ */
function renderVideo(page){
  const w = el('div');
  const hasSrc = !!page.src;
  const hasBeats = Array.isArray(page.beats) && page.beats.length;
  w.innerHTML = `
    <div class="eyebrow"><span class="code">${page.code||'MEDIA'}</span> Video Demonstration</div>
    <h2>${page.title}</h2>
    <p class="lede">${page.lede||''}</p>
    ${hasSrc ? `
    <video class="mt-24" controls preload="metadata" style="width:100%;border-radius:var(--radius-sm);background:#000;" ${page.poster?`poster="${page.poster}"`:''}>
      <source src="${page.src}" type="video/mp4">
      ${page.captions?`<track kind="captions" src="${page.captions}" srclang="en" label="English" default>`:''}
      ${page.captionsAr?`<track kind="captions" src="${page.captionsAr}" srclang="ar" label="&#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577;">`:''}
      Your browser does not support embedded video — use the download link in the course notes.
    </video>` : `
    <div class="video-slot mt-24">
      <div class="play">&#9658;</div>
      <div><strong>${page.runtime||'3–5 min'} placeholder</strong></div>
      <div class="note">Production note: ${page.productionNote||'Record a bedside-style demonstration matching this script; captions required (UDL).'}</div>
    </div>`}
    ${page.learningTie?`<div class="card mt-24"><h4>Why this scene</h4><p style="margin:0;">${page.learningTie}</p></div>`:''}
    ${hasBeats ? `
      <div class="mt-24">
        <div class="eyebrow" style="margin-bottom:6px;">Shot-by-Shot Script &middot; ${page.runtime||''}</div>
        <table class="mini script-table">
          <thead><tr><th style="width:60px;">Time</th><th style="width:110px;">Speaker</th><th>Line / Action</th><th style="width:26%;">Direction</th></tr></thead>
          <tbody>
            ${page.beats.map(b=>`
              <tr class="${b.speaker==='DIRECTION'?'direction-row':''}">
                <td class="mono">${b.time}</td>
                <td class="mono">${b.speaker}</td>
                <td>${b.line}</td>
                <td style="color:var(--ink-soft);font-size:12.5px;">${b.direction||''}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      ${page.castNotes?`<div class="scenario mt-24"><strong>Casting &amp; setting:</strong> ${page.castNotes}</div>`:''}
      ${page.captionNote?`<p class="mono mt-12" style="font-size:12px;color:var(--ink-soft);">UDL / captioning: ${page.captionNote}</p>`:''}
    ` : (page.script?`<details class="mt-24"><summary style="cursor:pointer;font-weight:600;">View narration script</summary><p class="mt-12">${page.script}</p></details>`:'')}
  `;
  return w;
}

/* ============================================================
   TEMPLATE 14 — PPSA FULL SELF-ASSESSMENT (Barker & Pittman instrument)
   ============================================================ */
function renderPPSA(page){
  const key = pageKey(State.moduleIdx, State.pageIdx);
  if (!State.ppsa) State.ppsa = {};
  if (!State.ppsa[key]) State.ppsa[key] = {};
  const answers = State.ppsa[key];

  const totalItems = page.domains.reduce((n,d)=>n+d.items.length,0);

  const w = el('div');
  const domainsHtml = page.domains.map((d,di)=>`
    <details class="ppsa-domain" ${di===0?'open':''} data-di="${di}">
      <summary>
        <span class="ppsa-domain-title">${d.code}. ${d.name}</span>
        <span class="ppsa-domain-count mono" data-count="${di}">0/${d.items.length}</span>
      </summary>
      <div class="ppsa-items">
        ${d.items.map((txt,ii)=>`
          <div class="ppsa-item">
            <p class="ppsa-item-text">${ii+1+domainOffset(page,di)}. ${txt}</p>
            <div class="ppsa-scale" data-di="${di}" data-ii="${ii}">
              ${[1,2,3,4].map(v=>`
                <label class="ppsa-opt">
                  <input type="radio" name="ppsa-${di}-${ii}" value="${v}">
                  <span>${v}</span>
                </label>`).join('')}
            </div>
          </div>`).join('')}
      </div>
    </details>
  `).join('');

  w.innerHTML = `
    <div class="eyebrow"><span class="code">${page.code||'PPSA'}</span> ${page.kicker||'Self-Assessment'}</div>
    <h2>${page.title}</h2>
    <p class="lede">${page.lede}</p>
    <div class="ppsa-scale-key mono">1 Minimum &nbsp;·&nbsp; 2 Average &nbsp;·&nbsp; 3 Superior &nbsp;·&nbsp; 4 Excellent</div>
    <div class="ppsa-progress mt-12">
      <div class="ppsa-progress-bar"><div class="ppsa-progress-fill" id="ppsa-fill" style="width:0%;"></div></div>
      <span class="mono" id="ppsa-progress-label">0 / ${totalItems} rated</span>
    </div>
    <div class="mt-24">${domainsHtml}</div>
    <div class="mt-24">
      <button class="btn btn-primary" id="ppsa-calc" disabled>Calculate my results</button>
      <span class="mono" id="ppsa-remaining" style="margin-left:12px;color:var(--ink-soft);font-size:12.5px;"></span>
    </div>
    <div id="ppsa-results" class="mt-24"></div>
  `;

  function domainOffset(page, di){
    let n = 0;
    for (let i=0;i<di;i++) n += page.domains[i].items.length;
    return n;
  }

  function refreshProgress(){
    let answered = 0;
    page.domains.forEach((d,di)=>{
      let a = 0;
      d.items.forEach((_,ii)=>{ if (answers[di+'-'+ii] !== undefined) a++; });
      answered += a;
      const countEl = w.querySelector(`[data-count="${di}"]`);
      if (countEl) countEl.textContent = `${a}/${d.items.length}`;
    });
    w.querySelector('#ppsa-fill').style.width = Math.round(answered/totalItems*100)+'%';
    w.querySelector('#ppsa-progress-label').textContent = `${answered} / ${totalItems} rated`;
    const remaining = totalItems - answered;
    w.querySelector('#ppsa-remaining').textContent = remaining>0 ? `${remaining} item${remaining===1?'':'s'} remaining` : 'All items rated — ready to calculate.';
    w.querySelector('#ppsa-calc').disabled = remaining>0;
    saveState();
  }

  w.querySelectorAll('.ppsa-scale input').forEach(inp=>{
    inp.addEventListener('change', ()=>{
      const wrap = inp.closest('.ppsa-scale');
      const di = wrap.dataset.di, ii = wrap.dataset.ii;
      answers[di+'-'+ii] = parseInt(inp.value,10);
      refreshProgress();
    });
  });

  // restore any saved answers
  Object.keys(answers).forEach(k=>{
    const inp = w.querySelector(`input[name="ppsa-${k}"][value="${answers[k]}"]`);
    if (inp) inp.checked = true;
  });
  refreshProgress();

  w.querySelector('#ppsa-calc').addEventListener('click', ()=>{
    const domainScores = page.domains.map((d,di)=>{
      let sum=0;
      d.items.forEach((_,ii)=> sum += answers[di+'-'+ii]);
      return { name:d.name, code:d.code, avg: sum/d.items.length, n:d.items.length };
    });
    const overall = domainScores.reduce((s,d)=>s+d.avg*d.n,0) / totalItems;
    let band, bandClass;
    if (overall>=3.5){ band='Excellent — Ready'; bandClass='good'; }
    else if (overall>=3.0){ band='Good — Prepared'; bandClass='good'; }
    else if (overall>=2.0){ band='Developing — Needs Support'; bandClass='caution'; }
    else { band='Beginning — Not Ready'; bandClass='risk'; }

    const lowest = [...domainScores].sort((a,b)=>a.avg-b.avg)[0];

    w.querySelector('#ppsa-results').innerHTML = `
      <div class="card">
        <h4>Your PPSA Results</h4>
        <table class="mini mt-12">
          <thead><tr><th>Domain</th><th>Items</th><th>Average</th></tr></thead>
          <tbody>
            ${domainScores.map(d=>`<tr><td>${d.code}. ${d.name}</td><td>${d.n}</td><td class="mono">${d.avg.toFixed(2)}</td></tr>`).join('')}
          </tbody>
        </table>
        <div class="branch-outcome ${bandClass} mt-24">
          <strong>Overall average: ${overall.toFixed(2)} / 4.0 — ${band}</strong>
          <p style="margin:8px 0 0;">Your lowest-scoring domain is <strong>${lowest.code}. ${lowest.name}</strong> (${lowest.avg.toFixed(2)}) — a good candidate for your development plan and mentorship focus.</p>
        </div>
        <div class="center mt-24">
          <div class="stamp pop">PPSA<span class="mark">${overall.toFixed(1)}</span>73-Item Self-Assessment</div>
        </div>
      </div>
    `;
    State.ppsa[key+'-result'] = { overall, band, domainScores };
    SCORM.recordInteraction('ppsa-'+key,'other', overall.toFixed(2), String(page.passRate||3.0), overall>=3.0?'correct':'incorrect', page.title);
    saveState();
  });

  return w;
}

/* ============================================================
   TEMPLATE 6 — REFLECTION JOURNAL
   ============================================================ */
function renderJournal(page){
  const key = pageKey(State.moduleIdx, State.pageIdx);
  const w = el('div');
  w.innerHTML = `
    <div class="eyebrow"><span class="code">${page.code||'REFLECT'}</span> Reflection Journal</div>
    <h2>${page.title}</h2>
    <p class="lede">${page.prompt}</p>
    <div class="journal mt-24">
      <textarea placeholder="${page.placeholder||'Write freely — this entry saves automatically to your course record...'}">${State.journalText[key]||''}</textarea>
      <div class="savebar"><span>Autosaves as you type · private to your record</span><span class="saved" id="saved-flag">Saved &#10003;</span></div>
    </div>
  `;
  setTimeout(()=>{
    const ta = w.querySelector('textarea');
    const flag = w.querySelector('#saved-flag');
    let t;
    ta.addEventListener('input', ()=>{
      State.journalText[key] = ta.value;
      saveState();
      flag.classList.add('show');
      clearTimeout(t);
      t = setTimeout(()=>flag.classList.remove('show'), 900);
    });
  },0);
  return w;
}

/* ============================================================
   TEMPLATE 7 — THINK-PAIR-SHARE (async alternative)
   ============================================================ */
function renderTPS(page){
  const w = el('div');
  w.innerHTML = `
    <div class="eyebrow"><span class="code">${page.code||'TPS'}</span> Think–Pair–Share (Online Alternative)</div>
    <h2>${page.title}</h2>
    <div class="mt-24">
      <div class="tps-step"><div class="tps-num">1</div><div>
        <strong>Think</strong> — ${page.think}
      </div></div>
      <div class="tps-step"><div class="tps-num">2</div><div>
        <strong>Pair (async)</strong> — ${page.pair||'Post your response in the cohort discussion board, or discuss with a fellow preceptor before your next shift.'}
      </div></div>
      <div class="tps-step"><div class="tps-num">3</div><div>
        <strong>Share</strong> — ${page.share||'Compare your answer with the exemplar response below.'}
        <br><button class="btn btn-ghost reveal-btn">Reveal exemplar response</button>
        <div class="reveal-box">${page.exemplar}</div>
      </div></div>
    </div>
  `;
  setTimeout(()=>{
    const btn = w.querySelector('.reveal-btn');
    const box = w.querySelector('.reveal-box');
    btn.addEventListener('click', ()=>{ box.classList.add('show'); btn.disabled=true; btn.textContent='Exemplar revealed'; });
  },0);
  return w;
}

/* ============================================================
   TEMPLATE 8 — DRAG AND DROP
   ============================================================ */
function renderDnd(page){
  const w = el('div');
  const chipsHtml = page.items.map((it,i)=>`<div class="dnd-chip" draggable="true" data-i="${i}">${it.label}</div>`).join('');
  const targetsHtml = page.targets.map((t,ti)=>`
    <div class="dnd-target" data-ti="${ti}">
      <span class="label">${t.label}</span>
    </div>`).join('');
  w.innerHTML = `
    <div class="eyebrow"><span class="code">${page.code||'ACTIVITY'}</span> Drag & Drop</div>
    <h2>${page.title}</h2>
    <p class="lede">${page.instructions}</p>
    <div class="dnd-wrap mt-24">
      <div>
        <small class="tag">Drag from here</small>
        <div class="dnd-pool" id="dnd-pool">${chipsHtml}</div>
      </div>
      <div>
        <small class="tag">Drop onto the matching category</small>
        <div id="dnd-targets">${targetsHtml}</div>
        <div id="dnd-result" class="mt-12"></div>
      </div>
    </div>
  `;
  setTimeout(()=>{
    const chips = w.querySelectorAll('.dnd-chip');
    const targets = w.querySelectorAll('.dnd-target');
    let dragged = null;
    chips.forEach(c=>{
      c.addEventListener('dragstart', ()=>{ dragged=c; });
    });
    targets.forEach(t=>{
      t.addEventListener('dragover', e=>{ e.preventDefault(); t.classList.add('over'); });
      t.addEventListener('dragleave', ()=> t.classList.remove('over'));
      t.addEventListener('drop', e=>{
        e.preventDefault(); t.classList.remove('over');
        if (!dragged || dragged.classList.contains('placed')) return;
        const itemIdx = parseInt(dragged.dataset.i,10);
        const targetIdx = parseInt(t.dataset.ti,10);
        const correct = page.items[itemIdx].targetIdx === targetIdx;
        const chipClone = dragged.cloneNode(true);
        chipClone.classList.remove('placed'); chipClone.removeAttribute('draggable');
        chipClone.style.cursor='default';
        t.appendChild(chipClone);
        t.classList.add(correct?'correct':'wrong');
        dragged.classList.add('placed');
        dragged.setAttribute('draggable','false');
        checkDndDone();
      });
    });
    function checkDndDone(){
      const placed = w.querySelectorAll('.dnd-chip.placed').length;
      if (placed === page.items.length){
        const correctCount = w.querySelectorAll('.dnd-target.correct').length;
        document.getElementById('dnd-result').innerHTML =
          `<div class="card"><strong>${correctCount}/${page.targets.length} categories matched correctly.</strong> ${page.feedback||''}</div>`;
        SCORM.recordInteraction('dnd-'+pageKey(State.moduleIdx,State.pageIdx),'other', String(correctCount), String(page.targets.length), correctCount===page.targets.length?'correct':'incorrect', page.title);
      }
    }
  },0);
  return w;
}

/* ============================================================
   TEMPLATE 9 — BRANCHING CLINICAL DECISION
   ============================================================ */
function renderBranch(page){
  const w = el('div');
  function renderNode(nodeId){
    const node = page.nodes[nodeId];
    w.innerHTML = `
      <div class="eyebrow"><span class="code">${page.code||'DECISION'}</span> Branching Scenario</div>
      <h2>${page.title}</h2>
      <div class="scenario">${node.prompt}</div>
      <div class="mt-24">
        ${node.options.map((opt,oi)=>`<button class="branch-option" data-oi="${oi}">${opt.text}</button>`).join('')}
      </div>
      <div id="branch-outcome"></div>
    `;
    w.querySelectorAll('.branch-option').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const oi = parseInt(btn.dataset.oi,10);
        const opt = node.options[oi];
        w.querySelectorAll('.branch-option').forEach(b=>b.disabled=true);
        const out = document.getElementById('branch-outcome');
        out.innerHTML = `<div class="branch-outcome ${opt.severity}"><strong>${opt.severity==='good'?'Sound decision:':opt.severity==='caution'?'Workable, with a caveat:':'Reconsider:'}</strong> ${opt.feedback}
          ${opt.next ? `<div class="mt-12"><button class="btn btn-rust" id="branch-continue">Continue scenario &rarr;</button></div>` : ''}
        </div>`;
        SCORM.recordInteraction('branch-'+pageKey(State.moduleIdx,State.pageIdx)+'-'+nodeId,'choice', opt.text, '', opt.severity==='good'?'correct':'neutral', page.title);
        if (opt.next){
          document.getElementById('branch-continue').addEventListener('click', ()=>renderNode(opt.next));
        }
      });
    });
  }
  renderNode('start');
  return w;
}

/* ============================================================
   TEMPLATE 10 — KNOWLEDGE CHECK
   ============================================================ */
function renderKC(page){
  const w = el('div');
  const key = pageKey(State.moduleIdx,State.pageIdx);
  let idx = 0;
  let correctCount = 0;
  function renderQ(){
    const q = page.questions[idx];
    w.innerHTML = `
      <div class="eyebrow"><span class="code">${page.code||'CHECK'}</span> Knowledge Check ${idx+1} / ${page.questions.length}</div>
      <h2>${q.stem}</h2>
      <div class="mt-24">
        ${q.options.map((o,oi)=>`
          <div class="kc-option" data-oi="${oi}">
            <span class="kc-letter">${String.fromCharCode(65+oi)}</span><span>${o.text}</span>
          </div>`).join('')}
      </div>
      <div class="kc-feedback" id="kc-fb"></div>
      <div class="mt-24" id="kc-next-wrap" style="display:none;">
        <button class="btn btn-primary" id="kc-next">${idx<page.questions.length-1?'Next question':'See results'} &rarr;</button>
      </div>
    `;
    w.querySelectorAll('.kc-option').forEach(opt=>{
      opt.addEventListener('click', ()=>{
        if (w.dataset.answered) return;
        w.dataset.answered = "1";
        const oi = parseInt(opt.dataset.oi,10);
        const correct = q.options[oi].correct;
        opt.classList.add(correct?'correct':'incorrect');
        if(!correct){
          const rightIdx = q.options.findIndex(o=>o.correct);
          w.querySelectorAll('.kc-option')[rightIdx].classList.add('correct');
        } else { correctCount++; }
        const fb = document.getElementById('kc-fb');
        fb.classList.add('show', correct?'right':'wrong');
        fb.textContent = correct ? (q.feedbackCorrect||'Correct — well reasoned.') : (q.feedbackIncorrect||'Not quite — see the highlighted answer.');
        document.getElementById('kc-next-wrap').style.display='block';
        SCORM.recordInteraction('kc-'+key+'-'+idx,'choice', String.fromCharCode(65+oi), String.fromCharCode(65+q.options.findIndex(o=>o.correct)), correct?'correct':'incorrect', q.stem);
      });
    });
    document.getElementById('kc-next-wrap')?.addEventListener?.('click',()=>{});
    setTimeout(()=>{
      const nb = document.getElementById('kc-next');
      if(nb) nb.addEventListener('click', ()=>{
        w.dataset.answered = "";
        if (idx < page.questions.length-1){ idx++; renderQ(); }
        else {
          State.kcResults[key] = {correct:correctCount, total:page.questions.length};
          saveState();
          w.innerHTML = `
            <div class="eyebrow"><span class="code">${page.code||'CHECK'}</span> Knowledge Check — Results</div>
            <h2>${correctCount} / ${page.questions.length} correct</h2>
            <p class="lede">${correctCount===page.questions.length ? 'Excellent — full marks. You are ready to move on.' : 'Review the module content above if you would like another pass before continuing.'}</p>
            <div class="stamp big" style="margin:20px auto 0;">Verified<span class="mark">${correctCount}/${page.questions.length}</span>Knowledge Check</div>
          `;
          setTimeout(()=>w.querySelector('.stamp').classList.add('pop'),80);
        }
      });
    },0);
  }
  renderQ();
  return w;
}

/* ============================================================
   TEMPLATE 11 — MODULE SUMMARY
   ============================================================ */
function renderSummary(page, mod){
  const w = el('div');
  const showStamp = page.isModuleEnd !== false;
  w.innerHTML = `
    <div class="eyebrow"><span class="code">${page.code||'SUMMARY'}</span> ${page.kicker||'Module Summary'}</div>
    <h2>${page.title||'Key Takeaways'}</h2>
    ${page.lede?`<p class="lede">${page.lede}</p>`:''}
    <div class="grid ${page.cols===3?'grid-3':'grid-2'} mt-24">
      ${page.points.map(pt=>`<div class="card"><h4>${pt.title}</h4><p style="margin:0;">${pt.text}</p></div>`).join('')}
    </div>
    ${showStamp ? `
    <div class="center mt-24">
      <div class="stamp pop">Module<span class="mark">${mod.code}</span>Complete</div>
      <p style="font-family:var(--f-mono);font-size:12px;color:var(--ink-soft);margin-top:10px;">${mod.title} — competency acknowledged</p>
    </div>` : ''}
  `;
  return w;
}

/* ============================================================
   TEMPLATE 12 — FINAL COMPETENCY ASSESSMENT
   ============================================================ */
function renderFinalAssessment(page){
  const w = el('div');
  if (State.finalAssessment.submitted){
    return renderFinalResults(page);
  }
  const qHtml = page.questions.map((q,qi)=>`
    <div class="card mt-24" data-qi="${qi}">
      <small class="tag">${q.domain}</small>
      <h4>${qi+1}. ${q.stem}</h4>
      ${q.options.map((o,oi)=>`
        <label style="display:flex;gap:10px;align-items:center;padding:8px 0;cursor:pointer;">
          <input type="radio" name="fa-${qi}" value="${oi}"> <span>${o.text}</span>
        </label>`).join('')}
    </div>
  `).join('');
  w.innerHTML = `
    <div class="eyebrow"><span class="code">FINAL</span> Final Competency Assessment</div>
    <h2>${page.title}</h2>
    <p class="lede">${page.instructions}</p>
    ${qHtml}
    <div class="mt-24"><button class="btn btn-primary" id="fa-submit">Submit assessment</button>
    <span id="fa-warn" style="color:var(--alert);font-size:13px;margin-left:12px;"></span></div>
  `;
  setTimeout(()=>{
    document.getElementById('fa-submit').addEventListener('click', ()=>{
      const answers = {};
      let unanswered = 0;
      page.questions.forEach((q,qi)=>{
        const sel = w.querySelector(`input[name="fa-${qi}"]:checked`);
        if (!sel){ unanswered++; return; }
        answers[qi] = parseInt(sel.value,10);
      });
      if (unanswered>0){ document.getElementById('fa-warn').textContent = `Please answer all questions (${unanswered} remaining).`; return; }
      let score = 0;
      page.questions.forEach((q,qi)=>{ if(q.options[answers[qi]].correct) score++; });
      State.finalAssessment = { answers, submitted:true, score, max: page.questions.length };
      SCORM.setScore(score, page.questions.length);
      const pass = score/page.questions.length >= (page.passRate||0.8);
      SCORM.setSuccess(pass?'passed':'failed');
      SCORM.setCompletion('completed');
      saveState();
      const slot = document.getElementById('sheet-slot');
      slot.innerHTML=''; slot.appendChild(renderFinalResults(page));
      buildFooter(COURSE_DATA[State.moduleIdx], page);
      window.scrollTo({top:0});
    });
  },0);
  return w;
}
function renderFinalResults(page){
  const w = el('div');
  const {score, max} = State.finalAssessment;
  const pass = score/max >= (page.passRate||0.8);
  w.innerHTML = `
    <div class="eyebrow"><span class="code">FINAL</span> Assessment Result</div>
    <h2>${pass?'Competency Validated':'Not Yet Validated'}</h2>
    <p class="lede">You scored <strong>${score}/${max}</strong> (${Math.round(score/max*100)}%). Pass mark: ${Math.round((page.passRate||0.8)*100)}%.</p>
    <div class="center mt-24">
      <div class="stamp pop" style="border-color:${pass?'var(--gold)':'var(--alert)'};color:${pass?'var(--gold)':'var(--alert)'};">
        ${pass?'Competent':'Retry'}<span class="mark" style="color:${pass?'var(--gold)':'var(--alert)'};">${score}/${max}</span>COPA Validated
      </div>
    </div>
    ${pass ? '' : `<div class="mt-24 center"><button class="btn btn-rust" id="fa-retry">Retry assessment</button></div>`}
  `;
  if (!pass){
    setTimeout(()=>{
      document.getElementById('fa-retry').addEventListener('click', ()=>{
        State.finalAssessment = { answers:{}, submitted:false, score:0, max:0 };
        saveState();
        renderCurrentPage();
      });
    },0);
  }
  return w;
}

/* ============================================================
   TEMPLATE 13 — CERTIFICATE
   ============================================================ */
function renderCertificate(page){
  const w = el('div');
  const passed = State.finalAssessment.submitted && (State.finalAssessment.score/State.finalAssessment.max >= (page.passRate||0.8));
  if (!passed){
    w.innerHTML = `
      <div class="eyebrow"><span class="code">CERT</span> Certificate of Completion</div>
      <h2>Complete the final assessment first</h2>
      <p class="lede">Your certificate unlocks once you've validated competency on the Final Assessment (80% pass mark).</p>`;
    return w;
  }
  const name = State.learnerName || 'Preceptor Name';
  w.innerHTML = `
    <div class="eyebrow"><span class="code">CERT</span> Certificate of Completion</div>
    <div class="cert mt-24">
      <small class="tag">Nizwa Hospital · Clinical Education Program</small>
      <h2>Precepting Excellence</h2>
      <p style="color:var(--ink-soft);">This certifies that</p>
      <div class="name-line">${name}</div>
      <p style="color:var(--ink-soft);max-width:50ch;margin:0 auto;">has completed all six modules and validated competency on the final competency assessment, scoring ${State.finalAssessment.score}/${State.finalAssessment.max}, in the Precepting Excellence program for nurse preceptors.</p>
      <div class="grid grid-3 mt-24" style="max-width:520px;margin:24px auto 0;">
        <div class="stamp pop" style="margin:0 auto;">Foundations<span class="mark">✓</span></div>
        <div class="stamp pop" style="margin:0 auto;">Teaching<span class="mark">✓</span></div>
        <div class="stamp pop" style="margin:0 auto;">Evaluation<span class="mark">✓</span></div>
      </div>
      <p class="mono mt-24" style="font-size:11.5px;color:var(--ink-soft);">Issued ${new Date().toLocaleDateString()} · Verify via unit CPD coordinator</p>
      <div class="mt-24"><button class="btn btn-primary" onclick="window.print()">Print / Save as PDF</button></div>
    </div>
  `;
  return w;
}

/* ============================================================
   BOOT
   ============================================================ */
function buildRail(){
  const rail = document.getElementById('rail-tabs');
  rail.innerHTML = COURSE_DATA.map((m,i)=>`
    <div class="tab" data-idx="${i}">
      <span class="num">${m.code}</span> <span>${m.title}</span>
      <span class="stamp-check">&#10003;</span>
    </div>`).join('');
  rail.querySelectorAll('.tab').forEach(t=>{
    t.addEventListener('click', ()=> jumpTo(parseInt(t.dataset.idx,10)));
  });
}
function buildVitalsSvg(){
  const svg = document.getElementById('vitals');
  svg.innerHTML = `
    <svg width="100%" height="34" viewBox="0 0 1000 34" preserveAspectRatio="none">
      <polyline points="0,17 120,17 140,4 160,30 180,17 1000,17" fill="none" stroke="#D9D2C2" stroke-width="2"/>
      <clipPath id="vclip"><rect id="vitals-fill" x="0" y="0" width="0%" height="34"/></clipPath>
      <g clip-path="url(#vclip)">
        <polyline points="0,17 120,17 140,4 160,30 180,17 1000,17" fill="none" stroke="#A8542E" stroke-width="2.5"/>
      </g>
    </svg>`;
}

function boot(){
  loadState();
  buildRail();
  buildVitalsSvg();
  renderCurrentPage();
}
