const {chromium}=require('C:/Users/mlata/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
 const context=await browser.newContext({viewport:{width:1280,height:960},offline:true,reducedMotion:'reduce',acceptDownloads:true});
 const page=await context.newPage();const errors=[];const remote=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url()))remote.push(r.url())});
 await page.goto(pathToFileURL(path.resolve('Misja-Przyroda-Tymek.html')).href);
 await page.screenshot({path:'materialy-robocze/start-desktop.png',fullPage:true});
 const bank=await page.evaluate(()=>({ids:ALL.map(q=>q.id),valid:ALL.every(q=>q.a>=0&&q.a<q.opts.length&&q.why&&q.hint&&q.src),boss:BOSS.length,rep:REPAIR.map(a=>a.length),total:MAIN}));
 assert.equal(new Set(bank.ids).size,bank.ids.length);assert.ok(bank.valid);assert.equal(bank.boss,10);assert.deepEqual(bank.rep,[5,5,5,5,5]);
 await page.locator('#new').click();await page.locator('#begin').click();
 assert.equal(await page.locator('#feedback').innerText(),'');
 const from=await page.locator('#object').boundingBox(),to=await page.locator('.bin').first().boundingBox();
 await page.mouse.move(from.x+from.width/2,from.y+from.height/2);await page.mouse.down();await page.mouse.move(to.x+to.width/2,to.y+to.height/2,{steps:12});await page.mouse.up();
 assert.equal(await page.evaluate(()=>state.score),10);
 await page.evaluate(()=>answer(0));assert.equal(await page.evaluate(()=>state.log.length),1);
 await page.locator('#next').click();await page.locator('#hintBtn').click();assert.equal(await page.evaluate(()=>state.hints),2);
 await page.locator('[data-answer="1"]').click();assert.equal(await page.evaluate(()=>state.score),15);
 await page.reload();await page.locator('#continue').click();assert.equal(await page.evaluate(()=>state.log.length),2);assert.ok(await page.locator('#next').isVisible());
 await page.locator('#next').click();await page.locator('[data-answer="0"]').click();await page.locator('#next').click();await page.locator('[data-answer="1"]').click();await page.locator('#next').click();await page.locator('[data-answer="0"]').click();
 assert.equal(await page.evaluate(()=>state.lives),0);assert.match(await page.locator('#feedback').innerText(),/treningowym/);
 await page.locator('#pauseBtn').click();assert.ok(await page.locator('#pauseDialog').isVisible());await page.locator('#resumeBtn').click();
 await page.locator('#next').click();let shots=new Set();let firstMC=true;
 while(await page.evaluate(()=>!['results','finished'].includes(state.screen))){
  if(await page.locator('#begin').count()){await page.locator('#begin').click();continue}
  const q=await page.evaluate(()=>({id:current().id,a:current().a,type:current().type}));
  if(['micro','compass'].includes(q.type)&&!shots.has(q.type)){await page.screenshot({path:`materialy-robocze/${q.type}-desktop.png`,fullPage:true});shots.add(q.type)}
  if(q.type==='mc'&&firstMC){await page.locator('#fiftyBtn').click();assert.equal(await page.locator('.answer.eliminated').count(),2);assert.equal(await page.evaluate(()=>state.fifty),0);assert.equal(await page.locator(`[data-answer="${q.a}"]`).evaluate(el=>el.classList.contains('eliminated')),false);firstMC=false}
  assert.equal(await page.locator('#feedback').innerText(),'');
  await page.locator(`[data-answer="${q.a}"]`).click();await page.locator('#next').click();
 }
 assert.equal(await page.evaluate(()=>state.log.length),bank.total);assert.equal(await page.evaluate(()=>state.weak),0);
 await page.screenshot({path:'materialy-robocze/results-desktop.png',fullPage:true});
 await page.locator('#repairStart').click();
 for(let i=0;i<5;i++){const q=await page.evaluate(()=>({id:current().id,a:current().a}));assert.ok(q.id.startsWith('r1'));await page.locator(`[data-answer="${q.a}"]`).click();await page.locator('#next').click()}
 assert.equal(await page.evaluate(()=>state.screen),'finished');assert.equal(await page.evaluate(()=>state.log.filter(x=>x.repair).length),5);
 const downloaded=page.waitForEvent('download');await page.locator('#downloadResult').click();const d=await downloaded;await d.saveAs('materialy-robocze/wynik-test.txt');
 // Verify all five adaptive selections against deliberately constructed independent scores.
 const adaptive=await page.evaluate(()=>TOPICS.map((_,weak)=>weakest(TOPICS.map((_,i)=>({total:10,correct:i===weak?2:9,solo:i===weak?1:8})))));assert.deepEqual(adaptive,[0,1,2,3,4]);
 assert.equal(await page.evaluate(()=>weakest([{total:10,correct:8,solo:7},{total:10,correct:8,solo:5},{total:10,correct:9,solo:9},{total:10,correct:9,solo:9},{total:10,correct:9,solo:9}])),1);
 // A complete clean run verifies streaks, totals, and an all-correct tie.
 await page.evaluate(()=>start());let attempts=0;
 while(await page.evaluate(()=>state.screen!=='results')){if(await page.locator('#begin').count()){await page.locator('#begin').click();continue}const a=await page.evaluate(()=>current().a);await page.locator(`[data-answer="${a}"]`).click();attempts++;await page.locator('#next').click()}
 assert.equal(attempts,bank.total);assert.equal(await page.evaluate(()=>state.score),bank.total*10+Math.floor(bank.total/3)*5);assert.equal(await page.evaluate(()=>state.lives),3);
 await context.close();
 const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,offline:true,reducedMotion:'reduce'});const p=await mobile.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(pathToFileURL(path.resolve('Misja-Przyroda-Tymek.html')).href);await p.screenshot({path:'materialy-robocze/start-mobile.png',fullPage:true});
 await p.locator('#new').click();await p.locator('#begin').click();await p.screenshot({path:'materialy-robocze/sort-mobile.png',fullPage:true});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.locator('[data-answer="0"]').tap();assert.equal(await p.evaluate(()=>state.score),10);
 await p.evaluate(()=>{state=fresh();state.stage=3;state.screen='question';render()});await p.screenshot({path:'materialy-robocze/micro-mobile.png',fullPage:true});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await p.evaluate(()=>{state=fresh();state.stage=4;state.screen='question';render()});await p.screenshot({path:'materialy-robocze/compass-mobile.png',fullPage:true});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 // Local storage denial must not prevent play.
 const blocked=await browser.newContext({offline:true});await blocked.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}}));const bp=await blocked.newPage();await bp.goto(pathToFileURL(path.resolve('Misja-Przyroda-Tymek.html')).href);await bp.locator('#new').click();await bp.locator('#begin').click();await bp.locator('[data-answer="0"]').click();assert.equal(await bp.evaluate(()=>state.score),10);
 assert.deepEqual(errors,[]);assert.deepEqual(remote,[]);
 console.log(JSON.stringify({status:'PASS',mainQuestions:bank.total,questionBank:bank.ids.length,boss:10,repair:5,checks:['offline file loading','drag and drop','touch input','no premature feedback','single scoring','hints','50:50','lives and training','pause','reload/resume','full mixed run','full perfect run','adaptive selection all areas','five new repair questions','result download','mobile layout','storage denied'],pageErrors:errors,remoteRequests:remote}));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
