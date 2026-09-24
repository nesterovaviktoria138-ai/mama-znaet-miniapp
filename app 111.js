const tg = window.Telegram?.WebApp;
if(tg){ tg.ready(); tg.expand(); }

const sections = {
  baby: [
    ["📅","Возраст и развитие","Что умеет малыш по месяцам"],
    ["🍼","Кормление","Грудное, смешанное и искусственное"],
    ["😴","Сон","Режим, окна бодрствования и укладывание"],
    ["💩","Стул и животик","Цвет, частота, газики и запоры"],
    ["🦷","Зубы","Признаки прорезывания и уход"],
    ["💉","Прививки","Календарь и подготовка к вакцинации"],
    ["🥦","Прикорм","Старт, продукты, аллергены и вода"],
    ["🧠","Развитие","Игры и навыки от 0 до 12 месяцев"],
    ["🌡️","Здоровье","Когда наблюдать, а когда обращаться к врачу"]
  ],
  feeding: [
    ["🤱","Грудное вскармливание","Прикладывание, позы и частые вопросы"],
    ["🍼","Смешанное вскармливание","Как сочетать грудь и смесь"],
    ["🥛","Искусственное вскармливание","Режим, объём и безопасное приготовление"],
    ["💧","Сцеживание и хранение","Основы обращения с грудным молоком"]
  ],
  mom: [
    ["❤️","Восстановление после родов","Что происходит с организмом в первые месяцы"],
    ["🩹","Восстановление после КС","Шов, нагрузка, движения и возвращение к активности"],
    ["🧘‍♀️","Мягкое восстановление","Дыхание, тазовое дно и постепенная нагрузка"],
    ["🥗","Питание мамы","Белок, клетчатка, вода и удобный режим"],
    ["😴","Сон и отдых","Как беречь силы в первые месяцы"],
    ["🩸","Выделения после родов","Что может быть вариантом нормы и когда нужна помощь"],
    ["🩺","Когда к врачу","Красные флаги и плановые осмотры"]
  ],
  selfcare: [
    ["🌸","Уход за собой","Кожа, волосы и тело после родов"],
    ["💆‍♀️","Тело и комфорт","Мягкий уход и возвращение к привычной жизни"],
    ["💗","Эмоциональное состояние","Поддержка, отдых и забота о себе"],
    ["👩‍❤️‍👨","Отношения","Как постепенно возвращаться к близости и общению"]
  ]
};

function home(){
  document.getElementById("screen").innerHTML = `
    <section class="hero">
      <h1>МАМА ЗНАЕТ ♥</h1>
      <p>Один навигатор для мамы и малыша — от рождения до первого года.</p>
      <div class="date">Сегодня можно открыть любой раздел и сохранить важное в избранное.</div>
    </section>

    <section class="section">
      <div class="section-title"><h2>👶 Мой малыш</h2></div>
      <div class="grid">${cards("baby")}</div>
    </section>

    <section class="section">
      <div class="section-title"><h2>🤱 Кормление</h2></div>
      <div class="grid">${cards("feeding")}</div>
    </section>

    <section class="section">
      <div class="section-title"><h2>🌷 Я — мама</h2></div>
      ${momCards("mom")}
    </section>

    <section class="section">
      <div class="section-title"><h2>🌸 Уход за собой</h2></div>
      <div class="grid">${cards("selfcare")}</div>
    </section>

    <div class="premium-box">
      <h3>⭐ Premium</h3>
      <p>Подробные чек-листы, трекеры, пошаговые планы и дополнительные материалы.</p>
      <button class="card" style="width:100%" onclick="premium()">Открыть Premium →</button>
    </div>
  `;
}
function cards(key){
  return sections[key].map((x,i)=>`<button class="card" onclick="openInfo('${key}',${i})"><div class="emoji">${x[0]}</div><strong>${x[1]}</strong><span>${x[2]}</span></button>`).join("");
}
function momCards(key){
  return sections[key].map((x,i)=>`<button class="mom-card" style="width:100%;text-align:left" onclick="openInfo('${key}',${i})"><strong>${x[0]} ${x[1]}</strong><p>${x[2]}</p></button>`).join("");
}
function openInfo(key,i){
  const x=sections[key][i];
  const safeTitle=x[1];
  document.getElementById("modalBody").innerHTML=`
    <h2>${x[0]} ${safeTitle}</h2>
    <p>${x[2]}.</p>
    <ul>
      <li>Здесь будет подробный материал по теме.</li>
      <li>Чек-листы и практические подсказки будут добавлены в следующих версиях.</li>
      <li>Медицинские рекомендации будут сопровождаться предупреждениями о необходимости обращения к врачу при тревожных симптомах.</li>
    </ul>`;
  document.getElementById("modal").classList.remove("hidden");
}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
function profile(){showSimple("👶 Профиль малыша","Здесь добавим имя, дату рождения, возраст и персональные настройки.");}
function diary(){showSimple("📔 Дневник","Здесь добавим записи о сне, кормлении, стуле, самочувствии и событиях дня.");}
function favorites(){showSimple("♡ Избранное","Здесь будут сохраняться материалы, к которым ты хочешь вернуться.");}
function premium(){showSimple("⭐ Premium","Здесь разместим платные материалы, трекеры, чек-листы и расширенные планы.");}
function showSimple(title,text){
  document.getElementById("modalBody").innerHTML=`<h2>${title}</h2><p>${text}</p>`;
  document.getElementById("modal").classList.remove("hidden");
}
home();
