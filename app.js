/* =========================================
   МАМА ЗНАЕТ
   app.js
   ========================================= */

/* ---------- TELEGRAM ---------- */

const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}


/* ---------- ЭЛЕМЕНТЫ ---------- */

const screen = document.getElementById("screen");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");


/* ---------- ДАННЫЕ ---------- */

let baby = JSON.parse(
    localStorage.getItem("baby") || "null"
);

let favoritesList = JSON.parse(
    localStorage.getItem("favorites") || "[]"
);

let logs = JSON.parse(
    localStorage.getItem("logs") || "[]"
);


/* ---------- СОХРАНЕНИЕ ---------- */

function saveData() {

    localStorage.setItem(
        "baby",
        JSON.stringify(baby)
    );

    localStorage.setItem(
        "favorites",
        JSON.stringify(favoritesList)
    );

    localStorage.setItem(
        "logs",
        JSON.stringify(logs)
    );
}


/* =========================================
   РАЗДЕЛЫ
   ========================================= */

const sections = {

    development: {
        icon: "🌱",
        title: "Развитие малыша",
        description:
            "Навыки и развитие малыша от рождения до года.",

        items: [
            "0–1 месяц",
            "1–2 месяца",
            "2–3 месяца",
            "3–4 месяца",
            "4–5 месяцев",
            "5–6 месяцев",
            "6–7 месяцев",
            "7–8 месяцев",
            "8–9 месяцев",
            "9–10 месяцев",
            "10–11 месяцев",
            "11–12 месяцев"
        ]
    },


    feeding: {
        icon: "🍼",
        title: "Кормление",
        description:
            "Грудное, искусственное и смешанное вскармливание.",

        items: [
            "Грудное вскармливание",
            "Искусственное вскармливание",
            "Смешанное вскармливание",
            "Сколько должен есть малыш",
            "Сигналы голода",
            "Сигналы насыщения",
            "Срыгивания",
            "Газики и колики"
        ]
    },


    sleep: {
        icon: "🌙",
        title: "Сон малыша",
        description:
            "Сон, режим и бодрствование от рождения до года.",

        items: [
            "Нормы сна по возрасту",
            "Окна бодрствования",
            "Дневной сон",
            "Ночной сон",
            "Ранние пробуждения",
            "Короткие дневные сны",
            "Регресс сна",
            "Как помочь малышу уснуть"
        ]
    },


    health: {
        icon: "🩺",
        title: "Здоровье",
        description:
            "Частые симптомы и ориентиры для родителей.",

        items: [
            "Температура",
            "Насморк",
            "Кашель",
            "Срыгивания и рвота",
            "Стул малыша",
            "Кожа и высыпания",
            "Прорезывание зубов",
            "Когда обращаться к врачу"
        ]
    },


    complementary: {
        icon: "🥣",
        title: "Прикорм",
        description:
            "Понятное введение прикорма шаг за шагом.",

        items: [
            "Когда начинать",
            "Признаки готовности",
            "Первые продукты",
            "Овощи",
            "Каши",
            "Мясо",
            "Фрукты",
            "Аллергены",
            "Вода",
            "Размер порций",
            "Пример меню"
        ]
    },


    care: {
        icon: "🛁",
        title: "Уход за малышом",
        description:
            "Ежедневный уход и гигиена.",

        items: [
            "Купание",
            "Уход за кожей",
            "Опрелости",
            "Подгузники",
            "Уход за ногтями",
            "Уход за носиком",
            "Уход за ушами",
            "Одежда по погоде",
            "Прогулки"
        ]
    },


    postpartum: {
        icon: "🌸",
        title: "Восстановление после родов",
        description:
            "Бережное восстановление мамы после рождения малыша.",

        items: [
            "Первые недели после родов",
            "Послеродовые выделения",
            "Тазовое дно",
            "Живот после родов",
            "Возвращение к нагрузкам",
            "Питание и восстановление",
            "Сон и отдых",
            "Когда обратиться к врачу"
        ]
    },


    cesarean: {
        icon: "🤍",
        title: "Восстановление после КС",
        description:
            "Восстановление после кесарева сечения.",

        items: [
            "Первые дни после КС",
            "Уход за швом",
            "Что нельзя после операции",
            "Подъём тяжестей",
            "Движение и прогулки",
            "Живот после КС",
            "Возвращение к тренировкам",
            "Когда нужен врач"
        ]
    },


    breastfeeding: {
        icon: "🤱",
        title: "Грудное вскармливание",
        description:
            "Основы грудного вскармливания.",

        items: [
            "Правильное прикладывание",
            "Позы для кормления",
            "Как понять, хватает ли молока",
            "Сцеживание",
            "Хранение молока",
            "Лактация",
            "Нагрубание груди",
            "Трещины сосков",
            "Завершение ГВ"
        ]
    }
}; 

const developmentArticles = {

    1: {
        age: "1–2 МЕСЯЦА",
        title: "Второй месяц жизни малыша",

        intro:
            "Малыш становится более внимательным к окружающему миру. Периоды бодрствования постепенно становятся активнее, а общение со взрослыми — интереснее.",

        skills: `
            • чаще рассматривает лицо взрослого;<br><br>
            • может ненадолго удерживать голову;<br><br>
            • активнее двигает ручками и ножками;<br><br>
            • реагирует на голос и знакомые звуки;<br><br>
            • может начинать улыбаться в ответ на общение.
        `,

        movement: `
            На животе малыш постепенно учится лучше поднимать
            и удерживать голову. Движения всё ещё могут быть
            резкими и не очень координированными.
        `,

        communication: `
            Разговаривай с малышом, улыбайся ему и отвечай
            на его звуки. Такое простое общение уже помогает
            развитию внимания и взаимодействия.
        `,

        games: `
            ✓ выкладывай на живот во время бодрствования;<br><br>
            ✓ показывай лицо и контрастные картинки;<br><br>
            ✓ медленно перемещай игрушку перед глазами;<br><br>
            ✓ разговаривай и пой спокойные песенки.
        `,

        important: `
            Навыки появляются постепенно, и сроки могут отличаться.
            Сравнивать малыша лучше прежде всего с ним самим,
            а не с другими детьми.
        `
    },


    2: {
        age: "2–3 МЕСЯЦА",
        title: "Третий месяц жизни малыша",

        intro:
            "Малыш становится заметно активнее: дольше наблюдает за людьми и предметами, больше двигается и начинает активнее общаться.",

        skills: `
            • увереннее держит голову;<br><br>
            • рассматривает свои руки;<br><br>
            • следит взглядом за движущимся предметом;<br><br>
            • улыбается в ответ на общение;<br><br>
            • может издавать первые протяжные звуки.
        `,

        movement: `
            На животе малыш может дольше удерживать голову
            и постепенно опираться на предплечья.
            Ручки всё чаще раскрываются.
        `,

        communication: `
            Появляется больше ответных улыбок и звуков.
            Малыш может оживляться, когда видит знакомого взрослого
            или слышит его голос.
        `,

        games: `
            ✓ tummy time короткими подходами;<br><br>
            ✓ безопасные игрушки перед малышом;<br><br>
            ✓ разговор лицом к лицу;<br><br>
            ✓ погремушки и разные негромкие звуки;<br><br>
            ✓ возможность свободно двигать руками и ногами.
        `,

        important: `
            Не нужно специально учить малыша сидеть или ставить
            его на ножки. Сейчас важнее свободное движение
            и игры на полу под наблюдением взрослого.
        `
    },


    3: {
        age: "3–4 МЕСЯЦА",
        title: "Четвёртый месяц жизни малыша",

        intro:
            "Малыш всё активнее изучает своё тело и окружающее пространство. Игрушки, лица и собственные руки становятся особенно интересными.",

        skills: `
            • увереннее удерживает голову;<br><br>
            • тянется руками к игрушкам;<br><br>
            • может захватывать предметы;<br><br>
            • рассматривает руки и подносит их ко рту;<br><br>
            • смеётся или активно улыбается;<br><br>
            • может начинать попытки переворота.
        `,

        movement: `
            На животе малыш всё увереннее опирается на предплечья,
            поднимает голову и верхнюю часть груди.
            Некоторые дети начинают пробовать переворачиваться.
        `,

        communication: `
            Малыш экспериментирует со звуками, улыбается,
            может смеяться и активно реагировать на общение.
        `,

        games: `
            ✓ клади игрушки немного сбоку от малыша;<br><br>
            ✓ давай безопасные игрушки для захвата;<br><br>
            ✓ чаще играйте на полу;<br><br>
            ✓ разговаривай и повторяй звуки малыша;<br><br>
            ✓ продолжай выкладывание на живот.
        `,

        important: `
            Не нужно форсировать перевороты или другие навыки.
            Лучше создать безопасное пространство, где малыш
            сможет самостоятельно тренировать движения.
        `
    }

};


/* =========================================
   ОТКРЫТИЕ РАЗДЕЛА
   ========================================= */

function openSection(sectionName) {    
    const data = sections[sectionName];

    if (!data) {
        return;
    }

    screen.innerHTML = `

        <button
            class="back-button"
            onclick="location.reload()"
        >
            ← На главную
        </button>


        <div class="content-page">

            <span class="age-badge">
                МАМА ЗНАЕТ
            </span>

            <h1>
                ${data.icon} ${data.title}
            </h1>

            <p>
                ${data.description}
            </p>


            <div class="checklist">

                ${data.items.map((item, index) => `

                    <button
                        class="check-item"
                        onclick="openArticle(
                            '${sectionName}',
                            ${index}
                        )"
                    >

                        <span>
                            ${item}
                        </span>

                        <strong>
                            ›
                        </strong>

                    </button>

                `).join("")}

            </div>

        </div>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   СТАТЬЯ
   ========================================= */

function openArticle(sectionName, index) {

       // ===== РАЗВИТИЕ: 0–1 МЕСЯЦ =====

    if (sectionName === "development" && index === 0) {

        modalBody.innerHTML = `

            <span class="age-badge">
                🌱 РАЗВИТИЕ • 0–1 МЕСЯЦ
            </span>

            <h2>Первый месяц жизни малыша</h2>

            <p>
                Первый месяц — время адаптации малыша к жизни
                вне маминого живота. Большую часть суток он спит,
                ест и постепенно знакомится с окружающим миром.
            </p>

            <div class="info-box">
                <strong>👶 Что обычно умеет малыш</strong>

                <p>
                    • двигает ручками и ножками;<br><br>
                    • поворачивает голову в стороны;<br><br>
                    • ненадолго приподнимает голову лёжа на животе;<br><br>
                    • реагирует на громкие звуки;<br><br>
                    • рассматривает лицо взрослого с близкого расстояния;<br><br>
                    • может успокаиваться от голоса, прикосновения
                    или укачивания.
                </p>
            </div>

            <div class="info-box">
                <strong>💪 Движения</strong>

                <p>
                    Движения новорождённого пока во многом
                    рефлекторные. Они могут выглядеть резкими
                    и нескоординированными.
                </p>

                <p>
                    Во время бодрствования на животе малыш может
                    на несколько секунд поднять или повернуть голову.
                </p>
            </div>

            <div class="info-box">
                <strong>👀 Зрение и внимание</strong>

                <p>
                    Малышу легче рассматривать лица и предметы,
                    которые находятся близко. Его внимание могут
                    привлекать лица и контрастные изображения.
                </p>
            </div>

            <div class="info-box">
                <strong>👂 Слух и общение</strong>

                <p>
                    Малыш реагирует на звуки и постепенно знакомится
                    с голосами близких.
                </p>

                <p>
                    Плач — один из основных способов сообщить
                    о голоде, усталости, дискомфорте или потребности
                    в контакте.
                </p>
            </div>

            <div class="info-box">
                <strong>🧸 Игры и занятия</strong>

                <p>
                    ✓ разговаривай с малышом спокойным голосом;<br><br>
                    ✓ показывай ему своё лицо;<br><br>
                    ✓ используй простые контрастные картинки;<br><br>
                    ✓ давай свободно двигать ручками и ножками;<br><br>
                    ✓ выкладывай на живот во время бодрствования
                    короткими подходами и только под наблюдением.
                </p>
            </div>

            <div class="info-box">
                <strong>🌱 Как помочь развитию</strong>

                <p>
                    В этом возрасте малышу не нужны сложные занятия.
                    Общение, прикосновения, смена положения тела,
                    спокойные звуки и возможность свободно двигаться —
                    уже важная часть знакомства с окружающим миром.
                </p>
            </div>

            <div class="info-box">
                <strong>⏱️ Важно помнить</strong>

                <p>
                    Дети развиваются в разном темпе. Возрастные
                    ориентиры не являются строгим расписанием,
                    по которому каждый навык должен появиться
                    в определённый день.
                </p>
            </div>

            <div class="info-box">
                <strong>🩺 Когда поговорить с педиатром</strong>

                <p>
                    Обсуди развитие малыша с врачом, если он
                    не реагирует на громкие звуки, выглядит необычно
                    вялым или тебя беспокоит его поведение,
                    движения либо развитие.
                </p>

                <p>
                    Потеря уже появившихся навыков в любом возрасте —
                    повод обратиться к врачу.
                </p>
            </div>

            <button
                class="btn"
                onclick="toggleFavorite(
                    'development-0',
                    'Развитие 0–1 месяц'
                )"
            >
                ${
                    favoritesList.some(
                        item => item.id === "development-0"
                    )
                    ? "❤️ В избранном"
                    : "♡ Сохранить в избранное"
                }
            </button>

            <p style="
                margin-top:15px;
                font-size:12px;
                color:#7c6e70;
            ">
                Материал носит информационный характер и не заменяет
                осмотр и рекомендации педиатра.
            </p>
        `;

        modal.classList.remove("hidden");

        return;
    } 

       // ===== РАЗВИТИЕ: 1–4 МЕСЯЦА =====

    if (
        sectionName === "development" &&
        developmentArticles[index]
    ) {

        const article = developmentArticles[index];

        modalBody.innerHTML = `

            <span class="age-badge">
                🌱 РАЗВИТИЕ • ${article.age}
            </span>

            <h2>
                ${article.title}
            </h2>

            <p>
                ${article.intro}
            </p>


            <div class="info-box">

                <strong>
                    👶 Что обычно умеет малыш
                </strong>

                <p>
                    ${article.skills}
                </p>

            </div>


            <div class="info-box">

                <strong>
                    💪 Движения
                </strong>

                <p>
                    ${article.movement}
                </p>

            </div>


            <div class="info-box">

                <strong>
                    💬 Общение и внимание
                </strong>

                <p>
                    ${article.communication}
                </p>

            </div>


            <div class="info-box">

                <strong>
                    🧸 Игры и занятия
                </strong>

                <p>
                    ${article.games}
                </p>

            </div>


            <div class="info-box">

                <strong>
                    ⏱️ Важно помнить
                </strong>

                <p>
                    ${article.important}
                </p>

            </div>


            <div class="info-box">

                <strong>
                    🩺 Когда поговорить с педиатром
                </strong>

                <p>
                    Если тебя беспокоит развитие, движения,
                    реакция малыша на звуки или общение,
                    обсуди это с педиатром.
                </p>

                <p>
                    Потеря уже появившихся навыков —
                    повод обратиться к врачу.
                </p>

            </div>


            <button
                class="btn"
                onclick="toggleFavorite(
                    'development-${index}',
                    '${article.age}'
                )"
            >
                ${
                    favoritesList.some(
                        item =>
                            item.id ===
                            "development-" + index
                    )
                    ? "❤️ В избранном"
                    : "♡ Сохранить в избранное"
                }
            </button>


            <p style="
                margin-top:15px;
                font-size:12px;
                color:#7c6e70;
            ">
                Возрастные навыки — ориентиры, а не строгие сроки.
                Материал носит информационный характер и не заменяет
                рекомендации педиатра.
            </p>

        `;

        modal.classList.remove("hidden");

        return;
    }

    const data = sections[sectionName];

    if (!data) {
        return;
    }

    const title = data.items[index];

    const id =
        sectionName + "-" + index;

    const saved =
        favoritesList.some(
            item => item.id === id
        );


    modalBody.innerHTML = `

        <span class="age-badge">
            ${data.icon} ${data.title}
        </span>

        <h2>
            ${title}
        </h2>


        <div class="info-box">

            <strong>
                Материал готовится
            </strong>

            <p>
                Здесь будет подробная,
                понятная инструкция по теме
                «${title}».
            </p>

        </div>


        <div class="info-box">

            <strong>
                Что добавим сюда
            </strong>

            <p>
                Нормы, практические рекомендации,
                фотографии, чек-листы и важные
                признаки, на которые стоит
                обратить внимание.
            </p>

        </div>


        <button
            class="btn"
            onclick="toggleFavorite(
                '${id}',
                '${escapeText(title)}'
            )"
        >

            ${
                saved
                ? "❤️ В избранном"
                : "♡ Сохранить в избранное"
            }

        </button>


        <p
            style="
                margin-top:15px;
                font-size:12px;
                color:#7c6e70;
            "
        >
            Информация носит справочный характер
            и не заменяет консультацию врача.
        </p>
    `;

    modal.classList.remove("hidden");
}


/* =========================================
   МОДАЛЬНОЕ ОКНО
   ========================================= */

function closeModal() {

    modal.classList.add("hidden");
}


/* =========================================
   ИЗБРАННОЕ
   ========================================= */

function toggleFavorite(id, title) {

    const index =
        favoritesList.findIndex(
            item => item.id === id
        );

    if (index >= 0) {

        favoritesList.splice(
            index,
            1
        );

    } else {

        favoritesList.push({
            id,
            title
        });
    }

    saveData();

    closeModal();
}


function favorites() {

    screen.innerHTML = `

        <button
            class="back-button"
            onclick="location.reload()"
        >
            ← На главную
        </button>

        <div class="content-page">

            <h1>
                ❤️ Избранное
            </h1>

            <p>
                Сохранённые материалы.
            </p>

            ${
                favoritesList.length

                ? favoritesList.map(item => `

                    <div class="info-box">
                        ${item.title}
                    </div>

                `).join("")

                : `

                    <div class="info-box">

                        Пока здесь пусто.

                        <br><br>

                        Нажимай
                        «Сохранить в избранное»
                        внутри материалов.

                    </div>
                `
            }

        </div>
    `;

    window.scrollTo(0, 0);
}


/* =========================================
   ДНЕВНИК
   ========================================= */

function diary() {

    screen.innerHTML = `

        <button
            class="back-button"
            onclick="location.reload()"
        >
            ← На главную
        </button>


        <div class="content-page">

            <h1>
                📔 Дневник малыша
            </h1>

            <p>
                Записывай важные события дня.
            </p>


            <div class="cards">

                <div
                    class="card"
                    onclick="addLog('🍼','Кормление')"
                >

                    <div class="card-icon">
                        🍼
                    </div>

                    <h3>
                        Кормление
                    </h3>

                </div>


                <div
                    class="card"
                    onclick="addLog('🌙','Сон')"
                >

                    <div class="card-icon">
                        🌙
                    </div>

                    <h3>
                        Сон
                    </h3>

                </div>


                <div
                    class="card"
                    onclick="addLog('💩','Стул')"
                >

                    <div class="card-icon">
                        💩
                    </div>

                    <h3>
                        Стул
                    </h3>

                </div>


                <div
                    class="card"
                    onclick="addLog('🌡️','Температура')"
                >

                    <div class="card-icon">
                        🌡️
                    </div>

                    <h3>
                        Температура
                    </h3>

                </div>

            </div>


            <h2 style="margin-top:25px;">
                Последние записи
            </h2>


            <div id="logList">

                ${renderLogs()}

            </div>

        </div>
    `;

    window.scrollTo(0, 0);
}


function addLog(icon, type) {

    modalBody.innerHTML = `

        <h2>
            ${icon} ${type}
        </h2>

        <div class="info-box">

            <input
                id="logText"
                placeholder="Например: 150 мл"
                style="
                    width:100%;
                    padding:14px;
                    border:1px solid #f1d9d7;
                    border-radius:12px;
                    font-size:16px;
                "
            >

        </div>

        <button
            class="btn"
            onclick="saveLog(
                '${icon}',
                '${type}'
            )"
        >
            Сохранить
        </button>
    `;

    modal.classList.remove("hidden");
}


function saveLog(icon, type) {

    const input =
        document.getElementById(
            "logText"
        );

    logs.push({

        icon,

        type,

        text:
            input.value.trim()
            || "Без заметки",

        time:
            new Date()
            .toLocaleString("ru-RU")

    });

    saveData();

    closeModal();

    diary();
}


function renderLogs() {

    if (!logs.length) {

        return `
            <div class="info-box">
                Пока нет записей.
            </div>
        `;
    }


    return logs
        .slice()
        .reverse()
        .map(item => `

            <div class="info-box">

                <strong>
                    ${item.icon}
                    ${item.type}
                </strong>

                <p>
                    ${item.text}
                </p>

                <small>
                    ${item.time}
                </small>

            </div>

        `)
        .join("");
}


/* =========================================
   ПРОФИЛЬ МАЛЫША
   ========================================= */

function profile() {

    modalBody.innerHTML = `

        <h2>
            👶 Мой малыш
        </h2>


        <div class="info-box">

            <p>
                Имя малыша
            </p>

            <input
                id="babyName"
                value="${baby?.name || ""}"
                placeholder="Имя"
                style="
                    width:100%;
                    padding:13px;
                    border:1px solid #f1d9d7;
                    border-radius:12px;
                    font-size:16px;
                "
            >

        </div>


        <div class="info-box">

            <p>
                Дата рождения
            </p>

            <input
                id="babyBirth"
                type="date"
                value="${baby?.birth || ""}"
                style="
                    width:100%;
                    padding:13px;
                    border:1px solid #f1d9d7;
                    border-radius:12px;
                    font-size:16px;
                "
            >

        </div>


        <button
            class="btn"
            onclick="saveProfile()"
        >
            Сохранить
        </button>
    `;

    modal.classList.remove("hidden");
}


function saveProfile() {

    const name =
        document
        .getElementById("babyName")
        .value
        .trim();

    const birth =
        document
        .getElementById("babyBirth")
        .value;


    baby = {
        name:
            name || "Малыш",

        birth
    };

    saveData();

    closeModal();
}


/* =========================================
   PREMIUM
   ========================================= */

function premium() {

    screen.innerHTML = `

        <button
            class="back-button"
            onclick="location.reload()"
        >
            ← На главную
        </button>


        <div class="content-page">

            <span class="age-badge">
                PREMIUM
            </span>

            <h1>
                👑 МАМА ЗНАЕТ Premium
            </h1>

            <p>
                Расширенная библиотека
                для мамы и малыша.
            </p>


            <div class="info-box">

                <strong>
                    В Premium войдут:
                </strong>

                <br>

                ✓ Полные материалы 0–12 месяцев

                <br><br>

                ✓ Чек-листы

                <br><br>

                ✓ Трекеры

                <br><br>

                ✓ Видео и инструкции

                <br><br>

                ✓ Расширенный дневник

                <br><br>

                ✓ Гайды по прикорму

                <br><br>

                ✓ Восстановление мамы

            </div>


            <button
                class="btn"
                onclick="
                    alert(
                    'Оплату подключим следующим этапом'
                    )
                "
            >
                Получить Premium
            </button>

        </div>
    `;

    window.scrollTo(0, 0);
}


/* =========================================
   ЗАЩИТА ТЕКСТА
   ========================================= */

function escapeText(text) {

    return String(text)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");
}
