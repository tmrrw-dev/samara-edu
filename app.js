const programs = [
 {code:"01.03.02",name:"Прикладная математика и информатика",profile:"Прикладная математика и программирование",level:"Бакалавриат",form:"Очная"},
 {code:"01.03.02",name:"Прикладная математика и информатика",profile:"Искусственный интеллект и компьютерные науки",level:"Бакалавриат",form:"Очная"},
 {code:"01.04.02",name:"Прикладная математика и информатика",profile:"Науки о данных (DataScience)",level:"Магистратура",form:"Очная"},
 {code:"01.04.02",name:"Прикладная математика и информатика",profile:"Системы искусственного интеллекта (Artificial intelligence systems)",level:"Магистратура",form:"Очная"},
 {code:"02.03.02",name:"Фундаментальная информатика и информационные технологии",profile:"Информационные технологии",level:"Бакалавриат",form:"Очная"},
 {code:"02.03.02",name:"Фундаментальная информатика и информационные технологии",profile:"Программирование и информационные технологии",level:"Бакалавриат",form:"Очная"},
 {code:"02.04.02",name:"Фундаментальная информатика и информационные технологии",profile:"Инженерия программных систем",level:"Магистратура",form:"Очная"},
 {code:"03.03.01",name:"Прикладные математика и физика",profile:"Киберфизические системы",level:"Бакалавриат",form:"Очная"},
 {code:"03.03.01",name:"Прикладные математика и физика",profile:"Квантовые коммуникации и наноэлектроника",level:"Бакалавриат",form:"Очная"},
 {code:"03.03.01",name:"Прикладные математика и физика",profile:"Квантовые коммуникации и оптоэлектроника",level:"Бакалавриат",form:"Очная"},
 {code:"03.04.01",name:"Прикладные математика и физика",profile:"Устройства и системы фотоники и электроники",level:"Магистратура",form:"Очная"},
 {code:"03.04.01",name:"Прикладные математика и физика",profile:"Квантовые коммуникации и интегральная фотоника",level:"Магистратура",form:"Очная"},
 {code:"03.04.01",name:"Прикладные математика и физика",profile:"Фотоника и квантовые материалы (Photonics and Quantum Materials) — совместно со Сколковским институтом науки и технологий",level:"Магистратура",form:"Очная"},
 {code:"03.04.01",name:"Прикладные математика и физика",profile:"Design and Technologies for Photonics and Nanoelectronics",level:"Магистратура",form:"Очная"},
 {code:"09.03.01",name:"Информатика и вычислительная техника",profile:"Информационные системы",level:"Бакалавриат",form:"Очная"},
 {code:"09.03.01",name:"Информатика и вычислительная техника",profile:"Информационные системы",level:"Бакалавриат",form:"Заочная"},
 {code:"09.03.01",name:"Информатика и вычислительная техника",profile:"Веб-технологии и прикладное программирование",level:"Бакалавриат",form:"Очная"},
 {code:"09.04.01",name:"Информатика и вычислительная техника",profile:"Информационные системы и технологии",level:"Магистратура",form:"Очная"},
 {code:"09.04.01",name:"Информатика и вычислительная техника",profile:"Java-инженерия",level:"Магистратура",form:"Очная"},
 {code:"09.04.01",name:"Информатика и вычислительная техника",profile:"Разработка высоконагруженных приложений",level:"Магистратура",form:"Очная"},
 {code:"10.05.03",name:"Информационная безопасность автоматизированных систем",profile:'Специализация № 5 «Безопасность открытых информационных систем»',level:"Специалитет",form:"Очная"},
 {code:"11.03.03",name:"Конструирование и технология электронных средств",profile:"Проектирование и технология радиоэлектронных средств",level:"Бакалавриат",form:"Очная"},
 {code:"11.03.03",name:"Конструирование и технология электронных средств",profile:"Проектирование и технология электронных средств",level:"Бакалавриат",form:"Очная"},
 {code:"11.03.04",name:"Электроника и наноэлектроника",profile:"Наноэлектроника и фотоника",level:"Бакалавриат",form:"Очная"},
 {code:"11.03.04",name:"Электроника и наноэлектроника",profile:"Нанотехнологии электроники и фотоники",level:"Бакалавриат",form:"Очная"},
 {code:"11.04.03",name:"Конструирование и технология электронных средств",profile:"Радиоэлектронные средства специального назначения и технология их производства",level:"Магистратура",form:"Очная"},
 {code:"11.05.01",name:"Радиоэлектронные системы и комплексы",profile:"Радиоэлектронные системы передачи информации",level:"Специалитет",form:"Очная"},
 {code:"11.05.01",name:"Радиоэлектронные системы и комплексы",profile:"Радиоэлектронное обеспечение беспилотных авиационных систем",level:"Специалитет",form:"Очная"},
 {code:"11.05.01",name:"Радиоэлектронные системы и комплексы",profile:"Программно-аппаратное обеспечение радиоэлектронных систем",level:"Специалитет",form:"Очная"},
 {code:"12.03.03",name:"Фотоника и оптоинформатика",profile:"Интеллектуальные фотонные системы",level:"Бакалавриат",form:"Очная"},
 {code:"12.03.04",name:"Биотехнические системы и технологии",profile:"Биомедицинская техника",level:"Бакалавриат",form:"Очная"},
 {code:"12.03.04",name:"Биотехнические системы и технологии",profile:"Биомедицинские информационные технологии",level:"Бакалавриат",form:"Очная"},
 {code:"12.03.05",name:"Лазерная техника и лазерные технологии",profile:"Лазерные системы и информационные технологии",level:"Бакалавриат",form:"Очная"},
 {code:"12.04.04",name:"Биотехнические системы и технологии",profile:"Биомедицинская инженерия",level:"Магистратура",form:"Очная"}
];
// Учебные планы и материалы подключаются через content.js.
// Пустые периоды намеренно не заполняются вымышленными дисциплинами.
let currentProgram=null,currentYear=1,currentSemester=1,currentSubject=null,currentTopic=null,currentView="subjects";
const $=id=>document.getElementById(id);
const programKey=p=>`${p.code}|${p.profile}|${p.form}`;
const planFor=p=>window.SAMARA_CONTENT?.programs?.[programKey(p)];
const semesterHasSubjects=s=>(s?.subjects||[]).length>0;
const availablePrograms=()=>programs.filter(p=>planFor(p)?.years?.some(y=>y.semesters?.some(semesterHasSubjects)));
const availableYears=()=> (planFor(currentProgram)?.years||[]).map((y,i)=>({year:i+1,data:y})).filter(x=>x.data.semesters?.some(semesterHasSubjects));
const availableSemesters=yearIndex=> (planFor(currentProgram)?.years?.[yearIndex-1]?.semesters||[]).map((data,i)=>({semester:i+1,data})).filter(x=>semesterHasSubjects(x.data));
function renderPrograms(){
 const q=($("searchInput").value||"").toLowerCase().trim();
 const filtered=availablePrograms().filter(p=>(p.name+" "+p.profile+" "+p.code+" "+p.level+" "+p.form).toLowerCase().includes(q));
 $("programCount").textContent=filtered.length;
 $("programGrid").innerHTML=filtered.length?filtered.map(p=>`<button class="program-card" onclick="openProgram(${availablePrograms().indexOf(p)})"><span class="program-code">${p.code}</span><span class="program-arrow">↗</span><h3>${p.name}</h3><p>${p.profile} · ${p.level} · ${p.form}</p></button>`).join(""):`<div class="empty-state">Ничего не найдено. Попробуй изменить запрос.</div>`;
}
function openProgram(i){
 currentProgram=availablePrograms()[i];currentYear=availableYears()[0]?.year||1;currentSemester=availableSemesters(currentYear)[0]?.semester||1;currentSubject=null;currentTopic=null;
 $("homeView").classList.add("hidden");$("courseView").classList.remove("hidden");
 $("crumbProgram").textContent=currentProgram.profile;$("crumbLocation").textContent="1 курс · 1 семестр";
 $("courseTitle").textContent=currentProgram.profile;
 $("courseSubtitle").textContent=currentProgram.code+" · "+currentProgram.name+" · "+currentProgram.level+" · "+currentProgram.form;
 updateSaveButton();renderSelectors();renderSemester();window.scrollTo(0,0);
}
function renderSelectors(){
 const years=availableYears();
 $("yearSelect").innerHTML=years.map(x=>`<option value="${x.year}" ${x.year===currentYear?"selected":""}>${x.year} курс</option>`).join("");
 const semesters=availableSemesters(currentYear);
 $("semesterSelect").innerHTML=semesters.map(x=>`<option value="${x.semester}" ${x.semester===currentSemester?"selected":""}>${(currentYear-1)*2+x.semester} семестр</option>`).join("");
}
function selectYear(value){currentYear=Number(value);currentSemester=availableSemesters(currentYear)[0]?.semester||1;currentSubject=null;currentTopic=null;renderSelectors();renderSemester();}
function selectSemester(value){currentSemester=Number(value);currentSubject=null;currentTopic=null;renderSemester();}
function semesterData(){
 const key=programKey(currentProgram);const plan=window.SAMARA_CONTENT?.programs?.[key];
 return plan?.years?.[currentYear-1]?.semesters?.[currentSemester-1]||null;
}
function renderSemester(){
 currentSubject=null;currentTopic=null;currentView="subjects";
 const semester=(currentYear-1)*2+currentSemester;
 $("crumbLocation").textContent=`${currentYear} курс · ${semester} семестр`;
 $("semesterEyebrow").textContent=`${currentYear} КУРС · ${semester} СЕМЕСТР`;
 $("semesterTitle").textContent="Предметы семестра";
 $("semesterDescription").textContent="Предметы выбранного семестра. Нажми на вкладку нужного предмета.";
 const data=semesterData();const subjects=data?.subjects||[];
 if(!subjects.length){
  const status=`<b>Для этого семестра пока нет списка предметов</b><p>В загруженном учебном плане нет подтверждённых данных для этой программы и семестра.</p>`;
  const registry="https://ssau.ru/sveden/education/eduop";
  $("lessonList").innerHTML=`<div class="empty-state">${status}<p><a class="official-link" href="${safeUrl(registry)}" target="_blank" rel="noreferrer">Реестр образовательных программ ↗</a></p></div>`;
  return;
 }
 $("lessonList").innerHTML=`<div class="subject-tabs" role="tablist" aria-label="Предметы семестра">${subjects.map((s,i)=>`<button class="subject-tab ${i===0?"active":""}" role="tab" aria-selected="${i===0}" onclick="openSubject(${i})"><span class="tab-index">${String(i+1).padStart(2,"0")}</span>${escapeHtml(s.name)}</button>`).join("")}</div><div id="subjectPanel" class="subject-panel"></div>`;
 openSubject(0);
}
function openSubject(i){
 const data=semesterData();if(!data?.subjects?.[i])return;
 currentSubject=data.subjects[i];currentTopic=null;currentView="topics";
 const semester=(currentYear-1)*2+currentSemester;
 $("crumbLocation").textContent=`${currentYear} курс · ${semester} семестр · ${currentSubject.name}`;
 $("semesterEyebrow").textContent="ПРЕДМЕТ";$("semesterTitle").textContent=currentSubject.name;
 $("semesterDescription").textContent="Выбранный предмет. Видеоуроки и материалы добавим сюда следующим этапом.";
 const tabs=$("lessonList").querySelectorAll(".subject-tab");
 tabs.forEach((tab,index)=>{tab.classList.toggle("active",index===i);tab.setAttribute("aria-selected",String(index===i));});
 renderTopicTabs();
}
function renderTopicTabs(){
 const panel=$("subjectPanel");if(!panel||!currentSubject)return;
 panel.innerHTML=`<div class="empty-state subject-placeholder"><b>${escapeHtml(currentSubject.name)}</b><p>Место для видеоуроков и дополнительных материалов. Наполнение добавим следующим этапом.</p></div>`;
}
function openTopic(i){
 if(!currentSubject?.topics?.[i])return;
 currentTopic=currentSubject.topics[i];currentView="topic";
 const topic=currentTopic;
 $("crumbLocation").textContent=`${currentYear} курс · ${((currentYear-1)*2+currentSemester)} семестр · ${currentSubject.name} · ${topic.title}`;
 $("semesterEyebrow").textContent="ТЕМА ПРЕДМЕТА";
 $("semesterTitle").textContent=currentSubject.name;
 $("semesterDescription").textContent="Выбрана тема: "+topic.title;
 const tabs=$("subjectPanel").querySelectorAll(".topic-tab");
 tabs.forEach((tab,index)=>{tab.classList.toggle("active",index===i);tab.setAttribute("aria-selected",String(index===i));});
 const videos=(topic.videos||[]).map((v,j)=>`<a class="resource-item" href="${safeUrl(v.url)}" target="_blank" rel="noreferrer"><span class="play-icon">▶</span><span><b>${escapeHtml(v.title||`Видеоурок ${j+1}`)}</b><small>${escapeHtml(v.source||"Открыть видео")}</small></span><span class="lesson-action">Смотреть ↗</span></a>`).join("");
 const materials=(topic.materials||[]).map((m,j)=>`<a class="resource-item" href="${safeUrl(m.url)}" target="_blank" rel="noreferrer"><span class="material-icon">↗</span><span><b>${escapeHtml(m.title||`Материал ${j+1}`)}</b><small>${escapeHtml(m.description||"Дополнительный источник")}</small></span><span class="lesson-action">Открыть ↗</span></a>`).join("");
 $("topicPanel").innerHTML=`<div class="content-group"><h3>Видеоуроки</h3>${videos||`<div class="empty-state">Видеоуроки по этой теме пока не добавлены.</div>`}</div><div class="content-group"><h3>Дополнительные материалы</h3>${materials||`<div class="empty-state">Дополнительные материалы пока не добавлены.</div>`}</div>`;
}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function safeUrl(u){try{const x=new URL(u,location.href);return ["http:","https:"].includes(x.protocol)?x.href:"#";}catch{return "#";}}
function saveKey(){return "samara-edu-saved-programs";}
function toggleSaved(){let saved=JSON.parse(localStorage.getItem(saveKey())||"[]"),id=programKey(currentProgram);saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];localStorage.setItem(saveKey(),JSON.stringify(saved));updateSaveButton();toast(saved.includes(id)?"Программа добавлена в избранное":"Удалено из избранного");}
function updateSaveButton(){if(!currentProgram)return;let saved=JSON.parse(localStorage.getItem(saveKey())||"[]"),yes=saved.includes(programKey(currentProgram));$("saveCourseBtn").innerHTML=(yes?"♥":"♡")+" <span>"+(yes?"В избранном":"В избранное")+"</span>";}
function showSaved(){let saved=JSON.parse(localStorage.getItem(saveKey())||"[]");if(!saved.length){toast("В избранном пока нет программ");return;}let p=availablePrograms().find(x=>saved.includes(programKey(x)));if(p)openProgram(availablePrograms().indexOf(p));else toast("Сохранённая программа не найдена");}
function goHome(){$("courseView").classList.add("hidden");$("homeView").classList.remove("hidden");window.scrollTo(0,0);}
let toastTimer;function toast(msg){let t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2200);}
renderPrograms();
