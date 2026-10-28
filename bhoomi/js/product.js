import{A as e,C as t,H as n,b as r,h as i,y as a,z as o}from"./store-DfXjkpw_.js";import{C as s,S as c,a as l,c as u,d,f,g as p,h as m,i as h,l as g,n as _,o as v,p as y,r as b,s as x,t as S,w as C}from"./shell-CLwgxTXp.js";/* empty css              */import{n as w,r as T}from"./common-DWwqGhz0.js";l(),m();var E=S(`[data-product]`),D=new URLSearchParams(location.search).get(`id`),O=1,k=null,A=e=>{let t=`<svg width="16" height="16"><use href="#i-star"/></svg>`.repeat(5);return`<span class="stars" style="--r:${(e/5).toFixed(3)}" aria-hidden="true">${t}<span class="stars__fill">${t}</span></span>`};function j(){w(`Product not found — SOLUM`),E.innerHTML=`
    <div class="empty">
      <h2>That product wandered off</h2>
      <p>It may have sold out for good or moved. Everything we have is in the shop.</p>
      <a class="pill pill--ink" href="../shop/">Shop all</a>
    </div>`}function M(n){w(`${n.name} — SOLUM`,`${n.blurb} ${o(n.price)}. Free shipping over USD 150, free returns within 60 days.`);let r=Object.keys(n.stock);k&&(n.stock[k]??0)===0&&(k=null);let i=t().has(n.id);E.innerHTML=`
    <nav class="crumbs crumbs--pd" aria-label="Breadcrumb">
      <ol><li><a href="../shop/">Shop</a></li><li><a href="../shop/?category=${encodeURIComponent(n.category)}">${h(n.category)}</a></li><li aria-current="page">${h(n.name)}</li></ol>
    </nav>
    <article class="pd">
      <div class="pd__gallery" role="group" aria-label="Photos of ${h(n.name)}">
        <div class="pd__stage" data-stage>
          ${n.gallery.map((e,t)=>`<button class="pd__shot ${t===0?`is-on`:``}" type="button" data-zoom="${t}" aria-label="Enlarge photo ${t+1} of ${n.gallery.length}" ${t===0?``:`tabindex="-1"`}><img src="${e}" width="960" height="1280" alt="${t===0?h(n.alt):`${h(n.name)}, close-up`}" ${t===0?`fetchpriority="high"`:`loading="lazy"`} /></button>`).join(``)}
          ${n.gallery.length>1?`<button class="iconbtn pd__arrow pd__arrow--prev" type="button" data-step="-1" aria-label="Previous photo"><svg width="20" height="20" style="transform:scaleX(-1)"><use href="#i-arrow"/></svg></button>
          <button class="iconbtn pd__arrow pd__arrow--next" type="button" data-step="1" aria-label="Next photo"><svg width="20" height="20"><use href="#i-arrow"/></svg></button>
          <p class="pd__count" aria-live="polite" data-count>1 / ${n.gallery.length}</p>`:``}
        </div>
        ${n.gallery.length>1?`<div class="pd__thumbs">${n.gallery.map((e,t)=>`<button class="pd__thumb" type="button" data-thumb="${t}" aria-current="${t===0}" aria-label="Show photo ${t+1} of ${n.gallery.length}"><img src="${e}" width="160" height="213" alt="" loading="lazy" /></button>`).join(``)}</div>`:``}
      </div>

      <div class="pd__info">
        <p class="eyebrow">${h(n.category)} · ${n.gender}</p>
        <h1 class="pd__title" data-pd-title>${h(n.name)}</h1>
        <p class="pd__rating">${A(n.rating)}<span>${n.rating.toFixed(1)} · ${n.reviews} reviews</span></p>
        <p class="pd__price">${u(n)}</p>
        <p class="pd__blurb">${h(n.blurb)}</p>
        <p class="pd__color">Colour <strong>${h(n.color.name)}</strong><span class="swatch" style="--c:${h(n.color.hex)}" aria-hidden="true"></span></p>

        <fieldset class="sizes" data-sizes>
          <legend><span>Size</span><button class="link" type="button" data-size-guide>Size guide</button></legend>
          <div class="sizes__grid" style="grid-template-columns:repeat(${Math.max(3,r.length)},1fr)">
            ${r.map(e=>{let t=n.stock[e]??0;return`<label class="size"><input type="radio" name="size" value="${e}" ${t===0?`disabled`:``} ${k===e?`checked`:``} aria-describedby="size-note" /><span>${e}<span class="sr-only">${t===0?`, sold out`:t<=3?`, only ${t} left`:``}</span></span></label>`}).join(``)}
          </div>
          <p class="sizes__note" id="size-note" aria-live="polite" data-size-note></p>
        </fieldset>

        <div class="pd__buy">
          <div class="qty qty--lg">
            <button type="button" data-q="-1" aria-label="One fewer"><svg width="16" height="16"><use href="#i-minus"/></svg></button>
            <output aria-label="Quantity" data-qty>${O}</output>
            <button type="button" data-q="1" aria-label="One more"><svg width="16" height="16"><use href="#i-plus"/></svg></button>
          </div>
          <button class="pill pill--ink pd__add" type="button" data-pd-add ${e(n)===0?`disabled`:``}>
            <span class="label-add">${e(n)===0?`Sold out`:`Add to bag · <span data-line-price>${o(n.price*O)}</span>`}</span>
            <span class="label-done"><svg width="18" height="18" aria-hidden="true"><use href="#i-check"/></svg>Added to bag</span>
          </button>
          <button class="iconbtn" type="button" data-save="${h(n.id)}" aria-pressed="${i}" aria-label="Save ${h(n.name)}"><svg width="22" height="22"><use href="#i-heart"/></svg></button>
        </div>
        <p class="pd__error" role="alert" data-pd-error></p>

        <ul class="perks">
          <li><svg width="20" height="20" aria-hidden="true"><use href="#i-truck"/></svg>Free shipping on orders over USD 150</li>
          <li><svg width="20" height="20" aria-hidden="true"><use href="#i-return"/></svg>Free returns within 60 days</li>
          <li><svg width="20" height="20" aria-hidden="true"><use href="#i-repair"/></svg>Free repairs for life</li>
        </ul>

        <div class="acc">
          <details open><summary>Description <svg width="18" height="18" aria-hidden="true"><use href="#i-chev"/></svg></summary><div class="acc__body"><p>${h(n.description)}</p></div></details>
          <details><summary>Features <svg width="18" height="18" aria-hidden="true"><use href="#i-chev"/></svg></summary><div class="acc__body"><ul>${n.features.map(e=>`<li>${h(e)}</li>`).join(``)}</ul></div></details>
          <details><summary>Materials &amp; weight <svg width="18" height="18" aria-hidden="true"><use href="#i-chev"/></svg></summary><div class="acc__body"><p>${h(n.materials)}</p><p>Weight: ${h(n.weight)} (size M). SKU ${h(n.sku)}.</p></div></details>
          <details><summary>Shipping &amp; returns <svg width="18" height="18" aria-hidden="true"><use href="#i-chev"/></svg></summary><div class="acc__body"><p>Standard shipping takes 3–5 business days and is free over USD 150. Express takes 1–2 days for USD 18. Return anything unworn within 60 days, free. <a class="link" href="../help/#returns">More on returns</a></p></div></details>
        </div>
      </div>
    </article>
    <div class="buybar" data-buybar aria-hidden="true">
      <div class="buybar__txt"><p class="buybar__name">${h(n.name)}</p><p class="buybar__price">${o(n.price)}</p></div>
      <button class="pill pill--ink" type="button" data-pd-add tabindex="-1" ${e(n)===0?`disabled`:``}>${e(n)===0?`Sold out`:`Add to bag`}</button>
    </div>`,F(n),P(),I(n)}var N=null;function P(){N?.disconnect();let e=E.querySelector(`[data-buybar]`),t=E.querySelector(`.pd__buy [data-pd-add]`);if(!e||!t)return;let n=matchMedia(`(max-width: 1100px)`);N=new IntersectionObserver(([t])=>{let r=n.matches&&!!t&&!t.isIntersecting;e.classList.toggle(`is-on`,r),e.setAttribute(`aria-hidden`,String(!r)),e.querySelector(`button`).tabIndex=r?0:-1,document.body.classList.toggle(`has-buybar`,r)}),N.observe(t)}function F(t){let n=S(`[data-size-note]`);if(!k){n.textContent=e(t)===0?`Sold out in every size.`:``;return}let r=t.stock[k]??0;n.textContent=r<=3?`Only ${r} left in ${k}.`:`In stock in ${k}.`}function I(t){document.querySelector(`script[data-ld]`)?.remove();let n=document.createElement(`script`);n.type=`application/ld+json`,n.dataset.ld=``,n.textContent=JSON.stringify({"@context":`https://schema.org`,"@type":`Product`,name:t.name,sku:t.sku,description:t.description,image:t.gallery.map(e=>location.origin+e),brand:{"@type":`Brand`,name:`SOLUM`},color:t.color.name,aggregateRating:{"@type":`AggregateRating`,ratingValue:t.rating,reviewCount:t.reviews},offers:{"@type":`Offer`,price:t.price.toFixed(2),priceCurrency:`USD`,availability:`https://schema.org/${e(t)?`InStock`:`OutOfStock`}`}}),document.head.append(n)}function L(e){let t=r().filter(t=>t.id!==e.id),n=t=>(t.category===e.category?2:0)+ +(t.terrain===e.terrain)+(t.gender===e.gender?.5:0),i=t.sort((e,t)=>n(t)-n(e)||t.rating-e.rating).slice(0,4),a=S(`[data-related]`);a.hidden=i.length===0,S(`[data-related-list]`).innerHTML=i.map(g).join(``),p(a)}var R=0,z=()=>matchMedia(`(max-width: 1000px)`).matches;function B(e,t=`thumb`){let r=a(D);if(!r)return;let i=r.gallery.length,o=(e+i)%i,s=_(`.pd__shot`,E),c=s[R],l=s[o];for(let e of _(`[data-thumb]`,E))e.setAttribute(`aria-current`,String(e.dataset.thumb===String(o)));let u=E.querySelector(`[data-count]`);if(u&&(u.textContent=`${o+1} / ${i}`),s.forEach((e,t)=>{e.classList.toggle(`is-on`,t===o),e.tabIndex=t===o?0:-1}),z())t!==`swipe`&&l.scrollIntoView({behavior:d?`auto`:`smooth`,block:`nearest`,inline:`start`});else if(c&&c!==l&&!d)n.killTweensOf([c,l]),n.set(l,{zIndex:2}),n.set(c,{zIndex:1}),n.fromTo(l,{opacity:0,scale:1.035},{opacity:1,scale:1,duration:.6,ease:`power2.out`,onComplete:()=>{n.set(c,{opacity:0})}});else for(let e of s)n.set(e,{opacity:+(e===l),scale:1});R=o}function V(){let e=_(`.pd__shot`,E);z()||e.forEach((e,t)=>n.set(e,{opacity:+(t===0)}));let t=E.querySelector(`[data-stage]`);if(!t||e.length<2)return;let r=new IntersectionObserver(t=>{if(z()){for(let n of t)if(n.isIntersecting&&n.intersectionRatio>.6){let t=e.indexOf(n.target);t!==R&&B(t,`swipe`)}}},{root:t,threshold:[.6]});e.forEach(e=>r.observe(e)),matchMedia(`(max-width: 1000px)`).addEventListener(`change`,()=>e.forEach((e,t)=>n.set(e,{opacity:z()?1:+(t===R),scale:1,zIndex:``})))}var H=0,U=S(`dialog.zoom`),W=S(`.zoom__img`,U),G=f({el:U,panel:W,from:{opacity:0,scale:.94}});function K(e,t=!0){let r=a(D);if(r){H=(e+r.gallery.length)%r.gallery.length,W.src=r.gallery[H],W.alt=H===0?r.alt:`${r.name}, close-up`,S(`.zoom__count`,U).textContent=`${H+1} / ${r.gallery.length}`;for(let e of _(`[data-zstep]`,U))e.hidden=r.gallery.length<2;t&&!d&&n.fromTo(W,{opacity:0,x:24},{opacity:1,x:0,duration:.35,ease:`power2.out`})}}U.addEventListener(`click`,e=>{let t=e.target.closest(`[data-zstep]`);t&&K(H+Number(t.dataset.zstep))}),U.addEventListener(`keydown`,e=>{e.key===`ArrowRight`&&K(H+1),e.key===`ArrowLeft`&&K(H-1)});function q(){E.addEventListener(`click`,e=>{let t=a(D);if(!t)return;let n=e.target,r=n.closest(`[data-thumb]`);if(r){B(Number(r.dataset.thumb));return}let i=n.closest(`[data-step]`);if(i){B(R+Number(i.dataset.step),`arrow`);return}let s=n.closest(`[data-zoom]`);if(s){K(Number(s.dataset.zoom),!1),x(G,s);return}let c=n.closest(`[data-q]`);if(c){let e=k?t.stock[k]??1:9;O=Math.max(1,Math.min(e,O+Number(c.dataset.q))),S(`[data-qty]`).textContent=String(O);let n=document.querySelector(`[data-line-price]`);n&&(n.textContent=o(t.price*O));return}if(n.closest(`[data-size-guide]`)){x(Z,n.closest(`[data-size-guide]`));return}let l=n.closest(`[data-pd-add]`);l&&Y(t,l)}),E.addEventListener(`change`,e=>{let t=a(D);if(!t)return;let n=e.target;n.name===`size`&&(k=n.value,O=Math.min(O,t.stock[k]??1),S(`[data-qty]`).textContent=String(O),S(`[data-pd-error]`).textContent=``,F(t))})}var J=0;function Y(e,t){let r=S(`[data-pd-error]`);if(!k){r.textContent=`Choose a size first.`,d||n.fromTo(`[data-sizes] .sizes__grid`,{x:0},{keyframes:{x:[-8,8,-5,5,0]},duration:.45,ease:`power2.out`}),S(`[data-sizes] input:not(:disabled)`).focus();return}if(!b(e,k,O))return;r.textContent=``;let i=S(`[data-pd-add]`);i.classList.add(`is-done`),clearTimeout(J),J=window.setTimeout(()=>i.classList.remove(`is-done`),1800),v(t??i)}var X=S(`dialog.sg`),Z=f({el:X,panel:S(`.sg__in`,X),from:{opacity:0,y:24}});T(X);var Q=a(D);if(!Q)j();else{M(Q),L(Q),q(),V();let e=S(`[data-pd-title]`);C(e),d?s(e):(c(e,{delay:.1}),n.from(`.pd__info > *:not(h1)`,{opacity:0,y:20,duration:.7,ease:`power3.out`,stagger:.05,delay:.1,clearProps:`opacity,transform`}),n.from(`.pd__thumb`,{opacity:0,x:14,duration:.6,ease:`power3.out`,stagger:.07,delay:.2,clearProps:`opacity,transform`})),i(e=>{if(e!==`products`)return;let t=a(D);if(!t){j();return}M(t),R=0,V(),s(S(`[data-pd-title]`)),L(t)})}y();