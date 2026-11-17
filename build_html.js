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

/* NAWIGACJA PO KROKACH NAUKI */
.status-in-progress { background: #fff8e1; color: #b78103; }
.step-mini-btn {
  width: 28px;
  height: 28px;
  min-height: 28px;
  padding: 0;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  background: #ffffff;
  border: 1px solid var(--line);
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;
}
.step-mini-btn:hover {
  border-color: var(--brand);
  color: var(--brand);
}
.step-mini-btn.done {
  background: var(--green-soft);
  border-color: #a5d6a7;
  color: var(--green);
}
.step-nav-pill {
  padding: 4px 10px;
  min-height: 32px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  background: #ffffff;
  border: 1px solid var(--line);
  color: var(--ink);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.step-nav-pill.active {
  background: var(--brand);
  color: #ffffff;
  border-color: var(--brand);
}
.step-nav-pill.done {
  border-color: var(--green);
}

/* MODALE DLA PROFILU I RANKINGU */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(18, 48, 38, 0.75);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 1000;
  backdrop-filter: blur(4px);
}
.modal-overlay.open {
  display: flex;
}
.modal-card {
  background: #ffffff;
  border-radius: 20px;
  max-width: 440px;
  width: 100%;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  animation: popIn 0.2s ease-out;
}
.avatar-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
  margin: 12px 0 18px;
}
.avatar-btn {
  width: 38px;
  height: 38px;
  font-size: 20px;
  border-radius: 10px;
  background: #f4f7f2;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;
  padding: 0;
}
.avatar-btn:hover {
  background: #e8f5e9;
  border-color: #a5d6a7;
}
.avatar-btn.selected {
  border-color: var(--brand);
  background: var(--lime);
  transform: scale(1.1);
}

.pair-tag {
  font-size: 11px;
  font-weight: 800;
  background: var(--lime);
  color: var(--brand);
  padding: 2px 8px;
  border-radius: 8px;
  margin-left: 6px;
  white-space: nowrap;
}

/* KARTY ZE ZDJĘCIAMI W TRYBIE NAUKA */
.learn-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
}
.card-img-wrap {
  position: relative;
  width: 100%;
  height: 150px;
  background: #eef2eb;
  overflow: hidden;
  cursor: pointer;
}
.card-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease;
}
.card-img-wrap:hover .card-thumb {
  transform: scale(1.05);
}
.zoom-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(23, 61, 52, 0.82);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 10px;
  backdrop-filter: blur(4px);
  pointer-events: none;
}

/* GŁÓWNE ZDJĘCIE W TEMACIE */
.learn-hero-img-wrap {
  margin: 14px 0 18px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
  cursor: pointer;
  text-align: center;
}
.learn-hero-img {
  max-width: 100%;
  max-height: 320px;
  display: block;
  margin: 0 auto;
  object-fit: contain;
}
.learn-img-caption {
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 700;
  color: var(--brand);
  background: #f7faf5;
  border-top: 1px solid var(--line);
}

/* ZDJĘCIE W PYTANIU QUIZOWYM */
.quiz-img-container {
  margin: 10px auto 14px;
  max-width: 440px;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  cursor: pointer;
  text-align: center;
}
.quiz-question-img {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  display: block;
}
.quiz-img-hint {
  font-size: 12px;
  font-weight: 700;
  color: var(--brand);
  background: #f2f7ef;
  padding: 6px;
  border-top: 1px solid var(--line);
}

/* LIGHTBOX (MODAL DO POWIĘKSZANIA ZDJĘĆ) */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 25, 20, 0.88);
  backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.lightbox-overlay.open {
  opacity: 1;
  pointer-events: auto;
}
.lightbox-content {
  position: relative;
  max-width: 94vw;
  max-height: 90vh;
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 40px rgba(0,0,0,0.35);
  animation: popIn 0.2s ease-out;
}
@keyframes popIn {
  from { transform: scale(0.92); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.lightbox-img {
  max-width: 100%;
  max-height: calc(85vh - 65px);
  object-fit: contain;
  display: block;
  background: #111;
}
.lightbox-caption {
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 700;
  color: var(--brand);
  background: #fff;
  text-align: center;
}
.lightbox-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  min-height: 36px;
  padding: 0;
  border-radius: 50%;
  background: rgba(0,0,0,0.6);
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  z-index: 2;
}
.lightbox-close:hover {
  background: rgba(0,0,0,0.85);
}

/* POWIADOMIENIE TOAST */
.app-toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(50px);
  background: var(--brand);
  color: #fff;
  padding: 12px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s ease;
  z-index: 10000;
  white-space: nowrap;
}
.app-toast.visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* CANVAS DLA KONFETTI */
#confettiCanvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
}

/* RESPONSYWNOŚĆ MOBILNA */
@media (max-width: 600px) {
  .hero-card { padding: 20px 16px; border-radius: 18px; }
  .panel { padding: 18px 14px; border-radius: 16px; }
  .card-img-wrap { height: 135px; }
  .bins-container { grid-template-columns: 1fr; }
  .options-grid { gap: 8px; }
  .opt-btn { padding: 14px; font-size: 14px; }
}
</style>
</head>
<body>

<canvas id="confettiCanvas"></canvas>

<div id="lightboxModal" class="lightbox-overlay" onclick="closeLightbox(event)">
  <div class="lightbox-content" onclick="event.stopPropagation()">
    <button class="lightbox-close" onclick="closeLightbox()" aria-label="Zamknij">✕</button>
    <img id="lightboxImg" src="" alt="Zdjęcie z podręcznika" class="lightbox-img">
    <div id="lightboxCaption" class="lightbox-caption"></div>
  </div>
</div>

<div id="appToast" class="app-toast"></div>

<!-- MODAL PROFILU UCZNIA -->
<div id="profileModal" class="modal-overlay" onclick="closeProfileModal(event)">
  <div class="modal-card" onclick="event.stopPropagation()">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
      <h3 style="margin:0; font-size:19px; color:var(--brand);">👤 Twój profil Odkrywcy</h3>
      <button class="small outline" style="padding:4px 10px;" onclick="closeProfileModal()">✕</button>
    </div>
    <p style="font-size:13px; color:var(--muted); margin:0 0 14px;">Wybierz imię lub ksywkę oraz zwierzątko, które będzie reprezentować Cię w rankingu klasy!</p>
    
    <label style="font-size:13px; font-weight:700; color:var(--brand); display:block; margin-bottom:6px;">Twoje imię lub pseudonim:</label>
    <input type="text" id="profileNameInput" maxlength="20" placeholder="np. Tomek, Zosia, MłodyWilk" style="width:100%; padding:10px 14px; border:2px solid var(--line); border-radius:12px; font-size:15px; font-weight:600; outline:none; margin-bottom:16px;">

    <label style="font-size:13px; font-weight:700; color:var(--brand); display:block; margin-bottom:6px;">Wybierz swój awatar:</label>
    <div id="avatarPickerGrid" class="avatar-grid"></div>

    <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:10px;">
      <button class="primary" style="width:100%;" onclick="saveProfileFromModal()">✓ Zapisz profil</button>
    </div>
  </div>
</div>

<!-- MODAL USTAWIEŃ BAZY RANKINGU ONLINE -->
<div id="rankingSettingsModal" class="modal-overlay" onclick="closeRankingSettings(event)">
  <div class="modal-card" onclick="event.stopPropagation()">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
      <h3 style="margin:0; font-size:18px; color:var(--brand);">⚙️ Połączenie z bazą klasy</h3>
      <button class="small outline" style="padding:4px 10px;" onclick="closeRankingSettings()">✕</button>
    </div>
    <p style="font-size:13px; color:var(--ink); line-height:1.45; margin-bottom:12px;">
      Wklej poniżej adres URL darmowego skryptu <strong>Google Apps Script (Web App)</strong> powiązanego z Arkuszem Google Twojej klasy.
    </p>
    <div style="background:#f4f7f2; border:1px solid var(--line); padding:10px 14px; border-radius:10px; font-size:12px; color:var(--muted); margin-bottom:14px;">
      💡 Jeśli pole jest puste, ranking działa <strong>lokalnie na tym urządzeniu</strong> (dla Ciebie, rodzeństwa i rodziców).
    </div>

    <label style="font-size:13px; font-weight:700; color:var(--brand); display:block; margin-bottom:6px;">Adres Web App Google Sheets:</label>
    <input type="url" id="rankingEndpointInput" placeholder="https://script.google.com/macros/s/.../exec" style="width:100%; padding:10px 12px; border:1px solid var(--line); border-radius:10px; font-size:13px; margin-bottom:16px;">

    <div style="display:flex; gap:8px; justify-content:flex-end;">
      <button class="small outline" onclick="clearRankingEndpoint()">Odłącz arkusz</button>
      <button class="primary small" onclick="saveRankingEndpoint()">Zapisz i połącz</button>
    </div>

    <div style="margin-top:14px; padding-top:12px; border-top:1px solid var(--line); display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:12px; color:var(--muted);">Pamięć tego telefonu:</span>
      <button class="small outline" style="color:var(--red); border-color:#ffcdd2; font-size:12px;" onclick="clearLocalRankingCache()">🗑️ Wyczyść lokalną listę</button>
    </div>
  </div>
</div>


<header class="app-bar">
  <div class="brand-title" onclick="currentView='hub'; render();">
    <div class="brand-icon">🌱</div>
    <span>Odkrywam Przyrodę 4</span>
  </div>
  <div style="display:flex; gap:8px; align-items:center;">
    <button class="small outline" style="color:#fff; border-color:rgba(255,255,255,0.45); font-size:12px; padding:4px 10px; min-height:30px; border-radius:14px; background:rgba(255,255,255,0.14);" onclick="openLeaderboardView()">🏆 Ranking</button>
    <div id="topPlayerPill" class="nav-pill" onclick="openProfileModal()">🦉 Odkrywca</div>
  </div>
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

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return {
        currentModuleId: p.currentModuleId || 'd2',
        usedSets: {
          d1: (p.usedSets && Array.isArray(p.usedSets.d1)) ? p.usedSets.d1 : [],
          d2: Array.isArray(p.usedSets) ? p.usedSets : ((p.usedSets && p.usedSets.d2) ? p.usedSets.d2 : [])
        },
        testsCount: p.testsCount || 0,
        history: p.history || [],
        completedLearnSteps: p.completedLearnSteps || {}
      };
    }
  } catch(e) {}
  return {
    currentModuleId: 'd2',
    usedSets: { d1: [], d2: [] },
    testsCount: 0,
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
let currentView = 'hub'; // 'hub' | 'learn_list' | 'learn_step' | 'learn_topic_done' | 'quiz' | 'results' | 'ranking'
let currentTopicIdx = 0;
let currentStepIdx = 0;
let activeQuizSet = 1;
let quizQuestions = [];
let lastQuizQuestions = [];
let quizQIndex = 0;
let quizScore = 0;
let quizTopicScores = [];
let quizAnswersLog = [];
let lastScoreSubmitted = false;

// PROFILE I RANKING KLASY
const AVATARS = ['🦉', '🦊', '🐺', '🦅', '🐻', '🐬', '🦁', '🦔', '🐝', '🐿️', '🐯', '🐼', '🦖', '🚀', '⭐', '🍀'];

function loadPlayerProfile() {
  try {
    const raw = localStorage.getItem('odkrywam_player_profile');
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { name: 'Młody Odkrywca', avatar: '🦉' };
}

let playerProfile = loadPlayerProfile();
let selectedModalAvatar = playerProfile.avatar || '🦉';
const DEFAULT_RANKING_URL = 'https://script.google.com/macros/s/AKfycbyp7jZljx84q3QJ2oBtv3IykYGqbsJrckiY1FqyIhFahvgSdjtJ7KidQ3LfFSyI_KsQbA/exec';
let rankingEndpoint = localStorage.getItem('odkrywam_ranking_url') || DEFAULT_RANKING_URL;
let rankingFilter = 'all';
let rankingLoading = false;
let leaderboardList = [];

function savePlayerProfile(prof) {
  try {
    playerProfile = prof;
    localStorage.setItem('odkrywam_player_profile', JSON.stringify(prof));
    updateTopPlayerPill();
  } catch(e) {}
}

function updateTopPlayerPill() {
  const el = document.getElementById('topPlayerPill');
  if (el) {
    el.textContent = (playerProfile.avatar || '🦉') + ' ' + (playerProfile.name || 'Odkrywca');
  }
}

function openProfileModal() {
  const modal = document.getElementById('profileModal');
  const input = document.getElementById('profileNameInput');
  const grid = document.getElementById('avatarPickerGrid');
  if (!modal || !input || !grid) return;

  input.value = playerProfile.name || '';
  selectedModalAvatar = playerProfile.avatar || '🦉';

  grid.innerHTML = AVATARS.map(av => \`
    <button type="button" class="avatar-btn \${av === selectedModalAvatar ? 'selected' : ''}" onclick="selectAvatar('\${av}')">
      \${av}
    </button>
  \`).join('');

  modal.classList.add('open');
  input.focus();
}

function closeProfileModal(e) {
  const modal = document.getElementById('profileModal');
  if (modal) modal.classList.remove('open');
}

function selectAvatar(av) {
  selectedModalAvatar = av;
  const grid = document.getElementById('avatarPickerGrid');
  if (!grid) return;
  const btns = grid.querySelectorAll('.avatar-btn');
  btns.forEach(b => {
    if (b.textContent.trim() === av) b.classList.add('selected');
    else b.classList.remove('selected');
  });
}

function saveProfileFromModal() {
  const input = document.getElementById('profileNameInput');
  const name = (input ? input.value : '').trim() || 'Odkrywca';
  savePlayerProfile({ name: name, avatar: selectedModalAvatar });
  closeProfileModal();
  showToast('👤 Profil zaktualizowany: ' + selectedModalAvatar + ' ' + name);
  render();
}

function openRankingSettings() {
  const modal = document.getElementById('rankingSettingsModal');
  const input = document.getElementById('rankingEndpointInput');
  if (!modal || !input) return;
  input.value = rankingEndpoint || '';
  modal.classList.add('open');
}

function closeRankingSettings(e) {
  const modal = document.getElementById('rankingSettingsModal');
  if (modal) modal.classList.remove('open');
}

function saveRankingEndpoint() {
  const input = document.getElementById('rankingEndpointInput');
  rankingEndpoint = (input ? input.value : '').trim();
  try {
    localStorage.setItem('odkrywam_ranking_url', rankingEndpoint);
  } catch(e) {}
  closeRankingSettings();
  showToast(rankingEndpoint ? '⚙️ Połączono z bazą klasy!' : 'Przełączono na lokalną bazę.');
  refreshRanking();
}

function clearRankingEndpoint() {
  rankingEndpoint = '';
  try {
    localStorage.removeItem('odkrywam_ranking_url');
  } catch(e) {}
  closeRankingSettings();
  showToast('Używasz lokalnej bazy na tym urządzeniu.');
  refreshRanking();
}

function clearLocalRankingCache() {
  try {
    localStorage.removeItem('odkrywam_local_leaderboard');
  } catch(e) {}
  leaderboardList = [];
  closeRankingSettings();
  showToast('🗑️ Lokalna pamięć wyników wyczyszczona!');
  refreshRanking();
}

function loadLocalLeaderboard() {
  try {
    const raw = localStorage.getItem('odkrywam_local_leaderboard');
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return [];
}

function saveToLocalLeaderboard(entry) {
  const list = loadLocalLeaderboard();
  list.push(entry);
  list.sort((a, b) => (b.score - a.score) || ((b.pct || 0) - (a.pct || 0)));
  try {
    localStorage.setItem('odkrywam_local_leaderboard', JSON.stringify(list.slice(0, 50)));
  } catch(e) {}
}

async function fetchLeaderboard() {
  if (!rankingEndpoint) {
    return loadLocalLeaderboard();
  }
  try {
    const res = await fetch(rankingEndpoint + '?action=get');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    return Array.isArray(data) ? data : loadLocalLeaderboard();
  } catch(e) {
    console.warn('Leaderboard online fetch failed, using local fallback:', e);
    return loadLocalLeaderboard();
  }
}

async function submitScoreToLeaderboard(entry) {
  saveToLocalLeaderboard(entry);
  if (!rankingEndpoint) {
    return { success: true, localOnly: true };
  }
  try {
    const params = new URLSearchParams({
      action: 'add',
      name: entry.name,
      avatar: entry.avatar,
      module: entry.module,
      score: entry.score,
      total: entry.total,
      pct: entry.pct,
      date: entry.date
    });
    try {
      await fetch(rankingEndpoint + '?' + params.toString());
    } catch(err) {
      await fetch(rankingEndpoint + '?' + params.toString(), { mode: 'no-cors' });
    }
    return { success: true, localOnly: false };
  } catch(e) {
    console.warn('Online score submission failed:', e);
    return { success: false, error: e.message };
  }
}

function openLeaderboardView() {
  currentView = 'ranking';
  refreshRanking();
}

async function refreshRanking() {
  rankingLoading = true;
  render();
  leaderboardList = await fetchLeaderboard();
  rankingLoading = false;
  render();
}

function setRankingFilter(filt) {
  rankingFilter = filt;
  render();
}

async function submitCurrentScore() {
  const mod = MODULES[currentModuleId];
  const entry = {
    name: playerProfile.name || 'Odkrywca',
    avatar: playerProfile.avatar || '🦉',
    module: mod.title,
    moduleId: currentModuleId,
    score: quizScore,
    total: quizQuestions.length,
    pct: Math.round((quizScore / quizQuestions.length) * 100),
    date: new Date().toLocaleDateString('pl-PL')
  };

  await submitScoreToLeaderboard(entry);
  lastScoreSubmitted = true;
  showToast('🎉 Brawo, ' + entry.name + '! Twój wynik został zapisany w rankingu!');
  fireConfetti();
  render();
}


// Stan interakcji pytania
let quizSelection = null;
let quizBinsState = {};
let quizOrderState = [];
let quizMatchState = { selectedLeft: null, pairs: {}, rightItems: [] };
let activeDiscoveryIdx = null;

function render() {
  const root = document.getElementById('appMain');
  if (currentView === 'hub') renderHub(root);
  else if (currentView === 'learn_list') renderLearnList(root);
  else if (currentView === 'learn_step') renderLearnStep(root);
  else if (currentView === 'learn_topic_done') renderLearnTopicDone(root);
  else if (currentView === 'quiz') renderQuiz(root);
  else if (currentView === 'results') renderResults(root);
  else if (currentView === 'ranking') renderRanking(root);
}

// ----------------------------------------------------
// 1. EKRAN GŁÓWNY (HUB)
// ----------------------------------------------------
function renderHub(root) {
  const d1Completed = (state.usedSets.d1 || []).length;
  const d2Completed = (state.usedSets.d2 || []).length;
  const testsCount = state.testsCount || (d1Completed + d2Completed);

  root.innerHTML = \`
    <div class="hero-card">
      <div style="font-size: 12px; font-weight:800; letter-spacing:1.5px; opacity:0.8; text-transform:uppercase;">Nowa Era • Klasa 4</div>
      <h1>Cześć, Odkrywco! 🌿</h1>
      <p>Przed Tobą interaktywny podręcznik przyrody dla klasy 4 („Odkrywam przyrodę”, Nowa Era). Wybierz dział, poznawaj wiedzę krok po kroku w trybie <strong>Nauka</strong> ze zdjęciami z podręcznika, a potem sprawdź się w <strong>losowych testach powtórkowych</strong>!</p>
      <div class="hero-meta">
        <span class="meta-chip">📚 Dział I: 75 pytań (5 tematów)</span>
        <span class="meta-chip">📚 Dział II: 126 pytań (6 tematów)</span>
        <span class="meta-chip">🏆 Rozwiązane testy: \${testsCount}</span>
        <span class="meta-chip">🎲 Zawsze losowe zestawy</span>
      </div>
      <div style="margin-top:16px; display:flex; gap:10px; flex-wrap:wrap;">
        <button class="small" style="color:var(--brand); background:var(--lime); border:none; font-weight:800; padding:8px 14px;" onclick="openLeaderboardView()">🏆 Tabela Rekordów Klasy</button>
        <button class="small outline" style="color:#fff; border-color:rgba(255,255,255,0.45); background:rgba(255,255,255,0.12);" onclick="shareApp()">📲 Udostępnij test rodzicom / Kopiuj link</button>
      </div>
    </div>

    <h2 style="font-size: 20px; margin: 24px 0 14px;">Działy podręcznika</h2>
    <div class="modules-grid">
      <!-- DZIAŁ II: MOJA OKOLICA (GŁÓWNY MODUŁ NAJBLIŻSZEGO SPRAWDZIANU) -->
      <div class="module-card featured" style="border: 2px solid var(--brand); box-shadow: 0 12px 32px rgba(23,61,52,0.12);">
        <div class="module-head">
          <div>
            <div class="module-num" style="color:var(--green); font-weight:800; font-size:13px;">🌟 NAJBLIŻSZY SPRAWDZIAN • \${MODULES.d2.numStr} • s. \${MODULES.d2.pages}</div>
            <h3 class="module-title" style="font-size: 24px; color:var(--brand); margin-top:4px;">\${MODULES.d2.title}</h3>
            <p class="module-desc">\${MODULES.d2.desc}</p>
          </div>
          <span class="status-pill status-active" style="background:var(--lime); color:var(--brand); font-weight:800;">★ Główny sprawdzian</span>
        </div>
        <div style="background:#eaf5eb; padding:12px 16px; border-radius:12px; font-size:13px; font-weight:600; color:var(--brand);">
          🎯 W bazie czeka 126 zadań z Działu II. Każdy losowy test to unikalny mix 18 pytań (dokładnie po 3 z każdego z 6 tematów: krajobraz, ukształtowanie, skały, gleba, rośliny i zwierzęta) ze zdjęciami z podręcznika!
        </div>
        <div class="module-actions">
          <button class="accent" style="font-size:16px; padding:14px 20px; font-weight:800;" onclick="startRandomQuiz('d2')">🎲 Losowy test — Dział II (18 pytań)</button>
          <button class="primary" onclick="openLearnList('d2')">📖 Nauka krok po kroku</button>
        </div>
        <div style="margin-top:12px; text-align:center;">
          <a href="javascript:void(0)" onclick="toggleFixedSets('d2')" style="font-size:12px; font-weight:700; color:var(--brand); text-decoration:underline;">Lub wybierz stały zestaw 1–7 ▾</a>
          <div id="fixedSets_d2" style="display:none; gap:6px; flex-wrap:wrap; justify-content:center; margin-top:10px;">
            \${[1, 2, 3, 4, 5, 6, 7].map(s => {
              const done = (state.usedSets.d2 || []).includes(s);
              return \`<button class="small \${done ? 'outline' : ''}" style="font-size:12px; padding:4px 10px;" onclick="startQuizSet('d2', \${s})">Zestaw \${s} \${done ? '✓' : ''}</button>\`;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- DZIAŁ I: SPOTKANIE Z PRZYRODĄ (POPRZEDNI SPRAWDZIAN) -->
      <div class="module-card">
        <div class="module-head">
          <div>
            <div class="module-num" style="color:var(--muted);">\${MODULES.d1.numStr} • s. \${MODULES.d1.pages} • Poprzedni materiał</div>
            <h3 class="module-title">\${MODULES.d1.title}</h3>
            <p class="module-desc">\${MODULES.d1.desc}</p>
          </div>
          <span class="status-pill status-lock" style="font-size:11px;">Powtórka</span>
        </div>
        <div style="background:#f4f7f2; padding:12px 16px; border-radius:12px; font-size:13px; font-weight:600; color:var(--muted);">
          🎯 W bazie czeka 75 zadań z Działu I (zmysły, mikroskop, kompas, zasady doświadczeń, higiena snu).
        </div>
        <div class="module-actions">
          <button class="primary" onclick="startRandomQuiz('d1')">🎲 Losowy test — Dział I (15 pytań)</button>
          <button class="outline" onclick="openLearnList('d1')">📖 Nauka krok po kroku</button>
        </div>
        <div style="margin-top:12px; text-align:center;">
          <a href="javascript:void(0)" onclick="toggleFixedSets('d1')" style="font-size:12px; font-weight:700; color:var(--brand); text-decoration:underline;">Lub wybierz stały zestaw 1–5 ▾</a>
          <div id="fixedSets_d1" style="display:none; gap:6px; flex-wrap:wrap; justify-content:center; margin-top:10px;">
            \${[1, 2, 3, 4, 5].map(s => {
              const done = (state.usedSets.d1 || []).includes(s);
              return \`<button class="small \${done ? 'outline' : ''}" style="font-size:12px; padding:4px 10px;" onclick="startQuizSet('d1', \${s})">Zestaw \${s} \${done ? '✓' : ''}</button>\`;
            }).join('')}
          </div>
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
      <button class="small outline" style="color:var(--muted);" onclick="resetAllProgress()">↺ Wyzeruj postępy na tym urządzeniu</button>
    </div>
  \`;
}

function toggleFixedSets(modId) {
  const el = document.getElementById('fixedSets_' + modId);
  if (!el) return;
  el.style.display = (el.style.display === 'none' || !el.style.display) ? 'flex' : 'none';
}

function resetAllProgress() {
  if (confirm('Czy chcesz wyczyścić wszystkie postępy i rozpocząć jako nowy uczeń?')) {
    state = {
      currentModuleId: 'd2',
      usedSets: { d1: [], d2: [] },
      testsCount: 0,
      history: [],
      completedLearnSteps: {}
    };
    saveState();
    showToast('Wszystkie postępy zostały zresetowane. Witaj nowy Odkrywco!');
    currentView = 'hub';
    render();
  }
}

function resetModuleLearnSteps(modId) {
  const mod = MODULES[modId];
  if (confirm('Czy chcesz zresetować postępy w trybie Nauka dla: ' + mod.title + '?')) {
    mod.topics.forEach(t => {
      delete state.completedLearnSteps[t.id];
    });
    saveState();
    showToast('Postępy w nauce dla tego działu zostały wyzerowane.');
    render();
  }
}

function resetTopicSteps(topicId) {
  delete state.completedLearnSteps[topicId];
  saveState();
  showToast('Postęp w tym temacie został wyzerowany.');
  render();
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

    // Znajdź pierwszy nieukończony krok
    let nextStepIdx = 0;
    for (let s = 0; s < totalSteps; s++) {
      if (!(state.completedLearnSteps[t.id] || []).includes(s)) {
        nextStepIdx = s;
        break;
      }
    }

    listHtml += \`
      <div class="module-card">
        <div class="module-head">
          <div style="display:flex; gap:14px; align-items:center;">
            <div style="font-size:32px;">\${t.icon}</div>
            <div>
              <div class="module-num" style="color:\${t.color}">Temat \${idx+1} • s. \${t.pages}</div>
              <h3 class="module-title" style="font-size:18px;">\${t.title}</h3>
              <p class="module-desc" style="font-size:13px;">\${t.intro}</p>
            </div>
          </div>
          <span class="status-pill \${isDone ? 'status-active' : (doneSteps > 0 ? 'status-in-progress' : 'status-lock')}">
            \${isDone ? '✓ Ukończony 🏆' : (doneSteps > 0 ? doneSteps + '/' + totalSteps + ' kroków' : 'Do zrobienia')}
          </span>
        </div>

        <!-- Mini-przyciski nawigacji po krokach -->
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin:12px 0 8px; align-items:center;">
          <span style="font-size:12px; font-weight:700; color:var(--muted); margin-right:4px;">Kroki tematu:</span>
          \${t.steps.map((st, sIdx) => {
            const stepDone = (state.completedLearnSteps[t.id] || []).includes(sIdx);
            return \`<button class="step-mini-btn \${stepDone ? 'done' : ''}" onclick="openLearnTopic(\${idx}, \${sIdx});" title="\${st.title}">
              \${sIdx + 1}\${stepDone ? '✓' : ''}
            </button>\`;
          }).join('')}
        </div>

        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:10px;">
          \${isDone ? \`
            <button class="small primary" onclick="openLearnTopic(\${idx}, 0)">🔄 Ucz się od nowa</button>
            <button class="small outline" onclick="resetTopicSteps('\${t.id}')">Wyczyść postęp</button>
          \` : (doneSteps > 0 ? \`
            <button class="small primary" onclick="openLearnTopic(\${idx}, \${nextStepIdx})">Kontynuuj (krok \${nextStepIdx + 1}) →</button>
            <button class="small outline" onclick="openLearnTopic(\${idx}, 0)">🔄 Od początku</button>
          \` : \`
            <button class="small primary" onclick="openLearnTopic(\${idx}, 0)">Rozpocznij naukę →</button>
          \`)}
        </div>
      </div>
    \`;
  });

  root.innerHTML = \`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px;">
      <button class="small" onclick="currentView='hub'; render();">← Wróć do ekranu głównego</button>
      <button class="small outline" style="color:var(--muted);" onclick="resetModuleLearnSteps('\${currentModuleId}')">🔄 Zresetuj postępy w tym dziale</button>
    </div>
    <div class="panel">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
        <h2 style="margin:0; font-size:22px;">📖 Wybierz temat do nauki — \${mod.title} (\${mod.pages})</h2>
      </div>
      <p style="color:var(--muted); font-size:14px; margin-bottom:20px;">
        W każdym temacie znajdziesz proste wyjaśnienia, interaktywne schematy oraz zdjęcia wycięte z podręcznika. Możesz w każdej chwili powtórzyć dowolny krok!
      </p>
      <div style="display:flex; flex-direction:column; gap:12px;">
        \${listHtml}
      </div>
    </div>
  \`;
}

function openLearnTopic(idx, stepIdx = 0) {
  currentTopicIdx = idx;
  currentStepIdx = stepIdx;
  activeDiscoveryIdx = null;
  currentView = 'learn_step';
  render();
}

function goToStep(sIdx) {
  currentStepIdx = sIdx;
  activeDiscoveryIdx = null;
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

  if (step.img) {
    bodyHtml += \`
      <div class="learn-hero-img-wrap" onclick="openLightbox(this.querySelector('img').src, this.querySelector('img').alt)">
        <img src="\${step.img}" alt="\${step.imgCaption || step.title}" loading="lazy" class="learn-hero-img">
        <div class="learn-img-caption">🔍 Stuknij zdjęcie, aby powiększyć • \${step.imgCaption || step.title}</div>
      </div>
    \`;
  }

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
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin:14px 0;">';
    step.insects.forEach(ins => {
      bodyHtml += \`
        <div class="learn-card insect-card">
          \${ins.img ? \`
            <div class="card-img-wrap" onclick="openLightbox(this.querySelector('img').src, this.querySelector('img').alt)">
              <img src="\${ins.img}" alt="\${ins.name}" loading="lazy" class="card-thumb">
              <span class="zoom-badge">🔍 Powiększ</span>
            </div>
          \` : ''}
          <div style="padding:14px;">
            <strong style="color:var(--brand); font-size:16px; display:block; margin-bottom:4px;">🦗 \${ins.name}</strong>
            <div style="font-size:13px; line-height:1.45;">\${ins.desc}</div>
          </div>
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
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin:14px 0;">';
    step.rockCards.forEach(rc => {
      bodyHtml += \`
        <div class="learn-card rock-card">
          \${rc.img ? \`
            <div class="card-img-wrap" onclick="openLightbox(this.querySelector('img').src, this.querySelector('img').alt)">
              <img src="\${rc.img}" alt="\${rc.name} (\${rc.type})" loading="lazy" class="card-thumb">
              <span class="zoom-badge">🔍 Powiększ</span>
            </div>
          \` : ''}
          <div style="padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong style="font-size:16px; color:var(--brand);">\${rc.name}</strong>
              <span class="status-pill status-active" style="font-size:11px;">\${rc.type}</span>
            </div>
            <div style="font-size:12px; color:var(--muted); margin:4px 0;">Barwa: \${rc.color}</div>
            <div style="font-size:13px; margin:6px 0; line-height:1.4;">\${rc.feat}</div>
            <div style="font-size:12px; background:#f4f7f2; padding:6px 8px; border-radius:6px; margin-top:6px;"><strong>Zastosowanie:</strong> \${rc.use}</div>
          </div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.plants) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin:14px 0;">';
    step.plants.forEach(p => {
      bodyHtml += \`
        <div class="learn-card plant-card">
          \${p.img ? \`
            <div class="card-img-wrap" onclick="openLightbox(this.querySelector('img').src, this.querySelector('img').alt)">
              <img src="\${p.img}" alt="\${p.name}" loading="lazy" class="card-thumb">
              <span class="zoom-badge">🔍 Powiększ</span>
            </div>
          \` : ''}
          <div style="padding:14px;">
            <strong style="font-size:16px; color:var(--brand); display:block; margin-bottom:4px;">🌿 \${p.name}</strong>
            \${p.leaf ? '<div style="font-size:13px; margin-bottom:4px;"><strong>Liść:</strong> ' + p.leaf + '</div>' : ''}
            \${p.bark ? '<div style="font-size:13px; margin-bottom:4px;"><strong>Kora:</strong> ' + p.bark + '</div>' : ''}
            \${p.fruit ? '<div style="font-size:13px; margin-bottom:4px;"><strong>Owoce:</strong> ' + p.fruit + '</div>' : ''}
            \${p.flower ? '<div style="font-size:13px; margin-bottom:4px;"><strong>Kwiaty:</strong> ' + p.flower + '</div>' : ''}
            \${p.desc ? '<div style="font-size:12px; color:var(--muted);">' + p.desc + '</div>' : ''}
          </div>
        </div>
      \`;
    });
    bodyHtml += '</div>';
  }
  if (step.birds) {
    bodyHtml += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin:14px 0;">';
    step.birds.forEach(b => {
      bodyHtml += \`
        <div class="learn-card bird-card">
          \${b.img ? \`
            <div class="card-img-wrap" onclick="openLightbox(this.querySelector('img').src, this.querySelector('img').alt)">
              <img src="\${b.img}" alt="\${b.name}" loading="lazy" class="card-thumb">
              <span class="zoom-badge">🔍 Powiększ</span>
            </div>
          \` : ''}
          <div style="padding:14px;">
            <strong style="font-size:16px; color:var(--brand); display:block; margin-bottom:4px;">🪶 \${b.name}</strong>
            <div style="font-size:13px; line-height:1.45;">\${b.look}</div>
          </div>
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

  // Pasek nawigacyjny kroków na górze karty
  let stepPillsHtml = '<div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px; align-items:center;">';
  topic.steps.forEach((st, sIdx) => {
    const isCur = (sIdx === currentStepIdx);
    const isDone = (state.completedLearnSteps[topic.id] || []).includes(sIdx);
    stepPillsHtml += \`<button class="step-nav-pill \${isCur ? 'active' : ''} \${isDone ? 'done' : ''}" onclick="goToStep(\${sIdx})">
      Krok \${sIdx + 1}\${isDone && !isCur ? ' ✓' : ''}
    </button>\`;
  });
  stepPillsHtml += '</div>';

  root.innerHTML = \`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
      <button class="small" onclick="currentView='learn_list'; render();">← Spis tematów</button>
      <div style="font-size:13px; font-weight:700; color:var(--muted);">Krok \${currentStepIdx+1} z \${totalSteps}</div>
    </div>

    <div class="panel">
      \${stepPillsHtml}

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
          : \`<button class="accent" onclick="finishTopic()">✓ Zakończ temat 🏆</button>\`
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
  currentView = 'learn_topic_done';
  render();
}
function markStepDone(topicId, stepIdx) {
  if (!state.completedLearnSteps[topicId]) state.completedLearnSteps[topicId] = [];
  if (!state.completedLearnSteps[topicId].includes(stepIdx)) {
    state.completedLearnSteps[topicId].push(stepIdx);
    saveState();
  }
}

// Ekran gratulacji po ukończeniu całego tematu
function renderLearnTopicDone(root) {
  const mod = MODULES[currentModuleId];
  const topic = mod.topics[currentTopicIdx];
  const hasNext = currentTopicIdx < mod.topics.length - 1;
  const nextTopic = hasNext ? mod.topics[currentTopicIdx + 1] : null;

  root.innerHTML = \`
    <div class="panel" style="text-align:center; padding:32px 20px;">
      <div style="font-size:52px; margin-bottom:12px;">🎉</div>
      <span class="status-pill status-active" style="margin-bottom:10px;">Temat ukończony!</span>
      <h2 style="font-size:26px; margin:8px 0 12px; color:var(--brand);">\${topic.icon} \${topic.title}</h2>
      <p style="color:var(--muted); font-size:15px; max-width:540px; margin:0 auto 24px;">
        Wspaniała robota! Przeszedłeś przez wszystkie kroki i zdjęcia z tego tematu (s. \${topic.pages}). Wiedza jest utrwalona!
      </p>

      <div style="display:flex; flex-direction:column; gap:12px; max-width:420px; margin:0 auto;">
        \${hasNext ? \`
          <button class="primary" onclick="openLearnTopic(\${currentTopicIdx + 1}, 0)">
            Przejdź do kolejnego tematu: \${nextTopic.icon} \${nextTopic.title} →
          </button>
        \` : ''}
        <button class="accent" onclick="startRandomQuiz('\${currentModuleId}')">
          🎲 Sprawdź wiedzę w losowym teście
        </button>
        <button class="outline" onclick="openLearnTopic(\${currentTopicIdx}, 0)">
          🔄 Powtórz ten temat od początku (Krok 1)
        </button>
        <button onclick="currentView='learn_list'; render();">
          📖 Wróć do spisu tematów
        </button>
      </div>
    </div>
  \`;
  setTimeout(() => fireConfetti(), 180);
}

// ----------------------------------------------------
// 4. TRYB TESTU (LOSOWY GENERATOR I STAŁE ZESTAWY)
// ----------------------------------------------------
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function cloneAndShuffleQuestion(orig) {
  const q = JSON.parse(JSON.stringify(orig));
  if (q.type === 'choice') {
    const optsWithFlag = orig.opts.map((opt, idx) => ({
      opt: opt,
      isCorrect: idx === orig.a
    }));
    shuffleArray(optsWithFlag);
    q.opts = optsWithFlag.map(x => x.opt);
    q.a = optsWithFlag.findIndex(x => x.isCorrect);
  } else if (q.type === 'multichoice') {
    const optsWithFlag = orig.opts.map((opt, idx) => ({
      opt: opt,
      isCorrect: orig.correctIndices.includes(idx)
    }));
    shuffleArray(optsWithFlag);
    q.opts = optsWithFlag.map(x => x.opt);
    q.correctIndices = optsWithFlag
      .map((x, idx) => x.isCorrect ? idx : -1)
      .filter(idx => idx !== -1);
  }
  return q;
}

// Zawsze świeży, zbalansowany losowy test: dokładnie po 3 pytania z każdego tematu
function startRandomQuiz(modId) {
  if (modId) currentModuleId = modId;
  const mod = MODULES[currentModuleId];

  const questionsByTopic = {};
  for (let t = 0; t < mod.topics.length; t++) {
    questionsByTopic[t] = mod.questions.filter(q => q.topic === t);
  }

  let chosen = [];
  for (let t = 0; t < mod.topics.length; t++) {
    const pool = questionsByTopic[t] || [];
    const shuffledPool = shuffleArray([...pool]);
    chosen = chosen.concat(shuffledPool.slice(0, 3));
  }

  quizQuestions = chosen.map(q => cloneAndShuffleQuestion(q));
  lastQuizQuestions = JSON.parse(JSON.stringify(quizQuestions));

  activeQuizSet = 'Losowy test';
  quizQIndex = 0;
  quizScore = 0;
  quizTopicScores = new Array(mod.topics.length).fill(0);
  quizAnswersLog = [];
  initQuestionState();
  currentView = 'quiz';
  render();
}

function startQuizSet(modId, setNum) {
  if (modId) currentModuleId = modId;
  startQuiz(setNum);
}

function startQuiz(setNum) {
  const mod = MODULES[currentModuleId];
  activeQuizSet = setNum;
  quizQuestions = mod.questions.filter(q => q.set === setNum);
  lastQuizQuestions = JSON.parse(JSON.stringify(quizQuestions));
  quizQIndex = 0;
  quizScore = 0;
  quizTopicScores = new Array(mod.topics.length).fill(0);
  quizAnswersLog = [];
  initQuestionState();
  currentView = 'quiz';
  render();
}

function retrySameQuiz() {
  quizQuestions = JSON.parse(JSON.stringify(lastQuizQuestions));
  quizQIndex = 0;
  quizScore = 0;
  quizTopicScores = new Array(MODULES[currentModuleId].topics.length).fill(0);
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
    quizBinsState = {
      items: shuffleArray(q.items.map((it, idx) => ({ id: idx, text: it.text, bin: null }))),
      selectedItem: null
    };
  } else if (q.type === 'order') {
    let list = q.items.map((it, idx) => ({ id: idx, text: it }));
    if (list.length > 1) {
      for (let att = 0; att < 15; att++) {
        list = shuffleArray([...list]);
        if (!list.every((it, idx) => it.id === q.correctOrder[idx])) break;
      }
    }
    quizOrderState = list;
  } else if (q.type === 'match') {
    let rightItems = q.pairs.map((p, idx) => ({ origIdx: idx, text: p.right }));
    if (rightItems.length > 1) {
      for (let att = 0; att < 15; att++) {
        rightItems = shuffleArray([...rightItems]);
        if (!rightItems.every((it, idx) => it.origIdx === idx)) break;
      }
    }
    quizMatchState = {
      selectedLeft: null,
      pairs: {},
      rightItems: rightItems
    };
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
      interactHtml += \`<div style="margin-top:16px;"><button class="primary" \${(quizSelection||[]).length === 0 ? 'disabled' : ''} onclick="submitMulti()">Sprawdź odpowiedź</button></div>\`;
    }
  }

  // 3. Bin sort
  else if (q.type === 'bin_sort') {
    const unassigned = quizBinsState.items.filter(it => it.bin === null);
    interactHtml += '<div style="font-size:13px; font-weight:700; color:var(--brand); margin-bottom:6px;">Dotknij element, a potem właściwą szufladę:</div>';
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
          \${isTargetActive ? \`<div style="text-align:center; padding:6px; background:var(--lime); color:var(--brand); font-weight:800; font-size:12px; border-radius:8px; margin-bottom:8px; cursor:pointer;">+ Włóż tutaj</div>\` : ''}
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
      interactHtml += \`<div style="margin-top:16px;"><button class="primary" \${unassigned.length > 0 ? 'disabled' : ''} onclick="submitBinSort()">Sprawdź odpowiedź</button></div>\`;
    }
  }

  // 4. Order
  else if (q.type === 'order') {
    interactHtml += '<div class="order-list">';
    quizOrderState.forEach((item, pos) => {
      interactHtml += \`
        <div class="order-row">
          <div style="display:flex; align-items:center; gap:12px; flex:1;">
            <div style="background:var(--brand); color:#fff; width:28px; height:28px; border-radius:50%; display:grid; place-items:center; font-weight:800; font-size:13px; flex-shrink:0;">\${pos+1}</div>
            <div style="font-weight:600; font-size:14px; line-height:1.4;">\${item.text}</div>
          </div>
          \${!answered ? \`
            <div class="order-controls" style="display:flex; gap:6px;">
              <button class="small" style="min-width:38px; min-height:38px; font-size:16px; padding:0;" \${pos === 0 ? 'disabled' : ''} onclick="moveOrderItem(\${pos}, -1)" aria-label="W górę">▲</button>
              <button class="small" style="min-width:38px; min-height:38px; font-size:16px; padding:0;" \${pos === quizOrderState.length - 1 ? 'disabled' : ''} onclick="moveOrderItem(\${pos}, 1)" aria-label="W dół">▼</button>
            </div>
          \` : ''}
        </div>
      \`;
    });
    interactHtml += '</div>';
    if (!answered) {
      interactHtml += \`<div style="margin-top:16px;"><button class="primary" onclick="submitOrder()">Sprawdź odpowiedź</button></div>\`;
    }
  }

  // 5. Match (Pary)
  else if (q.type === 'match') {
    const leftPairedKeys = Object.keys(quizMatchState.pairs).map(Number);
    const rightPairedVals = Object.values(quizMatchState.pairs);

    interactHtml += '<div style="font-size:13px; font-weight:700; color:var(--brand); margin-bottom:8px;">Dotknij element po lewej stronie, a potem pasujący po prawej:</div>';
    interactHtml += '<div class="match-grid">';
    
    // Lewa kolumna
    interactHtml += '<div class="match-col">';
    q.pairs.forEach((p, idx) => {
      const isPaired = leftPairedKeys.includes(idx);
      const isSel = (quizMatchState.selectedLeft === idx);
      let cls = 'match-btn opt-btn';
      if (isPaired) cls += ' paired';
      if (isSel) cls += ' selected';

      let badge = '';
      if (isPaired) {
        const pairNum = leftPairedKeys.indexOf(idx) + 1;
        badge = \`<span class="pair-tag">Para \${pairNum}</span>\`;
      }

      interactHtml += \`
        <button class="\${cls}" \${answered ? 'disabled' : ''} onclick="pickMatchLeft(\${idx})">
          <span style="flex:1;">\${p.left}</span>
          \${badge}
        </button>
      \`;
    });
    interactHtml += '</div>';

    // Prawa kolumna (przetasowana)
    interactHtml += '<div class="match-col">';
    quizMatchState.rightItems.forEach((rItem) => {
      const isPaired = rightPairedVals.includes(rItem.origIdx);
      let cls = 'match-btn opt-btn';
      if (isPaired) cls += ' paired';

      let badge = '';
      if (isPaired) {
        const leftIdx = Object.keys(quizMatchState.pairs).find(k => quizMatchState.pairs[k] === rItem.origIdx);
        if (leftIdx !== undefined) {
          const pairNum = leftPairedKeys.indexOf(Number(leftIdx)) + 1;
          badge = \`<span class="pair-tag">Para \${pairNum}</span>\`;
        }
      }

      interactHtml += \`
        <button class="\${cls}" \${answered ? 'disabled' : ''} onclick="pickMatchRight(\${rItem.origIdx})">
          <span style="flex:1;">\${rItem.text}</span>
          \${badge}
        </button>
      \`;
    });
    interactHtml += '</div>';

    interactHtml += '</div>';

    if (!answered) {
      const allPaired = Object.keys(quizMatchState.pairs).length === q.pairs.length;
      interactHtml += \`
        <div style="display:flex; gap:10px; margin-top:16px; flex-wrap:wrap;">
          <button class="primary" \${!allPaired ? 'disabled' : ''} onclick="submitMatch()">Sprawdź odpowiedź</button>
          \${Object.keys(quizMatchState.pairs).length > 0 ? \`<button class="small outline" onclick="resetPairs()">Wyczyść połączenia</button>\` : ''}
        </div>
      \`;
    }
  }

  // 6. Hotspot
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
      interactHtml += \`<div style="text-align:center;"><button class="primary" \${quizSelection === null ? 'disabled' : ''} onclick="submitHotspot()">Sprawdź odpowiedź</button></div>\`;
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
      <span class="status-pill status-active" style="font-weight:800; font-size:12px;">
        🌟 \${mod.title} (\${mod.numStr}) • Zadanie \${quizQIndex + 1} z \${quizQuestions.length}
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
      \${q.img ? \`
        <div class="quiz-img-container" onclick="openLightbox(this.querySelector('img').src, this.querySelector('img').alt)">
          <img src="\${q.img}" class="quiz-question-img" alt="Zdjęcie do zadania" loading="lazy">
          <div class="quiz-img-hint">🔍 Stuknij zdjęcie, aby powiększyć</div>
        </div>
      \` : ''}
      <div class="q-instruction">
        \${q.type === 'choice' ? 'Wybierz jedną odpowiedź:' : ''}
        \${q.type === 'multichoice' ? 'Wybierz poprawne odpowiedzi:' : ''}
        \${q.type === 'bin_sort' ? 'Dopasuj do odpowiednich grup:' : ''}
        \${q.type === 'order' ? 'Ułóż w kolejności za pomocą strzałek ▲ i ▼:' : ''}
        \${q.type === 'match' ? 'Połącz w pary:' : ''}
        \${q.type === 'hotspot' ? 'Wskaż właściwy punkt na rysunku:' : ''}
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
  if (quizMatchState.pairs[idx] !== undefined) {
    delete quizMatchState.pairs[idx];
  }
  quizMatchState.selectedLeft = idx;
  render();
}
function pickMatchRight(origIdx) {
  if (quizAnswersLog[quizQIndex] !== undefined) return;
  if (quizMatchState.selectedLeft === null) return;
  for (const k in quizMatchState.pairs) {
    if (quizMatchState.pairs[k] === origIdx) {
      delete quizMatchState.pairs[k];
    }
  }
  quizMatchState.pairs[quizMatchState.selectedLeft] = origIdx;
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

  if (typeof activeQuizSet === 'number') {
    if (!state.usedSets[currentModuleId]) state.usedSets[currentModuleId] = [];
    if (!state.usedSets[currentModuleId].includes(activeQuizSet)) {
      state.usedSets[currentModuleId].push(activeQuizSet);
    }
  }
  if (!state.testsCount) state.testsCount = 0;
  state.testsCount++;

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

  lastScoreSubmitted = false;
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
            <button class="small" onclick="openLearnTopic(\${idx}, 0)">
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
        <p style="margin:0; font-size:13px;">Wspaniale opanowałeś materiał z: \${mod.title}. Możesz rozwiązać kolejny losowy test z nowymi pytaniami lub odpocząć!</p>
      </div>
    \`;
  }

  root.innerHTML = \`
    <div class="panel" style="text-align:center;">
      <span class="status-pill status-active">\${mod.title} • \${typeof activeQuizSet === 'number' ? 'Zestaw ' + activeQuizSet + ' z ' + mod.maxSets : activeQuizSet} ukończony</span>
      <h2 style="font-size:26px; margin:10px 0 4px;">\${badgeTitle}</h2>
      <p style="color:var(--muted); font-size:14px; margin:0;">Twój wynik z \${total} zadań sprawdzianowych:</p>

      <div class="results-score-ring" style="--pct:\${pct};">
        <div class="results-score-inner">
          <div class="score-num">\${quizScore}</div>
          <div class="score-max">z \${total} pkt (\${pct}%)</div>
        </div>
      </div>

      <!-- KARTA WYSYŁANIA WYNIKU DO RANKINGU KLASY -->
      <div style="background:#f0f8ef; border:2px solid #a5d6a7; border-radius:18px; padding:18px 16px; margin:22px 0 16px; text-align:center;">
        <div style="font-size:12px; font-weight:800; color:var(--green); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">🏆 Tablica Rekordów Klasy</div>
        <h4 style="font-size:18px; margin:0 0 6px; color:var(--brand);">
          \${lastScoreSubmitted 
            ? '✅ Twój wynik (' + quizScore + '/' + total + ' pkt) jest w rankingu!' 
            : 'Zapisz swój wynik (' + quizScore + '/' + total + ' pkt) na tablicy klasy!'}
        </h4>
        <p style="font-size:13px; color:var(--muted); margin:0 0 12px;">
          Grasz jako: <strong style="color:var(--brand); font-size:15px;">\${playerProfile.avatar} \${playerProfile.name}</strong>
          <button type="button" class="small outline" style="margin-left:8px; font-size:11px; padding:2px 8px; min-height:24px; border-radius:8px;" onclick="openProfileModal()">Zmień nick</button>
        </p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          \${!lastScoreSubmitted ? \`
            <button class="accent" style="padding:10px 18px; font-size:14px; font-weight:800;" onclick="submitCurrentScore()">
              🚀 Wyślij mój wynik do rankingu
            </button>
          \` : ''}
          <button class="primary" style="padding:10px 18px; font-size:14px;" onclick="openLeaderboardView()">
            🏆 Zobacz Tabela Rekordów
          </button>
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
        <button class="primary" onclick="retrySameQuiz()">🔄 Popraw ten sam test (powtórz te \${total} zadań)</button>
        <button class="accent" onclick="startRandomQuiz('\${currentModuleId}')">🎲 Nowy losowy test (inne pytania)</button>
        <button onclick="openLearnList('\${currentModuleId}')">📖 Przejdź do Nauki</button>
        <button class="outline" onclick="shareApp()">📲 Udostępnij test rodzicom</button>
        <button class="outline" onclick="currentView='hub'; render();">🏠 Ekran główny</button>
      </div>
    </div>
  \`;

  if (pct >= 80) {
    setTimeout(() => fireConfetti(), 180);
  }
}

// ==========================================
// FUNKCJE POMOCNICZE (LIGHTBOX, UDOSTĘPNIANIE, KONFETTI)
// ==========================================
function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!modal || !img) return;
  img.src = src;
  if (cap) cap.textContent = caption || '';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

function shareApp() {
  const title = 'Odkrywam Przyrodę 4';
  const text = 'Świetny darmowy quiz i nauka z przyrody dla klasy 4 (Nowa Era). Autentyczne zdjęcia z podręcznika i testy pod telefon!';
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title, text, url }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('📋 Link skopiowany! Możesz wkleić go na grupie rodziców.');
    }).catch(() => {
      showToast('Link do quizu: ' + url);
    });
  } else {
    showToast('Link do quizu: ' + url);
  }
}

function showToast(msg) {
  const t = document.getElementById('appToast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('visible');
  setTimeout(() => t.classList.remove('visible'), 3200);
}

function fireConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#2e7d32', '#cbf26c', '#f59e0b', '#3b82f6', '#ec4899', '#10b981', '#ffb703'];
  for (let i = 0; i < 75; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height * 0.35,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 10
    });
  }

  let frames = 0;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.38;
      p.rotation += p.rSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });
    frames++;
    if (frames < 130) {
      requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(update);
}


// ----------------------------------------------------
// 6. EKRAN RANKINGU KLASY (TABELA REKORDÓW)
// ----------------------------------------------------
function renderRanking(root) {
  const filtered = leaderboardList.filter(it => {
    if (rankingFilter === 'all') return true;
    if (rankingFilter === 'd1') return it.moduleId === 'd1' || (it.module && it.module.includes('Spotkanie'));
    if (rankingFilter === 'd2') return it.moduleId === 'd2' || (it.module && it.module.includes('Moja okolica'));
    return true;
  });

  const isOnline = Boolean(rankingEndpoint);

  root.innerHTML = \`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px;">
      <button class="small" onclick="currentView='hub'; render();">← Wróć do ekranu głównego</button>
      <div style="display:flex; gap:8px;">
        <button class="small outline" onclick="refreshRanking()">🔄 Odśwież</button>
        <button class="small outline" style="color:var(--muted);" onclick="openRankingSettings()">⚙️ Baza klasy</button>
      </div>
    </div>

    <div class="panel">
      <div style="text-align:center; margin-bottom:18px;">
        <div style="font-size:46px; margin-bottom:4px;">🏆</div>
        <h2 style="font-size:24px; margin:0 0 6px; color:var(--brand);">Tabela Rekordów Klasy</h2>
        <p style="color:var(--muted); font-size:13px; margin:0 auto; max-width:480px;">
          Najwyższe wyniki uczniów z testów powtórkowych z przyrody. Kto zdobędzie tytuł Mistrza Przyrody?
        </p>
        <div style="margin-top:8px;">
          <span class="status-pill \${isOnline ? 'status-active' : 'status-lock'}" style="font-size:11px;">
            \${isOnline ? '🌐 Baza połączona (Google Sheets)' : '📱 Baza lokalna na tym urządzeniu'}
          </span>
        </div>
      </div>

      <!-- Filtry działów -->
      <div style="display:flex; gap:6px; justify-content:center; margin-bottom:18px; flex-wrap:wrap;">
        <button class="small \${rankingFilter === 'all' ? 'primary' : 'outline'}" style="font-size:12px; padding:6px 12px;" onclick="setRankingFilter('all')">Wszystkie działy</button>
        <button class="small \${rankingFilter === 'd2' ? 'primary' : 'outline'}" style="font-size:12px; padding:6px 12px;" onclick="setRankingFilter('d2')">Dział II: Moja okolica</button>
        <button class="small \${rankingFilter === 'd1' ? 'primary' : 'outline'}" style="font-size:12px; padding:6px 12px;" onclick="setRankingFilter('d1')">Dział I: Przyroda</button>
      </div>

      \${rankingLoading ? \`
        <div style="text-align:center; padding:36px; color:var(--muted); font-size:15px;">
          ⏳ Pobieranie aktualnych wyników klasy...
        </div>
      \` : (filtered.length === 0 ? \`
        <div style="text-align:center; padding:32px 16px; background:#f9faf8; border-radius:14px; border:1px dashed var(--line); margin-bottom:18px;">
          <div style="font-size:36px; margin-bottom:8px;">🌱</div>
          <strong style="color:var(--brand); display:block; font-size:16px; margin-bottom:4px;">Brak zapisanych wyników w tej kategorii</strong>
          <span style="font-size:13px; color:var(--muted); display:block; max-width:380px; margin:0 auto 16px;">Rozwiąż test powtórkowy i jako pierwszy wpisz się na tablicę chwały!</span>
          <button class="primary small" onclick="startRandomQuiz('d2')">🎲 Rozwiąż losowy test teraz</button>
        </div>
      \` : \`
        <div style="display:flex; flex-direction:column; gap:8px;">
          \${filtered.map((entry, idx) => {
            const isTop1 = idx === 0;
            const isTop2 = idx === 1;
            const isTop3 = idx === 2;
            const badgeIcon = isTop1 ? '🥇' : (isTop2 ? '🥈' : (isTop3 ? '🥉' : (idx + 1) + '.'));
            let borderStyle = 'border:1px solid var(--line); background:#ffffff;';
            if (isTop1) borderStyle = 'border:2px solid #f59e0b; background:#fffdf5;';
            else if (isTop2) borderStyle = 'border:1px solid #94a3b8; background:#f8fafc;';
            else if (isTop3) borderStyle = 'border:1px solid #d97706; background:#fffaf0;';

            const pctVal = entry.pct !== undefined ? entry.pct : Math.round((entry.score / (entry.total || 18)) * 100);
            let dateStr = entry.date || '';
            if (dateStr && typeof dateStr === 'string' && dateStr.includes('T')) {
              try {
                const d = new Date(dateStr);
                dateStr = d.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit' }) + ' ' + d.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
              } catch(e) {}
            }

            return \`
              <div style="\${borderStyle} padding:12px 14px; border-radius:14px; display:flex; align-items:center; justify-content:space-between; gap:12px;">
                <div style="display:flex; align-items:center; gap:12px; min-width:0;">
                  <span style="font-size:20px; font-weight:800; min-width:28px; text-align:center;">\${badgeIcon}</span>
                  <span style="font-size:26px; flex-shrink:0;">\${entry.avatar || '🦉'}</span>
                  <div style="min-width:0;">
                    <strong style="font-size:15px; color:var(--brand); display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                      \${entry.name || 'Odkrywca'}
                    </strong>
                    <span style="font-size:11px; color:var(--muted);">\${entry.module || 'Test'} • \${dateStr}</span>
                  </div>
                </div>
                <div style="text-align:right; flex-shrink:0;">
                  <span class="status-pill status-active" style="font-size:13px; font-weight:800; padding:4px 10px;">
                    \${entry.score} / \${entry.total || 18} pkt
                  </span>
                  <div style="font-size:11px; color:var(--muted); margin-top:2px; font-weight:600;">\${pctVal}%</div>
                </div>
              </div>
            \`;
          }).join('')}
        </div>
      \`)}

      <div style="margin-top:24px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
        <button class="primary" onclick="startRandomQuiz('d2')">🎲 Rozwiąż losowy test (Dział II)</button>
        <button class="outline" onclick="openProfileModal()">👤 Zmień swój profil</button>
      </div>
    </div>
  \`;
}

// Inicjalizacja startowa
updateTopPlayerPill();
render();
</script>
</body>
</html>`;

const outPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outPath, htmlContent, 'utf-8');
console.log('Build completed! index.html written successfully.');
