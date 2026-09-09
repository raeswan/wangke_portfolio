/* Selected Worlds viewer. UI labels and work data live in content.js. */
(() => {
  'use strict';
  const {selectedWorlds:works,viewer:t}=window.PORTFOLIO;
  const surfaces=[...document.querySelectorAll('[data-world-index]')];
  const create=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text)el.textContent=text;return el;};
  const button=(label,text,cls)=>{const el=create('button',cls,text);el.type='button';el.setAttribute('aria-label',label);return el;};
  const dialog=create('dialog','world-viewer');dialog.setAttribute('aria-label',t.label);
  const shell=create('div','wv-shell'),head=create('div','wv-head'),count=create('span','wv-count'),close=button(t.close,'×','wv-close');
  head.append(count,close);
  const stage=create('div','wv-stage');
  const previous=button(t.previous,'','wv-neighbor'),next=button(t.next,'','wv-neighbor');
  const prevImage=create('img'),nextImage=create('img');prevImage.alt='';nextImage.alt='';
  previous.append(prevImage,create('span','', '←'));next.append(nextImage,create('span','', '→'));
  const current=create('div','wv-current'),box=create('div','wv-video-box'),video=create('video','wv-video');
  video.playsInline=true;video.preload='metadata';video.controls=false;video.muted=true;
  const status=create('span','wv-status');status.setAttribute('role','status');box.append(video,status);
  const title=create('h2','wv-title'),descriptor=create('p','wv-descriptor');
  const controls=create('div','wv-controls'),play=button(t.play,'▷'),seek=create('input','wv-seek'),sound=button(t.sound,'♪'),fullscreen=button(t.fullscreen,'⛶');
  seek.type='range';seek.min='0';seek.max='1000';seek.step='1';seek.value='0';seek.setAttribute('aria-label',t.seek);
  controls.append(play,seek,sound,fullscreen);
  const nav=create('div','wv-nav'),prevArrow=button(t.previous,'←'),nextArrow=button(t.next,'→');nav.append(prevArrow,nextArrow);
  current.append(box,title,descriptor,controls,nav);stage.append(previous,current,next);shell.append(head,stage);dialog.append(shell);document.body.append(dialog);
  let index=0,returnFocus=null,changeToken=0,touchStart=null;
  const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pauseAll=()=>document.querySelectorAll('video').forEach(v=>v.pause());
  const updatePlay=()=>{play.textContent=video.paused?'▷':'Ⅱ';play.setAttribute('aria-label',video.paused?t.play:t.pause);};
  const updateSound=()=>{sound.textContent=video.muted?'♪':'♫';sound.setAttribute('aria-label',video.muted?t.sound:t.mute);sound.setAttribute('aria-pressed',String(!video.muted));};
  const setWork=number=>{
    changeToken++;pauseAll();index=(number+works.length)%works.length;
    const work=works[index];video.removeAttribute('src');video.load();video.muted=true;video.poster=work.poster;video.src=work.video;video.setAttribute('aria-label',work.title);video.load();
    title.textContent=work.title;descriptor.textContent=work.descriptor;count.textContent=`${String(index+1).padStart(2,'0')} / ${String(works.length).padStart(2,'0')}`;
    const before=works[(index-1+works.length)%works.length],after=works[(index+1)%works.length];prevImage.src=before.poster;nextImage.src=after.poster;
    previous.setAttribute('aria-label',`${t.previous}：${before.title}`);next.setAttribute('aria-label',`${t.next}：${after.title}`);
    seek.value='0';seek.disabled=true;status.textContent='';updatePlay();updateSound();
    current.getAnimations().forEach(a=>a.cancel());
    if(!reduced())current.animate([{opacity:.25,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,easing:'ease-out'});
  };
  const open=number=>{returnFocus=document.activeElement;stopHover();setWork(number);dialog.showModal();document.body.classList.add('modal-open');close.focus();};
  const togglePlay=()=>{if(video.paused){document.querySelectorAll('video').forEach(v=>{if(v!==video)v.pause();});video.play().catch(()=>{status.textContent=t.error;});}else video.pause();};
  play.addEventListener('click',togglePlay);video.addEventListener('click',togglePlay);
  video.addEventListener('play',updatePlay);video.addEventListener('pause',updatePlay);video.addEventListener('ended',updatePlay);
  video.addEventListener('loadedmetadata',()=>{seek.disabled=false;status.textContent='';});
  video.addEventListener('error',()=>{if(dialog.open&&video.getAttribute('src'))status.textContent=t.error;});
  video.addEventListener('timeupdate',()=>{if(Number.isFinite(video.duration)&&video.duration>0){seek.value=String(Math.round(video.currentTime/video.duration*1000));seek.setAttribute('aria-valuetext',`${Math.floor(video.currentTime)} / ${Math.floor(video.duration)}`);}});
  seek.addEventListener('input',()=>{if(Number.isFinite(video.duration))video.currentTime=Number(seek.value)/1000*video.duration;});
  sound.addEventListener('click',()=>{video.muted=!video.muted;updateSound();});
  fullscreen.addEventListener('click',async()=>{try{if(document.fullscreenElement){await document.exitFullscreen();}else if(shell.requestFullscreen){await shell.requestFullscreen();}else if(video.webkitEnterFullscreen){video.webkitEnterFullscreen();}}catch{status.textContent=t.error;}});
  document.addEventListener('fullscreenchange',()=>fullscreen.setAttribute('aria-label',document.fullscreenElement?t.exitFullscreen:t.fullscreen));
  previous.addEventListener('click',()=>setWork(index-1));prevArrow.addEventListener('click',()=>setWork(index-1));next.addEventListener('click',()=>setWork(index+1));nextArrow.addEventListener('click',()=>setWork(index+1));
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog||e.target===shell||e.target===stage)dialog.close();});
  dialog.addEventListener('keydown',e=>{if(e.target===seek)return;if(e.key==='ArrowLeft'){e.preventDefault();setWork(index-1);}if(e.key==='ArrowRight'){e.preventDefault();setWork(index+1);}if(e.key===' '&&e.target===video){e.preventDefault();togglePlay();}});
  box.addEventListener('touchstart',e=>{touchStart={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};},{passive:true});
  box.addEventListener('touchend',e=>{if(!touchStart)return;const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;touchStart=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3)setWork(index+(dx<0?1:-1));},{passive:true});
  dialog.addEventListener('close',()=>{changeToken++;pauseAll();video.removeAttribute('src');video.load();if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});document.body.classList.remove('modal-open');returnFocus?.focus();});
  // The grid starts with posters only. At most one delayed, muted hover preview exists.
  let hoverVideo=null,hoverTimer=null,hoverSurface=null;
  function stopHover(){clearTimeout(hoverTimer);hoverTimer=null;if(hoverVideo){hoverVideo.pause();hoverVideo.removeAttribute('src');hoverVideo.load();hoverVideo.remove();hoverVideo=null;}hoverSurface=null;}
  surfaces.forEach((surface,i)=>{
    surface.addEventListener('click',()=>open(i));
    surface.addEventListener('mouseenter',()=>{
      if(!window.matchMedia('(hover:hover) and (pointer:fine)').matches||reduced()||navigator.connection?.saveData||dialog.open)return;
      if([...document.querySelectorAll('video')].some(v=>!v.paused&&!v.muted))return;
      stopHover();hoverSurface=surface;
      hoverTimer=setTimeout(()=>{if(hoverSurface!==surface)return;hoverVideo=create('video','world-hover-video');hoverVideo.muted=true;hoverVideo.playsInline=true;hoverVideo.loop=true;hoverVideo.preload='none';hoverVideo.setAttribute('aria-hidden','true');hoverVideo.src=works[i].video;surface.append(hoverVideo);hoverVideo.play().catch(stopHover);},320);
    });
    surface.addEventListener('mouseleave',stopHover);
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden){stopHover();pauseAll();}});
})();
