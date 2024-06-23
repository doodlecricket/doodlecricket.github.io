(function () {
  var b = window.addEventListener;
  window.addEventListener = function (a, c, d) {
    "unload" !== a && b(a, c, d);
  };
}).call(this);
(function () {
  window.google = { kEI: "XGEAY5reFonh2roP6_eccA" };
  google.sn = "web";
  google.kHL = "en-VN";
})();
(function () {
  var f = this || self;
  var h,
    k = [];
  function l(a) {
    for (var b; a && (!a.getAttribute || !(b = a.getAttribute("eid"))); )
      a = a.parentNode;
    return b || h;
  }
  function m(a) {
    for (
      var b = null;
      a && (!a.getAttribute || !(b = a.getAttribute("leid")));

    )
      a = a.parentNode;
    return b;
  }
  function n(a, b, c, d, g) {
    var e = "";
    c ||
      -1 !== b.search("&ei=") ||
      ((e = "&ei=" + l(d)),
      -1 === b.search("&lei=") && (d = m(d)) && (e += "&lei=" + d));
    d = "";
    !c &&
      f._cshid &&
      -1 === b.search("&cshid=") &&
      "slh" !== a &&
      (d = "&cshid=" + f._cshid);
    c =
      c ||
      "https://donttrackme/" +
        (g || "gen_204") +
        "?atyp=i&ct=" +
        a +
        "&cad=" +
        b +
        e +
        "&zx=" +
        Date.now() +
        d;
    /^http:/i.test(c) &&
      "https:" === window.location.protocol &&
      (google.ml && google.ml(Error("a"), !1, { src: c, glmm: 1 }), (c = ""));
    return c;
  }
  h = google.kEI;
  google.getEI = l;
  google.getLEI = m;
  google.ml = function () {
    return null;
  };
  google.log = function (a, b, c, d, g) {};
  google.logUrl = n;
}).call(this);
(function () {
  google.y = {};
  google.sy = [];
  google.x = function (a, b) {
    if (a) var c = a.id;
    else {
      do c = Math.random();
      while (google.y[c]);
    }
    google.y[c] = [a, b];
    return !1;
  };
  google.sx = function (a) {
    google.sy.push(a);
  };
  google.lm = [];
  google.plm = function (a) {
    google.lm.push.apply(google.lm, a);
  };
  google.lq = [];
  google.load = function (a, b, c) {
    google.lq.push([[a], b, c]);
  };
  google.loadAll = function (a, b) {
    google.lq.push([a, b]);
  };
  google.bx = !1;
  google.lx = function () {};
}).call(this);
google.f = {};
(function () {
  document.documentElement.addEventListener(
    "submit",
    function (b) {
      var a;
      if ((a = b.target)) {
        var c = a.getAttribute("data-submitfalse");
        a = "1" === c || ("q" === c && !a.elements.q.value) ? !0 : !1;
      } else a = !1;
      a && (b.preventDefault(), b.stopPropagation());
    },
    !0
  );
  document.documentElement.addEventListener(
    "click",
    function (b) {
      var a;
      a: {
        for (
          a = b.target;
          a && a !== document.documentElement;
          a = a.parentElement
        )
          if ("A" === a.tagName) {
            a = "1" === a.getAttribute("data-nohref");
            break a;
          }
        a = !1;
      }
      a && b.preventDefault();
    },
    !0
  );
}).call(this);
(function () {
  google.hs = { h: true, nhs: false, sie: false };
})();
(function () {
  var b = [
    function () {
      google.tick && google.tick("load", "dcl");
    },
  ];
  google.dclc = function (a) {
    b.length ? b.push(a) : a();
  };
  function c() {
    for (var a = b.shift(); a; ) a(), (a = b.shift());
  }
  window.addEventListener
    ? (document.addEventListener("DOMContentLoaded", c, !1),
      window.addEventListener("load", c, !1))
    : window.attachEvent && window.attachEvent("onload", c);
}).call(this);
(function () {
  var b = [];
  google.jsc = {
    xx: b,
    x: function (a) {
      b.push(a);
    },
    mm: [],
    m: function (a) {
      google.jsc.mm.length || (google.jsc.mm = a);
    },
  };
}).call(this);
(function () {
  var e = this || self;

  var f = {};
  function w(a, c) {
    if (null === c) return !1;
    if ("contains" in a && 1 == c.nodeType) return a.contains(c);
    if ("compareDocumentPosition" in a)
      return a == c || !!(a.compareDocumentPosition(c) & 16);
    for (; c && a != c; ) c = c.parentNode;
    return c == a;
  }
  var y = function (a, c) {
      return function (d) {
        d || (d = window.event);
        return c.call(a, d);
      };
    },
    z =
      "undefined" != typeof navigator && /Macintosh/.test(navigator.userAgent),
    E = function () {
      this._mouseEventsPrevented = !0;
    };
  var F = function (a) {
      this.g = a;
      this.h = [];
    },
    G = function (a) {
      for (var c = 0; c < a.h.length; ++c) {
        var d = a.g,
          b = a.h[c];
        d.removeEventListener
          ? d.removeEventListener(b.eventType, b.o, b.capture)
          : d.detachEvent && d.detachEvent("on" + b.eventType, b.o);
      }
      a.h = [];
    };
  var H = e._jsa || {};
  H._cfc = void 0;
  H._aeh = void 0;
  var I = function () {
      this.h = this.g = null;
    },
    K = function (a, c) {
      var d = J;
      d.g = a;
      d.h = c;
      return d;
    };
  I.prototype.i = function () {
    var a = this.g;
    this.g && this.g != this.h
      ? (this.g = this.g.__owner || this.g.parentNode)
      : (this.g = null);
    return a;
  };
  var L = function () {
      var a;
      this.j = a = void 0 === a ? [] : a;
      this.g = 0;
      this.h = null;
      this.l = !1;
    },
    N = function (a, c) {
      var d = M;
      d.j = a;
      d.g = 0;
      d.h = c;
      d.l = !1;
      return d;
    };
  L.prototype.i = function () {
    if (this.l) return J.i();
    if (this.g != this.j.length) {
      var a = this.j[this.g];
      this.g++;
      a != this.h && a && a.__owner && ((this.l = !0), K(a.__owner, this.h));
      return a;
    }
    return null;
  };
  var J = new I(),
    M = new L();
  var Q = function () {
      this.s = [];
      this.g = [];
      this.h = [];
      this.l = {};
      this.i = null;
      this.j = [];
      P(this, "_custom");
    },
    R = function (a) {
      return String.prototype.trim
        ? a.trim()
        : a.replace(/^\s+/, "").replace(/\s+$/, "");
    },
    ia = function (a, c) {
      return function m(b, g) {
        g = void 0 === g ? !0 : g;
        var l = c;
        if ("_custom" == l) {
          l = b.detail;
          if (!l || !l._type) return;
          l = l._type;
        }
        var k = l;
        "click" == k &&
        ((z && b.metaKey) ||
          (!z && b.ctrlKey) ||
          2 == b.which ||
          (null == b.which && 4 == b.button) ||
          b.shiftKey)
          ? (k = "clickmod")
          : "keydown" == k && !b.a11ysc && (k = "maybe_click");
        var u = b.srcElement || b.target;
        l = S(k, b, u, "", null);
        var aa = b.path
          ? N(b.path, this)
          : b.composedPath
          ? N(b.composedPath(), this)
          : K(u, this);
        for (var r; (r = aa.i()); ) {
          var h = r;
          var p = void 0;
          r = h;
          var q = k,
            ba = b;
          var n = r.__jsaction;
          if (!n) {
            var x;
            n = null;
            "getAttribute" in r && (n = r.getAttribute("jsaction"));
            if ((x = n)) {
              n = f[x];
              if (!n) {
                n = {};
                for (
                  var A = x.split(ca), da = A ? A.length : 0, B = 0;
                  B < da;
                  B++
                ) {
                  var v = A[B];
                  if (v) {
                    var C = v.indexOf(":"),
                      O = -1 != C,
                      fa = O ? R(v.substr(0, C)) : ea;
                    v = O ? R(v.substr(C + 1)) : v;
                    n[fa] = v;
                  }
                }
                f[x] = n;
              }
              r.__jsaction = n;
            } else (n = ha), (r.__jsaction = n);
          }
          "maybe_click" == q && n.click
            ? ((p = q), (q = "click"))
            : "clickkey" == q
            ? (q = "click")
            : "click" != q || n.click || (q = "clickonly");
          p =
            H._cfc && n.click
              ? H._cfc(r, ba, n, q, p)
              : {
                  eventType: p ? p : q,
                  action: n[q] || "",
                  event: null,
                  ignore: !1,
                };
          l = S(p.eventType, p.event || b, u, p.action || "", h, l.timeStamp);
          if (p.ignore || p.action) break;
        }
        l && "touchend" == l.eventType && (l.event._preventMouseEvents = E);
        if (p && p.action) {
          if (
            "mouseenter" == k ||
            "mouseleave" == k ||
            "pointerenter" == k ||
            "pointerleave" == k
          )
            if (
              ((u = b.relatedTarget),
              !(
                ("mouseover" == b.type && "mouseenter" == k) ||
                ("mouseout" == b.type && "mouseleave" == k) ||
                ("pointerover" == b.type && "pointerenter" == k) ||
                ("pointerout" == b.type && "pointerleave" == k)
              ) ||
                (u && (u === h || w(h, u))))
            )
              (l.action = ""), (l.actionElement = null);
            else {
              k = {};
              for (var t in b)
                "function" !== typeof b[t] &&
                  "srcElement" !== t &&
                  "target" !== t &&
                  (k[t] = b[t]);
              k.type =
                "mouseover" == b.type
                  ? "mouseenter"
                  : "mouseout" == b.type
                  ? "mouseleave"
                  : "pointerover" == b.type
                  ? "pointerenter"
                  : "pointerleave";
              k.target = k.srcElement = h;
              k.bubbles = !1;
              l.event = k;
              l.targetElement = h;
            }
        } else (l.action = ""), (l.actionElement = null);
        h = l;
        a.i &&
          !h.event.a11ysgd &&
          ((t = S(
            h.eventType,
            h.event,
            h.targetElement,
            h.action,
            h.actionElement,
            h.timeStamp
          )),
          "clickonly" == t.eventType && (t.eventType = "click"),
          a.i(t, !0));
        if (h.actionElement || "maybe_click" == h.eventType) {
          if (a.i) {
            if (
              (!h.actionElement ||
                "A" != h.actionElement.tagName ||
                ("click" != h.eventType && "clickmod" != h.eventType) ||
                (b.preventDefault ? b.preventDefault() : (b.returnValue = !1)),
              (b = a.i(h)) && g)
            ) {
              m.call(this, b, !1);
              return;
            }
          } else {
            if ((g = e.document) && !g.createEvent && g.createEventObject)
              try {
                var D = g.createEventObject(b);
              } catch (la) {
                D = b;
              }
            else D = b;
            h.event = D;
            a.j.push(h);
          }
          H._aeh && H._aeh(h);
        }
      };
    },
    S = function (a, c, d, b, g, m) {
      return {
        eventType: a,
        event: c,
        targetElement: d,
        action: b,
        actionElement: g,
        timeStamp: m || Date.now(),
      };
    },
    ja = function (a, c) {
      return function (d) {
        var b = a,
          g = c,
          m = !1;
        "mouseenter" == b
          ? (b = "mouseover")
          : "mouseleave" == b
          ? (b = "mouseout")
          : "pointerenter" == b
          ? (b = "pointerover")
          : "pointerleave" == b && (b = "pointerout");
        if (d.addEventListener) {
          if ("focus" == b || "blur" == b || "error" == b || "load" == b)
            m = !0;
          d.addEventListener(b, g, m);
        } else
          d.attachEvent &&
            ("focus" == b ? (b = "focusin") : "blur" == b && (b = "focusout"),
            (g = y(d, g)),
            d.attachEvent("on" + b, g));
        return { eventType: b, o: g, capture: m };
      };
    },
    P = function (a, c) {
      if (!a.l.hasOwnProperty(c)) {
        var d = ia(a, c),
          b = ja(c, d);
        a.l[c] = d;
        a.s.push(b);
        for (d = 0; d < a.g.length; ++d) {
          var g = a.g[d];
          g.h.push(b.call(null, g.g));
        }
        "click" == c && P(a, "keydown");
      }
    };
  Q.prototype.o = function (a) {
    return this.l[a];
  };
  var W = function (a, c) {
      var d = new F(c);
      a: {
        for (var b = 0; b < a.g.length; b++)
          if (T(a.g[b].g, c)) {
            c = !0;
            break a;
          }
        c = !1;
      }
      if (c) return a.h.push(d), d;
      U(a, d);
      a.g.push(d);
      V(a);
      return d;
    },
    V = function (a) {
      for (
        var c = a.h.concat(a.g), d = [], b = [], g = 0;
        g < a.g.length;
        ++g
      ) {
        var m = a.g[g];
        X(m, c) ? (d.push(m), G(m)) : b.push(m);
      }
      for (g = 0; g < a.h.length; ++g)
        (m = a.h[g]), X(m, c) ? d.push(m) : (b.push(m), U(a, m));
      a.g = b;
      a.h = d;
    },
    U = function (a, c) {
      var d = c.g;
      ka && (d.style.cursor = "pointer");
      for (d = 0; d < a.s.length; ++d) c.h.push(a.s[d].call(null, c.g));
    },
    Y = function (a, c) {
      a.i = c;
      a.j && (0 < a.j.length && c(a.j), (a.j = null));
    },
    X = function (a, c) {
      for (var d = 0; d < c.length; ++d)
        if (c[d].g != a.g && T(c[d].g, a.g)) return !0;
      return !1;
    },
    T = function (a, c) {
      for (; a != c && c.parentNode; ) c = c.parentNode;
      return a == c;
    },
    ka =
      "undefined" != typeof navigator &&
      /iPhone|iPad|iPod/.test(navigator.userAgent),
    ca = /\s*;\s*/,
    ea = "click",
    ha = {};
  var Z = new Q();
  W(Z, window.document.documentElement);
  P(Z, "click");
  P(Z, "focus");
  P(Z, "focusin");
  P(Z, "blur");
  P(Z, "focusout");
  P(Z, "error");
  P(Z, "load");
  P(Z, "auxclick");
  P(Z, "change");
  P(Z, "dblclick");
  P(Z, "beforeinput");
  P(Z, "input");
  P(Z, "keyup");
  P(Z, "keydown");
  P(Z, "keypress");
  P(Z, "mousedown");
  P(Z, "mouseenter");
  P(Z, "mouseleave");
  P(Z, "mouseout");
  P(Z, "mouseover");
  P(Z, "mouseup");
  P(Z, "paste");
  P(Z, "touchstart");
  P(Z, "touchend");
  P(Z, "touchcancel");
  P(Z, "transitioncancel");
  P(Z, "transitionend");
  P(Z, "transitionrun");
  P(Z, "transitionstart");
  P(Z, "dragover");
  P(Z, "dragenter");
  P(Z, "dragleave");
  P(Z, "drop");
  P(Z, "dragstart");
  P(Z, "dragend");
  P(Z, "speech");
  (function (a) {
    google.jsad = function (c) {
      Y(a, c);
    };
    google.jsaac = function (c) {
      return W(a, c);
    };
    google.jsarc = function (c) {
      G(c);
      for (var d = !1, b = 0; b < a.g.length; ++b)
        if (a.g[b] === c) {
          a.g.splice(b, 1);
          d = !0;
          break;
        }
      if (!d)
        for (d = 0; d < a.h.length; ++d)
          if (a.h[d] === c) {
            a.h.splice(d, 1);
            break;
          }
      V(a);
    };
  })(Z);
  e.gws_wizbind = (function (a) {
    return {
      trigger: function (c) {
        var d = a.o(c.type);
        d || (P(a, c.type), (d = a.o(c.type)));
        var b = c.target || c.srcElement;
        d && d.call(b.ownerDocument.documentElement, c);
      },
      bind: function (c) {
        Y(a, c);
      },
    };
  })(Z);
}).call(this);

(function () {
  google.xjs = {
    ck: "xjs.s.SHz1qAkv12I.L.W.O",
    cs: "ACT90oHbpmk-cx1tdBoPiZqbFx-7KHraog",
    excm: [],
  };
})();

(function () {
  google.kEXPI =
    "0,1302534,2778504,80902,6596,58450,7979,19192,6036,8638,70748,102823,144828,28043,26782,20223,7320,17671,23291,2538,10527,1780,41240,10594,10203,855,190,6797,1896,1873,2388,177,1581,6582,548,3913,32,2851,1421,20,748,2624,244,875,245,3386,1376,81,183,515,661,767,2373,93,67,987,1323,880,227,43,70,176,489,1894,3498,5359565,5998827,26779724,2772408,1300687,1358773";
})();
function _DumpException(e) {
  throw e;
}
function _F_installCss(c) {}
(function () {
  window.google.xjsu = "m";
})();

(function () {
  google.jl = {
    blt: "none",
    chnk: 0,
    dw: false,
    dwu: true,
    emtn: 0,
    end: 0,
    ine: false,
    injs: "none",
    injt: 0,
    injth: 0,
    injv2: false,
    lls: "viewport",
    pdt: 0,
    rep: 0,
    snet: true,
    strt: 0,
    ubm: false,
    uwp: true,
  };
})();
(function () {
  var pmc =
    "{\x22aa\x22:{},\x22abd\x22:{\x22abd\x22:false,\x22deb\x22:false,\x22det\x22:false},\x22async\x22:{},\x22attn\x22:{},\x22bgd\x22:{\x22ac\x22:true,\x22as\x22:true,\x22at\x22:0,\x22ea\x22:true,\x22ed\x22:0,\x22ei\x22:true,\x22el\x22:true,\x22ep\x22:true,\x22er\x22:true,\x22et\x22:0,\x22eu\x22:false,\x22wl\x22:false},\x22cdos\x22:{\x22cdobsel\x22:false},\x22csi\x22:{},\x22d\x22:{},\x22dpf\x22:{},\x22dvl\x22:{\x22cookie_secure\x22:true,\x22cookie_timeout\x22:21600,\x22driver_ui_type\x22:2,\x22jsc\x22:\x22[null,null,null,30000,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[\\\x2286400000\\\x22,\\\x22604800000\\\x22,2],null,null,21600000,null,null,1,null,null,null,null,null,1,null,null,1]\x22},\x22foot\x22:{},\x22gf\x22:{\x22pid\x22:196,\x22si\x22:true},\x22hsm\x22:{},\x22jsa\x22:{\x22csi\x22:true,\x22csir\x22:100},\x22kyn\x22:{},\x22lli\x22:{},\x22mu\x22:{\x22murl\x22:\x22https://adservice.google.com/adsid/google/ui\x22},\x22pHXghd\x22:{},\x22sb_wiz\x22:{\x22onf\x22:\x22EAE\x22,\x22scq\x22:\x22\x22,\x22stok\x22:\x22kBK2EO5RfBQp56V6EirDac9wnD4\x22,\x22ueh\x22:\x22fc092528_84afabe8_0230ca22_82ca9384_159ad7d8\x22},\x22sf\x22:{},\x22sonic\x22:{},\x22spch\x22:{\x22ae\x22:\x22Please check your microphone.  \\u003Ca href\x3d\\\x22https://support.google.com/chrome/?p\x3dui_voice_search\\\x22 target\x3d\\\x22_blank\\\x22\\u003ELearn more\\u003C/a\\u003E\x22,\x22fp\x22:false,\x22hl\x22:\x22en-VN\x22,\x22im\x22:\x22Click \\u003Cb\\u003EAllow\\u003C/b\\u003E to start voice search\x22,\x22iw\x22:\x22Waiting...\x22,\x22lm\x22:\x22Listening...\x22,\x22lu\x22:\x22%1$s voice search not available\x22,\x22mb\x22:false,\x22ne\x22:\x22No Internet connection\x22,\x22nt\x22:\x22Didn\x27t get that. \\u003Cspan\\u003ETry again\\u003C/span\\u003E\x22,\x22nv\x22:\x22Please check your microphone and audio levels.  \\u003Ca href\x3d\\\x22https://support.google.com/chrome/?p\x3dui_voice_search\\\x22 target\x3d\\\x22_blank\\\x22\\u003ELearn more\\u003C/a\\u003E\x22,\x22pe\x22:\x22Voice search has been turned off.  \\u003Ca href\x3d\\\x22https://support.google.com/chrome/?p\x3dui_voice_search\\\x22 target\x3d\\\x22_blank\\\x22\\u003EDetails\\u003C/a\\u003E\x22,\x22rm\x22:\x22Speak now\x22},\x22tl\x22:{\x22rvkey\x22:\x22AIzaSyC_9Rt88UMjzgg5pIVArnfuIVkJx4zCdTY\x22}}";
  google.pmc = JSON.parse(pmc);
})();
(function () {
  var r = [
    "sb_wiz",
    "aa",
    "abd",
    "async",
    "bgd",
    "dvl",
    "foot",
    "kyn",
    "lli",
    "mu",
    "pHXghd",
    "sf",
    "sonic",
    "spch",
    "tl",
  ];
  google.plm(r);
})();
(function () {
  var m = [];
  var a = m;
  window.W_jd = window.W_jd || {};
  for (var b = 0; b < a.length; b += 2)
    window.W_jd[a[b]] = JSON.parse(a[b + 1]);
})();
(function () {
  window.WIZ_global_data = {
    zChJod: "%.@.]",
    Yllh3e: "%.@.1660969308372506,22458505,235355115]",
    LVIXXb: "1",
    GWsdKe: "en-VN",
    SNlM0e: "AD7QlO7xlhgbswvQAnECNoDiOzyL:1660969308400",
    w2btAe:
      '%.@."111421199497302122238","111421199497302122238","0",null,null,null,1]',
    S06Grb: "111421199497302122238",
    Im6cmf: "/wizrpcui/_/WizRpcUi",
    eptZe: "/wizrpcui/_/WizRpcUi/",
    QrtxK: "0",
  };
  window.IJ_values = {
    IvNqzc: true,
    kRerQb: false,
    AoIPu: true,
    CieUQe: true,
    HCMJkf: true,
    zNiNDd: false,
    EsWLY: false,
    XP4Noc: false,
    jqcxU: "#4285f4",
    toVELc: "#f8f9fa",
    V1TJEb: "#1a73e8",
    eavN9c: 36,
    XuC5Td: 24,
    ivyWed: 28,
    psmQyf: 6,
    osNyZ: 1.0,
    L6WyEf: true,
    tswRXd: "none",
    vq4Rhf: true,
    mtmrtb: "0 1px 6px rgba(32,33,36,0.28)",
    hOdcKb: false,
    vkQXZ: "#fff",
    U2GTk: "#fff",
    WgRLme: "#dadce0",
    QcZxSd: "#3c4043",
    g4ToDf: "0 1px 2px rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)",
    AsC4Mb: "#9aa0a6",
    mub7Fd: "#f1f3f4",
    z2SQwf: "#bdc1c6",
    ob4Y0c: "#e8eaed",
    M1fk3b: "#dadce0",
    gWINCf: "#9aa0a6",
    I6R5lf: "#f8f9fa",
    KCMXVb: "#202124",
    vzRvgb: "#e8f0fe",
    HNLwz: "#d2e3fc",
    uD3Lwc: "#d2e3fc",
    MLAA8d: "0 1px 2px rgba(66,133,244,.3), 0 1px 3px 1px rgba(66,133,244,.15)",
    TqDTGf: "#aecbfa",
    m7EnTc: "#8ab4f8",
    jyEUXe: "#d2e3fc",
    QyzZ8e: "#174ea6",
    CFgsb: "#1558d6",
    lYyelb: "rgba(0,0,0,.54)",
    gdL5yf: "rgba(0,0,0,.26)",
    uWxHhb: "#fff",
    tCxmde: "rgba(255,255,255,.30)",
    m0RlKb: false,
    wFGKdc: false,
    klgere: "invert(1) hue-rotate(180deg)",
    gHo7b: "#b8bbbe",
    VBSc8c: false,
    oX2r2c: true,
    WitVqe: true,
    HIMA4e: false,
    YjL9Ce: false,
    wsRfI: false,
    UZoA2e: false,
    q49bvd: false,
    m2hzy: false,
    jBwTk: "#3c4043",
    eOLVib: 10,
    fTZUNc: false,
    YrTYaf: true,
    WvdhF: false,
    Rojixc: "#aecbfa",
    QOuvIc: "#1a73e8",
    hhsybf: false,
    Zxl9ce: false,
    Ydluub: "#f5f5f5",
    GV48mf: "rgba(0,0,0,.87)",
    OL2x3c: false,
    Zun3Ef: false,
    SOm4o: false,
    l4Npee: false,
    tyCgpc: "#fff",
    H7aRye:
      "0px 5px 26px 0px rgba(0, 0, 0, 0.22), 0px 20px 28px 0px rgba(0, 0, 0, 0.30)",
    U6xP0: "#4285f4",
    A5tF3b: false,
    j0DpSe: false,
    GUwCvc: false,
    ilb27b: "#4285f4",
    NXDvtf: false,
    Lxmjn: true,
    kCmuvf: false,
    FydCC: true,
    EgTnfe: true,
    kAUP3b: false,
    hgWJ8c: false,
    TxsTcf: "#000",
    v4iQCe: "#4285f4",
    OfqeOe: "#4285f4",
    zRpUk: "#4285f4",
    QbZklb: "#e8f0fe",
    Fcb4A: "#1a73e8",
    VRtZRe: "#1558d6",
    OmYlge: "#34a853",
    y8HGgf: "#1e8e3e",
    QDXUyc: "#188038",
    JQWqub: "#ea4335",
    nRwuZd: "#d93025",
    rzzybc: "#d93025",
    rZLJJb: "#fff",
    hcLEtc: "#81c995",
    GJQmmf: "#34a853",
    hETIfb: "#dadce0",
    NtNjtd: "#dadce0",
    vCsrw: "#dadce0",
    p9416c: "#f8f9fa",
    toQ7tf: "#f8f9fa",
    xgY1nc: "#f8f9fa",
    p1ocJb: "#f8f9fa",
    FCLfBe: "#f8f9fa",
    MnC2zf: "#70757a",
    IfdAAd: "#70757a",
    fP2Yo: "#70757a",
    mknyu: "#70757a",
    PUenT: "#3c4043",
    Z0DEKf: "#202124",
    oHHKwf: "#202124",
    xNPzic: "#fff",
    KkPbyc: "#fbbc04",
    uezre: "#fbbc04",
    SkGiZd: "#f29900",
    OxPRr: "#f1f3f4",
    uiKEV: "#202124",
    HMhiYd: "#202124",
    Co7tHc: false,
    BPltf: "#f1f3f4",
    kcrUme: 14,
    bKebqb: "#202124",
    qeEJkc: 40,
    urZDtf: "#202124",
    zeWvtf: false,
    qdoinb: "#70757a",
    QU9sdc: "#202124",
    a4qLne: "#ea4335",
    RifN2d: "#000",
    Fpi7Rc: "arial,sans-serif-medium,sans-serif",
    a2ykac: "arial,sans-serif",
    ME4NMc: "#000",
    BpPAcd: "#dadce0",
    N0wyZ: "#000",
    jxZxne: "#70757a",
    CQvMbe: "#1a73e8",
    fRkoq: true,
    c4qycc: false,
    WkjuOe: false,
    uJ8Xid: false,
    cWwp7b: false,
    h6eQZc: false,
    b0Jode: false,
    mo8CW: true,
    fd9gQc: false,
    MomrM: false,
    Vb9YJ: false,
    OQZvxe: "0 2px 10px 0 rgba(0,0,0,0.2)",
    fI0P7e: false,
    Asoj0e: false,
    AP8pqf: "#dadce0",
    sBpVac: "rgba(0,0,0,.26)",
    JcUGee: "#70757a",
    PngPbb: "#202124",
    ENmP1c: "rgba(204,204,204,.15)",
    I69zkb: "rgba(204,204,204,.25)",
    ib0wve: "rgba(112,117,122,.20)",
    a8Umdd: "rgba(112,117,122,.40)",
    LVoecd: "rgba(0,0,0,.16)",
    yHlFbb: "rgba(0,0,0,.40)",
    seVajd: "rgba(0,0,0,.12)",
    qj36Ef: "#323232",
    esUgv: "#fff",
    KVmtZc: "rgba(255,255,255,.30)",
    MoAfyf: "#fff",
    oyB9kf: "#202124",
    bXvyY: "#fff",
    ALMSwe: "Inter,InterDraft,Helvetica,Arial,sans-serif",
    Sgnmlc: "14px",
    qkXvHd: "500",
    SezQgf: "500",
    EJG4vf: "pointer",
    WyvaRd: "0 1px 1px rgba(0,0,0,.16)",
    ROAn0e:
      "0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)",
    rgHLF: true,
    eSe9wb: "#000",
    RxFwtc: "0 4px 16px rgba(0,0,0,0.2)",
    aM8S7c: "#666",
    YajdE: 200,
    Tae7A: true,
    c5h25: true,
    MCowFd: false,
    LACYrf: false,
    uZLNF: true,
    wku5sd: false,
    bDOvJc: false,
    HCImye: false,
    ZMIIMe: true,
    B0husb: true,
    o28sBd: false,
    n4eEIc: true,
    tqmosb: "#fff",
    HjM8R: "#fff",
    ruFjfe: false,
    FqP1Fc: "#000",
    SATNMc: "1px solid #dadce0",
    V0Bluc: "none",
    X1bUEc: "arial,sans-serif-medium,sans-serif",
    QZheGe: "Google Sans,arial,sans-serif-medium,sans-serif",
    LIYDac: "arial,sans-serif",
    mNmrAb: "#ebebeb",
    x0VCkc: "1px solid #dadce0",
    Rvxsx: "1px solid #dadce0",
    qmcJmd: 6,
    JuqxTb: "#202124",
    E6Gkjd: "0 2px 10px 0 rgba(0,0,0,0.2)",
    MClBOe: "rgba(0,0,0,0.1)",
    ZxI7Af: "#D8D7DC",
    sKPNrc: "#e6e6e6",
    AgJzQ: "rgba(255,255,255,0)",
    FagChc: "#f1f3f4",
    oqx7yb: "#70757a",
    khoEPb: "#1a0dab",
    SfSmD: "#dadce0",
    auaxA: "#202124",
    v44rSc: "#70757a",
    YkyDVb: false,
    s6k9tc: true,
    tdC6kd: true,
    fhD9ff: false,
    UjGOq: false,
    sib8M: true,
    PGBLg: false,
    IUj4Ye: true,
    kBxgab: true,
    aMqn0b: true,
    lHLMtb: false,
    Erzlz: false,
    KQw3Q: false,
    OQFPef: false,
    m19P4e: false,
    P6Ur2b: "#1a73e8",
    uhXPIc: "#8ab4f8",
    e127Sb: "#1c3aa9",
    ezFdNd: "#0f9d58",
    Wja4f: "#87ceac",
    jjajId: "#9e9e9e",
    d1ULv: "rgba(0,0,0,.26)",
    lQ1kYd: "#bdbdbd",
    fAus6: "#000",
    NNBneb: "#5f6368",
    MDi8Rd: "#dadce0",
    BoJtxf: false,
    ZTuJNc: false,
    XgWQKd: true,
    fjc61: false,
    y1HZEd: false,
    D8A8he: true,
    nMRhJe: false,
    JyBo2c: false,
    xDKXr: false,
    FYBlgf: false,
    FELoce: false,
    HpkQdc: true,
    wwQMXe: false,
    bcz7kc: true,
    VXIo7d: "8px",
    EiEfXb: "#dadce0",
    IFkMhd: false,
    lsK6rd: true,
    TSsjXd: true,
    w2btAe:
      '%.@."111421199497302122238","111421199497302122238","0",null,null,null,1]',
    pxO4Zd: "0",
    mXOY5d: "%.@.null,1,1,null,[null,757,1440]]",
    SsQ4x: "DC3UMraya-gJIySMVYO_OQ",
    IYFWl: '%.@."#b8bbbe"]',
    Ht1O2b: "%.@.0]",
    d6J1ld: "%.@.0]",
    Oo3dKf:
      '%.@."0px 5px 26px 0px rgba(0,0,0,0.22),0px 20px 28px 0px rgba(0,0,0,0.3)","#fff"]',
    uUBnEb:
      '%.@."#ebeced","#fff","#dadce0","#fff","#3c4043","#dadce0","#dadce0","#bdc1c6","#fff","#3c4043","#202124","#3c4043","#ea4335","#34a853","#202124","#fff","#fff"]',
    nfxEDe: "%.@.[],0,null,0,0]",
    YPqjbf:
      '%.@."rgba(0,0,0,0.9)","#fff","0 0 2px 0 rgba(0,0,0,0.12),0 2px 2px 0 rgba(0,0,0,0.12)","1px solid #dadce0","#70757a"]',
    GWsdKe: "en-VN",
    frJqAd: '%.@."13px","16px","11px",13,16,11,"8px",8,20]',
    N1ycab: "en_VN",
    AB5Xwb: '%.@."10px",10,"16px",16,"18px"]',
    Z8HLFf: '%.@."14px",14]',
    ymaOI: "%.@.40,32,14]",
    fNpQmb:
      '%.@."Inter-Bold,HelveticaNeue-Bold,HelveticaNeue,sans-serif-bold,Arial,sans-serif"]',
    aMI2mb: '%.@."0 2px 10px 0 rgba(0,0,0,0.2)"]',
    BZUDzc:
      '%.@.0,"14px","500","500","0 1px 1px rgba(0,0,0,.16)","pointer","#000","rgba(0,0,0,.26)","#70757a","#202124","rgba(204,204,204,.15)","rgba(204,204,204,.25)","rgba(112,117,122,.20)","rgba(112,117,122,.40)","#34a853","#4285f4","#1558d6","#ea4335","#fbbc04","#f8f9fa","#f8f9fa","#202124","#34a853","rgba(0,0,0,.12)",null,"#fff","rgba(255,255,255,.30)","#fff","#202124","#fff",null,1]',
    v7Qvdc:
      '%.@."20px","500","400","13px","15px","15px","Inter,InterDraft,Helvetica,Arial,sans-serif","24px","400","32px","24px"]',
    MgUcDb: "VN",
    SIsrTd: false,
    fyLpDc: "",
    ZxtPCd:
      '%.@.null,null,null,null,"20","20","20","40px","36px","36px",null,null,null,null,null,null,"#fff",null,null,null,"#fff",null,null,null,"#e8f0fe",null,"#e8f0fe",null,null,"16px","12px","8px","4px","#fff","#e8f0fe","#1967d2","transparent","#1a0dab","#dadce0","999rem","8px","#1967d2","transparent","#4d5156","#dadce0","#1967d2","transparent","#4285f4","#dadce0","999rem","Google Sans,arial,sans-serif-medium,sans-serif","20px","14px","500","#f1f3f4","#202124","#fff","#dadce0","#3c4043","4px","#1967d2","#1967d2","#4285f4","#fff","#4285f4","rgba(60,64,67,0.08)","rgba(60,64,67,0.08)","rgba(60,64,67,0.24)","#d2e3fc","#d2e3fc","#185abc","#4d5156","#4285f4","2px","rgba(26,115,232,0.08)","rgba(26,115,232,0.08)","rgba(138,180,248,0.24)","#d2e3fc","#d2e3fc","#185abc","#1967d2","34px","12px","7px","1px","#fff","rgba(60,64,67,0.08)","rgba(60,64,67,0.08)","#70757a","rgba(60,64,67,0.24)","#fff","rgba(26,115,232,0.08)","rgba(26,115,232,0.08)","#4285f4","#1967d2","#4d5156"]',
    spz2q: '%.@."#fff","0px","0px","0px","0px 0px 30px"]',
    TmSkMb:
      '%.@."center","flex","row wrap","1 1 100%","1 1 calc(50% - 4px)","space-between","0px 0px 30px"]',
    lDqiof:
      '%.@."#202124","#4d5156","#1a73e8",null,"#70757a","#1a0dab","#681da8",null,null,"#fff","#4285f4","#fff","#e8f0fe","#1967d2","#f1f3f4","#202124","#fff","#3c4043","#202124","#fff","#fff","#fff","#188038","#d93025","#e37400","#dadce0","#fff","rgba(0,0,0,0.6)","#202124","#dadce0","#d2e3fc","rgba(0,0,0,0.03)","#1a73e8","#70757a","#202124","transparent","#ecedef"]',
    sCU50d:
      '%.@.null,"none",null,"0px 1px 3px rgba(60,64,67,0.08)",null,"0px 2px 6px rgba(60,64,67,0.16)",null,"0px 4px 12px rgba(60,64,67,0.24)",null,null,"1px solid #dadce0","none","none","none"]',
    hERdX: '%.@."#fff","8px","1px solid #dadce0"]',
    IkSsrf:
      '%.@."Google Sans,arial,sans-serif","Google Sans,arial,sans-serif-medium,sans-serif","arial,sans-serif","arial,sans-serif-medium,sans-serif","arial,sans-serif-light,sans-serif"]',
    OItNqf: '%.@."1px"]',
    JMyuH:
      '%.@."center","flex-start","column","row","flex","1 1 100%","1 1 calc(50% - 4px)","wrap","center","flex-start","1","0","left","space-between","100%"]',
    e2zoW: '%.@."16px","12px","0px","8px","4px","2px","20px","24px","48px"]',
    W1Bte:
      '%.@."cubic-bezier(0.1,1,0.2,1)","cubic-bezier(0.8,0,1,0.8)","cubic-bezier(0.2,0.6,0.2,1)","cubic-bezier(0.4,0,1,0.8)","300","100ms","200ms","250ms","cubic-bezier(0.4,0,0.2,1)"]',
    u9mep: '%.@."#1a0dab","#1a0dab"]',
    k7Tqye:
      '%.@.null,null,null,null,null,null,null,"16px","12px","8px","20px","4px","999rem","0px","2px"]',
    MexNte:
      '%.@."700","400","underline","none","capitalize","none","uppercase","none","500","lowercase","italic",null,null,"-1px","0.3px"]',
    Aahcnf:
      '%.@."24px","32px","500","Google Sans,arial,sans-serif",null,"arial,sans-serif","14px","400","22px",null,"16px","24px","400","Google Sans,arial,sans-serif",null,"Google Sans,arial,sans-serif","60px","48px","-1px",null,"400","Google Sans,arial,sans-serif","36px","400","48px",null,"Google Sans,arial,sans-serif","36px","28px",null,"400",null,"arial,sans-serif","24px","18px",null,"400","arial,sans-serif","16px","12px",null,"400","arial,sans-serif","22px","16px",null,"400","arial,sans-serif","26px","20px",null,"400","Google Sans,arial,sans-serif","20px","16px",null,"400","arial,sans-serif","18px","14px",null,"400","Google Sans,arial,sans-serif","32px","24px",null,"500","14px","Google Sans,arial,sans-serif-medium,sans-serif","20px","500","Google Sans,arial,sans-serif","26px","22px","400","Google Sans,arial,sans-serif","24px","16px","400","arial,sans-serif-medium,sans-serif","12px","12px","Google Sans,arial,sans-serif","26px","20px","400"]',
    PFhmed: '%.@."rgba(255,255,255,0)"]',
    mf1yif: "%.@.4]",
    aKXqGc:
      '%.@."14px",14,"16px",16,"0",0,"none",652,"1px solid #dadce0","normal","normal","#70757a","12px","1.34","1px solid #dadce0","none","0","none","none","none","none","6px","652px"]',
    ZP0oif: '%.@."16px"]',
    o0P8Hf:
      '%.@."rgba(0,0,0,0.0)",null,null,null,"#202124","#dadce0",null,null,null,"#f8f9fa","#000","#1a73e8","#dadce0","#fff","#fff",null,"#70757a","rgba(0,0,0,0.26)","rgba(0,0,0,0.2)","rgba(0,0,0,0.5)","rgba(0,0,0,0.2)","#fff","rgba(0,0,0,0.1)","#fff","#70757a",null,"#000","#fff","#000","rgba(0,0,0,0.0)","rgba(255,255,255,0.5)","rgba(0,0,0,.03)","rgba(0,0,0,0.3)","rgba(0,0,0,0.2)","rgba(0,0,0,0.5)","rgba(0,0,0,.07)","rgba(0,0,0,.04)","rgba(0,0,0,.26)","rgba(255,255,255,.54)","#70757a","#70757a","rgba(0,0,0,.22)","rgba(0,0,0,.30)","rgba(0,0,0,.06)","rgba(0,0,0,.25)","#d2e3fc","rgba(32,33,36,.5)","rgba(32,33,36,.7)","rgba(255,255,255,.04)",null,null,"rgba(255,255,255,.8)","rgba(60,64,67,.15)","rgba(0,0,0,.07)","rgba(0,0,0,.16)","rgba(0,0,0,.08)","rgba(0,0,0,.14)","rgba(0,0,0,.12)","rgba(0,0,0,.28)","rgba(0,0,0,.18)","rgba(0,0,0,.24)","rgba(0,0,0,.05)","rgba(0,0,0,.13)","rgba(60,64,67,.3)","rgba(0,0,0,.36)","rgba(0,0,0,.15)","rgba(32,33,36,.28)","rgba(218,220,224,.7)","#dadce0","#fff","#fff","#1a73e8","#000","rgba(0,0,0,.0)","#202124","rgba(0,0,0,.8)","rgba(26,115,232,0)","rgba(26,115,232,.7)","rgba(66,133,244,.22)","rgba(32,33,36,.7)","rgba(0,0,0,.8)","rgba(255,255,255,.54)","rgba(255,255,255,.87)","rgba(60,64,67,.38)","rgba(0,0,0,.8)","rgba(255,255,255,.54)","rgba(255,255,255,.87)","rgba(60,64,67,.38)","rgba(255,255,255,.3)","rgba(0,0,0,0.54)","rgba(0,0,0,0.8)","rgba(248,249,250,0.85)","#dadce0","#ea4335","#34a853","#3c4043","#f8f9fa","#3c4043","#202124",{"100":"#f8f9fa","101":"#dadce0","102":"#3c4043","103":"#202124","104":"#f8f9fa","105":"#dadce0","106":"#70757a","107":"#3c4043","108":"#f8f9fa","109":"#3c4043","110":"#202124","111":"#f8f9fa","112":"#dadce0","113":"#e8f0fe","114":"#4285f4","115":"#e8f0fe","116":"#d2e3fc","117":"#4285f4","118":"#1a73e8","119":"#e8f0fe","120":"#d2e3fc","121":"#4285f4","122":"#1a73e8","123":"#d2e3fc","124":"#4285f4","125":"#1a73e8","126":"#e8f0fe","127":"#d2e3fc","128":"#4285f4","129":"#1a73e8","130":"#fce8e6","131":"#fad2cf","132":"#f28b82","133":"#ee675c","134":"#d93025","135":"#c5221f","136":"#a50e0e","137":"#ea4335","138":"#d93025","139":"#ea4335","140":"#d93025","141":"#c5221f","142":"#b31412","143":"#a50e0e","144":"#d93025","145":"#f28b82","146":"#ee675c","147":"#ea4335","148":"#c5221f","149":"#a50e0e","150":"#fef7e0","151":"#feefc3","152":"#fde293","153":"#fdd663","154":"#fcc934","155":"#fbbc04","156":"#f9ab00","157":"#f29900","158":"#ea8600","159":"#e37400","160":"#fbbc04","161":"#fbbc04","162":"#f29900","163":"#fdd663","164":"#fbbc04","165":"#fcc934","166":"#fbbc04","167":"#f9ab00","168":"#f29900","169":"#ea8600","170":"#e37400","171":"#e6f4ea","172":"#ceead6","173":"#a8dab5","174":"#81c995","175":"#5bb974","176":"#1e8e3e","177":"#188038","178":"#34a853","179":"#1e8e3e","180":"#188038","181":"#34a853","182":"#1e8e3e","183":"#ceead6","184":"#a8dab5","185":"#34a853","186":"#81c995","187":"#34a853","188":"#1e8e3e","189":"#188038","190":"#137333","191":"#0d652d","192":"rgba(0,0,0,.1)","193":"rgba(0,0,0,.2)","194":"rgba(60,64,67,.1)","195":"rgba(60,64,67,.06)"}]',
    WiLzZe:
      '%.@."#202124","#70757a","#4d5156","#5f6368","#fff","rgba(255,255,255,.70)",28,24,26,20,16,-2,0,-4,2,0,0,24,20,20,14,12]',
    AYkLRe: '%.@."20px",20,"14px",14,"\\"rgba(0, 0, 0, .87)\\""]',
    rNyuJc: "hoangnhatlinh1998@gmail.com",
    LU5fGb: true,
    gXkHoe: "111421199497302122238",
    hevonc: "%.@.1]",
    xcljyb:
      '%.@."8px",8,"Inter-Medium,HelveticaNeue-Medium,Helvetica Neue,sans-serif-medium,Arial,sans-serif"]',
  };
})();
(function () {
  google.llio = true;
  google.llirm = "400px";
  google.ldi = {};
  google.pim = {};
})();
(function () {
  var a = google.ldi || {},
    b;
  for (b in a)
    if (a.hasOwnProperty(b)) {
      var c =
        document.getElementById(b) ||
        document.documentElement.querySelector('img[data-iid="' + b + '"]');
      c && Number(c.getAttribute("data-atf")) & 1 && (c.src = a[b]);
    }
}).call(this);
window.jsl = window.jsl || {};
window.jsl.dh = function (a, b, f) {
  try {
    var g = document.getElementById(a);
    if (g) (g.innerHTML = b), f && f();
    else {
      var c = {
        id: a,
        script: String(!!f),
        milestone: String(google.jslm || 0),
      };
      google.jsla && (c.async = google.jsla);
      var h = a.indexOf("_"),
        d = 0 < h ? a.substring(0, h) : "",
        k = document.createElement("div");
      k.innerHTML = b;
      var e = k.children[0];
      if (
        e &&
        ((c.tag = e.tagName),
        (c["class"] = String(e.className || null)),
        (c.name = String(e.getAttribute("jsname"))),
        d)
      ) {
        a = [];
        var l = document.querySelectorAll('[id^="' + d + '_"]');
        for (b = 0; b < l.length; ++b) a.push(l[b].id);
        c.ids = a.join(",");
      }
      google.ml(Error(d ? "Missing ID with prefix " + d : "Missing ID"), !1, c);
    }
  } catch (m) {
    google.ml(m, !0, { "jsl.dh": !0 });
  }
};
(function () {
  var x = true;
  google.jslm = x ? 2 : 1;
})();
google.x(null, function () {
  (function () {
    (function () {
      google.csct = {};
      google.csct.ps =
        "AOvVaw1uyqsbtmxX01nRCbBLGQQd\x26ust\x3d1661055708390896";
    })();
  })();
  (function () {
    (function () {
      google.csct.rl = true;
    })();
  })();
  (function () {
    (function () {
      google.csct.pi = true;
    })();
  })();
  (function () {
    google.drty && google.drty(undefined, true);
  })();
});
google.drty && google.drty(undefined, true);
