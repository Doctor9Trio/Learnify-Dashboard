import{B as e,D as t,G as n,I as r,P as i,Q as a,R as o,S as s,W as c,X as l,at as u,ct as d,d as f,dt as p,h as m,it as h,lt as g,n as _,st as v,v as y,w as b,y as x}from"./index-DtoNja2p.js";var S=`<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></svg>`,C=`<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 3.5l17 17"/><path d="M10.6 5.6A9.6 9.6 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a16 16 0 0 1-3 3.7M6.6 6.7A15.6 15.6 0 0 0 2.5 12S6 18.5 12 18.5a9.3 9.3 0 0 0 4.4-1.1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>`,w=`<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="12" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="20" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,T,E=!0,D=[],O=!1;function k(){let e=a.customers.filter(e=>!e.lost),t=t=>e.filter(e=>e.stage===t).sort((e,t)=>t.value-e.value)[0];return[t(`proposal`),t(`talks`),t(`won`)].filter(Boolean)}function A(e,t){let r=n(e.ownerId);return`<div class="si-deal si-deal--${t}${e.stage===`won`?` is-won`:``}">
    <div class="si-deal__head">${x(e)}<div class="si-deal__id"><b>${d(e.name)}</b><small>${d(e.industry)}</small></div></div>
    <p class="si-deal__blurb">${d(e.blurb)}</p>
    <div class="si-deal__foot">
      <span class="stage stage--${e.stage}"><i></i>${d(l(e.stage))}</span>
      ${e.due?`<span class="meta">${y(`calendar`)}${m(e.due)}</span>`:``}
      <span class="si-deal__value">${b(e.value)}</span>
      ${_(r,`xs`)}
    </div>
  </div>`}function j(){let e=k(),t=e.find(e=>e.stage===`won`),n=a.customers.filter(e=>!e.lost&&e.stage===`won`).length,r=a.customers.filter(e=>e.lost).length,i=n+r?Math.round(n/(n+r)*100):0,s=+(2*Math.PI*15).toFixed(2);return`<div class="si-stage" aria-hidden="true">
    <div class="si-track">${o.map(e=>`<span class="stage stage--${e}"><i></i>${d(l(e))}</span>`).join(``)}</div>
    ${e.map(A).join(``)}
    ${t?`<div class="si-toast">${y(`trophy`)}<span><b>${d(t.name)}</b> won · ${b(t.value)}</span></div>`:``}
    <div class="si-rate"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" class="si-rate__base"/><circle cx="18" cy="18" r="15" class="si-rate__val" stroke-dasharray="${s}" stroke-dashoffset="${s*(1-i/100)}" data-c="${s}" data-p="${i/100}"/></svg><span><b>${i}%</b><small>Win rate</small></span></div>
  </div>`}function M(){let e=a.settings.profile;T.innerHTML=`
    <div class="si">
      <aside class="si-brand">
        <div class="si-logo"><span class="si-logo__mark">${w}</span><span>Accord</span></div>
        <div class="si-copy">
          <p class="si-kicker">Client pipeline CRM</p>
          <p class="si-head">Every client, from first call to signed deal.</p>
          <p class="si-sub">One calm board for your deals, the tasks that move them and the people who close them.</p>
        </div>
        ${j()}
        <p class="si-note">${y(`info`)}Your workspace is saved in this browser.</p>
      </aside>
      <div class="si-main">
        <form class="si-form" novalidate>
          <div class="si-logo si-logo--sm" aria-hidden="true"><span class="si-logo__mark">${w}</span><span>Accord</span></div>
          <div class="si-intro">
            <h1 class="si-title" tabindex="-1">Welcome back</h1>
            <p class="si-lede">Sign in to <b>${d(a.settings.workspace.name)}</b> to pick up where you left off.</p>
          </div>
          ${f(`si-email`,`Work email`,`<input class="input" id="si-email" type="email" required autocomplete="username" maxlength="80" value="${d(e.email)}" data-error="Enter the email you use for Accord, like name@company.com." />`)}
          ${f(`si-pass`,`Password`,`<div class="si-pass"><input class="input" id="si-pass" type="password" required pattern=".{6,}" autocomplete="current-password" maxlength="80" data-error="Use at least 6 characters." /><button type="button" class="icon-btn icon-btn--sm si-eye" aria-pressed="false" aria-label="Show password" aria-controls="si-pass">${S}</button></div>`)}
          <div class="si-row">
            <label class="check"><input type="checkbox" id="si-keep"${E?` checked`:``} />Keep me signed in</label>
            <button type="button" class="si-forgot">Forgot password?</button>
          </div>
          <button type="submit" class="btn btn--primary si-submit"><span class="si-spin" aria-hidden="true"></span><span class="si-submit__label">Sign in</span>${y(`arrow`)}</button>
          <p class="si-demo">${y(`sparkle`)}<span>A demo workspace: any password of 6 or more characters signs you in.</span></p>
        </form>
      </div>
    </div>`}function N(){D.forEach(e=>e.kill()),D=[]}function P(){if(N(),g)return;u(`.si-deal`,T).forEach((e,t)=>{D.push(p.to(e,{y:t%2?9:-9,rotation:[-2.5,1.8,-1.2][t]+(t%2?.8:-.8),duration:3.2+t*.7,ease:`sine.inOut`,yoyo:!0,repeat:-1}))});let e=T.querySelector(`.si-rate`);e&&D.push(p.to(e,{y:-7,duration:2.8,ease:`sine.inOut`,yoyo:!0,repeat:-1}));let t=T.querySelector(`.si-toast`);t&&D.push(p.timeline({repeat:-1,repeatDelay:2.4,delay:2.2}).fromTo(t,{opacity:0,y:14,scale:.9},{opacity:1,y:0,scale:1,duration:.55,ease:`back.out(2)`}).to(t,{opacity:0,y:-8,duration:.4,ease:`power2.in`},`+=3.2`))}function F(){let e=u(`.si-logo, .si-copy > *, .si-track, .si-note`,T);p.fromTo(e,{opacity:0,y:16},{opacity:1,y:0,duration:v(.7),stagger:g?0:.07,ease:`power3.out`,clearProps:`transform,opacity`});let t=u(`.si-deal`,T),n=[-2.5,1.8,-1.2];t.forEach((e,t)=>p.set(e,{rotation:n[t]})),p.fromTo(t,{opacity:0,y:60,rotation:e=>n[e]*3},{opacity:1,y:0,rotation:e=>n[e],duration:v(.9),stagger:g?0:.12,delay:v(.25),ease:`power3.out`,onComplete:P});let r=T.querySelector(`.si-rate__val`),i=T.querySelector(`.si-rate`);if(r&&i){let e=+r.dataset.c;p.fromTo(i,{opacity:0,scale:.8},{opacity:1,scale:1,duration:v(.6),delay:v(.7),ease:`back.out(2)`}),p.fromTo(r,{strokeDashoffset:e},{strokeDashoffset:e*(1-r.dataset.p),duration:v(1.3),delay:v(.8),ease:`power3.out`})}let a=T.querySelector(`.si-toast`);a&&p.set(a,{opacity:0}),g&&a&&p.set(a,{opacity:1}),I(u(`.si-form > *`,T))}var I=e=>p.fromTo(e,{opacity:0,y:14},{opacity:1,y:0,duration:v(.6),stagger:g?0:.055,delay:v(.1),ease:`power3.out`,clearProps:`transform,opacity`});async function L(e){t(e);let n=``;await s({title:`Reset your password`,body:`<p class="modal__text">We’ll email you a link to choose a new password. It works for 30 minutes.</p>
      ${f(`si-reset`,`Work email`,`<input class="input" id="si-reset" type="email" required maxlength="80" autocomplete="email" value="${d(h(`#si-email`,T).value.trim())}" data-error="Enter a valid email address." />`)}`,actions:[{label:`Cancel`,value:`cancel`},{label:`Send reset link`,value:`send`,kind:`primary`,submit:!0}],onAction:(e,t)=>{e===`send`&&(n=h(`#si-reset`,t).value.trim())}}),n&&r(`Reset link sent to ${n}. Check your inbox.`)}function R(t){if(O||!i(t))return;O=!0;let r=h(`.si-submit`,t);r.disabled=!0,r.setAttribute(`aria-busy`,`true`),r.classList.add(`is-busy`),h(`.si-submit__label`,r).textContent=`Signing in…`,E=h(`#si-keep`,t).checked,setTimeout(()=>{a.signedIn=!0,e(`signedIn`),c(`note`,`${n(a.me)?.name??`Someone`} signed in.`),O=!1;let t=()=>{history.replaceState(null,``,`#/customers`),document.documentElement.classList.remove(`is-out`),document.dispatchEvent(new CustomEvent(`accord:signedin`))};if(g){t();return}p.to(u(`.si-brand > *, .si-form`,T),{opacity:0,y:-10,duration:.25,stagger:.03,ease:`power2.in`,onComplete:t})},700)}window.addEventListener(`pagehide`,()=>{if(!(E||!a.signedIn))try{let e=localStorage.getItem(`accord:v1`);e&&localStorage.setItem(`accord:v1`,JSON.stringify({...JSON.parse(e),signedIn:!1}))}catch{}});var z={title:`Sign in`,mount(e){T=e,T.addEventListener(`submit`,e=>{e.preventDefault(),R(e.target)}),T.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`.si-eye`);if(n){let e=h(`#si-pass`,T),t=e.type===`password`;e.type=t?`text`:`password`,n.setAttribute(`aria-pressed`,String(t)),n.setAttribute(`aria-label`,t?`Hide password`:`Show password`),n.innerHTML=t?C:S,p.fromTo(h(`svg`,n),{scale:.6,rotate:-20},{scale:1,rotate:0,duration:v(.4),ease:`back.out(2.5)`});return}let r=t.closest(`.si-forgot`);r&&L(r)}),T.addEventListener(`input`,e=>{let t=e.target;if(t.getAttribute(`aria-invalid`)===`true`&&t.checkValidity()){t.setAttribute(`aria-invalid`,`false`);let e=T.querySelector(`#${t.id}-err`);e&&(e.hidden=!0)}})},enter(){O=!1,E=!0,M(),F()},leave(){N()}};export{z as page};