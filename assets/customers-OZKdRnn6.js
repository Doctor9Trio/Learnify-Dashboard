import{At as e,E as t,Et as n,G as r,K as i,L as a,O as o,Tt as s,W as c,Z as l,_ as u,_t as d,at as f,b as p,bt as m,c as h,d as g,dt as ee,et as te,f as ne,g as _,gt as v,h as y,ht as b,i as re,it as x,j as ie,kt as S,lt as C,mt as w,o as ae,p as T,pt as E,q as oe,rt as se,s as D,t as O,v as ce,wt as le,x as k,xt as A,yt as j}from"./index-CPU6Hf-a.js";var M=[{key:`vip`,label:`VIP`,tone:`sea`},{key:`wholesale`,label:`Wholesale`,tone:`amber`},{key:`new`,label:`New`,tone:`mint`},{key:`subscriber`,label:`Subscriber`,tone:`blue`}],N=[{key:`all`,label:`All`,title:`All customers`},{key:`vip`,label:`VIP`,title:`VIP customers`},{key:`wholesale`,label:`Wholesale`,title:`Wholesale accounts`},{key:`new`,label:`New`,title:`New customers`},{key:`subscriber`,label:`Subscribers`,title:`Newsletter subscribers`}],ue=[{v:`spend-desc`,label:`Highest spend`},{v:`spend-asc`,label:`Lowest spend`},{v:`orders-desc`,label:`Most orders`},{v:`orders-asc`,label:`Fewest orders`},{v:`last-desc`,label:`Ordered most recently`},{v:`last-asc`,label:`Ordered longest ago`},{v:`joined-desc`,label:`Newest customers`},{v:`joined-asc`,label:`Longest with us`},{v:`name-asc`,label:`Name, A to Z`},{v:`name-desc`,label:`Name, Z to A`}],de=`<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r=".4" fill="currentColor"/></svg>`,P={online:{label:`Online`,ico:`globe`},store:{label:`In store`,ico:`store`}},F=e=>e.status!==`refunded`&&e.status!==`cancelled`,I=e=>f(e).filter(F).reduce((e,t)=>e+x(t),0),L=e=>{let t=oe(e);return Number.isFinite(t)?t:I(e)},R=e=>{let t=i(e);return Number.isFinite(t)?t:f(e).length},fe=e=>l(e)?.placed??0,pe=e=>/^the\s|&|\b(caf[eé]|room|studio|co\.?|shop|store|ltd|inc)\b/i.test(e.name)?e.name:e.name.split(` `)[0]??e.name,me=e=>M.filter(t=>e.tags.includes(t.key)).map(e=>`<span class="cus-tag">${m(e.label)}</span>`).join(``);function he(e){let t=2166136261;for(let n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function ge(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function _e(e){let t=ge(he(e.id)),n=new Date,r=f(e.id).filter(F),i=Math.max(0,L(e.id)-I(e.id))/Math.max(1,Math.min(24,Math.round((Date.now()-e.joined)/(30*ie)))),o=[];for(let s=11;s>=0;s--){let c=new Date(n.getFullYear(),n.getMonth()-s,1).getTime(),l=new Date(n.getFullYear(),n.getMonth()-s+1,1).getTime(),u=t(),d=t(),f=r.filter(e=>e.placed>=c&&e.placed<l).reduce((e,t)=>e+x(t),0);s>0&&l>e.joined&&u>.3&&(f+=i*(.35+d*1.3)),o.push({label:a[new Date(c).getMonth()],v:Math.round(f),cur:s===0})}return o}var z,B,V,H,U=`all`,W=``,G=`spend`,K=`desc`,q=null,J=``,Y=0,ve=0,X=``,Z=e=>U===`all`||e.tags.includes(U);function ye(){let e=W.trim().toLowerCase(),t=C.customers.filter(Z).filter(t=>!e||`${t.name} ${t.email} ${t.city}`.toLowerCase().includes(e)),n={spend:e=>L(e.id),orders:e=>R(e.id),last:e=>fe(e.id),name:e=>e.name.toLowerCase(),joined:e=>e.joined}[G],r=K===`asc`?1:-1;return t.sort((e,t)=>{let i=n(e),a=n(t);return(typeof i==`string`?i.localeCompare(a):i-a)*r||e.name.localeCompare(t.name)})}function be(){let e=(e,t)=>`<div class="stat">
      <span class="stat__label">${t}</span>
      <b class="stat__val" data-stat="${e}">0</b><span class="stat__meta" data-meta="${e}"></span></div>`,t=(e,t,n=``)=>`<th scope="col" class="${n}" data-th="${e}"><button class="sort" type="button" data-sortkey="${e}">${t}${g(`arrow-up`,`cus-sort-ico`)}</button></th>`;return`
  <div class="toolbar cus-bar">
    <div class="chips cus-segs" role="group" aria-label="Customer segment">
      ${N.map(e=>`<button class="chip" type="button" data-seg="${e.key}" aria-pressed="${e.key===U}">${e.label}<span class="cus-chip-n" data-n="${e.key}"></span></button>`).join(``)}
    </div>
    <div class="toolbar__end">
      <button class="btn" type="button" data-act="export">${g(`download`)}Export</button>
      <button class="btn btn--primary" type="button" data-act="add">${g(`plus`)}Add customer</button>
    </div>
  </div>
  <section class="card statbar cus-stats" style="--n:4" aria-label="Segment figures">
    ${e(`total`,`Customers`)}${e(`new`,`New this month`)}${e(`repeat`,`Repeat rate`)}${e(`ltv`,`Average lifetime value`)}
  </section>
  <section class="card cus-tablecard" aria-labelledby="cus-table-title">
    <div class="card__head cus-tablehead">
      <h2 class="card__title" id="cus-table-title"><span data-seg-title>All customers</span><span class="cus-showing" data-showing aria-live="polite"></span></h2>
      <div class="card__actions">
        <label class="input-icon cus-search"><span class="sr-only">Search customers</span>${g(`search`)}<input class="input" type="search" placeholder="Name, email or city" autocomplete="off" data-q></label>
        <label class="cus-sort"><span class="sr-only">Sort customers</span><select class="select" data-sort>${ue.map(e=>`<option value="${e.v}">${e.label}</option>`).join(``)}</select></label>
      </div>
    </div>
    <div class="table-wrap">
      <table class="table cus-table">
        <thead><tr>
          ${t(`name`,`Customer`)}<th scope="col">City</th><th scope="col">Channel</th>
          ${t(`orders`,`Orders`,`num`)}${t(`spend`,`<span class="cus-long">Lifetime spend</span><span class="cus-short">Spend</span>`,`num`)}${t(`last`,`Last order`)}<th scope="col">Tags</th>
        </tr></thead>
        <tbody data-rows></tbody>
      </table>
    </div>
  </section>`}function Q(e){let t=C.customers.filter(Z),n=t.length,r=new Date(new Date().getFullYear(),new Date().getMonth(),1).getTime(),i=t.filter(e=>e.joined>=r).length,a=n?t.filter(e=>R(e.id)>=2).length/n:0,o=t.reduce((e,t)=>e+L(t.id),0),s=n?o/n:0,c=t.filter(e=>e.channel===`online`).length,l=e===`enter`?{from:0,duration:1.3,delay:.25}:e===`roll`?{duration:.8}:{duration:0};d(b(`[data-stat="total"]`,B),n,_,l),d(b(`[data-stat="new"]`,B),i,_,l),d(b(`[data-stat="repeat"]`,B),a,e=>u(e,0),l),d(b(`[data-stat="ltv"]`,B),s,T,l);let f=(e,t)=>{let n=b(`[data-meta="${e}"]`,B);n&&(n.textContent=t)};f(`total`,`${_(c)} online, ${_(n-c)} in store`),f(`new`,`Joined since ${h(r)}`),f(`repeat`,`Ordered more than once`),f(`ltv`,`${y(o)} spent in total`),N.forEach(e=>{let t=b(`[data-n="${e.key}"]`,B);t&&(t.textContent=String(e.key===`all`?C.customers.length:C.customers.filter(t=>t.tags.includes(e.key)).length))})}function xe(e){let t=l(e.id),n=P[e.channel];return`<tr data-id="${e.id}">
    <td><div class="cell-main">${O(e.name,e.hue)}<span class="cus-who"><a class="cus-link" href="#/customers/${e.id}"><b>${m(e.name)}</b></a><small>${m(e.email)}</small></span></div></td>
    <td>${m(e.city)}</td>
    <td><span class="cus-chan">${g(n.ico)}${n.label}</span></td>
    <td class="num">${_(R(e.id))}</td>
    <td class="num"><b class="cus-spend">${T(L(e.id))}</b></td>
    <td>${t?`<span title="${m(h(t.placed,!0))}">${k(t.placed)}</span>`:`<span class="cus-none">No orders yet</span>`}</td>
    <td><div class="cus-tags">${me(e)||`<span class="cus-none">None</span>`}</div></td>
  </tr>`}function $(){let t=ye();H.innerHTML=t.length?t.map(xe).join(``):`<tr class="cus-empty"><td colspan="7">${D(`No customers match`,W?`Nothing for “${W.trim()}” in this segment.`:`No one is in this segment yet.`,`users`)}</td></tr>`;let n=b(`[data-showing]`,B);n&&(n.textContent=t.length===C.customers.filter(Z).length?String(t.length):`${t.length} of ${C.customers.filter(Z).length}`);let r=b(`[data-seg-title]`,B);r&&(r.textContent=N.find(e=>e.key===U).title),w(`th[data-th]`,B).forEach(t=>{let n=t.dataset.th===G;n?t.setAttribute(`aria-sort`,K===`asc`?`ascending`:`descending`):t.removeAttribute(`aria-sort`);let r=b(`.cus-sort-ico`,t);r&&e.to(r,{rotation:n&&K===`desc`?180:0,duration:j(.45),ease:`back.out(2)`,transformOrigin:`50% 50%`})});let i=b(`[data-sort]`,B);return i&&(i.value=`${G}-${K}`),w(`tr`,H)}function Se(e){e!==U&&(U=e,w(`[data-seg]`,B).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.seg===U))),Q(`roll`),w(`.stat__val`,B).forEach(v),p($()))}function Ce(){let e=ye(),t=[[`Name`,`Email`,`Phone`,`City`,`Channel`,`Orders`,`Lifetime spend`,`Last order`,`Customer since`,`Tags`]];e.forEach(e=>{let n=l(e.id);t.push([e.name,e.email,e.phone,e.city,P[e.channel].label,R(e.id),L(e.id).toFixed(2),n?new Date(n.placed).toISOString().slice(0,10):``,new Date(e.joined).toISOString().slice(0,10),M.filter(t=>e.tags.includes(t.key)).map(e=>e.label).join(`; `)])}),ae(`corbel-customers-${U}.csv`,re(t)),o(`Exported ${e.length} customer${e.length===1?``:`s`}`,{ico:`download`})}function we(){let t=ne({title:`Add customer`,body:`<form class="cus-form" id="cus-add" novalidate>
      <div class="field"><label class="label" for="cus-f-name">Full name or business</label><input class="input" id="cus-f-name" name="name" autocomplete="off" required autofocus placeholder="For example, Nora Quinn"></div>
      <div class="cus-form__two">
        <div class="field"><label class="label" for="cus-f-email">Email</label><input class="input" id="cus-f-email" name="email" type="email" autocomplete="off" required placeholder="nora@example.com"></div>
        <div class="field"><label class="label" for="cus-f-city">City</label><input class="input" id="cus-f-city" name="city" autocomplete="off" placeholder="Portland, OR"></div>
      </div>
      <div class="field"><label class="label" for="cus-f-chan">Shops with us</label><select class="select" id="cus-f-chan" name="channel"><option value="online">Online</option><option value="store">In store</option></select></div>
      <fieldset class="field cus-form__tags"><legend class="label">Tags</legend>
        <div class="chips">${M.map(e=>`<button class="chip cus-tagchip" type="button" data-ftag="${e.key}" aria-pressed="${e.key===`new`}">${g(e.key===`new`?`check`:`plus`)}${e.label}</button>`).join(``)}</div>
      </fieldset>
      <p class="cus-form__err" role="alert"></p>
    </form>`,foot:`<button class="btn" type="button" data-dismiss>Cancel</button><button class="btn btn--primary" type="submit" form="cus-add">${g(`plus`)}Add customer</button>`}),n=E(`#cus-add`,t.el),r=E(`.cus-form__err`,t.el);w(`[data-ftag]`,n).forEach(e=>e.addEventListener(`click`,()=>{let t=e.getAttribute(`aria-pressed`)!==`true`;e.setAttribute(`aria-pressed`,String(t)),E(`use`,e).setAttribute(`href`,t?`#i-check`:`#i-plus`),S(e)})),n.addEventListener(`submit`,i=>{i.preventDefault();let a=new FormData(n),s=String(a.get(`name`)??``).trim().replace(/\s+/g,` `),l=String(a.get(`email`)??``).trim().toLowerCase(),u=String(a.get(`city`)??``).trim(),d=(t,i)=>{r.textContent=t;let a=E(`[name="${i}"]`,n);a.focus(),e.fromTo(a,{x:-6},{x:0,duration:j(.5),ease:`elastic.out(1, 0.3)`,clearProps:`transform`})};if(!s)return d(`Add a name so you can find them later.`,`name`);if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l))return d(`That email doesn’t look right. Check for a typo.`,`email`);if(C.customers.some(e=>e.email.toLowerCase()===l))return d(`A customer with that email already exists.`,`email`);let f=w(`[data-ftag]`,n).filter(e=>e.getAttribute(`aria-pressed`)===`true`).map(e=>e.dataset.ftag),p={id:ee(`c`),name:s,email:l,city:u||`Not given`,phone:``,joined:Date.now(),tags:f,hue:he(s)%360,channel:a.get(`channel`)===`store`?`store`:`online`,note:``};C.customers.push(p),c(`customers`),t.close(),Z(p)||(U=`all`,w(`[data-seg]`,B).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.seg===`all`)))),W=``,E(`[data-q]`,B).value=``,Q(`roll`),$();let m=b(`tr[data-id="${p.id}"]`,H);m&&(m.classList.add(`is-new`),m.scrollIntoView({block:`nearest`,behavior:`smooth`}),A([m],{x:-14,y:0}),e.delayedCall(2.2,()=>m.classList.remove(`is-new`))),o(`${s} added`,{ico:`users`,action:`Open profile`,onAction:()=>{location.hash=`#/customers/${p.id}`}})})}var Te=e=>`${T(e)} in the last 12 months`;function Ee(e){let t=e=>e.msgs[e.msgs.length-1]?.at??Date.now();return C.threads.filter(t=>t.customerId===e).sort((e,n)=>t(n)-t(e))}function De(e){let n=f(e.id).sort((e,t)=>t.placed-e.placed),r=R(e.id),i=r-n.length,a=_e(e),o=Math.max(1,...a.map(e=>e.v)),s=o>2e3?1e3:o>800?500:o>300?200:o>120?100:50,c=Math.ceil(o/s)*s,l=a.reduce((e,t)=>e+t.v,0),u=P[e.channel],d=Ee(e.id);return`
  <div class="toolbar cus-pbar">
    <a class="cus-back" href="#/customers">${g(`chev`,`cus-back__ico`)}All customers</a>
    <div class="toolbar__end">
      <button class="btn" type="button" data-act="copy">${g(`copy`)}Copy email</button>
      <button class="btn btn--primary" type="button" data-act="message">${g(`chat`)}Send message</button>
    </div>
  </div>
  <section class="card cus-hero" aria-labelledby="cus-name">
    <div class="cus-hero__id">
      ${O(e.name,e.hue,`lg`)}
      <div class="cus-hero__txt">
        <h2 class="cus-hero__name" id="cus-name">${m(e.name)}</h2>
        <ul class="cus-hero__contact" aria-label="Contact">
          <li><a href="mailto:${m(e.email)}">${m(e.email)}</a></li>
          ${e.phone?`<li><a href="tel:${m(e.phone.replace(/[^\d+]/g,``))}">${m(e.phone)}</a></li>`:``}
          <li>${m(e.city)}</li>
        </ul>
      </div>
    </div>
    <div class="cus-hero__ltv">
      <span class="stat__label">Lifetime value</span>
      <b class="cus-hero__val" data-ltv>$0</b>
      <span class="stat__meta">Across ${_(r)} order${r===1?``:`s`}</span>
    </div>
  </section>
  <section class="card statbar cus-tiles" style="--n:3" aria-label="Order figures">
    <div class="stat"><span class="stat__label">Orders</span><b class="stat__val" data-pstat="orders">0</b><span class="stat__meta">${_(n.filter(e=>e.placed>Date.now()-30*ie).length)} in the last 30 days</span></div>
    <div class="stat"><span class="stat__label">Average order</span><b class="stat__val" data-pstat="aov">$0</b><span class="stat__meta">All time, after refunds</span></div>
    <div class="stat"><span class="stat__label">Last order</span><b class="stat__val">${n[0]?k(n[0].placed):`None yet`}</b><span class="stat__meta">${n[0]?`<span><span class="mono">${m(n[0].id)}</span> for ${T(x(n[0]))}</span>`:`Waiting for a first order`}</span></div>
  </section>
  <div class="cus-pgrid">
    <div class="cus-col">
      <section class="card" aria-labelledby="cus-chart-t">
        <div class="card__head"><h3 class="card__title" id="cus-chart-t">Monthly spend</h3><span class="card__actions card__sub cus-chart__read" data-read aria-hidden="true">${Te(l)}</span></div>
        <div class="cus-chart" role="img" aria-label="Spend by month, last 12 months: ${a.map(e=>`${e.label} ${T(e.v)}`).join(`, `)}">
          <div class="cus-chart__grid" aria-hidden="true"><span data-v="${y(c)}"></span><span data-v="${y(c/2)}"></span><span data-v="$0"></span></div>
          ${l?``:`<p class="cus-chart__none">No spend in the last 12 months yet</p>`}
          <div class="cus-chart__bars">
            ${a.map((e,t)=>`<div class="cus-chart__col${e.cur?` is-cur`:``}" data-i="${t}" data-label="${e.label}" data-v="${e.v}"><span class="cus-chart__bar" style="height:${Math.max(0,e.v/c*100).toFixed(2)}%"></span><span class="cus-chart__m">${e.label}</span></div>`).join(``)}
          </div>
        </div>
      </section>
      <section class="card" aria-labelledby="cus-orders-t">
        <div class="card__head"><h3 class="card__title" id="cus-orders-t">Order history</h3>${n.length?`<span class="card__actions card__sub">${_(n.length)} recent</span>`:``}</div>
        ${n.length?`<ul class="cus-orders">${n.map(e=>`<li><a class="cus-ord" href="#/orders/${m(e.id.slice(1))}">
            <span class="cus-ord__id mono">${m(e.id)}</span>
            <span class="cus-ord__when">${h(e.placed)}</span>
            <span class="cus-ord__items">${_(se(e))} item${se(e)===1?``:`s`} ${e.channel===`store`?`in store`:`online`}</span>
            ${t(e.status)}
            <b class="cus-ord__total">${T(x(e))}</b>${g(`chev`,`cus-ord__go`)}</a></li>`).join(``)}</ul>`:D(`No orders yet`,`Orders from this customer will show up here.`,`cart`)}
        ${i>0?`<p class="cus-earlier">Plus ${_(i)} earlier order${i===1?``:`s`} before this season.</p>`:``}
      </section>
    </div>
    <div class="cus-col">
      <section class="card" aria-labelledby="cus-about-t">
        <div class="card__head"><h3 class="card__title" id="cus-about-t">About</h3></div>
        <dl class="cus-facts">
          <div><dt>Customer since</dt><dd>${h(e.joined,!0)}</dd></div>
          <div><dt>Shops</dt><dd>${u.label}</dd></div>
        </dl>
        <div class="cus-tagset">
          <p class="cus-tagset__h" id="cus-tags-l">Tags</p>
          <div class="chips cus-hero__tags" role="group" aria-labelledby="cus-tags-l">
            ${M.map(t=>{let n=e.tags.includes(t.key);return`<button class="chip cus-tagchip" type="button" data-tag="${t.key}" aria-pressed="${n}">${g(n?`check`:`plus`)}${t.label}</button>`}).join(``)}
          </div>
        </div>
      </section>
      <section class="card" aria-labelledby="cus-note-t">
        <div class="card__head"><h3 class="card__title" id="cus-note-t">Notes</h3><span class="card__actions card__sub">Only your team sees these</span></div>
        <label class="sr-only" for="cus-note">Notes about ${m(e.name)}</label>
        <textarea class="textarea cus-note" id="cus-note" placeholder="Sizes, preferences, anything worth remembering">${m(e.note)}</textarea>
        <div class="cus-note__foot"><span class="card__sub" data-note-state>${e.note?`Saved`:`No notes yet`}</span><button class="btn btn--sm cus-save" type="button" data-act="save" disabled>Save note</button></div>
      </section>
      <section class="card" aria-labelledby="cus-conv-t">
        <div class="card__head"><h3 class="card__title" id="cus-conv-t">Conversations</h3></div>
        ${d.length?`<ul class="cus-threads">${d.map(e=>{let t=e.msgs[e.msgs.length-1];return`<li><a class="cus-thread" href="#/messages/${e.id}"><span class="cus-thread__ico">${e.channel===`instagram`?de:g(e.channel===`chat`?`chat`:`mail`)}</span>
            <span class="cus-thread__txt"><b>${m(e.subject)}</b><small>${t?`${t.from===`me`?`You: `:``}${m(t.text)}`:`No messages yet`}</small></span>
            <span class="cus-thread__meta">${t?k(t.at):``}${e.unread&&!e.done?ce(`Unread`,`blue`):e.done?ce(`Done`,`gray`,!0):``}</span></a></li>`}).join(``)}</ul>`:D(`No conversations yet`,`Send ${pe(e)} a message to start one.`,`chat`)}
      </section>
    </div>
  </div>`}function Oe(e){return`<div class="toolbar cus-pbar"><a class="cus-back" href="#/customers">${g(`chev`,`cus-back__ico`)}All customers</a></div>
    <section class="card">${D(`Customer not found`,`There is no customer with the id “${e}”. They may have been removed.`,`users`)}</section>`}function ke(t,n){let r=w(`.card`,V),i=w(`.cus-pbar > *`,V);s(r,{y:n?26:16,stagger:n?.07:.045,delay:n?.15:.02}),A(i,{x:-10,y:0,stagger:.05,delay:n?.1:0});let a=n?.35:.15;d(b(`[data-ltv]`,V),L(t.id),T,{from:0,duration:1.4,delay:a});let o=R(t.id);d(b(`[data-pstat="orders"]`,V),o,_,{from:0,duration:1.1,delay:a+.1}),d(b(`[data-pstat="aov"]`,V),o?L(t.id)/o:0,T,{from:0,duration:1.1,delay:a+.15});let c=w(`.cus-chart__bar`,V);c.length&&e.fromTo(c,{scaleY:0},{scaleY:1,duration:j(.9),ease:`expo.out`,stagger:j(.035),delay:j(a+.1),transformOrigin:`50% 100%`,clearProps:`transform`}),A(w(`.cus-tagchip`,V),{y:6,stagger:.04,delay:a+.1}),A(w(`.cus-orders li, .cus-threads li`,V),{y:10,stagger:.04,delay:a+.2})}function Ae(e,t){let n=r(e);if(!n){V.innerHTML=Oe(e),s(w(`.card`,V));return}V.innerHTML=De(n),X=n.note,le(V),ke(n,t)}function je(e,t){S(t);let n=Ee(e.id)[0];n?n.done&&=!1:(n={id:ee(`t`),customerId:e.id,subject:`Note for ${pe(e)}`,channel:`email`,msgs:[],unread:!1,starred:!1,done:!1},C.threads.unshift(n)),c(`messages`),location.hash=`#/messages/${n.id}`}function Me(t,n){e.killTweensOf([B,V]),e.set([B,V],{clearProps:`opacity,transform`}),V.hidden=!0,B.hidden=!1,q=`list`,J=``,Q(t?`enter`:`roll`);let r=$();n&&window.scrollTo({top:ve}),s(w(`.cus-stats, .cus-tablecard`,B),{y:t?26:14,stagger:t?.07:.04,delay:t?.15:0}),A(w(`.cus-segs .chip, .cus-bar .toolbar__end > *, .cus-tablehead .card__actions > *`,B),{y:8,stagger:.03,delay:t?.1:0}),A(r.slice(0,18),{y:10,stagger:t?.035:.02,delay:t?.4:.12}),t||w(`[data-stat]`,B).forEach(e=>v(e))}function Ne(t,n){e.killTweensOf([B,V]),e.set([B,V],{clearProps:`opacity,transform`}),B.hidden=!0,V.hidden=!1,q=`prof`,J=t,window.scrollTo({top:0}),Ae(t,n)}function Pe(){B.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-seg]`);if(n){Se(n.dataset.seg);return}let r=t.closest(`[data-sortkey]`);if(r){let e=r.dataset.sortkey;e===G?K=K===`asc`?`desc`:`asc`:(G=e,K=e===`name`?`asc`:`desc`),p($());return}let i=t.closest(`[data-act]`)?.dataset.act;if(i===`export`){Ce();return}if(i===`add`){we();return}let a=t.closest(`tr[data-id]`);a&&!t.closest(`a`)&&(location.hash=`#/customers/${a.dataset.id}`)});let e=E(`[data-q]`,B);e.addEventListener(`input`,()=>{W=e.value,p($())});let t=E(`[data-sort]`,B);t.addEventListener(`change`,()=>{let[e,n]=t.value.split(`-`);G=e,K=n,p($())})}function Fe(){V.addEventListener(`click`,e=>{let t=e.target,i=r(J);if(!i)return;let a=t.closest(`[data-tag]`);if(a){let e=a.dataset.tag,t=!i.tags.includes(e);i.tags=t?[...i.tags,e].sort((e,t)=>M.findIndex(t=>t.key===e)-M.findIndex(e=>e.key===t)):i.tags.filter(t=>t!==e),a.setAttribute(`aria-pressed`,String(t)),E(`use`,a).setAttribute(`href`,t?`#i-check`:`#i-plus`),n(E(`svg`,a),{from:.3}),c(`customers`),o(`${M.find(t=>t.key===e).label} ${t?`added to`:`removed from`} ${i.name}`,{ico:`tag`,ms:2400});return}let s=t.closest(`[data-act]`),l=s?.dataset.act;if(!(!s||!l))if(l===`message`)je(i,s);else if(l===`copy`){S(s);let e=()=>o(`Copied ${i.email}`,{ico:`copy`,ms:2400});navigator.clipboard?.writeText(i.email).then(e,()=>o(`Couldn’t reach the clipboard. Select the email to copy it.`,{ico:`alert`}))??e()}else l===`save`&&Ie(i)}),V.addEventListener(`input`,e=>{let t=e.target.closest(`.cus-note`);if(!t)return;let n=t.value!==X,r=b(`[data-act="save"]`,V);r&&(r.disabled=!n,r.classList.toggle(`btn--primary`,n));let i=b(`[data-note-state]`,V);i&&(i.textContent=n?`Unsaved changes`:X?`Saved`:`No notes yet`)}),V.addEventListener(`keydown`,e=>{if((e.metaKey||e.ctrlKey)&&e.key===`Enter`&&e.target.closest(`.cus-note`)){e.preventDefault();let t=r(J);t&&Ie(t)}}),V.addEventListener(`pointerover`,e=>{let t=e.target.closest(`.cus-chart__col`),n=b(`[data-read]`,V);!t||!n||(n.textContent=`${t.dataset.label}: ${T(Number(t.dataset.v))}`)}),V.addEventListener(`pointerout`,e=>{let t=e.target.closest(`.cus-chart`);if(!t||t.contains(e.relatedTarget))return;let n=r(J),i=b(`[data-read]`,V);n&&i&&(i.textContent=Te(_e(n).reduce((e,t)=>e+t.v,0)))})}function Ie(e){let t=b(`.cus-note`,V);if(!t||t.value===X)return;e.note=t.value.trim(),X=t.value,c(`customers`);let n=b(`[data-act="save"]`,V);n&&(n.disabled=!0,n.classList.remove(`btn--primary`));let r=b(`[data-note-state]`,V);r&&(r.textContent=e.note?`Saved just now`:`No notes yet`,v(r)),o(`Note saved for ${e.name}`,{ico:`edit`})}var Le={title:e=>e[0]?r(e[0])?.name??`Customer not found`:`Customers`,mount(e){z=e,z.innerHTML=`<div class="cus-list">${be()}</div><div class="cus-prof" hidden></div>`,B=E(`.cus-list`,z),V=E(`.cus-prof`,z),H=E(`[data-rows]`,B),le(B),Pe(),Fe();let t=()=>{q===`list`&&!z.hidden&&(Q(`roll`),$())};te(`customers`,t),te(`orders`,t)},enter({params:t,first:n,same:r}){let i=t[0]??``,a=i?`prof`:`list`,o=++Y;if(r&&q&&(a!==q||i!==J)){let t=q===`list`?B:V;q===`list`&&(ve=window.scrollY);let n=a===`list`;e.to(t,{opacity:0,y:-12,duration:j(.22),ease:`power2.in`,overwrite:!0,onComplete:()=>{o===Y&&(n?Me(!1,!0):Ne(i,!1))}});return}a===`list`?Me(n,!1):Ne(i,n)},leave(){Y++,e.killTweensOf([B,V]),e.set([B,V],{clearProps:`opacity,transform`})}};export{Le as page};