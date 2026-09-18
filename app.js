
/* ============ PWA: standalone display detection ============ */
(function(){
  var isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if(isStandalone){ document.body.classList.add('standalone'); }
})();

/* ============ MASCOT SVGs ============ */
function svgBrossy(size){
  return `<svg width="${size}" height="${size}" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 150 C40 140 20 110 30 90 L20 40 C50 55 110 55 140 40 L130 90 C140 110 120 140 80 150Z" fill="#3FBDEA" opacity="0.9"/>
    <path d="M80 145 C50 138 35 110 42 92 C46 82 40 60 38 45 C55 55 105 55 122 45 C120 60 114 82 118 92 C125 110 110 138 80 145Z" fill="#FFFFFF"/>
    <rect x="45" y="70" width="70" height="20" rx="10" fill="#3FBDEA"/>
    <circle cx="63" cy="80" r="4" fill="#1A2B4C"/>
    <circle cx="97" cy="80" r="4" fill="#1A2B4C"/>
    <path d="M60 102 Q80 116 100 102" stroke="#1A2B4C" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="45" cy="98" r="5" fill="#FFC1CC"/><circle cx="115" cy="98" r="5" fill="#FFC1CC"/>
  </svg>`;
}
function svgFlossy(size){
  return `<svg width="${size}" height="${size}" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 20 C55 45 55 90 60 115 C64 135 96 135 100 115 C105 90 105 45 80 20Z" fill="#FF6F81" opacity="0.15"/>
    <path d="M80 148 C50 141 35 113 42 95 C46 85 40 63 38 48 C55 58 105 58 122 48 C120 63 114 85 118 95 C125 113 110 141 80 148Z" fill="#FFFFFF"/>
    <path d="M80 148 C50 141 35 113 42 95 C46 85 40 63 38 48 C55 58 105 58 122 48 C120 63 114 85 118 95 C125 113 110 141 80 148Z" fill="none" stroke="#FF6F81" stroke-width="4"/>
    <rect x="45" y="72" width="70" height="10" rx="5" fill="#FFC93C"/>
    <circle cx="63" cy="80" r="4" fill="#1A2B4C"/>
    <circle cx="97" cy="80" r="4" fill="#1A2B4C"/>
    <path d="M60 100 Q80 114 100 100" stroke="#1A2B4C" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="45" cy="96" r="5" fill="#FFC1CC"/><circle cx="115" cy="96" r="5" fill="#FFC1CC"/>
    <path d="M35 40 Q80 10 125 40" stroke="#FF6F81" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function svgMousse(size){
  return `<svg width="${size}" height="${size}" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="80" cy="95" rx="55" ry="48" fill="#FFFFFF"/>
    <ellipse cx="45" cy="55" rx="16" ry="20" fill="#FFFFFF"/>
    <ellipse cx="115" cy="55" rx="16" ry="20" fill="#FFFFFF"/>
    <ellipse cx="45" cy="55" rx="8" ry="12" fill="#BFEBFF"/>
    <ellipse cx="115" cy="55" rx="8" ry="12" fill="#BFEBFF"/>
    <ellipse cx="80" cy="110" rx="30" ry="22" fill="#BFEBFF"/>
    <circle cx="65" cy="90" r="5" fill="#1A2B4C"/>
    <circle cx="95" cy="90" r="5" fill="#1A2B4C"/>
    <path d="M65 108 Q80 118 95 108" stroke="#1A2B4C" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="55" cy="100" r="4" fill="#FFC1CC"/><circle cx="105" cy="100" r="4" fill="#FFC1CC"/>
  </svg>`;
}
function svgCarie(size, mood){
  var eyes = mood==='sad' ? `<path d="M60 78 L70 84 M70 78 L60 84" stroke="#3B1550" stroke-width="4" stroke-linecap="round"/><path d="M90 78 L100 84 M100 78 L90 84" stroke="#3B1550" stroke-width="4" stroke-linecap="round"/>`
    : `<circle cx="65" cy="80" r="5" fill="#3B1550"/><circle cx="95" cy="80" r="5" fill="#3B1550"/>`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="80" cy="90" rx="46" ry="42" fill="#B983FF"/>
    <path d="M55 55 L50 40 M80 48 L80 32 M105 55 L110 40" stroke="#9B5FE0" stroke-width="6" stroke-linecap="round"/>
    ${eyes}
    <path d="M65 105 Q80 ${mood==='sad'?95:115} 95 105" stroke="#3B1550" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="55" cy="120" rx="10" ry="14" fill="#B983FF"/><ellipse cx="105" cy="120" rx="10" ry="14" fill="#B983FF"/>
  </svg>`;
}
function svgMolaro(size){
  return `<svg width="${size}" height="${size}" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 40 C40 25 60 20 80 20 C100 20 120 25 120 40 L124 70 C126 85 118 95 108 92 C104 108 96 145 88 145 C82 145 80 115 80 100 C80 115 78 145 72 145 C64 145 56 108 52 92 C42 95 34 85 36 70 Z" fill="#33D6A6" opacity="0.85"/>
    <path d="M46 42 C46 30 62 26 80 26 C98 26 114 30 114 42 L117 66 C118 78 112 86 104 83 C101 100 94 138 88 138 C83 138 81 112 81 98 C81 112 79 138 74 138 C67 138 60 100 57 83 C49 86 43 78 44 66 Z" fill="#FFFFFF"/>
    <rect x="56" y="58" width="48" height="16" rx="8" fill="#12B589"/>
    <circle cx="68" cy="66" r="4" fill="#1A2B4C"/>
    <circle cx="92" cy="66" r="4" fill="#1A2B4C"/>
    <path d="M66 84 Q80 96 94 84" stroke="#1A2B4C" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M30 50 L18 58 M130 50 L142 58" stroke="#12B589" stroke-width="6" stroke-linecap="round"/>
  </svg>`;
}
function svgEtincelle(size){
  return `<svg width="${size}" height="${size}" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 18 C55 45 42 78 42 100 C42 126 59 146 80 146 C101 146 118 126 118 100 C118 78 105 45 80 18Z" fill="#FFC93C" opacity="0.9"/>
    <path d="M80 26 C60 50 49 79 49 99 C49 121 63 139 80 139 C97 139 111 121 111 99 C111 79 100 50 80 26Z" fill="#FFFFFF"/>
    <rect x="53" y="78" width="54" height="14" rx="7" fill="#FFC93C"/>
    <circle cx="66" cy="86" r="4" fill="#1A2B4C"/>
    <circle cx="94" cy="86" r="4" fill="#1A2B4C"/>
    <path d="M65 104 Q80 116 95 104" stroke="#1A2B4C" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M112 40 L118 30 L124 40 L134 44 L124 48 L118 58 L112 48 L102 44 Z" fill="#FF6F81"/>
  </svg>`;
}
document.getElementById('logoMascot').innerHTML = svgBrossy(110);
document.getElementById('buddyIcon-brossy').innerHTML = svgBrossy(64);
document.getElementById('buddyIcon-flossy').innerHTML = svgFlossy(64);
document.getElementById('buddyIcon-molaro').innerHTML = svgMolaro(64);
document.getElementById('buddyIcon-etincelle').innerHTML = svgEtincelle(64);

/* ============ STATE ============ */
var state = {
  childName:'', childAge:6, color:'#3FBDEA', buddy:'brossy',
  xp:0, coins:0, streak:0, kingdomLevel:1,
  missionsToday:{matin:false, midi:false, soir:false}, lastPlayDate:null,
  soundOn:true, onboarded:false
};
var COLORS = ['#3FBDEA','#FF6F81','#FFC93C','#33D6A6','#9B7BE0'];
var GATE_Q = {q:'7 × 8 = ?', a:56};

var WORLDS = [
  {name:"La Forêt des Incisives", desc:"Découverte des premières dents", icon:"🌳", bg:"#D6F5D6", req:0},
  {name:"Les Montagnes des Molaires", desc:"N'oublie pas les dents du fond", icon:"🏔️", bg:"#E4EEFB", req:300},
  {name:"La Rivière du Sourire", desc:"Univers aquatique et magique", icon:"🌊", bg:"#DFF6FF", req:700},
  {name:"Le Château Anti-Caries", desc:"Affronte le grand boss Carie", icon:"🏰", bg:"#F3E6FF", req:1200}
];
var KINGDOM_ITEMS = [
  {name:"Petite maison", icon:"🏠", req:0, pos:{left:'40%',top:'55%'}},
  {name:"Jardin", icon:"🌳", req:100, pos:{left:'15%',top:'62%'}},
  {name:"Pont", icon:"🌉", req:250, pos:{left:'65%',top:'60%'}},
  {name:"Château", icon:"🏰", req:450, pos:{left:'42%',top:'25%'}},
  {name:"Dragon", icon:"🐉", req:700, pos:{left:'75%',top:'30%'}},
  {name:"Parc", icon:"🎡", req:950, pos:{left:'12%',top:'32%'}},
  {name:"Arc-en-ciel", icon:"🌈", req:1200, pos:{left:'35%',top:'8%'}}
];
var REWARDS = [
  {icon:'⭐', name:'Étoile', req:0},
  {icon:'🪙', name:'Pièces', req:0},
  {icon:'🦸', name:'Cape dorée', req:100},
  {icon:'👑', name:'Couronne', req:250},
  {icon:'🐉', name:'Bébé dragon', req:450},
  {icon:'🎩', name:'Chapeau', req:600},
  {icon:'🦄', name:'Licorne', req:800},
  {icon:'🎨', name:'Peinture royaume', req:950},
  {icon:'🏆', name:'Trophée héros', req:1200}
];

/* ============ TIME OF DAY ============ */
function getMoment(){
  var h = new Date().getHours();
  if(h>=5 && h<12) return 'matin';
  if(h>=12 && h<14) return 'midi';
  return 'soir';
}
function momentLabel(m){
  return m==='matin' ? 'Bonjour' : m==='midi' ? 'Bon appétit' : 'Bonsoir';
}

/* ============ NAV ============ */
function go(name){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+name).classList.add('active');
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active', t.dataset.tab===name));
  if(name==='map') renderWorlds();
  if(name==='kingdom') renderKingdom();
  if(name==='rewards') renderRewards();
  if(name==='profile2') renderProfile();
  if(name==='parents') renderParents();
}

/* ============ ONBOARDING ============ */
(function initSwatches(){
  var wrap = document.getElementById('colorSwatches');
  COLORS.forEach(function(c, i){
    var d = document.createElement('div');
    d.className='swatch'+(i===0?' sel':'');
    d.style.background=c;
    d.onclick=function(){ document.querySelectorAll('.swatch').forEach(s=>s.classList.remove('sel')); d.classList.add('sel'); state.color=c; };
    wrap.appendChild(d);
  });
})();

function saveProfile(){
  var name = document.getElementById('childName').value.trim();
  var age = parseInt(document.getElementById('childAge').value) || 6;
  state.childName = name || 'Héros';
  state.childAge = age;
  go('character');
}
function selectBuddy(id){
  state.buddy = id;
  document.querySelectorAll('.buddy-card').forEach(c=>c.classList.toggle('sel', c.dataset.buddy===id));
}
function finishOnboarding(){
  state.onboarded = true;
  persist();
  renderHome();
  go('home');
}

/* ============ HOME ============ */
function buddySvg(size){
  switch(state.buddy){
    case 'flossy': return svgFlossy(size);
    case 'molaro': return svgMolaro(size);
    case 'etincelle': return svgEtincelle(size);
    default: return svgBrossy(size);
  }
}
function renderHome(){
  document.getElementById('homeGreeting').textContent = momentLabel(getMoment())+', '+state.childName+' !';
  document.getElementById('streakBadge').textContent = '🔥 '+state.streak+' jour'+(state.streak>1?'s':'')+' de suite';
  document.getElementById('homeMascot').innerHTML = buddySvg(140);
  document.getElementById('chipMatin').style.opacity = state.missionsToday.matin ? 1 : .55;
  document.getElementById('chipMidi').style.opacity = state.missionsToday.midi ? 1 : .55;
  document.getElementById('chipSoir').style.opacity = state.missionsToday.soir ? 1 : .55;
}

/* ============ MISSION INTRO ============ */
function startIntro(){
  document.getElementById('introMascot').innerHTML = buddySvg(150);
  go('intro');
}

/* ============ SOUND ============ */
var audioCtx = null;
function ensureAudio(){
  if(!audioCtx){
    try{ audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }catch(e){ audioCtx = null; }
  }
  if(audioCtx && audioCtx.state === 'suspended'){ audioCtx.resume(); }
}
function playTone(freq, start, dur, type, gainVal){
  if(!state.soundOn || !audioCtx) return;
  var osc = audioCtx.createOscillator();
  var gain = audioCtx.createGain();
  osc.type = type || 'sine';
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, audioCtx.currentTime + start);
  gain.gain.linearRampToValueAtTime(gainVal||0.18, audioCtx.currentTime + start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + start + dur);
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.start(audioCtx.currentTime + start);
  osc.stop(audioCtx.currentTime + start + dur + 0.05);
}
function playPhaseChime(){
  // friendly two-note "ding-ding" to signal a new brushing zone
  playTone(880, 0, 0.16, 'sine');
  playTone(1175, 0.12, 0.2, 'sine');
}
function playStartChime(){
  playTone(523, 0, 0.14, 'triangle');
  playTone(659, 0.1, 0.14, 'triangle');
  playTone(784, 0.2, 0.18, 'triangle');
}
function playVictoryChime(){
  playTone(523, 0, 0.15, 'triangle');
  playTone(659, 0.12, 0.15, 'triangle');
  playTone(784, 0.24, 0.15, 'triangle');
  playTone(1047, 0.36, 0.35, 'triangle');
}

/* ============ BRUSHING ============ */
var brushTimer=null, brushSeconds=120, brushXp=0, paused=false;
var PHASES = [
  {until:90, label:"Dents du haut", tip:"Frotte doucement, de haut en bas ✨"},
  {until:60, label:"Dents du bas", tip:"N'oublie pas les dents du bas ! 🦷"},
  {until:30, label:"Faces intérieures", tip:"Petits cercles sur les faces intérieures 🌀"},
  {until:0, label:"Dents du fond", tip:"Encore les dents du fond, tu y es presque ! 💪"}
];
var monstersConfig = [
  {top:'18%', left:'12%'}, {top:'55%', left:'72%'}, {top:'12%', left:'68%'}, {top:'60%', left:'18%'}
];

function startBrushing(){
  ensureAudio();
  playStartChime();
  brushSeconds=120; brushXp=0; paused=false;
  document.getElementById('pauseBtn').textContent='⏸';
  var stage = document.getElementById('brushStage');
  stage.innerHTML='';
  monstersConfig.forEach(function(pos, i){
    var d = document.createElement('div');
    d.className='monster'; d.id='monster'+i;
    d.style.top=pos.top; d.style.left=pos.left;
    d.innerHTML = svgCarie(60, 'happy');
    stage.appendChild(d);
  });
  var buddy = document.createElement('div');
  buddy.style.position='relative'; buddy.id='buddyStage';
  buddy.innerHTML = buddySvg(130);
  stage.appendChild(buddy);
  updateBrushUI();
  go('brush');
  brushTimer = setInterval(tickBrush, 1000);
}
function tickBrush(){
  if(paused) return;
  brushSeconds--;
  brushXp = Math.min(100, brushXp + Math.round(100/120));
  if(brushSeconds<=0){ clearInterval(brushTimer); finishBrush(); return; }
  // hide a monster roughly every 30s
  var elapsed = 120 - brushSeconds;
  if(elapsed===30){ hideMonster(0); playPhaseChime(); }
  if(elapsed===60){ hideMonster(1); playPhaseChime(); }
  if(elapsed===90){ hideMonster(2); playPhaseChime(); }
  if(elapsed===118) hideMonster(3);
  updateBrushUI();
}
function hideMonster(i){
  var el = document.getElementById('monster'+i);
  if(el){ el.classList.add('gone'); popText('⭐ Zone nettoyée !'); }
}
function popText(msg){
  var stage = document.getElementById('brushStage');
  var t = document.createElement('div');
  t.className='float-txt'; t.textContent=msg;
  t.style.left = (30+Math.random()*40)+'%'; t.style.top='40%';
  stage.appendChild(t);
  setTimeout(()=>t.remove(), 1000);
}
function updateBrushUI(){
  var m = Math.floor(brushSeconds/60), s = brushSeconds%60;
  document.getElementById('timerLabel').textContent = m+':' + (s<10?'0':'')+s;
  document.getElementById('progressFill').style.width = (100-(brushSeconds/120*100))+'%';
  document.getElementById('brushXp').textContent = brushXp;
  var phase = PHASES.find(p=>brushSeconds>p.until) || PHASES[PHASES.length-1];
  document.getElementById('phaseLabel').textContent = phase.label;
  document.getElementById('encourageText').textContent = phase.tip;
}
function pauseBrush(){
  paused = !paused;
  document.getElementById('pauseBtn').textContent = paused ? '▶' : '⏸';
  document.getElementById('encourageText').textContent = paused ? "Allez héros ! Encore un petit effort ! 💪" : (PHASES.find(p=>brushSeconds>p.until)||PHASES[3]).tip;
}
function skipBrush(){
  clearInterval(brushTimer);
  finishBrush();
}
function finishBrush(){
  var completed = brushXp >= 100;
  var earnedXp = Math.max(0, Math.round(brushXp));
  var earnedCoins = Math.round(earnedXp / 5);
  playVictoryChime();
  if(completed){
    state.missionsToday[getMoment()] = true;
    updateStreak();
  }
  state.xp += earnedXp;
  state.coins += earnedCoins;
  persist();
  document.getElementById('victoryMascot').innerHTML = buddySvg(150);
  document.getElementById('victoryTitle').textContent = completed ? 'MISSION RÉUSSIE !' : 'Mission arrêtée en route !';
  document.getElementById('victoryStars').textContent = completed ? '⭐⭐⭐' : (earnedXp>=66 ? '⭐⭐' : earnedXp>=33 ? '⭐' : '✨');
  document.getElementById('victoryXpBadge').textContent = completed
    ? ('+'+earnedXp+' XP · Carie vaincue !')
    : ('+'+earnedXp+' XP · reviens finir la mission la prochaine fois !');
  go('victory');
}
function updateStreak(){
  var today = new Date().toDateString();
  if(state.lastPlayDate !== today){
    state.streak += 1;
    state.lastPlayDate = today;
  }
}
function claimReward(){
  renderHome();
  go('home');
}

/* ============ WORLD MAP ============ */
function renderWorlds(){
  var wrap = document.getElementById('worldList');
  wrap.innerHTML='';
  WORLDS.forEach(function(w){
    var unlocked = state.xp >= w.req;
    var div = document.createElement('div');
    div.className='world-card'+(unlocked?'':' locked');
    div.innerHTML = `<div class="world-icon" style="background:${w.bg}">${w.icon}</div>
      <div><h3>${w.name}</h3><p>${unlocked? w.desc : 'Débloqué à '+w.req+' XP 🔒'}</p></div>`;
    wrap.appendChild(div);
  });
}

/* ============ KINGDOM ============ */
function renderKingdom(){
  var stage = document.getElementById('kingdomStage');
  stage.innerHTML='';
  KINGDOM_ITEMS.forEach(function(it){
    if(state.xp >= it.req){
      var d = document.createElement('div');
      d.className='kingdom-item';
      d.style.left = it.pos.left; d.style.top = it.pos.top;
      d.textContent = it.icon;
      stage.appendChild(d);
    }
  });
  var list = document.getElementById('kingdomList');
  list.innerHTML='';
  KINGDOM_ITEMS.forEach(function(it){
    var unlocked = state.xp >= it.req;
    var row = document.createElement('div');
    row.className='kingdom-row'+(unlocked?'':' locked');
    row.innerHTML = `<span>${it.icon} ${it.name}</span><span class="muted">${unlocked?'Construit ✅':'À '+it.req+' XP'}</span>`;
    list.appendChild(row);
  });
}

/* ============ REWARDS ============ */
function renderRewards(){
  var grid = document.getElementById('rewardGrid');
  grid.innerHTML='';
  REWARDS.forEach(function(r){
    var unlocked = state.xp >= r.req;
    var d = document.createElement('div');
    d.className='reward-item'+(unlocked?'':' locked');
    d.innerHTML = `<div>${unlocked?r.icon:'🔒'}</div><p>${r.name}</p>`;
    grid.appendChild(d);
  });
}

/* ============ PROFILE ============ */
function renderProfile(){
  document.getElementById('profileMascot').innerHTML = buddySvg(110);
  document.getElementById('profileName').textContent = state.childName;
  var buddyNames = {brossy:'Brossy', flossy:'Flossy', molaro:'Molaro', etincelle:'Étincelle'};
  document.getElementById('profileAge').textContent = state.childAge+' ans · Équipe '+buddyNames[state.buddy];
  document.getElementById('statXp').textContent = state.xp;
  document.getElementById('statStreak').textContent = state.streak;
  document.getElementById('statCoins').textContent = state.coins;
}

/* ============ PARENTS ============ */
function renderParents(){
  document.getElementById('parentsGate').classList.remove('hidden');
  document.getElementById('parentsContent').classList.add('hidden');
  document.getElementById('gateAnswer').value='';
  document.getElementById('gateError').style.display='none';
}
function checkGate(){
  var val = parseInt(document.getElementById('gateAnswer').value);
  if(val === GATE_Q.a){
    document.getElementById('parentsGate').classList.add('hidden');
    document.getElementById('parentsContent').classList.remove('hidden');
    document.getElementById('pMatin').textContent = state.missionsToday.matin ? '✅' : '✖';
    document.getElementById('pMatin').className = state.missionsToday.matin ? 'check' : 'cross';
    document.getElementById('pMidi').textContent = state.missionsToday.midi ? '✅' : '✖';
    document.getElementById('pMidi').className = state.missionsToday.midi ? 'check' : 'cross';
    document.getElementById('pSoir').textContent = state.missionsToday.soir ? '✅' : '✖';
    document.getElementById('pSoir').className = state.missionsToday.soir ? 'check' : 'cross';
    document.getElementById('pStreak').textContent = '🔥 '+state.streak+' jours';
    document.getElementById('pXp').textContent = state.xp+' XP';
  } else {
    document.getElementById('gateError').style.display='block';
  }
}

/* ============ SETTINGS ============ */
function toggleSound(){
  state.soundOn = !state.soundOn;
  document.getElementById('soundToggle').classList.toggle('on', state.soundOn);
  persist();
}
function resetProgress(){
  state.xp=0; state.coins=0; state.streak=0; state.missionsToday={matin:false,midi:false,soir:false}; state.lastPlayDate=null;
  persist();
  renderHome();
  go('home');
}

/* ============ PERSISTENCE ============ */
async function persist(){
  try{
    if(window.storage){ await window.storage.set('brosshero-state', JSON.stringify(state), false); }
  }catch(e){ /* storage unavailable, continue in-memory */ }
}
async function loadState(){
  try{
    if(window.storage){
      var res = await window.storage.get('brosshero-state', false);
      if(res && res.value){
        var saved = JSON.parse(res.value);
        Object.assign(state, saved);
      }
    }
  }catch(e){ /* no saved state yet */ }
  if(state.onboarded){
    renderHome();
    go('home');
  }
}
loadState();
