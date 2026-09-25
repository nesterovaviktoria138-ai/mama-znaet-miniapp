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

function openSection(sectionName) {    // ===== РАЗВИТИЕ: 0–1 МЕСЯЦ =====

    if (sectionName === "development" && index === 0) {

        modalBody.innerHTML = `

            <span class="age-badge">
                🌱 РАЗВИТИЕ • 0–1 МЕСЯЦ
            </span>

            <h2>
                Первый месяц жизни малыша
            </h2>

            <p>
                Первый месяц — время адаптации к жизни вне маминого
                живота. Большую часть суток малыш спит, ест и постепенно
                учится реагировать на окружающий мир.
            </p>


            <div class="info-box">

                <strong>👶 Что обычно умеет малыш</strong>

                <p>
                    • двигает ручками и ножками;<br><br>

                    • ненадолго приподнимает голову, когда лежит
                    на животе;<br><br>

                    • поворачивает голову в стороны;<br><br>

                    • реагирует на громкие звуки;<br><br>

                    • рассматривает лицо взрослого с близкого
                    расстояния;<br><br>

                    • успокаивается от голоса, прикосновения
                    или укачивания.
                </p>

            </div>


            <div class="info-box">

                <strong>💪 Движения</strong>

                <p>
                    Движения новорождённого пока во многом
                    рефлекторные и могут выглядеть резкими
                    и нескоординированными.
                </p>

                <p>
                    На животе малыш может на несколько секунд
                    поднять или повернуть голову.
                </p>

            </div>


            <div class="info-box">

                <strong>👀 Зрение и внимание</strong>

                <p>
                    Новорождённому проще рассматривать предметы
                    и лица, находящиеся близко.
                </p>

                <p>
                    Особенно интересны лицо взрослого и
                    контрастные изображения.
                </p>

            </div>


            <div class="info-box">

                <strong>👂 Слух и общение</strong>

                <p>
                    Малыш реагирует на звуки и постепенно начинает
                    узнавать знакомые голоса.
                </p>

                <p>
                    Плач в этом возрасте — главный способ сообщить
                    о голоде, усталости, дискомфорте или потребности
                    в контакте.
                </p>

            </div>


            <div class="info-box">

                <strong>🧸 Как заниматься с малышом</strong>

                <p>
                    ✓ разговаривай с ним спокойным голосом;<br><br>

                    ✓ показывай лицо и простые контрастные картинки;<br><br>

                    ✓ выкладывай на живот во время бодрствования
                    короткими подходами под постоянным наблюдением;<br><br>

                    ✓ меняй положение малыша на руках;<br><br>

                    ✓ давай ему свободно двигать руками и ногами.
                </p>

            </div>


            <div class="info-box">

                <strong>⏱️ Важно помнить</strong>

                <p>
                    Развитие не происходит строго по календарю.
                    Один ребёнок приобретает навык немного раньше,
                    другой — позже.
                </p>

                <p>
                    Смотри прежде всего на общую динамику развития,
                    активность малыша и появление новых навыков.
                </p>

            </div>


            <div class="info-box">

                <strong>🩺 Что обсудить с врачом</strong>

                <p>
                    Обратись за медицинской помощью, если тебя
                    беспокоит состояние малыша или ты замечаешь
                    необычное изменение его поведения.
                </p>

                <p>
                    В частности, стоит обсудить с педиатром отсутствие
                    реакции на громкие звуки или выраженную необычную
                    вялость.
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
