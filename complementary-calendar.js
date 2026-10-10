(function (root) {
  'use strict';
  const MILK = 'Смесь или грудное молоко';
  const KEY = 'mama-znaet-feeding-v3';
  const DAY = 86400000;
  // Sequence and teaspoon amounts are editable examples, not clinical norms.
  const foods = [
    {id:'zucchini',name:'кабачок',group:'veg',min:4,prep:'Отварить или приготовить на пару, измельчить.'},
    {id:'turkey',name:'индейка',group:'protein',min:4,priority:1,prep:'Полностью приготовить, измельчить с водой или знакомым пюре.'},
    {id:'buckwheat',name:'гречневая каша',group:'grain',min:4,priority:2,prep:'Детская каша без сахара, желательно обогащённая железом; приготовить по инструкции.'},
    {id:'egg',name:'яйцо',group:'protein',min:6,priority:3,allergen:true,prep:'Полностью сваренное яйцо целиком (белок и желток), размять до однородности со знакомым пюре.'},
    {id:'peanut',name:'арахис',group:'extra',min:6,priority:4,allergen:true,prep:'Гладкую пасту без соли и сахара сильно развести водой или знакомым пюре. Количество в таблице — уже разведённая смесь. Не давать орехи и густую пасту.'},
    {id:'broccoli',name:'брокколи',group:'veg',min:4,prep:'Готовить до мягкости; для первых проб измельчить.'},
    {id:'beef',name:'говядина',group:'protein',min:4,prep:'Полностью приготовить, тщательно измельчить.'},
    {id:'oats',name:'овсяная каша',group:'grain',min:6,allergen:true,prep:'Детская каша без сахара; проверить маркировку на глютен и другие аллергены. Первую пробу готовить без новых добавок.'},
    {id:'cauliflower',name:'цветная капуста',group:'veg',min:4,prep:'Готовить до мягкости, измельчить до подходящей текстуры.'},
    {id:'fish',name:'лосось',group:'protein',min:6,allergen:true,prep:'Полностью приготовить и очень тщательно удалить все кости.'},
    {id:'yogurt',name:'натуральный йогурт',group:'dairy',min:6,allergen:true,prep:'Пастеризованный, обычной жирности, без сахара и добавок; содержит белок молока.'},
    {id:'apple',name:'яблоко',group:'fruit',min:4,prep:'Очистить, приготовить до мягкости и размять. Сырое твёрдое яблоко кусочками не давать.'},
    {id:'lentil',name:'чечевица',group:'protein',min:6,prep:'Разварить до мягкости и тщательно размять или пюрировать.'},
    {id:'pumpkin',name:'тыква',group:'veg',min:4,prep:'Приготовить до мягкости и измельчить.'},
    {id:'potato',name:'картофель',group:'starch',min:4,prep:'Полностью отварить, размять со знакомым пюре или водой.'},
    {id:'pear',name:'груша',group:'fruit',min:4,prep:'Очистить; твёрдую грушу приготовить, мягкую спелую — размять.'},
    {id:'carrot',name:'морковь',group:'veg',min:4,prep:'Полностью приготовить до мягкости; сырые кусочки не давать.'},
    {id:'millet',name:'пшённая каша',group:'grain',min:6,prep:'Разварить или использовать подходящую детскую кашу без сахара.'},
    {id:'avocado',name:'авокадо',group:'fruit',min:6,prep:'Мягкий спелый плод очистить и размять.'},
    {id:'wheat',name:'пшеничная каша',group:'grain',min:6,allergen:true,prep:'Содержит глютен. Готовить без сахара, без других новых продуктов.'},
    {id:'chicken',name:'курица',group:'protein',min:4,prep:'Полностью приготовить, убрать кожу и кости, измельчить.'},
    {id:'plum',name:'слива',group:'fruit',min:6,prep:'Убрать косточку и кожицу, размять мягкую мякоть.'}
  ];
  // Optional menu ideas, staged by plan month, not medical minimum ages.
  foods.push(...[{"id": "banana", "name": "банан", "group": "fruit", "min": 6, "planMonth": 2, "prep": "Очистить и размять."}, {"id": "peas", "name": "зелёный горошек", "group": "veg", "min": 6, "planMonth": 2, "prep": "Сварить и размять; не давать целые горошины."}, {"id": "corn", "name": "кукурузная каша", "group": "grain", "min": 6, "planMonth": 2, "prep": "Разварить без соли и сахара."}, {"id": "sweetpotato", "name": "батат", "group": "starch", "min": 6, "planMonth": 2, "prep": "Сварить и размять."}, {"id": "greenbeans", "name": "стручковая фасоль", "group": "veg", "min": 6, "planMonth": 3, "prep": "Убрать жёсткие волокна, сварить и измельчить."}, {"id": "peach", "name": "персик", "group": "fruit", "min": 6, "planMonth": 3, "prep": "Удалить косточку и кожицу, размять."}, {"id": "rice", "name": "рисовая каша", "group": "grain", "min": 6, "planMonth": 3, "prep": "Разварить; чередовать с другими крупами."}, {"id": "pork", "name": "свинина", "group": "protein", "min": 6, "planMonth": 3, "prep": "Полностью приготовить нежирное мясо и измельчить."}, {"id": "spinach", "name": "шпинат", "group": "veg", "min": 6, "planMonth": 4, "prep": "Приготовить и измельчить."}, {"id": "mango", "name": "манго", "group": "fruit", "min": 6, "planMonth": 4, "prep": "Убрать кожуру и косточку, размять."}, {"id": "quinoa", "name": "киноа", "group": "grain", "min": 6, "planMonth": 4, "prep": "Промыть, разварить и размять."}, {"id": "chickpeas", "name": "нут", "group": "protein", "min": 6, "planMonth": 4, "prep": "Разварить и измельчить; не давать целые горошины."}, {"id": "cabbage", "name": "капуста", "group": "veg", "min": 6, "planMonth": 5, "prep": "Приготовить до мягкости и измельчить."}, {"id": "blueberries", "name": "черника", "group": "fruit", "min": 6, "planMonth": 5, "prep": "Вымыть и тщательно размять; не давать целые ягоды."}, {"id": "lamb", "name": "баранина", "group": "protein", "min": 6, "planMonth": 5, "prep": "Полностью приготовить нежирное мясо и измельчить."}, {"id": "parsnip", "name": "пастернак", "group": "veg", "min": 6, "planMonth": 5, "prep": "Очистить, сварить и размять."}, {"id": "pepper", "name": "сладкий перец", "group": "veg", "min": 6, "planMonth": 6, "prep": "Удалить семена, приготовить, снять кожицу и размять."}, {"id": "raspberries", "name": "малина", "group": "fruit", "min": 6, "planMonth": 6, "prep": "Вымыть и размять."}, {"id": "melon", "name": "дыня", "group": "fruit", "min": 6, "planMonth": 6, "prep": "Удалить семена и кожуру, размять мякоть."}, {"id": "whitebeans", "name": "белая фасоль", "group": "protein", "min": 6, "planMonth": 6, "prep": "Полностью сварить и измельчить; без соли."}, {"id": "asparagus", "name": "спаржа", "group": "veg", "min": 6, "planMonth": 7, "prep": "Убрать жёсткие части, сварить и измельчить."}, {"id": "nectarine", "name": "нектарин", "group": "fruit", "min": 6, "planMonth": 7, "prep": "Удалить косточку и кожицу, размять."}, {"id": "swede", "name": "брюква", "group": "veg", "min": 6, "planMonth": 7, "prep": "Очистить, сварить и размять."}, {"id": "kiwi", "name": "киви", "group": "fruit", "min": 6, "planMonth": 7, "prep": "Очистить и размять спелую мякоть."}]);
  const portionNames = {
    zucchini:'кабачка',turkey:'индейки',buckwheat:'гречневой каши',
    egg:'размятого полностью сваренного яйца',peanut:'разведённой арахисовой пасты',
    broccoli:'брокколи',beef:'говядины',oats:'овсяной каши',cauliflower:'цветной капусты',
    fish:'приготовленного лосося без костей',yogurt:'натурального йогурта',
    apple:'мягкого яблока',lentil:'размятой чечевицы',pumpkin:'тыквы',potato:'картофеля',
    pear:'мягкой груши',carrot:'приготовленной моркови',millet:'пшённой каши',
    avocado:'авокадо',wheat:'пшеничной каши',chicken:'курицы',plum:'мягкой сливы'
  };
  const guides = {
    4:['Ранний старт — индивидуальное решение','Обычно прикорм начинают около 6 месяцев. В 4 месяца — только после обсуждения с педиатром и при готовности малыша. Начинать до 4 месяцев не следует. Несколько проб с ложки; молочное питание не сокращать по календарю.'],
    5:['Готовность важнее даты','Если ранний старт согласован, осваиваем небольшие пробы. Ребёнок устойчиво держит голову, сидит вертикально с поддержкой и может проглатывать пищу. При отсутствии готовности ждём.'],
    6:['Знакомство с едой','Начинаем с небольшого количества один раз в день. С начала прикорма предлагаем источники железа: мясо, бобовые, каши с железом. Аллергены — по одному, малыми количествами; яйцо и арахис не нужно откладывать на многие месяцы.'],
    7:['Расширяем рацион','Постепенно добавляем второй приём пищи и двигаемся к трём, по готовности. Предлагаем разные группы продуктов и учимся есть размятую пищу с мягкими комочками. Если прикорм только начинается, стартуем с малых проб.'],
    8:['Учимся новым текстурам','Размятая еда, мягкие комочки и безопасные мягкие кусочки по навыкам. Не нужно ждать зубов, чтобы постепенно осваивать мягкую пищу. Едим сидя и под постоянным присмотром.'],
    9:['Разнообразие каждый день','Постепенно приближаемся к трём приёмам прикорма. В течение дня предлагаем овощи и фрукты, крупы или картофель, источники железа; молочные кормления сохраняются.'],
    10:['Три приёма пищи','Ориентир — завтрак, обед и ужин плюс обычные молочные кормления. Предлагаем мягкую семейную еду без добавленных соли и сахара, изменяя размер и текстуру по навыкам малыша.'],
    11:['Больше самостоятельности','Мягкая еда подходящего размера, чашка, попытки есть самостоятельно. Аппетит меняется день ото дня. Чайные ложки в календаре — условная мера порции, а не обязательное количество.'],
    12:['Переход к семейному столу','После первого дня рождения питание постепенно меняется: три основных приёма пищи, при необходимости перекусы. Грудное вскармливание можно продолжать; необходимость смеси и молочных замен обсуждается индивидуально.' ]
  };
  function date(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null;
    const d = new Date(value + 'T00:00:00Z');
    return Number.isFinite(+d) && d.toISOString().slice(0,10) === value ? d : null;
  }
  function iso(d){ return d.toISOString().slice(0,10); }
  function plusDays(d,n){ return new Date(+d + n*DAY); }
  function plusMonths(d,n){
    const y=d.getUTCFullYear(), m=d.getUTCMonth()+n, day=d.getUTCDate();
    const last=new Date(Date.UTC(y,m+1,0)).getUTCDate();
    return new Date(Date.UTC(y,m,Math.min(day,last)));
  }
  function ageOn(start,age,current){
    let a=age;
    while(a<12 && current>=plusMonths(start,a-age+1)) a++;
    return a;
  }
  function bounded(value,min,max,fallback){
    const n=Number(value);
    return Number.isInteger(n) && n>=min && n<=max ? n : fallback;
  }
  function today(){
    const d=new Date();
    return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
  }
  function normalize(s={}){
    const start=date(s.start)?s.start:today();
    return {profileBirth:typeof s.profileBirth==='string'?s.profileBirth:'',start,age:bounded(s.age,4,11,6),vegDays:bounded(s.vegDays,2,14,3),
      otherDays:bounded(s.otherDays,2,14,3),ready:s.ready===true,early:s.early===true,
      known:Array.isArray(s.known)?s.known.filter(id=>foods.some(f=>f.id===id)):[],
      repeats:s.repeats && typeof s.repeats==='object'?Object.fromEntries(Object.entries(s.repeats)
        .filter(([k,v])=>/^\d+$/.test(k) && Number(k)<400 && Number.isInteger(v) && v>0 && v<=30)):{}};
  }
  function spoon(n){ return String(n).replace('0.5','½').replace('.',',')+' ч. л.'; }
  // This is an example menu, not a mandatory order or prescribed portion.
  const order = ['zucchini','broccoli','cauliflower','pumpkin','carrot','potato',
    'turkey','buckwheat','apple','pear','beef','egg','peanut','fish','yogurt',
    'oats','lentil','millet','avocado','wheat','chicken','plum'];
  order.push(...foods.filter(f=>f.planMonth).map(f=>f.id));
  const curves = {
    veg:[1,3,5,7,9,11,12,13,14,14,14,16,16,18,18,18,20],
    starch:[1,3,4,6,8,10], protein:[1,2,3,4,5,6],
    grain:[1,3,5,7,9,11,12], fruit:[1,2,3,4,6], dairy:[1,2,3,4,6,8],
    extra:[0.5,1]
  };
  function curve(values,day){return values[Math.min(Math.max(0,day),values.length-1)];}
  function amount(f,day){
    if(f.id==='egg') return curve([0.5,1,2],day);
    return curve(curves[f.group],day);
  }
  function lunchVegetables(day){return curve(curves.veg,day);}
  function familiar(known,newFood,age,month,day,firstOffered,newAmount){
    const eligible=foods.filter(f=>known.has(f.id) && f.min<=age && f.id!==newFood?.id);
    const capacity=f=>amount(f,day-(firstOffered.get(f.id) ?? day));
    const pick=(groups,offset=0)=>{
      const a=eligible.filter(f=>groups.includes(f.group) && !['egg','fish'].includes(f.id));
      return a.length?a[(day+offset)%a.length]:null;
    };
    const servings=[];
    const add=(label,parts)=>{const good=parts.filter(Boolean);if(good.length)servings.push({label,parts:good});};
    const part=(f,n)=>f && n>0?{id:f.id,name:portionNames[f.id]||f.name,spoons:Math.min(n,capacity(f))}:null;
    // The new vegetable is part of the vegetable portion, not added on top of it.
    let remaining=lunchVegetables(day)-(newFood?.group==='veg'?newAmount:0);
    const veg=eligible.filter(f=>f.group==='veg').sort((a,b)=>capacity(b)-capacity(a));
    const full=veg.filter(f=>capacity(f)>=remaining);
    if(full.length){const chosen=full[day%full.length];veg.splice(veg.indexOf(chosen),1);veg.unshift(chosen);}
    const vegetableParts=[];
    for(const f of veg){
      const n=Math.min(remaining,capacity(f));
      if(n>0){vegetableParts.push(part(f,n));remaining-=n;}
      if(remaining<=0)break;
    }
    const starch=newFood?.group==='starch'?null:(pick(['starch'])||pick(['grain']));
    const protein=newFood?.group==='protein'?null:pick(['protein']);
    add('Обед',[...vegetableParts,part(starch,10),part(protein,6)]);
    const meals=age>=10 && month>=1?3:age>=7 && month>=1?2:1;
    const fruit=pick(['fruit']);
    if(meals>=2) add('Завтрак',[part(pick(['grain']),12),part(fruit,6)]);
    else if(newFood?.group!=='fruit') add('После обеда',[part(fruit,4)]);
    if(meals===3) add('Ужин',[part(pick(['veg'],1),12),part(pick(['grain','starch'],1),8),part(pick(['dairy']),6)]);
    const allergens=eligible.filter(f=>f.allergen);
    const repeat=allergens.length?allergens[day%allergens.length]:null;
    if(repeat && !servings.some(s=>s.parts.some(p=>p.id===repeat.id)))
      add('Знакомый аллерген',[part(repeat,repeat.id==='peanut'?1:2)]);
    return servings;
  }
  function nextFood(available,day,settings){
    // A long vegetable introduction must not postpone iron-rich foods for months.
    const urgent=[...(settings.vegDays>3&&day>=14?['turkey','buckwheat']:[]),...(day>=20?['egg','peanut']:[])];
    for(const id of urgent){const food=available.find(f=>f.id===id);if(food)return food;}
    return order.map(id=>available.find(f=>f.id===id)).find(Boolean)||null;
  }
  function build(input){
    const s=normalize(input), start=date(s.start), end=plusMonths(start,12-s.age);
    // Pure generator follows the same readiness gate as the interface.
    if(!s.ready || (s.age<6 && !s.early))return [];
    const count=Math.round((end-start)/DAY), rows=[];
    const known=new Set(s.known), introduced=new Set(known);
    const firstOffered=new Map(s.known.map(id=>[id,-30]));
    let active=null,step=0,raw=0;
    while(rows.length<count){
      const current=plusDays(start,rows.length),age=ageOn(start,s.age,current);
      const month=Math.min(11-s.age,age-s.age);
      if(!active){
        active=nextFood(foods.filter(f=>f.min<=age&&(f.planMonth??0)<=month&&!introduced.has(f.id)),raw,s);
        step=0;
        if(active)firstOffered.set(active.id,raw);
      }
      const newAmount=active?amount(active,step):null;
      const familiarMeals=familiar(known,active,age,month,raw,firstOffered,newAmount);
      const lunch=familiarMeals.find(m=>m.label==='Обед');
      const baseAmount=lunch?lunch.parts.reduce((sum,p)=>sum+p.spoons,0):0;
      const row={index:rows.length,raw,date:iso(current),age,month,newId:active?.id||null,
        newAmount,step:step+1,duration:active?(active.group==='veg'||active.id==='potato'?s.vegDays:s.otherDays):null,
        familiar:familiarMeals,baseAmount,lunchTotal:baseAmount+(newAmount||0),repeated:false};
      rows.push(row);
      for(let i=0;i<(s.repeats[String(raw)]||0)&&rows.length<count;i++){
        const repeatDate=plusDays(start,rows.length),repeatAge=ageOn(start,s.age,repeatDate);
        // Repeating freezes ALL portions and introduction progress, even across a month boundary.
        rows.push({...row,index:rows.length,date:iso(repeatDate),age:repeatAge,month:repeatAge-s.age,repeated:true});
      }
      raw++;
      if(active&&++step>=row.duration){known.add(active.id);introduced.add(active.id);active=null;}
    }
    return rows;
  }
  const api={foods,guides,normalize,build,spoon,ageOn,date,plusMonths,MILK};
  if(typeof module!=='undefined' && module.exports) module.exports=api;
  if(!root || !root.document) return;
  root.FeedingPlan=api;
  let state=normalize(), selectedMonth=0;
  try { state=normalize(JSON.parse(root.localStorage.getItem(KEY)||'{}')); } catch {}
  function esc(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function save(){
    try{ root.localStorage.setItem(KEY,JSON.stringify(state)); return true; }catch{ return false; }
  }
  const check=(value)=>value?' checked':'';
  const readable=(v)=>new Date(v+'T00:00:00Z').toLocaleDateString('ru-RU',{day:'numeric',month:'short',timeZone:'UTC'});
  function profileAge(start){return root.MamaProfile.birth()?root.MamaProfile.months(root.MamaProfile.birth(),start):null;}
  function stalePlan(){const b=root.MamaProfile.birth();return b&&((state.profileBirth&&state.profileBirth!==b)||profileAge(state.start)!==state.age);}
  root.MamaPlans.adapters.feeding=()=>{if(stalePlan())return [];const row=build(state).find(r=>r.date>=root.MamaProfile.today());if(!row)return [];const food=foods.find(f=>f.id===row.newId);return [{id:'feeding-'+row.date,kind:'feeding',due:row.date,title:food?'По плану: '+food.name:'Знакомые продукты',note:'День '+(row.index+1)+' · это план, а не запись о съеденном. Темп можно замедлить.',open:()=>root.openComplementaryCalendar()}];};
  function show(){
    root.closeModal?.();
    document.getElementById('screen').innerHTML=`
      <section class="feeding-head">
        <button class="feeding-back" onclick="location.reload()">← Главная</button>
        <span class="feeding-eyebrow">ПИТАНИЕ МАЛЫША · КАЛЕНДАРЬ 2</span>
        <h1>Прикорм в вашем темпе</h1>
        <p>Понятный календарь по месяцам — с маленькими пробами, знакомыми вкусами и правом не торопиться.</p>
      </section>
      <section class="feeding-panel feeding-note">
        <strong>Это лишь ориентир, а не обязательная норма.</strong>
        <p>Любой этап можно растянуть на несколько дней. Следуйте готовности и аппетиту малыша: отвернулся или закрыл рот — заканчиваем. Количество в таблице можно уменьшить. Увеличивайте только если малыш готов и хочет ещё; кнопка «Повторить день» сохраняет все порции без роста.</p>
        <p>Все количества — в <b>ровных чайных ложках без горки</b> (ч. л.). Обычная чайная ложка — около 5 мл, детские ложечки могут быть меньше. Объём пюре и его масса не равны точно. Для кусочков ложки служат условной мерой порции. Смесь или грудное молоко остаются важной частью питания до года.</p>
      </section>
      <section class="feeding-panel">
        <h2>Настроим ваш календарь</h2>
        ${root.MamaProfile.dateField()}<form id="feeding-form">
          <div class="feeding-fields">
            <label>Возраст на дату начала
              <select name="age" ${root.MamaProfile.birth()?'disabled':''}>${Array.from({length:8},(_,i)=>i+4).map(a=>`<option value="${a}"${state.age===a?' selected':''}>${a} месяцев</option>`).join('')}</select>
            </label>
            <p id="feeding-profile-age" class="feeding-muted"></p><label>Дата начала прикорма<input type="date" name="start" value="${esc(state.start)}" required min="2020-01-01" max="2100-12-31"></label>
            <label>Дней на один новый овощ<input type="number" name="vegDays" min="2" max="14" step="1" value="${state.vegDays}" required inputmode="numeric"></label>
            <label>Дней на другие новые продукты<input type="number" name="otherDays" min="2" max="14" step="1" value="${state.otherDays}" required inputmode="numeric"></label>
          </div>
          <p class="feeding-muted">По умолчанию — 3 дня. CDC предлагает 3–5 дней между новыми продуктами на старте. В обоих полях можно выбрать от 2 до 14 дней. Выбор 2 дней — более быстрый вариант; при экземе или аллергии обсудите темп с врачом. Аллергены вводим отдельно.</p>
          <label class="feeding-check"><input type="checkbox" name="ready"${check(state.ready)}>Малыш держит голову, устойчиво сидит с поддержкой и может проглатывать пищу.</label>
          <label class="feeding-check"><input type="checkbox" name="early"${check(state.early)}>Если стартуем в 4–5 месяцев: ранний старт согласован с педиатром.</label>
          <details class="feeding-known"><summary>Что малыш уже пробовал и хорошо переносит?</summary>
            <p class="feeding-muted">Отметьте только действительно знакомые продукты. Они не будут повторно вводиться как новые. При подозрении на аллергию не отмечайте продукт.</p>
            <div class="feeding-known-grid">${foods.map(f=>`<label class="feeding-check"><input type="checkbox" name="known" value="${f.id}"${check(state.known.includes(f.id))}>${esc(f.name)}</label>`).join('')}</div>
          </details>
          <button class="feeding-primary" type="submit">Построить мой календарь</button>
          <p class="feeding-muted">При смене настроек пересчитается весь план и уберутся добавленные повторы. Это план, а не запись о том, что малыш уже съел.</p>
          <p id="feeding-status" role="status"></p>
        </form>
      </section>
      <section class="feeding-panel">
        <h2>Подсказки по возрасту</h2>
        <div class="feeding-age-tabs" role="group" aria-label="Возраст малыша">${Object.keys(guides).map(a=>`<button type="button" data-guide="${a}" aria-pressed="${Number(a)===state.age}">${a} мес.</button>`).join('')}</div>
        <div id="feeding-guide"></div>
      </section>
      <div id="feeding-calendar"></div>
      <section class="feeding-panel">
        <h2>Как пользоваться планом</h2>
        <ul class="feeding-tips">
          <li>В начале прикорм один раз в день — например, в 11:00–13:00 перед привычным молочным кормлением. Выберите спокойное время, когда малыш не слишком голоден и не устал.</li>
          <li>Новую еду можно добавить к уже знакомой. Указанные ложки нового продукта не требуют съесть всю остальную порцию.</li>
          <li>«Знакомое» в будущих строках означает знакомое <b>по плану</b>. Используйте эти продукты только если малыш действительно их пробовал и хорошо переносит.</li>
          <li>После знакомства с аллергеном продолжайте предлагать его регулярно при хорошей переносимости. Настройки дней не означают, что продукт точно безопасен.</li>
          <li>При выраженной экземе или известной аллергии план введения аллергенов согласуйте с врачом. При подозрении на реакцию прекратите продукт и обратитесь за медицинской помощью; не повторяйте пробу самостоятельно.</li>
          <li>Кормите вертикально сидящего малыша, постоянно оставайтесь рядом. Не давайте целые орехи, густую арахисовую пасту, твёрдые или круглые кусочки.</li>
          <li>Не добавляйте соль и сахар. До года — без мёда и коровьего молока как напитка. Масло можно добавить к знакомому блюду; если оно уже есть в готовом пюре, лишнее не нужно.</li>
          <li>Примерно с 6 месяцев предложите несколько глотков воды из чашки во время еды. Молочные кормления не уменьшайте автоматически по таблице.</li>
        </ul>
        <div class="feeding-alert"><strong>Когда нужна срочная помощь</strong><p>Отёк губ или языка, трудное дыхание, резкая вялость, повторная рвота с бледностью или быстрое ухудшение после еды — прекратите кормление и вызовите экстренную помощь (112 там, где этот номер действует).</p></div>
        <details class="feeding-sources"><summary>На чём основаны подсказки</summary><p>Идеи разнообразия дополнены 10 октября 2026 года. <a href="https://www.nhs.uk/best-start-in-life/baby/weaning/what-to-feed-your-baby/from-around-6-months/" target="_blank" rel="noopener">NHS: продукты и безопасная подача с примерно 6 месяцев</a>. Очерёдность дополнительных продуктов по месяцам — пример меню, а не рекомендация NHS.</p>
          <p>Порядок блюд и ложки в календаре — примеры для планирования, а не норматив из рекомендаций. Обязательной последовательности овощей нет. Рекомендации разных стран по старту отличаются; базовый ориентир здесь — около 6 месяцев. Проверено 3 октября 2026 года.</p>
          <ul>
            <li><a href="https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html" target="_blank" rel="noopener">CDC: готовность, первые продукты и интервалы</a></li>
            <li><a href="https://www.nhs.uk/baby/weaning-and-feeding/babys-first-solid-foods/" target="_blank" rel="noopener">NHS: прикорм и питание по возрасту</a></li>
            <li><a href="https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/food-allergies/" target="_blank" rel="noopener">NHS: введение аллергенов</a></li>
            <li><a href="https://www.kindergesundheit-info.de/themen/ernaehrung/0-12-monate/beikosteinfuehrung/" target="_blank" rel="noopener">BIÖG: постепенное введение прикорма</a></li>
          </ul>
        </details>
      </section>`;
    document.getElementById('feeding-form').addEventListener('submit',event=>{
      event.preventDefault();
      const form=event.currentTarget, fd=new FormData(form);
      if(!date(fd.get('start'))) return;
      const pa=profileAge(fd.get('start'));if(root.MamaProfile.birth()&&(pa===null||pa<4||pa>11)){document.getElementById('feeding-status').textContent='На дату начала малышу должно быть от 4 до 11 полных месяцев. Проверьте даты; готовность к прикорму обсуждают отдельно.';return;}
      state=normalize({profileBirth:root.MamaProfile.birth(),age:pa===null?fd.get('age'):pa,start:fd.get('start'),vegDays:fd.get('vegDays'),
        otherDays:fd.get('otherDays'),ready:fd.has('ready'),early:fd.has('early'),known:fd.getAll('known')});
      selectedMonth=0;
      const saved=save();
      show();
      document.getElementById('feeding-status').textContent=saved?'Настройки сохранены на этом устройстве.':'Календарь построен. На этом устройстве сохранить настройки не удалось.';
      document.getElementById('feeding-calendar').scrollIntoView({behavior:'smooth',block:'start'});
    });
    const startInput=document.querySelector('#feeding-form [name="start"]');
    function updateAge(){const b=root.MamaProfile.birth(),a=profileAge(startInput.value);document.getElementById('feeding-profile-age').textContent=b?(a===null?'Дата начала раньше рождения.':'Из профиля: '+a+' полных месяцев на дату начала. Для изменения используйте дату начала или профиль.'):'Без точной даты рождения возраст можно выбрать вручную.';if(b&&a>=4&&a<=11)document.querySelector('#feeding-form [name="age"]').value=String(a);}
    startInput.addEventListener('change',updateAge);updateAge();
    document.querySelectorAll('[data-guide]').forEach(b=>b.addEventListener('click',()=>renderGuide(Number(b.dataset.guide))));
    renderGuide(state.age);
    renderCalendar();
  }
  function renderGuide(age){
    const [title,body]=guides[age];
    document.getElementById('feeding-guide').innerHTML=`<h3>${age} месяцев · ${title}</h3><p>${body}</p>`;
    document.querySelectorAll('[data-guide]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.guide)===age)));
  }
  function renderCalendar(){
    const container=document.getElementById('feeding-calendar');
    if(stalePlan()){container.innerHTML='<section class="feeding-panel feeding-note"><h2>Проверьте план после изменения профиля</h2><p>Возраст или дата рождения отличаются от сохранённого плана. Его настройки и повторы сохранены. Проверьте дату начала и нажмите «Построить мой календарь», если хотите пересчитать план.</p></section>';return;}
    if(!state.ready || state.age<6 && !state.early){
      container.innerHTML=`<section class="feeding-panel feeding-note"><h2>Перед началом</h2><p>Обычно стартуют около 6 месяцев при готовности малыша. Отметьте признаки готовности в настройках. Для раннего старта в 4–5 месяцев дополнительно требуется согласование с педиатром.</p><p>Подсказки по возрасту уже доступны выше.</p></section>`;
      return;
    }
    const rows=build(state), months=12-state.age;
    selectedMonth=Math.min(selectedMonth,months-1);
    const view=rows.filter(r=>r.month===selectedMonth);
    const fresh=[...new Set(view.filter(r=>r.newId&&r.step===1&&!r.repeated).map(r=>r.newId))].map(id=>foods.find(f=>f.id===id).name);

    container.innerHTML=`
      <section class="feeding-panel feeding-calendar-panel">
        <div class="feeding-title-line"><div><span class="feeding-eyebrow">ВАШ ПЛАН</span><h2>Месяц ${selectedMonth+1} прикорма</h2></div><button type="button" class="feeding-print">Печать</button></div>
        <p class="feeding-muted">${readable(view[0].date)} — ${readable(view[view.length-1].date)} · примерно ${state.age+selectedMonth} месяцев · новый овощ на ${state.vegDays} дня</p>
        <div class="feeding-month-tabs" role="group" aria-label="Месяц прикорма">${Array.from({length:months},(_,i)=>`<button type="button" data-month="${i}" aria-pressed="${i===selectedMonth}">Месяц ${i+1}<small>≈ ${state.age+i} мес.</small></button>`).join('')}</div>
        <p class="feeding-note-inline">Календарь продолжается из месяца в месяц. Можно повторять день без увеличения количества — следующие даты сдвинутся. Новая проба и знакомая основа считаются отдельно. Знакомые порции растут постепенно и не сбрасываются при смене месяца. При старте с нуля: с 2 днями на овощ картофель появится на 11-й день, с 3 днями — на 16-й; при более медленном темпе даты сдвигаются. После первых овощей добавляем источники железа, не дожидаясь знакомства со всеми овощами.</p>
        <p class="feeding-note-inline"><b>${fresh.length?'Новые знакомства в этом месяце: '+esc(fresh.join(', '))+'.':'В этом месяце нет начала новой пробы.'}</b> ${fresh.length?'':'Возможно, продолжается длинная проба, продукты уже отмечены знакомыми или список идей этого этапа завершён. '}Дополнительные идеи распределены по месяцам для удобства: это не медицинские сроки и не запрет познакомиться раньше, если возраст и готовность подходят. Не нужно пробовать весь список до года.</p>
        <div class="feeding-table-wrap"><table class="feeding-table">
          <caption>Пример прикорма: месяц ${selectedMonth+1}. Количество можно уменьшить по аппетиту.</caption>
          <thead><tr><th scope="col">Когда</th><th scope="col">Новый продукт</th><th scope="col">Знакомая еда</th><th scope="col">После еды</th></tr></thead>
          <tbody>${view.map(rowHTML).join('')}</tbody>
        </table></div>
        <p class="feeding-muted">Порции — примеры, не цель и не предел. Если малыш начинает прикорм в более старшем возрасте, всё равно начните с небольших проб. Завтрак и ужин добавляйте постепенно по навыкам и аппетиту.</p>
      </section>`;
    container.querySelectorAll('[data-month]').forEach(b=>b.addEventListener('click',()=>{selectedMonth=Number(b.dataset.month);renderCalendar();}));
    container.querySelector('.feeding-print').addEventListener('click',()=>root.print());
    container.querySelectorAll('[data-repeat]').forEach(b=>b.addEventListener('click',()=>{
      const raw=b.dataset.repeat;
      state.repeats[raw]=(state.repeats[raw]||0)+1;
      const saved=save();
      renderCalendar();
      document.getElementById('feeding-status').textContent=saved?'День повторён. Следующие даты сдвинуты; настройки сохранены.':'День повторён. Сохранить изменения на этом устройстве не удалось.';
    }));
  }
  function rowHTML(r){
    const f=foods.find(x=>x.id===r.newId);
    const known=r.familiar.map(s=>`<div class="feeding-meal"><b>${s.label}:</b> ${s.parts.map(p=>`${spoon(p.spoons)} ${esc(p.name)}`).join(' + ')}</div>`).join('');
    return `<tr>
      <td data-label="Когда"><b>${readable(r.date)}</b><small>День ${r.index+1}${r.repeated?' · повтор':''}</small><button type="button" class="feeding-repeat" data-repeat="${r.raw}" aria-label="Повторить день ${r.index+1}">Повторить день</button></td>
      <td data-label="Новый продукт">${f?`<strong>${esc(f.name)}</strong><span class="feeding-amount">${spoon(r.newAmount)}</span><small>Проба ${r.step} из ${r.duration} · 11:00–13:00</small>${f.allergen?'<span class="feeding-badge">Аллерген · вводить отдельно</span>':''}<details><summary>Как приготовить</summary><p>${f.prep}</p></details>`:'<strong>День знакомых продуктов</strong><small>Новая проба сегодня не запланирована. Чередуем знакомую еду и подходящие навыкам текстуры.</small>'}</td>
      <td data-label="Знакомая еда">${known||'<p>Пока без знакомой основы. Только маленькая проба нового продукта.</p>'}<small>Только то, что уже пробовали и хорошо переносите. Можно меньше.</small>${r.newId?`<div class="feeding-total">Проба + основа обеда: <b>${spoon(r.lunchTotal)}</b><small>Знакомые фрукты и повтор аллергена после обеда — отдельно.</small></div>`:""}</td>
      <td data-label="После еды"><strong>${MILK}</strong><small>По аппетиту. Продолжайте обычные молочные кормления в течение дня.</small></td>
    </tr>`;
  }
  root.openComplementaryCalendar=function(){show();root.scrollTo(0,0);};
})(typeof window!=='undefined'?window:null);



