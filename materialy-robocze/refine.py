from pathlib import Path
p=Path('Misja-Przyroda-Tymek.html')
s=p.read_text(encoding='utf-8')
s=s.replace("const pts=[[44,13],[41,35],[40,48],[45,61],[76,50],[77,62],[43,80]]", "const pts=[[63,8],[24,37],[40,48],[45,61],[76,50],[77,62],[31,77]]")
s=s.replace('M150 47l26 5M140 126l10 15M136 173l26 9M153 220h20M258 180h8M262 223h10M146 288v-27', 'M211 29L178 31M82 133L155 145M136 173l26 9M153 220h20M258 180h8M262 223h10M105 277L149 254')
old=s[s.index('function enableDrag()'):s.index('function answer(idx)')]
new='''function enableDrag(){
 const obj=document.getElementById('object');let moving=false,ghost=null;
 const clear=()=>{moving=false;obj.classList.remove('dragging');if(ghost){ghost.remove();ghost=null}document.querySelectorAll('.bin').forEach(b=>b.classList.remove('over'))};
 obj.onpointerdown=e=>{if(e.button!==0)return;moving=true;obj.setPointerCapture(e.pointerId);obj.classList.add('dragging');ghost=obj.cloneNode(true);ghost.removeAttribute('id');ghost.setAttribute('aria-hidden','true');ghost.tabIndex=-1;ghost.style.cssText='position:fixed;z-index:30;pointer-events:none;opacity:.9;transform:translate(-50%,-50%) rotate(-4deg);margin:0;';ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px';document.body.append(ghost)};
 obj.onpointermove=e=>{if(!moving)return;ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px';document.querySelectorAll('.bin').forEach(b=>{const r=b.getBoundingClientRect();b.classList.toggle('over',e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom)})};
 obj.onpointerup=e=>{if(!moving)return;const bin=[...document.querySelectorAll('.bin')].find(b=>{const r=b.getBoundingClientRect();return e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom});clear();if(bin)answer(Number(bin.dataset.answer))};obj.onpointercancel=clear;obj.onlostpointercapture=clear;
}
'''
s=s.replace(old,new)
p.write_text(s,encoding='utf-8')
notes=Path('materialy-robocze/zrodla.md')
notes.write_text(notes.read_text(encoding='utf-8').replace('22, 23, 26','22, 23, 24, 26').replace('32, 33, 35','32, 33, 34, 35'),encoding='utf-8')
