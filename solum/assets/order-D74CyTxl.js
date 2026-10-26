import{H as e,I as t,g as n,h as r,r as i,z as a}from"./store-DfXjkpw_.js";import{a as o,d as s,h as c,i as l,p as u,t as d}from"./shell-CLwgxTXp.js";/* empty css              */import{n as f,t as p}from"./common-DWwqGhz0.js";o(),c();var m=d(`[data-order]`),h=new URLSearchParams(location.search),g=h.get(`id`),_=h.get(`new`)===`1`,v=[`Pending`,`Processing`,`Shipped`,`Delivered`],y={Pending:[`Order placed`,`We have your order`],Processing:[`Packing`,`Being packed at our studio`],Shipped:[`On its way`,`With the carrier`],Delivered:[`Delivered`,`Out on the trail`]};function b(e){let t=null;try{t=sessionStorage.getItem(`solum:last-order`)}catch{}let n=(()=>{try{return sessionStorage.getItem(`solum:unlocked:${e.id}`)===`1`}catch{return!1}})();return t===e.id||n||i()?.email.toLowerCase()===e.customer.email.toLowerCase()}function x(e=``,t=``){f(`Find your order — SOLUM`),m.innerHTML=`
    <header class="phead"><h1 class="phead__title">Find your order</h1><p class="phead__lead">Enter your order number and the email you used at checkout.</p></header>
    <form class="lookup form" novalidate data-lookup>
      <label class="field"><span>Order number</span><input name="id" placeholder="SOL-10471" value="${l(e)}" required aria-describedby="e-id" /><em class="field__err" id="e-id">${l(t)}</em></label>
      <label class="field"><span>Email</span><input name="email" type="email" autocomplete="email" required aria-describedby="e-email" /><em class="field__err" id="e-email"></em></label>
      <button class="pill pill--ink" type="submit">Find order</button>
    </form>`;let r=d(`[data-lookup]`);r.addEventListener(`submit`,e=>{e.preventDefault();let t=r.elements.namedItem(`id`).value.trim().toUpperCase(),i=r.elements.namedItem(`email`).value.trim().toLowerCase(),a=n(t),o=d(`#e-id`),s=d(`#e-email`);if(o.textContent=``,s.textContent=``,!t){o.textContent=`Enter your order number.`;return}if(!i){s.textContent=`Enter the email you used at checkout.`;return}if(!a||a.customer.email.toLowerCase()!==i){s.textContent=`We couldn’t find an order with that number and email.`;return}try{sessionStorage.setItem(`solum:unlocked:${a.id}`,`1`)}catch{}g=a.id,history.replaceState(null,``,`?id=${encodeURIComponent(a.id)}`),w(a,!1)})}function S(e){let t=e.status===`Cancelled`||e.status===`Refunded`,n=t=>e.history.find(e=>e.status===t)?.at;return`
    <section class="track" aria-labelledby="track-h">
      <div class="track__head"><h2 id="track-h">Order status</h2><span class="status status--${e.status}">${e.status}</span></div>
      ${t?`<p class="banner">${e.status===`Cancelled`?`This order was cancelled. Nothing was charged.`:`This order was refunded to your original payment.`}</p>`:`
      <div class="track__wrap">
      <span class="track__line" aria-hidden="true"><i data-track-fill></i></span>
      <ol class="track__steps">
        ${v.map(t=>{let r=v.indexOf(t)<=v.indexOf(e.status),i=n(t);return`<li class="tstep ${r?`is-done`:``} ${t===e.status?`is-now`:``}" ${t===e.status?`aria-current="step"`:``}>
            <span class="tstep__dot"><svg width="18" height="18" aria-hidden="true"><use href="#i-check"/></svg></span>
            <div><strong>${y[t][0]}</strong><small>${i?p(i,!0):y[t][1]}</small></div>
          </li>`}).join(``)}
      </ol>
      </div>`}
    </section>`}function C(t,n){let r=document.querySelector(`[data-track-fill]`);if(!r)return;let i=v.indexOf(t.status)/(v.length-1),a=matchMedia(`(max-width: 820px)`).matches;e.fromTo(r,a?{scaleY:n?0:i}:{scaleX:n?0:i},{...a?{scaleY:i}:{scaleX:i},duration:n&&!s?1.1:0,ease:`power3.inOut`,delay:n?.3:0})}function w(n,r){f(`Order ${n.id} — SOLUM`);let i=n.customer.name.split(` `)[0],o=t[n.method];if(m.innerHTML=`
    ${r?`
    <section class="thanks" aria-labelledby="thanks-h">
      <svg class="thanks__mark" viewBox="0 0 96 96" aria-hidden="true"><circle cx="48" cy="48" r="48" data-mark-circle /><path d="M29 49.5 42 62l25-27" data-mark-tick /></svg>
      <h1 id="thanks-h">Thank you, ${l(i??``)}</h1>
      <p>Your order <strong>${n.id}</strong> is in. A receipt is on its way to ${l(n.customer.email)}.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><a class="pill pill--ink" href="../shop/">Keep shopping</a><a class="pill pill--light" href="../account/">Your account</a></div>
    </section>`:`
    <header class="phead phead--row"><div><nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="../account/">Account</a></li><li aria-current="page">${n.id}</li></ol></nav><h1 class="phead__title">${n.id}</h1></div><p class="toolbar__count">Placed ${p(n.createdAt,!0)}</p></header>`}
    <div data-tracker>${S(n)}</div>
    <div class="ogrid">
      <section class="box" aria-labelledby="items-h">
        <h2 id="items-h">Items</h2>
        <ul class="lines-mini" style="display:grid;gap:14px">
          ${n.lines.map(e=>`<li class="mini"><span class="mini__img"><img src="${e.img}" width="128" height="170" alt="" /><span class="mini__qty" aria-label="Quantity ${e.qty}">${e.qty}</span></span><span><span class="mini__name">${l(e.name)}</span><br /><span class="mini__meta">${e.size?`Size ${e.size}`:`Look`}</span></span><span>${a(e.price*e.qty)}</span></li>`).join(``)}
        </ul>
        <dl class="sum">
          <div><dt>Subtotal</dt><dd>${a(n.subtotal)}</dd></div>
          ${n.discount?`<div class="sum__save"><dt>Promo ${l(n.promo??``)}</dt><dd>−${a(n.discount)}</dd></div>`:``}
          <div><dt>Shipping · ${o.label}</dt><dd>${n.shipping?a(n.shipping):`Free`}</dd></div>
          <div><dt>Tax</dt><dd>${a(n.tax)}</dd></div>
          <div class="sum__total"><dt>Total</dt><dd>${a(n.total)}</dd></div>
        </dl>
      </section>
      <div style="display:grid;gap:24px">
        <section class="box" aria-labelledby="ship-h"><h2 id="ship-h">Shipping to</h2>
          <address>${l(n.customer.name)}<br />${l(n.address.line1)}${n.address.line2?`<br />${l(n.address.line2)}`:``}<br />${l(n.address.city)}, ${l(n.address.region)} ${l(n.address.postal)}<br />${n.address.country===`CA`?`Canada`:`United States`}</address>
          <p class="field__hint">${o.label} · ${o.days}</p>
        </section>
        <section class="box" aria-labelledby="pay-h"><h2 id="pay-h">Payment</h2><p>${l(n.payment.brand)} ending ${l(n.payment.last4)}</p></section>
        <section class="box" aria-labelledby="hist-h"><h2 id="hist-h">History</h2><ol class="hist" data-hist>${T(n)}</ol></section>
      </div>
    </div>`,C(n,!0),!s){if(r){let t=m.querySelector(`[data-mark-tick]`),n=t.getTotalLength();e.timeline().from(`[data-mark-circle]`,{scale:0,transformOrigin:`50% 50%`,duration:.6,ease:`back.out(2)`}).fromTo(t,{strokeDasharray:n,strokeDashoffset:n},{strokeDashoffset:0,duration:.5,ease:`power2.out`},`-=.15`).from(`.thanks > :not(svg)`,{opacity:0,y:20,stagger:.08,duration:.6,ease:`power3.out`},`-=.3`)}e.from(`.track, .ogrid .box`,{opacity:0,y:26,stagger:.08,duration:.7,ease:`power3.out`,delay:r?.6:.1,clearProps:`opacity,transform`})}}var T=e=>[...e.history].reverse().map(e=>`<li><div><strong>${e.status}</strong><time datetime="${e.at}">${p(e.at,!0)}</time></div></li>`).join(``),E=n(g);E?b(E)?w(E,_):x(E.id):x(g??``,g?`We couldn’t find that order number.`:``);var D=E?.status;r(t=>{if(t!==`orders`||!g)return;let r=n(g);if(!r||!document.querySelector(`[data-tracker]`)||r.status===D)return;D=r.status,d(`[data-tracker]`).innerHTML=S(r),d(`[data-hist]`).innerHTML=T(r);let i=v.indexOf(r.history[r.history.length-2]?.status??`Pending`)/(v.length-1),a=document.querySelector(`[data-track-fill]`);if(a){let t=matchMedia(`(max-width: 820px)`).matches,n=v.indexOf(r.status)/(v.length-1);e.fromTo(a,t?{scaleY:i}:{scaleX:i},{...t?{scaleY:n}:{scaleX:n},duration:+!s,ease:`power3.inOut`})}s||e.from(`.tstep.is-now .tstep__dot`,{scale:.4,duration:.6,ease:`back.out(3)`,delay:.6})}),u();