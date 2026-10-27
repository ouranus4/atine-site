/* ATINE site: language switch, header, reveals, counters, cart, Nova Poshta, forms, interactive blocks */
(function(){
var ROOT=window.ATINE_ROOT||'',LANG=window.ATINE_LANG||'uk';
var P=[{"slug": "fitochai", "id": "tea", "name": "Фіточай", "full": "ATINE фіточай", "spec": "20 пакетиків", "price": 1100, "img": "ph_tea", "img2": "p_tea1", "unit": "1 порція = 1 базова доза", "branch": "Водна екстракція", "short": "Гранульований чай розчиняється у теплій воді та п’ється невеликими порціями. Коли потрібна м’яка підтримка, гідратація й форма напою замість таблеток.", "sci": "Під час заварювання до напою переходить водорозчинна частина фітохімічного комплексу 26 коренів. Саме фіточай застосовувався в опублікованих клінічних спостереженнях.", "role": "Базова платформа схеми прийому. З фіточаю починається поступове дозове навантаження: одна порція — одна базова доза, тричі на добу.", "how": "1 порція 3 рази на добу. Точну схему узгоджуйте з лікарем.", "w": 0.3, "imgf": "ph_tea.jpg"}, {"slug": "tabletky", "id": "tab", "name": "Таблетки", "full": "ATINE таблетки", "spec": "450 мг · 50 таблеток", "price": 2200, "img": "cut_tabs", "img2": "p_peals1", "unit": "1 таблетка = 0,5 умовної дози", "branch": "Етанольна екстракція", "short": "Дозована форма на основі густого екстракту. Дозволяє нарощувати навантаження малим кроком у 0,5 дози.", "sci": "Таблетки виготовляються на основі густого етанольного екстракту — тієї форми, яку вивчали в експериментальних дослідженнях 2025–2026 років.", "role": "Перший крок нарощування: до базової дози фіточаю додають таблетки по 0,5 умовної дози.", "how": "По 1–2 таблетки 3 рази на добу за 20 хвилин до їжі або через 1–2 години після їжі.", "w": 0.15, "imgf": "cut_tabs.webp"}, {"slug": "kapsuly", "id": "cap", "name": "Капсули", "full": "ATINE капсули", "spec": "600 мг · 75 капсул", "price": 3300, "img": "ph_caps", "img2": "ph_caps2", "unit": "1 капсула = 1 умовна доза", "branch": "Етанольна екстракція", "short": "Зручна дозована форма густого екстракту без смаку. Одна капсула відповідає одній умовній дозі.", "sci": "Капсули походять від густого етанольного екстракту технологічно і стандартизуються через кількість екстракту в умовних дозах.", "role": "Наступний крок нарощування після таблеток: капсула додає 1 умовну дозу до прийому.", "how": "Кількість капсул на прийом визначається фазою схеми. Погоджуйте з лікарем.", "w": 0.15, "imgf": "ph_caps.jpg"}, {"slug": "hustyi-ekstrakt", "id": "thick", "name": "Густий екстракт", "full": "ATINE густий екстракт", "spec": "100 мл", "price": 4400, "img": "ph_thick", "img2": "p_extract1", "unit": "1 чайна ложка = 5 умовних доз", "branch": "Етанольна екстракція", "short": "Найбільш концентрована форма. Дозу відміряють краплями або чайною ложкою, додаючи до води; зручно точно налаштувати добову кількість з лікарем.", "sci": "Саме густий етанольний екстракт досліджували на чотирьох тест-системах у 2025–2026 роках: U-138 MG, HEK 293, Allium cepa та Drosophila.", "role": "Концентрована форма етанольної гілки для лікарських схем, коли потрібне точне налаштування добового навантаження.", "how": "Дозування визначає лікар. Не перевищуйте рекомендовану кількість.", "w": 0.35, "imgf": "ph_thick.jpg"}, {"slug": "sukhyi-ekstrakt", "id": "dry", "name": "Сухий екстракт", "full": "ATINE сухий екстракт", "spec": "5 г · 36 саше", "price": 5500, "img": "ph_dry", "img2": "p_dryExtract1", "unit": "1 саше = 3 умовні дози", "branch": "Етанольна екстракція", "short": "Високо стандартизований порошковий екстракт на основі 26 коренів у зручних саше.", "sci": "Сухий екстракт у саше виготовляється з густого етанольного екстракту і належить до тієї ж екстракційної гілки.", "role": "Форма для пікових фаз схеми: одне саше замінює кілька окремих прийомів таблеток чи капсул.", "how": "Кількість саше визначається фазою схеми та рекомендацією лікаря.", "w": 0.25, "imgf": "ph_dry.jpg"}];
var D=window.ATINE_I18N;
function tr(s){return D&&D.T[s]||s;}
window.tr=tr;
function $(s,c){return (c||document).querySelector(s);}
function $$(s,c){return [].slice.call((c||document).querySelectorAll(s));}
function fmt(n){return '₴'+String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,' ');}
function bySlug(s){for(var i=0;i<P.length;i++)if(P[i].slug===s)return P[i];}
function img(k){return ROOT+'assets/img/'+k;}

/* language */
$$('.lang button').forEach(function(b){
  b.setAttribute('aria-pressed',b.dataset.lang===LANG);
  b.addEventListener('click',function(){
    if(b.dataset.lang===LANG)return;
    try{localStorage.setItem('atine-lang',b.dataset.lang);sessionStorage.setItem('atine-y',String(scrollY));}catch(e){}
    location.reload();
  });
});
try{var y=sessionStorage.getItem('atine-y');if(y!==null){sessionStorage.removeItem('atine-y');addEventListener('load',function(){scrollTo(0,+y);});}}catch(e){}

/* header */
var hd=$('.hd'),bg=$('.burger');
bg.addEventListener('click',function(){var o=hd.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',tr(o?'Закрити':'Меню'));});
$$('.nav a').forEach(function(a){a.addEventListener('click',function(){hd.classList.remove('open');bg.setAttribute('aria-expanded','false');});});
addEventListener('scroll',function(){hd.classList.toggle('sc',scrollY>10);},{passive:true});

/* cart storage */
function getCart(){try{return JSON.parse(localStorage.getItem('atine-cart'))||{};}catch(e){return {};}}
function setCart(c){try{localStorage.setItem('atine-cart',JSON.stringify(c));}catch(e){}badge();document.dispatchEvent(new Event('cart'));}
function count(c){var n=0;for(var k in c)n+=c[k];return n;}
function badge(){var n=count(getCart());$$('[data-cart-n]').forEach(function(el){el.textContent=n;el.dataset.z=n?0:1;});}
badge();
var toast=document.createElement('div');toast.className='toast';toast.setAttribute('role','status');document.body.appendChild(toast);var tt;
function addToCart(slug,q){var c=getCart();c[slug]=(c[slug]||0)+(q||1);setCart(c);var p=bySlug(slug);
  toast.innerHTML='<span>'+tr(p.full)+' · '+tr('додано до кошика')+'</span><a href="'+ROOT+'koshyk/">'+tr('Оформити')+'</a>';
  toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on');},3800);}
document.addEventListener('click',function(e){var b=e.target.closest('[data-add]');if(!b)return;e.preventDefault();
  var q=1,qi=b.dataset.qty&&document.getElementById(b.dataset.qty);if(qi)q=Math.max(1,parseInt(qi.value,10)||1);
  addToCart(b.dataset.add,q);if(b.dataset.go)location.href=ROOT+'koshyk/';});

/* qty steppers */
document.addEventListener('click',function(e){var b=e.target.closest('.qty button[data-d]');if(!b||b.closest('.citem'))return;
  var inp=b.parentNode.querySelector('input');if(!inp)return;inp.value=Math.max(+inp.min||0,Math.min(+inp.max||99,(parseInt(inp.value,10)||0)+(+b.dataset.d)));inp.dispatchEvent(new Event('input',{bubbles:true}));});

/* Nova Poshta (public API: cities, warehouses, price) */
var NP_SENDER='8d5a980d-391c-11dd-90d9-001a92567626'; /* місто відправника: Київ [уточнити] */
function np(model,method,props){return fetch('https://api.novaposhta.ua/v2.0/json/',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({apiKey:'',modelName:model,calledMethod:method,methodProperties:props})}).then(function(r){return r.json();});}
function autocomplete(input,list,search,pick){var tm,items=[],sel=-1;
  function close(){list.hidden=true;input.setAttribute('aria-expanded','false');}
  function render(){list.innerHTML=items.map(function(it,i){return '<li role="option" id="'+list.id+'-'+i+'" aria-selected="'+(i===sel)+'">'+it.html+'</li>';}).join('');list.hidden=!items.length;input.setAttribute('aria-expanded',!!items.length);}
  input.addEventListener('input',function(){clearTimeout(tm);var q=input.value.trim();input.dataset.ref='';if(q.length<2){items=[];render();return;}
    tm=setTimeout(function(){search(q).then(function(r){items=r;sel=-1;render();}).catch(function(){items=[];render();});},280);});
  input.addEventListener('keydown',function(e){if(list.hidden)return;if(e.key==='ArrowDown'){e.preventDefault();sel=Math.min(items.length-1,sel+1);render();}else if(e.key==='ArrowUp'){e.preventDefault();sel=Math.max(0,sel-1);render();}else if(e.key==='Enter'&&sel>-1){e.preventDefault();choose(sel);}else if(e.key==='Escape')close();});
  list.addEventListener('mousedown',function(e){var li=e.target.closest('li');if(li){e.preventDefault();choose([].indexOf.call(list.children,li));}});
  input.addEventListener('blur',function(){setTimeout(close,120);});
  function choose(i){var it=items[i];input.value=it.label;close();pick(it);}
}
function citySearch(q){return np('Address','searchSettlements',{CityName:q,Limit:'8',Page:'1'}).then(function(r){var a=(r.data&&r.data[0]&&r.data[0].Addresses)||[];
  return a.filter(function(x){return x.Warehouses>0;}).map(function(x){return {label:x.Present,html:x.MainDescription+'<small>'+x.Present+'</small>',ref:x.DeliveryCity};});});}
function whSearch(cityRef,q){return np('Address','getWarehouses',{CityRef:cityRef,FindByString:q,Limit:'20',Page:'1'}).then(function(r){
  return (r.data||[]).map(function(w){var d=LANG==='ru'&&w.DescriptionRu?w.DescriptionRu:w.Description;return {label:d,html:d,ref:w.Ref};});});}
function npPrice(cityRef,cost,weight){return np('InternetDocument','getDocumentPrice',{CitySender:NP_SENDER,CityRecipient:cityRef,Weight:String(Math.max(.5,weight)),ServiceType:'WarehouseWarehouse',Cost:String(Math.max(300,Math.round(cost))),CargoType:'Parcel',SeatsAmount:'1'}).then(function(r){return r.success&&r.data[0]?r.data[0].Cost:null;});}
window.ATINE_NP={city:citySearch,wh:whSearch,price:npPrice,ac:autocomplete};

/* product page delivery estimate */
var pnp=$('#npCalc');
if(pnp){var pc=$('#npCity'),pres=$('#npRes'),slug=pnp.dataset.slug,pp=bySlug(slug);
  autocomplete(pc,$('#npCityList'),citySearch,function(it){pc.dataset.ref=it.ref;pres.textContent=tr('Розраховуємо…');
    var q=parseInt(($('#pQty')||{}).value,10)||1;
    npPrice(it.ref,pp.price*q,pp.w*q).then(function(c){pres.innerHTML=c==null?tr('Не вдалося розрахувати. Спробуйте ще раз.'):tr('Доставка у відділення Нової Пошти')+': <b>'+fmt(c)+'</b> · '+tr('1–3 дні');}).catch(function(){pres.textContent=tr('Не вдалося розрахувати. Спробуйте ще раз.');});});}

/* gallery */
$$('.gal .th button').forEach(function(b){b.addEventListener('click',function(){var m=$('.gal .main img');m.style.opacity=0;setTimeout(function(){m.src=b.dataset.src;m.style.opacity=1;},180);$$('.gal .th button').forEach(function(x){x.setAttribute('aria-pressed',x===b);});});});

/* cart page */
var co=$('#checkout');
if(co){
  var list=$('#cItems'),shipCost=null,cityRef='';
  function total(){var c=getCart(),s=0,w=0;for(var k in c){var p=bySlug(k);if(p){s+=p.price*c[k];w+=p.w*c[k];}}return {s:s,w:w,n:count(c)};}
  function draw(){var c=getCart(),h='';
    for(var k in c){var p=bySlug(k);if(!p)continue;h+='<div class="citem" data-s="'+k+'"><div class="im"><img src="'+img(p.imgf)+'" alt=""></div><div><b>'+tr(p.full)+'</b><small>'+tr(p.spec)+' · '+fmt(p.price)+'</small></div><div class="qty"><button type="button" data-d="-1" aria-label="'+tr('Менше')+'">−</button><output>'+c[k]+'</output><button type="button" data-d="1" aria-label="'+tr('Більше')+'">+</button></div><b class="sum">'+fmt(p.price*c[k])+'</b><button class="rm" type="button" aria-label="'+tr('Видалити')+'">✕</button></div>';}
    list.innerHTML=h||'<div class="empty">'+tr('Кошик порожній.')+' <a href="'+ROOT+'produkty/" style="text-decoration:underline">'+tr('Перейти до продуктів')+'</a></div>';
    var t=total();$('#sItems').textContent=fmt(t.s);$('#sN').textContent=t.n;
    var dm=(co.querySelector('[name=dm]:checked')||{}).value;
    $('#sShip').textContent=dm==='np'?(shipCost!=null?fmt(shipCost):tr('оберіть місто')):(dm==='up'?tr('за тарифом Укрпошти'):tr('за запитом'));
    $('#sTot').textContent=fmt(t.s+(dm==='np'&&shipCost?shipCost:0));
    $('#coBtn').disabled=!t.n;}
  list.addEventListener('click',function(e){var it=e.target.closest('.citem');if(!it)return;var c=getCart(),k=it.dataset.s;
    var b=e.target.closest('button');if(!b)return;
    if(b.classList.contains('rm'))delete c[k];else if(b.dataset.d){c[k]=(c[k]||0)+(+b.dataset.d);if(c[k]<1)delete c[k];}
    setCart(c);reprice();});
  function reprice(){var t=total();if(cityRef&&t.n){$('#sShip').textContent=tr('Розраховуємо…');npPrice(cityRef,t.s,t.w).then(function(c){shipCost=c;draw();}).catch(function(){shipCost=null;draw();});}else draw();}
  var cIn=$('#coCity'),wIn=$('#coWh');
  autocomplete(cIn,$('#coCityList'),citySearch,function(it){cityRef=it.ref;cIn.dataset.ref=it.ref;wIn.disabled=false;wIn.value='';wIn.focus();reprice();});
  autocomplete(wIn,$('#coWhList'),function(q){return whSearch(cityRef,q);},function(it){wIn.dataset.ref=it.ref;});
  wIn.addEventListener('focus',function(){if(cityRef&&!wIn.value)wIn.dispatchEvent(new Event('input'));});
  $$('[name=dm]',co).forEach(function(r){r.addEventListener('change',function(){$$('[data-dm]',co).forEach(function(b){b.hidden=b.dataset.dm!==r.value;});draw();});});
  co.addEventListener('submit',function(e){e.preventDefault();var ok=true,first;
    $$('[required]',co).forEach(function(f){if(f.closest('[hidden]'))return;var bad=f.type==='checkbox'?!f.checked:!f.value.trim();if(f.type==='tel'&&f.value.replace(/\D/g,'').length<10)bad=true;if(f.type==='email'&&f.value&&!/^\S+@\S+\.\S+$/.test(f.value))bad=true;var w=f.closest('.fld');if(w)w.classList.toggle('bad',bad);if(bad){ok=false;first=first||f;}});
    if(!ok){first.focus();return;}
    var no='AT-'+String(Date.now()).slice(-6);
    try{localStorage.setItem('atine-last-order',JSON.stringify({no:no,cart:getCart(),t:Date.now()}));}catch(e){}
    $('#coMain').hidden=true;var dn=$('#coDone');dn.hidden=false;$('#coNo').textContent=no;setCart({});dn.scrollIntoView({behavior:'smooth',block:'start'});});
  document.addEventListener('cart',draw);draw();
}

/* generic forms (prototype: nothing is sent) */
$$('form[data-proto]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var ok=true,first;
  $$('[required]',f).forEach(function(x){var bad=x.type==='checkbox'?!x.checked:!x.value.trim();var w=x.closest('.fld');if(w)w.classList.toggle('bad',bad);if(bad){ok=false;first=first||x;}});
  if(!ok){first.focus();return;}var m=f.querySelector('.ok');if(m)m.hidden=false;});});
/* preselect request type from ?type= */
var qt=(location.search.match(/[?&]type=(\w+)/)||[])[1];if(qt){var r=document.getElementById('t-'+qt);if(r)r.checked=true;}

/* network map */
$$('.net').forEach(function(net){var nodes=$$('.nd',net),panel=$('.net-panel',net),lines=$$('line[data-i]',net),tm;
  function show(i){nodes.forEach(function(n,j){n.setAttribute('aria-pressed',j===i);});lines.forEach(function(l){l.classList.toggle('on',+l.dataset.i===i);});
    var d=nodes[i].dataset;panel.classList.add('sw');clearTimeout(tm);tm=setTimeout(function(){
      $('h3',panel).textContent=nodes[i].querySelector('span').textContent;$('p',panel).textContent=d.t;
      $('.tg',panel).innerHTML='<span class="tag '+d.c+'">'+d.s+'</span>';panel.classList.remove('sw');},180);}
  nodes.forEach(function(n,i){n.addEventListener('click',function(){show(i);});});show(0);});

/* mechanism switcher (+ 3 levels) */
$$('.msw').forEach(function(m){var tabs=$$('.msw-tabs button',m),pn=$('.msw-panel',m),lvl='p',cur=0,tm;
  var lvb=$$('.lv button',m),bars=$$('.track li',m);
  function paint(){var d=tabs[cur].dataset;$('.lbl.k',pn).textContent=tr('Механізм')+' '+String(cur+1).padStart(2,'0')+' / '+String(tabs.length).padStart(2,'0');
    $('h3',pn).textContent=tabs[cur].querySelector('.t').textContent;$('.txt',pn).textContent=lvl==='d'?d.d:d.p;
    var s=$('.src2',pn);if(s)s.innerHTML=d.s||'';
    bars.forEach(function(b,j){b.classList.toggle('on',j<=cur);b.classList.toggle('cur',j===cur);});}
  function show(i,f){cur=(i+tabs.length)%tabs.length;tabs.forEach(function(t,j){t.setAttribute('aria-selected',j===cur);t.tabIndex=j===cur?0:-1;});if(f)tabs[cur].focus();
    pn.classList.add('sw');clearTimeout(tm);tm=setTimeout(function(){paint();pn.classList.remove('sw');},180);}
  tabs.forEach(function(t,j){t.addEventListener('click',function(){show(j);});t.addEventListener('keydown',function(e){if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();show(cur+1,true);}if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();show(cur-1,true);}});});
  lvb.forEach(function(b){b.addEventListener('click',function(){lvl=b.dataset.l;lvb.forEach(function(x){x.setAttribute('aria-pressed',x===b);});pn.classList.add('sw');setTimeout(function(){paint();pn.classList.remove('sw');},180);});});
  paint();});

/* library + downloads filter */
$$('[data-filter]').forEach(function(f){var tgt=document.getElementById(f.dataset.filter);
  f.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;$$('button',f).forEach(function(x){x.setAttribute('aria-pressed',x===b);});
    $$('[data-type]',tgt).forEach(function(it){it.hidden=b.dataset.f!=='all'&&it.dataset.type.split(' ').indexOf(b.dataset.f)<0;});});});

/* schedule */
var sch=$('#sch');
if(sch){var S=JSON.parse($('#schData').textContent),mode='basic',ph=$('#schPh');
  function drawS(){var s=S[mode];$('#schT').textContent=tr(s.t);$('#schP').textContent=tr(s.p);
    ph.innerHTML=s.ph.map(function(x,i){return '<div class="phase" style="--w:'+x.w+'"><div class="bar2"><b>'+tr(x.d)+'</b><i style="--dl:'+(i*.12)+'s"></i></div><span class="nm2">'+tr(x.n)+'</span><span class="ds">'+tr(x.s)+'</span></div>';}).join('');
    requestAnimationFrame(function(){requestAnimationFrame(function(){$$('.bar2 i',ph).forEach(function(b,i){b.style.height=(s.ph[i].h)+'%';});});});}
  $$('#schMode button').forEach(function(b){b.addEventListener('click',function(){mode=b.dataset.m;$$('#schMode button').forEach(function(x){x.setAttribute('aria-pressed',x===b);});drawS();});});
  drawS();
  /* dose calculator */
  var rows=$$('#calc [data-u]'),out=$('#cOut'),g=$('#cG'),box=$('#cSum'),msg=$('#cMsg');
  function calc(){var t=0;rows.forEach(function(r){t+=(+r.dataset.u)*(parseInt(r.value,10)||0);});out.textContent=String(t).replace('.',',');
    g.style.width=Math.min(100,t/3.5*100)+'%';box.classList.toggle('over',t>3.5);
    msg.textContent=t>3.5?tr('Більше за 3,5 дози на прийом — це вище за пік практичної схеми. Так приймати не можна без рішення лікаря.'):tr('Пік практичної схеми — 3,5 умовної дози на прийом і 11,5–12 доз на добу.');}
  rows.forEach(function(r){r.addEventListener('input',calc);});calc();
  /* product form highlight */
  $$('.fs').forEach(function(b){b.addEventListener('click',function(){$$('.fs').forEach(function(x){x.setAttribute('aria-pressed',x===b);});var p=bySlug(b.dataset.s);
    $('#fsInfo').innerHTML='<b>'+tr(p.full)+'</b> · '+tr(p.unit)+'. '+tr(p.role)+' <a href="'+ROOT+'produkty/'+p.slug+'/" style="text-decoration:underline">'+tr('Детальніше')+'</a>';});});
}


/* autoplay: phones only allow it for muted inline video; retry on first gesture */
function autoplay(v){if(!v)return;v.muted=true;v.defaultMuted=true;v.setAttribute('muted','');v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline','');v.controls=false;
  var go=function(){var p=v.play();if(p&&p.catch)p.catch(function(){});};go();
  v.addEventListener('loadeddata',go);v.addEventListener('canplay',go);
  ['touchstart','scroll','pointerdown','keydown'].forEach(function(e){addEventListener(e,function h(){go();removeEventListener(e,h);},{passive:true,once:true});});
  document.addEventListener('visibilitychange',function(){if(!document.hidden)go();});
  if('IntersectionObserver'in window)new IntersectionObserver(function(es){if(es[0].isIntersecting)go();}).observe(v);}
/* hero video: vertical cut on phones */
var hv=$('#heroV');
if(hv){var vb=hv.dataset.base,vert=innerWidth<760&&innerHeight>innerWidth,nm=vert?'hero_v':'hero';hv.poster=vb+nm+'.jpg';var po=$('.hero2 .poster');if(po)po.src=vb+nm+'.jpg';
  ['webm','mp4'].forEach(function(t){var s=document.createElement('source');s.src=vb+nm+'.'+t;s.type='video/'+t;hv.appendChild(s);});hv.load();autoplay(hv);}
$$('.dna video').forEach(autoplay);

/* quiz: which form suits you */
$$('.qz').forEach(function(q){var ans=[],steps=$$('.qz-step',q),bar=$('.qz-bar i',q);
  function step(i){steps.forEach(function(s,j){s.hidden=j!==i;});$$('.qz-res',q).forEach(function(r){r.hidden=true;});bar.style.width=(i/steps.length*100)+'%';}
  function result(){var a=ans,r='tea';if(a[0]==='doc'||a[1]==='exact')r='thick';else if(a[2]==='old')r='caps';else if(a[1]==='pill'||a[0]==='now'||a[0]==='after')r='tea_tab';
    steps.forEach(function(s){s.hidden=true;});$$('.qz-res',q).forEach(function(x){x.hidden=x.dataset.r!==r;});bar.style.width='100%';}
  steps.forEach(function(s,i){$$('button',s).forEach(function(b){b.addEventListener('click',function(){ans[i]=b.dataset.v;if(i<steps.length-1)step(i+1);else result();});});});
  $$('.qz-again',q).forEach(function(b){b.addEventListener('click',function(){ans=[];step(0);});});step(0);});

/* who are you: digital home paths */
var wt=$$('.who-tabs button');
wt.forEach(function(b){b.addEventListener('click',function(){var i=b.dataset.w;wt.forEach(function(x){x.setAttribute('aria-pressed',x===b);});
  $$('.who-p').forEach(function(p){if(p.dataset.p===i){p.hidden=false;p.classList.add('sw');requestAnimationFrame(function(){requestAnimationFrame(function(){p.classList.remove('sw');});});}else p.hidden=true;});});});

var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
function fitCanvas(c){var r=c.getBoundingClientRect(),d=Math.min(2,devicePixelRatio||1);c.width=Math.max(1,r.width*d);c.height=Math.max(1,r.height*d);var x=c.getContext('2d');x.setTransform(d,0,0,d,0,0);return {w:r.width,h:r.height,x:x};}
function onScreen(el,cb){if(!('IntersectionObserver'in window)){cb(true);return;}new IntersectionObserver(function(es){cb(es[0].isIntersecting);}).observe(el);}

/* hero: gold particles that gather around the cursor */
var hc=$('#heroFx');
if(hc&&!RM){var H2=hc.parentNode,S,pts=[],mx=-999,my=-999,vis=true;
  function initH(){S=fitCanvas(hc);var n=Math.round(Math.min(90,S.w*S.h/16000));pts=[];for(var i=0;i<n;i++)pts.push({x:Math.random()*S.w,y:Math.random()*S.h,vx:(Math.random()-.5)*.25,vy:-Math.random()*.25-.05,r:Math.random()*1.6+.4,a:Math.random()*.6+.25});}
  H2.addEventListener('pointermove',function(e){var r=hc.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;});
  H2.addEventListener('pointerleave',function(){mx=my=-999;});
  addEventListener('resize',initH);initH();onScreen(H2,function(v){vis=v;});
  (function loop(){requestAnimationFrame(loop);if(!vis||document.hidden)return;var x=S.x;x.clearRect(0,0,S.w,S.h);
    for(var i=0;i<pts.length;i++){var p=pts[i],dx=mx-p.x,dy=my-p.y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<160){p.vx+=dx/d*.012;p.vy+=dy/d*.012;}p.vx*=.985;p.vy=p.vy*.985-.002;p.x+=p.vx;p.y+=p.vy;
      if(p.y<-10){p.y=S.h+10;p.x=Math.random()*S.w;}if(p.x<-10)p.x=S.w+10;if(p.x>S.w+10)p.x=-10;
      x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fillStyle='rgba(232,212,176,'+p.a+')';x.fill();
      if(d<160){x.beginPath();x.moveTo(p.x,p.y);x.lineTo(mx,my);x.strokeStyle='rgba(214,194,166,'+(.18*(1-d/160))+')';x.lineWidth=.6;x.stroke();}}})();}

/* digital home: rotating DNA of gold and blue beads */
var dn=$('#dna');
if(dn){var dc=$('canvas',dn),D2,ang=0,spd=.008,tilt=.35,tgt=.008,tt=.35,dv=true;
  function initD(){D2=fitCanvas(dc);}initD();addEventListener('resize',initD);onScreen(dn,function(v){dv=v;});
  dn.addEventListener('pointermove',function(e){var r=dn.getBoundingClientRect();tgt=((e.clientX-r.left)/r.width-.5)*.06;tt=.15+((e.clientY-r.top)/r.height)*.5;});
  dn.addEventListener('pointerleave',function(){tgt=.008;tt=.35;});
  function bead(x,cx,cy,r,c1,c2){var g=x.createRadialGradient(cx-r*.35,cy-r*.35,r*.1,cx,cy,r);g.addColorStop(0,c1);g.addColorStop(1,c2);x.beginPath();x.arc(cx,cy,r,0,7);x.fillStyle=g;x.fill();}
  function drawD(){var x=D2.x,w=D2.w,h=D2.h;x.clearRect(0,0,w,h);var N=26,top=h*.1,bot=h*.86,R=Math.min(w*.3,160),cx=w*.5,items=[];
    for(var i=0;i<N;i++){var t=i/(N-1),y=top+(bot-top)*t,a=ang+t*Math.PI*3.2;
      for(var s=0;s<2;s++){var aa=a+s*Math.PI,z=Math.sin(aa);items.push({x:cx+Math.cos(aa)*R,y:y+z*R*tilt*.35,z:z,s:s,i:i});}}
    for(var j=0;j<N;j++){var p=items[j*2],q=items[j*2+1];x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.strokeStyle='rgba(214,194,166,.22)';x.lineWidth=1;x.stroke();}
    items.sort(function(u,v){return u.z-v.z;});
    items.forEach(function(p){var k=(p.z+1)/2,r=5+k*9,al=.35+k*.65;
      if(p.s===0)bead(x,p.x,p.y,r,'rgba(255,240,205,'+al+')','rgba(168,135,74,'+al+')');else bead(x,p.x,p.y,r,'rgba(196,220,250,'+al+')','rgba(30,70,140,'+al+')');});}
  if(RM)drawD();else(function loop(){requestAnimationFrame(loop);if(!dv||document.hidden)return;spd+=(tgt-spd)*.05;tilt+=(tt-tilt)*.05;ang+=spd+.004;drawD();})();
}
/* reveals + counters */
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function startIntro(){if(!reduce&&$('.hero,.hero2')){document.body.classList.add('intro');setTimeout(function(){document.body.classList.remove('intro');},2600);}}
var pre=$('#pre');
if(pre){var t0=Date.now(),gone=false;
  var hide=function(){if(gone)return;gone=true;pre.classList.add('done');document.documentElement.classList.remove('pre-on');startIntro();setTimeout(function(){pre.remove();},900);};
  var ready=function(){setTimeout(hide,Math.max(0,(reduce?300:1600)-(Date.now()-t0)));};
  if(document.readyState==='complete')ready();else addEventListener('load',ready);
  setTimeout(hide,3500);
}else startIntro();
if(reduce||!('IntersectionObserver'in window))return;
var below=function(el){return el.getBoundingClientRect().top>innerHeight*.92;};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target._c)e.target._c();}});},{rootMargin:'0px 0px -8% 0px',threshold:.06});
var sel=['.who','.dna','.pdb','.mono','.sh','.statement','.need3 .card','.cmp','.facts>div','.why .card','.pc','.proof>div','.st','.steps .card','.profile','.acc details','.hf','.herb-card','.classes .card','.story p','.founder>*','.mission>*','.team .card','.row-link','.drs','.rev','.ebook','.vid','.contact','.disc','.ft .box','.card','.pub','.pcard','.trust>div','.net','.msw','.cta-band','.sch-card','.blk','.mech>div','.tl2>div','.lead','.cols2>*','.eco .br','.sumt tr'];
sel.forEach(function(s){var seen=new Map();$$(s).forEach(function(el){if(el.classList.contains('rv')||!below(el))return;var p=el.parentElement,i=seen.get(p)||0;seen.set(p,i+1);el.classList.add('rv');el.style.setProperty('--d',Math.min(i*.06,.5)+'s');io.observe(el);});});
$$('[data-count]').forEach(function(el){var m=el.textContent.trim().match(/^(\d+)(?:,(\d+))?(.*)$/);if(!m||!below(el))return;var dec=m[2]||'',t=parseFloat(m[1]+'.'+(dec||0)),rest=m[3],fin=el.textContent;
  el._c=function(){var t0=performance.now();(function f(n){var k=Math.min(1,(n-t0)/1400),v=t*(1-Math.pow(1-k,4));el.textContent=(dec?v.toFixed(dec.length).replace('.',','):Math.round(v))+rest;if(k<1)requestAnimationFrame(f);else el.textContent=fin;})(t0);};io.observe(el);});
})();
