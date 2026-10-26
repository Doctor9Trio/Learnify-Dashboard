import{B as e,H as t,I as n,h as r,j as i,r as a,u as o,v as s,z as c}from"./store-DfXjkpw_.js";import{_ as l,a as u,d,h as f,i as p,n as m,p as h,t as g}from"./shell-CLwgxTXp.js";/* empty css              */u(),f();var _=g(`[data-co]`),v=[`contact`,`delivery`,`payment`,`review`],y=`contact`,b=`standard`,x=!1,S=a(),[C=``,...w]=(S?.name??``).split(` `);function T(){_.innerHTML=`
    <div class="empty" style="grid-column:1/-1">
      <h2>Your bag is empty</h2>
      <p>Add something first — then come back to check out.</p>
      <a class="pill pill--ink" href="../shop/">Shop all</a>
    </div>`}var E=(e,t,n=``,r=``)=>`
  <label class="field ${r}"><span>${t}</span><input name="${e}" id="f-${e}" ${n} aria-describedby="e-${e}" /><em class="field__err" id="e-${e}"></em></label>`;function D(){_.innerHTML=`
    <form class="steps" novalidate data-form>
      <section class="step" data-step="contact" aria-labelledby="st-contact">
        <div class="step__head"><span class="step__num">1</span><h2 class="step__title" id="st-contact">Contact &amp; shipping</h2><p class="step__sum" data-sum-of="contact"></p><button class="link step__edit" type="button" data-edit="contact" hidden>Edit</button></div>
        <div class="step__body">
          ${E(`email`,`Email`,`type="email" autocomplete="email" required value="${p(S?.email??``)}"`)}
          <div class="row2">${E(`first`,`First name`,`autocomplete="given-name" required value="${p(C)}"`)}${E(`last`,`Last name`,`autocomplete="family-name" required value="${p(w.join(` `))}"`)}</div>
          ${E(`line1`,`Address`,`autocomplete="address-line1" required`)}
          ${E(`line2`,`Apartment, suite <small class="field__hint">(optional)</small>`,`autocomplete="address-line2"`)}
          <div class="row3">${E(`city`,`City`,`autocomplete="address-level2" required`)}${E(`region`,`State / province`,`autocomplete="address-level1" required`)}${E(`postal`,`ZIP / postal code`,`autocomplete="postal-code" required`)}</div>
          <div class="row2 row2--stack">
            <label class="field"><span>Country</span><select name="country" id="f-country" autocomplete="country"><option value="US">United States</option><option value="CA">Canada</option></select></label>
            ${E(`phone`,`Phone <small class="field__hint">(optional, for delivery)</small>`,`type="tel" autocomplete="tel"`)}
          </div>
          <div class="step__actions"><button class="pill pill--ink" type="button" data-next="contact">Continue to delivery</button></div>
        </div>
      </section>

      <section class="step" data-step="delivery" aria-labelledby="st-delivery">
        <div class="step__head"><span class="step__num">2</span><h2 class="step__title" id="st-delivery">Delivery</h2><p class="step__sum" data-sum-of="delivery"></p><button class="link step__edit" type="button" data-edit="delivery" hidden>Edit</button></div>
        <div class="step__body">
          <fieldset class="methods"><legend class="sr-only">Delivery method</legend>
            ${Object.keys(n).map(e=>`
              <label class="method"><input type="radio" name="method" value="${e}" ${e===b?`checked`:``} /><span><strong>${n[e].label}</strong><small>${n[e].days}</small></span><span data-mprice="${e}"></span></label>`).join(``)}
          </fieldset>
          <div class="step__actions"><button class="pill pill--ink" type="button" data-next="delivery">Continue to payment</button></div>
        </div>
      </section>

      <section class="step" data-step="payment" aria-labelledby="st-payment">
        <div class="step__head"><span class="step__num">3</span><h2 class="step__title" id="st-payment">Payment</h2><p class="step__sum" data-sum-of="payment"></p><button class="link step__edit" type="button" data-edit="payment" hidden>Edit</button></div>
        <div class="step__body">
          <p class="note"><svg width="18" height="18" aria-hidden="true"><use href="#i-lock"/></svg><span>This is a demo store: no card is charged and card details never leave your browser. Use test card <strong>4242 4242 4242 4242</strong>, any future date and any CVC. <button class="link" type="button" data-testcard>Fill it in for me</button></span></p>
          ${E(`cardname`,`Name on card`,`autocomplete="cc-name" required`)}
          <div class="card-in">${E(`card`,`Card number`,`inputmode="numeric" autocomplete="cc-number" required placeholder="1234 1234 1234 1234" maxlength="23"`)}<span class="brand" data-brand aria-live="polite"></span></div>
          <div class="row2">${E(`exp`,`Expiry (MM / YY)`,`inputmode="numeric" autocomplete="cc-exp" required placeholder="MM / YY" maxlength="7"`)}${E(`cvc`,`Security code`,`inputmode="numeric" autocomplete="cc-csc" required placeholder="CVC" maxlength="4"`)}</div>
          <div class="step__actions"><button class="pill pill--ink" type="button" data-next="payment">Review order</button></div>
        </div>
      </section>

      <section class="step" data-step="review" aria-labelledby="st-review">
        <div class="step__head"><span class="step__num">4</span><h2 class="step__title" id="st-review">Review &amp; place order</h2></div>
        <div class="step__body">
          <div data-review></div>
          <p class="pd__error" role="alert" data-place-error></p>
          <div class="step__actions"><button class="pill pill--clay" type="submit" data-place>Place order</button></div>
        </div>
      </section>
    </form>

    <aside class="summary" aria-labelledby="co-sum-h">
      <h2 id="co-sum-h">Your order</h2>
      <ul class="lines-mini" data-mini></ul>
      <dl class="sum" data-co-sum></dl>
      <p class="secure"><svg width="16" height="16" aria-hidden="true"><use href="#i-lock"/></svg>Demo checkout · nothing is charged</p>
    </aside>`,B(),O(),A(`contact`,!1)}function O(){let e=o(),t=i(b,e);g(`[data-mini]`).innerHTML=e.map(e=>`
    <li class="mini"><span class="mini__img"><img src="${e.img}" width="128" height="170" alt="" /><span class="mini__qty" aria-label="Quantity ${e.qty}">${e.qty}</span></span>
      <span><span class="mini__name">${p(e.name)}</span><br /><span class="mini__meta">${e.size?`Size ${e.size}`:`Look`}</span></span>
      <span>${c(e.price*e.qty)}</span></li>`).join(``),g(`[data-co-sum]`).innerHTML=`
    <div><dt>Subtotal</dt><dd>${c(t.subtotal)}</dd></div>
    ${t.promo?`<div class="sum__save"><dt>Promo ${t.promo.code}</dt><dd>−${c(t.discount)}</dd></div>`:``}
    <div><dt>Shipping · ${n[b].label}</dt><dd>${t.shipping?c(t.shipping):`Free`}</dd></div>
    <div><dt>Tax</dt><dd>${c(t.tax)}</dd></div>
    <div class="sum__total"><dt>Total</dt><dd>${c(t.total)}</dd></div>`;for(let t of Object.keys(n)){let n=i(t,e).shipping,r=document.querySelector(`[data-mprice="${t}"]`);r&&(r.textContent=n?c(n):`Free`)}let r=document.querySelector(`[data-place]`);r&&(r.textContent=`Place order · ${c(t.total)}`)}var k=null;function A(e,n=!0){y=e,k?.progress(1);let r=_.querySelector(`[data-step][data-state="active"]:not([data-step="`+e+`"]) .step__body:not([hidden])`);if(n&&!d&&r){let n=[...r.children];k=t.timeline().to(n,{opacity:0,y:-8,duration:.2,ease:`power2.in`,stagger:.012}).add(()=>{t.set(n,{clearProps:`opacity,transform`}),j(e,!0)});return}j(e,n)}function j(n,r){let i=v.indexOf(n),a=m(`[data-step]`,_),o=r&&!d?a.map(e=>e.getBoundingClientRect().top):null;for(let e of a){let t=v.indexOf(e.dataset.step),n=t<i?`done`:t===i?`active`:`todo`;e.dataset.state=n;let r=g(`.step__body`,e);r.hidden=n!==`active`;let a=e.querySelector(`[data-edit]`);a&&(a.hidden=n!==`done`);let o=e.querySelector(`[data-sum-of]`);o&&(o.hidden=n!==`done`)}n===`review`&&z(),o&&a.forEach((e,n)=>{let r=o[n]-e.getBoundingClientRect().top;Math.abs(r)>1&&t.fromTo(e,{y:r},{y:0,duration:.55,ease:`power3.inOut`,clearProps:`transform`})});let s=g(`[data-step="${n}"]`,_);if(r&&!d&&t.fromTo(m(`.step__body > *`,s),{opacity:0,y:14},{opacity:1,y:0,duration:.45,stagger:.04,ease:`power3.out`,clearProps:`opacity,transform`}),r){let t=s.getBoundingClientRect().top;!e&&(t<90||t>innerHeight*.6)&&s.scrollIntoView({block:`start`,behavior:d?`auto`:`smooth`}),(s.querySelector(`.step__body input:not([type=radio]), .step__body [data-place]`)??s).focus({preventScroll:!0})}}var M=e=>(_.querySelector(`[name="${e}"]`)?.value??``).trim();function N(e,t){let n=_.querySelector(`[name="${e}"]`),r=_.querySelector(`#e-${e}`);return n&&n.setAttribute(`aria-invalid`,String(!!t)),r&&(r.textContent=t),!t}var P=e=>e.replace(/\D/g,``);function F(e){let t=0;for(let n=0;n<e.length;n++){let r=Number(e[e.length-1-n]);n%2&&(r*=2,r>9&&(r-=9)),t+=r}return e.length>=13&&t%10==0}function I(e){return/^4/.test(e)?`Visa`:/^(5[1-5]|2[2-7])/.test(e)?`Mastercard`:/^3[47]/.test(e)?`Amex`:``}function L(e){let n=[];if(e===`contact`){let e=M(`email`);n.push([`email`,e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?``:`That email doesn’t look right — check for a typo.`:`Enter your email so we can send your receipt.`]),n.push([`first`,M(`first`)?``:`Enter your first name.`]),n.push([`last`,M(`last`)?``:`Enter your last name.`]),n.push([`line1`,M(`line1`).length>=4?``:`Enter the street address.`]),n.push([`city`,M(`city`)?``:`Enter the city.`]),n.push([`region`,M(`region`)?``:`Enter the state or province.`]);let t=M(`postal`),r=M(`country`)===`CA`?/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(t):/^\d{5}(-\d{4})?$/.test(t);n.push([`postal`,t?r?``:M(`country`)===`CA`?`Canadian postal codes look like V6B 1A1.`:`US ZIP codes are 5 digits, like 80302.`:`Enter the ZIP or postal code.`])}if(e===`payment`){let e=P(M(`card`));n.push([`cardname`,M(`cardname`)?``:`Enter the name as it appears on the card.`]),n.push([`card`,e?F(e)?``:`That card number isn’t valid — check the digits.`:`Enter the card number.`]);let t=M(`exp`).match(/^(\d{2})\s*\/\s*(\d{2})$/),r=``;if(!t)r=`Enter the expiry as MM / YY.`;else{let e=Number(t[1]),n=2e3+Number(t[2]),i=new Date;e<1||e>12?r=`The month must be between 01 and 12.`:(n<i.getFullYear()||n===i.getFullYear()&&e<i.getMonth()+1)&&(r=`This card has expired.`)}n.push([`exp`,r]);let i=I(e)===`Amex`?4:3;n.push([`cvc`,RegExp(`^\\d{${i}}$`).test(M(`cvc`))?``:`Enter the ${i}-digit security code.`])}let r=null;for(let[e,t]of n)!N(e,t)&&!r&&(r=e);if(r){let e=_.querySelector(`[name="${r}"]`);return e.focus(),d||t.fromTo(e,{x:0},{keyframes:{x:[-6,6,-4,4,0]},duration:.4}),!1}return!0}function R(e){let t=_.querySelector(`[data-sum-of="${e}"]`);if(t&&(e===`contact`&&(t.textContent=`${M(`first`)} ${M(`last`)} · ${M(`line1`)}, ${M(`city`)}`),e===`delivery`&&(t.textContent=`${n[b].label} · ${n[b].days}`),e===`payment`)){let e=P(M(`card`));t.textContent=`${I(e)||`Card`} ending ${e.slice(-4)}`}}function z(){let e=P(M(`card`));g(`[data-review]`).innerHTML=`
    <div class="ogrid ogrid--even">
      <div class="box"><h2>Ship to</h2><address>${p(M(`first`))} ${p(M(`last`))}<br />${p(M(`line1`))}${M(`line2`)?`<br />${p(M(`line2`))}`:``}<br />${p(M(`city`))}, ${p(M(`region`))} ${p(M(`postal`))}<br />${M(`country`)===`CA`?`Canada`:`United States`}</address></div>
      <div class="box"><h2>Delivery &amp; payment</h2><p>${n[b].label} · ${n[b].days}</p><p>${I(e)||`Card`} ending ${e.slice(-4)}</p><p class="field__hint">Receipt to ${p(M(`email`))}</p></div>
    </div>`}function B(){let e=g(`[data-form]`,_);e.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-next]`);if(n){let e=n.dataset.next;if(!L(e))return;R(e),A(v[v.indexOf(e)+1]);return}let r=t.closest(`[data-edit]`);if(r){A(r.dataset.edit);return}if(t.closest(`[data-testcard]`)){let e=(e,t)=>{_.querySelector(`[name="${e}"]`).value=t,N(e,``)};e(`cardname`,`${M(`first`)} ${M(`last`)}`.trim()||`Trail Runner`),e(`card`,`4242 4242 4242 4242`);let t=new Date;e(`exp`,`${String(t.getMonth()+1).padStart(2,`0`)} / ${String((t.getFullYear()+3)%100).padStart(2,`0`)}`),e(`cvc`,`123`),g(`[data-brand]`).textContent=`Visa`}}),e.addEventListener(`change`,e=>{let t=e.target;t.name===`method`&&(b=t.value,O())}),e.addEventListener(`input`,e=>{let t=e.target;if(t.getAttribute(`aria-invalid`)===`true`&&N(t.name,``),t.name===`card`){let e=P(t.value).slice(0,19);t.value=e.replace(/(\d{4})(?=\d)/g,`$1 `),g(`[data-brand]`).textContent=I(e)}if(t.name===`exp`){let e=P(t.value).slice(0,4);t.value=e.length>2?`${e.slice(0,2)} / ${e.slice(2)}`:e}t.name===`cvc`&&(t.value=P(t.value).slice(0,4))}),e.addEventListener(`keydown`,e=>{e.key!==`Enter`||e.target.tagName===`TEXTAREA`||y===`review`||(e.preventDefault(),_.querySelector(`[data-next="${y}"]`)?.click())}),e.addEventListener(`submit`,e=>{if(e.preventDefault(),y!==`review`)return;let t=P(M(`card`));x=!0;let n=s({customer:{name:`${M(`first`)} ${M(`last`)}`,email:M(`email`).toLowerCase(),phone:M(`phone`)||void 0},address:{line1:M(`line1`),line2:M(`line2`)||void 0,city:M(`city`),region:M(`region`),postal:M(`postal`).toUpperCase(),country:M(`country`)},method:b,payment:{brand:I(t)||`Card`,last4:t.slice(-4)}});if(!n){x=!1,g(`[data-place-error]`).textContent=`Something in your bag just sold out. Go back to your bag to adjust it.`;return}try{sessionStorage.setItem(`solum:last-order`,n.id)}catch{}location.href=`../order/?id=${encodeURIComponent(n.id)}&new=1`})}o().length?D():T(),r(e=>{if(!(x||e!==`bag`&&e!==`products`&&e!==`promo`)){if(!o().length){T();return}if(!document.querySelector(`[data-form]`)){D();return}O(),e===`bag`&&l(`Your bag changed — the summary is up to date.`)}}),h();