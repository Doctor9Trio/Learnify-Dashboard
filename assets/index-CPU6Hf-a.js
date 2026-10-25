const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/dashboard-CKi1od-B.js",
      "assets/dashboard-_EurdMz5.css",
      "assets/products-DbFUUs6i.js",
      "assets/products-DI5xHNCM.css",
      "assets/orders-D85_2bBq.js",
      "assets/orders-BVDwrCP7.css",
      "assets/customers-OZKdRnn6.js",
      "assets/customers-Bc7iFXlY.css",
      "assets/messages-CIp8YCJG.js",
      "assets/messages-CMpbMN9a.css",
      "assets/email-l_3iO-B4.js",
      "assets/email-Bt8rTnCS.css",
      "assets/automations-DCjBvmRr.js",
      "assets/automations-BNdLnRmq.css",
      "assets/analytics-Cmn8URPr.js",
      "assets/analytics-OFgYFAKj.css",
      "assets/integrations-CUGSezJh.js",
      "assets/integrations-Bb1vtbE_.css",
      "assets/workspace-D4Bm8VGz.js",
      "assets/workspace-CfQ-bDIx.css",
      "assets/help-C5w_teXF.js",
      "assets/help-SqAPzPba.css",
      "assets/feedback-C0CAlBgx.js",
      "assets/feedback-DD3wa-x4.css",
      "assets/settings-BwIdA_fS.js",
      "assets/settings-x329h955.css",
    ]),
) => i.map((i) => d[i]);
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
function e(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function t(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t));
}
var n = {
    autoSleep: 120,
    force3D: `auto`,
    nullTargetWarn: 1,
    units: { lineHeight: `` },
  },
  r = { duration: 0.5, overwrite: !1, delay: 0 },
  i,
  a,
  o,
  s = 1e8,
  c = 1 / s,
  l = Math.PI * 2,
  u = l / 4,
  d = 0,
  f = Math.sqrt,
  p = Math.cos,
  m = Math.sin,
  h = function (e) {
    return typeof e == `string`;
  },
  g = function (e) {
    return typeof e == `function`;
  },
  _ = function (e) {
    return typeof e == `number`;
  },
  v = function (e) {
    return e === void 0;
  },
  y = function (e) {
    return typeof e == `object`;
  },
  b = function (e) {
    return e !== !1;
  },
  x = function () {
    return typeof window < `u`;
  },
  S = function (e) {
    return g(e) || h(e);
  },
  C =
    (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () {},
  w = Array.isArray,
  T = /random\([^)]+\)/g,
  E = /,\s*/g,
  D = /(?:-?\.?\d|\.)+/gi,
  O = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  k = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  A = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  j = /[+-]=-?[.\d]+/,
  M = /[^,'"\[\]\s]+/gi,
  N = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  P,
  F,
  I,
  L,
  R = {},
  ee = {},
  z,
  te = function (e) {
    return (ee = je(e, R)) && qn;
  },
  ne = function (e, t) {
    return console.warn(
      `Invalid property`,
      e,
      `set to`,
      t,
      `Missing plugin? gsap.registerPlugin()`,
    );
  },
  re = function (e, t) {
    return !t && console.warn(e);
  },
  ie = function (e, t) {
    return (e && (R[e] = t) && ee && (ee[e] = t)) || R;
  },
  ae = function () {
    return 0;
  },
  oe = { suppressEvents: !0, isStart: !0, kill: !1 },
  se = { suppressEvents: !0, kill: !1 },
  ce = { suppressEvents: !0 },
  le = {},
  ue = [],
  de = {},
  fe,
  pe = {},
  me = {},
  he = 30,
  ge = [],
  _e = ``,
  ve = function (e) {
    var t = e[0],
      n,
      r;
    if ((y(t) || g(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (r = ge.length; r-- && !ge[r].targetTest(t););
      n = ge[r];
    }
    for (r = e.length; r--;)
      (e[r] && (e[r]._gsap || (e[r]._gsap = new rn(e[r], n)))) ||
        e.splice(r, 1);
    return e;
  },
  ye = function (e) {
    return e._gsap || ve(pt(e))[0]._gsap;
  },
  be = function (e, t, n) {
    return (n = e[t]) && g(n)
      ? e[t]()
      : (v(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  xe = function (e, t) {
    return (e = e.split(`,`)).forEach(t) || e;
  },
  B = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  V = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Se = function (e, t) {
    var n = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
    );
  },
  Ce = function (e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
    return r < n;
  },
  we = function () {
    var e = ue.length,
      t = ue.slice(0),
      n,
      r;
    for (de = {}, ue.length = 0, n = 0; n < e; n++)
      ((r = t[n]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  Te = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  Ee = function (e, t, n, r) {
    (ue.length && !a && we(),
      e.render(t, n, r || !!(a && t < 0 && Te(e))),
      ue.length && !a && we());
  },
  De = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + ``).match(M).length < 2
      ? t
      : h(e)
        ? e.trim()
        : e;
  },
  Oe = function (e) {
    return e;
  },
  ke = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  Ae = function (e) {
    return function (t, n) {
      for (var r in n)
        r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
    };
  },
  je = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Me = function e(t, n) {
    for (var r in n)
      r !== `__proto__` &&
        r !== `constructor` &&
        r !== `prototype` &&
        (t[r] = y(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t;
  },
  Ne = function (e, t) {
    var n = {},
      r;
    for (r in e) r in t || (n[r] = e[r]);
    return n;
  },
  Pe = function (e) {
    var t = e.parent || P,
      n = e.keyframes ? Ae(w(e.keyframes)) : ke;
    if (b(e.inherit))
      for (; t;) (n(e, t.vars.defaults), (t = t.parent || t._dp));
    return e;
  },
  Fe = function (e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
    return n < 0;
  },
  Ie = function (e, t, n, r, i) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var a = e[r],
      o;
    if (i) for (o = t[i]; a && a[i] > o;) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  Le = function (e, t, n, r) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var i = t._prev,
      a = t._next;
    (i ? (i._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = i) : e[r] === t && (e[r] = i),
      (t._next = t._prev = t.parent = null));
  },
  Re = function (e, t) {
    (e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0));
  },
  ze = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n;) ((n._dirty = 1), (n = n.parent));
    return e;
  },
  Be = function (e) {
    for (var t = e.parent; t && t.parent;)
      ((t._dirty = 1), t.totalDuration(), (t = t.parent));
    return e;
  },
  Ve = function (e, t, n, r) {
    return (
      e._startAt &&
      (a
        ? e._startAt.revert(se)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  He = function e(t) {
    return !t || (t._ts && e(t.parent));
  },
  Ue = function (e) {
    return e._repeat ? We(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  We = function (e, t) {
    var n = Math.floor((e = V(e / t)));
    return e && n === e ? n - 1 : n;
  },
  Ge = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  Ke = function (e) {
    return (e._end = V(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || c) || 0),
    ));
  },
  qe = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = V(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts),
        )),
        Ke(e),
        n._dirty || ze(n, e)),
      e
    );
  },
  Je = function (e, t) {
    var n;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((n = Ge(e.rawTime(), t)),
        (!t._dur || ct(0, t.totalDuration(), n) - t._tTime > c) &&
          t.render(n, !0)),
      ze(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp;)
          (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
      e._zTime = -c;
    }
  },
  Ye = function (e, t, n, r) {
    return (
      t.parent && Re(t),
      (t._start = V(
        (_(n) ? n : n || e !== P ? at(e, n, t) : e._time) + t._delay,
      )),
      (t._end = V(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0),
      )),
      Ie(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
      $e(t) || (e._recent = t),
      r || Je(e, t),
      e._ts < 0 && qe(e, e._tTime),
      e
    );
  },
  Xe = function (e, t) {
    return (
      (R.ScrollTrigger || ne(`scrollTrigger`, t)) &&
      R.ScrollTrigger.create(t, e)
    );
  },
  Ze = function (e, t, n, r, i) {
    if ((pn(e, t, i), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !a &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      fe !== Wt.frame
    )
      return (ue.push(e), (e._lazy = [i, r]), 1);
  },
  Qe = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
  },
  $e = function (e) {
    var t = e.data;
    return t === `isFromStart` || t === `isStart`;
  },
  et = function (e, t, n, r) {
    var i = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && Qe(e) && !(!e._initted && $e(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !$e(e))))
          ? 0
          : 1,
      s = e._rDelay,
      l = 0,
      u,
      d,
      f;
    if (
      (s &&
        e._repeat &&
        ((l = ct(0, e._tDur, t)),
        (d = We(l, s)),
        e._yoyo && d & 1 && (o = 1 - o),
        d !== We(e._tTime, s) &&
          ((i = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== i || a || r || e._zTime === c || (!t && e._zTime))
    ) {
      if (!e._initted && Ze(e, t, r, n, l)) return;
      for (
        f = e._zTime,
          e._zTime = t || (n ? c : 0),
          n ||= t && !f,
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;
      )
        (u.r(o, u.d), (u = u._next));
      (t < 0 && Ve(e, t, n, !0),
        e._onUpdate && !n && At(e, `onUpdate`),
        l && e._repeat && !n && e.parent && At(e, `onRepeat`),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && Re(e, 1),
          !n &&
            !a &&
            (At(e, o ? `onComplete` : `onReverseComplete`, !0),
            e._prom && e._prom())));
    } else e._zTime ||= t;
  },
  tt = function (e, t, n) {
    var r;
    if (n > t)
      for (r = e._first; r && r._start <= n;) {
        if (r.data === `isPause` && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= n;) {
        if (r.data === `isPause` && r._start < t) return r;
        r = r._prev;
      }
  },
  nt = function (e, t, n, r) {
    var i = e._repeat,
      a = V(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = i ? (i < 0 ? 1e10 : V(a * (i + 1) + e._rDelay * i)) : a),
      o > 0 && !r && qe(e, (e._tTime = e._tDur * o)),
      e.parent && Ke(e),
      n || ze(e.parent, e),
      e
    );
  },
  rt = function (e) {
    return e instanceof on ? ze(e) : nt(e, e._dur);
  },
  it = { _start: 0, endTime: ae, totalDuration: ae },
  at = function e(t, n, r) {
    var i = t.labels,
      a = t._recent || it,
      o = t.duration() >= s ? a.endTime(!1) : t._dur,
      c,
      l,
      u;
    return h(n) && (isNaN(n) || n in i)
      ? ((l = n.charAt(0)),
        (u = n.substr(-1) === `%`),
        (c = n.indexOf(`=`)),
        l === `<` || l === `>`
          ? (c >= 0 && (n = n.replace(/=/, ``)),
            (l === `<` ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (u ? (c < 0 ? a : r).totalDuration() / 100 : 1))
          : c < 0
            ? (n in i || (i[n] = o), i[n])
            : ((l = parseFloat(n.charAt(c - 1) + n.substr(c + 1))),
              u && r && (l = (l / 100) * (w(r) ? r[0] : r).totalDuration()),
              c > 1 ? e(t, n.substr(0, c - 1), r) + l : o + l))
      : n == null
        ? o
        : +n;
  },
  ot = function (e, t, n) {
    var r = _(t[1]),
      i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[i],
      o,
      s;
    if ((r && (a.duration = t[1]), (a.parent = n), e)) {
      for (o = a, s = n; s && !(`immediateRender` in o);)
        ((o = s.vars.defaults || {}), (s = b(s.vars.inherit) && s.parent));
      ((a.immediateRender = b(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[i - 1]));
    }
    return new G(t[0], a, t[i + 1]);
  },
  st = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  ct = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  H = function (e, t) {
    return !h(e) || !(t = N.exec(e)) ? `` : t[1];
  },
  lt = function (e, t, n) {
    return st(n, function (n) {
      return ct(e, t, n);
    });
  },
  ut = [].slice,
  dt = function (e, t) {
    return (
      e &&
      y(e) &&
      `length` in e &&
      ((!t && !e.length) || (e.length - 1 in e && y(e[0]))) &&
      !e.nodeType &&
      e !== F
    );
  },
  ft = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (e) {
        var r;
        return (h(e) && !t) || dt(e, 1)
          ? (r = n).push.apply(r, pt(e))
          : n.push(e);
      }) || n
    );
  },
  pt = function (e, t, n) {
    return o && !t && o.selector
      ? o.selector(e)
      : h(e) && !n && (I || !Gt())
        ? ut.call((t || L).querySelectorAll(e), 0)
        : w(e)
          ? ft(e, n)
          : dt(e)
            ? ut.call(e, 0)
            : e
              ? [e]
              : [];
  },
  mt = function (e) {
    return (
      (e = pt(e)[0] || re(`Invalid scope`) || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return pt(
          t,
          n.querySelectorAll
            ? n
            : n === e
              ? re(`Invalid scope`) || L.createElement(`div`)
              : e,
        );
      }
    );
  },
  ht = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  gt = function (e) {
    if (g(e)) return e;
    var t = y(e) ? e : { each: e },
      n = Qt(t.ease),
      r = t.from || 0,
      i = parseFloat(t.base) || 0,
      a = {},
      o = r > 0 && r < 1,
      c = isNaN(r) || o,
      l = t.axis,
      u = r,
      d = r;
    return (
      h(r)
        ? (u = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && c && ((u = r[0]), (d = r[1])),
      function (e, o, p) {
        var m = (p || t).length,
          h = a[m],
          g,
          _,
          v,
          y,
          b,
          x,
          S,
          C,
          w;
        if (!h) {
          if (((w = t.grid === `auto` ? 0 : (t.grid || [1, s])[1]), !w)) {
            for (
              S = -s;
              S < (S = p[w++].getBoundingClientRect().left) && w < m;
            );
            w < m && w--;
          }
          for (
            h = a[m] = [],
              g = c ? Math.min(w, m) * u - 0.5 : r % w,
              _ = w === s ? 0 : c ? (m * d) / w - 0.5 : (r / w) | 0,
              S = 0,
              C = s,
              x = 0;
            x < m;
            x++
          )
            ((v = (x % w) - g),
              (y = _ - ((x / w) | 0)),
              (h[x] = b = l ? Math.abs(l === `y` ? y : v) : f(v * v + y * y)),
              b > S && (S = b),
              b < C && (C = b));
          (r === `random` && ht(h),
            (h.max = S - C),
            (h.min = C),
            (h.v = m =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (w > m
                    ? m - 1
                    : l
                      ? l === `y`
                        ? m / w
                        : w
                      : Math.max(w, m / w)) ||
                0) * (r === `edges` ? -1 : 1)),
            (h.b = m < 0 ? i - m : i),
            (h.u = H(t.amount || t.each) || 0),
            (n = n && m < 0 ? Zt(n) : n));
        }
        return (
          (m = (h[e] - h.min) / h.max || 0),
          V(h.b + (n ? n(m) : m) * h.v) + h.u
        );
      }
    );
  },
  _t = function (e) {
    var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
    return function (n) {
      var r = V(Math.round(parseFloat(n) / e) * e * t);
      return (r - (r % 1)) / t + (_(n) ? 0 : H(n));
    };
  },
  vt = function (e, t) {
    var n = w(e),
      r,
      i;
    return (
      !n &&
        y(e) &&
        ((r = n = e.radius || s),
        e.values
          ? ((e = pt(e.values)), (i = !_(e[0])) && (r *= r))
          : (e = _t(e.increment))),
      st(
        t,
        n
          ? g(e)
            ? function (t) {
                return ((i = e(t)), Math.abs(i - t) <= r ? i : t);
              }
            : function (t) {
                for (
                  var n = parseFloat(i ? t.x : t),
                    a = parseFloat(i ? t.y : 0),
                    o = s,
                    c = 0,
                    l = e.length,
                    u,
                    d;
                  l--;
                )
                  (i
                    ? ((u = e[l].x - n), (d = e[l].y - a), (u = u * u + d * d))
                    : (u = Math.abs(e[l] - n)),
                    u < o && ((o = u), (c = l)));
                return (
                  (c = !r || o <= r ? e[c] : t),
                  i || c === t || _(t) ? c : c + H(t)
                );
              }
          : _t(e),
      )
    );
  },
  yt = function (e, t, n, r) {
    return st(w(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
      return w(e)
        ? e[~~(Math.random() * e.length)]
        : (n ||= 1e-5) &&
            (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                r,
            ) / r;
    });
  },
  bt = function () {
    var e = [...arguments];
    return function (t) {
      return e.reduce(function (e, t) {
        return t(e);
      }, t);
    };
  },
  xt = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || H(n));
    };
  },
  St = function (e, t, n) {
    return Dt(e, t, 0, 1, n);
  },
  Ct = function (e, t, n) {
    return st(n, function (n) {
      return e[~~t(n)];
    });
  },
  wt = function e(t, n, r) {
    var i = n - t;
    return w(t)
      ? Ct(t, e(0, t.length), n)
      : st(r, function (e) {
          return ((i + ((e - t) % i)) % i) + t;
        });
  },
  Tt = function e(t, n, r) {
    var i = n - t,
      a = i * 2;
    return w(t)
      ? Ct(t, e(0, t.length - 1), n)
      : st(r, function (e) {
          return ((e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e));
        });
  },
  Et = function (e) {
    return e.replace(T, function (e) {
      var t = e.indexOf(`[`) + 1,
        n = e.substring(t || 7, t ? e.indexOf(`]`) : e.length - 1).split(E);
      return yt(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
    });
  },
  Dt = function (e, t, n, r, i) {
    var a = t - e,
      o = r - n;
    return st(i, function (t) {
      return n + (((t - e) / a) * o || 0);
    });
  },
  Ot = function e(t, n, r, i) {
    var a = isNaN(t + n)
      ? 0
      : function (e) {
          return (1 - e) * t + e * n;
        };
    if (!a) {
      var o = h(t),
        s = {},
        c,
        l,
        u,
        d,
        f;
      if ((r === !0 && (i = 1) && (r = null), o))
        ((t = { p: t }), (n = { p: n }));
      else if (w(t) && !w(n)) {
        for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++)
          u.push(e(t[l - 1], t[l]));
        (d--,
          (a = function (e) {
            e *= d;
            var t = Math.min(f, ~~e);
            return u[t](e - t);
          }),
          (r = n));
      } else i || (t = je(w(t) ? [] : {}, t));
      if (!u) {
        for (c in n) cn.call(s, t, c, `get`, n[c]);
        a = function (e) {
          return On(e, s) || (o ? t.p : t);
        };
      }
    }
    return st(r, a);
  },
  kt = function (e, t, n) {
    var r = e.labels,
      i = s,
      a,
      o,
      c;
    for (a in r)
      ((o = r[a] - t),
        o < 0 == !!n && o && i > (o = Math.abs(o)) && ((c = a), (i = o)));
    return c;
  },
  At = function (e, t, n) {
    var r = e.vars,
      i = r[t],
      a = o,
      s = e._ctx,
      c,
      l,
      u;
    if (i)
      return (
        (c = r[t + `Params`]),
        (l = r.callbackScope || e),
        n && ue.length && we(),
        s && (o = s),
        (u = c ? i.apply(l, c) : i.call(l)),
        (o = a),
        u
      );
  },
  jt = function (e) {
    return (
      Re(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!a),
      e.progress() < 1 && At(e, `onInterrupt`),
      e
    );
  },
  Mt,
  Nt = [],
  Pt = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), x() || e.headless)) {
        var t = e.name,
          n = g(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          i = {
            init: ae,
            render: On,
            add: cn,
            kill: An,
            modifier: kn,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: wn,
            aliases: {},
            register: 0,
          };
        if ((Gt(), e !== r)) {
          if (pe[t]) return;
          (ke(r, ke(Ne(e, i), a)),
            je(r.prototype, je(i, Ne(e, a))),
            (pe[(r.prop = t)] = r),
            e.targetTest && (ge.push(r), (le[t] = 1)),
            (t =
              (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) +
              `Plugin`));
        }
        (ie(t, r), e.register && e.register(qn, r, Nn));
      } else Nt.push(e);
  },
  U = 255,
  Ft = {
    aqua: [0, U, U],
    lime: [0, U, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, U],
    navy: [0, 0, 128],
    white: [U, U, U],
    olive: [128, 128, 0],
    yellow: [U, U, 0],
    orange: [U, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [U, 0, 0],
    pink: [U, 192, 203],
    cyan: [0, U, U],
    transparent: [U, U, U, 0],
  },
  It = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
          ? n
          : e * 3 < 2
            ? t + (n - t) * (2 / 3 - e) * 6
            : t) *
        U +
        0.5) |
        0
    );
  },
  Lt = function (e, t, n) {
    var r = e ? (_(e) ? [e >> 16, (e >> 8) & U, e & U] : 0) : Ft.black,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    if (!r) {
      if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), Ft[e]))
        r = Ft[e];
      else if (e.charAt(0) === `#`) {
        if (
          (e.length < 6 &&
            ((i = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              `#` +
              i +
              i +
              a +
              a +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & U, r & U, parseInt(e.substr(7), 16) / 255]
          );
        ((e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & U, e & U]));
      } else if (e.substr(0, 3) === `hsl`) {
        if (((r = p = e.match(D)), !t))
          ((s = (r[0] % 360) / 360),
            (c = r[1] / 100),
            (l = r[2] / 100),
            (a = l <= 0.5 ? l * (c + 1) : l + c - l * c),
            (i = l * 2 - a),
            r.length > 3 && (r[3] *= 1),
            (r[0] = It(s + 1 / 3, i, a)),
            (r[1] = It(s, i, a)),
            (r[2] = It(s - 1 / 3, i, a)));
        else if (~e.indexOf(`=`))
          return ((r = e.match(O)), n && r.length < 4 && (r[3] = 1), r);
      } else r = e.match(D) || Ft.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !p &&
        ((i = r[0] / U),
        (a = r[1] / U),
        (o = r[2] / U),
        (u = Math.max(i, a, o)),
        (d = Math.min(i, a, o)),
        (l = (u + d) / 2),
        u === d
          ? (s = c = 0)
          : ((f = u - d),
            (c = l > 0.5 ? f / (2 - u - d) : f / (u + d)),
            (s =
              u === i
                ? (a - o) / f + (a < o ? 6 : 0)
                : u === a
                  ? (o - i) / f + 2
                  : (i - a) / f + 4),
            (s *= 60)),
        (r[0] = ~~(s + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(l * 100 + 0.5))),
      n && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Rt = function (e) {
    var t = [],
      n = [],
      r = -1;
    return (
      e.split(Bt).forEach(function (e) {
        var i = e.match(k) || [];
        (t.push.apply(t, i), n.push((r += i.length + 1)));
      }),
      (t.c = n),
      t
    );
  },
  zt = function (e, t, n) {
    var r = ``,
      i = (e + r).match(Bt),
      a = t ? `hsla(` : `rgba(`,
      o = 0,
      s,
      c,
      l,
      u;
    if (!i) return e;
    if (
      ((i = i.map(function (e) {
        return (
          (e = Lt(e, t, 1)) &&
          a +
            (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) +
            `)`
        );
      })),
      n && ((l = Rt(e)), (s = n.c), s.join(r) !== l.c.join(r)))
    )
      for (c = e.replace(Bt, `1`).split(k), u = c.length - 1; o < u; o++)
        r +=
          c[o] +
          (~s.indexOf(o)
            ? i.shift() || a + `0,0,0,0)`
            : (l.length ? l : i.length ? i : n).shift());
    if (!c)
      for (c = e.split(Bt), u = c.length - 1; o < u; o++) r += c[o] + i[o];
    return r + c[u];
  },
  Bt = (function () {
    var e = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,
      t;
    for (t in Ft) e += `|` + t + `\\b`;
    return RegExp(e + `)`, `gi`);
  })(),
  Vt = /hsl[a]?\(/,
  Ht = function (e) {
    var t = e.join(` `),
      n;
    if (((Bt.lastIndex = 0), Bt.test(t)))
      return (
        (n = Vt.test(t)),
        (e[1] = zt(e[1], n)),
        (e[0] = zt(e[0], n, Rt(e[1]))),
        !0
      );
  },
  Ut,
  Wt = (function () {
    var e = Date.now,
      t = 500,
      n = 33,
      r = e(),
      i = r,
      a = 1e3 / 240,
      o = a,
      s = [],
      c,
      l,
      u,
      d,
      f,
      p,
      m = function u(m) {
        var h = e() - i,
          g = m === !0,
          _,
          v,
          y,
          b;
        if (
          ((h > t || h < 0) && (r += h - n),
          (i += h),
          (y = i - r),
          (_ = y - o),
          (_ > 0 || g) &&
            ((b = ++d.frame),
            (f = y - d.time * 1e3),
            (d.time = y /= 1e3),
            (o += _ + (_ >= a ? 4 : a - _)),
            (v = 1)),
          g || (c = l(u)),
          v)
        )
          for (p = 0; p < s.length; p++) s[p](y, f, b, m);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (e) {
          return f / (1e3 / (e || 60));
        },
        wake: function () {
          z &&
            (!I &&
              x() &&
              ((F = I = window),
              (L = F.document || {}),
              (R.gsap = qn),
              (F.gsapVersions ||= []).push(qn.version),
              te(ee || F.GreenSockGlobals || (!F.gsap && F) || {}),
              Nt.forEach(Pt)),
            (u = typeof requestAnimationFrame < `u` && requestAnimationFrame),
            c && d.sleep(),
            (l =
              u ||
              function (e) {
                return setTimeout(e, (o - d.time * 1e3 + 1) | 0);
              }),
            (Ut = 1),
            m(2));
        },
        sleep: function () {
          ((u ? cancelAnimationFrame : clearTimeout)(c), (Ut = 0), (l = ae));
        },
        lagSmoothing: function (e, r) {
          ((t = e || 1 / 0), (n = Math.min(r || 33, t)));
        },
        fps: function (e) {
          ((a = 1e3 / (e || 240)), (o = d.time * 1e3 + a));
        },
        add: function (e, t, n) {
          var r = t
            ? function (t, n, i, a) {
                (e(t, n, i, a), d.remove(r));
              }
            : e;
          return (d.remove(e), s[n ? `unshift` : `push`](r), Gt(), r);
        },
        remove: function (e, t) {
          ~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
        },
        _listeners: s,
      }),
      d
    );
  })(),
  Gt = function () {
    return !Ut && Wt.wake();
  },
  W = {},
  Kt = /^[\d.\-M][\d.\-,\s]/,
  qt = /["']/g,
  Jt = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(`:`),
        r = n[0],
        i = 1,
        a = n.length,
        o,
        s,
        c;
      i < a;
      i++
    )
      ((s = n[i]),
        (o = i === a - 1 ? s.length : s.lastIndexOf(`,`)),
        (c = s.substr(0, o)),
        (t[r] = isNaN(c) ? c.replace(qt, ``).trim() : +c),
        (r = s.substr(o + 1).trim()));
    return t;
  },
  Yt = function (e) {
    var t = e.indexOf(`(`) + 1,
      n = e.indexOf(`)`),
      r = e.indexOf(`(`, t);
    return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
  },
  Xt = function (e) {
    var t = (e + ``).split(`(`),
      n = W[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf(`{`) ? [Jt(t[1])] : Yt(e).split(`,`).map(De),
        )
      : W._CE && Kt.test(e)
        ? W._CE(``, e)
        : n;
  },
  Zt = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Qt = function (e, t) {
    return (e && (g(e) ? e : W[e] || Xt(e))) || t;
  },
  $t = function (e, t, n, r) {
    (n === void 0 &&
      (n = function (e) {
        return 1 - t(1 - e);
      }),
      r === void 0 &&
        (r = function (e) {
          return e < 0.5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
        }));
    var i = { easeIn: t, easeOut: n, easeInOut: r },
      a;
    return (
      xe(e, function (e) {
        for (var t in ((W[e] = R[e] = i), (W[(a = e.toLowerCase())] = n), i))
          W[
            a + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)
          ] = W[e + `.` + t] = i[t];
      }),
      i
    );
  },
  en = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  tn = function e(t, n, r) {
    var i = n >= 1 ? n : 1,
      a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (a / l) * (Math.asin(1 / i) || 0),
      s = function (e) {
        return e === 1 ? 1 : i * 2 ** (-10 * e) * m((e - o) * a) + 1;
      },
      c =
        t === `out`
          ? s
          : t === `in`
            ? function (e) {
                return 1 - s(1 - e);
              }
            : en(s);
    return (
      (a = l / a),
      (c.config = function (n, r) {
        return e(t, n, r);
      }),
      c
    );
  },
  nn = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function (e) {
        return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
      },
      i =
        t === `out`
          ? r
          : t === `in`
            ? function (e) {
                return 1 - r(1 - e);
              }
            : en(r);
    return (
      (i.config = function (n) {
        return e(t, n);
      }),
      i
    );
  };
(xe(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
  var n = t < 5 ? t + 1 : t;
  $t(
    e + `,Power` + (n - 1),
    t
      ? function (e) {
          return e ** +n;
        }
      : function (e) {
          return e;
        },
    function (e) {
      return 1 - (1 - e) ** n;
    },
    function (e) {
      return e < 0.5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
    },
  );
}),
  (W.Linear.easeNone = W.none = W.Linear.easeIn),
  $t(`Elastic`, tn(`in`), tn(`out`), tn()),
  (function (e, t) {
    var n = 1 / t,
      r = 2 * n,
      i = 2.5 * n,
      a = function (a) {
        return a < n
          ? e * a * a
          : a < r
            ? e * (a - 1.5 / t) ** 2 + 0.75
            : a < i
              ? e * (a -= 2.25 / t) * a + 0.9375
              : e * (a - 2.625 / t) ** 2 + 0.984375;
      };
    $t(
      `Bounce`,
      function (e) {
        return 1 - a(1 - e);
      },
      a,
    );
  })(7.5625, 2.75),
  $t(`Expo`, function (e) {
    return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
  }),
  $t(`Circ`, function (e) {
    return -(f(1 - e * e) - 1);
  }),
  $t(`Sine`, function (e) {
    return e === 1 ? 1 : -p(e * u) + 1;
  }),
  $t(`Back`, nn(`in`), nn(`out`), nn()),
  (W.SteppedEase =
    W.steps =
    R.SteppedEase =
      {
        config: function (e, t) {
          e === void 0 && (e = 1);
          var n = 1 / e,
            r = e + +!t,
            i = +!!t,
            a = 1 - c;
          return function (e) {
            return (((r * ct(0, a, e)) | 0) + i) * n;
          };
        },
      }),
  (r.ease = W[`quad.out`]),
  xe(
    `onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,
    function (e) {
      return (_e += e + `,` + e + `Params,`);
    },
  ));
var rn = function (e, t) {
    ((this.id = d++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : be),
      (this.set = t ? t.getSetter : wn));
  },
  an = (function () {
    function e(e) {
      ((this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        nt(this, +e.duration, 1, 1),
        (this.data = e.data),
        o && ((this._ctx = o), o.data.push(this)),
        Ut || Wt.wake());
    }
    var t = e.prototype;
    return (
      (t.delay = function (e) {
        return e || e === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e,
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            nt(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (t.totalTime = function (e, t) {
        if ((Gt(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (qe(this, e), !n._dp || n.parent || Je(n, this); n && n.parent;)
            (n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) ||
              (this._ts < 0 && e > 0) ||
              (!this._tDur && !e)) &&
            Ye(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !t) ||
            (this._initted && Math.abs(this._zTime) === c) ||
            (!this._initted && this._dur && e) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), Ee(this, e, t)),
          this
        );
      }),
      (t.time = function (e, t) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + Ue(this)) %
                (this._dur + this._rDelay) || (e ? this._dur : 0),
              t,
            )
          : this._time;
      }),
      (t.totalProgress = function (e, t) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, t)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (t.progress = function (e, t) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
                Ue(this),
              t,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : +(this.rawTime() > 0);
      }),
      (t.iteration = function (e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, t)
          : this._repeat
            ? We(this._tTime, n) + 1
            : 1;
      }),
      (t.timeScale = function (e, t) {
        if (!arguments.length) return this._rts === -c ? 0 : this._rts;
        if (this._rts === e) return this;
        var n =
          this.parent && this._ts ? Ge(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -c ? 0 : this._rts),
          this.totalTime(
            ct(-Math.abs(this._delay), this.totalDuration(), n),
            t !== !1,
          ),
          Ke(this),
          Be(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e),
              e
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Gt(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== c &&
                      (this._tTime -= c),
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = V(e);
          var t = this.parent || this._dp;
          return (
            t &&
              (t._sort || !this.parent) &&
              Ye(t, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start +
          (b(e) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Ge(t.rawTime(e), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        e === void 0 && (e = ce);
        var t = a;
        return (
          (a = e),
          Te(this) &&
            (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          this.data !== `nested` && e.kill !== !1 && this.kill(),
          (a = t),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t;)
          ((n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp));
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), rt(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var t = this._time;
          return ((this._rDelay = e), rt(this), t ? this.time(t) : this);
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, t) {
        return this.totalTime(at(this, e), b(t));
      }),
      (t.restart = function (e, t) {
        return (
          this.play().totalTime(e ? -this._delay : 0, b(t)),
          this._dur || (this._zTime = -c),
          this
        );
      }),
      (t.play = function (e, t) {
        return (e != null && this.seek(e, t), this.reversed(!1).paused(!1));
      }),
      (t.reverse = function (e, t) {
        return (
          e != null && this.seek(e || this.totalDuration(), t),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (e, t) {
        return (e != null && this.seek(e, t), this.paused(!0));
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
              this.timeScale(-this._rts || (e ? -c : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -c), this);
      }),
      (t.isActive = function () {
        var e = this.parent || this._dp,
          t = this._start,
          n;
        return !!(
          !e ||
          (this._ts &&
            this._initted &&
            e.isActive() &&
            (n = e.rawTime(!0)) >= t &&
            n < this.endTime(!0) - c)
        );
      }),
      (t.eventCallback = function (e, t, n) {
        var r = this.vars;
        return arguments.length > 1
          ? (t
              ? ((r[e] = t),
                n && (r[e + `Params`] = n),
                e === `onUpdate` && (this._onUpdate = t))
              : delete r[e],
            this)
          : r[e];
      }),
      (t.then = function (e) {
        var t = this,
          n = t._prom;
        return new Promise(function (r) {
          var i = g(e) ? e : Oe,
            a = function () {
              var e = t.then;
              ((t.then = null),
                n && n(),
                g(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                r(i),
                (t.then = e));
            };
          (t._initted && t.totalProgress() === 1 && t._ts >= 0) ||
          (!t._tTime && t._ts < 0)
            ? a()
            : (t._prom = a);
        });
      }),
      (t.kill = function () {
        jt(this);
      }),
      e
    );
  })();
ke(an.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -c,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var on = (function (r) {
  t(i, r);
  function i(t, n) {
    var i;
    return (
      t === void 0 && (t = {}),
      (i = r.call(this, t) || this),
      (i.labels = {}),
      (i.smoothChildTiming = !!t.smoothChildTiming),
      (i.autoRemoveChildren = !!t.autoRemoveChildren),
      (i._sort = b(t.sortChildren)),
      P && Ye(t.parent || P, e(i), n),
      t.reversed && i.reverse(),
      t.paused && i.paused(!0),
      t.scrollTrigger && Xe(e(i), t.scrollTrigger),
      i
    );
  }
  var o = i.prototype;
  return (
    (o.to = function (e, t, n) {
      return (ot(0, arguments, this), this);
    }),
    (o.from = function (e, t, n) {
      return (ot(1, arguments, this), this);
    }),
    (o.fromTo = function (e, t, n, r) {
      return (ot(2, arguments, this), this);
    }),
    (o.set = function (e, t, n) {
      return (
        (t.duration = 0),
        (t.parent = this),
        Pe(t).repeatDelay || (t.repeat = 0),
        (t.immediateRender = !!t.immediateRender),
        new G(e, t, at(this, n), 1),
        this
      );
    }),
    (o.call = function (e, t, n) {
      return Ye(this, G.delayedCall(0, e, t), n);
    }),
    (o.staggerTo = function (e, t, n, r, i, a, o) {
      return (
        (n.duration = t),
        (n.stagger = n.stagger || r),
        (n.onComplete = a),
        (n.onCompleteParams = o),
        (n.parent = this),
        new G(e, n, at(this, i)),
        this
      );
    }),
    (o.staggerFrom = function (e, t, n, r, i, a, o) {
      return (
        (n.runBackwards = 1),
        (Pe(n).immediateRender = b(n.immediateRender)),
        this.staggerTo(e, t, n, r, i, a, o)
      );
    }),
    (o.staggerFromTo = function (e, t, n, r, i, a, o, s) {
      return (
        (r.startAt = n),
        (Pe(r).immediateRender = b(r.immediateRender)),
        this.staggerTo(e, t, r, i, a, o, s)
      );
    }),
    (o.render = function (e, t, n) {
      var r = this._time,
        i = this._dirty ? this.totalDuration() : this._tDur,
        o = this._dur,
        s = e <= 0 ? 0 : V(e),
        l = this._zTime < 0 != e < 0 && (this._initted || !o),
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x;
      if (
        (this !== P && s > i && e >= 0 && (s = i), s !== this._tTime || n || l)
      ) {
        if (
          (r !== this._time &&
            o &&
            ((s += this._time - r), (e += this._time - r)),
          (u = s),
          (v = this._start),
          (_ = this._ts),
          (h = !_),
          l && (o || (r = this._zTime), (e || !t) && (this._zTime = e)),
          this._repeat)
        ) {
          if (
            ((b = this._yoyo),
            (m = o + this._rDelay),
            this._repeat < -1 && e < 0)
          )
            return this.totalTime(m * 100 + e, t, n);
          if (
            ((u = V(s % m)),
            s === i
              ? ((p = this._repeat), (u = o))
              : ((y = V(s / m)),
                (p = ~~y),
                p && p === y && ((u = o), p--),
                u > o && (u = o)),
            (y = We(this._tTime, m)),
            !r &&
              this._tTime &&
              y !== p &&
              this._tTime - y * m - this._dur <= 0 &&
              (y = p),
            b && p & 1 && ((u = o - u), (x = 1)),
            p !== y && !this._lock)
          ) {
            var S = b && y & 1,
              C = S === (b && p & 1);
            if (
              (p < y && (S = !S),
              (r = S ? 0 : s % o ? o : s),
              (this._lock = 1),
              (this.render(r || (x ? 0 : V(p * m)), t, !o)._lock = 0),
              (this._tTime = s),
              !t && this.parent && At(this, `onRepeat`),
              this.vars.repeatRefresh &&
                !x &&
                ((this.invalidate()._lock = 1), (y = p)),
              (r && r !== this._time) ||
                h !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act) ||
                ((o = this._dur),
                (i = this._tDur),
                C &&
                  ((this._lock = 2),
                  (r = S ? o : -1e-4),
                  this.render(r, !0),
                  this.vars.repeatRefresh && !x && this.invalidate()),
                (this._lock = 0),
                !this._ts && !h))
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((g = tt(this, V(r), V(u))), g && (s -= u - (u = g._start))),
          (this._tTime = s),
          (this._time = u),
          (this._act = !!_),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = e),
            (r = 0)),
          !r && s && o && !t && !y && (At(this, `onStart`), this._tTime !== s))
        )
          return this;
        if (u >= r && e >= 0)
          for (d = this._first; d;) {
            if (
              ((f = d._next), (d._act || u >= d._start) && d._ts && g !== d)
            ) {
              if (d.parent !== this) return this.render(e, t, n);
              if (
                (d.render(
                  d._ts > 0
                    ? (u - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (u - d._start) * d._ts,
                  t,
                  n,
                ),
                u !== this._time || (!this._ts && !h))
              ) {
                ((g = 0), f && (s += this._zTime = -c));
                break;
              }
            }
            d = f;
          }
        else {
          d = this._last;
          for (var w = e < 0 ? e : u; d;) {
            if (((f = d._prev), (d._act || w <= d._end) && d._ts && g !== d)) {
              if (d.parent !== this) return this.render(e, t, n);
              if (
                (d.render(
                  d._ts > 0
                    ? (w - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (w - d._start) * d._ts,
                  t,
                  n || (a && Te(d)),
                ),
                u !== this._time || (!this._ts && !h))
              ) {
                ((g = 0), f && (s += this._zTime = w ? -c : c));
                break;
              }
            }
            d = f;
          }
        }
        if (
          g &&
          !t &&
          (this.pause(),
          (g.render(u >= r ? 0 : -c)._zTime = u >= r ? 1 : -1),
          this._ts)
        )
          return ((this._start = v), Ke(this), this.render(e, t, n));
        (this._onUpdate && !t && At(this, `onUpdate`, !0),
          ((s === i && this._tTime >= this.totalDuration()) || (!s && r)) &&
            (v === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((e || !o) &&
                ((s === i && this._ts > 0) || (!s && this._ts < 0)) &&
                Re(this, 1),
              !t &&
                !(e < 0 && !r) &&
                (s || r || !i) &&
                (At(
                  this,
                  s === i && e >= 0 ? `onComplete` : `onReverseComplete`,
                  !0,
                ),
                this._prom &&
                  !(s < i && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (o.add = function (e, t) {
      var n = this;
      if ((_(t) || (t = at(this, t, e)), !(e instanceof an))) {
        if (w(e))
          return (
            e.forEach(function (e) {
              return n.add(e, t);
            }),
            this
          );
        if (h(e)) return this.addLabel(e, t);
        if (g(e)) e = G.delayedCall(0, e);
        else return this;
      }
      return this === e ? this : Ye(this, e, t);
    }),
    (o.getChildren = function (e, t, n, r) {
      (e === void 0 && (e = !0),
        t === void 0 && (t = !0),
        n === void 0 && (n = !0),
        r === void 0 && (r = -s));
      for (var i = [], a = this._first; a;)
        (a._start >= r &&
          (a instanceof G
            ? t && i.push(a)
            : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
          (a = a._next));
      return i;
    }),
    (o.getById = function (e) {
      for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
        if (t[n].vars.id === e) return t[n];
    }),
    (o.remove = function (e) {
      return h(e)
        ? this.removeLabel(e)
        : g(e)
          ? this.killTweensOf(e)
          : (e.parent === this && Le(this, e),
            e === this._recent && (this._recent = this._last),
            ze(this));
    }),
    (o.totalTime = function (e, t) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = V(
              Wt.time -
                (this._ts > 0
                  ? e / this._ts
                  : (this.totalDuration() - e) / -this._ts),
            )),
          r.prototype.totalTime.call(this, e, t),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (o.addLabel = function (e, t) {
      return ((this.labels[e] = at(this, t)), this);
    }),
    (o.removeLabel = function (e) {
      return (delete this.labels[e], this);
    }),
    (o.addPause = function (e, t, n) {
      var r = G.delayedCall(0, t || ae, n);
      return (
        (r.data = `isPause`),
        (this._hasPause = 1),
        Ye(this, r, at(this, e))
      );
    }),
    (o.removePause = function (e) {
      var t = this._first;
      for (e = at(this, e); t;)
        (t._start === e && t.data === `isPause` && Re(t), (t = t._next));
    }),
    (o.killTweensOf = function (e, t, n) {
      for (var r = this.getTweensOf(e, n), i = r.length; i--;)
        dn !== r[i] && r[i].kill(e, t);
      return this;
    }),
    (o.getTweensOf = function (e, t) {
      for (var n = [], r = pt(e), i = this._first, a = _(t), o; i;)
        (i instanceof G
          ? Ce(i._targets, r) &&
            (a
              ? (!dn || (i._initted && i._ts)) &&
                i.globalTime(0) <= t &&
                i.globalTime(i.totalDuration()) > t
              : !t || i.isActive()) &&
            n.push(i)
          : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o),
          (i = i._next));
      return n;
    }),
    (o.tweenTo = function (e, t) {
      t ||= {};
      var n = this,
        r = at(n, e),
        i = t,
        a = i.startAt,
        o = i.onStart,
        s = i.onStartParams,
        l = i.immediateRender,
        u,
        d = G.to(
          n,
          ke(
            {
              ease: t.ease || `none`,
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: `auto`,
              duration:
                t.duration ||
                Math.abs(
                  (r - (a && `time` in a ? a.time : n._time)) / n.timeScale(),
                ) ||
                c,
              onStart: function () {
                if ((n.pause(), !u)) {
                  var e =
                    t.duration ||
                    Math.abs(
                      (r - (a && `time` in a ? a.time : n._time)) /
                        n.timeScale(),
                    );
                  (d._dur !== e && nt(d, e, 0, 1).render(d._time, !0, !0),
                    (u = 1));
                }
                o && o.apply(d, s || []);
              },
            },
            t,
          ),
        );
      return l ? d.render(0) : d;
    }),
    (o.tweenFromTo = function (e, t, n) {
      return this.tweenTo(t, ke({ startAt: { time: at(this, e) } }, n));
    }),
    (o.recent = function () {
      return this._recent;
    }),
    (o.nextLabel = function (e) {
      return (e === void 0 && (e = this._time), kt(this, at(this, e)));
    }),
    (o.previousLabel = function (e) {
      return (e === void 0 && (e = this._time), kt(this, at(this, e), 1));
    }),
    (o.currentLabel = function (e) {
      return arguments.length
        ? this.seek(e, !0)
        : this.previousLabel(this._time + c);
    }),
    (o.shiftChildren = function (e, t, n) {
      n === void 0 && (n = 0);
      var r = this._first,
        i = this.labels,
        a;
      for (e = V(e); r;)
        (r._start >= n && ((r._start += e), (r._end += e)), (r = r._next));
      if (t) for (a in i) i[a] >= n && (i[a] += e);
      return ze(this);
    }),
    (o.invalidate = function (e) {
      var t = this._first;
      for (this._lock = 0; t;) (t.invalidate(e), (t = t._next));
      return r.prototype.invalidate.call(this, e);
    }),
    (o.clear = function (e) {
      e === void 0 && (e = !0);
      for (var t = this._first, n; t;) ((n = t._next), this.remove(t), (t = n));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        ze(this)
      );
    }),
    (o.totalDuration = function (e) {
      var t = 0,
        n = this,
        r = n._last,
        i = s,
        a,
        o,
        c;
      if (arguments.length)
        return n.timeScale(
          (n._repeat < 0 ? n.duration() : n.totalDuration()) /
            (n.reversed() ? -e : e),
        );
      if (n._dirty) {
        for (c = n.parent; r;)
          ((a = r._prev),
            r._dirty && r.totalDuration(),
            (o = r._start),
            o > i && n._sort && r._ts && !n._lock
              ? ((n._lock = 1), (Ye(n, r, o - r._delay, 1)._lock = 0))
              : (i = o),
            o < 0 &&
              r._ts &&
              ((t -= o),
              ((!c && !n._dp) || (c && c.smoothChildTiming)) &&
                ((n._start += V(o / n._ts)), (n._time -= o), (n._tTime -= o)),
              n.shiftChildren(-o, !1, -1 / 0),
              (i = 0)),
            r._end > t && r._ts && (t = r._end),
            (r = a));
        (nt(n, n === P && n._time > t ? n._time : t, 1, 1), (n._dirty = 0));
      }
      return n._tDur;
    }),
    (i.updateRoot = function (e) {
      if ((P._ts && (Ee(P, Ge(e, P)), (fe = Wt.frame)), Wt.frame >= he)) {
        he += n.autoSleep || 120;
        var t = P._first;
        if ((!t || !t._ts) && n.autoSleep && Wt._listeners.length < 2) {
          for (; t && !t._ts;) t = t._next;
          t || Wt.sleep();
        }
      }
    }),
    i
  );
})(an);
ke(on.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var sn = function (e, t, n, r, i, a, o) {
    var s = new Nn(this._pt, e, t, 0, 1, Dn, null, i),
      c = 0,
      l = 0,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _;
    for (
      s.b = n,
        s.e = r,
        n += ``,
        r += ``,
        (g = ~r.indexOf(`random(`)) && (r = Et(r)),
        a && ((_ = [n, r]), a(_, e, t), (n = _[0]), (r = _[1])),
        d = n.match(A) || [];
      (u = A.exec(r));
    )
      ((p = u[0]),
        (m = r.substring(c, u.index)),
        f ? (f = (f + 1) % 5) : m.substr(-5) === `rgba(` && (f = 1),
        p !== d[l++] &&
          ((h = parseFloat(d[l - 1]) || 0),
          (s._pt = {
            _next: s._pt,
            p: m || l === 1 ? m : `,`,
            s: h,
            c: p.charAt(1) === `=` ? Se(h, p) - h : parseFloat(p) - h,
            m: f && f < 4 ? Math.round : 0,
          }),
          (c = A.lastIndex)));
    return (
      (s.c = c < r.length ? r.substring(c, r.length) : ``),
      (s.fp = o),
      (j.test(r) || g) && (s.e = 0),
      (this._pt = s),
      s
    );
  },
  cn = function (e, t, r, i, a, o, s, c, l, u) {
    g(i) && (i = i(a || 0, e, o));
    var d = e[t],
      f =
        r === `get`
          ? g(d)
            ? l
              ? e[
                  t.indexOf(`set`) || !g(e[`get` + t.substr(3)])
                    ? t
                    : `get` + t.substr(3)
                ](l)
              : e[t]()
            : d
          : r,
      p = g(d) ? (l ? Sn : xn) : bn,
      m;
    if (
      (h(i) &&
        (~i.indexOf(`random(`) && (i = Et(i)),
        i.charAt(1) === `=` &&
          ((m = Se(f, i) + (H(f) || 0)), (m || m === 0) && (i = m))),
      !u || f !== i || fn)
    )
      return !isNaN(f * i) && i !== ``
        ? ((m = new Nn(
            this._pt,
            e,
            t,
            +f || 0,
            i - (f || 0),
            typeof d == `boolean` ? En : Tn,
            0,
            p,
          )),
          l && (m.fp = l),
          s && m.modifier(s, this, e),
          (this._pt = m))
        : (!d && !(t in e) && ne(t, i),
          sn.call(this, e, t, f, i, p, c || n.stringFilter, l));
  },
  ln = function (e, t, n, r, i) {
    if (
      (g(e) && (e = _n(e, i, t, n, r)),
      !y(e) || (e.style && e.nodeType) || w(e) || C(e))
    )
      return h(e) ? _n(e, i, t, n, r) : e;
    var a = {},
      o;
    for (o in e) a[o] = _n(e[o], i, t, n, r);
    return a;
  },
  un = function (e, t, n, r, i, a) {
    var o, s, c, l;
    if (
      pe[e] &&
      (o = new pe[e]()).init(
        i,
        o.rawVars ? t[e] : ln(t[e], r, i, a, n),
        n,
        r,
        a,
      ) !== !1 &&
      ((n._pt = s = new Nn(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)),
      n !== Mt)
    )
      for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;)
        c[o._props[l]] = s;
    return o;
  },
  dn,
  fn,
  pn = function e(t, n, o) {
    var l = t.vars,
      u = l.ease,
      d = l.startAt,
      f = l.immediateRender,
      p = l.lazy,
      m = l.onUpdate,
      h = l.runBackwards,
      g = l.yoyoEase,
      _ = l.keyframes,
      v = l.autoRevert,
      y = t._dur,
      x = t._startAt,
      S = t._targets,
      C = t.parent,
      w = C && C.data === `nested` ? C.vars.targets : S,
      T = t._overwrite === `auto` && !i,
      E = t.timeline,
      D = l.easeReverse || g,
      O,
      k,
      A,
      j,
      M,
      N,
      F,
      I,
      L,
      R,
      ee,
      z,
      te;
    if (
      (E && (!_ || !u) && (u = `none`),
      (t._ease = Qt(u, r.ease)),
      (t._rEase = D && (Qt(D) || t._ease)),
      (t._from = !E && !!l.runBackwards),
      t._from && (t.ratio = 1),
      !E || (_ && !l.stagger))
    ) {
      if (
        ((I = S[0] ? ye(S[0]).harness : 0),
        (z = I && l[I.prop]),
        (O = Ne(l, le)),
        x &&
          (x._zTime < 0 && x.progress(1),
          n < 0 && h && f && !v ? x.render(-1, !0) : x.revert(h && y ? se : oe),
          (x._lazy = 0)),
        d)
      ) {
        if (
          (Re(
            (t._startAt = G.set(
              S,
              ke(
                {
                  data: `isStart`,
                  overwrite: !1,
                  parent: C,
                  immediateRender: !0,
                  lazy: !x && b(p),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    m &&
                    function () {
                      return At(t, `onUpdate`);
                    },
                  stagger: 0,
                },
                d,
              ),
            )),
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (a || (!f && !v)) && t._startAt.revert(se),
          f && y && n <= 0 && o <= 0)
        ) {
          n && (t._zTime = n);
          return;
        }
      } else if (h && y && !x) {
        if (
          (n && (f = !1),
          (A = ke(
            {
              overwrite: !1,
              data: `isFromStart`,
              lazy: f && !x && b(p),
              immediateRender: f,
              stagger: 0,
              parent: C,
            },
            O,
          )),
          z && (A[I.prop] = z),
          Re((t._startAt = G.set(S, A))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (a ? t._startAt.revert(se) : t._startAt.render(-1, !0)),
          (t._zTime = n),
          !f)
        )
          e(t._startAt, c, c);
        else if (!n) return;
      }
      for (
        t._pt = t._ptCache = 0, p = (y && b(p)) || (p && !y), k = 0;
        k < S.length;
        k++
      ) {
        if (
          ((M = S[k]),
          (F = M._gsap || ve(S)[k]._gsap),
          (t._ptLookup[k] = R = {}),
          de[F.id] && ue.length && we(),
          (ee = w === S ? k : w.indexOf(M)),
          I &&
            (L = new I()).init(M, z || O, t, ee, w) !== !1 &&
            ((t._pt = j =
              new Nn(t._pt, M, L.name, 0, 1, L.render, L, 0, L.priority)),
            L._props.forEach(function (e) {
              R[e] = j;
            }),
            L.priority && (N = 1)),
          !I || z)
        )
          for (A in O)
            pe[A] && (L = un(A, O, t, ee, M, w))
              ? L.priority && (N = 1)
              : (R[A] = j =
                  cn.call(t, M, A, `get`, O[A], ee, w, 0, l.stringFilter));
        (t._op && t._op[k] && t.kill(M, t._op[k]),
          T &&
            t._pt &&
            ((dn = t),
            P.killTweensOf(M, R, t.globalTime(n)),
            (te = !t.parent),
            (dn = 0)),
          t._pt && p && (de[F.id] = 1));
      }
      (N && Mn(t), t._onInit && t._onInit(t));
    }
    ((t._onUpdate = m),
      (t._initted = (!t._op || t._pt) && !te),
      _ && n <= 0 && E.render(s, !0, !0));
  },
  mn = function (e, t, n, r, i, a, o, s) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      l,
      u,
      d,
      f;
    if (!c)
      for (
        c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length;
        f--;
      ) {
        if (((l = d[f][t]), l && l.d && l.d._pt))
          for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
        if (!l)
          return (
            (fn = 1),
            (e.vars[t] = `+=0`),
            pn(e, o),
            (fn = 0),
            s
              ? re(
                  t +
                    ` not eligible for reset. Try splitting into individual properties`,
                )
              : 1
          );
        c.push(l);
      }
    for (f = c.length; f--;)
      ((u = c[f]),
        (l = u._pt || u),
        (l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c),
        (l.c = n - l.s),
        (u.e &&= B(n) + H(u.e)),
        (u.b &&= l.s + H(u.b)));
  },
  hn = function (e, t) {
    var n = e[0] ? ye(e[0]).harness : 0,
      r = n && n.aliases,
      i,
      a,
      o,
      s;
    if (!r) return t;
    for (a in ((i = je({}, t)), r))
      if (a in i) for (s = r[a].split(`,`), o = s.length; o--;) i[s[o]] = i[a];
    return i;
  },
  gn = function (e, t, n, r) {
    var i = t.ease || r || `power1.inOut`,
      a,
      o;
    if (w(t))
      ((o = n[e] || (n[e] = [])),
        t.forEach(function (e, n) {
          return o.push({ t: (n / (t.length - 1)) * 100, v: e, e: i });
        }));
    else
      for (a in t)
        ((o = n[a] || (n[a] = [])),
          a === `ease` || o.push({ t: parseFloat(e), v: t[a], e: i }));
  },
  _n = function (e, t, n, r, i) {
    return g(e)
      ? e.call(t, n, r, i)
      : h(e) && ~e.indexOf(`random(`)
        ? Et(e)
        : e;
  },
  vn =
    _e +
    `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,
  yn = {};
xe(vn + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
  return (yn[e] = 1);
});
var G = (function (r) {
  t(o, r);
  function o(t, a, o, s) {
    var l;
    (typeof a == `number` && ((o.duration = a), (a = o), (o = null)),
      (l = r.call(this, s ? a : Pe(a)) || this));
    var u = l.vars,
      d = u.duration,
      f = u.delay,
      p = u.immediateRender,
      m = u.stagger,
      h = u.overwrite,
      g = u.keyframes,
      v = u.defaults,
      x = u.scrollTrigger,
      T = a.parent || P,
      E = (w(t) || C(t) ? _(t[0]) : `length` in a) ? [t] : pt(t),
      D,
      O,
      k,
      A,
      j,
      M,
      N,
      F;
    if (
      ((l._targets = E.length
        ? ve(E)
        : re(
            `GSAP target ` + t + ` not found. https://gsap.com`,
            !n.nullTargetWarn,
          ) || []),
      (l._ptLookup = []),
      (l._overwrite = h),
      g || m || S(d) || S(f))
    ) {
      a = l.vars;
      var I = a.easeReverse || a.yoyoEase;
      if (
        ((D = l.timeline =
          new on({
            data: `nested`,
            defaults: v || {},
            targets: T && T.data === `nested` ? T.vars.targets : E,
          })),
        D.kill(),
        (D.parent = D._dp = e(l)),
        (D._start = 0),
        m || S(d) || S(f))
      ) {
        if (((A = E.length), (N = m && gt(m)), y(m)))
          for (j in m) ~vn.indexOf(j) && ((F ||= {}), (F[j] = m[j]));
        for (O = 0; O < A; O++)
          ((k = Ne(a, yn)),
            (k.stagger = 0),
            I && (k.easeReverse = I),
            F && je(k, F),
            (M = E[O]),
            (k.duration = +_n(d, e(l), O, M, E)),
            (k.delay = (+_n(f, e(l), O, M, E) || 0) - l._delay),
            !m &&
              A === 1 &&
              k.delay &&
              ((l._delay = f = k.delay), (l._start += f), (k.delay = 0)),
            D.to(M, k, N ? N(O, M, E) : 0),
            (D._ease = W.none));
        D.duration() ? (d = f = 0) : (l.timeline = 0);
      } else if (g) {
        (Pe(ke(D.vars.defaults, { ease: `none` })),
          (D._ease = Qt(g.ease || a.ease || `none`)));
        var L = 0,
          R,
          ee,
          z;
        if (w(g))
          (g.forEach(function (e) {
            return D.to(E, e, `>`);
          }),
            D.duration());
        else {
          for (j in ((k = {}), g))
            j === `ease` || j === `easeEach` || gn(j, g[j], k, g.easeEach);
          for (j in k)
            for (
              R = k[j].sort(function (e, t) {
                return e.t - t.t;
              }),
                L = 0,
                O = 0;
              O < R.length;
              O++
            )
              ((ee = R[O]),
                (z = {
                  ease: ee.e,
                  duration: ((ee.t - (O ? R[O - 1].t : 0)) / 100) * d,
                }),
                (z[j] = ee.v),
                D.to(E, z, L),
                (L += z.duration));
          D.duration() < d && D.to({}, { duration: d - D.duration() });
        }
      }
      d || l.duration((d = D.duration()));
    } else l.timeline = 0;
    return (
      h === !0 && !i && ((dn = e(l)), P.killTweensOf(E), (dn = 0)),
      Ye(T, e(l), o),
      a.reversed && l.reverse(),
      a.paused && l.paused(!0),
      (p ||
        (!d &&
          !g &&
          l._start === V(T._time) &&
          b(p) &&
          He(e(l)) &&
          T.data !== `nested`)) &&
        ((l._tTime = -c), l.render(Math.max(0, -f) || 0)),
      x && Xe(e(l), x),
      l
    );
  }
  var s = o.prototype;
  return (
    (s.render = function (e, t, n) {
      var r = this._time,
        i = this._tDur,
        a = this._dur,
        o = e < 0,
        s = e > i - c && !o ? i : e < c ? 0 : e,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g;
      if (!a) et(this, e, t, n);
      else if (
        s !== this._tTime ||
        !e ||
        n ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== o) ||
        this._lazy
      ) {
        if (((l = s), (g = this.timeline), this._repeat)) {
          if (((f = a + this._rDelay), this._repeat < -1 && o))
            return this.totalTime(f * 100 + e, t, n);
          if (
            ((l = V(s % f)),
            s === i
              ? ((d = this._repeat), (l = a))
              : ((p = V(s / f)),
                (d = ~~p),
                d && d === p ? ((l = a), d--) : l > a && (l = a)),
            (m = this._yoyo && d & 1),
            m && (l = a - l),
            (p = We(this._tTime, f)),
            l === r && !n && this._initted && d === p)
          )
            return ((this._tTime = s), this);
          d !== p &&
            this.vars.repeatRefresh &&
            !m &&
            !this._lock &&
            l !== f &&
            this._initted &&
            ((this._lock = n = 1),
            (this.render(V(f * d), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Ze(this, o ? e : l, n, t, s)) return ((this._tTime = 0), this);
          if (r !== this._time && !(n && this.vars.repeatRefresh && d !== p))
            return this;
          if (a !== this._dur) return this.render(e, t, n);
        }
        if (this._rEase) {
          var _ = l < r;
          if (_ !== this._inv) {
            var v = _ ? r : a - r;
            ((this._inv = _),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = r),
              (this._invRecip = v ? (_ ? -1 : 1) / v : 0),
              (this._invScale = _ ? -this.ratio : 1 - this.ratio),
              (this._invEase = _ ? this._rEase : this._ease));
          }
          this.ratio = h =
            this._invRatio +
            this._invScale *
              this._invEase((l - this._invTime) * this._invRecip);
        } else this.ratio = h = this._ease(l / a);
        if (
          (this._from && (this.ratio = h = 1 - h),
          (this._tTime = s),
          (this._time = l),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !r && s && !t && !p && (At(this, `onStart`), this._tTime !== s))
        )
          return this;
        for (u = this._pt; u;) (u.r(h, u.d), (u = u._next));
        ((g && g.render(e < 0 ? e : g._dur * g._ease(l / this._dur), t, n)) ||
          (this._startAt && (this._zTime = e)),
          this._onUpdate &&
            !t &&
            (o && Ve(this, e, t, n), At(this, `onUpdate`)),
          this._repeat &&
            d !== p &&
            this.vars.onRepeat &&
            !t &&
            this.parent &&
            At(this, `onRepeat`),
          (s === this._tDur || !s) &&
            this._tTime === s &&
            (o && !this._onUpdate && Ve(this, e, !0, !0),
            (e || !a) &&
              ((s === this._tDur && this._ts > 0) || (!s && this._ts < 0)) &&
              Re(this, 1),
            !t &&
              !(o && !r) &&
              (s || r || m) &&
              (At(this, s === i ? `onComplete` : `onReverseComplete`, !0),
              this._prom && !(s < i && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (s.targets = function () {
      return this._targets;
    }),
    (s.invalidate = function (e) {
      return (
        (!e || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(e),
        r.prototype.invalidate.call(this, e)
      );
    }),
    (s.resetTo = function (e, t, n, r, i) {
      (Ut || Wt.wake(), this._ts || this.play());
      var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        o;
      return (
        this._initted || pn(this, a),
        (o = this._ease(a / this._dur)),
        mn(this, e, t, n, r, o, a, i)
          ? this.resetTo(e, t, n, r, 1)
          : (qe(this, 0),
            this.parent ||
              Ie(
                this._dp,
                this,
                `_first`,
                `_last`,
                this._dp._sort ? `_start` : 0,
              ),
            this.render(0))
      );
    }),
    (s.kill = function (e, t) {
      if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? jt(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!a),
          this
        );
      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(e, t, dn && dn.vars.overwrite !== !0)
            ._first || jt(this),
          this.parent &&
            n !== this.timeline.totalDuration() &&
            nt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
          this
        );
      }
      var r = this._targets,
        i = e ? pt(e) : r,
        o = this._ptLookup,
        s = this._pt,
        c,
        l,
        u,
        d,
        f,
        p,
        m;
      if ((!t || t === `all`) && Fe(r, i))
        return (t === `all` && (this._pt = 0), jt(this));
      for (
        c = this._op = this._op || [],
          t !== `all` &&
            (h(t) &&
              ((f = {}),
              xe(t, function (e) {
                return (f[e] = 1);
              }),
              (t = f)),
            (t = hn(r, t))),
          m = r.length;
        m--;
      )
        if (~i.indexOf(r[m]))
          for (f in ((l = o[m]),
          t === `all`
            ? ((c[m] = t), (d = l), (u = {}))
            : ((u = c[m] = c[m] || {}), (d = t)),
          d))
            ((p = l && l[f]),
              p &&
                ((!(`kill` in p.d) || p.d.kill(f) === !0) && Le(this, p, `_pt`),
                delete l[f]),
              u !== `all` && (u[f] = 1));
      return (this._initted && !this._pt && s && jt(this), this);
    }),
    (o.to = function (e, t) {
      return new o(e, t, arguments[2]);
    }),
    (o.from = function (e, t) {
      return ot(1, arguments);
    }),
    (o.delayedCall = function (e, t, n, r) {
      return new o(t, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: e,
        onComplete: t,
        onReverseComplete: t,
        onCompleteParams: n,
        onReverseCompleteParams: n,
        callbackScope: r,
      });
    }),
    (o.fromTo = function (e, t, n) {
      return ot(2, arguments);
    }),
    (o.set = function (e, t) {
      return ((t.duration = 0), t.repeatDelay || (t.repeat = 0), new o(e, t));
    }),
    (o.killTweensOf = function (e, t, n) {
      return P.killTweensOf(e, t, n);
    }),
    o
  );
})(an);
(ke(G.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  xe(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
    G[e] = function () {
      var t = new on(),
        n = ut.call(arguments, 0);
      return (n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n));
    };
  }));
var bn = function (e, t, n) {
    return (e[t] = n);
  },
  xn = function (e, t, n) {
    return e[t](n);
  },
  Sn = function (e, t, n, r) {
    return e[t](r.fp, n);
  },
  Cn = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  wn = function (e, t) {
    return g(e[t]) ? xn : v(e[t]) && e.setAttribute ? Cn : bn;
  },
  Tn = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  En = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Dn = function (e, t) {
    var n = t._pt,
      r = ``;
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; n;)
        ((r =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          r),
          (n = n._next));
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  On = function (e, t) {
    for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
  },
  kn = function (e, t, n, r) {
    for (var i = this._pt, a; i;)
      ((a = i._next), i.p === r && i.modifier(e, t, n), (i = a));
  },
  An = function (e) {
    for (var t = this._pt, n, r; t;)
      ((r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? Le(this, t, `_pt`)
          : t.dep || (n = 1),
        (t = r));
    return !n;
  },
  jn = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
  },
  Mn = function (e) {
    for (var t = e._pt, n, r, i, a; t;) {
      for (n = t._next, r = i; r && r.pr > t.pr;) r = r._next;
      ((t._prev = r ? r._prev : a) ? (t._prev._next = t) : (i = t),
        (t._next = r) ? (r._prev = t) : (a = t),
        (t = n));
    }
    e._pt = i;
  },
  Nn = (function () {
    function e(e, t, n, r, i, a, o, s, c) {
      ((this.t = t),
        (this.s = r),
        (this.c = i),
        (this.p = n),
        (this.r = a || Tn),
        (this.d = o || this),
        (this.set = s || bn),
        (this.pr = c || 0),
        (this._next = e),
        e && (e._prev = this));
    }
    var t = e.prototype;
    return (
      (t.modifier = function (e, t, n) {
        ((this.mSet = this.mSet || this.set),
          (this.set = jn),
          (this.m = e),
          (this.mt = n),
          (this.tween = t));
      }),
      e
    );
  })();
(xe(
  _e +
    `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,
  function (e) {
    return (le[e] = 1);
  },
),
  (R.TweenMax = R.TweenLite = G),
  (R.TimelineLite = R.TimelineMax = on),
  (P = new on({
    sortChildren: !1,
    defaults: r,
    autoRemoveChildren: !0,
    id: `root`,
    smoothChildTiming: !0,
  })),
  (n.stringFilter = Ht));
var Pn = [],
  Fn = {},
  In = [],
  Ln = 0,
  Rn = 0,
  zn = function (e) {
    return (Fn[e] || In).map(function (e) {
      return e();
    });
  },
  Bn = function () {
    var e = Date.now(),
      t = [];
    e - Ln > 2 &&
      (zn(`matchMediaInit`),
      Pn.forEach(function (e) {
        var n = e.queries,
          r = e.conditions,
          i,
          a,
          o,
          s;
        for (a in n)
          ((i = F.matchMedia(n[a]).matches),
            i && (o = 1),
            i !== r[a] && ((r[a] = i), (s = 1)));
        s && (e.revert(), o && t.push(e));
      }),
      zn(`matchMediaRevert`),
      t.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (Ln = e),
      zn(`matchMedia`));
  },
  Vn = (function () {
    function e(e, t) {
      ((this.selector = t && mt(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Rn++),
        e && this.add(e));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        g(e) && ((n = t), (t = e), (e = g));
        var r = this,
          i = function () {
            var e = o,
              i = r.selector,
              a;
            return (
              e && e !== r && e.data.push(r),
              n && (r.selector = mt(n)),
              (o = r),
              (a = t.apply(r, arguments)),
              g(a) && r._r.push(a),
              (o = e),
              (r.selector = i),
              (r.isReverted = !1),
              a
            );
          };
        return (
          (r.last = i),
          e === g
            ? i(r, function (e) {
                return r.add(null, e);
              })
            : e
              ? (r[e] = i)
              : i
        );
      }),
      (t.ignore = function (e) {
        var t = o;
        ((o = null), e(this), (o = t));
      }),
      (t.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof e
              ? t.push.apply(t, n.getTweens())
              : n instanceof G &&
                  !(n.parent && n.parent.data === `nested`) &&
                  t.push(n);
          }),
          t
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, t) {
        var n = this;
        if (
          (e
            ? (function () {
                for (var t = n.getTweens(), r = n.data.length, i; r--;)
                  ((i = n.data[r]),
                    i.data === `isFlip` &&
                      (i.revert(),
                      i.getChildren(!0, !0, !1).forEach(function (e) {
                        return t.splice(t.indexOf(e), 1);
                      })));
                for (
                  t
                    .map(function (e) {
                      return {
                        g:
                          e._dur ||
                          e._delay ||
                          (e._sat && !e._sat.vars.immediateRender)
                            ? e.globalTime(0)
                            : -1 / 0,
                        t: e,
                      };
                    })
                    .sort(function (e, t) {
                      return t.g - e.g || -1 / 0;
                    })
                    .forEach(function (t) {
                      return t.t.revert(e);
                    }),
                    r = n.data.length;
                  r--;
                )
                  ((i = n.data[r]),
                    i instanceof on
                      ? i.data !== `nested` &&
                        (i.scrollTrigger && i.scrollTrigger.revert(), i.kill())
                      : !(i instanceof G) && i.revert && i.revert(e));
                (n._r.forEach(function (t) {
                  return t(e, n);
                }),
                  (n.isReverted = !0));
              })()
            : this.data.forEach(function (e) {
                return e.kill && e.kill();
              }),
          this.clear(),
          t)
        )
          for (var r = Pn.length; r--;) Pn[r].id === this.id && Pn.splice(r, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      e
    );
  })(),
  Hn = (function () {
    function e(e) {
      ((this.contexts = []), (this.scope = e), o && o.data.push(this));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        y(e) || (e = { matches: e });
        var r = new Vn(0, n || this.scope),
          i = (r.conditions = {}),
          a,
          s,
          c;
        for (s in (o && !r.selector && (r.selector = o.selector),
        this.contexts.push(r),
        (t = r.add(`onMatch`, t)),
        (r.queries = e),
        e))
          s === `all`
            ? (c = 1)
            : ((a = F.matchMedia(e[s])),
              a &&
                (Pn.indexOf(r) < 0 && Pn.push(r),
                (i[s] = a.matches) && (c = 1),
                a.addListener
                  ? a.addListener(Bn)
                  : a.addEventListener(`change`, Bn)));
        return (
          c &&
            t(r, function (e) {
              return r.add(null, e);
            }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      e
    );
  })(),
  Un = {
    registerPlugin: function () {
      [...arguments].forEach(function (e) {
        return Pt(e);
      });
    },
    timeline: function (e) {
      return new on(e);
    },
    getTweensOf: function (e, t) {
      return P.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, r) {
      h(e) && (e = pt(e)[0]);
      var i = ye(e || {}).get,
        a = n ? Oe : De;
      return (
        n === `native` && (n = ``),
        e &&
          (t
            ? a(((pe[t] && pe[t].get) || i)(e, t, n, r))
            : function (t, n, r) {
                return a(((pe[t] && pe[t].get) || i)(e, t, n, r));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = pt(e)), e.length > 1)) {
        var r = e.map(function (e) {
            return qn.quickSetter(e, t, n);
          }),
          i = r.length;
        return function (e) {
          for (var t = i; t--;) r[t](e);
        };
      }
      e = e[0] || {};
      var a = pe[t],
        o = ye(e),
        s = (o.harness && (o.harness.aliases || {})[t]) || t,
        c = a
          ? function (t) {
              var r = new a();
              ((Mt._pt = 0),
                r.init(e, n ? t + n : t, Mt, 0, [e]),
                r.render(1, r),
                Mt._pt && On(1, Mt));
            }
          : o.set(e, s);
      return a
        ? c
        : function (t) {
            return c(e, s, n ? t + n : t, o, 1);
          };
    },
    quickTo: function (e, t, n) {
      var r,
        i = qn.to(
          e,
          ke(
            ((r = {}), (r[t] = `+=0.1`), (r.paused = !0), (r.stagger = 0), r),
            n || {},
          ),
        ),
        a = function (e, n, r) {
          return i.resetTo(t, e, n, r);
        };
      return ((a.tween = i), a);
    },
    isTweening: function (e) {
      return P.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return (e && e.ease && (e.ease = Qt(e.ease, r.ease)), Me(r, e || {}));
    },
    config: function (e) {
      return Me(n, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        r = e.plugins,
        i = e.defaults,
        a = e.extendTimeline;
      ((r || ``).split(`,`).forEach(function (e) {
        return (
          e && !pe[e] && !R[e] && re(t + ` effect requires ` + e + ` plugin.`)
        );
      }),
        (me[t] = function (e, t, r) {
          return n(pt(e), ke(t || {}, i), r);
        }),
        a &&
          (on.prototype[t] = function (e, n, r) {
            return this.add(me[t](e, y(n) ? n : (r = n) && {}, this), r);
          }));
    },
    registerEase: function (e, t) {
      W[e] = Qt(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Qt(e, t) : W;
    },
    getById: function (e) {
      return P.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new on(e),
        r,
        i;
      for (
        n.smoothChildTiming = b(e.smoothChildTiming),
          P.remove(n),
          n._dp = 0,
          n._time = n._tTime = P._time,
          r = P._first;
        r;
      )
        ((i = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof G &&
              r.vars.onComplete === r._targets[0]
            )) &&
            Ye(n, r, r._start - r._delay),
          (r = i));
      return (Ye(P, n, 0), n);
    },
    context: function (e, t) {
      return e ? new Vn(e, t) : o;
    },
    matchMedia: function (e) {
      return new Hn(e);
    },
    matchMediaRefresh: function () {
      return (
        Pn.forEach(function (e) {
          var t = e.conditions,
            n,
            r;
          for (r in t) t[r] && ((t[r] = !1), (n = 1));
          n && e.revert();
        }) || Bn()
      );
    },
    addEventListener: function (e, t) {
      var n = Fn[e] || (Fn[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = Fn[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    },
    utils: {
      wrap: wt,
      wrapYoyo: Tt,
      distribute: gt,
      random: yt,
      snap: vt,
      normalize: St,
      getUnit: H,
      clamp: lt,
      splitColor: Lt,
      toArray: pt,
      selector: mt,
      mapRange: Dt,
      pipe: bt,
      unitize: xt,
      interpolate: Ot,
      shuffle: ht,
    },
    install: te,
    effects: me,
    ticker: Wt,
    updateRoot: on.updateRoot,
    plugins: pe,
    globalTimeline: P,
    core: {
      PropTween: Nn,
      globals: ie,
      Tween: G,
      Timeline: on,
      Animation: an,
      getCache: ye,
      _removeLinkedListItem: Le,
      reverting: function () {
        return a;
      },
      context: function (e) {
        return (e && o && (o.data.push(e), (e._ctx = o)), o);
      },
      suppressOverwrites: function (e) {
        return (i = e);
      },
    },
  };
(xe(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
  return (Un[e] = G[e]);
}),
  Wt.add(on.updateRoot),
  (Mt = Un.to({}, { duration: 0 })));
var Wn = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;)
      n = n._next;
    return n;
  },
  Gn = function (e, t) {
    var n = e._targets,
      r,
      i,
      a;
    for (r in t)
      for (i = n.length; i--;)
        ((a = e._ptLookup[i][r]),
          (a &&= a.d) &&
            (a._pt && (a = Wn(a, r)),
            a && a.modifier && a.modifier(t[r], e, n[i], r)));
  },
  Kn = function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (e, n, r) {
        r._onInit = function (e) {
          var r, i;
          if (
            (h(n) &&
              ((r = {}),
              xe(n, function (e) {
                return (r[e] = 1);
              }),
              (n = r)),
            t)
          ) {
            for (i in ((r = {}), n)) r[i] = t(n[i]);
            n = r;
          }
          Gn(e, n);
        };
      },
    };
  },
  qn =
    Un.registerPlugin(
      {
        name: `attr`,
        init: function (e, t, n, r, i) {
          var a, o, s;
          for (a in ((this.tween = n), t))
            ((s = e.getAttribute(a) || ``),
              (o = this.add(
                e,
                `setAttribute`,
                (s || 0) + ``,
                t[a],
                r,
                i,
                0,
                0,
                a,
              )),
              (o.op = a),
              (o.b = s),
              this._props.push(a));
        },
        render: function (e, t) {
          for (var n = t._pt; n;)
            (a ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
        },
      },
      {
        name: `endArray`,
        headless: 1,
        init: function (e, t) {
          for (var n = t.length; n--;)
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      Kn(`roundProps`, _t),
      Kn(`modifiers`),
      Kn(`snap`, vt),
    ) || Un;
((G.version = on.version = qn.version = `3.15.0`),
  (z = 1),
  x() && Gt(),
  W.Power0,
  W.Power1,
  W.Power2,
  W.Power3,
  W.Power4,
  W.Linear,
  W.Quad,
  W.Cubic,
  W.Quart,
  W.Quint,
  W.Strong,
  W.Elastic,
  W.Back,
  W.SteppedEase,
  W.Bounce,
  W.Sine,
  W.Expo,
  W.Circ);
var Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr = function () {
    return typeof window < `u`;
  },
  nr = {},
  rr = 180 / Math.PI,
  ir = Math.PI / 180,
  ar = Math.atan2,
  or = 1e8,
  sr = /([A-Z])/g,
  cr = /(left|right|width|margin|padding|x)/i,
  lr = /[\s,\(]\S/,
  ur = {
    autoAlpha: `opacity,visibility`,
    scale: `scaleX,scaleY`,
    alpha: `opacity`,
  },
  dr = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  fr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t,
    );
  },
  pr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  mr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  hr = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  gr = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  _r = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
  },
  vr = function (e, t, n) {
    return (e.style[t] = n);
  },
  yr = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  br = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  xr = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  Sr = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a.scaleX = a.scaleY = n), a.renderTransform(i, a));
  },
  Cr = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a[t] = n), a.renderTransform(i, a));
  },
  K = `transform`,
  wr = K + `Origin`,
  Tr = function e(t, n) {
    var r = this,
      i = this.target,
      a = i.style,
      o = i._gsap;
    if (t in nr && a) {
      if (((this.tfm = this.tfm || {}), t !== `transform`))
        ((t = ur[t] || t),
          ~t.indexOf(`,`)
            ? t.split(`,`).forEach(function (e) {
                return (r.tfm[e] = Wr(i, e));
              })
            : (this.tfm[t] = o.x ? o[t] : Wr(i, t)),
          t === wr && (this.tfm.zOrigin = o.zOrigin));
      else
        return ur.transform.split(`,`).forEach(function (t) {
          return e.call(r, t, n);
        });
      if (this.props.indexOf(K) >= 0) return;
      (o.svg &&
        ((this.svgo = i.getAttribute(`data-svg-origin`)),
        this.props.push(wr, n, ``)),
        (t = K));
    }
    (a || n) && this.props.push(t, n, a[t]);
  },
  Er = function (e) {
    e.translate &&
      (e.removeProperty(`translate`),
      e.removeProperty(`scale`),
      e.removeProperty(`rotate`));
  },
  Dr = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      r = t._gsap,
      i,
      a;
    for (i = 0; i < e.length; i += 3)
      e[i + 1]
        ? e[i + 1] === 2
          ? t[e[i]](e[i + 2])
          : (t[e[i]] = e[i + 2])
        : e[i + 2]
          ? (n[e[i]] = e[i + 2])
          : n.removeProperty(
              e[i].substr(0, 2) === `--`
                ? e[i]
                : e[i].replace(sr, `-$1`).toLowerCase(),
            );
    if (this.tfm) {
      for (a in this.tfm) r[a] = this.tfm[a];
      (r.svg &&
        (r.renderTransform(),
        t.setAttribute(`data-svg-origin`, this.svgo || ``)),
        (i = er()),
        (!i || !i.isStart) &&
          !n[K] &&
          (Er(n),
          r.zOrigin &&
            n[wr] &&
            ((n[wr] += ` ` + r.zOrigin + `px`),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  Or = function (e, t) {
    var n = { target: e, props: [], revert: Dr, save: Tr };
    return (
      e._gsap || qn.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(`,`).forEach(function (e) {
          return n.save(e);
        }),
      n
    );
  },
  kr,
  Ar = function (e, t) {
    var n = Yn.createElementNS
      ? Yn.createElementNS(
          (t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`),
          e,
        )
      : Yn.createElement(e);
    return n && n.style ? n : Yn.createElement(e);
  },
  jr = function e(t, n, r) {
    var i = getComputedStyle(t);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(sr, `-$1`).toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && e(t, Nr(n) || n, 1)) ||
      ``
    );
  },
  Mr = `O,Moz,ms,Ms,Webkit`.split(`,`),
  Nr = function (e, t, n) {
    var r = (t || Qn).style,
      i = 5;
    if (e in r && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      i-- && !(Mr[i] + e in r);
    );
    return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? Mr[i] : ``) + e;
  },
  Pr = function () {
    tr() &&
      window.document &&
      ((Jn = window),
      (Yn = Jn.document),
      (Xn = Yn.documentElement),
      (Qn = Ar(`div`) || { style: {} }),
      Ar(`div`),
      (K = Nr(K)),
      (wr = K + `Origin`),
      (Qn.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
      (kr = !!Nr(`perspective`)),
      (er = qn.core.reverting),
      (Zn = 1));
  },
  Fr = function (e) {
    var t = e.ownerSVGElement,
      n = Ar(
        `svg`,
        (t && t.getAttribute(`xmlns`)) || `http://www.w3.org/2000/svg`,
      ),
      r = e.cloneNode(!0),
      i;
    ((r.style.display = `block`), n.appendChild(r), Xn.appendChild(n));
    try {
      i = r.getBBox();
    } catch {}
    return (n.removeChild(r), Xn.removeChild(n), i);
  },
  Ir = function (e, t) {
    for (var n = t.length; n--;)
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  Lr = function (e) {
    var t, n;
    try {
      t = e.getBBox();
    } catch {
      ((t = Fr(e)), (n = 1));
    }
    return (
      (t && (t.width || t.height)) || n || (t = Fr(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Ir(e, [`x`, `cx`, `x1`]) || 0,
            y: +Ir(e, [`y`, `cy`, `y1`]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  Rr = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Lr(e));
  },
  zr = function (e, t) {
    if (t) {
      var n = e.style,
        r;
      (t in nr && t !== wr && (t = K),
        n.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === `ms` || t.substr(0, 6) === `webkit`) && (t = `-` + t),
            n.removeProperty(
              r === `--` ? t : t.replace(sr, `-$1`).toLowerCase(),
            ))
          : n.removeAttribute(t));
    }
  },
  Br = function (e, t, n, r, i, a) {
    var o = new Nn(e._pt, t, n, 0, 1, a ? _r : gr);
    return ((e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o);
  },
  Vr = { deg: 1, rad: 1, turn: 1 },
  Hr = { grid: 1, flex: 1 },
  Ur = function e(t, n, r, i) {
    var a = parseFloat(r) || 0,
      o = (r + ``).trim().substr((a + ``).length) || `px`,
      s = Qn.style,
      c = cr.test(n),
      l = t.tagName.toLowerCase() === `svg`,
      u = (l ? `client` : `offset`) + (c ? `Width` : `Height`),
      d = 100,
      f = i === `px`,
      p = i === `%`,
      m,
      h,
      g,
      _;
    if (i === o || !a || Vr[i] || Vr[o]) return a;
    if (
      (o !== `px` && !f && (a = e(t, n, r, `px`)),
      (_ = t.getCTM && Rr(t)),
      (p || o === `%`) && (nr[n] || ~n.indexOf(`adius`)))
    )
      return (
        (m = _ ? t.getBBox()[c ? `width` : `height`] : t[u]),
        B(p ? (a / m) * d : (a / 100) * m)
      );
    if (
      ((s[c ? `width` : `height`] = d + (f ? o : i)),
      (h =
        (i !== `rem` && ~n.indexOf(`adius`)) ||
        (i === `em` && t.appendChild && !l)
          ? t
          : t.parentNode),
      _ && (h = (t.ownerSVGElement || {}).parentNode),
      (!h || h === Yn || !h.appendChild) && (h = Yn.body),
      (g = h._gsap),
      g && p && g.width && c && g.time === Wt.time && !g.uncache)
    )
      return B((a / g.width) * d);
    if (p && (n === `height` || n === `width`)) {
      var v = t.style[n];
      ((t.style[n] = d + i), (m = t[u]), v ? (t.style[n] = v) : zr(t, n));
    } else
      ((p || o === `%`) &&
        !Hr[jr(h, `display`)] &&
        (s.position = jr(t, `position`)),
        h === t && (s.position = `static`),
        h.appendChild(Qn),
        (m = Qn[u]),
        h.removeChild(Qn),
        (s.position = `absolute`));
    return (
      c && p && ((g = ye(h)), (g.time = Wt.time), (g.width = h[u])),
      B(f ? (m * a) / d : m && a ? (d / m) * a : 0)
    );
  },
  Wr = function (e, t, n, r) {
    var i;
    return (
      Zn || Pr(),
      t in ur &&
        t !== `transform` &&
        ((t = ur[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
      nr[t] && t !== `transform`
        ? ((i = ni(e, r)),
          (i =
            t === `transformOrigin`
              ? i.svg
                ? i.origin
                : ri(jr(e, wr)) + ` ` + i.zOrigin + `px`
              : i[t]))
        : ((i = e.style[t]),
          (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
            (i =
              (Yr[t] && Yr[t](e, t, n)) ||
              jr(e, t) ||
              be(e, t) ||
              +(t === `opacity`))),
      n && !~(i + ``).trim().indexOf(` `) ? Ur(e, t, i, n) + n : i
    );
  },
  Gr = function (e, t, r, i) {
    if (!r || r === `none`) {
      var a = Nr(t, e, 1),
        o = a && jr(e, a, 1);
      o && o !== r
        ? ((t = a), (r = o))
        : t === `borderColor` && (r = jr(e, `borderTopColor`));
    }
    var s = new Nn(this._pt, e.style, t, 0, 1, Dn),
      c = 0,
      l = 0,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x;
    if (
      ((s.b = r),
      (s.e = i),
      (r += ``),
      (i += ``),
      i.substring(0, 6) === `var(--` &&
        (i = jr(e, i.substring(4, i.indexOf(`)`)))),
      i === `auto` &&
        ((h = e.style[t]),
        (e.style[t] = i),
        (i = jr(e, t) || i),
        h ? (e.style[t] = h) : zr(e, t)),
      (u = [r, i]),
      Ht(u),
      (r = u[0]),
      (i = u[1]),
      (f = r.match(k) || []),
      (x = i.match(k) || []),
      x.length)
    ) {
      for (; (d = k.exec(i));)
        ((g = d[0]),
          (v = i.substring(c, d.index)),
          m
            ? (m = (m + 1) % 5)
            : (v.substr(-5) === `rgba(` || v.substr(-5) === `hsla(`) && (m = 1),
          g !== (h = f[l++] || ``) &&
            ((p = parseFloat(h) || 0),
            (b = h.substr((p + ``).length)),
            g.charAt(1) === `=` && (g = Se(p, g) + b),
            (_ = parseFloat(g)),
            (y = g.substr((_ + ``).length)),
            (c = k.lastIndex - y.length),
            y ||
              ((y = y || n.units[t] || b),
              c === i.length && ((i += y), (s.e += y))),
            b !== y && (p = Ur(e, t, h, y) || 0),
            (s._pt = {
              _next: s._pt,
              p: v || l === 1 ? v : `,`,
              s: p,
              c: _ - p,
              m: (m && m < 4) || t === `zIndex` ? Math.round : 0,
            })));
      s.c = c < i.length ? i.substring(c, i.length) : ``;
    } else s.r = t === `display` && i === `none` ? _r : gr;
    return (j.test(i) && (s.e = 0), (this._pt = s), s);
  },
  Kr = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` },
  qr = function (e) {
    var t = e.split(` `),
      n = t[0],
      r = t[1] || `50%`;
    return (
      (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
        ((e = n), (n = r), (r = e)),
      (t[0] = Kr[n] || n),
      (t[1] = Kr[r] || r),
      t.join(` `)
    );
  },
  Jr = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        r = n.style,
        i = t.u,
        a = n._gsap,
        o,
        s,
        c;
      if (i === `all` || i === !0) ((r.cssText = ``), (s = 1));
      else
        for (i = i.split(`,`), c = i.length; --c > -1;)
          ((o = i[c]),
            nr[o] && ((s = 1), (o = o === `transformOrigin` ? wr : K)),
            zr(n, o));
      s &&
        (zr(n, K),
        a &&
          (a.svg && n.removeAttribute(`transform`),
          (r.scale = r.rotate = r.translate = `none`),
          ni(n, 1),
          (a.uncache = 1),
          Er(r)));
    }
  },
  Yr = {
    clearProps: function (e, t, n, r, i) {
      if (i.data !== `isFromStart`) {
        var a = (e._pt = new Nn(e._pt, t, n, 0, 0, Jr));
        return ((a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1);
      }
    },
  },
  Xr = [1, 0, 0, 1, 0, 0],
  Zr = {},
  Qr = function (e) {
    return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
  },
  $r = function (e) {
    var t = jr(e, K);
    return Qr(t) ? Xr : t.substr(7).match(O).map(B);
  },
  ei = function (e, t) {
    var n = e._gsap || ye(e),
      r = e.style,
      i = $r(e),
      a,
      o,
      s,
      c;
    return n.svg && e.getAttribute(`transform`)
      ? ((s = e.transform.baseVal.consolidate().matrix),
        (i = [s.a, s.b, s.c, s.d, s.e, s.f]),
        i.join(`,`) === `1,0,0,1,0,0` ? Xr : i)
      : (i === Xr &&
          !e.offsetParent &&
          e !== Xn &&
          !n.svg &&
          ((s = r.display),
          (r.display = `block`),
          (a = e.parentNode),
          (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((c = 1), (o = e.nextElementSibling), Xn.appendChild(e)),
          (i = $r(e)),
          s ? (r.display = s) : zr(e, `display`),
          c &&
            (o
              ? a.insertBefore(e, o)
              : a
                ? a.appendChild(e)
                : Xn.removeChild(e))),
        t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
  },
  ti = function (e, t, n, r, i, a) {
    var o = e._gsap,
      s = i || ei(e, !0),
      c = o.xOrigin || 0,
      l = o.yOrigin || 0,
      u = o.xOffset || 0,
      d = o.yOffset || 0,
      f = s[0],
      p = s[1],
      m = s[2],
      h = s[3],
      g = s[4],
      _ = s[5],
      v = t.split(` `),
      y = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      x,
      S,
      C,
      w;
    (n
      ? s !== Xr &&
        (S = f * h - p * m) &&
        ((C = (h / S) * y + b * (-m / S) + (m * _ - h * g) / S),
        (w = y * (-p / S) + (f / S) * b - (f * _ - p * g) / S),
        (y = C),
        (b = w))
      : ((x = Lr(e)),
        (y = x.x + (~v[0].indexOf(`%`) ? (y / 100) * x.width : y)),
        (b = x.y + (~(v[1] || v[0]).indexOf(`%`) ? (b / 100) * x.height : b))),
      r || (r !== !1 && o.smooth)
        ? ((g = y - c),
          (_ = b - l),
          (o.xOffset = u + (g * f + _ * m) - g),
          (o.yOffset = d + (g * p + _ * h) - _))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = y),
      (o.yOrigin = b),
      (o.smooth = !!r),
      (o.origin = t),
      (o.originIsAbsolute = !!n),
      (e.style[wr] = `0px 0px`),
      a &&
        (Br(a, o, `xOrigin`, c, y),
        Br(a, o, `yOrigin`, l, b),
        Br(a, o, `xOffset`, u, o.xOffset),
        Br(a, o, `yOffset`, d, o.yOffset)),
      e.setAttribute(`data-svg-origin`, y + ` ` + b));
  },
  ni = function (e, t) {
    var r = e._gsap || new rn(e);
    if (`x` in r && !t && !r.uncache) return r;
    var i = e.style,
      a = r.scaleX < 0,
      o = `px`,
      s = `deg`,
      c = getComputedStyle(e),
      l = jr(e, wr) || `0`,
      u = (d = f = h = g = _ = v = y = b = 0),
      d,
      f,
      p = (m = 1),
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w,
      T,
      E,
      D,
      O,
      k,
      A,
      j,
      M,
      N,
      P,
      F,
      I,
      L,
      R,
      ee,
      z,
      te;
    return (
      (r.svg = !!(e.getCTM && Rr(e))),
      c.translate &&
        ((c.translate !== `none` ||
          c.scale !== `none` ||
          c.rotate !== `none`) &&
          (i[K] =
            (c.translate === `none`
              ? ``
              : `translate3d(` +
                (c.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) +
                `) `) +
            (c.rotate === `none` ? `` : `rotate(` + c.rotate + `) `) +
            (c.scale === `none`
              ? ``
              : `scale(` + c.scale.split(` `).join(`,`) + `) `) +
            (c[K] === `none` ? `` : c[K])),
        (i.scale = i.rotate = i.translate = `none`)),
      (C = ei(e, r.svg)),
      r.svg &&
        (r.uncache
          ? ((P = e.getBBox()),
            (l = r.xOrigin - P.x + `px ` + (r.yOrigin - P.y) + `px`),
            (N = ``))
          : (N = !t && e.getAttribute(`data-svg-origin`)),
        ti(e, N || l, !!N || r.originIsAbsolute, r.smooth !== !1, C)),
      (x = r.xOrigin || 0),
      (S = r.yOrigin || 0),
      C !== Xr &&
        ((D = C[0]),
        (O = C[1]),
        (k = C[2]),
        (A = C[3]),
        (u = j = C[4]),
        (d = M = C[5]),
        C.length === 6
          ? ((p = Math.sqrt(D * D + O * O)),
            (m = Math.sqrt(A * A + k * k)),
            (h = D || O ? ar(O, D) * rr : 0),
            (v = k || A ? ar(k, A) * rr + h : 0),
            v && (m *= Math.abs(Math.cos(v * ir))),
            r.svg && ((u -= x - (x * D + S * k)), (d -= S - (x * O + S * A))))
          : ((te = C[6]),
            (ee = C[7]),
            (I = C[8]),
            (L = C[9]),
            (R = C[10]),
            (z = C[11]),
            (u = C[12]),
            (d = C[13]),
            (f = C[14]),
            (w = ar(te, R)),
            (g = w * rr),
            w &&
              ((T = Math.cos(-w)),
              (E = Math.sin(-w)),
              (N = j * T + I * E),
              (P = M * T + L * E),
              (F = te * T + R * E),
              (I = j * -E + I * T),
              (L = M * -E + L * T),
              (R = te * -E + R * T),
              (z = ee * -E + z * T),
              (j = N),
              (M = P),
              (te = F)),
            (w = ar(-k, R)),
            (_ = w * rr),
            w &&
              ((T = Math.cos(-w)),
              (E = Math.sin(-w)),
              (N = D * T - I * E),
              (P = O * T - L * E),
              (F = k * T - R * E),
              (z = A * E + z * T),
              (D = N),
              (O = P),
              (k = F)),
            (w = ar(O, D)),
            (h = w * rr),
            w &&
              ((T = Math.cos(w)),
              (E = Math.sin(w)),
              (N = D * T + O * E),
              (P = j * T + M * E),
              (O = O * T - D * E),
              (M = M * T - j * E),
              (D = N),
              (j = P)),
            g &&
              Math.abs(g) + Math.abs(h) > 359.9 &&
              ((g = h = 0), (_ = 180 - _)),
            (p = B(Math.sqrt(D * D + O * O + k * k))),
            (m = B(Math.sqrt(M * M + te * te))),
            (w = ar(j, M)),
            (v = Math.abs(w) > 2e-4 ? w * rr : 0),
            (b = z ? 1 / (z < 0 ? -z : z) : 0)),
        r.svg &&
          ((N = e.getAttribute(`transform`)),
          (r.forceCSS = e.setAttribute(`transform`, ``) || !Qr(jr(e, K))),
          N && e.setAttribute(`transform`, N))),
      Math.abs(v) > 90 &&
        Math.abs(v) < 270 &&
        (a
          ? ((p *= -1), (v += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
          : ((m *= -1), (v += v <= 0 ? 180 : -180))),
      (t ||= r.uncache),
      (r.x =
        u -
        ((r.xPercent =
          u &&
          ((!t && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        o),
      (r.y =
        d -
        ((r.yPercent =
          d &&
          ((!t && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        o),
      (r.z = f + o),
      (r.scaleX = B(p)),
      (r.scaleY = B(m)),
      (r.rotation = B(h) + s),
      (r.rotationX = B(g) + s),
      (r.rotationY = B(_) + s),
      (r.skewX = v + s),
      (r.skewY = y + s),
      (r.transformPerspective = b + o),
      (r.zOrigin = parseFloat(l.split(` `)[2]) || (!t && r.zOrigin) || 0) &&
        (i[wr] = ri(l)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = n.force3D),
      (r.renderTransform = r.svg ? ui : kr ? li : ai),
      (r.uncache = 0),
      r
    );
  },
  ri = function (e) {
    return (e = e.split(` `))[0] + ` ` + e[1];
  },
  ii = function (e, t, n) {
    var r = H(t);
    return B(parseFloat(t) + parseFloat(Ur(e, `x`, n + `px`, r))) + r;
  },
  ai = function (e, t) {
    ((t.z = `0px`),
      (t.rotationY = t.rotationX = `0deg`),
      (t.force3D = 0),
      li(e, t));
  },
  oi = `0deg`,
  si = `0px`,
  ci = `) `,
  li = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.z,
      c = n.rotation,
      l = n.rotationY,
      u = n.rotationX,
      d = n.skewX,
      f = n.skewY,
      p = n.scaleX,
      m = n.scaleY,
      h = n.transformPerspective,
      g = n.force3D,
      _ = n.target,
      v = n.zOrigin,
      y = ``,
      b = (g === `auto` && e && e !== 1) || g === !0;
    if (v && (u !== oi || l !== oi)) {
      var x = parseFloat(l) * ir,
        S = Math.sin(x),
        C = Math.cos(x),
        w;
      ((x = parseFloat(u) * ir),
        (w = Math.cos(x)),
        (a = ii(_, a, S * w * -v)),
        (o = ii(_, o, -Math.sin(x) * -v)),
        (s = ii(_, s, C * w * -v + v)));
    }
    (h !== si && (y += `perspective(` + h + ci),
      (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
      (b || a !== si || o !== si || s !== si) &&
        (y +=
          s !== si || b
            ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
            : `translate(` + a + `, ` + o + ci),
      c !== oi && (y += `rotate(` + c + ci),
      l !== oi && (y += `rotateY(` + l + ci),
      u !== oi && (y += `rotateX(` + u + ci),
      (d !== oi || f !== oi) && (y += `skew(` + d + `, ` + f + ci),
      (p !== 1 || m !== 1) && (y += `scale(` + p + `, ` + m + ci),
      (_.style[K] = y || `translate(0, 0)`));
  },
  ui = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.rotation,
      c = n.skewX,
      l = n.skewY,
      u = n.scaleX,
      d = n.scaleY,
      f = n.target,
      p = n.xOrigin,
      m = n.yOrigin,
      h = n.xOffset,
      g = n.yOffset,
      _ = n.forceCSS,
      v = parseFloat(a),
      y = parseFloat(o),
      b,
      x,
      S,
      C,
      w;
    ((s = parseFloat(s)),
      (c = parseFloat(c)),
      (l = parseFloat(l)),
      l && ((l = parseFloat(l)), (c += l), (s += l)),
      s || c
        ? ((s *= ir),
          (c *= ir),
          (b = Math.cos(s) * u),
          (x = Math.sin(s) * u),
          (S = Math.sin(s - c) * -d),
          (C = Math.cos(s - c) * d),
          c &&
            ((l *= ir),
            (w = Math.tan(c - l)),
            (w = Math.sqrt(1 + w * w)),
            (S *= w),
            (C *= w),
            l &&
              ((w = Math.tan(l)),
              (w = Math.sqrt(1 + w * w)),
              (b *= w),
              (x *= w))),
          (b = B(b)),
          (x = B(x)),
          (S = B(S)),
          (C = B(C)))
        : ((b = u), (C = d), (x = S = 0)),
      ((v && !~(a + ``).indexOf(`px`)) || (y && !~(o + ``).indexOf(`px`))) &&
        ((v = Ur(f, `x`, a, `px`)), (y = Ur(f, `y`, o, `px`))),
      (p || m || h || g) &&
        ((v = B(v + p - (p * b + m * S) + h)),
        (y = B(y + m - (p * x + m * C) + g))),
      (r || i) &&
        ((w = f.getBBox()),
        (v = B(v + (r / 100) * w.width)),
        (y = B(y + (i / 100) * w.height))),
      (w =
        `matrix(` + b + `,` + x + `,` + S + `,` + C + `,` + v + `,` + y + `)`),
      f.setAttribute(`transform`, w),
      _ && (f.style[K] = w));
  },
  di = function (e, t, n, r, i) {
    var a = 360,
      o = h(i),
      s = parseFloat(i) * (o && ~i.indexOf(`rad`) ? rr : 1) - r,
      c = r + s + `deg`,
      l,
      u;
    return (
      o &&
        ((l = i.split(`_`)[1]),
        l === `short` && ((s %= a), s !== s % (a / 2) && (s += s < 0 ? a : -a)),
        l === `cw` && s < 0
          ? (s = ((s + a * or) % a) - ~~(s / a) * a)
          : l === `ccw` && s > 0 && (s = ((s - a * or) % a) - ~~(s / a) * a)),
      (e._pt = u = new Nn(e._pt, t, n, r, s, fr)),
      (u.e = c),
      (u.u = `deg`),
      e._props.push(n),
      u
    );
  },
  fi = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  pi = function (e, t, n) {
    var r = fi({}, n._gsap),
      i = `perspective,force3D,transformOrigin,svgOrigin`,
      a = n.style,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    for (s in (r.svg
      ? ((c = n.getAttribute(`transform`)),
        n.setAttribute(`transform`, ``),
        (a[K] = t),
        (o = ni(n, 1)),
        zr(n, K),
        n.setAttribute(`transform`, c))
      : ((c = getComputedStyle(n)[K]), (a[K] = t), (o = ni(n, 1)), (a[K] = c)),
    nr))
      ((c = r[s]),
        (l = o[s]),
        c !== l &&
          i.indexOf(s) < 0 &&
          ((f = H(c)),
          (p = H(l)),
          (u = f === p ? parseFloat(c) : Ur(n, s, c, p)),
          (d = parseFloat(l)),
          (e._pt = new Nn(e._pt, o, s, u, d - u, dr)),
          (e._pt.u = p || 0),
          e._props.push(s)));
    fi(o, r);
  };
xe(`padding,margin,Width,Radius`, function (e, t) {
  var n = `Top`,
    r = `Right`,
    i = `Bottom`,
    a = `Left`,
    o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
      return t < 2 ? e + n : `border` + n + e;
    });
  Yr[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
    var a, s;
    if (arguments.length < 4)
      return (
        (a = o.map(function (t) {
          return Wr(e, t, n);
        })),
        (s = a.join(` `)),
        s.split(a[0]).length === 5 ? a[0] : s
      );
    ((a = (r + ``).split(` `)),
      (s = {}),
      o.forEach(function (e, t) {
        return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
      }),
      e.init(t, s, i));
  };
});
var mi = {
  name: `css`,
  register: Pr,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, r, i, a) {
    var o = this._props,
      s = e.style,
      c = r.vars.startAt,
      l,
      u,
      d,
      f,
      p,
      m,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w,
      T,
      E;
    for (g in (Zn || Pr(),
    (this.styles = this.styles || Or(e)),
    (T = this.styles.props),
    (this.tween = r),
    t))
      if (g !== `autoRound` && ((u = t[g]), !(pe[g] && un(g, t, r, i, e, a)))) {
        if (
          ((p = typeof u),
          (m = Yr[g]),
          p === `function` && ((u = u.call(r, i, e, a)), (p = typeof u)),
          p === `string` && ~u.indexOf(`random(`) && (u = Et(u)),
          m)
        )
          m(this, e, g, u, r) && (w = 1);
        else if (g.substr(0, 2) === `--`)
          ((l = (getComputedStyle(e).getPropertyValue(g) + ``).trim()),
            (u += ``),
            (Bt.lastIndex = 0),
            Bt.test(l) ||
              ((_ = H(l)),
              (v = H(u)),
              v ? _ !== v && (l = Ur(e, g, l, v) + v) : _ && (u += _)),
            this.add(s, `setProperty`, l, u, i, a, 0, 0, g),
            o.push(g),
            T.push(g, 0, s[g]));
        else if (p !== `undefined`) {
          if (
            (c && g in c
              ? ((l = typeof c[g] == `function` ? c[g].call(r, i, e, a) : c[g]),
                h(l) && ~l.indexOf(`random(`) && (l = Et(l)),
                H(l + ``) ||
                  l === `auto` ||
                  (l += n.units[g] || H(Wr(e, g)) || ``),
                (l + ``).charAt(1) === `=` && (l = Wr(e, g)))
              : (l = Wr(e, g)),
            (f = parseFloat(l)),
            (y = p === `string` && u.charAt(1) === `=` && u.substr(0, 2)),
            y && (u = u.substr(2)),
            (d = parseFloat(u)),
            g in ur &&
              (g === `autoAlpha` &&
                (f === 1 && Wr(e, `visibility`) === `hidden` && d && (f = 0),
                T.push(`visibility`, 0, s.visibility),
                Br(
                  this,
                  s,
                  `visibility`,
                  f ? `inherit` : `hidden`,
                  d ? `inherit` : `hidden`,
                  !d,
                )),
              g !== `scale` &&
                g !== `transform` &&
                ((g = ur[g]), ~g.indexOf(`,`) && (g = g.split(`,`)[0]))),
            (b = g in nr),
            b)
          ) {
            if (
              (this.styles.save(g),
              (E = u),
              p === `string` && u.substring(0, 6) === `var(--`)
            ) {
              if (
                ((u = jr(e, u.substring(4, u.indexOf(`)`)))),
                u.substring(0, 5) === `calc(`)
              ) {
                var D = e.style.perspective;
                ((e.style.perspective = u),
                  (u = jr(e, `perspective`)),
                  D ? (e.style.perspective = D) : zr(e, `perspective`));
              }
              d = parseFloat(u);
            }
            if (
              (x ||
                ((S = e._gsap),
                (S.renderTransform && !t.parseTransform) ||
                  ni(e, t.parseTransform),
                (C = t.smoothOrigin !== !1 && S.smooth),
                (x = this._pt =
                  new Nn(this._pt, s, K, 0, 1, S.renderTransform, S, 0, -1)),
                (x.dep = 1)),
              g === `scale`)
            )
              ((this._pt = new Nn(
                this._pt,
                S,
                `scaleY`,
                S.scaleY,
                (y ? Se(S.scaleY, y + d) : d) - S.scaleY || 0,
                dr,
              )),
                (this._pt.u = 0),
                o.push(`scaleY`, g),
                (g += `X`));
            else if (g === `transformOrigin`) {
              (T.push(wr, 0, s[wr]),
                (u = qr(u)),
                S.svg
                  ? ti(e, u, 0, C, 0, this)
                  : ((v = parseFloat(u.split(` `)[2]) || 0),
                    v !== S.zOrigin && Br(this, S, `zOrigin`, S.zOrigin, v),
                    Br(this, s, g, ri(l), ri(u))));
              continue;
            } else if (g === `svgOrigin`) {
              ti(e, u, 1, C, 0, this);
              continue;
            } else if (g in Zr) {
              di(this, S, g, f, y ? Se(f, y + u) : u);
              continue;
            } else if (g === `smoothOrigin`) {
              Br(this, S, `smooth`, S.smooth, u);
              continue;
            } else if (g === `force3D`) {
              S[g] = u;
              continue;
            } else if (g === `transform`) {
              pi(this, u, e);
              continue;
            }
          } else g in s || (g = Nr(g) || g);
          if (b || ((d || d === 0) && (f || f === 0) && !lr.test(u) && g in s))
            ((_ = (l + ``).substr((f + ``).length)),
              (d ||= 0),
              (v = H(u) || (g in n.units ? n.units[g] : _)),
              _ !== v && (f = Ur(e, g, l, v)),
              (this._pt = new Nn(
                this._pt,
                b ? S : s,
                g,
                f,
                (y ? Se(f, y + d) : d) - f,
                !b && (v === `px` || g === `zIndex`) && t.autoRound !== !1
                  ? hr
                  : dr,
              )),
              (this._pt.u = v || 0),
              b && E !== u
                ? ((this._pt.b = l), (this._pt.e = E), (this._pt.r = mr))
                : _ !== v &&
                  v !== `%` &&
                  ((this._pt.b = l), (this._pt.r = pr)));
          else if (g in s) Gr.call(this, e, g, l, y ? y + u : u);
          else if (g in e) this.add(e, g, l || e[g], y ? y + u : u, i, a);
          else if (g !== `parseTransform`) {
            ne(g, u);
            continue;
          }
          (b ||
            (g in s
              ? T.push(g, 0, s[g])
              : typeof e[g] == `function`
                ? T.push(g, 2, e[g]())
                : T.push(g, 1, l || e[g])),
            o.push(g));
        }
      }
    w && Mn(this);
  },
  render: function (e, t) {
    if (t.tween._time || !er())
      for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
    else t.styles.revert();
  },
  get: Wr,
  aliases: ur,
  getSetter: function (e, t, n) {
    var r = ur[t];
    return (
      r && r.indexOf(`,`) < 0 && (t = r),
      t in nr && t !== wr && (e._gsap.x || Wr(e, `x`))
        ? n && $n === n
          ? t === `scale`
            ? xr
            : br
          : ($n = n || {}) && (t === `scale` ? Sr : Cr)
        : e.style && !v(e.style[t])
          ? vr
          : ~t.indexOf(`-`)
            ? yr
            : wn(e, t)
    );
  },
  core: { _removeProperty: zr, _getMatrix: ei },
};
((qn.utils.checkPrefix = Nr),
  (qn.core.getStyleSaver = Or),
  (function (e, t, r, i) {
    var a = xe(e + `,` + t + `,` + r, function (e) {
      nr[e] = 1;
    });
    (xe(t, function (e) {
      ((n.units[e] = `deg`), (Zr[e] = 1));
    }),
      (ur[a[13]] = e + `,` + t),
      xe(i, function (e) {
        var t = e.split(`:`);
        ur[t[1]] = a[t[0]];
      }));
  })(
    `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
    `rotation,rotationX,rotationY,skewX,skewY`,
    `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
    `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`,
  ),
  xe(
    `x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,
    function (e) {
      n.units[e] = `px`;
    },
  ),
  qn.registerPlugin(mi));
var q = qn.registerPlugin(mi) || qn;
q.core.Tween;
var hi = matchMedia(`(prefers-reduced-motion: reduce)`),
  gi = () => hi.matches,
  _i = matchMedia(`(hover: hover) and (pointer: fine)`),
  J = (e) => (hi.matches ? 0 : e);
function Y(e, t = document) {
  let n = t.querySelector(e);
  if (!n) throw Error(`Missing ${e}`);
  return n;
}
var vi = (e, t = document) => t.querySelector(e),
  X = (e, t = document) => [...t.querySelectorAll(e)],
  Z = (e) =>
    String(e).replace(
      /[&<>"']/g,
      (e) =>
        ({
          "&": `&amp;`,
          "<": `&lt;`,
          ">": `&gt;`,
          '"': `&quot;`,
          "'": `&#39;`,
        })[e],
    );
function yi(e, t = e.textContent ?? ``) {
  let n = t.trim();
  return (
    e.setAttribute(`aria-label`, n),
    (e.innerHTML = n
      .split(` `)
      .map(
        (e) =>
          `<span class="word" aria-hidden="true">${[...e].map((e) => `<span class="ch">${Z(e)}</span>`).join(``)}</span>`,
      )
      .join(` `)),
    X(`.ch`, e)
  );
}
function bi(e, t, n = 0) {
  let r = yi(e, t);
  return gi()
    ? q.timeline()
    : q.fromTo(
        r,
        { yPercent: 110, rotation: 5 },
        {
          yPercent: 0,
          rotation: 0,
          duration: 0.8,
          ease: `power4.out`,
          stagger: 0.02,
          delay: n,
          clearProps: `transform`,
        },
      );
}
function xi(e, { y: t = 26, stagger: n = 0.07, delay: r = 0 } = {}) {
  return e.length
    ? q.fromTo(
        e,
        { opacity: 0, y: t, scale: 0.985 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: J(0.9),
          ease: `expo.out`,
          stagger: J(n),
          delay: J(r),
          clearProps: `transform,opacity`,
        },
      )
    : q.timeline();
}
function Si(e, { x: t = 0, y: n = 10, stagger: r = 0.04, delay: i = 0 } = {}) {
  return e.length
    ? q.fromTo(
        e,
        { opacity: 0, x: t, y: n },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: J(0.6),
          ease: `power3.out`,
          stagger: J(r),
          delay: J(i),
          clearProps: `transform,opacity`,
        },
      )
    : q.timeline();
}
function Ci(e, { from: t = 0.6, delay: n = 0, stagger: r = 0.05 } = {}) {
  !e ||
    gi() ||
    q.fromTo(
      e,
      { scale: t, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: `back.out(2.6)`,
        delay: n,
        stagger: r,
        overwrite: `auto`,
        clearProps: `transform,opacity`,
      },
    );
}
function wi(e) {
  !e ||
    gi() ||
    q.fromTo(
      e,
      { y: -3, scale: 1.05 },
      {
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: `back.out(2.4)`,
        overwrite: `auto`,
        clearProps: `transform`,
      },
    );
}
function Ti(e, t, n = `up`) {
  if (!e || gi()) return;
  let r = e.getBoundingClientRect(),
    i = Object.assign(document.createElement(`span`), {
      className: `float-up ${n}`,
      textContent: t,
    });
  (i.setAttribute(`aria-hidden`, `true`),
    Object.assign(i.style, {
      left: `${r.left + r.width / 2}px`,
      top: `${r.top}px`,
    }),
    document.body.append(i),
    q.fromTo(
      i,
      { opacity: 0, y: 6, xPercent: -50, scale: 0.9 },
      {
        keyframes: [
          { opacity: 1, y: -12, scale: 1, duration: 0.35, ease: `back.out(2)` },
          { opacity: 0, y: -38, duration: 0.8, ease: `power2.in`, delay: 0.5 },
        ],
        onComplete: () => i.remove(),
      },
    ));
}
function Ei(
  e,
  {
    duration: t = 1.2,
    delay: n = 0,
    stagger: r = 0,
    ease: i = `power3.inOut`,
  } = {},
) {
  q.fromTo(
    e,
    { strokeDasharray: `100 100`, strokeDashoffset: 100 },
    {
      strokeDashoffset: 0,
      duration: J(t),
      delay: J(n),
      stagger: J(r),
      ease: i,
    },
  );
}
var Di = new WeakMap();
function Oi(
  e,
  t,
  n,
  { duration: r = 1.2, delay: i = 0, from: a, ease: o = `power3.out` } = {},
) {
  if (!e) return;
  let s = Di.get(e);
  if (
    (s || Di.set(e, (s = { v: a ?? 0 })),
    a !== void 0 && (s.v = a),
    q.killTweensOf(s),
    gi() || !r || s.v === t)
  ) {
    ((s.v = t), (e.textContent = n(t)));
    return;
  }
  let c = s;
  ((e.textContent = n(c.v)),
    q.to(c, {
      v: t,
      duration: r,
      delay: i,
      ease: o,
      onUpdate: () => {
        e.textContent = n(c.v);
      },
      onComplete: () => {
        e.textContent = n(t);
      },
    }));
}
function ki(e) {
  if (gi()) return;
  let t = e.querySelector(`svg`) ?? e;
  q.fromTo(
    t,
    { scale: 0.72 },
    { scale: 1, duration: 0.55, ease: `back.out(3)`, overwrite: !0 },
  );
}
var Ai = { v: !1 };
function ji(e = document, t = -3) {
  _i.matches &&
    X(`[data-lift]`, e).forEach((e) => {
      if (e.__lift) return;
      e.__lift = !0;
      let n = e.dataset.lift === `inner` ? (e.firstElementChild ?? e) : e;
      (e.addEventListener(`pointerenter`, () => {
        !gi() &&
          Ai.v &&
          q.to(n, {
            y: t,
            duration: 0.45,
            ease: `power3.out`,
            overwrite: `auto`,
          });
      }),
        e.addEventListener(`pointerleave`, () => {
          Ai.v &&
            q.to(n, {
              y: 0,
              duration: 0.5,
              ease: `power3.out`,
              overwrite: `auto`,
              clearProps: `transform`,
            });
        }));
    });
}
var Mi = new Set();
q.ticker.add(() => {
  if (!Mi.size) return;
  let e = [...Mi];
  (Mi.clear(), e.forEach((e) => e()));
});
var Ni = (e) => {
    Mi.add(e);
  },
  Pi = new Map();
function Fi(e, t) {
  return (
    Pi.has(e) || Pi.set(e, new Set()),
    Pi.get(e).add(t),
    () => Pi.get(e).delete(t)
  );
}
function Ii(e) {
  Pi.get(e)?.forEach((e) => e());
}
function Li(e) {
  return () => {
    ((e |= 0), (e = (e + 1831565813) | 0));
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
}
var Ri = Li(172),
  zi = (e) => e[Math.floor(Ri() * e.length)],
  Bi = /[?&]record\b/.test(location.search),
  Q = Date.now(),
  Vi = 6e4,
  Hi = 60 * Vi,
  Ui = 24 * Hi,
  Wi = 0,
  Gi = (e) => `${e}${Date.now().toString(36)}${(Wi++).toString(36)}`,
  Ki = {
    name: `Mara Reyes`,
    email: `mara@sarthakdashboard.com`,
    role: `Owner`,
    hue: 206,
    initials: `MR`,
  },
  qi = [
    Ki,
    {
      name: `Jonah Okafor`,
      email: `jonah@sarthakdashboard.com`,
      role: `Store manager`,
      hue: 162,
      initials: `JO`,
    },
    {
      name: `Ana Petrova`,
      email: `ana@sarthakdashboard.com`,
      role: `Marketing`,
      hue: 12,
      initials: `AP`,
    },
    {
      name: `Leo Tanaka`,
      email: `leo@sarthakdashboard.com`,
      role: `Fulfilment`,
      hue: 181,
      initials: `LT`,
    },
    {
      name: `Priya Shah`,
      email: `priya@sarthakdashboard.com`,
      role: `Support`,
      hue: 330,
      initials: `PS`,
    },
  ],
  Ji = (e) => qi.find((t) => t.initials === e) ?? Ki,
  Yi = [`Kitchen`, `Table`, `Bath`, `Garden`, `Desk`],
  Xi = (e, t, n, r, i, a, o, s, c, l, u, d, f = `active`) => ({
    id: e,
    sku: `HS-${n.slice(0, 3).toUpperCase()}-${e.slice(1).padStart(3, `0`)}`,
    name: t,
    category: n,
    price: r,
    cost: i,
    stock: a,
    reorderAt: o,
    sold30: s,
    rating: c,
    reviews: l,
    hue: u,
    status: f,
    desc: d,
  }),
  $ = {
    products: [
      Xi(
        `p1`,
        `Stoneware Mug, Fog`,
        `Kitchen`,
        24,
        8.5,
        214,
        60,
        386,
        4.8,
        412,
        210,
        `Hand-thrown 350 ml mug with a satin fog glaze.`,
      ),
      Xi(
        `p2`,
        `Linen Tea Towels, set of 3`,
        `Kitchen`,
        32,
        11,
        128,
        40,
        241,
        4.7,
        198,
        30,
        `Stonewashed European linen in oat, rust and ink.`,
      ),
      Xi(
        `p3`,
        `Oak Serving Board`,
        `Table`,
        58,
        21,
        46,
        25,
        132,
        4.9,
        156,
        35,
        `Solid white oak, oiled, with a carved juice groove.`,
      ),
      Xi(
        `p4`,
        `Copper Watering Can`,
        `Garden`,
        74,
        29,
        12,
        20,
        64,
        4.6,
        88,
        20,
        `A 1.5 litre can with a long brass rose.`,
      ),
      Xi(
        `p5`,
        `Ceramic Planter, Sand`,
        `Garden`,
        38,
        13,
        96,
        30,
        175,
        4.5,
        140,
        40,
        `Matte sand-glaze planter with a drainage saucer.`,
      ),
      Xi(
        `p6`,
        `Waffle Bath Towel`,
        `Bath`,
        42,
        15,
        158,
        50,
        228,
        4.7,
        263,
        190,
        `Turkish cotton waffle weave that dries fast.`,
      ),
      Xi(
        `p7`,
        `Brass Desk Lamp`,
        `Desk`,
        129,
        52,
        18,
        12,
        41,
        4.8,
        57,
        45,
        `Solid brass arm, linen shade, dimmable LED.`,
      ),
      Xi(
        `p8`,
        `Walnut Pen Tray`,
        `Desk`,
        36,
        12,
        74,
        25,
        118,
        4.6,
        92,
        25,
        `Turned from a single block of black walnut.`,
      ),
      Xi(
        `p9`,
        `Enamel Colander`,
        `Kitchen`,
        34,
        12,
        0,
        20,
        96,
        4.4,
        77,
        0,
        `Speckled enamel over steel, with two loop handles.`,
      ),
      Xi(
        `p10`,
        `Glass Carafe, 1 L`,
        `Table`,
        28,
        9,
        188,
        40,
        204,
        4.7,
        171,
        195,
        `Mouth-blown borosilicate with a cup lid.`,
      ),
      Xi(
        `p11`,
        `Wool Throw, Moss`,
        `Bath`,
        118,
        46,
        33,
        15,
        52,
        4.9,
        66,
        110,
        `Lambswool throw with a fringed edge.`,
      ),
      Xi(
        `p12`,
        `Beeswax Candles, pair`,
        `Table`,
        22,
        6.5,
        260,
        80,
        412,
        4.8,
        388,
        48,
        `Hand-dipped pure beeswax, 25 cm tapers.`,
      ),
      Xi(
        `p13`,
        `Cast Iron Skillet, 10"`,
        `Kitchen`,
        64,
        24,
        7,
        15,
        88,
        4.9,
        214,
        230,
        `Pre-seasoned, pours from both sides.`,
      ),
      Xi(
        `p14`,
        `Rattan Storage Basket`,
        `Bath`,
        46,
        17,
        61,
        20,
        97,
        4.5,
        81,
        38,
        `Hand-woven rattan with leather handles.`,
      ),
      Xi(
        `p15`,
        `Pour-over Kettle`,
        `Kitchen`,
        89,
        34,
        39,
        15,
        73,
        4.7,
        103,
        200,
        `Gooseneck spout, 0.9 litre, matte black.`,
      ),
      Xi(
        `p16`,
        `Cotton Bath Mat`,
        `Bath`,
        29,
        9.5,
        0,
        30,
        0,
        0,
        0,
        170,
        `Tufted organic cotton, 50 × 80 cm. Launching in spring.`,
        `draft`,
      ),
    ],
    customers: [],
    orders: [],
    threads: [],
    campaigns: [],
    automations: [],
    integrations: [],
    boards: [],
    notices: [],
    settings: Ta(),
  },
  Zi = (e) => $.products.find((t) => t.id === e),
  Qi = (e) => (e.price - e.cost) / e.price,
  $i = (e) => (e.stock <= 0 ? `out` : e.stock <= e.reorderAt ? `low` : `ok`);
function ea(e) {
  let t = e
    .normalize(`NFD`)
    .replace(/[\u0300-\u036f]/g, ``)
    .toLowerCase()
    .replace(/&/g, ``)
    .split(/\s+/)
    .filter(Boolean);
  return `${t[0]}.${t[t.length - 1]}@${zi([`mail.com`, `inbox.co`, `post.net`, `fastmail.fm`])}`;
}
var ta = (e, t, n, r, i, a, o, s = ``) => ({
  id: e,
  name: t,
  city: n,
  tags: r,
  hue: i,
  channel: a,
  note: s,
  email: ea(t),
  phone: `+1 (${200 + Math.floor(Ri() * 700)}) ${100 + Math.floor(Ri() * 899)}-${1e3 + Math.floor(Ri() * 8999)}`,
  joined: Q - o * Ui,
});
$.customers = [
  ta(
    `c1`,
    `Elena Marsh`,
    `Portland, OR`,
    [`vip`, `subscriber`],
    330,
    `online`,
    640,
    `Prefers recycled packaging. Gifts often — offer a gift note.`,
  ),
  ta(`c2`, `Theo Lindqvist`, `Seattle, WA`, [`subscriber`], 200, `online`, 410),
  ta(
    `c3`,
    `Amara Okoye`,
    `Austin, TX`,
    [`vip`],
    25,
    `store`,
    980,
    `Interior designer; buys for client projects.`,
  ),
  ta(
    `c4`,
    `Wren & Field Café`,
    `Denver, CO`,
    [`wholesale`],
    150,
    `online`,
    520,
    `Net-30 terms. Mugs + carafes for two cafés.`,
  ),
  ta(`c5`, `Sofia Bianchi`, `Brooklyn, NY`, [`new`], 181, `online`, 9),
  ta(`c6`, `Marcus Hale`, `Chicago, IL`, [`subscriber`], 215, `store`, 300),
  ta(
    `c7`,
    `Hana Sato`,
    `San Diego, CA`,
    [`vip`, `subscriber`],
    350,
    `online`,
    760,
  ),
  ta(`c8`, `Oliver Grant`, `Boston, MA`, [], 45, `store`, 150),
  ta(`c9`, `Ines Duarte`, `Miami, FL`, [`new`, `subscriber`], 10, `online`, 4),
  ta(`c10`, `Kofi Mensah`, `Atlanta, GA`, [`subscriber`], 170, `online`, 220),
  ta(`c11`, `Greta Novak`, `Minneapolis, MN`, [], 209, `store`, 390),
  ta(
    `c12`,
    `The Linen Room`,
    `Charleston, SC`,
    [`wholesale`, `vip`],
    209,
    `online`,
    860,
    `Boutique stockist. Reorders towels every 6 weeks.`,
  ),
  ta(`c13`, `Ravi Kapoor`, `Phoenix, AZ`, [`new`], 60, `online`, 2),
  ta(`c14`, `Clara Jensen`, `Madison, WI`, [`subscriber`], 190, `store`, 470),
];
var na = (e) => $.customers.find((t) => t.id === e),
  ra = (e) =>
    e
      .replace(/&/g, ``)
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((e) => e[0].toUpperCase())
      .join(``),
  ia = [`pending`, `paid`, `packed`, `shipped`, `delivered`],
  aa = {
    pending: `Pending`,
    paid: `Paid`,
    packed: `Packed`,
    shipped: `Shipped`,
    delivered: `Delivered`,
    refunded: `Refunded`,
    cancelled: `Cancelled`,
  },
  oa = {
    pending: `amber`,
    paid: `blue`,
    packed: `sea`,
    shipped: `blue`,
    delivered: `mint`,
    refunded: `gray`,
    cancelled: `coral`,
  },
  sa = (e) => e.lines.reduce((e, t) => e + t.qty * t.price, 0) + e.shipping,
  ca = (e) => e.lines.reduce((e, t) => e + t.qty, 0);
{
  let e = [
      `pending`,
      `pending`,
      `paid`,
      `paid`,
      `paid`,
      `packed`,
      `packed`,
      `shipped`,
      `shipped`,
      `shipped`,
      `delivered`,
      `delivered`,
      `delivered`,
      `delivered`,
      `delivered`,
      `delivered`,
      `refunded`,
      `cancelled`,
    ],
    t = $.products.filter((e) => e.status === `active`),
    n = 10482;
  for (let r = 0; r < 30; r++) {
    let i = $.customers[Math.floor(Ri() * $.customers.length)],
      a = 1 + Math.floor(Ri() * 3),
      o = [];
    for (let e = 0; e < a; e++) {
      let e = zi(t);
      o.some((t) => t.productId === e.id) ||
        o.push({
          productId: e.id,
          qty: i.tags.includes(`wholesale`)
            ? 6 + Math.floor(Ri() * 18)
            : 1 + Math.floor(Ri() * 2),
          price: e.price,
        });
    }
    let s = r < 3 ? `pending` : zi(r < 6 ? [`paid`, `packed`] : e),
      c = Q - (r * 7.5 + Ri() * 6) * Hi - 20 * Vi,
      l = i.channel === `store` && Ri() > 0.3 ? `store` : `online`,
      u = [{ status: `pending`, at: c, by: `Checkout` }],
      d = s === `refunded` || s === `cancelled` ? `delivered` : s,
      f = ia.indexOf(d);
    for (let e = 1; e <= f; e++)
      u.push({
        status: ia[e],
        at: c + e * (1.5 + Ri() * 9) * Hi,
        by: e === 1 ? `Payment` : zi([`Leo Tanaka`, `Jonah Okafor`]),
      });
    ((s === `refunded` || s === `cancelled`) &&
      u.push({ status: s, at: c + 40 * Hi, by: `Priya Shah` }),
      $.orders.push({
        id: `#${n--}`,
        customerId: i.id,
        lines: o,
        shipping: l === `store` || la(o) > 75 ? 0 : 6.5,
        status: s,
        channel: l,
        payment: zi(
          l === `store`
            ? [`Card`, `Apple Pay`, `Cash`]
            : [`Card`, `Apple Pay`, `PayPal`],
        ),
        placed: c,
        address:
          l === `store`
            ? `Collected in store`
            : `${100 + Math.floor(Ri() * 900)} ${zi([`Alder`, `Birch`, `Cedar`, `Maple`, `Willow`])} St, ${i.city}`,
        history: u.filter((e) => e.at < Q),
        note: ``,
      }));
  }
}
function la(e) {
  return e.reduce((e, t) => e + t.qty * t.price, 0);
}
var ua = (e) => $.orders.find((t) => t.id === e || t.id === `#${e}`),
  da = (e) => $.orders.filter((t) => t.customerId === e),
  fa = {};
$.customers.forEach((e) => {
  fa[e.id] =
    Math.round(
      (e.tags.includes(`wholesale`)
        ? 4200
        : e.tags.includes(`vip`)
          ? 1300
          : 220) *
        (0.6 + Ri()),
    ) * +!e.tags.includes(`new`);
});
var pa = {};
$.customers.forEach((e) => {
  pa[e.id] = e.tags.includes(`new`)
    ? 0
    : Math.round(
        (e.tags.includes(`wholesale`) ? 14 : e.tags.includes(`vip`) ? 11 : 3) *
          (0.6 + Ri()),
      );
});
var ma = (e) => e.status !== `refunded` && e.status !== `cancelled`,
  ha = (e) =>
    (fa[e] ?? 0) +
    da(e)
      .filter(ma)
      .reduce((e, t) => e + sa(t), 0),
  ga = (e) => (pa[e] ?? 0) + da(e).length,
  _a = (e) => da(e).sort((e, t) => t.placed - e.placed)[0],
  va = () =>
    $.orders.filter(
      (e) =>
        e.status === `pending` || e.status === `paid` || e.status === `packed`,
    ),
  ya = (e, t, n, r, i, a, o, s) => ({
    id: e,
    customerId: t,
    subject: n,
    channel: r,
    unread: i,
    starred: !1,
    done: !1,
    orderId: s,
    msgs: o.map(([t, n], r) => ({
      id: `${e}m${r}`,
      from: t,
      text: n,
      at: Q - (a + (o.length - 1 - r) * 26) * Vi,
      by: t === `me` ? `Priya Shah` : void 0,
    })),
  });
$.threads = [
  ya(
    `t1`,
    `c5`,
    `Where is my order?`,
    `chat`,
    !0,
    4,
    [
      [
        `them`,
        `Hi! I ordered the oak serving board on Monday — any idea when it ships?`,
      ],
      [`me`, `Hi Sofia, let me check that for you now.`],
      [`them`, `Thank you! It’s a birthday present for Saturday.`],
    ],
    $.orders[2]?.id,
  ),
  ya(`t2`, `c4`, `Reorder for both cafés`, `email`, !0, 38, [
    [
      `them`,
      `Morning — could we get another 48 Fog mugs and 12 carafes, same terms as last time? We’d need them by the 28th.`,
    ],
  ]),
  ya(`t3`, `c1`, `Gift wrapping question`, `instagram`, !0, 95, [
    [`them`, `Do you gift wrap? Looking at the wool throw for my sister.`],
    [`me`, `We do! Recycled paper and a linen ribbon, free on any order.`],
    [`them`, `Perfect. Can I add a handwritten note too?`],
  ]),
  ya(`t4`, `c12`, `Towel colours for spring`, `email`, !1, 300, [
    [
      `them`,
      `Are the waffle towels coming in sage this spring? Our customers keep asking.`,
    ],
    [`me`, `Sage lands in March — I’ll put 40 aside for you.`],
    [`them`, `Lovely, thank you Priya.`],
  ]),
  ya(`t5`, `c8`, `Skillet seasoning`, `chat`, !1, 1500, [
    [
      `them`,
      `My skillet has a few rusty spots after a dishwasher accident. Is it ruined?`,
    ],
    [
      `me`,
      `Not at all — scrub, dry on the hob and oil it thinly. Here is our 2-minute guide.`,
    ],
  ]),
  ya(`t6`, `c13`, `Discount code not working`, `email`, !1, 2900, [
    [`them`, `WELCOME10 says it has expired?`],
    [
      `me`,
      `Sorry about that! I’ve refunded 10% to your card — it shows in 3 to 5 days.`,
    ],
  ]),
];
var ba = () => $.threads.filter((e) => e.unread && !e.done).length,
  xa = (e) => {
    let t = new Date(Q + e * Ui);
    return (t.setHours(9, 0, 0, 0), t.getTime());
  };
(($.campaigns = [
  {
    id: `e1`,
    name: `Autumn Table`,
    subject: `Set the table for slower evenings`,
    preview: `Oak, linen and beeswax — the pieces our team uses at home.`,
    status: `sent`,
    audience: `All subscribers`,
    recipients: 18420,
    at: xa(-6),
    opens: 0.468,
    clicks: 0.071,
    revenue: 12840,
    hue: 30,
  },
  {
    id: `e2`,
    name: `Restock: Cast Iron`,
    subject: `The skillet is back (for now)`,
    preview: `It sold out in 9 days last time.`,
    status: `sent`,
    audience: `Waitlist · Skillet`,
    recipients: 1260,
    at: xa(-13),
    opens: 0.712,
    clicks: 0.244,
    revenue: 6720,
    hue: 210,
  },
  {
    id: `e3`,
    name: `Welcome series #1`,
    subject: `Welcome to Sarthak Dashboard`,
    preview: `A little about how we make things, and 10% off.`,
    status: `sent`,
    audience: `New subscribers`,
    recipients: 940,
    at: xa(-2),
    opens: 0.583,
    clicks: 0.129,
    revenue: 2310,
    hue: 160,
  },
  {
    id: `e4`,
    name: `Holiday Gift Guide`,
    subject: `Gifts that get used every day`,
    preview: `Twelve presents under $60, wrapped for free.`,
    status: `scheduled`,
    audience: `All subscribers`,
    recipients: 18760,
    at: xa(9),
    opens: 0,
    clicks: 0,
    revenue: 0,
    hue: 350,
  },
  {
    id: `e5`,
    name: `VIP early access`,
    subject: `You get first pick`,
    preview: `The winter collection opens 48 hours early for you.`,
    status: `scheduled`,
    audience: `VIP customers`,
    recipients: 612,
    at: xa(3),
    opens: 0,
    clicks: 0,
    revenue: 0,
    hue: 167,
  },
  {
    id: `e6`,
    name: `Bath edit`,
    subject: `Softer mornings start here`,
    preview: ``,
    status: `draft`,
    audience: `Bath buyers`,
    recipients: 3480,
    at: xa(-1),
    opens: 0,
    clicks: 0,
    revenue: 0,
    hue: 190,
  },
]),
  ($.automations = [
    {
      id: `a1`,
      name: `Abandoned cart`,
      desc: `Remind shoppers who leave items in their cart.`,
      enabled: !0,
      runs30: 1284,
      conv: 0.142,
      edited: Q - 3 * Ui,
      steps: [
        { kind: `trigger`, label: `Cart abandoned for 1 hour` },
        { kind: `email`, label: `Send “Still thinking it over?”` },
        { kind: `wait`, label: `Wait 1 day` },
        { kind: `condition`, label: `Still not purchased?` },
        { kind: `email`, label: `Send 10% code, expires in 48 h` },
      ],
    },
    {
      id: `a2`,
      name: `Welcome series`,
      desc: `Three emails over a week for new subscribers.`,
      enabled: !0,
      runs30: 940,
      conv: 0.087,
      edited: Q - 12 * Ui,
      steps: [
        { kind: `trigger`, label: `Subscribes to the newsletter` },
        { kind: `email`, label: `Send “Welcome to Sarthak Dashboard”` },
        { kind: `wait`, label: `Wait 3 days` },
        { kind: `email`, label: `Send “How we make things”` },
        { kind: `wait`, label: `Wait 4 days` },
        { kind: `email`, label: `Send best-sellers` },
      ],
    },
    {
      id: `a3`,
      name: `Low stock alert`,
      desc: `Ping fulfilment and raise a purchase task.`,
      enabled: !0,
      runs30: 23,
      conv: 1,
      edited: Q - 30 * Ui,
      steps: [
        { kind: `trigger`, label: `Stock falls below reorder point` },
        { kind: `task`, label: `Create task for Leo Tanaka` },
        { kind: `tag`, label: `Tag product “reorder”` },
      ],
    },
    {
      id: `a4`,
      name: `VIP thank-you`,
      desc: `A handwritten-style note after a 5th order.`,
      enabled: !1,
      runs30: 0,
      conv: 0,
      edited: Q - 45 * Ui,
      steps: [
        { kind: `trigger`, label: `Places 5th order` },
        { kind: `tag`, label: `Tag customer “VIP”` },
        { kind: `email`, label: `Send thank-you note` },
      ],
    },
    {
      id: `a5`,
      name: `Review request`,
      desc: `Ask for a review a week after delivery.`,
      enabled: !0,
      runs30: 512,
      conv: 0.214,
      edited: Q - 8 * Ui,
      steps: [
        { kind: `trigger`, label: `Order delivered` },
        { kind: `wait`, label: `Wait 7 days` },
        { kind: `email`, label: `Send “How is it going?”` },
      ],
    },
  ]),
  ($.integrations = [
    {
      id: `i1`,
      name: `Paywave`,
      cat: `Payments`,
      desc: `Card, Apple Pay and PayPal checkout with instant payouts.`,
      connected: !0,
      hue: 210,
      synced: Q - 2 * Vi,
    },
    {
      id: `i2`,
      name: `Stockroom POS`,
      cat: `Point of sale`,
      desc: `Sell in your shops; stock syncs both ways.`,
      connected: !0,
      hue: 160,
      synced: Q - 5 * Vi,
    },
    {
      id: `i3`,
      name: `Parcelpoint`,
      cat: `Shipping`,
      desc: `Print labels, compare carriers, track parcels.`,
      connected: !0,
      hue: 30,
      synced: Q - 18 * Vi,
    },
    {
      id: `i4`,
      name: `Ledgerly`,
      cat: `Accounting`,
      desc: `Push every sale and refund to your books.`,
      connected: !1,
      hue: 140,
    },
    {
      id: `i5`,
      name: `Chatterbox`,
      cat: `Support`,
      desc: `Website chat that lands in your Messages inbox.`,
      connected: !0,
      hue: 181,
      synced: Q - 1 * Vi,
    },
    {
      id: `i6`,
      name: `Pinpoint Ads`,
      cat: `Marketing`,
      desc: `Sync your catalogue to shopping ads.`,
      connected: !1,
      hue: 350,
    },
    {
      id: `i7`,
      name: `Taxwise`,
      cat: `Accounting`,
      desc: `Sales tax for every state, filed for you.`,
      connected: !1,
      hue: 200,
    },
    {
      id: `i8`,
      name: `Inkwell Reviews`,
      cat: `Marketing`,
      desc: `Collect photo reviews and show them on product pages.`,
      connected: !0,
      hue: 45,
      synced: Q - 3 * Hi,
    },
    {
      id: `i9`,
      name: `Courier Plus`,
      cat: `Shipping`,
      desc: `Same-day local delivery from your shops.`,
      connected: !1,
      hue: 10,
    },
    {
      id: `i10`,
      name: `Sheetsync`,
      cat: `Accounting`,
      desc: `A live spreadsheet of orders and stock.`,
      connected: !1,
      hue: 120,
    },
    {
      id: `i11`,
      name: `Bookwell`,
      cat: `Support`,
      desc: `Let customers book in-store styling sessions.`,
      connected: !1,
      hue: 209,
    },
    {
      id: `i12`,
      name: `Postline SMS`,
      cat: `Marketing`,
      desc: `Text shipping updates and back-in-stock alerts.`,
      connected: !1,
      hue: 209,
    },
  ]));
var Sa = (e, t, n, r, i, a, o, s = 0) => ({
  id: e,
  title: t,
  tag: n,
  who: r,
  due: Q + i * Ui,
  done: a,
  total: o,
  comments: s,
});
$.boards = [
  {
    id: `spring-launch`,
    name: `Spring Launch`,
    color: `var(--c1)`,
    desc: `Bath & garden collection — online and both shops.`,
    due: Q + 34 * Ui,
    cols: [
      {
        id: `todo`,
        name: `To do`,
        cards: [
          Sa(
            `k1`,
            `Write product stories for 8 new pieces`,
            `Copy`,
            `AP`,
            12,
            0,
            8,
            2,
          ),
          Sa(`k2`, `Order sage towel colourway`, `Buying`, `JO`, 6, 0, 1),
          Sa(
            `k3`,
            `Plan window display for Main St shop`,
            `Store`,
            `JO`,
            20,
            1,
            5,
            4,
          ),
        ],
      },
      {
        id: `doing`,
        name: `In progress`,
        cards: [
          Sa(`k4`, `Photo shoot: bath mat + throws`, `Photo`, `MR`, 3, 2, 4, 6),
          Sa(`k5`, `Landing page design`, `Design`, `AP`, 9, 3, 6, 3),
        ],
      },
      {
        id: `review`,
        name: `Review`,
        cards: [
          Sa(
            `k6`,
            `Packaging inserts, print proof`,
            `Design`,
            `MR`,
            1,
            3,
            3,
            1,
          ),
        ],
      },
      {
        id: `done`,
        name: `Done`,
        cards: [
          Sa(`k7`, `Confirm launch date with suppliers`, `Ops`, `LT`, -4, 2, 2),
          Sa(`k8`, `Pick hero product`, `Buying`, `MR`, -9, 1, 1, 5),
        ],
      },
    ],
  },
  {
    id: `retail-plan`,
    name: `Retail Plan`,
    color: `var(--c4)`,
    desc: `Q4 plan for the Main St and Harbor shops.`,
    due: Q + 61 * Ui,
    cols: [
      {
        id: `todo`,
        name: `To do`,
        cards: [
          Sa(`r1`, `Hire two seasonal staff`, `Store`, `JO`, 14, 0, 3, 2),
          Sa(`r2`, `Holiday gift-wrap station`, `Store`, `JO`, 25, 0, 4),
        ],
      },
      {
        id: `doing`,
        name: `In progress`,
        cards: [
          Sa(`r3`, `New till layout, Harbor shop`, `Ops`, `LT`, 5, 1, 3, 1),
          Sa(`r4`, `Loyalty card in Stockroom POS`, `Ops`, `MR`, 11, 2, 5, 3),
          Sa(`r5`, `Reorder candles for December`, `Buying`, `LT`, 2, 0, 1),
        ],
      },
      { id: `review`, name: `Review`, cards: [] },
      {
        id: `done`,
        name: `Done`,
        cards: [Sa(`r6`, `Q3 stock count`, `Ops`, `LT`, -12, 4, 4, 2)],
      },
    ],
  },
];
var Ca = (e) => $.boards.find((t) => t.id === e),
  wa = (e) =>
    e.cols
      .filter((e) => e.id !== `done`)
      .reduce((e, t) => e + t.cards.length, 0);
$.notices = [
  {
    id: `n1`,
    ico: `cart`,
    text: `New order ${$.orders[0].id} from ${na($.orders[0].customerId).name}`,
    at: $.orders[0].placed,
    unread: !0,
    href: `#/orders/${$.orders[0].id.slice(1)}`,
  },
  {
    id: `n2`,
    ico: `alert`,
    text: `Enamel Colander is out of stock`,
    at: Q - 3 * Hi,
    unread: !0,
    href: `#/products/p9`,
  },
  {
    id: `n3`,
    ico: `chat`,
    text: `Sofia Bianchi sent you a message`,
    at: Q - 4 * Vi,
    unread: !0,
    href: `#/messages/t1`,
  },
  {
    id: `n4`,
    ico: `mail`,
    text: `“Autumn Table” earned $12,840`,
    at: Q - 2 * Ui,
    unread: !1,
    href: `#/email`,
  },
  {
    id: `n5`,
    ico: `zap`,
    text: `Low stock alert ran 3 times this week`,
    at: Q - 3 * Ui,
    unread: !1,
    href: `#/automations`,
  },
];
function Ta() {
  let e = {
    name: `Mara Reyes`,
    email: `mara@sarthakdashboard.com`,
    store: `Sarthak Dashboard`,
    currency: `USD`,
    timezone: `America/Los_Angeles`,
    notify: { orders: !0, stock: !0, messages: !0, weekly: !0, marketing: !1 },
    plan: `Pro trial`,
  };
  if (Bi) return e;
  try {
    return {
      ...e,
      ...JSON.parse(localStorage.getItem(`corbel:settings`) || `{}`),
    };
  } catch {
    return e;
  }
}
function Ea() {
  if (!Bi)
    try {
      localStorage.setItem(`corbel:settings`, JSON.stringify($.settings));
    } catch {}
  Ii(`settings`);
}
var Da = new Date(Q).getFullYear(),
  Oa = new Date(Q).getMonth(),
  ka = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ],
  Aa = {
    online: {
      cur: [
        11.2, 13.4, 16.8, 14.1, 18.9, 25.4, 21.7, 19.6, 23.8, 26.1, 27.5, 31.2,
      ],
      prev: [
        8.4, 9.9, 12.1, 11.6, 14.2, 18.8, 16.4, 15.1, 17.9, 18.6, 21.3, 26.8,
      ],
    },
    store: {
      cur: [7.6, 8.1, 9.4, 9.9, 10.2, 13.1, 12.6, 11.8, 12.9, 13.4, 14.8, 18.6],
      prev: [6.9, 7.2, 8.8, 8.1, 9.6, 11.4, 10.9, 10.3, 11.2, 11.9, 13.6, 17.4],
    },
  };
function ja(e, t) {
  return e === `all`
    ? Aa.online[t].map((e, n) => +(e + Aa.store[t][n]).toFixed(1))
    : Aa[e][t].slice();
}
var Ma = { all: 71, online: 64, store: 86 },
  Na = [`12 AM – 8 AM`, `8 AM – 12 PM`, `12 PM – 4 PM`, `4 PM – 12 AM`],
  Pa = {
    online: [
      [1800, 1650, 1720, 1900, 2100, 2600, 2400],
      [5200, 4800, 5600, 5100, 4700, 6900, 7400],
      [6100, 5900, 6400, 7200, 6600, 8800, 9100],
      [8900, 8200, 9600, 9100, 7700, 6400, 8300],
    ],
    store: [
      [0, 0, 0, 0, 0, 0, 0],
      [620, 540, 600, 680, 820, 1900, 1500],
      [980, 910, 1040, 1150, 1380, 2600, 2200],
      [740, 690, 810, 880, 1240, 1500, 900],
    ],
  };
function Fa(e) {
  return e === `all`
    ? Pa.online.map((e, t) => e.map((e, n) => e + Pa.store[t][n]))
    : Pa[e].map((e) => e.slice());
}
function Ia(e) {
  return e === `store`
    ? {
        total: 52460,
        delta: 0.031,
        label: `Store footfall`,
        parts: [
          { key: `walk`, label: `Walk-in`, icon: `store`, value: 37250 },
          {
            key: `collect`,
            label: `Click & collect`,
            icon: `box`,
            value: 11020,
          },
          { key: `appt`, label: `Appointments`, icon: `calendar`, value: 4190 },
        ],
      }
    : e === `online`
      ? {
          total: 162400,
          delta: 0.112,
          label: `Website visits`,
          parts: [
            { key: `mobile`, label: `Mobile`, icon: `phone`, value: 103940 },
            { key: `desktop`, label: `Desktop`, icon: `monitor`, value: 47100 },
            { key: `tablet`, label: `Tablet`, icon: `tablet`, value: 11360 },
          ],
        }
      : {
          total: 214860,
          delta: 0.085,
          label: `Total visits`,
          parts: [
            { key: `web`, label: `Website`, icon: `globe`, value: 162400 },
            { key: `walk`, label: `In store`, icon: `store`, value: 41440 },
            {
              key: `collect`,
              label: `Click & collect`,
              icon: `box`,
              value: 11020,
            },
          ],
        };
}
function La(e) {
  let t = ja(e, `cur`),
    n = t[Oa] * 1e3,
    r = t[(Oa + 11) % 12] * 1e3;
  return {
    ...{
      all: {
        active: 48320,
        activeD: 0.142,
        units: 3842,
        unitsD: 0.064,
        conv: 0.048,
        convD: -0.002,
        score: 86,
        scoreD: 3,
        scoreNote: [
          `Ahead of plan`,
          `Both channels beat last month. Online did most of the lifting.`,
        ],
      },
      online: {
        active: 31140,
        activeD: 0.186,
        units: 2316,
        unitsD: 0.098,
        conv: 0.039,
        convD: -0.004,
        score: 91,
        scoreD: 6,
        scoreNote: [
          `Online is carrying the quarter`,
          `Mobile checkout is converting better since the new payment page.`,
        ],
      },
      store: {
        active: 17180,
        activeD: 0.071,
        units: 1526,
        unitsD: 0.022,
        conv: 0.074,
        convD: 0.008,
        score: 74,
        scoreD: -2,
        scoreNote: [
          `Shops slightly behind plan`,
          `Weekday footfall dipped at Harbor. Weekends are still strong.`,
        ],
      },
    }[e],
    revenue: n,
    revenueD: (n - r) / r,
  };
}
var Ra = { n: 1284 };
function za() {
  return (
    (Ra.n = Math.max(
      1110,
      Math.min(1490, Ra.n + Math.round((Ri() - 0.46) * 42)),
    )),
    Ra.n
  );
}
var Ba = (e, t = ``) =>
    `<svg class="ico ${t}" aria-hidden="true"><use href="#i-${e}"/></svg>`,
  Va = new Intl.NumberFormat(`en-US`, { maximumFractionDigits: 0 }),
  Ha = new Intl.NumberFormat(`en-US`, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }),
  Ua = new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: `USD`,
    maximumFractionDigits: 0,
  }),
  Wa = new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: `USD`,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  Ga = (e) => Va.format(Math.round(e)),
  Ka = (e) => Ua.format(Math.round(e)),
  qa = (e) => Wa.format(e),
  Ja = (e) =>
    Math.abs(e) >= 1e3
      ? `$${Ha.format(e / 1e3).replace(/\.0$/, ``)}k`
      : Ua.format(e),
  Ya = (e, t = 1) => `${(e * 100).toFixed(t)}%`,
  Xa = new Intl.RelativeTimeFormat(`en-US`, {
    numeric: `auto`,
    style: `short`,
  });
function Za(e) {
  let t = (e - Date.now()) / 1e3,
    n = Math.abs(t);
  return n < 45
    ? `just now`
    : n < 3600
      ? Xa.format(Math.round(t / 60), `minute`)
      : n < 86400
        ? Xa.format(Math.round(t / 3600), `hour`)
        : n < 86400 * 30
          ? Xa.format(Math.round(t / 86400), `day`)
          : to(e);
}
var Qa = new Intl.DateTimeFormat(`en-US`, { month: `short`, day: `numeric` }),
  $a = new Intl.DateTimeFormat(`en-US`, {
    month: `short`,
    day: `numeric`,
    year: `numeric`,
  }),
  eo = new Intl.DateTimeFormat(`en-US`, { hour: `numeric`, minute: `2-digit` }),
  to = (e, t = !1) => (t ? $a : Qa).format(e),
  no = (e) => eo.format(e),
  ro = (e) => `${Qa.format(e)}, ${eo.format(e)}`,
  io = (e, t, n = ``) =>
    `<span class="av${n ? ` av--${n}` : ``}" style="--h:${t}" aria-hidden="true">${Z(ra(e))}</span>`,
  ao = (e, t, n = 40) =>
    `<span class="thumb" style="--h:${t};--s:${n}px" aria-hidden="true">${Z(ra(e))}</span>`,
  oo = (e, t = `gray`, n = !1) =>
    `<span class="pill pill--${t}${n ? ` pill--plain` : ``}">${Z(e)}</span>`,
  so = (e) => oo(aa[e], oa[e]);
function co(e, t = !1) {
  e = Math.round(e * 1e3) / 1e3;
  let n = e < 0,
    r = t
      ? `${n ? `−` : `+`}${Math.abs(e * 100).toFixed(1)} pt`
      : `${Math.abs(e * 100).toFixed(1)}%`;
  return `<span class="delta${n ? ` is-down` : ``}">${Ba(`arrow-up`, `delta__arrow`)}<span>${r}</span></span>`;
}
function lo(e, t, n = !1) {
  t = Math.round(t * 1e3) / 1e3;
  let r = t < 0;
  e.classList.toggle(`is-down`, r);
  let i = e.querySelector(`span`);
  i &&
    (i.textContent = n
      ? `${r ? `−` : `+`}${Math.abs(t * 100).toFixed(1)} pt`
      : `${Math.abs(t * 100).toFixed(1)}%`);
  let a = e.querySelector(`.delta__arrow`);
  a &&
    q.to(a, {
      rotation: r ? 180 : 0,
      duration: J(0.5),
      ease: `back.out(2)`,
      transformOrigin: `50% 50%`,
    });
}
var uo = (e, t = ``, n = `search`) =>
  `<div class="empty">${Ba(n)}<b>${Z(e)}</b>${t ? `<span>${Z(t)}</span>` : ``}</div>`;
function fo(e, t, n, r = !0) {
  if (!n || !n.offsetWidth) {
    (q.to(e, { opacity: 0, duration: J(0.2), overwrite: `auto` }),
      (e.__lr = void 0));
    return;
  }
  let i = t.scrollWidth,
    a = t.offsetHeight,
    o = n.offsetLeft,
    s = i - (n.offsetLeft + n.offsetWidth),
    c = n.offsetTop,
    l = a - (n.offsetTop + n.offsetHeight),
    u = (e, t) => `inset(${c}px ${t}px ${l}px ${e}px round 999px)`,
    d = e.__lr;
  if (((e.__lr = [o, s]), !r || gi() || !d)) {
    (q.set(e, { clipPath: u(o, s) }),
      q.to(e, {
        opacity: 1,
        duration: d || !r ? 0 : J(0.25),
        overwrite: `auto`,
      }));
    return;
  }
  let f = { l: d[0], r: d[1] },
    p = o > d[0];
  (q.killTweensOf(f),
    q.to(e, { opacity: 1, duration: 0.2, overwrite: `auto` }),
    q.to(f, {
      l: o,
      duration: p ? 0.55 : 0.36,
      ease: p ? `power3.inOut` : `power3.out`,
      onUpdate: () => q.set(e, { clipPath: u(f.l, f.r) }),
    }),
    q.to(f, {
      r: s,
      duration: p ? 0.36 : 0.55,
      ease: p ? `power3.out` : `power3.inOut`,
      onUpdate: () => q.set(e, { clipPath: u(f.l, f.r) }),
    }));
}
function po(e, t, n = 0) {
  let r = X(`button`, e),
    i = e.getAttribute(`role`) === `tablist`,
    a = e.querySelector(`.seg__pill`);
  a ||
    ((a = Object.assign(document.createElement(`span`), {
      className: `seg__pill`,
    })),
    a.setAttribute(`aria-hidden`, `true`),
    e.prepend(a));
  let o = -1,
    s = (e) => {
      let t = r[o];
      !t ||
        !a ||
        ((a.style.width = `${t.offsetWidth}px`),
        q.to(a, {
          x: t.offsetLeft - 3,
          duration: e ? J(0.55) : 0,
          ease: `expo.out`,
          overwrite: !0,
        }));
    },
    c = (e, t = !0) => {
      e !== o &&
        ((o = e),
        r.forEach((t, n) => {
          i
            ? (t.setAttribute(`aria-selected`, String(n === e)),
              (t.tabIndex = n === e ? 0 : -1))
            : t.setAttribute(`aria-pressed`, String(n === e));
        }),
        s(t));
    };
  return (
    r.forEach((e, n) => {
      (i && e.setAttribute(`role`, `tab`),
        (e.type = `button`),
        e.addEventListener(`click`, () => {
          n !== o && (c(n), t(n, e.dataset.value ?? e.textContent ?? ``));
        }),
        i &&
          e.addEventListener(`keydown`, (e) => {
            let t = e.key === `ArrowRight` ? 1 : e.key === `ArrowLeft` ? -1 : 0;
            if (!t) return;
            e.preventDefault();
            let n = (o + t + r.length) % r.length;
            (r[n].focus(), r[n].click());
          }));
    }),
    c(n, !1),
    new ResizeObserver(() => s(!1)).observe(e),
    { set: c, index: () => o }
  );
}
var mo = (e, t, n = !1, r = ``) =>
  `<div class="seg ${r}" ${n ? `role="tablist"` : `role="group"`} aria-label="${Z(t)}">${e.map((e) => `<button type="button" data-value="${Z(e)}">${Z(e)}</button>`).join(``)}</div>`;
function ho(
  e,
  { ico: t = `check`, action: n, onAction: r, ms: i = 3600 } = {},
) {
  let a = Y(`#toasts`),
    o = document.createElement(`div`);
  ((o.className = `toast`),
    (o.innerHTML = `<span class="toast__ico">${Ba(t)}</span><span>${Z(e)}</span>${n ? `<button type="button">${Z(n)}</button>` : ``}`),
    a.append(o));
  let s = () =>
    q.to(o, {
      opacity: 0,
      y: 10,
      scale: 0.97,
      duration: J(0.25),
      ease: `power2.in`,
      onComplete: () => o.remove(),
    });
  (o.querySelector(`button`)?.addEventListener(`click`, () => {
    (r?.(), s());
  }),
    q.fromTo(
      o,
      { opacity: 0, y: 18, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: J(0.55), ease: `back.out(1.8)` },
    ),
    q.delayedCall(i / 1e3, s));
}
var go = () => matchMedia(`(max-width: 560px)`).matches,
  _o = new WeakMap();
function vo(e, t, n) {
  let r = (_o.get(e) ?? 0) + 1;
  (_o.set(e, r),
    e.firstElementChild && q.killTweensOf(e.firstElementChild),
    e.open && e.close(),
    (e.innerHTML = `<div class="${t}__box"${n.wide ? ` data-wide` : ``}>
    <header class="${t}__head"><h2 id="${t}-title">${Z(n.title)}</h2><button class="icon-btn" type="button" data-dismiss aria-label="Close">${Ba(`x`)}</button></header>
    <div class="${t}__body">${n.body}</div>${n.foot ? `<footer class="${t}__foot">${n.foot}</footer>` : ``}</div>`),
    e.setAttribute(`aria-labelledby`, `${t}-title`),
    e.classList.toggle(`is-wide`, !!n.wide));
  let i = e.firstElementChild,
    a = !1,
    o = () => {
      if (a || !e.open) return;
      a = !0;
      let o = () => {
        _o.get(e) === r &&
          (e.close(), q.set(i, { clearProps: `all` }), n.onClose?.());
      };
      q.to(
        i,
        t === `sheet`
          ? {
              xPercent: 100,
              duration: J(0.38),
              ease: `power3.in`,
              onComplete: o,
            }
          : go()
            ? {
                yPercent: 100,
                duration: J(0.32),
                ease: `power3.in`,
                onComplete: o,
              }
            : {
                opacity: 0,
                y: 12,
                scale: 0.97,
                duration: J(0.2),
                ease: `power2.in`,
                onComplete: o,
              },
      );
    };
  return (
    (e.onclick = (t) => {
      (t.target === e || t.target.closest(`[data-dismiss]`)) && o();
    }),
    (e.oncancel = (e) => {
      (e.preventDefault(), o());
    }),
    e.showModal(),
    t === `sheet`
      ? q.fromTo(
          i,
          { xPercent: 100 },
          { xPercent: 0, duration: J(0.6), ease: `expo.out` },
        )
      : go()
        ? q.fromTo(
            i,
            { yPercent: 100 },
            { yPercent: 0, duration: J(0.55), ease: `expo.out` },
          )
        : q.fromTo(
            i,
            { opacity: 0, y: 18, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: J(0.5),
              ease: `back.out(1.5)`,
            },
          ),
    (
      i.querySelector(`[autofocus]`) ?? i.querySelector(`[data-dismiss]`)
    )?.focus(),
    { el: i, close: o }
  );
}
var yo = (e) => vo(Y(`#modal`), `modal`, e),
  bo = (e) => vo(Y(`#sheet`), `sheet`, e);
function xo(e, t, n = `Confirm`, r = !1) {
  return new Promise((i) => {
    let a = !1,
      o = yo({
        title: e,
        body: `<p class="card__sub" style="font-size:14px">${Z(t)}</p>`,
        foot: `<button class="btn" type="button" data-dismiss>Cancel</button><button class="btn ${r ? `btn--danger` : `btn--primary`}" type="button" data-ok autofocus>${Z(n)}</button>`,
        onClose: () => {
          a || i(!1);
        },
      });
    o.el.querySelector(`[data-ok]`).addEventListener(`click`, () => {
      ((a = !0), i(!0), o.close());
    });
  });
}
var So = null;
function Co(e, t) {
  if (So?.el === e) {
    So.close();
    return;
  }
  (So?.close(), (e.hidden = !1));
  let n = t.getBoundingClientRect(),
    r = e.offsetWidth;
  ((e.style.top = `${n.bottom + 8}px`),
    (e.style.left = `${Math.max(12, Math.min(innerWidth - r - 12, n.right - r))}px`),
    t.setAttribute(`aria-expanded`, `true`),
    q.fromTo(
      e,
      { opacity: 0, y: -8, scale: 0.97, transformOrigin: `90% 0%` },
      { opacity: 1, y: 0, scale: 1, duration: J(0.4), ease: `back.out(1.6)` },
    ));
  let i = (n) => {
      !e.contains(n.target) && !t.contains(n.target) && o();
    },
    a = (e) => {
      e.key === `Escape` && (o(), t.focus());
    },
    o = () => {
      So?.el === e &&
        ((So = null),
        t.setAttribute(`aria-expanded`, `false`),
        document.removeEventListener(`pointerdown`, i),
        document.removeEventListener(`keydown`, a),
        q.to(e, {
          opacity: 0,
          y: -6,
          duration: J(0.18),
          ease: `power2.in`,
          onComplete: () => {
            e.hidden = !0;
          },
        }));
    };
  (document.addEventListener(`pointerdown`, i),
    document.addEventListener(`keydown`, a),
    (So = { el: e, btn: t, close: o }));
}
var wo = () => So?.close();
function To(e, t, n = `text/csv`) {
  let r = URL.createObjectURL(new Blob([t], { type: n })),
    i = Object.assign(document.createElement(`a`), { href: r, download: e });
  (document.body.append(i),
    i.click(),
    i.remove(),
    setTimeout(() => URL.revokeObjectURL(r), 1e3));
}
var Eo = (e) =>
  e.map((e) =>
    e
      .map((e) =>
        /[",\n]/.test(String(e)) ? `"${String(e).replace(/"/g, `""`)}"` : e,
      )
      .join(`,`),
  ).join(`
`);
function Do(e, { y: t = 8, stagger: n = 0.025 } = {}) {
  gi() ||
    !e.length ||
    q.fromTo(
      e.slice(0, 24),
      { opacity: 0, y: t },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: `power3.out`,
        stagger: n,
        clearProps: `transform,opacity`,
      },
    );
}
var Oo = ``;
function ko(e, t = !0) {
  if (((document.title = `${e} · Sarthak Dashboard`), e === Oo)) return;
  Oo = e;
  let n = Y(`#page-title`);
  t ? bi(n, e) : ((n.textContent = e), n.removeAttribute(`aria-label`));
}
var Ao = `modulepreload`,
  jo = function (e) {
    return `./` + e;
  },
  Mo = {},
  No = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      r = o(
        t.map((t) => {
          if (((t = jo(t, n)), t in Mo)) return;
          Mo[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : Ao),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              (o.addEventListener(`load`, e),
                o.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Po = {
    dashboard: `Dashboard`,
    products: `Products`,
    orders: `Orders`,
    customers: `Customers`,
    messages: `Messages`,
    email: `Email`,
    automations: `Automations`,
    analytics: `Analytics`,
    integrations: `Integrations`,
    workspace: `Workspace`,
    help: `Help center`,
    feedback: `Feedback`,
    settings: `Settings`,
  },
  Fo = {
    dashboard: `grid`,
    products: `box`,
    orders: `cart`,
    customers: `users`,
    messages: `chat`,
    email: `mail`,
    automations: `zap`,
    analytics: `chart`,
    integrations: `plug`,
    workspace: `calendar`,
    help: `help`,
    feedback: `feedback`,
    settings: `gear`,
  },
  Io = {
    dashboard: () =>
      No(() => import(`./dashboard-CKi1od-B.js`), __vite__mapDeps([0, 1])),
    products: () =>
      No(() => import(`./products-DbFUUs6i.js`), __vite__mapDeps([2, 3])),
    orders: () =>
      No(() => import(`./orders-D85_2bBq.js`), __vite__mapDeps([4, 5])),
    customers: () =>
      No(() => import(`./customers-OZKdRnn6.js`), __vite__mapDeps([6, 7])),
    messages: () =>
      No(() => import(`./messages-CIp8YCJG.js`), __vite__mapDeps([8, 9])),
    email: () =>
      No(() => import(`./email-l_3iO-B4.js`), __vite__mapDeps([10, 11])),
    automations: () =>
      No(() => import(`./automations-DCjBvmRr.js`), __vite__mapDeps([12, 13])),
    analytics: () =>
      No(() => import(`./analytics-Cmn8URPr.js`), __vite__mapDeps([14, 15])),
    integrations: () =>
      No(() => import(`./integrations-CUGSezJh.js`), __vite__mapDeps([16, 17])),
    workspace: () =>
      No(() => import(`./workspace-D4Bm8VGz.js`), __vite__mapDeps([18, 19])),
    help: () =>
      No(() => import(`./help-C5w_teXF.js`), __vite__mapDeps([20, 21])),
    feedback: () =>
      No(() => import(`./feedback-C0CAlBgx.js`), __vite__mapDeps([22, 23])),
    settings: () =>
      No(() => import(`./settings-BwIdA_fS.js`), __vite__mapDeps([24, 25])),
  },
  Lo = Object.keys(Io);
function Ro(e) {
  let [t, ...n] = e
    .replace(/^#\/?/, ``)
    .split(`/`)
    .filter(Boolean)
    .map(decodeURIComponent);
  return t === `workspace` && !n.length
    ? { name: `workspace`, params: [$.boards[0].id] }
    : Lo.includes(t)
      ? { name: t, params: n }
      : { name: `dashboard`, params: [] };
}
var zo = Y(`.tabs__track`),
  Bo = Y(`.tabs__pill`, zo),
  Vo = {
    feedback: `customers`,
    email: `messages`,
    integrations: `automations`,
  },
  Ho = (e) => Vo[e] ?? e;
function Uo() {
  Bo.innerHTML = X(`.tab`, zo)
    .map((e) => `<span>${e.innerHTML}</span>`)
    .join(``);
}
var Wo = () => vi(`.tab[aria-current]`, zo);
function Go(e, t, n = !0) {
  let r = Ho(e);
  (X(`.tab`, zo).forEach((t) =>
    t.dataset.route === r
      ? t.setAttribute(`aria-current`, r === e ? `page` : `true`)
      : t.removeAttribute(`aria-current`),
  ),
    X(`.dock__btn[data-route]`).forEach((t) =>
      t.dataset.route === e
        ? t.setAttribute(`aria-current`, `page`)
        : t.removeAttribute(`aria-current`),
    ));
  let i = Wo();
  if ((fo(Bo, zo, i, n), i)) {
    let e = zo.parentElement,
      t = i.offsetLeft - 24,
      n = i.offsetLeft + i.offsetWidth + 24;
    (t < e.scrollLeft || n > e.scrollLeft + e.clientWidth) &&
      e.scrollTo({ left: t, behavior: gi() ? `auto` : `smooth` });
  }
  Zo(e, t, n);
}
(new ResizeObserver(() => fo(Bo, zo, Wo(), !1)).observe(zo),
  document.fonts?.ready.then(() => fo(Bo, zo, Wo(), !1)));
var Ko = Y(`.subtabs`),
  qo = Y(`.subtabs__track`, Ko),
  Jo = Y(`.subtabs__pill`, Ko);
function Yo(e) {
  let t = e === `workspace` ? `workspace` : Ho(e),
    n = (e, t, n) => ({ key: e, href: `#/${e}`, label: t, count: n });
  return t === `customers`
    ? {
        group: t,
        items: [n(`customers`, `Customers`), n(`feedback`, `Feedback`)],
      }
    : t === `messages`
      ? {
          group: t,
          items: [n(`messages`, `Inbox`, `messages`), n(`email`, `Email`)],
        }
      : t === `automations`
        ? {
            group: t,
            items: [
              n(`automations`, `Automations`),
              n(`integrations`, `Integrations`),
            ],
          }
        : t === `workspace`
          ? {
              group: t,
              items: $.boards.map((e) =>
                n(`workspace/${e.id}`, e.name, `ws-${e.id}`),
              ),
            }
          : null;
}
var Xo = ``;
function Zo(e, t, n) {
  let r = Yo(e);
  if (!r) {
    ((Ko.hidden = !0), (Xo = ``));
    return;
  }
  let i = r.group !== Xo;
  i &&
    ((Xo = r.group),
    X(`.subtab`, qo).forEach((e) => e.remove()),
    qo.insertAdjacentHTML(
      `beforeend`,
      r.items
        .map(
          (e) =>
            `<a class="subtab" href="${e.href}" data-key="${Z(e.key)}">${Z(e.label)}${e.count ? `<span class="tab__count" data-count="${e.count}"></span>` : ``}</a>`,
        )
        .join(``),
    ),
    (Ko.hidden = !1),
    q.set(Jo, { opacity: 0 }),
    Qo());
  let a = e === `workspace` ? `workspace/${t[0]}` : e;
  (X(`.subtab`, qo).forEach((e) =>
    e.dataset.key === a
      ? e.setAttribute(`aria-current`, `page`)
      : e.removeAttribute(`aria-current`),
  ),
    fo(Jo, qo, vi(`.subtab[aria-current]`, qo), n && !i),
    i &&
      n &&
      !gi() &&
      q.fromTo(
        Ko,
        { opacity: 0, x: -12 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: `expo.out`,
          clearProps: `transform,opacity`,
        },
      ));
}
new ResizeObserver(() =>
  fo(Jo, qo, vi(`.subtab[aria-current]`, qo), !1),
).observe(qo);
function Qo() {
  let e = (e, t) =>
    X(`[data-count="${e}"]`).forEach((e) => {
      e.textContent = t ? String(t) : ``;
    });
  (e(`orders`, va().length),
    e(`messages`, ba()),
    $.boards.forEach((t) => e(`ws-${t.id}`, wa(t))),
    e(
      `workspace`,
      $.boards.reduce((e, t) => e + wa(t), 0),
    ),
    Uo());
}
(Fi(`orders`, Qo), Fi(`messages`, Qo), Fi(`boards`, Qo), Qo());
var $o = new Map(),
  es = null,
  ts = 0,
  ns = Y(`#page-title`);
async function rs(e = !1) {
  let { name: t, params: n } = Ro(location.hash),
    r = ++ts;
  wo();
  let i = Y(`[data-view="${t}"]`);
  if (es?.name === t) {
    (Go(t, n),
      es.page.enter({ params: n, first: !1, same: !0 }),
      is(es.page, n, !0));
    return;
  }
  let a = $o.get(t);
  if (!a) {
    try {
      a = (await Io[t]()).page;
    } catch (e) {
      (console.error(e),
        ho(`${Po[t]} couldn’t load. Check your connection and try again.`, {
          ico: `alert`,
        }));
      return;
    }
    if (r !== ts) return;
    (a.mount(i), $o.set(t, a));
  }
  if (r !== ts) return;
  let o = i.dataset.entered !== `1`,
    s = es;
  ((es = { name: t, page: a }),
    s?.page.leave?.(),
    Go(t, n, !e),
    (document.documentElement.dataset.route = t));
  let c = () => {
      (X(`.view`).forEach((e) => {
        e.hidden = e !== i;
      }),
        window.scrollTo({ top: 0 }),
        is(a, n, !e),
        a.enter({ params: n, first: o, same: !1 }),
        (i.dataset.entered = `1`),
        e || ns.focus({ preventScroll: !0 }));
    },
    l = s ? Y(`[data-view="${s.name}"]`) : null;
  l && l !== i && !gi()
    ? q.to(l, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: `power2.in`,
        onComplete: () => {
          (q.set(l, { clearProps: `opacity,transform` }), r === ts && c());
        },
      })
    : c();
}
function is(e, t, n) {
  ko(typeof e.title == `function` ? e.title(t) : e.title, n);
}
window.addEventListener(`hashchange`, () => rs());
var as = Y(`#finder`),
  os = Y(`#finder-q`),
  ss = Y(`#finder-list`),
  cs = [],
  ls = 0;
function us(e) {
  let t = e.trim().toLowerCase(),
    n = [],
    r = (e) => `<span class="lead">${Ba(e)}</span>`;
  if (
    ([
      ...Lo.filter((e) => e !== `workspace`).map((e) => ({
        label: Po[e],
        href: `#/${e}`,
        ico: Fo[e],
      })),
      ...$.boards.map((e) => ({
        label: e.name,
        href: `#/workspace/${e.id}`,
        ico: `calendar`,
      })),
    ]
      .filter((e) => !t || e.label.toLowerCase().includes(t))
      .slice(0, t ? 6 : 5)
      .forEach((e) =>
        n.push({
          group: `Pages`,
          label: e.label,
          meta: `Go to page`,
          href: e.href,
          lead: r(e.ico),
        }),
      ),
    !t)
  )
    return n;
  $.products
    .filter((e) => `${e.name} ${e.sku} ${e.category}`.toLowerCase().includes(t))
    .slice(0, 5)
    .forEach((e) =>
      n.push({
        group: `Products`,
        label: e.name,
        meta: `${Ka(e.price)}, ${e.stock} in stock`,
        href: `#/products/${e.id}`,
        lead: r(`box`),
      }),
    );
  let i = t.replace(/^#/, ``);
  return (
    $.orders
      .filter(
        (e) =>
          e.id.slice(1).includes(i) ||
          (na(e.customerId)?.name ?? ``).toLowerCase().includes(t),
      )
      .slice(0, 5)
      .forEach((e) =>
        n.push({
          group: `Orders`,
          label: `${e.id} ${na(e.customerId)?.name ?? ``}`,
          meta: `${aa[e.status]}, ${Ka(sa(e))}`,
          href: `#/orders/${e.id.slice(1)}`,
          lead: r(`cart`),
        }),
      ),
    $.customers
      .filter((e) => `${e.name} ${e.email} ${e.city}`.toLowerCase().includes(t))
      .slice(0, 5)
      .forEach((e) =>
        n.push({
          group: `Customers`,
          label: e.name,
          meta: e.city,
          href: `#/customers/${e.id}`,
          lead: r(`users`),
        }),
      ),
    n
  );
}
function ds() {
  ((cs = us(os.value)), (ls = Math.min(ls, Math.max(0, cs.length - 1))));
  let e = ``;
  ((ss.innerHTML = cs.length
    ? cs
        .map(
          (t, n) =>
            `${t.group === e ? `` : `<li class="finder__group" role="presentation">${Z((e = t.group))}</li>`}<li class="finder__hit" role="option" id="hit-${n}" data-i="${n}" aria-selected="${n === ls}">${t.lead}<b>${Z(t.label)}</b><small>${Z(t.meta)}</small></li>`,
        )
        .join(``)
    : `<li class="empty" role="presentation"><b>No matches</b><span>Try a product, an order number or a name.</span></li>`),
    os.setAttribute(`aria-activedescendant`, cs.length ? `hit-${ls}` : ``));
}
function fs(e) {
  cs.length &&
    ((ls = (ls + e + cs.length) % cs.length),
    X(`.finder__hit`, ss).forEach((e) =>
      e.setAttribute(`aria-selected`, String(Number(e.dataset.i) === ls)),
    ),
    vi(`#hit-${ls}`)?.scrollIntoView({ block: `nearest` }),
    os.setAttribute(`aria-activedescendant`, `hit-${ls}`));
}
function ps(e) {
  let t = cs[e];
  t && (hs(), (location.hash = t.href));
}
function ms() {
  as.open ||
    (wo(),
    (os.value = ``),
    (ls = 0),
    ds(),
    as.showModal(),
    os.focus(),
    q.fromTo(
      `.finder__box`,
      { opacity: 0, y: -14, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: J(0.45), ease: `back.out(1.6)` },
    ),
    Si(X(`.finder__hit`, ss), { y: 6, stagger: 0.02 }));
}
function hs() {
  as.open &&
    q.to(`.finder__box`, {
      opacity: 0,
      y: -8,
      scale: 0.98,
      duration: J(0.16),
      ease: `power2.in`,
      onComplete: () => {
        (as.close(), q.set(`.finder__box`, { clearProps: `all` }));
      },
    });
}
(os.addEventListener(`input`, () => {
  ((ls = 0), ds());
}),
  os.addEventListener(`keydown`, (e) => {
    e.key === `ArrowDown`
      ? (e.preventDefault(), fs(1))
      : e.key === `ArrowUp`
        ? (e.preventDefault(), fs(-1))
        : e.key === `Enter` && (e.preventDefault(), ps(ls));
  }),
  ss.addEventListener(`click`, (e) => {
    let t = e.target.closest(`.finder__hit`);
    t && ps(Number(t.dataset.i));
  }),
  ss.addEventListener(`pointermove`, (e) => {
    let t = e.target.closest(`.finder__hit`);
    t && Number(t.dataset.i) !== ls && fs(Number(t.dataset.i) - ls);
  }),
  as.addEventListener(`cancel`, (e) => {
    (e.preventDefault(), hs());
  }),
  as.addEventListener(`click`, (e) => {
    e.target === as && hs();
  }),
  Y(`#open-finder`).addEventListener(`click`, ms),
  document.addEventListener(`keydown`, (e) => {
    (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === `k`
      ? (e.preventDefault(), as.open ? hs() : ms())
      : e.key === `/` &&
        !e.target.closest(`input, textarea, select, [contenteditable]`) &&
        !document.querySelector(`dialog[open]`) &&
        (e.preventDefault(), ms());
  }));
var gs = Y(`#bell-btn`),
  _s = Y(`#bell-pop`),
  vs = Y(`#bell-list`);
function ys() {
  vs.innerHTML = $.notices
    .map(
      (
        e,
      ) => `<li class="${e.unread ? `is-unread` : ``}"><span class="n-ico">${Ba(e.ico)}</span>
    <a href="${e.href}" data-n="${e.id}"><p>${Z(e.text)}</p><small>${Za(e.at)}</small></a></li>`,
    )
    .join(``);
  let e = $.notices.filter((e) => e.unread).length;
  ((Y(`.bell__dot`).hidden = !e),
    gs.setAttribute(
      `aria-label`,
      e ? `Notifications, ${e} unread` : `Notifications`,
    ));
}
(gs.addEventListener(`click`, () => {
  (ki(gs),
    ys(),
    Co(_s, gs),
    _s.hidden || Si(X(`li`, vs), { y: 8, stagger: 0.04, delay: 0.05 }));
}),
  vs.addEventListener(`click`, (e) => {
    let t = e.target.closest(`[data-n]`),
      n = t && $.notices.find((e) => e.id === t.dataset.n);
    n && ((n.unread = !1), Ii(`notices`), wo());
  }),
  Y(`#read-all`).addEventListener(`click`, () => {
    ($.notices.forEach((e) => (e.unread = !1)), Ii(`notices`), ys());
  }),
  Fi(`notices`, ys),
  ys());
var bs = Y(`#theme-btn`);
function xs() {
  vi(`meta[name="theme-color"]`)?.setAttribute(
    `content`,
    getComputedStyle(document.documentElement).getPropertyValue(`--bg`).trim(),
  );
}
new MutationObserver(xs).observe(document.documentElement, {
  attributes: !0,
  attributeFilter: [`data-palette`],
});
function Ss() {
  let e = document.documentElement.dataset.theme === `dark`;
  (bs.setAttribute(
    `aria-label`,
    e ? `Switch to light theme` : `Switch to dark theme`,
  ),
    Y(`use`, bs).setAttribute(`href`, e ? `#i-sun` : `#i-moon`),
    xs());
}
(bs.addEventListener(`click`, () => {
  let e = document.documentElement.dataset.theme === `dark` ? `light` : `dark`,
    t = () => {
      document.documentElement.dataset.theme = e;
      try {
        localStorage.setItem(`corbel:theme`, JSON.stringify(e));
      } catch {}
      Ss();
    },
    n = document;
  if (!n.startViewTransition || gi()) {
    t();
    return;
  }
  let r = bs.getBoundingClientRect(),
    i = r.left + r.width / 2,
    a = r.top + r.height / 2,
    o = Math.hypot(Math.max(i, innerWidth - i), Math.max(a, innerHeight - a));
  (n.startViewTransition(t).ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${i}px ${a}px)`,
          `circle(${o}px at ${i}px ${a}px)`,
        ],
      },
      {
        duration: 620,
        easing: `cubic-bezier(.65,0,.35,1)`,
        pseudoElement: `::view-transition-new(root)`,
      },
    );
  }),
    q.fromTo(
      Y(`svg`, bs),
      { rotation: -90, scale: 0.6 },
      { rotation: 0, scale: 1, duration: J(0.6), ease: `back.out(2)` },
    ));
}),
  Ss());
var Cs = Y(`#live-n`),
  ws = Y(`#live-sr`),
  Ts = [];
function Es(e) {
  ((Cs.innerHTML = [...e]
    .map((e) =>
      /\d/.test(e)
        ? `<span class="odo"><span class="odo__strip">${`0123456789`
            .split(``)
            .map((e) => `<span>${e}</span>`)
            .join(``)}</span></span>`
        : `<span>${e}</span>`,
    )
    .join(``)),
    (Ts = X(`.odo__strip`, Cs)));
}
function Ds(e, t) {
  let n = e.toLocaleString(`en-US`);
  (Ts.length !== n.replace(/\D/g, ``).length && Es(n),
    [...n.replace(/\D/g, ``)].forEach((e, n) => {
      q.to(Ts[n], {
        yPercent: -Number(e) * 10,
        duration: t ? J(0.9) : 0,
        ease: `expo.out`,
        delay: t ? n * 0.04 : 0,
      });
    }),
    (ws.textContent = `${n} shoppers`));
}
Ds(Ra.n, !1);
var Os = 0;
function ks() {
  Os = window.setTimeout(() => {
    (document.hidden || Ds(za(), !0), ks());
  }, 3200);
}
var As = matchMedia(`(max-width: 1080px)`);
function js() {
  document.documentElement.classList.add(`ready`);
  let e = q.timeline({ defaults: { ease: `expo.out` } });
  if (gi()) {
    (rs(!0), Ns());
    return;
  }
  (e
    .fromTo(
      `.mesh`,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: `power2.out`, clearProps: `opacity` },
      0,
    )
    .add(
      Si([Y(`.brand`), Y(`.tabs`), ...X(`.top__tools > *`)], {
        y: -14,
        stagger: 0.06,
      }),
      0.05,
    )
    .fromTo(
      `.dock`,
      As.matches ? { y: 90, opacity: 0 } : { x: -90, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: `power3.out`,
        clearProps: `transform,opacity`,
      },
      0.1,
    )
    .add(Si(X(`.dock__btn`), { y: 10, stagger: 0.035 }), 0.3)
    .fromTo(
      `.main`,
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: 1.1, clearProps: `transform,opacity` },
      0.05,
    )
    .fromTo(
      `.live`,
      { opacity: 0, y: -8, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: `back.out(2)`,
        clearProps: `transform,opacity`,
      },
      0.4,
    )
    .add(() => {
      rs(!0);
    }, 0.12)
    .add(Ns, 1.6),
    Ms());
}
function Ms() {
  gi() ||
    X(`.mesh i`).forEach((e, t) =>
      q.to(e, {
        x: [60, -50, 40][t],
        y: [40, -60, 50][t],
        scale: [1.08, 0.94, 1.1][t],
        duration: 14 + t * 4,
        ease: `sine.inOut`,
        yoyo: !0,
        repeat: -1,
      }),
    );
}
function Ns() {
  ((Ai.v = !0), ji(), ks());
}
var Ps = !1,
  Fs = () => {
    Ps || ((Ps = !0), js());
  };
(Bi
  ? (q.globalTimeline.pause(),
    (window.SARTHAK = window.CORBEL = {
      enter() {
        (q.globalTimeline.resume(), Fs());
      },
      drive(e) {
        let t = q.ticker.time,
          n = e();
        (q.ticker.remove(q.updateRoot),
          q.ticker.add(() => q.updateRoot(t + e() - n)));
      },
      set speed(e) {
        q.globalTimeline.timeScale(e);
      },
      get speed() {
        return q.globalTimeline.timeScale();
      },
      get route() {
        return es?.name ?? ``;
      },
    }))
  : document.readyState === `loading`
    ? document.addEventListener(`DOMContentLoaded`, Fs)
    : Fs(),
  window.addEventListener(`pagehide`, () => clearTimeout(Os)));
function Is() {
  let e = $.settings.plan === `Plus`;
  ((Y(`.brand__txt b`).textContent = $.settings.store),
    (Y(`.brand__txt small`).textContent = e
      ? `Sarthak Plus`
      : `Pro trial, 9 days left`));
  let t = Y(`.dock__upgrade`);
  (t.setAttribute(
    `aria-label`,
    e
      ? `Forecasting is on: your plan`
      : `Unlock forecasting: upgrade to Sarthak Plus`,
  ),
    (Y(`.dock__tip`, t).textContent = e
      ? `You’re on Sarthak Plus`
      : `Upgrade to Sarthak Plus`));
}
(Fi(`settings`, Is), Is());
export {
  Ji as $,
  Yi as A,
  q as At,
  aa as B,
  po as C,
  Ti as Ct,
  ao as D,
  gi as Dt,
  so as E,
  Ci as Et,
  Vi as F,
  na as G,
  Da as H,
  Oa as I,
  Fa as J,
  ga as K,
  ka as L,
  Na as M,
  Hi as N,
  ho as O,
  Ni as Ot,
  Ki as P,
  Qi as Q,
  Q as R,
  mo as S,
  _i as St,
  bo as T,
  xi as Tt,
  Ca as U,
  qi as V,
  Ii as W,
  La as X,
  ra as Y,
  _a as Z,
  Ya as _,
  Oi as _t,
  co as a,
  da as at,
  Do as b,
  Z as bt,
  to as c,
  Ea as ct,
  Ba as d,
  Gi as dt,
  Fi as et,
  yo as f,
  Ia as ft,
  Ga as g,
  wi as gt,
  Ja as h,
  vi as ht,
  Eo as i,
  sa as it,
  Ui as j,
  Ma as k,
  ki as kt,
  ro as l,
  $ as lt,
  qa as m,
  X as mt,
  wo as n,
  ua as nt,
  To as o,
  Zi as ot,
  Ka as p,
  Y as pt,
  ha as q,
  xo as r,
  ca as rt,
  uo as s,
  ja as st,
  io as t,
  va as tt,
  no as u,
  $i as ut,
  oo as v,
  Ei as vt,
  lo as w,
  ji as wt,
  Za as x,
  Si as xt,
  Co as y,
  J as yt,
  ia as z,
};
