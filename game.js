const WORDS={
  easy:["if","for","def","int","str","len","set","list","dict","print","input","range","else","elif","while","True","False","None","pass","break","class","import","return","from","with","and","not","tuple","float","type","open","sum","max","min","self","append","python","function","variable"],
  medium:["lambda","yield","raise","super","sorted","filter","global","assert","except","string","pandas","numpy","format","split","join","enumerate","isinstance","generator","iterator","decorator","argparse","datetime","requests","pytest","startswith","readlines","property","json","inheritance","finally","nonlocal","__init__","reduce","classmethod","staticmethod","exception","dictionary","slicing"],
  hard:["comprehension","metaclass","coroutine","asyncio","multiprocessing","threading","__getitem__","__name__","contextmanager","functools","itertools","dataclass","abstractmethod","polymorphism","serialization","memoization","defaultdict","namedtuple","setdefault","__slots__","monkeypatch","concurrent","synchronization","introspection","descriptor","singleton","closure","__repr__","__iter__","tracemalloc","encapsulation","multithreading","deserialization","virtualenv","weakref","lru_cache"]
};
const CFG={easy:{s:.8,i:1.25},medium:{s:1,i:1},hard:{s:1.2,i:.85}};
const COLORS=['#3b8eea','#3ddc84','#a259ff','#f0a020'];
const $=id=>document.getElementById(id);
const field=$('field'),inp=$('inp'),snake=$('snake');
let mode='easy',words=[],running=false,paused=false,last=0,elapsed=0,spawnT=0,score=0,lives=3,best=0,hits=0,bad=0,streak=0;

// ----- settings + audio -----
const DEF={difficulty:'easy',speed:'normal',gmode:'endless',theme:'dark',accent:'#3b8eea',bg:true,music:70,sfx:80};
const SPEEDS={slow:.7,normal:1,fast:1.35,insane:1.7};
let S={...DEF},W={...DEF},timeLeft=60,wasRunning=false;
try{Object.assign(S,JSON.parse(localStorage.getItem('pyTypeSettings')||'{}'))}catch(e){}
if(!CFG[S.difficulty])S.difficulty='easy';
mode=S.difficulty;
const saveS=()=>{try{localStorage.setItem('pyTypeSettings',JSON.stringify(S))}catch(e){}};
const timeTxt=()=>S.gmode==='timed'?Math.ceil(timeLeft)+'s':Math.floor(elapsed)+'s';
const bestKey=()=>'pyTypeBest_'+mode+(S.gmode==='timed'?'_t':'');
function applyLook(o){
  document.documentElement.dataset.theme=o.theme;
  document.documentElement.style.setProperty('--blue',o.accent);
  document.body.classList.toggle('nobg',!o.bg);
}
let AC=null;
function ac(){try{if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume()}catch(e){}return AC}
function tone(f,d,type,vol,when=0){
  const a=ac();if(!a||vol<=0)return;
  const o=a.createOscillator(),g=a.createGain(),t=a.currentTime+when;
  o.type=type;o.frequency.value=f;g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+d);
  o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d);
}
const sfx={
  hit(){const v=S.sfx/100;tone(660,.09,'square',.12*v);tone(990,.12,'square',.1*v,.07)},
  miss(){tone(140,.3,'sawtooth',.16*S.sfx/100)},
  bad(){tone(200,.12,'square',.1*S.sfx/100)},
  over(){[400,320,250,180].forEach((f,i)=>tone(f,.25,'triangle',.18*S.sfx/100,i*.18))}
};
const MEL=[440,0,523,0,659,523,440,0,392,0,494,0,587,494,392,0,349,0,440,0,523,440,349,0,392,0,494,587,659,0,587,0];
let mi=0,mt=null;
function musicStop(){clearInterval(mt);mt=null}
function musicStart(){
  musicStop();
  mt=setInterval(()=>{if(paused||!running)return;const f=MEL[mi++%MEL.length];if(f&&S.music>0)tone(f,.22,'triangle',.09*S.music/100)},230);
}
const $s=$('set');
function sync(){
  $('fDiff').value=W.difficulty;$('fSpeed').value=W.speed;$('fMode').value=W.gmode;$('fTheme').value=W.theme;
  $('fBg').checked=W.bg;$('fMusic').value=W.music;$('fSfx').value=W.sfx;
  document.querySelectorAll('.sw').forEach(b=>b.classList.toggle('on',b.dataset.c===W.accent));
  ['Music','Sfx'].forEach(k=>{const r=$('f'+k);r.style.setProperty('--p',r.value+'%');$('v'+k).textContent=r.value+'%'});
}
function openModal(){
  if(!$s.classList.contains('hide'))return;
  wasRunning=running&&!paused;if(wasRunning)paused=true;
  W={...S};sync();$s.classList.remove('hide');$('sSave').focus();
}
function closeModal(cancel){
  if($s.classList.contains('hide'))return;
  if(cancel)applyLook(S);
  $s.classList.add('hide');
  if(wasRunning){paused=false;inp.focus()}
  wasRunning=false;
}
[['fDiff','difficulty'],['fSpeed','speed'],['fMode','gmode'],['fTheme','theme']].forEach(([id,k])=>$(id).onchange=e=>{W[k]=e.target.value;applyLook(W)});
$('fBg').onchange=e=>{W.bg=e.target.checked;applyLook(W)};
document.querySelectorAll('.sw').forEach(b=>b.onclick=()=>{W.accent=b.dataset.c;applyLook(W);sync()});
['Music','Sfx'].forEach(k=>$('f'+k).oninput=e=>{W[k.toLowerCase()]=+e.target.value;sync()});
$('fSfx').onchange=()=>{const t=S.sfx;S.sfx=W.sfx;sfx.hit();S.sfx=t};
$('sSave').onclick=()=>{S={...W};saveS();applyLook(S);closeModal(false)};
$('sReset').onclick=()=>{W={...DEF};applyLook(W);sync()};
$('sX').onclick=()=>closeModal(true);
$s.addEventListener('pointerdown',e=>{if(e.target===$s)closeModal(true)});
addEventListener('keydown',e=>{if(e.key==='Escape')closeModal(true)});
document.querySelectorAll('.snav>button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.snav>button').forEach(x=>x.classList.toggle('on',x===b));
  $('s-'+b.dataset.s).scrollIntoView({behavior:'smooth',block:'start'});
});
applyLook(S);

// scenery
(function(){
  const sky=$('sky');let h='';
  for(let i=0;i<40;i++)h+=`<i class="star" style="left:${Math.random()*100}%;top:${Math.random()*60}%"></i>`;
  for(let i=0;i<3;i++)h+=`<i class="cloud" style="left:${10+i*32+Math.random()*8}%;top:${14+Math.random()*30}%;width:${90+Math.random()*60}px"></i>`;
  let x=0;while(x<100){const w=3+Math.random()*4;h+=`<i class="bld" style="left:${x}%;width:${w}%;height:${60+Math.random()*130}px"></i>`;x+=w+.3}
  sky.innerHTML=h+'<div class="code mono">&lt;/&gt;</div>';
})();

function loadBest(){best=0;try{best=+localStorage.getItem(bestKey())||0}catch(e){}$('best').textContent=best}
const level=()=>1+Math.floor(elapsed/20);
const baseSpeed=()=>Math.min((40+elapsed*1.2)*CFG[mode].s*SPEEDS[S.speed],440);
const interval=()=>Math.max(.55,(2.3-elapsed*.017)*CFG[mode].i);

function hud(){
  $('score').textContent=score;$('time').textContent=timeTxt();
  const t=hits+bad;$('acc').textContent=(t?Math.round(hits/t*100):100)+'%';
  $('streak').textContent=streak;
  $('msg').textContent=streak>=8?'On fire!':streak>=3?'Nice rhythm!':'Keep going!';
  $('lives').textContent='♥'.repeat(lives)+'♡'.repeat(3-lives);
}

function spawn(){
  const p=WORDS[mode].filter(w=>!words.some(o=>o.w===w));
  if(!p.length)return;
  const w=p[Math.floor(Math.random()*p.length)];
  const el=document.createElement('div');
  el.className='word mono';el.textContent=w;
  el.style.setProperty('--c',COLORS[Math.floor(Math.random()*4)]);
  field.appendChild(el);
  const pad=innerWidth>720?170:8,fw=field.clientWidth,ew=el.offsetWidth;
  const x=pad+Math.random()*Math.max(1,fw-ew-pad*2);
  words.push({w,el,x,y:-el.offsetHeight,v:baseSpeed()*(.85+Math.random()*.3)});
}

function lowestMatch(v,exact){
  let b=null;
  for(const o of words){
    if((exact?o.w===v:o.w.startsWith(v))&&(!b||o.y>b.y))b=o;
  }
  return b;
}

function paint(){
  const v=inp.value,tgt=v?lowestMatch(v,false):null;
  for(const o of words){
    if(o===tgt){o.el.classList.add('lock');o.el.innerHTML='<span class="t"></span>';o.el.firstChild.textContent=v;o.el.append(o.w.slice(v.length))}
    else if(o.el.classList.contains('lock')){o.el.classList.remove('lock');o.el.textContent=o.w}
  }
}

function kill(o){
  words=words.filter(x=>x!==o);
  sfx.hit();hits++;streak++;score+=o.w.length*10+level()*5+Math.min(streak,10);
  o.el.classList.add('hit');o.el.style.transform=`translate(${o.x}px,${o.y-14}px)`;
  setTimeout(()=>o.el.remove(),220);
  inp.value='';hud();
  snake.classList.remove('hop');void snake.getBoundingClientRect();snake.classList.add('hop');
}

inp.addEventListener('input',()=>{
  if(!running||paused)return;
  const v=inp.value.trim(),ex=lowestMatch(v,true);
  if(ex&&!words.some(o=>o.w!==v&&o.w.startsWith(v)))kill(ex);else paint();
});
inp.addEventListener('keydown',e=>{
  if(e.key!=='Enter')return;
  e.preventDefault();
  if(!running||paused)return;
  const ex=lowestMatch(inp.value.trim(),true);
  if(ex)kill(ex);
  else{sfx.bad();bad++;streak=0;hud();inp.classList.add('bad');setTimeout(()=>inp.classList.remove('bad'),220);inp.value='';paint()}
});
field.addEventListener('pointerdown',()=>inp.focus());

function miss(o){
  words=words.filter(x=>x!==o);o.el.remove();
  sfx.miss();lives--;bad++;streak=0;hud();
  const g=$('grass');g.classList.add('flash');setTimeout(()=>g.classList.remove('flash'),180);
  if(lives<=0)end();
}

function frame(t){
  if(!running)return;
  requestAnimationFrame(frame);
  if(paused){last=t;return}
  const dt=Math.min((t-last)/1000,.05);last=t;
  elapsed+=dt;spawnT+=dt;
  if(S.gmode==='timed'){timeLeft-=dt;if(timeLeft<=0){timeLeft=0;hud();end('Time Up!');return}}
  if(spawnT>=interval()){spawnT=0;spawn()}
  const H=field.clientHeight;
  for(const o of words.slice()){
    o.y+=o.v*dt;
    o.el.style.transform=`translate(${o.x}px,${o.y}px)`;
    if(o.y+o.el.offsetHeight>=H)miss(o);
  }
  $('time').textContent=timeTxt();
}

function showOv(t,p,canResume){
  $('ovT').textContent=t;$('ovP').textContent=p;
  $('resume').classList.toggle('hide',!canResume);
  $('ov').classList.remove('hide');
}

function start(m){
  mode=m;S.difficulty=m;saveS();timeLeft=60;$('timeLbl').textContent=S.gmode==='timed'?'Time Left':'Time';loadBest();$('mode').textContent=m[0].toUpperCase()+m.slice(1);
  words.forEach(o=>o.el.remove());words=[];
  score=0;lives=3;elapsed=0;spawnT=1.2;hits=0;bad=0;streak=0;paused=false;running=true;
  hud();$('ov').classList.add('hide');inp.value='';inp.focus();
  last=performance.now();ac();musicStart();requestAnimationFrame(frame);
}

function end(title){
  running=false;musicStop();sfx.over();
  if(score>best){best=score;$('best').textContent=best;try{localStorage.setItem(bestKey(),best)}catch(e){}}
  showOv(title||'Game Over','Score '+score+'  |  Time '+Math.floor(elapsed)+'s  |  Best '+best+'. Pick a difficulty to play again.',false);
}

function openSettings(){openModal()}
function resume(){closeModal(true)}

$('setBtn').onclick=openSettings;
$('resume').onclick=resume;
addEventListener('keydown',e=>{if(e.key==='Escape'&&running){if(!paused)openSettings()}});
document.querySelectorAll('#modes button').forEach(b=>b.onclick=()=>start(b.dataset.m));

// ----- title screen -----
const intro=$('intro');
function showIntro(){
  running=false;paused=false;
  words.forEach(o=>o.el.remove());words=[];inp.value='';
  $('ov').classList.add('hide');
  intro.classList.remove('go','out');void intro.offsetWidth;intro.classList.add('go');
}
function startFromIntro(){
  if(intro.classList.contains('out'))return;
  intro.classList.add('out');
  showOv('Choose Difficulty','Pick a level to begin. You have 3 lives, and words fall faster as time passes.',false);
}
$('iStart').onclick=startFromIntro;
$('iSet').onclick=openModal;
$('menu').onclick=showIntro;
addEventListener('keydown',e=>{if(e.key==='Enter'&&!intro.classList.contains('out')&&$s.classList.contains('hide'))startFromIntro()});
loadBest();hud();