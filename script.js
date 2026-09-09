/* 渲染与交互；日常更新请只编辑 content.js。使用普通脚本加载。 */
(() => {
  'use strict';
  const d = window.PORTFOLIO;
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const multiline = v => esc(v).replace(/\n/g, '<br>');
  const arrow = '<span aria-hidden="true">↗</span>';
  const label = text => `<p class="eyebrow">${esc(text)}</p>`;
  const cv = () => `<a class="button cv-link" href="${esc(d.contact.cv)}" download>${esc(d.ui.cv)}<span aria-hidden="true">↓</span></a>`;
  const media = (item, className = '') => `<div class="media ${className}" data-mode="${esc(item.mode || 'inline')}" data-type="${esc(item.type)}" data-src="${esc(item.src)}" data-poster="${esc(item.poster || '')}" data-alt="${esc(item.alt)}"><div class="placeholder"><span class="placeholder-icon" aria-hidden="true">${item.type === 'video' ? '▷' : '+'}</span><span>${esc(item.type === 'video' ? d.ui.videoPlaceholder : d.ui.imagePlaceholder)}</span><small>${esc(item.type === 'video' ? d.ui.videoHint : d.ui.imageHint)}</small></div></div>`;
  const gallery = images => `<div class="gallery">${images.map((im,i)=>`<figure>${media({type:'image',...im})}<figcaption><span>0${i+1}</span>${esc(im.alt)}</figcaption></figure>`).join('')}</div>`;
  const renderProcess = c => c.processSteps ? c.processSteps.map(step=>`<div class="process-step"><h4>${step.label?`${esc(step.label)}<br>`:''}${esc(step.title)}</h4><p>${esc(step.text)}</p>${step.materials?step.materials.map(m=>`<div><h4>${esc(m.title)}</h4>${m.text?`<p class="process-note">${multiline(m.text)}</p>`:''}${m.src?gallery([{src:m.src,alt:m.alt||m.title}]):''}</div>`).join(''):''}${step.gallery && (!Array.isArray(step.gallery)||step.gallery.length)?gallery(Array.isArray(step.gallery)?step.gallery:c.gallery):''}${step.points?`<ul class="process-chips">${step.points.map(point=>`<li>${esc(point)}</li>`).join('')}</ul>`:''}${step.note?`<p class="process-note">${esc(step.note)}</p>`:''}${step.video?media(c.media):''}</div>`).join('') : `<h4>${esc(d.ui.process)}</h4><ol class="process-chips">${c.workflow.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><h4>${esc(d.ui.output)}</h4><p>${esc(c.output)}</p>${media(c.media)}${gallery(c.gallery)}`;
  const evidenceFigure = im => `<figure class="dirty-evidence"><button type="button" class="dirty-evidence-button" data-evidence="${esc(im.original || im.src)}" data-alt="${esc(im.alt)}" aria-label="${esc(d.ui.image)}：${esc(im.alt)}"><img src="${esc(im.src)}" alt="${esc(im.alt)}" loading="lazy"></button>${im.label || im.caption ? `<figcaption>${im.label ? `<span>${esc(im.label)}</span>` : ''}${im.caption ? `<p>${esc(im.caption)}</p>` : ''}</figcaption>` : ''}</figure>`;
  const dirtyStage = (step,c) => `<section class="dirty-stage dirty-${esc(step.kind)}"><div class="dirty-stage-copy">${label(step.label)}<h3>${esc(step.title)}</h3><p>${esc(step.text)}</p>${step.signal?`<small class="dirty-signal">${esc(step.signal)}</small>`:''}</div><div class="dirty-stage-evidence">${step.kind==='film'?media(c.media,'dirty-film-media'):step.kind==='music'?`${evidenceFigure(step.images[0])}<div class="dirty-music-excerpt"><h4>${esc(step.excerptTitle)}</h4><ul>${step.music.map(t=>`<li>${esc(t)}</li>`).join('')}</ul><blockquote>${multiline(step.lyrics)}</blockquote></div>`:step.images.map(evidenceFigure).join('')}${step.tags?`<div class="dirty-production-tags">${step.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>`:''}</div></section>`;
  const caseControl=(open,close,id,tag='button')=>`<${tag} ${tag==='button'?'type="button"':''} class="case-toggle" aria-expanded="false" aria-controls="${esc(id)}" data-open-label="${esc(open)}" data-close-label="${esc(close)}"><span data-case-label>${esc(open)}</span><span class="case-toggle-icon" aria-hidden="true">+</span></${tag}>`;
  const dirtyCase = c => `<article class="case case-dirty" id="${esc(c.id)}"><div class="dirty-overview"><div class="dirty-cover">${media({type:'image',src:c.cover,alt:c.coverAlt})}</div><div class="case-info">${label(c.category)}<h3><span>${esc(c.number)} /</span>${esc(c.title)}</h3><h4 class="dirty-subtitle">${esc(c.subtitle)}</h4><p>${esc(c.summary)}</p><dl><div><dt>${esc(d.ui.role)}</dt><dd>${esc(c.role)}</dd></div><div><dt>${esc(d.ui.tools)}</dt><dd>${esc(c.tools)}</dd></div></dl></div></div><details class="dirty-details">${caseControl(d.ui.details,d.ui.hideDetails,'dirty-process','summary')}<div class="dirty-process" id="dirty-process">${c.stages.map(step=>dirtyStage(step,c)).join('')}</div></details></article>`;
  const adCard = (ad,group,mosaic=false) => `<figure class="ad-card"><button type="button" class="ad-play" data-ad-src="${esc(ad.src)}" data-ad-poster="${esc(ad.poster)}" data-ad-title="${esc(group.title)} · ${esc(ad.title)}" aria-label="${esc(d.ui.play)}：${esc(group.title)} · ${esc(ad.title)}"><img src="${esc(ad.poster)}" alt="${esc(group.title)} · ${esc(ad.title)}" loading="lazy"><span class="ad-play-mark" aria-hidden="true">▷</span></button>${mosaic?'':`<figcaption>${esc(ad.title)}</figcaption>`}</figure>`;
  const adCase = c => `<article class="case case-ads" id="${esc(c.id)}"><div class="ad-overview"><div class="ad-preview"><div class="ad-mosaic">${c.groups.map(g=>g.videos.map(v=>adCard(v,g,true)).join('')).join('')}</div><div class="cover-caption"><span>${esc(c.previewCaption)}</span><span>${esc(c.number)}</span></div></div><div class="case-info">${label(c.category)}<h3><span>${esc(c.number)} /</span>${esc(c.title)}</h3><p>${esc(c.summary)}</p><dl><div><dt>${esc(d.ui.role)}</dt><dd>${esc(c.role)}</dd></div><div><dt>${esc(d.ui.tools)}</dt><dd>${esc(c.tools)}</dd></div></dl><p class="ad-support">${esc(c.note)}</p></div></div>${caseControl(c.cta,c.closeCta,'ad-gallery')}<div id="ad-gallery" class="ad-gallery" hidden><p class="ad-gallery-intro">${esc(c.galleryIntro)}</p>${c.groups.map(g=>`<section class="ad-group"><div>${label(g.label)}<h3>${esc(g.title)}</h3><p>${esc(g.description)}</p><p class="ad-tools">${esc(g.tools)}</p><p class="ad-group-caption">${esc(g.caption)}</p></div><div class="ad-pair">${g.videos.map(v=>adCard(v,g)).join('')}</div></section>`).join('')}</div></article>`;
  const workflowEvidence = im => `<figure class="wf-evidence"><button type="button" data-evidence="${esc(im.src)}" data-alt="${esc(im.alt)}" aria-label="${esc(d.ui.image)}：${esc(im.alt)}"><img src="${esc(im.src)}" alt="${esc(im.alt)}" loading="lazy"></button></figure>`;
  const workflowCase = c => `<article class="case case-workflows" id="${esc(c.id)}"><div class="wf-overview"><div class="wf-preview"><div class="wf-collage">${c.preview.map(workflowEvidence).join('')}</div><div class="cover-caption"><span>${esc(c.previewCaption)}</span><span>${esc(c.number)}</span></div></div><div class="case-info">${label(c.category)}<h3><span>${esc(c.number)} /</span>${esc(c.title)}</h3><p>${esc(c.summary)}</p><dl><div><dt>${esc(d.ui.role)}</dt><dd>${esc(c.role)}</dd></div><div><dt>${esc(d.ui.tools)}</dt><dd>${esc(c.tools)}</dd></div></dl></div></div>${caseControl(c.cta,c.closeCta,'workflow-examples')}<div class="wf-examples" id="workflow-examples" hidden><p class="wf-intro">${esc(c.intro)}</p>${c.examples.map((ex,i)=>`<section class="wf-example wf-example-${i+1}"><div class="wf-copy">${label(ex.label)}<p class="wf-category">${esc(ex.category)}</p><h3>${esc(ex.title)}</h3><dl><div><dt>${esc(c.problemLabel)}</dt><dd>${esc(ex.problem)}</dd></div><div><dt>${esc(c.solutionLabel)}</dt><dd>${esc(ex.solution)}</dd></div></dl><div class="wf-tags">${ex.tags.map(tag=>`<span>${esc(tag)}</span>`).join('')}</div></div><div class="wf-proof ${ex.images.length>1?'wf-proof-pair':''}">${ex.images.map(workflowEvidence).join('')}</div>${ex.sop?`<div class="wf-sop"><div>${label(ex.sop.label)}<h4>${esc(ex.sop.title)}</h4><p>${esc(ex.sop.text)}</p></div>${workflowEvidence(ex.sop.image)}</div>`:''}</section>`).join('')}</div></article>`;
  document.title = d.meta.title;
  document.querySelector('meta[name="description"]').content = d.meta.description;
  document.getElementById('skip').textContent = d.ui.skip;
  document.getElementById('header').innerHTML = `<a href="#" class="wordmark" aria-label="${esc(d.name)}">${esc(d.name)}<span>${esc(d.romanName)}</span></a><nav aria-label="${esc(d.ui.menu)}">${d.nav.map(n => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join('')}</nav><button class="menu-toggle" aria-expanded="false" aria-label="${esc(d.ui.menu)}"><span></span><span></span></button>`;
  document.getElementById('main').innerHTML = `
    <section class="hero wrap" id="top">${label(d.hero.eyebrow)}<div class="hero-heading"><h1>${multiline(d.hero.title.join('\n'))}</h1><div class="hero-aside"><span class="tiny-cross" aria-hidden="true">✳</span><p>${multiline(d.hero.intro)}</p><div class="actions"><a class="button primary" href="#works">${esc(d.ui.viewWorks)}${arrow}</a>${cv()}</div></div></div><div class="hero-baseline"><p>${esc(d.hero.focus)}</p><span>${esc(d.hero.english)}</span></div><div class="featured"><div class="featured-header">${label(d.featured.label)}<span>${esc(d.featured.category)}</span></div><div class="featured-copy"><h2>${esc(d.featured.title)}</h2><p class="featured-role">${esc(d.featured.role)}</p><p>${esc(d.featured.description)}</p></div>${media(d.featured.media, 'featured-media')}<a class="process-link" href="${esc(d.featured.processLink)}">${esc(d.featured.processLabel)}</a></div></section>
    <section class="intro wrap section" id="profile"><div>${label(d.intro.label)}<h2>${multiline(d.intro.title)}</h2></div><div><p class="intro-text">${esc(d.intro.text)}</p><div class="tags">${d.intro.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div></div></section>
    <section class="worlds wrap section" id="worlds"><div class="section-heading"><div>${label(d.worlds.label)}<h2>${esc(d.worlds.title)}</h2></div><p>${esc(d.worlds.description)}</p></div><div class="world-grid">${d.selectedWorlds.map((w,i)=>`<article class="world"><div><button type="button" class="world-surface" data-world-index="${i}" aria-label="${esc(d.viewer.open)}：${esc(w.title)}"><img src="${esc(w.poster)}" alt="${esc(w.title)}" loading="lazy"></button></div><div class="world-caption"><h3>${esc(w.title)}</h3></div><p class="world-descriptor">${esc(w.descriptor)}</p><p class="world-category">${esc(w.category)}</p></article>`).join('')}</div></section>
    <section class="works wrap section" id="works"><div class="section-heading"><div>${label(d.works.label)}<h2>${esc(d.works.title)}</h2></div><p>${esc(d.works.text)}</p></div><div class="cases">${d.cases.map(c => c.layout==='editorial-process' ? dirtyCase(c) : c.layout==='ad-showcase' ? adCase(c) : c.layout==='workflow-showcase' ? workflowCase(c) : `<article class="case" id="${esc(c.id)}"><div class="case-visual"><div class="case-cover">${media({type:'image',src:c.cover,alt:c.title})}<div class="cover-caption"><span>${esc(c.tag)}</span><span>${esc(c.number)}</span></div></div></div><div class="case-info">${label(c.category)}<h3><span>${esc(c.number)} /</span>${esc(c.title)}</h3><p>${esc(c.summary)}</p><dl><div><dt>${esc(d.ui.role)}</dt><dd>${esc(c.role)}</dd></div><div><dt>${esc(d.ui.tools)}</dt><dd>${esc(c.tools)}</dd></div></dl><details><summary><span data-details-label>${esc(d.ui.details)}</span><span class="detail-plus" aria-hidden="true">+</span></summary><div class="case-expanded">${renderProcess(c)}</div></details></div></article>`).join('')}</div></section>
    <section class="workflow" id="workflow"><div class="wrap section"><div class="workflow-header"><div>${label(d.workflow.label)}<h2>${multiline(d.workflow.title)}</h2></div><p>${esc(d.workflow.text)}</p></div><ol class="steps">${d.workflow.steps.map((s,i)=>`<li><div class="step-top"><span>0${i+1}</span><span aria-hidden="true">${i===5?'↗':'→'}</span></div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p><small>${esc(s.tag)}</small></li>`).join('')}</ol></div></section>
    <section class="experience wrap section" id="experience">${label(d.experience.label)}<h2>${esc(d.experience.title)}</h2><div class="experience-list">${d.experience.items.map((x,i)=>`<article><span class="experience-index">0${i+1}</span><div><h3>${esc(x.company)}</h3><p class="experience-extra">${esc(x.extra)}</p><p class="experience-role">${esc(x.role)}</p></div><ul>${x.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></article>`).join('')}</div></section>
    <section class="strengths wrap section">${label(d.strengths.label)}<h2>${esc(d.strengths.title)}</h2><div class="strength-grid">${d.strengths.items.map((s,i)=>`<article><span class="strength-number">0${i+1}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`).join('')}</div></section>
    <section class="contact" id="contact"><div class="wrap section">${label(d.contact.label)}<div class="contact-grid"><div><h2>${multiline(d.contact.title)}</h2></div><div class="contact-actions"><a class="email-address email-link" href="mailto:${esc(d.contact.email)}">${esc(d.contact.email)}${arrow}</a><a class="email-address phone-address" href="tel:${esc(d.contact.phone)}">${esc(d.contact.phone)}${arrow}</a><div class="actions">${cv()}<a class="button primary email-link" href="mailto:${esc(d.contact.email)}">${esc(d.ui.email)}${arrow}</a></div></div></div></div></section>`;
  document.getElementById('footer').innerHTML = `<div class="wrap"><span>${esc(d.name)} <span class="footer-sub">/ ${esc(d.brand)}</span></span><small>${esc(d.contact.footer)}</small><a href="#top" aria-label="${esc(d.ui.backTop)}">↑</a></div>`;
  let toastTimer;
  const toast = text => { const el = document.getElementById('toast'); el.textContent = text; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(()=>el.classList.remove('visible'),6000); };
  document.querySelectorAll('.cv-link').forEach(a=>a.addEventListener('click', e=>{ if(!d.contact.cvReady){ e.preventDefault(); toast(d.ui.cvMissing); } }));
  document.querySelectorAll('.email-link').forEach(a=>a.addEventListener('click',e=>{if(!d.contact.emailReady){e.preventDefault();toast(d.ui.emailMissing);}}));
  const menu = document.querySelector('.menu-toggle');
  const closeMenu = () => { document.getElementById('header').classList.remove('menu-open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label',d.ui.menu); };
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true'; document.getElementById('header').classList.toggle('menu-open',open); menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open?d.ui.closeMenu:d.ui.menu);});
  document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.querySelectorAll('.case-toggle').forEach(control=>{
    const panel=document.getElementById(control.getAttribute('aria-controls'));
    const sync=open=>{control.setAttribute('aria-expanded',String(open));control.querySelector('[data-case-label]').textContent=open?control.dataset.closeLabel:control.dataset.openLabel;control.querySelector('.case-toggle-icon').textContent=open?'×':'+';};
    if(control.tagName==='SUMMARY'){const details=control.closest('details');details.addEventListener('toggle',()=>sync(details.open));sync(details.open);}
    else control.addEventListener('click',()=>{const open=control.getAttribute('aria-expanded')!=='true';panel.hidden=!open;sync(open);});
  });
  document.querySelector('.process-link').addEventListener('click',()=>{const target=document.querySelector(d.featured.processLink);if(target)target.querySelector('details').open=true;});
  const dialog = document.getElementById('lightbox');
  document.getElementById('close-dialog').textContent = d.ui.close;
  let focusBeforeDialog;
  function showImage(src, alt) { focusBeforeDialog = document.activeElement; const target = document.getElementById('lightbox-content'); target.replaceChildren(); const img = new Image(); img.src=src; img.alt=alt; const caption = document.createElement('p'); caption.textContent=alt; target.append(img,caption); dialog.showModal(); document.body.classList.add('modal-open'); }
  document.querySelectorAll('[data-evidence]').forEach(button=>button.addEventListener('click',()=>showImage(button.dataset.evidence,button.dataset.alt)));
  document.querySelectorAll('[data-ad-src]').forEach(button=>button.addEventListener('click',()=>{
    focusBeforeDialog=button;
    document.querySelectorAll('video').forEach(v=>v.pause());
    const target=document.getElementById('lightbox-content');target.replaceChildren();
    const full=document.createElement('video');full.src=button.dataset.adSrc;full.poster=button.dataset.adPoster;full.playsInline=true;full.controls=true;full.setAttribute('aria-label',button.dataset.adTitle);
    full.addEventListener('error',()=>toast(d.ui.mediaError));
    const caption=document.createElement('p');caption.textContent=button.dataset.adTitle;target.append(full,caption);
    dialog.showModal();document.body.classList.add('modal-open');full.play().catch(()=>toast(d.ui.mediaError));
  }));
  // Load a single muted mosaic preview only on intentional desktop hover.
  if(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !navigator.connection?.saveData){
    document.querySelectorAll('.ad-mosaic .ad-play').forEach(button=>{
      let preview;
      const stop=()=>{if(preview){preview.pause();preview.removeAttribute('src');preview.load();preview.remove();preview=null;}};
      button.addEventListener('mouseenter',()=>{
        if(dialog.open || [...document.querySelectorAll('video')].some(v=>!v.paused&&!v.muted))return;
        preview=document.createElement('video');preview.muted=true;preview.playsInline=true;preview.preload='none';preview.setAttribute('aria-hidden','true');preview.src=button.dataset.adSrc;button.prepend(preview);preview.play().catch(()=>{});
      });
      button.addEventListener('mouseleave',stop);button.addEventListener('click',stop);
    });
  }
  dialog.addEventListener('close',()=>{dialog.querySelectorAll('video').forEach(v=>{v.pause();v.removeAttribute('src');v.load();});document.getElementById('lightbox-content').replaceChildren();document.body.classList.remove('modal-open'); focusBeforeDialog?.focus();});
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  // Missing assets remain intentional, styled placeholders. Images never show broken icons.
  document.querySelectorAll('.media').forEach(box=>{
    const {type,src,poster,alt}=box.dataset;
    if(type==='image') { const img=new Image(); img.alt=alt; img.decoding='async'; img.onload=()=>{const button=document.createElement('button'); button.className='image-button'; button.setAttribute('aria-label',`${d.ui.image}：${alt}`); button.append(img); button.addEventListener('click',()=>showImage(src,alt)); box.replaceChildren(button); box.classList.add('loaded');}; img.src=src; }
    else {
      const video=document.createElement('video');
      video.preload='metadata'; video.playsInline=true; video.controls=false;
      video.setAttribute('aria-label',alt);
      let posterLoaded=false;
      const posterImage=new Image(); posterImage.alt=alt;
      if(poster){posterImage.onload=()=>{posterLoaded=true; video.poster=poster; if(!box.classList.contains('loaded'))box.prepend(posterImage);};posterImage.src=poster;}
      const play = () => {
        if(box.dataset.mode==='modal'){
          focusBeforeDialog=document.activeElement;
          const target=document.getElementById('lightbox-content'); target.replaceChildren();
          const full=document.createElement('video'); full.src=src; full.playsInline=true; full.controls=true; full.setAttribute('aria-label',alt); if(posterLoaded)full.poster=poster;
          full.addEventListener('error',()=>toast(d.ui.mediaError));
          const caption=document.createElement('p');caption.textContent=alt;target.append(full,caption);
          dialog.showModal();document.body.classList.add('modal-open');
          full.play().catch(()=>toast(d.ui.mediaError));
        } else {
          video.controls=true;box.replaceChildren(video);video.play().catch(()=>toast(d.ui.mediaError));video.focus();
        }
      };
      video.addEventListener('loadedmetadata',()=>{
        const button=document.createElement('button');button.className='video-play';button.setAttribute('aria-label',`${d.ui.play}：${alt}`);
        const symbol=document.createElement('span');symbol.className='play-circle';symbol.textContent='▷';symbol.setAttribute('aria-hidden','true');button.append(symbol);button.addEventListener('click',play);
        box.replaceChildren(video,button);box.classList.add('loaded');
      },{once:true});
      video.addEventListener('error',()=>{
        if(box.classList.contains('loaded'))toast(d.ui.mediaError);
        else {const hint=box.querySelector('.placeholder small');if(hint)hint.textContent=d.ui.videoUnavailable;}
      });
      video.src=src;
    }
  });
  // Only one video plays at a time.
  document.addEventListener('play', e=>{if(e.target.tagName==='VIDEO')document.querySelectorAll('video').forEach(v=>{if(v!==e.target)v.pause();});},true);
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in-view');observer.unobserve(en.target);}});},{threshold:0.06});document.querySelectorAll('.case,.steps li,.strength-grid article').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
})();
