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
