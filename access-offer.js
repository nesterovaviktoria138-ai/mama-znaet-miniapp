/* Access offer only. Payments remain disabled until launch checks are complete. */
(function () {
'use strict';
const products = [
 {id:'full', title:'Полный доступ', price:999, hint:'Все разделы вместе', items:['Анализатор сна и дневник','Календарь прикорма в вашем темпе','Упражнения по навыкам с видео','Развитие и игры по возрасту','Уход, прививки и профилактические осмотры','Восстановление мамы и грудное вскармливание']},
 {id:'sleep', title:'Анализатор сна', price:499, hint:'Чтобы разобраться в записанном дне', items:['Запись дневного и ночного сна','Разбор длительности сна и бодрствования','Подсказки с учётом возраста и полноты записей']},
 {id:'feeding', title:'Прикорм', price:499, hint:'Знакомство с едой в вашем темпе', items:['Календарь введения продуктов','Выбор количества дней на новый продукт','Порции в ложках и отметки о знакомых продуктах']},
 {id:'exercises', title:'Упражнения', price:499, hint:'Идеи занятий по навыкам малыша', items:['Удержание головы, перевороты и ползание','Подготовка к опоре и первым шагам','Пояснения к упражнениям и русскоязычные видео']}
];
let selected='full';
function details() {
 const p=products.find(x=>x.id===selected);
 const panel=document.getElementById('access-details');
 if(!panel)return;
 panel.innerHTML='<h2>'+p.title+'</h2><ul>'+p.items.map(x=>'<li>'+x+'</li>').join('')+'</ul><p>12 месяцев с даты покупки. Один платёж, без автопродления.</p>';
 document.querySelectorAll('.access-choice').forEach(x=>x.classList.toggle('selected',x.querySelector('input').checked));
}
function open() {
 selected='full';
 const root=document.getElementById('screen');
 root.innerHTML=`<div class="access-page">
 <button type="button" class="mz-link" data-mz="more">← В меню «Ещё»</button>
 <span class="mz-eyebrow">МАМА ЗНАЕТ · ВАРИАНТЫ ДОСТУПА</span>
 <h1 tabindex="-1">Поддержка, которая нужна вам сейчас</h1>
 <p class="access-lead">Выберите один раздел или всё приложение. Состав выбранного варианта — ниже.</p>
 <p class="access-notice"><strong>Готовим запуск продаж.</strong> Сейчас можно сравнить варианты. Оплата пока недоступна.</p>
 <fieldset><legend>Что вы хотите открыть?</legend>
 ${products.map((p,i)=>`<label class="access-choice ${i===0?'selected':''}"><input type="radio" name="mama-access" value="${p.id}" ${i===0?'checked':''}><span><strong>${p.title}</strong><small>${p.hint}</small><span class="access-price">Ориентир: ${p.price} ₽</span>${i===0?'<small class="access-included">Все три отдельных раздела уже включены</small>':''}</span></label>`).join('')}
 </fieldset>
 <p class="access-muted">Оплата внутри Telegram будет в Stars (звёздах). Цена в Stars ещё не установлена. Суммы в рублях — ориентиры, а не сумма будущего счёта.</p>
 <section id="access-details" class="access-details" aria-live="polite"></section>
 <button class="access-buy" type="button" disabled>Продажи ещё не открыты</button>
 <section class="access-faq"><h2>Перед выбором</h2>
 <details><summary>Нужно покупать разделы к полному доступу?</summary><p>Нет. Анализатор сна, прикорм и упражнения уже входят в полный доступ вместе с остальными материалами.</p></details>
 <details><summary>Будут ли автоматические списания?</summary><p>Нет. Планируется разовый платёж за 12 месяцев. Продлевать доступ можно будет только по вашему желанию.</p></details>
 <details><summary>Где хранятся мои записи?</summary><p>Сейчас записи хранятся в браузере на вашем устройстве. Сохранить копию можно через «Ещё → Копия моих данных». До запуска продаж доступ к материалам не ограничен.</p></details>
 <details><summary>Это замена врачу?</summary><p>Нет. Материалы и инструменты помогают вести наблюдения и находить справочную информацию. Они не ставят диагнозы и не назначают лечение.</p></details>
 </section></div>`;
 details();
 window.scrollTo(0,0);
 root.querySelector('h1').focus({preventScroll:true});
}
document.addEventListener('click',e=>{if(e.target.closest('[data-access-open]'))open();});
document.addEventListener('change',e=>{if(e.target.name==='mama-access'&&products.some(x=>x.id===e.target.value)){selected=e.target.value;details();}});
window.premium=open;
window.openMamaAccess=open;
})();
