const assetsPath = "/doodle-basketball/assets/";

window.google = {};

(function () {
  var l,
    m = this,
    aa = function (a) {
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
    ba = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ca = function (a, b, c) {
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
    n = function (a, b, c) {
      n =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? ba
          : ca;
      return n.apply(null, arguments);
    },
    da = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b);
      };
    },
    p =
      Date.now ||
      function () {
        return +new Date();
      },
    ea = function (a, b) {
      var c = a.split("."),
        d = m;
      c[0] in d || !d.execScript || d.execScript("var " + c[0]);
      for (var e; c.length && (e = c.shift()); )
        c.length || void 0 === b
          ? d[e]
            ? (d = d[e])
            : (d = d[e] = {})
          : (d[e] = b);
    },
    q = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.R = b.prototype;
      a.prototype = new c();
      a.Ia = function (a, c, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h];
        return b.prototype[c].apply(a, g);
      };
    };
  var fa = {},
    ga = { La: 0, Na: 1, Pa: 2, Ka: 3, Ma: 4, Oa: 5, Ja: 6 };
  fa.Z = null;
  var ha = [],
    ia = {},
    ja = 0,
    ka = null,
    la = null,
    ma = !1,
    r = function (a, b) {
      return a.buttons[b] && 0.5 < a.buttons[b];
    },
    t = function (a, b, c) {
      return "undefined" == typeof a.axes[b]
        ? !1
        : c
          ? -0.75 > a.axes[b]
          : 0.75 < a.axes[b];
    },
    oa = function (a) {
      fa.Z = a.gamepad;
      ma || ((ma = !0), u());
    },
    pa = function () {
      delete fa.Z;
      ma = !1;
    },
    u = function () {
      var a;
      if (fa.Z) a = fa.Z;
      else {
        var b =
          (navigator.getGamepads && navigator.getGamepads()) ||
          (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) ||
          navigator.webkitGamepads;
        a = (b && (b[3] || b[2] || b[1] || b[0])) || null;
      }
      if (a && (!a.timestamp || a.timestamp != ja)) {
        ja = a.timestamp;
        b = [];
        b[0] = r(a, 14) || t(a, 0, !0) || t(a, 2, !0);
        b[1] = r(a, 15) || t(a, 0, !1) || t(a, 2, !1);
        b[2] = r(a, 12) || t(a, 1, !0) || t(a, 3, !0);
        b[3] = r(a, 13) || t(a, 1, !1) || t(a, 3, !1);
        b[4] = r(a, 0) || r(a, 4) || r(a, 6) || r(a, 8) || r(a, 9) || r(a, 10);
        b[5] = r(a, 1) || r(a, 5) || r(a, 7) || r(a, 11);
        b[6] = r(a, 2) || r(a, 3);
        if (ha.length)
          for (var c in ga) {
            a = ga[c];
            var d = b[a];
            if ("undefined" != typeof d && d != ha[a] && ia[a]) {
              la && la();
              var e = document.createEvent("Event");
              e.initEvent(d ? "keydown" : "keyup", !0, !0);
              e.keyCode = ia[a];
              ka.dispatchEvent(e);
            }
          }
        ha = b;
      }
      ma &&
        (window.requestAnimationFrame
          ? window.requestAnimationFrame(u)
          : window.oRequestAnimationFrame
            ? window.oRequestAnimationFrame(u)
            : window.mozRequestAnimationFrame
              ? window.mozRequestAnimationFrame(u)
              : window.msRequestAnimationFrame
                ? window.msRequestAnimationFrame(u)
                : window.webkitRequestAnimationFrame &&
                  window.webkitRequestAnimationFrame(u));
    },
    qa = function (a) {
      ka = v;
      la = a || null;
      window.addEventListener &&
        (window.addEventListener("MozGamepadConnected", oa, !1),
        window.addEventListener("MozGamepadDisconnected", pa, !1));
      (!navigator.webkitGamepads && !navigator.webkitGetGamepads) ||
        ma ||
        ((ma = !0), u());
    };
  var ra = function (a, b) {
      google &&
        google.doodle &&
        (b && (google.doodle.cpDestroy = b),
        (google.doodle.cpInit = function () {
          b && b();
          a();
        }));
    },
    sa = function (a, b, c) {
      if (google) {
        var d = function () {
            var a = google.msg && google.msg.unlisten;
            a && (a(106, d), c && a(94, c));
            b();
            return !0;
          },
          e = function () {
            var a = document.getElementById("game");
            a &&
              "hidden" != a.style.visibility &&
              ((a = google.msg && google.msg.listen),
              google.Ha && google.Ha.q && a && (a(106, d), c && a(94, c)));
          };
        e();
        (google.doodle && google.doodle.jesr) ||
          (ea("google.doodle.jesr", !0),
          google.raas &&
            google.raas("doodle", {
              init: function () {
                e();
                google.doodle.jesrd && (a(), (google.doodle.jesrd = !1));
              },
              dispose: function () {
                d();
                google.doodle.jesrd = !0;
              },
            }));
      }
    };
  var ta = function (a) {
      this.p = a;
      this.k = !1;
      this.o = [];
      this.i = new Image();
    },
    ua = function (a) {
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
    va = function (a, b) {
      a.k ? b() : a.o.push(b);
    };
  var xa = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
        },
    ya = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var za = Array.prototype,
    Aa = za.indexOf
      ? function (a, b, c) {
          return za.indexOf.call(a, b, c);
        }
      : function (a, b, c) {
          c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
          if ("string" == typeof a)
            return "string" == typeof b && 1 == b.length ? a.indexOf(b, c) : -1;
          for (; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        };
  var Ba =
      "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " ",
      ),
    Ca = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Ba.length; f++)
          (c = Ba[f]),
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    };
  var w;
  i: {
    var Da = m.navigator;
    if (Da) {
      var Ea = Da.userAgent;
      if (Ea) {
        w = Ea;
        break i;
      }
    }
    w = "";
  }
  var Fa = -1 != w.indexOf("Opera") || -1 != w.indexOf("OPR"),
    x = -1 != w.indexOf("Trident") || -1 != w.indexOf("MSIE"),
    Ga =
      -1 != w.indexOf("Gecko") &&
      -1 == w.toLowerCase().indexOf("webkit") &&
      !(-1 != w.indexOf("Trident") || -1 != w.indexOf("MSIE")),
    Ha = -1 != w.toLowerCase().indexOf("webkit"),
    Ia = function () {
      var a = m.document;
      return a ? a.documentMode : void 0;
    },
    Ja = (function () {
      var a = "",
        b;
      if (Fa && m.opera)
        return (a = m.opera.version), "function" == aa(a) ? a() : a;
      Ga
        ? (b = /rv\:([^\);]+)(\)|;)/)
        : x
          ? (b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/)
          : Ha && (b = /WebKit\/(\S+)/);
      b && (a = (a = b.exec(w)) ? a[1] : "");
      return x && ((b = Ia()), b > parseFloat(a)) ? String(b) : a;
    })(),
    Ka = {},
    y = function (a) {
      var b;
      if (!(b = Ka[a])) {
        b = 0;
        for (
          var c = xa(String(Ja)).split("."),
            d = xa(String(a)).split("."),
            e = Math.max(c.length, d.length),
            f = 0;
          0 == b && f < e;
          f++
        ) {
          var g = c[f] || "",
            h = d[f] || "",
            k = RegExp("(\\d*)(\\D*)", "g"),
            wa = RegExp("(\\d*)(\\D*)", "g");
          do {
            var G = k.exec(g) || ["", "", ""],
              H = wa.exec(h) || ["", "", ""];
            if (0 == G[0].length && 0 == H[0].length) break;
            b =
              ya(
                0 == G[1].length ? 0 : parseInt(G[1], 10),
                0 == H[1].length ? 0 : parseInt(H[1], 10),
              ) ||
              ya(0 == G[2].length, 0 == H[2].length) ||
              ya(G[2], H[2]);
          } while (0 == b);
        }
        b = Ka[a] = 0 <= b;
      }
      return b;
    },
    La = m.document,
    Ma =
      La && x
        ? Ia() || ("CSS1Compat" == La.compatMode ? parseInt(Ja, 10) : 5)
        : void 0;
  var Pa = function (a) {
      var b = new Image(),
        c = Na,
        d = "";
      b.onerror =
        b.onload =
        b.onabort =
          function () {
            delete Oa[c];
          };
      Oa[c] = b;
      -1 != a.search("&ei=") || (d = "&ei=");
      a = "/gen_204?atyp=i&ct=doodle&cad=" + a + d + "&zx=" + p();
      /^http:/i.test(a) && "https:" == window.location.protocol
        ? delete Oa[c]
        : ((b.src = a), (Na = c + 1));
    },
    Oa = [],
    Na = 0;
  var Qa,
    Ra = 0 <= navigator.userAgent.indexOf("MSIE"),
    Ta = function (a) {
      for (var b = Sa, c = 0; c < b.length; c++) if (a === b[c]) return !0;
      return !1;
    },
    z = function (a, b, c) {
      a = document.createElement(a);
      b && (a.id = b);
      c && (a.className = c);
      return a;
    },
    Ua = function () {
      var a =
        (window.localStorage &&
          window.localStorage.getItem("doodle-basketball-tooltip")) ||
        null;
      return a ? parseFloat(a) : null;
    },
    Va = function (a, b, c) {
      return b + Math.min(1, Math.max(0, a)) * (c - b);
    },
    Wa = function () {
      var a = ["Fredoka+One::latin"];
      window.WebFontConfig ||
        (ea("WebFontConfig.google.families", a),
        (a = document.createElement("script")),
        (a.src =
          ("https:" == document.location.protocol ? "https" : "http") +
          "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"),
        (a.type = "text/javascript"),
        (a.async = "true"),
        (document.getElementById("xjsc") || document.body).appendChild(a));
    },
    Xa = function (a) {
      if (window.google && window.google.log) {
        var b;
        Qa ||
          ((b = document.getElementById("gameved")) &&
            (Qa = b.getAttribute("data-ved")));
        (b = Qa) && (a += "&ved=" + b);
        window.google.log("doodle", a);
      } else Pa(a);
    };
  var Ya = function (a, b) {
      this.i = b;
      this.k = new ta(a);
      this.o = !1;
      var c = this;
      va(this.k, function () {
        c.o = !0;
      });
    },
    Za = function (a, b) {
      var c = a.i[b];
      return { width: c[2], height: c[3] };
    },
    $a = function (a, b) {
      b && va(a.k, b);
      ua(a.k);
    },
    A = function (a, b, c, d, e) {
      var f = a.i[b];
      ab(a, b, c, 0, 0, f[2], f[3], d, e, void 0, void 0);
    },
    ab = function (a, b, c, d, e, f, g, h, k, wa, G) {
      if (a.o) {
        var H = a.i[b],
          na = wa || 1,
          Yb = f * na,
          na = g * na,
          Zb = G || !1;
        c.drawImage(
          a.k.i,
          H[0] + d,
          H[1] + e,
          f,
          g,
          h - (Zb ? Yb / 2 : 0),
          k - (Zb ? na / 2 : 0),
          Yb,
          na,
        );
      } else
        $a(a, function () {
          ab(a, b, c, d, e, f, g, h, k, wa, G);
        });
    };
  var bb = function () {
      this.k = this.i = 0;
      this.p = [];
      this.o = 0;
    },
    cb = !1,
    fb = function (a) {
      cb ||
        (db(a),
        (a.k = 0),
        (a.o = p()),
        (a.i = window.setInterval(function () {
          eb(a);
        }, 16)),
        eb(a));
    },
    B = function (a, b, c) {
      a.p.push({ duration: c || 0, $: b });
    },
    db = function (a) {
      if (a.i) {
        for (var b; (b = a.p[a.k++]); ) b.$(1);
        gb(a);
      }
    },
    gb = function (a) {
      a.i && (window.clearInterval(a.i), (a.i = 0));
    },
    hb = function (a, b) {
      B(a, function () {}, b);
    },
    eb = function (a) {
      var b = p();
      if (cb) gb(a);
      else {
        for (var c; (c = a.p[a.k]); a.k++) {
          if (!a.i) return;
          var d = b - a.o;
          if (d < c.duration) {
            c.$(d / c.duration);
            return;
          }
          c.$(1);
          0 < c.duration && (a.o += c.duration);
        }
        db(a);
      }
    };
  var ib = function (a) {
    ib[" "](a);
    return a;
  };
  ib[" "] = function () {};
  var jb;
  (jb = !x) || (jb = x && 9 <= Ma);
  var kb = jb,
    lb = x && !y("9");
  !Ha || y("528");
  (Ga && y("1.9b")) || (x && y("8")) || (Fa && y("9.5")) || (Ha && y("528"));
  (Ga && !y("8")) || (x && y("9"));
  var C = function () {
    this.o = this.o;
    this.k = this.k;
  };
  C.prototype.o = !1;
  C.prototype.ia = function () {
    this.o || ((this.o = !0), this.i());
  };
  C.prototype.i = function () {
    if (this.k) for (; this.k.length; ) this.k.shift()();
  };
  var mb = function (a) {
    a && "function" == typeof a.ia && a.ia();
  };
  var D = function (a, b) {
    this.type = a;
    this.k = this.p = b;
    this.o = !1;
    this.pa = !0;
  };
  D.prototype.ia = function () {};
  D.prototype.ha = function () {
    this.o = !0;
  };
  D.prototype.aa = function () {
    this.pa = !1;
  };
  var E = function (a, b) {
    D.call(this, a ? a.type : "");
    this.k = this.p = null;
    this.s = this.clientY = this.clientX = this.ea = this.ba = 0;
    this.i = this.state = null;
    if (a) {
      this.i = a;
      this.type = a.type;
      this.p = a.target || a.srcElement;
      this.k = b;
      var c = a.relatedTarget;
      if (c && Ga)
        try {
          ib(c.nodeName);
        } catch (d) {}
      Object.defineProperties
        ? Object.defineProperties(this, {
            ba: {
              configurable: !0,
              enumerable: !0,
              get: this.qa,
              set: this.Fa,
            },
            ea: {
              configurable: !0,
              enumerable: !0,
              get: this.ra,
              set: this.Ga,
            },
          })
        : ((this.ba = this.qa()), (this.ea = this.ra()));
      this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
      this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
      this.s = a.keyCode || 0;
      this.state = a.state;
      a.defaultPrevented && this.aa();
    }
  };
  q(E, D);
  l = E.prototype;
  l.ha = function () {
    E.R.ha.call(this);
    this.i.stopPropagation
      ? this.i.stopPropagation()
      : (this.i.cancelBubble = !0);
  };
  l.aa = function () {
    E.R.aa.call(this);
    var a = this.i;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), lb))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  l.qa = function () {
    return Ha || void 0 !== this.i.offsetX ? this.i.offsetX : this.i.layerX;
  };
  l.Fa = function (a) {
    Object.defineProperties(this, {
      ba: { writable: !0, enumerable: !0, configurable: !0, value: a },
    });
  };
  l.ra = function () {
    return Ha || void 0 !== this.i.offsetY ? this.i.offsetY : this.i.layerY;
  };
  l.Ga = function (a) {
    Object.defineProperties(this, {
      ea: { writable: !0, enumerable: !0, configurable: !0, value: a },
    });
  };
  var nb = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    ob = 0;
  var pb = function (a, b, c, d, e) {
      this.N = a;
      this.i = null;
      this.src = b;
      this.type = c;
      this.W = !!d;
      this.Y = e;
      this.ta = ++ob;
      this.Q = this.X = !1;
    },
    qb = function (a) {
      a.Q = !0;
      a.N = null;
      a.i = null;
      a.src = null;
      a.Y = null;
    };
  var rb = function (a) {
      this.src = a;
      this.i = {};
      this.k = 0;
    },
    tb = function (a, b, c, d, e) {
      var f = b.toString();
      b = a.i[f];
      b || ((b = a.i[f] = []), a.k++);
      var g = sb(b, c, d, e);
      -1 < g
        ? ((a = b[g]), (a.X = !1))
        : ((a = new pb(c, a.src, f, !!d, e)), (a.X = !1), b.push(a));
      return a;
    },
    ub = function (a, b) {
      var c = b.type;
      if (!(c in a.i)) return !1;
      var d = a.i[c],
        e = Aa(d, b),
        f;
      (f = 0 <= e) && za.splice.call(d, e, 1);
      f && (qb(b), 0 == a.i[c].length && (delete a.i[c], a.k--));
      return f;
    },
    vb = function (a, b, c, d, e) {
      a = a.i[b.toString()];
      b = -1;
      a && (b = sb(a, c, d, e));
      return -1 < b ? a[b] : null;
    },
    sb = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Q && f.N == b && f.W == !!c && f.Y == d) return e;
      }
      return -1;
    };
  var wb = "closure_lm_" + ((1e6 * Math.random()) | 0),
    xb = {},
    yb = 0,
    zb = function (a, b, c, d, e) {
      if ("array" == aa(b)) {
        for (var f = 0; f < b.length; f++) zb(a, b[f], c, d, e);
        return null;
      }
      c = Ab(c);
      if (a && a[nb]) a = a.listen(b, c, d, e);
      else {
        if (!b) throw Error("b");
        var f = !!d,
          g = Bb(a);
        g || (a[wb] = g = new rb(a));
        c = tb(g, b, c, d, e);
        c.i ||
          ((d = Cb()),
          (c.i = d),
          (d.src = a),
          (d.N = c),
          a.addEventListener
            ? a.addEventListener(b.toString(), d, f)
            : a.attachEvent(Db(b.toString()), d),
          yb++);
        a = c;
      }
      return a;
    },
    Cb = function () {
      var a = Eb,
        b = kb
          ? function (c) {
              return a.call(b.src, b.N, c);
            }
          : function (c) {
              c = a.call(b.src, b.N, c);
              if (!c) return c;
            };
      return b;
    },
    Fb = function (a, b, c, d, e) {
      if ("array" == aa(b))
        for (var f = 0; f < b.length; f++) Fb(a, b[f], c, d, e);
      else
        (c = Ab(c)),
          a && a[nb]
            ? a.unlisten(b, c, d, e)
            : a && (a = Bb(a)) && (b = vb(a, b, c, !!d, e)) && Gb(b);
    },
    Gb = function (a) {
      if ("number" == typeof a || !a || a.Q) return !1;
      var b = a.src;
      if (b && b[nb]) return ub(b.K, a);
      var c = a.type,
        d = a.i;
      b.removeEventListener
        ? b.removeEventListener(c, d, a.W)
        : b.detachEvent && b.detachEvent(Db(c), d);
      yb--;
      (c = Bb(b))
        ? (ub(c, a), 0 == c.k && ((c.src = null), (b[wb] = null)))
        : qb(a);
      return !0;
    },
    Db = function (a) {
      return a in xb ? xb[a] : (xb[a] = "on" + a);
    },
    Ib = function (a, b, c, d) {
      var e = !0;
      if ((a = Bb(a)))
        if ((b = a.i[b.toString()]))
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.W == c && !f.Q && ((f = Hb(f, d)), (e = e && !1 !== f));
          }
      return e;
    },
    Hb = function (a, b) {
      var c = a.N,
        d = a.Y || a.src;
      a.X && Gb(a);
      return c.call(d, b);
    },
    Eb = function (a, b) {
      if (a.Q) return !0;
      if (!kb) {
        var c;
        if (!(c = b))
          i: {
            c = ["window", "event"];
            for (var d = m, e; (e = c.shift()); )
              if (null != d[e]) d = d[e];
              else {
                c = null;
                break i;
              }
            c = d;
          }
        e = c;
        c = new E(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
          i: {
            var f = !1;
            if (0 == e.keyCode)
              try {
                e.keyCode = -1;
                break i;
              } catch (g) {
                f = !0;
              }
            if (f || void 0 == e.returnValue) e.returnValue = !0;
          }
          e = [];
          for (f = c.k; f; f = f.parentNode) e.push(f);
          for (var f = a.type, h = e.length - 1; !c.o && 0 <= h; h--) {
            c.k = e[h];
            var k = Ib(e[h], f, !0, c),
              d = d && k;
          }
          for (h = 0; !c.o && h < e.length; h++)
            (c.k = e[h]), (k = Ib(e[h], f, !1, c)), (d = d && k);
        }
        return d;
      }
      return Hb(a, new E(b, this));
    },
    Bb = function (a) {
      a = a[wb];
      return a instanceof rb ? a : null;
    },
    Jb = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    Ab = function (a) {
      if ("function" == aa(a)) return a;
      a[Jb] ||
        (a[Jb] = function (b) {
          return a.handleEvent(b);
        });
      return a[Jb];
    };
  var F = function () {
    C.call(this);
    this.K = new rb(this);
    this.A = this;
    this.s = null;
  };
  q(F, C);
  F.prototype[nb] = !0;
  F.prototype.removeEventListener = function (a, b, c, d) {
    Fb(this, a, b, c, d);
  };
  var Lb = function (a, b) {
    var c,
      d = a.s;
    if (d) for (c = []; d; d = d.s) c.push(d);
    var d = a.A,
      e = b,
      f = e.type || e;
    if ("string" == typeof e) e = new D(e, d);
    else if (e instanceof D) e.p = e.p || d;
    else {
      var g = e,
        e = new D(f, d);
      Ca(e, g);
    }
    var g = !0,
      h;
    if (c)
      for (var k = c.length - 1; !e.o && 0 <= k; k--)
        (h = e.k = c[k]), (g = Kb(h, f, !0, e) && g);
    e.o ||
      ((h = e.k = d),
      (g = Kb(h, f, !0, e) && g),
      e.o || (g = Kb(h, f, !1, e) && g));
    if (c)
      for (k = 0; !e.o && k < c.length; k++)
        (h = e.k = c[k]), (g = Kb(h, f, !1, e) && g);
    return g;
  };
  F.prototype.i = function () {
    F.R.i.call(this);
    if (this.K) {
      var a = this.K,
        b = 0,
        c;
      for (c in a.i) {
        for (var d = a.i[c], e = 0; e < d.length; e++) ++b, qb(d[e]);
        delete a.i[c];
        a.k--;
      }
    }
    this.s = null;
  };
  F.prototype.listen = function (a, b, c, d) {
    return tb(this.K, String(a), b, c, d);
  };
  F.prototype.unlisten = function (a, b, c, d) {
    var e;
    e = this.K;
    a = String(a).toString();
    if (a in e.i) {
      var f = e.i[a];
      b = sb(f, b, c, d);
      -1 < b
        ? (qb(f[b]),
          za.splice.call(f, b, 1),
          0 == f.length && (delete e.i[a], e.k--),
          (e = !0))
        : (e = !1);
    } else e = !1;
    return e;
  };
  var Kb = function (a, b, c, d) {
    b = a.K.i[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Q && g.W == c) {
        var h = g.N,
          k = g.Y || g.src;
        g.X && ub(a.K, g);
        e = !1 !== h.call(k, d) && e;
      }
    }
    return e && 0 != d.pa;
  };
  var Nb = function (a) {
    F.call(this);
    this.p = a;
    zb(a, Mb, this.w, !1, this);
    zb(a, "click", this.v, !1, this);
  };
  q(Nb, F);
  var Mb = Ga ? "keypress" : "keydown";
  Nb.prototype.w = function (a) {
    (13 == a.s || (Ha && 3 == a.s)) && Ob(this, a);
  };
  Nb.prototype.v = function (a) {
    Ob(this, a);
  };
  var Ob = function (a, b) {
    var c = new Pb(b);
    if (Lb(a, c)) {
      c = new Qb(b);
      try {
        Lb(a, c);
      } finally {
        b.ha();
      }
    }
  };
  Nb.prototype.i = function () {
    Nb.R.i.call(this);
    Fb(this.p, Mb, this.w, !1, this);
    Fb(this.p, "click", this.v, !1, this);
    delete this.p;
  };
  var Qb = function (a) {
    E.call(this, a.i);
    this.type = "action";
  };
  q(Qb, E);
  var Pb = function (a) {
    E.call(this, a.i);
    this.type = "beforeaction";
  };
  q(Pb, E);
  var I = function (a) {
    C.call(this);
    this.A = a;
    this.s = {};
  };
  q(I, C);
  var Rb = [];
  I.prototype.listen = function (a, b, c, d) {
    "array" != aa(b) && (b && (Rb[0] = b.toString()), (b = Rb));
    for (var e = 0; e < b.length; e++) {
      var f = zb(a, b[e], c || this.handleEvent, d || !1, this.A || this);
      if (!f) break;
      this.s[f.ta] = f;
    }
    return this;
  };
  I.prototype.unlisten = function (a, b, c, d, e) {
    if ("array" == aa(b))
      for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (e = e || this.A || this),
        (c = Ab(c)),
        (d = !!d),
        (b =
          a && a[nb]
            ? vb(a.K, String(b), c, d, e)
            : a
              ? (a = Bb(a))
                ? vb(a, b, c, d, e)
                : null
              : null),
        b && (Gb(b), delete this.s[b.ta]);
    return this;
  };
  I.prototype.i = function () {
    I.R.i.call(this);
    var a = this.s,
      b = Gb,
      c;
    for (c in a) b.call(void 0, a[c], c, a);
    this.s = {};
  };
  I.prototype.handleEvent = function () {
    throw Error("c");
  };
  var Sb = function (a, b, c, d, e) {
    I.call(this);
    this.D = a;
    this.G = b;
    this.F = c;
    this.B = d;
    e &&
      (this.p && this.unlisten(this.p, "action", this.v),
      e &&
        ((this.p = new Nb(e)),
        (a = da(mb, this.p)),
        this.o ? a.call(void 0) : (this.k || (this.k = []), this.k.push(a)),
        (this.v = n(this.H, this)),
        this.listen(this.p, "action", this.v)));
  };
  q(Sb, I);
  Sb.prototype.H = function () {
    Tb() &&
    -1 == w.indexOf("Trident") &&
    -1 == w.indexOf("MSIE") &&
    window.gapi &&
    window.gapi.load
      ? (window.gapi.load("share", n(this.w, this)), Xa("gplus,li"))
      : (window.open("https://plus.google.com/share?url=" + this.D),
        Xa("gplus,lo"));
  };
  var Tb = function () {
    if (!window.gbar) return !1;
    var a = !!(window.gbar.sos && 0 < window.gbar.sos().length),
      b = !(!window.gbar.so || !window.gbar.so());
    return a || b;
  };
  Sb.prototype.w = function () {
    if (window.gapi && window.gapi.share) {
      var a = {
          items: [
            {
              type: "http://schema.org/WebPage",
              id: location.protocol + "//" + location.host,
              properties: { url: [this.D], name: [this.G], image: [this.B] },
            },
          ],
        },
        b = window.location.toString().match(/[?&]authuser=(\d+)/),
        b = b && b[1],
        c = Tb() || !!window.google.doodle.sf;
      window.gapi.share.lightbox(a, {
        isLoggedInForGooglePlus: c,
        onLoginPopupBlocked: function () {
          Xa("gplus,popupblocked");
        },
        onLoginStateChanged: n(function () {
          ea("google.doodle.sf", !0);
          this.w();
        }, this),
        editorText: this.F,
        sessionIndex: b || "",
        sourceForLogging: "doodle",
      });
    }
  };
  var Ub,
    Vb,
    v,
    Wb,
    Xb,
    J,
    $b,
    ac,
    bc,
    K,
    cc,
    dc,
    ec,
    fc,
    gc,
    L,
    M,
    N,
    O,
    hc,
    P,
    ic,
    Q,
    Sa = [32, 13],
    jc = [],
    kc = !1,
    R = 0,
    lc = [],
    mc = !0,
    tc = function (a) {
      var b = nc(1),
        c = nc(2) + " \u2014 " + nc(0) + ": ";
      Wb = "basketball";
      var d = window.location.protocol + "//";
      z("img").src = assetsPath + "sprite-buttons.png";
      P = z("div", "game_sc");
      Vb = z("div", "game_sb");
      Ub = z("span", "game_sbt", "game_sse");
      Vb.appendChild(Ub);
      for (var e = 0; 3 > e; e++)
        (lc[e] = z("div", "game_sm")), Vb.appendChild(lc[e]);
      P.appendChild(Vb);
      e = function (a) {
        a = z("div", a);
        P.appendChild(a);
        return a;
      };
      L = z("div", "game_sr");
      P.appendChild(L);
      O = z("div", "game_ss");
      // TODO: hide search button
      // P.appendChild(O);
      J = z("div", "game_sg");
      // TODO: hide google plus button
      // P.appendChild(J);
      L.title = oc(0);
      O.title = oc(1);
      J.title = oc(2);
      P.style.display = "none";
      K = z("div", "game_sle");
      K.onmouseup = pc;
      e = z("span", "", "game_sse");
      e.textContent = d;
      K.appendChild(e);
      // P.appendChild(K);
      v.appendChild(P);
      Q = new bb();
      B(Q, function () {
        P.style.display = "";
        Vb.style.opacity = 0;
        L.style.opacity = 0;
        O.style.opacity = 0;
        J.style.opacity = 0;
        K.style.opacity = 0;
        L.className = "";
        O.className = "";
        J.className = "";
        Ra || pc();
      });
      B(
        Q,
        function (a) {
          P.style.opacity = a;
        },
        500,
      );
      hb(Q, 200);
      B(
        Q,
        function (a) {
          var b = Vb;
          // qc(b, 55, Va(a, 6, 30));
          b.style.opacity = a;
        },
        200,
      );
      hb(Q, 200);
      B(
        Q,
        function (a) {
          a *= 2;
          var b = L,
            c = a;
          qc(b, 8, Va(c, 12, 0));
          b.style.opacity = c;
          b = O;
          c = a - 0.5;
          qc(b, 8, Va(c, 12, 0));
          b.style.opacity = c;
          b = J;
          a = a - 1;
          qc(b, 8, Va(a, 12, 0));
          b.style.opacity = a;
        },
        500,
      );
      B(
        Q,
        function (a) {
          K.style.opacity = a;
        },
        500,
      );
      B(Q, function () {
        N = !0;
      });
      M = rc(L, "game_srd");
      B(M, function () {
        N = !1;
        mc || kc || S();
        a();
      });
      B(
        M,
        function (a) {
          P.style.opacity = 1 - a;
        },
        200,
      );
      B(M, function () {
        P.style.display = "none";
      });
      L.onmousedown = function () {
        N && !M.i && fb(M);
      };
      hc = rc(O, "game_ssd");
      B(hc, function () {
        google.nav.go(google.doodle.url);
      });
      O.onmousedown = function () {
        fb(hc);
      };
      $b = rc(J, "game_sgd", !0);
      J.onmousedown = function () {
        sc(4);
        fb($b);
      };
      Xb = new Sb(d, b, c, "", J);
      ic = c;
    },
    rc = function (a, b, c) {
      for (var d = new bb(), e = 0; 2 >= e; e++) B(d, uc(a, b + e)), hb(d, 16);
      if (c) {
        hb(d, 64);
        for (e = 2; 0 <= e; e--) B(d, uc(a, b + e)), hb(d, 16);
        B(d, uc(a, a.className));
      }
      return d;
    },
    S = function () {
      var a = p(),
        b = a - ac;
      kc ? (jc.push(b), 30 < jc.length && jc.shift()) : (jc = []);
      b = Math.min(40, b);
      N || (bc && 18e4 < a - bc)
        ? (kc = !1)
        : !mc && (void 0)(a, b)
          ? (window.requestAnimationFrame
              ? window.requestAnimationFrame(S, v)
              : window.oRequestAnimationFrame
                ? window.oRequestAnimationFrame(S)
                : window.mozRequestAnimationFrame
                  ? window.mozRequestAnimationFrame(S)
                  : window.msRequestAnimationFrame
                    ? window.msRequestAnimationFrame(S)
                    : window.webkitRequestAnimationFrame
                      ? window.webkitRequestAnimationFrame(S, v)
                      : window.setTimeout(S, 16),
            (ac = a),
            (kc = !0))
          : (kc = !1);
    },
    sc = function (a, b, c) {
      window.google &&
        window.google.log &&
        window.google.log(
          "doodle-basketball",
          "p:" +
            a +
            ",s:" +
            ("undefined" != typeof b ? b : "_") +
            ",nc:" +
            ("undefined" != typeof c ? c : "_") +
            ",d:" +
            R +
            ",",
        );
    },
    uc = function (a, b) {
      return function () {
        a.className = b;
      };
    },
    vc = function () {
      bc = p();
      mc || kc || N || S();
    },
    wc = function (a) {
      vc();
      (37 == a.keyCode ||
        39 == a.keyCode ||
        38 == a.keyCode ||
        40 == a.keyCode ||
        Ta(a.keyCode)) &&
        a.preventDefault();
      N && Ta(a.keyCode) && !M.i && fb(M);
      cc && cc(a);
    },
    xc = function (a) {
      Ta(a.keyCode) && a.preventDefault();
    },
    yc = function (a) {
      dc = !0;
      vc();
      document.activeElement != v || N || a.preventDefault();
      ec && ec(a);
    },
    zc = function (a) {
      dc && fc && ((dc = !1), fc(a));
    },
    Ac = function (a) {
      vc();
      gc && gc(a);
    },
    pc = function () {
      window.getSelection().selectAllChildren(K);
    },
    qc = function (a, b, c) {
      a.style.margin = c + "px 0 0 " + b + "px";
    };
  var Bc = {
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
    oc = function (a) {
      return (google.kHL in Bc && Bc[google.kHL][a]) || Bc.ALL[a];
    };
  var T = function (a, b) {
      this.x = a;
      this.y = b;
    },
    Cc = function (a, b) {
      return new T(a.x - b.x, a.y - b.y);
    },
    Dc = function (a, b) {
      return a.x * b.x + a.y * b.y;
    };
  T.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  var U = function (a, b, c, d) {
    this.start = new T(a, b);
    this.end = new T(c, d);
  };
  U.prototype.o = function (a) {
    if (!(a instanceof U)) return null;
    var b =
      (this.end.x - this.start.x) * (a.end.y - a.start.y) -
      (this.end.y - this.start.y) * (a.end.x - a.start.x);
    if (0 == b) return null;
    var c =
      ((this.start.y - a.start.y) * (a.end.x - a.start.x) -
        (this.start.x - a.start.x) * (a.end.y - a.start.y)) /
      b;
    a =
      ((this.start.y - a.start.y) * (this.end.x - this.start.x) -
        (this.start.x - a.start.x) * (this.end.y - this.start.y)) /
      b;
    return 0 <= c && 1 >= c && 0 <= a && 1 >= a
      ? new T(
          this.start.x + c * (this.end.x - this.start.x),
          this.start.y + c * (this.end.y - this.start.y),
        )
      : null;
  };
  var Ec = function (a, b, c) {
    this.x = a;
    this.y = b;
    this.r = c;
  };
  q(Ec, T);
  Ec.prototype.o = function (a) {
    var b;
    if (a instanceof U) {
      b = Cc(a.end, a.start);
      var c = Dc(Cc(this, a.start), b) / Dc(b, b),
        c = Math.min(1, Math.max(0, c));
      a = a.start;
      b = new T(b.x * c, b.y * c);
      b = new T(a.x + b.x, a.y + b.y);
    } else b = a;
    c = Cc(b, this);
    return Dc(c, c) <= this.r * this.r ? b : null;
  };
  var Fc = function (a) {
    this.v = a;
    this.y = this.x = 0;
    a = Za(a, 3);
    this.r = a.width / 2;
    this.A = a.width;
    this.h = a.height;
    this.i = new T(0, 0);
    this.k = this.p = 0;
    this.w = !1;
    this.P = Math.floor(20 * Math.random());
  };
  q(Fc, Ec);
  var Gc = function (a, b) {
    a.x += a.i.x * b;
    a.y += a.i.y * b;
    a.p += (((a.s ? 1 : -1) * a.i.x) / 95) * 2 * Math.PI * b;
    190 > a.y && (a.i.y += 294 * b);
    a.k = Math.max(a.k - 1 * b, 0);
  };
  Fc.prototype.C = function () {
    var a = V;
    a.save();
    a.translate(this.x, this.y);
    a.rotate(this.p);
    A(this.v, 3, a, -this.A / 2, -this.h / 2);
    a.globalAlpha = this.k;
    A(this.v, 29, a, -this.A / 2, -this.h / 2);
    a.restore();
  };
  Fc.prototype.V = function () {
    var a = Math.max(0.5, 1 - (180 - this.y) / 180),
      b = a - 0.25,
      c = V;
    c.save();
    c.translate(this.x, 195 - (this.s ? this.P : 0));
    c.scale(a, b);
    c.beginPath();
    c.arc(0, 0, 15, 0, 2 * Math.PI, !1);
    c.closePath();
    c.restore();
    c.fillStyle = "rgba(0,0,0,0.1)";
    c.fill();
  };
  var Hc = function (a, b) {
    var c = new T(a.x + a.i.x * b, a.y + a.i.y * b);
    return new Ec(c.x, c.y, a.r);
  };
  var Ic = function (a, b, c) {
    this.p = a;
    this.k = b;
    this.o = c;
    a = new Fc(a);
    a.x = this.k + a.r;
    a.y = this.o + 5;
    this.i = a;
  };
  Ic.prototype.C = function () {
    A(this.p, 1, V, this.k, this.o + 5);
    this.i.C();
    A(this.p, 2, V, this.k, this.o);
  };
  var Jc = function (a) {
    var b = a.i;
    a.i = null;
    if (!a.i) {
      var c = new Fc(a.p);
      c.x = 530;
      c.y = a.o + 5;
      c.i.x = -150;
      c.i.y = 0;
      a.i = c;
    }
    return b;
  };
  var Kc = function (a, b, c, d) {
    this.s = a;
    this.v = b;
    this.o = c;
    this.k = d;
    this.i = [];
    this.p = [80, 81, 82, 83, 84, 85, 86, 87];
  };
  Kc.prototype.C = function () {
    if (this.i.length) {
      for (
        var a = Za(this.s, 11), b = null, c = this.i.length - 1, d;
        (d = this.i[c]);
        c--
      )
        if (
          d.x + d.r < this.o ||
          d.x - d.r > this.o + a.width ||
          d.y - d.r > this.k + a.height
        )
          this.i.splice(c, 1);
        else if (!b || d.y > b.y) b = d;
      b &&
        ((a =
          b.y + b.r < this.k
            ? 0
            : Math.min(
                Math.floor(
                  ((b.y + b.r - this.k) / (a.height + b.r)) * this.p.length,
                ),
                this.p.length - 1,
              )),
        A(this.v, this.p[a], V, this.o, this.k));
    }
    this.i.length || A(this.s, 11, V, this.o, this.k);
  };
  var Lc = [[0, 5, 7, !1, 10, 80]],
    Mc = [
      [50, 5, 0, !0],
      [50, 5, 1, !0],
      [50, 5, 2, !0],
      [50, 5, 3, !1, 55, 85],
      [50, 5, 4, !1, 40, 90],
    ],
    Nc = [
      [50, 25, 52, !1, 15, 75],
      [50, 26, 53, !1, 15, 75],
      [50, 27, 54, !1, 17, 77],
      [50, 28, 55, !1, 17, 77],
      [50, 29, 56, !1, 19, 79],
      [50, 30, 57, !1, 19, 79],
      [50, 31, 58, !1, 17, 73],
      [50, 32, 59, !1, 17, 73],
      [50, 33, 60, !1, 17, 73],
    ],
    Oc = [
      [50, 34, 61, !1, 14, 60],
      [50, 35, 62, !1, 14, 58],
      [50, 36, 63, !1, 20, 50],
      [50, 37, 64, !1, 23, 45],
      [50, 38, 65, !1, 23, 41],
      [50, 39, 66, !1, 19, 41],
      [50, 40, 67, !1, 22, 30],
      [50, 41, 68, !1, 25, 20],
      [50, 42, 69, !1, 26, 13],
      [50, 43, 70, !1, 29, -2],
      [50, 44, 71, !1, 29, -7],
      [50, 45, 72, !1],
      [50, 46, 73, !1],
      [50, 47, 74, !1],
      [50, 48, 75, !1],
      [50, 49, 76, !1],
      [50, 50, 77, !1],
      [50, 51, 78, !1],
    ],
    Pc = [
      [50, 5, null],
      [50, 6, null],
      [50, 7, null],
      [50, 8, null],
      [50, 9, null],
      [50, 10, null],
      [50, 11, null],
      [50, 12, null],
      [50, 13, null],
    ],
    Qc = [
      [50, 14, null],
      [50, 15, null],
      [50, 16, null],
      [50, 17, null],
      [50, 18, null],
      [50, 19, null],
      [50, 20, null],
      [50, 21, null],
      [50, 22, null],
      [50, 23, null],
      [50, 24, null],
      [50, 21, null],
      [50, 22, null],
      [50, 23, null],
      [50, 24, null],
      [50, 21, null],
      [50, 22, null],
      [50, 23, null],
      [50, 24, null],
    ],
    Rc = function (a, b, c, d, e) {
      this.F = a;
      this.I = b;
      this.J = c;
      this.i = null;
      this.s = d;
      this.v = e;
      this.H = this.k = 0;
      this.D = 5;
      this.w = 7;
      this.M = !1;
      this.B = this.A = 0;
      this.L = 1.25 * Math.PI;
      this.G = 0;
      this.O = null;
    },
    Sc = function (a) {
      var b = a.i;
      a.i = null;
      return b;
    },
    X = function (a, b) {
      a.p = W();
      a.k = b;
      Tc(a);
    },
    Tc = function (a) {
      switch (a.k) {
        case 0:
          Uc(a, Lc[Lc.length - 1].slice(1));
          break;
        case 1:
          var b = Vc(a, Mc);
          b
            ? 2 == b.U && a.o
              ? ((a.o = 0), Wc(a, !0))
              : (b.U == Math.ceil(Mc.length / 2) && (a.i = Jc(a.J)), Uc(a, b))
            : X(a, 0);
          break;
        case 2:
          Xc(a, Nc);
          break;
        case 3:
          if ((b = Vc(a, Oc))) {
            if (10 <= b.U && a.i) {
              var c = a.i;
              a.i = null;
              var d = 200 + 150 * a.S,
                e = Math.sin(a.L) * d;
              c.i.x = Math.cos(a.L) * d;
              c.i.y = e;
              a.O(c);
            }
            Uc(a, b);
          } else X(a, 0), a.T();
          break;
        case 4:
          Xc(a, Pc);
          break;
        case 5:
          Xc(a, Qc);
      }
    };
  Rc.prototype.V = function () {
    var a = this.F.i[5][2],
      b = V;
    b.save();
    var c = 0.3;
    if (3 == this.k && 7 <= this.H)
      var d = Math.min((this.H - 7) / (Oc.length - 7 - 4), 1),
        c = c * (Math.cos((0.5 + d) * Math.PI) + 1);
    b.translate(this.s + a / 2, 200);
    b.scale(1, 0.25);
    b.beginPath();
    b.arc(0, 0, 20, 0, 2 * Math.PI, !1);
    b.closePath();
    b.restore();
    b.fillStyle = "rgba(0,0,0," + c + ")";
    b.fill();
  };
  Rc.prototype.C = function () {
    0 == this.k || 1 == this.k
      ? A(this.F, this.D, V, this.s, this.v)
      : A(this.I, this.D, V, this.s, this.v);
    this.M ? (Yc(this), Zc(this)) : (Zc(this), Yc(this));
  };
  var Zc = function (a) {
      if ((a = a.i)) a.V(), a.C();
    },
    Yc = function (a) {
      null !== a.w &&
        (0 == a.k ? A(a.F, a.w, V, a.s, a.v) : A(a.I, a.w, V, a.s, a.v));
    },
    Xc = function (a, b) {
      var c = Vc(a, b);
      c || (c = b[b.length - 1].slice(1));
      Uc(a, c);
    },
    Vc = function (a, b) {
      var c;
      i: {
        c = W() - a.p;
        for (var d = 0, e = 0, f; (f = b[e]); e++) {
          if (c < d + f[0]) {
            f = f.slice(1);
            f.U = e;
            c = f;
            break i;
          }
          d += f[0];
        }
        c = null;
      }
      return c;
    },
    Uc = function (a, b) {
      a.D = b[0];
      a.w = b[1];
      a.M = b[2];
      a.H = b.U;
      a.i &&
        b[3] &&
        b[4] &&
        ((a.i.x = a.s + b[3] + a.A), (a.i.y = a.v + b[4] + a.B));
    },
    $c = function (a, b) {
      b ? (a.i = Jc(a.J)) : X(a, 1);
    },
    Wc = function (a, b) {
      a.o ||
        (3 != a.k && (a.i || $c(a, !0), X(a, 2)), (a.o = W() - (b ? 200 : 0)));
    };
  var ad = [27, 28, 26, 24],
    bd = function (a, b, c) {
      this.i = a;
      this.k = b;
      this.v = c;
      this.p = this.s = 0;
      this.w = !1;
      this.o = 0;
      a = Za(this.i, 24);
      this.A = a.width / 2;
      this.B = a.height / 2;
    };
  bd.prototype.C = function () {
    var a = V;
    a.globalAlpha = this.o;
    a.save();
    a.translate(this.k + 30, this.v + 65);
    a.scale(1, 0.25);
    a.beginPath();
    a.arc(0, 0, 40, 0, 2 * Math.PI, !1);
    a.closePath();
    a.restore();
    a.fillStyle = "rgba(0,0,0,0.1)";
    a.fill();
    var b;
    if (this.w && !this.p) b = 25;
    else if (this.p) {
      var c = p() - this.p,
        d = 200 / ad.length;
      200 <= c
        ? (b = 24)
        : (b = ad[Math.min(Math.floor(c / d), ad.length - 1)]);
    } else b = 28;
    A(this.i, b, V, this.k, this.v);
    24 == b &&
      ((b = Za(this.i, 22)),
      a.save(),
      a.translate(this.k + this.A, this.v + this.B),
      a.rotate(this.s),
      A(
        this.i,
        22,
        V,
        -b.width / 2 - (this.A - 36),
        -b.height / 2 - (this.B - 36),
      ),
      a.restore());
    a.globalAlpha = 1;
  };
  var cd = function (a, b, c) {
    this.s = a;
    this.k = b;
    this.p = c;
    this.i = this.o = 0;
  };
  cd.prototype.C = function () {
    var a = V,
      b = dd(p(), 2300),
      c = 1300 > b;
    a.save();
    a.globalAlpha = this.o;
    A(this.s, c ? 8 : 10, a, this.k, this.p);
    A(this.s, 31, a, this.k + 135, this.p + 105);
    A(this.s, 32, a, this.k + 155, this.p + 115);
    c &&
      1 == this.o &&
      ((a.globalAlpha = Math.min(b / 1e3, 1)), A(this.s, 9, a, this.k, this.p));
    a.restore();
  };
  var ed = {
      ALL: ["Score", "Basketball", "I played basketball! #GoogleDoodle"],
      af: [
        "Hoogste telling",
        "Basketbal",
        "Ek het basketbal gespeel #GoogleDoodle",
      ],
      "am_ET(Amharic/ALL)": [
        "\u12a8\u134d\u1270\u129b \u12cd\u1324\u1275",
        "\u1245\u122d\u132b\u1275 \u12b3\u1235",
        "\u1245\u122d\u132b\u1275 \u12b3\u1235 \u1270\u132b\u12cd\u127b\u1208\u1201! #GoogleDoodle",
      ],
      ar: [
        "\u0627\u0644\u0646\u062a\u064a\u062c\u0629",
        "\u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629",
        "\u0645\u0627\u0631\u0633\u062a \u0644\u0639\u0628\u0629 \u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629 GoogleDoodle#",
      ],
      az: [
        "\u018fn y\u00fcks\u0259k bal",
        "Basketbol",
        "M\u0259n basketbol oynad\u0131m  #GoogleDoodle",
      ],
      be: [
        "\u041d\u0430\u0439\u043b\u0435\u043f\u0448\u044b \u0432\u044b\u043d\u0456\u043a",
        "\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b",
        "\u042f \u0433\u0443\u043b\u044f\u045e \u0443 \u0431\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b #GoogleDoodle",
      ],
      bg: [
        "\u041d\u0430\u0439-\u0434\u043e\u0431\u044a\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442",
        "\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b",
        "\u0418\u0433\u0440\u0430\u0445 \u0431\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b #GoogleDoodle",
      ],
      bn: [
        "\u09b8\u09cd\u0995\u09cb\u09b0",
        "\u09ac\u09be\u09b8\u09cd\u0995\u09c7\u099f\u09ac\u09b2",
        "\u0986\u09ae\u09bf \u09ac\u09be\u09b8\u09cd\u0995\u09c7\u099f\u09ac\u09b2 \u0996\u09c7\u09b2\u09c7\u099b\u09bf #\u0997\u09c1\u0997\u09b2\u09a1\u09c1\u09a1\u09b2",
      ],
      bs: ["Rezultat", "Ko\u0161arka", "Igrao sam ko\u0161arku #GoogleDoodle"],
      ca: ["R\u00e8cord", "Basquetbol", "He jugat a basquetbol #GoogleDoodle"],
      cs: [
        "Nejvy\u0161\u0161\u00ed sk\u00f3re",
        "Basketbal",
        "Zahrajte si basketbal #GoogleDoodle",
      ],
      da: ["Top score", "Basketball", "Jeg spillede basketball #GoogleDoodle"],
      de: [
        "Rekord",
        "Basketball",
        "Ich habe Basketball gespielt #GoogleDoodle",
      ],
      el: [
        "\u03a5\u03c8\u03b7\u03bb\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u0392\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b5\u03c2",
        "\u039c\u03c0\u03ac\u03c3\u03ba\u03b5\u03c4",
        "\u0388\u03c0\u03b1\u03b9\u03be\u03b1 \u03bc\u03c0\u03ac\u03c3\u03ba\u03b5\u03c4 #GoogleDoodle",
      ],
      en_us: ["Score", "Basketball", "I played basketball! #GoogleDoodle"],
      "en-GB": ["Score", "Basketball", "I played basketball! #GoogleDoodle"],
      es: [
        "R\u00e9cord",
        "Baloncesto",
        "He jugado al baloncesto #GoogleDoodle",
      ],
      "es-419": [
        "Resultado",
        "B\u00e1squetbol",
        "He jugado b\u00e1squetbol #GoogleDoodle",
      ],
      et: [
        "Rekordtulemus",
        "Korvpall",
        "M\u00e4ngisin korvpalli #GoogleDoodle",
      ],
      eu: ["Emaitza", "Saskibaloia", "Saskibaloian jokatu dut #GoogleDoodle"],
      fi: ["K\u00e4rkitulos", "Koripallo", "Pelasin koripalloa #GoogleDoodle"],
      fr: [
        "R\u00e9sultat",
        "Basketball",
        "J'ai jou\u00e9 au basketball #GoogleDoodle",
      ],
      ga: [
        "Sc\u00f3r is fearr",
        "Cispheil",
        "D'imir m\u00e9 cispheil #GoogleDoodle",
      ],
      gl: ["Record", "Baloncesto", "Xoguei \u00f3 baloncesto #GoogleDoodle"],
      hr: ["Rezultat", "Ko\u0161arka", "Igrao sam ko\u0161arku #GoogleDoodle"],
      is: [
        "Flest stig",
        "K\u00f6rfubolti",
        "\u00c9g spila\u00f0i k\u00f6rfubolta #GoogleDoodle",
      ],
      it: [
        "Miglior punteggio",
        "Pallacanestro",
        "Ho giocato a pallacanestro #GoogleDoodle",
      ],
      iw: [
        "\u05e0\u05d9\u05e7\u05d5\u05d3",
        "\u05db\u05d3\u05d5\u05e8\u05e1\u05dc",
        "\u05e9\u05d9\u05d7\u05e7\u05ea\u05d9 \u05db\u05d3\u05d5\u05e8\u05e1\u05dc  #GoogleDoodle",
      ],
      hu: [
        "Legjobb eredm\u00e9ny",
        "Kos\u00e1rlabda",
        "Kos\u00e1rlabd\u00e1ztam #GoogleDoodle",
      ],
      ja: [
        "\u30b9\u30b3\u30a2",
        "\u30d0\u30b9\u30b1\u30c3\u30c8\u30dc\u30fc\u30eb",
        "\u300c\u30d0\u30b9\u30b1\u30c3\u30c8\u30dc\u30fc\u30eb\u300d\u3092\u3084\u3063\u305f! #GoogleDoodle",
      ],
      ko: [
        "\uae30\ub85d",
        "\ub18d\uad6c",
        "\ub18d\uad6c\ub97c \ud588\uc5b4\uc694! #GoogleDoodle ",
      ],
      lt: [
        "Rezultatas",
        "Krep\u0161inis",
        "A\u0161 \u017eaid\u017eiau Google krep\u0161in\u012f!",
      ],
      lv: [
        "Lab\u0101kais rezult\u0101ts",
        "Basketbols",
        "Es sp\u0113l\u0113ju basketbolu #GoogleDoodle",
      ],
      mk: [
        "\u041d\u0430\u0434\u043e\u0431\u0430\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442",
        "\u041a\u043e\u0448\u0430\u0440\u043a\u0430",
        "\u0418\u0433\u0440\u0430\u0432 \u043a\u043e\u0448\u0430\u0440\u043a\u0430 #GoogleDoodle",
      ],
      mo: ["Scor de top", "Baschet", "Am jucat baschet #GoogleDoodle"],
      mr: [
        "\u0938\u0930\u094d\u0935\u093e\u0927\u093f\u0915 \u0917\u0941\u0923",
        "\u092c\u093e\u0938\u094d\u0915\u0947\u091f\u092c\u0949\u0932",
        "\u092e\u0940 \u092c\u093e\u0938\u094d\u0915\u0947\u091f\u092c\u0949\u0932 \u0916\u0947\u0933\u0932\u094b #GoogleDoodle",
      ],
      ms_my: [
        "Skor tertinggi",
        "Bola Keranjang",
        "Saya bermain bola keranjang #GoogleDoodle",
      ],
      nl: ["Topscore", "Basketbal", "Ik heb basketbal gespeeld #GoogleDoodle"],
      no: ["Resultat", "Basketball", "Jeg spilte basketball!  #GoogleDoodle"],
      pl: [
        "Najlepszy wynik",
        "Koszyk\u00f3wka",
        "Gram w koszyk\u00f3wk\u0119 #GoogleDoodle",
      ],
      "pt-BR": [
        "Pontua\u00e7\u00e3o",
        "Basquete",
        "Eu joguei Basquete #GoogleDoodle",
      ],
      "pt-PT": [
        "Pontua\u00e7\u00e3o",
        "Basquetebol",
        "Eu joguei Basquetebol #GoogleDoodle",
      ],
      ro: ["Scor de top", "Baschet", "Am jucat baschet #GoogleDoodle"],
      ru: [
        "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
        "\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b",
        "\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b #GoogleDoodle",
      ],
      sk: [
        "Najlep\u0161ie sk\u00f3re",
        "Basketbal",
        "Zahrajte si basketbal #GoogleDoodle",
      ],
      sl: [
        "Najbolj\u0161i rezultat",
        "Ko\u0161arka",
        "Igral sem ko\u0161arko #GoogleDoodle",
      ],
      sr: [
        "\u041d\u0430\u0458\u0431\u043e\u0459\u0438 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442",
        "\u041a\u043e\u0448\u0430\u0440\u043a\u0430",
        "\u0418\u0433\u0440\u0430\u043c \u043a\u043e\u0448\u0430\u0440\u043a\u0443 #GoogleDoodle",
      ],
      sv: ["Resultat", "Basket", "Jag spelade basket #GoogleDoodle"],
      sw: [
        "Alama za Juu",
        "Mpira wa Kikapu",
        "Nilicheza Mpira wa Kikapu #GoogleDoodle",
      ],
      th_All: [
        "\u0e04\u0e30\u0e41\u0e19\u0e19\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",
        "\u0e1a\u0e32\u0e2a\u0e40\u0e01\u0e47\u0e15\u0e1a\u0e2d\u0e25 ",
        "\u0e09\u0e31\u0e19\u0e40\u0e25\u0e48\u0e19\u0e1a\u0e32\u0e2a\u0e40\u0e01\u0e47\u0e15\u0e1a\u0e2d\u0e25\u0e1a\u0e19 Google Doodle!",
      ],
      tr: [
        "En y\u00fcksek puan",
        "Basketbol",
        "Basketbol oynad\u0131m! #GoogleDoodle",
      ],
      uk: [
        "\u041d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
        "\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b",
        "\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b #GoogleDoodle",
      ],
      "zh-CN": [
        "\u6700\u9ad8\u5f97\u5206",
        "\u7bee\u7403",
        "#Google\u6d82\u9e26#\u6211\u6253\u4e86\u7bee\u7403",
      ],
      "zh-TW_HK": [
        "\u6700\u9ad8\u5f97\u5206",
        "\u7c43\u7403",
        "\u6211\u6253\u4e86\u5834\u7c43\u7403\uff01 #GoogleDoodle",
      ],
      "zh-TW_tw": [
        "\u6700\u9ad8\u5f97\u5206",
        "\u7c43\u7403",
        "\u6211\u6253\u4e86\u5834\u7c43\u7403\uff01 #GoogleDoodle",
      ],
    },
    nc = function (a) {
      return (google.kHL in ed && ed[google.kHL][a]) || ed.ALL[a];
    };
  var fd = 1 / 30,
    gd = 1 / 60,
    hd =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (a) {
        window.setTimeout(a, 1e3 * fd);
      },
    dd = eval("(function(a,n){return a" + String.fromCharCode(37) + "n;})"),
    id = function (a, b) {
      this.w = a;
      this.va = b;
      this.v = new Ic(a, 325, 155);
      this.i = new Rc(a, b, this.v, 265, 75);
      this.ka = new Kc(a, b, 85, 62);
      this.G = new bd(a, 240, 80);
      this.k = new cd(a, 115, 0);
      this.o = [];
      this.wa = [new U(80, 10, 80, 70), new T(132, 62)];
      this.ma = new U(90, 64, 110, 64);
      this.M = new U(-50, 207, 580, 207);
      this.J = 0;
      this.D = !1;
      this.L = this.p = 0;
      this.S = this.s = !1;
      this.A = this.I = this.H = this.B = 0;
      this.la = this.O = !1;
      this.na = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
      var c = n(this.xa, this),
        d = n(this.ya, this),
        e = n(this.za, this);
      fc = n(this.Aa, this);
      v.onmouseout = zc;
      v.onmouseup = zc;
      d && (v.onkeyup = d);
      ec = e;
      v.onmousedown = yc;
      gc = null;
      v.onmousemove = Ac;
      cc = c;
      v.onkeydown = wc;
      v.style.cursor = "pointer";
      -1 != navigator.userAgent.indexOf("Opera") && (v.onkeypress = xc);
      Y.onmouseover = n(this.oa, this, !0);
      Y.onmouseout = n(this.oa, this, !1);
      tc(n(this.Ba, this));
    },
    kd = function (a) {
      V.clearRect(0, 0, 530, 207);
      A(a.w, 0, V, 0, 0);
      jd(a, a.p, 340);
      5 <= Z(a) || 0 == Z(a)
        ? jd(a, Z(a), 431)
        : 1 == dd(Math.round(Z(a) / 0.25), 2) && jd(a, Z(a), 431);
      a.G.C();
      a.i.V();
      var b, c;
      for (b = 0; (c = a.o[b]); b++) c.V();
      for (b = 0; (c = a.o[b]) && !(4 > c.P); b++) c.C();
      a.i.C();
      for (a.v.C(); (c = a.o[b]); b++) c.C();
      A(a.w, 30, V, 80, 60);
      a.ka.C();
      a.k.C();
      A(a.w, 6, V, 0, 0);
    },
    jd = function (a, b, c) {
      var d = dd(Math.floor(b / 10), 10);
      b = Math.floor(dd(b, 10));
      A(a.w, a.na[d], V, c + (1 == d ? 7 : 0), 10);
      A(a.w, a.na[b], V, c + 28 + (1 == b ? 7 : 0), 10);
    },
    ld = function (a) {
      a.D || ((a.D = !0), a.T());
    };
  id.prototype.T = function () {
    if (this.D) {
      0 == this.J && (this.J = W());
      var a = (W() - this.J) / 1e3;
      if (!(a < gd)) {
        for (a > fd && (a = fd); a >= gd; ) {
          var b = gd;
          if (1 <= this.G.o && !this.s) this.D = !1;
          else {
            !this.F && this.H && 1e4 < W() - this.H && (this.F = W());
            if (Z(this)) {
              if (0 < this.I && null == this.i.i) {
                var c = Math.min(this.I, 200 * b);
                this.i.s += c;
                this.k.k = this.k.k + c;
                this.I -= c;
              }
              if (
                (0 < this.A && null == this.i.i) ||
                (null != this.i.i && 3 == this.i.k) ||
                50 > this.A
              )
                (c = Math.min(this.A, 200 * b)),
                  (this.v.k = this.v.k + c),
                  (this.A -= c);
            }
            c = this.G;
            c.o = Math.min(c.o + 2 * b, 1);
            !c.p ||
              200 > p() - c.p ||
              ((c.k += 150 * b),
              (c.s += ((150 * b) / (c.i.i[23][2] * Math.PI)) * 2 * Math.PI));
            c = this.k;
            if (c.o != c.i) {
              var d = c.i - c.o;
              c.o = Math.min(
                1,
                Math.max(
                  0,
                  c.o + (d / Math.abs(d)) * (1e3 / (c.o < c.i ? 200 : 100)) * b,
                ),
              );
            }
            c = this.i;
            if (c.o && 2 == c.k) {
              var d = W() - c.o,
                e = 1;
              1e3 < d
                ? ((c.A = Math.round(4 * Math.random() - 2)),
                  (c.B = Math.round(4 * Math.random() - 2)))
                : (e = d / 1e3);
              c.i.k = e;
            } else c.A = c.B = 0;
            Tc(c);
            c = this.v;
            e = c.i.i;
            c.i.x - c.i.r <= c.k &&
              ((c.i.x = c.k + c.i.r), (e.x = 0.25 * -e.x));
            d = c.i;
            e = Math.max(e.x - 100 * b, -150);
            d.i.x = e;
            d.i.y = 0;
            Gc(c.i, b);
            c = this.o.length - 1;
            for (d = void 0; this.o[c]; c--) {
              var e = (d = this.o[c]),
                f = b,
                g = Hc(e, f),
                h = new T(e.x + e.i.x * f, e.y + e.i.y * f),
                k = md(this, e, new U(e.x, e.y, h.x, h.y));
              k &&
                ((f = (Cc(k, e).length() / Cc(g, e).length()) * f * 0.9),
                (g = Hc(e, f)),
                (e.s = !0));
              if ((k = md(this, e, g)))
                (h = e),
                  (g = Cc(k, g)),
                  (k = g.length()),
                  (g = new T(g.x / k, g.y / k)),
                  (k = Math.abs(Dc(g, h.i))),
                  (h.i.x -= 2 * g.x * k),
                  (h.i.y -= 2 * g.y * k),
                  (h.i.x *= 0.6),
                  (h.i.y *= 0.6),
                  15 > Math.abs(h.i.y) && (h.i.y = 0),
                  0 > Math.abs(h.i.x) && (h.i.x = 0),
                  (e.s = !0);
              Gc(e, f);
              0 < e.i.y &&
                !e.w &&
                e.o(this.ma) &&
                (this.ka.i.push(e),
                (e.w = !0),
                (this.p += 3 <= Math.floor(this.L / 3) ? 3 : 2),
                this.L++,
                0 == dd(this.L, 4) && (this.I = this.A = 50));
              (0 > d.x + d.r || 530 < d.x - d.r) && this.o.splice(c, 1);
            }
            this.s &&
              5e3 < new Date().getTime() - this.H &&
              1 != this.k.i &&
              (this.la || sc(3), (this.la = !0), (this.k.i = 1));
            if (0 >= Z(this)) {
              1 == this.k.i && ((this.k.i = 0), (this.O = !0));
              b = void 0;
              i: {
                b = 0;
                for (c = void 0; (c = this.o[b]); b++)
                  if (c.y < this.ma.start.y) {
                    b = !0;
                    break i;
                  }
                b = !1;
              }
              c = this.i;
              2 == c.k || 3 == c.k
                ? nd(this, !0)
                : b && this.B
                  ? (clearTimeout(this.B), (this.B = 0))
                  : b || this.B || (this.B = setTimeout(n(this.Ca, this), 500));
            }
          }
          a -= gd;
        }
        this.J = Math.floor(W() - 1e3 * a);
      }
      kd(this);
      hd(n(this.T, this));
    }
  };
  var Z = function (a) {
      return a.F ? Math.max(24 - (W() - a.F) / 1e3, 0) : 24;
    },
    md = function (a, b, c) {
      for (var d = 0, e; (e = a.wa[d]); d++) if ((e = c.o(e))) return e;
      return c.o(
        new U(a.M.start.x, a.M.start.y - b.P, a.M.end.x, a.M.end.y - b.P),
      );
    };
  id.prototype.Ca = function () {
    var a = 0;
    36 <= this.p ? (a = 3) : 21 <= this.p ? (a = 2) : 8 <= this.p && (a = 1);
    var b = Sc(this.i);
    b && od(this, b);
    0 == a ? X(this.i, 5) : X(this.i, 4);
    setTimeout(
      n(function () {
        this.B = 0;
        sc(1, this.p, a);
        var b = this.p.toString(),
          d = a,
          e;
        Xb.F = ic + b;
        e || (e = Wb);
        Xb.B =
          "https://www.google.com/logos/2012/" + e + "12-hp-share" + d + ".png";
        Ub.textContent = b;
        for (b = 0; 3 > b; b++)
          lc[b].className = b < d ? "game_smg" : "game_smh";
        P.style.display = "";
        fb(Q);
        this.D = !1;
      }, this),
      1500,
    );
  };
  var pd = function (a) {
    a.G.p = p();
    $c(a.i, !1);
    a.s = !0;
    sc(0);
    a.H = new Date().getTime();
    Ua() ||
      (window.localStorage &&
        window.localStorage.setItem("doodle-basketball-tooltip", "1"),
      (a.k.i = 1));
    ld(a);
    Wa();
    a.S ||
      ((a.S = !0),
      (ia[2] = Sa[0]),
      (ia[4] = Sa[0]),
      (ia[5] = Sa[0]),
      (ia[6] = Sa[0]),
      qa(function () {
        2 != R && (R = 2);
      }));
  };
  l = id.prototype;
  l.Ba = function () {
    sc(2);
    this.v = new Ic(this.w, 325, 155);
    this.i = new Rc(this.w, this.va, this.v, 265, 75);
    this.k.k = 115;
    this.o = [];
    this.L = this.p = this.F = this.J = 0;
    this.H = new Date().getTime();
    $c(this.i, !1);
    this.I = this.A = 0;
    this.O && ((this.k.i = 1), (this.O = !1));
    ld(this);
  };
  l.za = function (a) {
    if (this.s && Y) {
      var b;
      b = (a = a || window.event)
        ? (b = a.targetTouches && a.targetTouches[0]) && void 0 !== b.pageX
          ? [b.pageX, b.pageY]
          : void 0 !== a.clientX
            ? [
                a.clientX +
                  ("rtl" == document.dir ? -1 : 1) *
                    (document.body.scrollLeft ||
                      document.documentElement.scrollLeft ||
                      0),
                a.clientY +
                  (document.body.scrollTop ||
                    document.documentElement.scrollTop ||
                    0),
              ]
            : void 0 !== a.pageX
              ? [a.pageX, a.pageY]
              : [0, 0]
        : [0, 0];
      var c;
      a = Y;
      var d = (c = 0);
      if (a) {
        do (c += a.offsetLeft), (d += a.offsetTop);
        while ((a = a.offsetParent));
      }
      c = [c, d];
      a = b[0] - c[0];
      b = b[1] - c[1];
      if ((c = 1 == this.k.i))
        (c = this.k),
          (d = Za(c.s, 8)),
          (c =
            a >= c.k && b >= c.p && a <= c.k + d.width && b <= c.p + d.height);
      c || qd(this);
    }
  };
  l.Aa = function () {
    2 != R && (R = 1);
    this.s ? nd(this, !1) : pd(this);
  };
  l.oa = function (a) {
    this.s || this.G.w == a || ((this.G.w = a), kd(this));
  };
  l.ya = function (a) {
    2 != R && (R = 0);
    32 == a.keyCode && nd(this, !1);
  };
  l.xa = function (a) {
    32 == a.keyCode && qd(this);
  };
  var qd = function (a) {
      !a.s || 0 >= Z(a) || ((a.H = new Date().getTime()), Wc(a.i, !1));
    },
    nd = function (a, b) {
      if (b || (a.s && !(0 >= Z(a)))) {
        a.k && (a.k.i = 0);
        var c = a.i,
          d = n(a.Ea, a),
          e = n(a.Da, a);
        if (c.o && 2 != c.k) c.o = 0;
        else {
          var f = W() - c.o;
          c.G++;
          !c.o ||
            (200 > f && 2 > c.G) ||
            ((c.G = 0),
            (c.S = Math.min(f / 1e3, 1)),
            (c.o = 0),
            X(c, 3),
            (c.O = d),
            (c.T = e));
        }
      }
    };
  id.prototype.Ea = function (a) {
    this.F || (this.F = W());
    od(this, a);
  };
  var od = function (a, b) {
    for (var c = 0, d; (d = a.o[c]); c++)
      if (b.P >= d.P) {
        a.o.splice(c, 0, b);
        return;
      }
    a.o.push(b);
  };
  id.prototype.Da = function () {
    0 >= Z(this) || $c(this.i, !1);
  };
  var rd = !1,
    sd = null,
    Y = null,
    V = null,
    td = new Ya(assetsPath + "sprite-game.png", [
      [0, 725, 530, 207],
      [0, 710, 236, 12],
      [71, 565, 236, 52],
      [94, 454, 30, 30],
      [0, 210, 530, 207],
      [0, 420, 68, 129],
      [0, 0, 530, 207],
      [0, 565, 68, 129],
      [163, 420, 150, 142],
      [316, 420, 150, 142],
      [373, 565, 150, 142],
      [533, 0, 45, 38],
      [533, 41, 20, 31],
      [310, 565, 4, 31],
      [533, 75, 20, 31],
      [141, 488, 19, 31],
      [533, 710, 20, 31],
      [71, 454, 20, 31],
      [533, 439, 20, 31],
      [533, 473, 19, 31],
      [533, 507, 19, 31],
      [71, 420, 20, 31],
      [310, 606, 27, 26],
      [533, 541, 67, 69],
      [533, 135, 67, 73],
      [533, 211, 67, 73],
      [533, 363, 67, 73],
      [71, 488, 67, 73],
      [533, 287, 67, 73],
      [340, 606, 30, 29],
      [310, 599, 54, 4],
      [533, 109, 20, 23],
      [556, 710, 16, 16],
    ]),
    ud = new Ya(assetsPath + "sprite-player.png", [
      [0, 1756, 68, 129],
      [0, 1888, 68, 129],
      [0, 3724, 68, 129],
      [0, 8820, 68, 129],
      [0, 9612, 68, 129],
      [0, 7196, 68, 129],
      [0, 3380, 68, 129],
      [0, 4384, 68, 129],
      [0, 3856, 68, 129],
      [0, 5744, 68, 129],
      [0, 832, 73, 129],
      [0, 3116, 73, 129],
      [0, 9956, 73, 129],
      [0, 8120, 73, 129],
      [0, 6008, 68, 129],
      [0, 8252, 68, 129],
      [0, 7988, 68, 129],
      [0, 10220, 68, 129],
      [0, 10088, 68, 129],
      [0, 7460, 68, 129],
      [0, 8384, 68, 129],
      [0, 2284, 68, 129],
      [0, 3592, 68, 129],
      [0, 4120, 68, 129],
      [0, 2152, 68, 129],
      [0, 264, 68, 129],
      [0, 2812, 68, 129],
      [0, 132, 68, 129],
      [0, 6140, 68, 129],
      [0, 4648, 68, 129],
      [0, 4780, 68, 129],
      [0, 4952, 68, 129],
      [0, 10484, 68, 129],
      [0, 7328, 68, 129],
      [0, 9824, 68, 129],
      [0, 10616, 68, 129],
      [0, 2020, 68, 129],
      [0, 8648, 68, 129],
      [0, 1492, 68, 129],
      [0, 3248, 68, 129],
      [0, 4252, 68, 129],
      [0, 5876, 68, 129],
      [0, 8952, 68, 129],
      [0, 5084, 68, 129],
      [0, 2548, 68, 129],
      [0, 7856, 68, 129],
      [0, 7592, 68, 129],
      [0, 528, 68, 129],
      [0, 5348, 68, 129],
      [0, 2944, 68, 129],
      [0, 7724, 68, 129],
      [0, 700, 68, 129],
      [0, 8516, 68, 129],
      [0, 9216, 68, 129],
      [0, 4516, 68, 129],
      [0, 9348, 68, 129],
      [0, 6272, 68, 129],
      [0, 2416, 68, 129],
      [0, 9480, 68, 129],
      [0, 6800, 68, 129],
      [0, 5216, 68, 129],
      [0, 7064, 68, 129],
      [0, 2680, 68, 129],
      [0, 6404, 68, 129],
      [0, 10352, 68, 129],
      [0, 10748, 68, 129],
      [0, 3988, 68, 129],
      [0, 1228, 68, 129],
      [0, 1624, 68, 129],
      [0, 0, 68, 129],
      [0, 6932, 68, 129],
      [0, 964, 68, 129],
      [0, 1096, 68, 129],
      [0, 5480, 68, 129],
      [0, 1360, 68, 129],
      [0, 396, 68, 129],
      [0, 5612, 68, 129],
      [0, 9084, 68, 129],
      [0, 6536, 68, 129],
      [0, 6668, 68, 129],
      [0, 8780, 45, 37],
      [0, 4912, 45, 37],
      [0, 9784, 45, 37],
      [0, 9744, 45, 37],
      [0, 3512, 45, 37],
      [0, 3076, 45, 37],
      [0, 660, 45, 37],
      [0, 3552, 45, 37],
    ]),
    vd = null,
    W = function () {
      return new Date().getTime();
    };
  (function (a, b, c) {
    var d = function () {
        a();
        window.lol && window.lol();
      },
      e = function () {
        sa(d, b, c);
        ra(d, b);
        d();
      };
    google && google.x ? google.x({ id: "DOODLE" }, e) : e();
  })(
    function () {
      !rd &&
        ((cb = !1),
        (sd = document.getElementById("game")) &&
          (Y = document.getElementById("game-canvas")) &&
          Y.getContext &&
          (V = Y.getContext("2d"))) &&
        ((rd = !0),
        (v = sd),
        google.doodle &&
          google.doodle.alt &&
          sd.setAttribute("aria-label", google.doodle.alt),
        $a(td, function () {
          vd = new id(td, ud);
          ld(vd);
          $a(ud, function () {});
        }));
    },
    function () {
      vd && (vd.D = !1);
      rd = !1;
      mc = cb = !0;
      v && (v.innerHTML = "");
      N = !1;
    },
    function () {
      return document.activeElement != v;
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
