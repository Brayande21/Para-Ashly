const panels=['welcome','envelope-panel','letter','ending'];
function showPanel(id){panels.forEach(panel=>document.getElementById(panel).classList.toggle('hidden',panel!==id));window.scrollTo({top:0,behavior:'smooth'});}
document.getElementById('start').addEventListener('click',()=>showPanel('envelope-panel'));
document.getElementById('open-letter').addEventListener('click',()=>showPanel('letter'));
document.getElementById('finish').addEventListener('click',()=>showPanel('ending'));
document.getElementById('restart').addEventListener('click',()=>showPanel('letter'));
const hearts=document.getElementById('hearts');
for(let i=0;i<17;i++){const heart=document.createElement('span');heart.className='floating-heart';heart.textContent=i%3===0?'♡':'♥';heart.style.left=`${Math.random()*100}%`;heart.style.fontSize=`${12+Math.random()*19}px`;heart.style.animationDuration=`${9+Math.random()*10}s`;heart.style.animationDelay=`${-Math.random()*18}s`;hearts.appendChild(heart);}
