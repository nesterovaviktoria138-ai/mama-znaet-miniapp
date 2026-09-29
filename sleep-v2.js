/* =========================================================
   МАМА ЗНАЕТ V2.0
   МОДУЛЬ: СОН МАЛЫША 0–12 МЕСЯЦЕВ
   ========================================================= */

const sleepV2 = {

    0: {
        age: "0–3 месяца",
        icon: "🌙",
        title: "Сон новорождённого",
        subtitle: "Ритм сна только формируется",

        intro:
            "В первые месяцы сон ещё распределён по суткам неравномерно. Частые пробуждения для кормления ожидаемы, а устойчивого режима может пока не быть.",

        naps:
            "Дневной сон обычно состоит из нескольких эпизодов разной продолжительности.",

        night:
            "Ночной сон постепенно начинает отличаться от дневного, но длительные непрерывные отрезки сна пока не обязательны.",

        rhythm: [
            "Ориентируйтесь на состояние малыша, а не на строгие часы",
            "Днём сохраняйте обычный свет и бытовые звуки",
            "Ночью используйте приглушённый свет и спокойное общение",
            "Не старайтесь искусственно растягивать бодрствование ради лучшего ночного сна"
        ],

        signs: [
            "Отводит взгляд",
            "Зевает",
            "Становится менее активным",
            "Начинает капризничать",
            "Теряет интерес к общению"
        ],

        common: [
            "Частые ночные пробуждения",
            "Сон преимущественно на руках",
            "Пробуждение после перекладывания",
            "Очень разная продолжительность дневных снов"
        ],

        today:
            "Попробуйте вечером сделать обстановку спокойнее: приглушить свет, уменьшить активность и повторять одну простую последовательность действий перед ночным сном."
    },


    1: {
        age: "3–4 месяца",
        icon: "✨",
        title: "Сон начинает меняться",
        subtitle: "Появляется более заметный ритм дня",

        intro:
            "Примерно в этом возрасте структура сна постепенно становится более зрелой. Из-за этого родители иногда замечают более частые пробуждения или короткие дневные сны.",

        naps:
            "Дневных снов всё ещё несколько. Их продолжительность может сильно различаться даже у одного ребёнка.",

        night:
            "Первый ночной отрезок у некоторых детей становится длиннее, но ночные пробуждения всё ещё обычны.",

        rhythm: [
            "Начинайте день примерно в похожее время",
            "Следите за признаками усталости",
            "Не растягивайте бодрствование специально",
            "Создайте короткий повторяющийся ритуал перед сном"
        ],

        signs: [
            "Трёт лицо или глаза",
            "Отворачивается от игрушек",
            "Становится капризнее",
            "Теряет интерес к игре",
            "Просится на руки"
        ],

        common: [
            "Дневные сны по 30–40 минут",
            "Пробуждение вскоре после укладывания",
            "Более частые ночные пробуждения",
            "Сложное вечернее укладывание"
        ],

        today:
            "Выберите 2–3 спокойных действия перед ночным сном и повторяйте их в одинаковой последовательности."
    },


    2: {
        age: "4–6 месяцев",
        icon: "😴",
        title: "Формируется более понятный режим",
        subtitle: "Сон постепенно становится предсказуемее",

        intro:
            "В этом возрасте у многих детей день становится более структурированным. При этом короткие дневные сны и ночные пробуждения всё ещё могут встречаться.",

        naps:
            "Количество и продолжительность дневных снов индивидуальны. Важнее смотреть на суммарный сон, самочувствие малыша и структуру всего дня.",

        night:
            "Некоторые дети спят длинными отрезками, другие продолжают просыпаться ночью. Само по себе пробуждение не означает нарушение сна.",

        rhythm: [
            "Сохраняйте относительно стабильное начало дня",
            "Оценивайте весь день, а не один короткий сон",
            "Перед ночным сном снижайте активность",
            "Корректируйте режим постепенно, а не резко"
        ],

        signs: [
            "Становится менее активным",
            "Теряет интерес к игрушкам",
            "Начинает хныкать",
            "Трёт глаза или лицо",
            "Хочет больше контакта"
        ],

        common: [
            "Короткие дневные сны",
            "Ранний подъём",
            "Частые пробуждения ночью",
            "Засыпание только определённым способом",
            "Пробуждение через 5–20 минут после перекладывания"
        ],

        today:
            "Запишите сегодня фактическое время подъёма, все дневные сны и ночное укладывание. Эти данные потом сможет использовать анализатор сна."
    },
      3: {
        age: "6–8 месяцев",
        icon: "🌜",
        title: "День становится структурнее",
        subtitle: "Режим постепенно приобретает более понятные очертания",

        intro:
            "В этом возрасте сон часто становится более предсказуемым, но новые двигательные навыки, впечатления и изменения режима могут временно влиять на укладывания и ночные пробуждения.",

        naps:
            "У многих малышей сохраняется несколько дневных снов. Переход к меньшему количеству снов происходит постепенно и не должен определяться только возрастом.",

        night:
            "Ночные пробуждения всё ещё возможны. Важно оценивать не только их количество, но и весь режим: дневной сон, время подъёма, последнее бодрствование и ночное укладывание.",

        rhythm: [
            "Старайтесь сохранять относительно стабильное время начала дня",
            "Не сокращайте дневной сон специально ради ночи",
            "Следите за поведением малыша к концу бодрствования",
            "При изменении режима корректируйте время постепенно"
        ],

        signs: [
            "Теряет интерес к игре",
            "Становится менее активным",
            "Начинает капризничать",
            "Просится на руки",
            "Трёт лицо или глаза"
        ],

        common: [
            "Ранний подъём",
            "Короткий последний дневной сон",
            "Сопротивление одному из дневных снов",
            "Частые ночные пробуждения",
            "Сложности после освоения новых движений"
        ],

        today:
            "Посмотрите не только на время укладывания, но и на весь сегодняшний день: подъём, продолжительность дневных снов и состояние малыша перед ночью."
    },


    4: {
        age: "8–10 месяцев",
        icon: "🌙",
        title: "Сон и новые навыки",
        subtitle: "Активное развитие может отражаться на сне",

        intro:
            "Ползание, вставание, активное общение и множество новых впечатлений иногда временно меняют сон. Это не означает, что режим обязательно нужно полностью перестраивать.",

        naps:
            "У части детей режим дневных снов становится более устойчивым. Другим всё ещё требуется дополнительный короткий сон в некоторые дни.",

        night:
            "Малыш может чаще искать присутствие взрослого ночью. Также возможны временные изменения сна на фоне новых навыков, болезни или дискомфорта.",

        rhythm: [
            "Сохраняйте понятный ритуал перед ночным сном",
            "Не убирайте дневной сон только из-за нескольких отказов",
            "Оценивайте изменения в течение нескольких дней",
            "Оставляйте перед ночью время для спокойной активности"
        ],

        signs: [
            "Становится раздражительным",
            "Снижает активность",
            "Хочет больше контакта",
            "Теряет интерес к игре",
            "Начинает хныкать"
        ],

        common: [
            "Вставание в кроватке вместо сна",
            "Отказ от одного дневного сна",
            "Ранний подъём",
            "Ночные пробуждения",
            "Протест против укладывания"
        ],

        today:
            "Если малыш недавно освоил новый двигательный навык, дайте ему достаточно возможности практиковать его днём в безопасном пространстве."
    },


    5: {
        age: "10–12 месяцев",
        icon: "⭐",
        title: "Более устойчивый ритм",
        subtitle: "Но потребность во сне всё ещё индивидуальна",

        intro:
            "Ближе к году режим многих детей становится понятнее, однако различия между малышами остаются значительными. Один неудачный день ещё не означает, что режим нужно менять.",

        naps:
            "Дневной сон остаётся важной частью суточного сна. Не стоит торопить переход к одному дневному сну только потому, что ребёнку скоро год.",

        night:
            "Ночные пробуждения могут сохраняться. На сон влияют режим, развитие, дискомфорт, болезнь, окружающая среда и индивидуальные особенности ребёнка.",

        rhythm: [
            "Сохраняйте предсказуемый ритуал",
            "Не меняйте режим после одного необычного дня",
            "Смотрите на настроение и качество бодрствования",
            "Изменяйте расписание небольшими шагами"
        ],

        signs: [
            "Становится менее активным",
            "Начинает раздражаться",
            "Теряет интерес к игре",
            "Ищет больше контакта",
            "Зевает или трёт глаза"
        ],

        common: [
            "Ранние подъёмы",
            "Протест перед дневным сном",
            "Долгое вечернее укладывание",
            "Ночные пробуждения",
            "Попытка слишком раннего перехода на один сон"
        ],

        today:
            "Если режим кажется неудобным, сначала запишите сон малыша хотя бы за несколько дней. Анализировать тенденцию полезнее, чем один отдельный день."
    }

};
/* =========================================================
   МАМА ЗНАЕТ V2.0
   АНАЛИЗАТОР СНА — ОСНОВНАЯ ЛОГИКА
   ========================================================= */


/* ===== ОПРЕДЕЛЯЕМ ВОЗРАСТНУЮ ГРУППУ ===== */

function getSleepV2AgeGroup() {
    if (!baby || !baby.birth) return null;

    const birth = new Date(baby.birth + "T00:00:00");
    const today = new Date();

    if (Number.isNaN(birth.getTime())) return null;

    let months =
        (today.getFullYear() - birth.getFullYear()) * 12 +
        (today.getMonth() - birth.getMonth());

    if (today.getDate() < birth.getDate()) {
        months--;
    }

    if (months < 0) months = 0;

    if (months < 3) return 0;
    if (months < 4) return 1;
    if (months < 6) return 2;
    if (months < 8) return 3;
    if (months < 10) return 4;

    return 5;
}


/* ===== БЕЗОПАСНЫЙ ВЫВОД ТЕКСТА ===== */

function sleepV2Escape(text) {
    return String(text ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ===== ПЕРЕВОД ВРЕМЕНИ В МИНУТЫ ===== */

function sleepV2TimeToMinutes(time) {
    if (!time || !time.includes(":")) return null;

    const parts = time.split(":");
    const hours = Number(parts[0]);
    const minutes = Number(parts[1]);

    if (
        Number.isNaN(hours) ||
        Number.isNaN(minutes) ||
        hours < 0 ||
        hours > 23 ||
        minutes < 0 ||
        minutes > 59
    ) {
        return null;
    }

    return hours * 60 + minutes;
}


/* ===== РАЗНИЦА МЕЖДУ ДВУМЯ МОМЕНТАМИ ===== */

function sleepV2Duration(start, end) {
    const startMinutes = sleepV2TimeToMinutes(start);
    const endMinutes = sleepV2TimeToMinutes(end);

    if (
        startMinutes === null ||
        endMinutes === null
    ) {
        return 0;
    }

    let difference = endMinutes - startMinutes;

    if (difference < 0) {
        difference += 24 * 60;
    }

    return difference;
}


/* ===== КРАСИВЫЙ ВЫВОД ДЛИТЕЛЬНОСТИ ===== */

function sleepV2FormatMinutes(totalMinutes) {
    const minutes = Math.max(
        0,
        Math.round(Number(totalMinutes) || 0)
    );

    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;

    if (hours === 0) {
        return `${rest} мин`;
    }

    if (rest === 0) {
        return `${hours} ч`;
    }

    return `${hours} ч ${rest} мин`;
}


/* ===== СБОР ДНЕВНЫХ СНОВ ===== */

function sleepV2GetNaps() {
    const rows =
        document.querySelectorAll(".sleep-v2-nap-row");

    const naps = [];

    rows.forEach(row => {
        const start =
            row.querySelector(".sleep-v2-nap-start")?.value;

        const end =
            row.querySelector(".sleep-v2-nap-end")?.value;

        if (!start || !end) return;

        const duration =
            sleepV2Duration(start, end);

        if (duration <= 0 || duration > 300) return;

        naps.push({
            start,
            end,
            duration
        });
    });

    naps.sort((a, b) => {
        return (
            sleepV2TimeToMinutes(a.start) -
            sleepV2TimeToMinutes(b.start)
        );
    });

    return naps;
}


/* ===== СУММАРНЫЙ ДНЕВНОЙ СОН ===== */

function sleepV2TotalNapMinutes(naps) {
    return naps.reduce(
        (sum, nap) => sum + nap.duration,
        0
    );
}


/* ===== РАСЧЁТ ПОСЛЕДНЕГО БОДРСТВОВАНИЯ ===== */

function sleepV2LastWakeWindow(naps, bedtime, wakeTime) {
    if (!bedtime) return null;

    let startPoint = wakeTime;

    if (naps.length) {
        startPoint = naps[naps.length - 1].end;
    }

    if (!startPoint) return null;

    return sleepV2Duration(
        startPoint,
        bedtime
    );
}


/* ===== РАСЧЁТ НОЧНОГО ПЕРИОДА ===== */

function sleepV2NightPeriod(bedtime, wakeTime) {
    if (!bedtime || !wakeTime) return null;

    const duration =
        sleepV2Duration(bedtime, wakeTime);

    if (
        duration < 240 ||
        duration > 900
    ) {
        return null;
    }

    return duration;
}


/* ===== СОХРАНЕНИЕ ДАННЫХ АНАЛИЗАТОРА ===== */

function sleepV2SaveAnalyzerData(data) {
    try {
        localStorage.setItem(
            "sleepV2Analyzer",
            JSON.stringify(data)
        );
    } catch (error) {
        console.warn(
            "Не удалось сохранить данные анализатора сна",
            error
        );
    }
}


/* ===== ЗАГРУЗКА СОХРАНЁННЫХ ДАННЫХ ===== */

function sleepV2LoadAnalyzerData() {
    try {
        return JSON.parse(
            localStorage.getItem("sleepV2Analyzer") || "{}"
        );
    } catch (error) {
        return {};
    }
}


/* ===== ОЧИСТКА АНАЛИЗАТОРА ===== */

function sleepV2ClearAnalyzerData() {
    try {
        localStorage.removeItem(
            "sleepV2Analyzer"
        );
    } catch (error) {
        console.warn(
            "Не удалось очистить анализатор сна",
            error
        );
    }

    if (
        typeof openSleepV2Analyzer === "function"
    ) {
        openSleepV2Analyzer();
    }
} 
/* =========================================================
   АНАЛИЗАТОР СНА — ИНТЕРФЕЙС
   ========================================================= */

function openSleepV2Analyzer() {
    const saved = sleepV2LoadAnalyzerData();

    modalBody.innerHTML = `
        <div class="sleep-v2-analyzer">

            <span class="age-badge">
                ПЕРСОНАЛЬНЫЙ ИНСТРУМЕНТ
            </span>

            <h2>🌙 Анализатор сна</h2>

            <p class="sleep-v2-analyzer-intro">
                Заполните один обычный день малыша.
                Анализатор посмотрит на сон в целом и покажет,
                на какие части режима стоит обратить внимание.
            </p>


            <div class="sleep-v2-analyzer-note">
                <span>💛</span>
                <p>
                    Это не диагностика и не строгая таблица норм.
                    Мы оцениваем структуру дня и ищем возможные
                    причины сложностей со сном.
                </p>
            </div>


            <!-- ПОДЪЁМ -->

            <div class="sleep-v2-form-card">

                <span class="sleep-v2-step">
                    ШАГ 1
                </span>

                <h3>☀️ Во сколько начался день?</h3>

                <label class="sleep-v2-field">
                    <span>Утренний подъём</span>

                    <input
                        id="sleepV2Wake"
                        type="time"
                        value="${sleepV2Escape(saved.wake || "")}"
                    >
                </label>

            </div>


            <!-- ДНЕВНЫЕ СНЫ -->

            <div class="sleep-v2-form-card">

                <span class="sleep-v2-step">
                    ШАГ 2
                </span>

                <h3>😴 Дневные сны</h3>

                <p class="sleep-v2-field-help">
                    Укажите фактическое начало и окончание сна.
                    Пустые строки можно оставить незаполненными.
                </p>


                <div id="sleepV2Naps">

                    ${sleepV2NapRow(
                        1,
                        saved.naps?.[0]
                    )}

                    ${sleepV2NapRow(
                        2,
                        saved.naps?.[1]
                    )}

                    ${sleepV2NapRow(
                        3,
                        saved.naps?.[2]
                    )}

                    ${sleepV2NapRow(
                        4,
                        saved.naps?.[3]
                    )}

                    ${sleepV2NapRow(
                        5,
                        saved.naps?.[4]
                    )}

                </div>

            </div>


            <!-- НОЧНОЙ СОН -->

            <div class="sleep-v2-form-card">

                <span class="sleep-v2-step">
                    ШАГ 3
                </span>

                <h3>🌙 Ночной сон</h3>

                <label class="sleep-v2-field">

                    <span>
                        Во сколько малыш уснул на ночь?
                    </span>

                    <input
                        id="sleepV2Bedtime"
                        type="time"
                        value="${sleepV2Escape(saved.bedtime || "")}"
                    >

                </label>


                <label class="sleep-v2-field">

                    <span>
                        Сколько примерно было пробуждений?
                    </span>

                    <select id="sleepV2NightWakes">

                        ${sleepV2Option(
                            "",
                            "Выберите",
                            saved.nightWakes
                        )}

                        ${sleepV2Option(
                            "0",
                            "Не просыпался",
                            saved.nightWakes
                        )}

                        ${sleepV2Option(
                            "1",
                            "1 раз",
                            saved.nightWakes
                        )}

                        ${sleepV2Option(
                            "2",
                            "2 раза",
                            saved.nightWakes
                        )}

                        ${sleepV2Option(
                            "3",
                            "3 раза",
                            saved.nightWakes
                        )}

                        ${sleepV2Option(
                            "4",
                            "4–5 раз",
                            saved.nightWakes
                        )}

                        ${sleepV2Option(
                            "6",
                            "6 и более",
                            saved.nightWakes
                        )}

                    </select>

                </label>

            </div>


            <!-- ЗАСЫПАНИЕ -->

            <div class="sleep-v2-form-card">

                <span class="sleep-v2-step">
                    ШАГ 4
                </span>

                <h3>🤍 Как обычно засыпает?</h3>

                <label class="sleep-v2-field">

                    <select id="sleepV2FallingAsleep">

                        ${sleepV2Option(
                            "",
                            "Выберите вариант",
                            saved.fallingAsleep
                        )}

                        ${sleepV2Option(
                            "independent",
                            "В кроватке с минимальной помощью",
                            saved.fallingAsleep
                        )}

                        ${sleepV2Option(
                            "arms",
                            "На руках",
                            saved.fallingAsleep
                        )}

                        ${sleepV2Option(
                            "rocking",
                            "С укачиванием",
                            saved.fallingAsleep
                        )}

                        ${sleepV2Option(
                            "feeding",
                            "Во время кормления",
                            saved.fallingAsleep
                        )}

                        ${sleepV2Option(
                            "parent",
                            "Рядом со взрослым",
                            saved.fallingAsleep
                        )}

                        ${sleepV2Option(
                            "different",
                            "Каждый раз по-разному",
                            saved.fallingAsleep
                        )}

                    </select>

                </label>

            </div>


            <!-- ПРОБЛЕМА -->

            <div class="sleep-v2-form-card">

                <span class="sleep-v2-step">
                    ШАГ 5
                </span>

                <h3>Что беспокоит больше всего?</h3>

                <div class="sleep-v2-problems">

                    ${sleepV2ProblemButton(
                        "early",
                        "🌅",
                        "Ранний подъём",
                        saved.problem
                    )}

                    ${sleepV2ProblemButton(
                        "short",
                        "⏱",
                        "Сны 30–40 минут",
                        saved.problem
                    )}

                    ${sleepV2ProblemButton(
                        "transfer",
                        "🛏",
                        "Просыпается после перекладывания",
                        saved.problem
                    )}

                    ${sleepV2ProblemButton(
                        "night",
                        "🌙",
                        "Часто просыпается ночью",
                        saved.problem
                    )}

                    ${sleepV2ProblemButton(
                        "bedtime",
                        "😵‍💫",
                        "Долго укладывается",
                        saved.problem
                    )}

                    ${sleepV2ProblemButton(
                        "schedule",
                        "🕒",
                        "Не получается выстроить режим",
                        saved.problem
                    )}

                </div>

                <input
                    type="hidden"
                    id="sleepV2Problem"
                    value="${sleepV2Escape(saved.problem || "")}"
                >

            </div>


            <div
                id="sleepV2Validation"
                class="sleep-v2-validation"
            ></div>


            <button
                class="sleep-v2-analyze-button"
                onclick="runSleepV2Analyzer()"
            >
                ✨ Проанализировать сон
            </button>


            <button
                class="sleep-v2-clear-button"
                onclick="sleepV2ClearAnalyzerData()"
            >
                Очистить данные
            </button>


            <div class="sleep-v2-privacy">
                🔒 Данные анализатора сохраняются только
                в браузере на этом устройстве.
            </div>

        </div>
    `;

    modal.classList.remove("hidden");

    const modalContent =
        modal.querySelector(".modal-content");

    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}


/* ===== ОДНА СТРОКА ДНЕВНОГО СНА ===== */

function sleepV2NapRow(number, savedNap) {
    const start =
        savedNap?.start || "";

    const end =
        savedNap?.end || "";

    return `
        <div class="sleep-v2-nap-row">

            <div class="sleep-v2-nap-number">
                ${number}
            </div>

            <label>
                <span>Начало</span>

                <input
                    type="time"
                    class="sleep-v2-nap-start"
                    value="${sleepV2Escape(start)}"
                >
            </label>

            <span class="sleep-v2-nap-arrow">
                →
            </span>

            <label>
                <span>Конец</span>

                <input
                    type="time"
                    class="sleep-v2-nap-end"
                    value="${sleepV2Escape(end)}"
                >
            </label>

        </div>
    `;
}


/* ===== OPTION ДЛЯ SELECT ===== */

function sleepV2Option(
    value,
    label,
    selectedValue
) {
    const selected =
        String(value) === String(selectedValue ?? "")
            ? "selected"
            : "";

    return `
        <option
            value="${sleepV2Escape(value)}"
            ${selected}
        >
            ${sleepV2Escape(label)}
        </option>
    `;
}


/* ===== КНОПКА ПРОБЛЕМЫ ===== */

function sleepV2ProblemButton(
    value,
    icon,
    label,
    selected
) {
    const active =
        value === selected
            ? "active"
            : "";

    return `
        <button
            type="button"
            class="sleep-v2-problem ${active}"
            data-problem="${sleepV2Escape(value)}"
            onclick="
                selectSleepV2Problem(
                    '${sleepV2Escape(value)}',
                    this
                )
            "
        >
            <span>${icon}</span>
            <strong>
                ${sleepV2Escape(label)}
            </strong>
        </button>
    `;
}


/* ===== ВЫБОР ОСНОВНОЙ ПРОБЛЕМЫ ===== */

function selectSleepV2Problem(
    value,
    button
) {
    document
        .querySelectorAll(".sleep-v2-problem")
        .forEach(item => {
            item.classList.remove("active");
        });

    button.classList.add("active");

    const input =
        document.getElementById(
            "sleepV2Problem"
        );

    if (input) {
        input.value = value;
    }
}


/* ===== СОБИРАЕМ ДАННЫЕ ФОРМЫ ===== */

function sleepV2CollectAnalyzerData() {
    const wake =
        document.getElementById(
            "sleepV2Wake"
        )?.value || "";

    const bedtime =
        document.getElementById(
            "sleepV2Bedtime"
        )?.value || "";

    const nightWakes =
        document.getElementById(
            "sleepV2NightWakes"
        )?.value || "";

    const fallingAsleep =
        document.getElementById(
            "sleepV2FallingAsleep"
        )?.value || "";

    const problem =
        document.getElementById(
            "sleepV2Problem"
        )?.value || "";

    const naps =
        sleepV2GetNaps();

    return {
        wake,
        bedtime,
        nightWakes,
        fallingAsleep,
        problem,
        naps
    };
}


/* ===== ПРОВЕРЯЕМ ФОРМУ ===== */

function sleepV2ValidateAnalyzer(data) {
    const messages = [];

    if (!data.wake) {
        messages.push(
            "Укажите время утреннего подъёма."
        );
    }

    if (!data.bedtime) {
        messages.push(
            "Укажите время ночного засыпания."
        );
    }

    if (!data.problem) {
        messages.push(
            "Выберите, что сейчас беспокоит больше всего."
        );
    }

    return messages;
}


/* ===== ЗАПУСК АНАЛИЗА ===== */

function runSleepV2Analyzer() {
    const data =
        sleepV2CollectAnalyzerData();

    const validation =
        sleepV2ValidateAnalyzer(data);

    const validationBox =
        document.getElementById(
            "sleepV2Validation"
        );

    if (validation.length) {
        if (validationBox) {
            validationBox.innerHTML = `
                <strong>
                    Проверьте данные
                </strong>

                ${validation
                    .map(item => `
                        <p>
                            • ${sleepV2Escape(item)}
                        </p>
                    `)
                    .join("")}
            `;
        }

        return;
    }

    if (validationBox) {
        validationBox.innerHTML = "";
    }

    sleepV2SaveAnalyzerData(data);

    showSleepV2Analysis(data);
}
/* =========================================================
   АНАЛИЗАТОР СНА — ПЕРСОНАЛЬНЫЙ РЕЗУЛЬТАТ
   ========================================================= */

function showSleepV2Analysis(data) {
    const ageGroupIndex =
        getSleepV2AgeGroup();

    const ageData =
        ageGroupIndex !== null
            ? sleepV2[ageGroupIndex]
            : null;

    const totalNapMinutes =
        sleepV2TotalNapMinutes(data.naps);

    const nightPeriod =
        sleepV2NightPeriod(
            data.bedtime,
            data.wake
        );

    const lastWakeWindow =
        sleepV2LastWakeWindow(
            data.naps,
            data.bedtime,
            data.wake
        );

    const firstNap =
        data.naps.length
            ? data.naps[0]
            : null;

    const firstWakeWindow =
        firstNap
            ? sleepV2Duration(
                data.wake,
                firstNap.start
            )
            : null;

    const shortNaps =
        data.naps.filter(
            nap => nap.duration <= 45
        );

    const longNaps =
        data.naps.filter(
            nap => nap.duration >= 90
        );

    const insights = [];

    const actions = [];

    const positives = [];


    /* ===== ОБЩАЯ КАРТИНА ===== */

    if (data.naps.length) {
        positives.push(
            `Вы внесли ${data.naps.length} дневн. сна. Их общая продолжительность — ${sleepV2FormatMinutes(totalNapMinutes)}.`
        );
    }

    if (nightPeriod !== null) {
        positives.push(
            `Период от ночного засыпания до утреннего подъёма — ${sleepV2FormatMinutes(nightPeriod)}. Это именно ночной период, а не точное количество сна: пробуждения внутри него отдельно не вычитаются.`
        );
    }

    if (lastWakeWindow !== null) {
        positives.push(
            `Последний период от окончания дневного сна до ночного засыпания — ${sleepV2FormatMinutes(lastWakeWindow)}.`
        );
    }


    /* =====================================================
       РАННИЙ ПОДЪЁМ
       ===================================================== */

    if (data.problem === "early") {
        const wakeMinutes =
            sleepV2TimeToMinutes(
                data.wake
            );

        insights.push(
            "Ранний подъём редко объясняется одной причиной. На него могут влиять время ночного сна, структура дневных снов, утренний свет, привычный ритм и индивидуальная потребность малыша во сне."
        );

        if (
            wakeMinutes !== null &&
            wakeMinutes < 360
        ) {
            insights.push(
                `Подъём в ${data.wake} действительно приходится на очень раннее утро. Сначала полезно посмотреть, повторяется ли это несколько дней подряд.`
            );
        }

        if (
            nightPeriod !== null &&
            nightPeriod < 600
        ) {
            insights.push(
                "Ночной период по введённым данным получился относительно коротким. Это повод посмотреть на время ночного укладывания и то, что происходит ночью."
            );
        }

        actions.push(
            "Старайтесь не начинать активный день слишком рано: до выбранного времени подъёма сохраняйте спокойную ночную обстановку."
        );

        actions.push(
            "Проверьте затемнение комнаты ранним утром — свет может поддерживать раннее пробуждение."
        );

        actions.push(
            "Не переносите ночное укладывание резко на значительно более позднее время только ради попытки продлить утро."
        );
    }


    /* =====================================================
       КОРОТКИЕ ДНЕВНЫЕ СНЫ
       ===================================================== */

    if (data.problem === "short") {
        if (shortNaps.length) {
            insights.push(
                `В указанном дне ${shortNaps.length} дневн. сна длительностью 45 минут или меньше. Короткий сон сам по себе не означает проблему, особенно у младенцев.`
            );
        } else {
            insights.push(
                "По введённому дню дневных снов продолжительностью 45 минут или меньше не видно."
            );
        }

        insights.push(
            "Продолжительность одного дневного сна полезнее оценивать вместе с общим количеством сна, настроением малыша после пробуждения и остальной структурой дня."
        );

        actions.push(
            "Несколько дней записывайте время начала и окончания снов — один день может быть нетипичным."
        );

        actions.push(
            "Если малыш проснулся спокойным и активным, не каждый короткий сон обязательно нужно пытаться продлить."
        );

        actions.push(
            "Если короткие сны сопровождаются выраженной усталостью, посмотрите, не появляются ли признаки сонливости раньше обычного."
        );
    }


    /* =====================================================
       ПРОБУЖДЕНИЕ ПОСЛЕ ПЕРЕКЛАДЫВАНИЯ
       ===================================================== */

    if (data.problem === "transfer") {
        insights.push(
            "Пробуждение после перекладывания может быть связано со сменой условий: малыш засыпает в одном месте или положении, а затем оказывается в другом."
        );

        if (
            data.fallingAsleep === "arms" ||
            data.fallingAsleep === "rocking" ||
            data.fallingAsleep === "feeding"
        ) {
            insights.push(
                "По вашим данным малыш обычно засыпает с активной помощью взрослого. Это не является неправильным способом засыпания, но смена условий при перекладывании может быть заметна ребёнку."
            );
        }

        actions.push(
            "Перед перекладыванием заранее подготовьте безопасное место для сна, чтобы после засыпания не пришлось дополнительно менять обстановку."
        );

        actions.push(
            "Не используйте подушки, позиционеры, мягкие бортики или другие предметы для фиксации малыша."
        );

        actions.push(
            "Если хотите менять способ засыпания, делайте это постепенно, а не пытайтесь убрать всю помощь за один вечер."
        );
    }


    /* =====================================================
       ЧАСТЫЕ НОЧНЫЕ ПРОБУЖДЕНИЯ
       ===================================================== */

    if (data.problem === "night") {
        const wakes =
            Number(data.nightWakes);

        if (
            !Number.isNaN(wakes) &&
            data.nightWakes !== ""
        ) {
            insights.push(
                `Вы указали ${
                    wakes >= 6
                        ? "6 или более"
                        : data.nightWakes
                } ночных пробуждений. Само количество не позволяет определить причину, поэтому важно смотреть на возраст и весь день малыша.`
            );
        }

        insights.push(
            "Ночные пробуждения могут быть связаны не только с режимом. Голод, болезнь, дискомфорт, температура в комнате и этап развития тоже могут влиять на сон."
        );

        actions.push(
            "Сначала исключите очевидный физический дискомфорт и оцените общее состояние малыша."
        );

        actions.push(
            "Посмотрите на несколько дней подряд: время подъёма, дневные сны и ночное укладывание."
        );

        actions.push(
            "Не сокращайте резко дневной сон в надежде автоматически улучшить ночь."
        );
    }


    /* =====================================================
       ДОЛГОЕ УКЛАДЫВАНИЕ
       ===================================================== */

    if (data.problem === "bedtime") {
        insights.push(
            "Долгое укладывание может возникать по разным причинам: малыш ещё не готов ко сну, уже сильно устал, перевозбудился или режим этого дня отличался от обычного."
        );

        if (lastWakeWindow !== null) {
            insights.push(
                `Сегодня перед ночью получилось ${sleepV2FormatMinutes(lastWakeWindow)} бодрствования. Это полезная цифра для наблюдения, но по одному значению нельзя определить «правильное» или «неправильное» бодрствование.`
            );
        }

        actions.push(
            "Запишите время начала вечернего ритуала и фактического засыпания несколько дней подряд."
        );

        actions.push(
            "Если малыш регулярно долго не засыпает и при этом бодр и активен, попробуйте сдвигать начало укладывания небольшими шагами."
        );

        actions.push(
            "Если перед сном малыш становится очень раздражительным, попробуйте начинать спокойный ритуал немного раньше."
        );
    }


    /* =====================================================
       НЕ ПОЛУЧАЕТСЯ РЕЖИМ
       ===================================================== */

    if (data.problem === "schedule") {
        insights.push(
            "Режим младенца не обязан работать по минутам. Полезнее иметь несколько опорных точек: начало дня, последовательность дневных снов и спокойный ритуал перед ночью."
        );

        if (firstWakeWindow !== null) {
            insights.push(
                `От утреннего подъёма до первого дневного сна сегодня прошло ${sleepV2FormatMinutes(firstWakeWindow)}.`
            );
        }

        if (lastWakeWindow !== null) {
            insights.push(
                `Последний период бодрствования сегодня составил ${sleepV2FormatMinutes(lastWakeWindow)}.`
            );
        }

        actions.push(
            "Начните не с идеального расписания, а с записи фактического сна 3–5 дней."
        );

        actions.push(
            "Выберите относительно стабильное время начала дня."
        );

        actions.push(
            "Меняйте только одну часть режима за раз и наблюдайте несколько дней."
        );
    }


    /* ===== ДОПОЛНИТЕЛЬНЫЕ НАБЛЮДЕНИЯ ===== */

    if (longNaps.length) {
        insights.push(
            `В этом дне есть ${longNaps.length} продолжительный дневной сон длительностью 1,5 часа или больше. Это не обязательно проблема — анализатор просто учитывает его в общей структуре дня.`
        );
    }


    /* ===== РЕЗУЛЬТАТ ===== */

    modalBody.innerHTML = `
        <div class="sleep-v2-result">

            <span class="age-badge">
                АНАЛИЗАТОР СНА · V2.0
            </span>

            <h2>
                Разбор сна малыша 🌙
            </h2>

            ${
                ageData
                    ? `
                        <div class="sleep-v2-result-age">
                            <span>
                                ${sleepV2Escape(ageData.icon)}
                            </span>

                            <div>
                                <small>
                                    ВОЗРАСТНОЙ ПЕРИОД
                                </small>

                                <strong>
                                    ${sleepV2Escape(ageData.age)}
                                </strong>

                                <p>
                                    ${sleepV2Escape(ageData.subtitle)}
                                </p>
                            </div>
                        </div>
                    `
                    : `
                        <div class="sleep-v2-result-age">

                            <span>👶</span>

                            <div>
                                <small>
                                    ПРОФИЛЬ
                                </small>

                                <strong>
                                    Возраст не определён
                                </strong>

                                <p>
                                    Добавьте дату рождения малыша
                                    для возрастной персонализации.
                                </p>
                            </div>

                        </div>
                    `
            }


            <div class="sleep-v2-summary-grid">

                <div>
                    <span>☀️</span>
                    <small>ПОДЪЁМ</small>
                    <strong>
                        ${sleepV2Escape(data.wake)}
                    </strong>
                </div>

                <div>
                    <span>😴</span>
                    <small>ДНЕВНОЙ СОН</small>
                    <strong>
                        ${sleepV2FormatMinutes(totalNapMinutes)}
                    </strong>
                </div>

                <div>
                    <span>🌙</span>
                    <small>НОЧЬ</small>
                    <strong>
                        ${sleepV2Escape(data.bedtime)}
                    </strong>
                </div>

                <div>
                    <span>⏱</span>
                    <small>ПЕРЕД НОЧЬЮ</small>
                    <strong>
                        ${
                            lastWakeWindow !== null
                                ? sleepV2FormatMinutes(lastWakeWindow)
                                : "—"
                        }
                    </strong>
                </div>

            </div>


            <div class="sleep-v2-result-card">

                <span class="sleep-v2-result-label">
                    ЧТО ВИДНО ПО ДАННЫМ
                </span>

                ${
                    positives.length
                        ? positives
                            .map(item => `
                                <div class="sleep-v2-result-line">
                                    <span>✓</span>
                                    <p>
                                        ${sleepV2Escape(item)}
                                    </p>
                                </div>
                            `)
                            .join("")
                        : `
                            <p>
                                Для этого дня пока недостаточно
                                данных о дневных снах.
                            </p>
                        `
                }

            </div>


            <div class="sleep-v2-result-card">

                <span class="sleep-v2-result-label">
                    ВОЗМОЖНЫЕ ОБЪЯСНЕНИЯ
                </span>

                ${
                    insights
                        .map(item => `
                            <div class="sleep-v2-result-line">
                                <span>💡</span>
                                <p>
                                    ${sleepV2Escape(item)}
                                </p>
                            </div>
                        `)
                        .join("")
                }

            </div>


            <div class="sleep-v2-actions">

                <span>
                    ЧТО МОЖНО ПОПРОБОВАТЬ
                </span>

                <h3>
                    План на ближайшие дни
                </h3>

                ${
                    actions
                        .map((item, index) => `
                            <div class="sleep-v2-action">

                                <b>
                                    ${index + 1}
                                </b>

                                <p>
                                    ${sleepV2Escape(item)}
                                </p>

                            </div>
                        `)
                        .join("")
                }

            </div>


            <div class="sleep-v2-safe-sleep">

                <div class="sleep-v2-safe-icon">
                    🛏
                </div>

                <div>
                    <strong>
                        Безопасность важнее режима
                    </strong>

                    <p>
                        Для сна малыша используйте отдельную
                        твёрдую ровную поверхность и укладывайте
                        ребёнка на спину. В месте сна не должно
                        быть подушек, мягких игрушек, позиционеров,
                        мягких бортиков и свободного постельного
                        белья.
                    </p>
                </div>

            </div>


            <div class="sleep-v2-medical-note">

                <strong>
                    Когда дело может быть не в режиме
                </strong>

                <p>
                    Если сон резко изменился одновременно
                    с температурой, затруднённым дыханием,
                    выраженной вялостью, необычным плачем,
                    плохим кормлением или другим ухудшением
                    состояния, не стоит объяснять это только
                    режимом сна.
                </p>

            </div>


            <button
                class="sleep-v2-analyze-button"
                onclick="openSleepV2Analyzer()"
            >
                ← Изменить данные
            </button>


            <button
                class="sleep-v2-clear-button"
                onclick="closeModal()"
            >
                Закрыть
            </button>


            <p class="sleep-v2-disclaimer">
                Анализатор предназначен для наблюдения за режимом
                и не ставит диагнозов. Индивидуальные потребности
                детей во сне различаются.
            </p>

        </div>
    `;

    const modalContent =
        modal.querySelector(".modal-content");

    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}
/* =========================================================
   ГЛАВНЫЙ ЭКРАН «СОН МАЛЫША V2.0»
   ========================================================= */

function openSleepV2() {
    const currentGroup =
        getSleepV2AgeGroup();

    const currentData =
        currentGroup !== null
            ? sleepV2[currentGroup]
            : null;

    screen.innerHTML = `
        <div class="sleep-v2-page">

            <div class="sleep-v2-top">

                <button
                    class="sleep-v2-back"
                    onclick="location.reload()"
                    aria-label="Вернуться на главную"
                >
                    ←
                </button>

                <div>
                    <span class="age-badge">
                        МАМА ЗНАЕТ · V2.0
                    </span>

                    <h1>Сон малыша</h1>

                    <p>
                        Возрастные ориентиры, безопасный сон
                        и персональный анализ режима.
                    </p>
                </div>

            </div>


            ${
                currentData
                    ? `
                        <div class="sleep-v2-current">

                            <span class="sleep-v2-current-label">
                                СЕЙЧАС АКТУАЛЬНО
                            </span>

                            <div class="sleep-v2-current-main">

                                <span>
                                    ${sleepV2Escape(currentData.icon)}
                                </span>

                                <div>
                                    <strong>
                                        ${sleepV2Escape(currentData.age)}
                                    </strong>

                                    <p>
                                        ${sleepV2Escape(currentData.title)}
                                    </p>
                                </div>

                            </div>

                            <button
                                onclick="openSleepV2Age(${currentGroup})"
                            >
                                Сон в этом возрасте →
                            </button>

                        </div>
                    `
                    : `
                        <div class="sleep-v2-current">

                            <span class="sleep-v2-current-label">
                                ПЕРСОНАЛИЗАЦИЯ
                            </span>

                            <strong>
                                Укажите дату рождения малыша
                            </strong>

                            <p>
                                Мы автоматически покажем актуальный
                                период сна.
                            </p>

                            <button onclick="profile()">
                                Заполнить профиль →
                            </button>

                        </div>
                    `
            }


            <!-- АНАЛИЗАТОР -->

            <button
                class="sleep-v2-analyzer-hero"
                onclick="openSleepV2Analyzer()"
            >

                <div class="sleep-v2-analyzer-hero-icon">
                    ✨
                </div>

                <div>

                    <span>
                        ПЕРСОНАЛЬНЫЙ ИНСТРУМЕНТ
                    </span>

                    <strong>
                        Анализатор сна
                    </strong>

                    <p>
                        Внесите реальный день малыша —
                        подъём, дневные сны и ночь.
                    </p>

                </div>

                <b>→</b>

            </button>


            <!-- БЫСТРЫЕ ПРОБЛЕМЫ -->

            <h2 class="sleep-v2-heading">
                Что происходит со сном?
            </h2>


            <div class="sleep-v2-quick-grid">

                <button
                    onclick="openSleepV2AnalyzerWithProblem('early')"
                >
                    <span>🌅</span>
                    <strong>Ранний подъём</strong>
                    <small>Просыпается слишком рано</small>
                </button>


                <button
                    onclick="openSleepV2AnalyzerWithProblem('short')"
                >
                    <span>⏱</span>
                    <strong>Короткие сны</strong>
                    <small>Спит по 30–40 минут</small>
                </button>


                <button
                    onclick="openSleepV2AnalyzerWithProblem('night')"
                >
                    <span>🌙</span>
                    <strong>Частые пробуждения</strong>
                    <small>Много раз за ночь</small>
                </button>


                <button
                    onclick="openSleepV2AnalyzerWithProblem('bedtime')"
                >
                    <span>😵‍💫</span>
                    <strong>Долго засыпает</strong>
                    <small>Укладывание затягивается</small>
                </button>


                <button
                    onclick="openSleepV2AnalyzerWithProblem('transfer')"
                >
                    <span>🛏</span>
                    <strong>После перекладывания</strong>
                    <small>Просыпается через несколько минут</small>
                </button>


                <button
                    onclick="openSleepV2AnalyzerWithProblem('schedule')"
                >
                    <span>🕒</span>
                    <strong>Нет режима</strong>
                    <small>Дни постоянно разные</small>
                </button>

            </div>
            <!-- ВРЕМЯ БОДРСТВОВАНИЯ -->

            <h2 class="sleep-v2-heading">
                Ориентиры бодрствования
            </h2>

            ${sleepV2WakeWindowTable()}

            <!-- ПО ВОЗРАСТУ -->

            <h2 class="sleep-v2-heading">
                Сон по возрасту
            </h2>


            <div class="sleep-v2-age-grid">

                ${
                    Object.keys(sleepV2)
                        .map(key => {
                            const index = Number(key);
                            const item = sleepV2[index];

                            const active =
                                currentGroup === index;

                            return `
                                <button
                                    class="sleep-v2-age-card ${active ? "active" : ""}"
                                    onclick="openSleepV2Age(${index})"
                                >

                                    ${
                                        active
                                            ? `
                                                <span class="sleep-v2-now">
                                                    СЕЙЧАС
                                                </span>
                                            `
                                            : ""
                                    }

                                    <span class="sleep-v2-age-icon">
                                        ${sleepV2Escape(item.icon)}
                                    </span>

                                    <strong>
                                        ${sleepV2Escape(item.age)}
                                    </strong>

                                    <small>
                                        ${sleepV2Escape(item.title)}
                                    </small>

                                    <b>
                                        Смотреть →
                                    </b>

                                </button>
                            `;
                        })
                        .join("")
                }

            </div>


            <!-- БЕЗОПАСНЫЙ СОН -->

            <div class="sleep-v2-safety-card">

                <span class="sleep-v2-safety-icon">
                    🛏
                </span>

                <div>
                    <span class="sleep-v2-safety-label">
                        ВАЖНО С РОЖДЕНИЯ
                    </span>

                    <h3>
                        Безопасный сон
                    </h3>

                    <p>
                        Положение на спине, отдельная твёрдая
                        ровная поверхность и свободное место сна
                        без мягких предметов.
                    </p>

                    <button
                        onclick="openSleepV2Safety()"
                    >
                        Открыть памятку →
                    </button>

                </div>

            </div>


            <div class="sleep-v2-note">

                <span>💛</span>

                <p>
                    Сон младенцев меняется по мере развития.
                    Один необычный день или короткий сон
                    ещё не означает, что режим неправильный.
                </p>

            </div>

        </div>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   СОН В КОНКРЕТНОМ ВОЗРАСТЕ
   ========================================================= */

function openSleepV2Age(index) {
    const article =
        sleepV2[index];

    if (!article) return;

    modalBody.innerHTML = `
        <div class="sleep-v2-article">

            <span class="age-badge">
                СОН · ${sleepV2Escape(article.age)}
            </span>

            <h2>
                ${sleepV2Escape(article.title)}
            </h2>

            <p class="sleep-v2-subtitle">
                ${sleepV2Escape(article.subtitle)}
            </p>


            <div class="sleep-v2-intro">
                ${sleepV2Escape(article.intro)}
            </div>


            <div class="sleep-v2-info-grid">

                <div>
                    <span>☀️</span>

                    <strong>
                        Дневной сон
                    </strong>

                    <p>
                        ${sleepV2Escape(article.naps)}
                    </p>
                </div>


                <div>
                    <span>🌙</span>

                    <strong>
                        Ночной сон
                    </strong>

                    <p>
                        ${sleepV2Escape(article.night)}
                    </p>
                </div>

            </div>


            <div class="sleep-v2-article-card">

                <h3>
                    🕒 Как выстраивать ритм
                </h3>

                ${sleepV2RenderList(article.rhythm)}

            </div>


            <div class="sleep-v2-article-card">

                <h3>
                    😴 Признаки усталости
                </h3>

                ${sleepV2RenderList(article.signs)}

            </div>


            <div class="sleep-v2-article-card">

                <h3>
                    💭 Что часто беспокоит родителей
                </h3>

                ${sleepV2RenderList(article.common)}

            </div>


            <div class="sleep-v2-today">

                <span>
                    ПОПРОБУЙТЕ СЕГОДНЯ
                </span>

                <p>
                    ${sleepV2Escape(article.today)}
                </p>

            </div>


            <button
                class="sleep-v2-analyze-button"
                onclick="openSleepV2Analyzer()"
            >
                ✨ Проанализировать сон малыша
            </button>


            <div class="sleep-v2-practical-guides">
                <div class="sleep-v2-practical-title">
                    <span>💡</span>
                    <div>
                        <small>БЫСТРЫЕ ШПАРГАЛКИ</small>
                        <strong>Что делать прямо сегодня</strong>
                    </div>
                </div>

                <div class="sleep-v2-guide-card">
                    <div class="sleep-v2-guide-icon">🌙</div>
                    <div>
                        <strong>Ритуал 15–30 минут</strong>
                        <p>Приглушите свет → спокойный уход → кормление при необходимости → короткий контакт, песенка или книжка → укладывание. Важнее повторяемость, чем точное время по минутам.</p>
                    </div>
                </div>

                <div class="sleep-v2-guide-card">
                    <div class="sleep-v2-guide-icon">⏱️</div>
                    <div>
                        <strong>Сон закончился через 30–40 минут</strong>
                        <p>Не считайте один короткий сон проблемой. Посмотрите на настроение малыша, остальные сны и весь день. Если ребёнок явно ещё сонный — спокойно попробуйте помочь продлить сон.</p>
                    </div>
                </div>

                <div class="sleep-v2-guide-card">
                    <div class="sleep-v2-guide-icon">🛏️</div>
                    <div>
                        <strong>Проснулся после перекладывания</strong>
                        <p>Заранее подготовьте место сна и уменьшите количество изменений после засыпания. Не используйте подушки, позиционеры, бортики или мягкие предметы, чтобы удержать малыша в положении.</p>
                    </div>
                </div>

                <div class="sleep-v2-guide-card">
                    <div class="sleep-v2-guide-icon">🌅</div>
                    <div>
                        <strong>Очень ранний подъём</strong>
                        <p>Несколько дней отмечайте время подъёма, дневные сны и вечернее засыпание. Утром сохраняйте темноту и спокойную обстановку, если ещё ночь, а изменения режима делайте небольшими шагами.</p>
                    </div>
                </div>

                <div class="sleep-v2-guide-card">
                    <div class="sleep-v2-guide-icon">🌜</div>
                    <div>
                        <strong>Часто просыпается ночью</strong>
                        <p>Сначала проверьте базовые причины: голод, подгузник, температуру, болезнь или дискомфорт, прорезывание зубов и новые навыки. Ночные пробуждения сами по себе не означают, что сон «испорчен».</p>
                    </div>
                </div>

                <div class="sleep-v2-guide-note">
                    <strong>Лайфхак:</strong> меняйте только одну вещь за раз и наблюдайте несколько дней. Так гораздо легче понять, что действительно повлияло на сон.
                </div>
            </div>


            <div class="sleep-v2-infographic-section">
                <div class="sleep-v2-infographic-heading">
                    <span>🌙</span>
                    <div>
                        <small>ВИЗУАЛЬНЫЙ ГИД</small>
                        <strong>Сон малыша: безопасность, ритуал и пробуждения</strong>
                    </div>
                </div>

                <button class="sleep-v2-infographic-button" type="button" onclick="sleepV2OpenInfographic()">
                    <img src="B0F5C316-F970-4F57-B84E-B90258CEE0EE.png" alt="Визуальный гид по сну малыша" loading="lazy">
                    <span>Нажмите, чтобы увеличить</span>
                </button>
            </div>


            <button
                class="sleep-v2-close-button"
                onclick="closeModal()"
            >
                Готово
            </button>

        </div>
    `;

    modal.classList.remove("hidden");

    const modalContent =
        modal.querySelector(".modal-content");

    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}


function sleepV2OpenInfographic() {
    const overlay = document.createElement("div");
    overlay.className = "sleep-v2-infographic-overlay";
    overlay.innerHTML = `
        <button class="sleep-v2-infographic-close" type="button" aria-label="Закрыть">×</button>
        <img src="B0F5C316-F970-4F57-B84E-B90258CEE0EE.png" alt="Визуальный гид по сну малыша">
    `;
    overlay.addEventListener("click", event => {
        if (event.target === overlay || event.target.closest(".sleep-v2-infographic-close")) {
            overlay.remove();
        }
    });
    document.body.appendChild(overlay);
}


/* ===== СПИСОК ===== */

function sleepV2RenderList(items) {
    return `
        <div class="sleep-v2-list">

            ${items
                .map(item => `
                    <div class="sleep-v2-list-item">

                        <span>✓</span>

                        <p>
                            ${sleepV2Escape(item)}
                        </p>

                    </div>
                `)
                .join("")}

        </div>
    `;
}


/* =========================================================
   БЫСТРЫЙ ВХОД В АНАЛИЗАТОР
   ========================================================= */

function openSleepV2AnalyzerWithProblem(problem) {
    const saved =
        sleepV2LoadAnalyzerData();

    saved.problem = problem;

    sleepV2SaveAnalyzerData(saved);

    openSleepV2Analyzer();
}


/* =========================================================
   БЕЗОПАСНЫЙ СОН
   ========================================================= */

function openSleepV2Safety() {
    modalBody.innerHTML = `
        <div class="sleep-v2-safety-page">

            <span class="age-badge">
                БЕЗОПАСНЫЙ СОН
            </span>

            <h2>
                Безопасное место для сна 🛏
            </h2>

            <p class="sleep-v2-safety-lead">
                Эти правила важнее любого режима,
                способа укладывания или попытки продлить сон.
            </p>


            <div class="sleep-v2-safe-visual">

                <div class="sleep-v2-safe-bed">
                    👶
                </div>

                <strong>
                    Просто, ровно, свободно
                </strong>

                <p>
                    Малыш лежит на спине на твёрдой
                    ровной поверхности для сна.
                </p>

            </div>


            <div class="sleep-v2-safe-rule">

                <span>✓</span>

                <div>
                    <strong>На спине</strong>
                    <p>
                        Укладывайте малыша на спину
                        для каждого сна.
                    </p>
                </div>

            </div>


            <div class="sleep-v2-safe-rule">

                <span>✓</span>

                <div>
                    <strong>
                        Твёрдая ровная поверхность
                    </strong>

                    <p>
                        Используйте поверхность,
                        предназначенную для сна младенца,
                        с плотно прилегающей простынёй.
                    </p>
                </div>

            </div>


            <div class="sleep-v2-safe-rule">

                <span>✓</span>

                <div>
                    <strong>
                        Пустое место сна
                    </strong>

                    <p>
                        Без подушек, мягких игрушек,
                        мягких бортиков, позиционеров
                        и свободного постельного белья.
                    </p>
                </div>

            </div>


            <div class="sleep-v2-safe-rule">

                <span>✓</span>

                <div>
                    <strong>
                        Отдельная поверхность
                    </strong>

                    <p>
                        Для младенца безопаснее собственная
                        поверхность для сна, а не сон
                        на диване или кресле со взрослым.
                    </p>
                </div>

            </div>


            <div class="sleep-v2-safe-warning">

                <strong>
                    ⚠️ Особенно важно
                </strong>

                <p>
                    Никогда не оставляйте младенца спать
                    на диване, кресле или другой мягкой
                    поверхности.
                </p>

            </div>


            <button
                class="sleep-v2-close-button"
                onclick="closeModal()"
            >
                Понятно
            </button>

        </div>
    `;

    modal.classList.remove("hidden");

    const modalContent =
        modal.querySelector(".modal-content");

    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}
/* =========================================================
   МАМА ЗНАЕТ V2.0
   ЭКСПОРТ МОДУЛЯ СНА
   ========================================================= */

window.openSleepV2 = openSleepV2;
window.openSleepV2Age = openSleepV2Age;
window.openSleepV2Analyzer = openSleepV2Analyzer;
window.openSleepV2AnalyzerWithProblem = openSleepV2AnalyzerWithProblem;
window.openSleepV2Safety = openSleepV2Safety;

window.runSleepV2Analyzer = runSleepV2Analyzer;
window.selectSleepV2Problem = selectSleepV2Problem;
window.sleepV2ClearAnalyzerData = sleepV2ClearAnalyzerData;

console.log("МАМА ЗНАЕТ V2.0: модуль сна загружен");
/* =========================================================
   МАМА ЗНАЕТ V2.0 — ОРИЕНТИРЫ ВРЕМЕНИ БОДРСТВОВАНИЯ
   Это практические диапазоны, а не строгие медицинские нормы
   ========================================================= */

const sleepV2WakeWindows = [
    {
        month: 0,
        age: "0–1 мес",
        min: 35,
        max: 60
    },
    {
        month: 1,
        age: "1–2 мес",
        min: 45,
        max: 75
    },
    {
        month: 2,
        age: "2–3 мес",
        min: 60,
        max: 90
    },
    {
        month: 3,
        age: "3–4 мес",
        min: 75,
        max: 105
    },
    {
        month: 4,
        age: "4–5 мес",
        min: 90,
        max: 120
    },
    {
        month: 5,
        age: "5–6 мес",
        min: 105,
        max: 150
    },
    {
        month: 6,
        age: "6–7 мес",
        min: 120,
        max: 180
    },
    {
        month: 7,
        age: "7–8 мес",
        min: 135,
        max: 195
    },
    {
        month: 8,
        age: "8–9 мес",
        min: 150,
        max: 210
    },
    {
        month: 9,
        age: "9–10 мес",
        min: 165,
        max: 225
    },
    {
        month: 10,
        age: "10–11 мес",
        min: 180,
        max: 240
    },
    {
        month: 11,
        age: "11–12 мес",
        min: 180,
        max: 270
    }
];


/* ===== ТОЧНЫЙ ВОЗРАСТ В МЕСЯЦАХ ===== */

function getSleepV2BabyMonth() {
    if (!baby || !baby.birth) return null;

    const birth =
        new Date(baby.birth + "T00:00:00");

    const today =
        new Date();

    if (Number.isNaN(birth.getTime())) {
        return null;
    }

    let months =
        (today.getFullYear() - birth.getFullYear()) * 12 +
        (today.getMonth() - birth.getMonth());

    if (today.getDate() < birth.getDate()) {
        months--;
    }

    if (months < 0) months = 0;
    if (months > 11) months = 11;

    return months;
}


/* ===== ФОРМАТИРУЕМ ВБ ===== */

function sleepV2FormatWakeWindow(minutes) {
    const hours =
        Math.floor(minutes / 60);

    const rest =
        minutes % 60;

    if (hours === 0) {
        return `${rest} мин`;
    }

    if (rest === 0) {
        return `${hours} ч`;
    }

    return `${hours} ч ${rest} мин`;
}


/* ===== РИСУЕМ ТАБЛИЦУ ===== */

function sleepV2WakeWindowTable() {
    const currentMonth =
        getSleepV2BabyMonth();

    return `
        <div class="sleep-v2-wb-card">

            <div class="sleep-v2-wb-head">

                <div>
                    <span>
                        ОРИЕНТИРЫ 0–12 МЕСЯЦЕВ
                    </span>

                    <h2>
                        ⏰ Время бодрствования
                    </h2>
                </div>

            </div>


            <p class="sleep-v2-wb-intro">
                Примерные диапазоны времени между снами.
                Это не строгая норма и не таймер для
                укладывания малыша.
            </p>


            <div class="sleep-v2-wb-table">

                <div class="sleep-v2-wb-row sleep-v2-wb-title">

                    <span>
                        Возраст
                    </span>

                    <span>
                        Примерное ВБ
                    </span>

                </div>


                ${sleepV2WakeWindows
                    .map(item => {

                        const active =
                            currentMonth === item.month;

                        return `
                            <div
                                class="sleep-v2-wb-row ${
                                    active ? "active" : ""
                                }"
                            >

                                <span>
                                    ${active
                                        ? "👶 "
                                        : ""
                                    }

                                    ${item.age}

                                    ${active
                                        ? `<small>Сейчас</small>`
                                        : ""
                                    }
                                </span>


                                <strong>
                                    ${sleepV2FormatWakeWindow(item.min)}
                                    –
                                    ${sleepV2FormatWakeWindow(item.max)}
                                </strong>

                            </div>
                        `;
                    })
                    .join("")}

            </div>


            <div class="sleep-v2-wb-tip">

                <span>💡</span>

                <p>
                    ВБ у одного малыша может различаться
                    в течение дня. Смотрите не только на часы,
                    но и на поведение, качество предыдущего сна
                    и признаки усталости.
                </p>

            </div>


            <div class="sleep-v2-wb-warning">

                <strong>
                    Важно
                </strong>

                <p>
                    Эти диапазоны — практический ориентир,
                    а не медицинская норма. Не нужно специально
                    удерживать уставшего малыша без сна,
                    чтобы «дотянуть» до цифры из таблицы.
                </p>

            </div>

        </div>
    `;
}
