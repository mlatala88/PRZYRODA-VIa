const { chromium } = require('C:/Users/mlata/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const path = require('path');
const { pathToFileURL } = require('url');
const assert = require('assert');

(async () => {
  console.log('--- Starting Playwright test for Universal Nature App ---');
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
  });

  const pageErrors = [];
  const context = await browser.newContext({
    viewport: { width: 1200, height: 900 }
  });
  const page = await context.newPage();

  page.on('pageerror', err => {
    console.error('Page error:', err.message);
    pageErrors.push(err.message);
  });

  const targetUrl = pathToFileURL('C:/Users/mlata/.gemini/antigravity/scratch/nauka-przyroda-tymek/index.html').href;
  await page.goto(targetUrl);
  console.log('1. Page loaded successfully:', targetUrl);

  // Take screenshot of Hub
  await page.screenshot({ path: 'C:/Users/mlata/.gemini/antigravity/scratch/nauka-przyroda-tymek/screen_hub.png', fullPage: true });

  // Check title & generic greeting
  const heading = await page.locator('h1').innerText();
  assert.ok(heading.includes('Odkrywco'), 'Heading should be generic (Cześć, Odkrywco!)');
  assert.ok(!heading.includes('Tymek'), 'Heading must NOT mention personal name');
  console.log('2. Generic greeting confirmed:', heading);

  // ==========================================
  // Test Dział I (Spotkanie z przyrodą)
  // ==========================================
  console.log('3. Testing Dział I: Learn Mode');
  await page.locator('button:has-text("Nauka (5 tematów)")').click();
  await page.waitForTimeout(150);

  // Verify D1 topic list
  const d1Header = await page.locator('h2').innerText();
  assert.ok(d1Header.includes('Spotkanie z przyrodą'), 'Should show Dział I topic list');
  console.log('4. Opened Dział I topic list:', d1Header);

  // Open D1 Topic 1: Co to jest przyroda
  await page.locator('text=Co to jest przyroda?').click();
  await page.waitForTimeout(150);

  // Step through D1 steps
  const nextBtn = page.locator('button:has-text("Następny krok")');
  if (await nextBtn.isVisible()) {
    await nextBtn.click();
    await page.waitForTimeout(100);
  }
  console.log('5. Navigated through Dział I Learn steps');

  // Return to Hub
  await page.locator('button:has-text("Spis tematów")').click();
  await page.waitForTimeout(100);
  await page.locator('button:has-text("Wróć do ekranu głównego")').click();
  await page.waitForTimeout(100);

  // Test D1 Quiz
  console.log('6. Testing Dział I: Quiz Mode');
  await page.locator('button:has-text("Sprawdź wiedzę (Test 15 pytań)")').click();
  await page.waitForTimeout(150);

  // Answer first 3 questions of D1 Quiz to verify interactivity
  for (let q = 1; q <= 3; q++) {
    const optButtons = page.locator('.opt-btn');
    const binCols = page.locator('.bin-col');
    const orderRows = page.locator('.order-row');
    const matchBtns = page.locator('.match-btn');

    if (await binCols.count() > 0) {
      await page.evaluate(() => {
        quizBinsState.items.forEach(it => it.bin = 0);
        render();
      });
      await page.waitForTimeout(100);
      await page.locator('button:has-text("Sprawdź podział")').click();
    } else if (await matchBtns.count() > 0) {
      await page.evaluate(() => {
        const qCurr = quizQuestions[quizQIndex];
        qCurr.pairs.forEach((_, idx) => { quizMatchState.pairs[idx] = idx; });
        render();
      });
      await page.waitForTimeout(100);
      await page.locator('button:has-text("Sprawdź dopasowanie")').click();
    } else if (await orderRows.count() > 0) {
      await page.locator('button:has-text("Zatwierdź kolejność")').click();
    } else if (await optButtons.count() > 0) {
      const multiBtn = page.locator('button:has-text("Zatwierdź wybór")');
      if (await multiBtn.count() > 0) {
        await optButtons.first().click();
        await multiBtn.click();
      } else {
        await optButtons.first().click();
        await page.locator('button:has-text("Sprawdź odpowiedź")').click();
      }
    }

    await page.waitForTimeout(100);
    const nextQBtn = page.locator('button:has-text("Następne zadanie")');
    if (await nextQBtn.isVisible()) {
      await nextQBtn.click();
      await page.waitForTimeout(100);
    }
  }
  console.log('7. Successfully answered first 3 questions in Dział I Quiz');

  // Quit to hub
  await page.evaluate(() => { currentView = 'hub'; render(); });
  await page.waitForTimeout(100);

  // ==========================================
  // Test Dział II (Moja okolica)
  // ==========================================
  console.log('8. Testing Dział II: Learn & Quiz Mode');
  await page.locator('button:has-text("Nauka (6 tematów)")').click();
  await page.waitForTimeout(150);

  const d2Header = await page.locator('h2').innerText();
  assert.ok(d2Header.includes('Moja okolica'), 'Should show Dział II topic list');
  console.log('9. Opened Dział II topic list:', d2Header);

  // Return to Hub and launch D2 Quiz
  await page.locator('button:has-text("Wróć do ekranu głównego")').click();
  await page.waitForTimeout(100);
  await page.locator('button:has-text("Sprawdź wiedzę (Test 18 pytań)")').click();
  await page.waitForTimeout(150);

  // Answer all 18 questions in Dział II Set 1
  for (let q = 1; q <= 18; q++) {
    const optButtons = page.locator('.opt-btn');
    const binCols = page.locator('.bin-col');
    const hotspotPoints = page.locator('.hotspot-point');
    const orderRows = page.locator('.order-row');
    const matchBtns = page.locator('.match-btn');

    if (await hotspotPoints.count() > 0) {
      await hotspotPoints.first().click();
      await page.locator('button:has-text("Potwierdź wybór")').click();
    } else if (await binCols.count() > 0) {
      await page.evaluate(() => {
        quizBinsState.items.forEach(it => it.bin = 0);
        render();
      });
      await page.waitForTimeout(100);
      await page.locator('button:has-text("Sprawdź podział")').click();
    } else if (await matchBtns.count() > 0) {
      await page.evaluate(() => {
        const qCurr = quizQuestions[quizQIndex];
        qCurr.pairs.forEach((_, idx) => { quizMatchState.pairs[idx] = idx; });
        render();
      });
      await page.waitForTimeout(100);
      await page.locator('button:has-text("Sprawdź dopasowanie")').click();
    } else if (await orderRows.count() > 0) {
      await page.locator('button:has-text("Zatwierdź kolejność")').click();
    } else if (await optButtons.count() > 0) {
      const multiBtn = page.locator('button:has-text("Zatwierdź wybór")');
      if (await multiBtn.count() > 0) {
        await optButtons.first().click();
        await multiBtn.click();
      } else {
        await optButtons.first().click();
        await page.locator('button:has-text("Sprawdź odpowiedź")').click();
      }
    }

    await page.waitForTimeout(100);
    const nextQBtn = page.locator('button:has-text("Następne zadanie")');
    const resultBtn = page.locator('button:has-text("Zobacz wynik testu")');
    if (await nextQBtn.isVisible()) {
      await nextQBtn.click();
    } else if (await resultBtn.isVisible()) {
      await resultBtn.click();
    }
    await page.waitForTimeout(100);
  }
  console.log('10. Answered all 18 questions in Dział II Set 1');

  // Verify Results screen
  await page.waitForSelector('.results-score-ring');
  await page.screenshot({ path: 'C:/Users/mlata/.gemini/antigravity/scratch/nauka-przyroda-tymek/screen_results.png', fullPage: true });
  console.log('11. Reached Results screen and verified score ring');

  // Check localStorage recorded usedSets in d2
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('odkrywam_przyrode_v2')));
  assert.ok(stored.usedSets.d2.includes(1), 'usedSets.d2 should contain Set 1');
  console.log('12. Confirmed Set 1 recorded in localStorage for d2:', stored.usedSets);

  // Mobile viewport test
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(targetUrl);
  await mobilePage.screenshot({ path: 'C:/Users/mlata/.gemini/antigravity/scratch/nauka-przyroda-tymek/screen_mobile_hub.png', fullPage: true });
  console.log('13. Mobile viewport screenshot captured successfully');

  await browser.close();

  assert.equal(pageErrors.length, 0, 'There should be zero page errors');
  console.log('--- ALL AUTOMATED PLAYWRIGHT TESTS PASSED WITH 0 ERRORS! ---');
})();
