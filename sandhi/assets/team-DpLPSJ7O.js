import{$ as e,B as t,C as n,D as r,F as i,G as a,I as o,K as s,O as c,Q as l,R as u,S as d,T as f,U as p,W as ee,at as m,ct as h,d as g,dt as _,f as v,h as te,it as y,j as ne,k as re,lt as b,n as x,o as ie,ot as S,st as C,t as w,u as T,v as E,w as D,x as ae,y as oe}from"./index-DtoNja2p.js";var se=[[`all`,`All`],[`online`,`Online`],[`sales`,`Sales`],[`success`,`Success & marketing`]],ce=e=>/success|marketing|growth/i.test(e.role),O=(e,t)=>t===`all`?!0:t===`online`?e.online&&!e.invited:t===`sales`?!ce(e):ce(e),k=e=>l.customers.filter(t=>t.ownerId===e),A=e=>k(e).filter(e=>!e.lost&&e.stage===`won`),j=e=>k(e).filter(e=>!e.lost&&e.stage!==`won`),le=e=>k(e).filter(e=>e.lost),M=e=>l.tasks.filter(t=>!t.done&&t.assigneeId===e),N=e=>e.reduce((e,t)=>e+t.value,0),ue=()=>l.members.filter(e=>!e.invited),de={"Austin, TX":`America/Chicago`,"Chicago, IL":`America/Chicago`,"Seattle, WA":`America/Los_Angeles`,"Portland, OR":`America/Los_Angeles`,"Atlanta, GA":`America/New_York`,"Miami, FL":`America/New_York`,"New York, NY":`America/New_York`,"Boston, MA":`America/New_York`,"Denver, CO":`America/Denver`};function fe(e){let t=e.id===l.me?l.settings.profile.timezone:de[e.city];try{return new Date().toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`,...t?{timeZone:t}:{}})}catch{return new Date().toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`})}}function pe(e){let t=2166136261;for(let n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function me(e){let t=new Date,n=Math.floor(t.getMonth()/3)*3,r=new Date(t.getFullYear(),n,1).getTime(),i=Array.from({length:6},(e,n)=>new Date(t.getFullYear(),t.getMonth()-5+n,1)),a=pe(e.id+`:won`),o=A(e.id);return i.map((t,n)=>{let i=t.getTime(),s=new Date(t.getFullYear(),t.getMonth()+1,1).getTime(),c=i>=r,l=0,u=0;return c?o.forEach(e=>{let t=Math.max(e.updatedAt,r);t>=i&&t<s&&(l+=e.value,u++)}):!e.invited&&i>=e.joinedAt-31*864e5&&(u=1+Math.floor(a()*3),l=Math.round(e.quota/3*(.22+a()*.62)/500)*500),{label:t.toLocaleDateString(`en-US`,{month:`short`}),value:l,deals:u,inQuarter:c,current:n===5}})}function he(e,t,n){let r=t===`sm`?25:44,i=t===`sm`?5:8,a=(r+i)*2,o=r+i,s=+(2*Math.PI*r).toFixed(2),c=Math.round(e*100);return`<span class="qring qring--${t}${e>=1?` is-over`:``}" role="img" aria-label="${h(n)}: ${c}% of quota">
    <svg viewBox="0 0 ${a} ${a}" aria-hidden="true">
      <circle class="qring__base" cx="${o}" cy="${o}" r="${r}" stroke-width="${i}"/>
      <circle class="qring__val" cx="${o}" cy="${o}" r="${r}" stroke-width="${i}" stroke-dasharray="${s}" stroke-dashoffset="${s}" data-p="${Math.min(1,e)}" data-n="${c}"/>
    </svg>
    <b class="qring__num" aria-hidden="true"><span>0</span>%</b></span>`}function P(e,t,n=0){m(`.qring__val`,e).forEach((e,r)=>{let i=+e.getAttribute(`stroke-dasharray`),a=i*(1-e.dataset.p),o=e.closest(`.qring`).querySelector(`.qring__num span`);if(!t||b){_.set(e,{strokeDashoffset:a}),o.textContent=e.dataset.n;return}_.fromTo(e,{strokeDashoffset:i},{strokeDashoffset:a,duration:1.3,delay:n+r*.05,ease:`power3.out`}),_.delayedCall(n+r*.05,()=>S(o,+e.dataset.n,{duration:1.2,from:0}))})}var F=e=>e.invited?`<span class="pill pill--warn"><i></i>Invite pending</span>`:`<span class="tm-presence${e.online?` is-on`:``}"><i aria-hidden="true"></i>${e.online?`Online`:`Away`}</span>`;function I(e,t){return`<span class="who tm-who tm-who--${t}">${x(e,t)}${e.invited?``:`<span class="who__dot${e.online?``:` who__dot--off`}" aria-hidden="true"></span>`}</span>`}function ge(e){let t=N(A(e.id)),n=`mc-${e.id}`;return e.invited?`<article class="mcard is-invited" data-key="${e.id}" aria-labelledby="${n}">
      <div class="mcard__top">
        ${I(e,`lg`)}
        <div class="mcard__id">
          <h2 class="mcard__name" id="${n}">${h(e.name)}</h2>
          <p class="mcard__role">${h(e.role)}</p>
          ${F(e)}
        </div>
        <button type="button" class="icon-btn icon-btn--sm mcard__more" data-more="${e.id}" aria-label="Invite options for ${h(e.name)}" aria-haspopup="menu" aria-expanded="false">${E(`more`)}</button>
      </div>
      <p class="mcard__note">${E(`mail`)}<span>Invite sent to <b>${h(e.email)}</b> ${c(e.joinedAt)}. They join the team once they accept.</span></p>
      <div class="mcard__foot">
        <button type="button" class="btn btn--ghost btn--sm" data-resend="${e.id}">${E(`refresh`)}Resend invite</button>
        <span class="mcard__quota muted">Quota ${D(e.quota)}</span>
      </div>
    </article>`:`<article class="mcard" data-key="${e.id}" aria-labelledby="${n}">
    <div class="mcard__top">
      ${I(e,`lg`)}
      <div class="mcard__id">
        <h2 class="mcard__name" id="${n}"><a href="#/team/${e.id}">${h(e.name)}</a>${e.id===l.me?`<span class="tag mcard__you">You</span>`:``}</h2>
        <p class="mcard__role">${h(e.role)}</p>
        ${F(e)}
      </div>
      ${he(e.quota?t/e.quota:0,`sm`,`${e.name}, won ${D(t)} of ${D(e.quota)}`)}
    </div>
    <dl class="mcard__stats">
      <div><dt>Won</dt><dd class="num">${D(t)}</dd></div>
      <div><dt>Open deals</dt><dd class="num">${j(e.id).length}</dd></div>
      <div><dt>Open tasks</dt><dd class="num">${M(e.id).length}</dd></div>
    </dl>
    <div class="mcard__foot">
      <span class="mcard__city">${E(`pin`)}${h(e.city||`Remote`)}</span>
      <a class="icon-btn icon-btn--sm" href="mailto:${h(e.email)}" aria-label="Email ${h(e.name)}" title="Email ${h(p(e.name))}">${E(`mail`)}</a>
      <a class="mcard__go" href="#/team/${e.id}">View profile ${E(`arrow`)}</a>
    </div>
  </article>`}var L,R,z,B,V=`all`,H=null,U=!1,W=!1,G=0,K=0,q=e=>{W=!0;try{e()}finally{W=!1}};function J(){let e=e=>e.invited?3:e.id===l.me?0:e.online?1:2;return l.members.filter(e=>O(e,V)).slice().sort((t,n)=>e(t)-e(n))}function Y(){let e=J();B.innerHTML=e.length?e.map(ge).join(``):`<div class="tm-empty" data-key="empty">${E(`users`)}<p><b>Nobody here right now.</b><br />No one matches “${h(se.find(e=>e[0]===V)[1])}”.</p></div>`,P(B,!1),y(`#tm-showing`,L).textContent=`Showing ${e.length} of ${l.members.length}`,m(`.tm-chips button`,L).forEach(e=>{let t=e.dataset.f;y(`span`,e).textContent=String(l.members.filter(e=>O(e,t)).length)})}function X(e){let t=ue(),r=l.members.length-t.length,i=t.filter(e=>e.online),a=t.reduce((e,t)=>e+N(A(t.id)),0),o=t.reduce((e,t)=>e+t.quota,0),s=o?Math.min(1,a/o):0;y(`#tm-away`,L).textContent=`${t.length-i.length} away`,y(`#tm-invites`,L).textContent=r?`${r} invite${r>1?`s`:``} pending`:`Everyone has joined`,y(`#tm-stack`,L).innerHTML=i.slice(0,5).map(e=>x(e,`sm`)).join(``)+(i.length>5?`<span class="stack__more">+${i.length-5}</span>`:``),y(`#tm-quota-of`,L).textContent=`of ${D(o)} combined quota`,y(`#tm-quota-pct`,L).textContent=`${Math.round(a/(o||1)*100)}% there`,y(`#tm-quota-bar`,L).setAttribute(`aria-label`,`Team has won ${n(a)} of ${n(o)} combined quota`);let c=y(`#tm-quota-bar i`,L),u=y(`#tm-count`,L),d=y(`#tm-online`,L),f=y(`#tm-won`,L);e?(S(u,t.length,{duration:1}),S(d,i.length,{duration:1}),S(f,a,{prefix:`$`,duration:1.4}),_.fromTo(c,{scaleX:0},{scaleX:s,duration:C(1.4),delay:C(.2),ease:`power3.out`}),_.fromTo(m(`#tm-stack > *`,L),{opacity:0,x:-8},{opacity:1,x:0,duration:C(.45),stagger:b?0:.06,delay:C(.25),ease:`back.out(2)`,clearProps:`transform,opacity`})):(u.textContent=String(t.length),d.textContent=String(i.length),f.textContent=n(a),_.to(c,{scaleX:s,duration:C(.6),ease:`power3.out`}))}function _e(e){let t=y(`.tm-band h1`,L);e&&re(t,`Team`),T(m(`.tm-band .eyebrow, .tm-band .lede, .tm-fig, .tm-quota`,L),{y:14,stagger:.07}),X(!0),T(m(`.tm-toolbar`,L),{delay:.1});let n=m(`.mcard, .tm-empty`,B);_.fromTo(n,{opacity:0,y:24,scale:.98},{opacity:1,y:0,scale:1,duration:C(.65),ease:`power3.out`,stagger:b?0:{each:.05,grid:`auto`,from:`start`},delay:C(.15),clearProps:`transform,opacity`}),P(B,!0,.35)}function ve(e,t){e!==V&&(V=e,m(`.tm-chips button`,L).forEach(t=>t.setAttribute(`aria-pressed`,String(t.dataset.f===e))),r(t),v(B,Y,{stagger:.03}),P(B,!0,.1),w(`${J().length} people shown.`))}async function ye(){let n=null;if(await d({title:`Invite a teammate`,body:`<p class="modal__text">They get an email with a link to join <b>${h(l.settings.workspace.name)}</b>. You can resend or revoke it until they accept.</p>
      ${g(`ti-name`,`Full name`,`<input class="input" id="ti-name" required maxlength="50" autocomplete="off" data-error="Enter their name." />`)}
      ${g(`ti-email`,`Work email`,`<input class="input" id="ti-email" type="email" required maxlength="80" autocomplete="off" placeholder="name@company.com" data-error="Enter a valid email address." />`)}
      ${g(`ti-role`,`Role`,`<select class="select" id="ti-role">${f([[`Account Executive`,`Account Executive`],[`Sales Development`,`Sales Development`],[`Solutions Engineer`,`Solutions Engineer`],[`Customer Success`,`Customer Success`],[`Marketing`,`Marketing`]],`Account Executive`)}</select>`)}`,actions:[{label:`Cancel`,value:`cancel`},{label:`Send invite`,value:`send`,kind:`primary`,submit:!0}],onAction:(t,r)=>{if(t!==`send`)return;let i=y(`#ti-email`,r);if(l.members.some(e=>e.email.toLowerCase()===i.value.trim().toLowerCase())){let e=y(`#ti-email-err`,r);return e.hidden=!1,e.textContent=`Someone on the team already uses this email.`,i.setAttribute(`aria-invalid`,`true`),i.focus(),!1}n={id:e(`m`),name:y(`#ti-name`,r).value.trim(),email:i.value.trim(),role:y(`#ti-role`,r).value,photo:null,phone:``,city:``,online:!1,quota:15e4,joinedAt:Date.now(),invited:!0}}}),!n)return;let r=n;H&&i(`#/team`),O(r,V)||(V=`all`,m(`.tm-chips button`,L).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.f===`all`)))),l.members.push(r),q(()=>t(`members`)),v(B,Y),X(!1),B.querySelector(`[data-key="${r.id}"]`)?.scrollIntoView({block:`nearest`,behavior:b?`auto`:`smooth`}),o(`Invite sent to ${r.email}.`)}function be(e,t){ae(e,[{label:`Resend invite`,icon:`refresh`,run:()=>xe(t)},{label:`Copy email`,icon:`copy`,run:()=>{navigator.clipboard?.writeText(t.email).then(()=>o(`Email copied.`),()=>o(t.email))}},{label:`Revoke invite`,icon:`trash`,danger:!0,sep:!0,run:()=>Se(t)}])}function xe(e){e.joinedAt=Date.now(),q(()=>t(`members`));let n=B.querySelector(`[data-key="${e.id}"]`);if(n){let t=n.querySelector(`.mcard__note span`);t&&(t.innerHTML=`Invite sent to <b>${h(e.email)}</b> just now. They join the team once they accept.`),_.fromTo(n,{scale:1},{scale:1.02,duration:C(.16),yoyo:!0,repeat:1,ease:`power2.out`,clearProps:`transform`})}o(`Invite resent to ${e.email}.`)}function Se(e){let n=l.members.indexOf(e);if(n<0)return;let r=B.querySelector(`[data-key="${e.id}"]`),i=()=>{l.members.splice(l.members.indexOf(e),1),q(()=>t(`members`)),v(B,Y),X(!1)};r&&!b?_.to(r,{opacity:0,scale:.94,duration:.25,ease:`power2.in`,onComplete:i}):i(),o(`Invite for ${e.name} revoked.`,{label:`Undo`,run:()=>{l.members.splice(Math.min(n,l.members.length),0,e),q(()=>t(`members`)),v(B,Y),X(!1)}})}var Ce={call:`phone`,email:`mail`,meeting:`meeting`,note:`note`,stage:`chevron`,won:`trophy`,task:`task`,created:`sparkle`};function we(e){let t=ie(e.due),n=t<0?` meta--late`:t===0?` meta--soon`:``,r=t<0?`Overdue · ${te(e.due)}`:t===0?`Today`:t===1?`Tomorrow`:te(e.due);return`<span class="meta${n}">${E(t<0?`flag`:`calendar`)}${h(r)}</span>`}function Z(e){let t=z.querySelector(`#tmd-tasks`);if(!t)return;let n=M(e.id).sort((e,t)=>e.due-t.due);y(`#tmd-tasks-n`,z).textContent=`${n.length} open`,t.innerHTML=n.length?n.slice(0,8).map(e=>`<li class="tmd-task" data-key="${e.id}">
        <input type="checkbox" id="tt-${e.id}" data-task="${e.id}" />
        <label for="tt-${e.id}">${h(e.title)}</label>
        ${we(e)}</li>`).join(``)+(n.length>8?`<li class="tmd-more"><a class="card__link" href="#/tasks">${n.length-8} more in Tasks ${E(`arrow`)}</a></li>`:``):`<li class="tmd-none" data-key="none">${E(`check`)}<span>Nothing open. ${e.id===l.me?`You’re`:`${h(p(e.name))} is`} all caught up.</span></li>`}function Te(e){let t=z.querySelector(`#tmd-activity`);if(!t)return;let n=l.activity.filter(t=>t.by===e.id).slice(0,7);t.innerHTML=n.length?n.map(e=>`<li class="tmd-act" data-key="${e.id}">
      <span class="tmd-act__ico${e.kind===`won`?` is-won`:``}">${E(Ce[e.kind]??`note`)}</span>
      <p>${e.customerId?`<a href="#/customers/${e.customerId}">${h(e.text)}</a>`:h(e.text)}<small>${c(e.at)}</small></p></li>`).join(``):`<li class="tmd-none">${E(`info`)}<span>No activity logged yet.</span></li>`}function Ee(e){let t=k(e.id).filter(e=>!e.lost);return t.length?u.slice().reverse().map(e=>{let n=t.filter(t=>t.stage===e).sort((e,t)=>t.value-e.value);return n.length?`<div class="tmd-group">
      <h3 class="tmd-group__head">${ne(e)}<span class="muted num">${n.length} · ${D(N(n))}</span></h3>
      <ul class="tmd-rows">${n.map(e=>`<li><a class="tmd-row" href="#/customers/${e.id}">
        ${oe(e)}
        <span class="tmd-row__text"><b>${h(e.name)}</b><small>${h(e.industry)} · ${h(e.contact.name)}</small></span>
        <span class="tmd-row__value num">${D(e.value)}</span>
        ${E(`chevron`,`tmd-row__chev`)}</a></li>`).join(``)}</ul></div>`:``}).join(``):`<p class="tmd-none">${E(`users`)}<span>${h(p(e.name))} doesn’t own any customers yet.</span></p>`}function De(e){let t=me(e),r=Math.max(...t.map(e=>e.value),1);return`<div class="tmd-months" role="img" aria-label="Deals won by month. ${h(t.map(e=>`${e.label}: ${e.value?n(e.value):`none`}`).join(`, `))}.">
    ${t.map(e=>`<div class="tmd-month${e.inQuarter?` is-q`:``}${e.current?` is-now`:``}">
      <span class="tmd-month__val num">${e.value?D(e.value):`–`}</span>
      <span class="tmd-month__well"><i style="--h:${(e.value/r).toFixed(4)}"></i></span>
      <span class="tmd-month__lab">${h(e.label)}</span></div>`).join(``)}
  </div>
  <p class="tmd-legend"><span><i class="is-q" aria-hidden="true"></i>This quarter</span><span><i aria-hidden="true"></i>Earlier</span></p>`}function Oe(e){let t=A(e.id),n=j(e.id),r=le(e.id),i=N(t),a=e.quota?i/e.quota:0,o=t.length+r.length?Math.round(t.length/(t.length+r.length)*100):0,s=e.id===l.me;return z.innerHTML=`
    <div class="band tmd-band">
      <a class="tm-back" href="#/team">${E(`back`)}All members</a>
      <div class="tmd-head">
        ${I(e,`xl`)}
        <div class="tmd-id">
          <h1 class="title" tabindex="-1">${h(e.name)}</h1>
          <p class="lede">${h(e.role)}${e.city?` · ${h(e.city)}`:``}</p>
          <div class="tmd-meta">
            ${F(e)}
            ${e.invited?``:`<span class="tag">${E(`clock`)}<span id="tmd-clock">${fe(e)}</span>&nbsp;local time</span>`}
            <a class="tag tmd-link" href="mailto:${h(e.email)}">${E(`mail`)}${h(e.email)}</a>
            ${e.phone?`<a class="tag tmd-link" href="tel:${h(e.phone.replace(/[^+\d]/g,``))}">${E(`phone`)}${h(e.phone)}</a>`:``}
          </div>
        </div>
        ${s?`<a class="btn btn--ghost tmd-edit" href="#/settings/profile">${E(`edit`)}Edit profile</a>`:``}
      </div>
      <div class="tmd-figs">
        <section class="tmd-fig" aria-labelledby="tmf-won"><span class="tmd-fig__value num" id="tmd-won">$0</span><span class="tmd-fig__label" id="tmf-won">Won this quarter<small>${t.length} deal${t.length===1?``:`s`} closed</small></span></section>
        <section class="tmd-fig tmd-fig--ring" aria-labelledby="tmf-quota">${he(a,`lg`,`Quota attainment`)}<span class="tmd-fig__label" id="tmf-quota">Quota attainment<small>${D(i)} of ${D(e.quota)}</small></span></section>
        <section class="tmd-fig" aria-labelledby="tmf-pipe"><span class="tmd-fig__value num" id="tmd-pipe">$0</span><span class="tmd-fig__label" id="tmf-pipe">Open pipeline<small>${n.length} open deal${n.length===1?``:`s`}</small></span></section>
        <section class="tmd-fig" aria-labelledby="tmf-rate"><span class="tmd-fig__value num"><span id="tmd-rate">0</span>%</span><span class="tmd-fig__label" id="tmf-rate">Win rate<small>${t.length} won · ${r.length} lost</small></span></section>
      </div>
    </div>
    <div class="body">
      <div class="tmd-grid">
        <section class="card tmd-cust" aria-labelledby="tmd-cust-h">
          <div class="card__head"><h2 class="card__title" id="tmd-cust-h">Customers</h2><span class="card__aside">${k(e.id).filter(e=>!e.lost).length} owned</span></div>
          ${Ee(e)}
        </section>
        <div class="tmd-side">
          <section class="card" aria-labelledby="tmd-chart-h">
            <div class="card__head"><h2 class="card__title" id="tmd-chart-h">Deals won by month</h2><span class="card__aside">Last 6 months</span></div>
            ${De(e)}
          </section>
          <section class="card" aria-labelledby="tmd-tasks-h">
            <div class="card__head"><h2 class="card__title" id="tmd-tasks-h">Open tasks</h2><span class="card__aside" id="tmd-tasks-n"></span></div>
            <ul class="tmd-tasks" id="tmd-tasks"></ul>
          </section>
          <section class="card" aria-labelledby="tmd-act-h">
            <div class="card__head"><h2 class="card__title" id="tmd-act-h">Recent activity</h2><a class="card__link" href="#/activity">All activity ${E(`arrow`)}</a></div>
            <ol class="tmd-acts" id="tmd-activity"></ol>
          </section>
        </div>
      </div>
    </div>`,Z(e),Te(e),P(z,!1),{wonV:i,pipe:N(n),rate:o}}function ke(e){T(m(`.tm-back, .tmd-head > *, .tmd-fig`,z),{y:14,stagger:.06}),S(y(`#tmd-won`,z),e.wonV,{prefix:`$`,duration:1.3,from:0}),S(y(`#tmd-pipe`,z),e.pipe,{prefix:`$`,duration:1.3,from:0}),S(y(`#tmd-rate`,z),e.rate,{duration:1.1,from:0}),P(z,!0,.25),T(m(`.tmd-grid > .card, .tmd-side > .card`,z),{delay:.15,stagger:.07});let t=m(`.tmd-month__well i`,z);t.forEach(e=>_.set(e,{scaleY:0})),_.to(t,{scaleY:(e,t)=>+t.style.getPropertyValue(`--h`),duration:C(.9),delay:C(.4),stagger:b?0:.06,ease:`power3.out`}),_.fromTo(m(`.tmd-month__val`,z),{opacity:0,y:6},{opacity:1,y:0,duration:C(.4),delay:C(.8),stagger:b?0:.06,clearProps:`transform,opacity`})}function Q(e,t){let r=a(e);if(!r)return o(`That person is no longer on the team.`),i(`#/team`),!1;H=e,R.hidden=!0,z.hidden=!1;let s=Oe(r);return t?ke(s):(y(`#tmd-won`,z).textContent=n(s.wonV),y(`#tmd-pipe`,z).textContent=n(s.pipe),y(`#tmd-rate`,z).textContent=String(s.rate),m(`.tmd-month__well i`,z).forEach(e=>_.set(e,{scaleY:+e.style.getPropertyValue(`--h`)}))),je(r),!0}function Ae(e,t=!1){H=null,$(),z.hidden=!0,z.replaceChildren(),R.hidden=!1,Y(),e?_e(t):X(!1)}function je(e){$(),!e.invited&&(K=window.setInterval(()=>{let t=z.querySelector(`#tmd-clock`);t&&(t.textContent=fe(e))},3e4))}function $(){K&&=(clearInterval(K),0)}function Me(e){let t=++G,n=z.hidden?R:z;if(b||n.hidden){e();return}_.to(n,{opacity:0,y:-8,duration:.18,ease:`power2.in`,onComplete:()=>{_.set(n,{clearProps:`opacity,transform`}),t===G&&(e(),window.scrollTo({top:0}),m(`h1`,L).find(e=>e.getClientRects().length)?.focus({preventScroll:!0}))}})}function Ne(e,t){let n=t.params[0]?a(t.params[0]):void 0;if(n){e.innerHTML=`<button class="tool" type="button" data-act="copy">${E(`copy`)}<span>Copy email</span></button>
      ${n.id===l.me?``:`<a class="btn btn--primary" href="mailto:${h(n.email)}">${E(`mail`)}Email ${h(p(n.name))}</a>`}`,y(`[data-act="copy"]`,e).addEventListener(`click`,e=>{r(e.currentTarget),navigator.clipboard?.writeText(n.email).then(()=>o(`${n.email} copied.`),()=>o(n.email))});return}e.innerHTML=`<button class="btn btn--primary" type="button" data-act="invite">${E(`plus`)}Invite member</button>`,y(`[data-act="invite"]`,e).addEventListener(`click`,ye)}var Pe={title:()=>H?a(H)?.name??`Team`:`Team`,mount(e){L=e,L.innerHTML=`
      <div class="tm-list">
        <div class="band tm-band">
          <div class="tm-intro">
            <p class="eyebrow">${h(l.settings.workspace.name)} · people</p>
            <h1 class="title" tabindex="-1">Team</h1>
            <p class="lede">Who is selling what, who is around right now, and how close everyone is to quota this quarter.</p>
          </div>
          <section class="tm-fig" aria-labelledby="tm-f-members">
            <span class="tm-fig__value num" id="tm-count">0</span>
            <span class="tm-fig__label" id="tm-f-members">Members<small id="tm-invites"></small></span>
          </section>
          <section class="tm-fig" aria-labelledby="tm-f-online">
            <span class="tm-fig__row"><span class="tm-fig__value num" id="tm-online">0</span><span class="stack tm-stack" id="tm-stack"></span></span>
            <span class="tm-fig__label" id="tm-f-online">Online now<small id="tm-away"></small></span>
          </section>
          <section class="tm-quota" aria-labelledby="tm-f-won">
            <span class="tm-fig__label" id="tm-f-won">Team won this quarter</span>
            <span class="tm-fig__value num" id="tm-won">$0</span>
            <div class="bar tm-quota__bar" id="tm-quota-bar" role="img"><i></i></div>
            <span class="tm-quota__row"><span id="tm-quota-of"></span><b id="tm-quota-pct"></b></span>
          </section>
        </div>
        <div class="body">
          <div class="tm-toolbar">
            <div class="chips tm-chips" role="group" aria-label="Show members">
              ${se.map(([e,t])=>`<button type="button" data-f="${e}" aria-pressed="${e===V}">${h(t)} <span></span></button>`).join(``)}
            </div>
            <p class="tm-showing muted" id="tm-showing" aria-live="polite"></p>
          </div>
          <div class="tm-grid" id="tm-grid"></div>
        </div>
      </div>
      <div class="tm-detail" hidden></div>`,R=y(`.tm-list`,L),z=y(`.tm-detail`,L),B=y(`#tm-grid`,L),_.set(y(`#tm-quota-bar i`,L),{scaleX:0}),L.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`.tm-chips button`);if(n){ve(n.dataset.f,n);return}let i=t.closest(`[data-more]`);if(i){let e=a(i.dataset.more);e&&be(i,e);return}let o=t.closest(`[data-resend]`);if(o){let e=a(o.dataset.resend);e&&(r(o),xe(e))}}),L.addEventListener(`change`,e=>{let n=e.target;if(!n.dataset.task)return;let r=l.tasks.find(e=>e.id===n.dataset.task),i=a(H);if(!r||!i)return;r.done=n.checked,r.doneAt=Date.now(),n.closest(`.tmd-task`)?.classList.add(`is-done`),q(()=>t(`tasks`)),ee(`task`,`Completed “${r.title}”.`,r.customerId);let s=y(`#tmd-tasks`,z);setTimeout(()=>{v(s,()=>Z(i)),v(y(`#tmd-activity`,z),()=>Te(i))},b?0:450),o(`Task completed.`,{label:`Undo`,run:()=>{r.done=!1,r.doneAt=null,q(()=>t(`tasks`)),H===i.id&&v(y(`#tmd-tasks`,z),()=>Z(i))}}),w(`Completed ${r.title}.`)});let n=()=>{if(!W){if(H){let e=a(H);e&&U&&Q(e.id,!1);return}U?(v(B,Y),X(!1)):Y()}};s(`members`,n),s(`customers`,n),s(`tasks`,n),s(`settings`,()=>{!H&&!W&&(y(`.tm-band .eyebrow`,L).textContent=`${l.settings.workspace.name} · people`)})},enter(e){U=!0;let t=e.params[0];if(e.same){if(t&&t===H&&!z.hidden)return;H=t&&a(t)?t:null,Me(()=>t?Q(t,!0):Ae(!0));return}t?Q(t,!0):Ae(!0,e.first)},actions:Ne,leave(){U=!1,$()}};export{Pe as page};