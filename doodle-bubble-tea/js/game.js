const assetsPath = "/doodle-bubble-tea/assets/";
const autoStart = true;
const forceMobile = true;
const showSearchAndShare = false;

window.senty = {};
window.senty.doodle = {};

window.senty || (window.senty = {});
senty.doodle || (senty.doodle = {});
senty.doodle.id = "253312689";
senty.doodle.url = senty.doodle.url || "";
senty.doodle.alt = "Automatically Replaced Alt Text JS";
senty.doodle.share = "Automatically Replaced Share Text JS";
senty.doodle.shortlink = "";
senty.doodle.facebook_link = "";
senty.doodle.twitter_link = "";
senty.doodle.copy_link = "";
senty.doodle.large_image = "";
senty.doodle.msgs = {
  "Automatically Replaced Translations": "Translations",
};
senty.doodle.doodle_args = {};

(function () {
  "use strict";
  var aa =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ba(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("a");
  }
  var ca = ba(this);
  function da(a, b) {
    if (b)
      a: {
        var c = ca;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && aa(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  function ea(a) {
    function b(d) {
      return a.next(d);
    }
    function c(d) {
      return a.throw(d);
    }
    return new Promise(function (d, e) {
      function f(g) {
        g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
      }
      f(a.next());
    });
  }
  function k(a) {
    return ea(a());
  }
  function fa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  }
  da("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return fa(this, function (b, c) {
            return c;
          });
        };
  });
  da("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  da("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  da("Promise.prototype.finally", function (a) {
    return a
      ? a
      : function (b) {
          return this.then(
            function (c) {
              return Promise.resolve(b()).then(function () {
                return c;
              });
            },
            function (c) {
              return Promise.resolve(b()).then(function () {
                throw c;
              });
            },
          );
        };
  });
  var ha = ha || {},
    l = this || self;
  function ia(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function ja(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ka(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function la(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? (la = ja) : (la = ka);
    return la.apply(null, arguments);
  }
  function na(a, b) {
    a = a.split(".");
    var c = l;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b ? (c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {})) : (c[d] = b);
  }
  function oa(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.jc = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Jc = function (d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  function pa(a) {
    return a;
  }
  var qa;
  function ra(a, b) {
    a.ha || (a.j(), (a.ha = !0));
    a.i() ? a.U || (a.s(), (a.U = !0)) : a.Ga(b);
  }
  var sa = class {
      constructor() {
        this.v = this.U = this.ha = !1;
      }
      cancel() {
        this.v = !0;
      }
      i() {
        return this.v;
      }
      j() {}
      Ga() {}
      s() {}
    },
    ta = class extends sa {
      constructor(a, b, c) {
        super();
        this.T = a;
        this.ka = b;
        this.H = c;
        this.o = !1;
      }
      j() {
        super.j();
        this.T();
      }
      Ga(a) {
        super.Ga(a);
        this.ka(a);
      }
      s() {
        super.s();
        this.H();
      }
      i() {
        return this.o;
      }
    },
    ua = class extends sa {
      constructor(a) {
        super();
        this.o = a;
      }
      j() {
        super.j();
        this.action = this.o();
      }
      Ga(a) {
        let b;
        null == (b = this.action) || ra(b, a);
      }
      i() {
        return super.i() || (void 0 !== this.action && this.action.i());
      }
    },
    n = class extends ta {
      constructor(a) {
        super(
          () => {},
          () => {},
          a,
        );
        this.o = !0;
      }
    },
    va = class extends ta {
      constructor(a, b) {
        super(
          () => {},
          (c) => {
            this.u(c);
            this.O() && (this.o = !0);
          },
          () => {},
        );
        this.u = a;
        this.O = b;
      }
    },
    wa = class extends va {
      constructor(a) {
        super(() => {}, a);
      }
    },
    p = class extends sa {
      constructor(a) {
        super();
        this.u = a;
        this.o = 0;
      }
      Ga(a) {
        this.o += a;
      }
      i() {
        return super.i() || this.o >= this.u;
      }
    },
    q = class extends sa {
      constructor(a) {
        super();
        this.actions = a;
        this.o = 0;
      }
      push(a) {
        this.actions.push(a);
      }
      i() {
        return super.i() || this.o >= this.actions.length;
      }
      Ga(a) {
        ra(this.actions[this.o], a);
        this.actions[this.o].i() && this.o++;
      }
    },
    r = class extends sa {
      constructor(a) {
        super();
        this.actions = a;
      }
      i() {
        if (super.i()) return !0;
        for (const a of this.actions) if (!a.i()) return !1;
        return !0;
      }
      Ga(a) {
        for (const b of this.actions) ra(b, a);
      }
    };
  function xa(a) {
    if (!a.s) {
      a.s = !0;
      for (const b of a.u) b();
    }
  }
  class ya {
    constructor(a) {
      this.j = a;
      this.s = !1;
      this.u = [];
    }
    o() {}
  }
  const za = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  function Aa() {
    this.O = this.O;
  }
  Aa.prototype.O = !1;
  function Ba(a, b) {
    this.type = a;
    this.i = this.target = b;
    this.defaultPrevented = !1;
  }
  Ba.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var Ca = (function () {
    if (!l.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      l.addEventListener("test", () => {}, b), l.removeEventListener("test", () => {}, b);
    } catch (c) {}
    return a;
  })();
  var Da = /&/g,
    Ea = /</g,
    Fa = />/g,
    Ga = /"/g,
    Ha = /'/g,
    Ia = /\x00/g,
    Ja = /[\x00&<>"']/;
  function Ka() {
    var a = l.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  function La(a) {
    return -1 != Ka().indexOf(a);
  }
  function Ma(a) {
    Ma[" "](a);
    return a;
  }
  Ma[" "] = function () {};
  var Na = La("Trident") || La("MSIE"),
    Oa = La("Gecko") && !(-1 != Ka().toLowerCase().indexOf("webkit") && !La("Edge")) && !(La("Trident") || La("MSIE")) && !La("Edge");
  function Pa(a, b) {
    Ba.call(this, a ? a.type : "");
    this.relatedTarget = this.i = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.j = null;
    if (a) {
      var c = (this.type = a.type),
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.i = b;
      if ((b = a.relatedTarget)) {
        if (Oa) {
          a: {
            try {
              Ma(b.nodeName);
              var e = !0;
              break a;
            } catch (f) {}
            e = !1;
          }
          e || (b = null);
        }
      } else "mouseover" == c ? (b = a.fromElement) : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d
        ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
          (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
          (this.screenX = d.screenX || 0),
          (this.screenY = d.screenY || 0))
        : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
          (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
          (this.screenX = a.screenX || 0),
          (this.screenY = a.screenY || 0));
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Qa[a.pointerType] || "";
      this.state = a.state;
      this.j = a;
      a.defaultPrevented && Pa.jc.preventDefault.call(this);
    }
  }
  oa(Pa, Ba);
  var Qa = { 2: "touch", 3: "pen", 4: "mouse" };
  Pa.prototype.preventDefault = function () {
    Pa.jc.preventDefault.call(this);
    var a = this.j;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var Ra = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  function Sa(a) {
    return !(!a || !a[Ra]);
  }
  var Ta = 0;
  function Ua(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Ab = e;
    this.key = ++Ta;
    this.kb = this.vb = !1;
  }
  function Va(a) {
    a.kb = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Ab = null;
  }
  const Wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function Xa(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (let f = 0; f < Wa.length; f++) (c = Wa[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function Ya(a) {
    this.src = a;
    this.i = {};
    this.j = 0;
  }
  Ya.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.i[f];
    a || ((a = this.i[f] = []), this.j++);
    var g = Za(a, b, d, e);
    -1 < g ? ((b = a[g]), c || (b.vb = !1)) : ((b = new Ua(b, this.src, f, !!d, e)), (b.vb = c), a.push(b));
    return b;
  };
  function $a(a, b) {
    var c = b.type;
    if (!(c in a.i)) return !1;
    var d = a.i[c];
    const e = za(d, b);
    let f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (Va(b), 0 == a.i[c].length && (delete a.i[c], a.j--));
    return f;
  }
  function Za(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.kb && f.listener == b && f.capture == !!c && f.Ab == d) return e;
    }
    return -1;
  }
  var ab = "closure_lm_" + ((1e6 * Math.random()) | 0),
    bb = {},
    cb = 0;
  function t(a, b, c, d, e) {
    if (d && d.once) return db(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) t(a, b[f], c, d, e);
      return null;
    }
    c = eb(c);
    return Sa(a) ? fb(a, b, c, ia(d) ? !!d.capture : !!d, e) : gb(a, b, c, !1, d, e);
  }
  function gb(a, b, c, d, e, f) {
    if (!b) throw Error("b");
    var g = ia(e) ? !!e.capture : !!e,
      h = hb(a);
    h || (a[ab] = h = new Ya(a));
    c = h.add(b, c, d, g, f);
    if (c.proxy) return c;
    d = ib();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) Ca || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(jb(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("c");
    cb++;
    return c;
  }
  function ib() {
    function a(c) {
      return b.call(a.src, a.listener, c);
    }
    const b = kb;
    return a;
  }
  function db(a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) db(a, b[f], c, d, e);
      return null;
    }
    c = eb(c);
    return Sa(a) ? a.Ia.add(String(b), c, !0, ia(d) ? !!d.capture : !!d, e) : gb(a, b, c, !0, d, e);
  }
  function lb(a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) lb(a, b[f], c, d, e);
    else
      ((d = ia(d) ? !!d.capture : !!d), (c = eb(c)), Sa(a))
        ? ((a = a.Ia),
          (b = String(b).toString()),
          b in a.i &&
            ((f = a.i[b]),
            (c = Za(f, c, d, e)),
            -1 < c && (Va(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.i[b], a.j--))))
        : a && (a = hb(a)) && ((b = a.i[b.toString()]), (a = -1), b && (a = Za(b, c, d, e)), (c = -1 < a ? b[a] : null) && mb(c));
  }
  function mb(a) {
    if ("number" === typeof a || !a || a.kb) return !1;
    var b = a.src;
    if (Sa(b)) return $a(b.Ia, a);
    var c = a.type,
      d = a.proxy;
    b.removeEventListener
      ? b.removeEventListener(c, d, a.capture)
      : b.detachEvent
        ? b.detachEvent(jb(c), d)
        : b.addListener && b.removeListener && b.removeListener(d);
    cb--;
    (c = hb(b)) ? ($a(c, a), 0 == c.j && ((c.src = null), (b[ab] = null))) : Va(a);
    return !0;
  }
  function nb(a) {
    if (a)
      if (Sa(a)) {
        if (a.Ia) {
          var b = a.Ia;
          a = 0;
          for (var c in b.i) {
            for (var d = b.i[c], e = 0; e < d.length; e++) ++a, Va(d[e]);
            delete b.i[c];
            b.j--;
          }
        }
      } else if ((c = hb(a))) for (b in ((a = 0), c.i)) for (d = c.i[b].concat(), e = 0; e < d.length; ++e) mb(d[e]) && ++a;
  }
  function jb(a) {
    return a in bb ? bb[a] : (bb[a] = "on" + a);
  }
  function kb(a, b) {
    if (a.kb) a = !0;
    else {
      b = new Pa(b, this);
      var c = a.listener,
        d = a.Ab || a.src;
      a.vb && mb(a);
      a = c.call(d, b);
    }
    return a;
  }
  function hb(a) {
    a = a[ab];
    return a instanceof Ya ? a : null;
  }
  var ob = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function eb(a) {
    if ("function" === typeof a) return a;
    a[ob] ||
      (a[ob] = function (b) {
        return a.handleEvent(b);
      });
    return a[ob];
  }
  function pb() {
    Aa.call(this);
    this.Ia = new Ya(this);
    this.Gc = this;
  }
  oa(pb, Aa);
  pb.prototype[Ra] = !0;
  pb.prototype.addEventListener = function (a, b, c, d) {
    t(this, a, b, c, d);
  };
  pb.prototype.removeEventListener = function (a, b, c, d) {
    lb(this, a, b, c, d);
  };
  function rb(a, b) {
    a = a.Gc;
    var c = b.type || b;
    if ("string" === typeof b) b = new Ba(b, a);
    else if (b instanceof Ba) b.target = b.target || a;
    else {
      var d = b;
      b = new Ba(c, a);
      Xa(b, d);
    }
    a = b.i = a;
    sb(a, c, !0, b);
    sb(a, c, !1, b);
  }
  function fb(a, b, c, d, e) {
    return a.Ia.add(String(b), c, !1, d, e);
  }
  function sb(a, b, c, d) {
    if ((b = a.Ia.i[String(b)])) {
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.kb && g.capture == c) {
          var h = g.listener,
            m = g.Ab || g.src;
          g.vb && $a(a.Ia, g);
          e = !1 !== h.call(m, d) && e;
        }
      }
    }
  }
  function tb() {}
  tb.prototype.i = null;
  tb.prototype.getOptions = function () {
    var a;
    (a = this.i) || ((a = {}), ub(this) && ((a[0] = !0), (a[1] = !0)), (a = this.i = a));
    return a;
  };
  var vb;
  function wb() {}
  oa(wb, tb);
  function xb(a) {
    return (a = ub(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
  }
  function ub(a) {
    if (!a.j && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      const b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
      for (let c = 0; c < b.length; c++) {
        const d = b[c];
        try {
          return new ActiveXObject(d), (a.j = d);
        } catch (e) {}
      }
      throw Error("d");
    }
    return a.j;
  }
  vb = new wb();
  var yb;
  function zb() {
    if (void 0 === yb) {
      var a = null,
        b = l.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", { createHTML: pa, createScript: pa, createScriptURL: pa });
        } catch (c) {
          l.console && l.console.error(c.message);
        }
        yb = a;
      } else yb = a;
    }
    return yb;
  }
  function Ab(a, b) {
    this.j = (a === Bb && b) || "";
    this.o = Cb;
  }
  Ab.prototype.Za = !0;
  Ab.prototype.i = function () {
    return this.j;
  };
  var Cb = {},
    Bb = {};
  var Eb = class {
    constructor(a, b) {
      this.j = b === Db ? a : "";
    }
    toString() {
      return this.j + "";
    }
  };
  Eb.prototype.Za = !0;
  Eb.prototype.i = function () {
    return this.j.toString();
  };
  var Db = {};
  var Gb = class {
    constructor(a, b) {
      this.j = b === Fb ? a : "";
    }
    toString() {
      return this.j.toString();
    }
  };
  Gb.prototype.Za = !0;
  Gb.prototype.i = function () {
    return this.j.toString();
  };
  function Hb(a) {
    return a instanceof Gb && a.constructor === Gb ? a.j : "type_error:SafeUrl";
  }
  var Ib;
  try {
    new URL("s://g"), (Ib = !0);
  } catch (a) {
    Ib = !1;
  }
  var Jb = Ib,
    Fb = {},
    Kb = new Gb("about:invalid#zClosurez", Fb);
  const Lb = {};
  function Mb(a) {
    return a instanceof Nb && a.constructor === Nb ? a.j : "type_error:SafeHtml";
  }
  function Ob(a) {
    a instanceof Nb ||
      ((a = "object" == typeof a && a.Za ? a.i() : String(a)),
      Ja.test(a) &&
        (-1 != a.indexOf("&") && (a = a.replace(Da, "&amp;")),
        -1 != a.indexOf("<") && (a = a.replace(Ea, "&lt;")),
        -1 != a.indexOf(">") && (a = a.replace(Fa, "&gt;")),
        -1 != a.indexOf('"') && (a = a.replace(Ga, "&quot;")),
        -1 != a.indexOf("'") && (a = a.replace(Ha, "&#39;")),
        -1 != a.indexOf("\x00") && (a = a.replace(Ia, "&#0;"))),
      (a = Pb(a)));
    return a;
  }
  function Pb(a) {
    const b = zb();
    a = b ? b.createHTML(a) : a;
    return new Nb(a, Lb);
  }
  function Qb(a) {
    const b = Ob(Rb),
      c = [],
      d = (e) => {
        Array.isArray(e) ? e.forEach(d) : ((e = Ob(e)), c.push(Mb(e).toString()));
      };
    a.forEach(d);
    return Pb(c.join(Mb(b).toString()));
  }
  function Sb(a) {
    return Qb(Array.prototype.slice.call(arguments));
  }
  class Nb {
    constructor(a, b) {
      this.j = b === Lb ? a : "";
      this.Za = !0;
    }
    i() {
      return this.j.toString();
    }
    toString() {
      return this.j.toString();
    }
  }
  var Rb = new Nb((l.trustedTypes && l.trustedTypes.emptyHTML) || "", Lb),
    Tb = Pb("<br>");
  var Ub = (function (a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  })(function () {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = a.firstChild.firstChild;
    a.innerHTML = Mb(Rb);
    return !b.parentElement;
  });
  function Vb(a, b) {
    if (Ub()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = Mb(b);
  }
  function Wb(a) {
    if (!(a instanceof Gb || a instanceof Gb)) {
      a = "object" == typeof a && a.Za ? a.i() : String(a);
      b: {
        var b = a;
        if (Jb) {
          try {
            var c = new URL(b);
          } catch (d) {
            b = "https:";
            break b;
          }
          b = c.protocol;
        } else
          c: {
            c = document.createElement("a");
            try {
              c.href = b;
            } catch (d) {
              b = void 0;
              break c;
            }
            b = c.protocol;
            b = ":" === b || "" === b ? "https:" : b;
          }
      }
      "javascript:" === b && (a = "about:invalid#zClosurez");
      a = new Gb(a, Fb);
    }
    l.open(Hb(a), "");
  }
  function u(a, b, c) {
    return a + c * (b - a);
  }
  function Xb(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  }
  function Yb() {
    this.i = l.document || document;
  }
  function Zb(a, b, c) {
    if ("function" === typeof a) c && (a = la(a, c));
    else if (a && "function" == typeof a.handleEvent) a = la(a.handleEvent, a);
    else throw Error("f");
    return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
  }
  var $b = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
  );
  function ac(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function bc(a) {
    pb.call(this);
    this.headers = new Map();
    this.H = a || null;
    this.j = !1;
    this.v = this.i = null;
    this.ha = "";
    this.o = this.U = this.s = this.T = !1;
    this.Aa = 0;
    this.u = null;
    this.ka = "";
    this.Ca = this.Db = !1;
  }
  oa(bc, pb);
  var cc = /^https?$/i,
    dc = ["POST", "PUT"];
  function ec(a, b) {
    if (a.i) throw Error("g`" + a.ha + "`" + b);
    a.ha = b;
    a.T = !1;
    a.j = !0;
    a.i = a.H ? xb(a.H) : xb(vb);
    a.v = a.H ? a.H.getOptions() : vb.getOptions();
    a.i.onreadystatechange = la(a.Ea, a);
    try {
      (a.U = !0), a.i.open("GET", String(b), !0), (a.U = !1);
    } catch (e) {
      fc(a);
      return;
    }
    b = new Map(a.headers);
    const c = Array.from(b.keys()).find((e) => "content-type" == e.toLowerCase()),
      d = l.FormData && !1;
    !(0 <= za(dc, "GET")) || c || d || b.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [e, f] of b) a.i.setRequestHeader(e, f);
    a.ka && (a.i.responseType = a.ka);
    "withCredentials" in a.i && a.i.withCredentials !== a.Db && (a.i.withCredentials = a.Db);
    try {
      gc(a),
        0 < a.Aa && ((a.Ca = hc(a.i)), a.Ca ? ((a.i.timeout = a.Aa), (a.i.ontimeout = la(a.Fa, a))) : (a.u = Zb(a.Fa, a.Aa, a))),
        (a.s = !0),
        a.i.send(""),
        (a.s = !1);
    } catch (e) {
      fc(a);
    }
  }
  function hc(a) {
    return Na && "number" === typeof a.timeout && void 0 !== a.ontimeout;
  }
  bc.prototype.Fa = function () {
    "undefined" != typeof ha && this.i && (rb(this, "timeout"), this.abort(8));
  };
  function fc(a) {
    a.j = !1;
    a.i && ((a.o = !0), a.i.abort(), (a.o = !1));
    ic(a);
    jc(a);
  }
  function ic(a) {
    a.T || ((a.T = !0), rb(a, "complete"), rb(a, "error"));
  }
  bc.prototype.abort = function () {
    this.i && this.j && ((this.j = !1), (this.o = !0), this.i.abort(), (this.o = !1), rb(this, "complete"), rb(this, "abort"), jc(this));
  };
  bc.prototype.Ea = function () {
    this.O || (this.U || this.s || this.o ? kc(this) : this.Hc());
  };
  bc.prototype.Hc = function () {
    kc(this);
  };
  function kc(a) {
    if (a.j && "undefined" != typeof ha && (!a.v[1] || 4 != (a.i ? a.i.readyState : 0) || 2 != lc(a)))
      if (a.s && 4 == (a.i ? a.i.readyState : 0)) Zb(a.Ea, 0, a);
      else if ((rb(a, "readystatechange"), 4 == (a.i ? a.i.readyState : 0))) {
        a.j = !1;
        try {
          const f = lc(a);
          a: switch (f) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var b = !0;
              break a;
            default:
              b = !1;
          }
          var c;
          if (!(c = b)) {
            var d;
            if ((d = 0 === f)) {
              var e = String(a.ha).match($b)[1] || null;
              !e && l.self && l.self.location && (e = l.self.location.protocol.slice(0, -1));
              d = !cc.test(e ? e.toLowerCase() : "");
            }
            c = d;
          }
          c ? (rb(a, "complete"), rb(a, "success")) : ic(a);
        } finally {
          jc(a);
        }
      }
  }
  function jc(a) {
    if (a.i) {
      gc(a);
      const b = a.i,
        c = a.v[0] ? () => {} : null;
      a.i = null;
      a.v = null;
      rb(a, "ready");
      try {
        b.onreadystatechange = c;
      } catch (d) {}
    }
  }
  function gc(a) {
    a.i && a.Ca && (a.i.ontimeout = null);
    a.u && (l.clearTimeout(a.u), (a.u = null));
  }
  bc.prototype.isActive = function () {
    return !!this.i;
  };
  function lc(a) {
    try {
      return 2 < (a.i ? a.i.readyState : 0) ? a.i.status : -1;
    } catch (b) {
      return -1;
    }
  }
  function mc(a) {
    if (a.i && "running" == a.i.state && !a.O) {
      a.O = !0;
      for (let b = 0; b < a.U.length; b++) a.U[b]();
    }
  }
  function nc(a) {
    a.i &&
      (null == a.o
        ? oc(a)
        : void 0 === a.o.playbackState
          ? oc(a)
          : a.o.playbackState !== a.o.PLAYING_STATE && a.o.playbackState !== a.o.FINISHED_STATE && oc(a));
  }
  function pc(a, b) {
    if (qc && !a.i) {
      a.i = new (window.AudioContext || window.webkitAudioContext)();
      a.j = a.i.createGain();
      a.j.connect(a.i.destination);
      for (let c in a.v) a.v[c].i = a.i;
      for (let c in a.s) rc(a.s[c], a.i, a.j);
      a.i.onstatechange = () => {
        mc(a);
      };
      mc(a);
      nc(a);
      db(
        b,
        "click pointerup mousedown mouseup touchstart touchend".split(" "),
        () => {
          a.i && (a.i.resume(), nc(a));
        },
        !0,
      );
    }
  }
  function oc(a) {
    if (a.i) {
      a.o = a.i.createBufferSource();
      var b = a.i.createBuffer(1, 1, 22050);
      a.o.buffer = b;
      a.o.connect(a.i.destination);
      a.o.start(0);
      for (const c of a.ha) c();
    }
  }
  function sc(a) {
    var b = tc;
    b.T = a;
    !b.H && b.j && b.i && b.j.gain.setValueAtTime(b.T, b.i.currentTime);
  }
  class uc {
    constructor() {
      var a = v;
      this.v = vc;
      this.s = a;
      this.i = null;
      this.ha = [];
      this.j = null;
      this.T = 1;
      this.O = this.u = this.H = !1;
      this.U = [];
      this.o = null;
    }
    destroy() {
      this.i && (this.i.close(), (this.i = null));
    }
    reset() {
      for (let a in this.v) this.v[a].u = [];
      for (let a in this.s) wc(this.s[a]);
    }
    isMuted() {
      return this.H && !!this.j && 0 == this.j.gain.value;
    }
  }
  var qc = !(!window.AudioContext && !window.webkitAudioContext) && !!window.GainNode;
  function rc(a, b, c) {
    a.i = b;
    a.u = c;
  }
  function wc(a, b) {
    xc(a);
    if (void 0 !== b && a.i) {
      if (a.j[b]) {
        try {
          a.j[b].node.stop(0);
        } catch (d) {}
        var c = (1e3 * a.i.currentTime - a.j[b].bc) % a.v;
        delete a.j[b];
        return [c];
      }
      return [];
    }
    b = [];
    for (c in a.j) b = b.concat(wc(a, c));
    return b;
  }
  function xc(a) {
    if (a.i)
      for (const c in a.j) {
        var b = a.j[c];
        !b.zc && null !== a.i && 1e3 * a.i.currentTime > b.bc + a.v && delete a.j[c];
      }
  }
  function yc(a) {
    !a.o && a.i && a.i.createGain && (a.o = a.i.createGain());
  }
  function zc(a, b) {
    yc(a);
    a.o && a.i && a.o.gain.setValueAtTime(b, a.i.currentTime);
  }
  var x = class {
    constructor(a, b) {
      this.T = vc.Jb;
      this.H = a;
      this.v = b;
      this.j = {};
      this.s = this.u = this.i = this.o = null;
      this.O = 0;
    }
    play(a = 0, b = !1, c = 0, d, e = 0, f) {
      if (!this.i || !this.u) return -1;
      xc(this);
      f = void 0 === f ? this.i.currentTime + a / 1e3 : f;
      d || ((d = this.i.createBufferSource()), d.playbackRate.setValueAtTime(1, this.i.currentTime));
      yc(this);
      this.s && d.connect(this.s);
      this.o
        ? (this.s ? this.s.connect(this.o) : d.connect(this.o), this.o.connect(this.u))
        : this.s
          ? this.s.connect(this.u)
          : d.connect(this.u);
      this.s = null;
      d.loop = b;
      try {
        d.buffer = this.T.buffer;
      } catch (h) {
        return -1;
      }
      a = this.H / 1e3;
      const g = this.v / 1e3 / d.playbackRate.value;
      b ? ((d.loopStart = a + (e ? e / 1e3 : c / 1e3)), (d.loopEnd = a + g), d.start(f, a + c / 1e3)) : d.start(f, a + c / 1e3, g);
      e = this.O++;
      this.j[e] = { node: d, bc: 1e3 * f - c, zc: b };
      return e;
    }
  };
  const Ac = document.createElement("audio");
  var Bc = "function" === typeof Ac.canPlayType && "" != Ac.canPlayType("audio/mpeg") ? ".mp3" : ".ogg";
  class Cc extends uc {}
  var vc = {};
  vc.Jb = new (class extends ya {
    constructor(a, b) {
      super(a + b + Bc);
      this.i = this.buffer = null;
      this.v = 0;
    }
    o() {
      const a = new Promise((c) => {
        this.s ? c() : this.u.push(c);
      });
      if (0 != this.v) return Promise.resolve();
      if (!this.i) return Promise.reject(Error("i"));
      const b = new XMLHttpRequest();
      b.open("GET", this.j, !0);
      b.responseType = "arraybuffer";
      b.onload = () => {
        const c = (d) => {
          d && ((this.buffer = d), (this.v = 3), xa(this));
        };
        this.i && this.i.decodeAudioData(b.response, c);
        this.v = 2;
      };
      b.send();
      this.v = 1;
      return a;
    }
  })(assetsPath, "audio");
  var v = {};
  v.Kb = new x(0, 2972.154052734375);
  v.Lb = new x(3972.154052734375, 4458.23095703125);
  v.Mb = new x(9430.384765625, 51063.83203125);
  v.Nb = new x(61494.21875, 1486.0770263671875);
  v.Ob = new x(63980.296875, 2972.154052734375);
  v.mc = new x(67952.4453125, 2972.154052734375);
  v.nc = new x(71924.6015625, 2972.154052734375);
  v.oc = new x(75896.7578125, 2972.154052734375);
  v.Rb = new x(79868.9140625, 270.8160095214844);
  v.Tb = new x(81139.7265625, 29624.98828125);
  v.Ub = new x(111764.71875, 2e3);
  v.qc = new x(114764.71875, 4312.90185546875);
  v.rc = new x(120077.6171875, 2854.739013671875);
  v.Ic = new x(123932.359375, 1486.0770263671875);
  v.Eb = new x(126418.4375, 7430.384765625);
  (function () {
    var a = Cc;
    a.Ma = void 0;
    a.ac = function () {
      return a.Ma ? a.Ma : (a.Ma = new a());
    };
  })();
  var Dc =
    "af am ar az be bg bn bs ca cs da de el en en-GB es es-419 et eu fa fi fr fr-CA gl gu hi hr hu hy id is it iw ja ka kk km kn ko ky lo lt lv mk ml mn mr ms my ne nl no pa pl pt-BR ro ru si sk sl sq sr sv sw ta te th tr uk ur uz vi zh-CN zh-HK zh-TW zu fil pt-PT".split(
      " ",
    );
  var y = class {};
  function z(a, b) {
    const c = b.constructor;
    a.i.set(c, b);
    a.j && a.j && a.j.j.add(c, a);
    return b;
  }
  var A = class {
    constructor(...a) {
      this.i = new Map();
      for (const b of a) z(this, b);
    }
    get(a) {
      if ((a = this.i.get(a))) return a;
      throw Error("j");
    }
  };
  const Ec = new Set();
  var Gc = class {
    constructor() {
      this.i = new Map();
    }
    find(a) {
      return Fc(a.map((b) => this.i.get(b) || Ec));
    }
    add(a, b) {
      let c = this.i.get(a);
      c || ((c = new Set()), this.i.set(a, c));
      c.add(b);
    }
  };
  function Fc(a) {
    if (0 === a.length) return [];
    if (1 === a.length) return Array.from(a[0]);
    const b = [];
    for (const c of a[0]) {
      let d = !0;
      for (let e = 1; e < a.length; e++) a[e].has(c) || (d = !1);
      d && b.push(c);
    }
    return b;
  }
  function Hc(a, ...b) {
    const c = [];
    for (const d of a.i) for (const e of b) d.constructor === e && c.push(d);
    return c;
  }
  function Ic(a, b) {
    for (const c of a.i) c.j(b);
  }
  function B(a, b) {
    b.j = a;
    a = a.j;
    for (const c of b.i.keys()) a.add(c, b);
    return b;
  }
  function Jc(a, b) {
    b.j = void 0;
    a = a.j;
    for (const d of b.i.keys()) {
      let e = void 0;
      var c = b;
      null == (e = a.i.get(d)) || e.delete(c);
    }
  }
  var Kc = class {
    constructor() {
      this.i = [];
      this.j = new Gc();
    }
    find(...a) {
      return this.j.find(a);
    }
  };
  var C = class {
    constructor(a) {
      this.i = a;
    }
  };
  function D(a, b) {
    if (1 !== a.length) throw ((a = `Expected 1 but found ${a.length}.`), (b = b ? `${b} (${a})` : a), Error(b));
    return a[0];
  }
  function Lc(a, b) {
    a.x = b.x;
    a.y = b.y;
    return a;
  }
  function Mc(a, b) {
    a.x *= b;
    a.y *= b;
    return a;
  }
  function F(a) {
    return new G(a.x, a.y);
  }
  var G = class {
    constructor(a = 0, b = 0) {
      this.x = a;
      this.y = b;
    }
    set(a, b) {
      this.x = a;
      this.y = b;
      return this;
    }
    add(a) {
      this.x += a.x;
      this.y += a.y;
      return this;
    }
    sub(a) {
      this.x -= a.x;
      this.y -= a.y;
      return this;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    transform(a) {
      const b = a.b * this.x + a.d * this.y + a.f;
      this.x = a.a * this.x + a.c * this.y + a.e;
      this.y = b;
      return this;
    }
  };
  function Oc(a, b) {
    b.transform(a.a, a.b, a.c, a.d, a.e, a.f);
  }
  function Pc(a, b) {
    b.setTransform(a.a, a.b, a.c, a.d, a.e, a.f);
  }
  var Qc = class {
    constructor() {
      this.a = 1;
      this.c = this.b = 0;
      this.d = 1;
      this.f = this.e = 0;
    }
    set(a, b, c, d, e, f) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.e = e;
      this.f = f;
      return this;
    }
  };
  let Rc = [],
    Sc = 0;
  function Uc(a) {
    this.u = this.O = this.s = "";
    this.H = null;
    this.v = this.o = "";
    this.j = !1;
    if (a instanceof Uc) {
      this.j = a.j;
      Vc(this, a.s);
      this.O = a.O;
      this.u = a.u;
      Wc(this, a.H);
      this.o = a.o;
      var b = a.i;
      var c = new Xc();
      c.o = b.o;
      b.i && ((c.i = new Map(b.i)), (c.j = b.j));
      Yc(this, c);
      this.v = a.v;
    } else
      a && (b = String(a).match($b))
        ? ((this.j = !1),
          Vc(this, b[1] || "", !0),
          (this.O = Zc(b[2] || "")),
          (this.u = Zc(b[3] || "", !0)),
          Wc(this, b[4]),
          (this.o = Zc(b[5] || "", !0)),
          Yc(this, b[6] || "", !0),
          (this.v = Zc(b[7] || "")))
        : ((this.j = !1), (this.i = new Xc(null, this.j)));
  }
  Uc.prototype.toString = function () {
    var a = [],
      b = this.s;
    b && a.push($c(b, ad, !0), ":");
    var c = this.u;
    if (c || "file" == b)
      a.push("//"),
        (b = this.O) && a.push($c(b, ad, !0), "@"),
        a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        (c = this.H),
        null != c && a.push(":", String(c));
    if ((c = this.o)) this.u && "/" != c.charAt(0) && a.push("/"), a.push($c(c, "/" == c.charAt(0) ? bd : cd, !0));
    (c = this.i.toString()) && a.push("?", c);
    (c = this.v) && a.push("#", $c(c, dd));
    return a.join("");
  };
  function Vc(a, b, c) {
    a.s = c ? Zc(b, !0) : b;
    a.s && (a.s = a.s.replace(/:$/, ""));
  }
  function Wc(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("k`" + b);
      a.H = b;
    } else a.H = null;
  }
  function Yc(a, b, c) {
    b instanceof Xc ? ((a.i = b), ed(a.i, a.j)) : (c || (b = $c(b, fd)), (a.i = new Xc(b, a.j)));
  }
  function Zc(a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
  }
  function $c(a, b, c) {
    return "string" === typeof a ? ((a = encodeURI(a).replace(b, gd)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }
  function gd(a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  }
  var ad = /[#\/\?@]/g,
    cd = /[#\?:]/g,
    bd = /[#\?]/g,
    fd = /[#\?@]/g,
    dd = /#/g;
  function Xc(a, b) {
    this.j = this.i = null;
    this.o = a || null;
    this.s = !!b;
  }
  function hd(a) {
    a.i ||
      ((a.i = new Map()),
      (a.j = 0),
      a.o &&
        ac(a.o, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  }
  Xc.prototype.add = function (a, b) {
    hd(this);
    this.o = null;
    a = id(this, a);
    var c = this.i.get(a);
    c || this.i.set(a, (c = []));
    c.push(b);
    this.j += 1;
    return this;
  };
  function jd(a, b) {
    hd(a);
    b = id(a, b);
    a.i.has(b) && ((a.o = null), (a.j -= a.i.get(b).length), a.i.delete(b));
  }
  function kd(a, b) {
    hd(a);
    b = id(a, b);
    return a.i.has(b);
  }
  Xc.prototype.forEach = function (a, b) {
    hd(this);
    this.i.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  function ld(a, b) {
    hd(a);
    let c = [];
    if ("string" === typeof b) kd(a, b) && (c = c.concat(a.i.get(id(a, b))));
    else for (a = Array.from(a.i.values()), b = 0; b < a.length; b++) c = c.concat(a[b]);
    return c;
  }
  Xc.prototype.set = function (a, b) {
    hd(this);
    this.o = null;
    a = id(this, a);
    kd(this, a) && (this.j -= this.i.get(a).length);
    this.i.set(a, [b]);
    this.j += 1;
    return this;
  };
  Xc.prototype.get = function (a, b) {
    if (!a) return b;
    a = ld(this, a);
    return 0 < a.length ? String(a[0]) : b;
  };
  Xc.prototype.toString = function () {
    if (this.o) return this.o;
    if (!this.i) return "";
    const a = [],
      b = Array.from(this.i.keys());
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      const f = encodeURIComponent(String(d)),
        g = ld(this, d);
      for (d = 0; d < g.length; d++) {
        var e = f;
        "" !== g[d] && (e += "=" + encodeURIComponent(String(g[d])));
        a.push(e);
      }
    }
    return (this.o = a.join("&"));
  };
  function id(a, b) {
    b = String(b);
    a.s && (b = b.toLowerCase());
    return b;
  }
  function ed(a, b) {
    b &&
      !a.s &&
      (hd(a),
      (a.o = null),
      a.i.forEach(function (c, d) {
        var e = d.toLowerCase();
        if (d != e && (jd(this, d), jd(this, e), 0 < c.length)) {
          this.o = null;
          d = this.i;
          var f = d.set;
          e = id(this, e);
          var g = c.length;
          if (0 < g) {
            const h = Array(g);
            for (let m = 0; m < g; m++) h[m] = c[m];
            g = h;
          } else g = [];
          f.call(d, e, g);
          this.j += c.length;
        }
      }, a));
    a.s = b;
  }
  var H = navigator.userAgent,
    I = new Uc(location.href),
    isTouchDevice = () => "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints,
    isAppleDevice = () => H.includes("iPad") || H.includes("iPhone") || H.includes("iPod") || isTouchDevice();
  const nd = () => H.toLowerCase().includes("gsa") || H.includes("GoogleApp");
  var isMobile = () =>
      forceMobile ||
      isAppleDevice() ||
      H.includes("Android") ||
      H.includes("Mobile") ||
      H.includes("Silk") ||
      H.includes("UCBrowser") ||
      H.includes("UCWEB"),
    pd = "sdoodles" === document.documentElement.id && !isMobile();
  H.includes("GT-I9300") && H.includes("Chrome");
  var qd = () => I.o.includes("/assets/") && I.o.includes(".html"),
    rd = () => {
      const a = I.i.get("ntp");
      return "1" === a || "2" === a;
    },
    sd = () => "1" === I.i.get("fpdoodle") && !!document.getElementById("fpdoodle"),
    td = () => !!document.querySelector("body#iframedoodle"),
    ud = () => (!isMobile() || isTouchDevice()) && !pd && !(document.getElementById("fkbx") || rd()) && !sd() && !qd(),
    vd = isTouchDevice() && !pd && !(document.getElementById("fkbx") || rd()) && !sd() && !qd();
  var wd = RegExp(
      "[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]",
    ),
    xd = RegExp(
      "^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]",
    ),
    yd = /^http:\/\/.*/,
    zd = /\s+/,
    Ad = /[\d\u06f0-\u06f9]/; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Bd;
  try {
    new URL("s://g"), (Bd = !0);
  } catch (a) {
    Bd = !1;
  }
  const Cd = Bd;
  function Ed(a, b, c) {
    b = String(b);
    let d = c;
    "inserthtml" === b.toLowerCase() && (d = Mb(c));
    return a.execCommand(b, !1, d);
  }
  class Fd {
    constructor(a) {
      this.xc = a;
    }
  }
  function Gd(a) {
    return new Fd((b) => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const Hd = [Gd("data"), Gd("http"), Gd("https"), Gd("mailto"), Gd("ftp"), new Fd((a) => /^[^:]*([/?#]|$)/.test(a))];
  function Id(a, b = Hd) {
    for (let c = 0; c < b.length; ++c) {
      const d = b[c];
      if (d instanceof Fd && d.xc(a)) return new Gb(a, Fb);
    }
  }
  var K = (a, ...b) => {
      if (a)
        for (let c = 0; c < b.length; c += 2) {
          const d = b[c],
            e = b[c + 1],
            f = a.style;
          f && d in f ? (f[d] = e) : d in a && (a[d] = e);
        }
    },
    Jd = Date.now,
    Kd = ["Moz", "ms", "O", "webkit"],
    Ld = (a, b, c) => {
      if (a) {
        for (const d of Kd) a.style[d + b] = c;
        a.style[b.charAt(0).toLowerCase() + b.substr(1)] = c;
      }
    },
    Md = ["", "moz", "ms", "o", "webkit"],
    Nd = (a, b) => {
      if (!a) return null;
      for (const d of Md) {
        var c = b;
        0 < d.length && (c = b.charAt(0).toUpperCase() + b.substr(1));
        c = d + c;
        if ("undefined" != typeof a[c]) return c;
      }
      return null;
    },
    Od = (a, b) => {
      if ((b = (b = b && !(nd() && isAppleDevice())) || rd())) Wb(a);
      else {
        b = window.top.location;
        a = Id(a, Hd) || Kb;
        if (a instanceof Gb) a = Hb(a);
        else {
          b: if (Cd) {
            try {
              var c = new URL(a);
            } catch (d) {
              c = "https:";
              break b;
            }
            c = c.protocol;
          } else
            c: {
              c = document.createElement("a");
              try {
                c.href = a;
              } catch (d) {
                c = void 0;
                break c;
              }
              c = c.protocol;
              c = ":" === c || "" === c ? "https:" : c;
            }
          a = "javascript:" !== c ? a : void 0;
        }
        void 0 !== a && b.assign(a);
      }
    },
    Pd = () => (window.senty && void 0 !== window.senty.doodle ? window.senty.doodle : null),
    Qd = (a, b) => {
      const c = Pd();
      return c && void 0 != c[a] ? c[a] : b;
    },
    Rd = (a) => {
      Pd() || (window.senty.doodle = {});
      window.senty.doodle.pvc = a;
    };
  function Sd(a) {
    return 0 == a.indexOf("//") ? "https:" + a : a;
  }
  function Td(a) {
    return Sd(Qd("shortlink", null) || "//" + a);
  }
  function Ud(a) {
    var b = Vd;
    return Sd(Qd(a, null) || Td(b));
  }
  var Wd = () => {
      const a = Qd("doodle_args", {}).is_dogfood;
      return null != a ? a : !1;
    },
    Xd = Qd("hl", "en"),
    Yd = Qd("gl", "");
  RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i").test(Xd);
  var $d = (a, b, c) => {
    const d = Math.max(0, c - 230) + (document.querySelector("div.og-pdp") ? 36 : 12);
    K(a, "width", `${b}px`, "height", `${c}px`);
    Zd(d);
  };
  const Zd = (a) => {
    a = `${a}px`;
    var b = document.getElementById("lga");
    b && K(b, "marginBottom", a);
    document.getElementById("fkbx") ||
      rd() ||
      ((b = document.getElementById("searchform")) && K(b, "transform", "translateY(" + a + ")"),
      (a = new UIEvent("resize", { bubbles: !1, Kc: !1, view: window, detail: 0 })),
      window.dispatchEvent(a));
  };
  let ae = null,
    be = null,
    ce = null;
  var de = () => {
      ce ||
        (window.senty && window.senty.kEI && window.senty.kEI.length
          ? (ce = window.senty.kEI)
          : td() && kd(I.i, "ei") && (ce = I.i.get("ei")));
      return ce;
    },
    ee = () => {
      if (!ae) {
        const a = document.getElementById("hplogoved");
        a ? (ae = a.getAttribute("data-ved")) : td() && kd(I.i, "ved") && (ae = I.i.get("ved"));
      }
      return ae;
    },
    fe = (a) => {
      const b = new Uc("/");
      b.i.set("fpdoodle", "1");
      b.i.set("doodle", String(a));
      Xd && b.i.set("hl", Xd);
      Yd && b.i.set("gl", Yd);
      Od(b.toString(), !1);
    },
    ge = (a) => `${assetsPath}${assetsPath.endsWith("/") ? "" : "/"}${a}`;
  var Vd = Qd("id", "253312689");
  var L = class extends y {
      constructor(a, b, c, d, e, f, g) {
        super();
        this.lc = a;
        this.yc = b;
        this.Ja = c;
        this.ta = d;
        this.wa = e;
        this.W = f;
        this.wb = g;
        this.state = 0;
      }
    },
    he = new G(-540, 30),
    ie = new G(540, 30);
  function je(a, b) {
    if (0 > b || b >= a.length) throw Error("m`" + b + "`" + a.length);
    for (let c = 0; c < a.length; c++) c === b ? a[c].classList.remove("ddl-hidden_") : a[c].classList.add("ddl-hidden_");
  }
  function ke(a, b) {
    null === b
      ? (a.j.forEach((c) => void c.classList.add("ddl-hidden_")), a.i.forEach((c) => void c.classList.add("ddl-hidden_")))
      : (je(a.j, b), je(a.i, b));
  }
  var le = class extends y {
      constructor(a, b) {
        super();
        this.j = a;
        this.i = b;
      }
    },
    M = class extends y {
      constructor(a = []) {
        super();
        this.actions = a;
      }
    },
    me = class extends y {};
  function ne(a, b, c) {
    const d = a.i.get(b);
    d
      ? a.i.set(b, () => {
          d();
          c();
        })
      : a.i.set(b, c);
  }
  var oe = class extends y {
      constructor(a) {
        super();
        this.o = a;
        this.j = -1;
        this.i = new Map();
      }
    },
    pe = class extends y {
      constructor() {
        super(...arguments);
        this.i = !1;
      }
    };
  var qe = class extends y {
      constructor(a) {
        super();
        this.i = a;
      }
    },
    re = class extends y {
      constructor(a = []) {
        super();
        this.children = a;
      }
    };
  function se(a, b) {
    N(a, b);
  }
  function te(a) {
    return (a = a.i.get(re)) ? a.children : [];
  }
  function ue(a) {
    var b = [O];
    const c = [];
    ve(a, (d) => {
      for (const e of b) if (!d.i.get(e)) return;
      c.push(d);
    });
    return c;
  }
  function ve(a, b) {
    const c = [a];
    for (; 0 < c.length; ) {
      a = c.pop();
      b(a);
      for (const d of te(a)) c.push(d);
    }
  }
  function N(a, b) {
    const c = b.i.get(qe),
      d = b.j !== a.j;
    d && we(b);
    if (c && c.i !== a) {
      var e = b.i.get(qe);
      e && ((e = e.i.get(re).children), e.splice(e.indexOf(b), 1));
    }
    c ? (c.i = a) : z(b, new qe(a));
    (a.i.get(re) || z(a, new re())).children.push(b);
    d && a.j && xe(b, a.j);
  }
  function xe(a, b) {
    if (a.j) throw Error("n");
    B(b, a);
    for (const c of te(a)) xe(c, b);
  }
  function we(a) {
    let b;
    null == (b = a.j) || Jc(b, a);
    for (const c of te(a)) we(c);
  }
  function ye(a) {
    const b = a.scale,
      c = a.position,
      d = Math.sin(a.rotation);
    a = Math.cos(a.rotation);
    return new Qc().set(b.x * a, b.x * d, -b.y * d, b.y * a, c.x, c.y);
  }
  var P = class extends y {
    constructor(a = new G(), b = 0, c = new G(1, 1)) {
      super();
      this.position = a;
      this.rotation = b;
      this.scale = c;
    }
  };
  function ze(a) {
    var b = a;
    for (a = ye(a.get(P)); ; ) {
      b = b.i.get(qe);
      if (!b) break;
      b = b.i;
      var c = b.i.get(P);
      if (!c) break;
      var d = a;
      c = ye(c);
      const e = c.b * d.a + c.d * d.b,
        f = c.a * d.c + c.c * d.d,
        g = c.b * d.c + c.d * d.d,
        h = c.a * d.e + c.c * d.f + c.e,
        m = c.b * d.e + c.d * d.f + c.f;
      d.a = c.a * d.a + c.c * d.b;
      d.b = e;
      d.c = f;
      d.d = g;
      d.e = h;
      d.f = m;
    }
    return a;
  }
  function Ae(a, b, c, d) {
    this.i = a;
    this.o = b;
    this.j = c;
    this.s = d;
  }
  function Be(a, b) {
    if (0 == b) return 0;
    if (1 == b) return 1;
    var c = u(0, a.i, b),
      d = u(a.i, a.j, b);
    a = u(a.j, 1, b);
    c = u(c, d, b);
    d = u(d, a, b);
    return u(c, d, b);
  }
  function Ce(a, b) {
    var c = b;
    if (0 >= c) return 0;
    if (1 <= c) return 1;
    for (var d = 0, e = 1, f = 0, g = 0; 8 > g; g++) {
      f = Be(a, c);
      var h = (Be(a, c + 1e-6) - f) / 1e-6;
      if (1e-6 > Math.abs(f - b)) return c;
      if (1e-6 > Math.abs(h)) break;
      else f < b ? (d = c) : (e = c), (c -= (f - b) / h);
    }
    for (g = 0; 1e-6 < Math.abs(f - b) && 8 > g; g++) f < b ? ((d = c), (c = (c + e) / 2)) : ((e = c), (c = (c + d) / 2)), (f = Be(a, c));
    return c;
  }
  const De = (a, b, c, d) => {
    const e = new Ae(a, b, c, d);
    return (f) => {
      f = Ce(e, f);
      if (0 == f) f = 0;
      else if (1 == f) f = 1;
      else {
        var g = u(0, e.o, f),
          h = u(e.o, e.s, f),
          m = u(e.s, 1, f);
        g = u(g, h, f);
        h = u(h, m, f);
        f = u(g, h, f);
      }
      return f;
    };
  };
  var Ee = De(0.25, 0.1, 0.25, 1),
    Fe = (a, b, c, d = Ee) => b + d(a) * (c - b),
    Ge = (a) => a,
    Q = De(0.4, 0, 1, 1),
    He = De(0, 0, 0.6, 1),
    Ie = De(0.175, 0.885, 0.32, 1.275);
  var Je = class extends sa {
      constructor(a, b, c, d, e, f = Ge) {
        super();
        this.H = a;
        this.Aa = b;
        this.Fa = c;
        this.Ca = d;
        this.Ea = e;
        this.ka = f;
        this.o = 0;
      }
      j() {
        super.j();
        this.O = this.Aa();
        this.T = this.Fa();
      }
      Ga(a) {
        if (void 0 === this.O || void 0 === this.T) throw Error("o");
        this.o += a;
        this.Ea(this.Ca(this.O, this.T, this.ka(Math.min(1, this.o / this.H))));
      }
      i() {
        return this.o >= this.H;
      }
    },
    Ke = class extends Je {
      constructor(a, b, c, d, e = Ge) {
        super(a, b, c, u, d, e);
      }
    },
    Le = class extends Je {
      constructor(a, b, c, d, e = Ge) {
        super(
          a,
          b,
          c,
          (f, g, h) => {
            this.u.x = u(f.x, g.x, h);
            this.u.y = u(f.y, g.y, h);
            return this.u;
          },
          d,
          e,
        );
        this.u = new G(0, 0);
      }
    };
  var Me = class extends y {},
    O = class extends y {
      constructor(a, b = 0, c = 0, d = new G(0, 0)) {
        super();
        this.ya = a;
        this.Cb = b;
        this.i = c;
        this.offset = d;
        this.alpha = 1;
        this.j = Ne++;
      }
    },
    Ne = 0;
  function R(a, b) {
    return new Oe(a.i[Pe(b)].i, new G(b[1], b[2]), new G(b[3], b[4]));
  }
  var Oe = class {
      constructor(a, b, c) {
        this.o = a;
        this.j = b;
        this.i = c;
      }
    },
    Qe = class {
      constructor(a) {
        this.i = a;
      }
    },
    Re = class extends y {
      constructor(a, b = !0) {
        super();
        this.i = a;
        this.index = this.o = 0;
        this.loop = !0;
        this.offset = new G(0, 0);
        this.s = 12;
        this.j = null;
        this.loop = b;
      }
    },
    Se = class {
      constructor(a) {
        this.ya = a;
      }
    };
  function Te(a, b, c) {
    const d = b.get(P).position,
      e = b.get(L);
    return new q([
      new wa(() => (!c || 3 === c.get(L).state) && 1 === e.state),
      new r([
        new n(() => {
          z(b, new O(e.lc.i[0].ya));
          z(b, b.get(L).lc);
        }),
        new Le(
          2e3,
          () => F(he),
          () => F(e.Ja),
          (f) => void d.set(f.x, f.y),
          Ee,
        ),
      ]),
      new n(() => {
        e.state = 2;
      }),
      new wa(() => 3 === e.state),
      new r([
        new n(() => void z(b, b.get(L).yc)),
        new Le(
          1500,
          () => F(e.Ja),
          () => F(ie),
          (f) => void d.set(f.x, f.y),
          Q,
        ),
      ]),
      new n(() => {
        Jc(a, b);
      }),
    ]);
  }
  class Ue extends ya {
    constructor(a) {
      super(a);
      this.i = new Image();
    }
    o() {
      if (this.i.src) return Promise.resolve(this.i);
      let a;
      const b = new Promise((d) => (a = d)),
        c = () => {
          xa(this);
          a(this.i);
        };
      this.i.crossOrigin = "Anonymous";
      this.i.decode
        ? ((this.i.src = this.j),
          this.i.decode().then(c, () => {
            this.i.removeAttribute("crossOrigin");
            this.i.src = this.j;
            this.i.decode().then(c, () => {
              c();
            });
          }))
        : ((this.i.onload = c),
          (this.i.onerror = () => {
            this.i.removeAttribute("crossOrigin");
            this.i.removeAttribute("onerror");
            this.i.src = this.i.src;
          }),
          (this.i.src = this.j));
      (this.i.complete || "complete" == this.i.readyState) && c();
      return b;
    }
  }
  function Pe(a) {
    return "number" === typeof a ? a : a[0];
  }
  function Ve(a, b) {
    const c = a.i[Pe(b)];
    return new Promise((d) => {
      c.s ? d() : c.u.push(d);
      c.o();
    }).then(() => {});
  }
  function We() {
    var a = T();
    return Promise.all([0, 1, 2, 5, 3, 4, 7, 6, 8, 9, 10, 11, 12, 13, 15, 16].map((b) => Ve(a, b))).then(() => {});
  }
  function Xe(a, b = 0, c = 0, d = 1) {
    const e = a[5] || 1;
    return `${-((d * a[1]) / e + b)}px ${-((d * a[2]) / e + c)}px`;
  }
  function Ye(a, b, c = 1) {
    const d = b[5] || 1;
    a = a.j[Pe(b)];
    return `${(c * a[0]) / d}px ${(c * a[1]) / d}px`;
  }
  function Ze(a, b, c = 0, d = 0, e = 1) {
    return `url(${a.i[Pe(b)].j}) ${Xe(b, c, d, e)}/${Ye(a, b, e)} no-repeat`;
  }
  function $e(a, b, c) {
    return Ze(a, b, 0, 0, c / Math.max(b[3], b[4]));
  }
  var bf = class {
    constructor() {
      var a = af;
      this.i = [];
      this.j = [];
      for (const c of a) {
        a = new Ue(assetsPath + c.filename);
        var b = c.size;
        this.i.push(a);
        this.j.push(b);
      }
    }
    getSize(a) {
      return { width: a[3], height: a[4] };
    }
  };
  var cf = (a) => {
    var b = "Ma";
    if (a.Ma && a.hasOwnProperty(b)) return a.Ma;
    b = new a();
    return (a.Ma = b);
  };
  function T() {
    return cf(df);
  }
  var df = class extends bf {},
    af = [
      { filename: "tea-sprite.png", size: [842, 358] },
      { filename: "pearls-sprite.png", size: [2004, 460] },
      { filename: "sugar-sprite.png", size: [2035, 439] },
      { filename: "honeydew-sprite.png", size: [1899, 2077] },
      { filename: "oolong-sprite.png", size: [1899, 2077] },
      { filename: "regular-sprite.png", size: [1905, 2081] },
      { filename: "taro-sprite.png", size: [1899, 2077] },
      { filename: "thai-sprite.png", size: [1899, 2077] },
      { filename: "single-straw-stab-sprite.png", size: [1293, 659] },
      { filename: "double-straw-stab-sprite.png", size: [1977, 979] },
      { filename: "quadruple-straw-stab-sprite.png", size: [2025, 1539] },
      { filename: "top-panel-customers-sprite.png", size: [1689, 1507] },
      { filename: "top-panel-sprite.png", size: [1980, 623] },
      { filename: "minigame-shared-sprite.png", size: [2038, 633] },
      { filename: "preclick-sprite.png", size: [1007, 507] },
      { filename: "ui-sprite.png", size: [1782, 960] },
      { filename: "line-sprite.png", size: [1985, 333] },
    ],
    ef = [15, 900, 0, 113, 112],
    ff = [13, 1978, 139, 60, 69],
    gf = [1, 384, 119, 176, 157],
    hf = [1, 0, 119, 189, 279],
    jf = [1, 1927, 0, 77, 76],
    kf = [15, 1364, 0, 68, 69],
    lf = [13, 976, 0, 189, 279],
    mf = [13, 1168, 0, 189, 279],
    nf = [13, 1360, 0, 157, 16],
    of = [15, 0, 0, 540, 960],
    pf = [15, 1506, 0, 68, 69],
    qf = [13, 784, 0, 189, 450],
    rf = [15, 1016, 0, 113, 112],
    sf = [0, 0, 0, 340, 247],
    tf = [16, 0, 0, 276, 53],
    uf = [14, 398, 0, 150, 226],
    vf = [14, 551, 0, 150, 226],
    wf = [14, 704, 0, 150, 226],
    xf = [14, 857, 0, 150, 226],
    yf = [13, 0, 0, 543, 633],
    zf = [13, 1360, 19, 100, 116],
    Af = [13, 1360, 138, 100, 116],
    Bf = [13, 1463, 139, 100, 116],
    Cf = [1, 1706, 0, 218, 314],
    Df = [1, 1563, 143, 135, 311],
    Ef = [15, 1648, 0, 60, 70],
    Ff = [15, 783, 0, 114, 142],
    Gf = [15, 1132, 0, 113, 112],
    Hf = [15, 543, 0, 117, 74],
    If = [15, 1248, 0, 113, 112],
    Jf = [12, 546, 313, 542, 310],
    Kf = [12, 0, 0, 543, 341],
    Lf = [2, 590, 0, 292, 418],
    Mf = [16, 1953, 0, 32, 31],
    Nf = [2, 885, 0, 278, 295],
    Of = [2, 1166, 94, 171, 345],
    Pf = [2, 1883, 0, 152, 371],
    Qf = [2, 1489, 94, 17, 48],
    Rf = [2, 1340, 94, 146, 115],
    Sf = [0, 646, 0, 176, 329],
    Tf = [0, 343, 0, 300, 358],
    Uf = [0, 825, 0, 17, 30],
    Vf = [13, 546, 0, 235, 290],
    Wf = [15, 1577, 0, 68, 69],
    Xf = [gf, [1, 1026, 143, 176, 157], [1, 1205, 143, 176, 157], [1, 1384, 143, 176, 157], [1, 563, 193, 176, 157]],
    Yf = [
      [9, 0, 0, 107, 488],
      [9, 110, 0, 107, 488],
      [9, 220, 0, 107, 488],
      [9, 330, 0, 107, 488],
      [9, 440, 0, 107, 488],
      [9, 550, 0, 107, 488],
      [9, 660, 0, 107, 488],
      [9, 770, 0, 107, 488],
      [9, 880, 0, 107, 488],
      [9, 990, 0, 107, 488],
      [9, 1100, 0, 107, 488],
      [9, 1210, 0, 107, 488],
      [9, 1320, 0, 107, 488],
      [9, 1430, 0, 107, 488],
      [9, 1540, 0, 107, 488],
      [9, 1650, 0, 107, 488],
      [9, 1760, 0, 107, 488],
      [9, 1870, 0, 107, 488],
      [9, 0, 491, 107, 488],
      [9, 110, 491, 107, 488],
      [9, 220, 491, 107, 488],
      [9, 330, 491, 107, 488],
      [9, 440, 491, 107, 488],
      [9, 550, 491, 107, 488],
      [9, 660, 491, 107, 488],
      [9, 770, 491, 107, 488],
      [9, 880, 491, 107, 488],
      [9, 880, 491, 107, 488],
      [9, 880, 491, 107, 488],
      [9, 880, 491, 107, 488],
      [9, 880, 491, 107, 488],
      [9, 990, 491, 107, 488],
      [9, 1100, 491, 107, 488],
      [9, 1210, 491, 107, 488],
      [9, 1320, 491, 107, 488],
      [9, 1430, 491, 107, 488],
    ],
    Zf = [
      [2, 1166, 0, 236, 44],
      [2, 1405, 0, 236, 44],
      [2, 1644, 0, 236, 44],
      [2, 1166, 47, 236, 44],
      [2, 1405, 47, 236, 44],
      [2, 1644, 47, 236, 44],
    ],
    $f = [
      [10, 0, 0, 166, 511],
      [10, 169, 0, 166, 511],
      [10, 338, 0, 166, 511],
      [10, 507, 0, 166, 511],
      [10, 676, 0, 166, 511],
      [10, 845, 0, 166, 511],
      [10, 1014, 0, 166, 511],
      [10, 1183, 0, 166, 511],
      [10, 1352, 0, 166, 511],
      [10, 1521, 0, 166, 511],
      [10, 1690, 0, 166, 511],
      [10, 1859, 0, 166, 511],
      [10, 0, 514, 166, 511],
      [10, 169, 514, 166, 511],
      [10, 338, 514, 166, 511],
      [10, 507, 514, 166, 511],
      [10, 676, 514, 166, 511],
      [10, 845, 514, 166, 511],
      [10, 1014, 514, 166, 511],
      [10, 1183, 514, 166, 511],
      [10, 1352, 514, 166, 511],
      [10, 1521, 514, 166, 511],
      [10, 1690, 514, 166, 511],
      [10, 1859, 514, 166, 511],
      [10, 0, 1028, 166, 511],
      [10, 169, 1028, 166, 511],
      [10, 338, 1028, 166, 511],
      [10, 507, 1028, 166, 511],
      [10, 507, 1028, 166, 511],
      [10, 507, 1028, 166, 511],
      [10, 507, 1028, 166, 511],
      [10, 676, 1028, 166, 511],
      [10, 845, 1028, 166, 511],
      [10, 1014, 1028, 166, 511],
      [10, 1183, 1028, 166, 511],
      [10, 1352, 1028, 166, 511],
      [10, 1521, 1028, 166, 511],
    ],
    ag = [
      [12, 546, 0, 543, 310],
      [12, 1092, 0, 543, 310],
    ],
    bg = [
      [8, 0, 0, 45, 659],
      [8, 48, 0, 45, 659],
      [8, 96, 0, 45, 659],
      [8, 144, 0, 45, 659],
      [8, 192, 0, 45, 659],
      [8, 240, 0, 45, 659],
      [8, 288, 0, 45, 659],
      [8, 336, 0, 45, 659],
      [8, 384, 0, 45, 659],
      [8, 432, 0, 45, 659],
      [8, 480, 0, 45, 659],
      [8, 528, 0, 45, 659],
      [8, 576, 0, 45, 659],
      [8, 624, 0, 45, 659],
      [8, 672, 0, 45, 659],
      [8, 720, 0, 45, 659],
      [8, 768, 0, 45, 659],
      [8, 816, 0, 45, 659],
      [8, 864, 0, 45, 659],
      [8, 912, 0, 45, 659],
      [8, 960, 0, 45, 659],
      [8, 1008, 0, 45, 659],
      [8, 1056, 0, 45, 659],
      [8, 1104, 0, 45, 659],
      [8, 192, 0, 45, 659],
      [8, 192, 0, 45, 659],
      [8, 192, 0, 45, 659],
      [8, 192, 0, 45, 659],
      [8, 192, 0, 45, 659],
      [8, 192, 0, 45, 659],
      [8, 192, 0, 45, 659],
      [8, 1152, 0, 45, 659],
      [8, 1200, 0, 45, 659],
      [8, 1248, 0, 45, 659],
    ],
    cg = [
      [1, 0, 0, 340, 116],
      [1, 1026, 0, 337, 140],
      [1, 686, 0, 337, 190],
    ];
  var dg = () => {
      if (td()) throw Error("p");
      return ud() || !!document.getElementById("fkbx") || rd() || qd();
    },
    eg = () => {
      if (td()) throw Error("p");
      return sd() || qd() || (isMobile() && !isTouchDevice());
    },
    isAutoStart = () => autoStart,
    gg = () => {
      const a = !isMobile() && ud() && 600 >= window.innerHeight;
      return !vd && (ud() || a) && !qd();
    };
  const hg = [5, 6, 7, 8, 9, 11, 12, 16];
  let ig = 0,
    jg = !1,
    kg = {},
    lg = [];
  var ng = () => {
      kg.d = Vd;
      !jg && isAutoStart() && ((jg = !0), mg(10));
    },
    og = (a, b, c = !1) => {
      kg[a] = b;
      c && !lg.includes(a) && lg.push(a);
    },
    mg = (a) => {};
  function pg(a) {
    const b = Date.now(),
      c = b - (a.j || b);
    a.j = b;
    og("d1", c);
  }
  function qg(a) {
    var b = rg;
    b.o.has(a) || (pg(b), (kg.c = a), mg(1), b.o.add(a));
  }
  function sg(a, b, c) {
    var d = tg;
    og("d3", a, !0);
    og("d2", b, !0);
    og("d4", c ? 1 : 0, !0);
    d.log(102);
  }
  var rg = new (class {
    constructor() {
      this.j = 0;
      this.o = new Set();
      this.s = new Set();
      this.i = 0;
      ng();
    }
    log(a) {
      pg(this);
      mg(a);
      this.s.add(a);
    }
  })();
  const ug = [5, 6, 7, 8, 9];
  const vg = T();
  function wg(a, b) {
    return new G(b / a.i.x, b / a.i.x);
  }
  function xg(a, b) {
    return a + Math.random() * (b - a);
  }
  function yg(a, b, c, d, e = He) {
    return new Le(
      d,
      () => (null != b ? b : F(a)),
      () => c,
      (f) => {
        a.set(f.x, f.y);
      },
      e,
    );
  }
  function zg(a, b, c) {
    var d = b[3];
    var e = b[4];
    const f = c ? Math.min(c / d, c / e) : 1;
    a.style.background = $e(vg, b, null != c ? c : Math.max(d, e));
    a.style.width = `${d * f}px`;
    a.style.height = `${e * f}px`;
  }
  function U(a, b, c, d = He) {
    return new Ke(
      c,
      () => a.alpha,
      () => b,
      (e) => {
        a.alpha = e;
      },
      d,
    );
  }
  function Ag(a, b, c) {
    return new Ke(
      300,
      () => b,
      () => c,
      (d) => {
        a.scale.x = d;
        a.scale.y = d;
      },
      He,
    );
  }
  function Bg(a, b) {
    return new Ke(
      400,
      () => 0,
      () => b * Math.PI * 2,
      (c) => {
        a.rotation = c;
      },
      He,
    );
  }
  function Cg(a, b, c = !0) {
    const d = [];
    for (const e of a) d.push(new Se(R(vg, e)));
    a = new Re(d, c);
    a.s = b;
    return a;
  }
  function Dg() {
    document.querySelector("#game").focus();
  }
  const Eg = T();
  function Fg(a) {
    return Math.abs(a.o - a.s) <= (a.wa[a.j] + 0.01) / 2;
  }
  function Gg(a) {
    return 0 === a.j ? 0 : a.u.slice(0, a.j).reduce((b, c) => b + c, 0);
  }
  function Hg(a) {
    0 === a.u.length ? a.u.push(a.o) : a.u.push(a.o - Gg(a));
  }
  function Ig(a) {
    const b = a.ta[a.j + 1] || 1 - a.ta.reduce((c, d) => c + d, 0);
    return a.s + 0.5 * b;
  }
  function Jg(a) {
    let b = 0,
      c = 0,
      d = 0;
    for (let e = 0; e < a.ta.length; e++) (c += a.ta[e]), (d += a.u[e]), void 0 !== d && Math.abs(d - c) <= (a.wa[e] + 0.01) / 2 && b++;
    return b;
  }
  var V = class extends y {
    constructor(a, b, c, d) {
      super();
      this.ta = a;
      this.wa = b;
      this.W = c;
      this.wb = d;
      this.j = 0;
      this.v = [!1, !1, !1];
      this.o = 0;
      this.u = [];
      this.s = this.ta[this.j];
      this.i = R(Eg, mf);
      this.yb = ["pearls", c.ob, "#ffed95"];
    }
  };
  function Kg(a) {
    a.j.alpha = 0.8;
    a.i.alpha = 0;
    a.o.alpha = 0;
  }
  function Lg(a) {
    a.j.alpha = 0;
    a.i.alpha = 0;
    a.o.alpha = 0;
  }
  var Mg = class extends y {
      constructor(a, b, c) {
        super();
        this.j = a;
        this.i = b;
        this.o = c;
        this.s = !1;
      }
    },
    Ng = R(Eg, tf),
    Og = R(Eg, [16, 279, 0, 276, 53]),
    Pg = Cg(
      [
        [16, 558, 0, 276, 53],
        [16, 837, 0, 276, 53],
        [16, 1116, 0, 276, 53],
        [16, 1395, 0, 276, 53],
        [16, 1674, 0, 276, 53],
        [16, 0, 56, 276, 53],
        [16, 279, 56, 276, 53],
        [16, 558, 56, 276, 53],
        [16, 837, 56, 276, 53],
        [16, 1116, 56, 276, 53],
        [16, 1395, 56, 276, 53],
        [16, 1674, 56, 276, 53],
        [16, 0, 112, 276, 53],
        [16, 279, 112, 276, 53],
        [16, 558, 112, 276, 53],
        [16, 837, 112, 276, 53],
        [16, 1116, 112, 276, 53],
        [16, 1395, 112, 276, 53],
        [16, 1674, 112, 276, 53],
        [16, 0, 168, 276, 53],
        [16, 279, 168, 276, 53],
        [16, 558, 168, 276, 53],
        [16, 837, 168, 276, 53],
        [16, 1116, 168, 276, 53],
        [16, 1395, 168, 276, 53],
        [16, 1674, 168, 276, 53],
        [16, 0, 224, 276, 53],
        [16, 279, 224, 276, 53],
        [16, 558, 224, 276, 53],
        [16, 837, 224, 276, 53],
        [16, 1116, 224, 276, 53],
        [16, 1395, 224, 276, 53],
        [16, 1674, 224, 276, 53],
        [16, 0, 280, 276, 53],
        [16, 279, 280, 276, 53],
      ],
      24,
      !0,
    ),
    Qg = class extends y {
      constructor(a) {
        super();
        this.Cb = a;
      }
    },
    Rg = R(Eg, Mf),
    W = class extends y {
      constructor(a = 0) {
        super();
        this.s = a;
        this.i = !1;
        this.o = this.Ka = 1;
        this.j = 0;
      }
    },
    Sg = class extends y {
      constructor(a = 0.005) {
        super();
        this.Zb = a;
      }
    },
    Tg = class extends y {},
    Ug = class extends y {
      constructor(a = new G(0, 0)) {
        super();
        this.rb = a;
      }
    },
    Vg = class extends y {
      constructor(a, b) {
        super();
        this.j = a;
        this.i = b;
      }
    },
    Wg = class extends y {
      constructor(a, b, c) {
        super();
        this.i = a;
        this.wc = b;
        this.Ec = c;
      }
    },
    Xg = class extends y {},
    Yg = class extends y {},
    Zg = class extends y {},
    $g = class extends y {},
    ah = class extends y {};
  function bh(a) {
    a.sort((b, c) => {
      b = b.get(O);
      c = c.get(O);
      return b.Cb - c.Cb || b.i - c.i || b.j - c.j;
    });
  }
  function ch(a) {
    var b = D(a.i.find(Me), "Can't find camera");
    a = b.get(P);
    a.position.x = -a.position.x;
    a.position.y = -a.position.y;
    a.rotation = -a.rotation;
    b = ze(b);
    a.position.x = -a.position.x;
    a.position.y = -a.position.y;
    a.rotation = -a.rotation;
    return b;
  }
  function dh(a, b, c) {
    b.ya instanceof Oe ? ((b = b.ya), a.o.drawImage(b.o, b.j.x, b.j.y, b.i.x, b.i.y, 0, 0, b.i.x, b.i.y)) : b.ya instanceof Qe && b.ya.i(c);
  }
  var eh = class extends C {
      constructor(a, b) {
        super(a);
        this.o = b;
      }
      j() {
        const a = this.o;
        a.save();
        a.clearRect(0, 0, a.canvas.width, a.canvas.height);
        const b = ch(this);
        var c = this.i.find(O);
        bh(c);
        for (const d of c)
          (c = d.get(O)), (a.globalAlpha = c.alpha), Pc(b, a), Oc(ze(d), a), a.translate(c.offset.x, c.offset.y), dh(this, c, a);
        a.restore();
      }
    },
    fh = class extends C {
      j(a) {
        for (const b of this.i.find(Re)) {
          const c = b.get(Re),
            d = 0 === c.s ? Infinity : 1e3 / c.s;
          let e = c.i[c.index];
          for (c.o += a; c.o >= d; )
            c.index++, c.index >= c.i.length && ((c.index = c.loop ? 0 : c.i.length - 1), c.j && c.j()), (c.o -= d), (e = c.i[c.index]);
          b.get(O).ya = e.ya;
          b.get(O).offset = c.offset;
        }
      }
    };
  var gh = class extends C {
      constructor(a, b, c) {
        super(a);
        this.v = b;
        this.u = c;
        this.s = this.o = !1;
        this.v.addEventListener("pointerdown", () => {
          this.o = !0;
        });
        this.v.addEventListener("pointerup", () => {
          this.o = !1;
        });
        this.u.addEventListener("keydown", (d) => {
          "Space" === d.code && (this.o = !0);
        });
        this.u.addEventListener("keyup", (d) => {
          "Space" === d.code && (this.o = !1);
        });
      }
      j() {
        this.s = this.o;
      }
    },
    hh = class extends C {
      j(a) {
        for (const b of this.i.find(M)) {
          const c = b.get(M).actions;
          for (let d = c.length - 1; 0 <= d; d--) ra(c[d], a), c[d].i() && c.splice(d, 1);
        }
      }
    },
    ih = class extends C {
      j() {
        for (const a of this.i.find(oe)) {
          const b = a.get(oe),
            c = b.o;
          if (b.j !== c.index) {
            let d = b.j;
            for (; d !== c.index; ) {
              d = (d + 1) % c.i.length;
              const e = b.i.get(d);
              e && e();
            }
          }
          b.j = c.index;
        }
      }
    },
    jh = class extends eh {
      constructor(a, b, c) {
        super(a, b);
        this.filter = c;
      }
      j() {
        const a = this.o;
        a.save();
        a.clearRect(0, 0, a.canvas.width, a.canvas.height);
        const b = ch(this);
        var c = this.i.find(O).filter(this.filter);
        bh(c);
        for (const d of c)
          (c = d.get(O)), (a.globalAlpha = c.alpha), Pc(b, a), Oc(ze(d), a), a.translate(c.offset.x, c.offset.y), dh(this, c, a);
        a.restore();
      }
    };
  const kh = new G(1, 1),
    lh = T();
  function mh(a, b) {
    a.save();
    a.clearRect(0, 0, a.canvas.width, a.canvas.height);
    a.globalCompositeOperation = "destination-over";
    for (var c = 0; c < b.u.length; c++) {
      var d = b.u[c],
        e = b.yb[c],
        f = b.u.slice(0, c + 1).reduce((g, h) => g + h, 0);
      "pearls" === e
        ? ((d *= b.i.i.y), (e = b.W.Da.Qa), a.drawImage(e.o, e.j.x, e.j.y + 7, e.i.x, d, 0, (1 - f) * e.i.y, e.i.x, d))
        : ((a.fillStyle = e), a.fillRect(0, (1 - f) * b.i.i.y, b.i.i.x, 0 === d ? 0 : b.i.i.y));
    }
    "pearls" === b.yb[b.j]
      ? ((c = b.W.Da.Qa), (f = c.i.y * (b.o - Gg(b))), a.drawImage(c.o, c.j.x, c.j.y + 7, c.i.x, f, 0, (1 - b.o) * c.i.y, c.i.x, f))
      : ((a.fillStyle = b.yb[b.j]),
        a.fillRect(0, (1 - b.o) * b.i.i.y, b.i.i.x, b.i.i.y * (b.o - Gg(b))),
        a.fillRect(0, (1 - Gg(b)) * b.i.i.y, b.i.i.x, b.i.i.y * (b.o - Gg(b))));
    a.globalCompositeOperation = "destination-in";
    a.drawImage(b.i.o, b.i.j.x, b.i.j.y, b.i.i.x, b.i.i.y, kh.x, kh.y, b.i.i.x - 2 * kh.x, b.i.i.y - 2 * kh.y);
    a.globalCompositeOperation = "source-over";
    a.restore();
  }
  function nh(a, b) {
    const c = oh(b.i),
      d = c.canvas;
    var e = R(lh, lf);
    const f = 270 - e.i.x / 2,
      g = 625 - e.i.y - 40,
      h = B(a, new A(new P(new G(f, g)), b));
    se(
      h,
      new A(
        new P(),
        new O(
          new Qe((Fj) => {
            mh(c, b);
            Fj.drawImage(d, 0, 0);
          }),
        ),
      ),
    );
    se(h, new A(new P(), new O(e)));
    const m = R(lh, tf);
    var w = new O(Ng, 1, 0);
    const E = new O(Og, 1, 1),
      S = new O(Og, 1, 2);
    var ma = new A(new P(), w),
      qb = new A(new P(), E),
      Nc = new A(new P(), S, Pg);
    w = new Mg(w, E, S);
    Kg(w);
    e = new A(new P(new G(e.i.x / 2 - m.i.x / 2, 100)), w);
    N(e, ma);
    N(e, qb);
    N(e, Nc);
    N(h, e);
    ma = 0;
    for (qb = 0; 3 > qb; qb++)
      (Nc = new A(new P(new G(-60, 0), 0, new G(0, 0)), new O(R(lh, Mf), 2, 0, Mc(F(Rg.i), -0.5)), new Qg(qb))),
        (e = Nc.get(P)),
        (ma += b.ta[qb]),
        (e.position.y = (1 - ma) * b.i.i.y),
        N(h, Nc);
    B(a, new A(new ah(), new P(new G(f + 15, g + 270)), new O(R(lh, nf))));
    se(h, new A(new $g(), new P(new G(-24, 0))));
  }
  function ph(a, b) {
    b = R(lh, b);
    const c = oh(b);
    c.fillStyle = a;
    c.fillRect(0, 0, c.canvas.width, c.canvas.height);
    c.globalCompositeOperation = "destination-in";
    c.drawImage(b.o, b.j.x, b.j.y, b.i.x, b.i.y, 0, 0, b.i.x, b.i.y);
    return c.canvas;
  }
  function oh(a) {
    const b = document.createElement("canvas"),
      c = b.getContext("2d");
    b.width = a.i.x;
    b.height = a.i.y;
    return c;
  }
  function qh(a) {
    const b = 0 < a.find(Zg).length,
      c = 0 < a.find(Yg).length;
    return 0 < D(a.find(W)).get(W).Ka && 0 < a.find(Xg).length && (!b || c);
  }
  function rh(a) {
    const b = D(Hc(a, gh));
    return qh(a) && b.o && !b.s;
  }
  function sh(a) {
    const b = D(Hc(a, gh)),
      c = D(a.find(W)).get(W);
    a = a
      .find(Sg)
      .map((d) => d.get(Sg).Zb)
      .reduce((d, e) => d + e, 0);
    return ((b.s && !b.o) || c.o <= a) && c.i && 0 < c.Ka;
  }
  function th(a) {
    const b = D(a.find(Mg)).get(Mg);
    zc(v.Ub, 0.1);
    v.Ub.play(0, !1);
    return new q([
      new r([
        new n(() => {
          b.j.alpha = 0;
          b.i.alpha = 0;
          b.o.alpha = 1;
        }),
        new p(1e3),
      ]),
      new n(() => {
        Kg(b);
      }),
    ]);
  }
  function uh(a, b, c = !1) {
    const d = [];
    a = a.find(Vg, P);
    for (const e of a) {
      a = e.get(Vg);
      const f = e.get(P).position;
      d.push(b ? yg(f, a.j, a.i, 1e3, He) : yg(f, a.i, a.j, 1e3, Q));
    }
    if (c) {
      const e = [v.mc, v.nc, v.oc];
      b = Math.floor(xg(1, 4));
      vh(e);
      c = [];
      c.push(new p(100));
      for (let f = 0; f < b; f++)
        c.push(
          new n(() => {
            zc(e[f], 0.7);
            e[f].play(xg(50, 80) * f, !1);
          }),
        );
      d.push(new q(c));
    }
    return d;
  }
  function vh(a) {
    for (let b = a.length - 1; 0 < b; b--) {
      const c = Math.floor(Math.random() * (b + 1)),
        d = a[b];
      a[b] = a[c];
      a[c] = d;
    }
  }
  const wh = T();
  function xh(a) {
    const b = R(wh, qf);
    B(
      a.i,
      new A(
        new Tg(),
        new P(new G(270, 585)),
        new O(
          new Qe((c) => {
            c.save();
            c.globalCompositeOperation = "destination-in";
            c.drawImage(b.o, b.j.x, b.j.y, b.i.x, b.i.y, 0, 0, b.i.x, b.i.y);
            c.restore();
          }),
          -1,
          1,
          new G(-b.i.x / 2, -b.i.y),
        ),
      ),
    );
    B(a.i, new A(new P(), new O(new Qe((c) => void c.drawImage(a.H, 0, 0)), -1, 1)));
  }
  var yh = class {
    constructor(a, b, c = !1) {
      this.u = a;
      this.j = b;
      this.U = c;
      this.i = new Kc();
      this.H = document.createElement("canvas");
      this.T = this.H.getContext("2d");
      this.H.height = 625;
      this.H.width = 540;
      this.o();
      this.O();
    }
    o() {
      nh(this.i, this.j);
      var a = R(wh, yf);
      B(this.i, new A(new P(new G(0, 0), 0, wg(a, 540)), new O(a, 2)));
      a = new Wg(R(wh, Af), R(wh, zf), R(wh, Bf));
      const b = new O(a.i, 2);
      B(this.i, new A(a, b, new P(new G(400, 480), 0, wg(a.i, 100))));
      B(this.i, new A(new M([new q([new wa(() => qh(this.i)), U(b, 1, 1e3, He)])])));
      xh(this);
      B(this.i, new A(new P(), new Me()));
    }
  };
  const tg = rg;
  var zh = class extends C {
      j() {
        var a = D(this.i.find(V, P));
        const b = a.get(V),
          c = D(this.i.find(W)).get(W);
        a = a.get(P).position.y + (1 - b.o) * b.i.i.y;
        for (const d of this.i.find(Sg, P)) {
          const e = d.get(P).position,
            f = d.get(Sg);
          e.y > a && ((b.o = Math.min(1, b.o + f.Zb)), (c.o = Math.max(0, Ig(b) - b.o)), Jc(this.i, d));
        }
      }
    },
    Ah = class extends C {
      j(a) {
        for (const b of this.i.find(Ug, P)) {
          const c = b.get(Ug),
            d = b.get(P).position;
          c.rb.y += 0.01 * a;
          d.x += c.rb.x;
          d.y += c.rb.y;
        }
      }
    },
    Bh = class extends C {
      j() {
        for (const a of this.i.find(Ug, P)) {
          const { rb: b } = a.get(Ug);
          a.get(P).rotation = -Math.PI / 2 + Math.atan2(b.y, b.x);
        }
      }
    },
    Ch = class extends C {
      constructor(a, b, c) {
        super(a);
        this.u = b;
        this.s = c;
        this.o = !1;
      }
      j() {
        var a = this.i.find(Sg).length;
        const b = D(this.i.find(V)).get(V);
        var c = D(this.i.find(W)).get(W);
        0 === a &&
          (b.o >= b.s - b.wa[b.j] / 2 || 0 === c.Ka) &&
          !this.o &&
          ((this.o = !0),
          sg(b.wb, this.s, Fg(b)),
          Hg(b),
          (a = []),
          (c = D(this.i.find(Wg))),
          Fg(b) ? (a.push(th(this.i)), (b.v[b.j] = !0), (c.get(O).ya = c.get(Wg).wc)) : (c.get(O).ya = c.get(Wg).Ec),
          a.push(this.u),
          a.push(
            new n(() => {
              b.j++;
              b.s += b.ta[b.j];
              B(this.i, new A(new me()));
            }),
          ),
          B(this.i, new A(new M([new q(a)]))));
      }
    };
  function Dh(a, b) {
    const c = D(a.i.find(W, P)).get(W);
    if (c.i) for (c.j -= b; 0 >= c.j; ) a.s(), (c.j += c.s);
  }
  var Eh = class extends C {},
    Fh = class extends C {
      constructor() {
        super(...arguments);
        this.o = !0;
      }
      j() {
        var a = D(this.i.find(V)).get(V),
          b = D(this.i.find(Mg));
        const c = b.get(Mg);
        b = b.get(P);
        if (this.o) {
          let d;
          const e = null != (d = 0 < a.j ? a.s - a.ta[a.j] : null) ? d : a.s;
          b.scale.y = (a.wa[a.j] * a.i.i.y) / 9;
          b.position.y = (1 - e - a.wa[a.j] / 2) * a.i.i.y - 22 * b.scale.y;
          B(
            this.i,
            new A(new M([yg(b.position, null, new G(b.position.x, (1 - a.s - a.wa[a.j] / 2) * a.i.i.y - 22 * b.scale.y), 400, Ee)])),
          );
          this.o = !1;
        }
        Fg(a) && !c.s
          ? ((c.s = !0), (a = this.i), (c.j.alpha = 0.8), (c.i.alpha = 0), (c.o.alpha = 0), B(a, new A(new M([U(c.i, 0.8, 400)]))))
          : !Fg(a) &&
            c.s &&
            ((c.s = !1), (a = this.i), (c.j.alpha = 0.8), (c.i.alpha = 1), (c.o.alpha = 0), B(a, new A(new M([U(c.i, 0, 400)]))));
      }
    },
    Gh = class extends C {
      constructor() {
        super(...arguments);
        this.o = [!1, !1, !1];
        this.s = !0;
      }
      j() {
        const a = D(this.i.find(V)).get(V);
        for (const b of this.i.find(Qg, P))
          for (const [c, d] of a.v.entries()) {
            const e = c,
              f = d;
            if (e === b.get(Qg).Cb) {
              const g = b.get(P);
              this.s && f
                ? g.scale.set(1, 1)
                : f && !this.o[e]
                  ? B(this.i, new A(new M([new r([Ag(b.get(P), 0, 1), Bg(b.get(P), 1)])])))
                  : !f && this.o[e] && B(this.i, new A(new M([new r([Ag(b.get(P), 1, 0), Bg(b.get(P), -1)])])));
              this.o[e] = f;
            }
          }
        this.s = !1;
      }
    };
  var Hh = {
    ad: ["ca"],
    ae: ["ar", "en", "fa", "hi", "ur"],
    af: ["ps", "fa"],
    ag: ["en"],
    ai: ["en"],
    al: ["sq", "en"],
    am: ["hy", "ru"],
    ao: ["pt-PT"],
    ar: ["es-419", "es"],
    as: ["en"],
    at: ["de"],
    au: ["en"],
    az: ["az", "ru"],
    ba: ["bs", "hr", "sr"],
    bd: ["bn", "en"],
    be: ["nl", "de", "en", "fr"],
    bf: ["fr"],
    bg: ["bg"],
    bh: ["ar", "en"],
    bi: ["fr"],
    bj: ["fr"],
    bn: ["ms", "en", "zh-CN"],
    bo: ["es-419", "es"],
    br: ["pt-BR", "en"],
    bs: ["en"],
    bt: ["en"],
    bw: ["tn", "en"],
    by: ["be", "ru"],
    bz: ["en", "es", "es-419"],
    ca: ["en", "fr", "fr-CA"],
    cd: ["fr", "sw"],
    cf: ["fr"],
    cg: ["fr"],
    ch: ["de", "en", "fr", "it"],
    ci: ["fr"],
    ck: ["en"],
    cl: ["es-419", "es"],
    cm: ["fr", "en"],
    cn: ["zh-CN"],
    co: ["es-419", "es"],
    cr: ["es-419", "en", "es"],
    cu: ["es-419", "es"],
    cv: ["pt-PT"],
    cy: ["en", "el", "tr"],
    cz: ["cs"],
    de: ["de", "en", "fr"],
    dj: ["fr", "ar", "so"],
    dk: ["da"],
    dm: ["en"],
    do: ["es-419", "es"],
    dz: ["fr", "ar"],
    ec: ["es-419", "es"],
    ee: ["et", "ru"],
    eg: ["ar", "en"],
    es: ["es", "ca", "en", "eu", "gl"],
    et: ["am", "en", "so"],
    fi: ["fi", "sv"],
    fj: ["en"],
    fr: ["fr"],
    ga: ["fr"],
    ge: ["ka", "en"],
    gg: ["en", "fr"],
    gh: ["en"],
    gi: ["en", "es", "it", "pt-PT"],
    gl: ["da", "en"],
    gm: ["en", "wo"],
    gr: ["el"],
    gt: ["es-419", "es"],
    gy: ["en"],
    hk: ["zh-TW", "en", "zh-CN", "zh-HK"],
    hn: ["es-419", "es"],
    hr: ["hr"],
    ht: ["fr", "en", "ht"],
    hu: ["hu"],
    id: ["id", "en", "nl"],
    ie: ["en-GB", "ga"],
    il: ["iw", "ar", "en"],
    im: ["en"],
    in: "en bn gu hi kn ml mr ne or pa ta te".split(" "),
    iq: ["ar", "en"],
    is: ["is", "en"],
    it: ["it", "en"],
    je: ["en", "fr"],
    jm: ["en"],
    jo: ["ar", "en"],
    jp: ["ja"],
    ke: ["sw", "en"],
    kg: ["ky", "ru"],
    kh: ["km", "en"],
    ki: ["en"],
    kr: ["ko"],
    kw: ["ar", "en"],
    kz: ["kk", "ru"],
    la: ["lo", "en"],
    lb: ["ar", "en", "fr", "hy"],
    lk: ["en", "si", "ta"],
    ls: ["st", "en", "zu"],
    lt: ["lt"],
    lu: ["de", "fr"],
    lv: ["lv", "lt", "ru"],
    ly: ["ar", "en", "it"],
    ma: ["fr", "ar"],
    md: ["ro", "ro-MD", "ru"],
    me: ["sr-ME", "bs", "sr"],
    mg: ["mg", "fr"],
    mk: ["mk"],
    ml: ["fr"],
    mm: ["my", "en"],
    mn: ["mn"],
    mt: ["mt", "en"],
    mu: ["en", "fr"],
    mv: ["en"],
    mw: ["ny", "en"],
    mx: ["es-419", "es"],
    my: ["en", "ms"],
    mz: ["pt-PT", "ny", "sn", "sw"],
    na: ["en", "af", "de"],
    ne: ["fr"],
    ng: ["en"],
    ni: ["es-419", "en", "es"],
    nl: ["nl", "en"],
    no: ["no", "nn"],
    np: ["ne", "en"],
    nr: ["en"],
    nu: ["en"],
    nz: ["en-GB"],
    om: ["ar", "en"],
    pa: ["es-419", "en", "es"],
    pe: ["es-419", "es"],
    pg: ["en"],
    ph: ["en"],
    pk: ["en", "pa", "ur"],
    pl: ["pl"],
    pn: ["en"],
    pr: ["es-419", "en", "es"],
    ps: ["ar", "en"],
    pt: ["pt-PT"],
    py: ["es-419", "es"],
    qa: ["ar", "en"],
    ro: ["ro", "de", "hu"],
    rs: ["sr", "sr-Latn"],
    ru: ["ru"],
    rw: ["en", "fr", "sw"],
    sa: ["ar", "en"],
    sb: ["en"],
    sc: ["crs", "en", "fr"],
    se: ["sv"],
    sg: ["en", "ms", "ta", "zh-CN"],
    si: ["sl"],
    sk: ["sk", "hu"],
    sl: ["en"],
    sm: ["it"],
    sn: ["fr", "wo"],
    so: ["so", "ar", "en"],
    sr: ["nl", "en"],
    st: ["pt-PT"],
    sv: ["es-419", "es"],
    td: ["fr", "ar"],
    tg: ["fr"],
    th: ["th", "en"],
    tj: ["tg", "ru"],
    tl: ["pt-PT", "en", "id"],
    tm: ["tk", "ru", "uz"],
    tn: ["ar", "fr"],
    to: ["en"],
    tr: ["tr"],
    tt: "en es es-419 fr hi zh-TW".split(" "),
    tw: ["zh-TW", "en"],
    tz: ["sw", "en"],
    ua: ["uk", "ru"],
    ug: ["en"],
    uk: ["en-GB"],
    us: ["en", "es", "es-419", "zh-CN"],
    uy: ["es-419", "es"],
    uz: ["uz", "ru"],
    vc: ["en"],
    ve: ["es-419", "es"],
    vi: ["en"],
    vn: ["vi", "en", "fr", "zh-TW"],
    vu: ["en", "fr"],
    ws: ["en"],
    za: ["en", "af", "st", "tn", "zu"],
    zm: ["en", "ny", "sn"],
    zw: ["en", "ny", "sn", "tn", "zu"],
  };
  function Ih(a, b, c, d) {
    const e = `${b}-${c}`;
    if (d.includes(e)) return (a.i = b), e;
    if (b && d.includes(b)) return (a.i = b);
    if (c && Hh[c]) for (const f of Hh[c]) if (d.includes(f)) return (a.i = f), a.i;
    return d.includes("en") ? ((a.i = "en"), a.i) : (a.i = null);
  }
  function X(a, b) {
    if (null == a.j) throw Error("q");
    a = void 0 === a.j[b] ? "" : a.j[b];
    let c = (b = 0),
      d = !1;
    const e = a.split(zd);
    for (let f = 0; f < e.length; f++) {
      const g = e[f];
      xd.test(g) ? (b++, c++) : yd.test(g) ? (d = !0) : wd.test(g) ? c++ : Ad.test(g) && (d = !0);
    }
    b = 0 == c ? (d ? 1 : 0) : 0.4 < b / c ? -1 : 1;
    return 1 == b ? "\u202a" + a + "\u202c" : -1 == b ? "\u202b" + a + "\u202c" : a;
  }
  var Jh = class {
    constructor() {
      this.i = this.j = null;
    }
    load(a, b, c, d) {
      a = Ih(this, a, b, c);
      if (null == a) return Promise.resolve();
      const e = `${assetsPath}strings.${a}.json`,
        f = new bc();
      f.ka = "text";
      return new Promise((g, h) => {
        fb(f, "success", () => {
          try {
            var m = f.i ? f.i.responseText : "";
          } catch (w) {
            m = "";
          }
          this.j = JSON.parse(m);
          g();
        });
        fb(f, "error", h);
        ec(f, e);
      });
    }
  };
  function Kh(a, b, c, d, e = 10) {
    for (a.style.fontSize = b + "px"; (a.offsetWidth > c || a.offsetHeight > d) && b > e; ) b--, (a.style.fontSize = b + "px");
  }
  const Lh = cf(Jh),
    Mh = T();
  function Nh(a) {
    a.j.textContent = X(Lh, "tutorial_main");
    B(
      a.i,
      new A(
        new M([
          new Ke(
            2e3,
            () => 0,
            () => 1,
            (b) => {
              a.j.style.opacity = `${b}`;
            },
            Ee,
          ),
        ]),
      ),
    );
    zg(document.querySelector(".ddl-pointer_"), Ff);
    document.querySelector(".ddl-pointerWrapper_").classList.remove("ddl-hidden_");
  }
  function Oh(a) {
    a.j.textContent = X(Lh, "tutorial_intro");
    zg(a.u, Hf);
    a.u.setAttribute("aria-label", X(Lh, "button_next"));
    a.o.addEventListener("click", () => {
      a.s
        ? 0 < a.i.find(Xg).length &&
          B(
            a.i,
            new A(
              new M([
                new q([
                  new p(200),
                  new n(() => {
                    a.o.classList.add("ddl-hidden_");
                    a.o.style.pointerEvents = "none";
                    Dg();
                    B(a.i, new A(new Yg()));
                    qg(4);
                  }),
                ]),
              ]),
            ),
          )
        : (Jc(a.i, c), (a.j.style.opacity = "0"), Nh(a), (a.s = !0));
    });
    const b = R(Mh, Vf),
      c = new A(new P(new G(270 - b.i.x / 2, 625 - b.i.y - 40)), new O(b));
    B(a.i, c);
  }
  var Ph = class {
    constructor(a) {
      this.i = a;
      this.s = !1;
      this.u = document.querySelector(".ddl-next_");
      this.o = document.querySelector(".ddl-tutorialWrapper_");
      this.j = document.querySelector(".ddl-tutorialText_");
      Kh(this.j, 40, 280, 150);
    }
    start() {
      Lg(D(this.i.find(Mg)).get(Mg));
      B(this.i, new A(new Zg()));
      B(
        this.i,
        new A(
          new M([
            new q([
              new p(1e3),
              new n(() => {
                this.o.classList.remove("ddl-hidden_");
                Dg();
              }),
            ]),
          ]),
        ),
      );
    }
  };
  const Qh = T();
  var Rh = class extends y {},
    Sh = R(Qh, gf);
  const Th = T();
  var Uh = class extends Eh {
    constructor() {
      super(...arguments);
      this.u = oh(Sh);
      this.o = 1;
    }
    j(a) {
      const b = D(this.i.find(W, P));
      var c = D(this.i.find(V)).get(V),
        d = b.get(W);
      this.o = Math.min(d.o / (Ig(c) - Gg(c)), 1);
      const e = 0 < this.i.find(Zg).length;
      rh(this.i) && (!e || 0 < this.i.find(Yg).length)
        ? ((d.i = !0),
          (c = Cg(c.W.Da.Ra, 24, !1)),
          (d = new oe(c)),
          ne(d, c.i.length - 1, () => {
            const f = D(this.i.find(V))
              .get(V)
              .W.Da.Ua.map((g) => R(Th, g));
            se(
              b,
              new A(
                new P(new G(8, 30)),
                new O(
                  new Qe((g) => {
                    var h = this.u,
                      m = this.o;
                    h.save();
                    h.clearRect(0, 0, h.canvas.width, h.canvas.height);
                    m = Math.floor((1 - m) * f.length);
                    m < f.length && ((m = f[m]), h.drawImage(m.o, m.j.x, m.j.y, m.i.x, m.i.y, 0, 0, m.i.x, m.i.y));
                    h.restore();
                    g.drawImage(this.u.canvas, 0, 0);
                  }),
                ),
              ),
            );
          }),
          z(b, c),
          z(b, d))
        : sh(this.i) && ((d.i = !1), d.Ka--);
      Dh(this, a);
    }
    s() {
      var a = D(this.i.find(V)).get(V),
        b = D(this.i.find(W, P)).get(P).position;
      const c = b.x + xg(25, Sh.i.x - 25);
      b = xg(b.y + (1 - this.o) * Sh.i.y + 30, b.y + Sh.i.y - 30);
      zc(v.Nb, 1.5);
      v.Nb.play(1e3, !1);
      var d = this.i;
      a = a.W.Da.mb;
      var e = new G(25, 25);
      a = new A(new Ug(new G(0, xg(1, 10))), new Sg(0), new Tg(), new P(new G(c, b), 0, new G(e.x / a.i.x, e.y / a.i.y)), new O(a, -1));
      B(d, a);
      B(this.i, new A(new P(new G(c, b), 0, new G(0.7, 0.7)), new Ug(new G(0, 2)), new Sg(0.018)));
    }
  };
  const Vh = T(),
    Wh = new G(600, 20),
    Xh = new G(500, 90),
    Yh = new G(170, 150),
    Zh = new G(-250, 210),
    $h = new G(0, 210),
    ai = new G(540, 210),
    bi = new G(405, 210);
  function ci(a) {
    const b = D(a.i.find(Rh, P)).get(P).position;
    return new r([
      new Le(
        1e3,
        () => F(b),
        () => F(Xh),
        (c) => {
          b.set(c.x, c.y);
        },
        Q,
      ),
      ...uh(a.i, !1),
    ]);
  }
  function di(a) {
    const b = D(a.i.find(Rh, P)).get(P).position,
      c = [];
    c.push(new p(1e3));
    const d = new Le(
        1e3,
        () => F(Wh),
        () => F(Yh),
        (f) => {
          b.set(f.x, f.y);
        },
        He,
      ),
      e = new n(() => {
        Kg(D(a.i.find(Mg)).get(Mg));
      });
    a.U
      ? (c.push(new r(uh(a.i, !0, !0))),
        c.push(
          new wa(() => {
            let f;
            return !(null == (f = a.s) || !f.s);
          }),
        ),
        c.push(e),
        c.push(d))
      : c.push(new r([...uh(a.i, !0, !0), d]));
    c.push(
      new n(() => {
        B(a.i, new A(new Xg()));
      }),
    );
    return new q(c);
  }
  var ei = class extends yh {
    O() {
      const a = document.querySelector("#game");
      this.i.i = [
        new Uh(this.i),
        new Ah(this.i),
        new zh(this.i),
        new Fh(this.i),
        new Gh(this.i),
        new Ch(this.i, ci(this), 1),
        new hh(this.i),
        new gh(this.i, this.u.canvas, a),
        new fh(this.i),
        new ih(this.i),
        new jh(this.i, this.T, (b) => !!b.i.get(Tg)),
        new jh(this.i, this.u, (b) => !b.i.get(Tg)),
      ];
    }
    o() {
      super.o();
      D(this.i.find(Wg, O)).get(O).alpha = 0;
      this.U && ((this.s = new Ph(this.i)), Oh(this.s), this.s.start());
      B(this.i, new A(new Rh(), new P(F(Wh)), new M(), new W(120), new O(R(Vh, this.j.W.Da.Ra[0]), 0)));
      B(this.i, new A(new P(F(Zh)), new Vg(F(Zh), F($h)), new O(R(Vh, Cf), -1)));
      B(this.i, new A(new P(F(ai)), new Vg(F(ai), F(bi)), new O(R(Vh, Df), -1)));
      B(this.i, new A(new M([di(this)])));
    }
  };
  const fi = T();
  var gi = [
      {
        tb: [
          [11, 846, 302, 420, 299],
          [11, 1269, 302, 420, 299],
        ],
        ab: [
          [11, 0, 302, 420, 299],
          [11, 423, 302, 420, 299],
        ],
        Xa: [13, 1669, 242, 100, 100],
        Ja: new G(-20, 30),
        ta: [0.3, 0.3, 0.2],
        wa: [0.1, 0.1, 0.1],
        W: {
          Sa: [
            [5, 0, 0, 315, 518],
            [5, 318, 0, 315, 518],
            [5, 636, 0, 315, 518],
            [5, 954, 0, 315, 518],
            [5, 1272, 0, 315, 518],
            [5, 1590, 0, 315, 518],
            [5, 0, 521, 315, 518],
            [5, 318, 521, 315, 518],
            [5, 636, 521, 315, 518],
            [5, 954, 521, 315, 518],
            [5, 1272, 521, 315, 518],
            [5, 1590, 521, 315, 518],
            [5, 0, 1042, 315, 518],
            [5, 318, 1042, 315, 518],
            [5, 636, 1042, 315, 518],
            [5, 954, 1042, 315, 518],
            [5, 954, 1042, 315, 518],
            [5, 1272, 1042, 315, 518],
            [5, 1590, 1042, 315, 518],
            [5, 0, 1563, 315, 518],
            [5, 318, 1563, 315, 518],
            [5, 636, 1563, 315, 518],
            [5, 954, 1563, 315, 518],
            [5, 1272, 1563, 315, 518],
          ],
          ob: "#fdcf77",
          Pa: bg,
          Ya: Lf,
          Va: [12, 1868, 0, 112, 176],
          Da: { Ra: cg, Ua: Xf, Qa: R(fi, hf), mb: R(fi, jf) },
        },
      },
      {
        tb: [
          [11, 846, 906, 420, 299],
          [11, 1269, 906, 420, 299],
        ],
        ab: [
          [11, 0, 906, 420, 299],
          [11, 423, 906, 420, 299],
        ],
        Xa: [13, 1875, 242, 100, 100],
        Ja: new G(-20, 30),
        ta: [0.5, 0.3, 0.1],
        wa: [0.08, 0.08, 0.08],
        W: {
          Sa: [
            [3, 0, 0, 314, 517],
            [3, 317, 0, 314, 517],
            [3, 634, 0, 314, 517],
            [3, 951, 0, 314, 517],
            [3, 1268, 0, 314, 517],
            [3, 1585, 0, 314, 517],
            [3, 0, 520, 314, 517],
            [3, 317, 520, 314, 517],
            [3, 634, 520, 314, 517],
            [3, 1585, 0, 314, 517],
            [3, 951, 520, 314, 517],
            [3, 1268, 520, 314, 517],
            [3, 1585, 520, 314, 517],
            [3, 0, 1040, 314, 517],
            [3, 317, 1040, 314, 517],
            [3, 634, 1040, 314, 517],
            [3, 634, 1040, 314, 517],
            [3, 951, 1040, 314, 517],
            [3, 1268, 1040, 314, 517],
            [3, 1585, 1040, 314, 517],
            [3, 0, 1560, 314, 517],
            [3, 317, 1560, 314, 517],
            [3, 634, 1560, 314, 517],
          ],
          ob: "#b9f27f",
          Pa: bg,
          Ya: Lf,
          Va: [12, 1638, 0, 112, 176],
          Da: { Ra: cg, Ua: Xf, Qa: R(fi, hf), mb: R(fi, jf) },
        },
      },
      {
        tb: [
          [11, 846, 604, 420, 299],
          [11, 1269, 604, 420, 299],
        ],
        ab: [
          [11, 0, 604, 420, 299],
          [11, 423, 604, 420, 299],
        ],
        Xa: [13, 1772, 242, 100, 100],
        Ja: new G(-20, 30),
        ta: [0.1, 0.5, 0.3],
        wa: [0.05, 0.05, 0.05],
        W: {
          Sa: [
            [4, 0, 0, 314, 517],
            [4, 317, 0, 314, 517],
            [4, 634, 0, 314, 517],
            [4, 951, 0, 314, 517],
            [4, 1268, 0, 314, 517],
            [4, 1585, 0, 314, 517],
            [4, 0, 520, 314, 517],
            [4, 317, 520, 314, 517],
            [4, 634, 520, 314, 517],
            [4, 1585, 0, 314, 517],
            [4, 951, 520, 314, 517],
            [4, 1268, 520, 314, 517],
            [4, 1585, 520, 314, 517],
            [4, 0, 1040, 314, 517],
            [4, 317, 1040, 314, 517],
            [4, 634, 1040, 314, 517],
            [4, 634, 1040, 314, 517],
            [4, 951, 1040, 314, 517],
            [4, 1268, 1040, 314, 517],
            [4, 1585, 1040, 314, 517],
            [4, 0, 1560, 314, 517],
            [4, 317, 1560, 314, 517],
            [4, 634, 1560, 314, 517],
          ],
          ob: "#caa124",
          Pa: bg,
          Ya: Lf,
          Va: [12, 1753, 0, 112, 176],
          Da: { Ra: cg, Ua: Xf, Qa: R(fi, hf), mb: R(fi, jf) },
        },
      },
      {
        tb: [
          [11, 846, 0, 420, 299],
          [11, 1269, 0, 420, 299],
        ],
        ab: [
          [11, 0, 0, 420, 299],
          [11, 423, 0, 420, 299],
        ],
        Xa: [13, 1566, 242, 100, 100],
        Ja: new G(10, 30),
        ta: [0.7, 0.1, 0.1],
        wa: [0.03, 0.03, 0.03],
        W: {
          Sa: [
            [7, 0, 0, 314, 517],
            [7, 317, 0, 314, 517],
            [7, 634, 0, 314, 517],
            [7, 951, 0, 314, 517],
            [7, 1268, 0, 314, 517],
            [7, 1585, 0, 314, 517],
            [7, 0, 520, 314, 517],
            [7, 317, 520, 314, 517],
            [7, 634, 520, 314, 517],
            [7, 1585, 0, 314, 517],
            [7, 951, 520, 314, 517],
            [7, 1268, 520, 314, 517],
            [7, 1585, 520, 314, 517],
            [7, 0, 1040, 314, 517],
            [7, 317, 1040, 314, 517],
            [7, 634, 1040, 314, 517],
            [7, 634, 1040, 314, 517],
            [7, 951, 1040, 314, 517],
            [7, 1268, 1040, 314, 517],
            [7, 1585, 1040, 314, 517],
            [7, 0, 1560, 314, 517],
            [7, 317, 1560, 314, 517],
            [7, 634, 1560, 314, 517],
          ],
          ob: "#ffad09",
          Pa: Yf,
          hc: new G(0, -174),
          Ya: [2, 0, 0, 292, 418],
          Va: [12, 1753, 179, 112, 176],
          Da: { Ra: cg, Ua: Xf, Qa: R(fi, hf), mb: R(fi, jf) },
        },
      },
      {
        tb: [
          [11, 846, 1208, 420, 299],
          [11, 1269, 1208, 420, 299],
        ],
        ab: [
          [11, 0, 1208, 420, 299],
          [11, 423, 1208, 420, 299],
        ],
        Xa: [13, 1360, 257, 100, 100],
        Ja: new G(50, 30),
        ta: [0.2, 0.7, 0.1],
        wa: [0.03, 0.03, 0.03],
        W: {
          Sa: [
            [6, 0, 0, 314, 517],
            [6, 317, 0, 314, 517],
            [6, 634, 0, 314, 517],
            [6, 951, 0, 314, 517],
            [6, 1268, 0, 314, 517],
            [6, 1585, 0, 314, 517],
            [6, 0, 520, 314, 517],
            [6, 317, 520, 314, 517],
            [6, 634, 520, 314, 517],
            [6, 1585, 0, 314, 517],
            [6, 951, 520, 314, 517],
            [6, 1268, 520, 314, 517],
            [6, 1585, 520, 314, 517],
            [6, 0, 1040, 314, 517],
            [6, 317, 1040, 314, 517],
            [6, 634, 1040, 314, 517],
            [6, 634, 1040, 314, 517],
            [6, 951, 1040, 314, 517],
            [6, 1268, 1040, 314, 517],
            [6, 1585, 1040, 314, 517],
            [6, 0, 1560, 314, 517],
            [6, 317, 1560, 314, 517],
            [6, 634, 1560, 314, 517],
          ],
          ob: "#cc94af",
          Pa: $f,
          hc: new G(5, -151),
          Ya: [2, 295, 0, 292, 418],
          Va: [12, 1638, 179, 112, 176],
          Da: {
            Ra: [
              [1, 343, 0, 340, 116],
              [1, 1366, 0, 337, 140],
              [1, 686, 0, 337, 190],
            ],
            Ua: [
              [1, 742, 193, 176, 157],
              [1, 384, 279, 176, 157],
              [1, 921, 303, 176, 157],
              [1, 1100, 303, 176, 157],
              [1, 1279, 303, 176, 157],
            ],
            Qa: R(fi, [1, 192, 119, 189, 279]),
            mb: R(fi, [1, 1927, 79, 77, 76]),
          },
        },
      },
    ],
    hi = [
      { nb: [13, 1520, 0, 120, 136], ub: [13, 1566, 139, 100, 100], Ha: "badge0" },
      { nb: [13, 1643, 0, 120, 136], ub: [13, 1669, 139, 100, 100], Ha: "badge1" },
      { nb: [13, 1766, 0, 120, 136], ub: [13, 1772, 139, 100, 100], Ha: "badge2" },
      { nb: [13, 1889, 0, 120, 136], ub: [13, 1875, 139, 100, 100], Ha: "badge3" },
    ];
  var ii = class extends y {},
    ji = class extends y {},
    ki = new G(-60, -90);
  var li = class extends C {
      j() {
        const a = D(this.i.find(ii, M)).get(M),
          b = D(this.i.find(ji, P)).get(P).position,
          c = F(ki),
          d = new G(c.x, c.y + 20),
          e = D(this.i.find(W, P)).get(W);
        if (rh(this.i)) {
          var f = (d.y - b.y) / 0.04;
          e.i = !0;
          a.actions = [
            new Le(
              f,
              () => F(b),
              () => F(d),
              (g) => void b.set(g.x, g.y),
              He,
            ),
          ];
        } else
          sh(this.i) &&
            ((f = (b.y - c.y) / 0.04),
            (e.i = !1),
            e.Ka--,
            (a.actions = [
              new Le(
                f,
                () => F(b),
                () => F(c),
                (g) => void b.set(g.x, g.y),
                He,
              ),
            ]));
      }
    },
    mi = class extends Eh {
      constructor() {
        super(...arguments);
        this.o = ph("#ffed95", Qf);
      }
      j(a) {
        Dh(this, a);
      }
      s() {
        var a = D(this.i.find(W, P));
        a = new G(0, 0).transform(ze(a));
        B(
          this.i,
          new A(
            new P(a, 0, new G(0.7, 0.7)),
            new Ug(new G(0, 6)),
            new Sg(0.0025),
            new Tg(),
            new O(new Qe((b) => void b.drawImage(this.o, 0, 0)), -1, -1, Mc(new G(this.o.width, this.o.height), -0.5)),
          ),
        );
      }
    };
  const ni = new G(370, 210),
    oi = new G(770, 210),
    pi = new G(0, 110),
    qi = new G(-500, 110),
    ri = new G(400, 90),
    si = new G(700, 90),
    ti = new G(15, 40),
    ui = T();
  function vi(a) {
    const b = uh(a.i, !1);
    var c = D(a.i.find(ii, P)).get(P).position;
    b.push(yg(c, F(ni), F(oi), 1e3, Q));
    var d = B(a.i, new A(new P(new G(270, 625))));
    c = D(a.i.find(Mg)).get(Mg);
    c = new r([
      new n(() => {
        a.j.v = [!1, !1, !1];
      }),
      new r([U(c.j, 0, 400), U(c.i, 0, 400), U(c.o, 0, 400)]),
    ]);
    var e = D(a.i.find(Wg, O)).get(O);
    b.push(U(e, 0, 1e3, Q));
    e = wi(a);
    var f = new A();
    const g = xi(a, f);
    N(d, f);
    var h = new A();
    const m = yi(a, h, f);
    N(d, h);
    const w = new A(),
      E = zi(a, w);
    N(d, w);
    const S = document.getElementById("drink-finished-badge-wrapper");
    d = Ai(a, S);
    f = Bi(a, f, h, w, S);
    h = new r([
      new n(() => {
        B(a.i, new A(new pe()));
      }),
      new wa(() => 0 === a.i.find(pe).length),
    ]);
    return new q([c, new r([...b, e]), g, m, E, d, f, h]);
  }
  function Ci(a) {
    var b = D(a.i.find(ii, P)).get(P).position;
    b = yg(b, F(oi), F(ni), 1e3);
    return new r([
      ...uh(a.i, !0),
      new q([
        new p(300),
        b,
        new n(() => {
          B(a.i, new A(new Xg()));
        }),
      ]),
    ]);
  }
  function wi(a) {
    let b = !1;
    return new q([
      new p(200),
      new n(() => {
        const c = Cg(Zf, 24, !1),
          d = new O(c.i[0].ya);
        c.j = () => {
          b = !0;
        };
        const e = D(a.i.find($g));
        z(e, d);
        z(e, c);
        zc(v.Rb, 0.3);
        v.Rb.play(0, !1);
      }),
      new wa(() => b),
    ]);
  }
  function xi(a, b) {
    const c = D(a.i.find(V, P)),
      d = D(a.i.find(ah, O)),
      e = c.get(P).position;
    let f = !1;
    const g = R(ui, a.j.W.Sa[0]);
    z(b, new P(new G(21 - g.i.x / 2, 98 - g.i.y)));
    z(b, new O(g, 0));
    const h = b.get(P).position;
    b.get(O).alpha = 0;
    return new ua(
      () =>
        new q([
          new r([
            yg(e, null, F(e).add(new G(0, -130)), 150, Q),
            yg(h, null, F(h).add(new G(0, -130)), 150, Q),
            U(d.get(O), 0, 150, Q),
            U(b.get(O), 1, 150, Q),
            ...ue(c).map((m) => U(m.get(O), 0, 150, Q)),
          ]),
          new n(() => {
            zc(v.Ob, 2);
            v.Ob.play(0, !1);
            const m = Cg(a.j.W.Sa, 24, !1);
            m.j = () => {
              f = !0;
            };
            b.get(O).alpha = 1;
            z(b, m);
          }),
          new wa(() => f),
          new p(500),
        ]),
    );
  }
  function yi(a, b, c) {
    let d = !1;
    const e = Cg(a.j.W.Pa, 24, !1),
      f = new oe(e);
    ne(f, e.i.length - 2, () => {
      c.get(P).position.y -= -10;
    });
    ne(f, e.i.length - 1, () => {
      c.get(P).position.y += -10;
    });
    e.j = () => {
      d = !0;
    };
    Di(a.j.W.Pa, f);
    const g = R(ui, a.j.W.Pa[0]);
    let h;
    z(b, new P(new G(-5 - g.i.x / 2, -103 - g.i.y).add(null != (h = a.j.W.hc) ? h : new G(0, 0))));
    z(b, new O(g, 0, -1));
    b.get(O).alpha = 0;
    return new q([
      new n(() => {
        b.get(O).alpha = 1;
        z(b, e);
        z(b, f);
      }),
      new wa(() => d),
      new p(200),
    ]);
  }
  function zi(a, b) {
    a = R(ui, a.j.W.Ya);
    z(b, new P(new G(-1 - a.i.x / 2, -75 - a.i.y)));
    z(b, new O(a, -1));
    b.get(O).alpha = 0;
    return new q([U(b.get(O), 1, 200, Q), new p(200)]);
  }
  function Ai(a, b) {
    return new ua(() => {
      const c = D(a.i.find(V)).get(V),
        d = b.querySelector(`.${hi[Jg(c)].Ha}`);
      return new q([
        new n(() => {
          d.classList.remove("ddl-hidden_");
          3 > Jg(c) ? (zc(v.Kb, 0.7), v.Kb.play(0, !1)) : (zc(v.Lb, 0.7), v.Lb.play(0, !1));
        }),
        new p(1e3),
      ]);
    });
  }
  function Bi(a, b, c, d, e) {
    return new ua(() => {
      var f = D(a.i.find(V)).get(V);
      const g = e.querySelector(`.${hi[Jg(f)].Ha}`);
      f = B(a.i, Ei(a, c, b, d));
      return new r([
        new n(() => {
          c.get(O).alpha = 0;
          b.get(O).alpha = 0;
          d.get(O).alpha = 0;
        }),
        U(f.get(O), 0, 250, Q),
        new n(() => void g.classList.add("ddl-hidden_")),
      ]);
    });
  }
  function Di(a, b) {
    const c = [];
    switch (a) {
      case bg:
        c.push(32);
        break;
      case Yf:
        c.push(32, 34);
        break;
      case $f:
        c.push(32, 33, 34, 35);
    }
    for (const d of c)
      ne(b, d, () => {
        0.5 > Math.random() ? v.qc.play(0, !1) : v.rc.play(0, !1);
      });
  }
  function Ei(a, b, c, d) {
    B(a.s, b);
    B(a.s, c);
    B(a.s, d);
    Ic(a.s, 1);
    return new A(new P(), new O(new Qe((e) => void e.drawImage(a.v, 0, 0))));
  }
  var Fi = class extends yh {
    constructor(a, b) {
      super(a, b, !1);
      this.s = new Kc();
      this.v = document.createElement("canvas");
      this.v.width = 540;
      this.v.height = 625;
      B(this.s, new A(new P(), new Me()));
      this.s.i = [new eh(this.s, this.v.getContext("2d"))];
    }
    O() {
      const a = document.querySelector("#game");
      this.i.i = [
        new li(this.i),
        new mi(this.i),
        new Ah(this.i),
        new zh(this.i),
        new Fh(this.i),
        new Gh(this.i),
        new Ch(this.i, vi(this), 3),
        new hh(this.i),
        new gh(this.i, this.u.canvas, a),
        new fh(this.i),
        new ih(this.i),
        new jh(this.i, this.T, (b) => !!b.i.get(Tg)),
        new jh(this.i, this.u, (b) => !b.i.get(Tg)),
      ];
    }
    o() {
      super.o();
      B(this.i, new A(new P(F(qi)), new Vg(F(qi), F(pi)), new O(R(ui, Nf), -1)));
      B(this.i, new A(new P(F(si)), new Vg(F(si), F(ri)), new O(R(ui, Of), -1)));
      var a = B(this.i, new A(new P(F(oi)), new ii(), new M())),
        b = new A(new P(), new O(R(ui, Pf), 0));
      N(a, b);
      b = new A(new P(F(ki)), new ji(), new O(R(ui, Rf), -1, 2));
      N(a, b);
      a = new A(new P(F(ti)), new W(17));
      N(b, a);
      B(this.i, new A(new M([Ci(this)])));
    }
  };
  var Hi = class extends y {
      constructor() {
        super(...arguments);
        this.i = Gi;
      }
    },
    Gi = Math.PI / 4,
    Ii = Math.PI / 3,
    Ji = (Gi + Ii) / 2;
  var Li = class extends C {
    j() {
      var a = D(this.i.find(M, Hi, P));
      const b = a.get(Hi),
        c = a.get(P);
      a = a.get(M);
      const d = D(this.i.find(W, P)).get(W);
      if (rh(this.i)) {
        d.i = !0;
        var e = (Ii - c.rotation) / 2e-4;
        a.actions = [
          new q([
            new Ke(
              e,
              () => c.rotation,
              () => Ii,
              (f) => {
                c.rotation = f;
                b.i = f;
              },
              Ee,
            ),
          ]),
        ];
        zc(v.Eb, 2);
        v.Eb.play(e + 300, !0);
      } else
        sh(this.i) &&
          (d.Ka--,
          (e = (c.rotation - Gi) / 3e-4),
          (a.actions = [
            new q([
              new n(() => {
                Hc(this.i, Ki)[0].Wb = !1;
              }),
              new Ke(
                e,
                () => c.rotation,
                () => Gi,
                (f) => {
                  c.rotation = f;
                },
                Ee,
              ),
              new n(() => {
                d.i = !1;
              }),
            ]),
          ]),
          B(
            this.i,
            new A(
              new M([
                new q([
                  new p(e),
                  new n(() => {
                    wc(v.Eb);
                  }),
                ]),
              ]),
            ),
          ));
    }
  };
  function Mi(a) {
    var b = D(a.i.find(W, P)).get(W),
      c = D(a.i.find(Hi, P));
    a = c.get(Hi);
    c = c.get(P).rotation;
    if (0 < b.Ka) return new G(0.7, 0.7);
    b = 0.2 + ((c - Ji) / (a.i - Ji)) * (0.7 - 0.2);
    return new G(b, b);
  }
  var Ki = class extends Eh {
      constructor() {
        super(...arguments);
        this.o = ph(D(this.i.find(V)).get(V).yb[1], Uf);
        this.Wb = !0;
      }
      j(a) {
        D(this.i.find(Hi, P)).get(P).rotation > Ji && Dh(this, a);
      }
      s() {
        var a = D(this.i.find(W, P));
        a = new G(0, 0).transform(ze(a));
        B(
          this.i,
          new A(
            new P(a, 0, Mi(this)),
            new Ug(F(Ni)),
            new Tg(),
            new Sg(this.Wb ? 0.002 : 0),
            new O(new Qe((b) => void b.drawImage(this.o, 0, 0)), -1, 0, Mc(new G(this.o.width, this.o.height), -0.5)),
          ),
        );
      }
    },
    Ni = new G(1.5, 0);
  const Oi = T(),
    Pi = new G(312, 74),
    Qi = new G(200, 260),
    Ri = new G(-100, 260),
    Si = new G(0, 200),
    Ti = new G(-200, 200),
    Ui = new G(540, 120),
    Vi = new G(940, 120);
  function Wi(a) {
    const b = D(a.i.find(Hi, P)).get(P).position;
    return new q([
      new r([...uh(a.i, !0), new q([new p(300), yg(b, F(Ri), F(Qi), 1e3)])]),
      new n(() => {
        B(a.i, new A(new Xg()));
      }),
    ]);
  }
  function Xi(a) {
    const b = D(a.i.find(Hi, P)).get(P).position;
    return new r([...uh(a.i, !1), yg(b, null, F(Ri), 1e3, Q)]);
  }
  var Yi = class extends yh {
    o() {
      super.o();
      var a = R(Oi, Tf);
      B(this.i, new A(new P(F(Ti)), new Vg(F(Ti), F(Si)), new O(R(Oi, Sf), -1)));
      B(this.i, new A(new P(F(Vi)), new Vg(F(Vi), F(Ui)), new O(a, -1, 0, new G(-a.i.x, 0))));
      var b = R(Oi, sf);
      a = Mc(F(Pi), -1);
      b = B(this.i, new A(new M(), new Hi(), new P(F(Ri), Gi), new O(b, 1, 0, a)));
      a = new A(new P(F(Pi).add(a)), new W(17));
      N(b, a);
      B(this.i, new A(new M([Wi(this)])));
    }
    O() {
      const a = document.querySelector("#game");
      this.i.i = [
        new Li(this.i),
        new Ki(this.i),
        new Ah(this.i),
        new Bh(this.i),
        new zh(this.i),
        new Fh(this.i),
        new Gh(this.i),
        new Ch(this.i, Xi(this), 2),
        new hh(this.i),
        new gh(this.i, this.u.canvas, a),
        new fh(this.i),
        new jh(this.i, this.T, (b) => !!b.i.get(Tg)),
        new jh(this.i, this.u, (b) => !b.i.get(Tg)),
      ];
    }
  };
  const Zi = T();
  function $i(a) {
    return a.i.find(L).find((b) => aj.includes(b.get(L).state));
  }
  function bj(a) {
    return a.i.find(L).find((b) => 0 === b.get(L).state);
  }
  function cj(a) {
    return a.i.find(L).find((b) => 3 === b.get(L).state);
  }
  function dj(a, b, c) {
    if (!a.o) throw Error("r");
    const d = R(Zi, a.o.W.Va),
      e = B(a.i, new A(new P(new G(420, 225), 0, new G(0, 0)), new O(d, 1, 0, Mc(F(d.i), -0.5)))),
      f = e.get(P);
    return new q([
      new r([
        U(e.get(O), 1, 200),
        new Le(
          200,
          () => F(f.scale),
          () => wg(d, 110),
          (g) => void Lc(f.scale, g),
          Ie,
        ),
      ]),
      new p(200),
      new n(() => {
        let g, h, m;
        return void (null == (h = $i(a)) ? void 0 : ke(h.get(le), null != (m = null == (g = a.o) ? void 0 : Jg(g)) ? m : null));
      }),
      new p(700),
      new r([
        U(e.get(O), 0, 200),
        new Le(
          200,
          () => F(f.scale),
          () => new G(0, 0),
          (g) => void Lc(f.scale, g),
          Q,
        ),
        new n(() => void Jc(b, c)),
      ]),
    ]);
  }
  var ej = class extends C {
      constructor(a, b, c = !0) {
        super(a);
        this.u = b;
        this.v = c;
        this.s = [];
      }
      j(a) {
        if (0 === this.s.length) {
          var b = $i(this);
          b && (b.get(L).state = 3);
          var c = bj(this);
          if (c) {
            c.get(M).actions.push(Te(this.i, c, b));
            const { ta: f, wa: g, wb: h } = c.get(L);
            var d = (this.o = new V(f, g, c.get(L).W, h));
            b = new ei(this.u, d, this.v);
            const m = new Yi(this.u, d);
            d = new Fi(this.u, d);
            this.s.push(b.i, m.i, d.i);
            this.v = !1;
            c.get(L).state = 1;
          } else if (!cj(this)) {
            og("d4", rg.i, !0);
            rg.log(104);
            rg.i = 0;
            B(this.i, new A(new me()));
            return;
          }
        }
        if ((c = this.s[0]))
          if ((Ic(c, a), 0 < c.find(me).length && this.s.shift(), (a = c.find(pe)[0])))
            if (((b = a.get(pe)), !b.i)) {
              b.i = !0;
              var e;
              null == (e = $i(this)) || e.get(M).actions.push(dj(this, c, a));
              this.o && ((e = this.o.wb), (a = Jg(this.o)), og("d3", e, !0), og("d4", a, !0), rg.log(103), qg(ug[e]), (rg.i += a));
            }
      }
    },
    aj = [1, 2];
  var fj = {};
  function gj() {
    throw Error("s");
  }
  gj.prototype.j = null;
  gj.prototype.toString = function () {
    return this.Qb;
  };
  gj.prototype.kc = function () {
    if (this.Yb !== fj) throw Error("t");
    return Pb(this.toString());
  };
  function hj() {
    gj.call(this);
  }
  oa(hj, gj);
  hj.prototype.Yb = fj;
  var ij = (function (a) {
    function b(c) {
      this.Qb = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.j = d);
      return c;
    };
  })(hj);
  function Y(a) {
    return null != a && a.Yb === fj ? String(String(a.Qb).replace(jj, "").replace(kj, "&lt;")).replace(lj, mj) : String(a).replace(nj, mj);
  }
  const oj = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\v": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  };
  function mj(a) {
    return oj[a];
  }
  const nj = /[\x00\x22\x26\x27\x3c\x3e]/g,
    lj = /[\x00\x22\x27\x3c\x3e]/g,
    pj = /^[a-zA-Z0-9+\/_-]+={0,2}$/,
    jj = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    kj = /</g; /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  function qj(a) {
    var b = qa || (qa = new Yb());
    if ((a = a(rj, void 0)) && a.i) return a.i();
    a = sj(a);
    var c = b.i;
    b = Xb(c, "DIV");
    Na ? ((a = Sb(Tb, a)), Vb(b, a), b.removeChild(b.firstChild)) : Vb(b, a);
    if (1 == b.childNodes.length) b = b.removeChild(b.firstChild);
    else {
      for (a = c.createDocumentFragment(); b.firstChild; ) a.appendChild(b.firstChild);
      b = a;
    }
    return b;
  }
  function tj(a) {
    var b = a(rj, void 0);
    a = qa || (qa = new Yb());
    b && b.i ? (a = b.i()) : ((a = Xb(a.i, "DIV")), (b = sj(b)), Vb(a, b));
    1 == a.childNodes.length && ((b = a.firstChild), 1 == b.nodeType && (a = b));
    return a;
  }
  function sj(a) {
    return ia(a) ? (a.kc && ((a = a.kc()), a instanceof Nb) ? a : Ob("zSoyz")) : Ob(String(a));
  }
  const rj = {};
  function vj() {
    return ij(
      '<div class="' +
        Y("ddl-minigameScene_") +
        " " +
        Y("ddl-sceneWrapper_") +
        '"><div id="badge-wrapper"></div><canvas id="minigame-canvas"></canvas><div id="drink-finished-badge-wrapper"></div></div><div class="' +
        Y("ddl-cafeScene_") +
        " " +
        Y("ddl-sceneWrapper_") +
        '"><canvas id="cafe-canvas"></canvas></div><div class="' +
        Y("ddl-videoWrapper_") +
        " " +
        Y("outro") +
        " " +
        Y("ddl-hidden_") +
        '"><button class="' +
        Y("ddl-skipButton_") +
        " " +
        Y("ddl-hidden_") +
        '"></button></div><div class="' +
        Y("ddl-videoWrapper_") +
        " " +
        Y("intro") +
        " " +
        Y("ddl-hidden_") +
        '"><button class="' +
        Y("ddl-skipButton_") +
        '"></button></div><button class="' +
        Y("ddl-muteButton_") +
        " " +
        Y("ddl-hidden_") +
        '"><div class="' +
        Y("ddl-muted_") +
        " " +
        Y("ddl-hidden_") +
        '"></div><div class="' +
        Y("ddl-soundOn_") +
        " " +
        Y("ddl-hidden_") +
        '"></div></button><canvas class="' +
        Y("ddl-loadingScreen_") +
        " " +
        Y("ddl-hidden_") +
        '"></canvas><div class="' +
        Y("ddl-sceneWrapper_") +
        " " +
        Y("ddl-minigameScene_") +
        " " +
        Y("ddl-tutorialWrapper_") +
        " " +
        Y("ddl-hidden_") +
        '"><div class="' +
        Y("ddl-tutorialBg_") +
        '"></div><div class="' +
        Y("ddl-tutorialText_") +
        '"></div><div class="' +
        Y("ddl-pointerWrapper_") +
        " " +
        Y("ddl-hidden_") +
        '"><div class="' +
        Y("ddl-ring_") +
        '"></div><div class="' +
        Y("ddl-pointer_") +
        '"></div></div><button class="' +
        Y("ddl-next_") +
        '"></button></div><div class="' +
        Y("ddl-endScreen_") +
        " " +
        Y("ddl-hidden_") +
        '"><div class="' +
        Y("ddl-endScreenText_") +
        '"><div class="' +
        Y("ddl-outline_") +
        '" aria-hidden="true"></div><div class="' +
        Y("ddl-fill_") +
        '"></div></div><div class="' +
        Y("ddl-scoreWrapper_") +
        '"></div><div class="' +
        Y("ddl-endScreenButtons_") +
        '"><button class="' +
        Y("replay") +
        '"></button>' +
        (showSearchAndShare ? '<button class="' + Y("search") + '"></button><button class="' + Y("share") + '"></button>' : "") +
        '</div><div class="' +
        Y("ddl-endScreenSocialButtons_") +
        '"><button class="' +
        Y("facebook") +
        '"></button><button class="' +
        Y("twitter") +
        '"></button><div class="' +
        Y("ddl-copyLinkWrapper_") +
        '"><button class="' +
        Y("ddl-copylink_") +
        '"></button><div class="' +
        Y("ddl-linkCopiedText_") +
        " " +
        Y("ddl-hidden_") +
        '"></div></div></div></div>',
    );
  }
  function wj() {
    return ij(
      '<div class="' +
        Y("ddl-badge_") +
        '"><div class="' +
        Y("badge0") +
        " " +
        Y("ddl-hidden_") +
        '"></div><div class="' +
        Y("badge1") +
        " " +
        Y("ddl-hidden_") +
        '"></div><div class="' +
        Y("badge2") +
        " " +
        Y("ddl-hidden_") +
        '"></div><div class="' +
        Y("badge3") +
        " " +
        Y("ddl-hidden_") +
        '"></div></div>',
    );
  }
  function xj(a, b) {
    return ij(
      '<div class="' + Y("ddl-endScreenCustomer_") + '"><div class="' + Y("ddl-customerIcon_") + '"></div>' + wj(null, b) + "</div>",
    );
  }
  const yj = T();
  function zj(a) {
    var b = document.getElementById("badge-wrapper"),
      c = document.querySelector(".ddl-scoreWrapper_");
    b.textContent = "";
    c.textContent = "";
    rg.log(101);
    b = document.getElementById("cafe-canvas");
    b.width = 540;
    b.height = 340;
    b = b.getContext("2d");
    b.canvas.style.backgroundColor = "#406b4f";
    c = new Kc();
    var d = R(yj, Jf),
      e = R(yj, Kf);
    B(c, new A(new P(new G(0, 0), 0, wg(d, 540)), new O(d, -1)));
    B(c, new A(new P(new G(0, 0), 0, wg(d, 540)), new O(R(yj, ag[0]), -1), Cg(ag, 2)));
    B(c, new A(new P(new G(0, 0), 0, wg(d, 540)), new O(e, 1)));
    d = document.getElementById("drink-finished-badge-wrapper");
    e = tj(wj);
    var f = [];
    for (var g of hi) {
      var h = e.querySelector(`.${g.Ha}`);
      zg(h, g.nb, 117);
      f.push(h);
    }
    d.appendChild(e);
    for (d = 0; 5 > d; d++) {
      e = gi[d % gi.length];
      g = new L(Cg(e.tb, 2), Cg(e.ab, 2), e.Ja, e.ta, e.wa, e.W, d);
      f = e;
      h = document.getElementById("badge-wrapper");
      var m = tj(wj);
      zg(m, ff, 70);
      e = [];
      for (var w of hi) {
        var E = m.querySelector(`.${w.Ha}`);
        zg(E, w.nb, 70);
        e.push(E);
      }
      h.appendChild(m);
      h = document.querySelector(".ddl-scoreWrapper_");
      m = tj(xj);
      zg(m.querySelector(".ddl-customerIcon_"), f.Xa, 100);
      f = [];
      for (const S of hi) (E = m.querySelector(`.${S.Ha}`)), zg(E, S.ub, 100), f.push(E);
      h.appendChild(m);
      e = new le(e, f);
      ke(e, null);
      B(c, new A(g, e, new P(F(he)), new M()));
    }
    B(c, new A(new P(), new Me()));
    w = document.getElementById("minigame-canvas");
    w.width = 540;
    w.height = 625;
    w = w.getContext("2d");
    w.canvas.style.backgroundColor = "#c8cf9d";
    c.i = [new ej(c, w, a), new hh(c), new fh(c), new eh(c, b)];
    return c;
  }
  function Aj(a, b) {
    return Bj(a || Bj(b || "//" + Vd));
  }
  function Bj(a) {
    return 0 === a.indexOf("//") ? "https:" + a : a;
  }
  var Gj = (a) =>
    k(function* () {
      const b = "string" === typeof a ? a : a.value;
      var c;
      if (!(c = yield Cj(b)))
        if (Ed) {
          "string" === typeof a
            ? (Dj ||
                ((Dj = document.createElement("input")),
                (Dj.readOnly = !0),
                K(Dj, "position", "absolute", "opacity", 0, "left", 0, "top", 0, "pointerEvents", "none"),
                document.body.appendChild(Dj)),
              (Dj.value = a),
              (c = Dj))
            : (c = a);
          c !== document.activeElement && c.focus();
          const e = c.contentEditable,
            f = c.readOnly;
          c.contentEditable = "true";
          c.readOnly = !1;
          const g = document.createRange();
          g.selectNodeContents(c);
          const h = window.getSelection();
          h.removeAllRanges();
          h.addRange(g);
          try {
            c.select(), c.setSelectionRange(0, c.value.length);
          } catch (m) {}
          c.contentEditable = e;
          c.readOnly = f;
          try {
            var d = Ed(document, "copy");
          } catch (m) {
            d = !1;
          }
          window.getSelection().removeAllRanges();
          c.blur();
          Dj && (Dj.remove(), (Dj = null));
          c = d;
        } else c = !1;
      return c || ((yield Ej()) && (yield Cj(b))) ? Promise.resolve() : Promise.reject();
    });
  const Cj = (a) =>
      k(function* () {
        return navigator.clipboard && navigator.clipboard.writeText
          ? navigator.clipboard.writeText(a).then(
              () => !0,
              () => !1,
            )
          : !1;
      }),
    Hj = (a) =>
      k(function* () {
        switch (a.state) {
          case "granted":
            return !0;
          case "denied":
            return !1;
        }
        return new Promise((b) => {
          a.onchange = () => b(Hj(a));
        });
      }),
    Ej = () =>
      k(function* () {
        return navigator.permissions && navigator.permissions.query
          ? Hj(yield navigator.permissions.query({ name: "clipboard-write" }))
          : !1;
      });
  let Dj = null;
  function Ij(a) {
    Aa.call(this);
    this.i = a;
    this.j = {};
  }
  oa(Ij, Aa);
  var Jj = [];
  function Kj(a, b, c, d, e) {
    Array.isArray(c) || (c && (Jj[0] = c.toString()), (c = Jj));
    for (var f = 0; f < c.length; f++) {
      var g = t(b, c[f], d || a.handleEvent, e || !1, a.i || a);
      if (!g) break;
      a.j[g.key] = g;
    }
  }
  Ij.prototype.handleEvent = function () {
    throw Error("u");
  };
  var Lj = {},
    Mj = null;
  var Nj = "undefined" !== typeof Uint8Array;
  Object.freeze([]);
  Object.create(null);
  var Oj = (a, b) => {
      Wd() ||
        (mg(9),
        (a = 0 == a.indexOf("//") ? "https:" + a : a),
        (window.location = "/_SHARE?description=" + encodeURIComponent(b) + "&url=" + encodeURIComponent(a)));
    },
    Pj = () => null != window.agsa_ext && null != window.agsa_ext.share,
    Qj = (a, b) => {
      !Wd() && Pj() && (mg(15), window.agsa_ext.share(b + " " + a, null));
    },
    Rj = (a) =>
      k(function* () {
        if (Wd()) return Promise.reject();
        mg(16);
        return Gj(a);
      });
  function Sj() {
    return new Promise((a) => {
      setTimeout(a, 2e3);
    });
  }
  function Tj() {
    const a = document.createElement("video");
    a.setAttribute("webkit-playsinline", "");
    a.setAttribute("playsinline", "");
    a.preload = "none";
    a.muted = !0;
    a.controls = !1;
    a.style.position = "absolute";
    a.style.left = "0";
    a.style.top = "0";
    a.style.width = "100%";
    a.style.height = "100%";
    return a;
  }
  function Uj(a) {
    a.j = !1;
    a.i.pause();
    sb(a, "play", !1, {});
    sb(a, "ended", !1, {});
  }
  var Vj = class extends pb {
    constructor(a = Tj()) {
      super();
      this.i = a;
      this.loaded = this.j = !1;
      this.o = this.s = this.u = this.v = null;
    }
    load(a) {
      if (!this.H) {
        let b = () => {};
        this.H = new Promise((f) => {
          b = f;
        });
        let c = null;
        const d = () => {
          null !== c && (clearInterval(c), (c = null));
          this.loaded = !0;
          b(this);
        };
        c = setInterval(() => {
          this.i.readyState === this.i.HAVE_ENOUGH_DATA && d();
        }, 32);
        const e = () => {
          this.i.removeEventListener("error", e);
          d();
        };
        this.i.addEventListener("canplaythrough", () => {
          this.i.removeEventListener("error", e);
          d();
        });
        this.i.addEventListener("error", e);
        this.i.src = a;
        this.i.preload = "auto";
        this.i.load();
      }
      return this.H;
    }
    play() {
      this.u = new Promise((d) => {
        this.v = () => {
          d();
          this.u = this.v = null;
        };
      });
      this.o = new Promise((d) => {
        this.s = () => {
          d();
          this.o = this.s = null;
        };
      });
      const a = () => {
        this.i.removeEventListener("timeupdate", a);
        sb(this, "play", !1, {});
        let d;
        null == (d = this.v) || d.call(this);
      };
      this.i.addEventListener("timeupdate", a);
      const b = () => {
        this.i.removeEventListener("ended", b);
        this.j = !1;
        sb(this, "ended", !1, {});
        let d;
        null == (d = this.s) || d.call(this);
      };
      this.i.addEventListener("ended", b);
      const c = (d) => {
        this.i.removeEventListener("error", c);
        this.j = !1;
        console.error("playback failed", this.i.src, d);
        sb(this, "play", !1, {});
        let e;
        null == (e = this.v) || e.call(this);
        sb(this, "ended", !1, {});
        let f;
        null == (f = this.s) || f.call(this);
      };
      this.i.addEventListener("error", c);
      this.j = !0;
      this.i.play().catch(c);
      return { Dc: this.u, Ib: this.o };
    }
    Dc() {
      return this.u;
    }
    Ib() {
      return this.o;
    }
  };
  const Wj = T(),
    Z = cf(Jh),
    tc = Cc.ac();
  function Xj(a) {
    a.v.width = 540;
    a.v.height = 960;
    var b = a.v.getContext("2d");
    b.imageSmoothingEnabled = !1;
    a.o = new Kc();
    a.o.i = [new hh(a.o), new fh(a.o), new eh(a.o, b)];
    b = Cg([uf, vf, wf, xf, wf, vf], 4, !0);
    b.offset = Mc(F(b.i[0].ya.i), -0.5);
    B(a.o, new A(new P(new G(270, 480)), new O(b.i[0].ya), b));
    B(
      a.o,
      new A(
        new M([
          new q([
            new wa(() => a.Aa),
            new n(() => {
              qg(2);
              Yj(a);
              Zj(a);
              a.v.classList.add("ddl-hidden_");
              a.o = void 0;
              Dg();
            }),
          ]),
        ]),
      ),
    );
    B(a.o, new A(new P(), new Me()));
  }

  function Zj(a) {
    a.T.style.background = $e(Wj, of, 960);
    var b = document.querySelector(".ddl-endScreenText_ .ddl-outline_"),
      c = document.querySelector(".ddl-endScreenText_ .ddl-fill_");
    b.textContent = X(Z, "text_end");
    Kh(b, 72, 425, 100);
    c.textContent = X(Z, "text_end");
    Kh(c, 72, 425, 100);
    if (showSearchAndShare) {
      b = document.querySelector(".search");
      b.style.background = $e(Wj, If, 117);
      b.setAttribute("aria-label", X(Z, "button_search"));
      b.addEventListener("click", () => {
        let d = senty.doodle ? senty.doodle.url : "";
        d && Od(d, !0);
        rg.log(3);
      });
      b = document.querySelector(".share");
      b.setAttribute("aria-label", X(Z, "button_share"));
      c = isAppleDevice() || (navigator.vendor && 0 === navigator.vendor.indexOf("Apple")) ? rf : ef;
      b.style.background = $e(Wj, c, 117);
      b.addEventListener("click", () => {
        fk();
      });
    }
    a.ka.setAttribute("aria-label", X(Z, "button_replay"));
    a.ka.style.background = $e(Wj, Gf, 117);
    a.ka.addEventListener("click", () => {
      var d = a.T;
      rg.log(4);
      a.u = zj(!1);
      d.classList.add("ddl-hidden_");
      a.i.classList.remove("ddl-hidden_");
      Dg();
      a.i.classList.remove("ddl-gone_");
    });
    isMobile() || isTouchDevice() ? document.querySelector(".ddl-endScreenSocialButtons_").classList.add("ddl-gone_") : gk();
  }

  function ak(a) {
    B(
      a.O,
      new A(
        new M([
          new Ke(
            1e3,
            () => 1,
            () => 0,
            (c) => void sc(c),
          ),
        ]),
      ),
    );
    var b = a.s;
    b.i.currentTime = 0;
    a.ha.classList.remove("ddl-hidden_");
    a.H.classList.remove("ddl-hidden_");
    Dg();
    ({ Ib: b } = b.play());
    b.then(() => void bk(a));
  }
  function Yj(a) {
    ck(a);
    dk(a);
    if (a.j) {
      const { Ib: b } = a.j.play();
      b.then(() => void ek(a));
    }
  }
  function ek(a) {
    qg(3);
    a.u = zj(!0);
    a.U.classList.add("ddl-hidden_");
    a.H.classList.add("ddl-hidden_");
    zc(v.Tb, 0.25);
    v.Tb.play(0, !0, 0, void 0, 0);
    zc(v.Mb, 0.3);
    v.Mb.play(0, !0, 0, void 0, 0);
  }
  function hk(a, b) {
    a.muted = b;
    a.muted
      ? ((b = tc),
        b.j && b.i && b.j.gain.setValueAtTime(0, b.i.currentTime),
        (b.H = !0),
        null != (b = a.j) && (b.i.muted = !0),
        null != (b = a.s) && (b.i.muted = !0),
        a.Ea.classList.remove("ddl-hidden_"),
        a.Fa.classList.add("ddl-hidden_"),
        (a.i.style.background = "#ba581f"),
        a.i.setAttribute("aria-label", X(Z, "button_unmute")))
      : ((b = tc),
        b.j && b.i && b.j.gain.setValueAtTime(b.T, b.i.currentTime),
        (b.H = !1),
        null != (b = a.j) && (b.i.muted = !1),
        null != (b = a.s) && (b.i.muted = !1),
        a.Ea.classList.add("ddl-hidden_"),
        a.Fa.classList.remove("ddl-hidden_"),
        (a.i.style.background = "#2d5245"),
        a.i.setAttribute("aria-label", X(Z, "button_mute")));
  }
  function ck(a) {
    hk(a, !tc.O);
    a.j &&
      a.j.i.addEventListener("click", () => {
        hk(a, !a.muted);
      });
    a.i.addEventListener("click", () => {
      hk(a, !a.muted);
    });
    a.i.addEventListener("keydown", (b) => {
      b.stopPropagation();
    });
    a.i.classList.remove("ddl-hidden_");
  }
  function bk(a) {
    document.querySelector(".ddl-endScreenText_").style.position = "relative";
    a.T.classList.remove("ddl-hidden_");
    a.i.classList.add("ddl-gone_");
    a.H.classList.add("ddl-hidden_");
    Dg();
    qg(10);
    B(
      a.O,
      new A(
        new M([
          new Ke(
            1e3,
            () => 0,
            () => 1,
            (b) => void sc(b),
          ),
        ]),
      ),
    );
  }
  function dk(a) {
    a.Ca.setAttribute("aria_label", X(Z, "button_skip"));
    a.Ca.addEventListener("click", () => {
      let b;
      null == (b = a.j) || Uj(b);
      ek(a);
    });
    a.ha.setAttribute("aria_label", X(Z, "button_skip"));
    a.ha.addEventListener("click", () => {
      let b;
      null == (b = a.s) || Uj(b);
      bk(a);
    });
  }
  function fk() {
    var a = Qd("share", ""),
      b = Td(Vd);
    k(function* () {
      if (isMobile() && navigator.share)
        try {
          yield navigator.share({ text: a, url: b });
        } catch (c) {
          (c instanceof DOMException && "AbortError" === c.name) || (nd() && isAppleDevice() && !qd() ? Oj(b, a) : Pj() && Qj(b, a));
        }
      else nd() && isAppleDevice() && !qd() ? Oj(b, a) : Pj() && Qj(b, a);
    });
  }
  function gk() {
    document.querySelector(".ddl-endScreenButtons_").classList.add("ddl-shrink_");
    document.querySelector(".share").classList.add("ddl-gone_");
    const a = Td(Vd),
      b = Qd("share", "");
    var c = document.querySelector(".facebook");
    c.setAttribute("aria-label", X(Z, "button_facebook"));
    c.style.background = $e(Wj, pf, 64);
    c.addEventListener("click", () => {
      // TODO: on facebook share
    });
    c = document.querySelector(".twitter");
    c.setAttribute("aria-label", X(Z, "button_twitter"));
    c.style.background = $e(Wj, Wf, 64);
    c.addEventListener("click", () => {
      // TODO: on twitter share
    });
    const d = document.querySelector(".ddl-linkCopiedText_");
    d.textContent = X(Z, "text_link_copied");
    Kh(d, 24, 120, 150, 15);
    const e = document.querySelector(".ddl-copylink_");
    e.setAttribute("aria-label", X(Z, "button_copy_link"));
    e.style.background = $e(Wj, kf, 64);
    e.addEventListener("click", () =>
      k(function* () {
        const f = Aj(Ud("copy_link"), a);
        try {
          yield Rj(f),
            e.classList.add("ddl-linkCopied_"),
            d.classList.remove("ddl-hidden_"),
            yield Sj(),
            e.classList.remove("ddl-linkCopied_"),
            d.classList.add("ddl-hidden_");
        } catch (g) {}
      }),
    );
  }
  var ik = class {
    constructor() {
      this.O = new Kc();
      this.v = document.querySelector(".ddl-loadingScreen_");
      this.muted = this.Aa = !1;
      this.i = document.querySelector(".ddl-muteButton_");
      this.Ea = this.i.querySelector(".ddl-muted_");
      this.Fa = this.i.querySelector(".ddl-soundOn_");
      this.U = document.querySelector(".intro");
      this.H = document.querySelector(".outro");
      this.T = document.querySelector(".ddl-endScreen_");
      this.ka = document.querySelector(".replay");
      this.Ca = document.querySelector(".intro .ddl-skipButton_");
      this.ha = document.querySelector(".outro .ddl-skipButton_");
    }
    load() {
      const a = this;
      return k(function* () {
        a.O.i = [new hh(a.O)];
        Xj(a);
        a.v.classList.remove("ddl-hidden_");
        a.U.classList.remove("ddl-hidden_");
        a.H.classList.remove("ddl-hidden_");
        a.j = new Vj(Tj());
        a.s = new Vj(Tj());
        a.U.prepend(a.j.i);
        a.H.prepend(a.s.i);
        Dg();
        yield Promise.all([
          vc.Jb.o(),
          We(),
          a.j.load(ge("intro.mp4")),
          a.s.load(ge("outro.mp4")),
          new Promise((b) => void setTimeout(b, 1e3)),
        ]);
        a.Aa = !0;
      });
    }
    Hb() {
      var a = tc;
      !a.u && a.i && a.i.suspend();
      a.u = !0;
      let b;
      null != (b = this.j) && b.i.pause();
      let c;
      null != (c = this.s) && c.i.pause();
    }
    hb() {
      var a = tc;
      Promise.resolve();
      a.u && a.i && a.i.resume();
      a.u = !1;
      let b;
      null != (b = this.j) && (b.j ? b.i.play() : Promise.resolve());
      let c;
      null != (c = this.s) && (c.j ? c.i.play() : Promise.resolve());
    }
  };
  function jk() {
    const a = document.getElementById("game"),
      b = document.getElementById("ddlDomRoot"),
      c = document.getElementById("ctaRoot"),
      d = document.getElementById("gameCanvas");
    if (null === a || null === b || null === c || null === d) throw Error("v");
    return { scale: 1, orientation: "landscape-primary", isFullscreen: !1, Bb: !1, width: 960, height: 540, N: a, va: b, Ba: c, oa: d };
  }
  var lk = class {
    constructor(a) {
      this.j = a;
      kk(a);
    }
  };
  function mk(a, b) {
    a.V.style.display = b ? "block" : "none";
  }
  var ok = class {
    constructor(a, b) {
      this.V = nk();
      this.V.style.top = "10px";
      this.V.style.right = "10px";
      this.V.style.width = "52px";
      this.V.style.height = "52px";
      this.V.style.cursor = "pointer";
      this.V.style.position = "absolute";
      this.V.style.pointerEvents = "all";
      this.V.style.background = "transparent";
      this.V.style.display = "none";
      this.V.setAttribute("role", "button");
      this.V.setAttribute("aria-label", "Close");
      this.V.tabIndex = 0;
      t(this.V, "click", b);
      t(this.V, "keydown", (c) => {
        (32 !== c.keyCode && 13 !== c.keyCode) || b();
      });
      a.appendChild(this.V);
    }
  };
  const nk = () => {
    var a = 52 * (window.devicePixelRatio || 1);
    const b = document.createElement("canvas");
    b.width = a;
    b.height = a;
    const c = b.getContext("2d");
    c.fillStyle = "rgba(0,0,0,.3)";
    c.arc(a / 2, a / 2, a / 2, 0, 2 * Math.PI);
    c.fill();
    c.strokeStyle = "#fff";
    c.lineWidth = (a / 52) * 3.5;
    const d = (a / 52) * 2;
    c.beginPath();
    c.moveTo(a / 4 + d, a / 4 + d);
    c.lineTo((3 * a) / 4 - d, (3 * a) / 4 - d);
    c.stroke();
    c.beginPath();
    c.moveTo((3 * a) / 4 - d, a / 4 + d);
    c.lineTo(a / 4 + d, (3 * a) / 4 - d);
    c.stroke();
    return b;
  };
  function pk(a) {
    a.i ? (a.i = !1) : (requestAnimationFrame(() => pk(a)), qk(a));
  }
  function rk(a) {
    a.j && ((a.j = !1), (a.i = !0));
  }
  function qk(a) {
    var b = Date.now(),
      c = b - a.o;
    0 > c || ((c = Math.min(c, 50)), (a.o = b), a.s(c));
  }
  var sk = class {
    constructor(a) {
      this.s = a;
      this.o = 0;
      this.i = this.j = !1;
      this.s = a;
    }
    start() {
      this.o = Date.now();
      const a = !this.i && !this.j;
      this.i = !1;
      this.j = !0;
      a && pk(this);
    }
  };
  function loadGame(a) {
    isAutoStart()
      ? setTimeout(() => {
          startGame(a);
        }, 10)
      : (vk(a),
        vd && H.includes("Safari")
          ? t(
              a.Ba,
              "click",
              () => {
                startGame(a);
              },
              !0,
            )
          : db(
              a.Ba,
              "click",
              () => {
                startGame(a);
              },
              !0,
            ));
  }
  function startGame(a) {
    // TODO: start clicked
    k(function* () {
      a.O && (yield wk(a));
      a.H();
    });
  }
  function vk(a) {
    (td() ? "1" === I.i.get("scta") : document.getElementById("fkbx") || rd()) || (a.u.start(), a.j && a.o && a.j.classList.add(a.o));
  }
  function wk(a) {
    return k(function* () {
      if (a.s) return a.s;
      a.Ba.classList.remove(a.i.Vb);
      a.s = xk();
      yield a.s;
      a.j && a.j.remove();
      a.Ba.remove();
    });
  }
  function xk() {
    return new Promise((a) => {
      setTimeout(a, 500);
    });
  }
  function yk(a) {
    0 !== a.La && a.Ba.classList.add(a.i.Sb);
  }
  var zk = class {
    constructor(a, b, c, d, e, f = !0) {
      this.j = b;
      this.o = c;
      this.v = d;
      this.H = e;
      this.O = f;
      this.La = 1;
      this.s = null;
      this.i = { Pb: "ddl-hplogocta_", Vb: "ddl-showCta_", Sb: "ddl-ctaHideDuringLightbox_" };
      this.Ba = a.Ba;
      this.Ba.classList.add(this.i.Pb);
      this.Ba.classList.add(this.i.Vb);
      b && this.Ba.appendChild(b);
      this.u = new sk((g) => {
        this.v(g);
      });
      loadGame(this);
    }
  };
  const Ak = isAppleDevice() && H.includes("OS 12_");
  function Bk(a, b, c) {
    a.style.position = "absolute";
    a.style.top = "0";
    a.style.left = "0";
    a.style.width = "100%";
    a.style.height = "100%";
    a.style.direction = "ltr";
    a.dataset.width = b.toString();
    a.dataset.height = c.toString();
  }
  function Ck(a, b = !1) {
    const c = a.i.parentElement ? a.i.parentElement.offsetWidth : a.N.offsetWidth,
      d = a.i.parentElement ? a.i.parentElement.offsetHeight : a.N.offsetHeight;
    a.o && ((0 === window.scrollX && 0 === window.scrollY) || window.scrollTo(0, 0));
    if (c !== a.u || d !== a.s || a.j.isFullscreen !== a.v || b) {
      const b = Number(a.i.dataset.width);
      const e = Number(a.i.dataset.height);
      if (td()) throw Error("p");
      var isLandscape = false;
      var scaleFactor = (a.j.Bb = isLandscape) ? Math.min(c / e, d / b) : Math.min(c / b, d / e);
      var h = scaleFactor * b;
      var m = scaleFactor * e;
      a.j.scale = scaleFactor;
      scaleFactor = `scale(${scaleFactor}, ${scaleFactor})`;
      var w = (h - b) / 2;
      var E = (m - e) / 2;
      var S = isLandscape ? Math.abs(c - m) / 2 : Math.abs(c - h) / 2,
        ma = isLandscape ? Math.abs(d - h) / 2 : Math.abs(d - m) / 2;
      isLandscape
        ? ((isLandscape = (h - m) / 2), (h = w - isLandscape + S), (E = E + isLandscape + ma), (scaleFactor += "rotate(90deg)"))
        : ((h = S + w), (E += ma));
      Ld(a.i, "TransformOrigin", "center center");
      Ld(a.i, "Transform", scaleFactor);
      K(a.i, "position", "absolute", "width", `${b}px`, "height", `${e}px`, "left", `${h}px`, "top", `${E}px`);
      // Ak &&
      //   a.o &&
      //   ((b = document.documentElement),
      //   (e = b.getBoundingClientRect()),
      //   (e.width === c && e.height === d) || K(b, "width", `${c}px`, "height", `${d}px`));
      // a.o &&
      //   !H.includes("CriOS") &&
      //   0 < c &&
      //   document.body.clientWidth !== c &&
      //   (document.body.clientWidth < document.body.scrollWidth && K(document.body, "width", `${Math.min(document.body.scrollWidth, c)}px`),
      //   document.body.clientWidth > c && K(document.body, "width", `${c}px`));
      a.o && K(a.N, "height", "100%", "width", "100%");
      a.u = c;
      a.s = d;
      a.v = a.j.isFullscreen;
    }
  }
  var Dk = class {
    constructor(a) {
      this.j = a;
      this.s = this.u = 0;
      this.v = !1;
      this.N = a.N;
      this.i = document.querySelector("#uidsdoodle") ? a.N : a.va;
      Bk(this.i, a.width, a.height);
      this.o = eg();
      Ck(this);
      window.addEventListener("resize", () => {
        Ck(this);
      });
    }
    setSize(a, b) {
      this.i.dataset.width = a.toString();
      this.i.dataset.height = b.toString();
    }
  };
  var Ek = class {
    j() {
      return !0;
    }
  };
  var Fk = class extends Ek {
    i() {
      return !1;
    }
  };
  function Gk(a) {
    var b = a.oa.getBoundingClientRect();
    const c = a.s.Bb ? b.height : b.width;
    b = a.s.Bb ? b.width : b.height;
    const [d, e] = a.getSize();
    a.ha = d / c;
    a.H = e / b;
  }
  var Hk = class {
    constructor(a) {
      this.s = a;
      this.o = [];
      this.i = this.j = null;
      this.T = this.O = 0;
      this.U = this.u = !1;
      this.v = [];
      this.H = this.ha = 1;
      this.oa = this.s.oa;
      this.ka = [this.oa];
      t(window, "resize", () => {
        Gk(this);
      });
      a = () => {
        db(window, "resize", () => {
          Gk(this);
        });
      };
      window.hasOwnProperty("screen") && window.screen.hasOwnProperty("orientation") && !isAppleDevice()
        ? t(screen.orientation, "change", a)
        : t(window, "orientationchange", a);
      Gk(this);
    }
    handleEvent(a) {
      Gk(this);
      var b = a.j;
      var c = void 0;
      b = (b = b || window.event)
        ? (c = c || (b.targetTouches && b.targetTouches[0]) || (b.changedTouches && b.changedTouches[0])) && void 0 !== c.pageX
          ? [c.pageX, c.pageY]
          : void 0 !== b.clientX
            ? [
                b.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0),
                b.clientY + (document.body.scrollTop || document.documentElement.scrollTop || 0),
              ]
            : void 0 !== b.pageX
              ? [b.pageX, b.pageY]
              : [0, 0]
        : [0, 0];
      c = this.oa.getBoundingClientRect();
      if (this.s.Bb) {
        var d = c.right - b[0];
        b[0] = b[1] - c.top;
        b[1] = d;
      } else (b[0] -= c.left), (b[1] -= c.top);
      b[0] *= this.ha;
      b[1] *= this.H;
      c = b[1];
      this.O = b[0];
      this.T = c;
      a = a.type;
      if (!this.U || 0 !== a.indexOf("mouse")) {
        b = { touchstart: "mousedown", touchend: "mouseup", touchmove: "mousemove" };
        a in b && ((this.U = !0), (a = b[a]));
        c = a;
        a = this.O;
        b = this.T;
        if (!this.u && "mousedown" === c) for (this.u = !0, d = 0; d < this.v.length; d++) this.v[d]();
        if ("mousedown" === c) {
          if (!this.j)
            for (c = 0; c < this.o.length; c++)
              if (((d = this.o[c]), d.j.i())) {
                this.i = this.j = d;
                d.i("mousedown", a, b);
                break;
              }
        } else if ("mouseup" === c) this.j ? (this.j.i("mouseup", a, b), (this.j = null)) : this.i && this.i.i("mouseup", a, b);
        else if ("mousemove" === c || "areamove" === c) {
          d = null;
          for (let e = 0; e < this.o.length; e++) {
            const f = this.o[e];
            if (f.j.i()) {
              d = f;
              break;
            }
          }
          this.i !== d && (this.i && this.i.i("mouseout", a, b), d && d.i("mouseover", a, b), (this.i = d));
          if ("mousemove" === c)
            for (this.j && this.j.i("mousemove", a, b), c = 0; c < this.o.length; c++)
              (d = this.o[c]), d !== this.j && d.j.i() && d.i("mousemove", a, b);
        } else
          "mouseout" === c
            ? (this.i && this.i.i("mouseout", a, b), (this.i = this.j = null))
            : "contextmenu" === c && this.i && this.i.i("contextmenu", a, b);
        a = this.i && this.i.j.j() ? "pointer" : "default";
        for (const e of this.ka) K(e, "cursor", a);
      }
    }
    getSize() {
      return this.oa instanceof HTMLCanvasElement
        ? [this.oa.width, this.oa.height]
        : [Number(this.oa.dataset.width), Number(this.oa.dataset.height)];
    }
  };
  (() => {
    const a = new Fk();
    a.i = () => !0;
    a.j = () => !1;
    return a;
  })();
  var Rk = class {
    constructor(a, b = () => {}) {
      this.u = b;
      this.i = !1;
      this.s = "1" === I.i.get("ntp");
      this.j = () => !1;
      this.o = null;
      this.N = a;
      dg() && (this.N.style.willChange = "width,height");
    }
    reset() {
      this.i && (K(this.N, "width", "", "height", ""), Zd(0), (this.N.style.width = ""), (this.N.style.height = ""));
      this.i = !1;
    }
  };
  const Sk = document[Nd(document, "exitFullscreen")],
    Tk = Nd(document, "fullscreenElement"),
    Uk = Nd(document, "fullscreenEnabled");
  function Vk(a) {
    a.j && window.screen.orientation && window.screen.orientation.lock && window.screen.orientation.lock(a.j).catch(() => {});
  }
  function Wk(a, b) {
    a.j = b;
    a.i.orientation = b;
    document[Tk] && Vk(a);
  }
  var Yk = class {
    constructor(a) {
      this.i = a;
      this.j = null;
      this.N = a.N;
      a = Nd(this.N, "requestFullscreen");
      this.s = this.N[a];
      a = !(!document[Uk] || !Sk);
      if (td()) throw Error("p");
      if (
        (this.o =
          (isAppleDevice() ? !1 : (sd() && !((nd() && isAppleDevice()) || (nd() && !isAppleDevice()))) || (qd() && isMobile())) && a)
      )
        K(document.body, "margin", "0"),
          K(this.N, "overflow", "visible", "width", "100%", "height", "100%"),
          (document.body.scrollLeft = 0),
          t(window, "scroll", Xk, !0);
    }
  };
  const Xk = (a) => {
    a.preventDefault();
    a.stopPropagation();
    return !1;
  };
  function Zk(a) {
    var b = window.agsa_ext;
    if (!a.U && !a.s && b && b.getPageVisibility) return "hidden" === b.getPageVisibility();
    b = document[a.s];
    return document[a.U] || "hidden" === b;
  }
  function $k(a) {
    a.H
      ? al(a)
      : nd() &&
        !isAppleDevice() &&
        bl(a, () => {
          al(a);
        });
  }
  function cl(a) {
    Kj(
      a.O,
      document,
      "mousedown mouseout touchstart mouseup mousemove touchend touchmove contextmenu keypress keydown keyup".split(" "),
      () => void dl(a),
      !0,
    );
    Kj(a.O, window, ["orientationchange", "resize"], () => void dl(a), !0);
  }
  function el(a) {
    a.timeout && clearTimeout(a.timeout);
    a.timeout = setTimeout(
      () => {
        a.timeout = void 0;
        a.j = Jd() - a.v >= a.T;
        a.j || el(a);
        fl(a);
      },
      Math.max(100, a.T - (Jd() - a.v)),
    );
  }
  function dl(a) {
    a.v = Jd();
    a.j = !1;
    fl(a);
  }
  function al(a) {
    a.u = () => {
      a.i = Zk(a);
      a.i ? fl(a) : dl(a);
    };
    const b = window.agsa_ext;
    a.H
      ? document.addEventListener(a.H, a.u, !1)
      : b &&
        b.registerPageVisibilityListener &&
        (Rd(() => {
          a.u && a.u();
        }),
        b.registerPageVisibilityListener("senty.doodle.pvc();"));
  }
  function bl(a, b) {
    window.agsa_ext
      ? b()
      : setTimeout(() => {
          $k(a);
        }, 100);
  }
  function fl(a) {
    const b = a.i || a.j;
    a.o && !b ? ((a.o = !1), a.ka(), el(a)) : !a.o && b && ((a.o = !0), a.ha());
  }
  var gl = class {
    constructor(a, b, c) {
      this.T = a;
      this.ha = b;
      this.ka = c;
      this.j = !1;
      this.u = () => {};
      this.v = Jd();
      this.U = Nd(document, "hidden");
      this.H = (this.s = Nd(document, "visibilityState")) ? this.s.replace(/state$/i, "change").toLowerCase() : null;
      this.o = this.i = Zk(this);
      this.O = new Ij();
      $k(this);
      cl(this);
      el(this);
    }
  };
  const hl = (a) =>
    new Promise((b) => {
      setTimeout(b, a);
    });
  function il(a, b) {
    const c = document.createElement("div");
    c.classList.add("ddl-lightboxContainer_");
    c.classList.add("ddl-lightboxBackground_");
    a.N.appendChild(c);
    const d = document.createElement("div");
    d.classList.add("ddl-lightboxContentContainer_");
    c.appendChild(d);
    b.classList.add("ddl-lightboxContent_");
    K(b, "position", "relative", "left", "50%", "top", "50%");
    d.appendChild(b);
    b = new ok(b, () => {
      console.log("close");
      // TODO: close button clicked
      onClickCloseOnDesktop(a);
    });
    c.appendChild(b.V);
    window.addEventListener("resize", () => {
      a.j();
    });
    return { V: b, Oa: c, Fb: d };
  }
  function onClickCloseOnDesktop(a) {
    k(function* () {
      a.i &&
        (mb(a.o),
        a.N.classList.remove("ddl-lightboxMode_"),
        a.Oa.classList.remove("ddl-lightboxBackground_"),
        a.Oa.classList.remove("ddl-lightboxEnabled_"),
        (a.i = !1),
        a.u(),
        mk(a.V, !1),
        isMobile() ||
          !H.includes("Safari") ||
          H.includes("Chrome") ||
          ((a.N.style.display = "none"), a.N.offsetWidth, (a.N.style.display = "block")),
        yield hl(0));
    });
  }
  function onStartDesktop(a) {
    return k(function* () {
      a.i ||
        (yield hl(0),
        a.N.classList.add("ddl-lightboxMode_"),
        a.Oa.classList.add("ddl-lightboxBackground_"),
        a.Oa.getBoundingClientRect(),
        a.Oa.classList.add("ddl-lightboxEnabled_"),
        (a.i = !0),
        a.j(),
        (a.o = t(document, "keydown", (b) => {
          27 === b.keyCode && onClickCloseOnDesktop(a);
        })),
        mk(a.V, !0),
        yield hl(500));
    });
  }
  var ll = class {
    constructor(a, b, c, d, e = () => {}, f = () => {}) {
      this.N = a;
      this.s = b;
      this.j = e;
      this.o = null;
      this.i = !1;
      this.j = e;
      this.u = f;
      const { V: g, Oa: h, Fb: m } = il(this, b);
      this.V = g;
      this.Oa = h;
      this.Fb = m;
      this.setSize(c, d);
    }
    setSize(a, b) {
      K(this.Fb, "maxWidth", `${a}px`, "maxHeight", `${b}px`);
      K(this.s, "width", `${a}px`, "height", `${b}px`);
    }
  };
  var ml = (a) => {
      if (isAppleDevice() && (sd() || qd()))
        for (const b of a)
          t(
            b,
            "touchmove",
            (c) => {
              1 !== c.scale && c.preventDefault();
            },
            { passive: !1 },
          );
    },
    nl = (a) => {
      for (const b of a)
        t(
          b,
          "contextmenu",
          (c) => {
            c.preventDefault();
          },
          { passive: !1 },
        );
    };
  let ol = null;
  function kk(a) {
    Kj(a.O, a.va, ["mousedown", "mouseout", "touchstart"], (b) => {
      a.v.handleEvent(b);
    });
    Kj(a.O, document, ["mouseup", "mousemove", "touchend", "touchmove", "contextmenu"], (b) => {
      a.v.handleEvent(b);
    });
  }
  function pl() {
    var a = new URLSearchParams(window.location.search);
    const b = a.get("hl") || "en",
      c = a.get("gl") || "us";
    let d;
    switch (a.get("cta")) {
      case "a":
        d = 0;
        break;
      case "s":
        d = 1;
        break;
      default:
        d = 2;
    }
    a = "1" === a.get("se") ? !0 : !1;
    return { hl: b, gl: c, Mc: d, Ta: a };
  }
  function ql(a) {
    rk(a.Aa);
    var b = a.o;
    b.j && b.o && b.j.classList.remove(b.o);
    rk(b.u);
    a.doodle.Hb();
  }
  function rl(a) {
    if (vd) fe(a.j.tc);
    else {
      a.Aa.start();
      a.Ea = !0;
      a.Fa = !0;
      if (document.querySelector("#uidsdoodle")) {
        if (!a.Db.Ta) return;
        window.parent.postMessage(
          { Xb: "resizeDoodle", width: a.j.width, height: a.j.height, duration: 150, preserveAspectRatio: !0 },
          "*",
        );
        const b = new Promise((d) => {
            window.addEventListener("message", (e) => {
              "resizeComplete" === e.data.Xb && d();
            });
          }),
          c = new Promise((d) => {
            setTimeout(d, 1e3);
          });
        Promise.race([b, c]).then(() => {
          mg(0);
          yk(a.o);
          sl(a.T);
          Ck(a.u, !0);
          Gk(a.v);
        });
      } else
        tl(a, () => {
          mg(0);
          Ck(a.u, !0);
        });
      a.N.removeAttribute("title");
      ul(a.doodle);
    }
  }
  function vl(a) {
    ml([document, a.N, a.va, a.oa]);
    nl([a.N, a.va, a.oa]);
    Kj(a.O, a.N, "touchend", () => {
      var b = a.fullscreen;
      b.o && !document[Tk] && (b.s.call(b.N), Vk(b), (b.i.isFullscreen = !!document[Tk]));
    });
  }
  function wl(a, b) {
    a.s.remove();
    const c = b ? -1 : 0,
      d = b ? "true" : "false";
    for (const e of a.N.children) e instanceof HTMLElement && ((e.tabIndex = c), (e.ariaHidden = d));
    b && a.N.prepend(a.s);
  }
  // TODO: load game based on device type
  function tl(a, b) {
    // TODO: a.H true = desktop, false = mobile
    a.H ? xl(a, b) : dg() && a.j.Ta ? (a.U = new Rk(a.N, () => {})) : (b(), Gk(a.v));
  }
  function xl(a, b) {
    k(function* () {
      a.ha = new ll(
        a.N,
        a.va,
        a.j.width,
        a.j.height,
        () => {
          Ck(a.u, !0);
          Gk(a.v);
        },
        () => {
          a.Gb();
        },
      );
      yield startDesktop(a);
      b();
      a.va.addEventListener("click", () => {
        onClickStartGameDesktop(a);
      });
      a.s.addEventListener("click", () => {
        onClickStartGameDesktop(a);
      });
    });
  }
  function Al(a) {
    Gk(a.v);
    a.Ea && a.Fa ? ((document.getElementById("fkbx") || rd()) && ol && (mb(ol), (ol = null)), a.Aa.start()) : vk(a.o);
    a.doodle.hb();
  }
  function Bl(a, b) {
    a.ka = b;
  }
  function startDesktop(a) {
    return k(function* () {
      yk(a.o);
      sl(a.T);
      let b, c;
      null == (b = a.ka) || null == (c = b.Bc) || c.call(b);
      wl(a, !1);
      yield onStartDesktop(a.ha);
    });
  }
  function onClickStartGameDesktop(a) {
    return k(function* () {
      yield startDesktop(a);
      Al(a);
    });
  }
  var Dl = class {
    constructor(a) {
      this.j = a;
      this.Fa = this.Ea = !1;
      this.doodle = this.ka = null;
      this.s = document.createElement("button");
      this.Db = pl();
      this.i = jk();
      this.N = this.i.N;
      this.Ca = this.N.title;
      this.oa = this.i.oa;
      this.va = this.i.va;
      this.i.width = this.j.width;
      this.i.height = this.j.height;
      (this.H = gg()) && !document.querySelector("#uidsdoodle") && this.va.classList.add("ddl-domRootLightboxed_");
      let b;
      new gl(
        null != (b = a.Nc) ? b : 6e4,
        () => {
          ql(this);
        },
        () => {
          this.hb();
        },
      );
      this.O = new Ij(this);
      this.v = new Hk(this.i);
      this.fullscreen = new Yk(this.i);
      let c;
      Wk(this.fullscreen, null != (c = this.j.orientation) ? c : "landscape-primary");
      this.u = new Dk(this.i);
      this.V = new ok(this.va, () => {
        var d = this.fullscreen;
        Sk.call(document);
        d.i.isFullscreen = !!document[Tk];
      });
      this.V.V.classList.add("ddl-closeFullscreenBtn_");
      this.o = new zk(
        this.i,
        this.j.Wa.Cc,
        this.j.Wa.uc,
        () => {},
        () => {
          rl(this);
          nb(this.s);
        },
        !1 !== this.j.Wa.Fc && !this.H && !vd,
      );
      this.T = new Cl(this.i.va, this.o.i.Pb, this.j.Wa.La);
      this.Aa = new sk((d) => {
        this.U && this.U.j(d);
        mk(this.V, !!document[Tk]);
        this.doodle.Ga(d);
      });
      vl(this);
      Ck(this.u);
      this.s.title = this.Ca;
      this.s.classList.add("ddl-ctaStartButton_");
      this.s.tabIndex = 0;
      this.s.ariaHidden = "false";
      db(this.s, "click", () => {
        startGame(this.o);
      });
      wl(this, !isAutoStart());
    }
    setSize(a, b) {
      this.i.width = a;
      this.i.height = b;
      this.u.setSize(a, b);
      let c;
      null == (c = this.ha) || c.setSize(a, b);
      Ck(this.u, !0);
    }
    hb() {
      let a;
      !this.H || (null == (a = this.ha) ? 0 : a.i) ? Al(this) : vk(this.o);
    }
    Ta() {
      return !this.H && dg();
    }
    Gb() {
      ql(this);
      wl(this, !0);
      this.N.setAttribute("title", this.Ca);
      var a = this.o;
      0 !== a.La && (a.Ba.classList.remove(a.i.Sb), vk(a));
      a = this.T;
      if (0 !== a.La) for (const d of a.va.children) d.classList.contains(a.i) || d.classList.add("ddl-contentHide_");
      Ck(this.u, !0);
      let b, c;
      null == (b = this.ka) || null == (c = b.Gb) || c.call(b);
    }
  };
  function sl(a) {
    if (0 !== a.La) for (const b of a.va.children) b.classList.contains(a.i) || b.classList.remove("ddl-contentHide_");
  }
  class Cl {
    constructor(a, b, c) {
      this.va = a;
      this.i = b;
      this.La = c;
    }
  }
  var El = (a) => {
    a = a.toLowerCase().replace(/ /g, "");
    const b = document.documentElement.classList;
    for (const c of b.values()) if (c.search(`wf-${a}-w+-active`)) break;
  };
  class Il {
    constructor(a) {
      this.i = 0;
      this.j = a;
    }
  }
  class Jl extends Il {
    constructor() {
      super((a) => new Promise((b) => setTimeout(b, a)));
    }
  }
  const Kl = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
  function Ll(a) {
    let b;
    Kl ? (b = a[Kl]) : (b = a.Na);
    return null == b ? 0 : b;
  }
  function Ml(a, b) {
    Kl
      ? (a[Kl] = b)
      : void 0 !== a.Na
        ? (a.Na = b)
        : Object.defineProperties(a, { Na: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
  }
  var Nl = {};
  function Ol(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  const Pl = [];
  Ml(Pl, 23);
  Object.freeze(Pl);
  function Ql(a) {
    var b = a.length;
    (b = b ? a[b - 1] : void 0) && Ol(b) ? (b.g = 1) : a.push({ g: 1 });
  }
  function Rl(a, b) {
    return -1 === b ? null : b >= a.s ? (a.j ? a.j[b] : void 0) : a.i[b + a.o];
  }
  let Sl;
  function Tl(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a)
          if (Array.isArray(a)) {
            if (0 !== (Ll(a) & 128)) return (a = Array.prototype.slice.call(a)), Ql(a), a;
          } else if (Nj && null != a && a instanceof Uint8Array) {
            var b;
            void 0 === b && (b = 0);
            if (!Mj) {
              Mj = {};
              for (
                var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                  d = ["+/=", "+/", "-_=", "-_.", "-_"],
                  e = 0;
                5 > e;
                e++
              ) {
                var f = c.concat(d[e].split(""));
                Lj[e] = f;
                for (var g = 0; g < f.length; g++) {
                  var h = f[g];
                  void 0 === Mj[h] && (Mj[h] = g);
                }
              }
            }
            b = Lj[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (e = f = 0; f < a.length - 2; f += 3) {
              var m = a[f],
                w = a[f + 1];
              h = a[f + 2];
              g = b[m >> 2];
              m = b[((m & 3) << 4) | (w >> 4)];
              w = b[((w & 15) << 2) | (h >> 6)];
              h = b[h & 63];
              c[e++] = g + m + w + h;
            }
            g = 0;
            h = d;
            switch (a.length - f) {
              case 2:
                (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
              case 1:
                (a = a[f]), (c[e] = b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
            }
            a = c.join("");
            return a;
          }
    }
    return a;
  }
  function Ul(a, b, c, d) {
    if (null != a) {
      if (Array.isArray(a)) a = Vl(a, b, c, void 0 !== d);
      else if (Ol(a)) {
        const e = {};
        for (let f in a) e[f] = Ul(a[f], b, c, d);
        a = e;
      } else a = b(a, d);
      return a;
    }
  }
  function Vl(a, b, c, d) {
    const e = Ll(a);
    d = d ? !!(e & 16) : void 0;
    a = Array.prototype.slice.call(a);
    for (let f = 0; f < a.length; f++) a[f] = Ul(a[f], b, c, d);
    c(e, a);
    return a;
  }
  function Wl(a) {
    return a.Ac === Nl ? a.toJSON() : Tl(a);
  }
  function Xl(a, b) {
    a & 128 && Ql(b);
  }
  var Yl = class {
    constructor(a) {
      null == a && (a = Sl);
      Sl = void 0;
      var b = this.constructor.i || 0;
      const c = 0 < b,
        d = this.constructor.j;
      var e;
      if (null == a) {
        a = d ? [d] : [];
        var f = 48;
        c && ((b = 0), (f |= 128));
        Ml(a, f);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (d && d !== a[0]) throw Error();
        var g = a;
        Kl
          ? (g = g[Kl] |= 0)
          : void 0 !== g.Na
            ? (g = g.Na |= 0)
            : (Object.defineProperties(g, { Na: { value: 0, configurable: !0, writable: !0, enumerable: !1 } }), (g = 0));
        let h = g;
        if ((e = 0 !== (16 & h))) (e = 0 !== (32 & h)) || (h |= 32);
        if (c)
          if (128 & h) b = 0;
          else {
            if (0 < a.length && ((e = a[a.length - 1]), Ol(e) && "g" in e)) {
              b = 0;
              h |= 128;
              delete e.g;
              let m = !0;
              for (f in e) {
                m = !1;
                break;
              }
              m && a.pop();
            }
          }
        else if (128 & h) throw Error();
        g !== h && Ml(a, h);
      }
      this.o = (d ? 0 : -1) - b;
      this.i = a;
      a: {
        b = this.i.length;
        a = b - 1;
        if (b && ((b = this.i[a]), Ol(b))) {
          this.j = b;
          this.s = a - this.o;
          break a;
        }
        this.s = Number.MAX_VALUE;
      }
      if (!c && this.j && "g" in this.j) throw Error("w");
    }
    toJSON() {
      return Vl(this.i, Wl, Xl);
    }
  };
  Yl.prototype.Ac = Nl;
  Yl.prototype.toString = function () {
    return this.i.toString();
  };
  var Zl = class extends Yl {};
  const am = T(),
    bm = "1" === I.i.get("ddllb"),
    cm = (!!document.getElementById("fkbx") || rd()) && !isAutoStart();
  function ul(a) {
    cm || (a.j.setSize(540, 960), pc(Cc.ac(), a.N), qg(1), (a.i = new ik()), a.i.load());
  }
  class dm extends lk {
    constructor(a) {
      super(a);
      this.N = a.i.N;
      a.i.oa.appendChild(qj(vj));
      Bl(a, {
        Gb: () => {
          a.setSize(500, 200);
        },
        Bc: () => {
          a.setSize(540, 960);
        },
      });
      cm &&
        this.N.addEventListener("click", () => {
          const b = new Uc("https://www.senty.com/webhp");
          b.i.set("ddllb", "1");
          b.i.set("doodle", Vd);
          Xd && b.i.set("hl", Xd);
          Yd && b.i.set("gl", Yd);
          Od(b.toString(), !0);
        });
    }
    Ga(a) {
      let b;
      if (null != (b = this.i)) {
        Ic(b.O, a);
        let c;
        null == (c = b.o) || Ic(c, a);
        let d;
        null == (d = b.u) || Ic(d, a);
        b.u && 0 < b.u.find(me).length && ((b.u = void 0), ak(b));
      }
    }
    Hb() {
      let a;
      null == (a = this.i) || a.Hb();
    }
    hb() {
      let a;
      null == (a = this.i) || a.hb();
    }
  }
  k(function* () {
    ng();
    var a = [cf(Jh).load(Xd, Yd, Dc, assetsPath), Ve(T(), 14)];
    try {
      yield Promise.all(a);
      a = null;
      if (!isAutoStart()) {
        var b = document.createElement("div");
        b.style.position = "absolute";
        var c = b;
        c.style.userSelect = "none";
        c.style.MozUserSelect = "none";
        c.style.webkitUserSelect = "none";
        c.style.webkitUserSelect = "none";
        c.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
        c.unselectable = "on";
        let m = Ef[3],
          w = Ef[4];
        const E = Ef[5] || 1;
        E && 1 !== E && am.j[Pe(Ef)] && ((m = Math.floor(m / E)), (w = Math.floor(w / E)));
        c.style.width = `${m}px`;
        c.style.height = `${w}px`;
        var d = [c, Ze(am, Ef), Ye(am, Ef)];
        const S = d[0],
          ma = d[2];
        S.style.background = d[1];
        ma && (S.style.backgroundSize = ma);
        a = S;
        a.classList.add("ddl-playButton_");
      }
      const [g, h] = isMobile() && !isTouchDevice() ? [540, 960] : [500, 200];
      d = { width: g, height: h, tc: Vd, orientation: "portrait-primary", Wa: { Cc: a, uc: "ddl-ctaAnimated_", La: 1 } };
      cm && ((d.Ta = !1), (d.Wa.Fc = !1));
      {
        c = dm;
        b = [];
        null != d.Ta || (d.Ta = !0);
        const m = new Dl(d),
          w = m.i.oa;
        if (m.i.N && w) {
          var e = new c(m, ...b);
          var f = (m.doodle = e);
        } else
          console.error("Unable to render the Doodle. This is expected during unit tests but may be a cause for concern elsewhere."),
            (f = void 0);
      }
      f && bm && (startGame(f.j.o), nb(f.j.o.Ba));
    } catch (g) {
      console.error("Failed to initialize Doodle. Error: ", g);
    }
  });
}).call(this);
