/* =========================================================
   МАМА ЗНАЕТ V2.0 — ПРИКОРМ
   ========================================================= */

const complementaryV2Basics = [
  ["🥄","Старт без гонки","Ориентир — около 6 месяцев и готовность малыша. Прикорм дополняет грудное молоко или смесь, а не отменяет их за один день."],
  ["🪑","Положение","Кормим бодрствующего малыша в устойчивом положении. Еда — только под присмотром взрослого."],
  ["👶","Следуем за малышом","Предлагаем, но не заставляем. Останавливаемся, когда малыш отворачивается, закрывает рот или явно теряет интерес."],
  ["🥦","Разнообразие","Постепенно знакомим с овощами, кашами, мясом, фруктами и другими подходящими по возрасту продуктами, меняя текстуру по мере развития навыков."]
];

const complementaryV2Readiness = [
  "Малыш может удерживать голову и достаточно устойчиво находиться в положении для кормления",
  "Интересуется едой и тянется к ней",
  "Может брать пищу и направлять её ко рту",
  "Справляется с пищей подходящей текстуры, а не только автоматически выталкивает её языком"
];

const complementaryV2Safety = [
  ["🍇","Риск удушья","Не давайте целые виноградины, цельные орехи, твёрдые куски сырой моркови и другие продукты опасной формы или твёрдости."],
  ["🧂","Без соли и сахара","Не нужно подсаливать или подслащивать детскую еду."],
  ["🪑","Только сидя и под присмотром","Не кормите лежащего, спящего или активно двигающегося ребёнка."],
  ["🥛","Молочное питание остаётся","В начале прикорма грудное молоко или адаптированная смесь продолжают занимать важное место в рационе."]
];

const complementaryV2Plan = [
  ["1–2 день","Один овощ","Небольшое количество → постепенно больше по аппетиту. Например: кабачок."],
  ["3–4 день","Другой овощ","Например: брокколи. Знакомый продукт можно оставить рядом."],
  ["5–6 день","Ещё один овощ","Например: цветная капуста. Не заставляем доедать порцию."],
  ["7–8 день","Каша","Без добавленного сахара; начинаем с небольшой порции."],
  ["9–10 день","Другая каша","Продолжаем знакомые продукты и наблюдаем переносимость."],
  ["11–14 день","Овощи + каши","Комбинируем уже знакомые продукты, новый продукт — один за раз."],
  ["15–18 день","Мясо","Добавляем подходящее по текстуре мясо к знакомым овощам."],
  ["19–22 день","Фрукты","Фрукт можно предложить отдельно или вместе со знакомой кашей."],
  ["23–26 день","Расширяем разнообразие","Новые вкусы и постепенно более разнообразная текстура."],
  ["27–30 день","Закрепляем рацион","Собираем удобный семейный ритм из уже знакомых продуктов."]
];

function complementaryV2List(items) {
  return '<div class="comp-v2-list">'+items.map(x=>'<div class="comp-v2-list-item"><span>✓</span><p>'+x+'</p></div>').join('')+'</div>';
}
function complementaryV2Cards(items) {
  return '<div class="comp-v2-card-grid">'+items.map(x=>'<div class="comp-v2-card"><span>'+x[0]+'</span><div><strong>'+x[1]+'</strong><p>'+x[2]+'</p></div></div>').join('')+'</div>';
}
function complementaryV2Open(topic) {
  const modal=document.getElementById("modal");
  if(!modal) return;
  const topics={
    readiness:["Когда начинать и готовность",'<p>Для большинства детей ориентир начала прикорма — около 6 месяцев. Важен не один отдельный навык, а сочетание возраста и признаков готовности.</p>'+complementaryV2List(complementaryV2Readiness)+'<div class="comp-v2-note">Если ребёнок родился раньше срока, имеет проблемы с ростом, глотанием, выраженную аллергию или другие медицинские особенности — старт лучше обсудить с педиатром.</div>'],
    first:["Первые продукты",complementaryV2Cards([["🥦","Овощи","Мягкая безопасная текстура; можно начать с кабачка, брокколи или цветной капусты."],["🥣","Каши","Подходящая по возрасту каша без добавленного сахара."],["🥩","Мясо","Важный питательный продукт; вводим в безопасной текстуре."],["🍐","Фрукты","Знакомим с разными вкусами, не превращая фруктовое пюре в обязательный десерт."]])],
    texture:["Пюре, кусочки и текстуры",'<p>Текстуру постепенно усложняем по мере навыков малыша: от мягкой размятой пищи к более неоднородной и мягким кусочкам, которые ребёнок способен безопасно брать и есть.</p><div class="comp-v2-note"><strong>Важно:</strong> рвотный рефлекс при обучении еде и истинное удушье — не одно и то же. Отдельный визуальный алгоритм безопасности добавим в этот раздел.</div>'],
    water:["Вода",'<p>С началом прикорма можно предлагать небольшие глотки воды из открытой чашки или подходящего по возрасту поильника во время еды. Не заставляем пить и не заменяем водой молочное кормление.</p><div class="comp-v2-note">Потребность меняется с возрастом, рационом, температурой и состоянием ребёнка — ориентируемся не на обязательную «норму любой ценой», а на общий рацион и состояние.</div>'],
    plan:["План первых 30 дней",'<div class="comp-v2-plan">'+complementaryV2Plan.map(x=>'<div class="comp-v2-plan-row"><b>'+x[0]+'</b><strong>'+x[1]+'</strong><p>'+x[2]+'</p></div>').join('')+'</div><div class="comp-v2-note">Это навигатор, а не обязательная схема. Новый овощ можно менять примерно каждые 1–2 дня; в один день удобнее добавлять только один новый продукт, а знакомые сочетать между собой.</div>'],
    schedule:["Как встроить в день",'<p>При 6 молочных кормлениях удобная стартовая логика может выглядеть так:</p><div class="comp-v2-schedule"><b>07:00</b><span>молочное кормление</span><b>10:30</b><span>каша + молоко/смесь по аппетиту</span><b>14:00</b><span>овощи, позже мясо + молоко/смесь по аппетиту</span><b>17:30</b><span>молочное кормление</span><b>21:00</b><span>молочное кормление</span><b>01:00</b><span>ночное кормление, если оно сохраняется</span></div><div class="comp-v2-note">Время — пример. Подстраиваем под фактический режим ребёнка, не растягивая интервалы специально ради прикорма.</div>'],
    allergens:["Аллергены",'<p>Не откладывайте распространённые пищевые аллергены только потому, что они считаются аллергенными. Вводите их по одному, в подходящей безопасной форме и небольшом количестве, когда ребёнок здоров и вы можете наблюдать за реакцией.</p>'+complementaryV2Cards([["🥚","Яйцо","Только хорошо термически обработанное, подходящей малышу текстуры."],["🥜","Арахис","Не цельные орехи и не густая ложка пасты. Используйте безопасную по консистенции форму."],["🐟","Рыба","Полностью приготовленная, тщательно проверенная на кости."],["🌾","Пшеница","Можно знакомить через подходящие по возрасту блюда с безопасной текстурой."],["🥛","Молочные продукты","Подходящие по возрасту продукты вводятся как часть прикорма; коровье молоко не должно заменять основное молочное питание до года."]])+'<div class="comp-v2-note"><strong>Если уже была выраженная реакция, диагностирована пищевая аллергия или ребёнок относится к группе высокого риска</strong> — введение аллергенов заранее обсудите с педиатром или аллергологом.</div>'],
    gagging:["Рвотный рефлекс или удушье",complementaryV2Cards([["😮","Рвотный рефлекс","Малыш может шуметь, кашлять, краснеть, выталкивать пищу языком. Это защитный механизм при обучении текстурам."],["🚨","Удушье","Ребёнок может не издавать звук и не может нормально дышать или кашлять. Это экстренная ситуация."],["📚","Подготовьтесь заранее","До начала кусочков взрослым полезно освоить актуальный алгоритм первой помощи младенцу при удушье на очном курсе или у надёжного медицинского источника."]])+'<div class="comp-v2-danger"><strong>Срочно:</strong> если ребёнок не может дышать, кашлять или издавать звуки, синеет или теряет сознание — вызывайте экстренную помощь и начинайте соответствующую возрасту первую помощь.</div>'],
    avoid:["Что нельзя или опасно",complementaryV2Cards([["🍯","Мёд до 12 месяцев","Не даём мёд ребёнку младше года."],["🥜","Цельные орехи","Опасны из-за риска удушья. Орехи дают только в безопасной по возрасту форме."],["🍇","Круглые твёрдые продукты","Цельный виноград, черри, твёрдые куски моркови и похожие продукты требуют изменения формы и текстуры."],["🧂","Лишние соль и сахар","Не добавляем их специально в еду малыша."],["🥛","Коровье молоко как основной напиток","До года не заменяем им грудное молоко или адаптированную смесь."]])],
    tracker:["Трекер продуктов",'<p>Отмечайте только то, что действительно пригодится потом: продукт, дату первого знакомства и реакцию.</p><div class="comp-v2-tracker"><label>🥦 Продукт<input id="compTrackerFood" placeholder="Например, брокколи"></label><label>📅 Дата<input id="compTrackerDate" type="date"></label><label>🙂 Реакция<select id="compTrackerReaction"><option>Без особенностей</option><option>Понравилось</option><option>Не понравилось</option><option>Нужно наблюдать</option></select></label><button type="button" onclick="complementaryV2SaveFood()">＋ Добавить продукт</button><div id="compTrackerList"></div></div>'],
    safety:["Безопасность",complementaryV2Cards(complementaryV2Safety)]
  };
  const t=topics[topic]; if(!t)return;
  modal.innerHTML='<div class="modal-content comp-v2-modal"><button class="back-button" onclick="openComplementaryV2()">← К прикорму</button><h2>'+t[0]+'</h2>'+t[1]+'<button class="sleep-v2-close-button" onclick="closeModal()">Готово</button></div>';
  modal.classList.remove("hidden");
  modal.querySelector(".modal-content").scrollTop=0;
  if(topic==="tracker") complementaryV2RenderTracker();
}

function openComplementaryV2() {
  const modal=document.getElementById("modal"); if(!modal)return;
  modal.innerHTML=`
    <div class="modal-content comp-v2-modal">
      <button class="back-button" onclick="closeModal()">← Назад</button>
      <div class="comp-v2-hero"><span>🥣</span><div><small>МАМА ЗНАЕТ · V2.0</small><h1>Прикорм без хаоса</h1><p>Пошаговый навигатор: готовность, первые продукты, текстуры, вода, безопасность и план первых 30 дней.</p></div></div>
      <div class="comp-v2-important"><strong>Главная мысль</strong><p>Прикорм — знакомство с едой и новыми навыками. Начинаем с небольших количеств, постепенно расширяем разнообразие и сохраняем молочное питание.</p></div>
      ${complementaryV2Cards(complementaryV2Basics)}
      <div class="comp-v2-infographic-section">
        <div class="comp-v2-infographic-heading"><span>🥕</span><div><small>ВИЗУАЛЬНАЯ ШПАРГАЛКА</small><strong>Текстуры и безопасная подача</strong></div></div>
        <button class="comp-v2-infographic-button" type="button" onclick="complementaryV2OpenInfographic()">
          <img src="A1581C46-3DF9-4645-A727-998B800ECE5E.png" alt="Текстуры и безопасная подача прикорма" loading="lazy">
          <span>Нажмите, чтобы увеличить</span>
        </button>
      </div>

      <div class="comp-v2-lifehacks">
        <div class="comp-v2-lifehacks-title"><span>💡</span><div><small>ЛАЙФХАКИ МАМЕ</small><strong>Мелочи, которые сильно упрощают прикорм</strong></div></div>
        <div class="comp-v2-lifehack"><span>🧊</span><div><strong>Замораживайте мини-порции</strong><p>Знакомые овощи, кашу или мясное пюре удобно заранее делить на небольшие порции. Так не приходится готовить полноценную кастрюлю ради нескольких ложек.</p></div></div>
        <div class="comp-v2-lifehack"><span>🥄</span><div><strong>Две ложки вместо одной</strong><p>Если малыш постоянно забирает ложку, дайте ему вторую безопасную ложку в руку, а второй продолжайте предлагать еду. Это часто уменьшает борьбу за прибор.</p></div></div>
        <div class="comp-v2-lifehack"><span>🧽</span><div><strong>Силиконовый коврик под стул</strong><p>Моющаяся поверхность под стульчиком заметно ускоряет уборку. В первые месяцы знакомство с едой почти неизбежно происходит не только во рту.</p></div></div>
        <div class="comp-v2-lifehack"><span>🍽️</span><div><strong>Маленькая порция сначала</strong><p>Положите немного еды, а добавку дайте позже. Так меньше выбрасывается, а большая тарелка не превращается в цель «обязательно доесть».</p></div></div>
        <div class="comp-v2-lifehack"><span>📸</span><div><strong>Фото нового продукта</strong><p>Сфотографируйте продукт или тарелку в день первого знакомства. Потом гораздо легче вспомнить, что и когда малыш уже пробовал.</p></div></div>
        <div class="comp-v2-lifehack"><span>👕</span><div><strong>Не спасайте каждую каплю</strong><p>Для очень грязных блюд иногда проще оставить малыша в подгузнике и моющемся нагруднике, если дома тепло, а после еды сразу умыть или искупать.</p></div></div>
        <div class="comp-v2-lifehack"><span>👨‍👩‍👦</span><div><strong>Ешьте рядом</strong><p>Малышу проще понимать, что делать с едой, когда он видит взрослых за столом. Совместная еда часто полезнее попыток постоянно развлекать его ложкой.</p></div></div>
        <div class="comp-v2-lifehack"><span>📝</span><div><strong>Записывайте только новое</strong><p>Не нужно вести огромный дневник каждого грамма. Для старта достаточно отмечать новый продукт, дату и необычную реакцию — именно это потом действительно удобно искать.</p></div></div>
      </div>

      <div class="comp-v2-menu">
        <button onclick="complementaryV2Open('readiness')"><span>👶</span><div><strong>Когда начинать</strong><small>Признаки готовности</small></div><b>›</b></button>
        <button onclick="complementaryV2Open('first')"><span>🥦</span><div><strong>Первые продукты</strong><small>Овощи, каши, мясо, фрукты</small></div><b>›</b></button>
        <button onclick="complementaryV2Open('texture')"><span>🥄</span><div><strong>Пюре и кусочки</strong><small>Как менять текстуру</small></div><b>›</b></button>
        <button onclick="complementaryV2Open('water')"><span>💧</span><div><strong>Вода</strong><small>Когда и как предлагать</small></div><b>›</b></button>
        <button onclick="complementaryV2Open('plan')"><span>📅</span><div><strong>Первые 30 дней</strong><small>Готовый пошаговый план</small></div><b>›</b></button>
        <button onclick="complementaryV2Open('schedule')"><span>⏰</span><div><strong>Прикорм в режиме дня</strong><small>Пример для 6 кормлений</small></div><b>›</b></button>
        <button onclick="complementaryV2Open('allergens')"><span>🥚</span><div><strong>Аллергены</strong><small>Как знакомить безопаснее</small></div><b>›</b></button>
        <button onclick="complementaryV2Open('gagging')"><span>😮</span><div><strong>Рвотный рефлекс vs удушье</strong><small>Что важно различать</small></div><b>›</b></button>
        <button onclick="complementaryV2Open('avoid')"><span>⛔</span><div><strong>Что нельзя и опасно</strong><small>Короткая шпаргалка</small></div><b>›</b></button>
        <button onclick="complementaryV2Open('tracker')"><span>✅</span><div><strong>Трекер продуктов</strong><small>Что уже попробовал малыш</small></div><b>›</b></button>
        <button onclick="complementaryV2Open('safety')"><span>🛡️</span><div><strong>Безопасность</strong><small>Что важно знать до первой ложки</small></div><b>›</b></button>
      </div>
      <div class="comp-v2-coming"><strong>Дальше в этом же разделе</strong><p>Добавим визуальный гид по безопасной подаче продуктов, аллергенам и первой помощи при удушье, а также персональный трекер введённых продуктов.</p></div>
      <button class="sleep-v2-close-button" onclick="closeModal()">Готово</button>
    </div>`;
  modal.classList.remove("hidden");
  modal.querySelector(".modal-content").scrollTop=0;
}


function complementaryV2SaveFood() {
  const food=document.getElementById("compTrackerFood");
  const date=document.getElementById("compTrackerDate");
  const reaction=document.getElementById("compTrackerReaction");
  if(!food || !food.value.trim()) return;
  const items=JSON.parse(localStorage.getItem("mamaZnaetComplementaryFoods")||"[]");
  items.unshift({food:food.value.trim(),date:date&&date.value?date.value:new Date().toISOString().slice(0,10),reaction:reaction?reaction.value:"Без особенностей"});
  localStorage.setItem("mamaZnaetComplementaryFoods",JSON.stringify(items.slice(0,100)));
  food.value="";
  complementaryV2RenderTracker();
}
function complementaryV2RenderTracker() {
  const box=document.getElementById("compTrackerList"); if(!box)return;
  const items=JSON.parse(localStorage.getItem("mamaZnaetComplementaryFoods")||"[]");
  box.innerHTML=items.length?items.map((x,i)=>'<div class="comp-v2-tracker-item"><div><strong>'+sleepV2Escape(x.food)+'</strong><small>'+sleepV2Escape(x.date)+' · '+sleepV2Escape(x.reaction)+'</small></div><button onclick="complementaryV2DeleteFood('+i+')" aria-label="Удалить">×</button></div>').join(''):'<div class="comp-v2-tracker-empty">Пока ничего не добавлено.</div>';
}
function complementaryV2DeleteFood(i) {
  const items=JSON.parse(localStorage.getItem("mamaZnaetComplementaryFoods")||"[]"); items.splice(i,1);
  localStorage.setItem("mamaZnaetComplementaryFoods",JSON.stringify(items)); complementaryV2RenderTracker();
}


function complementaryV2OpenInfographic() {
  const overlay=document.createElement("div");
  overlay.className="comp-v2-infographic-overlay";
  overlay.innerHTML='<button class="comp-v2-infographic-close" type="button" aria-label="Закрыть">×</button><img src="A1581C46-3DF9-4645-A727-998B800ECE5E.png" alt="Текстуры и безопасная подача прикорма">';
  overlay.addEventListener("click",event=>{
    if(event.target===overlay || event.target.closest(".comp-v2-infographic-close")) overlay.remove();
  });
  document.body.appendChild(overlay);
}
