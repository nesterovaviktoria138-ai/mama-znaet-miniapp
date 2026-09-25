const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand()}
let baby=JSON.parse(localStorage.getItem("baby")||"null");
let fav=JSON.parse(localStorage.getItem("fav")||"[]");
let logs=JSON.parse(localStorage.getItem("logs")||"[]");

const sections={
development:["🧠","Развитие","Навыки, движения, общение и познание.",["👀 Зрение и внимание","🤲 Руки и движения","😊 Общение","💪 Двигательное развитие"]],
sleep:["😴","Сон","Сон, пробуждения и спокойное укладывание.",["🌙 Ночной сон","☀️ Дневной сон","⏰ Время бодрствования","🫶 Засыпание на руках"]],
feeding:["🍼","Питание","Кормление, голод, насыщение и срыгивания.",["🍼 Сигналы голода","🤍 Сигналы насыщения","💧 Срыгивания","🫧 Газики"]],
stool:["💩","Стул и животик","Цвет, консистенция и изменения стула.",["🟡 Жёлтый","🟢 Зелёный","🟤 Коричневый","⚪ Очень светлый","🔴 С кровью"]],
skin:["🔴","Кожа","Визуальный справочник частых изменений кожи.",["⚪ Белые точки","🔴 Прыщики","🌡️ Потница","🩹 Опрелость","💧 Сухость"]],
massage:["🤸","Массаж","Мягкие упражнения и видео по возрасту.",["🦶 Ножки","✋ Ручки","🧸 Время на животе","🫶 Расслабляющие прикосновения"]]
};

function save(){localStorage.setItem("baby",JSON.stringify(baby));localStorage.setItem("fav",JSON.stringify(fav));localStorage.setItem("logs",JSON.stringify(logs))}
function age(d){if(!d)return"Добавьте дату рождения";let x=new Date(d+"T00:00:00"),n=new Date(),m=(n.getFullYear()-x.getFullYear())*12+n.getMonth()-x.getMonth();if(n.getDate()<x.getDate())m--;if(m<1)return Math.max(0,Math.floor((n-x)/86400000))+" дн.";return m+" мес."}
function home(){screen.innerHTML=`<section class="hero"><div class="muted">МОЙ МАЛЫШ</div><h1>${baby?.name||"Добро пожаловать"} 👶</h1><div class="muted">${age(baby?.birth)}</div><button class="secondary" onclick="profile()">${baby?"Изменить профиль":"Добавить малыша →"}</button></section><h3>Что вас интересует?</h3><div class="grid">${Object.entries(sections).map(([k,v])=>`<button class="card" onclick="section('${k}')"><div class="ico">${v[0]}</div><b>${v[1]}</b><p>${v[2]}</p></button>`).join("")}</div><button class="alert" onclick="doctor()">🚨 <b>Когда обратиться к врачу</b><div class="muted">Тревожные симптомы и важные ориентиры.</div></button>`}
function section(k){let v=sections[k];screen.innerHTML=`<button class="back" onclick="home()">← Назад</button><div class="title">${v[0]} ${v[1]}</div><p class="muted">${v[2]}</p>${v[3].map((x,i)=>`<button class="list" onclick="article('${k}',${i})"><span>${x}</span><b>›</b></button>`).join("")}`}
function article(k,i){let v=sections[k],title=v[3][i].replace(/^\\S+ /,""),texts={
"Зелёный":"Зелёный оттенок сам по себе не обязательно означает заболевание. Оценивайте его вместе с самочувствием ребёнка, питанием и другими симптомами.",
"Очень светлый":"Белый, серый или практически обесцвеченный стул — повод обратиться к врачу.",
"С кровью":"Кровь в подгузнике нельзя автоматически считать нормой. При повторении или плохом самочувствии нужна медицинская оценка.",
"Срыгивания":"Небольшие срыгивания часто встречаются у младенцев. Важно отличать их от активной рвоты.",
"Сигналы голода":"К ранним сигналам голода относятся поиск ртом, поворот головы, облизывание губ и повышение активности.",
"Время бодрствования":"Ориентиры полезны, но не должны превращаться в жёсткое расписание. Учитывайте возраст и сигналы усталости.",
"Время на животе":"Короткие периоды на животе во время бодрствования помогают двигательной активности. Ребёнок должен быть под наблюдением."
}[title]||"Здесь будет расширенный материал с текстом, иллюстрациями, видео и блоком «Когда обратиться к врачу».";openModal(`<div class="title">${v[3][i]}</div><div class="box">${texts}</div><button class="primary" onclick="toggleFav('${k}:${i}','${title}')">${fav.some(x=>x.id==k+':'+i)?"♥ В избранном":"♡ Сохранить"}</button><p class="muted">Информация не заменяет индивидуальную медицинскую консультацию.</p>`)}
function toggleFav(id,title){let i=fav.findIndex(x=>x.id===id);if(i>=0)fav.splice(i,1);else fav.push({id,title});save();closeModal()}
function doctor(){screen.innerHTML=`<button class="back" onclick="home()">← Назад</button><div class="title">🚨 Когда к врачу</div><div class="box"><b>🚑 Срочно</b><br>Выраженное затруднение дыхания, посинение/серый цвет кожи или губ, потеря сознания, судорожный эпизод или ребёнка трудно разбудить.</div><div class="box"><b>🩺 Свяжитесь с врачом</b><br>Повторная сильная рвота, кровь в стуле, необычно светлый стул, выраженное ухудшение питания или другие новые симптомы.</div><div class="box"><b>🌡️ Температура</b><br>У младенца младше 3 месяцев температура 38,0 °C и выше требует срочной медицинской оценки.</div>`}
function diary(){screen.innerHTML=`<div class="title">📔 Дневник</div><p class="muted">Записывайте события дня.</p><div class="grid"><button class="card" onclick="addLog('🍼','Кормление')"><div class="ico">🍼</div><b>Кормление</b></button><button class="card" onclick="addLog('😴','Сон')"><div class="ico">😴</div><b>Сон</b></button><button class="card" onclick="addLog('💩','Стул')"><div class="ico">💩</div><b>Стул</b></button><button class="card" onclick="addLog('🌡️','Температура')"><div class="ico">🌡️</div><b>Температура</b></button></div><h3>Последние записи</h3>${logs.slice().reverse().map(x=>`<div class="box"><b>${x.icon} ${x.type}</b><br>${x.text}<br><span class="muted">${x.time}</span></div>`).join("")||'<div class="box">Пока нет записей.</div>'}`}
function addLog(icon,type){openModal(`<div class="title">${icon} ${type}</div><div class="field"><label>Заметка</label><input id="logText" placeholder="Например: 150 мл"></div><button class="primary" onclick="saveLog('${icon}','${type}')">Сохранить</button>`)}
function saveLog(icon,type){logs.push({icon,type,text:document.getElementById("logText").value||"Без заметки",time:new Date().toLocaleString("ru-RU")});save();closeModal();diary()}
function favorites(){screen.innerHTML=`<div class="title">❤️ Избранное</div>${fav.map(x=>`<div class="list"><span>❤️ ${x.title}</span></div>`).join("")||'<div class="box">Сохранённых материалов пока нет.</div>'}`}
function premium(){screen.innerHTML=`<section class="premium"><div class="title">⭐ Premium</div><p>Полная библиотека «Мама знает».</p><div class="price">399 ⭐ <small>/ месяц</small></div><ul><li>0–12 месяцев</li><li>Полный справочник стула</li><li>Справочник кожи</li><li>Видео массажа</li><li>Прикорм</li><li>Расширенный дневник</li></ul><button class="primary" onclick="alert('Следующий этап — подключение серверной оплаты Telegram Stars.')">Получить Premium</button></section>`}
function profile(){openModal(`<div class="title">👶 Мой малыш</div><div class="field"><label>Имя</label><input id="bn" value="${baby?.name||""}"></div><div class="field"><label>Дата рождения</label><input id="bd" type="date" value="${baby?.birth||""}"></div><button class="primary" onclick="saveProfile()">Сохранить</button>`)}
function saveProfile(){let name=document.getElementById("bn").value.trim()||"Малыш",birth=document.getElementById("bd").value;if(!birth)return alert("Укажите дату рождения");baby={name,birth};save();closeModal();home()}
function openModal(x){modalBody.innerHTML=x;modal.classList.remove("hidden")}function closeModal(){modal.classList.add("hidden")}
home();
// ===== НОВАЯ ГЛАВНАЯ: ПЕРЕХОДЫ В РАЗДЕЛЫ =====

function openSection(sectionName) {

    const oldSections = {
        development: "development",
        feeding: "feeding",
        sleep: "sleep"
    };

    // Раздел уже есть во второй версии
    if (oldSections[sectionName]) {
        section(oldSections[sectionName]);
        window.scrollTo(0, 0);
        return;
    }

    // Новые разделы — будем наполнять дальше
    const titles = {
        health: "🩺 Здоровье малыша",
        complementary: "🥣 Прикорм",
        care: "🛁 Уход за малышом",
        postpartum: "🌸 Восстановление после родов",
        cesarean: "🤍 Восстановление после кесарева",
        breastfeeding: "🤱 Грудное вскармливание"
    };

    const title = titles[sectionName] || "Раздел";

    screen.innerHTML = `
        <button class="back" onclick="home()">← Назад</button>

        <div class="title">${title}</div>

        <div class="box">
            <p>
                Этот раздел мы сейчас наполним подробными
                материалами, инструкциями и чек-листами.
            </p>
        </div>
    `;

    window.scrollTo(0, 0);
}
