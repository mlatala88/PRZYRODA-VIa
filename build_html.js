const fs = require('fs');
const path = require('path');

const d1_topics = require('./src/data_dzial1_topics.js');
const d1_questions = require('./src/data_dzial1_questions.js');
const d2_topics = require('./src/data_topics.js');
const d2_questions = require('./src/data_questions.js');

const htmlContent = `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta name="theme-color" content="#173d34">
<title>Odkrywam Przyrodę — Klasa 4</title>
<style>
:root {
  --brand: #173d34;
  --brand-light: #23594c;
  --lime: #cbf26c;
  --lime-soft: #f2fad9;
  --paper: #f6f8f3;
  --card: #ffffff;
  --ink: #192e27;
  --muted: #5d7367;
  --line: #d8e2d4;
  --green: #2e7d32;
  --green-soft: #e8f5e9;
  --red: #c62828;
  --red-soft: #ffebee;
  --terra: #d96b43;
  --terra-soft: #fbe9e2;
  --shadow: 0 10px 30px rgba(23, 61, 52, 0.08);
  --radius: 18px;
}
* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: var(--paper);
  color: var(--ink);
  line-height: 1.5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
header.app-bar {
  background: var(--brand);
  color: #fff;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
.brand-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: -0.3px;
  cursor: pointer;
  user-select: none;
}
.brand-icon {
  background: var(--lime);
  color: var(--brand);
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 900;
}
.nav-pill {
  background: rgba(255,255,255,0.15);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
main.app-wrap {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 16px 40px;
  flex: 1;
}
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--ink);
  border-radius: 14px;
  padding: 14px 20px;
  font-weight: 700;
  transition: all 0.18s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
}
button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.06);
}
button:active:not(:disabled) {
  transform: translateY(1px);
}
button.primary {
  background: var(--brand);
  color: #ffffff;
  border-color: var(--brand);
}
button.primary:hover:not(:disabled) {
  background: var(--brand-light);
}
button.accent {
  background: var(--lime);
  color: var(--brand);
  border-color: #b2db4a;
}
button.small {
  padding: 8px 14px;
  font-size: 13px;
  min-height: 36px;
  border-radius: 10px;
}
button.outline {
  background: transparent;
  border-color: currentColor;
}
.hero-card {
  background: linear-gradient(135deg, #173d34 0%, #2a6657 100%);
  color: white;
  border-radius: 24px;
  padding: 30px;
  margin-bottom: 24px;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}
.hero-card h1 {
  margin: 0 0 10px;
  font-size: clamp(26px, 4.5vw, 38px);
  line-height: 1.15;
}
.hero-card p {
  margin: 0;
  max-width: 620px;
  color: #d1e5dd;
  font-size: 15px;
}
.hero-meta {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
}
.meta-chip {
  background: rgba(255,255,255,0.18);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
}
.modules-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}
.module-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.module-card.featured {
  border: 2px solid #589c7d;
  background: linear-gradient(180deg, #ffffff 0%, #f7faf7 100%);
}
.module-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}
.module-num {
  font-size: 12px;
  font-weight: 800;
  color: var(--brand);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.module-title {
  margin: 4px 0 0;
  font-size: 22px;
  font-weight: 800;
}
.module-desc {
  color: var(--muted);
  font-size: 14px;
  margin: 4px 0 0;
}
.module-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.status-pill {
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
}
.status-active { background: var(--green-soft); color: var(--green); }
.status-lock { background: #eeeeee; color: #888888; }
.panel {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow);
  animation: enter 0.24s ease-out;
}
@keyframes enter {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.top-bar-quiz {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 10px;
}
.progress-bar {
  height: 8px;
  background: #e2eadc;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 24px;
}
.progress-bar > div {
  height: 100%;
  background: var(--brand);
  transition: width 0.3s ease;
}
.q-title {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 8px;
}
.q-instruction {
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 20px;
}
.options-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
@media (min-width: 600px) {
  .options-grid.two-cols {
    grid-template-columns: 1fr 1fr;
  }
}
.opt-btn {
  text-align: left;
  padding: 16px 18px;
  font-size: 15px;
  line-height: 1.4;
  justify-content: flex-start;
  background: #ffffff;
  border: 2px solid var(--line);
  border-radius: 14px;
}
.opt-btn.selected {
  border-color: var(--brand);
  background: #eaf3f0;
}
.opt-btn.correct {
  border-color: var(--green) !important;
  background: var(--green-soft) !important;
  color: #1b5e20 !important;
}
.opt-btn.wrong {
  border-color: var(--red) !important;
  background: var(--red-soft) !important;
  color: #b71c1c !important;
}
.feedback-box {
  margin-top: 22px;
  padding: 18px;
  border-radius: 14px;
  background: #f0f7f3;
  border-left: 5px solid var(--green);
  animation: enter 0.2s;
}
.feedback-box.bad {
  background: #fff5f5;
  border-left-color: var(--red);
}
.feedback-box h4 { margin: 0 0 6px; font-size: 16px; }
.feedback-box p { margin: 0 0 14px; font-size: 14px; color: var(--ink); }
.bins-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-top: 14px;
}
.bin-col {
  border: 2px dashed #b7c9b3;
  border-radius: 14px;
  padding: 12px;
  background: #fafcf8;
  min-height: 120px;
  cursor: pointer;
  transition: background 0.15s;
}
.bin-col.active-target {
  background: var(--lime-soft);
  border-color: #89b83b;
}
.bin-title {
  font-weight: 800;
  font-size: 13px;
  color: var(--brand);
  margin-bottom: 8px;
  text-align: center;
}
.items-pool {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  padding: 12px;
  background: #edf3e9;
  border-radius: 12px;
  min-height: 60px;
}
.item-chip {
  background: #fff;
  border: 1px solid var(--line);
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
}
.item-chip.selected {
  background: var(--brand);
  color: #fff;
  border-color: var(--brand);
}
.order-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.order-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 16px;
  gap: 12px;
}
.order-controls {
  display: flex;
  gap: 6px;
}
.order-controls button {
  width: 34px;
  height: 34px;
  min-height: 34px;
  padding: 0;
  border-radius: 8px;
  font-size: 14px;
}
.match-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.match-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.match-btn {
  text-align: left;
  font-size: 14px;
  padding: 12px;
  border-radius: 12px;
  background: #ffffff;
}
.match-btn.paired {
  opacity: 0.6;
  border-color: #a4c2a8;
  background: #eef6ee;
}
.hotspot-svg-wrap {
  position: relative;
  max-width: 480px;
  margin: 0 auto 16px;
  background: #eef5ea;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--line);
}
.hotspot-point {
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  background: var(--brand);
  color: #ffffff;
  display: grid;
  place-items: center;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: transform 0.15s;
}
.hotspot-point:hover { transform: translate(-50%, -50%) scale(1.15); }
.results-score-ring {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: conic-gradient(var(--green) calc(var(--pct) * 1%), #e2eadb 0);
  display: grid;
  place-items: center;
  margin: 20px auto;
}
.results-score-inner {
  width: 110px;
  height: 110px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.score-num { font-size: 32px; font-weight: 900; line-height: 1; }
.score-max { font-size: 13px; color: var(--muted); }
.topic-score-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
}
.topic-track {
  height: 6px;
  background: #e2eadc;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 14px;
}
.topic-fill {
  height: 100%;
  background: var(--green);
}
.recommend-card {
  background: var(--terra-soft);
  border: 1px solid #ecc9bc;
  border-radius: 14px;
  padding: 16px;
  margin-top: 18px;
}
.recommend-card h4 { margin: 0 0 6px; color: #a33b14; }
.recommend-card p { margin: 0 0 10px; font-size: 13px; }
.learn-step-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--line);
  margin-bottom: 16px;
}
.interactive-widget {
  background: #f7faf5;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px;
  margin: 18px 0;
}
.discovery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
  margin-top: 12px;
}
.discovery-btn {
  text-align: left;
  padding: 12px 14px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid var(--line);
}
.discovery-btn.active {
  border-color: var(--brand);
  background: #eef6f2;
}
.discovery-desc {
  background: #ffffff;
  border-left: 4px solid var(--brand);
  padding: 12px 16px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 14px;
}
</style>
</head>
<body>

<header class="app-bar">
  <div class="brand-title" onclick="currentView='hub'; render();">
    <div class="brand-icon">🌱</div>
    <span>Odkrywam Przyrodę 4</span>
  </div>
  <div id="topMeta" class="nav-pill" onclick="currentView='hub'; render();">Odkrywca 🌿</div>
</header>

<main class="app-wrap" id="appMain"></main>

<script>
// ==========================================
// DANE MODUŁÓW (DZIAŁ I i DZIAŁ II)
// ==========================================
const MODULES = {
  d1: {
    id: 'd1',
    numStr: 'Dział I',
    title: 'Spotkanie z przyrodą',
    pages: '11–52',
    desc: 'Zmysły badacza, mikroskop optyczny, róża wiatrów i kompas, zasady doświadczeń, higiena pracy umysłowej i cyfrowy dobrostan.',
    topics: ${JSON.stringify(d1_topics)},
    questions: ${JSON.stringify(d1_questions)},
    maxSets: 5,
    qPerSet: 15,
    badge: '✓ Pełny moduł (5 tematów + 5 testów)'
  },
  d2: {
    id: 'd2',
    numStr: 'Dział II',
    title: 'Moja okolica',
    pages: '53–90',
    desc: 'Krajobraz naturalny i przekształcony, ukształtowanie terenu, skały i minerały, warstwy gleby oraz rozpoznawanie roślin, ptaków i owadów.',
    topics: ${JSON.stringify(d2_topics)},
    questions: ${JSON.stringify(d2_questions)},
    maxSets: 7,
    qPerSet: 18,
    badge: '★ Opracowany moduł (6 tematów + 7 testów)'
  }
};

// ==========================================
// MODEL STANU (localStorage)
// ==========================================
const STORE_KEY = 'odkrywam_przyrode_v2';
const LEGACY_KEY = 'tymek_przyroda_v2';

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY) || localStorage.getItem(LEGACY_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return {
        currentModuleId: p.currentModuleId || 'd2',
        usedSets: {
          d1: (p.usedSets && Array.isArray(p.usedSets.d1)) ? p.usedSets.d1 : [],
          d2: Array.isArray(p.usedSets) ? p.usedSets : ((p.usedSets && p.usedSets.d2) ? p.usedSets.d2 : [])
        },
        history: p.history || [],
        completedLearnSteps: p.completedLearnSteps || {}
      };
    }
  } catch(e) {}
  return {
    currentModuleId: 'd2',
    usedSets: { d1: [], d2: [] },
    history: [],
    completedLearnSteps: {}
  };
}

function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch(e) {}
}

let state = loadState();

// ==========================================
// ROUTING I ZMIENNE APLIKACJI
// ==========================================
let currentModuleId = state.currentModuleId || 'd2';
let currentView = 'hub'; // 'hub' | 'learn_list' | 'learn_step' | 'quiz' | 'results'
let currentTopicIdx = 0;
let currentStepIdx = 0;
let activeQuizSet = 1;
let quizQuestions = [];
let quizQIndex = 0;
let quizScore = 0;
let quizTopicScores = [];
let quizAnswersLog = [];

// Stan interakcji pytania
let quizSelection = null;
let quizBinsState = {};
let quizOrderState = [];
let quizMatchState = { selectedLeft: null, pairs: {} };
let activeDiscoveryIdx = null;

function render() {
  const root = document.getElementById('appMain');
  if (currentView === 'hub') renderHub(root);
  else if (currentView === 'learn_list') renderLearnList(root);
  else if (currentView === 'learn_step') renderLearnStep(root);
  else if (currentView === 'quiz') renderQuiz(root);
  else if (currentView === 'results') renderResults(root);
}

// ----------------------------------------------------
// 1. EKRAN GŁÓWNY (HUB)
// ----------------------------------------------------
function renderHub(root) {
  const d1Completed = (state.usedSets.d1 || []).length;
  const d2Completed = (state.usedSets.d2 || []).length;
  const totalCompleted = d1Completed + d2Completed;

  root.innerHTML = \`
    <div class="hero-card">
      <div style="font-size: 12px; font-weight:800; letter-spacing:1.5px; opacity:0.8; text-transform:uppercase;">Nowa Era • Klasa 4</div>
      <h1>Cześć, Odkrywco! 🌿</h1>
      <p>Przed Tobą interaktywny podręcznik przyrody dla klasy 4 („Odkrywam przyrodę”, Nowa Era). Wybierz dział, poznawaj wiedzę krok po kroku w trybie <strong>Nauka</strong>, a potem sprawdź się w różnorodnych testach bez pisania na klawiaturze!</p>
      <div class="hero-meta">
        <span class="meta-chip">📚 Dział I: \${d1Completed} / \${MODULES.d1.maxSets} zestawów</span>
        <span class="meta-chip">📚 Dział II: \${d2Completed} / \${MODULES.d2.maxSets} zestawów</span>
        <span class="meta-chip">🏆 Rozwiązane testy: \${totalCompleted}</span>
      </div>
    </div>

    <h2 style="font-size: 20px; margin: 24px 0 14px;">Działy podręcznika</h2>
    <div class="modules-grid">
      <!-- DZIAŁ I -->
      <div class="module-card \${currentModuleId === 'd1' ? 'featured' : ''}">
        <div class="module-head">
          <div>
            <div class="module-num" style="color:var(--green);">\${MODULES.d1.numStr} • s. \${MODULES.d1.pages}</div>
            <h3 class="module-title">\${MODULES.d1.title}</h3>
            <p class="module-desc">\${MODULES.d1.desc}</p>
          </div>
          <span class="status-pill status-active">\${MODULES.d1.badge}</span>
        </div>
        <div style="background:#eaf5eb; padding:12px 16px; border-radius:12px; font-size:13px; font-weight:600; color:var(--brand);">
          🎯 W bazie czeka 5 zestawów testowych (75 zadań). Za każdym podejściem otrzymujesz nowe pytania!
        </div>
        <div class="module-actions">
          <button class="primary" onclick="openLearnList('d1')">📖 Nauka (5 tematów)</button>
          <button class="accent" onclick="startQuizAuto('d1')">🎯 Sprawdź wiedzę (Test 15 pytań)</button>
        </div>
      </div>

      <!-- DZIAŁ II: MOJA OKOLICA -->
      <div class="module-card featured">
        <div class="module-head">
          <div>
            <div class="module-num" style="color:var(--green);">\${MODULES.d2.numStr} • s. \${MODULES.d2.pages} • Najbliższy sprawdzian</div>
            <h3 class="module-title" style="font-size: 24px;">\${MODULES.d2.title}</h3>
            <p class="module-desc">\${MODULES.d2.desc}</p>
          </div>
          <span class="status-pill status-active">\${MODULES.d2.badge}</span>
        </div>
        <div style="background:#eaf5eb; padding:12px 16px; border-radius:12px; font-size:13px; font-weight:600; color:var(--brand);">
          🎯 W bazie czeka 7 różnych zestawów testowych (126 zadań). Pełna rotacja pytań (3–7 podejść bez powtórek)!
        </div>
        <div class="module-actions">
          <button class="primary" onclick="openLearnList('d2')">📖 Nauka (6 tematów)</button>
          <button class="accent" onclick="startQuizAuto('d2')">🎯 Sprawdź wiedzę (Test 18 pytań)</button>
        </div>
      </div>

      <!-- DZIAŁY III-IV (W PRZYGOTOWANIU) -->
      <div class="module-card" style="opacity: 0.65;">
        <div class="module-head">
          <div>
            <div class="module-num">Dział III • s. 91–140</div>
            <h3 class="module-title">Odkrywam krajobrazy Polski</h3>
            <p class="module-desc">Pobrzeża, pojezierza, niziny, wyżyny i góry Polski.</p>
          </div>
          <span class="status-pill status-lock">🔒 W przygotowaniu</span>
        </div>
      </div>

      <div class="module-card" style="opacity: 0.65;">
        <div class="module-head">
          <div>
            <div class="module-num">Dział IV • s. 141–180</div>
            <h3 class="module-title">Odkrywam lądy i oceany</h3>
            <p class="module-desc">Kontynenty, oceany, strefy oświetlenia Ziemi i wielcy podróżnicy.</p>
          </div>
          <span class="status-pill status-lock">🔒 W przygotowaniu</span>
        </div>
      </div>
    </div>

    <div style="margin-top: 30px; text-align: center;">
      <button class="small outline" style="color:var(--muted);" onclick="resetProgress()">↺ Wyzeruj postępy na tym urządzeniu</button>
    </div>
  \`;
}

function resetProgress() {
  if (confirm('Czy na pewno chcesz zresetować zapisane podejścia do testów dla wszystkich działów?')) {
    state = { currentModuleId: 'd2', usedSets: { d1: [], d2: [] }, history: [], completedLearnSteps: {} };
    saveState();
    render();
  }
}

// ----------------------------------------------------
// 2. SPIS TEMATÓW NAUKI
// ----------------------------------------------------
function openLearnList(modId) {
  if (modId) currentModuleId = modId;
  currentView = 'learn_list';
  render();
}

function renderLearnList(root) {
  const mod = MODULES[currentModuleId];
  let listHtml = '';

  mod.topics.forEach((t, idx) => {
    const doneSteps = (state.completedLearnSteps[t.id] || []).length;
    const totalSteps = t.steps.length;
    const isDone = doneSteps >= totalSteps;
    listHtml += \`
      <div class="module-card" style="cursor:pointer;" onclick="openLearnTopic(\${idx})">
        <div class="module-head">
          <div style="display:flex; gap:14px; align-items:center;">
            <div style="font-size:32px;">\${t.icon}</div>
            <div>
              <div class="module-num" style="color:\${t.color}">Temat \${idx+1} • s. \${t.pages}</div>
              <h3 class="module-title" style="font-size:18px;">\${t.title}</h3>
              <p class="module-desc" style="font-size:13px;">\${t.intro}</p>
            </div>
          </div>
          <span class="status-pill \${isDone ? 'status-active' : 'status-lock'}">
            \${isDone ? '✓ Ukończony' : doneSteps + '/' + totalSteps + ' kroków'}
          </span>
        </div>
      </div>
    \`;
  });

  root.innerHTML = \`
    <div style="margin-bottom: 16px;">
      <button class="small" onclick="currentView='hub'; render();">← Wróć do ekranu głównego</button>
    </div>
    <div class="panel">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
        <h2 style="margin:0; font-size:22px;">📖 Wybierz temat do nauki — \${mod.title} (\${mod.pages})</h2>
      </div>
      <p style="color:var(--muted); font-size:14px; margin-bottom:20px;">
        W każdym temacie znajdziesz proste wyjaśnienia, interaktywne schematy oraz przykłady z podręcznika zgodne z wymaganiami szkolnymi.
      </p>
      <div style="display:flex; flex-direction:column; gap:12px;">
        \${listHtml}
      </div>
    </div>
  \`;
}

function openLearnTopic(idx) {
  currentTopicIdx = idx;
  currentStepIdx = 0;
  activeDiscoveryIdx = null;
  currentView = 'learn_step';
  render();
}

// ----------------------------------------------------
// 3. EKRAN KROKU NAUKI
// ----------------------------------------------------
function renderLearnStep(root) {
  const mod = MODULES[currentModuleId];
  const topic = mod.topics[currentTopicIdx];
  const step = topic.steps[currentStepIdx];
  const totalSteps = topic.steps.length;

  let bodyHtml = '';

  if (step.text) {
    bodyHtml += \`<p style="font-size:16px; margin-bottom:14px;">\${step.text}</p>\`;
  }
  if (step.subtext) {
    bodyHtml += \`<div style="background:#f0f5ec; padding:12px 16px; border-radius:12px; font-size:14px; margin-bottom:14px; color:var(--brand);">\${step.subtext}</div>\`;
  }
  if (step.rule) {
    bodyHtml += \`
      <div style="background:var(--lime-soft); border:2px solid #89b83b; border-radius:14px; padding:16px; margin:14px 0; text-align:center;">
        <div style="font-size:12px; font-weight:800; color:var(--brand); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">Żelazna zasada badacza</div>
        <div style="font-size:18px; font-weight:800; color:var(--brand);">\${step.rule}</div>
      </div>
    \`;
  }
  if (step.details) {
    bodyHtml += '<div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px; margin-bottom:14px;">';
    bodyHtml += '<div style="font-weight:700; font-size:13px; color:var(--brand); margin-bottom:6px;">Wskazówki efektywnej pracy:</div>';
    bodyHtml += '<ul style="margin:0; padding-left:20px; font-size:13px; display:flex; flex-direction:column; gap:4px;">';
    step.details.forEach(d => bodyHtml += \`<li>✓ \${d}</li>\`);
    bodyHtml += '</ul></div>';
  }
  if (step.bullets) {
    bodyHtml += '<ul style="margin:0 0 16px 20px; padding:0; font-size:15px; display:flex; flex-direction:column; gap:8px;">';
    step.bullets.forEach(b => bodyHtml += \`<li>\${b}</li>\`);
    bodyHtml += '</ul>';
  }
  if (step.stepsList) {
    bodyHtml += '<div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">';
    step.stepsList.forEach(s => bodyHtml += \`<div style="background:#fff; border:1px solid var(--line); padding:10px 14px; border-radius:10px; font-size:14px;">\${s}</div>\`);
    bodyHtml += '</div>';
  }
  if (step.table) {
    const isCustomHeader = step.table[0] && (step.table[0].feat === 'Zmysł');
    const th1 = isCustomHeader ? step.table[0].feat : 'Cecha';
    const th2 = isCustomHeader ? step.table[0].city : '🏙️ Miasto';
    const th3 = isCustomHeader ? step.table[0].village : '🏡 Wieś';
    const rows = isCustomHeader ? step.table.slice(1) : step.table;

    bodyHtml += \`
      <div style="overflow-x:auto; margin:14px 0; border:1px solid var(--line); border-radius:12px; background:#fff;">
        <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left;">
          <thead>
            <tr style="background:#f0f5ec; color:var(--brand);">
              <th style="padding:10px 14px; border-bottom:1px solid var(--line);">\${th1}</th>
              <th style="padding:10px 14px; border-bottom:1px solid var(--line);">\${th2}</th>
              <th style="padding:10px 14px; border-bottom:1px solid var(--line);">\${th3}</th>
            </tr>
          </thead>
          <tbody>
            \${rows.map(r => \`
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:10px 14px; font-weight:700;">\${r.feat}</td>
                <td style="padding:10px 14px;">\${r.city}</td>
                <td style="padding:10px 14px;">\${r.village}</td>
              </tr>
            \`).join('')}
          </tbody>
        </table>
      </div>
    \`;
  }
  if (step.examples) {
    bodyHtml += '<div style="display:flex; flex-direction:column; gap:10px; margin:14px 0;">';
    step.examples.forEach(ex => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:12px 16px; display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
          <span style="font-weight:700; color:var(--brand); min-width:140px;">📍 \${ex.cause}</span>
          <span style="color:var(--muted);">➔</span>
          <span style="font-size:14px; flex:1;">\${ex.effect}</span>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.cards) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin:14px 0;">';
    step.cards.forEach(cd => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px;">
          <h4 style="margin:0 0 6px; font-size:16px; color:var(--brand);">\${cd.name}</h4>
          <div style="font-size:13px; color:var(--muted);">\${cd.desc}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.compare) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:12px; margin:14px 0;">';
    step.compare.forEach(c => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:14px; padding:16px;">
          <div style="font-size:28px; margin-bottom:6px;">\${c.icon || '📍'}</div>
          <h4 style="margin:0 0 6px; font-size:17px; color:var(--brand);">\${c.name}</h4>
          <div style="font-size:13px; font-weight:700; color:var(--muted); margin-bottom:6px;">Kształt / Działanie: \${c.shape}</div>
          <div style="font-size:14px;">\${c.features}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.features) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin:14px 0;">';
    step.features.forEach(f => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px;">
          <h4 style="margin:0 0 4px; font-size:15px; color:var(--brand);">\${f.name}</h4>
          <div style="font-size:13px; color:var(--muted);">\${f.desc}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.categories) {
    bodyHtml += '<div style="display:flex; flex-direction:column; gap:10px; margin:14px 0;">';
    step.categories.forEach(cat => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <strong style="font-size:16px; color:var(--brand);">\${cat.type || cat.cat}</strong>
            \${cat.examples ? \`<span class="status-pill status-active" style="font-size:12px;">\${cat.examples}</span>\` : ''}
          </div>
          <div style="font-size:13px; color:var(--ink);">\${cat.desc || cat.items}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.timeline) {
    bodyHtml += '<div style="display:flex; flex-direction:column; gap:10px; margin:14px 0;">';
    step.timeline.forEach(tl => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:12px 16px; display:flex; align-items:center; gap:14px;">
          <div style="background:var(--lime); color:var(--brand); width:32px; height:32px; border-radius:50%; display:grid; place-items:center; font-weight:800; flex-shrink:0;">\${tl.step}</div>
          <div>
            <div style="font-weight:700; font-size:15px; color:var(--brand);">\${tl.title}</div>
            <div style="font-size:13px; color:var(--muted);">\${tl.desc}</div>
          </div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.columns) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:12px; margin:14px 0;">';
    step.columns.forEach(col => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:14px; padding:16px;">
          <h4 style="margin:0 0 10px; font-size:15px; color:var(--brand); border-bottom:1px solid var(--line); padding-bottom:6px;">\${col.title}</h4>
          <ul style="margin:0; padding-left:18px; font-size:13px; display:flex; flex-direction:column; gap:6px;">
            \${col.items.map(it => \`<li>\${it}</li>\`).join('')}
          </ul>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.layers) {
    bodyHtml += '<div style="display:flex; flex-direction:column; gap:8px; margin:14px 0;">';
    step.layers.forEach(ly => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:12px 16px;">
          <strong style="color:var(--brand); font-size:15px; display:block; margin-bottom:2px;">\${ly.name}</strong>
          <span style="font-size:13px; color:var(--muted);">\${ly.desc}</span>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.experiments) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:12px; margin:14px 0;">';
    step.experiments.forEach(exp => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:14px; padding:16px;">
          <h4 style="margin:0 0 6px; font-size:15px; color:var(--brand);">🔬 \${exp.title}</h4>
          <div style="font-size:13px; color:var(--muted); margin-bottom:8px;"><strong>Czynność:</strong> \${exp.action}</div>
          <div style="font-size:13px; background:#eef7ee; padding:8px 10px; border-radius:8px;"><strong>Wynik:</strong> \${exp.result}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.insects) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin:14px 0;">';
    step.insects.forEach(ins => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px;">
          <strong style="color:var(--brand); font-size:16px; display:block; margin-bottom:4px;">🦗 \${ins.name}</strong>
          <div style="font-size:13px;">\${ins.desc}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.reasons) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin:14px 0;">';
    step.reasons.forEach(rs => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px;">
          <strong style="color:var(--brand); font-size:15px; display:block; margin-bottom:4px;">🦊 \${rs.r}</strong>
          <div style="font-size:13px; color:var(--muted);">\${rs.d}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.synanthropic) {
    bodyHtml += \`<div style="background:#f4f7f2; border:1px solid var(--line); padding:12px 16px; border-radius:10px; font-size:13px; margin-top:10px;">🏠 <strong>Lokatorzy domów:</strong> \${step.synanthropic}</div>\`;
  }
  if (step.clues) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin:14px 0;">';
    step.clues.forEach(cl => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px;">
          <strong style="color:#d96b43; font-size:14px; display:block; margin-bottom:2px;">🔍 Ślad: \${cl.clue}</strong>
          <div style="font-size:13px; font-weight:700; color:var(--brand);">➔ \${cl.who}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.discovery) {
    bodyHtml += '<div class="interactive-widget">';
    bodyHtml += '<div style="font-weight:700; font-size:13px; color:var(--brand); margin-bottom:6px;">👇 KLIKNIJ ELEMENT, ABY ODKRYĆ SZCZEGÓŁY:</div>';
    bodyHtml += '<div class="discovery-grid">';
    step.discovery.forEach((d, i) => {
      bodyHtml += \`<button class="discovery-btn \${activeDiscoveryIdx === i ? 'active' : ''}" onclick="selectDiscovery(\${i})">\${d.label}</button>\`;
    });
    bodyHtml += '</div>';
    if (activeDiscoveryIdx !== null && step.discovery[activeDiscoveryIdx]) {
      bodyHtml += \`<div class="discovery-desc">\${step.discovery[activeDiscoveryIdx].desc}</div>\`;
    }
    bodyHtml += '</div>';
  }
  if (step.thresholds) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin:14px 0;">';
    step.thresholds.forEach(th => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px;">
          <div style="font-size:22px; margin-bottom:4px;">\${th.icon}</div>
          <div style="font-weight:800; font-size:16px;">\${th.form}</div>
          <div style="font-size:13px; font-weight:700; color:var(--brand);">Wysokość / Wartość: \${th.height}</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">\${th.example}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.rockCards) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin:14px 0;">';
    step.rockCards.forEach(rc => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <strong style="font-size:16px;">\${rc.name}</strong>
            <span class="status-pill status-active" style="font-size:11px;">\${rc.type}</span>
          </div>
          <div style="font-size:12px; color:var(--muted); margin:4px 0;">Barwa: \${rc.color}</div>
          <div style="font-size:13px; margin:6px 0;">\${rc.feat}</div>
          <div style="font-size:12px; background:#f4f7f2; padding:6px 8px; border-radius:6px; margin-top:6px;"><strong>Zastosowanie:</strong> \${rc.use}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.plants) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin:14px 0;">';
    step.plants.forEach(p => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px;">
          <strong style="font-size:16px; color:var(--brand); display:block; margin-bottom:4px;">🌿 \${p.name}</strong>
          \${p.leaf ? '<div style="font-size:13px; margin-bottom:4px;"><strong>Liść:</strong> ' + p.leaf + '</div>' : ''}
          \${p.bark ? '<div style="font-size:13px; margin-bottom:4px;"><strong>Kora:</strong> ' + p.bark + '</div>' : ''}
          \${p.fruit ? '<div style="font-size:13px; margin-bottom:4px;"><strong>Owoce:</strong> ' + p.fruit + '</div>' : ''}
          \${p.flower ? '<div style="font-size:13px; margin-bottom:4px;"><strong>Kwiaty:</strong> ' + p.flower + '</div>' : ''}
          \${p.desc ? '<div style="font-size:12px; color:var(--muted);">' + p.desc + '</div>' : ''}
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.birds) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin:14px 0;">';
    step.birds.forEach(b => {
      bodyHtml += \`
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px;">
          <strong style="font-size:16px; color:var(--brand); display:block; margin-bottom:4px;">🪶 \${b.name}</strong>
          <div style="font-size:13px;">\${b.look}</div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.warning) {
    bodyHtml += \`<div style="background:#fff3e0; border-left:4px solid #f57c00; padding:12px 16px; border-radius:8px; font-size:14px; margin-top:14px;">⚠️ <strong>Ważne na sprawdzianie:</strong> \${step.warning}</div>\`;
  }
  if (step.tip) {
    bodyHtml += \`<div style="background:#e8f5e9; border-left:4px solid var(--green); padding:12px 16px; border-radius:8px; font-size:14px; margin-top:14px;">💡 <strong>Ciekawostka:</strong> \${step.tip}</div>\`;
  }

  root.innerHTML = \`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
      <button class="small" onclick="currentView='learn_list'; render();">← Spis tematów</button>
      <div style="font-size:13px; font-weight:700; color:var(--muted);">Krok \${currentStepIdx+1} z \${totalSteps}</div>
    </div>

    <div class="panel">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
        <div>
          <span class="status-pill status-active" style="margin-bottom:6px; display:inline-block;">\${step.badge || 'Wiedza'}</span>
          <h2 style="margin:0; font-size:22px;">\${step.title}</h2>
          <div style="font-size:12px; color:var(--muted); margin-top:3px;">\${topic.title} • s. \${topic.pages}</div>
        </div>
      </div>

      <div style="margin: 18px 0;">
        \${bodyHtml}
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:24px; padding-top:16px; border-top:1px solid var(--line);">
        <button class="small" \${currentStepIdx === 0 ? 'disabled' : ''} onclick="prevStep()">← Poprzedni</button>
        \${currentStepIdx < totalSteps - 1 
          ? \`<button class="primary" onclick="nextStep()">Następny krok →</button>\` 
          : \`<button class="accent" onclick="finishTopic()">✓ Zakończ temat</button>\`
        }
      </div>
    </div>
  \`;
}

function selectDiscovery(idx) {
  activeDiscoveryIdx = (activeDiscoveryIdx === idx) ? null : idx;
  render();
}
function prevStep() {
  if (currentStepIdx > 0) {
    currentStepIdx--;
    activeDiscoveryIdx = null;
    render();
  }
}
function nextStep() {
  const mod = MODULES[currentModuleId];
  const topic = mod.topics[currentTopicIdx];
  markStepDone(topic.id, currentStepIdx);
  if (currentStepIdx < topic.steps.length - 1) {
    currentStepIdx++;
    activeDiscoveryIdx = null;
    render();
  }
}
function finishTopic() {
  const mod = MODULES[currentModuleId];
  const topic = mod.topics[currentTopicIdx];
  markStepDone(topic.id, currentStepIdx);
  alert('Brawo! Ukończyłeś cały temat: ' + topic.title);
  currentView = 'learn_list';
  render();
}
function markStepDone(topicId, stepIdx) {
  if (!state.completedLearnSteps[topicId]) state.completedLearnSteps[topicId] = [];
  if (!state.completedLearnSteps[topicId].includes(stepIdx)) {
    state.completedLearnSteps[topicId].push(stepIdx);
    saveState();
  }
}

// ----------------------------------------------------
// 4. TRYB TESTU (SPRAWDŹ WIEDZĘ)
// ----------------------------------------------------
function startQuizAuto(modId) {
  if (modId) currentModuleId = modId;
  const mod = MODULES[currentModuleId];
  if (!state.usedSets[currentModuleId]) state.usedSets[currentModuleId] = [];

  let nextSet = 1;
  for (let s = 1; s <= mod.maxSets; s++) {
    if (!state.usedSets[currentModuleId].includes(s)) {
      nextSet = s;
      break;
    }
  }
  if (state.usedSets[currentModuleId].length >= mod.maxSets) {
    alert('Rozwiązałeś już wszystkie ' + mod.maxSets + ' zestawów z tego działu! Rozpoczynamy nową serię powtórkową.');
    state.usedSets[currentModuleId] = [];
    saveState();
    nextSet = 1;
  }
  startQuiz(nextSet);
}

function startQuiz(setNum) {
  const mod = MODULES[currentModuleId];
  activeQuizSet = setNum;
  quizQuestions = mod.questions.filter(q => q.set === setNum);
  quizQIndex = 0;
  quizScore = 0;
  quizTopicScores = new Array(mod.topics.length).fill(0);
  quizAnswersLog = [];
  initQuestionState();
  currentView = 'quiz';
  render();
}

function initQuestionState() {
  quizSelection = null;
  const q = quizQuestions[quizQIndex];
  if (!q) return;
  if (q.type === 'bin_sort') {
    quizBinsState = { items: q.items.map((it, idx) => ({ id: idx, text: it.text, bin: null })), selectedItem: null };
  } else if (q.type === 'order') {
    quizOrderState = q.items.map((it, idx) => ({ id: idx, text: it }));
  } else if (q.type === 'match') {
    quizMatchState = { selectedLeft: null, pairs: {} };
  } else if (q.type === 'multichoice') {
    quizSelection = [];
  }
}

function renderQuiz(root) {
  const mod = MODULES[currentModuleId];
  const q = quizQuestions[quizQIndex];
  if (!q) {
    finishQuiz();
    return;
  }

  const topic = mod.topics[q.topic];
  const progressPct = ((quizQIndex) / quizQuestions.length) * 100;
  const answered = quizAnswersLog[quizQIndex] !== undefined;

  let interactHtml = '';

  // 1. Single Choice
  if (q.type === 'choice') {
    interactHtml += '<div class="options-grid two-cols">';
    q.opts.forEach((opt, idx) => {
      let cls = 'opt-btn';
      if (answered) {
        if (idx === q.a) cls += ' correct';
        else if (idx === quizSelection) cls += ' wrong';
      } else if (quizSelection === idx) {
        cls += ' selected';
      }
      interactHtml += \`
        <button class="\${cls}" \${answered ? 'disabled' : ''} onclick="pickChoice(\${idx})">
          <span style="font-weight:800; min-width:24px; color:var(--brand);">\${['A','B','C','D'][idx]}.</span>
          <span>\${opt}</span>
        </button>
      \`;
    });
    interactHtml += '</div>';
    if (!answered) {
      interactHtml += \`<div style="margin-top:16px;"><button class="primary" \${quizSelection === null ? 'disabled' : ''} onclick="submitChoice()">Sprawdź odpowiedź</button></div>\`;
    }
  }

  // 2. Multichoice
  else if (q.type === 'multichoice') {
    interactHtml += '<div class="options-grid">';
    q.opts.forEach((opt, idx) => {
      const isSel = (quizSelection || []).includes(idx);
      let cls = 'opt-btn';
      if (answered) {
        const isCorrect = q.correctIndices.includes(idx);
        if (isCorrect) cls += ' correct';
        else if (isSel) cls += ' wrong';
      } else if (isSel) {
        cls += ' selected';
      }
      interactHtml += \`
        <button class="\${cls}" \${answered ? 'disabled' : ''} onclick="toggleMulti(\${idx})">
          <span style="font-size:18px;">\${isSel ? '☑' : '☐'}</span>
          <span>\${opt}</span>
        </button>
      \`;
    });
    interactHtml += '</div>';
    if (!answered) {
      interactHtml += \`<div style="margin-top:16px;"><button class="primary" \${(quizSelection||[]).length === 0 ? 'disabled' : ''} onclick="submitMulti()">Zatwierdź wybór</button></div>\`;
    }
  }

  // 3. Bin sort
  else if (q.type === 'bin_sort') {
    const unassigned = quizBinsState.items.filter(it => it.bin === null);
    interactHtml += '<div style="font-size:13px; font-weight:700; color:var(--brand); margin-bottom:6px;">1. Kliknij element poniżej, a następnie kliknij docelową szufladę:</div>';
    interactHtml += '<div class="items-pool">';
    if (unassigned.length === 0) {
      interactHtml += '<span style="color:var(--muted); font-size:13px;">Wszystkie elementy zostały przyporządkowane!</span>';
    } else {
      unassigned.forEach(it => {
        const isSel = quizBinsState.selectedItem === it.id;
        interactHtml += \`<div class="item-chip \${isSel ? 'selected' : ''}" onclick="selectSortItem(\${it.id})">\${it.text}</div>\`;
      });
    }
    interactHtml += '</div>';

    interactHtml += '<div class="bins-container">';
    q.bins.forEach((bName, bIdx) => {
      const inBin = quizBinsState.items.filter(it => it.bin === bIdx);
      const isTargetActive = quizBinsState.selectedItem !== null;
      interactHtml += \`
        <div class="bin-col \${isTargetActive ? 'active-target' : ''}" onclick="assignToBin(\${bIdx})">
          <div class="bin-title">📦 \${bName}</div>
          \${isTargetActive ? \`<div style="text-align:center; padding:6px; background:var(--lime); color:var(--brand); font-weight:800; font-size:12px; border-radius:8px; margin-bottom:8px; cursor:pointer;">⬇️ Kliknij, by włożyć</div>\` : ''}
          <div style="display:flex; flex-direction:column; gap:6px;">
            \${inBin.map(it => \`
              <div class="item-chip" style="font-size:13px; padding:6px 10px; display:flex; justify-content:space-between; align-items:center;">
                <span>\${it.text}</span>
                \${!answered ? \`<button type="button" style="background:#fee; border:1px solid #fcc; color:var(--red); font-weight:900; font-size:11px; padding:2px 8px; min-height:24px; border-radius:6px; margin-left:6px;" onclick="event.stopPropagation(); unassignItem(\${it.id});">✕</button>\` : ''}
              </div>
            \`).join('')}
          </div>
        </div>
      \`;
    });
    interactHtml += '</div>';

    if (!answered) {
      interactHtml += \`<div style="margin-top:16px;"><button class="primary" \${unassigned.length > 0 ? 'disabled' : ''} onclick="submitBinSort()">Sprawdź podział</button></div>\`;
    }
  }

  // 4. Order
  else if (q.type === 'order') {
    interactHtml += '<div class="order-list">';
    quizOrderState.forEach((item, pos) => {
      interactHtml += \`
        <div class="order-row">
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="background:var(--brand); color:#fff; width:28px; height:28px; border-radius:50%; display:grid; place-items:center; font-weight:800; font-size:13px;">\${pos+1}</div>
            <div style="font-weight:600; font-size:15px;">\${item.text}</div>
          </div>
          \${!answered ? \`
            <div class="order-controls">
              <button class="small" \${pos === 0 ? 'disabled' : ''} onclick="moveOrderItem(\${pos}, -1)">▲</button>
              <button class="small" \${pos === quizOrderState.length - 1 ? 'disabled' : ''} onclick="moveOrderItem(\${pos}, 1)">▼</button>
            </div>
          \` : ''}
        </div>
      \`;
    });
    interactHtml += '</div>';
    if (!answered) {
      interactHtml += \`<div style="margin-top:16px;"><button class="primary" onclick="submitOrder()">Zatwierdź kolejność</button></div>\`;
    }
  }

  // 5. Match (Pary)
  else if (q.type === 'match') {
    const leftPaired = Object.keys(quizMatchState.pairs).map(Number);
    const rightPaired = Object.values(quizMatchState.pairs);

    interactHtml += '<div style="font-size:13px; font-weight:700; color:var(--brand); margin-bottom:8px;">Kliknij element po lewej stronie, a następnie pasujący element po prawej:</div>';
    interactHtml += '<div class="match-grid">';
    
    // Lewa kolumna
    interactHtml += '<div class="match-col">';
    q.pairs.forEach((p, idx) => {
      const isPaired = leftPaired.includes(idx);
      const isSel = quizMatchState.selectedLeft === idx;
      let cls = 'match-btn opt-btn';
      if (isPaired) cls += ' paired';
      if (isSel) cls += ' selected';
      interactHtml += \`<button class="\${cls}" \${answered ? 'disabled' : ''} onclick="pickMatchLeft(\${idx})">\${p.left}</button>\`;
    });
    interactHtml += '</div>';

    // Prawa kolumna (losowa lub stała wg definicji)
    interactHtml += '<div class="match-col">';
    q.pairs.forEach((p, idx) => {
      const isPaired = rightPaired.includes(idx);
      let cls = 'match-btn opt-btn';
      if (isPaired) cls += ' paired';
      interactHtml += \`<button class="\${cls}" \${answered ? 'disabled' : ''} onclick="pickMatchRight(\${idx})">\${p.right}</button>\`;
    });
    interactHtml += '</div>';

    interactHtml += '</div>';

    if (!answered) {
      const allPaired = Object.keys(quizMatchState.pairs).length === q.pairs.length;
      interactHtml += \`
        <div style="display:flex; gap:10px; margin-top:16px;">
          <button class="primary" \${!allPaired ? 'disabled' : ''} onclick="submitMatch()">Sprawdź dopasowanie</button>
          \${Object.keys(quizMatchState.pairs).length > 0 ? \`<button class="small outline" onclick="resetPairs()">Wyczyść połączenia</button>\` : ''}
        </div>
      \`;
    }
  }

  // 6. Hotspot (Klikalna ilustracja SVG)
  else if (q.type === 'hotspot') {
    interactHtml += \`
      <div class="hotspot-svg-wrap">
        <svg viewBox="0 0 100 100" style="width:100%; height:auto; display:block;">
          \${q.svg === 'mountain' ? \`
            <polygon points="50,15 15,88 85,88" fill="#a4c2a5" stroke="#173d34" stroke-width="2"/>
            <polygon points="50,15 42,32 50,30 58,32" fill="#ffffff"/>
            <line x1="0" y1="88" x2="100" y2="88" stroke="#173d34" stroke-width="3"/>
          \` : \`
            <rect x="10" y="5" width="80" height="15" fill="#388e3c"/>
            <rect x="10" y="20" width="80" height="28" fill="#3e2723"/>
            <rect x="10" y="48" width="80" height="25" fill="#8d6e63"/>
            <rect x="10" y="73" width="80" height="22" fill="#9e9e9e"/>
          \`}
        </svg>
        \${q.hotspots.map((hs, i) => \`
          <div class="hotspot-point" style="left:\${hs.x}%; top:\${hs.y}%;" onclick="pickHotspot(\${i})">
            \${i+1}
          </div>
        \`).join('')}
      </div>
      <div style="font-size:13px; color:var(--muted); text-align:center; margin-bottom:12px;">
        Kliknij jeden z ponumerowanych punktów na rysunku!
      </div>
    \`;
    if (!answered) {
      interactHtml += \`<div style="text-align:center;"><button class="primary" \${quizSelection === null ? 'disabled' : ''} onclick="submitHotspot()">Potwierdź wybór</button></div>\`;
    }
  }

  // Pudełko wyjaśnienia po sprawdzeniu
  let feedbackHtml = '';
  if (answered) {
    const isCorrect = quizAnswersLog[quizQIndex].isCorrect;
    feedbackHtml = \`
      <div class="feedback-box \${isCorrect ? '' : 'bad'}">
        <h4 style="font-size:17px; margin-bottom:8px;">\${isCorrect ? '✅ Świetnie! Prawidłowa odpowiedź (+1 pkt)' : '❌ Niestety, to nie jest poprawna odpowiedź (0 pkt)'}</h4>
        <p style="font-size:14px; line-height:1.45; margin-bottom:10px;">\${q.why}</p>
        <div style="font-size:12px; color:var(--muted); margin-bottom:16px;"><strong>Źródło podręcznika:</strong> s. \${q.src}</div>
        <button class="accent" onclick="nextQuestion()">
          \${quizQIndex < quizQuestions.length - 1 ? 'Następne zadanie →' : 'Zobacz wynik testu 🏆'}
        </button>
      </div>
    \`;
  }

  root.innerHTML = \`
    <div class="top-bar-quiz">
      <button class="small" onclick="quitQuiz()">✕ Zakończ test</button>
      <span class="status-pill status-active">
        \${mod.numStr} • Zestaw \${activeQuizSet} z \${mod.maxSets} • Zadanie \${quizQIndex + 1} / \${quizQuestions.length}
      </span>
    </div>

    <div class="progress-bar">
      <div style="width:\${progressPct}%;"></div>
    </div>

    <div class="panel">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="status-pill status-lock" style="font-size:11px;">Temat: \${topic.title}</span>
        <span style="font-size:12px; color:var(--muted);">Punkty: \${quizScore} / \${quizQuestions.length}</span>
      </div>

      <div class="q-title">\${q.q}</div>
      <div class="q-instruction">
        \${q.type === 'choice' ? 'Wybierz jedną właściwą odpowiedź:' : ''}
        \${q.type === 'multichoice' ? 'Zaznacz wszystkie poprawne odpowiedzi (wielokrotny wybór):' : ''}
        \${q.type === 'bin_sort' ? 'Rozdziel elementy klikając na nie, a następnie na koszyk:' : ''}
        \${q.type === 'order' ? 'Ustaw elementy w odpowiedniej kolejności za pomocą strzałek:' : ''}
        \${q.type === 'match' ? 'Dobierz pasujące elementy w pary:' : ''}
        \${q.type === 'hotspot' ? 'Wskaż właściwy punkt na ilustracji poniżej:' : ''}
      </div>

      \${interactHtml}
      \${feedbackHtml}
    </div>
  \`;
}

// Obsługa interakcji pytań
function pickChoice(idx) {
  if (quizAnswersLog[quizQIndex] !== undefined) return;
  quizSelection = idx;
  render();
}
function submitChoice() {
  const q = quizQuestions[quizQIndex];
  const isCorrect = (quizSelection === q.a);
  recordAnswer(isCorrect);
}

function toggleMulti(idx) {
  if (quizAnswersLog[quizQIndex] !== undefined) return;
  if (!quizSelection) quizSelection = [];
  const pos = quizSelection.indexOf(idx);
  if (pos === -1) quizSelection.push(idx);
  else quizSelection.splice(pos, 1);
  render();
}
function submitMulti() {
  const q = quizQuestions[quizQIndex];
  const sel = [...quizSelection].sort();
  const corr = [...q.correctIndices].sort();
  const isCorrect = (sel.length === corr.length) && sel.every((v, i) => v === corr[i]);
  recordAnswer(isCorrect);
}

function selectSortItem(itemId) {
  if (quizAnswersLog[quizQIndex] !== undefined) return;
  quizBinsState.selectedItem = itemId;
  render();
}
function assignToBin(binIdx) {
  if (quizAnswersLog[quizQIndex] !== undefined) return;
  if (quizBinsState.selectedItem === null) return;
  const it = quizBinsState.items.find(x => x.id === quizBinsState.selectedItem);
  if (it) {
    it.bin = binIdx;
    quizBinsState.selectedItem = null;
    render();
  }
}
function unassignItem(itemId) {
  if (quizAnswersLog[quizQIndex] !== undefined) return;
  if (quizBinsState.selectedItem !== null) return;
  const it = quizBinsState.items.find(x => x.id === itemId);
  if (it) {
    it.bin = null;
    render();
  }
}
function submitBinSort() {
  const q = quizQuestions[quizQIndex];
  let isCorrect = true;
  q.items.forEach((orig, idx) => {
    const cur = quizBinsState.items.find(x => x.id === idx);
    if (!cur || cur.bin !== orig.bin) isCorrect = false;
  });
  recordAnswer(isCorrect);
}

function moveOrderItem(pos, dir) {
  if (quizAnswersLog[quizQIndex] !== undefined) return;
  const target = pos + dir;
  if (target < 0 || target >= quizOrderState.length) return;
  const tmp = quizOrderState[pos];
  quizOrderState[pos] = quizOrderState[target];
  quizOrderState[target] = tmp;
  render();
}
function submitOrder() {
  const q = quizQuestions[quizQIndex];
  let isCorrect = true;
  quizOrderState.forEach((it, idx) => {
    if (it.id !== q.correctOrder[idx]) isCorrect = false;
  });
  recordAnswer(isCorrect);
}

function pickMatchLeft(idx) {
  if (quizAnswersLog[quizQIndex] !== undefined) return;
  quizMatchState.selectedLeft = idx;
  render();
}
function pickMatchRight(idx) {
  if (quizAnswersLog[quizQIndex] !== undefined) return;
  if (quizMatchState.selectedLeft === null) return;
  quizMatchState.pairs[quizMatchState.selectedLeft] = idx;
  quizMatchState.selectedLeft = null;
  render();
}
function resetPairs() {
  quizMatchState.pairs = {};
  quizMatchState.selectedLeft = null;
  render();
}
function submitMatch() {
  const q = quizQuestions[quizQIndex];
  let isCorrect = true;
  q.pairs.forEach((p, idx) => {
    if (quizMatchState.pairs[idx] !== idx) isCorrect = false;
  });
  recordAnswer(isCorrect);
}

function pickHotspot(ptIdx) {
  if (quizAnswersLog[quizQIndex] !== undefined) return;
  quizSelection = ptIdx;
  render();
}
function submitHotspot() {
  const q = quizQuestions[quizQIndex];
  const hs = q.hotspots && q.hotspots[quizSelection];
  const isCorrect = hs && hs.correct === true;
  recordAnswer(isCorrect);
}

function recordAnswer(isCorrect) {
  const q = quizQuestions[quizQIndex];
  quizAnswersLog[quizQIndex] = { isCorrect, qId: q.id };
  if (isCorrect) {
    quizScore++;
    quizTopicScores[q.topic]++;
  }
  render();
}

function nextQuestion() {
  if (quizQIndex < quizQuestions.length - 1) {
    quizQIndex++;
    initQuestionState();
    render();
  } else {
    finishQuiz();
  }
}

function quitQuiz() {
  if (confirm('Czy na pewno chcesz przerwać test? Twój postęp z tego zestawu nie zostanie zapisany.')) {
    currentView = 'hub';
    render();
  }
}

// ----------------------------------------------------
// 5. EKRAN WYNIKÓW
// ----------------------------------------------------
function finishQuiz() {
  const mod = MODULES[currentModuleId];
  const total = quizQuestions.length;
  const pct = Math.round((quizScore / total) * 100);

  if (!state.usedSets[currentModuleId]) state.usedSets[currentModuleId] = [];
  if (!state.usedSets[currentModuleId].includes(activeQuizSet)) {
    state.usedSets[currentModuleId].push(activeQuizSet);
  }
  state.history.push({
    date: new Date().toLocaleDateString('pl-PL'),
    moduleId: currentModuleId,
    set: activeQuizSet,
    score: quizScore,
    total: total,
    pct: pct,
    topicScores: [...quizTopicScores]
  });
  saveState();

  currentView = 'results';
  render();
}

function renderResults(root) {
  const mod = MODULES[currentModuleId];
  const total = quizQuestions.length;
  const pct = Math.round((quizScore / total) * 100);

  let weakestIdxs = [];
  quizTopicScores.forEach((s, idx) => {
    if (s < 3) weakestIdxs.push(idx);
  });

  let badgeTitle = 'Odkrywca Przyrody';
  if (pct === 100) badgeTitle = 'Mistrz Przyrody (Bezbłędny wynik!) 🏆';
  else if (pct >= 85) badgeTitle = 'Znakomity Badacz Przyrody ⭐';
  else if (pct >= 65) badgeTitle = 'Dobry Przyrodnik 🌿';
  else badgeTitle = 'Młody Odkrywca (warto powtórzyć) 📖';

  let topicsHtml = '';
  mod.topics.forEach((t, idx) => {
    const sc = quizTopicScores[idx] || 0;
    topicsHtml += \`
      <div>
        <div class="topic-score-row">
          <span>\${t.icon} \${t.title}</span>
          <span>\${sc} / 3 pkt</span>
        </div>
        <div class="topic-track">
          <div class="topic-fill" style="width:\${(sc/3)*100}%;"></div>
        </div>
      </div>
    \`;
  });

  let recHtml = '';
  if (weakestIdxs.length > 0) {
    recHtml = \`
      <div class="recommend-card">
        <h4>🎯 Rekomendacja przed sprawdzianem:</h4>
        <p>Warto zajrzeć do trybu Nauka i powtórzyć poniższe tematy:</p>
        <div style="display:flex; flex-direction:column; gap:8px;">
          \${weakestIdxs.map(idx => \`
            <button class="small" onclick="openLearnTopic(\${idx})">
              📖 Przejdź do: \${mod.topics[idx].title} (s. \${mod.topics[idx].pages}) →
            </button>
          \`).join('')}
        </div>
      </div>
    \`;
  } else {
    recHtml = \`
      <div style="background:var(--green-soft); border:1px solid #c8e6c9; border-radius:14px; padding:16px; margin-top:18px;">
        <h4 style="margin:0 0 4px; color:var(--green);">🌟 Bezbłędny test we wszystkich tematach!</h4>
        <p style="margin:0; font-size:13px;">Wspaniale opanowałeś materiał z: \${mod.title}. Możesz rozwiązać kolejny zestaw z nowymi pytaniami lub odpocząć!</p>
      </div>
    \`;
  }

  root.innerHTML = \`
    <div class="panel" style="text-align:center;">
      <span class="status-pill status-active">\${mod.title} • Zestaw \${activeQuizSet} z \${mod.maxSets} ukończony</span>
      <h2 style="font-size:26px; margin:10px 0 4px;">\${badgeTitle}</h2>
      <p style="color:var(--muted); font-size:14px; margin:0;">Twój wynik z \${total} zadań sprawdzianowych:</p>

      <div class="results-score-ring" style="--pct:\${pct};">
        <div class="results-score-inner">
          <div class="score-num">\${quizScore}</div>
          <div class="score-max">z \${total} pkt (\${pct}%)</div>
        </div>
      </div>

      <div style="text-align:left; margin:24px 0 16px;">
        <h3 style="font-size:16px; margin-bottom:12px;">Szczegółowe wyniki w poszczególnych tematach:</h3>
        \${topicsHtml}
      </div>

      <div style="text-align:left; margin:24px 0 16px;">
        <h3 style="font-size:16px; margin-bottom:12px;">Przegląd wszystkich pytań z tego testu:</h3>
        <div style="display:flex; flex-direction:column; gap:8px;">
          \${quizQuestions.map((q, idx) => {
            const log = quizAnswersLog[idx] || {};
            const ok = log.isCorrect;
            return \`
              <div style="background:#fff; border:1px solid \${ok ? 'var(--green)' : '#ef9a9a'}; border-left:5px solid \${ok ? 'var(--green)' : 'var(--red)'}; padding:10px 14px; border-radius:10px; font-size:13px;">
                <div style="display:flex; justify-content:space-between; align-items:center; font-weight:700; margin-bottom:2px;">
                  <span>Zadanie \${idx+1}: \${q.q.substring(0, 65)}\${q.q.length > 65 ? '...' : ''}</span>
                  <span class="status-pill \${ok ? 'status-active' : ''}" style="\${ok ? '' : 'background:#ffebee; color:var(--red);'}">\${ok ? '✓ 1 / 1 pkt' : '✗ 0 / 1 pkt'}</span>
                </div>
                \${!ok ? \`
                  <div style="margin-top:6px; font-size:12px; color:var(--ink); background:#fffaf9; padding:6px 10px; border-radius:6px; border:1px dashed #ffcdd2;">
                    <strong>💡 Dlaczego tak?</strong> \${q.why} <em>(podręcznik s. \${q.src})</em>
                  </div>
                \` : ''}
              </div>
            \`;
          }).join('')}
        </div>
      </div>

      \${recHtml}

      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-top:24px; padding-top:18px; border-top:1px solid var(--line);">
        <button class="primary" onclick="startQuizAuto('\${currentModuleId}')">🚀 Rozwiąż kolejny test (inny zestaw pytań)</button>
        <button onclick="openLearnList('\${currentModuleId}')">📖 Przejdź do Nauki</button>
        <button class="outline" onclick="currentView='hub'; render();">🏠 Ekran główny</button>
      </div>
    </div>
  \`;
}

// Inicjalizacja startowa
render();
</script>
</body>
</html>`;

fs.writeFileSync('C:/Users/mlata/.gemini/antigravity/scratch/nauka-przyroda-tymek/index.html', htmlContent, 'utf-8');
console.log('Build completed! index.html written successfully.');
