const assetsPath = "/doodle-football/assets/";

function mapValue(x, range1, range2) {
  let [min1, max1] = range1;
  let [min2, max2] = range2;
  return ((x - min1) * (max2 - min2)) / (max1 - min1) + min2;
}

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

window.google = {};
(function () {
  var aa = this,
    ba = function (a) {
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
    ca = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    da = function (a, b, c) {
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
    ea = function (a, b, c) {
      ea =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? ca
          : da;
      return ea.apply(null, arguments);
    },
    ga = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b);
      };
    },
    ha =
      Date.now ||
      function () {
        return +new Date();
      },
    ia = function (a, b) {
      var c = a.split("."),
        d = aa;
      c[0] in d || !d.execScript || d.execScript("var " + c[0]);
      for (var e; c.length && (e = c.shift()); )
        c.length || void 0 === b
          ? d[e]
            ? (d = d[e])
            : (d = d[e] = {})
          : (d[e] = b);
    },
    ja = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.L = b.prototype;
      a.prototype = new c();
      a.oa = function (a, c, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h];
        return b.prototype[c].apply(a, g);
      };
    };
  var ka = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
        },
    la = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var ma = Array.prototype,
    na = ma.indexOf
      ? function (a, b, c) {
          return ma.indexOf.call(a, b, c);
        }
      : function (a, b, c) {
          c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
          if ("string" == typeof a)
            return "string" == typeof b && 1 == b.length ? a.indexOf(b, c) : -1;
          for (; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        };
  var oa =
      "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " ",
      ),
    pa = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < oa.length; f++)
          (c = oa[f]),
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    };
  var l;
  o: {
    var qa = aa.navigator;
    if (qa) {
      var ra = qa.userAgent;
      if (ra) {
        l = ra;
        break o;
      }
    }
    l = "";
  }
  var sa = -1 != l.indexOf("Opera") || -1 != l.indexOf("OPR"),
    m = -1 != l.indexOf("Trident") || -1 != l.indexOf("MSIE"),
    ta =
      -1 != l.indexOf("Gecko") &&
      -1 == l.toLowerCase().indexOf("webkit") &&
      !(-1 != l.indexOf("Trident") || -1 != l.indexOf("MSIE")),
    ua = -1 != l.toLowerCase().indexOf("webkit"),
    va = function () {
      var a = aa.document;
      return a ? a.documentMode : void 0;
    },
    wa = (function () {
      var a = "",
        b;
      if (sa && aa.opera)
        return (a = aa.opera.version), "function" == ba(a) ? a() : a;
      ta
        ? (b = /rv\:([^\);]+)(\)|;)/)
        : m
          ? (b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/)
          : ua && (b = /WebKit\/(\S+)/);
      b && (a = (a = b.exec(l)) ? a[1] : "");
      return m && ((b = va()), b > parseFloat(a)) ? String(b) : a;
    })(),
    xa = {},
    n = function (a) {
      var b;
      if (!(b = xa[a])) {
        b = 0;
        for (
          var c = ka(String(wa)).split("."),
            d = ka(String(a)).split("."),
            e = Math.max(c.length, d.length),
            f = 0;
          0 == b && f < e;
          f++
        ) {
          var g = c[f] || "",
            h = d[f] || "",
            k = RegExp("(\\d*)(\\D*)", "g"),
            t = RegExp("(\\d*)(\\D*)", "g");
          do {
            var q = k.exec(g) || ["", "", ""],
              D = t.exec(h) || ["", "", ""];
            if (0 == q[0].length && 0 == D[0].length) break;
            b =
              la(
                0 == q[1].length ? 0 : parseInt(q[1], 10),
                0 == D[1].length ? 0 : parseInt(D[1], 10),
              ) ||
              la(0 == q[2].length, 0 == D[2].length) ||
              la(q[2], D[2]);
          } while (0 == b);
        }
        b = xa[a] = 0 <= b;
      }
      return b;
    },
    ya = aa.document,
    za =
      ya && m
        ? va() || ("CSS1Compat" == ya.compatMode ? parseInt(wa, 10) : 5)
        : void 0;
  var Ca = function (a) {
      var b = new Image(),
        c = Aa,
        d = "";
      b.onerror =
        b.onload =
        b.onabort =
          function () {
            delete Ba[c];
          };
      Ba[c] = b;
      -1 != a.search("&ei=") || (d = "&ei=");
      a = "/gen_204?atyp=i&ct=doodle&cad=" + a + d + "&zx=" + ha();
      /^http:/i.test(a) && "https:" == window.location.protocol
        ? delete Ba[c]
        : ((b.src = a), (Aa = c + 1));
    },
    Ba = [],
    Aa = 0;
  var Da,
    Ea = 0 <= navigator.userAgent.indexOf("MSIE"),
    Ga = function (a) {
      for (var b = Fa, c = 0; c < b.length; c++) if (a === b[c]) return !0;
      return !1;
    },
    Ia = function () {
      var a = canvas;
      a.getContext("2d").clearRect(0, 0, a.width, a.height);
    },
    p = function (a, b, c) {
      a = document.createElement(a);
      b && (a.id = b);
      c && (a.className = c);
      return a;
    },
    Ja = function () {
      var a =
        (window.localStorage &&
          window.localStorage.getItem("doodle-soccer-tooltip")) ||
        null;
      return a ? parseFloat(a) : null;
    },
    Ka = function (a, b, c) {
      return b + Math.min(1, Math.max(0, a)) * (c - b);
    },
    La = function () {
      var a = ["Fredoka+One::latin"];
      window.WebFontConfig ||
        (ia("WebFontConfig.google.families", a),
        (a = document.createElement("script")),
        (a.src =
          ("https:" == document.location.protocol ? "https" : "http") +
          "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"),
        (a.type = "text/javascript"),
        (a.async = "true"),
        (document.getElementById("xjsc") || document.body).appendChild(a));
    },
    Ma = function (a, b) {
      var c = a / b;
      return a - (0 > c ? Math.ceil(c) : Math.floor(c)) * b;
    },
    Na = function (a) {
      window.localStorage &&
        window.localStorage.setItem("doodle-soccer-tooltip", a);
    },
    Oa = function (a) {};
  var r = function () {
      this.o = this.i = 0;
      this.k = [];
      this.p = 0;
    },
    Pa = !1;
  r.prototype.play = function () {
    if (!Pa) {
      Qa(this);
      this.o = 0;
      this.p = ha();
      var a = this;
      this.i = window.setInterval(function () {
        Ra(a);
      }, 16);
      Ra(this);
    }
  };
  var u = function (a, b, c) {
      a.k.push({ duration: c || 0, M: b });
    },
    Ta = function (a) {
      Sa.k.splice(9, 0, { duration: 0, M: a });
    },
    Qa = function (a) {
      if (a.i) {
        for (var b; (b = a.k[a.o++]); ) b.M(1);
        Ua(a);
      }
    },
    Ua = function (a) {
      a.i && (window.clearInterval(a.i), (a.i = 0));
    },
    Va = function (a, b) {
      u(a, function () {}, b);
    },
    Ra = function (a) {
      var b = ha();
      if (Pa) Ua(a);
      else {
        for (var c; (c = a.k[a.o]); a.o++) {
          if (!a.i) return;
          var d = b - a.p;
          if (d < c.duration) {
            c.M(d / c.duration);
            return;
          }
          c.M(1);
          0 < c.duration && (a.p += c.duration);
        }
        Qa(a);
      }
    };
  var Wa = function (a, b, c, d, e, f, g, h) {
    this.ma = function () {
      this.J = this.A = 0;
      this.ia = "source-over";
      this.F = this.frame = 0;
      this.R = g || 0;
      this.S = h || 0;
      this.o = this.k = this.i = 1;
      this.V = this.U = 0;
      this.s = f;
      this.p = e;
      this.aa = c || 0;
      this.ba = d || 0;
      this.H = this.D = null;
      this.y = this.x = 0;
      this.T = a;
      this.X = this.la = this.W = this.ka = 0;
      this.B = a.getContext("2d");
      this.C = null;
      this.w = b;
    };
    this.ma();
  };
  Wa.prototype.clone = function () {
    var a = new Wa(
      this.T,
      this.w,
      this.aa,
      this.ba,
      this.p,
      this.s,
      this.R,
      this.S,
    );
    a.J = this.J;
    a.A = this.A;
    a.frame = this.frame;
    a.F = this.F;
    a.i = this.i;
    a.k = this.k;
    a.o = this.o;
    a.U = this.U;
    a.V = this.V;
    a.D = this.D;
    a.H = this.H;
    a.x = this.x;
    a.y = this.y;
    return a;
  };
  var Xa = function (a, b, c) {
    var d = new r(),
      e = c / b,
      f = function (a, b) {
        return function () {
          a.frame = b;
        };
      };
    for (c = 0; c < b; c++) u(d, f(a, c), e);
    return d;
  };
  Wa.prototype.v = function () {
    if ((!this.w.complete && "complete" != this.w.readyState) || !this.i)
      return !1;
    this.p || (this.p = this.w.width);
    this.s || (this.s = this.w.height);
    var a = v(this),
      b = w(this);
    if (!a || !b) return !1;
    var c = this.A ? 0.2071 * Math.max(a, b) : 0,
      d = this.x + this.R * this.k,
      e = this.y + this.S * this.o;
    if (
      0 >= d + a + c ||
      0 >= e + b + c ||
      d - c > this.T.width ||
      e - c > this.T.height
    )
      return !1;
    this.B.save();
    this.B.globalAlpha = this.i;
    this.B.globalCompositeOperation = this.ia;
    e = this.A;
    this.J && (e += this.J * (Math.random() - 0.5));
    c = 0;
    d = 1;
    e && ((c = Math.sin(e)), (d = Math.cos(e)));
    var f = (0 > this.k ? -a : a) / 2,
      g = (0 > this.o ? -b : b) / 2,
      e = this.x + f - d * f + c * g,
      f = this.y + g - d * g - c * f;
    this.F &&
      ((e += this.F * (Math.random() - 0.5)),
      (f += this.F * (Math.random() - 0.5)));
    0 > this.k && (e += a);
    0 > this.o && (f += b);
    var g = this.U / b,
      h = this.V / a;
    this.B.transform(
      this.k * (d - h * c),
      this.k * (h * d + c),
      this.o * (g * d - c),
      this.o * (d + g * c),
      e,
      f,
    );
    try {
      if (this.H || this.D)
        for (
          var k = Math.abs(this.p * this.k),
            t = Math.abs(this.s * this.o),
            q = Math.ceil(a / k),
            D = Math.ceil(b / t),
            fa = Ma(a, k) || k,
            ab = Ma(b, t) || t,
            a = 0;
          a < D;
          a++
        )
          for (b = 0; b < q; b++)
            Ya(
              this,
              b * this.p,
              a * this.s,
              b == q - 1 ? fa : this.p,
              a == D - 1 ? ab : this.s,
            );
      else Ya(this, 0, 0, this.p, this.s);
    } catch (Eb) {}
    this.B.restore();
    return !0;
  };
  var $a = function (a, b, c) {
      var d;
      void 0 == d && (d = a.i);
      d == c
        ? (a.i = c)
        : (a.C && Qa(a.C), (a.C = new r()), u(a.C, Za(a, d, c), b), a.C.play());
    },
    w = function (a) {
      if (void 0 != a.D) return a.D;
      a.s || (a.s = a.w.height);
      return a.s * Math.abs(a.o);
    },
    v = function (a) {
      if (void 0 != a.H) return a.H;
      a.p || (a.p = a.w.width);
      return a.p * Math.abs(a.k);
    },
    Za = function (a, b, c) {
      return function (d) {
        a.i = Ka(d, b, c);
      };
    },
    Ya = function (a, b, c, d, e) {
      var f = a.aa + a.W,
        g = a.ba + a.X;
      d = d - a.la - a.W;
      e = e - a.ka - a.X;
      0 > d ||
        0 > e ||
        a.B.drawImage(
          a.w,
          f + a.frame * a.p,
          g,
          d,
          e,
          a.W + a.R + b,
          a.X + a.S + c,
          d,
          e,
        );
    };
  var bb = {},
    cb = { ra: 0, va: 1, xa: 2, qa: 3, ta: 4, wa: 5, pa: 6 };
  bb.Q = null;
  var db = [],
    x = {},
    eb = 0,
    fb = null,
    gb = null,
    hb = !1,
    y = function (a, b) {
      return a.buttons[b] && 0.5 < a.buttons[b];
    },
    z = function (a, b, c) {
      return "undefined" == typeof a.axes[b]
        ? !1
        : c
          ? -0.75 > a.axes[b]
          : 0.75 < a.axes[b];
    },
    jb = function (a) {
      bb.Q = a.gamepad;
      hb || ((hb = !0), ib());
    },
    kb = function () {
      delete bb.Q;
      hb = !1;
    },
    ib = function () {
      var a;
      if (bb.Q) a = bb.Q;
      else {
        var b =
          (navigator.getGamepads && navigator.getGamepads()) ||
          (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) ||
          navigator.webkitGamepads;
        a = (b && (b[3] || b[2] || b[1] || b[0])) || null;
      }
      if (a && (!a.timestamp || a.timestamp != eb)) {
        eb = a.timestamp;
        b = [];
        b[0] = y(a, 14) || z(a, 0, !0) || z(a, 2, !0);
        b[1] = y(a, 15) || z(a, 0, !1) || z(a, 2, !1);
        b[2] = y(a, 12) || z(a, 1, !0) || z(a, 3, !0);
        b[3] = y(a, 13) || z(a, 1, !1) || z(a, 3, !1);
        b[4] = y(a, 0) || y(a, 4) || y(a, 6) || y(a, 8) || y(a, 9) || y(a, 10);
        b[5] = y(a, 1) || y(a, 5) || y(a, 7) || y(a, 11);
        b[6] = y(a, 2) || y(a, 3);
        if (db.length)
          for (var c in cb) {
            a = cb[c];
            var d = b[a];
            if ("undefined" != typeof d && d != db[a] && x[a]) {
              gb && gb();
              var e = document.createEvent("Event");
              e.initEvent(d ? "keydown" : "keyup", !0, !0);
              e.keyCode = x[a];
              fb.dispatchEvent(e);
            }
          }
        db = b;
      }
      hb &&
        (window.requestAnimationFrame
          ? window.requestAnimationFrame(ib)
          : window.oRequestAnimationFrame
            ? window.oRequestAnimationFrame(ib)
            : window.mozRequestAnimationFrame
              ? window.mozRequestAnimationFrame(ib)
              : window.msRequestAnimationFrame
                ? window.msRequestAnimationFrame(ib)
                : window.webkitRequestAnimationFrame &&
                  window.webkitRequestAnimationFrame(ib));
    },
    lb = function (a) {
      fb = gameElement;
      gb = a || null;
      window.addEventListener &&
        (window.addEventListener("MozGamepadConnected", jb, !1),
        window.addEventListener("MozGamepadDisconnected", kb, !1));
      (!navigator.webkitGamepads && !navigator.webkitGetGamepads) ||
        hb ||
        ((hb = !0), ib());
    };
  var mb = function (a, b) {
      google &&
        google.doodle &&
        (b && (google.doodle.cpDestroy = b),
        (google.doodle.cpInit = function () {
          b && b();
          a();
        }));
    },
    nb = function (a, b, c) {
      if (google) {
        var d = function () {
            var a = google.msg && google.msg.unlisten;
            a && (a(106, d), c && a(94, c));
            b();
            return !0;
          },
          e = function () {
            var a = document.getElementById("hplogo");
            a &&
              "hidden" != a.style.visibility &&
              ((a = google.msg && google.msg.listen),
              google.na && google.na.q && a && (a(106, d), c && a(94, c)));
          };
        e();
      }
    };
  var ob = function (a) {
      this.p = a;
      this.k = !1;
      this.o = [];
      this.i = new Image();
    },
    pb = function (a) {
      if (!a.i.src) {
        var b = function () {
          if (!a.k) {
            a.k = !0;
            for (var b = 0, d; (d = a.o[b]); b++) d();
          }
        };
        a.i.onload = b;
        a.i.src = a.p;
        (a.i.complete || "complete" == a.i.readyState) && b();
      }
    },
    qb = function (a, b) {
      a.k ? b() : a.o.push(b);
    };
  var rb = function (a, b) {
      this.i = b;
      this.k = new ob(a);
      this.o = !1;
      var c = this;
      qb(this.k, function () {
        c.o = !0;
      });
    },
    sb = function (a, b) {
      b && qb(a.k, b);
      pb(a.k);
    };
  rb.prototype.v = function (a, b, c, d, e, f) {
    var g = this.i[a];
    tb(this, a, b, 0, 0, g[2], g[3], c, d, e, f);
  };
  var tb = function (a, b, c, d, e, f, g, h, k, t, q) {
    if (a.o) {
      var D = a.i[b],
        fa = t || 1,
        ab = f * fa,
        fa = g * fa,
        Eb = q || !1;
      c.drawImage(
        a.k.i,
        D[0] + d,
        D[1] + e,
        f,
        g,
        h - (Eb ? ab / 2 : 0),
        k - (Eb ? fa / 2 : 0),
        ab,
        fa,
      );
    } else
      sb(a, function () {
        tb(a, b, c, d, e, f, g, h, k, t, q);
      });
  };
  var ub = function (a) {
    ub[" "](a);
    return a;
  };
  ub[" "] = function () {};
  var vb;
  (vb = !m) || (vb = m && 9 <= za);
  var wb = vb,
    xb = m && !n("9");
  !ua || n("528");
  (ta && n("1.9b")) || (m && n("8")) || (sa && n("9.5")) || (ua && n("528"));
  (ta && !n("8")) || (m && n("9"));
  var yb = function () {
    this.o = this.o;
    this.k = this.k;
  };
  yb.prototype.o = !1;
  yb.prototype.$ = function () {
    this.o || ((this.o = !0), this.i());
  };
  yb.prototype.i = function () {
    if (this.k) for (; this.k.length; ) this.k.shift()();
  };
  var zb = function (a) {
    a && "function" == typeof a.$ && a.$();
  };
  var B = function (a, b) {
    this.type = a;
    this.k = this.p = b;
    this.o = !1;
    this.ea = !0;
  };
  B.prototype.$ = function () {};
  B.prototype.A = function () {
    this.o = !0;
  };
  B.prototype.w = function () {
    this.ea = !1;
  };
  var C = function (a, b) {
    B.call(this, a ? a.type : "");
    this.k = this.p = null;
    this.s = this.clientY = this.clientX = this.Z = this.Y = 0;
    this.i = this.state = null;
    if (a) {
      this.i = a;
      this.type = a.type;
      this.p = a.target || a.srcElement;
      this.k = b;
      var c = a.relatedTarget;
      if (c && ta)
        try {
          ub(c.nodeName);
        } catch (d) {}
      Object.defineProperties
        ? Object.defineProperties(this, {
            Y: { configurable: !0, enumerable: !0, get: this.B, set: this.F },
            Z: { configurable: !0, enumerable: !0, get: this.C, set: this.D },
          })
        : ((this.Y = this.B()), (this.Z = this.C()));
      this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
      this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
      this.s = a.keyCode || 0;
      this.state = a.state;
      a.defaultPrevented && this.w();
    }
  };
  ja(C, B);
  C.prototype.A = function () {
    C.L.A.call(this);
    this.i.stopPropagation
      ? this.i.stopPropagation()
      : (this.i.cancelBubble = !0);
  };
  C.prototype.w = function () {
    C.L.w.call(this);
    var a = this.i;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), xb))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  C.prototype.B = function () {
    return ua || void 0 !== this.i.offsetX ? this.i.offsetX : this.i.layerX;
  };
  C.prototype.F = function (a) {
    Object.defineProperties(this, {
      Y: { writable: !0, enumerable: !0, configurable: !0, value: a },
    });
  };
  C.prototype.C = function () {
    return ua || void 0 !== this.i.offsetY ? this.i.offsetY : this.i.layerY;
  };
  C.prototype.D = function (a) {
    Object.defineProperties(this, {
      Z: { writable: !0, enumerable: !0, configurable: !0, value: a },
    });
  };
  var Ab = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    Bb = 0;
  var Cb = function (a, b, c, d, e) {
      this.I = a;
      this.i = null;
      this.src = b;
      this.type = c;
      this.N = !!d;
      this.P = e;
      this.ha = ++Bb;
      this.K = this.O = !1;
    },
    Db = function (a) {
      a.K = !0;
      a.I = null;
      a.i = null;
      a.src = null;
      a.P = null;
    };
  var Fb = function (a) {
      this.src = a;
      this.i = {};
      this.k = 0;
    },
    Hb = function (a, b, c, d, e) {
      var f = b.toString();
      b = a.i[f];
      b || ((b = a.i[f] = []), a.k++);
      var g = Gb(b, c, d, e);
      -1 < g
        ? ((a = b[g]), (a.O = !1))
        : ((a = new Cb(c, a.src, f, !!d, e)), (a.O = !1), b.push(a));
      return a;
    },
    Ib = function (a, b) {
      var c = b.type;
      if (!(c in a.i)) return !1;
      var d = a.i[c],
        e = na(d, b),
        f;
      (f = 0 <= e) && ma.splice.call(d, e, 1);
      f && (Db(b), 0 == a.i[c].length && (delete a.i[c], a.k--));
      return f;
    },
    Jb = function (a, b, c, d, e) {
      a = a.i[b.toString()];
      b = -1;
      a && (b = Gb(a, c, d, e));
      return -1 < b ? a[b] : null;
    },
    Gb = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.K && f.I == b && f.N == !!c && f.P == d) return e;
      }
      return -1;
    };
  var Kb = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Lb = {},
    Mb = 0,
    Nb = function (a, b, c, d, e) {
      if ("array" == ba(b)) {
        for (var f = 0; f < b.length; f++) Nb(a, b[f], c, d, e);
        return null;
      }
      c = Ob(c);
      if (a && a[Ab]) a = a.listen(b, c, d, e);
      else {
        if (!b) throw Error("b");
        var f = !!d,
          g = Pb(a);
        g || (a[Kb] = g = new Fb(a));
        c = Hb(g, b, c, d, e);
        c.i ||
          ((d = Qb()),
          (c.i = d),
          (d.src = a),
          (d.I = c),
          a.addEventListener
            ? a.addEventListener(b.toString(), d, f)
            : a.attachEvent(Rb(b.toString()), d),
          Mb++);
        a = c;
      }
      return a;
    },
    Qb = function () {
      var a = Sb,
        b = wb
          ? function (c) {
              return a.call(b.src, b.I, c);
            }
          : function (c) {
              c = a.call(b.src, b.I, c);
              if (!c) return c;
            };
      return b;
    },
    Tb = function (a, b, c, d, e) {
      if ("array" == ba(b))
        for (var f = 0; f < b.length; f++) Tb(a, b[f], c, d, e);
      else
        (c = Ob(c)),
          a && a[Ab]
            ? a.unlisten(b, c, d, e)
            : a && (a = Pb(a)) && (b = Jb(a, b, c, !!d, e)) && Ub(b);
    },
    Ub = function (a) {
      if ("number" == typeof a || !a || a.K) return !1;
      var b = a.src;
      if (b && b[Ab]) return Ib(b.G, a);
      var c = a.type,
        d = a.i;
      b.removeEventListener
        ? b.removeEventListener(c, d, a.N)
        : b.detachEvent && b.detachEvent(Rb(c), d);
      Mb--;
      (c = Pb(b))
        ? (Ib(c, a), 0 == c.k && ((c.src = null), (b[Kb] = null)))
        : Db(a);
      return !0;
    },
    Rb = function (a) {
      return a in Lb ? Lb[a] : (Lb[a] = "on" + a);
    },
    Wb = function (a, b, c, d) {
      var e = !0;
      if ((a = Pb(a)))
        if ((b = a.i[b.toString()]))
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.N == c && !f.K && ((f = Vb(f, d)), (e = e && !1 !== f));
          }
      return e;
    },
    Vb = function (a, b) {
      var c = a.I,
        d = a.P || a.src;
      a.O && Ub(a);
      return c.call(d, b);
    },
    Sb = function (a, b) {
      if (a.K) return !0;
      if (!wb) {
        var c;
        if (!(c = b))
          o: {
            c = ["window", "event"];
            for (var d = aa, e; (e = c.shift()); )
              if (null != d[e]) d = d[e];
              else {
                c = null;
                break o;
              }
            c = d;
          }
        e = c;
        c = new C(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
          o: {
            var f = !1;
            if (0 == e.keyCode)
              try {
                e.keyCode = -1;
                break o;
              } catch (g) {
                f = !0;
              }
            if (f || void 0 == e.returnValue) e.returnValue = !0;
          }
          e = [];
          for (f = c.k; f; f = f.parentNode) e.push(f);
          for (var f = a.type, h = e.length - 1; !c.o && 0 <= h; h--) {
            c.k = e[h];
            var k = Wb(e[h], f, !0, c),
              d = d && k;
          }
          for (h = 0; !c.o && h < e.length; h++)
            (c.k = e[h]), (k = Wb(e[h], f, !1, c)), (d = d && k);
        }
        return d;
      }
      return Vb(a, new C(b, this));
    },
    Pb = function (a) {
      a = a[Kb];
      return a instanceof Fb ? a : null;
    },
    Xb = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    Ob = function (a) {
      if ("function" == ba(a)) return a;
      a[Xb] ||
        (a[Xb] = function (b) {
          return a.handleEvent(b);
        });
      return a[Xb];
    };
  var E = function () {
    yb.call(this);
    this.G = new Fb(this);
    this.B = this;
    this.s = null;
  };
  ja(E, yb);
  E.prototype[Ab] = !0;
  E.prototype.removeEventListener = function (a, b, c, d) {
    Tb(this, a, b, c, d);
  };
  var Zb = function (a, b) {
    var c,
      d = a.s;
    if (d) for (c = []; d; d = d.s) c.push(d);
    var d = a.B,
      e = b,
      f = e.type || e;
    if ("string" == typeof e) e = new B(e, d);
    else if (e instanceof B) e.p = e.p || d;
    else {
      var g = e,
        e = new B(f, d);
      pa(e, g);
    }
    var g = !0,
      h;
    if (c)
      for (var k = c.length - 1; !e.o && 0 <= k; k--)
        (h = e.k = c[k]), (g = Yb(h, f, !0, e) && g);
    e.o ||
      ((h = e.k = d),
      (g = Yb(h, f, !0, e) && g),
      e.o || (g = Yb(h, f, !1, e) && g));
    if (c)
      for (k = 0; !e.o && k < c.length; k++)
        (h = e.k = c[k]), (g = Yb(h, f, !1, e) && g);
    return g;
  };
  E.prototype.i = function () {
    E.L.i.call(this);
    if (this.G) {
      var a = this.G,
        b = 0,
        c;
      for (c in a.i) {
        for (var d = a.i[c], e = 0; e < d.length; e++) ++b, Db(d[e]);
        delete a.i[c];
        a.k--;
      }
    }
    this.s = null;
  };
  E.prototype.listen = function (a, b, c, d) {
    return Hb(this.G, String(a), b, c, d);
  };
  E.prototype.unlisten = function (a, b, c, d) {
    var e;
    e = this.G;
    a = String(a).toString();
    if (a in e.i) {
      var f = e.i[a];
      b = Gb(f, b, c, d);
      -1 < b
        ? (Db(f[b]),
          ma.splice.call(f, b, 1),
          0 == f.length && (delete e.i[a], e.k--),
          (e = !0))
        : (e = !1);
    } else e = !1;
    return e;
  };
  var Yb = function (a, b, c, d) {
    b = a.G.i[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.K && g.N == c) {
        var h = g.I,
          k = g.P || g.src;
        g.O && Ib(a.G, g);
        e = !1 !== h.call(k, d) && e;
      }
    }
    return e && 0 != d.ea;
  };
  var ac = function (a) {
    E.call(this);
    this.p = a;
    Nb(a, $b, this.A, !1, this);
    Nb(a, "click", this.w, !1, this);
  };
  ja(ac, E);
  var $b = ta ? "keypress" : "keydown";
  ac.prototype.A = function (a) {
    (13 == a.s || (ua && 3 == a.s)) && bc(this, a);
  };
  ac.prototype.w = function (a) {
    bc(this, a);
  };
  var bc = function (a, b) {
    var c = new cc(b);
    if (Zb(a, c)) {
      c = new dc(b);
      try {
        Zb(a, c);
      } finally {
        b.A();
      }
    }
  };
  ac.prototype.i = function () {
    ac.L.i.call(this);
    Tb(this.p, $b, this.A, !1, this);
    Tb(this.p, "click", this.w, !1, this);
    delete this.p;
  };
  var dc = function (a) {
    C.call(this, a.i);
    this.type = "action";
  };
  ja(dc, C);
  var cc = function (a) {
    C.call(this, a.i);
    this.type = "beforeaction";
  };
  ja(cc, C);
  var F = function (a) {
    yb.call(this);
    this.B = a;
    this.s = {};
  };
  ja(F, yb);
  var ec = [];
  F.prototype.listen = function (a, b, c, d) {
    "array" != ba(b) && (b && (ec[0] = b.toString()), (b = ec));
    for (var e = 0; e < b.length; e++) {
      var f = Nb(a, b[e], c || this.handleEvent, d || !1, this.B || this);
      if (!f) break;
      this.s[f.ha] = f;
    }
    return this;
  };
  F.prototype.unlisten = function (a, b, c, d, e) {
    if ("array" == ba(b))
      for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (e = e || this.B || this),
        (c = Ob(c)),
        (d = !!d),
        (b =
          a && a[Ab]
            ? Jb(a.G, String(b), c, d, e)
            : a
              ? (a = Pb(a))
                ? Jb(a, b, c, d, e)
                : null
              : null),
        b && (Ub(b), delete this.s[b.ha]);
    return this;
  };
  F.prototype.i = function () {
    F.L.i.call(this);
    var a = this.s,
      b = Ub,
      c;
    for (c in a) b.call(void 0, a[c], c, a);
    this.s = {};
  };
  F.prototype.handleEvent = function () {
    throw Error("c");
  };
  var fc = function (a, b, c, d, e) {
    F.call(this);
    this.D = a;
    this.J = b;
    this.F = c;
    this.C = d;
    e &&
      (this.p && this.unlisten(this.p, "action", this.w),
      e &&
        ((this.p = new ac(e)),
        (a = ga(zb, this.p)),
        this.o ? a.call(void 0) : (this.k || (this.k = []), this.k.push(a)),
        (this.w = ea(this.H, this)),
        this.listen(this.p, "action", this.w)));
  };
  ja(fc, F);
  fc.prototype.H = function () {};
  fc.prototype.A = function () {};
  var hc,
    ic,
    gameElement,
    jc,
    kc,
    lc,
    G,
    mc,
    nc,
    oc,
    pc,
    qc,
    rc,
    sc,
    tc,
    uc,
    vc,
    wc,
    xc,
    H,
    yc,
    zc,
    Ac,
    I,
    Bc,
    J,
    Fa = [32, 13],
    Cc = [],
    Dc = 0,
    Ec = !1,
    Fc = 0,
    Gc = [],
    Hc = !0,
    Ic = function () {
      var a = p("canvas", void 0);
      if (a) {
        a.style.width = "100%";
        a.style.position = "absolute";
        a.style.transform = "translateY(-50%)";
        a.style.top = "50%";
        a.height = 207;
        a.width = 530;
        gameElement.appendChild(a);
        var b = a.getContext("2d");
        b && b.fillRect(0, 0, 1, 1);
      }
      return a;
    },
    Mc = function () {
      var a = Jc,
        b = p("div", "hplogo_pc"),
        c = p("div", "hplogo_pb"),
        d = Kc(c, "hplogo_pbd");
      u(d, a);
      b.appendChild(c);
      b.onmousedown = function () {
        b.onmousedown = null;
        d.play();
      };
      b.style.display = "none";
      gameElement.appendChild(b);
      return b;
    },
    Tc = function () {
      var a = Nc,
        b = Oc(1),
        c = Oc(2) + " \u2014 " + Oc(0) + ": ";
      kc = "soccer";
      var gameLink = "";
      Pc("sprite-buttons.png");
      I = p("div", "hplogo_sc");
      ic = p("div", "hplogo_sb");
      hc = p("span", "hplogo_sbt", "hplogo_sse");
      ic.appendChild(hc);
      for (var e = 0; 3 > e; e++)
        (Gc[e] = p("div", "hplogo_sm")), ic.appendChild(Gc[e]);
      I.appendChild(ic);
      e = function (a) {
        a = p("div", a);
        I.appendChild(a);
        return a;
      };
      xc = e("hplogo_sr");
      zc = e("hplogo_ss");
      G = e("hplogo_sg");
      xc.title = Qc(0);
      zc.title = Qc(1);
      G.title = Qc(2);
      I.style.display = "none";
      pc = p("div", "hplogo_sle");
      pc.onmouseup = Rc;
      e = p("span", "", "hplogo_sse");
      e.textContent = gameLink;
      pc.appendChild(e);
      I.appendChild(pc);
      gameElement.appendChild(I);
      J = new r();
      u(J, function () {
        I.style.display = "";
        ic.style.opacity = 0;
        xc.style.opacity = 0;
        zc.style.opacity = 0;
        G.style.opacity = 0;
        pc.style.opacity = 0;
        xc.className = "";
        zc.className = "";
        G.className = "";
        Ea || Rc();
      });
      u(
        J,
        function (a) {
          I.style.opacity = a;
        },
        500,
      );
      Va(J, 200);
      u(
        J,
        function (a) {
          var b = ic;
          Lc(b, 0, Ka(a, 6, 0));
          b.style.opacity = a;
        },
        200,
      );
      Va(J, 200);
      u(
        J,
        function (a) {
          a *= 2;
          var b = xc,
            c = a;
          Lc(b, 8, Ka(c, 12, 0));
          b.style.opacity = c;
          b = zc;
          c = a - 0.5;
          Lc(b, 8, Ka(c, 12, 0));
          b.style.opacity = c;
          b = G;
          a = a - 1;
          Lc(b, 8, Ka(a, 12, 0));
          b.style.opacity = a;
        },
        500,
      );
      u(
        J,
        function (a) {
          // TODO: set opacity a to show game link
          pc.style.opacity = 0; // a
        },
        500,
      );
      u(J, function () {
        yc = !0;
      });
      H = Kc(xc, "hplogo_srd");
      u(H, function () {
        yc = !1;
        Hc || Ec || K();
        a();
      });
      u(
        H,
        function (a) {
          I.style.opacity = 1 - a;
        },
        200,
      );
      u(H, function () {
        I.style.display = "none";
      });
      xc.onmousedown = function () {
        location.search = "restart";
        yc && !H.i && H.play();
      };
      Ac = Kc(zc, "hplogo_ssd");
      u(Ac, function () {
        google.nav.go(google.doodle.url);
      });
      zc.onmousedown = function () {
        Ac.play();
      };
      mc = Kc(G, "hplogo_sgd", !0);
      G.onmousedown = function () {
        mc.play();
      };
      lc = new fc(gameLink, b, c, "", G);
      Bc = c;
    },
    Kc = function (a, b, c) {
      for (var d = new r(), e = 0; 2 >= e; e++) u(d, Uc(a, b + e)), Va(d, 16);
      if (c) {
        Va(d, 64);
        for (e = 2; 0 <= e; e--) u(d, Uc(a, b + e)), Va(d, 16);
        u(d, Uc(a, a.className));
      }
      return d;
    },
    Xc = function () {
      var a = Vc,
        b = Wc;
      Pa = !1;
      Hc = !a;
      jc = a;
      nc = ha();
      rc = b;
      gameElement = document.getElementById("hplogo");
      if (!gameElement) return !1;
      gameElement.innerHTML = "";
      return !0;
    },
    Pc = function (a) {
      var b = p("img");
      b.src = assetsPath + a;
      rc &&
        (b.complete || "complete" == b.readyState
          ? sc || (sc = window.setTimeout(Yc, 10))
          : ((b.onload = Zc), Dc++));
      return b;
    },
    K = function () {
      var a = ha(),
        b = a - nc;
      Ec ? (Cc.push(b), 30 < Cc.length && Cc.shift()) : (Cc = []);
      b = Math.min(40, b);
      yc || (oc && 18e4 < a - oc)
        ? (Ec = !1)
        : !Hc && jc(a, b)
          ? (window.requestAnimationFrame
              ? window.requestAnimationFrame(K, gameElement)
              : window.oRequestAnimationFrame
                ? window.oRequestAnimationFrame(K)
                : window.mozRequestAnimationFrame
                  ? window.mozRequestAnimationFrame(K)
                  : window.msRequestAnimationFrame
                    ? window.msRequestAnimationFrame(K)
                    : window.webkitRequestAnimationFrame
                      ? window.webkitRequestAnimationFrame(K, gameElement)
                      : window.setTimeout(K, 16),
            (nc = a),
            (Ec = !0))
          : (Ec = !1);
    },
    Uc = function (a, b) {
      return function () {
        a.className = b;
      };
    },
    $c = function () {
      oc = ha();
      Hc || Ec || yc || K();
    },
    ad = function (a) {
      $c();
      (37 == a.keyCode ||
        39 == a.keyCode ||
        38 == a.keyCode ||
        40 == a.keyCode ||
        Ga(a.keyCode)) &&
        a.preventDefault();
      yc && Ga(a.keyCode) && !H.i && H.play();
      qc && qc(a);
    },
    bd = function (a) {
      Ga(a.keyCode) && a.preventDefault();
    },
    Zc = function () {
      --Dc || rc();
    },
    Yc = function () {
      Dc || rc();
      sc = null;
    },
    onMouseDown = function (a) {
      tc = !0;
      $c();
      document.activeElement != gameElement || yc || a.preventDefault();
      uc && uc(a);
    },
    dd = function (a) {
      tc && vc && ((tc = !1), vc(a));
    },
    onMouseMove = function (a) {
      $c();
      wc && wc(a);
    },
    Rc = function () {
      window.getSelection().selectAllChildren(pc);
    },
    Lc = function (a, b, c) {
      a.style.margin = c + "px 0 0 " + b + "px";
    };
  var fd = {
      ALL: ["Play again", "Search", "Share on Google+"],
      af: ["Speel weer", "Soek", "Deel op Google+"],
      "am_ET(Amharic/ALL)": [
        "\u12a5\u1295\u12f0\u1308\u1293 \u12a0\u132b\u12cd\u1275",
        "\u1348\u120d\u130d",
        "Google+ \u120b\u12ed \u12a0\u130b\u122b",
      ],
      ar: [
        "\u0627\u0644\u0644\u0639\u0628 \u0645\u0631\u0629 \u062b\u0627\u0646\u064a\u0629",
        "\u0628\u062d\u062b",
        "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 +Google",
      ],
      az: ["Yen\u0259 oyna", "Axtar", "Google+'da b\u00f6l\u00fc\u015f"],
      be: [
        "\u042f\u0448\u0447\u044d \u0440\u0430\u0437",
        "\u0428\u0443\u043a\u0430\u0446\u044c",
        "\u041f\u0430\u0434\u0437\u044f\u043b\u0456\u0446\u0446\u0430 \u043d\u0430 Google+",
      ],
      bg: [
        "\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u0443\u0441\u043a\u0430\u043d\u0435",
        "\u0422\u044a\u0440\u0441\u0435\u043d\u0435",
        "\u0421\u043f\u043e\u0434\u0435\u043b\u044f\u043d\u0435 \u0432 Google+",
      ],
      bn: [
        "\u0986\u09ac\u09be\u09b0 \u09aa\u09cd\u09b2\u09c7 \u0995\u09b0\u09c1\u09a8",
        "\u0985\u09a8\u09c1\u09b8\u09a8\u09cd\u09a7\u09be\u09a8 \u0995\u09b0\u09c1\u09a8",
        "Google+ \u098f \u09ad\u09be\u0997 \u0995\u09b0\u09c1\u09a8",
      ],
      bs: ["Igraj ponovno", "Tra\u017ei", "Podijeli na Google+"],
      ca: ["Juga una altra vegada", "Cerca ", "Comparteix a Google+"],
      cs: ["Hr\u00e1t znovu", "Hledat", "Sd\u00edlet na Google+"],
      da: ["Spil igen", "S\u00f8g", "Del p\u00e5 Google+"],
      de: ["Nochmal ansehen", "Suchen", "Auf Google+ teilen"],
      el: [
        "\u03a0\u03b1\u03af\u03be\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac",
        "\u0391\u03bd\u03b1\u03b6\u03b7\u03c4\u03ae\u03c3\u03c4\u03b5",
        "\u039c\u03bf\u03b9\u03c1\u03b1\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03c3\u03c4\u03bf Google+",
      ],
      en_us: ["Play again", "Search", "Share on Google+"],
      "en-GB": ["Play again", "Search", "Share on Google+"],
      es: ["Jugar de nuevo", "Buscar", "Compartir en Google+"],
      "es-419": ["Jugar de nuevo", "Buscar", "Compartir en Google+"],
      et: ["M\u00e4ngi uuesti", "Otsi", "Jaga teenuses Google+"],
      eu: ["Jolastu berriro", "Bilatu", "Partekatu Google+en"],
      fi: ["Toista uudelleen", "Hae", "Jaa Google+ -palvelussa"],
      fr: ["Revoir", "Rechercher", "Partager sur Google+"],
      ga: ["Seinn ar\u00eds \u00e9", "Cuardaigh", "Roinn ar Google+"],
      gl: ["Xogar de novo", "Buscar", "Compartir en Google+"],
      hr: ["Ponovi", "Pretra\u017ei", "Dijeli na Google+"],
      hu: [
        "Lej\u00e1tsz\u00e1s ism\u00e9t",
        "Keres\u00e9s",
        "Megoszt\u00e1s a Google+-on",
      ],
      id: ["Main lagi", "Telusuri", "Bagikan di Google+"],
      is: ["Spila aftur", "Leita", "Deila \u00e1 Google+"],
      it: ["Gioca di nuovo", "Cerca", "Condividi su Google+"],
      iw: [
        "\u05d4\u05e4\u05e2\u05dc \u05e9\u05d5\u05d1",
        "\u05d7\u05e4\u05e9",
        "\u05e9\u05ea\u05e3 \u05d1-Google+",
      ],
      ja: [
        "\u3082\u3046\u4e00\u5ea6\u898b\u308b",
        "\u691c\u7d22",
        "Google+ \u3067\u5171\u6709",
      ],
      ko: [
        "\ub2e4\uc2dc\ud558\uae30",
        "\uac80\uc0c9",
        "Google+\uc5d0\uc11c \uacf5\uc720",
      ],
      lt: [
        "Rodyti dar kart\u0105",
        "Ie\u0161koti",
        "Dalytis \u201eGoogle+\u201c",
      ],
      lv: ["Atska\u0146ot v\u0113lreiz", "Mekl\u0113t", "Kop\u012bgot Google+"],
      mk: [
        "\u0418\u0433\u0440\u0430\u0458 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e",
        "\u041f\u0440\u0435\u0431\u0430\u0440\u0430\u0458",
        "\u0421\u043f\u043e\u0434\u0435\u043b\u0438 \u043d\u0430 Google+",
      ],
      mr: [
        "\u092a\u0941\u0928\u094d\u0939\u093e \u092a\u094d\u0932\u0947 \u0915\u0930\u093e",
        "\u0936\u094b\u0927\u093e",
        "Google+ \u0935\u0930 \u0938\u093e\u092e\u093e\u092f\u093f\u0915 \u0915\u0930\u093e",
      ],
      ms_my: ["Main semula", "Cari", "Kongsi di Google+"],
      nl: ["Opnieuw afspelen", "Zoeken", "Delen op Google+"],
      no: ["Spill av p\u00e5 nytt", "S\u00f8k", "Del p\u00e5 Google+"],
      pl: ["Odtw\u00f3rz ponownie", "Szukaj", "Udost\u0119pnij w Google+"],
      "pt-BR": ["Jogar novamente", "Pesquisar", "Compartilhar no Google+"],
      "pt-PT": ["Jogar novamente", "Pesquisar", "Partilhar no Google+"],
      ro: [
        "Reda\u0163i din nou",
        "C\u0103uta\u0163i",
        "Distribui\u0163i \u00een Google+",
      ],
      ru: [
        "\u0418\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437",
        "\u0418\u0441\u043a\u0430\u0442\u044c",
        "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 Google+",
      ],
      sk: [
        "Hra\u0165 znova",
        "H\u013eada\u0165",
        "Zdie\u013ea\u0165 v Google+",
      ],
      sl: ["Ponovno predvajaj", "I\u0161\u010di", "Deli v storitvi Google+"],
      sr: [
        "\u0418\u0433\u0440\u0430\u0458 \u043e\u043f\u0435\u0442",
        "\u041f\u0440\u0435\u0442\u0440\u0430\u0436\u0438",
        "\u0414\u0435\u043b\u0438 \u043d\u0430 Google+",
      ],
      sv: ["Spela igen", "S\u00f6k", "Dela p\u00e5 Google+"],
      sw: ["Cheza tena", "Tafuta", "Shiriki kwenye Google+"],
      th_All: [
        "\u0e40\u0e25\u0e48\u0e19\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ",
        "\u0e04\u0e49\u0e19\u0e2b\u0e32",
        "\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e1a\u0e19 Google+",
      ],
      tr: ["Tekrar oyna", "Ara", "Google+'da payla\u015f"],
      uk: [
        "\u0413\u0440\u0430\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437",
        "\u0428\u0443\u043a\u0430\u0442\u0438",
        "\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u0443 Google+",
      ],
      vi: [
        "Ph\u00e1t l\u1ea1i",
        "T\u00ecm ki\u1ebfm",
        "Chia s\u1ebb tr\u00ean Google+",
      ],
      "zh-CN": [
        "\u518d\u73a9\u4e00\u6b21",
        "\u641c\u7d22",
        "\u901a\u8fc7 Google+ \u5206\u4eab",
      ],
      "zh-TW_HK": [
        "\u518d\u64ad\u4e00\u6b21",
        "\u641c\u5c0b",
        "\u900f\u904e Google+ \u5206\u4eab",
      ],
      "zh-TW_tw": [
        "\u518d\u770b\u4e00\u6b21",
        "\u641c\u5c0b",
        "\u900f\u904e Google+ \u5206\u4eab",
      ],
      zu: ["Dlala futhi", "Sesha ", "Yabelana ku-Google+"],
      hi: [
        "\u092b\u093c\u093f\u0930 \u0916\u0947\u0932\u0947\u0902",
        "\u0916\u094b\u091c\u0947\u0902",
        "Google+ \u092a\u0930 \u0938\u093e\u091d\u093e \u0915\u0930\u0947\u0902",
      ],
      fil: ["I-play muli", "Maghanap", "Ibahagi sa Google+"],
      fa: [
        "\u0628\u0627\u0632\u067e\u062e\u0634",
        "\u062c\u0633\u062a\u062c\u0648",
        "\u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u06af\u0630\u0627\u0631\u06cc \u062f\u0631 +Google",
      ],
    },
    Qc = function (a) {
      return (google.kHL in fd && fd[google.kHL][a]) || fd.ALL[a];
    };
  var gd = [
    [640, 107, 304, 144],
    [3382, 266, 71, 70],
    [3145, 0, 71, 70],
    [23, 266, 530, 207],
    [556, 266, 530, 207],
    [1089, 369, 2260, 112],
    [1254, 107, 2268, 156],
    [0, 0, 3072, 104],
    [1089, 266, 1230, 100],
    [0, 107, 637, 44],
    [0, 184, 470, 44],
    [0, 154, 275, 27],
    [3352, 266, 27, 26],
    [3075, 0, 67, 69],
    [947, 107, 304, 144],
    [0, 266, 20, 23],
    [3525, 0, 16, 16],
  ];
  var hd,
    gameStatus,
    M,
    id,
    jd,
    ctx,
    N,
    ld,
    md,
    nd,
    od,
    pd,
    qd,
    canvas,
    rd,
    O,
    P,
    sd,
    Q,
    R,
    td,
    ud,
    vd,
    wd,
    xd,
    yd,
    zd,
    Ad,
    S,
    T,
    Bd = function (a, b, c, d, e) {
      this.k = d;
      this.s = e;
      this.k.i = 0;
      this.height = c;
      this.i = 0;
      this.w = 8e-4;
      this.x = a;
      this.y = b;
      this.o = a;
      this.p = b;
      this.state = 0;
    };
  Bd.prototype.v = function () {
    var a = this.k;
    a.k = (-16.18 + this.y * (0.18 - 0.4)) / -151;
    a.o = a.k;
    a.x = this.x - v(a) / 2;
    a.y = this.y - this.height - ((1 + a.o) * w(a)) / 2;
    a.A = a.x / 10;
    var b = (50 + 40 * Math.max(0, Math.min(1, (50 - this.height) / 50))) * a.k;
    Cd(this.x, this.y, b, 0.5 * b, "rgba(0,0,0," + 0.2 * a.i + ")");
    a.v();
    this.s.x = a.x;
    this.s.y = a.y;
    this.s.k = a.k;
    this.s.o = a.o;
    this.s.v();
  };
  var Dd,
    Ed,
    Fd,
    Gd,
    Hd,
    Id,
    U,
    Jd,
    Sa,
    Ld = function () {
      var a = V(10, 0, 0, 47, 44, -22, 7),
        b = V(9, 0, 0, 49, 44, -22, 4);
      Hd = Gd = Dd = 260;
      Id = null;
      Fd = a;
      Fd.y = 40 - w(Fd);
      Ed = new r();
      u(
        Ed,
        function (a) {
          U = Fd;
          Dd = Ka(a, Gd, Hd);
          U.frame = Ma(Math.floor(Dd / 3), 10);
        },
        1e3,
      );
      u(Ed, function () {
        Dd = Hd;
        U.frame = 0;
      });
      Jd = b;
      Jd.y = 40 - w(Jd);
      Sa = Xa(Jd, 13, 900);
      Ta(function () {
        var a = Id,
          b = 92 + 351 * Math.random(),
          e = 0.5 < Math.random();
        a.state = 1;
        a.A = e;
        a.w = 7e-4;
        a.o = b;
        a.p = 404;
        a.i = e ? 0.38 : 0.05;
      });
      u(Sa, function () {
        U = Fd;
        U.frame = 0;
        Kd();
      });
      U = Fd;
    },
    Kd = function () {
      for (var a = [], b = 0, c; (c = jd[b++]); ) 0 == c.state && a.push(c);
      Id = a.length ? a[Math.floor(Math.random() * a.length)] : null;
      null != Id && ((a = Id.x), (Gd = Dd), (Hd = a), Ed.play());
    };
  var W,
    Md,
    Nd,
    Od,
    Pd,
    Qd,
    Rd,
    Sd,
    Td,
    Ud,
    Vd,
    playerX,
    playerY,
    Y,
    Xd,
    $d = function () {
      var a = V(8, 0, 0, 123, 100, -5, -80),
        b = V(6, 0, 0, 126, 156, 2, -145),
        c = V(5, 0, 0, 113, 112, 5, -96),
        d = V(7, 0, 0, 128, 104, -2, -90);
      playerX = 278;
      playerY = 270;
      Yd();
      Xd = !1;
      Pd = a;
      Od = Xa(Pd, 10, 150);
      u(Od, function () {
        playerX -= 5;
        Y = null;
      });
      Rd = Pd.clone();
      Rd.k = -1;
      Qd = Xa(Rd, 10, 150);
      u(Qd, function () {
        playerX += 5;
        Y = null;
      });
      Nd = b;
      a = 700 / 26;
      Md = Xa(Nd, 18, 18 * a);
      for (b = 6; 13 >= b; b++) Md.k[b].duration = 2 * a;
      u(Md, function () {
        Xd = !1;
        Y = null;
      });
      Nd.frame = 17;
      Td = c;
      Sd = Xa(Td, 20, 1500);
      Va(Sd, 600);
      u(Sd, Zd);
      Vd = d;
      Ud = Xa(Vd, 20, 1500);
      Va(Ud, 600);
      u(Ud, Zd);
      W = Pd;
    },
    Yd = function () {
      Y && (Qa(Y), (Y = null));
    },
    ae = function () {
      W.x = playerX - v(W) / 2;
      W.y = playerY;
      var a = 30 + 30 * (Math.cos(3.14 * (0.5 + (1 + Nd.frame) / 18)) + 1);
      Cd(playerX, playerY, a, 0.3 * a, "rgba(0,0,0,0.2)");
      W.v();
    },
    be = function () {
      null == Y &&
        (2 == gameStatus
          ? ((W = Pd), (Y = Od))
          : 5 == gameStatus
            ? 0 < M
              ? ((W = Td), (Y = Sd))
              : ((W = Vd), (Y = Ud))
            : Xd
              ? ((W = Nd), (Y = Md))
              : N[2] && 150 <= playerX
                ? ((W = Pd), (Y = Od))
                : (N[2] && 150 <= playerX ? 0 : N[3] && 390 >= playerX)
                  ? ((W = Rd), (Y = Qd))
                  : ((W = Pd), (W.frame = 0)),
        Y && Y.play());
    };
  var ce = {
      ALL: ["Score", "Football", "I played football! #Doodle"],
    },
    Oc = function (a) {
      return (google.kHL in ce && ce[google.kHL][a]) || ce.ALL[a];
    };
  var Z = [],
    V = function (a, b, c, d, e, f, g) {
      var h, k;
      k = Ad.i[a];
      h = k[0];
      k = k[1];
      d || (d = Ad.i[a][2]);
      e || (e = Ad.i[a][3]);
      return new Wa(
        canvas,
        zd,
        h + (b || 0),
        k + (c || 0),
        d,
        e,
        f || 0,
        g || 0,
      );
    },
    de = function (a) {
      Q.x = a;
      Q.y = 93;
      R.x = Q.x + v(Q) / 2 - v(R) / 2;
      R.y = Q.y + w(Q) / 2 - w(R) / 2 - 2;
    },
    Vc = function (a, b) {
      4 == gameStatus && 10 > hd && (hd += 1.5e-5 * b);
      var c = b * hd;
      3 == gameStatus && rd && (2 == rd ? (ld = !0) : 3 == rd && (md = !0));
      3 == gameStatus && 3 == ud && updateGameStatus(4);
      1 == ud && ld && md && fe(2);
      yd += b;
      4 == gameStatus &&
        2e3 < yd &&
        3 > id &&
        ((yd = 0), Id ? ((U = Jd), Sa.play()) : Kd());
      N[2] && 150 <= playerX
        ? (playerX -= 5)
        : (N[2] && 150 <= playerX ? 0 : N[3] && 390 >= playerX) &&
          (playerX += 5);
      be();
      for (var d = playerX, e = 0, f; (f = jd[e++]); ) {
        var g = f,
          h = c;
        g.k.i = Math.min(1, g.k.i + 0.001 * h);
        g.k.i = 1;
        g.height += g.i * h;
        var k = 0.2;
        2 == g.state &&
          (k = 0.015 * Math.sqrt(Math.abs(g.p - g.y) + Math.abs(g.o - g.x)));
        var t = h * k,
          q = Math.atan2(g.p - g.y, g.o - g.x),
          q = q - Math.PI / 2,
          k = -Math.sin(q) * t,
          t = Math.cos(q) * t;
        Math.abs(k) > Math.abs(g.x - g.o) && (k = g.o - g.x);
        Math.abs(t) > Math.abs(g.y - g.p) && (t = g.p - g.y);
        g.x += k;
        g.y += t;
        0 > g.height
          ? ((g.height = 0),
            (g.i = 0.1 > Math.abs(g.i) ? 0 : (g.i = 0.6 * -g.i)))
          : 0 < g.height && (g.i -= g.w * h);
        2 == f.state && 50 >= f.y && (f.state = 0);
        1 == f.state &&
          191 <= f.y &&
          (w(f.k),
          50 < Math.abs(f.x - d) || (f.A && !Xd) || (!f.A && Xd)
            ? ((f.state = 3), id++)
            : ((f.state = 2),
              M++,
              (f.o = 200 + 200 * Math.random()),
              (f.p = 50),
              (f.i = 0)));
      }
      3 <= id && updateGameStatus(5);
      ge(a);
      return !0;
    },
    he = function () {
      2 == ud && fe(3);
      (3 != gameStatus && 4 != gameStatus) || Xd || ((Xd = !0), Yd(), be());
    },
    ge = function (a) {
      Ia();
      od.v();
      U.x = Dd;
      U.v();
      for (var b = [], c = 0, d; (d = jd[c++]); ) b.push(d);
      b.sort(function (a, b) {
        return a.y - b.y;
      });
      for (c = 0; (d = b[c++]); ) 191 > d.y && d.v();
      Cd(Q.x + v(Q) / 2, Q.y + w(Q) - 5, 60, 18, "rgba(0,0,0,0.2)");
      Q.v();
      R.v();
      ae();
      for (c = 0; (d = b[c++]); ) 191 <= d.y && 201 > d.y && d.v();
      qd.v();
      for (c = 0; (d = b[c++]); ) 201 <= d.y && d.v();
      ie();
      je(a);
      pd.v();
    },
    je = function (a) {
      O.frame = (a / 1e3) & 1;
      O.x = playerX + 40;
      O.y = 11;
      O.v();
      S.x = O.x - 15;
      S.y = O.y + 70;
      S.i = O.i;
      S.v();
      T.x = O.x - 30;
      T.y = O.y + 90;
      T.i = O.i;
      T.v();
      P.frame = (a / 1e3) & 1;
      P.x = playerX - 190;
      P.y = 11;
      P.v();
      S.x = P.x + 150;
      S.y = P.y + 70;
      S.i = P.i;
      S.v();
      T.x = P.x + 170;
      T.y = P.y + 90;
      T.i = P.i;
      T.v();
    },
    ie = function () {
      for (var a = v(sd), b = 0; b < id; b++)
        (sd.x = b * a + 6 * b + 39), (sd.y = 10), sd.v();
      var a = Ma(Math.floor(M / 1), 10),
        b = Ma(Math.floor(M / 10), 10),
        c = Ma(Math.floor(M / 100), 10),
        d = -(v(Z[0]) + 5);
      Z[a].x = 465;
      Z[a].y = 10;
      Z[a].v();
      Z[b].x = 465 + d;
      Z[b].y = 10;
      Z[b].v();
      Z[c].x = 465 + 2 * d;
      Z[c].y = 10;
      Z[c].v();
    },
    Zd = function () {
      var a = 0;
      44 < M ? (a = 3) : 9 < M ? (a = 2) : 0 < M && (a = 1);
      var b,
        c = String(M);
      lc.F = Bc + c;
      b || (b = kc);
      lc.C =
        "https://www.google.com/logos/2012/" + b + "12-hp-share" + a + ".png";
      hc.textContent = c;
      for (b = 0; 3 > b; b++)
        Gc[b].className = b < a ? "hplogo_smg" : "hplogo_smh";
      I.style.display = "";
      J.play();
    },
    Cd = function (a, b, c, d, e) {
      a = a - c / 2;
      b = b - d / 2;
      var f = ctx;
      f.save();
      f.beginPath();
      f.translate(a, b);
      f.scale(c, d);
      f.arc(0.5, 0.5, 0.5, 0, 2 * Math.PI, !0);
      f.fillStyle = e;
      f.fill();
      f.restore();
    },
    ke = function (a) {
      return 37 == a.keyCode
        ? 2
        : 39 == a.keyCode
          ? 3
          : 38 == a.keyCode || Ga(a.keyCode)
            ? 1
            : 0;
    },
    le = function (a) {
      2 != Fc && (Fc = 0);
      var b = ke(a);
      N[b] = !0;
      b && (a.preventDefault(), (rd = b), 1 == b && he());
    },
    me = function (a) {
      N[ke(a)] = !1;
      ke(a) == rd && (a.preventDefault(), (rd = 0));
    },
    Wc = function () {
      Ad.o = !0;
      var a = playerJump,
        b = playerMove;
      vc = null;
      gameElement.onmouseout = dd;
      gameElement.onmouseup = dd;
      me && (gameElement.onkeyup = me);
      uc = a;
      gameElement.onmousedown = onMouseDown;
      wc = b;

      if (isTouchDevice()) {
        gameElement.ontouchmove = function (event) {
          event.preventDefault();
          onMouseMove(event);
        };
      } else {
        gameElement.onmousemove = onMouseMove;
      }
      qc = le;

      gameElement.onkeydown = ad;
      gameElement.style.cursor = "pointer";
      -1 != navigator.userAgent.indexOf("Opera") &&
        (gameElement.onkeypress = bd);
      updateGameStatus(1);
      K();
    },
    playerJump = function () {
      2 != Fc && (Fc = 1);
      he();
    },
    playerMove = function (event) {
      if (canvas == null) return;

      let point = [0, 0];

      if (event) {
        var element = event.targetTouches && event.targetTouches[0];

        point =
          element && element.pageX !== void 0
            ? [element.pageX, element.pageY]
            : event.clientX !== void 0
              ? [
                  event.clientX +
                    ("rtl" == document.dir ? -1 : 1) *
                      (document.body.scrollLeft ||
                        document.documentElement.scrollLeft ||
                        0),
                  event.clientY +
                    (document.body.scrollTop ||
                      document.documentElement.scrollTop ||
                      0),
                ]
              : void 0 !== event.pageX
                ? [event.pageX, event.pageY]
                : [0, 0];
      }

      const box = canvas.getBoundingClientRect();

      let offsetX = point[0] - box.left;

      // game ready
      if (gameStatus == 3) {
        if (nd == null) {
          nd = offsetX;
        } else {
          if (Math.abs(nd - offsetX) > 75) {
            ld = md = true;
          }
        }
      }

      // game ready or started
      if (gameStatus == 3 || gameStatus == 4) {
        const mappedX = mapValue(offsetX, [0, box.width], [0, 530]);
        playerX = Math.min(390, Math.max(150, mappedX));
      }
    },
    Nc = function () {
      Yd();
      Id = null;
      updateGameStatus(3);
    },
    Jc = function () {
      xd.play();
      La();
      x[0] = 37;
      x[1] = 39;
      x[2] = Fa[0];
      x[4] = Fa[0];
      x[5] = Fa[0];
      x[6] = Fa[0];
      lb(function () {
        2 != Fc && (Fc = 2);
      });
    },
    updateGameStatus = function (a) {
      // 0 = loading
      // 1 = loaded
      // 2 = starting animation
      // 3 = game ready
      // 4 = game started
      // 5 = game over
      if (gameStatus != a) {
        switch (((gameStatus = a), a)) {
          case 1:
            vd.play();
            break;
          case 3:
            id = M = 0;
            hd = 0.6;
            nd = null;
            ld = md = false;
            fe(1);
            break;
          case 4:
            a = [];
            const balls = 5;
            for (var b = 0; balls > b; b++) {
              var c = V(1),
                d = V(2);
              a.push(new Bd(235 + 20 * b, 50, 50 + 15 * Math.random(), c, d));
            }
            jd = a;
            yd = 0;
            break;
          case 5:
            1 >= M && (Na("0"), (ud = 0));
        }
      }
    },
    fe = function (a) {
      for (; ud < a; )
        switch (++ud) {
          case 1:
            $a(O, 200, 1);
            break;
          case 2:
            $a(O, 100, 0);
            $a(P, 200, 1);
            break;
          case 3:
            $a(P, 100, 0), Na("1");
        }
    };
  (function (a, b, c) {
    var d = function () {
        a();
        window.lol && window.lol();
      },
      e = function () {
        nb(d, b, c);
        mb(d, b);
        d();
      };
    google && google.x ? google.x({ id: "DOODLE" }, e) : e();
  })(
    function () {
      updateGameStatus(0);
      jd = [];
      rd = 0;
      N = {};
      ud = Ja() ? 3 : 0;
      hd = id = M = 0;
      if (Xc()) {
        zd = Pc("sprite-player.png");
        Ad = new rb("/logos/2012/sprite-player.png", gd);
        canvas = Ic();
        ctx = canvas.getContext("2d");
        wd = Mc();
        Tc();
        for (var a = 0; 9 >= a; a++) Z[a] = V(11, 25 * a, 0, 25, 27);
        sd = V(11, 250, 0, 25, 27);
        Q = V(13, 0, 0, 67, 69);
        R = V(12, 0, 0, 27, 26, 3, 0);
        Q.i = 0;
        R.i = 0;
        de(230);
        O = V(0, 0, 0, 152, 144);
        O.i = 0;
        P = V(14, 0, 0, 152, 144);
        P.i = 0;
        S = V(15, 0, 0, 0, 0);
        S.i = 0;
        T = V(16, 0, 0, 0, 0);
        T.i = 0;
        td = new r();
        u(
          td,
          function (a) {
            de(230 - a * (230 + v(Q)));
            R.A = -13 * a;
          },
          2e3,
        );
        xd = new r();
        u(xd, function () {
          Q.i = 1;
          R.i = 1;
          wd.style.display = "none";
          td.play();
          updateGameStatus(2);
        });
        u(
          xd,
          function (a) {
            playerY = 270 + -79 * a;
          },
          500,
        );
        u(xd, function () {
          updateGameStatus(3);
        });
        od = new Wa(canvas, Pc("game-bg.png"));
        pd = V(4);
        qd = V(3);
        vd = new r();
        u(vd, function () {
          wd.style.display = "";
        });
        u(
          vd,
          function (a) {
            wd.style.opacity = a;
          },
          600,
        );
        $d();
        Ld();
      }
    },
    function () {
      Hc = Pa = !0;
      gameElement && (gameElement.innerHTML = "");
      yc = !1;
    },
    function () {
      return document.activeElement != gameElement;
    },
  );
})();

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
