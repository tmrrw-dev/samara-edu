const programs = [
 {code:"01.03.02",name:"Прикладная математика и информатика",profile:"Прикладная математика и программирование",level:"Бакалавриат",courses:["Математический анализ","Линейная алгебра","Программирование","Дискретная математика"]},
 {code:"01.03.02",name:"Прикладная математика и информатика",profile:"Искусственный интеллект и компьютерные науки",level:"Бакалавриат",courses:["Математический анализ","Линейная алгебра","Алгоритмы и структуры данных","Введение в искусственный интеллект"]},
 {code:"02.03.02",name:"Фундаментальная информатика и информационные технологии",profile:"Информационные технологии",level:"Бакалавриат",courses:["Программирование","Дискретная математика","Архитектура компьютера","Базы данных"]},
 {code:"09.03.01",name:"Информатика и вычислительная техника",profile:"Информационные системы",level:"Бакалавриат",courses:["Информатика","Программирование","Операционные системы","Базы данных"]},
 {code:"09.03.01",name:"Информатика и вычислительная техника",profile:"Веб-технологии и прикладное программирование",level:"Бакалавриат",courses:["Основы веб-разработки","Программирование","Базы данных","Компьютерные сети"]},
 {code:"10.03.01",name:"Информационная безопасность",profile:"Организация и технологии защиты информации",level:"Бакалавриат",courses:["Основы информационной безопасности","Криптография","Компьютерные сети","Операционные системы"]}
];
const demoLessons = [
 {title:"Введение в дисциплину",duration:"12 мин",desc:"Основные понятия и цели курса"},
 {title:"Базовые определения и терминология",duration:"18 мин",desc:"Ключевые термины и определения"},
 {title:"Основные методы и инструменты",duration:"24 мин",desc:"Разбор подходов на примерах"},
 {title:"Практический разбор задачи",duration:"21 мин",desc:"Пошаговое решение типовой задачи"},
 {title:"Самостоятельная работа",duration:"Материалы",desc:"Задания для закрепления темы"}
];
let currentProgram=null,currentCourse=null,currentTab="lessons";
const $=id=>document.getElementById(id);
function renderPrograms(){
 const q=($("searchInput").value||"").toLowerCase().trim();
 const filtered=programs.filter(p=>(p.name+" "+p.profile+" "+p.code+" "+p.courses.join(" ")).toLowerCase().includes(q));
 $("programCount").textContent=filtered.length;
 $("programGrid").innerHTML=filtered.length?filtered.map((p,i)=>`<button class="program-card" onclick="openProgram(${programs.indexOf(p)})"><span class="program-code">${p.code}</span><span class="program-arrow">↗</span><h3>${p.name}</h3><p>${p.profile} · ${p.level}</p></button>`).join(""):`<div class="empty-state">Ничего не найдено. Попробуй изменить запрос.</div>`;
}
function openProgram(i){
 currentProgram=programs[i];
 $("homeView").classList.add("hidden");$("courseView").classList.remove("hidden");
 $("crumbProgram").textContent=currentProgram.profile;$("crumbCourse").textContent="Выбор дисциплины";
 $("courseTitle").textContent=currentProgram.profile;$("courseSubtitle").textContent=currentProgram.code+" · "+currentProgram.name+" · "+currentProgram.level;
 $("saveCourseBtn").classList.add("hidden");
 currentCourse=null;currentTab="lessons";renderCourseList();window.scrollTo(0,0);
}
function renderCourseList(){
 $("lessonList").innerHTML=`<div class="eyebrow">ДИСЦИПЛИНЫ ПРОГРАММЫ</div>`+currentProgram.courses.map((c,i)=>`<button class="lesson-item course-choice" onclick="openCourse(${i})"><span class="lesson-number">0${i+1}</span><span class="lesson-info"><b>${c}</b><small>Учебная дисциплина · материалы по темам</small></span><span class="lesson-action">Открыть ↗</span></button>`).join("");
 $("courseAsideTitle");
}
function openCourse(i){
 currentCourse=currentProgram.courses[i];
 $("crumbCourse").textContent=currentCourse;$("courseTitle").textContent=currentCourse;
 $("courseSubtitle").textContent=currentProgram.code+" · "+currentProgram.profile;
 $("saveCourseBtn").classList.remove("hidden");updateSaveButton();switchTab("lessons");renderTab();window.scrollTo(0,0);
}
function switchTab(tab){currentTab=tab;document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));if(currentCourse)renderTab();}
function renderTab(){
 const key=progressKey();const done=JSON.parse(localStorage.getItem(key)||"[]");
 if(currentTab==="lessons"){
  $("lessonList").innerHTML=demoLessons.map((l,i)=>`<div class="lesson-item"><span class="lesson-number">${done.includes(i)?"✓":String(i+1).padStart(2,"0")}</span><span class="lesson-info"><b>${l.title}</b><small>${l.desc} · ${l.duration}</small></span><button class="lesson-action" onclick="markLesson(${i})">${done.includes(i)?"Пройдено ✓":"Отметить"}</button></div>`).join("");
 }else if(currentTab==="notes"){
  $("lessonList").innerHTML=`<div class="empty-state"><b>Конспекты и презентации</b><p>Здесь будут размещаться PDF-файлы, презентации и дополнительные материалы по дисциплине.</p><small>Материалы пока не добавлены.</small></div>`;
 }else if(currentTab==="practice"){
  $("lessonList").innerHTML=`<div class="empty-state"><b>Практические и лабораторные работы</b><p>Здесь будут задания, методические указания и разборы решений.</p><small>Материалы пока не добавлены.</small></div>`;
 }else{
  $("lessonList").innerHTML=`<div class="empty-state"><b>${currentCourse}</b><p>Дисциплина образовательной программы «${currentProgram.profile}».</p><p>Код направления: ${currentProgram.code}. Указанные в прототипе дисциплины служат стартовым примером каталога и требуют сверки с учебным планом конкретного года набора.</p><a class="official-link" href="https://ssau.ru/sveden/education/eduop" target="_blank">Проверить официальную рабочую программу ↗</a></div>`;
 }
 $("progressBar").style.width=(done.length/demoLessons.length*100)+"%";$("progressText").textContent=Math.round(done.length/demoLessons.length*100)+"%";
}
function progressKey(){return "samara-edu-progress-"+(currentProgram?.code||"")+"-"+(currentProgram?.profile||"")+"-"+(currentCourse||"");}
function markLesson(i){let key=progressKey(),done=JSON.parse(localStorage.getItem(key)||"[]");done=done.includes(i)?done.filter(x=>x!==i):[...done,i];localStorage.setItem(key,JSON.stringify(done));renderTab();toast("Прогресс сохранён в этом браузере");}
function saveKey(){return "samara-edu-saved";}
function toggleSaved(){let saved=JSON.parse(localStorage.getItem(saveKey())||"[]"),id=currentProgram.code+"|"+currentProgram.profile+"|"+currentCourse;if(saved.includes(id))saved=saved.filter(x=>x!==id);else saved.push(id);localStorage.setItem(saveKey(),JSON.stringify(saved));updateSaveButton();toast(saved.includes(id)?"Добавлено в избранное":"Удалено из избранного");}
function updateSaveButton(){let saved=JSON.parse(localStorage.getItem(saveKey())||"[]"),id=currentProgram.code+"|"+currentProgram.profile+"|"+currentCourse,yes=saved.includes(id);$("saveCourseBtn").innerHTML=(yes?"♥":"♡")+" <span>"+(yes?"В избранном":"В избранное")+"</span>";}
function showSaved(){let saved=JSON.parse(localStorage.getItem(saveKey())||"[]");if(!saved.length){toast("В избранном пока ничего нет");return;}let first=saved[0].split("|");let p=programs.find(x=>x.code===first[0]&&x.profile===first[1]);if(!p){toast("Сохранённый предмет не найден в текущем каталоге");return;}openProgram(programs.indexOf(p));let idx=p.courses.indexOf(first[2]);if(idx>=0)openCourse(idx);toast("Открыт первый сохранённый предмет");}
function goHome(){ $("courseView").classList.add("hidden");$("homeView").classList.remove("hidden");window.scrollTo(0,0);}
let toastTimer;function toast(msg){let t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2200);}
renderPrograms();
