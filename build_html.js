const fs = require('fs');
const path = require('path');

const topics = require('./src/data_topics.js');
const questions = require('./src/data_questions.js');

const htmlContent = `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta name="theme-color" content="#173d34">
<title>Odkrywam Przyrodę — Misja Tymka</title>
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
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
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
  max-width: 580px;
  color: #d1e5dd;
  font-size: 16px;
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
  margin: 0;
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
  <div class="brand-title">
    <div class="brand-icon">🌱</div>
    <span>Odkrywam Przyrodę 4</span>
  </div>
  <div id="topMeta" class="nav-pill">Misja Tymka</div>
</header>

<main class="app-wrap" id="appMain"></main>

<script>
// Kompletne dane aplikacji
const TOPICS = ${JSON.stringify(topics)};
const QUESTIONS = ${JSON.stringify(questions)};

// Model stanu aplikacji (localStorage persistence)
const STORE_KEY = 'tymek_przyroda_v2';
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return {
    usedSets: [],
    history: [],
    completedLearnSteps: {}
  };
}
function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}
let state = loadState();

// Routing & widoki
let currentView = 'hub'; // 'hub' | 'learn_list' | 'learn_step' | 'quiz' | 'results'
let currentTopicIdx = 0;
let currentStepIdx = 0;
let activeQuizSet = 1;
let quizQuestions = [];
let quizQIndex = 0;
let quizScore = 0;
let quizTopicScores = [0, 0, 0, 0, 0, 0];
let quizAnswersLog = [];

// Interakcja bieżącego pytania
let quizSelection = null;
let quizBinsState = {};
let quizOrderState = [];
let quizMatchState = { selectedLeft: null, pairs: {} };

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
  const completedSetsCount = state.usedSets.length;
  root.innerHTML = \`
    <div class="hero-card">
      <div style="font-size: 12px; font-weight:800; letter-spacing:1.5px; opacity:0.8; text-transform:uppercase;">Nowa Era • Klasa 4</div>
      <h1>Cześć, Tymek! 🌿</h1>
      <p>Przed Tobą interaktywny podręcznik do przyrody. Przygotuj się do najbliższego sprawdzianu: poznaj tajemnice swojej okolicy w trybie <strong>Nauka</strong>, a potem sprawdź wiedzę w teście!</p>
      <div class="hero-meta">
        <span class="meta-chip">🏆 Rozwiązane zestawy: \${completedSetsCount} / 7</span>
        <span class="meta-chip">📚 Dział II: Moja okolica (s. 53–90)</span>
      </div>
    </div>

    <h2 style="font-size: 20px; margin: 24px 0 14px;">Działy podręcznika</h2>
    <div class="modules-grid">
      <!-- DZIAŁ I -->
      <div class="module-card">
        <div class="module-head">
          <div>
            <div class="module-num">Dział I • s. 4–52</div>
            <h3 class="module-title">Odkrywam tajemnice przyrody</h3>
            <p class="module-desc">Zmysły badacza, mikroskop, kompas, planowanie doświadczeń i koncentracja.</p>
          </div>
          <span class="status-pill status-active">✓ Opracowany</span>
        </div>
        <div class="module-actions">
          <button class="small" onclick="window.location.href='Misja-Przyroda-Tymek.html'">Otwórz mini-grę (Dział I) →</button>
        </div>
      </div>

      <!-- DZIAŁ II: MOJA OKOLICA -->
      <div class="module-card featured">
        <div class="module-head">
          <div>
            <div class="module-num" style="color:var(--green);">Główny moduł • Najbliższy sprawdzian</div>
            <h3 class="module-title" style="font-size: 24px;">Dział II: Moja okolica</h3>
            <p class="module-desc">Krajobraz, ukształtowanie terenu, skały, profil gleby oraz 6 roślin, 6 ptaków i 3 owady ze zdjęć.</p>
          </div>
          <span class="status-pill status-active">★ Gotowy do nauki</span>
        </div>
        <div style="background:#eaf5eb; padding:12px 16px; border-radius:12px; font-size:13px; font-weight:600; color:var(--brand);">
          🎯 W bazie czeka 7 różnych zestawów testowych (126 zadań). Każde podejście daje nowe pytania!
        </div>
        <div class="module-actions">
          <button class="primary" onclick="openLearnList()">📖 Przejdź do Nauki (6 tematów)</button>
          <button class="accent" onclick="startQuizAuto()">🎯 Sprawdź wiedzę (Test 18 pytań)</button>
        </div>
      </div>

      <!-- DZIAŁY III-VI -->
      <div class="module-card" style="opacity: 0.65;">
        <div class="module-head">
          <div>
            <div class="module-num">Dział III • s. 91–140</div>
            <h3 class="module-title">Odkrywam krajobrazy Polski</h3>
            <p class="module-desc">Pobrzeża, pojezierza, niziny, wyżyny i góry Polski.</p>
          </div>
          <span class="status-pill status-lock">🔒 Wkrótce</span>
        </div>
      </div>
      <div class="module-card" style="opacity: 0.65;">
        <div class="module-head">
          <div>
            <div class="module-num">Dział IV • s. 141–180</div>
            <h3 class="module-title">Odkrywam lądy i oceany</h3>
            <p class="module-desc">Kontynenty, morza, strefy oświetlenia i podróżnicy.</p>
          </div>
          <span class="status-pill status-lock">🔒 Wkrótce</span>
        </div>
      </div>
    </div>

    <div style="margin-top: 30px; text-align: center;">
      <button class="small outline" style="color:var(--muted);" onclick="resetProgress()">↺ Wyzeruj postępy na tym urządzeniu</button>
    </div>
  \`;
}

function resetProgress() {
  if (confirm('Czy na pewno chcesz zresetować zapisane podejścia do testów?')) {
    state = { usedSets: [], history: [], completedLearnSteps: {} };
    saveState();
    render();
  }
}

// ----------------------------------------------------
// 2. SPIS TEMATÓW NAUKI
// ----------------------------------------------------
function openLearnList() {
  currentView = 'learn_list';
  render();
}

function renderLearnList(root) {
  let listHtml = '';
  TOPICS.forEach((t, idx) => {
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
        <h2 style="margin:0; font-size:22px;">📖 Wybierz temat do nauki (Dział II)</h2>
      </div>
      <p style="color:var(--muted); font-size:14px; margin-bottom:20px;">
        W każdym temacie znajdziesz proste wyjaśnienia, schematy z odkrywanymi podpisami oraz przykłady z podręcznika.
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
  currentView = 'learn_step';
  render();
}

// ----------------------------------------------------
// 3. EKRAN KROKU NAUKI
// ----------------------------------------------------
let activeDiscoveryIdx = null;

function renderLearnStep(root) {
  const topic = TOPICS[currentTopicIdx];
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
    bodyHtml += '<div style="font-weight:700; font-size:13px; color:var(--brand); margin-bottom:6px;">Warunki, które muszą być identyczne w obu próbach:</div>';
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
    bodyHtml += \`
      <div style="overflow-x:auto; margin:14px 0; border:1px solid var(--line); border-radius:12px; background:#fff;">
        <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left;">
          <thead>
            <tr style="background:#f0f5ec; color:var(--brand);">
              <th style="padding:10px 14px; border-bottom:1px solid var(--line);">Cecha</th>
              <th style="padding:10px 14px; border-bottom:1px solid var(--line);">🏙️ Miasto</th>
              <th style="padding:10px 14px; border-bottom:1px solid var(--line);">🏡 Wieś</th>
            </tr>
          </thead>
          <tbody>
            \${step.table.map(r => \`
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
          <div style="font-size:13px; font-weight:700; color:var(--muted); margin-bottom:6px;">Kształt: \${c.shape}</div>
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
          <div style="font-size:13px; font-weight:700; color:var(--brand);">Wysokość: \${th.height}</div>
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
  const topic = TOPICS[currentTopicIdx];
  markStepDone(topic.id, currentStepIdx);
  if (currentStepIdx < topic.steps.length - 1) {
    currentStepIdx++;
    activeDiscoveryIdx = null;
    render();
  }
}
function finishTopic() {
  const topic = TOPICS[currentTopicIdx];
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
function startQuizAuto() {
  // Wybierz kolejny niewykorzystany zestaw (1 do 7)
  let nextSet = 1;
  for (let s = 1; s <= 7; s++) {
    if (!state.usedSets.includes(s)) {
      nextSet = s;
      break;
    }
  }
  // Jeśli wszystkie 7 zostały rozwiązane, powiadom i zacznij pętlę
  if (state.usedSets.length >= 7) {
    alert('Rozwiązałeś już wszystkie 7 zestawów! Rozpoczynamy nową serię powtórkową.');
    state.usedSets = [];
    saveState();
    nextSet = 1;
  }
  startQuiz(nextSet);
}

function startQuiz(setNum) {
  activeQuizSet = setNum;
  quizQuestions = QUESTIONS.filter(q => q.set === setNum);
  quizQIndex = 0;
  quizScore = 0;
  quizTopicScores = [0, 0, 0, 0, 0, 0];
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
  const q = quizQuestions[quizQIndex];
  if (!q) {
    finishQuiz();
    return;
  }

  const topic = TOPICS[q.topic];
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
      interactHtml += \`
        <div class="bin-col \${quizBinsState.selectedItem !== null ? 'active-target' : ''}" onclick="assignToBin(\${bIdx})">
          <div class="bin-title">📦 \${bName}</div>
          <div style="display:flex; flex-direction:column; gap:4px;">
            \${inBin.map(it => \`<div class="item-chip" style="font-size:12px; padding:4px 8px;" onclick="event.stopPropagation(); unassignItem(\${it.id});">\${it.text} ✕</div>\`).join('')}
          </div>
        </div>
      \`;
    });
    interactHtml += '</div>';

    if (!answered) {
      interactHtml += \`<div style="margin-top:16px;"><button class="primary" \${unassigned.length > 0 ? 'disabled' : ''} onclick="submitBinSort()">Sprawdź podział</button></div>\`;
    }
  }

  // 4. Hotspot
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

  // 5. Order
  else if (q.type === 'order') {
    interactHtml += '<div class="order-list">';
    quizOrderState.forEach((it, idx) => {
      interactHtml += \`
        <div class="order-row">
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="background:var(--lime); color:var(--brand); width:28px; height:28px; border-radius:50%; display:grid; place-items:center; font-weight:800; font-size:14px;">\${idx+1}</span>
            <span style="font-size:14px; font-weight:600;">\${it.text}</span>
          </div>
          \${!answered ? \`
            <div class="order-controls">
              <button class="small" onclick="moveOrder(\${idx}, -1)" \${idx===0?'disabled':''}>▲</button>
              <button class="small" onclick="moveOrder(\${idx}, 1)" \${idx===quizOrderState.length-1?'disabled':''}>▼</button>
            </div>
          \` : ''}
        </div>
      \`;
    });
    interactHtml += '</div>';
    if (!answered) {
      interactHtml += \`<div style="margin-top:16px;"><button class="primary" onclick="submitOrder()">Sprawdź kolejność</button></div>\`;
    }
  }

  // 6. Match
  else if (q.type === 'match') {
    interactHtml += '<div style="font-size:13px; font-weight:700; color:var(--brand); margin-bottom:8px;">Kliknij element z lewej, a potem pasujący z prawej:</div>';
    interactHtml += '<div class="match-grid">';
    
    // Lewa kolumna
    interactHtml += '<div class="match-col">';
    q.pairs.forEach((p, idx) => {
      const isPaired = quizMatchState.pairs[idx] !== undefined;
      const isSel = quizMatchState.selectedLeft === idx;
      interactHtml += \`
        <button class="match-btn \${isPaired ? 'paired' : ''} \${isSel ? 'selected' : ''}" onclick="selectMatchLeft(\${idx})" \${isPaired || answered ? 'disabled' : ''}>
          \${p.left} \${isPaired ? '✓' : ''}
        </button>
      \`;
    });
    interactHtml += '</div>';

    // Prawa kolumna (losowo lub stała kolejność)
    interactHtml += '<div class="match-col">';
    q.pairs.forEach((p, idx) => {
      // sprawdź czy ta prawa opcja jest już połączona
      const isAssigned = Object.values(quizMatchState.pairs).includes(idx);
      interactHtml += \`
        <button class="match-btn \${isAssigned ? 'paired' : ''}" onclick="assignMatchRight(\${idx})" \${isAssigned || answered ? 'disabled' : ''}>
          \${p.right}
        </button>
      \`;
    });
    interactHtml += '</div>';
    interactHtml += '</div>';

    const allPaired = Object.keys(quizMatchState.pairs).length === q.pairs.length;
    if (!answered) {
      interactHtml += \`<div style="margin-top:16px;"><button class="primary" \${!allPaired ? 'disabled' : ''} onclick="submitMatch()">Sprawdź połączenia</button></div>\`;
    }
  }

  // Feedback box if answered
  let feedbackHtml = '';
  if (answered) {
    const isOk = quizAnswersLog[quizQIndex].isCorrect;
    feedbackHtml = \`
      <div class="feedback-box \${isOk ? '' : 'bad'}">
        <h4>\${isOk ? '🎉 Znakomicie, poprawna odpowiedź!' : '💡 Dobra próba! Wyjaśnienie z podręcznika:'}</h4>
        <p>\${q.why}</p>
        <button class="primary" onclick="nextQuestion()">Następne zadanie →</button>
      </div>
    \`;
  }

  root.innerHTML = \`
    <div class="top-bar-quiz">
      <button class="small" onclick="quitQuiz()">✕ Przerwij test</button>
      <div style="font-size:13px; font-weight:700; color:var(--muted);">
        Zadanie \${quizQIndex + 1} z \${quizQuestions.length} • Zestaw \${activeQuizSet}
      </div>
    </div>
    <div class="progress-bar"><div style="width:\${progressPct}%;"></div></div>

    <div class="panel">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span class="status-pill status-active">\${topic.title} • s. \${q.src}</span>
        <span style="font-size:12px; font-weight:700; color:var(--muted);">Kod: \${q.skill}</span>
      </div>
      <div class="q-title">\${q.q}</div>
      <div class="q-instruction">Nie musisz pisać nic na klawiaturze — wybierz, połącz lub ułóż właściwe elementy.</div>

      \${interactHtml}
      \${feedbackHtml}
    </div>
  \`;
}

// Handlers interakcji testu
function pickChoice(idx) {
  quizSelection = idx;
  render();
}
function submitChoice() {
  const q = quizQuestions[quizQIndex];
  const isCorrect = (quizSelection === q.a);
  recordAnswer(isCorrect);
}

function toggleMulti(idx) {
  if (!quizSelection) quizSelection = [];
  if (quizSelection.includes(idx)) {
    quizSelection = quizSelection.filter(i => i !== idx);
  } else {
    quizSelection.push(idx);
  }
  render();
}
function submitMulti() {
  const q = quizQuestions[quizQIndex];
  const sortedUser = (quizSelection || []).slice().sort().join(',');
  const sortedCorrect = q.correctIndices.slice().sort().join(',');
  const isCorrect = (sortedUser === sortedCorrect);
  recordAnswer(isCorrect);
}

function selectSortItem(id) {
  quizBinsState.selectedItem = id;
  render();
}
function assignToBin(bIdx) {
  if (quizBinsState.selectedItem === null) return;
  const item = quizBinsState.items.find(it => it.id === quizBinsState.selectedItem);
  if (item) item.bin = bIdx;
  quizBinsState.selectedItem = null;
  render();
}
function unassignItem(id) {
  const item = quizBinsState.items.find(it => it.id === id);
  if (item) item.bin = null;
  render();
}
function submitBinSort() {
  const q = quizQuestions[quizQIndex];
  let correctCount = 0;
  q.items.forEach((it, idx) => {
    const userItem = quizBinsState.items.find(u => u.id === idx);
    if (userItem && userItem.bin === it.bin) correctCount++;
  });
  const isCorrect = (correctCount === q.items.length);
  recordAnswer(isCorrect);
}

function pickHotspot(idx) {
  quizSelection = idx;
  render();
}
function submitHotspot() {
  const q = quizQuestions[quizQIndex];
  const hs = q.hotspots[quizSelection];
  const isCorrect = hs && hs.correct === true;
  recordAnswer(isCorrect);
}

function moveOrder(idx, dir) {
  const target = idx + dir;
  if (target < 0 || target >= quizOrderState.length) return;
  const temp = quizOrderState[idx];
  quizOrderState[idx] = quizOrderState[target];
  quizOrderState[target] = temp;
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

function selectMatchLeft(idx) {
  quizMatchState.selectedLeft = idx;
  render();
}
function assignMatchRight(idx) {
  if (quizMatchState.selectedLeft === null) return;
  quizMatchState.pairs[quizMatchState.selectedLeft] = idx;
  quizMatchState.selectedLeft = null;
  render();
}
function submitMatch() {
  const q = quizQuestions[quizQIndex];
  let isCorrect = true;
  q.pairs.forEach((_, idx) => {
    // poprawna para to left[idx] == right[idx]
    if (quizMatchState.pairs[idx] !== idx) isCorrect = false;
  });
  recordAnswer(isCorrect);
}

function recordAnswer(isCorrect) {
  const q = quizQuestions[quizQIndex];
  if (isCorrect) {
    quizScore++;
    quizTopicScores[q.topic]++;
  }
  quizAnswersLog[quizQIndex] = { isCorrect };
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
  const total = quizQuestions.length;
  const pct = Math.round((quizScore / total) * 100);

  if (!state.usedSets.includes(activeQuizSet)) {
    state.usedSets.push(activeQuizSet);
  }
  state.history.push({
    date: new Date().toLocaleDateString('pl-PL'),
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
  const total = quizQuestions.length;
  const pct = Math.round((quizScore / total) * 100);

  // Znajdź 1 lub 2 najsłabsze tematy (gdzie zdobyto najmniej punktów)
  let weakestIdxs = [];
  let minScore = 3;
  quizTopicScores.forEach((s, idx) => {
    if (s < 3) weakestIdxs.push(idx);
  });
  if (weakestIdxs.length === 0) weakestIdxs = []; // bezbłędny test!

  let badgeTitle = 'Odkrywca Przyrody';
  if (pct === 100) badgeTitle = 'Mistrz Okolicy (Bezbłędny wynik!) 🏆';
  else if (pct >= 85) badgeTitle = 'Znakomity Badacz Przyrody ⭐';
  else if (pct >= 65) badgeTitle = 'Dobry Przyrodnik 🌿';
  else badgeTitle = 'Młody Odkrywca (warto powtórzyć) 📖';

  let topicsHtml = '';
  TOPICS.forEach((t, idx) => {
    const sc = quizTopicScores[idx];
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
        <h4>🎯 Rekomendacja przed sprawdzianem w szkole:</h4>
        <p>Warto zajrzeć do trybu Nauka i powtórzyć następujące tematy:</p>
        <div style="display:flex; flex-direction:column; gap:8px;">
          \${weakestIdxs.map(idx => \`
            <button class="small" onclick="openLearnTopic(\${idx})">
              📖 Przejdź do: \${TOPICS[idx].title} (s. \${TOPICS[idx].pages}) →
            </button>
          \`).join('')}
        </div>
      </div>
    \`;
  } else {
    recHtml = \`
      <div style="background:var(--green-soft); border:1px solid #c8e6c9; border-radius:14px; padding:16px; margin-top:18px;">
        <h4 style="margin:0 0 4px; color:var(--green);">🌟 Bezbłędny test we wszystkich tematach!</h4>
        <p style="margin:0; font-size:13px;">Świetnie opanowałeś materiał z Działu II. Możesz rozwiązać kolejny zestaw z nowymi zadaniami lub odpocząć!</p>
      </div>
    \`;
  }

  root.innerHTML = \`
    <div class="panel" style="text-align:center;">
      <span class="status-pill status-active">Zestaw \${activeQuizSet} z 7 ukończony</span>
      <h2 style="font-size:26px; margin:10px 0 4px;">\${badgeTitle}</h2>
      <p style="color:var(--muted); font-size:14px; margin:0;">Twój wynik z 18 zadań sprawdzianowych:</p>

      <div class="results-score-ring" style="--pct:\${pct};">
        <div class="results-score-inner">
          <div class="score-num">\${quizScore}</div>
          <div class="score-max">z \${total} pkt (\${pct}%)</div>
        </div>
      </div>

      <div style="text-align:left; margin:24px 0 16px;">
        <h3 style="font-size:16px; margin-bottom:12px;">Szczegółowe wyniki w 6 tematach działu:</h3>
        \${topicsHtml}
      </div>

      \${recHtml}

      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-top:24px; padding-top:18px; border-top:1px solid var(--line);">
        <button class="primary" onclick="startQuizAuto()">🚀 Rozwiąż kolejny test (inny zestaw pytań)</button>
        <button onclick="openLearnList()">📖 Przejdź do Nauki</button>
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
