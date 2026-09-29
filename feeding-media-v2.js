/* =========================================================
   МАМА ЗНАЕТ V2.0
   МЕДИАКАТАЛОГ — КОРМЛЕНИЕ
   Русскоязычные видео
   ========================================================= */

const feedingMediaV2 = {

    /* =========================
       ГРУДНОЕ ВСКАРМЛИВАНИЕ
       ========================= */

    breast: [

        {
            id: "breast-latch-moscow-2025",

            title:
                "Правильное прикладывание к груди",

            description:
                "Практическая демонстрация положения малыша и прикладывания к груди.",

            source:
                "Роды в Москве",

            year: 2025,

            time:
                "21:47",

            seconds:
                1307,

            url:
                "https://rutube.ru/video/9c6a5195a911d1c5737ba3c1a4e84ff1/",

            badge:
                "Практика",

            verified:
                "29.09.2026"
        },


        {
            id: "breast-expression-moscow-2025",

            title:
                "Ручное сцеживание",

            description:
                "Практический фрагмент о ручном сцеживании грудного молока.",

            source:
                "Роды в Москве",

            year: 2025,

            time:
                "33:58",

            seconds:
                2038,

            url:
                "https://rutube.ru/video/9c6a5195a911d1c5737ba3c1a4e84ff1/",

            badge:
                "Практика",

            verified:
                "29.09.2026"
        },


        {
            id: "breast-pump-moscow-2025",

            title:
                "Сцеживание молокоотсосом",

            description:
                "Практическая демонстрация использования молокоотсоса.",

            source:
                "Роды в Москве",

            year: 2025,

            time:
                "36:33",

            seconds:
                2193,

            url:
                "https://rutube.ru/video/9c6a5195a911d1c5737ba3c1a4e84ff1/",

            badge:
                "Практика",

            verified:
                "29.09.2026"
        }

    ],


    /* =========================
       ИСКУССТВЕННОЕ ВСКАРМЛИВАНИЕ
       ========================= */

    formula: [],


    /* =========================
       СМЕШАННОЕ ВСКАРМЛИВАНИЕ
       ========================= */

    mixed: [

        {
            id: "mixed-when-needed-2025",

            title:
                "Когда может понадобиться смешанное вскармливание",

            description:
                "Разбор ситуаций, в которых может рассматриваться докорм.",

            source:
                "Доктор Нагорская · Помощник мамы",

            year:
                2025,

            time:
                "08:52",

            seconds:
                532,

            url:
                "https://rutube.ru/video/7cf09a3b729f7f032c51ebaff27fdf35/",

            badge:
                "Разбор",

            verified:
                "29.09.2026"
        },


        {
            id: "mixed-difficulties-2025",

            title:
                "Сложности смешанного вскармливания",

            description:
                "Какие вопросы могут возникать при сочетании груди и смеси.",

            source:
                "Доктор Нагорская · Помощник мамы",

            year:
                2025,

            time:
                "10:25",

            seconds:
                625,

            url:
                "https://rutube.ru/video/7cf09a3b729f7f032c51ebaff27fdf35/",

            badge:
                "Разбор",

            verified:
                "29.09.2026"
        }

    ]


};
/* =========================================================
   БЕЗОПАСНЫЙ ВЫВОД ТЕКСТА
   ========================================================= */

function feedingMediaV2Escape(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   КАРТОЧКИ ВИДЕО
   ========================================================= */

function feedingMediaV2Render(type) {

    const items =
        feedingMediaV2[type] || [];

    if (!items.length) {
        return "";
    }


    return `

        <section class="feeding-v2-media-section">

            <div class="feeding-v2-section-head">

                <span>🎥</span>

                <div>

                    <small>
                        ВИДЕО НА РУССКОМ
                    </small>

                    <h2>
                        Посмотреть на практике
                    </h2>

                </div>

            </div>


            <div class="feeding-v2-media-list">

                ${items.map(item => `

                    <article class="feeding-v2-media-card">

                        <div class="feeding-v2-media-top">

                            <span class="feeding-v2-media-badge">
                                ${feedingMediaV2Escape(
                                    item.badge
                                )}
                            </span>

                            <span class="feeding-v2-media-time">
                                ▶ с ${feedingMediaV2Escape(
                                    item.time
                                )}
                            </span>

                        </div>


                        <h3>
                            ${feedingMediaV2Escape(
                                item.title
                            )}
                        </h3>


                        <p>
                            ${feedingMediaV2Escape(
                                item.description
                            )}
                        </p>


                        <div class="feeding-v2-media-source">

                            <span>
                                Источник:
                                ${feedingMediaV2Escape(
                                    item.source
                                )}
                            </span>

                            <span>
                                ${feedingMediaV2Escape(
                                    item.year
                                )}
                            </span>

                        </div>


                        <a
                            class="feeding-v2-media-button"

                            href="${feedingMediaV2Escape(
                                item.url
                            )}"

                            target="_blank"

                            rel="noopener noreferrer"
                        >
                            ▶ Смотреть видео · с
                            ${feedingMediaV2Escape(
                                item.time
                            )}
                        </a>


                        <small class="feeding-v2-media-checked">
                            ✓ Источник проверен
                            ${feedingMediaV2Escape(
                                item.verified
                            )}
                        </small>

                    </article>

                `).join("")}

            </div>

        </section>

    `;
}


/* =========================================================
   ЭКСПОРТ
   ========================================================= */

window.feedingMediaV2 =
    feedingMediaV2;

window.feedingMediaV2Render =
    feedingMediaV2Render;


console.log(
    "МАМА ЗНАЕТ V2.0: медиакаталог кормления загружен"
);
