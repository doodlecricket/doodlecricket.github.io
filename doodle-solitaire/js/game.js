const assetsPath = "/doodle-solitaire/assets/";

window.senty = {};
window.senty.doodle = {};
window.senty.doodle.allMsgs = {
  messages: [
    "Game title",
    "Mode selection",
    "Easy mode",
    "Hard mode",
    "Score of the current game",
    "Number of moves played in the game",
    "Undo last move",
    "Starts a new game",
    "Confirm dialog: to start a new game?",
    "After winning the game: play again?",
    "Share message",
    "Hint the user to share",
  ],
  translations: {
    en: {
      ALL: [
        "Doodle Solitaire",
        "Choose your difficulty",
        "Easy ",
        "Hard",
        "Score",
        "Moves",
        "Undo",
        "New",
        "Start a new game?",
        "Play again?",
        "Check out Doodle solitaire game!",
        "Share: ",
      ],
      uk: [
        "Doodle Solitaire",
        "Choose your difficulty",
        "Easy ",
        "Hard",
        "Score",
        "Moves",
        "Undo",
        "New",
        "Start a new game?",
        "Play again?",
        "Check out Doodle solitaire game!",
        "",
      ],
    },
  },
};

var g,
  k = this,
  m = function (a) {
    return void 0 !== a;
  },
  ba = function () {
    throw Error("unimplemented abstract method");
  },
  ca = function (a) {
    a.la = function () {
      return a.Yc ? a.Yc : (a.Yc = new a());
    };
  },
  da = function (a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if (
          "[object Array]" == c ||
          ("number" == typeof a.length &&
            "undefined" != typeof a.splice &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("splice"))
        )
          return "array";
        if (
          "[object Function]" == c ||
          ("undefined" != typeof a.call &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("call"))
        )
          return "function";
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  },
  ea = function (a) {
    return "array" == da(a);
  },
  fa = function (a) {
    var b = da(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  },
  n = function (a) {
    return "string" == typeof a;
  },
  p = function (a) {
    return "number" == typeof a;
  },
  ga = function (a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  },
  ha = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
  ia = function (a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  },
  q = function (a, b, c) {
    q =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? ha
        : ia;
    return q.apply(null, arguments);
  },
  ja = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b);
    };
  },
  r =
    Date.now ||
    function () {
      return +new Date();
    },
  t = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.g = b.prototype;
    a.prototype = new c();
    a.qe = function (a, c, f) {
      for (
        var d = Array(arguments.length - 2), e = 2;
        e < arguments.length;
        e++
      )
        d[e - 2] = arguments[e];
      return b.prototype[c].apply(a, d);
    };
  };
var u = function () {
  this.Ma = this.Ma;
  this.Ea = this.Ea;
};
u.prototype.Ma = !1;
u.prototype.La = function () {
  this.Ma || ((this.Ma = !0), this.l());
};
var v = function (a, b) {
  var c = ja(ka, b);
  a.Ma
    ? m(void 0)
      ? c.call(void 0)
      : c()
    : (a.Ea || (a.Ea = []), a.Ea.push(m(void 0) ? q(c, void 0) : c));
};
u.prototype.l = function () {
  if (this.Ea) for (; this.Ea.length; ) this.Ea.shift()();
};
var ka = function (a) {
  a && "function" == typeof a.La && a.La();
};
var la = function (a) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, la);
  else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
t(la, Error);
la.prototype.name = "CustomError";
var ma;
var na = function (a, b) {
    for (
      var c = a.split("%s"),
        d = "",
        e = Array.prototype.slice.call(arguments, 1);
      e.length && 1 < c.length;

    )
      d += c.shift() + e.shift();
    return d + c.join("%s");
  },
  oa = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
      },
  wa = function (a) {
    if (!pa.test(a)) return a;
    -1 != a.indexOf("&") && (a = a.replace(qa, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(ra, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(sa, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(ta, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(ua, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(va, "&#0;"));
    return a;
  },
  qa = /&/g,
  ra = /</g,
  sa = />/g,
  ta = /"/g,
  ua = /'/g,
  va = /\x00/g,
  pa = /[\x00&<>"']/,
  xa = String.prototype.repeat
    ? function (a, b) {
        return a.repeat(b);
      }
    : function (a, b) {
        return Array(b + 1).join(a);
      },
  ya = function (a) {
    a = m(void 0) ? a.toFixed(void 0) : String(a);
    var b = a.indexOf(".");
    -1 == b && (b = a.length);
    return xa("0", Math.max(0, 2 - b)) + a;
  },
  za = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  },
  Aa = function (a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
      return c.toUpperCase();
    });
  },
  Ba = function (a) {
    var b = n(void 0)
      ? "undefined"
          .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
          .replace(/\x08/g, "\\x08")
      : "\\s";
    return a.replace(
      new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"),
      function (a, b, e) {
        return b + e.toUpperCase();
      },
    );
  };
var Ca = function (a, b) {
  b.unshift(a);
  la.call(this, na.apply(null, b));
  b.shift();
};
t(Ca, la);
Ca.prototype.name = "AssertionError";
var Da = function (a, b, c, d) {
    var e = "Assertion failed";
    if (c)
      var e = e + (": " + c),
        f = d;
    else a && ((e += ": " + a), (f = b));
    throw new Ca("" + e, f || []);
  },
  w = function (a, b, c) {
    a || Da("", null, b, Array.prototype.slice.call(arguments, 2));
  },
  Ea = function (a, b, c) {
    p(a) ||
      Da(
        "Expected number but got %s: %s.",
        [da(a), a],
        b,
        Array.prototype.slice.call(arguments, 2),
      );
    return a;
  };
var Fa = function (a) {
  Fa[" "](a);
  return a;
};
Fa[" "] = function () {};
var Ha = function (a, b) {
  var c = Ga;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
};
var Ia = Array.prototype.indexOf
    ? function (a, b, c) {
        w(null != a.length);
        return Array.prototype.indexOf.call(a, b, c);
      }
    : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  x = Array.prototype.forEach
    ? function (a, b, c) {
        w(null != a.length);
        Array.prototype.forEach.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
          f in e && b.call(c, e[f], f, a);
      },
  Ja = Array.prototype.filter
    ? function (a, b, c) {
        w(null != a.length);
        return Array.prototype.filter.call(a, b, c);
      }
    : function (a, b, c) {
        for (
          var d = a.length, e = [], f = 0, h = n(a) ? a.split("") : a, l = 0;
          l < d;
          l++
        )
          if (l in h) {
            var P = h[l];
            b.call(c, P, l, a) && (e[f++] = P);
          }
        return e;
      },
  Ka = Array.prototype.map
    ? function (a, b, c) {
        w(null != a.length);
        return Array.prototype.map.call(a, b, c);
      }
    : function (a, b, c) {
        for (
          var d = a.length, e = Array(d), f = n(a) ? a.split("") : a, h = 0;
          h < d;
          h++
        )
          h in f && (e[h] = b.call(c, f[h], h, a));
        return e;
      },
  La = Array.prototype.reduce
    ? function (a, b, c, d) {
        w(null != a.length);
        d && (b = q(b, d));
        return Array.prototype.reduce.call(a, b, c);
      }
    : function (a, b, c, d) {
        var e = c;
        x(a, function (c, h) {
          e = b.call(d, e, c, h, a);
        });
        return e;
      },
  Ma = Array.prototype.some
    ? function (a, b, c) {
        w(null != a.length);
        return Array.prototype.some.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1;
      },
  Na = Array.prototype.every
    ? function (a, b, c) {
        w(null != a.length);
        return Array.prototype.every.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && !b.call(c, e[f], f, a)) return !1;
        return !0;
      },
  Oa = function (a, b) {
    var c = Ia(a, b),
      d;
    if ((d = 0 <= c)) w(null != a.length), Array.prototype.splice.call(a, c, 1);
    return d;
  },
  Pa = function (a) {
    return Array.prototype.concat.apply(Array.prototype, arguments);
  },
  Qa = function (a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  },
  Sa = function (a, b, c, d) {
    w(null != a.length);
    Array.prototype.splice.apply(a, Ra(arguments, 1));
  },
  Ra = function (a, b, c) {
    w(null != a.length);
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  },
  Ta = function (a, b) {
    for (var c = b || Math.random, d = a.length - 1; 0 < d; d--) {
      var e = Math.floor(c() * (d + 1)),
        f = a[d];
      a[d] = a[e];
      a[e] = f;
    }
  };
var Ua = function (a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  },
  Va = function (a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  },
  Wa = function (a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  },
  Xa = function (a, b) {
    return null !== a && b in a ? a[b] : void 0;
  },
  Ya =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " ",
    ),
  Za = function (a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Ya.length; f++)
        (c = Ya[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  };
var $a;
a: {
  var ab = k.navigator;
  if (ab) {
    var bb = ab.userAgent;
    if (bb) {
      $a = bb;
      break a;
    }
  }
  $a = "";
}
var y = function (a) {
  return -1 != $a.indexOf(a);
};
var cb = function () {
  return y("Trident") || y("MSIE");
};
var db = function () {
  return y("iPhone") && !y("iPod") && !y("iPad");
};
var eb = y("Opera"),
  z = cb(),
  fb = y("Edge"),
  A =
    y("Gecko") &&
    !(-1 != $a.toLowerCase().indexOf("webkit") && !y("Edge")) &&
    !(y("Trident") || y("MSIE")) &&
    !y("Edge"),
  B = -1 != $a.toLowerCase().indexOf("webkit") && !y("Edge"),
  gb = y("Macintosh"),
  hb = y("Windows"),
  ib = function () {
    var a = k.document;
    return a ? a.documentMode : void 0;
  },
  kb;
a: {
  var lb = "",
    mb = (function () {
      var a = $a;
      if (A) return /rv\:([^\);]+)(\)|;)/.exec(a);
      if (fb) return /Edge\/([\d\.]+)/.exec(a);
      if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (B) return /WebKit\/(\S+)/.exec(a);
      if (eb) return /(?:Version)[ \/]?(\S+)/.exec(a);
    })();
  mb && (lb = mb ? mb[1] : "");
  if (z) {
    var nb = ib();
    if (null != nb && nb > parseFloat(lb)) {
      kb = String(nb);
      break a;
    }
  }
  kb = lb;
}
var ob = kb,
  Ga = {},
  C = function (a) {
    return Ha(a, function () {
      for (
        var b = 0,
          c = oa(String(ob)).split("."),
          d = oa(String(a)).split("."),
          e = Math.max(c.length, d.length),
          f = 0;
        0 == b && f < e;
        f++
      ) {
        var h = c[f] || "",
          l = d[f] || "";
        do {
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
          if (0 == h[0].length && 0 == l[0].length) break;
          b =
            za(
              0 == h[1].length ? 0 : parseInt(h[1], 10),
              0 == l[1].length ? 0 : parseInt(l[1], 10),
            ) ||
            za(0 == h[2].length, 0 == l[2].length) ||
            za(h[2], l[2]);
          h = h[3];
          l = l[3];
        } while (0 == b);
      }
      return 0 <= b;
    });
  },
  pb;
var qb = k.document;
pb =
  qb && z
    ? ib() || ("CSS1Compat" == qb.compatMode ? parseInt(ob, 10) : 5)
    : void 0;
var rb = !z || 9 <= Number(pb),
  sb = !z || 9 <= Number(pb),
  tb = z && !C("9");
!B || C("528");
(A && C("1.9b")) || (z && C("8")) || (eb && C("9.5")) || (B && C("528"));
(A && !C("8")) || (z && C("9"));
var D = function (a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Fa = !1;
  this.ld = !0;
};
D.prototype.stopPropagation = function () {
  this.Fa = !0;
};
D.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
  this.ld = !1;
};
var ub = function (a) {
  a.preventDefault();
};
var E = function (a, b) {
  D.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode =
    this.keyCode =
    this.button =
    this.screenY =
    this.screenX =
    this.clientY =
    this.clientX =
    this.offsetY =
    this.offsetX =
      0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.ja = this.state = null;
  a && this.kb(a, b);
};
t(E, D);
var vb = [1, 4, 2];
E.prototype.kb = function (a, b) {
  var c = (this.type = a.type),
    d = a.changedTouches ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var e = a.relatedTarget;
  if (e) {
    if (A) {
      var f;
      a: {
        try {
          Fa(e.nodeName);
          f = !0;
          break a;
        } catch (h) {}
        f = !1;
      }
      f || (e = null);
    }
  } else
    "mouseover" == c
      ? (e = a.fromElement)
      : "mouseout" == c && (e = a.toElement);
  this.relatedTarget = e;
  null === d
    ? ((this.offsetX = B || void 0 !== a.offsetX ? a.offsetX : a.layerX),
      (this.offsetY = B || void 0 !== a.offsetY ? a.offsetY : a.layerY),
      (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
      (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
      (this.screenX = a.screenX || 0),
      (this.screenY = a.screenY || 0))
    : ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
      (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
      (this.screenX = d.screenX || 0),
      (this.screenY = d.screenY || 0));
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.ja = a;
  a.defaultPrevented && this.preventDefault();
};
E.prototype.stopPropagation = function () {
  E.g.stopPropagation.call(this);
  this.ja.stopPropagation
    ? this.ja.stopPropagation()
    : (this.ja.cancelBubble = !0);
};
E.prototype.preventDefault = function () {
  E.g.preventDefault.call(this);
  var a = this.ja;
  if (a.preventDefault) a.preventDefault();
  else if (((a.returnValue = !1), tb))
    try {
      if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
    } catch (b) {}
};
var wb = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  xb = function (a) {
    return !(!a || !a[wb]);
  },
  yb = 0;
var zb = function (a, b, c, d, e) {
    this.listener = a;
    this.Xb = null;
    this.src = b;
    this.type = c;
    this.Za = !!d;
    this.Gb = e;
    this.key = ++yb;
    this.Sa = this.zb = !1;
  },
  Ab = function (a) {
    a.Sa = !0;
    a.listener = null;
    a.Xb = null;
    a.src = null;
    a.Gb = null;
  };
var Bb = function (a) {
  this.src = a;
  this.F = {};
  this.ub = 0;
};
Bb.prototype.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.F[f];
  a || ((a = this.F[f] = []), this.ub++);
  var h = Cb(a, b, d, e);
  -1 < h
    ? ((b = a[h]), c || (b.zb = !1))
    : ((b = new zb(b, this.src, f, !!d, e)), (b.zb = c), a.push(b));
  return b;
};
Bb.prototype.remove = function (a, b, c, d) {
  a = a.toString();
  if (!(a in this.F)) return !1;
  var e = this.F[a];
  b = Cb(e, b, c, d);
  return -1 < b
    ? (Ab(e[b]),
      w(null != e.length),
      Array.prototype.splice.call(e, b, 1),
      0 == e.length && (delete this.F[a], this.ub--),
      !0)
    : !1;
};
var Db = function (a, b) {
  var c = b.type;
  c in a.F &&
    Oa(a.F[c], b) &&
    (Ab(b), 0 == a.F[c].length && (delete a.F[c], a.ub--));
};
Bb.prototype.Ra = function (a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.F)
    if (!a || c == a) {
      for (var d = this.F[c], e = 0; e < d.length; e++) ++b, Ab(d[e]);
      delete this.F[c];
      this.ub--;
    }
  return b;
};
Bb.prototype.ib = function (a, b, c, d) {
  a = this.F[a.toString()];
  var e = -1;
  a && (e = Cb(a, b, c, d));
  return -1 < e ? a[e] : null;
};
Bb.prototype.hasListener = function (a, b) {
  var c = m(a),
    d = c ? a.toString() : "",
    e = m(b);
  return Va(this.F, function (a) {
    for (var f = 0; f < a.length; ++f)
      if (!((c && a[f].type != d) || (e && a[f].Za != b))) return !0;
    return !1;
  });
};
var Cb = function (a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Sa && f.listener == b && f.Za == !!c && f.Gb == d) return e;
  }
  return -1;
};
var Eb = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Fb = {},
  Gb = 0,
  Hb = function (a, b, c, d, e) {
    if (ea(b)) {
      for (var f = 0; f < b.length; f++) Hb(a, b[f], c, d, e);
      return null;
    }
    c = Ib(c);
    return xb(a) ? a.a(b, c, d, e) : Jb(a, b, c, !1, d, e);
  },
  Jb = function (a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var h = !!e,
      l = Kb(a);
    l || (a[Eb] = l = new Bb(a));
    c = l.add(b, c, d, e, f);
    if (c.Xb) return c;
    d = Lb();
    c.Xb = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) a.addEventListener(b.toString(), d, h);
    else if (a.attachEvent) a.attachEvent(Mb(b.toString()), d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Gb++;
    return c;
  },
  Lb = function () {
    var a = Nb,
      b = sb
        ? function (c) {
            return a.call(b.src, b.listener, c);
          }
        : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c;
          };
    return b;
  },
  Ob = function (a, b, c, d, e) {
    if (ea(b)) {
      for (var f = 0; f < b.length; f++) Ob(a, b[f], c, d, e);
      return null;
    }
    c = Ib(c);
    return xb(a) ? a.rc(b, c, d, e) : Jb(a, b, c, !0, d, e);
  },
  Pb = function (a, b, c, d, e) {
    if (ea(b)) for (var f = 0; f < b.length; f++) Pb(a, b[f], c, d, e);
    else
      (c = Ib(c)),
        xb(a)
          ? a.Ja(b, c, d, e)
          : a && (a = Kb(a)) && (b = a.ib(b, c, !!d, e)) && Qb(b);
  },
  Qb = function (a) {
    if (!p(a) && a && !a.Sa) {
      var b = a.src;
      if (xb(b)) Db(b.U, a);
      else {
        var c = a.type,
          d = a.Xb;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.Za)
          : b.detachEvent && b.detachEvent(Mb(c), d);
        Gb--;
        (c = Kb(b))
          ? (Db(c, a), 0 == c.ub && ((c.src = null), (b[Eb] = null)))
          : Ab(a);
      }
    }
  },
  Mb = function (a) {
    return a in Fb ? Fb[a] : (Fb[a] = "on" + a);
  },
  Sb = function (a, b, c, d) {
    var e = !0;
    if ((a = Kb(a)))
      if ((b = a.F[b.toString()]))
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var f = b[a];
          f && f.Za == c && !f.Sa && ((f = Rb(f, d)), (e = e && !1 !== f));
        }
    return e;
  },
  Rb = function (a, b) {
    var c = a.listener,
      d = a.Gb || a.src;
    a.zb && Qb(a);
    return c.call(d, b);
  },
  Nb = function (a, b) {
    if (a.Sa) return !0;
    if (!sb) {
      var c;
      if (!(c = b))
        a: {
          c = ["window", "event"];
          for (var d = k, e; (e = c.shift()); )
            if (null != d[e]) d = d[e];
            else {
              c = null;
              break a;
            }
          c = d;
        }
      e = c;
      c = new E(e, this);
      d = !0;
      if (!(0 > e.keyCode || void 0 != e.returnValue)) {
        a: {
          var f = !1;
          if (0 == e.keyCode)
            try {
              e.keyCode = -1;
              break a;
            } catch (P) {
              f = !0;
            }
          if (f || void 0 == e.returnValue) e.returnValue = !0;
        }
        e = [];
        for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
        for (var f = a.type, h = e.length - 1; !c.Fa && 0 <= h; h--) {
          c.currentTarget = e[h];
          var l = Sb(e[h], f, !0, c),
            d = d && l;
        }
        for (h = 0; !c.Fa && h < e.length; h++)
          (c.currentTarget = e[h]), (l = Sb(e[h], f, !1, c)), (d = d && l);
      }
      return d;
    }
    return Rb(a, new E(b, this));
  },
  Kb = function (a) {
    a = a[Eb];
    return a instanceof Bb ? a : null;
  },
  Tb = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
  Ib = function (a) {
    w(a, "Listener can not be null.");
    if ("function" == da(a)) return a;
    w(a.handleEvent, "An object listener must have handleEvent method.");
    a[Tb] ||
      (a[Tb] = function (b) {
        return a.handleEvent(b);
      });
    return a[Tb];
  };
var Ub =
  y("Safari") &&
  !(
    ((y("Chrome") || y("CriOS")) && !y("Edge")) ||
    y("Coast") ||
    y("Opera") ||
    y("Edge") ||
    y("Silk") ||
    y("Android")
  ) &&
  !(db() || y("iPad") || y("iPod"));
var Vb = hb && Ub && !C(536.25),
  Wb = function (a, b, c) {
    var d = document.createElement("source");
    d.src = b;
    d.type = c;
    a.appendChild(d);
  },
  Xb = function (a) {
    if (Vb) return null;
    var b = document.createElement("audio");
    b &&
    b.canPlayType &&
    (b.canPlayType("audio/mpeg") || b.canPlayType("audio/ogg"))
      ? ((b.controls = !1),
        (b.hidden = !0),
        (b.loaded = !1),
        Hb(b, "loadedmetadata", function () {
          b.loaded = !0;
          if (b.onloadedmetadata) b.onloadedmetadata();
        }),
        Wb(b, a + ".ogg", "audio/ogg"),
        Wb(b, a + ".mp3", "audio/mpeg"))
      : (b = null);
    return b;
  };
var Yb = function (a, b, c) {
  this.ga = {};
  this.Cd = b || "";
  this.sa = !0;
  this.Zd = c || document.body;
  if (a) for (var d in a) this.load(a[d]);
};
t(Yb, u);
g = Yb.prototype;
g.l = function () {
  for (var a in this.ga) {
    this.stop(a);
    var b = this.ga[a];
    b.parent && b.parent.removeChild(b);
  }
  this.ga = {};
  Yb.g.l.call(this);
};
g.lb = function () {
  for (var a in this.ga) if (!this.ga[a].loaded) return !1;
  return !0;
};
g.load = function (a) {
  var b;
  a &&
    ((b = this.ga[a]), !b && (b = Xb(this.Cd + "/" + a))) &&
    (this.Zd.appendChild(b), (this.ga[a] = b));
  return b;
};
g.loop = function (a) {
  if ((a = this.play(a))) a.loop = !0;
  return a;
};
g.play = function (a, b) {
  var c = this.load(a);
  c &&
    c.play &&
    this.sa &&
    ((c.autoplay = !0),
    (c.loop = !1),
    c.loaded
      ? (c.currentTime = b || 0)
      : b &&
        c.addEventListener(
          "loadedmetadata",
          function () {
            c.currentTime = b || 0;
          },
          !1,
        ),
    c.play());
  return c;
};
g.pause = function (a) {
  if (a) {
    var b = this.ga[a];
    b && b.loaded && b.pause && (b.pause(), (b.autoplay = !1), (b.loop = !1));
  }
  return b;
};
g.stop = function (a) {
  (a = this.pause(a)) && a.loaded && (a.currentTime = 0);
  return a;
};
var F = function (a) {
  u.call(this);
  this.B = a;
  this.i = {};
};
t(F, u);
var Zb = [];
F.prototype.a = function (a, b, c, d) {
  return $b(this, a, b, c, d);
};
var $b = function (a, b, c, d, e, f) {
  ea(c) || (c && (Zb[0] = c.toString()), (c = Zb));
  for (var h = 0; h < c.length; h++) {
    var l = Hb(b, c[h], d || a.handleEvent, e || !1, f || a.B || a);
    if (!l) break;
    a.i[l.key] = l;
  }
  return a;
};
F.prototype.rc = function (a, b, c, d) {
  return ac(this, a, b, c, d);
};
var ac = function (a, b, c, d, e, f) {
  if (ea(c)) for (var h = 0; h < c.length; h++) ac(a, b, c[h], d, e, f);
  else {
    b = Ob(b, c, d || a.handleEvent, e, f || a.B || a);
    if (!b) return a;
    a.i[b.key] = b;
  }
  return a;
};
F.prototype.Ja = function (a, b, c, d, e) {
  if (ea(b)) for (var f = 0; f < b.length; f++) this.Ja(a, b[f], c, d, e);
  else
    (c = c || this.handleEvent),
      (e = e || this.B || this),
      (c = Ib(c)),
      (d = !!d),
      (b = xb(a)
        ? a.ib(b, c, d, e)
        : a
          ? (a = Kb(a))
            ? a.ib(b, c, d, e)
            : null
          : null),
      b && (Qb(b), delete this.i[b.key]);
  return this;
};
F.prototype.Ra = function () {
  Ua(
    this.i,
    function (a, b) {
      this.i.hasOwnProperty(b) && Qb(a);
    },
    this,
  );
  this.i = {};
};
F.prototype.l = function () {
  F.g.l.call(this);
  this.Ra();
};
F.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
var G = function () {
  u.call(this);
  this.U = new Bb(this);
  this.Bd = this;
  this.Tb = null;
};
t(G, u);
G.prototype[wb] = !0;
g = G.prototype;
g.da = function (a) {
  this.Tb = a;
};
g.addEventListener = function (a, b, c, d) {
  Hb(this, a, b, c, d);
};
g.removeEventListener = function (a, b, c, d) {
  Pb(this, a, b, c, d);
};
g.dispatchEvent = function (a) {
  bc(this);
  var b,
    c = this.Tb;
  if (c) {
    b = [];
    for (var d = 1; c; c = c.Tb) b.push(c), w(1e3 > ++d, "infinite loop");
  }
  c = this.Bd;
  d = a.type || a;
  if (n(a)) a = new D(a, c);
  else if (a instanceof D) a.target = a.target || c;
  else {
    var e = a;
    a = new D(d, c);
    Za(a, e);
  }
  var e = !0,
    f;
  if (b)
    for (var h = b.length - 1; !a.Fa && 0 <= h; h--)
      (f = a.currentTarget = b[h]), (e = cc(f, d, !0, a) && e);
  a.Fa ||
    ((f = a.currentTarget = c),
    (e = cc(f, d, !0, a) && e),
    a.Fa || (e = cc(f, d, !1, a) && e));
  if (b)
    for (h = 0; !a.Fa && h < b.length; h++)
      (f = a.currentTarget = b[h]), (e = cc(f, d, !1, a) && e);
  return e;
};
g.l = function () {
  G.g.l.call(this);
  this.U && this.U.Ra(void 0);
  this.Tb = null;
};
g.a = function (a, b, c, d) {
  bc(this);
  return this.U.add(String(a), b, !1, c, d);
};
g.rc = function (a, b, c, d) {
  return this.U.add(String(a), b, !0, c, d);
};
g.Ja = function (a, b, c, d) {
  return this.U.remove(String(a), b, c, d);
};
var cc = function (a, b, c, d) {
  b = a.U.F[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.Sa && h.Za == c) {
      var l = h.listener,
        P = h.Gb || h.src;
      h.zb && Db(a.U, h);
      e = !1 !== l.call(P, d) && e;
    }
  }
  return e && 0 != d.ld;
};
G.prototype.ib = function (a, b, c, d) {
  return this.U.ib(String(a), b, c, d);
};
G.prototype.hasListener = function (a, b) {
  return this.U.hasListener(m(a) ? String(a) : void 0, b);
};
var bc = function (a) {
  w(
    a.U,
    "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?",
  );
};
var dc = function (a) {
  G.call(this);
  this.K = a;
  this.Xc = !1;
  this.B = new F(this);
  v(this, this.B);
  this.Aa = new Yb([], assetsPath);
  v(this, this.Aa);
  this.Gc();
};
t(dc, G);
var ec = { je: "flip", ne: "shuffle", pe: "winscreen" };
dc.prototype.kb = function () {
  this.Xc ||
    ((this.Xc = !0),
    Ua(
      ec,
      function (a) {
        var b = this.Aa.load(a);
        b && (b.volume = 0);
        a = this.Aa.play(a);
        a.pause();
        a.autoplay = !1;
      },
      this,
    ));
};
dc.prototype.Gc = function () {
  this.B.a(this.K, "vwyABC".split(""), function () {
    this.play("flip");
  });
  this.B.a(this.K, ["u", "x"], function () {
    this.play("shuffle");
  });
};
dc.prototype.play = function (a) {
  if (this.K.G.jc && this.Aa.lb()) {
    var b = this.Aa,
      c;
    for (c in b.ga) b.stop(c);
    this.Aa.play(a);
    if ((a = this.Aa.load(a))) a.volume = 1;
  }
};
var fc = {
    de: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    le: 11,
    Q: 12,
    me: 13,
  },
  gc = { ke: "HEART", ge: "DIAMOND", fe: "CLUB", oe: "SPADE" },
  hc = function () {
    G.call(this);
    this.Bb = !1;
  };
t(hc, G);
var H = function (a) {
    a.Bb || ((a.Bb = !0), ic(a, "a"));
  },
  ic = function (a, b, c) {
    var d = c || a;
    setTimeout(function () {
      a.dispatchEvent(new D(b, d));
    }, 0);
  };
var jc = function (a, b) {
  hc.call(this);
  this.R = a;
  this.S = b;
  this.pa = this.tb = this.fb = this.Ib = this.ka = !1;
  this.s = this.Xa = null;
};
t(jc, hc);
jc.prototype.l = function () {
  this.s = this.Xa = null;
  jc.g.l.call(this);
};
var nc = function (a, b) {
    a.R = b.R;
    a.S = b.S;
    kc(a, b.ka);
    var c = b.Ib;
    a.Ib != c && ((a.Ib = c), H(a));
    lc(a, b.fb);
    mc(a, b.tb);
    a.pa = b.pa;
    a.Xa = b.Xa;
    H(a);
    c = b.s;
    a.s !== c && ((a.s = c), ic(a, "c"));
  },
  lc = function (a, b) {
    a.fb != b && ((a.fb = b), H(a));
  },
  mc = function (a, b) {
    a.tb != b && ((a.tb = b), H(a));
  },
  kc = function (a, b) {
    a.ka != b && ((a.ka = b), H(a), ic(a, "b"));
  },
  oc = function (a) {
    return "SPADE" == a.S || "CLUB" == a.S ? "BLACK" : "RED";
  };
var pc = function (a) {
  return Math.floor(Math.random() * a);
};
var I = function (a, b) {
  this.x = m(a) ? a : 0;
  this.y = m(b) ? b : 0;
};
g = I.prototype;
g.clone = function () {
  return new I(this.x, this.y);
};
g.toString = function () {
  return "(" + this.x + ", " + this.y + ")";
};
g.floor = function () {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
g.round = function () {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
g.translate = function (a, b) {
  a instanceof I
    ? ((this.x += a.x), (this.y += a.y))
    : ((this.x += Number(a)), p(b) && (this.y += b));
  return this;
};
g.scale = function (a, b) {
  var c = p(b) ? b : a;
  this.x *= a;
  this.y *= c;
  return this;
};
var qc = function (a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
};
g = qc.prototype;
g.Da = function () {
  return this.right - this.left;
};
g.gb = function () {
  return this.bottom - this.top;
};
g.clone = function () {
  return new qc(this.top, this.right, this.bottom, this.left);
};
g.toString = function () {
  return (
    "(" +
    this.top +
    "t, " +
    this.right +
    "r, " +
    this.bottom +
    "b, " +
    this.left +
    "l)"
  );
};
g.contains = function (a) {
  return this && a
    ? a instanceof qc
      ? a.left >= this.left &&
        a.right <= this.right &&
        a.top >= this.top &&
        a.bottom <= this.bottom
      : a.x >= this.left &&
        a.x <= this.right &&
        a.y >= this.top &&
        a.y <= this.bottom
    : !1;
};
g.floor = function () {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
g.round = function () {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
g.translate = function (a, b) {
  a instanceof I
    ? ((this.left += a.x),
      (this.right += a.x),
      (this.top += a.y),
      (this.bottom += a.y))
    : (Ea(a),
      (this.left += a),
      (this.right += a),
      p(b) && ((this.top += b), (this.bottom += b)));
  return this;
};
g.scale = function (a, b) {
  var c = p(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= c;
  this.bottom *= c;
  return this;
};
var rc = function (a, b) {
  this.width = a;
  this.height = b;
};
g = rc.prototype;
g.clone = function () {
  return new rc(this.width, this.height);
};
g.toString = function () {
  return "(" + this.width + " x " + this.height + ")";
};
g.floor = function () {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
g.round = function () {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
g.scale = function (a, b) {
  var c = p(b) ? b : a;
  this.width *= a;
  this.height *= c;
  return this;
};
var J = function (a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d;
};
g = J.prototype;
g.clone = function () {
  return new J(this.left, this.top, this.width, this.height);
};
g.toString = function () {
  return (
    "(" +
    this.left +
    ", " +
    this.top +
    " - " +
    this.width +
    "w x " +
    this.height +
    "h)"
  );
};
g.contains = function (a) {
  return a instanceof I
    ? a.x >= this.left &&
        a.x <= this.left + this.width &&
        a.y >= this.top &&
        a.y <= this.top + this.height
    : this.left <= a.left &&
        this.left + this.width >= a.left + a.width &&
        this.top <= a.top &&
        this.top + this.height >= a.top + a.height;
};
g.mc = function () {
  return new rc(this.width, this.height);
};
g.floor = function () {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
g.round = function () {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
g.translate = function (a, b) {
  a instanceof I
    ? ((this.left += a.x), (this.top += a.y))
    : ((this.left += Ea(a)), p(b) && (this.top += b));
  return this;
};
g.scale = function (a, b) {
  var c = p(b) ? b : a;
  this.left *= a;
  this.width *= a;
  this.top *= c;
  this.height *= c;
  return this;
};
var sc = !z || 9 <= Number(pb);
(!A && !z) || (z && 9 <= Number(pb)) || (A && C("1.9.1"));
z && C("9");
var vc = function (a) {
    return a ? new tc(uc(a)) : ma || (ma = new tc());
  },
  wc = function (a, b) {
    return n(b) ? a.getElementById(b) : b;
  },
  xc = function (a, b, c) {
    var d = document;
    c = c || d;
    var e = a && "*" != a ? String(a).toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (e || b))
      return c.querySelectorAll(e + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
      a = c.getElementsByClassName(b);
      if (e) {
        c = {};
        for (var f = (d = 0), h; (h = a[f]); f++)
          e == h.nodeName && (c[d++] = h);
        c.length = d;
        return c;
      }
      return a;
    }
    a = c.getElementsByTagName(e || "*");
    if (b) {
      c = {};
      for (f = d = 0; (h = a[f]); f++) {
        var e = h.className,
          l;
        if ((l = "function" == typeof e.split)) l = 0 <= Ia(e.split(/\s+/), b);
        l && (c[d++] = h);
      }
      c.length = d;
      return c;
    }
    return a;
  },
  zc = function (a, b) {
    Ua(b, function (b, d) {
      "style" == d
        ? (a.style.cssText = b)
        : "class" == d
          ? (a.className = b)
          : "for" == d
            ? (a.htmlFor = b)
            : yc.hasOwnProperty(d)
              ? a.setAttribute(yc[d], b)
              : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
                ? a.setAttribute(d, b)
                : (a[d] = b);
    });
  },
  yc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width",
  },
  Ac = function (a) {
    var b = a.scrollingElement
      ? a.scrollingElement
      : B || "CSS1Compat" != a.compatMode
        ? a.body || a.documentElement
        : a.documentElement;
    a = a.parentWindow || a.defaultView;
    return z && C("10") && a.pageYOffset != b.scrollTop
      ? new I(b.scrollLeft, b.scrollTop)
      : new I(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
  },
  Cc = function (a, b, c) {
    function d(c) {
      c && b.appendChild(n(c) ? a.createTextNode(c) : c);
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      !fa(f) || (ga(f) && 0 < f.nodeType) ? d(f) : x(Bc(f) ? Qa(f) : f, d);
    }
  },
  Dc = function (a) {
    a && a.parentNode && a.parentNode.removeChild(a);
  },
  uc = function (a) {
    w(a, "Node cannot be null or undefined.");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  },
  Bc = function (a) {
    if (a && "number" == typeof a.length) {
      if (ga(a))
        return "function" == typeof a.item || "string" == typeof a.item;
      if ("function" == da(a)) return "function" == typeof a.item;
    }
    return !1;
  },
  tc = function (a) {
    this.D = a || k.document || document;
  };
g = tc.prototype;
g.b = function (a) {
  return wc(this.D, a);
};
g.getElementsByTagName = function (a, b) {
  return (b || this.D).getElementsByTagName(String(a));
};
g.lc = function (a, b) {
  var c = b || this.D,
    d = c || document;
  return (
    (d.getElementsByClassName
      ? d.getElementsByClassName(a)[0]
      : d.querySelectorAll && d.querySelector
        ? d.querySelector("." + a)
        : xc("*", a, c)[0]) || null
  );
};
g.w = function (a, b, c) {
  var d = this.D,
    e = arguments,
    f = String(e[0]),
    h = e[1];
  if (!sc && h && (h.name || h.type)) {
    f = ["<", f];
    h.name && f.push(' name="', wa(h.name), '"');
    if (h.type) {
      f.push(' type="', wa(h.type), '"');
      var l = {};
      Za(l, h);
      delete l.type;
      h = l;
    }
    f.push(">");
    f = f.join("");
  }
  f = d.createElement(f);
  h &&
    (n(h) ? (f.className = h) : ea(h) ? (f.className = h.join(" ")) : zc(f, h));
  2 < e.length && Cc(d, f, e);
  return f;
};
g.createElement = function (a) {
  return this.D.createElement(String(a));
};
g.createTextNode = function (a) {
  return this.D.createTextNode(String(a));
};
g.appendChild = function (a, b) {
  a.appendChild(b);
};
var Ec = function (a, b) {
  a.insertBefore(b, a.childNodes[0] || null);
};
tc.prototype.contains = function (a, b) {
  if (!a || !b) return !1;
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ("undefined" != typeof a.compareDocumentPosition)
    return a == b || !!(a.compareDocumentPosition(b) & 16);
  for (; b && a != b; ) b = b.parentNode;
  return b == a;
};
var Fc = function (a, b) {
  w(null != a, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in a) a.textContent = b;
  else if (3 == a.nodeType) a.data = b;
  else if (a.firstChild && 3 == a.firstChild.nodeType) {
    for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
    a.firstChild.data = b;
  } else {
    for (var c; (c = a.firstChild); ) a.removeChild(c);
    c = uc(a);
    a.appendChild(c.createTextNode(String(b)));
  }
};
var Hc = function (a, b, c) {
    if (n(b)) (b = Gc(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = Gc(c, d);
        f && (c.style[f] = e);
      }
  },
  Ic = {},
  Gc = function (a, b) {
    var c = Ic[b];
    if (!c) {
      var d = Aa(b),
        c = d;
      void 0 === a.style[d] &&
        ((d = (B ? "Webkit" : A ? "Moz" : z ? "ms" : eb ? "O" : null) + Ba(d)),
        void 0 !== a.style[d] && (c = d));
      Ic[b] = c;
    }
    return c;
  },
  Jc = function (a, b) {
    var c = uc(a);
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (c = c.defaultView.getComputedStyle(a, null))
      ? c[b] || c.getPropertyValue(b) || ""
      : "";
  },
  Kc = function (a, b) {
    return (
      Jc(a, b) ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    );
  },
  Mc = function (a, b, c) {
    var d;
    b instanceof I ? ((d = b.x), (b = b.y)) : ((d = b), (b = c));
    a.style.left = Lc(d, !1);
    a.style.top = Lc(b, !1);
  },
  Nc = function (a, b, c) {
    if (b instanceof rc) (c = b.height), (b = b.width);
    else if (void 0 == c) throw Error("missing height argument");
    a.style.width = Lc(b, !0);
    a.style.height = Lc(c, !0);
  },
  Lc = function (a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a;
  },
  K = function (a, b) {
    a.style.display = b ? "" : "none";
  },
  Oc = { thin: 2, medium: 4, thick: 6 },
  Pc = function (a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
      return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
      d;
    if (c in Oc) d = Oc[c];
    else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
    else {
      d = a.style.left;
      var e = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = c;
      c = a.style.pixelLeft;
      a.style.left = d;
      a.runtimeStyle.left = e;
      d = c;
    }
    return d;
  },
  Qc = function (a) {
    if (z && !(9 <= Number(pb))) {
      var b = Pc(a, "borderLeft"),
        c = Pc(a, "borderRight"),
        d = Pc(a, "borderTop");
      a = Pc(a, "borderBottom");
      return new qc(d, c, a, b);
    }
    b = Jc(a, "borderLeftWidth");
    c = Jc(a, "borderRightWidth");
    d = Jc(a, "borderTopWidth");
    a = Jc(a, "borderBottomWidth");
    return new qc(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
  };
var Rc = function () {};
ca(Rc);
Rc.prototype.Kd = 0;
var L = function (a) {
  G.call(this);
  this.c = a || vc();
  this.Dc = Sc;
  this.Kb = null;
  this.I = !1;
  this.h = null;
  this.ta = void 0;
  this.X = this.H = this.aa = null;
  this.wd = !1;
};
t(L, G);
L.prototype.Gd = Rc.la();
var Sc = null,
  Tc = function (a) {
    return a.Kb || (a.Kb = ":" + (a.Gd.Kd++).toString(36));
  };
L.prototype.b = function () {
  return this.h;
};
L.prototype.lc = function (a) {
  return this.h ? this.c.lc(a, this.h) : null;
};
L.prototype.j = function () {
  this.ta || (this.ta = new F(this));
  return this.ta;
};
var Uc = function (a, b) {
  if (a == b) throw Error("Unable to set parent component");
  var c;
  if ((c = b && a.aa && a.Kb)) {
    c = a.aa;
    var d = a.Kb;
    c = c.X && d ? Xa(c.X, d) || null : null;
  }
  if (c && a.aa != b) throw Error("Unable to set parent component");
  a.aa = b;
  L.g.da.call(a, b);
};
L.prototype.getParent = function () {
  return this.aa;
};
L.prototype.da = function (a) {
  if (this.aa && this.aa != a) throw Error("Method not supported");
  L.g.da.call(this, a);
};
L.prototype.w = function () {
  this.h = this.c.createElement("DIV");
};
var Vc = function (a, b, c) {
    if (a.I) throw Error("Component already rendered");
    a.h || a.w();
    b ? b.insertBefore(a.h, c || null) : a.c.D.body.appendChild(a.h);
    (a.aa && !a.aa.I) || a.A();
  },
  Wc = function (a, b) {
    if (a.I) throw Error("Component already rendered");
    if (b) {
      a.wd = !0;
      var c = uc(b);
      (a.c && a.c.D == c) || (a.c = vc(b));
      a.v(b);
      a.A();
    } else throw Error("Invalid element to decorate");
  };
L.prototype.v = function (a) {
  this.h = a;
};
L.prototype.A = function () {
  this.I = !0;
  Xc(this, function (a) {
    !a.I && a.b() && a.A();
  });
};
var Yc = function (a) {
  Xc(a, function (a) {
    a.I && Yc(a);
  });
  a.ta && a.ta.Ra();
  a.I = !1;
};
L.prototype.l = function () {
  this.I && Yc(this);
  this.ta && (this.ta.La(), delete this.ta);
  Xc(this, function (a) {
    a.La();
  });
  !this.wd && this.h && Dc(this.h);
  this.aa = this.h = this.X = this.H = null;
  L.g.l.call(this);
};
var M = function (a, b, c) {
    var d = a.H ? a.H.length : 0;
    w(!!b, "Provided element must not be null.");
    if (b.I && (c || !a.I)) throw Error("Component already rendered");
    if (0 > d || d > (a.H ? a.H.length : 0))
      throw Error("Child component index out of bounds");
    (a.X && a.H) || ((a.X = {}), (a.H = []));
    if (b.getParent() == a) {
      var e = Tc(b);
      a.X[e] = b;
      Oa(a.H, b);
    } else {
      var e = a.X,
        f = Tc(b);
      if (null !== e && f in e)
        throw Error('The object already contains the key "' + f + '"');
      e[f] = b;
    }
    Uc(b, a);
    Sa(a.H, d, 0, b);
    b.I && a.I && b.getParent() == a
      ? ((a = a.h),
        (d = a.childNodes[d] || null),
        d != b.b() && a.insertBefore(b.b(), d))
      : c
        ? (a.h || a.w(),
          (d = a.H ? a.H[d + 1] || null : null),
          Vc(b, a.h, d ? d.h : null))
        : a.I &&
          !b.I &&
          b.h &&
          b.h.parentNode &&
          1 == b.h.parentNode.nodeType &&
          b.A();
  },
  Xc = function (a, b) {
    a.H && x(a.H, b, void 0);
  };
L.prototype.removeChild = function (a, b) {
  if (a) {
    var c = n(a) ? a : Tc(a);
    a = this.X && c ? Xa(this.X, c) || null : null;
    if (c && a) {
      var d = this.X;
      c in d && delete d[c];
      Oa(this.H, a);
      b && (Yc(a), a.h && Dc(a.h));
      Uc(a, null);
    }
  }
  if (!a) throw Error("Child is not in parent component");
  return a;
};
var N = function (a, b, c) {
  G.call(this);
  this.target = a;
  this.handle = b || a;
  this.Ob = c || new J(NaN, NaN, NaN, NaN);
  this.D = uc(a);
  this.Z = new F(this);
  v(this, this.Z);
  this.deltaY =
    this.deltaX =
    this.td =
    this.sd =
    this.screenY =
    this.screenX =
    this.clientY =
    this.clientX =
      0;
  this.sa = !0;
  this.ra = !1;
  this.fd = !0;
  this.Uc = 0;
  this.Ic = this.Hd = !1;
  Hb(this.handle, ["touchstart", "mousedown"], this.bc, !1, this);
};
t(N, G);
var Zc =
    k.document &&
    k.document.documentElement &&
    !!k.document.documentElement.setCapture,
  $c = {
    ie: "earlycancel",
    zd: "start",
    ee: "beforedrag",
    he: "drag",
    yd: "end",
  };
N.prototype.j = function () {
  return this.Z;
};
N.prototype.l = function () {
  N.g.l.call(this);
  Pb(this.handle, ["touchstart", "mousedown"], this.bc, !1, this);
  this.Z.Ra();
  Zc && this.D.releaseCapture();
  this.handle = this.target = null;
};
var ad = function (a) {
  m(a.Dc) || (a.Dc = "rtl" == Kc(a.target, "direction"));
  return a.Dc;
};
N.prototype.bc = function (a) {
  var b = "mousedown" == a.type;
  if (
    !this.sa ||
    this.ra ||
    (b &&
      (!(rb ? 0 == a.ja.button : "click" == a.type || a.ja.button & vb[0]) ||
        (B && gb && a.ctrlKey)))
  )
    this.dispatchEvent("earlycancel");
  else {
    if (0 == this.Uc)
      if (this.dispatchEvent(new bd("start", this, a.clientX, a.clientY)))
        (this.ra = !0), this.fd && b && a.preventDefault();
      else return;
    else this.fd && b && a.preventDefault();
    var b = this.D,
      c = b.documentElement,
      d = !Zc;
    this.Z.a(b, ["touchmove", "mousemove"], this.Fd, d);
    this.Z.a(b, ["touchend", "mouseup"], this.Ba, d);
    Zc
      ? (c.setCapture(!1), this.Z.a(c, "losecapture", this.Ba))
      : this.Z.a(b ? b.parentWindow || b.defaultView : window, "blur", this.Ba);
    z && this.Hd && this.Z.a(b, "dragstart", ub);
    this.$d && this.Z.a(this.$d, "scroll", this.Ud, d);
    this.clientX = this.sd = a.clientX;
    this.clientY = this.td = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.Pc();
    this.Cc = Ac(vc(this.D).D);
  }
};
N.prototype.Ba = function (a, b) {
  this.Z.Ra();
  Zc && this.D.releaseCapture();
  this.ra
    ? ((this.ra = !1),
      this.dispatchEvent(
        new bd(
          "end",
          this,
          a.clientX,
          a.clientY,
          0,
          cd(this, this.deltaX),
          dd(this, this.deltaY),
          b || "touchcancel" == a.type,
        ),
      ))
    : this.dispatchEvent("earlycancel");
};
N.prototype.Fd = function (a) {
  if (this.sa) {
    var b = (this.Ic && ad(this) ? -1 : 1) * (a.clientX - this.clientX),
      c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if (!this.ra) {
      var d = this.sd - this.clientX,
        e = this.td - this.clientY;
      if (d * d + e * e > this.Uc)
        if (this.dispatchEvent(new bd("start", this, a.clientX, a.clientY)))
          this.ra = !0;
        else {
          this.Ma || this.Ba(a);
          return;
        }
    }
    c = ed(this, b, c);
    b = c.x;
    c = c.y;
    this.ra &&
      this.dispatchEvent(
        new bd("beforedrag", this, a.clientX, a.clientY, 0, b, c),
      ) &&
      (fd(this, a, b, c), a.preventDefault());
  }
};
var ed = function (a, b, c) {
  var d = Ac(vc(a.D).D);
  b += d.x - a.Cc.x;
  c += d.y - a.Cc.y;
  a.Cc = d;
  a.deltaX += b;
  a.deltaY += c;
  return new I(cd(a, a.deltaX), dd(a, a.deltaY));
};
N.prototype.Ud = function (a) {
  var b = ed(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  fd(this, a, b.x, b.y);
};
var fd = function (a, b, c, d) {
    a.Qc(c, d);
    a.dispatchEvent(new bd("drag", a, b.clientX, b.clientY, 0, c, d));
  },
  cd = function (a, b) {
    var c = a.Ob,
      d = isNaN(c.left) ? null : c.left,
      c = isNaN(c.width) ? 0 : c.width;
    return Math.min(
      null != d ? d + c : Infinity,
      Math.max(null != d ? d : -Infinity, b),
    );
  },
  dd = function (a, b) {
    var c = a.Ob,
      d = isNaN(c.top) ? null : c.top,
      c = isNaN(c.height) ? 0 : c.height;
    return Math.min(
      null != d ? d + c : Infinity,
      Math.max(null != d ? d : -Infinity, b),
    );
  };
N.prototype.Pc = function () {
  var a;
  if (this.Ic) {
    a = this.target;
    var b = a.offsetLeft,
      c = a.offsetParent;
    c || "fixed" != Kc(a, "position") || (c = uc(a).documentElement);
    if (c) {
      if (A)
        var d = Qc(c),
          b = b + d.left;
      else
        8 <= Number(pb) && !(9 <= Number(pb)) && ((d = Qc(c)), (b -= d.left));
      a = "rtl" == Kc(c, "direction") ? c.clientWidth - (b + a.offsetWidth) : b;
    } else a = b;
  } else a = this.target.offsetLeft;
  this.deltaX = a;
  this.deltaY = this.target.offsetTop;
};
N.prototype.Qc = function (a, b) {
  this.Ic && ad(this)
    ? (this.target.style.right = a + "px")
    : (this.target.style.left = a + "px");
  this.target.style.top = b + "px";
};
var bd = function (a, b, c, d, e, f, h, l) {
  D.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.left = m(f) ? f : b.deltaX;
  this.top = m(h) ? h : b.deltaY;
  this.Cb = b;
  this.Ed = !!l;
};
t(bd, D);
var gd =
    "StopIteration" in k
      ? k.StopIteration
      : { message: "StopIteration", stack: "" },
  hd = function () {};
hd.prototype.next = function () {
  throw gd;
};
hd.prototype.Ad = function () {
  return this;
};
var id = function (a, b) {
  this.W = {};
  this.i = [];
  this.vb = this.o = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
  } else a && this.addAll(a);
};
g = id.prototype;
g.Oa = function () {
  jd(this);
  for (var a = [], b = 0; b < this.i.length; b++) a.push(this.W[this.i[b]]);
  return a;
};
g.hb = function () {
  jd(this);
  return this.i.concat();
};
g.bb = function (a) {
  return kd(this.W, a);
};
g.clear = function () {
  this.W = {};
  this.vb = this.o = this.i.length = 0;
};
g.remove = function (a) {
  return kd(this.W, a)
    ? (delete this.W[a],
      this.o--,
      this.vb++,
      this.i.length > 2 * this.o && jd(this),
      !0)
    : !1;
};
var jd = function (a) {
  if (a.o != a.i.length) {
    for (var b = 0, c = 0; b < a.i.length; ) {
      var d = a.i[b];
      kd(a.W, d) && (a.i[c++] = d);
      b++;
    }
    a.i.length = c;
  }
  if (a.o != a.i.length) {
    for (var e = {}, c = (b = 0); b < a.i.length; )
      (d = a.i[b]), kd(e, d) || ((a.i[c++] = d), (e[d] = 1)), b++;
    a.i.length = c;
  }
};
g = id.prototype;
g.get = function (a, b) {
  return kd(this.W, a) ? this.W[a] : b;
};
g.set = function (a, b) {
  kd(this.W, a) || (this.o++, this.i.push(a), this.vb++);
  this.W[a] = b;
};
g.addAll = function (a) {
  var b;
  if (a instanceof id) (b = a.hb()), (a = a.Oa());
  else {
    b = [];
    var c = 0,
      d;
    for (d in a) b[c++] = d;
    a = Wa(a);
  }
  for (c = 0; c < b.length; c++) this.set(b[c], a[c]);
};
g.forEach = function (a, b) {
  for (var c = this.hb(), d = 0; d < c.length; d++) {
    var e = c[d],
      f = this.get(e);
    a.call(b, f, e, this);
  }
};
g.clone = function () {
  return new id(this);
};
g.Ad = function (a) {
  jd(this);
  var b = 0,
    c = this.vb,
    d = this,
    e = new hd();
  e.next = function () {
    if (c != d.vb)
      throw Error("The map has changed since the iterator was created");
    if (b >= d.i.length) throw gd;
    var e = d.i[b++];
    return a ? e : d.W[e];
  };
  return e;
};
var kd = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
var ld =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
  md = function (a, b) {
    if (a)
      for (var c = a.split("&"), d = 0; d < c.length; d++) {
        var e = c[d].indexOf("="),
          f,
          h = null;
        0 <= e
          ? ((f = c[d].substring(0, e)), (h = c[d].substring(e + 1)))
          : (f = c[d]);
        b(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "");
      }
  };
var nd = function (a, b) {
  this.eb = this.dc = this.Ta = "";
  this.Vb = null;
  this.Fb = this.Ub = "";
  this.P = this.Jd = !1;
  var c;
  if (a instanceof nd)
    (this.P = m(b) ? b : a.P),
      od(this, a.Ta),
      (c = a.dc),
      O(this),
      (this.dc = c),
      (c = a.eb),
      O(this),
      (this.eb = c),
      pd(this, a.Vb),
      (c = a.Ub),
      O(this),
      (this.Ub = c),
      qd(this, a.Ga.clone()),
      (c = a.Fb),
      O(this),
      (this.Fb = c);
  else if (a && (c = String(a).match(ld))) {
    this.P = !!b;
    od(this, c[1] || "", !0);
    var d = c[2] || "";
    O(this);
    this.dc = rd(d);
    d = c[3] || "";
    O(this);
    this.eb = rd(d, !0);
    pd(this, c[4]);
    d = c[5] || "";
    O(this);
    this.Ub = rd(d, !0);
    qd(this, c[6] || "", !0);
    c = c[7] || "";
    O(this);
    this.Fb = rd(c);
  } else (this.P = !!b), (this.Ga = new sd(null, 0, this.P));
};
nd.prototype.toString = function () {
  var a = [],
    b = this.Ta;
  b && a.push(td(b, ud, !0), ":");
  var c = this.eb;
  if (c || "file" == b)
    a.push("//"),
      (b = this.dc) && a.push(td(b, ud, !0), "@"),
      a.push(
        encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"),
      ),
      (c = this.Vb),
      null != c && a.push(":", String(c));
  if ((c = this.Ub))
    this.eb && "/" != c.charAt(0) && a.push("/"),
      a.push(td(c, "/" == c.charAt(0) ? vd : wd, !0));
  (c = this.Ga.toString()) && a.push("?", c);
  (c = this.Fb) && a.push("#", td(c, xd));
  return a.join("");
};
nd.prototype.clone = function () {
  return new nd(this);
};
var od = function (a, b, c) {
    O(a);
    a.Ta = c ? rd(b, !0) : b;
    a.Ta && (a.Ta = a.Ta.replace(/:$/, ""));
  },
  pd = function (a, b) {
    O(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.Vb = b;
    } else a.Vb = null;
  },
  qd = function (a, b, c) {
    O(a);
    b instanceof sd
      ? ((a.Ga = b), a.Ga.Fc(a.P))
      : (c || (b = td(b, yd)), (a.Ga = new sd(b, 0, a.P)));
  },
  O = function (a) {
    if (a.Jd) throw Error("Tried to modify a read-only Uri");
  };
nd.prototype.Fc = function (a) {
  this.P = a;
  this.Ga && this.Ga.Fc(a);
  return this;
};
var rd = function (a, b) {
    return a
      ? b
        ? decodeURI(a.replace(/%25/g, "%2525"))
        : decodeURIComponent(a)
      : "";
  },
  td = function (a, b, c) {
    return n(a)
      ? ((a = encodeURI(a).replace(b, zd)),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a)
      : null;
  },
  zd = function (a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  },
  ud = /[#\/\?@]/g,
  wd = /[\#\?:]/g,
  vd = /[\#\?]/g,
  yd = /[\#\?@]/g,
  xd = /#/g,
  sd = function (a, b, c) {
    this.o = this.m = null;
    this.J = a || null;
    this.P = !!c;
  },
  Ad = function (a) {
    a.m ||
      ((a.m = new id()),
      (a.o = 0),
      a.J &&
        md(a.J, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  };
g = sd.prototype;
g.add = function (a, b) {
  Ad(this);
  this.J = null;
  a = Bd(this, a);
  var c = this.m.get(a);
  c || this.m.set(a, (c = []));
  c.push(b);
  this.o = Ea(this.o) + 1;
  return this;
};
g.remove = function (a) {
  Ad(this);
  a = Bd(this, a);
  return this.m.bb(a)
    ? ((this.J = null),
      (this.o = Ea(this.o) - this.m.get(a).length),
      this.m.remove(a))
    : !1;
};
g.clear = function () {
  this.m = this.J = null;
  this.o = 0;
};
g.bb = function (a) {
  Ad(this);
  a = Bd(this, a);
  return this.m.bb(a);
};
g.hb = function () {
  Ad(this);
  for (var a = this.m.Oa(), b = this.m.hb(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
g.Oa = function (a) {
  Ad(this);
  var b = [];
  if (n(a)) this.bb(a) && (b = Pa(b, this.m.get(Bd(this, a))));
  else {
    a = this.m.Oa();
    for (var c = 0; c < a.length; c++) b = Pa(b, a[c]);
  }
  return b;
};
g.set = function (a, b) {
  Ad(this);
  this.J = null;
  a = Bd(this, a);
  this.bb(a) && (this.o = Ea(this.o) - this.m.get(a).length);
  this.m.set(a, [b]);
  this.o = Ea(this.o) + 1;
  return this;
};
g.get = function (a, b) {
  var c = a ? this.Oa(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
g.toString = function () {
  if (this.J) return this.J;
  if (!this.m) return "";
  for (var a = [], b = this.m.hb(), c = 0; c < b.length; c++)
    for (
      var d = b[c], e = encodeURIComponent(String(d)), d = this.Oa(d), f = 0;
      f < d.length;
      f++
    ) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  return (this.J = a.join("&"));
};
g.clone = function () {
  var a = new sd();
  a.J = this.J;
  this.m && ((a.m = this.m.clone()), (a.o = this.o));
  return a;
};
var Bd = function (a, b) {
  var c = String(b);
  a.P && (c = c.toLowerCase());
  return c;
};
sd.prototype.Fc = function (a) {
  a &&
    !this.P &&
    (Ad(this),
    (this.J = null),
    this.m.forEach(function (a, c) {
      var b = c.toLowerCase();
      c != b &&
        (this.remove(c),
        this.remove(b),
        0 < a.length &&
          ((this.J = null),
          this.m.set(Bd(this, b), Qa(a)),
          (this.o = Ea(this.o) + a.length)));
    }, this));
  this.P = a;
};
var Dd = function (a) {
  G.call(this);
  this.h = a;
  Hb(a, Cd, this.Sc, !1, this);
  Hb(a, "click", this.Rc, !1, this);
};
t(Dd, G);
var Cd = A ? "keypress" : "keydown";
Dd.prototype.Sc = function (a) {
  (13 == a.keyCode || (B && 3 == a.keyCode)) && Ed(this, a);
};
Dd.prototype.Rc = function (a) {
  Ed(this, a);
};
var Ed = function (a, b) {
  var c = new Fd(b);
  if (a.dispatchEvent(c)) {
    c = new Gd(b);
    try {
      a.dispatchEvent(c);
    } finally {
      b.stopPropagation();
    }
  }
};
Dd.prototype.l = function () {
  Dd.g.l.call(this);
  Pb(this.h, Cd, this.Sc, !1, this);
  Pb(this.h, "click", this.Rc, !1, this);
  delete this.h;
};
var Gd = function (a) {
  E.call(this, a.ja);
  this.type = "action";
};
t(Gd, E);
var Fd = function (a) {
  E.call(this, a.ja);
  this.type = "beforeaction";
};
t(Fd, E);
var Jd = function (a) {
    if (a.classList) return a.classList;
    a = a.className;
    return (n(a) && a.match(/\S+/g)) || [];
  },
  Kd = function (a, b) {
    var c;
    a.classList
      ? (c = a.classList.contains(b))
      : ((c = Jd(a)), (c = 0 <= Ia(c, b)));
    return c;
  },
  Ld = function (a, b) {
    a.classList
      ? a.classList.add(b)
      : Kd(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
  },
  Md = function (a, b) {
    a.classList
      ? a.classList.remove(b)
      : Kd(a, b) &&
        (a.className = Ja(Jd(a), function (a) {
          return a != b;
        }).join(" "));
  },
  Nd = function (a, b) {
    b ? Ld(a, "disabled") : Md(a, "disabled");
  };
var Pd = [],
  Od = 0;
var Rd,
  Sd = navigator.userAgent,
  Td =
    -1 != Sd.indexOf("iPad") ||
    -1 != Sd.indexOf("iPhone") ||
    -1 != Sd.indexOf("iPod") ||
    -1 != Sd.indexOf("Android") ||
    -1 != Sd.indexOf("Mobile") ||
    -1 != Sd.indexOf("Silk"),
  Ud = 0 <= Sd.indexOf("MSIE"),
  Vd = Ud && 0 <= Sd.indexOf("MSIE 8."),
  Wd = function (a, b) {
    for (var c = 1; c < arguments.length; c += 2) {
      var d = arguments[c],
        e = arguments[c + 1],
        f = a.style;
      f && d in f
        ? (f[d] = e)
        : d in a
          ? (a[d] = e)
          : Ud &&
            f &&
            "opacity" == d &&
            ((a.zoom = 1),
            (d = (f.filter || "").replace(/alpha\([^)]*\)/, "")),
            isNaN(parseFloat(e)) || (d += "alpha(opacity=" + 100 * e + ")"),
            (f.filter = d));
    }
  };
var Yd = function (a, b, c, d, e) {
  F.call(this);
  this.od = a;
  this.be = b;
  this.ae = c;
  this.Id = d;
  e &&
    (this.xb && this.Ja(this.xb, "action", this.Nc),
    e &&
      ((this.xb = new Dd(e)),
      v(this, this.xb),
      (this.Nc = q(this.show, this)),
      this.a(this.xb, "action", this.Nc)));
};
t(Yd, F);
Yd.prototype.show = function () {};
Yd.prototype.Tc = function () {};
var $d = function (a) {
  return 0 == a.indexOf("//") ? "https:" + a : a;
};
var be = function () {
    return !ae() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"));
  },
  ae = function () {
    return y("iPad") || (y("Android") && !y("Mobile")) || y("Silk");
  };
var ce = function (a) {
    this.Mc = a;
    this.Eb = !1;
    this.ed = [];
  },
  de = function (a) {
    if (!a.Eb) {
      a.Eb = !0;
      for (var b = 0, c; (c = a.ed[b]); b++) c();
    }
  };
ce.prototype.Wb = ba;
ce.prototype.lb = function () {
  return this.Eb;
};
var ee = function (a) {
  ce.call(this, a);
  this.Qa = new Image();
};
t(ee, ce);
ee.prototype.Wb = function () {
  if (!this.Qa.src) {
    var a = this;
    this.Qa.onload = function () {
      de(a);
    };
    this.Qa.src = this.Mc;
    (this.Qa.complete || "complete" == this.Qa.readyState) && de(this);
  }
};
var fe = function (a, b) {
    this.jb = [];
    this.oc = [];
    for (var c = 0, d; (d = b[c]); c++) {
      var e = new ee(a + d.filename);
      d = d.size;
      this.jb.push(e);
      this.oc.push(d);
    }
  },
  ge = function (a) {
    return p(a) ? a : a[0];
  };
g = fe.prototype;
g.Wb = function (a, b) {
  var c = this.jb[ge(a)];
  b && (c.Eb ? b() : c.ed.push(b));
  c.Wb();
};
g.lb = function (a) {
  return this.jb[ge(a)].lb();
};
g.Da = function (a) {
  return a[3];
};
g.gb = function (a) {
  return a[4];
};
g.mc = function (a) {
  return { width: a[3], height: a[4] };
};
g.drawImage = function (a, b, c, d, e, f, h, l, P, jb) {
  var Hd = b[1],
    Id = b[2];
  void 0 != h && ((Hd += c), (Id += d));
  b = this.jb[ge(b)];
  if (!b.lb()) throw Error("Spritesheet is not loaded, can't draw.");
  a.drawImage(b.Qa, Hd, Id, e, f, h, l, P, jb);
};
g.ia = function (a, b, c, d, e, f, h, l) {
  var P = this.Da(a),
    jb = this.gb(a);
  e = void 0 != e ? e : 1;
  b.save();
  b.translate(c, d);
  b.scale(h ? -e : e, l ? -e : e);
  this.drawImage(
    b,
    a,
    0,
    0,
    P,
    jb,
    -P * (f ? 0.5 : h ? 1 : 0),
    -jb * (f ? 0.5 : l ? 1 : 0),
    P,
    jb,
  );
  b.restore();
};
var he = function (a, b) {
  var c;
  c = document.createElement("div");
  Wd(c, "position", "absolute");
  Ud && !Vd && Wd(c, "background-color", "rgba(255,255,255,.01)");
  Wd(
    c,
    "userSelect",
    "none",
    "MozUserSelect",
    "none",
    "webkitUserSelect",
    "none",
    "webkitTapHighlightColor",
    "rgba(0,0,0,0)",
  );
  c.unselectable = "on";
  var d = a.Da(b),
    e = a.gb(b),
    f = b[5] || 1;
  f &&
    1 != f &&
    a.oc[ge(b)] &&
    ((d = Math.floor(d / f)), (e = Math.floor(e / f)));
  Wd(c, "width", d + "px", "height", e + "px");
  d = b[5] || 1;
  e = a.oc[ge(b)];
  f = b[5] || 1;
  c = [
    c,
    "url(" +
      a.jb[ge(b)].Mc +
      ") " +
      (-(b[1] / f + 0) + "px " + -(b[2] / f + 0) + "px") +
      " no-repeat",
    d && 1 != d && e ? e[0] / d + "px " + e[1] / d + "px" : "",
  ];
  d = c[0];
  e = c[2];
  Wd(d, "background", c[1]);
  e && Wd(d, "backgroundSize", e);
  return d;
};
var je = function () {
  fe.call(this, assetsPath, ie);
};
t(je, fe);
var ie = [{ filename: "card-sprite.png", size: [1678, 395] }],
  ke = [0, 0, 0, 172, 236],
  le = [0, 604, 239, 78, 75],
  me = [0, 1575, 0, 96, 96],
  ne = [0, 1575, 99, 96, 96],
  oe = [0, 685, 239, 78, 75],
  pe = [0, 525, 0, 172, 236],
  qe = [0, 1575, 198, 96, 96];
ca(je);
var re = [
    [0, 1402, 308, 50, 50],
    [0, 925, 239, 50, 50],
    [0, 766, 292, 50, 50],
    [0, 872, 292, 50, 50],
    [0, 978, 292, 50, 50],
    [0, 1628, 297, 50, 50],
    [0, 1084, 308, 50, 50],
    [0, 1190, 308, 50, 50],
    [0, 1296, 308, 50, 50],
    [0, 819, 239, 50, 50],
    [0, 816, 345, 50, 50],
    [0, 922, 345, 50, 50],
    [0, 869, 345, 50, 50],
  ],
  se = [
    [0, 1349, 308, 50, 50],
    [0, 872, 239, 50, 50],
    [0, 978, 239, 50, 50],
    [0, 819, 292, 50, 50],
    [0, 925, 292, 50, 50],
    [0, 1575, 297, 50, 50],
    [0, 1031, 308, 50, 50],
    [0, 1137, 308, 50, 50],
    [0, 1243, 308, 50, 50],
    [0, 766, 239, 50, 50],
    [0, 1455, 308, 50, 50],
    [0, 604, 317, 50, 50],
    [0, 1508, 308, 50, 50],
  ],
  te = {
    CLUB: [0, 0, 239, 148, 141],
    DIAMOND: [0, 151, 239, 148, 141],
    HEART: [0, 302, 239, 148, 141],
    SPADE: [0, 453, 239, 148, 141],
  },
  ue = {
    CLUB: [0, 657, 317, 50, 50],
    DIAMOND: [0, 710, 317, 50, 50],
    HEART: [0, 763, 345, 50, 50],
    SPADE: [0, 975, 345, 50, 50],
  },
  ve = {
    11: [0, 1225, 0, 172, 151],
    12: [0, 1400, 154, 172, 151],
    13: [0, 1050, 154, 172, 151],
  },
  we = {
    11: [0, 1050, 0, 172, 151],
    12: [0, 1225, 154, 172, 151],
    13: [0, 1400, 0, 172, 151],
  },
  xe = {
    CLUB: [0, 175, 0, 172, 236],
    DIAMOND: [0, 350, 0, 172, 236],
    HEART: [0, 700, 0, 172, 236],
    SPADE: [0, 875, 0, 172, 236],
  },
  ye = function () {
    return je.la().mc(ke);
  },
  ze = function (a, b) {
    Hc(a, "zIndex", ((parseInt(a.style.zIndex, 10) || 0) % 1e3) + 1e3 * b);
  },
  Ae = function (a, b, c) {
    a.j().a(a.b(), b, function (b) {
      b.target = a;
      c && (b.type = c);
      a.dispatchEvent(b);
    });
  },
  Be = function () {
    return window.matchMedia &&
      window.matchMedia("(orientation: portrait)").matches
      ? !0
      : window.innerHeight > window.innerWidth;
  },
  onShareFacebook = function () {
    // TODO: on facebook click
  },
  onShareTweet = function () {
    // TODO: on tweet click
  },
  onShareLink = function () {
    // TODO: on share click
  },
  Fe = function () {
    return ae() || 589824 < window.innerHeight * window.innerWidth;
  },
  Q = function (a) {
    var b = window.senty.doodle;
    return b ? ((b = b.msgs) && b[a] ? b[a] : "") : "";
  },
  R = Math.round(ye().width * (Fe() ? 0.33 : 0.22)),
  S = Math.round(ye().height * (Fe() ? 0.33 : 0.22));
ye();
ye();
var Ge = Math.round(0.3 * S),
  He = Math.round(0.3 * S);
var T = function (a, b) {
  N.call(this, a.b());
  this.oa = a;
  this.Y = [a];
  this.gd = "";
  this.xa = 1;
  if ((this.nb = b))
    this.Ob = new J(
      this.nb.left * this.xa,
      this.nb.top * this.xa,
      this.nb.width * this.xa,
      this.nb.height * this.xa,
    );
  this.Wc = this.Vc = 0;
  this.da(a);
};
t(T, N);
var Ie = function (a, b) {
  a.Y = Pa(a.oa, b);
};
T.prototype.Pc = function () {
  this.deltaX = this.target.offsetLeft * this.xa;
  this.deltaY = this.target.offsetTop * this.xa;
  this.Vc = this.deltaX;
  this.Wc = this.deltaY;
};
T.prototype.Qc = function (a, b) {
  var c = this.oa.b(),
    d = parseFloat(c.style.left),
    e = parseFloat(c.style.top);
  x(
    this.Y,
    function (c) {
      c = c.b();
      var f = parseFloat(c.style.top) - e;
      c.style.left =
        Math.floor(parseFloat(c.style.left) - d + a / this.xa) + "px";
      c.style.top = Math.floor(f + b / this.xa) + "px";
    },
    this,
  );
};
T.prototype.bc = function (a) {
  T.g.bc.call(this, a);
  this.ra &&
    x(
      this.Y,
      function (a) {
        a = a.b();
        ze(a, 1);
        this.gd = a.style.transition;
        a.style.transition = "";
      },
      this,
    );
};
T.prototype.Ba = function (a, b) {
  x(
    this.Y,
    function (a) {
      a = a.b();
      ze(a, 0);
      a.style.transition = this.gd;
    },
    this,
  );
  1 > Math.abs(this.Vc - this.deltaX) + Math.abs(this.Wc - this.deltaY)
    ? T.g.Ba.call(this, a, !0)
    : T.g.Ba.call(this, a, b);
};
var Je = function (a) {
  a.j().rc(
    a.oa.b(),
    ["click", "touchend"],
    function (a) {
      a.stopPropagation();
    },
    !0,
  );
};
T.prototype.l = function () {
  this.Y = this.oa = null;
  this.da(null);
  T.g.l.call(this);
};
var Ke = function (a) {
  this.ma = a;
  this.cb = a.getContext("2d");
  this.pd = je.la();
  this.O = a.width;
  this.L = a.height;
};
Ke.prototype.clear = function () {
  this.cb.clearRect(0, 0, this.ma.width, this.ma.height);
};
Ke.prototype.ia = function (a, b, c) {
  this.pd.ia(a, this.cb, b, c);
};
var Le = function (a) {
  L.call(this, a);
  this.wa = null;
  this.O = R;
  this.L = S;
  this.qa = null;
  this.xd = this.za = this.ya = 0;
  this.ma = null;
  this.kc = !1;
  this.tc = 0;
  this.C = null;
};
t(Le, L);
Le.prototype.w = function () {
  var a = this.c.w("DIV", "card", this.c.w("CANVAS", "card-canvas"));
  this.v(a);
};
Le.prototype.v = function (a) {
  this.h = a;
  this.ma = this.c.lc("card-canvas", a);
  this.ma.width = ye().width;
  this.ma.height = ye().height;
  Nc(a, this.O, this.L);
  Mc(a, this.ya, this.za);
  this.wa = new Ke(this.ma);
};
Le.prototype.A = function () {
  Le.g.A.call(this);
  this.b().style.transition = "left 500ms, top 500ms";
  this.qa = new T(
    this,
    new J(0, 0, window.innerWidth - R, window.innerHeight - S),
  );
  this.qa.sa = !1;
  Ae(this, "click", "d");
  Ae(this, "touchstart", "e");
  Ae(this, "touchend", "f");
};
var Me = function (a, b) {
  a.C &&
    (a.j().Ja(a.C, "a", a.Rb),
    a.j().Ja(a.C, "b", a.ad),
    a.j().Ja(a.C, "c", a.bd));
  a.C = b;
  a.j().a(b, "a", a.Rb);
  a.j().a(b, "b", a.ad);
  a.j().a(b, "c", a.bd);
  b.Xa = a;
  H(b);
};
g = Le.prototype;
g.l = function () {
  this.qa.La();
  this.ma = this.qa = null;
  Le.g.l.call(this);
};
g.Rb = function () {
  var a = this.C;
  if (a) {
    a.Bb = !1;
    K(this.b(), !0);
    a = this.C;
    this.wa.clear();
    if (a.ka) {
      var b = this.C,
        c = ue[b.S],
        d = b.R;
      this.wa.ia("RED" == oc(b) ? re[d - 1] : se[d - 1], 10, 12);
      this.wa.ia(c, 105, 12);
      11 <= b.R && 13 >= b.R
        ? ((c = b.R), this.wa.ia("RED" == oc(b) ? ve[c] : we[c], 0, 84))
        : this.wa.ia(te[b.S], 15, 93);
    } else this.wa.ia(ke, 2, 3);
    a.Ib &&
      ((a = this.wa),
      (b = a.pd.mc(ke)),
      (a.cb.lineWidth = 5),
      (a.cb.strokeStyle = "#FFD700"),
      a.cb.strokeRect(2, 3, b.width, b.height));
    this.qa.sa = this.C.pa;
  } else K(this.b(), !1);
};
g.ad = function () {};
g.bd = function () {
  ze(this.b(), 1);
};
g.moveTo = function (a, b, c) {
  if (this.ya != a || this.za != b || this.xd != c || this.kc) {
    this.kc = !1;
    var d = this.b();
    this.ya = a;
    this.za = b;
    this.xd = c;
    Mc(d, a, b);
    Hc(
      d,
      "zIndex",
      c + 1e3 * Math.floor((parseInt(d.style.zIndex, 10) || 0) / 1e3),
    );
    this.qa.sa = !1;
    this.tc && clearTimeout(this.tc);
    this.tc = setTimeout(q(this.Rd, this), 500);
  }
};
g.Rd = function () {
  ze(this.b(), 0);
  this.qa.sa = this.C.pa;
};
var U = function () {
  hc.call(this);
  this.f = [];
};
t(U, hc);
U.prototype.empty = function () {
  return 0 == this.f.length;
};
U.prototype.size = function () {
  return this.f.length;
};
var Ne = function (a, b) {
  var c = a.f.lastIndexOf(b);
  return 0 > c ? [] : a.f.slice(c + 1);
};
g = U.prototype;
g.top = function (a) {
  a = a || 0;
  return a >= this.f.length ? null : this.f[this.f.length - 1 - a];
};
g.contains = function (a) {
  return 0 <= this.f.indexOf(a);
};
g.clear = function () {
  this.f = [];
  H(this);
};
g.accept = ba;
g.Ka = function () {
  return !1;
};
g.push = function (a, b) {
  a instanceof Array || (a = [a]);
  var c = !!b;
  x(
    a,
    function (a) {
      c ? this.f.unshift(a) : this.f.push(a);
    },
    this,
  );
  this.ba();
  H(this);
};
g.pop = function (a, b) {
  for (var c = a || 1, d = !!b, e = []; c--; ) {
    var f;
    f = d ? this.f.shift() : this.f.pop();
    e.push(f);
  }
  this.ba();
  H(this);
  return e;
};
g.ba = function () {
  var a = this.f.length;
  x(
    this.f,
    function (b, c) {
      b.s !== this && ((b.s = this), ic(b, "c"));
      mc(b, c == a - 1);
    },
    this,
  );
};
var Oe = function () {
    this.Pb = 1;
    this.jc = this.ic = !0;
    this.hd = Math.random();
    this.ob = "";
  },
  Pe = function (a) {
    var b = Math.floor(1e5 * a.hd);
    return function () {
      var a = 1e4 * Math.sin(b++);
      return a - Math.floor(a);
    };
  };
var Qe = function () {
  U.call(this);
};
t(Qe, U);
Qe.prototype.ba = function () {
  Qe.g.ba.call(this);
  var a = this.f.length;
  x(this.f, function (b, c) {
    kc(b, !0);
    lc(b, c >= a - 3);
    b.pa = c == a - 1;
  });
};
var Re = function (a, b) {
  U.call(this);
  this.N = a;
  this.G = b;
};
t(Re, U);
Re.prototype.ba = function () {
  Re.g.ba.call(this);
  x(this.f, function (a) {
    kc(a, !1);
    lc(a, !1);
    a.pa = !1;
  });
};
var Se = function (a) {
  if (a.empty()) {
    var b = a.N.pop(a.N.size());
    a.push(b);
    a.dispatchEvent("x");
  } else
    (b = a.G.Pb),
      a.size() < b && (b = a.size()),
      (b = a.pop(b)),
      a.N.push(b),
      a.dispatchEvent("v");
};
Re.prototype.l = function () {
  this.G = this.N = null;
  Re.g.l.call(this);
};
var Te = function (a) {
  G.call(this);
  this.Y = [];
  this.B = new F(this);
  this.K = a;
  this.B.a(this.K, $c.yd, this.Nd);
};
t(Te, G);
Te.prototype.Nd = function (a) {
  if (!a.Ed && !a.defaultPrevented) {
    a.preventDefault();
    a.stopPropagation();
    var b = a.Cb;
    Je(b);
    Ma(
      this.Y,
      function (c) {
        var d;
        if ((d = c.hasListener("h"))) {
          d = Ue(b.target);
          var e = Ue(c.b());
          d =
            Math.min(d.left + d.width, e.left + e.width) >=
              Math.max(d.left, e.left) &&
            Math.min(d.top + d.height, e.top + e.height) >=
              Math.max(d.top, e.top);
        }
        return d ? c.dispatchEvent(new D("h", a.Cb)) : !1;
      },
      this,
    ) || this.dispatchEvent(new D("i", a.Cb));
  }
};
var Ue = function (a) {
  return new J(
    parseFloat(a.style.left),
    parseFloat(a.style.top),
    parseFloat(a.style.width),
    parseFloat(a.style.height),
  );
};
var V = function (a) {
  U.call(this);
  this.S = a;
};
t(V, U);
V.prototype.ba = function () {
  V.g.ba.call(this);
  var a = this.f.length;
  x(this.f, function (b, c) {
    kc(b, !0);
    lc(b, !1);
    b.pa = c == a - 1;
  });
};
V.prototype.wc = function (a) {
  if (1 != a.target.Y.length) return !1;
  a = a.target.oa.C;
  return this.Ka(a) ? (this.accept(a), !0) : !1;
};
V.prototype.accept = function (a) {
  var b = a.s;
  b.pop();
  this.push(a);
  b instanceof W
    ? this.dispatchEvent("y")
    : b instanceof Qe && this.dispatchEvent("B");
};
V.prototype.Ka = function (a) {
  if (a.S == this.S && a.tb) {
    var b;
    !(b = this.empty() && 1 == a.R) &&
      (b = !this.empty()) &&
      ((b = this.top()), (b = a.R == b.R + 1));
    a = b;
  } else a = !1;
  return a;
};
var Ve = function () {
  this.sb = {};
  this.f = null;
  this.u = 0;
};
t(Ve, u);
var We = function (a, b, c) {
    c.clear();
    c.push(a.sb[b]);
  },
  Xe = function (a, b) {
    a.f = Ka(b, function (a) {
      var b = new jc(1, "SPADE");
      nc(b, a);
      return b;
    });
  },
  Ye = function (a, b) {
    for (var c = 0; c < b.length; c++) nc(b[c], a.f[c]);
  };
var Ze = function () {
  this.ea = [];
};
t(Ze, u);
Ze.prototype.Hc = function () {
  var a = this.ea.pop();
  a && a.La();
  return 0 < this.ea.length ? this.ea[this.ea.length - 1] : null;
};
Ze.prototype.clear = function () {
  this.ea = [];
};
var $e = function (a) {
  G.call(this);
  this.cc = this.u = 0;
  this.K = a;
  this.B = new F(this);
  v(this, this.B);
  this.Gc();
};
t($e, G);
$e.prototype.Gc = function () {
  this.B.a(this.K, "C", function () {
    this.u += 5;
  });
  this.B.a(this.K, "B", function () {
    this.u += 10;
  });
  this.B.a(this.K, "y", function () {
    this.u += 15;
  });
  this.B.a(this.K, "z", function () {
    this.u += 5;
  });
  this.B.a(this.K, "w", function () {
    this.u -= 15;
  });
  this.B.a(this.K, "x", function () {
    1 == this.K.G.Pb && (this.u = Math.max(0, this.u - 100));
  });
};
$e.prototype.start = function () {
  this.cc = r();
  this.u = 0;
};
$e.prototype.Yb = function (a) {
  this.u = a;
};
$e.prototype.getTime = function () {
  return r() - this.cc;
};
var af,
  bf = function () {
    var a = k.MessageChannel;
    "undefined" === typeof a &&
      "undefined" !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !y("Presto") &&
      (a = function () {
        var a = document.createElement("IFRAME");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow,
          a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(),
          d =
            "file:" == b.location.protocol
              ? "*"
              : b.location.protocol + "//" + b.location.host,
          a = q(function (a) {
            if (("*" == d || a.origin == d) && a.data == c)
              this.port1.onmessage();
          }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            b.postMessage(c, d);
          },
        };
      });
    if ("undefined" !== typeof a && !cb()) {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (m(c.next)) {
          c = c.next;
          var a = c.Oc;
          c.Oc = null;
          a();
        }
      };
      return function (a) {
        d.next = { Oc: a };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return "undefined" !== typeof document &&
      "onreadystatechange" in document.createElement("SCRIPT")
      ? function (a) {
          var b = document.createElement("SCRIPT");
          b.onreadystatechange = function () {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null;
          };
          document.documentElement.appendChild(b);
        }
      : function (a) {
          k.setTimeout(a, 0);
        };
  };
var cf = function (a, b) {
  G.call(this);
  this.Lb = a || 1;
  this.Ua = b || k;
  this.fc = q(this.ce, this);
  this.qc = r();
};
t(cf, G);
g = cf.prototype;
g.enabled = !1;
g.M = null;
g.ce = function () {
  if (this.enabled) {
    var a = r() - this.qc;
    0 < a && a < 0.8 * this.Lb
      ? (this.M = this.Ua.setTimeout(this.fc, this.Lb - a))
      : (this.M && (this.Ua.clearTimeout(this.M), (this.M = null)),
        this.dispatchEvent("tick"),
        this.enabled &&
          ((this.M = this.Ua.setTimeout(this.fc, this.Lb)), (this.qc = r())));
  }
};
g.start = function () {
  this.enabled = !0;
  this.M || ((this.M = this.Ua.setTimeout(this.fc, this.Lb)), (this.qc = r()));
};
g.stop = function () {
  this.enabled = !1;
  this.M && (this.Ua.clearTimeout(this.M), (this.M = null));
};
g.l = function () {
  cf.g.l.call(this);
  this.stop();
  delete this.Ua;
};
var df = function (a, b) {
  this.O = a;
  this.L = b;
  this.pb = this.Qb = 1;
  this.qb = this.Bc = this.Mb = this.Nb = 0;
};
df.prototype.Da = function () {
  return this.O;
};
df.prototype.gb = function () {
  return this.L;
};
var X = function (a, b, c, d, e) {
    e = e || 1;
    d = d || 1;
    var f;
    f = 1 == a.pb ? 0 : Math.floor((a.O - 2 * a.qb - a.pb * a.Nb) / (a.pb - 1));
    var h = Math.floor((a.L - a.Bc - a.Qb * a.Mb) / a.Qb);
    return new J(
      b * (a.Nb + f) + a.qb,
      c * (a.Mb + h) + a.Bc,
      d * a.Nb + (d - 1) * f,
      e * a.Mb + (e - 1) * h,
    );
  },
  ef = function (a) {
    a.top = 48 + S;
    return a;
  };
var ff = function () {};
ca(ff);
ff.prototype.kb = function () {
  this.Zc = this.cc = r();
};
ff.prototype.log = function (a, b, c) {
  var d = r(),
    e = d - this.Zc;
  this.Zc = d;
  d = window.document;
  d = "CSS1Compat" == d.compatMode ? d.documentElement : d.body;
  d = new rc(d.clientWidth, d.clientHeight);
};
var gf = function (a) {
  return m(a) ? (a ? "1" : "0") : "_";
};
var hf = ff.la(),
  jf = function (a) {
    L.call(this, a);
    this.ac =
      this.Zb =
      this.$b =
      this.Ha =
      this.ab =
      this.Hb =
      this.Jb =
      this.Db =
      this.na =
        null;
  };
t(jf, L);
jf.prototype.v = function (a) {
  jf.g.v.call(this, a);
  this.Jb = this.c.b("solitaire-dialog-hint");
  this.na = this.c.b("solitaire-mode-dialog-close");
  this.Db = this.c.b("solitaire-easy-button");
  this.Hb = this.c.b("solitaire-hard-button");
  this.ab = this.c.b("solitaire-mode-dialog-container");
  this.Ha = this.c.b("solitaire-dialog-share");
  a = je.la();
  var b = he(a, le),
    c = he(a, oe);
  Hc(b, "position", "relative");
  Hc(c, "position", "relative");
  Ec(this.Db, b);
  Ec(this.Hb, c);
  this.$b = this.c.w("DIV", "share-icons", he(a, ne));
  this.Zb = this.c.w("DIV", "share-icons", he(a, me));
  this.ac = this.c.w("DIV", "share-icons", he(a, qe));
  kf(this.$b);
  kf(this.ac);
  kf(this.Zb);
  this.c.appendChild(this.Ha, this.$b);
  this.c.appendChild(this.Ha, this.Zb);
  this.c.appendChild(this.Ha, this.ac);
};
var kf = function (a) {
  a.children[0].style.position = "relative";
};
g = jf.prototype;
g.A = function () {
  jf.g.A.call(this);
  this.j().a(this.Db, "click", this.yc);
  this.j().a(this.Hb, "click", this.zc);
  this.j().a(this.na, "click", this.Md);
  this.j().a(this.$b, "click", onShareLink);
  this.j().a(this.Zb, "click", onShareFacebook);
  this.j().a(this.ac, "click", onShareTweet);
  this.nc();
};
g.nc = function () {
  this.Hb.children[1].innerHTML = Q("Hard mode").toLocaleUpperCase();
  this.Db.children[1].innerHTML = Q("Easy mode").toLocaleUpperCase();
  this.Ha.children[0].innerHTML = Q("Hint the user to share");
};
g.openDialog = function (a, b) {
  K(this.b(), !0);
  a ? K(this.na, !1) : K(this.na, !0);
  b ? K(this.Ha, !1) : K(this.Ha, !0);
  a && !b
    ? Fc(this.Jb, Q("After winning the game: play again?"))
    : a
      ? Fc(this.Jb, Q("Mode selection"))
      : Fc(this.Jb, Q("Confirm dialog: to start a new game?"));
};
g.$a = function () {
  K(this.b(), !1);
};
g.Md = function () {
  this.$a();
  this.dispatchEvent("j");
};
g.yc = function () {
  this.$a();
  this.dispatchEvent("k");
  hf.log(2, !0);
};
g.zc = function () {
  this.$a();
  this.dispatchEvent("l");
  hf.log(2, !1);
};
var Y = function (a, b, c) {
  L.call(this, c);
  this.ya = b.left;
  this.za = b.top;
  this.O = b.width;
  this.L = b.height;
  this.rd = this.qd = 0;
  this.s = a;
};
t(Y, L);
var lf = function (a, b) {
  a.qd = b;
  a.rd = 0.2;
};
Y.prototype.w = function () {
  this.v(this.c.w("DIV", "pile"));
};
Y.prototype.v = function (a) {
  this.h = a;
  Nc(a, this.O, this.L);
  Mc(a, this.ya, this.za);
  a.width = this.O;
  a.height = this.L;
};
Y.prototype.A = function () {
  Y.g.A.call(this);
  this.j().a(this.s, "a", this.Rb);
  Ae(this, "click", "m");
  Ae(this, "touchstart", "n");
  Ae(this, "touchend", "o");
  H(this.s);
};
var mf = function (a) {
  return a.fb ? (a.ka ? 2 : 1) : 0;
};
Y.prototype.moveTo = function (a) {
  this.ya = a.left;
  this.za = a.top;
  this.O = a.width;
  this.L = a.height;
  Nc(this.b(), this.O, this.L);
  Mc(this.b(), this.ya, this.za);
  H(this.s);
};
Y.prototype.Rb = function () {
  this.s.Bb = !1;
  var a = this.s.f;
  if (0 != a.length) {
    var b = La(
        a,
        function (a, b) {
          return a + mf(b);
        },
        0,
        this,
      ),
      b = b - mf(a[a.length - 1]),
      c = 0,
      d = 0;
    x(
      a,
      function (a, f) {
        a.Xa.moveTo(
          this.ya + c + f * this.qd,
          this.za + d + f * this.rd,
          f + 1,
        );
        a.fb &&
          ((c += Math.min(Ge, Math.floor((mf(a) / b) * (this.O - R)))),
          (d += Math.min(He, Math.floor((mf(a) / b) * (this.L - S)))));
      },
      this,
    );
  }
};
var nf = function (a, b) {
  L.call(this, b);
  this.O = R;
  this.L = S;
  this.S = a || null;
};
t(nf, L);
nf.prototype.w = function () {
  this.v(this.c.w("DIV", "placeholder"));
};
nf.prototype.v = function (a) {
  nf.g.v.call(this, a);
  Nc(a, this.O, this.L);
  var b = this.c.w("CANVAS", "card-canvas");
  b.width = ye().width;
  b.height = ye().height;
  this.c.appendChild(a, b);
  a = new Ke(b);
  this.S ? a.ia(xe[this.S], 0, 0) : a.ia(pe, 0, 0);
};
var of = function (a) {
  L.call(this, a);
  this.Wa = this.vc = this.ud = this.Ec = null;
};
t(of, L);
g = of.prototype;
g.v = function (a) {
  of.g.v.call(this, a);
  this.Ec = this.c.b("solitaire-score");
  this.uc = this.c.b("solitaire-move");
  this.ud = this.c.b("solitaire-timer");
  this.vc = this.c.b("solitaire-new-game-side-button");
  this.Wa = this.c.b("solitaire-undo-side-button");
};
g.A = function () {
  of.g.A.call(this);
  this.j().a(this.vc, "click", this.xc);
  this.j().a(this.Wa, "click", this.Ac);
  this.Yb(0);
  Fc(this.uc, Math.max(0, 0));
  this.setTime(0);
  this.nc();
};
g.nc = function () {
  this.Ec.parentElement.children[0].innerHTML = Q("Score of the current game");
  this.uc.parentElement.children[0].innerHTML = Q(
    "Number of moves played in the game",
  );
  this.vc.lastChild.textContent = Q("Starts a new game").toLocaleUpperCase();
  this.Wa.lastChild.textContent = Q("Undo last move").toLocaleUpperCase();
};
g.Yb = function (a) {
  Fc(this.Ec, parseInt(a, 10));
};
g.setTime = function (a) {
  var b = this.ud;
  a = Math.floor(a / 1e3);
  var c = a % 60;
  a = (a - c) / 60;
  var d = a % 60;
  a = (a - d) / 60 + ":" + ya(d) + ":" + ya(c);
  Fc(b, a);
};
g.xc = function () {
  this.dispatchEvent("p");
};
g.Ac = function () {
  Kd(this.Wa, "disabled") || this.dispatchEvent("q");
};
var W = function () {
  U.call(this);
};
t(W, U);
W.prototype.ba = function () {
  W.g.ba.call(this);
  var a = this.f.length;
  x(
    this.f,
    function (b, c) {
      c == a - 1 && (b.ka || this.dispatchEvent("z"), kc(b, !0));
      lc(b, !0);
      b.pa = b.ka;
    },
    this,
  );
};
W.prototype.wc = function (a) {
  a = a.target.oa.C;
  return this.Ka(a) ? (this.accept(a), !0) : !1;
};
W.prototype.accept = function (a) {
  var b = a.s,
    c = [];
  b instanceof W && (c = Ne(b, a));
  b.pop(1 + c.length);
  this.push(Pa(a, c));
  b instanceof W
    ? this.dispatchEvent("A")
    : b instanceof Qe
      ? this.dispatchEvent("C")
      : b instanceof V && this.dispatchEvent("w");
};
W.prototype.Ka = function (a) {
  if (a.s === this) return !1;
  if (this.empty()) return 13 == a.R;
  var b = this.top();
  return b.R == a.R + 1 && oc(a) != oc(b);
};
var pf = function (a) {
  L.call(this, a);
  this.sc = "Easy";
  this.Jc = this.Kc = this.na = this.vd = this.Pa = this.Na = null;
  this.Lc = !0;
};
t(pf, L);
pf.prototype.v = function (a) {
  pf.g.v.call(this, a);
  this.na = this.c.b("solitaire-close");
  this.vd = this.c.b("solitaire-volume");
  this.Kc = this.c.b("solitaire-volume-up");
  this.Jc = this.c.b("solitaire-volume-off");
  var b = je.la();
  this.Na = he(b, le);
  this.Pa = he(b, oe);
  Hc(this.Na, "position", "relative");
  Hc(this.Pa, "position", "relative");
  Ld(this.Na, "topbar-mode-indicator");
  Ld(this.Pa, "topbar-mode-indicator");
  Ec(a.firstElementChild, this.Na);
  Ec(a.firstElementChild, this.Pa);
};
pf.prototype.A = function () {
  this.j().a(this.vd, "click", this.Wd);
  this.j().a(this.na, "click", this.Ld);
  qf(this);
  var a = window === window.parent;
  if (0 <= window.navigator.userAgent.toLowerCase().indexOf("gsa") || a)
    this.na.style.display = "none";
};
pf.prototype.Wd = function () {
  (this.Lc = !this.Lc)
    ? ((this.Kc.style.display = "inline-block"),
      (this.Jc.style.display = "none"),
      this.dispatchEvent("r"))
    : ((this.Kc.style.display = "none"),
      (this.Jc.style.display = "inline-block"),
      this.dispatchEvent("s"));
};
pf.prototype.Ld = function () {
  for (var a = window; a.postMessage("lightbox-exit", "*"), a !== a.parent; )
    a = a.parent;
};
var qf = function (a) {
  "Easy" == a.sc
    ? ((a.Na.style.display = "inline"), (a.Pa.style.display = "none"))
    : ((a.Na.style.display = "none"), (a.Pa.style.display = "inline"));
};
var rf = function (a) {
  L.call(this, a);
  this.nd = this.ab = null;
  this.gc = [];
  this.md = [];
};
t(rf, L);
rf.prototype.v = function (a) {
  rf.g.v.call(this, a);
  this.ab = this.c.b("solitaire-final-dialog-container");
  this.nd = this.c.b("ribbon-cards");
  a = Wa(gc);
  for (var b = 0; 4 > b; ++b) {
    var c = new Le(),
      d = new jc(1, a[b]);
    kc(d, !0);
    Me(c, d);
    M(this, c);
    Vc(c, this.nd);
    this.md.push(c);
  }
};
rf.prototype.A = function () {
  rf.g.A.call(this);
  x(
    this.md,
    function (a) {
      a.b().removeAttribute("style");
    },
    this,
  );
};
var sf = function (a, b) {
    var c = [
      "rgba(242, 44, 28, 1)",
      "rgba(250, 201, 4, 1)",
      "rgba(64, 123, 204, 1)",
      "rgba(35, 127, 63, 1)",
    ];
    a.gc = [];
    for (var d = 0; d < b; ++d) {
      var e = a.c.w("DIV", "confetti");
      e.style.backgroundColor = c[pc(4)];
      var f = pc(20) + 10;
      e.style.width = f + "px";
      e.style.height = f + "px";
      e.style.transform = "rotate(" + pc(90) + "deg)";
      e.style.top = 400 + pc(300) + "px";
      e = a.c.w("DIV", "confetti-jar", e);
      e.style.left = pc(window.innerWidth) + "px";
      e.style.transition =
        "all " + (2e3 + pc(1200)) + "ms cubic-bezier(0.4, 0, 1, 1) 500ms";
      a.c.appendChild(a.b(), e);
      a.gc.push(e);
    }
  },
  tf = function (a) {
    x(
      a.gc,
      function (a) {
        Dc(a);
      },
      a,
    );
  };
rf.prototype.openDialog = function () {
  K(this.b(), !0);
  be() || ae() ? db() || y("iPad") || y("iPod") || sf(this, 25) : sf(this, 50);
  var a = this;
  setTimeout(function () {
    Ld(a.b(), "win");
  }, 500);
  setTimeout(function () {
    Ld(a.ab, "win-end");
  }, 5750);
  setTimeout(function () {
    a.$a();
    a.dispatchEvent("t");
  }, 6250);
};
rf.prototype.$a = function () {
  K(this.b(), !1);
  Md(this.b(), "win");
  Md(this.ab, "win-end");
  tf(this);
};
var uf = ff.la(),
  Z = function (a) {
    L.call(this, a);
    this.mb = !1;
    this.G = new Oe();
    this.hc = new Te(this);
    v(this, this.hc);
    this.ec = new dc(this);
    v(this, this.ec);
    this.ca = new of();
    v(this, this.ca);
    this.Va = new pf();
    v(this, this.Va);
    this.va = new jf();
    v(this, this.va);
    this.wb = new rf();
    v(this, this.wb);
    this.$ = new $e(this);
    v(this, this.$);
    this.M = new cf(100);
    this.ua = new Ze();
    v(this, this.ua);
    this.N = new Qe();
    v(this, this.N);
    this.ha = new Re(this.N, this.G);
    v(this, this.ha);
    this.fa = [];
    for (a = 0; 7 > a; a++) {
      var b = new W();
      v(this, b);
      this.fa.push(b);
    }
    this.V = [];
    b = Wa(gc);
    for (a = 0; 4 > a; a++) {
      var c = new V(b[a]);
      v(this, c);
      this.V.push(c);
    }
    this.f = [];
    Ua(
      fc,
      function (a) {
        Ua(
          gc,
          function (b) {
            b = new jc(a, b);
            v(this, b);
            this.f.push(b);
          },
          this,
        );
      },
      this,
    );
    this.rb = [];
    this.Ab = [];
    this.yb = null;
    this.pc = !0;
  };
t(Z, L);
Z.prototype.v = function (a) {
  Z.g.v.call(this, a);
  a = this.c.b("solitaire-scorebar");
  var b = this.c.b("solitaire-topbar"),
    c = this.c.b("solitaire-mode-dialog"),
    d = this.c.b("solitaire-final-dialog");
  M(this, this.ca);
  M(this, this.Va);
  M(this, this.va);
  M(this, this.wb);
  Wc(this.ca, a);
  Wc(this.Va, b);
  Wc(this.va, c);
  Wc(this.wb, d);
  this.yb = this.c.b("solitaire-board");
  vf(this, this.yb);
  x(
    this.rb,
    function (a) {
      this.hc.Y.push(a);
    },
    this,
  );
};
var wf = function (a) {
    x(
      a.f,
      function (a) {
        a.da(this);
      },
      a,
    );
    x(
      a.fa,
      function (a) {
        a.da(this);
      },
      a,
    );
    x(
      a.V,
      function (a) {
        a.da(this);
      },
      a,
    );
    a.ha.da(a);
    a.N.da(a);
  },
  xf = function (a, b, c) {
    var d = a.c.w("DIV", ["pile", "dark-box"]);
    a.c.appendChild(b, d);
    Mc(d, c.left, c.top);
    Nc(d, c.width, c.height);
  },
  zf = function (a, b) {
    // TODO: set container to use for calculating width
    const content = document.querySelector(".content");
    const btnDoodleGames = document.querySelector("#btnDoodleGames");
    btnDoodleGames.style.top = `${content.offsetTop}px`;
    btnDoodleGames.style.left = `${content.offsetLeft}px`;
    var c = content.clientWidth,
      d = content.clientHeight - 56,
      e = new df(c, d);
    e.Nb = R;
    e.Mb = S;
    e.Bc = 16;
    e.qb = Fe() ? 16 : 8;
    yf(a, b);
    if (Be()) (e.Qb = 5), (e.pb = 7), xf(a, b, new J(0, 0, c, S + 32));
    else {
      e.Qb = 4;
      e.pb = 9;
      var f = X(e, 0, 0, 1, 4);
      xf(a, b, new J(0, 0, R + 2 * f.left, d));
      xf(a, b, new J(c - R - 2 * f.left, 0, R + 2 * f.left, d));
    }
    return e;
  },
  Af = function (a, b) {
    var c = zf(a, b);
    a.Ya = new Y(a.N, X(c, 0, 1, 1, 1.5));
    a.T = new Y(a.ha, X(c, 0, 0));
    lf(a.T, 0);
    a.Ia = [];
    x(
      a.fa,
      function (a, b) {
        var d = new Y(a, X(c, b + 1, 0, 1, 4));
        this.Ia.push(d);
      },
      a,
    );
    a.Ca = [];
    x(
      a.V,
      function (a, b) {
        var d = new Y(
          a,
          new J(c.Da() - c.qb - R, 16 * (0.5 * b + 1) + b * S, R, S),
        );
        lf(d, 0.2);
        this.Ca.push(d);
      },
      a,
    );
  },
  yf = function (a, b) {
    var c = xc("div", "dark-box", b);
    x(
      c,
      function (a) {
        Dc(a);
      },
      a,
    );
  },
  Cf = function (a, b) {
    var c = zf(a, b);
    a.Ya.moveTo(X(c, 0, 1, 1, 1.5));
    lf(a.T, 0);
    a.T.moveTo(X(c, 0, 0));
    x(
      a.Ia,
      function (a, b) {
        a.moveTo(X(c, b + 1, 0, 1, 4));
      },
      a,
    );
    x(
      a.Ca,
      function (a, b) {
        a.moveTo(new J(c.Da() - c.qb - R, 16 * (0.5 * b + 1) + b * S, R, S));
      },
      a,
    );
    Bf(a, c);
  },
  Df = function (a, b) {
    var c = zf(a, b);
    a.Ya = new Y(a.N, X(c, 1, 0, 1.5, 1));
    a.T = new Y(a.ha, X(c, 0, 0));
    lf(a.T, 0);
    a.Ia = [];
    x(
      a.fa,
      function (a, b) {
        var d = new Y(a, ef(X(c, b, 1, 1, 2.5)));
        this.Ia.push(d);
      },
      a,
    );
    a.Ca = [];
    x(
      a.V,
      function (a, b) {
        var d = new Y(a, X(c, 3 + b, 0));
        lf(d, 0.2);
        this.Ca.push(d);
      },
      a,
    );
  },
  Ef = function (a, b) {
    var c = zf(a, b);
    a.Ya.moveTo(X(c, 1, 0, 1.5, 1));
    lf(a.T, 0);
    a.T.moveTo(X(c, 0, 0));
    x(
      a.Ia,
      function (a, b) {
        a.moveTo(ef(X(c, b, 1, 1, 2.5)));
      },
      a,
    );
    x(
      a.Ca,
      function (a, b) {
        lf(a, 0.2);
        a.moveTo(X(c, 3 + b, 0));
      },
      a,
    );
    Bf(a, c);
  },
  vf = function (a, b) {
    Be() ? Df(a, b) : Af(a, b);
    M(a, a.Ya);
    Vc(a.Ya, b);
    a.rb.push(a.Ya);
    M(a, a.T);
    Vc(a.T, b);
    M(a.T, new nf(), !0);
    a.rb.push(a.T);
    x(
      a.Ia,
      function (a) {
        M(this, a);
        Vc(a, b);
        this.rb.push(a);
      },
      a,
    );
    var c = Wa(gc);
    x(
      a.Ca,
      function (a, e) {
        M(this, a);
        Vc(a, b);
        M(a, new nf(c[e]), !0);
        this.rb.push(a);
      },
      a,
    );
    x(
      a.f,
      function () {
        var a = new Le();
        M(this, a);
        Vc(a, b);
        this.Ab.push(a);
      },
      a,
    );
  };
Z.prototype.dd = function (a) {
  0 >= a ||
    (this.pc == Be() ? setTimeout(q(this.dd, this, a - 1), 500) : this.Sb());
};
Z.prototype.A = function () {
  Z.g.A.call(this);
  Ff(this);
  var a = this.j();
  a.a(this.Va, "r", this.Yd);
  a.a(this.Va, "s", this.Xd);
  a.a(this.ca, "q", this.Ac);
  a.a(this.ca, "p", this.xc);
  a.a(this.va, "k", this.yc);
  a.a(this.va, "l", this.zc);
  a.a(this.wb, "t", this.Td);
  a = this.j();
  a.a(this, $c.zd, this.Pd);
  a.a(this.hc, "i", this.Od);
  be() || ae()
    ? (a.a(this, "o", this.cd), a.a(this, "f", this.$c))
    : (a.a(this, "m", this.cd), a.a(this, "d", this.$c));
  a.a(window, "resize", this.Sb);
  a.a(window, "orientationchange", q(this.dd, this, 3));
  a.a(this.M, "tick", this.Vd);
  a = this.j();
  a.a(this, "vwxyABC".split(""), this.jd);
  a.a(this, "g", this.Sd);
  a.a(this, ["y", "B", "C", "A"], this.Dd);
  a.a(this, "D", this.Qd);
  wf(this);
  this.Sb();
  var b = (a = this.Sb);
  this && (b = q(a, this));
  "function" != da(k.setImmediate) ||
  (k.Window &&
    k.Window.prototype &&
    !y("Edge") &&
    k.Window.prototype.setImmediate == k.setImmediate)
    ? (af || (af = bf()), af(b))
    : k.setImmediate(b);
};
var Ff = function (a) {
  var b = a.j();
  x(
    a.fa,
    function (a, d) {
      $b(b, this.Ia[d], "h", a.wc, !1, a);
    },
    a,
  );
  x(
    a.V,
    function (a, d) {
      $b(b, this.Ca[d], "h", a.wc, !1, a);
    },
    a,
  );
};
Z.prototype.start = function () {
  this.va.openDialog(!0, !0);
  this.M.start();
  this.kd();
  Gf(this);
};
var Hf = function (a) {
    a.mb && uf.log(4, "Easy" == a.G.ob, a.$.u);
    a.kd();
    a.G.hd = Math.random();
    Gf(a);
    setTimeout(function () {
      x(
        a.fa,
        function (b, c) {
          var d = a.ha.pop(c + 1);
          b.push(d);
        },
        a,
      );
      a.jd();
      a.dispatchEvent("u");
      a.$.start();
      x(a.Ab, function (a) {
        ze(a.b(), 0);
      });
    }, 1e3);
    a.mb = !0;
    a.ec.kb();
    a.$.start();
  },
  Gf = function (a) {
    var b = Qa(a.f);
    Ta(b, Pe(a.G));
    x(
      b,
      function (a, b) {
        Me(this.Ab[b], a);
      },
      a,
    );
    a.ha.push(b);
  };
g = Z.prototype;
g.jd = function () {
  var a = new Ve(this.$.getTime());
  Xe(a, this.f);
  a.sb.deck = Qa(this.ha.f);
  a.sb.waste = Qa(this.N.f);
  x(this.V, function (b, c) {
    a.sb["foundation" + c] = Qa(b.f);
  });
  x(this.fa, function (b, c) {
    a.sb["tableau" + c] = Qa(b.f);
  });
  a.u = 0 > this.ua.ea.length - 1 ? 0 : this.$.u;
  this.ua.ea.push(a);
  Nd(this.ca.Wa, !(1 < this.ua.ea.length));
};
g.Hc = function () {
  var a = this.ua.Hc();
  a &&
    (We(a, "deck", this.ha),
    We(a, "waste", this.N),
    x(this.V, function (b, c) {
      We(a, "foundation" + c, b);
    }),
    x(this.fa, function (b, c) {
      We(a, "tableau" + c, b);
    }),
    this.$.Yb(a.u),
    Ye(a, this.f));
  Nd(this.ca.Wa, !(1 < this.ua.ea.length));
};
g.kd = function () {
  this.ua.clear();
  this.N.clear();
  this.ha.clear();
  x(this.V, function (a) {
    a.clear();
  });
  x(this.fa, function (a) {
    a.clear();
  });
};
g.Ac = function () {
  this.Hc();
};
g.xc = function () {
  this.va.openDialog(!1, !0);
};
g.Td = function () {
  this.va.openDialog(!0, !1);
};
g.Xd = function () {
  this.G.jc = !1;
};
g.Yd = function () {
  this.G.jc = !0;
};
g.yc = function () {
  var a = this.G;
  a.Pb = 1;
  a.ic = !0;
  a.ob = "Easy";
  Hf(this);
};
g.zc = function () {
  var a = this.G;
  a.Pb = 3;
  a.ic = !1;
  a.ob = "Hard";
  Hf(this);
};
g.Vd = function () {
  if (this.mb) {
    this.ca.Yb(this.$.u);
    Fc(this.ca.uc, Math.max(parseInt(this.ua.ea.length - 1, 10), 0));
    this.ca.setTime(this.$.getTime());
    var a = this.Va,
      b = this.G.ob;
    a.sc != b && ((a.sc = b), qf(a));
  }
};
g.Pd = function (a) {
  a = a.Cb;
  var b = a.oa,
    c = b.C.s;
  c instanceof W
    ? Ie(
        a,
        Ka(Ne(c, b.C), function (a) {
          return a.Xa;
        }),
      )
    : Ie(a, []);
  return !0;
};
g.Od = function (a) {
  x(a.target.Y, function (a) {
    a.kc = !0;
    ze(a.b(), 1);
  });
  H(a.target.oa.C.s);
};
var Bf = function (a, b) {
  x(
    a.Ab,
    function (a) {
      a.qa.Ob = new J(0, 0, b.Da() - R, b.gb() - S);
    },
    a,
  );
};
g = Z.prototype;
g.Sb = function () {
  // TODO: on resize
  (this.pc = Be()) ? Be() && Ef(this, this.yb) : Cf(this, this.yb);
};
g.$c = function (a) {
  a = a.target.C;
  var b = a.s;
  b instanceof Qe || b instanceof V
    ? a.tb && ic(b, "g", a)
    : b instanceof W
      ? a.ka && this.G.ic && ic(b, "g", a)
      : b instanceof Re && Se(b);
};
g.cd = function (a) {
  a = a.target.s;
  a instanceof Re && Se(a);
};
g.Dd = function () {
  Na(this.f, function (a) {
    return a.ka;
  }) && this.dispatchEvent("D");
};
g.Qd = function () {
  if (this.mb) {
    this.mb = !1;
    this.ec.play("winscreen");
    for (var a = !1; !a; )
      (a = !0),
        x(
          this.f,
          function (b) {
            mc(b, !0);
            x(
              this.V,
              function (a) {
                a.Ka(b) && a.push(b);
              },
              this,
            );
            b.s instanceof V || (a = !1);
          },
          this,
        );
    uf.log(3, "Easy" == this.G.ob, this.$.u);
    this.wb.openDialog();
  }
};
g.Sd = function (a) {
  this.play(a.target);
};
g.play = function (a, b) {
  var c = If(a, b ? this.V : Pa(this.V, this.fa));
  return c ? (c.accept(a), !0) : !1;
};
var If = function (a, b) {
  var c = a.s,
    d = [];
  x(b, function (b) {
    b.Ka(a) && b !== c && d.push(b);
  });
  return 0 < d.length ? d[0] : null;
};
var Jf = ff.la(),
  Kf = null,
  Lf = function () {
    if (!Kf) {
      var a = wc(document, "solitaire");
      if (a) {
        var b = wc(document, "solitaire-waiting-hint");
        if (b) {
          var c = wc(document, "solitaire-mode-dialog");
          if (c) {
            var d = wc(document, "solitaire-final-dialog");
            d &&
              (K(b, !0),
              K(c, !1),
              K(d, !1),
              je.la().Wb(0, function () {
                a.style.display = "block";
                Kf = new Z();
                var c = window.senty.doodle;
                if (c.allMsgs) {
                  var d = "en";
                  c.hl = d;
                  c.msgs = {};
                  for (var h = 0; h < c.allMsgs.messages.length; ++h)
                    c.msgs[c.allMsgs.messages[h]] =
                      c.allMsgs.translations[d].ALL[h];
                }
                Wc(Kf, a);
                Jf.kb();
                Jf.log(1);
                K(b, !1);
                Kf.start();
              }));
          }
        }
      }
    }
  };

Hb(window, "load", function () {
  Lf();

  const positionDoodleGames = () => {
    const content = document.querySelector(".content");
    const btnDoodleGames = document.querySelector("#btnDoodleGames");
    btnDoodleGames.style.top = `${content.offsetTop}px`;
    btnDoodleGames.style.left = `${content.offsetLeft}px`;
  };

  addEventListener("resize", (event) => {
    positionDoodleGames();
  });
  positionDoodleGames();
});
