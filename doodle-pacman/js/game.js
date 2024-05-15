const assetsPath = "/doodle-pacman/assets/";
window.google = {};

(function () {
  var aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: aa(a) };
    },
    ca =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    da;
  if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
  else {
    var ea;
    a: {
      var fa = { a: !0 },
        ha = {};
      try {
        ha.__proto__ = fa;
        ea = ha.a;
        break a;
      } catch (a) {}
      ea = !1;
    }
    da = ea
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ia = da,
    ja = function (a, b) {
      a.prototype = ca(b.prototype);
      a.prototype.constructor = a;
      if (ia) ia(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Lb = b.prototype;
    },
    ka = function (a) {
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
    },
    la = ka(this),
    ma =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    na = function (a, b) {
      if (b) {
        var c = la;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          e in c || (c[e] = {});
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          null != b &&
          ma(c, a, { configurable: !0, writable: !0, value: b });
      }
    };
  na("Promise", function (a) {
    function b() {
      this.g = null;
    }
    function c(h) {
      return h instanceof e
        ? h
        : new e(function (g) {
            g(h);
          });
    }
    if (a) return a;
    b.prototype.i = function (h) {
      if (null == this.g) {
        this.g = [];
        var g = this;
        this.j(function () {
          g.w();
        });
      }
      this.g.push(h);
    };
    var d = la.setTimeout;
    b.prototype.j = function (h) {
      d(h, 0);
    };
    b.prototype.w = function () {
      for (; this.g && this.g.length; ) {
        var h = this.g;
        this.g = [];
        for (var g = 0; g < h.length; ++g) {
          var k = h[g];
          h[g] = null;
          try {
            k();
          } catch (l) {
            this.v(l);
          }
        }
      }
      this.g = null;
    };
    b.prototype.v = function (h) {
      this.j(function () {
        throw h;
      });
    };
    var e = function (h) {
      this.i = 0;
      this.j = void 0;
      this.g = [];
      var g = this.v();
      try {
        h(g.resolve, g.reject);
      } catch (k) {
        g.reject(k);
      }
    };
    e.prototype.v = function () {
      function h(l) {
        return function (q) {
          k || ((k = !0), l.call(g, q));
        };
      }
      var g = this,
        k = !1;
      return { resolve: h(this.Ta), reject: h(this.w) };
    };
    e.prototype.Ta = function (h) {
      if (h === this)
        this.w(new TypeError("A Promise cannot resolve to itself"));
      else if (h instanceof e) this.ab(h);
      else {
        a: switch (typeof h) {
          case "object":
            var g = null != h;
            break a;
          case "function":
            g = !0;
            break a;
          default:
            g = !1;
        }
        g ? this.Ra(h) : this.U(h);
      }
    };
    e.prototype.Ra = function (h) {
      var g = void 0;
      try {
        g = h.then;
      } catch (k) {
        this.w(k);
        return;
      }
      "function" == typeof g ? this.hb(g, h) : this.U(h);
    };
    e.prototype.w = function (h) {
      this.W(2, h);
    };
    e.prototype.U = function (h) {
      this.W(1, h);
    };
    e.prototype.W = function (h, g) {
      if (0 != this.i) throw Error("b`" + h + "`" + g + "`" + this.i);
      this.i = h;
      this.j = g;
      this.Ka();
    };
    e.prototype.Ka = function () {
      if (null != this.g) {
        for (var h = 0; h < this.g.length; ++h) f.i(this.g[h]);
        this.g = null;
      }
    };
    var f = new b();
    e.prototype.ab = function (h) {
      var g = this.v();
      h.yb(g.resolve, g.reject);
    };
    e.prototype.hb = function (h, g) {
      var k = this.v();
      try {
        h.call(g, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    e.prototype.then = function (h, g) {
      function k(U, pa) {
        return "function" == typeof U
          ? function ($b) {
              try {
                l(U($b));
              } catch (ac) {
                q(ac);
              }
            }
          : pa;
      }
      var l,
        q,
        L = new e(function (U, pa) {
          l = U;
          q = pa;
        });
      this.yb(k(h, l), k(g, q));
      return L;
    };
    e.prototype.catch = function (h) {
      return this.then(void 0, h);
    };
    e.prototype.yb = function (h, g) {
      function k() {
        switch (l.i) {
          case 1:
            h(l.j);
            break;
          case 2:
            g(l.j);
            break;
          default:
            throw Error("c`" + l.i);
        }
      }
      var l = this;
      null == this.g ? f.i(k) : this.g.push(k);
    };
    e.resolve = c;
    e.reject = function (h) {
      return new e(function (g, k) {
        k(h);
      });
    };
    e.race = function (h) {
      return new e(function (g, k) {
        for (var l = ba(h), q = l.next(); !q.done; q = l.next())
          c(q.value).yb(g, k);
      });
    };
    e.all = function (h) {
      var g = ba(h),
        k = g.next();
      return k.done
        ? c([])
        : new e(function (l, q) {
            function L($b) {
              return function (ac) {
                U[$b] = ac;
                pa--;
                0 == pa && l(U);
              };
            }
            var U = [],
              pa = 0;
            do
              U.push(void 0),
                pa++,
                c(k.value).yb(L(U.length - 1), q),
                (k = g.next());
            while (!k.done);
          });
    };
    return e;
  });
  na("Array.prototype.fill", function (a) {
    return a
      ? a
      : function (b, c, d) {
          var e = this.length || 0;
          0 > c && (c = Math.max(0, e + c));
          if (null == d || d > e) d = e;
          d = Number(d);
          0 > d && (d = Math.max(0, e + d));
          for (c = Number(c || 0); c < d; c++) this[c] = b;
          return this;
        };
  });
  var oa = function () {
      oa = function () {};
      la.Symbol || (la.Symbol = qa);
    },
    ra = function (a, b) {
      this.g = a;
      ma(this, "description", { configurable: !0, writable: !0, value: b });
    };
  ra.prototype.toString = function () {
    return this.g;
  };
  var qa = (function () {
      function a(c) {
        if (this instanceof a)
          throw new TypeError("Symbol is not a constructor");
        return new ra("jscomp_symbol_" + (c || "") + "_" + b++, c);
      }
      var b = 0;
      return a;
    })(),
    ta = function () {
      oa();
      var a = la.Symbol.iterator;
      a || (a = la.Symbol.iterator = la.Symbol("Symbol.iterator"));
      "function" != typeof Array.prototype[a] &&
        ma(Array.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return sa(aa(this));
          },
        });
      ta = function () {};
    },
    sa = function (a) {
      ta();
      a = { next: a };
      a[la.Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    ua = function (a, b) {
      ta();
      a instanceof String && (a += "");
      var c = 0,
        d = {
          next: function () {
            if (c < a.length) {
              var e = c++;
              return { value: b(e, a[e]), done: !1 };
            }
            d.next = function () {
              return { done: !0, value: void 0 };
            };
            return d.next();
          },
        };
      d[Symbol.iterator] = function () {
        return d;
      };
      return d;
    };
  na("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return ua(this, function (b) {
            return b;
          });
        };
  });
  var va = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  na("WeakMap", function (a) {
    function b() {}
    function c(k) {
      var l = typeof k;
      return ("object" === l && null !== k) || "function" === l;
    }
    function d(k) {
      if (!va(k, f)) {
        var l = new b();
        ma(k, f, { value: l });
      }
    }
    function e(k) {
      var l = Object[k];
      l &&
        (Object[k] = function (q) {
          if (q instanceof b) return q;
          d(q);
          return l(q);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            l = Object.seal({}),
            q = new a([
              [k, 2],
              [l, 3],
            ]);
          if (2 != q.get(k) || 3 != q.get(l)) return !1;
          q.delete(k);
          q.set(l, 4);
          return !q.has(k) && 4 == q.get(l);
        } catch (L) {
          return !1;
        }
      })()
    )
      return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var h = 0,
      g = function (k) {
        this.g = (h += Math.random() + 1).toString();
        if (k) {
          k = ba(k);
          for (var l; !(l = k.next()).done; )
            (l = l.value), this.set(l[0], l[1]);
        }
      };
    g.prototype.set = function (k, l) {
      if (!c(k)) throw Error("d");
      d(k);
      if (!va(k, f)) throw Error("e`" + k);
      k[f][this.g] = l;
      return this;
    };
    g.prototype.get = function (k) {
      return c(k) && va(k, f) ? k[f][this.g] : void 0;
    };
    g.prototype.has = function (k) {
      return c(k) && va(k, f) && va(k[f], this.g);
    };
    g.prototype.delete = function (k) {
      return c(k) && va(k, f) && va(k[f], this.g) ? delete k[f][this.g] : !1;
    };
    return g;
  });
  na("Map", function (a) {
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var g = Object.seal({ x: 4 }),
            k = new a(ba([[g, "s"]]));
          if (
            "s" != k.get(g) ||
            1 != k.size ||
            k.get({ x: 4 }) ||
            k.set({ x: 4 }, "t") != k ||
            2 != k.size
          )
            return !1;
          var l = k.entries(),
            q = l.next();
          if (q.done || q.value[0] != g || "s" != q.value[1]) return !1;
          q = l.next();
          return q.done ||
            4 != q.value[0].x ||
            "t" != q.value[1] ||
            !l.next().done
            ? !1
            : !0;
        } catch (L) {
          return !1;
        }
      })()
    )
      return a;
    ta();
    var b = new WeakMap(),
      c = function (g) {
        this.i = {};
        this.g = f();
        this.size = 0;
        if (g) {
          g = ba(g);
          for (var k; !(k = g.next()).done; )
            (k = k.value), this.set(k[0], k[1]);
        }
      };
    c.prototype.set = function (g, k) {
      g = 0 === g ? 0 : g;
      var l = d(this, g);
      l.list || (l.list = this.i[l.id] = []);
      l.Ma
        ? (l.Ma.value = k)
        : ((l.Ma = {
            next: this.g,
            Wa: this.g.Wa,
            head: this.g,
            key: g,
            value: k,
          }),
          l.list.push(l.Ma),
          (this.g.Wa.next = l.Ma),
          (this.g.Wa = l.Ma),
          this.size++);
      return this;
    };
    c.prototype.delete = function (g) {
      g = d(this, g);
      return g.Ma && g.list
        ? (g.list.splice(g.index, 1),
          g.list.length || delete this.i[g.id],
          (g.Ma.Wa.next = g.Ma.next),
          (g.Ma.next.Wa = g.Ma.Wa),
          (g.Ma.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function () {
      this.i = {};
      this.g = this.g.Wa = f();
      this.size = 0;
    };
    c.prototype.has = function (g) {
      return !!d(this, g).Ma;
    };
    c.prototype.get = function (g) {
      return (g = d(this, g).Ma) && g.value;
    };
    c.prototype.entries = function () {
      return e(this, function (g) {
        return [g.key, g.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (g) {
        return g.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (g) {
        return g.value;
      });
    };
    c.prototype.forEach = function (g, k) {
      for (var l = this.entries(), q; !(q = l.next()).done; )
        (q = q.value), g.call(k, q[1], q[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (g, k) {
        var l = k && typeof k;
        "object" == l || "function" == l
          ? b.has(k)
            ? (l = b.get(k))
            : ((l = "" + ++h), b.set(k, l))
          : (l = "p_" + k);
        var q = g.i[l];
        if (q && va(g.i, l))
          for (g = 0; g < q.length; g++) {
            var L = q[g];
            if ((k !== k && L.key !== L.key) || k === L.key)
              return { id: l, list: q, index: g, Ma: L };
          }
        return { id: l, list: q, index: -1, Ma: void 0 };
      },
      e = function (g, k) {
        var l = g.g;
        return sa(function () {
          if (l) {
            for (; l.head != g.g; ) l = l.Wa;
            for (; l.next != l.head; )
              return (l = l.next), { done: !1, value: k(l) };
            l = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      f = function () {
        var g = {};
        return (g.Wa = g.next = g.head = g);
      },
      h = 0;
    return c;
  });
  var wa = this || self,
    xa = function () {},
    ya = function (a) {
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
    za = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    Aa = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.Lb = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
    };
  var Ba = function (a) {
      this.U = a;
      this.i = !1;
      this.v = [];
    },
    Ca = function (a, b) {
      a.i ? b() : a.v.push(b);
    };
  var Da = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length
              ? -1
              : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Ea = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length,
              e = "string" === typeof a ? a.split("") : a,
              f = 0;
            f < d;
            f++
          )
            f in e && b.call(c, e[f], f, a);
        },
    Fa = function (a) {
      return Array.prototype.concat.apply([], arguments);
    },
    Ga = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    };
  var Ha = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    m = function (a, b) {
      return -1 != a.indexOf(b);
    },
    Ia = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var n;
  a: {
    var Ja = wa.navigator;
    if (Ja) {
      var Ka = Ja.userAgent;
      if (Ka) {
        n = Ka;
        break a;
      }
    }
    n = "";
  }
  var La = function (a) {
    La[" "](a);
    return a;
  };
  La[" "] = xa;
  var Ma = m(n, "Opera"),
    Na = m(n, "Trident") || m(n, "MSIE"),
    Oa = m(n, "Edge"),
    Pa =
      m(n, "Gecko") &&
      !(m(n.toLowerCase(), "webkit") && !m(n, "Edge")) &&
      !(m(n, "Trident") || m(n, "MSIE")) &&
      !m(n, "Edge"),
    Qa = m(n.toLowerCase(), "webkit") && !m(n, "Edge"),
    Ra = function () {
      var a = wa.document;
      return a ? a.documentMode : void 0;
    },
    Sa;
  a: {
    var Ta = "",
      Ua = (function () {
        var a = n;
        if (Pa) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Oa) return /Edge\/([\d\.]+)/.exec(a);
        if (Na) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Qa) return /WebKit\/(\S+)/.exec(a);
        if (Ma) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Ua && (Ta = Ua ? Ua[1] : "");
    if (Na) {
      var Va = Ra();
      if (null != Va && Va > parseFloat(Ta)) {
        Sa = String(Va);
        break a;
      }
    }
    Sa = Ta;
  }
  var Wa = Sa,
    Xa = {},
    Ya;
  if (wa.document && Na) {
    var Za = Ra();
    Ya = Za ? Za : parseInt(Wa, 10) || void 0;
  } else Ya = void 0;
  var $a = Ya;
  var ab;
  (ab = !Na) || (ab = 9 <= Number($a));
  var bb = ab,
    cb;
  if ((cb = Na)) {
    var db;
    if (Object.prototype.hasOwnProperty.call(Xa, "9")) db = Xa["9"];
    else {
      for (
        var eb = 0,
          fb = Ha(String(Wa)).split("."),
          gb = Ha("9").split("."),
          hb = Math.max(fb.length, gb.length),
          ib = 0;
        0 == eb && ib < hb;
        ib++
      ) {
        var jb = fb[ib] || "",
          kb = gb[ib] || "";
        do {
          var lb = /(\d*)(\D*)(.*)/.exec(jb) || ["", "", "", ""],
            mb = /(\d*)(\D*)(.*)/.exec(kb) || ["", "", "", ""];
          if (0 == lb[0].length && 0 == mb[0].length) break;
          eb =
            Ia(
              0 == lb[1].length ? 0 : parseInt(lb[1], 10),
              0 == mb[1].length ? 0 : parseInt(mb[1], 10),
            ) ||
            Ia(0 == lb[2].length, 0 == mb[2].length) ||
            Ia(lb[2], mb[2]);
          jb = lb[3];
          kb = mb[3];
        } while (0 == eb);
      }
      db = Xa["9"] = 0 <= eb;
    }
    cb = !db;
  }
  var nb = cb,
    ob = (function () {
      if (!wa.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
      try {
        wa.addEventListener("test", xa, b),
          wa.removeEventListener("test", xa, b);
      } catch (c) {}
      return a;
    })();
  var pb = function () {
    this.j = this.j;
    this.Ka = this.Ka;
  };
  pb.prototype.j = !1;
  pb.prototype.Hb = function () {
    this.j || ((this.j = !0), this.Ta());
  };
  pb.prototype.Ta = function () {
    if (this.Ka) for (; this.Ka.length; ) this.Ka.shift()();
  };
  var qb = function (a, b) {
    this.type = a;
    this.g = this.target = b;
    this.defaultPrevented = !1;
  };
  qb.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var sb = function (a, b) {
    qb.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (a) {
      var c = (this.type = a.type),
        d =
          a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : null;
      this.target = a.target || a.srcElement;
      this.g = b;
      if ((b = a.relatedTarget)) {
        if (Pa) {
          a: {
            try {
              La(b.nodeName);
              var e = !0;
              break a;
            } catch (f) {}
            e = !1;
          }
          e || (b = null);
        }
      } else
        "mouseover" == c
          ? (b = a.fromElement)
          : "mouseout" == c && (b = a.toElement);
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
      this.pointerType =
        "string" === typeof a.pointerType
          ? a.pointerType
          : rb[a.pointerType] || "";
      this.i = a;
      a.defaultPrevented && this.preventDefault();
    }
  };
  Aa(sb, qb);
  var rb = { 2: "touch", 3: "pen", 4: "mouse" };
  sb.prototype.preventDefault = function () {
    sb.Lb.preventDefault.call(this);
    var a = this.i;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), nb))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  var tb = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    ub = 0;
  var vb = function (a, b, c, d, e) {
      this.listener = a;
      this.g = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.i = e;
      this.key = ++ub;
      this.ub = this.Eb = !1;
    },
    wb = function (a) {
      a.ub = !0;
      a.listener = null;
      a.g = null;
      a.src = null;
      a.i = null;
    };
  var xb = function (a) {
    this.src = a;
    this.g = {};
    this.i = 0;
  };
  xb.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.i++);
    var h;
    a: {
      for (h = 0; h < a.length; ++h) {
        var g = a[h];
        if (!g.ub && g.listener == b && g.capture == !!d && g.i == e) break a;
      }
      h = -1;
    }
    -1 < h
      ? ((b = a[h]), c || (b.Eb = !1))
      : ((b = new vb(b, this.src, f, !!d, e)), (b.Eb = c), a.push(b));
    return b;
  };
  var yb = function (a, b) {
    var c = b.type;
    if (c in a.g) {
      var d = a.g[c],
        e = Da(d, b),
        f;
      (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
      f && (wb(b), 0 == a.g[c].length && (delete a.g[c], a.i--));
    }
  };
  var zb = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Ab = {},
    Bb = 0,
    Db = function () {
      var a = Cb,
        b = bb
          ? function (c) {
              return a.call(b.src, b.listener, c);
            }
          : function (c) {
              c = a.call(b.src, b.listener, c);
              if (!c) return c;
            };
      return b;
    },
    Eb = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) Eb(a, b[f], c, d, e);
      else if (((c = Fb(c)), a && a[tb]))
        a.g.add(String(b), c, !0, za(d) ? !!d.capture : !!d, e);
      else {
        if (!b) throw Error("f");
        f = za(d) ? !!d.capture : !!d;
        var h = Gb(a);
        h || (a[zb] = h = new xb(a));
        c = h.add(b, c, !0, f, e);
        if (!c.g) {
          e = Db();
          c.g = e;
          e.src = a;
          e.listener = c;
          if (a.addEventListener)
            ob || (d = f),
              void 0 === d && (d = !1),
              a.addEventListener(b.toString(), e, d);
          else if (a.attachEvent) a.attachEvent(Hb(b.toString()), e);
          else if (a.addListener && a.removeListener) a.addListener(e);
          else throw Error("g");
          Bb++;
        }
      }
    },
    Hb = function (a) {
      return a in Ab ? Ab[a] : (Ab[a] = "on" + a);
    },
    Jb = function (a, b, c, d) {
      var e = !0;
      if ((a = Gb(a)))
        if ((b = a.g[b.toString()]))
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f &&
              f.capture == c &&
              !f.ub &&
              ((f = Ib(f, d)), (e = e && !1 !== f));
          }
      return e;
    },
    Ib = function (a, b) {
      var c = a.listener,
        d = a.i || a.src;
      if (a.Eb && "number" !== typeof a && a && !a.ub) {
        var e = a.src;
        if (e && e[tb]) yb(e.g, a);
        else {
          var f = a.type,
            h = a.g;
          e.removeEventListener
            ? e.removeEventListener(f, h, a.capture)
            : e.detachEvent
              ? e.detachEvent(Hb(f), h)
              : e.addListener && e.removeListener && e.removeListener(h);
          Bb--;
          (f = Gb(e))
            ? (yb(f, a), 0 == f.i && ((f.src = null), (e[zb] = null)))
            : wb(a);
        }
      }
      return c.call(d, b);
    },
    Cb = function (a, b) {
      if (a.ub) return !0;
      if (!bb) {
        if (!b)
          a: {
            b = ["window", "event"];
            for (var c = wa, d = 0; d < b.length; d++)
              if (((c = c[b[d]]), null == c)) {
                b = null;
                break a;
              }
            b = c;
          }
        d = b;
        b = new sb(d, this);
        c = !0;
        if (!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;
            if (0 == d.keyCode)
              try {
                d.keyCode = -1;
                break a;
              } catch (h) {
                e = !0;
              }
            if (e || void 0 == d.returnValue) d.returnValue = !0;
          }
          d = [];
          for (e = b.g; e; e = e.parentNode) d.push(e);
          a = a.type;
          for (e = d.length - 1; 0 <= e; e--) {
            b.g = d[e];
            var f = Jb(d[e], a, !0, b);
            c = c && f;
          }
          for (e = 0; e < d.length; e++)
            (b.g = d[e]), (f = Jb(d[e], a, !1, b)), (c = c && f);
        }
        return c;
      }
      return Ib(a, new sb(b, this));
    },
    Gb = function (a) {
      a = a[zb];
      return a instanceof xb ? a : null;
    },
    Kb = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    Fb = function (a) {
      if ("function" == ya(a)) return a;
      a[Kb] ||
        (a[Kb] = function (b) {
          return a.handleEvent(b);
        });
      return a[Kb];
    };
  var Lb = function (a, b) {
    this.i = {};
    this.g = [];
    this.j = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("i");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof Lb)
        for (c = a.tb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  };
  Lb.prototype.v = function () {
    Mb(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.i[this.g[b]]);
    return a;
  };
  Lb.prototype.tb = function () {
    Mb(this);
    return this.g.concat();
  };
  var Mb = function (a) {
    if (a.j != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length; ) {
        var d = a.g[b];
        Nb(a.i, d) && (a.g[c++] = d);
        b++;
      }
      a.g.length = c;
    }
    if (a.j != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length; )
        (d = a.g[b]), Nb(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
      a.g.length = c;
    }
  };
  Lb.prototype.get = function (a, b) {
    return Nb(this.i, a) ? this.i[a] : b;
  };
  Lb.prototype.set = function (a, b) {
    Nb(this.i, a) || (this.j++, this.g.push(a));
    this.i[a] = b;
  };
  Lb.prototype.forEach = function (a, b) {
    for (var c = this.tb(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  var Nb = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var Ob =
      /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    Pb = function (a, b) {
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
    };
  var Qb = function (a, b) {
      this.v = a;
      this.j = b;
      this.w = this.g = null;
      this.U = !1;
      this.W = [];
      this.i = null;
    },
    Rb = function (a) {
      if ("running" == a.g.state && !a.U) {
        a.U = !0;
        for (var b = 0; b < a.W.length; b++) a.W[b]();
      }
    },
    Sb = function (a) {
      a.i = a.g.createBufferSource();
      a.i.buffer = a.g.createBuffer(1, 1, 22050);
      a.i.connect(a.g.destination);
      a.i.start(0);
    },
    Tb = function (a) {
      a.g &&
        (null == a.i
          ? Sb(a)
          : void 0 === a.i.playbackState
            ? Sb(a)
            : a.i.playbackState !== a.i.PLAYING_STATE &&
              a.i.playbackState !== a.i.FINISHED_STATE &&
              Sb(a));
    };
  Qb.prototype.destroy = function () {
    this.g.close();
    this.g = null;
  };
  Qb.prototype.reset = function () {
    for (var a in this.v) this.v[a].v = [];
    for (var b in this.j) this.j[b].stop();
  };
  Qb.prototype.isMuted = function () {
    return !1;
  };
  var Ub =
      !(!window.AudioContext && !window.webkitAudioContext) &&
      !!window.GainNode,
    p = function (a, b, c) {
      this.Kb = a;
      this.W = b;
      this.U = c;
      this.i = {};
      this.j = this.w = this.g = this.v = null;
      this.Ka = 0;
    },
    Vb = function (a, b, c) {
      a.g = b;
      a.w = c;
    },
    Wb = function (a) {
      if (a.g)
        for (var b in a.i) {
          var c = a.i[b];
          !c.jc && 1e3 * a.g.currentTime > c.Jb + a.U && delete a.i[b];
        }
    };
  p.prototype.play = function (a, b, c, d, e, f) {
    a = void 0 === a ? 0 : a;
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? 0 : c;
    e = void 0 === e ? !1 : e;
    if (!this.g || !this.w) return -1;
    Wb(this);
    f = void 0 === f ? this.g.currentTime + a / 1e3 : f;
    d ||
      ((d = this.g.createBufferSource()),
      d.playbackRate.setValueAtTime(1, this.g.currentTime));
    !this.v && this.g.createGain && (this.v = this.g.createGain());
    this.j && d.connect(this.j);
    this.v
      ? (this.j ? this.j.connect(this.v) : d.connect(this.v),
        this.v.connect(this.w))
      : this.j
        ? this.j.connect(this.w)
        : d.connect(this.w);
    this.j = null;
    d.loop = b;
    try {
      d.buffer = this.Kb.w;
    } catch (g) {
      return -1;
    }
    a = this.W / 1e3;
    var h = this.U / 1e3 / d.playbackRate.value;
    b
      ? ((d.loopStart = a + (e ? c / 1e3 : 0)),
        (d.loopEnd = a + h),
        d.start(f, a + c / 1e3))
      : d.start(f, a + c / 1e3, h);
    e = this.Ka++;
    this.i[e] = { node: d, Jb: 1e3 * f - c, jc: b };
    return e;
  };
  p.prototype.stop = function (a) {
    Wb(this);
    if (void 0 !== a) {
      if (this.i[a]) {
        try {
          this.i[a].node.stop(0);
        } catch (c) {}
        var b = (1e3 * this.g.currentTime - this.i[a].Jb) % this.U;
        delete this.i[a];
        return [b];
      }
      return [];
    }
    a = [];
    for (b in this.i) a = a.concat(this.stop(b));
    return a;
  };
  var Xb = document.createElement("audio"),
    Yb =
      "function" == ya(Xb.canPlayType) && "" != Xb.canPlayType("audio/mpeg")
        ? ".mp3"
        : ".ogg",
    Zb = function (a, b) {
      Ba.call(this, a + b + Yb);
      this.j = this.w = null;
      this.g = 0;
    };
  ja(Zb, Ba);
  Zb.prototype.preload = function (a, b) {
    var c = this,
      d = new Promise(function (f) {
        Ca(c, f);
      });
    a && Ca(this, a);
    if (0 != this.g) return Promise.resolve();
    if (!this.j) return Promise.reject();
    var e = new XMLHttpRequest();
    e.open("GET", this.U, !0);
    e.responseType = "arraybuffer";
    e.onload = function () {
      c.j.decodeAudioData(e.response, function (f) {
        if (f && ((c.w = f), (c.g = 3), !c.i)) {
          c.i = !0;
          f = 0;
          for (var h; (h = c.v[f]); f++) h();
        }
      });
      c.g = 2;
    };
    b &&
      (e.onprogress = function (f) {
        f.lengthComputable && b(f.loaded / f.total);
      });
    e.send();
    this.g = 1;
    return d;
  };
  var ec = function (a) {
    this.j = this.W = this.v = "";
    this.Ka = null;
    this.w = this.g = "";
    this.U = !1;
    var b;
    a instanceof ec
      ? ((this.U = a.U),
        fc(this, a.v),
        (this.W = a.W),
        (this.j = a.j),
        gc(this, a.Ka),
        (this.g = a.g),
        hc(this, ic(a.i)),
        (this.w = a.w))
      : a && (b = String(a).match(Ob))
        ? ((this.U = !1),
          fc(this, b[1] || "", !0),
          (this.W = jc(b[2] || "")),
          (this.j = jc(b[3] || "", !0)),
          gc(this, b[4]),
          (this.g = jc(b[5] || "", !0)),
          hc(this, b[6] || "", !0),
          (this.w = jc(b[7] || "")))
        : ((this.U = !1), (this.i = new r(null, this.U)));
  };
  ec.prototype.toString = function () {
    var a = [],
      b = this.v;
    b && a.push(kc(b, lc, !0), ":");
    var c = this.j;
    if (c || "file" == b)
      a.push("//"),
        (b = this.W) && a.push(kc(b, lc, !0), "@"),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"),
        ),
        (c = this.Ka),
        null != c && a.push(":", String(c));
    if ((c = this.g))
      this.j && "/" != c.charAt(0) && a.push("/"),
        a.push(kc(c, "/" == c.charAt(0) ? mc : nc, !0));
    (c = this.i.toString()) && a.push("?", c);
    (c = this.w) && a.push("#", kc(c, oc));
    return a.join("");
  };
  ec.prototype.resolve = function (a) {
    var b = new ec(this),
      c = !!a.v;
    c ? fc(b, a.v) : (c = !!a.W);
    c ? (b.W = a.W) : (c = !!a.j);
    c ? (b.j = a.j) : (c = null != a.Ka);
    var d = a.g;
    if (c) gc(b, a.Ka);
    else if ((c = !!a.g)) {
      if ("/" != d.charAt(0))
        if (this.j && !this.g) d = "/" + d;
        else {
          var e = b.g.lastIndexOf("/");
          -1 != e && (d = b.g.substr(0, e + 1) + d);
        }
      e = d;
      if (".." == e || "." == e) d = "";
      else if (m(e, "./") || m(e, "/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");
        for (var f = [], h = 0; h < e.length; ) {
          var g = e[h++];
          "." == g
            ? d && h == e.length && f.push("")
            : ".." == g
              ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(),
                d && h == e.length && f.push(""))
              : (f.push(g), (d = !0));
        }
        d = f.join("/");
      } else d = e;
    }
    c ? (b.g = d) : (c = "" !== a.i.toString());
    c ? hc(b, ic(a.i)) : (c = !!a.w);
    c && (b.w = a.w);
    return b;
  };
  var fc = function (a, b, c) {
      a.v = c ? jc(b, !0) : b;
      a.v && (a.v = a.v.replace(/:$/, ""));
    },
    gc = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("k`" + b);
        a.Ka = b;
      } else a.Ka = null;
    },
    hc = function (a, b, c) {
      b instanceof r
        ? ((a.i = b), pc(a.i, a.U))
        : (c || (b = kc(b, qc)), (a.i = new r(b, a.U)));
    },
    jc = function (a, b) {
      return a
        ? b
          ? decodeURI(a.replace(/%25/g, "%2525"))
          : decodeURIComponent(a)
        : "";
    },
    kc = function (a, b, c) {
      return "string" === typeof a
        ? ((a = encodeURI(a).replace(b, rc)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
          a)
        : null;
    },
    rc = function (a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    lc = /[#\/\?@]/g,
    nc = /[#\?:]/g,
    mc = /[#\?]/g,
    qc = /[#\?@]/g,
    oc = /#/g,
    r = function (a, b) {
      this.i = this.g = null;
      this.j = a || null;
      this.w = !!b;
    },
    sc = function (a) {
      a.g ||
        ((a.g = new Lb()),
        (a.i = 0),
        a.j &&
          Pb(a.j, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
    };
  r.prototype.add = function (a, b) {
    sc(this);
    this.j = null;
    a = tc(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, (c = []));
    c.push(b);
    this.i += 1;
    return this;
  };
  var uc = function (a, b) {
      sc(a);
      b = tc(a, b);
      Nb(a.g.i, b) &&
        ((a.j = null),
        (a.i -= a.g.get(b).length),
        (a = a.g),
        Nb(a.i, b) && (delete a.i[b], a.j--, a.g.length > 2 * a.j && Mb(a)));
    },
    vc = function (a, b) {
      sc(a);
      b = tc(a, b);
      return Nb(a.g.i, b);
    };
  r.prototype.forEach = function (a, b) {
    sc(this);
    this.g.forEach(function (c, d) {
      Ea(
        c,
        function (e) {
          a.call(b, e, d, this);
        },
        this,
      );
    }, this);
  };
  r.prototype.tb = function () {
    sc(this);
    for (var a = this.g.v(), b = this.g.tb(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  r.prototype.v = function (a) {
    sc(this);
    var b = [];
    if ("string" === typeof a)
      vc(this, a) && (b = Fa(b, this.g.get(tc(this, a))));
    else {
      a = this.g.v();
      for (var c = 0; c < a.length; c++) b = Fa(b, a[c]);
    }
    return b;
  };
  r.prototype.set = function (a, b) {
    sc(this);
    this.j = null;
    a = tc(this, a);
    vc(this, a) && (this.i -= this.g.get(a).length);
    this.g.set(a, [b]);
    this.i += 1;
    return this;
  };
  r.prototype.get = function (a, b) {
    if (!a) return b;
    a = this.v(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  r.prototype.toString = function () {
    if (this.j) return this.j;
    if (!this.g) return "";
    for (var a = [], b = this.g.tb(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.v(d);
      for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
      }
    }
    return (this.j = a.join("&"));
  };
  var ic = function (a) {
      var b = new r();
      b.j = a.j;
      a.g && ((b.g = new Lb(a.g)), (b.i = a.i));
      return b;
    },
    tc = function (a, b) {
      b = String(b);
      a.w && (b = b.toLowerCase());
      return b;
    },
    pc = function (a, b) {
      b &&
        !a.w &&
        (sc(a),
        (a.j = null),
        a.g.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e &&
            (uc(this, d),
            uc(this, e),
            0 < c.length &&
              ((this.j = null),
              this.g.set(tc(this, e), Ga(c)),
              (this.i += c.length)));
        }, a));
      a.w = b;
    };
  var t = navigator.userAgent,
    wc = new ec(location.href),
    xc = "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints,
    yc = m(t, "iPad") || m(t, "iPhone") || m(t, "iPod") || xc,
    zc = (m(t.toLowerCase(), "gsa") || m(t, "GoogleApp")) && !yc,
    isMobile =
      yc ||
      m(t, "Android") ||
      m(t, "Mobile") ||
      m(t, "Silk") ||
      m(t, "UCBrowser") ||
      m(t, "UCWEB");
  var Bc = Date.now,
    Cc = ["", "moz", "ms", "o", "webkit"],
    Dc = function (a) {
      var b = document;
      if (!b) return null;
      for (var c = ba(Cc), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = a;
        0 < d.length && (e = a.charAt(0).toUpperCase() + a.substr(1));
        d += e;
        if ("undefined" != typeof b[d]) return d;
      }
      return null;
    },
    Ec = null;
  var Ic = function (a, b, c) {
    pb.call(this);
    this.hb = a;
    this.Cb = b;
    this.lc = c;
    this.ab = Bc();
    this.mb = Dc("hidden");
    this.i = (this.Ra = Dc("visibilityState"))
      ? this.Ra.replace(/state$/i, "change").toLowerCase()
      : null;
    this.v = Fc(this);
    this.w = !1;
    this.U = this.v;
    Gc(this);
    Hc(this);
  };
  ja(Ic, pb);
  var Gc = function (a) {
      a.i
        ? Jc(a)
        : zc &&
          Kc(a, function () {
            Jc(a);
          });
    },
    Jc = function (a) {
      a.g = function () {
        a.v = Fc(a);
        a.v ? Lc(a) : Mc(a);
      };
      var b = window.agsa_ext;
      a.i
        ? document.addEventListener(a.i, a.g, !1)
        : b &&
          b.registerPageVisibilityListener &&
          (google.doodle || (google.doodle = {}),
          (google.doodle.pvc = function () {
            a.g && a.g();
          }),
          b.registerPageVisibilityListener("google.doodle.pvc();"));
    },
    Kc = function (a, b) {
      window.agsa_ext
        ? b()
        : (a.Bb = window.setTimeout(function () {
            Gc(a);
          }, 100));
    };
  Ic.prototype.Ta = function () {
    window.clearTimeout(this.W);
    window.clearTimeout(this.Bb);
    this.g &&
      (this.i && document.removeEventListener
        ? document.removeEventListener(this.i, this.g, !1)
        : window.agsa_ext &&
          window.agsa_ext.registerPageVisibilityListener &&
          (this.g = null));
    pb.prototype.Ta.call(this);
  };
  var Fc = function (a) {
      if (
        !a.mb &&
        !a.Ra &&
        window.agsa_ext &&
        window.agsa_ext.getPageVisibility
      )
        return "hidden" == window.agsa_ext.getPageVisibility();
      var b = document[a.Ra];
      return document[a.mb] || "hidden" == b;
    },
    Lc = function (a) {
      var b = a.v || a.w;
      a.U && !b
        ? ((a.U = !1), a.lc(), Hc(a))
        : !a.U && b && ((a.U = !0), a.Cb());
    },
    Hc = function (a) {
      a.W && window.clearTimeout(a.W);
      var b = Math.max(100, a.hb - Nc(a));
      a.W = window.setTimeout(function () {
        a.W = null;
        a.w = Nc(a) >= a.hb;
        a.w || Hc(a);
        Lc(a);
      }, b);
    },
    Nc = function (a) {
      return Bc() - a.ab;
    },
    Mc = function (a) {
      a.ab = Bc();
      a.w = !1;
      Lc(a);
    };
  var Oc = !!self.localStorage;
  var Pc = {},
    Qc = { qc: 0, tc: 1, vc: 2, nc: 3, sc: 4, uc: 5, mc: 6 };
  Pc.Ab = null;
  var Rc = [],
    Sc = {},
    Tc = 0,
    Uc = null,
    Vc = null,
    Wc = !1,
    u = function (a, b) {
      return a.buttons[b] && 0.5 < a.buttons[b];
    },
    Xc = function (a, b, c) {
      return "undefined" == typeof a.axes[b]
        ? !1
        : c
          ? -0.75 > a.axes[b]
          : 0.75 < a.axes[b];
    },
    Zc = function (a) {
      Pc.Ab = a.gamepad;
      Wc || ((Wc = !0), Yc());
    },
    $c = function () {
      delete Pc.Ab;
      Wc = !1;
    },
    Yc = function () {
      if (Pc.Ab) var a = Pc.Ab;
      else {
        var b =
          (navigator.getGamepads && navigator.getGamepads()) ||
          (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) ||
          navigator.webkitGamepads;
        a = (b && (b[3] || b[2] || b[1] || b[0])) || null;
      }
      if (a && (!a.timestamp || a.timestamp != Tc)) {
        Tc = a.timestamp;
        b = [];
        b[0] = u(a, 14) || Xc(a, 0, !0) || Xc(a, 2, !0);
        b[1] = u(a, 15) || Xc(a, 0, !1) || Xc(a, 2, !1);
        b[2] = u(a, 12) || Xc(a, 1, !0) || Xc(a, 3, !0);
        b[3] = u(a, 13) || Xc(a, 1, !1) || Xc(a, 3, !1);
        b[4] = u(a, 0) || u(a, 4) || u(a, 6) || u(a, 8) || u(a, 9) || u(a, 10);
        b[5] = u(a, 1) || u(a, 5) || u(a, 7) || u(a, 11);
        b[6] = u(a, 2) || u(a, 3);
        if (Rc.length)
          for (var c in Qc) {
            a = Qc[c];
            var d = b[a];
            if ("undefined" != typeof d && d != Rc[a] && Sc[a]) {
              Vc && Vc();
              var e = document.createEvent("Event");
              e.initEvent(d ? "keydown" : "keyup", !0, !0);
              e.keyCode = Sc[a];
              Uc.dispatchEvent(e);
            }
          }
        Rc = b;
      }
      Wc &&
        (window.requestAnimationFrame
          ? window.requestAnimationFrame(Yc)
          : window.oRequestAnimationFrame
            ? window.oRequestAnimationFrame(Yc)
            : window.mozRequestAnimationFrame
              ? window.mozRequestAnimationFrame(Yc)
              : window.msRequestAnimationFrame
                ? window.msRequestAnimationFrame(Yc)
                : window.webkitRequestAnimationFrame &&
                  window.webkitRequestAnimationFrame(Yc));
    };
  var v = function () {
    Qb.call(this, v.i, v.g);
  };
  ja(v, Qb);
  v.i = {};
  v.i.Za = new Zb(assetsPath, "regular");
  v.i.Sa = new Zb(assetsPath, "looped");
  var w = v.i;
  v.g = {};
  v.g.Mb = new p(w.Sa, 0, 402.312988281);
  v.g.Nb = new p(w.Sa, 1402.31298828, 327.256011963);
  v.g.Ob = new p(w.Sa, 2729.5690918, 298.29901123);
  v.g.Pb = new p(w.Sa, 4027.86791992, 264.511993408);
  v.g.Qb = new p(w.Sa, 5292.38085938, 268.253997803);
  v.g.Rb = new p(w.Sa, 6560.63476562, 538.367004395);
  v.g.Sb = new p(w.Sa, 8099.00195312, 5255.89599609);
  v.g.Tb = new p(w.Za, 2410.61206055, 1724.08203125);
  v.g.Ub = new p(w.Za, 0, 1410.61206055);
  v.g.Vb = new p(w.Za, 5134.69384766, 130.611999512);
  v.g.Wb = new p(w.Za, 6265.30615234, 130.611999512);
  v.g.Xb = new p(w.Za, 7395.91796875, 208.979995728);
  v.g.Yb = new p(w.Za, 8604.8984375, 574.693969727);
  v.g.Zb = new p(w.Za, 10179.5917969, 2089.79589844);
  v.g.$b = new p(w.Za, 13269.3876953, 496.32699585);
  v.g.ac = new p(w.Sa, 19518.0058594, 4191.97314453);
  v.g.bc = new p(w.Sa, 14354.8984375, 4163.10693359);
  (function () {
    var a = v;
    a.Gb = void 0;
    a.hc = function () {
      return a.Gb ? a.Gb : (a.Gb = new a());
    };
  })();
  var x = v;
  google.doodle || (google.doodle = {});
  var y,
    z,
    ad,
    bd,
    A,
    cd,
    B,
    C,
    dd,
    D,
    ed,
    E,
    fd,
    gd,
    hd,
    id,
    F,
    jd,
    kd,
    G,
    H,
    I,
    ld,
    md,
    J,
    K,
    nd,
    od,
    pd,
    qd,
    rd,
    sd,
    M,
    td,
    ud,
    vd,
    wd,
    xd,
    yd,
    zd,
    Ad,
    Bd,
    Cd,
    N,
    Dd,
    Ed,
    Fd,
    Gd,
    Hd,
    Id,
    O,
    Jd,
    Kd,
    Ld,
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
    Wd,
    Xd,
    Yd,
    Zd,
    P,
    $d,
    ae,
    Q,
    be,
    ce,
    de,
    ee,
    fe,
    ge,
    R,
    he,
    ie,
    je,
    ke,
    le,
    me,
    ne,
    oe,
    pe = [1, 4, 2, 8],
    S = {
      0: { axis: 0, Na: 0 },
      1: { axis: 0, Na: -1 },
      2: { axis: 0, Na: 1 },
      4: { axis: 1, Na: -1 },
      8: { axis: 1, Na: 1 },
    },
    qe = [0, 7, 17, 32],
    re = [
      { x: 5, y: 1, T: 56 },
      { x: 5, y: 4, T: 5 },
      { x: 5, y: 1, h: 4 },
      { x: 9, y: 1, h: 12 },
      { x: 5, y: 12, h: 4 },
      { x: 10, y: 12, h: 4 },
      { x: 5, y: 15, T: 16 },
      { x: 5, y: 12, T: 31 },
      { x: 60, y: 1, h: 4 },
      { x: 54, y: 1, h: 4 },
      { x: 19, y: 1, h: 12 },
      { x: 19, y: 4, T: 26 },
      { x: 13, y: 5, T: 7 },
      { x: 13, y: 5, h: 4 },
      { x: 13, y: 8, T: 3 },
      { x: 56, y: 4, h: 9 },
      { x: 48, y: 4, T: 13 },
      { x: 48, y: 1, h: 12 },
      { x: 60, y: 12, h: 4 },
      { x: 44, y: 15, T: 17 },
      { x: 54, y: 12, h: 4 },
      { x: 44, y: 12, T: 17 },
      { x: 44, y: 1, h: 15 },
      { x: 41, y: 13, T: 4 },
      { x: 41, y: 13, h: 3 },
      { x: 38, y: 13, h: 3 },
      { x: 38, y: 15, T: 4 },
      { x: 35, y: 10, T: 10 },
      { x: 35, y: 1, h: 15 },
      { x: 35, y: 13, T: 4 },
      { x: 21, y: 12, h: 4 },
      { x: 24, y: 12, h: 4 },
      { x: 24, y: 15, T: 12 },
      { x: 27, y: 4, h: 9 },
      { x: 52, y: 9, T: 5 },
      { x: 56, y: 8, T: 10, type: 1 },
      { x: 1, y: 8, T: 9, type: 1 },
    ],
    T = [
      { x: 1, y: 8, T: 8 },
      { x: 57, y: 8, T: 9 },
      { x: 44, y: 2, h: 10 },
      { x: 35, y: 5, h: 7 },
      { x: 36, y: 4, T: 8 },
      { x: 36, y: 10, T: 8 },
      { x: 39, y: 15, T: 2 },
    ],
    se = [
      { x: 5, y: 15 },
      { x: 5, y: 3 },
      { x: 15, y: 8 },
      { x: 60, y: 3 },
      { x: 60, y: 15 },
    ],
    te = [
      { x: 2, y: 8 },
      { x: 63, y: 8 },
    ],
    ue = {
      1: [
        { x: 39.5, y: 15, dir: 4 },
        { x: 39.5, y: 4, dir: 4, Xa: 57, Ya: -4 },
        { x: 39.5, y: 7, dir: 2, Xa: 0, Ya: -4 },
        { x: 37.625, y: 7, dir: 1, Xa: 57, Ya: 20 },
        { x: 41.375, y: 7, dir: 1, Xa: 0, Ya: 20 },
      ],
      2: [
        { x: 40.25, y: 15, dir: 8 },
        { x: 38.75, y: 15, dir: 4 },
        { x: 39.5, y: 4, dir: 4, Xa: 57, Ya: -4 },
        { x: 39.5, y: 7, dir: 2, Xa: 0, Ya: -4 },
        { x: 37.625, y: 7, dir: 1, Xa: 57, Ya: 20 },
        { x: 41.375, y: 7, dir: 1, Xa: 0, Ya: 20 },
      ],
    },
    ve = [32, 312],
    we = [80, 312],
    xe = {
      0: 0.16,
      1: 0.23,
      2: 1,
      3: 1,
      4: 2.23,
      5: 0.3,
      6: 1.9,
      7: 2.23,
      8: 1.9,
      9: 5,
      10: 1.9,
      11: 1.18,
      12: 0.3,
      13: 0.5,
      14: 1.9,
      15: 9,
      16: 10,
      17: 0.26,
    },
    V = 0.8 * 0.4,
    ye = [
      {},
      {
        ua: 0.75,
        va: 0.4,
        Ja: 0.8,
        ma: 0.71,
        Ha: 0.5,
        Ia: 0.9,
        Ba: 0.79,
        Aa: 20,
        Da: 0.8,
        Ca: 10,
        Ea: 0.85,
        $: 6,
        Fa: 5,
        ka: 1,
        Ga: 100,
        ta: [7, 20, 7, 20, 5, 20, 5, 1],
        wa: 4,
        ya: [0, 0, 30, 60],
      },
      {
        ua: 0.85,
        va: 0.45,
        Ja: 0.9,
        ma: 0.79,
        Ha: 0.55,
        Ia: 0.95,
        Ba: 0.83,
        Aa: 30,
        Da: 0.9,
        Ca: 15,
        Ea: 0.95,
        $: 5,
        Fa: 5,
        ka: 2,
        Ga: 300,
        ta: [7, 20, 7, 20, 5, 1033, 1 / 60, 1],
        wa: 4,
        ya: [0, 0, 0, 50],
        kb: 1,
      },
      {
        ua: 0.85,
        va: 0.45,
        Ja: 0.9,
        ma: 0.79,
        Ha: 0.55,
        Ia: 0.95,
        Ba: 0.83,
        Aa: 40,
        Da: 0.9,
        Ca: 20,
        Ea: 0.95,
        $: 4,
        Fa: 5,
        ka: 3,
        Ga: 500,
        ta: [7, 20, 7, 20, 5, 1033, 1 / 60, 1],
        wa: 4,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.85,
        va: 0.45,
        Ja: 0.9,
        ma: 0.79,
        Ha: 0.55,
        Ia: 0.95,
        Ba: 0.83,
        Aa: 40,
        Da: 0.9,
        Ca: 20,
        Ea: 0.95,
        $: 3,
        Fa: 5,
        ka: 3,
        Ga: 500,
        ta: [7, 20, 7, 20, 5, 1033, 1 / 60, 1],
        wa: 4,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 40,
        Da: 1,
        Ca: 20,
        Ea: 1.05,
        $: 2,
        Fa: 5,
        ka: 4,
        Ga: 700,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
        kb: 2,
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 50,
        Da: 1,
        Ca: 25,
        Ea: 1.05,
        $: 5,
        Fa: 5,
        ka: 4,
        Ga: 700,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 50,
        Da: 1,
        Ca: 25,
        Ea: 1.05,
        $: 2,
        Fa: 5,
        ka: 5,
        Ga: 1e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 50,
        Da: 1,
        Ca: 25,
        Ea: 1.05,
        $: 2,
        Fa: 5,
        ka: 5,
        Ga: 1e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 60,
        Da: 1,
        Ca: 30,
        Ea: 1.05,
        $: 1,
        Fa: 3,
        ka: 6,
        Ga: 2e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
        kb: 3,
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 60,
        Da: 1,
        Ca: 30,
        Ea: 1.05,
        $: 5,
        Fa: 5,
        ka: 6,
        Ga: 2e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 60,
        Da: 1,
        Ca: 30,
        Ea: 1.05,
        $: 2,
        Fa: 5,
        ka: 7,
        Ga: 3e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 80,
        Da: 1,
        Ca: 40,
        Ea: 1.05,
        $: 1,
        Fa: 3,
        ka: 7,
        Ga: 3e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 80,
        Da: 1,
        Ca: 40,
        Ea: 1.05,
        $: 1,
        Fa: 3,
        ka: 8,
        Ga: 5e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
        kb: 3,
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 80,
        Da: 1,
        Ca: 40,
        Ea: 1.05,
        $: 3,
        Fa: 5,
        ka: 8,
        Ga: 5e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 100,
        Da: 1,
        Ca: 50,
        Ea: 1.05,
        $: 1,
        Fa: 3,
        ka: 8,
        Ga: 5e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 100,
        Da: 1,
        Ca: 50,
        Ea: 1.05,
        $: 1,
        Fa: 3,
        ka: 8,
        Ga: 5e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 100,
        Da: 1,
        Ca: 50,
        Ea: 1.05,
        $: 0,
        Fa: 0,
        ka: 8,
        Ga: 5e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
        kb: 3,
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 100,
        Da: 1,
        Ca: 50,
        Ea: 1.05,
        $: 1,
        Fa: 3,
        ka: 8,
        Ga: 5e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 120,
        Da: 1,
        Ca: 60,
        Ea: 1.05,
        $: 0,
        Fa: 0,
        ka: 8,
        Ga: 5e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 1,
        ma: 0.87,
        Ha: 0.6,
        Ia: 1,
        Ba: 0.87,
        Aa: 120,
        Da: 1,
        Ca: 60,
        Ea: 1.05,
        $: 0,
        Fa: 0,
        ka: 8,
        Ga: 5e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
      {
        ua: 0.95,
        va: 0.5,
        Ja: 0.9,
        ma: 0.79,
        Ha: 0.75,
        Ia: 0.9,
        Ba: 0.79,
        Aa: 120,
        Da: 1,
        Ca: 60,
        Ea: 1.05,
        $: 0,
        Fa: 0,
        ka: 8,
        Ga: 5e3,
        ta: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        wa: 3,
        ya: [0, 0, 0, 0],
      },
    ],
    ze = {
      1: [
        { x: 37.6, y: 7, dir: 1, V: 6.375, speed: 0.48 },
        { x: 37.6, y: 6.375, dir: 2, V: 7.625, speed: 0.48 },
        { x: 37.6, y: 7.625, dir: 1, V: 7, speed: 0.48 },
      ],
      2: [
        { x: 39.5, y: 7, dir: 2, V: 7.625, speed: 0.48 },
        { x: 39.5, y: 7.625, dir: 1, V: 6.375, speed: 0.48 },
        { x: 39.5, y: 6.375, dir: 2, V: 7, speed: 0.48 },
      ],
      3: [
        { x: 41.4, y: 7, dir: 1, V: 6.375, speed: 0.48 },
        { x: 41.4, y: 6.375, dir: 2, V: 7.625, speed: 0.48 },
        { x: 41.4, y: 7.625, dir: 1, V: 7, speed: 0.48 },
      ],
      4: [
        { x: 37.6, y: 7, dir: 8, V: 39.5, speed: V },
        { x: 39.5, y: 7, dir: 1, V: 4, speed: V },
      ],
      5: [{ x: 39.5, y: 7, dir: 1, V: 4, speed: V }],
      6: [
        { x: 41.4, y: 7, dir: 4, V: 39.5, speed: V },
        { x: 39.5, y: 7, dir: 1, V: 4, speed: V },
      ],
      7: [
        { x: 39.5, y: 4, dir: 2, V: 7, speed: 1.6 },
        { x: 39.5, y: 7, dir: 4, V: 37.625, speed: 1.6 },
      ],
      8: [{ x: 39.5, y: 4, dir: 2, V: 7, speed: 1.6 }],
      9: [
        { x: 39.5, y: 4, dir: 2, V: 7, speed: 1.6 },
        { x: 39.5, y: 7, dir: 8, V: 41.375, speed: 1.6 },
      ],
      10: [
        { x: 37.6, y: 7, dir: 8, V: 39.5, speed: V },
        { x: 39.5, y: 7, dir: 1, V: 4, speed: V },
      ],
      11: [{ x: 39.5, y: 7, dir: 1, V: 4, speed: V }],
      12: [
        { x: 41.4, y: 7, dir: 4, V: 39.5, speed: V },
        { x: 39.5, y: 7, dir: 1, V: 4, speed: V },
      ],
    },
    Ae = {
      0: {
        $a: [
          { H: !1, x: 26, y: 9, id: 1 },
          { H: !1, x: 28, y: 9, id: 2 },
          { H: !1, x: 30, y: 9, id: 3 },
          { H: !1, x: 32, y: 9, id: 4 },
          { H: !1, x: 34, y: 9, id: 5 },
          { H: !1, x: 36, y: 9, id: 6 },
          { H: !1, x: 38, y: 9, id: 7 },
          { H: !1, x: 40, y: 9, id: 8 },
          { H: !1, x: 42, y: 9, id: 9 },
          { H: !1, x: 44, y: 9, id: 10 },
          { H: !1, x: 46, y: 9, id: 11 },
          { H: !1, x: 24, y: 9, id: 0 },
          { H: !1, x: 27, y: 21, id: 12 },
          { H: !1, x: 26, y: 18, id: 13 },
        ],
        vb: [
          {
            time: 0.1,
            ha: [
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 0, speed: 0, s: "pcm-dot" },
              { dir: 8, speed: 1.6, s: "pcm-bpcm" },
              { dir: 0, speed: 0, s: "pcm-hidden" },
              { dir: 0, speed: 0, s: "pcm-fing" },
            ],
          },
          {
            time: 0.1,
            ha: [
              { dir: 0, speed: 0, s: "pcm-hidden" },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 8, speed: 1.6 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
            ],
          },
          {
            time: 0.1,
            ha: [
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0, s: "pcm-hidden" },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 8, speed: 1.6 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
            ],
          },
          {
            time: 0.1,
            ha: [
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0, s: "pcm-hidden" },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 8, speed: 1.6 },
              { dir: 1, speed: 0.8 * 3 },
              { dir: 1, speed: 0.8 * 3 },
            ],
          },
          {
            time: 0.1,
            ha: [
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0, s: "pcm-hidden" },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 8, speed: 1.6 },
              { dir: 1, speed: 0.8 * 3 },
              { dir: 1, speed: 0.8 * 3 },
            ],
          },
          {
            time: 0.1,
            ha: [
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0, s: "pcm-hidden" },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 8, speed: 1.6 },
              { dir: 1, speed: 0.8 * 3 },
              { dir: 1, speed: 0.8 * 3 },
            ],
          },
          {
            time: 0.1,
            ha: [
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0, s: "pcm-hidden" },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 8, speed: 1.6 },
              { dir: 1, speed: 0.8 * 3 },
              { dir: 1, speed: 0.8 * 3 },
            ],
          },
          {
            time: 0.1,
            ha: [
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0, s: "pcm-hidden" },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 8, speed: 1.6 },
              { dir: 4, speed: 0.8 * 3, s: "pcm-swipe" },
              { dir: 4, speed: 0.8 * 3 },
            ],
          },
          {
            time: 0.1,
            ha: [
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0, s: "pcm-hidden" },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 8, speed: 1.6 },
              { dir: 4, speed: 0.8 * 3 },
              { dir: 4, speed: 0.8 * 3 },
            ],
          },
          {
            time: 1.5,
            ha: [
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 0, speed: 0 },
              { dir: 4, speed: 1.6 },
              { dir: 4, speed: 3.2 },
              { dir: 4, speed: 3.2 },
            ],
          },
        ],
      },
      1: {
        $a: [
          { H: !1, x: 64, y: 9, id: 0 },
          { H: !0, x: 68.2, y: 9, id: 1 },
        ],
        vb: [
          {
            time: 5.5,
            ha: [
              { dir: 4, speed: 0.8 * 1.5 },
              { dir: 4, speed: 0.8 * 1.56 },
            ],
          },
          {
            time: 0.1,
            ha: [
              { dir: 4, speed: 32 },
              { dir: 4, speed: 0 },
            ],
          },
          {
            time: 9,
            ha: [
              { dir: 8, speed: 0.8 * 1.5, s: "pcm-bpcm" },
              { dir: 8, speed: 0.8, mode: 4 },
            ],
          },
        ],
      },
      2: {
        $a: [
          { H: !0, x: 32, y: 9.5, id: 2 },
          { H: !1, x: 64, y: 9, id: 0 },
          { H: !0, x: 70.2, y: 9, id: 1 },
        ],
        vb: [
          {
            time: 2.7,
            ha: [
              { dir: 0, speed: 0, s: "pcm-stck" },
              { dir: 4, speed: 0.8 * 1.5 },
              { dir: 4, speed: 0.8 * 1.56 },
            ],
          },
          {
            time: 1,
            ha: [
              { dir: 0, speed: 0, s: "pcm-stck" },
              { dir: 4, speed: 0.8 * 1.5 },
              { dir: 4, speed: 0.1 * 0.8 },
            ],
          },
          {
            time: 1.3,
            ha: [
              { dir: 0, speed: 0, s: "pcm-stck" },
              { dir: 4, speed: 0.8 * 1.5 },
              { dir: 4, speed: 0 },
            ],
          },
          {
            time: 1,
            ha: [
              { dir: 0, speed: 0, s: "pcm-stck" },
              { dir: 4, speed: 0.8 * 1.5 },
              { dir: 4, speed: 0, s: "pcm-ghfa" },
            ],
          },
          {
            time: 2.5,
            ha: [
              { dir: 0, speed: 0, s: "pcm-stck" },
              { dir: 4, speed: 0.8 * 1.5 },
              { dir: 4, speed: 0, s: "pcm-ghfa" },
            ],
          },
        ],
      },
      3: {
        $a: [
          { H: !1, x: 64, y: 9, id: 0 },
          { H: !0, x: 70.2, y: 9, id: 2 },
        ],
        vb: [
          {
            time: 5.3,
            ha: [
              { dir: 4, speed: 0.8 * 1.5 },
              { dir: 4, speed: 0.8 * 1.56, s: "pcm-ghin" },
            ],
          },
          {
            time: 5.3,
            ha: [
              { dir: 4, speed: 0 },
              { dir: 8, speed: 0.8 * 1.56, s: "pcm-gbug" },
            ],
          },
        ],
      },
    },
    Be = 1e3 / 90,
    Ce = function (a) {
      this.id = a;
      this.s = null;
    },
    De = function (a) {
      var b = 4,
        c = 4,
        d = 16,
        e = 16;
      if ("pcm-bpcm" == a.s) (d = e = 32), (b = c = 20);
      else if ("pcm-fing" == a.s) (d = 32), (e = 148);
      else if ("pcm-dot" == a.s) b = c = d = e = 8;
      else if ("pcm-swipe" == a.s) (d = 88), (e = 34), (b = 0), (c = 20);
      else if ("pcm-hidden" == a.s) return;
      var f = a.Bb[1],
        h = a.Bb[0];
      b = a.hb[1] + 10 - b;
      c = a.hb[0] + 40 - c;
      "pcm-bpcm" == a.s && 4 == a.dir
        ? (y.save(),
          y.translate(b + d / 2, c),
          y.scale(-1, 1),
          W(f, h, d, e, -d / 2, 0),
          y.restore())
        : "pcm-swipe" == a.s
          ? ((a = y.createLinearGradient(b, 0, b + d, 0)),
            a.addColorStop(0, "rgba(104, 186, 253, 1)"),
            a.addColorStop(1, "rgba(104, 186, 253, 0)"),
            (y.fillStyle = a),
            y.fillRect(b, c, d, e))
          : W(f, h, d, e, b, c);
    },
    He = function (a, b) {
      var c = a.mode;
      a.mode = b;
      a.id != z + 3 || (16 != b && 16 != c) || Ee();
      switch (c) {
        case 32:
          ad = !1;
          break;
        case 8:
          0 < bd && bd--, 0 == bd && X();
      }
      switch (b) {
        case 4:
          a.rb = 0.8 * A.Ha;
          a.wb = 0.8 * A.va;
          a.w = !1;
          break;
        case 1:
          a.rb = 0.8 * A.ua;
          a.wb = 0.8 * A.va;
          a.w = !1;
          break;
        case 2:
          a.i = a.mb;
          a.rb = 0.8 * A.ua;
          a.wb = 0.8 * A.va;
          a.w = !1;
          break;
        case 8:
          a.rb = 1.6;
          a.wb = 1.6;
          a.i = [ve[0], ve[1]];
          a.w = !1;
          a.Ua = !1;
          break;
        case 16:
          Fe(a);
          a.w = !0;
          a.v = -1;
          switch (a.id) {
            case z + 1:
              a.j = 2;
              break;
            case z + 2:
              a.j = 1;
              break;
            case z + 3:
              a.j = 3;
          }
          break;
        case 32:
          a.w = !0;
          a.v = -1;
          switch (a.id) {
            case z + 1:
              a.j = 5;
              break;
            case z + 2:
              a.j = 4;
              break;
            case z + 3:
              a.j = 6;
          }
          ad = !0;
          break;
        case 64:
          a.w = !0;
          a.v = -1;
          switch (a.id) {
            case z:
            case z + 1:
              a.j = 8;
              break;
            case z + 2:
              a.j = 7;
              break;
            case z + 3:
              a.j = 9;
          }
          break;
        case 128:
          switch (((a.w = !0), (a.v = -1), a.id)) {
            case z:
            case z + 1:
              a.j = 11;
              break;
            case z + 2:
              a.j = 10;
              break;
            case z + 3:
              a.j = 12;
          }
      }
      Ge(a);
    },
    Fe = function (a) {
      a.id >= z && (a.Cb = Math.floor(Ie() * z));
    },
    Ke = function (a, b) {
      var c = a.S,
        d = S[a.dir],
        e = [c[0], c[1]];
      e[d.axis] += 8 * d.Na;
      var f = C[e[0]][e[1]];
      b && !f.Va && (f = C[c[0]][c[1]]);
      if (f.Va)
        switch (a.mode) {
          case 2:
          case 1:
          case 8:
            if (0 == (a.dir & f.La) && f.La == B[a.dir]) a.g = B[a.dir];
            else {
              b = 99999999999;
              for (var h = (c = 0); h < pe.length; h++) {
                var g = pe[h];
                if (f.La & g && a.dir != B[g]) {
                  d = S[g];
                  var k = [e[0], e[1]];
                  k[d.axis] += d.Na;
                  d = Je(k, [a.i[0], a.i[1]]);
                  d < b && ((b = d), (c = g));
                }
              }
              c && (a.g = c);
            }
            break;
          case 4:
            if (0 == (a.dir & f.La) && f.La == B[a.dir]) a.g = B[a.dir];
            else {
              do e = pe[Math.floor(4 * Ie())];
              while (0 == (e & f.La) || e == B[a.dir]);
              a.g = e;
            }
        }
    },
    Ne = function (a) {
      if (-1 == a.v || a.Ra)
        a: {
          a.v++;
          if (a.v == ze[a.j].length) {
            if (16 == a.mode && a.Ua && !ad) {
              a.nb ? He(a, 128) : He(a, 32);
              break a;
            }
            if (32 == a.mode || 128 == a.mode) {
              a.o = [ve[0], ve[1] + 4];
              a.dir = a.Ib ? 8 : 4;
              var b = fd;
              128 == a.mode && 4 == b && (b = gd);
              He(a, b);
              break a;
            }
            if (64 == a.mode) {
              a.id == z || a.Ua ? He(a, 128) : ((a.nb = !0), He(a, 16));
              break a;
            }
            a.v = 0;
          }
          b = ze[a.j][a.v];
          a.o[0] = 8 * b.y;
          a.o[1] = 8 * b.x;
          a.dir = b.dir;
          a.Ka = 0;
          a.Ta = Le(b.speed);
          a.Ra = !1;
          Me(a);
        }
      if ((b = ze[a.j][a.v]) && a.Ta[hd]) {
        var c = S[a.dir];
        a.o[c.axis] += c.Na;
        switch (a.dir) {
          case 1:
          case 4:
            a.o[c.axis] < 8 * b.V && ((a.o[c.axis] = 8 * b.V), (a.Ra = !0));
            break;
          case 2:
          case 8:
            a.o[c.axis] > 8 * b.V && ((a.o[c.axis] = 8 * b.V), (a.Ra = !0));
        }
        Me(a);
      }
    },
    Ge = function (a) {
      switch (a.ab) {
        case 0:
          var b = a.id != z || (2 != a.mode && 1 != a.mode) ? a.rb : id;
          break;
        case 1:
          b = a.ma;
          break;
        case 2:
          b = a.wb;
      }
      a.Ka != b && ((a.Ka = b), (a.Ta = Le(a.Ka)));
    },
    Oe = function (a, b) {
      a.ab = b;
      Ge(a);
    },
    Te = function (a) {
      if (a.dir && a.Ta[hd]) {
        var b = S[a.dir];
        a.o[b.axis] += b.Na;
        var c = a.o[0] / 8,
          d = a.o[1] / 8;
        b = [8 * Math.round(c), 8 * Math.round(d)];
        if (b[0] != a.S[0] || b[1] != a.S[1]) {
          dd = !0;
          a.Db && ((a.dir = B[a.dir]), (a.g = 0), (a.Db = !1), Ke(a, !0));
          a.H || C[b[0]][b[1]].path
            ? (a.W = [b[0], b[1]])
            : ((a.o[0] = a.W[0]),
              (a.o[1] = a.W[1]),
              (b[0] = a.W[0]),
              (b[1] = a.W[1]),
              (a.dir = 0));
          1 == C[b[0]][b[1]].type && 8 != a.mode ? Oe(a, 2) : Oe(a, 0);
          if (!a.H && C[b[0]][b[1]].Pa) {
            c = a.id;
            D--;
            rd++;
            Oe(E[c], 1);
            Pe(c);
            2 == C[b[0]][b[1]].Pa ? (Qe(4, !1), Re(50, c)) : Re(10, c);
            C[b[0]][b[1]].Pa = 0;
            Ee();
            Wd = 90 * A.wa;
            if (Sd)
              switch ((Td++, Td)) {
                case qe[1]:
                  E[z + 1].Ua = !0;
                  break;
                case qe[2]:
                  E[z + 2].Ua = !0;
                  break;
                case qe[3]:
                  16 == E[z + 3].mode && (Sd = !1);
              }
            else if (16 == E[z + 1].mode || 8 == E[z + 1].mode)
              E[z + 1].lb++, E[z + 1].lb >= A.ya[1] && (E[z + 1].Ua = !0);
            else if (16 == E[z + 2].mode || 8 == E[z + 2].mode)
              E[z + 2].lb++, E[z + 2].lb >= A.ya[2] && (E[z + 2].Ua = !0);
            else if (16 == E[z + 3].mode || 8 == E[z + 3].mode)
              E[z + 3].lb++, E[z + 3].lb >= A.ya[3] && (E[z + 3].Ua = !0);
            if (70 == rd || 170 == rd)
              (Xd = !0), (Ed = H[15] + (H[16] - H[15]) * Ie());
            0 == D && Y(9);
            X();
          }
          a.S[0] = b[0];
          a.S[1] = b[1];
        } else
          (c = [8 * Math.floor(c), 8 * Math.floor(d)]),
            a.o[1] == c[1] &&
              a.o[0] == c[0] &&
              (a.o[0] == 8 * te[0].y && a.o[1] == 8 * te[0].x
                ? ((a.o[0] = 8 * te[1].y), (a.o[1] = 8 * (te[1].x - 1)))
                : a.o[0] == 8 * te[1].y &&
                  a.o[1] == 8 * te[1].x &&
                  ((a.o[0] = 8 * te[0].y), (a.o[1] = 8 * (te[0].x + 1))),
              8 == a.mode && a.o[0] == ve[0] && a.o[1] == ve[1] && He(a, 64),
              a.H ||
                a.o[0] != we[0] ||
                (a.o[1] != we[1] && a.o[1] != we[1] + 8) ||
                ((c = a.id),
                Xd &&
                  (Se("fruit"),
                  (Xd = !1),
                  (Yd = !0),
                  (Ed = H[14]),
                  Re(A.Ga, c))),
              a.H && Ke(a, !1),
              (c = C[a.o[0]][a.o[1]]),
              c.Va &&
                (a.g && a.g & c.La
                  ? (0 != a.dir && (a.U = a.dir),
                    (a.dir = a.g),
                    (a.g = 0),
                    a.H ||
                      ((a.o[0] += a.Qa[0]),
                      (a.o[1] += a.Qa[1]),
                      (a.Qa = [0, 0])))
                  : 0 == (a.dir & c.La) &&
                    (0 != a.dir && (a.U = a.dir),
                    (a.dir = 0),
                    (a.g = 0),
                    Oe(a, 0))));
        if (!a.H && a.g && C[b[0]][b[1]].Va && a.g & C[b[0]][b[1]].La) {
          b = a.S;
          switch (a.dir) {
            case 1:
              var e = [b[0], b[1]],
                f = [b[0] + 3.6, b[1]];
              break;
            case 2:
              e = [b[0] - 4, b[1]];
              f = [b[0], b[1]];
              break;
            case 4:
              e = [b[0], b[1]];
              f = [b[0], b[1] + 3.6];
              break;
            case 8:
              (e = [b[0], b[1] - 4]), (f = [b[0], b[1]]);
          }
          a.o[0] >= e[0] &&
            a.o[0] <= f[0] &&
            a.o[1] >= e[1] &&
            a.o[1] <= f[1] &&
            ((e = S[a.g]), (a.Qa[e.axis] += e.Na));
        }
        Me(a);
      }
    };
  Ce.prototype.move = function () {
    if (0 == F || (this.H && 1 == F && (8 == this.mode || 64 == this.mode))) {
      if (0 != this.Oa) {
        a: {
          var a = this.Oa;
          cd || ((google.doodle.pacManSound = !0), Ue());
          if (this.dir == B[a])
            (this.dir = a),
              (this.Qa = [0, 0]),
              2 != this.ab && Oe(this, 0),
              0 != this.dir && (this.U = this.dir),
              (this.g = 0);
          else if (this.dir != a)
            if (0 == this.dir) C[this.o[0]][this.o[1]].La & a && (this.dir = a);
            else {
              var b = C[this.S[0]][this.S[1]];
              if (b && b.La & a) {
                b = S[this.dir];
                var c = [this.o[0], this.o[1]];
                c[b.axis] -= b.Na;
                var d = 0;
                c[0] == this.S[0] && c[1] == this.S[1]
                  ? (d = 1)
                  : ((c[b.axis] -= b.Na),
                    c[0] == this.S[0] && c[1] == this.S[1] && (d = 2));
                if (d) {
                  this.dir = a;
                  this.o[0] = this.S[0];
                  this.o[1] = this.S[1];
                  b = S[this.dir];
                  this.o[b.axis] += b.Na * d;
                  break a;
                }
              }
              this.g = a;
              this.Qa = [0, 0];
            }
        }
        this.Oa = 0;
      }
      this.w
        ? (Ne(this), 64 == this.mode && Ne(this))
        : (Te(this), 8 == this.mode && Te(this));
    }
  };
  var Ve = function (a) {
      a.hb = [a.o[0] + a.Qa[0] + 0, a.o[1] + a.Qa[1] + -32];
    },
    Me = function (a) {
      Ve(a);
      if (8 == F || 14 == F) var b = [0, 3];
      else if (a.H) {
        b = 0;
        if (10 == F || 4 == F || 3 == F) {
          b = 3;
          var c = 0;
        } else if (1 == F && a.id == ld) {
          switch (md) {
            case 2:
              b = 0;
              break;
            case 4:
              b = 1;
              break;
            case 8:
              b = 2;
              break;
            case 16:
              b = 3;
          }
          c = 11;
        } else if (
          4 != a.mode &&
          ((16 != a.mode && 32 != a.mode) || 4 != fd || a.nb)
        )
          if (8 == a.mode || 64 == a.mode) {
            c = a.g;
            c || (c = a.dir);
            switch (c) {
              case 4:
                b = 2;
                break;
              case 8:
                b = 3;
                break;
              case 1:
                b = 0;
                break;
              case 2:
                b = 1;
            }
            c = 10;
          } else if ("pcm-ghin" == a.s)
            (c = 8), (b = 6 + (Math.floor(I / 16) % 2));
          else if ("pcm-gbug" == a.s)
            (b = 6), (c = 9 + (Math.floor(I / 16) % 2));
          else if ("pcm-ghfa" == a.s) (b = 3 == K ? 6 : 7), (c = 11);
          else if ("pcm-stck" == a.s)
            (b =
              1 == K
                ? 60 < nd
                  ? 1
                  : 45 < nd
                    ? 2
                    : 3
                : 2 == K
                  ? 3
                  : 3 == K || 4 == K
                    ? 4
                    : 0),
              (c = 13);
          else {
            c = a.g;
            (c && 1 != C[a.S[0]][a.S[1]].type) || (c = a.dir);
            switch (c) {
              case 4:
                b = 4;
                break;
              case 8:
                b = 6;
                break;
              case 1:
                b = 0;
                break;
              case 2:
                b = 2;
            }
            c = 4 + a.id - z;
            if (0 < a.speed || 13 != F) b += Math.floor(I / 16) % 2;
          }
        else
          (b = 0),
            (c = 8),
            J < A.Fb - A.$ && 0 == Math.floor(J / H[1]) % 2 && (b += 2),
            (b += Math.floor(I / 16) % 2);
        b = [c, b];
      } else {
        c = b = 0;
        var d = a.dir;
        0 == d && (d = a.U);
        if (1 == F && a.id == jd) (b = 3), (c = 0);
        else if ((9 != F && 10 != F) || 0 != a.id)
          if (4 == F || 5 == F || 7 == F) (b = 0 == a.id ? 2 : 4), (c = 0);
          else if (3 == F)
            if (a.id == kd)
              if (((d = 20 - Math.floor((G / H[4]) * 21)), 0 == a.id)) {
                b = d - 1;
                switch (b) {
                  case -1:
                    b = 0;
                    break;
                  case 11:
                    b = 10;
                    break;
                  case 12:
                  case 13:
                  case 14:
                  case 15:
                  case 16:
                  case 17:
                  case 18:
                  case 19:
                  case 20:
                    b = 11;
                }
                c = 12;
              } else
                switch (d) {
                  case 0:
                  case 1:
                  case 2:
                  case 6:
                  case 10:
                    b = 4;
                    c = 3;
                    break;
                  case 3:
                  case 7:
                  case 11:
                    b = 4;
                    c = 0;
                    break;
                  case 4:
                  case 8:
                  case 12:
                  case 13:
                  case 14:
                  case 15:
                  case 16:
                  case 17:
                  case 18:
                  case 19:
                  case 20:
                    b = 4;
                    c = 2;
                    break;
                  case 5:
                  case 9:
                    (b = 4), (c = 1);
                }
            else (b = 3), (c = 0);
          else if ("pcm-bpcm" == a.s)
            (b = 14),
              (c = Math.floor(0.2 * I) % 4),
              3 == c && (c = 1),
              (c *= 2);
          else if ("pcm-fing" == a.s) (b = 14), (c = 6);
          else if ("pcm-dot" == a.s) (b = 0), (c = 9);
          else if ("pcm-hidden" == a.s) c = b = 0;
          else {
            switch (d) {
              case 4:
                c = 0;
                break;
              case 8:
                c = 1;
                break;
              case 1:
                c = 2;
                break;
              case 2:
                c = 3;
            }
            2 != F && (b = Math.floor(0.3 * I) % 4);
            3 == b && 0 == a.dir && (b = 0);
            2 == b && 0 == a.id && (b = 0);
            3 == b && ((b = 2), 0 == a.id && (c = 0));
            1 == a.id && (b += 4);
          }
        else (b = 2), (c = 0);
        b = [c, b];
      }
      b[0] *= 16;
      b[1] *= 16;
      a.Bb = [(b[0] / 8) * 10 + 2, (b[1] / 8) * 10 + 2];
    },
    Ie = function () {
      return (od = (134775813 * od + 1) % 4294967296) / 4294967296;
    },
    Je = function (a, b) {
      return Math.sqrt(
        (b[1] - a[1]) * (b[1] - a[1]) + (b[0] - a[0]) * (b[0] - a[0]),
      );
    },
    We = function () {
      E = [];
      for (var a = 0; a < z + 4; a++)
        (E[a] = new Ce(a)),
          a < z ? ((E[a].H = !1), (E[a].mode = 1)) : (E[a].H = !0);
    },
    Ye = function (a) {
      Mc(sd);
      a || (a = window.event);
      27 == a.which && Xe();
      var b = !1;
      switch (a.keyCode) {
        case 37:
          E[0].Oa = 4;
          b = !0;
          break;
        case 38:
          E[0].Oa = 1;
          b = !0;
          break;
        case 39:
          E[0].Oa = 8;
          b = !0;
          break;
        case 40:
          E[0].Oa = 2;
          b = !0;
          break;
        case 65:
          2 == z && ((E[1].Oa = 4), (b = !0));
          break;
        case 83:
          2 == z && ((E[1].Oa = 2), (b = !0));
          break;
        case 68:
          2 == z && ((E[1].Oa = 8), (b = !0));
          break;
        case 87:
          2 == z && ((E[1].Oa = 1), (b = !0));
      }
      b && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
    },
    Xe = function () {
      for (
        var a = window;
        a.postMessage("lightbox-exit", "*"), a !== a.parent;

      )
        a = a.parent;
    },
    Ze = function (a, b) {
      var c = M,
        d = [0, 0];
      do (d[0] += c.offsetTop), (d[1] += c.offsetLeft);
      while ((c = c.offsetParent));
      a -= d[1] - -32;
      b -= d[0] - 0;
      c = E[0];
      d = c.o[1] + c.Qa[1] + -32 + 16;
      var e = c.o[0] + c.Qa[0] + 0 + 32,
        f = Math.abs(a - d),
        h = Math.abs(b - e);
      8 < f && h < f
        ? (c.Oa = a > d ? 8 : 4)
        : 8 < h && f < h && (c.Oa = b > e ? 2 : 1);
    },
    $e = function (a) {
      Mc(sd);
      a || (a = window.event);
      Ze(a.clientX, a.clientY);
    },
    cf = function (a) {
      Mc(sd);
      ud = td = 0;
      1 == a.touches.length &&
        ((vd = a.touches[0].pageX),
        (wd = a.touches[0].pageY),
        document.addEventListener("touchmove", af, !0),
        document.addEventListener("touchend", bf, !0));
      a.preventDefault();
    },
    af = function (a) {
      Mc(sd);
      1 < a.touches.length
        ? df()
        : ((td = a.touches[0].pageX - vd), (ud = a.touches[0].pageY - wd));
      a.preventDefault();
    },
    bf = function (a) {
      Mc(sd);
      if (0 == td && 0 == ud) Ze(vd, wd);
      else {
        var b = Math.abs(td),
          c = Math.abs(ud);
        8 > b && 8 > c
          ? Ze(vd, wd)
          : 15 < b && c < (2 * b) / 3
            ? (E[0].Oa = 0 < td ? 8 : 4)
            : 15 < c && b < (2 * c) / 3 && (E[0].Oa = 0 < ud ? 2 : 1);
        xd || ((xd = !0), yd && 0 == zd && (ef(), Pe(0)));
      }
      a.preventDefault();
      df();
    },
    df = function () {
      document.removeEventListener("touchmove", af, !0);
      document.removeEventListener("touchend", bf, !0);
      wd = vd = null;
    },
    gf = function () {
      Ad = [0, 0];
      Bd = [!1, !1];
      Cd = 3;
      N = 0;
      Dd = !1;
      I = 0;
      ff(!0);
    },
    hf = function (a) {
      Fd = Ed = G = hd = J = od = 0;
      Gd = 90 * A.ta[0];
      ad = !1;
      bd = 0;
      dd = !1;
      Ee();
      Yd = Xd = !1;
      Wd = 90 * A.wa;
      for (var b = 0; b < E.length; b++) {
        var c = E[b],
          d = ue[z][c.id];
        c.o = [8 * d.y, 8 * d.x];
        c.Qa = [0, 0];
        c.S = [8 * d.y, 8 * d.x];
        c.i = [8 * d.Ya, 8 * d.Xa];
        c.mb = [8 * d.Ya, 8 * d.Xa];
        c.dir = d.dir;
        c.U = c.dir;
        c.g = 0;
        c.Oa = 0;
        c.Ka = 0;
        Oe(c, 0);
        c.nb = !1;
        c.Ib = !1;
        c.Ua = !1;
        c.Db = !1;
        Fe(c);
      }
      for (b = 0; b < E.length; b++) Ve(E[b]);
      Qe(2, !0);
      for (b = z + 1; b < z + 4; b++) He(E[b], 16);
      Hd = [1, 1];
      ee = [!1, !1];
      fe = [!1, !1];
      a ? Y(4) : Y(6);
    },
    jf = function () {
      z = 1;
      de = 1 == z ? 10 : 5;
      We();
      yd = Id = !1;
      Kd = Jd = O = !0;
      Md = Ld = !1;
      Od = Nd = !0;
      Pd = !1;
      gf();
    },
    ff = function (a) {
      N++;
      kf("L" + N);
      A = N >= ye.length ? ye[ye.length - 1] : ye[N];
      A.kc ||
        ((A.$ = Math.round(90 * A.$)),
        (A.Fb = A.$ + H[1] * (2 * A.Fa - 1)),
        (A.kc = !0));
      for (var b = 0; b < E.length; b++) E[b].lb = 0;
      ed = Sd = !1;
      for (b = qd = pd = rd = D = 0; b < re.length; b++) {
        var c = re[b];
        c.T
          ? ((c = c.x + c.T - 1), c > pd && (pd = c))
          : ((c = c.y + c.h - 1), c > qd && (qd = c));
      }
      C = [];
      for (b = 0; b <= qd + 1; b++)
        for (C[8 * b] = [], c = -2; c <= pd + 1; c++)
          C[8 * b][8 * c] = { path: 0, Pa: 0, Va: 0 };
      for (b = 0; b < re.length; b++) {
        c = re[b];
        var d = c.type;
        if (c.T) {
          for (var e = 8 * c.y, f = 8 * c.x; f <= 8 * (c.x + c.T - 1); f += 8)
            (C[e][f].path = !0),
              0 == C[e][f].Pa && ((C[e][f].Pa = 1), D++),
              !d || (f != 8 * c.x && f != 8 * (c.x + c.T - 1))
                ? (C[e][f].type = d)
                : (C[e][f].type = 0);
          C[e][8 * c.x].Va = !0;
          C[e][8 * (c.x + c.T - 1)].Va = !0;
        } else {
          f = 8 * c.x;
          for (e = 8 * c.y; e <= 8 * (c.y + c.h - 1); e += 8)
            C[e][f].path && (C[e][f].Va = !0),
              (C[e][f].path = !0),
              0 == C[e][f].Pa && ((C[e][f].Pa = 1), D++),
              !d || (e != 8 * c.y && e != 8 * (c.y + c.h - 1))
                ? (C[e][f].type = d)
                : (C[e][f].type = 0);
          C[8 * c.y][f].Va = !0;
          C[8 * (c.y + c.h - 1)][f].Va = !0;
        }
      }
      for (b = 0; b < T.length; b++)
        if (T[b].T)
          for (f = 8 * T[b].x; f <= 8 * (T[b].x + T[b].T - 1); f += 8)
            (C[8 * T[b].y][f].Pa = 0), D--;
        else
          for (e = 8 * T[b].y; e <= 8 * (T[b].y + T[b].h - 1); e += 8)
            (C[e][8 * T[b].x].Pa = 0), D--;
      for (b = 8; b <= 8 * qd; b += 8)
        for (c = 8; c <= 8 * pd; c += 8)
          (C[b][c].La = 0),
            C[b - 8][c].path && (C[b][c].La += 1),
            C[b + 8][c].path && (C[b][c].La += 2),
            C[b][c - 8].path && (C[b][c].La += 4),
            C[b][c + 8].path && (C[b][c].La += 8);
      for (b = 0; b < se.length; b++) (c = se[b]), (C[8 * c.y][8 * c.x].Pa = 2);
      hf(a);
      256 == N && (kf("K"), (Id = O = !0), Y(14));
    },
    Qe = function (a, b) {
      if (4 == a && 0 == A.$)
        for (var c = 0; c < E.length; c++) {
          var d = E[c];
          d.H && (d.Db = !0);
        }
      else {
        c = fd;
        4 == a && 4 != fd && (gd = fd);
        fd = a;
        (4 != a && 4 != c) || X();
        switch (a) {
          case 1:
          case 2:
            Ud = 0.8 * A.Ja;
            Vd = 0.8 * A.ma;
            break;
          case 4:
            (Ud = 0.8 * A.Ia), (Vd = 0.8 * A.Ba), (J = A.Fb), (md = 1);
        }
        for (c = 0; c < E.length; c++)
          if (((d = E[c]), d.H)) {
            if (
              (64 == a || b || (d.Ib = !0),
              4 == a && (d.nb = !1),
              (8 != d.mode &&
                16 != d.mode &&
                32 != d.mode &&
                128 != d.mode &&
                64 != d.mode) ||
                b)
            )
              b || 4 == d.mode || d.mode == a || (d.Db = !0), He(d, a);
          } else (d.rb = Ud), (d.ma = Vd), (d.wb = Ud), Ge(d);
      }
    },
    lf = function (a) {
      return [4 >= a ? 128 : 160, 128 + ((a - 1) % 4) * 16];
    },
    Ee = function () {
      var a = 0.8 * A.ua;
      if (!ed || 16 != E[z + 3].mode) {
        var b = A;
        D < b.Ca ? (a = 0.8 * b.Ea) : D < b.Aa && (a = 0.8 * b.Da);
      }
      a != id && ((id = a), Ge(E[z]));
    },
    Le = function (a) {
      if (!Zd[a]) {
        var b = 0,
          c = 0;
        Zd[a] = [];
        for (var d = 0; 90 > d; d++)
          (b += a),
            Math.floor(b) > c
              ? (Zd[a].push(!0), (c = Math.floor(b)))
              : Zd[a].push(!1);
      }
      return Zd[a];
    },
    Y = function (a) {
      F = a;
      if (13 != a) for (var b = 0; b < z + 4; b++) Me(E[b]);
      switch (a) {
        case 0:
          X();
          break;
        case 2:
          Z();
          G = H[3];
          break;
        case 3:
          0 == kd ? Se("death") : Se("death-double");
          G = H[4];
          break;
        case 6:
          O = !1;
          G = H[5];
          break;
        case 7:
          Z();
          Ld = Kd = O = !0;
          G = H[6];
          break;
        case 4:
          Ld = Kd = !0;
          G = H[7];
          Z();
          2 == z ? Se("start-music-double") : Se("start-music");
          break;
        case 5:
          Cd--;
          G = H[8];
          break;
        case 8:
        case 14:
          Ld = !1;
          Z();
          Md = !0;
          G = H[9];
          break;
        case 9:
          Z();
          G = H[10];
          break;
        case 10:
          Kd = !1;
          G = H[11];
          break;
        case 11:
          O = !1;
          G = H[12];
          break;
        case 12:
          Jd = !1;
          G = H[13];
          break;
        case 1:
          G = H[2];
          break;
        case 13:
          yd = !0;
          O = !1;
          $d = Ae[zd];
          K = -1;
          J = A.Fb;
          ae = [];
          for (var c in $d.$a)
            (a = $d.$a[c].id),
              0 < a && (a += z - 1),
              (a = new Ce(a)),
              (a.o = [8 * $d.$a[c].y, 8 * $d.$a[c].x]),
              (a.Qa = [0, 0]),
              (a.H = $d.$a[c].H),
              ae.push(a);
          mf();
          Z();
          X();
      }
    },
    nf = function (a) {
      a = window.event || a;
      a.cancelBubble = !0;
      google.doodle.pacManSound
        ? ((cd = !0), Z(), (google.doodle.pacManSound = !1))
        : ((cd = !1), (google.doodle.pacManSound = !0), X());
      var b = !cd;
      if (Oc)
        try {
          window.localStorage.setItem("doodle-pacman-audio", JSON.stringify(b));
        } catch (c) {}
      Ue();
      return (a.returnValue = !1);
    },
    Ue = function () {
      P &&
        (P.style.backgroundPosition = google.doodle.pacManSound
          ? "-216px -105px"
          : "-236px -105px");
    },
    ef = function () {
      yd = !1;
      O = !0;
      0 == zd ? (xd ? ff(!0) : ((zd = 0), Y(13))) : ff(!1);
    },
    mf = function () {
      K++;
      if ($d.vb.length == K) ef();
      else {
        var a = $d.vb[K];
        nd = 90 * a.time;
        for (var b = 0; b < ae.length; b++) {
          var c = ae[b];
          c.dir = a.ha[b].dir;
          c.speed = a.ha[b].speed;
          a.ha[b].s && (c.s = a.ha[b].s);
          a.ha[b].mode && (c.mode = a.ha[b].mode);
          Me(c);
        }
      }
    },
    of = function () {
      13 != F &&
        (0 == I % (2 * H[17])
          ? (Od = !0)
          : I % (2 * H[17]) == H[17] && (Od = !1));
    },
    pf = !1,
    qf = !1,
    rf = function () {
      qf ? (pf = !1) : ((pf = !0), requestAnimationFrame(rf));
      var a = new Date().getTime();
      Q += a - be - Be;
      100 < Q ? (Q = 100) : -100 > Q && (Q = -100);
      var b = 0;
      Q > Be
        ? ((b = Math.floor(Q / Be)), (Q -= Be * b))
        : Q < -Be && ((b = Math.ceil(Q / Be)), (Q -= Be * b));
      b = 1 + b;
      be = a;
      if (13 == F) {
        for (a = 0; a < b; a++) {
          for (var c = 0; c < ae.length; c++) {
            var d = ae[c],
              e = S[d.dir];
            d.o[e.axis] += e.Na * d.speed;
            Me(d);
          }
          nd--;
          hd = (hd + 1) % 90;
          I++;
        }
        0 >= nd && mf();
        of();
      } else
        for (a = 0; a < b; a++) {
          for (c = 0; c < E.length; c++) E[c].move();
          if (0 == F && dd) {
            a: for (dd = !1, d = z; d < z + 4; d++)
              for (c = 0; c < z; c++)
                if (E[d].S[0] == E[c].S[0] && E[d].S[1] == E[c].S[1]) {
                  if (4 == E[d].mode) {
                    Se("eating-ghost");
                    Re(200 * md, c);
                    md *= 2;
                    ld = d;
                    jd = c;
                    Y(1);
                    break a;
                  }
                  8 != E[d].mode &&
                    16 != E[d].mode &&
                    32 != E[d].mode &&
                    128 != E[d].mode &&
                    64 != E[d].mode &&
                    ((kd = c), Y(2));
                }
            for (c = z; c < z + 4; c++)
              if (
                ((d = E[c]),
                d.id == z &&
                  D < A.Aa &&
                  2 == d.mode &&
                  (!ed || 16 != E[z + 3].mode))
              )
                (e = E[d.Cb]), (d.i = [e.S[0], e.S[1]]);
              else if (d.H && 1 == d.mode)
                switch (((e = E[d.Cb]), d.id)) {
                  case z:
                    d.i = [e.S[0], e.S[1]];
                    break;
                  case z + 1:
                    d.i = [e.S[0], e.S[1]];
                    var f = S[e.dir];
                    d.i[f.axis] += 32 * f.Na;
                    1 == e.dir && (d.i[1] -= 32);
                    break;
                  case z + 2:
                    var h = E[z],
                      g = [e.S[0], e.S[1]];
                    f = S[e.dir];
                    g[f.axis] += 16 * f.Na;
                    1 == e.dir && (g[1] -= 16);
                    d.i[0] = 2 * g[0] - h.S[0];
                    d.i[1] = 2 * g[1] - h.S[1];
                    break;
                  case z + 3:
                    64 < Je(e.S, d.S) ? (d.i = [e.S[0], e.S[1]]) : (d.i = d.mb);
                }
          }
          I++;
          hd = (hd + 1) % 90;
          switch (F) {
            case 4:
            case 5:
            case 6:
            case 7:
            case 9:
            case 10:
            case 11:
            case 12:
              Nd = !0;
              break;
            case 8:
            case 14:
              Nd = !1;
              break;
            default:
              0 == I % (2 * H[0])
                ? (Nd = !0)
                : I % (2 * H[0]) == H[0] && (Nd = !1);
          }
          of();
          if (0 == F) {
            if (Wd && (Wd--, 0 >= Wd)) {
              for (c = 1; 3 >= c; c++)
                if (16 == E[z + c].mode) {
                  E[z + c].Ua = !0;
                  break;
                }
              Wd = 90 * A.wa;
            }
            Ed && (Ed--, 0 >= Ed && (Yd = Xd = !1));
            if (J) J--, 0 >= J && ((J = 0), Qe(gd, !1));
            else if (0 < Gd && (Gd--, 0 >= Gd && ((Gd = 0), Fd++, A.ta[Fd])))
              switch (((Gd = 90 * A.ta[Fd]), fd)) {
                case 2:
                  Qe(1, !1);
                  break;
                case 1:
                  Qe(2, !1);
              }
          }
          if (G) {
            G--;
            switch (F) {
              case 2:
              case 3:
                for (c = 0; c < z + 4; c++) Me(E[c]);
                break;
              case 10:
                Pd = 0 == Math.floor(G / (H[11] / 8)) % 2 ? !1 : !0;
            }
            if (0 >= G)
              switch (((G = 0), F)) {
                case 1:
                  Y(0);
                  bd++;
                  X();
                  He(E[ld], 8);
                  d = !1;
                  for (c = z; c < z + 4; c++)
                    if (
                      4 == E[c].mode ||
                      ((16 == E[c].mode || 128 == E[c].mode) && !E[c].nb)
                    ) {
                      d = !0;
                      break;
                    }
                  d || Qe(gd, !1);
                  break;
                case 2:
                  Y(3);
                  break;
                case 3:
                  Sd = ed = !0;
                  Td = 0;
                  Cd--;
                  -1 == Cd ? (kf("G"), Y(8)) : hf(!1);
                  break;
                case 4:
                  Y(5);
                  break;
                case 6:
                  Y(7);
                  break;
                case 7:
                case 5:
                  Ld = !1;
                  Y(0);
                  break;
                case 8:
                  Md = !1;
                  Xe();
                  google.doodle.pacManQuery && google.doodle.pacManQuery();
                  break;
                case 9:
                  Y(10);
                  break;
                case 10:
                  Y(11);
                  break;
                case 11:
                  A.kb ? ((zd = A.kb), Y(13)) : ((O = !0), ff(!1));
                  break;
                case 12:
                  (O = Jd = !0), (z = 2), (de = 1 == z ? 10 : 5), We(), gf();
              }
          }
        }
      b = y;
      b.fillStyle = "black";
      b.fillRect(0, 0, 484, 208);
      if (yd) {
        b.save();
        b.beginPath();
        b.rect(10, 40, 464, 136);
        b.clip();
        for (a = 0; a < ae.length; a++) De(ae[a]);
        b.restore();
        sf();
      }
      if (O) {
        if (Jd) {
          W(322, Pd ? 138 : 2, 464, 136, 10, 40);
          b.fillStyle = "#f8b090";
          b.beginPath();
          for (d = 8; d <= 8 * qd; d += 8)
            for (e = 8; e <= 8 * pd; e += 8)
              1 == C[d][e].Pa && b.rect(e + -32 + 10 + 3, d + 0 + 40 + 3, 2, 2);
          b.fill();
          if (Nd)
            for (d = 8; d <= 8 * qd; d += 8)
              for (e = 8; e <= 8 * pd; e += 8)
                2 == C[d][e].Pa &&
                  ((a = e + -32 + 10), (c = d + 0 + 40), W(2, 182, 8, 8, a, c));
          Kd && ((b.fillStyle = "#ffaaa5"), b.fillRect(289, 86, 19, 2));
          if (Xd || Yd)
            (a = Yd ? [128, 16 * (A.ka - 1)] : lf(A.ka)),
              (d = (a[0] / 8) * 10 + 2),
              (e = (a[1] / 8) * 10 + 2),
              (a = we[1] + -32 + 10 - 8),
              (c = we[0] + 0 + 40 - 4),
              W(d, e, 32, 16, a, c);
          if (1 == F) {
            for (a = 0; a < E.length; a++) a != ld && De(E[a]);
            De(E[ld]);
          } else for (a = 0; a < E.length; a++) De(E[a]);
        }
        Od && (W(202, 72, 48, 8, -2, 8), 2 == z && W(202, 82, 48, 8, 62, 8));
        tf(0);
        2 == z && tf(1);
        if (Id) {
          b.save();
          b.beginPath();
          b.rect(10, 40, 464, 136);
          b.clip();
          od = 0;
          b.fillStyle = "black";
          b.fillRect(282, 40, 200, 80);
          b.fillRect(290, 120, 192, 56);
          Qd = 80;
          Rd = 0;
          for (a = 280; 472 >= a; a += 8)
            for (c = 0; 136 >= c; c += 8)
              0.03 > Ie() &&
                ((Qd = 10 * Math.floor(25 * Ie())),
                (Rd = 10 * Math.floor(2 * Ie()))),
                W(Qd, Rd, 8, 8, a + 10, c + 40),
                (Rd += 8);
          b.restore();
        }
        sf();
        for (a = 0; a < Cd; a++) W(82, 163, 16, 12, 10 + 15 * a, 184);
        Md && W(12, 192, 80, 8, 258, 120);
        Ld && W(202, 2, 48, 8, 274, 120);
      }
    },
    W = function (a, b, c, d, e, f) {
      y.drawImage(ce, a, b, c, d, e, f, c, d);
    },
    tf = function (a) {
      var b = Ad[a].toString();
      b.length > de && (b = b.substr(b.length - de, de));
      a = 0 == a ? 10 : 74;
      for (var c = 0; c < de; c++) {
        var d = b.substr(c, 1);
        d &&
          W(((8 + 8 * parseInt(d, 10)) / 8) * 10 + 2, 182, 8, 8, a + 8 * c, 24);
      }
    },
    sf = function () {
      for (var a = Math.max(N - 4 + 1, 1), b = N; b >= a; b--) {
        var c = lf(b >= ye.length ? ye[ye.length - 1].ka : ye[b].ka);
        W(
          (c[0] / 8) * 10 + 2,
          (c[1] / 8) * 10 + 2,
          32,
          16,
          466 - 16 * (1 + b - a),
          184,
        );
      }
    },
    Re = function (a, b) {
      Ad[b] += a;
      !Bd[b] &&
        1e4 < Ad[b] &&
        (Se("extra-life"), (Bd[b] = !0), Cd++, 5 < Cd && (Cd = 5));
    },
    Se = function (a) {
      ge && google.doodle.pacManSound && !Dd && R.get(a).play();
    },
    Z = function () {
      if (ge) {
        for (var a = ba(R.keys()), b = a.next(); !b.done; b = a.next())
          R.get(b.value).stop();
        he = null;
      }
    },
    Pe = function (a) {
      ge &&
        google.doodle.pacManSound &&
        0 == F &&
        (ee[a]
          ? (fe[a] = !0)
          : (0 == a
              ? (Se(1 == Hd[a] ? "eating-dot-1" : "eating-dot-2"),
                (ie = window.setInterval(uf, 150)))
              : (Se("eating-dot-double"), (je = window.setInterval(vf, 150))),
            (Hd[a] = 3 - Hd[a])));
    },
    wf = function (a) {
      ee[a] = !1;
      fe[a] && ((fe[a] = !1), Pe(a));
    },
    uf = function () {
      wf(0);
    },
    vf = function () {
      wf(1);
    },
    X = function () {
      if (ge && google.doodle.pacManSound) {
        var a = 0;
        0 == F || 1 == F
          ? (a = bd
              ? "ambient-eyes"
              : 4 == fd
                ? "ambient-fright"
                : 241 < rd
                  ? "ambient-4"
                  : 207 < rd
                    ? "ambient-3"
                    : 138 < rd
                      ? "ambient-2"
                      : "ambient-1")
          : 13 == F && 0 != zd && (a = "cutscene");
        if (a) {
          var b = !1;
          he && (he != a ? R.get(he).stop() : (b = !0));
          b || ((he = a), R.get(a).play(0, !0));
        }
      }
    },
    xf = function () {
      qf = !1;
      pf ? X() : (X(), (be = new Date().getTime()), (Q = 0), rf());
    },
    yf = function () {
      qf = !0;
      Z();
      window.clearInterval(ie);
      window.clearInterval(je);
    },
    Af = function () {
      (me || ne) && zf(0.67);
      if (me && ne && (zf(1), !le)) {
        le = !0;
        ke.style.background = "black";
        M = document.createElement("canvas");
        M.width = 484;
        M.height = 208;
        y = M.getContext("2d");
        ke.appendChild(M);
        M.tabIndex = 0;
        M.focus();
        ge &&
          ((P = document.createElement("div")),
          (P.style.background = `url(${assetsPath}sprite-main.png) 38px 18px no-repeat`),
          (P.style.position = "absolute"),
          (P.style.right = "0"),
          (P.style.top = "0"),
          (P.style.width = "12px"),
          (P.style.height = "12px"),
          (P.style.cursor = "pointer"),
          ke.appendChild(P),
          (P.onclick = nf),
          P.addEventListener("touchstart", nf),
          Ue());
        Zd = [];
        B = [, 2, 1, , 8, , , , 4];
        window.addEventListener
          ? (window.addEventListener("keydown", Ye, !1),
            M.addEventListener("click", $e, !1),
            document.addEventListener("touchstart", cf, !0),
            M.addEventListener("touchstart", cf, !0),
            document.f &&
              document.f.q &&
              document.f.q.addEventListener("touchstart", cf, !0))
          : (document.body.attachEvent("onkeydown", Ye),
            M.attachEvent("onclick", $e));
        H = {};
        for (var b in xe)
          H[b] = Math.round(
            90 * (google.doodle.pacManSound || (7 != b && 8 != b) ? xe[b] : 1),
          );
        sd = new Ic(12e4, yf, xf);
        jf();
        isMobile && ((zd = N = 0), Y(13));
        xf();
      }
    },
    Bf = function () {
      ne = !0;
      Af();
    },
    Cf = function () {
      --oe;
      0 == oe && ((me = ge = !0), Af());
    },
    zf = function (a) {},
    kf = function (a) {};
  kf("I");
  xd = le = !1;
  ke = document.getElementById("game");
  ke.title = "";
  zf(0.33);
  google.pacman = google.pacman || {};
  google.pacman.destroy = function () {
    if (google.pacman) {
      Z();
      window.clearInterval(ie);
      window.clearInterval(je);
      M && M.parentNode && M.parentNode.removeChild(M);
      google.pacman = void 0;
      window.removeEventListener &&
        (window.removeEventListener("MozGamepadConnected", Zc, !1),
        window.removeEventListener("MozGamepadDisconnected", $c, !1));
      Wc = !1;
      var a = sd;
      a && "function" == typeof a.Hb && a.Hb();
    }
  };
  ne = !1;
  var Df = "IMG",
    Ef = document;
  Df = String(Df);
  "application/xhtml+xml" === Ef.contentType && (Df = Df.toLowerCase());
  ce = Ef.createElement(Df);
  var Ff = -1 != navigator.userAgent.indexOf("MSIE");
  Ff || (ce.onload = Bf);
  ce.src = `${assetsPath}sprite-main.png`;
  Ff && Bf();
  0 ==
    (function () {
      if (!Oc) return !0;
      try {
        var a = window.localStorage.getItem("doodle-pacman-audio");
      } catch (b) {
        return !0;
      }
      return null == a ? !0 : JSON.parse(a);
    })() && ((cd = !0), (google.doodle.pacManSound = !1));
  me = ge = !1;
  if (
    (function () {
      var a = x.hc(),
        b = ke;
      if (!Ub) return !1;
      if (a.g) return !0;
      a.g = new (window.AudioContext || window.webkitAudioContext)();
      a.w = a.g.createGain();
      a.w.connect(a.g.destination);
      for (var c in a.v) a.v[c].j = a.g;
      for (var d in a.j) Vb(a.j[d], a.g, a.w);
      a.g.onstatechange = function () {
        Rb(a);
      };
      Rb(a);
      Tb(a);
      Eb(
        b,
        ["click", "pointerup", "mouseup", "touchend"],
        function () {
          a.g.resume();
          Tb(a);
        },
        !0,
      );
      return !0;
    })()
  ) {
    R = new Map();
    R.set("death", x.g.Tb);
    R.set("eating-dot-1", x.g.Vb);
    R.set("eating-dot-2", x.g.Wb);
    R.set("ambient-1", x.g.Mb);
    R.set("ambient-2", x.g.Nb);
    R.set("ambient-3", x.g.Ob);
    R.set("ambient-4", x.g.Pb);
    R.set("ambient-eyes", x.g.Qb);
    R.set("ambient-fright", x.g.Rb);
    R.set("cutscene", x.g.Sb);
    R.set("death-double", x.g.Ub);
    R.set("eating-dot-double", x.g.Xb);
    R.set("eating-ghost", x.g.Yb);
    R.set("extra-life", x.g.Zb);
    R.set("fruit", x.g.$b);
    R.set("start-music", x.g.ac);
    R.set("start-music-double", x.g.bc);
    oe = R.size;
    for (var Gf = ba(R.values()), Hf = Gf.next(); !Hf.done; Hf = Gf.next())
      Hf.value.Kb.preload(Cf);
  } else (me = !0), Af();
  Sc[0] = 37;
  Sc[1] = 39;
  Sc[2] = 38;
  Sc[3] = 40;
  Uc = ke;
  Vc = null;
  window.addEventListener &&
    (window.addEventListener("MozGamepadConnected", Zc, !1),
    window.addEventListener("MozGamepadDisconnected", $c, !1));
  (!navigator.webkitGamepads && !navigator.webkitGetGamepads) ||
    Wc ||
    ((Wc = !0), Yc());
}).call(this);

addEventListener("DOMContentLoaded", () => {
  const positionDoodleGames = () => {
    const content = document.querySelector(".content");
    const btnDoodleGames = document.querySelector("#btnDoodleGames");
    btnDoodleGames.style.top = `${content.offsetTop + 20}px`;
    btnDoodleGames.style.left = `${content.offsetLeft + Math.floor(content.clientWidth / 2)}px`;
    btnDoodleGames.style.translate = `-50%`;
  };

  addEventListener("resize", (event) => {
    positionDoodleGames();
  });
  positionDoodleGames();
});
