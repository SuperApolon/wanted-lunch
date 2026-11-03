const lb=document.getElementById('lb'),lbc=document.getElementById('lbc'),lbt=document.getElementById('lbt'),lba=document.getElementById('lba'),lbs=document.getElementById('lbs'),lbi=document.getElementById('lbi');
let cur=0;
function pinTop(y){lb.scrollTop=0;lbc.scrollTop=0;window.scrollTo(0,y)}
function show(i){cur=(i+ART.length)%ART.length;const o=ART[cur];const y=window.scrollY||window.pageYOffset||0;
lbi.src=o.img;lbt.textContent=o.title;lba.textContent=o.author;lbs.innerHTML=o.html;
if(!lb.open)lb.showModal();pinTop(y);requestAnimationFrame(()=>{pinTop(y);requestAnimationFrame(()=>pinTop(y))})}
document.querySelectorAll('.card').forEach(c=>c.onclick=e=>{e.preventDefault();show(+c.dataset.i)});
document.querySelector('.x').onclick=()=>lb.close();
document.getElementById('prev').onclick=()=>show(cur-1);document.getElementById('next').onclick=()=>show(cur+1);
lb.onclick=e=>{if(e.target===lb)lb.close()};
document.addEventListener('keydown',e=>{if(!lb.open)return;if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
