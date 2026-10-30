import{A as e,B as t,C as n,D as r,F as i,G as a,I as o,K as s,M as ee,P as te,Q as c,R as l,T as u,Y as ne,a as d,at as f,ct as p,d as m,dt as h,i as re,it as g,k as ie,lt as ae,n as oe,r as _,st as v,t as y,tt as b,u as x,v as S,w as se}from"./index-DtoNja2p.js";var C=[{id:`profile`,label:`Profile`,hint:`Name, photo, contact`,icon:`user`},{id:`workspace`,label:`Workspace`,hint:`Name, currency, target`,icon:`briefcase`},{id:`pipeline`,label:`Pipeline`,hint:`Stage names, win rate`,icon:`trend`},{id:`notifications`,label:`Notifications`,hint:`What pings you`,icon:`megaphone`},{id:`appearance`,label:`Appearance`,hint:`Theme, density, motion`,icon:`moon`}],ce=[`profile`,`workspace`,`pipeline`],w=e=>C.some(t=>t.id===e),T=`./photos/165-accord/person-9.jpg`,E,D,O,k,A=`profile`,j=``,M=!1,N=!1,P=!1,F=!1,I=e=>{N=!0;try{e()}finally{N=!1}},L=matchMedia(`(max-width: 900px)`),R=[`America/Los_Angeles`,`America/Denver`,`America/Chicago`,`America/New_York`,`America/Sao_Paulo`,`Europe/London`,`Europe/Berlin`,`Europe/Stockholm`,`Africa/Lagos`,`Asia/Dubai`,`Asia/Kolkata`,`Asia/Singapore`,`Asia/Tokyo`,`Australia/Sydney`,`UTC`];function le(e){let t=``;try{t=new Intl.DateTimeFormat(`en-US`,{timeZone:e,timeZoneName:`shortOffset`}).formatToParts(new Date).find(e=>e.type===`timeZoneName`)?.value??``}catch{}let n=e===`UTC`?`Coordinated Universal Time`:e.split(`/`).pop().replace(/_/g,` `);return t?`${n} (${t})`:n}function z(e){try{return new Date().toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`,timeZone:e})}catch{return``}}var B=(e,t,n=``)=>`<div class="st-card__head"><div><h2 class="card__title">${p(e)}</h2><p class="st-card__sub">${t}</p></div>${n}</div>`;function ue(){let e=c.settings.profile,t=a(c.me),n=R.includes(e.timezone)?R:[e.timezone,...R];return`<form class="st-form" data-form="profile" novalidate>
    <section class="card st-card">
      ${B(`Profile`,`How you appear to the team, on the deals you own and in every note you leave.`)}
      <div class="st-photo">
        <img class="av av--xl st-photo__img" id="st-photo-img" src="${p(t?.photo||T)}" width="96" height="96" alt="Your profile photo" />
        <div class="st-photo__text">
          <p class="st-photo__title">Profile photo</p>
          <p class="st-photo__hint">A square JPG or PNG works best. It is cropped to a circle.</p>
          <div class="st-photo__btns">
            <button type="button" class="btn btn--ghost btn--sm" data-photo-pick>${S(`download`)}Upload new photo</button>
            <button type="button" class="btn btn--sm st-link" data-photo-reset${(t?.photo||T)===T?` hidden`:``}>Use the original</button>
          </div>
          <input type="file" id="st-photo-file" accept="image/png, image/jpeg, image/webp" hidden />
          <input type="hidden" name="photo" value="${p(t?.photo||T)}" />
        </div>
      </div>
      <div class="field-row">
        ${m(`st-name`,`Full name`,`<input class="input" id="st-name" name="name" required maxlength="50" autocomplete="name" value="${p(e.name)}" data-error="Your name can’t be empty." />`)}
        ${m(`st-title`,`Job title`,`<input class="input" id="st-title" name="title" required maxlength="40" autocomplete="organization-title" value="${p(e.title)}" data-error="Add a job title — the team sees it on your card." />`)}
      </div>
      <div class="field-row">
        ${m(`st-email`,`Work email`,`<input class="input" id="st-email" name="email" type="email" required maxlength="80" autocomplete="email" value="${p(e.email)}" data-error="Enter a valid email address, like name@company.com." />`)}
        ${m(`st-phone`,`Phone`,`<input class="input" id="st-phone" name="phone" type="tel" maxlength="24" autocomplete="tel" pattern="[+\\(\\)\\d\\s.\\-]{7,24}" value="${p(e.phone)}" data-error="Use digits, spaces, + ( ) or - only." />`,`Optional. Shown to teammates on your profile.`)}
      </div>
      ${m(`st-tz`,`Time zone`,`<select class="select" id="st-tz" name="timezone">${u(n.map(e=>[e,le(e)]),e.timezone)}</select>`,`Due times and your local clock use this zone. It’s <b id="st-tz-now">${z(e.timezone)}</b> there now.`)}
    </section>
  </form>`}function de(){let e=c.settings.workspace,t=c.members.filter(e=>!e.invited).length;return`<form class="st-form" data-form="workspace" novalidate>
    <section class="card st-card">
      ${B(`Workspace`,`Shared by everyone in the workspace. Changes apply to the whole team.`)}
      ${m(`st-ws-name`,`Workspace name`,`<input class="input" id="st-ws-name" name="name" required maxlength="40" value="${p(e.name)}" data-error="Give the workspace a name." />`)}
      <div class="field-row">
        ${m(`st-currency`,`Currency`,`<select class="select" id="st-currency" name="currency">${u([[`USD`,`US dollar (USD)`],[`EUR`,`Euro (EUR)`],[`GBP`,`British pound (GBP)`]],e.currency)}</select>`)}
        ${m(`st-week`,`Week starts on`,`<select class="select" id="st-week" name="weekStart">${u([[`monday`,`Monday`],[`sunday`,`Sunday`]],e.weekStart)}</select>`)}
      </div>
      ${m(`st-target`,`Quarterly target`,`<div class="st-money"><span aria-hidden="true">$</span><input class="input" id="st-target" name="fiscalQuarterTarget" type="number" inputmode="numeric" required min="10000" max="100000000" step="1000" value="${e.fiscalQuarterTarget}" data-error="Enter a target between $10,000 and $100,000,000, in steps of $1,000." /></div>`,`What the team aims to close this quarter. <span id="st-target-per">${V(e.fiscalQuarterTarget,t)}</span>`)}
    </section>
    <section class="card st-card st-danger" aria-labelledby="st-danger-h">
      <div class="st-card__head"><div><h2 class="card__title" id="st-danger-h">${S(`info`)}Danger zone</h2>
        <p class="st-card__sub">Put every customer, task, note and setting back the way the demo started. This can’t be undone.</p></div>
        <button type="button" class="btn btn--danger" data-reset>${S(`refresh`)}Reset demo data</button></div>
    </section>
  </form>`}var V=(e,t)=>t&&e>0?`That’s about <b>${se(e/t)}</b> for each of the ${t} people on the team.`:``;function fe(){let e=c.settings.stages,t={qualified:`Qualified`,talks:`In talks`,proposal:`Proposal`,won:`Won`},n=c.customers.filter(e=>!e.lost&&e.stage===`won`).length,r=c.customers.filter(e=>e.lost).length;return`<form class="st-form" data-form="pipeline" novalidate>
    <section class="card st-card">
      ${B(`Stage names`,`Rename the four columns of the deal board. Deals keep their place; only the names change.`)}
      <div class="st-preview" aria-hidden="true">
        <span class="st-preview__label">On the board</span>
        <div class="st-preview__chips">${l.map((t,n)=>`${n?S(`chevron`,`st-preview__sep`):``}<span class="stage stage--${t} st-chip" data-chip="${t}"><i></i><span>${p(e[t])}</span></span>`).join(``)}</div>
      </div>
      <ol class="st-stages">${l.map((n,r)=>`<li class="st-stage">
        <span class="st-stage__n" aria-hidden="true">${r+1}</span>
        ${m(`st-stage-${n}`,`Stage ${r+1}${n===`won`?` · closed won`:``}`,`<input class="input" id="st-stage-${n}" name="${n}" data-stage="${n}" required maxlength="18" value="${p(e[n])}" placeholder="${t[n]}" data-error="Every stage needs a name." />`)}
      </li>`).join(``)}</ol>
    </section>
    <section class="card st-card st-rate" aria-labelledby="st-rate-h">
      ${B(`How win rate is counted`,`Open deals don’t count either way until they are won or marked as lost. Read-only — it follows the board.`)}
      <div class="st-formula" role="img" aria-label="Win rate: ${n} won divided by ${n} won plus ${r} lost equals ${b()} percent">
        <span class="st-formula__term"><b class="num">${n}</b><small>won</small></span>
        <span class="st-formula__op" aria-hidden="true">÷</span>
        <span class="st-formula__paren">(<span class="st-formula__term"><b class="num">${n}</b><small>won</small></span><span class="st-formula__op">+</span><span class="st-formula__term"><b class="num">${r}</b><small>lost</small></span>)</span>
        <span class="st-formula__op" aria-hidden="true">=</span>
        <span class="st-formula__term st-formula__res"><b class="num">${b()}%</b><small>win rate</small></span>
      </div>
    </section>
  </form>`}var H=[{key:`dealWon`,title:`A deal is won`,text:`When anyone on the team moves a deal to the last stage.`},{key:`taskDue`,title:`Tasks due today`,text:`A 9:00 reminder with what’s due and what’s overdue.`},{key:`mentions`,title:`Mentions`,text:`When a teammate tags you in a note or a comment.`},{key:`newLead`,title:`New leads`,text:`Each new customer that lands in the first stage.`},{key:`weeklyDigest`,title:`Weekly digest`,text:`Monday morning: pipeline, wins and new leads for the week, in one email.`}];function pe(){let e=c.settings.notifications;return`<section class="card st-card">
    ${B(`Notifications`,`Sent to <b>${p(c.settings.profile.email)}</b> and shown in the app. Changes save as you flip them.`,`<span class="st-saved" id="st-saved" aria-hidden="true">`+S(`check`)+`Saved</span>`)}
    <ul class="st-switches">${H.map(t=>`<li class="st-switch">
      <div class="st-switch__text"><p class="st-switch__title" id="st-n-${t.key}-l">${p(t.title)}</p><p class="st-switch__desc" id="st-n-${t.key}-d">${p(t.text)}</p></div>
      ${ee(`st-n-${t.key}`,e[t.key],t.title).replace(`aria-label`,`aria-describedby="st-n-${t.key}-d" aria-label`)}
    </li>`).join(``)}</ul>
  </section>`}function me(){let t=c.settings.appearance;return`<section class="card st-card">
    ${B(`Theme`,`Applies straight away on this device.`,`<span class="st-saved" id="st-saved" aria-hidden="true">`+S(`check`)+`Saved</span>`)}
    <fieldset class="st-themes"><legend class="sr-only">Theme</legend>
      ${[[`light`,`Light`,`Warm paper, ink text`],[`dark`,`Dark`,`Deep forest, easy at night`],[`system`,`System`,`Follows your device`]].map(([e,n,r])=>`<label class="st-theme">
        <input type="radio" class="sr-only" name="st-theme" value="${e}"${t.theme===e?` checked`:``} />
        <span class="st-prev" aria-hidden="true">${(e===`system`?[`l`,`d`]:[e[0]]).map(e=>`<span class="st-prev__pane is-${e}"><i class="st-prev__side"></i><i class="st-prev__band"></i><i class="st-prev__line"></i><i class="st-prev__card"></i><i class="st-prev__card st-prev__card--b"></i><i class="st-prev__card st-prev__card--c"></i></span>`).join(``)}</span>
        <span class="st-theme__row"><span class="st-theme__name">${n}</span><span class="st-theme__tick">${S(`check`)}</span></span>
        <span class="st-theme__sub">${r}</span>
      </label>`).join(``)}
    </fieldset>
  </section>
  <section class="card st-card">
    <div class="st-opt">
      <div><h2 class="card__title" id="st-density-h">Density</h2><p class="st-card__sub">Compact trims padding and gaps so more fits on a screen.</p></div>
      ${e(`density`,[[`comfortable`,`Comfortable`],[`compact`,`Compact`]],t.density,`Density`)}
    </div>
    <div class="st-opt">
      <div><h2 class="card__title" id="st-motion-h">Motion</h2><p class="st-card__sub">Reduced turns off travel, count-ups and drawn charts; everything appears in place.${matchMedia(`(prefers-reduced-motion: reduce)`).matches?` Your device already asks for reduced motion.`:``}</p></div>
      ${e(`motion`,[[`full`,`Full`],[`reduced`,`Reduced`]],t.motion,`Motion`)}
    </div>
  </section>`}var he={profile:ue,workspace:de,pipeline:fe,notifications:pe,appearance:me},U=e=>g(`#st-panel-${e}`,E);function W(e){let t=U(e),n=document.createElement(`div`);return n.className=`st-stack`,n.innerHTML=he[e](),t.replaceChildren(n),be(e,n),t}var G=e=>U(e).querySelector(`form.st-form`);function K(e){return e?JSON.stringify(f(`input[name], select[name], textarea[name]`,e).map(e=>[e.name,e.value])):``}function q(){ce.includes(A)&&J(K(G(A))!==j)}function J(e){e!==M&&(M=e,h.killTweensOf(k),e?(k.hidden=!1,h.fromTo(k,{y:40,opacity:0},{y:0,opacity:1,duration:v(.5),ease:`back.out(1.6)`,clearProps:`transform`}),y(`You have unsaved changes.`)):h.to(k,{y:30,opacity:0,duration:v(.25),ease:`power2.in`,onComplete:()=>{k.hidden=!0,h.set(k,{clearProps:`transform,opacity`})}}))}function Y(e){let t=g(`#st-tab-${A}`,E);if(!t.offsetParent)return;let n=L.matches,r=n?{x:t.offsetLeft,y:0,scaleX:t.offsetWidth/100,scaleY:1}:{x:0,y:t.offsetTop,scaleX:1,scaleY:1};if(!e||!F||ae){h.set(O,{...r,opacity:1}),F=!0;return}let i=h.timeline({overwrite:!0}).to(O,{...r,opacity:1,duration:.5,ease:`power3.inOut`},0);n||i.to(O,{scaleY:1.12,duration:.2,ease:`power2.out`},0).to(O,{scaleY:1,duration:.35,ease:`back.out(3)`},.2)}function X(e,t){A=e,f(`[role="tab"]`,D).forEach(t=>{let n=t.dataset.tab===e;t.setAttribute(`aria-selected`,String(n)),t.tabIndex=n?0:-1}),f(`[role="tabpanel"]`,E).forEach(t=>{t.hidden=t.id!==`st-panel-${e}`,t.hidden&&t.replaceChildren()});let n=W(e);j=K(G(e)),M=!1,h.killTweensOf(k),k.hidden=!0,Y(t),L.matches&&g(`#st-tab-${e}`,E).scrollIntoView({block:`nearest`,inline:`nearest`}),t&&x(f(`.st-card`,n),{y:14,stagger:.07})}async function ge(e,t=!0){return e===A&&U(e).childElementCount?!0:M&&!await _e()?(history.replaceState(null,``,`#/settings/${A}`),g(`#st-tab-${A}`,E).focus(),!1):(X(e,t),!0)}async function _e(){let e=C.find(e=>e.id===A).label,t=await d(`Discard changes?`,`Your edits to ${e} haven’t been saved. Leave them and lose the changes?`,`Discard`,!0);return t&&J(!1),t}function ve(){let e=G(A);if(!e||!te(e))return;let s=t=>e.querySelector(`[name="${t}"]`).value.trim();if(A===`profile`){let e=c.settings.profile;Object.assign(e,{name:s(`name`),title:s(`title`),email:s(`email`),phone:s(`phone`),timezone:s(`timezone`)});let n=a(c.me);n&&Object.assign(n,{name:e.name,role:e.title,email:e.email,phone:e.phone,photo:s(`photo`)||n.photo}),I(()=>t(`settings`,`members`));let r=document.querySelector(`#me-photo`);r&&n?.photo&&(r.src=n.photo),$(),o(`Profile saved.`)}else A===`workspace`?(Object.assign(c.settings.workspace,{name:s(`name`),currency:s(`currency`),weekStart:s(`weekStart`),fiscalQuarterTarget:Math.round(+s(`fiscalQuarterTarget`))}),I(()=>t(`settings`)),$(),o(`Workspace saved. Quarterly target is ${n(c.settings.workspace.fiscalQuarterTarget)}.`)):A===`pipeline`&&(l.forEach(e=>{c.settings.stages[e]=s(e)}),I(()=>t(`settings`)),o(`Stage names saved. The board uses them now.`,{label:`View board`,run:()=>i(`#/customers`)}));j=K(e),J(!1),r(g(`[data-save]`,k))}function ye(){let e=U(A);J(!1),h.to(f(`.st-card`,e),{opacity:0,duration:v(.15),onComplete:()=>{W(A),j=K(G(A)),x(f(`.st-card`,e),{y:8,stagger:.05})}}),y(`Changes discarded.`)}function Z(){let e=E.querySelector(`#st-saved`);e&&(h.killTweensOf(e),h.timeline().fromTo(e,{opacity:0,y:4,scale:.9},{opacity:1,y:0,scale:1,duration:v(.3),ease:`back.out(2)`}).to(e,{opacity:0,duration:v(.4),delay:v(1.4)}))}function be(e,n){let i=G(e);if(i&&(i.addEventListener(`input`,q),i.addEventListener(`change`,q),i.addEventListener(`submit`,e=>{e.preventDefault(),M&&ve()})),e===`profile`){let e=g(`#st-photo-file`,n),t=g(`input[name="photo"]`,n),r=g(`#st-photo-img`,n),i=g(`[data-photo-reset]`,n),a=e=>{t.value=e,r.src=e,i.hidden=e===T,h.fromTo(r,{scale:.85,opacity:.4},{scale:1,opacity:1,duration:v(.5),ease:`back.out(2)`,clearProps:`transform,opacity`}),q()};g(`[data-photo-pick]`,n).addEventListener(`click`,()=>e.click()),i.addEventListener(`click`,()=>a(T)),e.addEventListener(`change`,()=>{let t=e.files?.[0];if(e.value=``,t){if(!t.type.startsWith(`image/`)){o(`That file isn’t an image. Choose a JPG or PNG.`);return}xe(t).then(a,()=>o(`That image couldn’t be read. Try another one.`))}});let s=g(`#st-tz`,n);s.addEventListener(`change`,()=>{g(`#st-tz-now`,n).textContent=z(s.value)})}if(e===`workspace`){let e=g(`#st-target`,n);e.addEventListener(`input`,()=>{g(`#st-target-per`,n).innerHTML=V(+e.value,c.members.filter(e=>!e.invited).length)}),g(`[data-reset]`,n).addEventListener(`click`,async()=>{await d(`Reset demo data?`,`Every customer, task, note, teammate and setting goes back to how the demo started. Your edits are lost.`,`Reset everything`)&&(M=!1,ne())})}e===`pipeline`&&n.addEventListener(`input`,e=>{let t=e.target,r=t.dataset.stage;if(!r)return;let i=g(`[data-chip="${r}"]`,n);g(`span`,i).textContent=t.value.trim()||t.placeholder,h.fromTo(i,{scale:.94},{scale:1,duration:v(.4),ease:`back.out(3)`,overwrite:!0})}),e===`notifications`&&re(n,(e,n,r)=>{let i=e.replace(`st-n-`,``);c.settings.notifications[i]=n,I(()=>t(`settings`)),h.fromTo(g(`i`,r),{scale:.8},{scale:1,duration:v(.4),ease:`back.out(3)`,clearProps:`transform`}),Z(),y(`${H.find(e=>e.key===i).title}: ${n?`on`:`off`}. Saved.`)}),e===`appearance`&&(n.addEventListener(`change`,e=>{let n=e.target;n.name===`st-theme`&&(c.settings.appearance.theme=n.value,I(()=>t(`settings`)),r(g(`.st-prev`,n.closest(`label`))),Z(),y(`Theme: ${n.value}.`))}),_(n,`density`,e=>{c.settings.appearance.density=e,Q(),I(()=>t(`settings`)),Z(),y(`Density: ${e}.`)}),_(n,`motion`,e=>{c.settings.appearance.motion=e,I(()=>t(`settings`)),Z(),y(e===`reduced`?`Motion reduced.`:`Full motion.`)}))}function xe(e){return new Promise((t,n)=>{let r=URL.createObjectURL(e),i=new Image;i.onload=()=>{let e=Math.min(i.naturalWidth,i.naturalHeight),a=document.createElement(`canvas`);a.width=a.height=192;let o=a.getContext(`2d`);if(!o||!e){URL.revokeObjectURL(r),n(Error(`no image`));return}o.drawImage(i,(i.naturalWidth-e)/2,(i.naturalHeight-e)/2,e,e,0,0,192,192),URL.revokeObjectURL(r),t(a.toDataURL(`image/jpeg`,.86))},i.onerror=()=>{URL.revokeObjectURL(r),n(Error(`bad image`))},i.src=r})}function Q(){document.documentElement.dataset.density=c.settings.appearance.density}function $(){let e=a(c.me);e&&(g(`#st-me`,E).innerHTML=`${oe(e,`md`)}<span class="st-me__text"><b>${p(c.settings.profile.name)}</b><small>${p(c.settings.profile.email)}</small></span>${S(`chevron`)}`,g(`.st-band .eyebrow`,E).textContent=`${c.settings.workspace.name} · settings`)}var Se={title:()=>`${C.find(e=>e.id===A).label} settings`,mount(e){E=e,Q(),E.innerHTML=`
      <div class="band st-band">
        <div>
          <p class="eyebrow"></p>
          <h1 class="title" tabindex="-1">Settings</h1>
          <p class="lede">Your profile, the workspace, what the pipeline stages are called, what pings you and how Accord looks.</p>
        </div>
        <a class="st-me" id="st-me" href="#/team/${c.me}" aria-label="Your team profile"></a>
      </div>
      <div class="body">
        <div class="st-layout">
          <div class="st-nav">
            <div class="st-tabs" role="tablist" aria-label="Settings sections" aria-orientation="vertical">
              <span class="st-ind" aria-hidden="true"></span>
              ${C.map(e=>`<button type="button" role="tab" class="st-tab" id="st-tab-${e.id}" data-tab="${e.id}" aria-controls="st-panel-${e.id}" aria-selected="false" tabindex="-1">
                ${S(e.icon)}<span class="st-tab__text"><b>${e.label}</b><small>${e.hint}</small></span></button>`).join(``)}
            </div>
          </div>
          <div class="st-panels">
            ${C.map(e=>`<div role="tabpanel" class="st-panel" id="st-panel-${e.id}" aria-labelledby="st-tab-${e.id}" tabindex="0" hidden></div>`).join(``)}
            <div class="st-save" role="region" aria-label="Unsaved changes" hidden>
              <span class="st-save__dot" aria-hidden="true"></span>
              <p class="st-save__text">You have unsaved changes</p>
              <button type="button" class="btn btn--sm st-save__discard" data-discard>Discard</button>
              <button type="button" class="btn btn--sm btn--accent" data-save>Save changes</button>
            </div>
          </div>
        </div>
      </div>`,D=g(`.st-tabs`,E),O=g(`.st-ind`,E),k=g(`.st-save`,E),h.set(O,{opacity:0}),$(),D.addEventListener(`click`,e=>{let t=e.target.closest(`[role="tab"]`);t&&i(`#/settings/${t.dataset.tab}`)}),D.addEventListener(`keydown`,e=>{let t=f(`[role="tab"]`,D),n=t.indexOf(document.activeElement);if(n<0)return;let r=-1;e.key===`ArrowDown`||e.key===`ArrowRight`?r=(n+1)%t.length:e.key===`ArrowUp`||e.key===`ArrowLeft`?r=(n-1+t.length)%t.length:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),!(r<0)&&(e.preventDefault(),t[r].focus(),i(`#/settings/${t[r].dataset.tab}`))}),g(`[data-save]`,k).addEventListener(`click`,ve),g(`[data-discard]`,k).addEventListener(`click`,ye);let t=()=>{D.setAttribute(`aria-orientation`,L.matches?`horizontal`:`vertical`),F=!1,Y(!1)};L.addEventListener(`change`,t),t();let n=innerWidth;window.addEventListener(`resize`,()=>{innerWidth!==n&&P&&(n=innerWidth,Y(!1))}),window.addEventListener(`beforeunload`,e=>{M&&e.preventDefault()}),s(`settings`,()=>{Q(),$(),!(N||!P||M)&&(A===`appearance`||A===`notifications`)&&W(A)}),s(`members`,()=>{N||$()})},enter(e){P=!0;let t=w(e.params[0])?e.params[0]:`profile`;if(w(e.params[0])||history.replaceState(null,``,`#/settings/${t}`),e.same){ge(t,!0);return}e.first&&ie(g(`.st-band h1`,E),`Settings`),x(f(`.st-band .eyebrow, .st-band .lede, .st-me`,E),{y:12,stagger:.06}),x(f(`.st-tab`,E),{y:10,stagger:.04,delay:.05}),X(t,!1),h.set(O,{opacity:0}),h.to(O,{opacity:1,duration:v(.4),delay:v(.3)}),x(f(`.st-card`,U(t)),{y:16,stagger:.07,delay:.12}),requestAnimationFrame(()=>Y(!1))},leave(){P=!1},canLeave(){return M?_e():!0}};export{Se as page};