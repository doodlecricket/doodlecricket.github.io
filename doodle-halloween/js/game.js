const assetsPath = "/doodle-halloween/";
window.PAUSE_GAME = false;

function fullscreen(element) {
  if (document.fullscreenElement) {
    return;
  }

  try {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }

    if (screen.orientation) {
      screen.orientation.lock("landscape");
    } else if (screen.lockOrientation) {
      screen.lockOrientation("landscape");
    } else if (screen.mozLockOrientation) {
      screen.mozLockOrientation("landscape");
    } else if (screen.msLockOrientation) {
      screen.msLockOrientation("landscape");
    }
  } catch {}
}

(window.google = {}),
  (window.google.doodle = {}),
  (window.google.doodle.l10n = {
    en: {
      ALL: {
        "{{LOGO_ALT_TEXT_HTML}}": "#",
        "{{LOGO_ALT_TEXT_JS}}": "#",
        "{{LOGO_ALT_TEXT}}": "#",
        "{{LOGO_ANCHOR_TARGET}}": "#",
        "Automatically Replaced Alt Text HTML": "#",
        "Automatically Replaced Alt Text JS": "#",
        "Automatically Replaced Alt Text": "#",
        "Automatically Replaced Share Text JS": "#DoodleHalloween",
        "/search?q=automatically+replaced": "#",
        "{{TLD}}": "com",
        "Automatically Replaced TLD": "com",
        "{{LANGUAGE}}": "en",
        "Automatically Replaced Language": "en",
        "{{GEO_CODE}}": "us",
        "Automatically Replaced Geo Code": "us",
        "{{LANGUAGE_DIRECTION}}": "ltr",
        "{{PERMALINK}}": "#",
        "//g.co/doodle/permalink": "#",
        "{{GALLERY_URL}}": "#",
        "//www.google.com/doodles/gallery": "#",
      },
    },
  }),
  (window.google.doodle.allMsgs = {
    messages: [
      "Share Message",
      "High Score",
      "Game Over",
      "Level Complete",
      "Happy Halloween!",
      "Share",
      "Share - G+",
      "Share - Facebook",
      "Share - Twitter",
      "Share - E-mail",
      "Tutorial",
      "Level Start - Level 1",
      "Level Start - Level 2",
      "Level Start - Level 3",
      "Level Start - Level 4",
      "Level Start - Level 5",
      "Level Start - Ready",
      "Level Start - Set",
      "Level Start - Draw!",
      "Found A Spell",
      "Found A Spell Tutorial",
      "Continue",
      "Score",
      "End Screen - Replay",
      "End Screen - New Game",
      "Search - Halloween",
      "Search - Icon",
    ],
    translations: {
      en: {
        ALL: [
          "Swipe away 👻👻👻  in #DoodleHalloween Score: [POINTS]",
          "High Score",
          "Game Over",
          "Congrats!",
          "Happy Halloween!",
          "Share",
          "Share on G+",
          "Share on Facebook",
          "Share on Twitter",
          "E-mail",
          "Defeat a ghost by drawing its symbol anywhere",
          "Level 1",
          "Level 2",
          "Level 3",
          "Level 4",
          "Level 5",
          "Ready",
          "Set",
          "Draw!",
          "You found a spell!",
          "Draw the magic symbol",
          "Continue",
          "Score",
          "Replay",
          "New Game",
          "Halloween",
          "Search",
        ],
      },
    },
  }),
  window.self !== window.top && (document.body.parentElement.id = "sdoodles"),
  function () {
    if (
      (window.google || (window.google = {}),
      google.doodle || (google.doodle = {}),
      (google.doodle.url = "#"),
      (google.doodle.alt = "Automatically Replaced Alt Text JS"),
      (google.doodle.share = "Automatically Replaced Share Text JS"),
      (google.doodle.shortlink = "#"),
      (google.doodle.gallery = "#"),
      (google.doodle.large_image = "{{HOMEPAGE_IMAGE_URL}}"),
      (google.doodle.hl = "Automatically Replaced Language"),
      (google.doodle.msgs = {
        "Automatically Replaced Translations": "Translations",
      }),
      (google.doodle.doodle_args = {}),
      !google.doodle || !google.doodle.loaded)
    ) {
      var t = ["google", "doodle", "loaded"],
        i = this;
      t[0] in i || !i.execScript || i.execScript("var " + t[0]);
      for (var n; t.length && (n = t.shift()); ) {
        var s;
        (s = !t.length) && (s = !0),
          s
            ? (i[n] = !0)
            : (i = i[n] && i[n] !== Object.prototype[n] ? i[n] : (i[n] = {}));
      }
    }
  }.call(this),
  function () {
    !(function () {
      function t(t, i, n) {
        t = document.querySelectorAll(t);
        for (var s, e = 0; (s = t[e]); e++)
          for (var h = s, a = i, r = n, l = 0; (s = o[l]); l++)
            h.getAttribute(s) == a && (h[s] = r);
      }
      function i(t, i, n) {
        if (((i = t[i] || t.en), !i)) return null;
        if ((n = i[n] || i.ALL || (t.en ? t.en.ALL : null))) return n;
        for (var s in t) for (var e in t[s]) if (t[s][e]) return t[s][e];
        return null;
      }
      var n = window.google.doodle,
        s = n.l10n,
        e = n.allMsgs,
        o = ["alt", "title", "src", "href", "dir"],
        h = window.location.hash || window.location.search,
        a = /[&=]?hl=([^&]*)/.exec(h),
        r = a ? a[1] : "en";
      (h = (a = /[&=]?gl=([^&]*)/.exec(h)) ? a[1] : "ALL"),
        (a = { "{{LOGO_ALT_TEXT_HTML}}": "{{LOGO_ALT_TEXT}}" }),
        (s = i(s, r, h) || {});
      for (var l in s) {
        var u,
          c = a[l] ? s[a[l]] : s[l];
        for (u in n) n[u] == l && (n[u] = c);
        t("div", l, c), t("a", l, c), t("canvas", l, c);
      }
      if (
        ((l = e.translations),
        (e = e.messages),
        l && e && ((r = i(l, r, h) || []), e.length == r.length))
      )
        for (h = 0; (l = e[h]); h++) n.msgs[l] = r[h];
    })();
  }.call(this),
  function () {
    var t,
      i = i || {},
      n = this,
      s = function (t) {
        return void 0 !== t;
      },
      e = function () {},
      o = function (t) {
        (t.Ub = void 0),
          (t.ka = function () {
            return t.Ub ? t.Ub : (t.Ub = new t());
          });
      },
      h = function (t) {
        var i = typeof t;
        if ("object" == i) {
          if (!t) return "null";
          if (t instanceof Array) return "array";
          if (t instanceof Object) return i;
          var n = Object.prototype.toString.call(t);
          if ("[object Window]" == n) return "object";
          if (
            "[object Array]" == n ||
            ("number" == typeof t.length &&
              "undefined" != typeof t.splice &&
              "undefined" != typeof t.propertyIsEnumerable &&
              !t.propertyIsEnumerable("splice"))
          )
            return "array";
          if (
            "[object Function]" == n ||
            ("undefined" != typeof t.call &&
              "undefined" != typeof t.propertyIsEnumerable &&
              !t.propertyIsEnumerable("call"))
          )
            return "function";
        } else if ("function" == i && "undefined" == typeof t.call)
          return "object";
        return i;
      },
      a = function (t) {
        return "array" == h(t);
      },
      r = function (t) {
        var i = h(t);
        return "array" == i || ("object" == i && "number" == typeof t.length);
      },
      l = function (t) {
        return "string" == typeof t;
      },
      u = function (t) {
        return "number" == typeof t;
      },
      c = function (t, i, n) {
        return t.call.apply(t.bind, arguments);
      },
      f = function (t, i, n) {
        if (!t) throw Error();
        if (2 < arguments.length) {
          var s = Array.prototype.slice.call(arguments, 2);
          return function () {
            var n = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(n, s), t.apply(i, n);
          };
        }
        return function () {
          return t.apply(i, arguments);
        };
      },
      w = function (t, i, n) {
        return (
          (w =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code")
              ? c
              : f),
          w.apply(null, arguments)
        );
      },
      p = function (t, i) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function () {
          var i = n.slice();
          return i.push.apply(i, arguments), t.apply(this, i);
        };
      },
      v =
        Date.now ||
        function () {
          return +new Date();
        },
      d = function (t, i) {
        var e = t.split("."),
          o = n;
        e[0] in o || !o.execScript || o.execScript("var " + e[0]);
        for (var h; e.length && (h = e.shift()); )
          !e.length && s(i)
            ? (o[h] = i)
            : (o =
                o[h] && Object.prototype.hasOwnProperty.call(o, h)
                  ? o[h]
                  : (o[h] = {}));
      },
      g = function (t, i) {
        function n() {}
        (n.prototype = i.prototype),
          (t.Da = i.prototype),
          (t.prototype = new n()),
          (t.ld = function (t, n, s) {
            for (
              var e = Array(arguments.length - 2), o = 2;
              o < arguments.length;
              o++
            )
              e[o - 2] = arguments[o];
            return i.prototype[n].apply(t, e);
          });
      },
      y = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
          },
      m = function (t, i) {
        return i > t ? -1 : t > i ? 1 : 0;
      },
      b = Array.prototype.indexOf
        ? function (t, i, n) {
            return Array.prototype.indexOf.call(t, i, n);
          }
        : function (t, i, n) {
            if (
              ((n = null == n ? 0 : 0 > n ? Math.max(0, t.length + n) : n),
              l(t))
            )
              return l(i) && 1 == i.length ? t.indexOf(i, n) : -1;
            for (; n < t.length; n++) if (n in t && t[n] === i) return n;
            return -1;
          },
      S = Array.prototype.forEach
        ? function (t, i, n) {
            Array.prototype.forEach.call(t, i, n);
          }
        : function (t, i, n) {
            for (
              var s = t.length, e = l(t) ? t.split("") : t, o = 0;
              s > o;
              o++
            )
              o in e && i.call(n, e[o], o, t);
          },
      H = Array.prototype.map
        ? function (t, i, n) {
            return Array.prototype.map.call(t, i, n);
          }
        : function (t, i, n) {
            for (
              var s = t.length, e = Array(s), o = l(t) ? t.split("") : t, h = 0;
              s > h;
              h++
            )
              h in o && (e[h] = i.call(n, o[h], h, t));
            return e;
          },
      T = Array.prototype.reduce
        ? function (t, i, n, s) {
            return s && (i = w(i, s)), Array.prototype.reduce.call(t, i, n);
          }
        : function (t, i, n, s) {
            var e = n;
            return (
              S(t, function (n, o) {
                e = i.call(s, e, n, o, t);
              }),
              e
            );
          },
      R = function (t, i) {
        var n;
        t: {
          n = t.length;
          for (var s = l(t) ? t.split("") : t, e = 0; n > e; e++)
            if (e in s && i.call(void 0, s[e], e, t)) {
              n = e;
              break t;
            }
          n = -1;
        }
        return 0 > n ? null : l(t) ? t.charAt(n) : t[n];
      },
      x = function (t, i) {
        var n,
          s = b(t, i);
        return (n = s >= 0) && Array.prototype.splice.call(t, s, 1), n;
      },
      k = function (t) {
        return Array.prototype.concat.apply(Array.prototype, arguments);
      },
      M = function (t) {
        var i = t.length;
        if (i > 0) {
          for (var n = Array(i), s = 0; i > s; s++) n[s] = t[s];
          return n;
        }
        return [];
      },
      U = function (t, i) {
        for (var n = 1; n < arguments.length; n++) {
          var s = arguments[n];
          if (r(s)) {
            var e = t.length || 0,
              o = s.length || 0;
            t.length = e + o;
            for (var h = 0; o > h; h++) t[e + h] = s[h];
          } else t.push(s);
        }
      },
      E = function (t, i, n) {
        return Math.min(Math.max(t, i), n);
      },
      A = function (t, i, n) {
        return t + n * (i - t);
      },
      L = function (t, i) {
        var n = ((180 * Math.atan2(i - 0, t - 0)) / Math.PI) % 360;
        return 0 > 360 * n ? n + 360 : n;
      },
      C = function (t) {
        return T(
          arguments,
          function (t, i) {
            return t + i;
          },
          0,
        );
      },
      V = function (t) {
        return C.apply(null, arguments) / arguments.length;
      },
      W =
        "StopIteration" in n
          ? n.StopIteration
          : { message: "StopIteration", stack: "" },
      I = function () {};
    (I.prototype.next = function () {
      throw W;
    }),
      (I.prototype.S = function () {
        return this;
      });
    var $ = function (t, i, n) {
        for (var s in t) i.call(n, t[s], s, t);
      },
      O = function (t) {
        var i,
          n = [],
          s = 0;
        for (i in t) n[s++] = t[i];
        return n;
      },
      P = function (t) {
        var i,
          n = [],
          s = 0;
        for (i in t) n[s++] = i;
        return n;
      },
      q =
        "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
          " ",
        ),
      D = function (t, i) {
        for (var n, s, e = 1; e < arguments.length; e++) {
          s = arguments[e];
          for (n in s) t[n] = s[n];
          for (var o = 0; o < q.length; o++)
            (n = q[o]),
              Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }
      },
      z = function (t) {
        var i = arguments.length;
        if (1 == i && a(arguments[0])) return z.apply(null, arguments[0]);
        if (i % 2) throw Error("a");
        for (var n = {}, s = 0; i > s; s += 2)
          n[arguments[s]] = arguments[s + 1];
        return n;
      },
      G = function (t, i) {
        (this.s = {}), (this.o = []), (this.H = this.w = 0);
        var n = arguments.length;
        if (n > 1) {
          if (n % 2) throw Error("a");
          for (var s = 0; n > s; s += 2)
            this.set(arguments[s], arguments[s + 1]);
        } else if (t) {
          t instanceof G
            ? ((n = t.Ya()), (s = t.Ra()))
            : ((n = P(t)), (s = O(t)));
          for (var e = 0; e < n.length; e++) this.set(n[e], s[e]);
        }
      };
    (G.prototype.Ra = function () {
      B(this);
      for (var t = [], i = 0; i < this.o.length; i++) t.push(this.s[this.o[i]]);
      return t;
    }),
      (G.prototype.Ya = function () {
        return B(this), this.o.concat();
      });
    var B = function (t) {
      if (t.w != t.o.length) {
        for (var i = 0, n = 0; i < t.o.length; ) {
          var s = t.o[i];
          F(t.s, s) && (t.o[n++] = s), i++;
        }
        t.o.length = n;
      }
      if (t.w != t.o.length) {
        for (var e = {}, n = (i = 0); i < t.o.length; )
          (s = t.o[i]), F(e, s) || ((t.o[n++] = s), (e[s] = 1)), i++;
        t.o.length = n;
      }
    };
    (G.prototype.get = function (t, i) {
      return F(this.s, t) ? this.s[t] : i;
    }),
      (G.prototype.set = function (t, i) {
        F(this.s, t) || (this.w++, this.o.push(t), this.H++), (this.s[t] = i);
      }),
      (G.prototype.forEach = function (t, i) {
        for (var n = this.Ya(), s = 0; s < n.length; s++) {
          var e = n[s],
            o = this.get(e);
          t.call(i, o, e, this);
        }
      }),
      (G.prototype.S = function (t) {
        B(this);
        var i = 0,
          n = this.H,
          s = this,
          e = new I();
        return (
          (e.next = function () {
            if (n != s.H) throw Error("b");
            if (i >= s.o.length) throw W;
            var e = s.o[i++];
            return t ? e : s.s[e];
          }),
          e
        );
      });
    var F = function (t, i) {
        return Object.prototype.hasOwnProperty.call(t, i);
      },
      N = function (t) {
        if (t.Ra && "function" == typeof t.Ra) return t.Ra();
        if (l(t)) return t.split("");
        if (r(t)) {
          for (var i = [], n = t.length, s = 0; n > s; s++) i.push(t[s]);
          return i;
        }
        return O(t);
      },
      X = function (t, i) {
        if (t.forEach && "function" == typeof t.forEach) t.forEach(i, void 0);
        else if (r(t) || l(t)) S(t, i, void 0);
        else {
          var n;
          if (t.Ya && "function" == typeof t.Ya) n = t.Ya();
          else if (t.Ra && "function" == typeof t.Ra) n = void 0;
          else if (r(t) || l(t)) {
            n = [];
            for (var s = t.length, e = 0; s > e; e++) n.push(e);
          } else n = P(t);
          for (var s = N(t), e = s.length, o = 0; e > o; o++)
            i.call(void 0, s[o], n && n[o], t);
        }
      },
      _ =
        /^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
      j = function (t, i) {
        if (t)
          for (var n = t.split("&"), s = 0; s < n.length; s++) {
            var e,
              o = n[s].indexOf("="),
              h = null;
            o >= 0
              ? ((e = n[s].substring(0, o)), (h = n[s].substring(o + 1)))
              : (e = n[s]),
              i(e, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "");
          }
      },
      Y = function (t, i) {
        (this.H = this.T = this.w = ""),
          (this.V = null),
          (this.R = this.S = ""),
          (this.o = !1);
        var n;
        if (t instanceof Y) {
          (this.o = s(i) ? i : t.o),
            J(this, t.w),
            (this.T = t.T),
            (this.H = t.H),
            K(this, t.V),
            (this.S = t.S),
            (n = t.s);
          var e = new at();
          (e.w = n.w),
            n.o && ((e.o = new G(n.o)), (e.s = n.s)),
            Q(this, e),
            (this.R = t.R);
        } else
          t && (n = String(t).match(_))
            ? ((this.o = !!i),
              J(this, n[1] || "", !0),
              (this.T = Z(n[2] || "")),
              (this.H = Z(n[3] || "", !0)),
              K(this, n[4]),
              (this.S = Z(n[5] || "", !0)),
              Q(this, n[6] || "", !0),
              (this.R = Z(n[7] || "")))
            : ((this.o = !!i), (this.s = new at(null, 0, this.o)));
      };
    Y.prototype.toString = function () {
      var t = [],
        i = this.w;
      i && t.push(tt(i, nt, !0), ":");
      var n = this.H;
      return (
        (n || "file" == i) &&
          (t.push("//"),
          (i = this.T) && t.push(tt(i, nt, !0), "@"),
          t.push(
            encodeURIComponent(String(n)).replace(
              /%25([0-9a-fA-F]{2})/g,
              "%$1",
            ),
          ),
          (n = this.V),
          null != n && t.push(":", String(n))),
        (n = this.S) &&
          (this.H && "/" != n.charAt(0) && t.push("/"),
          t.push(tt(n, "/" == n.charAt(0) ? et : st, !0))),
        (n = this.s.toString()) && t.push("?", n),
        (n = this.R) && t.push("#", tt(n, ht)),
        t.join("")
      );
    };
    var J = function (t, i, n) {
        (t.w = n ? Z(i, !0) : i), t.w && (t.w = t.w.replace(/:$/, ""));
      },
      K = function (t, i) {
        if (i) {
          if (((i = Number(i)), isNaN(i) || 0 > i)) throw Error("c`" + i);
          t.V = i;
        } else t.V = null;
      },
      Q = function (t, i, n) {
        i instanceof at
          ? ((t.s = i), vt(t.s, t.o))
          : (n || (i = tt(i, ot)), (t.s = new at(i, 0, t.o)));
      },
      Z = function (t, i) {
        return t
          ? i
            ? decodeURI(t.replace(/%25/g, "%2525"))
            : decodeURIComponent(t)
          : "";
      },
      tt = function (t, i, n) {
        return l(t)
          ? ((t = encodeURI(t).replace(i, it)),
            n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            t)
          : null;
      },
      it = function (t) {
        return (
          (t = t.charCodeAt(0)),
          "%" + ((t >> 4) & 15).toString(16) + (15 & t).toString(16)
        );
      },
      nt = /[#\/\?@]/g,
      st = /[\#\?:]/g,
      et = /[\#\?]/g,
      ot = /[\#\?@]/g,
      ht = /#/g,
      at = function (t, i, n) {
        (this.s = this.o = null), (this.w = t || null), (this.H = !!n);
      },
      rt = function (t) {
        t.o ||
          ((t.o = new G()),
          (t.s = 0),
          t.w &&
            j(t.w, function (i, n) {
              lt(t, decodeURIComponent(i.replace(/\+/g, " ")), n);
            }));
      },
      lt = function (t, i, n) {
        rt(t), (t.w = null), (i = pt(t, i));
        var s = t.o.get(i);
        s || t.o.set(i, (s = [])), s.push(n), (t.s += 1);
      },
      ut = function (t, i) {
        if ((rt(t), (i = pt(t, i)), F(t.o.s, i))) {
          (t.w = null), (t.s -= t.o.get(i).length);
          var n = t.o,
            s = i;
          F(n.s, s) &&
            (delete n.s[s], n.w--, n.H++, n.o.length > 2 * n.w && B(n));
        }
      },
      ct = function (t, i) {
        return rt(t), (i = pt(t, i)), F(t.o.s, i);
      };
    (t = at.prototype),
      (t.Ya = function () {
        rt(this);
        for (
          var t = this.o.Ra(), i = this.o.Ya(), n = [], s = 0;
          s < i.length;
          s++
        )
          for (var e = t[s], o = 0; o < e.length; o++) n.push(i[s]);
        return n;
      }),
      (t.Ra = function (t) {
        rt(this);
        var i = [];
        if (l(t)) ct(this, t) && (i = k(i, this.o.get(pt(this, t))));
        else {
          t = this.o.Ra();
          for (var n = 0; n < t.length; n++) i = k(i, t[n]);
        }
        return i;
      }),
      (t.set = function (t, i) {
        return (
          rt(this),
          (this.w = null),
          (t = pt(this, t)),
          ct(this, t) && (this.s -= this.o.get(t).length),
          this.o.set(t, [i]),
          (this.s += 1),
          this
        );
      }),
      (t.get = function (t, i) {
        var n = t ? this.Ra(t) : [];
        return 0 < n.length ? String(n[0]) : i;
      }),
      (t.toString = function () {
        if (this.w) return this.w;
        if (!this.o) return "";
        for (var t = [], i = this.o.Ya(), n = 0; n < i.length; n++)
          for (
            var s = i[n],
              e = encodeURIComponent(String(s)),
              s = this.Ra(s),
              o = 0;
            o < s.length;
            o++
          ) {
            var h = e;
            "" !== s[o] && (h += "=" + encodeURIComponent(String(s[o]))),
              t.push(h);
          }
        return (this.w = t.join("&"));
      });
    var ft,
      wt,
      pt = function (t, i) {
        var n = String(i);
        return t.H && (n = n.toLowerCase()), n;
      },
      vt = function (t, i) {
        i &&
          !t.H &&
          (rt(t),
          (t.w = null),
          t.o.forEach(function (t, i) {
            var n = i.toLowerCase();
            i != n &&
              (ut(this, i),
              ut(this, n),
              0 < t.length &&
                ((this.w = null),
                this.o.set(pt(this, n), M(t)),
                (this.s += t.length)));
          }, t)),
          (t.H = i);
      },
      dt = navigator.userAgent,
      gt = window.location.href,
      yt =
        -1 != dt.indexOf("iPad") ||
        -1 != dt.indexOf("iPhone") ||
        -1 != dt.indexOf("iPod"),
      mt = -1 != dt.toLowerCase().indexOf("gsa"),
      bt = yt && mt,
      St = mt && !yt,
      Ht =
        yt ||
        -1 != dt.indexOf("Android") ||
        -1 != dt.indexOf("Mobile") ||
        -1 != dt.indexOf("Silk"),
      Tt = 0 <= dt.indexOf("MSIE"),
      Rt = -1 != gt.indexOf("/logos/") && -1 != gt.indexOf(".html"),
      xt = function () {
        return (
          0 <= gt.indexOf("fpdoodle=1") && !!document.getElementById("fpdoodle")
        );
      },
      kt = function (t, i) {
        for (var n = 1; n < arguments.length; n += 2) {
          var s = arguments[n],
            e = arguments[n + 1],
            o = t.style;
          o && s in o
            ? (o[s] = e)
            : s in t
              ? (t[s] = e)
              : Tt &&
                o &&
                "opacity" == s &&
                ((t.zoom = 1),
                (s = (o.filter || "").replace(/alpha\([^)]*\)/, "")),
                isNaN(parseFloat(e)) || (s += "alpha(opacity=" + 100 * e + ")"),
                (o.filter = s));
        }
      },
      Mt = function () {
        return self.performance ? self.performance.now() : v();
      },
      Ut = function () {
        var t = ["Itim"];
        window.WebFontConfig ||
          (d("WebFontConfig.google.families", t),
          (t = document.createElement("script")),
          (t.src =
            ("https:" == document.location.protocol ? "https" : "http") +
            "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"),
          (t.type = "text/javascript"),
          (t.async = "true"),
          (document.getElementById("xjsc") || document.body).appendChild(t));
      },
      Et = ["Moz", "ms", "O", "webkit"],
      At = function (t, i, n) {
        for (var s, e = 0; (s = Et[e++]); ) t.style[s + i] = n;
        t.style[i.charAt(0).toLowerCase() + i.substr(1)] = n;
      },
      Lt = ["", "moz", "ms", "o", "webkit"],
      Ct = function (t, i) {
        if (!t) return null;
        for (var n = 0; n < Lt.length; n++) {
          var s = Lt[n],
            e = i;
          if (
            (0 < s.length && (e = i.charAt(0).toUpperCase() + i.substr(1)),
            (s += e),
            "undefined" != typeof t[s])
          )
            return s;
        }
        return null;
      },
      Vt = function () {
        var t = google.doodle ? google.doodle.url : "";
        if (t)
          if (google.nav && google.nav.go) {
            var i = t;
            if (0 == t.indexOf("/search")) {
              (i = new Y(window.location)), (i.S = "/search");
              for (
                var t = (t instanceof Y ? new Y(t) : new Y(t, void 0)).s,
                  n = t.Ya(),
                  s = 0;
                s < n.length;
                s++
              ) {
                var e = n[s],
                  o = i,
                  h = e,
                  e = t.get(e);
                o.s.set(h, e);
              }
              i = i.toString();
            }
            google.nav.go(i);
          } else
            window.parent
              ? window.parent.location.assign(t)
              : window.location.assign(t);
      },
      Wt = function (t, i) {
        var n = window.google ? window.google.doodle : null;
        return n && void 0 != n[t] ? n[t] : i;
      },
      It = Wt("alt", ""),
      $t = Wt("hl", "en"),
      Ot = function (t) {
        var i;
        if (!(i = Wt("msgs", {})[t])) {
          var n = Wt("alltranslations", {});
          if (n)
            if (((i = n.messages), (n = n.translations), i && n)) {
              for (var s = -1, e = 0; e < i.length; e++)
                if (i[e] == t) {
                  s = e;
                  break;
                }
              i = -1 == s ? "" : (n[$t] || n.en).ALL[s];
            } else i = "";
          else i = "";
        }
        return i || t;
      },
      Pt = function () {
        for (
          var t = [
              "requestAnimationFrame",
              "mozRequestAnimationFrame",
              "msRequestAnimationFrame",
              "oRequestAnimationFrame",
              "webkitRequestAnimationFrame",
            ],
            i = 0;
          i < t.length;
          i++
        ) {
          var n = window[t[i]];
          if (n)
            return function (t, i, s) {
              return n(function (i) {
                return t.call(s, i);
              }, i);
            };
        }
        var s = 0,
          e = 33,
          o = 50;
        return function (t, i, n) {
          i &&
            0 > --o &&
            (i / e > 1.25
              ? ((s = 0), (e = Math.min(66, ++e)))
              : 10 < ++s && ((s = 0), (e = Math.max(17, --e)))),
            window.setTimeout(function (i) {
              t.call(n, i);
            }, e);
        };
      },
      qt = function (t, i, n) {
        return (qt = Pt())(t, i, n);
      },
      Dt = function (t, i, n) {
        var s =
          Math.max(0, n - 230) +
          (document.querySelector("div.og-pdp") ? 36 : 12);
        kt(t, "width", i + "px", "height", n + "px"), zt(s);
      },
      zt = function (t) {
        t += "px";
        var i = document.getElementById("lga");
        i && kt(i, "marginBottom", t),
          document.getElementById("fkbx") ||
            ((i =
              document.getElementById("tsf") ||
              document.getElementById("gbq2")) && kt(i, "marginTop", t),
            (t = document.createEvent("UIEvents")),
            t.initUIEvent("resize", !1, !1, window, 0),
            window.dispatchEvent(t));
      },
      Gt = function (t) {
        // if (window.google && window.google.log) {
        //   var i;
        //   ft ||
        //     ((i = document.getElementById("hplogoved")) &&
        //       (ft = i.getAttribute("data-ved"))),
        //     (i = ft) && (t += "&ved=" + i),
        //     window.google.log("doodle", t);
        // }
      },
      Bt = function (t) {
        for (var i = pu, n = {}, s = 0, e = i.length; e > s; s++)
          n[i[s]] = t[s];
        return n;
      },
      Ft = {
        Pa: !0,
        Qa: !0,
        Sa: !1,
        Ta: !1,
        Ua: !1,
        Wa: !1,
        Xa: !1,
        Va: !1,
        Za: !1,
      },
      Nt = {
        Pa: !0,
        Qa: !0,
        Sa: !1,
        Ta: !1,
        Ua: !1,
        Wa: !1,
        Xa: !1,
        Va: !0,
        Za: !1,
      },
      Xt = {
        Pa: !0,
        Qa: !1,
        Sa: !0,
        Ta: !0,
        Ua: !0,
        Wa: !0,
        Xa: !1,
        Va: !1,
        Za: !1,
      },
      _t = {
        Pa: !0,
        Qa: !1,
        Sa: !1,
        Ta: !0,
        Ua: !0,
        Wa: !0,
        Xa: !1,
        Va: !1,
        Za: !1,
      },
      jt = {
        Pa: !0,
        Qa: !1,
        Sa: !1,
        Ta: !0,
        Ua: !1,
        Wa: !1,
        Xa: !0,
        Va: !1,
        Za: !0,
      },
      Yt = {
        Pa: !1,
        Qa: !0,
        Sa: !1,
        Ta: !1,
        Ua: !1,
        Wa: !1,
        Xa: !1,
        Va: !1,
        Za: !1,
      },
      Jt = {
        Pa: !0,
        Qa: !1,
        Sa: !1,
        Ta: !0,
        Ua: !0,
        Wa: !0,
        Xa: !1,
        Va: !1,
        Za: !1,
      },
      Kt = {
        Pa: !0,
        Qa: !1,
        Sa: !1,
        Ta: !0,
        Ua: !1,
        Wa: !1,
        Xa: !1,
        Va: !1,
        Za: !0,
      },
      Qt = {
        Pa: !0,
        Qa: !1,
        Sa: !1,
        Ta: !0,
        Ua: !0,
        Wa: !0,
        Xa: !1,
        Va: !1,
        Za: !0,
      },
      Zt = {
        Pa: !0,
        Qa: !1,
        Sa: !1,
        Ta: !0,
        Ua: !0,
        Wa: !0,
        Xa: !1,
        Va: !1,
        Za: !1,
      },
      ti = {
        Pa: !0,
        Qa: !0,
        Sa: !1,
        Ta: !1,
        Ua: !1,
        Wa: !1,
        Xa: !1,
        Va: !1,
        Za: !1,
      },
      ii = function () {
        return si(), wt.Pa;
      },
      ni = function () {
        return si(), wt.Qa;
      },
      si = function () {
        null == wt &&
          (wt = bt
            ? Xt
            : St
              ? _t
              : -1 != dt.indexOf("Gbot")
                ? jt
                : document.getElementById("fkbx") && !Ht
                  ? Yt
                  : xt()
                    ? Jt
                    : document.querySelector("body.hp")
                      ? Ht
                        ? Nt
                        : Ft
                      : Rt
                        ? Ht
                          ? Qt
                          : Kt
                        : Ht
                          ? Zt
                          : ti);
      },
      ei = function () {
        (this.V = this.V), (this.R = this.R);
      };
    (ei.prototype.V = !1),
      (ei.prototype.kc = function () {
        this.V || ((this.V = !0), this.s());
      });
    var oi = function (t, i) {
      t.V
        ? s(void 0)
          ? i.call(void 0)
          : i()
        : (t.R || (t.R = []), t.R.push(s(void 0) ? w(i, void 0) : i));
    };
    ei.prototype.s = function () {
      if (this.R) for (; this.R.length; ) this.R.shift()();
    };
    var hi = function (t) {
        t && "function" == typeof t.kc && t.kc();
      },
      ai = function (t) {
        return ai[" "](t), t;
      };
    ai[" "] = e;
    var ri,
      li = function (t, i) {
        var n = xi;
        return Object.prototype.hasOwnProperty.call(n, t)
          ? n[t]
          : (n[t] = i(t));
      };
    t: {
      var ui = n.navigator;
      if (ui) {
        var ci = ui.userAgent;
        if (ci) {
          ri = ci;
          break t;
        }
      }
      ri = "";
    }
    var fi,
      wi = function (t) {
        return -1 != ri.indexOf(t);
      },
      pi = wi("Opera"),
      vi = wi("Trident") || wi("MSIE"),
      di = wi("Edge"),
      gi =
        wi("Gecko") &&
        !(-1 != ri.toLowerCase().indexOf("webkit") && !wi("Edge")) &&
        !(wi("Trident") || wi("MSIE")) &&
        !wi("Edge"),
      yi = -1 != ri.toLowerCase().indexOf("webkit") && !wi("Edge"),
      mi = function () {
        var t = n.document;
        return t ? t.documentMode : void 0;
      };
    t: {
      var bi = "",
        Si = (function () {
          var t = ri;
          return gi
            ? /rv\:([^\);]+)(\)|;)/.exec(t)
            : di
              ? /Edge\/([\d\.]+)/.exec(t)
              : vi
                ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t)
                : yi
                  ? /WebKit\/(\S+)/.exec(t)
                  : pi
                    ? /(?:Version)[ \/]?(\S+)/.exec(t)
                    : void 0;
        })();
      if ((Si && (bi = Si ? Si[1] : ""), vi)) {
        var Hi = mi();
        if (null != Hi && Hi > parseFloat(bi)) {
          fi = String(Hi);
          break t;
        }
      }
      fi = bi;
    }
    var Ti,
      Ri = fi,
      xi = {},
      ki = function (t) {
        return li(t, function () {
          for (
            var i = 0,
              n = y(String(Ri)).split("."),
              s = y(String(t)).split("."),
              e = Math.max(n.length, s.length),
              o = 0;
            0 == i && e > o;
            o++
          ) {
            var h = n[o] || "",
              a = s[o] || "";
            do {
              if (
                ((h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""]),
                (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""]),
                0 == h[0].length && 0 == a[0].length)
              )
                break;
              (i =
                m(
                  0 == h[1].length ? 0 : parseInt(h[1], 10),
                  0 == a[1].length ? 0 : parseInt(a[1], 10),
                ) ||
                m(0 == h[2].length, 0 == a[2].length) ||
                m(h[2], a[2])),
                (h = h[3]),
                (a = a[3]);
            } while (0 == i);
          }
          return i >= 0;
        });
      },
      Mi = n.document;
    Ti =
      Mi && vi
        ? mi() || ("CSS1Compat" == Mi.compatMode ? parseInt(Ri, 10) : 5)
        : void 0;
    var Ui = !vi || 9 <= Number(Ti),
      Ei = vi && !ki("9");
    !yi || ki("528"),
      (gi && ki("1.9b")) ||
        (vi && ki("8")) ||
        (pi && ki("9.5")) ||
        (yi && ki("528")),
      (gi && !ki("8")) || (vi && ki("9"));
    var Ai = function (t, i) {
      (this.type = t), (this.s = this.H = i), (this.w = !1), (this.tc = !0);
    };
    (Ai.prototype.stopPropagation = function () {
      this.w = !0;
    }),
      (Ai.prototype.preventDefault = function () {
        this.tc = !1;
      });
    var Li = function (t, i) {
      if (
        (Ai.call(this, t ? t.type : ""),
        (this.s = this.H = null),
        (this.S = this.clientY = this.clientX = 0),
        (this.o = this.state = null),
        t)
      ) {
        this.type = t.type;
        var n = t.changedTouches ? t.changedTouches[0] : null;
        (this.H = t.target || t.srcElement), (this.s = i);
        var s = t.relatedTarget;
        if (s && gi)
          try {
            ai(s.nodeName);
          } catch (e) {}
        null === n
          ? ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
            (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY))
          : ((this.clientX = void 0 !== n.clientX ? n.clientX : n.pageX),
            (this.clientY = void 0 !== n.clientY ? n.clientY : n.pageY)),
          (this.S = t.keyCode || 0),
          (this.state = t.state),
          (this.o = t),
          t.defaultPrevented && this.preventDefault();
      }
    };
    g(Li, Ai),
      (Li.prototype.stopPropagation = function () {
        Li.Da.stopPropagation.call(this),
          this.o.stopPropagation
            ? this.o.stopPropagation()
            : (this.o.cancelBubble = !0);
      }),
      (Li.prototype.preventDefault = function () {
        Li.Da.preventDefault.call(this);
        var t = this.o;
        if (t.preventDefault) t.preventDefault();
        else if (((t.returnValue = !1), Ei))
          try {
            (t.ctrlKey || (112 <= t.keyCode && 123 >= t.keyCode)) &&
              (t.keyCode = -1);
          } catch (i) {}
      });
    var Ci = "closure_listenable_" + ((1e6 * Math.random()) | 0),
      Vi = function (t) {
        return !(!t || !t[Ci]);
      },
      Wi = 0,
      Ii = function (t, i, n, s, e) {
        (this.listener = t),
          (this.o = null),
          (this.src = i),
          (this.type = n),
          (this.capture = !!s),
          (this.Kb = e),
          (this.lc = ++Wi),
          (this.yb = this.Jb = !1);
      },
      $i = function (t) {
        (t.yb = !0),
          (t.listener = null),
          (t.o = null),
          (t.src = null),
          (t.Kb = null);
      },
      Oi = function (t) {
        (this.src = t), (this.o = {}), (this.s = 0);
      },
      Pi = function (t, i, n, s, e, o) {
        var h = i.toString();
        (i = t.o[h]), i || ((i = t.o[h] = []), t.s++);
        var a = zi(i, n, e, o);
        return (
          a > -1
            ? ((t = i[a]), s || (t.Jb = !1))
            : ((t = new Ii(n, t.src, h, !!e, o)), (t.Jb = s), i.push(t)),
          t
        );
      },
      qi = function (t, i) {
        var n = i.type;
        if (!(n in t.o)) return !1;
        var s = x(t.o[n], i);
        return s && ($i(i), 0 == t.o[n].length && (delete t.o[n], t.s--)), s;
      },
      Di = function (t, i, n, s, e) {
        return (
          (t = t.o[i.toString()]),
          (i = -1),
          t && (i = zi(t, n, s, e)),
          i > -1 ? t[i] : null
        );
      },
      zi = function (t, i, n, s) {
        for (var e = 0; e < t.length; ++e) {
          var o = t[e];
          if (!o.yb && o.listener == i && o.capture == !!n && o.Kb == s)
            return e;
        }
        return -1;
      },
      Gi = "closure_lm_" + ((1e6 * Math.random()) | 0),
      Bi = {},
      Fi = 0,
      Ni = function (t, i, n, s, e) {
        if (a(i)) {
          for (var o = 0; o < i.length; o++) Ni(t, i[o], n, s, e);
          return null;
        }
        return (
          (n = en(n)), Vi(t) ? t.listen(i, n, s, e) : Xi(t, i, n, !1, s, e)
        );
      },
      Xi = function (t, i, n, s, e, o) {
        if (!i) throw Error("e");
        var h = !!e,
          a = nn(t);
        if ((a || (t[Gi] = a = new Oi(t)), (n = Pi(a, i, n, s, e, o)), n.o))
          return n;
        if (
          ((s = _i()),
          (n.o = s),
          (s.src = t),
          (s.listener = n),
          t.addEventListener)
        )
          t.addEventListener(i.toString(), s, h);
        else {
          if (!t.attachEvent) throw Error("f");
          t.attachEvent(Ki(i.toString()), s);
        }
        return Fi++, n;
      },
      _i = function () {
        var t = tn,
          i = Ui
            ? function (n) {
                return t.call(i.src, i.listener, n);
              }
            : function (n) {
                return (n = t.call(i.src, i.listener, n)), n ? void 0 : n;
              };
        return i;
      },
      ji = function (t, i, n, s, e) {
        if (a(i)) for (var o = 0; o < i.length; o++) ji(t, i[o], n, s, e);
        else
          (n = en(n)),
            Vi(t) ? Pi(t.w, String(i), n, !0, s, e) : Xi(t, i, n, !0, s, e);
      },
      Yi = function (t, i, n, s, e) {
        if (a(i)) for (var o = 0; o < i.length; o++) Yi(t, i[o], n, s, e);
        else
          (n = en(n)),
            Vi(t)
              ? t.unlisten(i, n, s, e)
              : t && (t = nn(t)) && (i = Di(t, i, n, !!s, e)) && Ji(i);
      },
      Ji = function (t) {
        if (u(t) || !t || t.yb) return !1;
        var i = t.src;
        if (Vi(i)) return qi(i.w, t);
        var n = t.type,
          s = t.o;
        return (
          i.removeEventListener
            ? i.removeEventListener(n, s, t.capture)
            : i.detachEvent && i.detachEvent(Ki(n), s),
          Fi--,
          (n = nn(i))
            ? (qi(n, t), 0 == n.s && ((n.src = null), (i[Gi] = null)))
            : $i(t),
          !0
        );
      },
      Ki = function (t) {
        return t in Bi ? Bi[t] : (Bi[t] = "on" + t);
      },
      Qi = function (t, i, n, s) {
        var e = !0;
        if ((t = nn(t)) && (i = t.o[i.toString()]))
          for (i = i.concat(), t = 0; t < i.length; t++) {
            var o = i[t];
            o &&
              o.capture == n &&
              !o.yb &&
              ((o = Zi(o, s)), (e = e && !1 !== o));
          }
        return e;
      },
      Zi = function (t, i) {
        var n = t.listener,
          s = t.Kb || t.src;
        return t.Jb && Ji(t), n.call(s, i);
      },
      tn = function (t, i) {
        if (t.yb) return !0;
        if (!Ui) {
          var s;
          if (!(s = i))
            t: {
              s = ["window", "event"];
              for (var e, o = n; (e = s.shift()); ) {
                if (null == o[e]) {
                  s = null;
                  break t;
                }
                o = o[e];
              }
              s = o;
            }
          if (
            ((e = s),
            (s = new Li(e, this)),
            (o = !0),
            !(0 > e.keyCode || void 0 != e.returnValue))
          ) {
            t: {
              var h = !1;
              if (0 == e.keyCode)
                try {
                  e.keyCode = -1;
                  break t;
                } catch (a) {
                  h = !0;
                }
              (h || void 0 == e.returnValue) && (e.returnValue = !0);
            }
            for (e = [], h = s.s; h; h = h.parentNode) e.push(h);
            for (var h = t.type, r = e.length - 1; !s.w && r >= 0; r--) {
              s.s = e[r];
              var l = Qi(e[r], h, !0, s),
                o = o && l;
            }
            for (r = 0; !s.w && r < e.length; r++)
              (s.s = e[r]), (l = Qi(e[r], h, !1, s)), (o = o && l);
          }
          return o;
        }
        return Zi(t, new Li(i, this));
      },
      nn = function (t) {
        return (t = t[Gi]), t instanceof Oi ? t : null;
      },
      sn = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
      en = function (t) {
        return "function" == h(t)
          ? t
          : (t[sn] ||
              (t[sn] = function (i) {
                return t.handleEvent(i);
              }),
            t[sn]);
      },
      on = function (t) {
        ei.call(this), (this.$ = t), (this.o = {});
      };
    g(on, ei);
    var hn = [];
    (on.prototype.listen = function (t, i, n, s) {
      a(i) || (i && (hn[0] = i.toString()), (i = hn));
      for (var e = 0; e < i.length; e++) {
        var o = Ni(t, i[e], n || this.handleEvent, s || !1, this.$ || this);
        if (!o) break;
        this.o[o.lc] = o;
      }
      return this;
    }),
      (on.prototype.unlisten = function (t, i, n, s, e) {
        if (a(i))
          for (var o = 0; o < i.length; o++) this.unlisten(t, i[o], n, s, e);
        else
          (n = n || this.handleEvent),
            (e = e || this.$ || this),
            (n = en(n)),
            (s = !!s),
            (i = Vi(t)
              ? Di(t.w, String(i), n, s, e)
              : t && (t = nn(t))
                ? Di(t, i, n, s, e)
                : null),
            i && (Ji(i), delete this.o[i.lc]);
        return this;
      });
    var an = function (t) {
      $(
        t.o,
        function (t, i) {
          this.o.hasOwnProperty(i) && Ji(t);
        },
        t,
      ),
        (t.o = {});
    };
    (on.prototype.s = function () {
      on.Da.s.call(this), an(this);
    }),
      (on.prototype.handleEvent = function () {
        throw Error("g");
      });
    var rn = function () {},
      ln = function (t, i, n) {
        ei.call(this),
          (this.ha = t),
          (this.ra = i),
          (this.Aa = n),
          (this.U = v()),
          (this.ya = Ct(document, "hidden")),
          (this.$ = (this.W = Ct(document, "visibilityState"))
            ? this.W.replace(/state$/i, "change").toLowerCase()
            : null),
          (this.T = wn(this)),
          (this.w = !1),
          (this.H = this.T),
          un(this),
          vn(this);
      };
    g(ln, ei);
    var un = function (t) {
        St
          ? fn(t, function () {
              cn(t);
            })
          : cn(t);
      },
      cn = function (t) {
        t.o = function () {
          // TODO: visibilitychange callback
          (t.T = wn(t) || window.PAUSE_GAME),
            t.T || ((t.U = v()), (t.w = !1)),
            pn(t);
        };
        var i = window.agsa_ext;
        i && i.registerPageVisibilityListener
          ? (google.doodle || (google.doodle = {}),
            (google.doodle.pvc = function () {
              t.o && t.o();
            }),
            i.registerPageVisibilityListener("google.doodle.pvc();"))
          : t.$ && document.addEventListener(t.$, t.o, !1);
      },
      fn = function (t, i) {
        window.agsa_ext
          ? i()
          : (t.ma = window.setTimeout(function () {
              un(t);
            }, 100));
      };
    ln.prototype.s = function () {
      window.clearTimeout(this.S),
        window.clearTimeout(this.ma),
        this.o &&
          (window.agsa_ext && window.agsa_ext.registerPageVisibilityListener
            ? (this.o = null)
            : this.$ &&
              document.removeEventListener &&
              document.removeEventListener(this.$, this.o, !1)),
        ln.Da.s.call(this);
    };
    var wn = function (t) {
        if (
          window.agsa_ext &&
          window.agsa_ext.getPageVisibility &&
          "hidden" == window.agsa_ext.getPageVisibility()
        )
          return !0;
        var i = document[t.W];
        return document[t.ya] || "hidden" == i;
      },
      pn = function (t) {
        var i = t.T || t.w;
        t.H && !i
          ? ((t.H = !1), t.Aa(), vn(t))
          : !t.H && i && ((t.H = !0), t.ra());
      },
      vn = function (t) {
        t.S && window.clearTimeout(t.S);
        var i = Math.max(100, t.ha - dn(t));
        t.S = window.setTimeout(function () {
          (t.S = null), (t.w = dn(t) >= t.ha), t.w || vn(t), pn(t);
        }, i);
      },
      dn = function (t) {
        return v() - t.U;
      },
      gn = function (t, i, n) {
        (this.H = t),
          (this.U = i),
          (this.T = n || null),
          (this.o = []),
          (this.s = null),
          (this.R = this.S = 0),
          (this.ma = this.V = !1),
          (this.$ = []),
          (this.ra = this.H.width / this.H.clientWidth),
          (this.W = this.H.height / this.H.clientHeight),
          (this.ya = [this.H]),
          (this.ha = !1);
      },
      yn = (function () {
        var t = new rn();
        return (
          (t.contains = function () {
            return !0;
          }),
          t
        );
      })(),
      mn = function (t, i) {
        (t.ra = t.H.width / t.H.clientWidth),
          (t.W = t.H.height / t.H.clientHeight),
          (t.ha = i);
      },
      bn = function (t, i) {
        for (var n = t.o.length - 1; n >= 0; n--)
          t.o[n].o === i && t.o.splice(n, 1);
        t.s && i === t.s.o && ((t.s = null), Tn(t)),
          t.w && i === t.w.o && (t.w = null),
          Hn(t, "areamove", t.S, t.R);
      },
      Sn = function (t, i) {
        for (var n = null, s = 0; s < t.o.length; s++)
          t.o[s].o === i && (n = t.o[s]);
        n && (x(t.o, n), t.o.unshift(n));
      };
    gn.prototype.handleEvent = function (t) {
      var i, n;
      (n = (n = (n = t.o) || window.event)
        ? (i =
            (n.targetTouches && n.targetTouches[0]) ||
            (n.changedTouches && n.changedTouches[0])) && void 0 !== i.pageX
          ? [i.pageX, i.pageY]
          : void 0 !== n.clientX
            ? [
                n.clientX +
                  ("rtl" == document.dir ? -1 : 1) *
                    (document.body.scrollLeft ||
                      document.documentElement.scrollLeft ||
                      0),
                n.clientY +
                  (document.body.scrollTop ||
                    document.documentElement.scrollTop ||
                    0),
              ]
            : void 0 !== n.pageX
              ? [n.pageX, n.pageY]
              : [0, 0]
        : [0, 0]),
        (i = this.H);
      var s = 0,
        e = 0;
      if (i)
        do (s += i.offsetLeft), (e += i.offsetTop);
        while ((i = i.offsetParent));
      (i = [s, e]),
        (i = [n[0] - i[0], n[1] - i[1]]),
        (i[0] *= this.ra),
        (i[1] *= this.W),
        this.ha && ((n = i[0]), (i[0] = i[1]), (i[1] = 0 - n)),
        (n = i[0]),
        (i = i[1]),
        this.T && ((s = this.T), (s.U = v()), (s.w = !1), pn(s)),
        (this.S = n),
        (this.R = i),
        (n = t.type),
        (this.ma && 0 == n.indexOf("mouse")) ||
          ((i = {
            touchstart: "mousedown",
            touchend: "mouseup",
            touchmove: "mousemove",
          }),
          n in i && ((this.ma = !0), (n = i[n])),
          "mousedown" == n && (t.preventDefault(), this.U && this.U.focus()),
          Hn(this, n, this.S, this.R));
    };
    var Hn = function (t, i, n, s) {
        if (!t.V && "mousedown" == i) {
          t.V = !0;
          for (var e = 0; e < t.$.length; e++) t.$[e]();
        }
        if ("mousedown" == i) {
          if (!t.w)
            for (e = 0; e < t.o.length; e++) {
              var o = t.o[e];
              if (o.o.contains(n, s)) {
                (t.w = o), o.s("mousedown", n, s);
                break;
              }
            }
        } else if ("mouseup" == i)
          t.w
            ? (t.w.s("mouseup", n, s), (t.w = null))
            : t.s && t.s.s("mouseup", n, s);
        else if ("mousemove" == i || "areamove" == i) {
          for (var h = null, e = 0; e < t.o.length; e++)
            if (((o = t.o[e]), o.o.contains(n, s))) {
              h = o;
              break;
            }
          if (
            (t.s != h &&
              (t.s && t.s.s("mouseout", n, s),
              h && h.s("mouseover", n, s),
              (t.s = h)),
            "mousemove" == i)
          )
            for (t.w && t.w.s("mousemove", n, s), e = 0; e < t.o.length; e++)
              (o = t.o[e]),
                o != t.w && o.o.contains(n, s) && o.s("mousemove", n, s);
        } else
          "mouseout" == i &&
            (t.s && t.s.s("mouseout", n, s), (t.w = null), (t.s = null));
        Tn(t);
      },
      Tn = function (t) {
        for (
          var i, n = t.s && t.s.o != yn ? "pointer" : "default", s = 0;
          (i = t.ya[s]);
          s++
        )
          kt(i, "cursor", n);
      },
      Rn = function (t, i) {
        (this.o = t), (this.s = i);
      },
      xn = function () {
        (this.U = this.W = this.ha = this.o = this.H = null),
          (this.ma = !1),
          (this.V = null),
          (this.T = this.s = !1),
          (this.w = !0),
          (this.$ = this.S = !1),
          (this.R = null);
      };
    o(xn),
      (xn.prototype.reset = function () {
        (this.U = this.W = this.ha = this.o = this.H = null),
          (this.ma = !1),
          (this.V = null),
          (this.T = this.s = !1),
          (this.w = !0),
          (this.$ = this.S = !1),
          (this.R = null);
      }),
      si();
    var kn = wt.Ua,
      Mn = Ct(document, "fullscreenElement"),
      Un = document[Ct(document, "exitFullscreen")],
      En = function (t, i, n, e) {
        // var o = On;
        // (o.o = t),
        //   (o.H = i),
        //   (o.ha = e),
        //   //   (o.V = t[Ct(t, "requestFullscreen")]),
        //   //   (t = document[Ct(document, "fullscreenEnabled")] && s(o.V) && s(Un)),
        //   si(),
        //   //   (o.s = wt.Wa && t),
        //   si(),
        //   (o.T = wt.Ta),
        //   (o.w = !0),
        //   (o.s || o.T) &&
        //     (kt(document.body, "margin", "0"),
        //     kt(o.o, "overflow", "visible", "width", "100%", "height", "100%"),
        //     (document.body.scrollLeft = 0),
        //     n.listen(window, "scroll", Ln));
      },
      An = function () {
        var t = On;
        return function (i) {
          "mousedown" == i && (t.$ = !0);
        };
      };
    xn.prototype.update = function () {
      if (this.s || this.T) {
        var t = null != document[Mn],
          i = window.innerWidth,
          n = window.innerHeight;
        if (
          ((0 == window.scrollX && 0 == window.scrollY) ||
            window.scrollTo(0, 0),
          i != this.W || n != this.U || t != this.ma || this.w)
        ) {
          this.S = n > i;
          for (var s = !1, e = 0; e < this.H.length; ++e) {
            var o = this.H[e],
              h = o.width,
              a = o.height;
            kn && 0 == e && (s = a > h != this.S);
            var r,
              l,
              u = s ? Math.min(i / a, n / h) : Math.min(i / h, n / a),
              h = u * h,
              a = u * a;
            s
              ? ((u = (i - a) / 2 + a),
                (r = (n - h) / 2),
                (l = "rotate(90deg)"))
              : ((u = (i - h) / 2), (r = (n - a) / 2), (l = "")),
              At(o, "TransformOrigin", "0 0"),
              At(o, "Transform", l),
              kt(
                o,
                "position",
                "absolute",
                "width",
                h + "px",
                "height",
                a + "px",
                "left",
                u + "px",
                "top",
                r + "px",
              );
          }
          document.body.clientWidth > i &&
            i > 0 &&
            kt(document.body, "width", i + "px"),
            kt(this.o, "height", "100%", "width", "100%"),
            this.ha(this.S && s),
            (this.W = i),
            (this.U = n),
            (this.ma = t),
            (this.w = !1);
        }
      }
    };
    var Ln = function (t) {
        return t.preventDefault(), t.stopPropagation(), !1;
      },
      Cn = function (t, i) {
        (this.x = s(t) ? t : 0), (this.y = s(i) ? i : 0);
      },
      Vn = function (t) {
        return Math.sqrt(t.x * t.x + t.y * t.y);
      },
      Wn = function (t, i) {
        return new Cn(t.x - i.x, t.y - i.y);
      };
    (Cn.prototype.ceil = function () {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }),
      (Cn.prototype.floor = function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      }),
      (Cn.prototype.round = function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      }),
      (Cn.prototype.scale = function (t, i) {
        var n = u(i) ? i : t;
        return (this.x *= t), (this.y *= n), this;
      });
    var In = function (t) {
      this.o = t;
    };
    g(In, rn);
    var $n = function (t, i, n, s) {
      return new In([t, i, t + n, i, t + n, i + s, t, i + s]);
    };
    (In.prototype.contains = function (t, i) {
      var n = this.o;
      if (6 > n.length) return !1;
      for (var s = !1, e = 0, o = n.length - 2; e < n.length; o = e, e += 2) {
        var h = n[e],
          a = n[e + 1],
          r = n[o],
          o = n[o + 1];
        h > t != r > t && i > a + ((t - h) * (o - a)) / (r - h) && (s = !s);
      }
      return s;
    }),
      (In.prototype.va = function (t) {
        t.beginPath();
        for (var i = 0; i < this.o.length; i += 2)
          t.lineTo(this.o[i], this.o[i + 1]);
        t.lineTo(this.o[0], this.o[1]), t.fill(), t.stroke();
      });
    var On = xn.ka(),
      Pn = function (t, i, n, o) {
        ei.call(this),
          (this.U = i),
          (this.ha = i.width),
          (this.H = new on(this)),
          oi(this, p(hi, this.H));
        var h = this;
        (this.W = new ln(
          o || 6e4,
          function () {
            Lv(), Ys();
          },
          function () {
            var t = Ev;
            t && !t.T && ((t.T = !0), (t.U = v()), t.S || ((t.S = !0), t.$())),
              (t = Tv),
              t.w && (t.w.gain.value = t.R);
          },
        )),
          oi(this, p(hi, this.W)),
          (this.o = new gn(i, t, this.W)),
          this.H.listen(
            t,
            "mousedown mouseup mousemove mouseout touchstart touchend touchmove".split(
              " ",
            ),
            function (t) {
              h.o.handleEvent(t);
            },
            !0,
          ),
          En(t, s(n) ? [i].concat(n) : [i], this.H, function (t) {
            mn(h.o, t);
          }),
          this.H.listen(i, "touchend", function () {
            fullscreen(document.body);
            // var t = On;
            // t.s &&
            //   (t.$
            //     ? (Un.call(document), (t.$ = !1))
            //     : (t.V.call(t.o),
            //       null != t.R &&
            //         (window.screen.lockOrientation &&
            //           window.screen.lockOrientation(t.R),
            //         window.screen.orientation &&
            //           window.screen.orientation.lock &&
            //           window.screen.orientation.lock(t.R)["catch"](e))));
          }),
          (this.ma = Rv),
          (this.w = Ch),
          (this.T = 1),
          (t = this.w[3]),
          (this.$ = i.width - t),
          (this.S = $n(this.$, 0, t, this.w[4])),
          qn(this, this.S, An());
      };
    g(Pn, ei),
      (Pn.prototype.s = function () {
        On.reset(), Pn.Da.s.call(this);
      }),
      (Pn.prototype.update = function () {
        if ((On.update(), null != document[Mn] && this.U.width != this.ha)) {
          (this.ha = this.U.width),
            s(window.innerWidth) &&
              (this.T =
                (30 * this.U.width) /
                (window.innerWidth > window.innerHeight
                  ? window.innerWidth
                  : window.innerHeight) /
                this.w[3]);
          var t = this.T * this.w[3],
            i = this.T * this.w[4];
          (this.$ = this.U.width - t),
            bn(this.o, this.S),
            (this.S = $n(this.$, 0, t, i)),
            qn(this, this.S, An());
        }
      });
    var qn = function (t, i, n) {
        t.o.o.push(new Rn(i, n));
      },
      Dn = function () {
        (this.W = !0),
          (this.U = !1),
          (this.H = []),
          (this.$ = !1),
          (this.o = this.S = this.w = 0),
          (this.T = zn);
      };
    g(Dn, ei), o(Dn);
    var zn = 1e3 / 60,
      Gn = function (t) {
        (this.s = 1e3 / 30), (this.H = t), (this.o = Dn.ka().w), (this.w = 0);
      },
      Bn = function (t) {
        var i = t.H(t.w);
        return t.w++, (t.o = Dn.ka().w + t.s / Dn.ka().T), i;
      },
      Fn = function (t, i) {
        var n = new Gn(i);
        Nn(t, n);
      },
      Nn = function (t, i) {
        t.H.push(i), (t.$ = !0);
      },
      Xn = function (t) {
        if (t.W) t.U = !1;
        else {
          (t.U = !0),
            _n(t),
            t.$ &&
              (t.H.sort(function (t, i) {
                return t.o == i.o ? i.s - t.s : t.o - i.o;
              }),
              (t.$ = !1));
          for (var i, n = 0, s = 0; (i = t.H[s]) && i.o <= t.w; s++)
            Bn(i) && Nn(t, i), n++;
          t.H.splice(0, n),
            t.w++,
            qt(function () {
              Xn(t);
            });
        }
      },
      _n = function (t) {
        var i = new Date().getTime();
        30 < t.w &&
          t.S &&
          (i - t.S >= 1.05 * t.T ? t.o++ : (t.o >>= 1),
          20 < t.o && ((t.T = Math.min(50, 1.2 * t.T)), (t.o = 0))),
          (t.S = i);
      };
    (Dn.prototype.start = function () {
      (this.W = !1), this.U || Xn(this);
    }),
      (Dn.prototype.stop = function () {
        (this.W = !0), (this.S = this.o = 0);
      }),
      (Dn.prototype.s = function () {
        this.reset(), Dn.Da.s.call(this);
      }),
      (Dn.prototype.reset = function () {
        this.stop(),
          (this.H = []),
          (this.w = 0),
          (this.$ = !1),
          (this.T = zn),
          (this.S = this.o = 0);
      });
    var jn = function (t) {
        return 3 * t * t - 2 * t * t * t;
      },
      Yn = function (t, i, n, s, e, o, h, a) {
        (this.o = t),
          (this.T = i),
          (this.s = n),
          (this.S = s),
          (this.w = e),
          (this.R = o),
          (this.H = h),
          (this.V = a);
      },
      Jn = function (t, i) {
        if (0 == i) return t.o;
        if (1 == i) return t.H;
        var n = A(t.o, t.s, i),
          s = A(t.s, t.w, i),
          e = A(t.w, t.H, i),
          n = A(n, s, i),
          s = A(s, e, i);
        return A(n, s, i);
      },
      Kn = function (t, i) {
        if (0 == i) return t.T;
        if (1 == i) return t.V;
        var n = A(t.T, t.S, i),
          s = A(t.S, t.R, i),
          e = A(t.R, t.V, i),
          n = A(n, s, i),
          s = A(s, e, i);
        return A(n, s, i);
      },
      Qn = function (t, i) {
        var n = (i - t.o) / (t.H - t.o);
        if (0 >= n) return 0;
        if (n >= 1) return 1;
        for (var s = 0, e = 1, o = 0, h = 0; 8 > h; h++) {
          var o = Jn(t, n),
            a = (Jn(t, n + 1e-6) - o) / 1e-6;
          if (1e-6 > Math.abs(o - i)) return n;
          if (1e-6 > Math.abs(a)) break;
          i > o ? (s = n) : (e = n), (n -= (o - i) / a);
        }
        for (h = 0; 1e-6 < Math.abs(o - i) && 8 > h; h++)
          i > o ? ((s = n), (n = (n + e) / 2)) : ((e = n), (n = (n + s) / 2)),
            (o = Jn(t, n));
        return n;
      },
      Zn = function (t, i, n, s) {
        return i + (s || ns)(t) * (n - i);
      },
      ts = function (t, i, n) {
        var s = new Yn(0, 0, t, i, n, 1, 1, 1);
        return function (t) {
          return Kn(s, Qn(s, t));
        };
      },
      is = function (t) {
        return t;
      },
      ns = ts(0.25, 0.1, 0.25),
      ss = ts(0.4, 0, 1),
      es = ts(0, 0, 0.6),
      os = ts(0.6, 0, 0.4),
      hs = function (t, i, n, s, e) {
        (this.s = t),
          (this.S = i),
          (this.R = {}),
          (this.duration = n),
          (this.V = s || ns),
          (this.w = e || Mt),
          (this.o = null),
          (this.H = !1);
      },
      as = function (t) {
        var i = Math.min(Math.max(ls(t) / t.duration, 0), 1);
        t.H && (i = 1 - i);
        for (var n in t.s)
          t.S.hasOwnProperty(n) && (t.R[n] = Zn(i, t.s[n], t.S[n], t.V));
        return t.R;
      },
      rs = function (t) {
        return ls(t) >= t.duration;
      },
      ls = function (t) {
        return null === t.o ? 0 : t.w() - t.o;
      };
    (hs.prototype.start = function () {
      (this.o = this.w()), (this.H = !1);
    }),
      (hs.prototype.reset = function () {
        this.o = null;
      });
    var us = function (t, i) {
      ei.call(this),
        (this.w = !1),
        (this.o = t),
        (this.S = i),
        (this.H = function () {
          return !1;
        });
    };
    g(us, ei),
      (us.prototype.s = function () {
        this.reset(), (this.o = null);
      }),
      (us.prototype.reset = function () {
        this.w &&
          (kt(this.o, "width", "", "height", ""),
          zt(0),
          (this.o.style.width = ""),
          (this.o.style.height = "")),
          (this.w = !1);
      });
    var cs = function (t, i) {
      if (t.o && ni() && !t.w) {
        var n = t.o;
        document.getElementById("fkbx") && kt(n.parentNode, "width", "100%");
        var s = n.offsetHeight,
          e = n.offsetWidth,
          o = Math.min(640, n.parentNode.clientWidth),
          h = o / (640 / 360),
          a = Dn.ka(),
          r = Mt(),
          l = new hs(
            { height: s, width: e },
            { height: h, width: o },
            400,
            jn,
            function () {
              return r;
            },
          );
        l.start(),
          (t.w = !0),
          (t.H = function () {
            r = Mt();
            var s = as(l);
            return (
              Dt(n, s.width, s.height),
              mn(t.S, !1),
              rs(l)
                ? ((s = document.getElementById("searchform")) &&
                    (n.style.zIndex =
                      parseInt(getComputedStyle(s).zIndex, 10) + 1),
                  i(),
                  (t.H = function () {
                    return !1;
                  }),
                  !1)
                : !0
            );
          }),
          Fn(a, function () {
            return t.H();
          });
      }
    };
    us.prototype.update = function () {
      this.H();
    };
    var fs = function () {
      (this.H = this.s = null),
        (this.o = {}),
        (this.S = null),
        (this.Cb = Number.MIN_VALUE),
        (this.min = Number.MAX_VALUE),
        (this.w = this.R = 0);
    };
    o(fs),
      (fs.prototype.update = function () {
        var t = self.performance ? self.performance.now() : Date.now();
        if (this.s) {
          var i = t - this.s,
            n = Math.round(1e3 / i);
          n > this.Cb && (this.Cb = n),
            n < this.min && (this.min = n),
            this.R++,
            (this.w += i),
            (i = Math.round((1e3 * this.R) / this.w)),
            (this.o[t] = n),
            (this.S = {
              now: n,
              nd: ps(this, 1e3, t),
              md: ps(this, 5e3, t),
              od: { Tc: i, Cb: this.Cb, min: this.min },
            });
        }
        this.s = t;
        for (var s in this.o) Number(s) + 5100 < t && delete this.o[s];
        return this.S;
      });
    var ws = function (t) {
        var i = xv;
        i.H || (i.H = t);
      },
      ps = function (t, i, n) {
        var s,
          e = [],
          o = Number.MIN_VALUE,
          h = Number.MAX_VALUE;
        for (s in t.o)
          Number(s) + i >= n &&
            (t.o[s] > o && (o = t.o[s]),
            t.o[s] < h && (h = t.o[s]),
            e.push(t.o[s]));
        return { Tc: Math.round(V.apply(null, e)), Cb: o, min: h };
      },
      vs = function (t, i) {
        google &&
          google.doodle &&
          (i && (google.doodle.cpDestroy = i),
          (google.doodle.cpInit = function () {
            i && i(), t();
          }));
      },
      gs = function () {
        ei.call(this),
          (this.w = new Oi(this)),
          (this.qb = this),
          (this.Aa = null);
      };
    g(gs, ei),
      (gs.prototype[Ci] = !0),
      (gs.prototype.removeEventListener = function (t, i, n, s) {
        Yi(this, t, i, n, s);
      });
    var ys = function (t, i) {
      var n,
        s = t.Aa;
      if (s) for (n = []; s; s = s.Aa) n.push(s);
      var s = t.qb,
        e = i,
        o = e.type || e;
      if (l(e)) e = new Ai(e, s);
      else if (e instanceof Ai) e.H = e.H || s;
      else {
        var h = e,
          e = new Ai(o, s);
        D(e, h);
      }
      var a,
        h = !0;
      if (n)
        for (var r = n.length - 1; !e.w && r >= 0; r--)
          (a = e.s = n[r]), (h = ms(a, o, !0, e) && h);
      if (
        (e.w ||
          ((a = e.s = s),
          (h = ms(a, o, !0, e) && h),
          e.w || (h = ms(a, o, !1, e) && h)),
        n)
      )
        for (r = 0; !e.w && r < n.length; r++)
          (a = e.s = n[r]), (h = ms(a, o, !1, e) && h);
      return h;
    };
    (gs.prototype.s = function () {
      gs.Da.s.call(this), this.Wb(), (this.Aa = null);
    }),
      (gs.prototype.listen = function (t, i, n, s) {
        return Pi(this.w, String(t), i, !1, n, s);
      }),
      (gs.prototype.unlisten = function (t, i, n, s) {
        var e;
        if (((e = this.w), (t = String(t).toString()), t in e.o)) {
          var o = e.o[t];
          (i = zi(o, i, n, s)),
            i > -1
              ? ($i(o[i]),
                Array.prototype.splice.call(o, i, 1),
                0 == o.length && (delete e.o[t], e.s--),
                (e = !0))
              : (e = !1);
        } else e = !1;
        return e;
      }),
      (gs.prototype.Wb = function (t) {
        var i;
        if (this.w) {
          (i = this.w), (t = t && t.toString());
          var n,
            s = 0;
          for (n in i.o)
            if (!t || n == t) {
              for (var e = i.o[n], o = 0; o < e.length; o++) ++s, $i(e[o]);
              delete i.o[n], i.s--;
            }
          i = s;
        } else i = 0;
        return i;
      });
    var ms = function (t, i, n, s) {
        if (((i = t.w.o[String(i)]), !i)) return !0;
        i = i.concat();
        for (var e = !0, o = 0; o < i.length; ++o) {
          var h = i[o];
          if (h && !h.yb && h.capture == n) {
            var a = h.listener,
              r = h.Kb || h.src;
            h.Jb && qi(t.w, h), (e = !1 !== a.call(r, s) && e);
          }
        }
        return e && 0 != s.tc;
      },
      bs = function (t, i, s) {
        if ("function" == h(t)) s && (t = w(t, s));
        else {
          if (!t || "function" != typeof t.handleEvent) throw Error("h");
          t = w(t.handleEvent, t);
        }
        return 2147483647 < Number(i) ? -1 : n.setTimeout(t, i || 0);
      },
      Ss = function () {};
    Ss.prototype.o = null;
    var Hs,
      Ts = function (t) {
        var i;
        return (
          (i = t.o) ||
            ((i = {}), ks(t) && ((i[0] = !0), (i[1] = !0)), (i = t.o = i)),
          i
        );
      },
      Rs = function () {};
    g(Rs, Ss);
    var xs = function (t) {
        return (t = ks(t)) ? new ActiveXObject(t) : new XMLHttpRequest();
      },
      ks = function (t) {
        if (
          !t.s &&
          "undefined" == typeof XMLHttpRequest &&
          "undefined" != typeof ActiveXObject
        ) {
          for (
            var i = [
                "MSXML2.XMLHTTP.6.0",
                "MSXML2.XMLHTTP.3.0",
                "MSXML2.XMLHTTP",
                "Microsoft.XMLHTTP",
              ],
              n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n];
            try {
              return new ActiveXObject(s), (t.s = s);
            } catch (e) {}
          }
          throw Error("i");
        }
        return t.s;
      };
    Hs = new Rs();
    var Ms = function (t) {
      gs.call(this),
        (this.headers = new G()),
        (this.ha = t || null),
        (this.H = !1),
        (this.W = this.o = null),
        (this.ya = ""),
        (this.S = this.ra = this.T = this.ma = !1),
        (this.ta = 0),
        (this.U = null),
        (this.$ = ""),
        (this.Ea = this.Ia = !1);
    };
    g(Ms, gs);
    var Us = /^https?$/i,
      Es = ["POST", "PUT"];
    Ms.prototype.send = function (t, i, s, e) {
      if (this.o) throw Error("j`" + this.ya + "`" + t);
      (i = i ? i.toUpperCase() : "GET"),
        (this.ya = t),
        (this.ma = !1),
        (this.H = !0),
        (this.o = xs(this.ha ? this.ha : Hs)),
        (this.W = Ts(this.ha ? this.ha : Hs)),
        (this.o.onreadystatechange = w(this.Ma, this));
      try {
        (this.ra = !0), this.o.open(i, String(t), !0), (this.ra = !1);
      } catch (o) {
        return void Cs(this);
      }
      t = s || "";
      var h = new G(this.headers);
      e &&
        X(e, function (t, i) {
          h.set(i, t);
        }),
        (e = R(h.Ya(), Ls)),
        (s = n.FormData && t instanceof n.FormData),
        !(0 <= b(Es, i)) ||
          e ||
          s ||
          h.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8",
          ),
        h.forEach(function (t, i) {
          this.o.setRequestHeader(i, t);
        }, this),
        this.$ && (this.o.responseType = this.$),
        "withCredentials" in this.o &&
          this.o.withCredentials !== this.Ia &&
          (this.o.withCredentials = this.Ia);
      try {
        $s(this),
          0 < this.ta &&
            ((this.Ea = As(this.o))
              ? ((this.o.timeout = this.ta),
                (this.o.ontimeout = w(this.Fa, this)))
              : (this.U = bs(this.Fa, this.ta, this))),
          (this.T = !0),
          this.o.send(t),
          (this.T = !1);
      } catch (o) {
        Cs(this);
      }
    };
    var As = function (t) {
        return vi && ki(9) && u(t.timeout) && s(t.ontimeout);
      },
      Ls = function (t) {
        return "content-type" == t.toLowerCase();
      };
    Ms.prototype.Fa = function () {
      "undefined" != typeof i && this.o && (ys(this, "timeout"), this.abort(8));
    };
    var Cs = function (t) {
        (t.H = !1), t.o && ((t.S = !0), t.o.abort(), (t.S = !1)), Vs(t), Is(t);
      },
      Vs = function (t) {
        t.ma || ((t.ma = !0), ys(t, "complete"), ys(t, "error"));
      };
    (Ms.prototype.abort = function () {
      this.o &&
        this.H &&
        ((this.H = !1),
        (this.S = !0),
        this.o.abort(),
        (this.S = !1),
        ys(this, "complete"),
        ys(this, "abort"),
        Is(this));
    }),
      (Ms.prototype.s = function () {
        this.o &&
          (this.H &&
            ((this.H = !1), (this.S = !0), this.o.abort(), (this.S = !1)),
          Is(this, !0)),
          Ms.Da.s.call(this);
      }),
      (Ms.prototype.Ma = function () {
        this.V || (this.ra || this.T || this.S ? Ws(this) : this.Oa());
      }),
      (Ms.prototype.Oa = function () {
        Ws(this);
      });
    var Ws = function (t) {
        if (
          t.H &&
          "undefined" != typeof i &&
          (!t.W[1] || 4 != (t.o ? t.o.readyState : 0) || 2 != Os(t))
        )
          if (t.T && 4 == (t.o ? t.o.readyState : 0)) bs(t.Ma, 0, t);
          else if (
            (ys(t, "readystatechange"), 4 == (t.o ? t.o.readyState : 0))
          ) {
            t.H = !1;
            try {
              var s,
                e = Os(t);
              t: switch (e) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  s = !0;
                  break t;
                default:
                  s = !1;
              }
              var o;
              if (!(o = s)) {
                var h;
                if ((h = 0 === e)) {
                  var a = String(t.ya).match(_)[1] || null;
                  if (!a && n.self && n.self.location)
                    var r = n.self.location.protocol,
                      a = r.substr(0, r.length - 1);
                  h = !Us.test(a ? a.toLowerCase() : "");
                }
                o = h;
              }
              o ? (ys(t, "complete"), ys(t, "success")) : Vs(t);
            } finally {
              Is(t);
            }
          }
      },
      Is = function (t, i) {
        if (t.o) {
          $s(t);
          var n = t.o,
            s = t.W[0] ? e : null;
          (t.o = null), (t.W = null), i || ys(t, "ready");
          try {
            n.onreadystatechange = s;
          } catch (o) {}
        }
      },
      $s = function (t) {
        t.o && t.Ea && (t.o.ontimeout = null),
          u(t.U) && (n.clearTimeout(t.U), (t.U = null));
      },
      Os = function (t) {
        try {
          return 2 < (t.o ? t.o.readyState : 0) ? t.o.status : -1;
        } catch (i) {
          return -1;
        }
      },
      Ps = function (t) {
        try {
          if (!t.o) return null;
          if ("response" in t.o) return t.o.response;
          switch (t.$) {
            case "":
            case "text":
              return t.o.responseText;
            case "arraybuffer":
              if ("mozResponseArrayBuffer" in t.o)
                return t.o.mozResponseArrayBuffer;
          }
          return null;
        } catch (i) {
          return null;
        }
      },
      qs = function (t) {
        (this.V = t), (this.w = !1), (this.H = []);
      },
      Ds = function (t) {
        if (!t.w) {
          t.w = !0;
          for (var i, n = 0; (i = t.H[n]); n++) i();
        }
      },
      zs = function (t, i) {
        t.w ? i() : t.H.push(i);
      },
      Gs = function (t) {
        qs.call(this, t), (this.o = new Image());
      };
    g(Gs, qs),
      (Gs.prototype.s = function () {
        if (!this.o.src) {
          var t = this;
          (this.o.onload = function () {
            Ds(t);
          }),
            (this.o.src = this.V),
            (this.o.complete || "complete" == this.o.readyState) && Ds(this);
        }
      });
    var Bs = function (t, i) {
        for (var n, s = 0, e = 0; (n = t[e]); e++)
          zs(n, function () {
            s++, s == t.length && i();
          }),
            n.s();
      },
      Fs = function (t, i) {
        (this.S = t),
          (this.H = i),
          (this.w = this.o = null),
          (this.R = 1),
          (this.s = null);
      },
      Ns = !(
        (!window.AudioContext && !window.webkitAudioContext) ||
        !window.GainNode
      ),
      Xs = function (t) {
        var i = Tv;
        if (Ns && !i.o) {
          (i.o = new (window.AudioContext || window.webkitAudioContext)()),
            (i.w = i.o.createGain()),
            i.w.connect(i.o.destination);
          for (var n in i.S) i.S[n].S = i.o;
          for (n in i.H) Ks(i.H[n], i.o, i.w);
          yt &&
            (js(i),
            ji(t, "touchend", function () {
              js(i);
            }));
        }
      },
      _s = function (t) {
        (t.s = t.o.createBufferSource()),
          (t.s.buffer = t.o.createBuffer(1, 1, 22050)),
          t.s.connect(t.o.destination),
          t.s.start(0);
      },
      js = function (t) {
        t.o &&
          (null == t.s
            ? _s(t)
            : s(t.s.playbackState)
              ? t.s.playbackState !== t.s.PLAYING_STATE &&
                t.s.playbackState !== t.s.FINISHED_STATE &&
                _s(t)
              : _s(t));
      };
    Fs.prototype.reset = function () {
      for (var t in this.S) this.S[t].H = [];
      for (var i in this.H) this.H[i].stop();
    };
    var Ys = function () {
        var t = Tv;
        t.w && (t.w.gain.value = 0);
      },
      Js = function (t, i, n) {
        (this.nb = t),
          (this.R = i),
          (this.S = n),
          (this.s = {}),
          (this.w = this.o = this.H = null),
          (this.V = 0);
      },
      Ks = function (t, i, n) {
        (t.o = i), (t.w = n), t.o.createGain && (t.H = t.o.createGain());
      },
      Qs = document.createElement("audio"),
      Zs =
        "function" == h(Qs.canPlayType) && "" != Qs.canPlayType("audio/ogg")
          ? ".ogg"
          : ".mp3",
      te = function (t) {
        if (t.o) {
          var i,
            n = 1e3 * t.o.currentTime;
          for (i in t.s) {
            var s = t.s[i];
            !s.Vc && s.nc + t.S < n && delete t.s[i];
          }
        }
      };
    (Js.prototype.play = function (t, i, n) {
      if (!this.o || !this.w) return -1;
      te(this), (t = this.o.currentTime + (t || 0) / 1e3);
      var e = this.o.createBufferSource();
      this.H ? (e.connect(this.H), this.H.connect(this.w)) : e.connect(this.w),
        (e.loop = !!i);
      try {
        e.buffer = this.nb.R;
      } catch (o) {
        return (
          (i = "UnknownError"),
          o instanceof TypeError && (i = "TypeError"),
          (t = "bufferAssignment," + typeof this.nb.R + "," + this.nb.o),
          Gt(["t:" + i, "d:((" + (s(t) ? t : "_") + "))"].join()),
          -1
        );
      }
      (e.playbackRate.value = 1), (n = n || 0);
      var h = this.R / 1e3,
        a = this.S / 1e3;
      return (
        i
          ? ((e.loopStart = h), (e.loopEnd = h + a), e.start(t, h + n / 1e3))
          : e.start(t, h + n / 1e3, a),
        (h = this.V++),
        (this.s[h] = { node: e, nc: 1e3 * t - n, Vc: !!i }),
        h
      );
    }),
      (Js.prototype.stop = function (t) {
        if ((te(this), s(t))) {
          if (this.s[t]) {
            try {
              this.s[t].node.stop(0);
            } catch (i) {}
            var n = (1e3 * this.o.currentTime - this.s[t].nc) % this.S;
            return delete this.s[t], [n];
          }
          return [];
        }
        t = [];
        for (n in this.s) t = t.concat(this.stop(n));
        return t;
      });
    var ie = function (t, i) {
      qs.call(this, t + i + Zs), (this.S = this.R = null), (this.o = 0);
    };
    g(ie, qs),
      (ie.prototype.s = function (t) {
        if ((0 == this.o || t) && this.S) {
          (t = new Ms()), (t.$ = "arraybuffer");
          var i = this;
          t.listen("complete", function () {
            i.S.decodeAudioData(Ps(this), function (t) {
              t && ((i.R = t), (i.o = 3), Ds(i));
            }),
              (i.o = 2);
          }),
            t.send(this.V),
            (this.o = 1);
        }
      });
    var ne = function () {
      Fs.call(this, se, ee);
    };
    g(ne, Fs);
    var se = {
        Ga: new ie(assetsPath + "audio/", "main"),
        Fc: new ie(assetsPath + "audio/", "initial"),
        Sc: new ie(assetsPath + "audio/", "victory"),
        rb: new ie(assetsPath + "audio/", "end"),
      },
      ee = {
        vc: new Js(se.Ga, 0, 3160.816),
        wc: new Js(se.Ga, 4160.816, 3233.333),
        xc: new Js(se.Ga, 8394.15, 3533.333),
        yc: new Js(se.Ga, 12927.483, 4966.667),
        Xb: new Js(se.rb, 0, 1933.333),
        zc: new Js(se.rb, 2933.333, 4466.667),
        Yb: new Js(se.rb, 8400, 5233.333),
        Ac: new Js(se.rb, 14633.333, 2309.342),
        Zb: new Js(se.rb, 17942.676, 2966.667),
        Bc: new Js(se.Ga, 18894.15, 1984.014),
        Cc: new Js(se.Ga, 21878.163, 4957.46),
        Dc: new Js(se.rb, 21909.342, 3e4),
        $b: new Js(se.Ga, 27835.624, 2472.925),
        ac: new Js(se.Ga, 31308.549, 25263.175),
        bc: new Js(se.Ga, 57571.723, 1741.497),
        Ec: new Js(se.Ga, 60313.22, 1335.147),
        Qb: new Js(se.Sc, 0, 18413.424),
        Wc: new Js(se.Ga, 62648.367, 1851.791),
        Ib: new Js(se.Fc, 0, 16921.542),
        dc: new Js(se.Ga, 65500.159, 1573.152),
        Ic: new Js(se.Ga, 68073.311, 1168.254),
        Tb: new Js(se.Ga, 70241.565, 983.56),
        jc: new Js(se.Ga, 72225.125, 1160),
        Lc: new Js(se.Ga, 74385.125, 1248.005),
        Mc: new Js(se.Ga, 76633.129, 1386.667),
        Nc: new Js(se.Ga, 79019.796, 1482.653),
        Oc: new Js(se.Ga, 81502.449, 1271.293),
        Pc: new Js(se.Ga, 83773.741, 1567.347),
        Qc: new Js(se.Ga, 86341.088, 1625.397),
        Rc: new Js(se.Ga, 88966.485, 2066.576),
      };
    o(ne);
    var oe = function (t, i) {
        (this.o = []), (this.w = []);
        for (var n, s = 0; (n = i[s]); s++) {
          var e = new Gs(t + n.filename);
          (n = n.size), this.o.push(e), this.w.push(n);
        }
      },
      he = function (t) {
        return u(t) ? t : t[0];
      };
    oe.prototype.s = function (t, i) {
      var n = this.o[he(t)];
      i && zs(n, i), n.s();
    };
    var ae = function (t, i) {
      return i[3];
    };
    oe.prototype.va = function (t, i, n, s, e, o, h, a) {
      var r = t[3],
        l = t[4];
      if (
        ((e = void 0 != e ? e : 1),
        i.save(),
        i.translate(n, s),
        i.scale(h ? -e : e, a ? -e : e),
        (n = -r * (o ? 0.5 : h ? 1 : 0)),
        (s = t[1]),
        (h = t[2]),
        void 0 != n && ((s += 0), (h += 0)),
        (t = this.o[he(t)]),
        !t.w)
      )
        throw Error("k");
      i.drawImage(t.o, s, h, r, l, n, -l * (o ? 0.5 : a ? 1 : 0), r, l),
        i.restore();
    };
    var re = function () {
      oe.call(this, assetsPath + "img/", le);
    };
    g(re, oe);
    var le = [
        { filename: "cta-png-sprite.png", size: [217, 80] },
        { filename: "main-png-sprite.png", size: [1381, 1467] },
        { filename: "level1-png-sprite.png", size: [3617, 820] },
        { filename: "level1-png1-sprite.png", size: [717, 295] },
        { filename: "level1-jpg-sprite.png", size: [1283, 360] },
        { filename: "gameover-png-sprite.png", size: [441, 119] },
        { filename: "level2-png-sprite.png", size: [5929, 378] },
        { filename: "level2-jpg-sprite.png", size: [640, 360] },
        { filename: "level3-png-sprite.png", size: [2458, 779] },
        { filename: "level3-jpg-sprite.png", size: [640, 360] },
        { filename: "level4-png-sprite.png", size: [5586, 393] },
        { filename: "level4-jpg-sprite.png", size: [640, 360] },
        { filename: "level5-png-sprite.png", size: [1251, 1710] },
        { filename: "level5-png1-sprite.png", size: [4187, 723] },
        { filename: "level5-png2-sprite.png", size: [2566, 1165] },
        { filename: "level5-png3-sprite.png", size: [4035, 360] },
        { filename: "level5-jpg-sprite.jpg", size: [2703, 1069] },
        { filename: "end-png-sprite.png", size: [2360, 1244] },
        { filename: "end-png1-sprite.png", size: [2428, 183] },
        { filename: "end-jpg-sprite.png", size: [640, 360] },
        { filename: "main-jpg-sprite.jpg", size: [1283, 280] },
      ],
      ue = [1, 1315, 1130, 46, 24],
      ce = [1, 421, 1200, 43, 32],
      fe = [16, 0, 0, 1350, 1069],
      we = [16, 1353, 0, 1350, 1069],
      pe = [2, 1894, 0, 189, 124],
      ve = [20, 0, 0, 640, 280],
      de = [20, 643, 0, 640, 280],
      ge = [1, 1313, 0, 68, 27],
      ye = [1, 504, 1302, 69, 68],
      me = [1, 381, 1322, 59, 53],
      be = [1, 1313, 226, 61, 53],
      Se = [1, 1313, 170, 61, 53],
      He = [1, 1313, 226, 61, 53],
      Te = [2, 1438, 0, 453, 140],
      Re = [14, 0, 1089, 159, 41],
      xe = [5, 74, 0, 71, 71], // TODO: game over button replay
      ke = [5, 0, 0, 71, 71], // TODO: game over button replay on hover
      Me = [5, 222, 0, 71, 71], // TODO: game over button new game
      Ue = [5, 148, 0, 71, 71], // TODO: game over button new game on hover
      Ee = [5, 370, 0, 71, 71], // TODO: game over button search
      Ae = [5, 296, 0, 71, 71], // TODO: game over button search on hover
      ba = [5, 48, 74, 45, 45], // TODO: share button email
      Sa = [5, 0, 74, 45, 45], // TODO: share button email on hover
      Ha = [5, 144, 74, 45, 45], // TODO: share button facebook
      Ta = [5, 96, 74, 45, 45], // TODO: share button facebook on hover
      Ra = [5, 240, 74, 45, 45], // TODO: share button google Plus
      xa = [5, 192, 74, 45, 45], // TODO: share button google Plus on hover
      ka = [5, 288, 74, 45, 45], // TODO: share button
      Ma = [5, 384, 74, 45, 45], // TODO: share button twitter
      Ua = [5, 336, 74, 45, 45], // TODO: share button twitter on hover
      Le = [6, 241, 0, 236, 105],
      Ce = [6, 0, 0, 238, 101],
      Ve = [2, 2518, 554, 107, 106],
      We = [2, 1019, 556, 107, 106],
      Ie = [2, 0, 560, 107, 106],
      $e = [2, 110, 560, 107, 106],
      Oe = [2, 2959, 0, 160, 106],
      Pe = [2, 3122, 0, 160, 106],
      qe = [2, 3122, 0, 160, 106],
      De = [2, 3285, 0, 160, 106],
      ze = [2, 3285, 0, 160, 106],
      Ge = [2, 3448, 0, 160, 106],
      Be = [2, 3448, 0, 160, 106],
      Fe = [2, 522, 68, 160, 106],
      Ne = [2, 685, 68, 160, 106],
      Xe = [2, 848, 68, 160, 106],
      _e = [2, 1011, 68, 160, 106],
      je = [2, 1174, 68, 160, 106],
      Ye = [2, 2086, 90, 160, 106],
      Je = [2, 2959, 109, 160, 106],
      Ke = [2, 2959, 109, 160, 106],
      Qe = [2, 2959, 109, 160, 106],
      Ze = [2, 2959, 109, 160, 106],
      to = [2, 3122, 109, 160, 106],
      io = [2, 3285, 109, 160, 106],
      no = [2, 3448, 109, 160, 106],
      so = [2, 1894, 127, 160, 106],
      eo = [2, 1337, 143, 160, 106],
      oo = [2, 1337, 143, 160, 106],
      ho = [2, 1337, 143, 160, 106],
      ao = [2, 1337, 143, 160, 106],
      ro = [2, 1337, 143, 160, 106],
      lo = [2, 1337, 143, 160, 106],
      uo = [2, 1337, 143, 160, 106],
      co = [2, 1337, 143, 160, 106],
      fo = [2, 1337, 143, 160, 106],
      wo = [2, 1337, 143, 160, 106],
      po = [3, 590, 0, 87, 75],
      vo = [3, 590, 0, 87, 75],
      go = [3, 590, 0, 87, 75],
      yo = [3, 590, 78, 87, 75],
      mo = [3, 0, 108, 87, 75],
      bo = [3, 90, 108, 87, 75],
      So = [3, 180, 108, 87, 75],
      Ho = [3, 270, 108, 87, 75],
      To = [3, 270, 108, 87, 75],
      Ro = [3, 270, 108, 87, 75],
      xo = [3, 180, 108, 87, 75],
      ko = [3, 90, 108, 87, 75],
      Mo = [3, 0, 108, 87, 75],
      Uo = [3, 590, 78, 87, 75],
      Eo = [3, 590, 0, 87, 75],
      Ao = [3, 590, 0, 87, 75],
      Lo = [3, 360, 108, 87, 75],
      Co = [3, 450, 108, 87, 75],
      Vo = [3, 540, 156, 87, 75],
      Wo = [3, 630, 156, 87, 75],
      Io = [3, 0, 186, 87, 75],
      $o = [3, 0, 186, 87, 75],
      Oo = [3, 0, 186, 87, 75],
      Po = [3, 630, 156, 87, 75],
      qo = [3, 540, 156, 87, 75],
      Do = [3, 450, 108, 87, 75],
      zo = [3, 90, 186, 87, 75],
      Go = [3, 590, 0, 87, 75],
      Bo = [3, 590, 0, 87, 75],
      Fo = [1, 0, 293, 122, 134],
      No = [1, 1101, 300, 122, 134],
      Xo = [1, 1226, 300, 122, 134],
      _o = [1, 614, 302, 122, 134],
      jo = [1, 739, 322, 122, 134],
      Yo = [1, 864, 333, 122, 134],
      Jo = [1, 375, 335, 122, 134],
      Ko = [1, 0, 430, 122, 134],
      Qo = [1, 125, 430, 122, 134],
      Zo = [1, 250, 430, 122, 134],
      th = [1, 989, 437, 122, 134],
      ih = [1, 1114, 437, 122, 134],
      nh = [1, 1239, 437, 122, 134],
      sh = [1, 500, 439, 122, 134],
      eh = [1, 750, 470, 122, 134],
      oh = [1, 125, 567, 122, 134],
      hh = [1, 250, 567, 122, 134],
      ah = [1, 875, 574, 122, 134],
      rh = [1, 1250, 574, 122, 134],
      lh = [1, 500, 576, 122, 134],
      uh = [1, 625, 596, 122, 134],
      ch = [1, 750, 607, 122, 134],
      fh = [1, 875, 711, 122, 134],
      wh = [1, 500, 713, 122, 134],
      ph = [1, 625, 733, 122, 134],
      vh = [1, 375, 746, 122, 134],
      dh = [1, 875, 848, 122, 134],
      gh = [1, 1e3, 848, 122, 134],
      yh = [1, 375, 883, 122, 134],
      mh = [1, 1e3, 985, 118, 85],
      bh = [1, 1121, 985, 118, 85],
      Sh = [1, 1242, 985, 118, 85],
      Hh = [1, 500, 987, 118, 85],
      Th = [1, 621, 1007, 118, 85],
      Rh = [1, 742, 1018, 118, 85],
      xh = [3, 0, 0, 115, 105],
      kh = [3, 118, 0, 115, 105],
      Mh = [3, 236, 0, 115, 105],
      Uh = [3, 354, 0, 115, 105],
      Eh = [3, 472, 0, 115, 105],
      Ah = [2, 0, 0, 519, 283],
      Lh = [2, 2864, 161, 56, 45],
      Ch = [0, 166, 54, 26, 26],
      Vh = [1, 85, 1115, 82, 78],
      Wh = [1, 170, 1115, 82, 78],
      Ih = [1, 255, 1115, 82, 78],
      $h = [1, 795, 1122, 82, 78],
      Oh = [1, 880, 1122, 82, 78],
      Ph = [0, 166, 0, 51, 51],
      qh = [1, 989, 333, 102, 87],
      Dh = [1, 500, 335, 102, 87],
      zh = [1, 875, 470, 102, 87],
      Gh = [1, 375, 1020, 102, 87],
      Bh = [1, 375, 1020, 102, 87],
      Fh = [4, 0, 0, 640, 360],
      Nh = [19, 0, 0, 640, 360],
      Xh = [2, 522, 0, 455, 65],
      _h = [2, 980, 0, 455, 65],
      jh = [2, 3233, 709, 78, 63],
      Yh = [2, 2802, 296, 50, 50],
      Jh = [2, 1286, 177, 42, 31],
      Kh = [2, 2432, 718, 42, 31],
      Qh = [8, 2327, 0, 59, 77],
      Zh = [8, 2148, 564, 154, 205],
      ta = [8, 2305, 564, 153, 179],
      ia = [2, 2271, 0, 169, 158],
      na = [2, 2086, 0, 182, 87],
      sa = [2, 1134, 177, 149, 95],
      ea = [2, 2206, 199, 20, 40],
      oa = [1, 955, 169, 143, 161],
      ha = [15, 3834, 230, 52, 61],
      aa = [12, 418, 624, 390, 360],
      ra = [12, 811, 624, 390, 360],
      la = [12, 0, 936, 390, 360],
      ua = [12, 393, 987, 390, 360],
      ca = [1, 653, 0, 179, 158],
      fa = [17, 360, 943, 108, 72],
      wa = [1, 421, 1242, 80, 77],
      pa = [1, 900, 1244, 80, 77],
      va = [1, 983, 1244, 80, 77],
      da = [2, 1813, 522, 50, 50],
      ga = [1, 480, 1165, 81, 74],
      ya = [1, 564, 1185, 81, 74],
      ma = [1, 375, 293, 87, 37],
      Ea = [1, 1248, 1410, 39, 45],
      Aa = [2, 2518, 431, 127, 120],
      La = [2, 2518, 431, 127, 120],
      Ca = [2, 0, 437, 127, 120],
      Va = [2, 130, 437, 127, 120],
      Wa = [2, 260, 437, 127, 120],
      Ia = [2, 390, 443, 127, 120],
      $a = [2, 520, 443, 127, 120],
      Oa = [2, 2894, 504, 113, 79],
      Pa = [2, 3010, 504, 113, 79],
      qa = [2, 3126, 504, 113, 79],
      Da = [2, 3242, 504, 113, 79],
      za = [2, 3358, 504, 113, 79],
      Ga = [2, 3474, 504, 113, 79],
      Ba = [2, 447, 312, 144, 128],
      Fa = [2, 447, 312, 144, 128],
      Na = [2, 594, 312, 144, 128],
      Xa = [2, 741, 312, 144, 128],
      _a = [2, 888, 312, 144, 128],
      ja = [2, 1957, 350, 144, 128],
      Ya = [2, 2802, 369, 144, 128],
      Ja = [2, 2711, 161, 150, 132],
      Ka = [2, 2711, 161, 150, 132],
      Qa = [2, 522, 177, 150, 132],
      Za = [2, 675, 177, 150, 132],
      tr = [2, 828, 177, 150, 132],
      ir = [2, 981, 177, 150, 132],
      nr = [2, 981, 177, 150, 132],
      sr = [2, 2949, 369, 139, 132],
      er = [2, 2949, 369, 139, 132],
      or = [2, 3091, 369, 139, 132],
      hr = [2, 3233, 369, 139, 132],
      ar = [2, 3375, 369, 139, 132],
      rr = [2, 1733, 387, 139, 132],
      lr = [2, 1283, 403, 139, 132],
      ur = [2, 1500, 143, 151, 116],
      cr = [2, 1500, 143, 151, 116],
      fr = [2, 1654, 143, 151, 116],
      wr = [2, 2249, 161, 151, 116],
      pr = [2, 2403, 161, 151, 116],
      vr = [2, 2557, 161, 151, 116],
      dr = [2, 2557, 161, 151, 116],
      gr = [2, 650, 443, 120, 130],
      yr = [2, 650, 443, 120, 130],
      mr = [2, 773, 443, 120, 130],
      br = [2, 896, 443, 120, 130],
      Sr = [2, 2648, 447, 120, 130],
      Hr = [2, 1875, 481, 120, 130],
      Tr = [2, 2771, 500, 120, 130],
      Rr = [1, 262, 0, 203, 290],
      xr = [1, 0, 0, 259, 290];
    o(re);
    var kr = new Cn(320, 180);
    re.ka();
    var Mr = fe[3] / 2;
    re.ka();
    var Ur = new Cn(Mr, -fe[4] / 2 + 360 - 40),
      Er = function (t, i, n, s, e, o) {
        if (6 == arguments.length) Lr(this, t, i, n, s, e, o);
        else {
          if (0 != arguments.length) throw Error("l");
          (this.w = this.H = 1), (this.R = this.S = this.s = this.o = 0);
        }
      },
      Ar = function (t) {
        return new Er(t.w, t.R, t.S, t.H, t.s, t.o);
      },
      Lr = function (t, i, n, s, e, o, h) {
        if (!(u(i) && u(n) && u(s) && u(e) && u(o) && u(h))) throw Error("m");
        return (
          (t.w = i), (t.R = n), (t.S = s), (t.H = e), (t.s = o), (t.o = h), t
        );
      };
    Er.prototype.scale = function (t, i) {
      return (this.w *= t), (this.R *= t), (this.S *= i), (this.H *= i), this;
    };
    var Cr = function (t, i, n) {
      return (t.s += i * t.w + n * t.S), (t.o += i * t.R + n * t.H), t;
    };
    Er.prototype.toString = function () {
      return (
        "matrix(" +
        [this.w, this.R, this.S, this.H, this.s, this.o].join() +
        ")"
      );
    };
    var Vr = function (t, i) {
        var n = t.w,
          s = t.S;
        return (
          (t.w = i.w * n + i.R * s),
          (t.S = i.S * n + i.H * s),
          (t.s += i.s * n + i.o * s),
          (n = t.R),
          (s = t.H),
          (t.R = i.w * n + i.R * s),
          (t.H = i.S * n + i.H * s),
          (t.o += i.s * n + i.o * s),
          t
        );
      },
      Wr = function (t, i) {
        var n = Math.cos(i),
          s = Math.sin(i);
        return Lr(t, n, s, -s, n, 0 - 0 * n + 0 * s, 0 - 0 * s - 0 * n);
      },
      Ir = function () {
        (this.S = new Er()),
          (this.wa = 1),
          (this.s = 0),
          (this.o = !0),
          (this.$ = []),
          (this.V = null),
          (this.qb = this.Pb = this.Rb = 0),
          (this.Ha = new Xr());
      },
      $r = function (t, i) {
        null != i.V && i.V.removeChild(i), (i.V = t), t.$.push(i), Nr(i);
      };
    Ir.prototype.removeChild = function (t) {
      var i = this.$.indexOf(t);
      -1 != i && (this.$.splice(i, 1), (t.V = null)), Nr(t);
    };
    var Or = function (t) {
        t.V && t.V.removeChild(t);
      },
      Pr = function (t) {
        for (var i = 0; i < t.$.length; i++) t.$[i].V = null;
        t.$ = [];
      };
    (Ir.prototype.update = function () {}), (Ir.prototype.va = function () {});
    var qr = function (t, i, n) {
        var s = t.S,
          e = -t.S.o;
        (s.s += -t.S.s),
          (s.o += e),
          (s = t.S),
          (e = void 0 === n ? i.y : n),
          (s.s += void 0 === n ? i.x : i),
          (s.o += e),
          Nr(t);
      },
      Dr = function (t) {
        return new Cn(t.S.s, t.S.o);
      },
      zr = function (t, i) {
        t.S.w && t.S.scale(1 / t.S.w, 1 / t.S.H), t.S.scale(i, i), Nr(t);
      },
      Gr = function (t, i) {
        t.qb += i;
        var n,
          s = t.S;
        (n = Wr(new Er(), i)), Vr(s, n), Nr(t);
      },
      Br = function (t) {
        var i = t.S,
          n = -t.qb,
          n = Wr(new Er(), n);
        Vr(i, n), (t.qb = 0), Nr(t);
      },
      Fr = function (t) {
        if (!t.Ob) {
          var i;
          (i = t.V
            ? Cr(Vr(Ar(Fr(t.V)), t.S), t.Pb, t.Rb)
            : Cr(Ar(t.S), t.Pb, t.Rb)),
            (t.Ob = i);
        }
        return t.Ob;
      },
      Nr = function (t) {
        t.Ob = null;
        for (var i = 0; i < t.$.length; i++) Nr(t.$[i]);
      },
      Xr = function () {
        this.order = this.Ab = this.o = 0;
      },
      _r = function (t, i) {
        var n = t;
        for (n.Ha.o = -1; null != n; ) {
          var s = n.$;
          -1 == n.Ha.o && i(n) && (n.Ha.o = s.length),
            n.Ha.o++,
            n.Ha.o < s.length
              ? ((s[n.Ha.o].Ha.o = -1), (n = s[n.Ha.o]))
              : (n = n.V);
        }
      },
      jr = function () {
        Ir.call(this), (this.W = !1);
      };
    g(jr, Ir),
      (t = jr.prototype),
      (t.update = function (t) {
        this.W || ((this.W = !0), this.mc()),
          this.Vb(t),
          this.ub() && this.wb();
      }),
      (t.Vb = function () {}),
      (t.mc = function () {}),
      (t.wb = function () {}),
      (t.ub = function () {
        return !1;
      });
    var Yr = function (t) {
      jr.call(this), (this.w = !1), (this.mc = t);
    };
    g(Yr, jr),
      (Yr.prototype.update = function (t) {
        return (this.w = !0), Yr.Da.update.call(this, t);
      }),
      (Yr.prototype.ub = function () {
        return this.w;
      });
    var Jr = function (t, i, n) {
      jr.call(this),
        (this.w = 0),
        (this.R = t),
        i && (this.Vb = i),
        n && (this.wb = n);
    };
    g(Jr, jr);
    var Kr = Number.POSITIVE_INFINITY;
    (Jr.prototype.update = function (t) {
      return (this.w += t), Jr.Da.update.call(this, t);
    }),
      (Jr.prototype.ub = function () {
        return this.w >= this.R;
      });
    var Qr = function (t, i, n, s, e, o) {
      Jr.call(this, i, null, e),
        (this.Ba = t),
        (this.H = n),
        (this.T = s),
        (this.U = o || is);
    };
    g(Qr, Jr),
      (Qr.prototype.update = function (t) {
        this.H || (this.H = Dr(this.Ba)), (t = Qr.Da.update.call(this, t));
        var i = E(this.w / this.R, 0, 1),
          n = Zn(i, this.H.x, this.T.x, this.U),
          i = Zn(i, this.H.y, this.T.y, this.U);
        return qr(this.Ba, n, i), t;
      });
    var Zr = function () {
      Ir.call(this), (this.ha = []), (this.T = []);
    };
    g(Zr, Ir),
      (Zr.prototype.update = function (t) {
        if (0 < this.ha.length && t > 0) {
          var i = this.ha[0];
          i.update(t), i.ub() && this.ha.shift();
        }
        for (i = 0; i < this.T.length; i++)
          this.T[i].update(t), this.T[i].ub() && this.T.splice(i--, 1);
      });
    var tl = function (t, i) {
        t.ha.push(i);
      },
      il = function (t, i) {
        t.ha.push(new Jr(i));
      },
      nl = function (t, i, n) {
        t.ha.push(new Jr(i, null, n));
      },
      sl = function (t, i) {
        nl(t, 0, function () {
          hl(t, i);
        });
      },
      el = function (t, i, n, s, e, o) {
        t.ha.push(new Qr(t, i, n, s, e, o));
      },
      ol = function (t) {
        t.ha = [];
      },
      hl = function (t, i) {
        t.T.push(i);
      },
      al = function () {
        Ir.call(this);
      };
    g(al, Ir),
      (al.prototype.va = function (t) {
        t.clearRect(-320, -180, 640, 360), al.Da.va.call(this, t);
      });
    var rl = function (t, i, n, s, e) {
      Jr.call(this, i, null, e), (this.Ba = t), (this.H = n), (this.T = s);
    };
    g(rl, Jr),
      (rl.prototype.update = function (t) {
        t = rl.Da.update.call(this, t);
        var i = Zn(E(this.w / this.R, 0, 1), this.H, this.T, is);
        return (this.Ba.wa = i), t;
      });
    var ll = re.ka(),
      ul = function () {
        Ir.call(this), (this.w = []);
        for (var t = 0; 90 > t; t++) this.w.push(new wl()), $r(this, this.w[t]);
      };
    g(ul, Ir);
    var cl = function (t) {
        for (var i = 0; 90 > i; i++) pl(t.w[i], !0);
      },
      fl = function (t) {
        for (var i = 0; 90 > i; i++) pl(t.w[i], !1);
      },
      wl = function () {
        Ir.call(this),
          (this.ha = !1),
          (this.H = 640 * Math.random()),
          (this.R = 360 * Math.random()),
          (this.w = 1 - 2 * Math.random()),
          (this.T = 1 - 2 * Math.random()),
          (this.W = this.ma = 0.2),
          (this.U = 0);
      };
    g(wl, Ir),
      (wl.prototype.update = function (t) {
        (this.U += t),
          (this.W = this.ha
            ? Math.min(this.W, this.ma * E(1 - this.U / 1e3, 0, 1))
            : Math.max(this.W, this.ma * E(this.U / 1500, 0, 1)));
        var i = 2;
        this.ha
          ? (this.w += 320 > this.H ? -0.5 : 0.5)
          : ((i -= 0.2),
            (this.w += 0.2 * (1 - 2 * Math.random())),
            (this.T += 0.2 * (1 - 2 * Math.random()))),
          (this.w = E(this.w, -i, i)),
          (this.T = E(this.T, -i, i)),
          (this.H += (this.w / 17) * t),
          (this.R += (this.T / 17) * t),
          (this.H = E(this.H, 100, 540)),
          (this.R = E(this.R, 110, 250)),
          (100 == this.H || 540 == this.H) && (this.w = this.ha ? 0 : -this.w),
          (110 == this.R || 250 == this.R) && (this.T = -this.T);
      }),
      (wl.prototype.va = function (t) {
        (t.globalAlpha = this.W),
          ll.va(Ph, t, this.H, this.R, 4, !0),
          (t.globalAlpha = 1);
      });
    var pl = function (t, i) {
        i || (t.w = 4 * Math.random()), (t.U = 0), (t.ha = i);
      },
      vl = function () {
        Zr.call(this), (this.w = new yl()), $r(this, this.w);
        for (var t = 0; 50 > t; t++) {
          for (var i = new dl(8 + t * t * 0.002, 3e3), n = 0; 2 * t > n; n++)
            i.update(17);
          (i.s = -1), $r(this, i);
        }
        var t = new gl(14, 3e3),
          n = new gl(14, 3e3),
          s = new gl(14, 3e3);
        (t.s = -1),
          (n.s = -1),
          (s.s = -1),
          qr(n, 0, 113),
          qr(s, 100, 56),
          (t.t = i.t),
          (n.t = i.t + 2 / 3),
          (s.t = i.t + 1 / 3),
          $r(this, t),
          $r(this, n),
          $r(this, s);
      };
    g(vl, Zr),
      (vl.prototype.va = function (t) {
        (t.fillStyle = "#2c3039"), // TODO: play button color
          (t.shadowBlur = 50),
          (t.shadowColor = "#fff"),
          t.beginPath(),
          t.lineTo(0, 113),
          t.lineTo(100, 56),
          t.lineTo(0, 0),
          t.fill(),
          t.fill(),
          (t.shadowBlur = 0);
      });
    var dl = function (t, i) {
      Ir.call(this), (this.H = t), (this.R = i), (this.w = 0);
    };
    g(dl, Ir),
      (dl.prototype.update = function (t) {
        this.w += t / this.R;
        var i = this.w % 1;
        i > 2 / 3
          ? ((t = 100 - 300 * (i - 2 / 3)), (i = 56 - 168 * (i - 2 / 3)))
          : i > 1 / 3
            ? ((t = 300 * (i - 1 / 3)), (i = 113 - 168 * (i - 1 / 3)))
            : ((t = 0), (i *= 339)),
          qr(this, t, i);
      }),
      (dl.prototype.va = function (t) {
        var i = t.createRadialGradient(0, 0, 0, 0, 0, this.H);
        i.addColorStop(0, "rgba(255, 255, 255, 1)"),
          i.addColorStop(0.6, "rgba(245, 245, 255, .3)"),
          i.addColorStop(0.8, "rgba(225, 225, 255, .15)"),
          i.addColorStop(1, "rgba(210, 210, 255, 0)"),
          (t.fillStyle = i),
          t.beginPath(),
          t.arc(0, 0, this.H, 0, 2 * Math.PI, !1),
          t.fill();
      });
    var gl = function (t, i) {
      Ir.call(this), (this.R = t), (this.H = i), (this.w = 0);
    };
    g(gl, Ir),
      (gl.prototype.update = function (t) {
        (this.w += t / this.H), (t = (this.w + 0.1) % 1);
        var i = (0.8 - 0.2) / 2,
          i = i + 0.2 - i * Math.cos((Math.PI * t) / 0.25);
        t > 0.25 && 0.75 > t && (i = 0.8), (this.wa = i);
      }),
      (gl.prototype.va = function (t) {
        var i = this.R * (0.7 + 0.5 * this.wa),
          n = t.createRadialGradient(0, 0, 0, 0, 0, i);
        n.addColorStop(0, "rgba(255, 255, 255, 1)"),
          n.addColorStop(0.6, "rgba(245, 245, 255, .7)"),
          n.addColorStop(0.8, "rgba(225, 225, 255, .25)"),
          n.addColorStop(1, "rgba(210, 210, 255, 0)"),
          (t.fillStyle = n),
          t.beginPath(),
          t.arc(0, this.wa, i, 0, 2 * Math.PI, !1),
          t.fill();
      });
    var yl = function () {
      Ir.call(this);
    };
    g(yl, Ir),
      (yl.prototype.va = function (t) {
        (t.fillStyle = "#fff"),
          t.beginPath(),
          t.moveTo(-1, -1),
          t.lineTo(-1, 114),
          t.lineTo(101, 56),
          t.lineTo(-1, -1),
          t.fill();
      });
    var ml = function (t, i, n) {
      Zr.call(this), (this.w = t), (this.R = i), (this.H = n);
    };
    g(ml, Zr),
      (ml.prototype.va = function (t) {
        (t.fillStyle = this.w), t.fillRect(0, 0, this.R, this.H);
      });
    var bl = function () {
      this.o = new Ir();
    };
    o(bl),
      (bl.prototype.reset = function () {
        this.o = new Ir();
      });
    var Sl = function (t, i) {
        var n = kv,
          s = [];
        _r(n.o, function (t) {
          return t.o ? void s.push(t) : !0;
        });
        for (var e = 0; e < s.length; e++) s[e].update(t);
        var s = [],
          o = 0;
        for (
          _r(n.o, function (t) {
            return t.o
              ? (s.push(t),
                (t.Ha.order = ++o),
                (t.Ha.Ab = t.s + (t.V ? t.V.Ha.Ab : 0)),
                void 0)
              : !0;
          }),
            s.sort(function (t, i) {
              return t.Ha.Ab != i.Ha.Ab
                ? t.Ha.Ab - i.Ha.Ab
                : t.Ha.order - i.Ha.order;
            }),
            i.save(),
            e = 0;
          e < s.length;
          e++
        )
          Hl(i, Fr(s[e])), (i.globalAlpha = s[e].wa), s[e].va(i);
        i.restore();
      },
      Hl = function (t, i) {
        t.setTransform(i.w, i.S, i.R, i.H, i.s, i.o);
      },
      Tl = function () {
        this.w = !1;
      };
    (Tl.prototype.update = function () {
      return this.w ? ((this.w = !1), 1) : 0;
    }),
      (Tl.prototype.Ja = e),
      (Tl.prototype.Ka = e);
    var Rl = bl.ka(),
      xl = function (t, i) {
        (this.w = true), // TODO: game start flag, set false to start on click
          (this.T = t),
          (this.$ = i),
          (this.V = $n(25, 25, 590, 310)),
          (this.R = new al()),
          qr(this.R, 320, 180),
          (this.o = new vl()),
          qr(this.o, 310, 60),
          (this.o.s = 2),
          (this.S = new ul()),
          (this.H = new ml("white", 640, 360)),
          (this.H.s = 460),
          (this.s = new Zr()),
          $r(this.s, this.R),
          $r(this.s, this.S),
          $r(this.s, this.o),
          $r(this.s, this.H);
      };
    g(xl, Tl),
      (xl.prototype.Ja = function () {
        (this.o.w.wa = 0), (this.H.wa = 0);
        var t = this;
        qn(this.T, this.V, function (i) {
          switch (i) {
            case "mouseup":
              // TODO: play button mouse up
              tl(t.s, new rl(t.H, 150, 0, 1)),
                nl(t.s, 300, function () {
                  (t.w = true), // TODO: game start flag
                    t.$ &&
                      (cs(t.$, function () {
                        Dn.ka().stop();
                      }),
                      Dn.ka().start());
                });
              break;
            case "mouseover":
              // TODO: play button mouse over
              cl(t.S), (t.o.T = []), hl(t.o, new rl(t.o.w, 200, t.o.w.wa, 1));
              break;
            case "mouseout":
              // TODO: play button mouse out
              fl(t.S), (t.o.T = []), hl(t.o, new rl(t.o.w, 200, t.o.w.wa, 0));
          }
        }),
          $r(Rl.o, this.s);
      }),
      (xl.prototype.Ka = function () {
        Or(this.s), bn(this.T.o, this.V);
      });
    var kl = re.ka(),
      Ml = function (t, i) {
        Zr.call(this),
          (this.ya = this.ma = this.time = 0),
          (this.W = !1),
          u(t[0])
            ? (this.R = {
                Ca: t,
                duration: 0,
                x: 0,
                y: 0,
                z: null,
                children: null,
              })
            : ((this.ra = t), (this.R = this.ra[this.ya])),
          (this.Kc = i ? i : e);
      };
    g(Ml, Zr);
    var Ul = function (t) {
        for (var i = 0, n = 0; n < t.length; n++)
          i += 0 < t[n].duration ? t[n].duration : 83;
        return i;
      },
      El = function (t, i, n, s, e) {
        return H(t, function (t) {
          return {
            Ca: t,
            duration: i,
            x: n,
            y: s,
            z: void 0 === e ? null : e,
            children: null,
          };
        });
      },
      Al = function (t, i, n, s, e) {
        return (
          (t = El(t, i, n, s, e)),
          0 < t.length && (t[t.length - 1].duration = 0),
          t
        );
      },
      Ll = function (t, i) {
        var n = H(t, function (t) {
          var n = {
            Ca: t[0],
            duration: i,
            x: t[1],
            y: t[2],
            z: null,
            children: null,
          };
          return 4 == t.length && t[3] && (n.children = Ll(t[3], i)), n;
        });
        return 0 < n.length && (n[n.length - 1].duration = 0), n;
      };
    (Ml.prototype.hb = function () {
      var t = this.ra[this.ya].duration;
      t > 0 &&
        this.ma > t &&
        ((this.ya = ++this.ya % this.ra.length), (this.ma -= t)),
        (this.R = this.ra[this.ya]);
    }),
      (Ml.prototype.update = function (t) {
        Ml.Da.update.call(this, t),
          this.Kc(t),
          (this.ma += t),
          this.ra && this.hb();
      }),
      (Ml.prototype.va = function (t) {
        if ((Ml.Da.va.call(this, t), this.R.Ca)) {
          var i = this.R.x || 0,
            n = this.R.y || 0;
          if ((kl.va(this.R.Ca, t, i, n, 1, !0, this.W), this.R.children))
            for (var s, e = 0; (s = this.R.children[e]); e++)
              kl.va(s.Ca, t, i + (s.x || 0), n + (s.y || 0), 1, !0, this.W);
        }
      });
    var Cl = function (t) {
        return t.R.Ca[3];
      },
      Vl = function (t, i) {
        (t.ra = null),
          (t.R = { Ca: i, duration: 0, x: 0, y: 0, z: null, children: null });
      },
      Wl = function (t, i, n, s, o, h) {
        Jr.call(this, n, null, this.wb),
          (this.U = t),
          (this.T = h || e),
          (this.ha = i),
          o && (this.H = new Qr(t, n, s, o));
      };
    g(Wl, Jr),
      (Wl.prototype.update = function (t) {
        this.H && this.H.update(t), Wl.Da.update.call(this, t);
      }),
      (Wl.prototype.wb = function () {
        this.U.qa(this.ha), this.T();
      });
    var Il = function (t, i) {
      (this.state = 0),
        (this.hc = t),
        (this.Oa = i || {}),
        Ml.call(this, this.hc[this.state]);
    };
    g(Il, Ml),
      (Il.prototype.hb = function () {
        var t = this.hc[this.state];
        t && ((this.ra = t), Il.Da.hb.call(this));
      });
    var $l = function (t, i, n, s, e, o) {
      tl(t, new Wl(t, i, n, s, e, o));
    };
    Il.prototype.qa = function (t) {
      this.Oa.hasOwnProperty(this.state) && this.Oa[this.state].stop(),
        (this.state = t),
        (this.ya = this.ma = 0),
        this.hb(),
        this.Oa.hasOwnProperty(t) && this.Oa[t].play();
    };
    var Ol = function (t, i, n, s, e) {
      (t = z([0, t, 1, i, 2, n, 3, s, 4, e])),
        Il.call(this, t),
        (this.state = 0);
    };
    g(Ol, Il);
    var Pl = El(
        [
          ga,
          ga,
          ga,
          ga,
          ga,
          ga,
          ya,
          [1, 85, 1196, 81, 74],
          [1, 169, 1196, 81, 74],
          ya,
          ya,
        ],
        83,
        0,
        0,
      ),
      ql = Al(
        [
          [1, 648, 1196, 81, 74],
          [1, 337, 1200, 81, 74],
          [1, 732, 1203, 81, 74],
          [1, 816, 1203, 81, 74],
        ],
        83,
        0,
        0,
      ),
      Dl = Al([[17, 2290, 797, 64, 84]], 83, 0, -2),
      zl = Al(
        [
          [17, 2290, 884, 64, 84],
          [17, 387, 1134, 64, 84],
        ],
        83,
        0,
        -2,
      ),
      Gl = El(
        [
          [17, 1656, 1014, 100, 113],
          [17, 1759, 1014, 100, 113],
          [17, 1862, 1014, 100, 113],
          [17, 1965, 1014, 100, 113],
          [17, 360, 1018, 100, 113],
          [17, 0, 1032, 100, 113],
        ],
        83,
        0,
        -2,
      ),
      Bl = El(
        [
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          wa,
          pa,
          pa,
          va,
          va,
          va,
          va,
          va,
          va,
          pa,
          pa,
        ],
        83,
        0,
        0,
      ),
      Fl = Al([[17, 792, 1160, 63, 82]], 83, 0, 0),
      Nl = Al(
        [
          [17, 858, 1160, 63, 82],
          [17, 924, 1160, 63, 82],
        ],
        83,
        0,
        0,
      ),
      Xl = El(
        [
          [17, 2256, 0, 104, 113],
          [17, 2256, 116, 104, 113],
          [17, 2256, 232, 104, 113],
          [17, 1335, 1014, 104, 113],
          [17, 1442, 1014, 104, 113],
          [17, 1549, 1014, 104, 113],
        ],
        83,
        0,
        0,
      ),
      _l = El(
        [
          qh,
          qh,
          qh,
          qh,
          Dh,
          Dh,
          zh,
          zh,
          Gh,
          Gh,
          Bh,
          Bh,
          Bh,
          Bh,
          Bh,
          Bh,
          Bh,
          Bh,
          Bh,
          Bh,
          Gh,
          Gh,
          zh,
          zh,
          Dh,
          Dh,
          qh,
          qh,
          qh,
          qh,
        ],
        83,
        0,
        0,
      ),
      jl = Al(
        [
          [1, 1105, 1073, 102, 87],
          [1, 1210, 1073, 102, 87],
          [1, 480, 1075, 102, 87],
          [1, 585, 1095, 102, 87],
          [1, 690, 1106, 102, 87],
          [1, 375, 1110, 102, 87],
        ],
        83,
        0,
        0,
      ),
      Yl = Al([[17, 990, 1160, 61, 84]], 83, 0, -6),
      Jl = Al(
        [
          [17, 1054, 1160, 61, 84],
          [17, 1118, 1160, 61, 84],
        ],
        83,
        0,
        -6,
      ),
      Kl = El(
        [
          [17, 2068, 1122, 92, 113],
          [17, 1335, 1130, 92, 113],
          [17, 1430, 1130, 92, 113],
          [17, 1525, 1130, 92, 113],
          [17, 1620, 1130, 92, 113],
          [17, 1715, 1130, 92, 113],
        ],
        83,
        0,
        -6,
      ),
      Ql = El([Vh, Vh, Wh, Wh, Ih, Ih, $h, $h, Oh, Oh], 83, 0, 0),
      Zl = Al(
        [
          [1, 965, 1163, 82, 78],
          [1, 1050, 1163, 82, 78],
          [1, 1135, 1163, 82, 78],
          [1, 1220, 1163, 82, 78],
        ],
        83,
        0,
        0,
      ),
      tu = El(
        [
          [17, 2278, 975, 76, 75],
          [17, 1986, 1130, 76, 75],
          [17, 103, 1140, 76, 75],
          [17, 182, 1140, 76, 75],
          [17, 0, 1148, 76, 75],
        ],
        83,
        0,
        1,
      ),
      iu = Al(
        [
          [17, 1898, 1130, 85, 81],
          [17, 299, 1134, 85, 81],
        ],
        83,
        0,
        1,
      ),
      nu = El(
        [
          [17, 2068, 1014, 95, 105],
          [17, 103, 1032, 95, 105],
          [17, 201, 1032, 95, 105],
          [17, 463, 1089, 95, 105],
          [17, 2166, 1121, 95, 105],
          [17, 2264, 1121, 95, 105],
        ],
        83,
        0,
        1,
      ),
      su = 83 * iu.length,
      eu = function () {
        Ir.call(this);
        var t = new ml("#000", 640, 46);
        qr(t, 0, 0),
          $r(this, t),
          (t = new ml("#000", 640, 46)),
          qr(t, 0, 314),
          $r(this, t),
          (this.s = 463);
      };
    g(eu, Ir);
    var ou,
      hu = /#(.)(.)(.)/,
      au = /^#(?:[0-9a-f]{3}){1,2}$/i,
      ru = function (t, i, n) {
        i *= n.length;
        for (var s = 0, e = n[0]; i >= 0 && s < n.length; ) {
          var e = n[s],
            o = Math.min(i, 1);
          if (1 > o) {
            var h = (e = new Yn(e.o, e.T, e.s, e.S, e.w, e.R, e.H, e.V));
            if (1 != o) {
              var a = A(h.o, h.s, o),
                r = A(h.T, h.S, o),
                l = A(h.s, h.w, o),
                u = A(h.S, h.R, o),
                c = A(h.w, h.H, o),
                f = A(h.R, h.V, o);
              (h.s = a),
                (h.S = r),
                (a = A(a, l, o)),
                (r = A(r, u, o)),
                (l = A(l, c, o)),
                (u = A(u, f, o)),
                (h.w = a),
                (h.R = r),
                (h.H = A(a, l, o)),
                (h.V = A(r, u, o));
            }
          }
          (h = t),
            (o = e),
            h.save(),
            h.beginPath(),
            h.moveTo(o.o, o.T),
            h.bezierCurveTo(o.s, o.S, o.w, o.R, o.H, o.V),
            h.stroke(),
            h.restore(),
            s++,
            i--;
        }
        return e;
      },
      lu = [255, 255, 255],
      uu = function (t, i, n) {
        t.save(),
          t.translate(i - 73, n - 15),
          t.beginPath(),
          t.moveTo(66.7, 352.6),
          t.bezierCurveTo(66.7, 352.6, 67.8, 279.6, 67.8, 263.1),
          t.bezierCurveTo(67.8, 246.6, 50.3, 247.1, 43.3, 234.8),
          t.bezierCurveTo(36.4, 222.6, 8.7, 156.5, 49.7, 150.1),
          t.bezierCurveTo(52.4, 115.5, 56.1, 50.6, 57.7, 29.2),
          t.bezierCurveTo(59.3, 7.9, 90.2, 13.3, 89.7, 29.8),
          t.bezierCurveTo(89.1, 46.3, 87.5, 111.3, 87.5, 111.3),
          t.bezierCurveTo(87.5, 111.3, 93.4, 103.3, 107.2, 105.9),
          t.bezierCurveTo(121.1, 108.6, 124.8, 122.5, 124.8, 122.5),
          t.bezierCurveTo(124.8, 122.5, 149.9, 98.5, 161, 134.7),
          t.bezierCurveTo(176.5, 117.7, 188.2, 133.6, 189.8, 145.9),
          t.bezierCurveTo(191, 155.5, 196.2, 192.8, 189.3, 215.7),
          t.bezierCurveTo(182.3, 238.6, 163.7, 264.7, 163.7, 264.7),
          t.lineTo(162.6, 352.6),
          (t.lineWidth = 9),
          (t.strokeStyle = "rgb(255, 255, 255)"),
          (t.lineCap = "round"),
          (t.lineJoin = "round"),
          t.stroke(),
          t.restore();
      },
      cu = function (t, i, n) {
        t.save(),
          t.translate(i, n),
          t.save(),
          t.beginPath(),
          t.moveTo(12.5, 43.5),
          t.lineTo(0.2, 54.7),
          t.lineTo(0, 0),
          t.lineTo(44.9, 33.4),
          t.lineTo(25.9, 36.3),
          t.lineTo(33.4, 53),
          t.lineTo(21, 59.2),
          t.lineTo(12.5, 43.5),
          t.closePath(),
          (t.fillStyle = "rgb(255, 255, 255)"),
          t.fill(),
          t.beginPath(),
          t.moveTo(36.8, 31.1),
          t.lineTo(3, 6),
          t.lineTo(3.2, 46.8),
          t.lineTo(13.2, 36.2),
          t.lineTo(22.3, 55.2),
          t.lineTo(29.4, 51.7),
          t.lineTo(20.2, 32.7),
          t.lineTo(36.8, 31.1),
          t.closePath(),
          (t.fillStyle = "rgb(1, 1, 1)"),
          t.fill(),
          t.restore(),
          t.restore();
      },
      fu = [
        new Yn(390.1, 169.5, 406.9, 185.5, 430.7, 194.3, 476, 162.2),
        new Yn(452.4, 164.3, 455.4, 164.2, 472.5, 162.8, 475.1, 162.6),
        new Yn(466.6, 183.9, 467.2, 178.4, 472.8, 167.5, 475.7, 162.6),
      ],
      wu = function (t, i, n, s) {
        return new Yn(t, i, t, i, n, s, n, s);
      },
      pu = O({ Xc: 0, Yc: 1, Zc: 2, $c: 3, ad: 4, dd: 5, hd: 6, jd: 7, kd: 8 }),
      vu = [
        [wu(0, -100, 0, 100)],
        null,
        [wu(175, 0, -175, 0)],
        null,
        null,
        null,
        [wu(25, -62.5, -25, 0), wu(-25, 0, 31, -4), wu(31, -4, -19, 58.5)],
        null,
        null,
      ],
      du = [
        new Cn(50, 180),
        null,
        new Cn(320, 240),
        null,
        null,
        null,
        new Cn(410, 190),
        null,
        null,
      ],
      gu = [null, null, null, null, ee.Qc, null, ee.Rc, null, null],
      yu = Bt(
        "#0000ff #22ff43 #ff0000 #ffff00 #ff69b4 #4682b4 #ffd700 #800080 #ff9900".split(
          " ",
        ),
      ),
      mu = function (t) {
        if (!au.test(t)) throw Error("n`" + t);
        return (
          4 == t.length && (t = t.replace(hu, "#$1$1$2$2$3$3")),
          (t = t.toLowerCase()),
          [
            parseInt(t.substr(1, 2), 16),
            parseInt(t.substr(3, 2), 16),
            parseInt(t.substr(5, 2), 16),
          ]
        );
      },
      bu = {};
    for (ou in yu) bu[ou] = mu.call(void 0, yu[ou]);
    var Su = Bt([
        [2, 3611, 0, 6, 20],
        [2, 2923, 161, 21, 19],
        [2, 2057, 171, 21, 6],
        [2, 2057, 149, 22, 19],
        [2, 2057, 127, 24, 19],
        null,
        [2, 2249, 90, 17, 19],
        null,
        null,
      ]),
      Hu = Bt(vu),
      Tu = Bt(du),
      Ru = Bt(gu),
      xu = function (t, i, n) {
        (this.o = t), (this.s = i), (this.w = n);
      },
      ku = function (t, i, n, s) {
        return new xu(Eu(t, i), 1e3 * n, Mu(s));
      },
      Mu = function (t) {
        for (var i = [], n = 0; n < t.length; n++) i.push(Uu[t[n]]);
        return i;
      },
      Uu = { "|": 0, "^": 1, "-": 2, v: 3, z: 6, 3: 4 },
      Eu = function (t, i) {
        var n = (2 * t * Math.PI) / 360;
        return new Cn(320 + Math.cos(n) * i, Math.sin(n) * i + 203);
      },
      Au = function () {
        this.o = [];
      };
    o(Au);
    var Lu = function (t, i, n) {
        for (var s = t.o.slice(0), e = 0; e < s.length; e++)
          -1 != t.o.indexOf(s[e]) && s[e].Na(i, n);
      },
      Cu = function (t, i) {
        for (var n = t.o.indexOf(i); -1 != n; )
          t.o.splice(n, 1), (n = t.o.indexOf(i));
      };
    Au.prototype.Wb = function () {
      this.o = [];
    };
    var Vu = Au.ka(),
      Wu = function () {
        var t = z([
          0,
          $u,
          1,
          Iu,
          2,
          Ou,
          3,
          Pu,
          4,
          qu,
          5,
          Du,
          6,
          zu,
          7,
          Gu,
          8,
          Bu,
          9,
          Xu,
          10,
          Fu,
          11,
          Nu,
          12,
          _u,
          13,
          ju,
          14,
          Yu,
          15,
          Ju,
          16,
          Ku,
          17,
          Qu,
          18,
          Zu,
          19,
          tc,
        ]);
        Il.call(this, t);
      };
    g(Wu, Il);
    var Iu = Ll([[oa, 33, 5, [[ma, -2, -27]]]], 83),
      $u = Ll(
        [
          [[1, 1313, 102, 64, 65], 62, 47],
          [[1, 0, 1115, 82, 90], 47, 31],
          [[1, 653, 161, 149, 138], 29, 27],
          [[1, 999, 0, 159, 166], 28, 0],
        ],
        83,
      ),
      Ou = Ll(
        [
          [oa, 33, 3, [[ma, -2, -25]]],
          [oa, 33, 1, [[ma, -2, -23]]],
        ],
        83,
      ),
      Pu = Ll(
        [
          [oa, 33, 5, [[ma, -3, -23]]],
          [[1, 835, 0, 161, 162], 27, 4],
          [[1, 468, 0, 182, 163], 2, 3],
        ],
        83,
      ),
      qu = Ll(
        [
          [ca, 0, 1],
          [ca, 0, 1],
          [ca, 0, 1],
        ],
        83,
      ),
      Du = Ll(
        [
          [ca, 0, 1],
          [ca, 0, 1],
          [ca, 0, 1],
          [ca, 0, 1],
          [ca, 0, 3],
          [ca, 0, -1],
          [ca, 0, -3],
          [ca, 0, -1],
          [ca, 0, 1],
          [ca, 0, 3],
          [ca, 0, -1],
          [ca, 0, -3],
          [ca, 0, -1],
          [ca, 0, 1],
          [ca, 0, 3],
        ],
        83,
      ),
      zu = Ll(
        [
          [[1, 805, 165, 147, 154], 36, 0],
          [[1, 1161, 0, 149, 149], 47, 0],
          [[1, 1161, 152, 149, 145], 80, 0],
        ],
        83,
      ),
      Gu = Al([[1, 468, 166, 143, 166]], 83, 33, 0),
      Bu = Al([ha, [15, 3889, 230, 52, 61], [15, 3944, 230, 52, 61]], 83, 0, 0),
      Fu = Al([ha], 83, 0, 0),
      Nu = Al([[14, 2514, 0, 52, 61]], 83, 0, 0),
      Xu = El(
        [
          [14, 2095, 726, 195, 218],
          [14, 2293, 726, 195, 218],
          [14, 2095, 947, 195, 218],
          [14, 2293, 947, 195, 218],
        ],
        83,
        0,
        0,
      ),
      _u = Al(
        [
          aa,
          ra,
          la,
          ua,
          aa,
          ra,
          la,
          ua,
          [12, 786, 987, 390, 360],
          [12, 0, 1299, 390, 360],
          [12, 393, 1350, 390, 360],
          [12, 786, 1350, 390, 360],
        ],
        83,
        0,
        0,
      ),
      ju = El(
        [
          [12, 0, 0, 415, 309],
          [12, 418, 0, 415, 309],
          [12, 836, 0, 415, 309],
          [12, 0, 312, 415, 309],
          [12, 418, 312, 415, 309],
          [12, 836, 312, 415, 309],
          [12, 0, 624, 415, 309],
        ],
        83,
        0,
        25,
      ),
      Yu = Al(
        [
          [17, 0, 0, 373, 360],
          [17, 376, 0, 373, 360],
          [17, 752, 0, 373, 360],
          [17, 1128, 0, 373, 360],
        ],
        83,
        0,
        0,
      ),
      Ju = El(
        [
          [17, 1504, 0, 373, 360],
          [17, 1880, 0, 373, 360],
          [17, 0, 363, 373, 360],
          [17, 376, 363, 373, 360],
        ],
        83,
        0,
        0,
      ),
      Ku = Al([[17, 620, 726, 59, 67]], 83, 0, 0),
      Qu = Al(
        [
          [15, 0, 0, 423, 360],
          [15, 426, 0, 423, 360],
          [15, 852, 0, 423, 360],
          [15, 1278, 0, 423, 360],
          [15, 1704, 0, 423, 360],
          [15, 2130, 0, 423, 360],
          [15, 2556, 0, 423, 360],
          [15, 2982, 0, 423, 360],
          [15, 3408, 0, 423, 360],
        ],
        83,
        0,
        25,
      ),
      Zu = Al(
        [
          [13, 0, 0, 416, 360],
          [13, 419, 0, 416, 360],
          [13, 838, 0, 416, 360],
          [13, 1257, 0, 416, 360],
          [13, 1676, 0, 416, 360],
          [13, 2095, 0, 416, 360],
          [13, 2514, 0, 416, 360],
          [13, 2933, 0, 416, 360],
          [13, 3352, 0, 416, 360],
          [13, 3771, 0, 416, 360],
          [13, 0, 363, 416, 360],
          [13, 419, 363, 416, 360],
          [13, 838, 363, 416, 360],
          [13, 1257, 363, 416, 360],
          [13, 1676, 363, 416, 360],
          [13, 2095, 363, 416, 360],
          [13, 2514, 363, 416, 360],
          [13, 2933, 363, 416, 360],
          [13, 3352, 363, 416, 360],
          [13, 3771, 363, 416, 360],
          [14, 0, 0, 416, 360],
        ],
        83,
        0,
        25,
      ),
      tc = Al(
        [
          [14, 419, 0, 416, 360],
          [14, 838, 0, 416, 360],
          [14, 1257, 0, 416, 360],
          [14, 1676, 0, 416, 360],
          [14, 2095, 0, 416, 360],
          [14, 0, 363, 416, 360],
          [14, 419, 363, 416, 360],
          [14, 838, 363, 416, 360],
          [14, 1257, 363, 416, 360],
          [14, 1676, 363, 416, 360],
          [14, 2095, 363, 416, 360],
          [14, 0, 726, 416, 360],
          [14, 419, 726, 416, 360],
          [14, 838, 726, 416, 360],
          [14, 1257, 726, 416, 360],
          [14, 1676, 726, 416, 360],
        ],
        83,
        0,
        25,
      ),
      ic = Al(
        [
          [1, 399, 1378, 40, 40],
          [1, 1205, 1405, 40, 40],
          [1, 1149, 1409, 40, 40],
        ],
        83,
        0,
        0,
      ),
      nc = 83 * $u.length,
      sc = 83 * Pu.length,
      ec = 83 * qu.length,
      oc = 83 * Du.length,
      hc = 83 * _u.length,
      ac = 83 * Yu.length,
      rc = new Cn(475, 181),
      lc = new Cn(rc.x - 90, rc.y),
      uc = 83 * Qu.length,
      cc = 83 * Zu.length,
      fc = 83 * tc.length;
    Wu.prototype.update = function (t) {
      this.w &&
        5 == this.w.state &&
        ((this.w = null),
        ol(this),
        (this.T = []),
        ee.Xb.stop(),
        this.qa(17),
        el(this, 300, null, rc),
        hl(this, new Wl(this, 13, uc))),
        Wu.Da.update.call(this, t);
    };
    var wc = function (t) {
        $l(t, 18, 4e3),
          sl(
            t,
            new Jr(1e3, null, function () {
              ee.Xb.play();
            }),
          ),
          $l(t, 19, cc, rc, lc, function () {
            ee.bc.play(), Lu(Vu, 6), el(t, 300, null, rc), wc(t);
          }),
          $l(t, 13, fc);
      },
      pc = re.ka(),
      vc = 206 + Qh[4] / 2,
      dc = El(
        [
          [8, 2389, 0, 53, 74],
          [8, 2389, 77, 53, 74],
          [8, 2327, 80, 53, 74],
          [8, 2383, 154, 53, 74],
          [8, 2327, 157, 53, 74],
          [8, 2383, 231, 53, 74],
          [8, 2327, 234, 53, 74],
          [8, 2383, 308, 53, 74],
          [8, 2327, 311, 53, 74],
          [8, 2383, 385, 53, 74],
          [8, 2327, 388, 53, 74],
          [8, 2383, 462, 53, 74],
          [8, 2327, 465, 53, 74],
          [8, 0, 705, 53, 74],
          [8, 56, 705, 53, 74],
          [8, 112, 705, 53, 74],
          [8, 168, 705, 53, 74],
          [8, 224, 705, 53, 74],
          [8, 280, 705, 53, 74],
          [8, 336, 705, 53, 74],
          [8, 392, 705, 53, 74],
          [8, 448, 705, 53, 74],
          [8, 504, 705, 53, 74],
          [8, 560, 705, 53, 74],
        ],
        83,
        545,
        155,
        vc - 1,
      ),
      gc = El(
        [
          [6, 480, 0, 199, 123],
          [6, 682, 0, 199, 123],
          [6, 884, 0, 199, 123],
          [6, 1086, 0, 199, 123],
          [6, 1288, 0, 199, 123],
          [6, 1490, 0, 199, 123],
          [6, 1692, 0, 199, 123],
          [6, 1894, 0, 199, 123],
          [6, 2096, 0, 199, 123],
          [6, 2298, 0, 199, 123],
          [6, 2500, 0, 199, 123],
          [6, 2702, 0, 199, 123],
          [6, 2904, 0, 199, 123],
          [6, 3106, 0, 199, 123],
          [6, 3308, 0, 199, 123],
          [6, 3510, 0, 199, 123],
          [6, 3712, 0, 199, 123],
          [6, 3914, 0, 199, 123],
          [6, 4116, 0, 199, 123],
          [6, 4318, 0, 199, 123],
          [6, 4520, 0, 199, 123],
          [6, 4722, 0, 199, 123],
          [6, 4924, 0, 199, 123],
          [6, 4924, 0, 199, 123],
          [6, 4924, 0, 199, 123],
          [6, 5126, 0, 199, 123],
          [6, 5328, 0, 199, 123],
          [6, 5530, 0, 199, 123],
        ],
        83,
        329,
        81,
        0,
      ),
      yc = El(
        [
          ia,
          [2, 2443, 0, 169, 158],
          [2, 2615, 0, 169, 158],
          [2, 2787, 0, 169, 158],
        ],
        83,
        ia[3] / 2,
        360 - ia[4] / 2,
        273,
      ),
      mc = [pc.o[he(2)], pc.o[he(3)], pc.o[he(4)], pc.o[he(5)]],
      bc = [
        {
          title: Ot("Level Start - Level 1"),
          background: [4, 643, 0, 640, 360],
          Bb: [
            Al([na], 83, na[3] / 2, 360 - na[4] / 2, 360 - na[4]),
            Al([sa], 83, 640 - sa[3] / 2, 360 - sa[4] / 2, 360 - na[4] / 2),
            yc,
          ],
          Eb: [],
          Fb: [6, 7],
          Hb: function (t) {
            var i = function (t) {
                return $w(1e3 * t);
              },
              n = function (i) {
                return Pw(t, i);
              },
              i = [
                n([ku(-20, 295, 8, "-")]),
                i(0.8),
                n([ku(0, 295, 8, "|")]),
                i(0.8),
                n([ku(150, 295, 8, "-")]),
                Ow(t),
                n([
                  ku(0, 295, 8, "|"),
                  ku(160, 295, 8, "-"),
                  ku(190, 140, 8, "|"),
                ]),
                Ow(t),
                i(1),
                n([ku(0, 295, 8, "^")]),
                i(0.4),
                n([ku(-20, 295, 8, "-")]),
                i(0.4),
                n([ku(180, 295, 8, "v")]),
                i(0.4),
                n([ku(160, 295, 8, "|")]),
                Ow(t),
                i(1),
                n([ku(50, 140, 8, "-|")]),
                i(0.5),
                n([ku(190, 140, 8, "|^-")]),
                Ow(t),
                i(1),
                n([ku(-30, 295, 9, "|"), ku(210, 295, 9, "|")]),
                i(0.3),
                n([ku(-10, 295, 9, "^"), ku(190, 295, 9, "^")]),
                i(0.3),
                n([ku(10, 295, 9, "-"), ku(170, 295, 9, "-")]),
                i(0.3),
                n([ku(30, 295, 9, "v"), ku(150, 295, 9, "v")]),
                i(0.3),
                Ow(t),
                i(1),
                n([ku(-30, 295, 12, "|"), ku(150, 295, 12, "|")]),
                i(0.3),
                n([ku(-10, 295, 12, "^"), ku(170, 295, 12, "^")]),
                i(0.3),
                n([ku(10, 295, 12, "-"), ku(190, 295, 12, "-")]),
                i(0.3),
                n([ku(30, 295, 12, "v"), ku(210, 295, 12, "v")]),
                n([ku(-10, 285, 0, "3")]),
                Ow(t),
                i(2),
                Dw(t),
                Ow(t),
                i(1),
              ];
            return Nw(t, i), i;
          },
          state: 13,
        },
        {
          title: Ot("Level Start - Level 2"),
          background: [7, 0, 0, 640, 360],
          Bb: [
            Al([Le], 83, Le[3] / 2, 360 - Le[4] / 2, 360 - Le[4] / 2),
            Al([Ce], 83, 640 - Ce[3] / 2, 360 - Ce[4] / 2, 360 - Ce[4] / 2),
            gc,
          ],
          Eb: [],
          Fb: [8, 9],
          Hb: function (t) {
            var i = function (t) {
                return $w(1e3 * t);
              },
              n = function (i) {
                return Pw(t, i);
              },
              i = [
                i(1),
                n([
                  ku(-80, 140, 10, "--"),
                  ku(10, 140, 10, "|-"),
                  ku(100, 140, 10, "^-"),
                  ku(190, 140, 10, "v-"),
                ]),
                n([ku(0, 295, 10, "z")]),
                Ow(t),
                i(1),
                n([
                  ku(-80, 140, 10, "-^"),
                  ku(10, 140, 10, "|-"),
                  ku(100, 140, 10, "^v"),
                  ku(190, 140, 10, "v|"),
                ]),
                i(2),
                n([
                  ku(-35, 140, 10, "-^"),
                  ku(55, 140, 10, "|-"),
                  ku(145, 140, 10, "^v"),
                  ku(235, 140, 10, "v|"),
                ]),
                i(1),
                n([ku(130, 217.5, 10, "z")]),
                Ow(t),
                i(1),
                n([
                  ku(162, 140, 9, "|"),
                  ku(90, 140, 9, "-"),
                  ku(18, 140, 9, "|"),
                  ku(-54, 140, 9, "-"),
                  ku(-126, 140, 9, "|"),
                ]),
                i(2),
                n([
                  ku(-162, 217.5, 9, "^-|"),
                  ku(-90, 217.5, 9, "v-|"),
                  ku(-18, 217.5, 9, "^--"),
                  ku(54, 217.5, 9, "v--"),
                  ku(126, 217.5, 9, "^-|"),
                ]),
                Ow(t),
                n([ku(180, 217.5, 0, "3")]),
                i(1),
                n([ku(-20, 295, 22, "z")]),
                n([ku(-30, 140, 12, "|")]),
                i(0.9),
                n([ku(0, 140, 12, "^")]),
                i(0.9),
                n([ku(30, 140, 12, "v")]),
                i(0.9),
                n([ku(60, 140, 12, "-")]),
                i(0.9),
                n([ku(90, 140, 12, "v|")]),
                i(0.9),
                n([ku(120, 140, 12, "-^")]),
                i(0.9),
                n([ku(150, 140, 12, "|v")]),
                i(0.9),
                n([ku(180, 140, 12, "^-")]),
                i(0.9),
                n([ku(210, 140, 12, "v|")]),
                i(0.9),
                n([ku(240, 140, 12, "-^")]),
                i(0.9),
                n([ku(270, 140, 12, "|v")]),
                i(0.9),
                n([ku(300, 140, 12, "^-")]),
                Ow(t),
                i(2),
                zw(t),
                Ow(t),
                i(1),
              ];
            return Nw(t, i), i;
          },
          state: 14,
        },
        {
          title: Ot("Level Start - Level 3"),
          background: [9, 0, 0, 640, 360],
          Bb: [
            Al([Zh], 83, Zh[3] / 2, 360 - Zh[4] / 2 - 5, 360 - Zh[4] / 2 - 5),
            Al(
              [ta],
              83,
              640 - ta[3] / 2,
              360 - ta[4] / 2 - 21,
              360 - ta[4] / 2 - 21 - 10,
            ),
            dc,
            Al([Qh], 83, 546, 206, vc),
          ],
          Eb: [],
          Fb: [10, 11],
          Hb: function (t) {
            var i = function (t) {
                return $w(1e3 * t);
              },
              n = function (i) {
                return Pw(t, i);
              },
              i = [
                i(1),
                n([ku(120, 140, 8, "v-^"), ku(15, 140, 8, "|-^")]),
                Ow(t),
                n([ku(-20, 295, 15, "-^-v-^-v"), ku(20, 295, 15, "|^|v|^|v")]),
                Ow(t),
                n([
                  ku(0, 295, 15, "-v^-"),
                  ku(190, 295, 15, "|v|-"),
                  ku(150, 295, 15, "|-|^"),
                ]),
                Ow(t),
                i(1),
                n([ku(-30, 295, 12, "^^-"), ku(150, 295, 12, "vv-")]),
                i(1),
                n([ku(170, 295, 20, "z")]),
                i(2),
                n([ku(10, 295, 3, "-")]),
                i(3),
                n([ku(-30, 295, 12, "|^|-"), ku(150, 295, 12, "v|v-")]),
                i(3),
                n([ku(170, 295, 3, "-")]),
                Ow(t),
                n([
                  ku(0, 295, 15, "v|^-"),
                  ku(-30, 217.5, 15, "v-"),
                  ku(0, 217.5, 15, "|^-"),
                  ku(30, 217.5, 15, "^-"),
                  ku(150, 217.5, 15, "v^-"),
                  ku(180, 217.5, 15, "v|-"),
                  ku(210, 217.5, 15, "|-"),
                  ku(90, 140, 15, "|-"),
                  ku(0, 140, 15, "-"),
                  ku(180, 140, 15, "^-"),
                  ku(270, 140, 15, "v-"),
                ]),
                i(2),
                n([ku(170, 295, 13, "z")]),
                Ow(t),
                n([ku(0, 295, 3, "-")]),
                i(0.2),
                n([ku(170, 295, 3, "|")]),
                i(0.2),
                n([ku(10, 295, 3, "^")]),
                i(0.2),
                n([ku(190, 295, 3, "v")]),
                i(0.2),
                n([ku(-15, 295, 3, "-")]),
                i(0.2),
                n([ku(160, 295, 3, "|")]),
                i(0.2),
                n([ku(5, 295, 3, "^")]),
                i(0.2),
                n([ku(10, 295, 23, "z")]),
                n([ku(180, 295, 3, "v")]),
                i(0.2),
                n([ku(0, 295, 3, "-")]),
                i(0.2),
                n([ku(0, 295, 3, "-")]),
                i(0.2),
                n([ku(170, 295, 3, "|")]),
                i(0.2),
                n([ku(10, 295, 3, "^")]),
                i(0.2),
                n([ku(190, 295, 3, "v")]),
                i(0.2),
                n([ku(-15, 295, 3, "z")]),
                i(0.2),
                n([ku(160, 295, 3, "|")]),
                i(0.2),
                n([ku(5, 295, 3, "^")]),
                i(0.2),
                n([ku(-20, 295, 0, "3")]),
                n([ku(180, 295, 3, "v")]),
                i(0.2),
                n([ku(0, 295, 3, "-")]),
                i(0.2),
                Ow(t),
                i(2),
                Gw(t),
                Ow(t),
                i(1),
              ];
            return Nw(t, i), i;
          },
          state: 15,
        },
        {
          title: Ot("Level Start - Level 4"),
          background: [11, 0, 0, 640, 360],
          Bb: [],
          qc: new Cn(320, 220),
          Eb: [ee.Yb],
          Fb: [12, 13, 14, 15, 16],
          scale: 0.8,
          Hb: function (t) {
            var i = function (t) {
                return $w(1e3 * t);
              },
              n = function (i) {
                return Pw(t, i);
              },
              i = [
                n([ku(0, 295, 12, "^^vv^^")]),
                i(1),
                n([ku(180, 295, 3, "-")]),
                i(1.5),
                n([ku(30, 295, 3, "|")]),
                i(1.5),
                n([ku(150, 295, 3, "-")]),
                Ow(t),
                n([ku(-30, 295, 12, "-v-^-v-^")]),
                i(1),
                n([ku(20, 295, 2, "|")]),
                i(2),
                n([ku(20, 295, 2, "|")]),
                i(2),
                n([ku(20, 295, 2, "|")]),
                i(2),
                n([ku(20, 295, 2, "|")]),
                Ow(t),
                n([
                  ku(-20, 295, 12, "vvvv"),
                  ku(160, 295, 12, "^^^^"),
                  ku(90, 140, 12, "||||"),
                ]),
                i(1),
                n([ku(20, 295, 2, "-")]),
                i(2),
                n([ku(20, 295, 2, "-")]),
                i(2),
                n([ku(20, 295, 2, "-")]),
                i(2),
                n([ku(20, 295, 2, "-")]),
                i(2),
                n([ku(20, 295, 2, "-")]),
                Ow(t),
                n([ku(-20, 295, 12, "--v^--v^--")]),
                i(1),
                n([ku(20, 295, 2, "|")]),
                i(2),
                n([ku(20, 295, 2, "|")]),
                i(2),
                n([ku(20, 295, 12, "--||-^-||")]),
                i(1),
                n([ku(170, 295, 2, "v")]),
                i(2),
                n([ku(170, 295, 2, "v")]),
                i(2),
                n([ku(0, 295, 12, "v-v-v-")]),
                i(1),
                n([ku(180, 295, 2, "^")]),
                i(2),
                n([ku(180, 295, 2, "^")]),
                i(2),
                n([ku(180, 295, 2, "^")]),
                i(2),
                n([ku(180, 295, 2, "^")]),
                i(2),
                Ow(t),
                n([
                  ku(-30, 295, 2, "|"),
                  ku(-10, 295, 3, "-"),
                  ku(10, 295, 4, "^"),
                  ku(30, 295, 5, "v"),
                  ku(150, 295, 6, "v-"),
                  ku(170, 295, 7, "^|"),
                  ku(190, 295, 8, "v^"),
                  ku(210, 295, 9, "^v"),
                ]),
                Ow(t),
                n([
                  ku(162, 217.5, 3, "|"),
                  ku(90, 217.5, 3, "-"),
                  ku(18, 217.5, 3, "|"),
                  ku(-54, 217.5, 3, "-"),
                  ku(-126, 217.5, 3, "|"),
                  ku(-162, 217.5, 9, "^-|^"),
                  ku(-90, 217.5, 9, "v-|v"),
                  ku(-18, 217.5, 9, "^--^"),
                  ku(54, 217.5, 9, "v--v"),
                  ku(126, 217.5, 9, "^-|^"),
                ]),
                Ow(t),
                i(2),
                Bw(t),
                Ow(t),
                i(1),
              ];
            return Nw(t, i), i;
          },
          state: 16,
        },
        {
          title: Ot("Level Start - Level 5"),
          background: fe,
          backgroundPosition: new Cn(-fe[3] / 2 + 640, fe[4] / 2),
          scale: 0.44,
          Eb: [ee.Qb],
          Fb: [17, 18, 19],
          Bb: [],
          qc: new Cn(160, 230),
          Ba: new Wu(),
          uc: !0,
          Uc: ee.Dc,
          Hb: function (t) {
            var i = function (i) {
                return Pw(t, i);
              },
              i = [
                i([ku(230, 217.5, 9, "^")]),
                $w(100),
                i([ku(-90, 217.5, 9, "-")]),
                $w(100),
                i([ku(150, 295, 9, "v")]),
                $w(100),
                i([ku(190, 295, 9, "|")]),
                $w(100),
                i([ku(100, 217.5, 9, "v")]),
                $w(100),
                i([ku(-100, 217.5, 9, "-")]),
                $w(100),
                i([ku(160, 295, 9, "|")]),
                Ow(t),
                Fw(t, "-|-^-^-^z"),
                Ow(t),
                i([ku(-90, 217.5, 12, "vv"), ku(160, 295, 12, "^^")]),
                $w(2e3),
                i([ku(-120, 295, 12, "--"), ku(180, 295, 12, "||")]),
                $w(2e3),
                i([ku(-90, 217.5, 12, "v|"), ku(160, 295, 12, "^-")]),
                Ow(t),
                Fw(t, "^|-v^|-vz"),
                Ow(t),
                i([ku(230, 217.5, 5, "^")]),
                $w(100),
                i([ku(-90, 217.5, 4, "-")]),
                $w(100),
                i([ku(150, 295, 5, "v")]),
                $w(100),
                i([ku(190, 295, 4, "|")]),
                $w(100),
                i([ku(100, 217.5, 5, "v")]),
                $w(100),
                i([ku(-100, 217.5, 4, "-")]),
                $w(100),
                i([ku(160, 295, 5, "|")]),
                $w(100),
                i([ku(240, 295, 4, "^")]),
                Ow(t),
                Fw(t, "vv-|vv-|^^vv|||z"),
                Ow(t),
              ];
            return Nw(t, i), i;
          },
          state: 17,
        },
      ],
      Sc = function () {
        return xc.scale || 1;
      },
      Hc = function () {
        return xc.qc || kr;
      },
      Tc = function () {
        return xc.Uc || ee.ac;
      },
      Rc = function () {
        return H(xc.Eb, function (t) {
          return t.nb;
        }).concat(
          H(xc.Fb, function (t) {
            return pc.o[he(t)];
          }),
        );
      },
      xc = bc[0],
      kc = function (t, i, n, s) {
        Jr.call(this, Kr),
          (this.H = t),
          (this.ha = n),
          (this.U = i),
          (this.T = s || 0);
      };
    g(kc, Jr),
      (kc.prototype.update = function (t) {
        kc.Da.update.call(this, t),
          (t = Math.sin((this.U * this.w * 2 * Math.PI) / 1e3));
        var i = this.H;
        (i.Pb = t * this.T), Nr(i), (i = this.H), (i.Rb = t * this.ha), Nr(i);
      });
    var Mc = Au.ka(),
      Uc = function () {
        var t = El(
            [
              po,
              vo,
              go,
              yo,
              mo,
              bo,
              So,
              Ho,
              To,
              Ro,
              xo,
              ko,
              Mo,
              Uo,
              Eo,
              Ao,
              Lo,
              Co,
              Vo,
              Wo,
              Io,
              $o,
              Oo,
              Po,
              qo,
              Do,
              zo,
              Go,
              Bo,
            ],
            83,
            0,
            0,
          ),
          i = Al([Ve, We, Ie, $e], 83, 0, -31),
          n = El([Oa, Pa, qa, Da, za, Ga], 83, 10, -3),
          s = Al([Aa, La, Ca, Va, Wa, Ia, $a], 83, 12, -21),
          e = Al([Ba, Fa, Na, Xa, _a, ja, Ya], 83, 0, -26.5),
          o = Al([ur, cr, fr, wr, pr, vr, dr], 83, 0, -19),
          h = Al([gr, yr, mr, br, Sr, Hr, Tr], 83, 0, -27),
          a = El([mh, bh, Sh, Hh, Th, Rh], 83, 0, -5),
          r = Al([xh, kh, Mh, Uh], 83, 14, -15),
          l = Al([Eh, Mh, Uh], 83, 14, -15),
          u = Al([Ja, Ka, Qa, Za, tr, ir, nr], 83, 6, -22),
          c = Al([sr, er, or, hr, ar, rr, lr], 83, 0, -28),
          f = Al(
            [
              Oe,
              Pe,
              qe,
              De,
              ze,
              Ge,
              Be,
              Fe,
              Ne,
              Xe,
              _e,
              je,
              Ye,
              Je,
              Ke,
              Qe,
              Ze,
              to,
              io,
              no,
              so,
              eo,
              oo,
              ho,
              ao,
              ro,
              lo,
              uo,
              co,
              fo,
              wo,
            ],
            83,
            0,
            0,
          ),
          t = z([
            10,
            n,
            1,
            i,
            0,
            t,
            14,
            n,
            8,
            a,
            2,
            s,
            3,
            e,
            4,
            o,
            5,
            h,
            6,
            u,
            7,
            c,
            11,
            r,
            12,
            l,
            13,
            Ac,
            9,
            Ec,
            16,
            f,
            17,
            Lc,
            18,
            Cc,
            19,
            Vc,
            20,
            Wc,
            21,
            Ic,
            22,
            $c,
            23,
            Oc,
            24,
            Pc,
            25,
            qc,
            26,
            Dc,
            27,
            zc,
            29,
            Bc,
            28,
            Gc,
          ]),
          i = z([8, ee.Bc]);
        Il.call(this, t, i),
          qr(this, 320, 180),
          (this.w = 5),
          (this.ta = this.w - 1),
          (this.state = 0),
          (this.Ea = 83 * f.length),
          (this.Fa = 150),
          (this.Aa = 0),
          Mc.o.push(this);
      };
    g(Uc, Il);
    var Ec = Al(
        [
          [2, 2057, 199, 146, 148],
          [2, 2057, 199, 146, 148],
          [2, 2864, 218, 146, 148],
          [2, 3013, 218, 146, 148],
          [2, 3162, 218, 146, 148],
          [2, 3311, 218, 146, 148],
          [2, 3460, 218, 146, 148],
          [2, 1808, 236, 146, 148],
          [2, 1286, 252, 146, 148],
          [2, 1435, 262, 146, 148],
          [2, 1584, 262, 146, 148],
          [2, 1134, 275, 146, 148],
          [2, 2206, 280, 146, 148],
          [2, 2355, 280, 146, 148],
          [2, 2504, 280, 146, 148],
          [2, 0, 286, 146, 148],
          [2, 149, 286, 146, 148],
          [2, 298, 286, 146, 148],
          [2, 2653, 296, 146, 148],
          [2, 2653, 296, 146, 148],
          [2, 2653, 296, 146, 148],
        ],
        83,
        0,
        -36,
      ),
      Ac = Al([Eh], 83, 14, -15),
      Lc = Al(
        [
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          [1, 125, 293, 122, 134],
          [1, 250, 293, 122, 134],
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          Fo,
          No,
          No,
          Xo,
          Xo,
          _o,
          _o,
          jo,
          jo,
          Yo,
          Yo,
          Jo,
          Jo,
          Ko,
          Ko,
          Qo,
          Qo,
          Zo,
          Zo,
          th,
          th,
          ih,
          ih,
          nh,
          nh,
          sh,
          sh,
          sh,
          sh,
          sh,
        ],
        83,
        0,
        -9,
      ),
      Cc = Al(
        [
          [1, 625, 459, 122, 134],
          eh,
          eh,
          eh,
          eh,
          eh,
          eh,
          eh,
          eh,
          [1, 375, 472, 122, 134],
          [1, 0, 567, 122, 134],
          oh,
          oh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          hh,
          ah,
          ah,
          ah,
          ah,
          ah,
          ah,
          [1, 1e3, 574, 122, 134],
          [1, 1125, 574, 122, 134],
        ],
        83,
        0,
        -9,
      ),
      Vc = Al(
        [
          rh,
          rh,
          rh,
          rh,
          lh,
          uh,
          ch,
          ch,
          lh,
          uh,
          uh,
          ch,
          ch,
          [1, 125, 704, 122, 134],
          [1, 250, 704, 122, 134],
        ],
        83,
        0,
        -9,
      ),
      Wc = Al(
        [
          fh,
          fh,
          fh,
          fh,
          fh,
          [1, 1e3, 711, 122, 134],
          [1, 1125, 711, 122, 134],
          [1, 1250, 711, 122, 134],
          wh,
          wh,
          wh,
          ph,
          ph,
          ph,
          ph,
          [1, 750, 744, 122, 134],
          vh,
          vh,
          vh,
          vh,
          vh,
          vh,
          vh,
          vh,
          vh,
          vh,
          [1, 0, 841, 122, 134],
          [1, 125, 841, 122, 134],
          [1, 250, 841, 122, 134],
          dh,
          dh,
          dh,
          dh,
          dh,
          dh,
          dh,
          dh,
          dh,
          dh,
          dh,
          dh,
          dh,
          dh,
          [1, 0, 841, 122, 134],
          gh,
          gh,
          gh,
          gh,
          [1, 1125, 848, 122, 134],
        ],
        83,
        0,
        -9,
      ),
      Ic = Al(
        [
          [1, 1250, 848, 122, 134],
          [1, 500, 850, 122, 134],
          [1, 625, 870, 122, 134],
          [1, 750, 881, 122, 134],
          yh,
          yh,
          yh,
          yh,
          yh,
          yh,
          yh,
          yh,
          yh,
          [1, 0, 978, 122, 134],
          [1, 125, 978, 122, 134],
          [1, 250, 978, 122, 134],
          [1, 875, 985, 122, 134],
        ],
        83,
        0,
        -9,
      ),
      $c = Al(
        [
          [15, 3834, 0, 99, 112],
          [15, 3936, 0, 99, 112],
          [15, 3834, 115, 99, 112],
          [15, 3936, 115, 99, 112],
        ],
        83,
        -2,
        17,
      ),
      Oc = Al([[17, 2170, 797, 117, 86]], 83, 20, -2),
      Pc = Al(
        [
          [17, 120, 943, 117, 86],
          [17, 240, 943, 117, 86],
        ],
        83,
        20,
        -2,
      ),
      qc = Al(
        [
          [17, 2170, 886, 117, 86],
          [17, 0, 943, 117, 86],
        ],
        83,
        20,
        -2,
      ),
      Dc = Al(
        [
          [17, 752, 363, 307, 214],
          [17, 1062, 363, 307, 214],
          [17, 1372, 363, 307, 214],
          [17, 1682, 363, 307, 214],
          [17, 1992, 363, 307, 214],
          [17, 752, 580, 307, 214],
          [17, 1062, 580, 307, 214],
          [17, 1372, 580, 307, 214],
          [17, 1682, 580, 307, 214],
          [17, 1992, 580, 307, 214],
          [17, 1992, 580, 307, 214],
          [17, 0, 726, 307, 214],
          [17, 310, 726, 307, 214],
          [17, 620, 797, 307, 214],
          [17, 930, 797, 307, 214],
          [17, 1240, 797, 307, 214],
          [17, 1550, 797, 307, 214],
          [17, 1860, 797, 307, 214],
        ],
        83,
        60,
        -35,
      ),
      zc = El(
        [
          [17, 561, 1160, 74, 81],
          [17, 561, 1160, 74, 81],
          [17, 638, 1160, 74, 81],
          [17, 638, 1160, 74, 81],
          [17, 715, 1160, 74, 81],
          [17, 715, 1160, 74, 81],
        ],
        83,
        -14,
        0,
      ),
      Gc = Al(
        [
          [18, 0, 0, 184, 183],
          [18, 187, 0, 184, 183],
          [18, 374, 0, 184, 183],
          [18, 561, 0, 184, 183],
          [18, 561, 0, 184, 183],
          [18, 561, 0, 184, 183],
          [18, 748, 0, 184, 183],
          [18, 935, 0, 184, 183],
          [18, 1122, 0, 184, 183],
          [18, 1309, 0, 184, 183],
          [18, 1496, 0, 184, 183],
          [18, 1683, 0, 184, 183],
          [18, 1870, 0, 184, 183],
          [18, 2057, 0, 184, 183],
          [18, 2244, 0, 184, 183],
        ],
        83,
        -62,
        38,
      ),
      Bc = El(
        [
          [17, 471, 943, 105, 143],
          [17, 2170, 975, 105, 143],
          [17, 579, 1014, 105, 143],
          [17, 687, 1014, 105, 143],
          [17, 795, 1014, 105, 143],
          [17, 903, 1014, 105, 143],
          [17, 1011, 1014, 105, 143],
          [17, 1119, 1014, 105, 143],
          [17, 1227, 1014, 105, 143],
        ],
        83,
        -124,
        65,
      ),
      Fc = 83 * Ec.length,
      Nc = 83 * Ac.length,
      Xc = 83 * Vc.length,
      _c = 83 * Wc.length,
      jc = 83 * Lc.length,
      Yc = 83 * Ic.length,
      Jc = 83 * Dc.length,
      Kc = 83 * Gc.length,
      Qc = z([0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 0, 6, 7, 7, 0, 8, 0]);
    Uc.prototype.Lb = function () {
      0 >= this.Aa &&
        1 != this.state &&
        ((this.w = Math.max(0, this.w - 1)),
        $l(this, 1, 0),
        this.$a()
          ? (Lu(Mc, 0),
            $l(this, 16, 350),
            $l(this, 0, this.Ea),
            nl(this, 0, function () {
              Lu(Mc, 16);
            }))
          : ((this.Aa = this.Fa), $l(this, 0, 350))),
        this.w <= this.ta && (this.ta--, Lu(Mc, 20));
    };
    var Zc = function (t) {
      0 != t.state && t.qa(0);
    };
    Uc.prototype.$a = function () {
      return 0 >= this.w;
    };
    var tf = function (t, i) {
        return 16 == t.state ? !1 : (ol(t), t.qa(Qc[i]), $l(t, 0, 500), !0);
      },
      nf = function (t) {
        (t.w = Math.min(5, 5)), (t.ta = t.w - 1);
      };
    (Uc.prototype.reset = function () {
      nf(this);
    }),
      (Uc.prototype.update = function (t) {
        (this.Aa -= t), Il.prototype.update.call(this, t);
      }),
      (Uc.prototype.Na = function (t, i) {
        if (6 == t) this.Lb();
        else if (5 == t) this.H = this.H + i;
        else if (7 == t || 9 == t) ef(this);
        else if (8 == t) of(this);
        else if (18 == t) {
          var n = this.w + 1;
          (this.w = n), Lu(Mc, 10, n);
        }
      });
    var sf = function (t, i, n) {
        $l(t, 8, 0), $l(t, 0, 1e3 / t.S.w, null, i, n);
      },
      ef = function (t) {
        0 == t.state && t.qa(14);
      },
      of = function (t) {
        14 == t.state && t.qa(0);
      },
      hf = function (t) {
        t.U
          ? Or(t.U)
          : ((t.U = new Ml(Al([Re], 0, -12, 37))), hl(t.U, new kc(t, 0.7, 3))),
          (t.U.s = -1),
          (t.U.W = !1),
          $r(t, t.U);
      },
      af = function (t) {
        t.U && Or(t.U);
      },
      rf = function (t, i, n, s) {
        Jr.call(this, t), (this.U = i), (this.T = n), (this.H = s);
      };
    g(rf, Jr),
      (rf.prototype.Vb = function () {
        this.H(A(this.U, this.T, E(this.w / this.R, 0, 1)));
      }),
      (rf.prototype.wb = function () {
        this.H(this.T);
      });
    var lf = bl.ka(),
      uf = function (t) {
        (this.w = !1),
          (this.H = new Zr()),
          (this.s = t),
          (this.R = new Ml(fe)),
          $r(this.H, this.R),
          (this.ra = new eu()),
          $r(this.H, this.ra),
          (this.V = new Ml(fa)),
          (this.V.s = 3),
          $r(this.H, this.V),
          (this.ma = new Ml(Re)),
          (this.S = new Ir()),
          qr(this.S, -Ur.x + 320, -Ur.y + 180),
          $r(this.R, this.S),
          (this.W = new Ol(Bl, Bl, Fl, Nl, Xl)),
          qr(this.W, -190, 73),
          $r(this.S, this.W),
          (this.U = new Ol(_l, jl, Yl, Jl, Kl)),
          qr(this.U, -82, 73),
          $r(this.S, this.U),
          (this.ha = new Ol(Pl, ql, Dl, zl, Gl)),
          qr(this.ha, 26, 73),
          $r(this.S, this.ha),
          (this.$ = new Ol(Ql, Zl, tu, iu, nu)),
          qr(this.$, 134, 73),
          $r(this.S, this.$),
          (this.T = new ml("#fff", 640, 360)),
          (this.T.s = 560),
          $r(this.H, this.T);
      };
    g(uf, Tl),
      (uf.prototype.Ja = function () {
        $r(lf.o, this.H),
          $r(this.H, this.s),
          qr(this.R, xc.backgroundPosition || kr),
          (this.T.s = 560),
          Vl(this.R, fe),
          zr(this.s, Sc()),
          this.s.qa(0),
          qr(this.s, Hc()),
          (this.s.s = 4),
          hf(this.s),
          (this.S.o = !1),
          this.W.qa(2),
          this.ha.qa(2),
          this.$.qa(2),
          this.U.qa(2),
          (this.ra.o = !1),
          (this.o = xc.Ba),
          $r(this.H, this.o),
          zr(this.o, 1),
          (this.o.s = 2),
          (this.o.o = !0),
          this.o.qa(14),
          qr(this.o, rc),
          (this.o.wa = 1),
          zr(this.ma, Sc()),
          qr(this.ma, -10, 18),
          (this.ma.s = -1),
          (this.V.o = !0),
          zr(this.V, Sc()),
          qr(this.V, 330, -50),
          (this.T.wa = 0),
          ee.Yb.play(),
          $l(this.o, 15, ac),
          tl(this.o, new rl(this.T, 1e3, 0, 1));
        var t = this;
        nl(this.o, 0, function () {
          Vl(t.R, we), (t.ra.o = !0), t.o.qa(16), t.s.qa(23);
        }),
          tl(this.o, new rl(this.T, 200, 1, 0)),
          sl(
            this.o,
            new Jr(1500, function (i) {
              Gr(t.o, 3.06 / i);
            }),
          ),
          el(this.o, 1e3, null, new Cn(rc.x, 410)),
          nl(this.o, 0, function () {
            $l(t.s, 24, 0), $l(t.s, 25, 700);
          }),
          tl(
            this.o,
            new Qr(
              this.s,
              1e3,
              null,
              kr,
              function () {
                Tc().stop(), ee.Qb.play();
              },
              os,
            ),
          ),
          tl(this.o, new Qr(this.V, 1e3, null, new Cn(330, 132), null, es)),
          nl(this.o, 0, function () {
            t.s.qa(26), af(t.s), (t.V.o = !1);
          }),
          nl(this.o, Jc, function () {
            ee.Zb.play(),
              t.s.qa(27),
              (t.s.W = !0),
              qr(t.s, 345, 200),
              hf(t.s),
              (t.s.U.W = !0),
              (t.o.wa = 0),
              (t.S.o = !0);
          }),
          sl(
            this.o,
            new rf(500, Sc(), 1, function (i) {
              zr(t.s, i);
            }),
          ),
          tl(this.o, new Qr(this.s, 500, null, new Cn(420, 100))),
          tl(this.o, new Qr(this.R, 2e3, null, Ur)),
          nl(this.o, 100, function () {
            (t.s.W = !1),
              ee.Cc.play(),
              t.s.qa(28),
              $l(t.$, 3, 200),
              $l(t.$, 4, su),
              $l(t.ha, 3, 200),
              $l(t.ha, 4, su),
              $l(t.U, 3, 200),
              $l(t.U, 4, su),
              $l(t.W, 3, 200),
              $l(t.W, 4, su);
          }),
          nl(this.o, Kc, function () {
            t.s.qa(29);
          }),
          il(this.o, 1e3),
          tl(this.o, new rl(this.T, 1700, 0, 1)),
          nl(this.o, 700, function () {
            t.w = !0;
          });
      }),
      (uf.prototype.Ka = function () {
        ol(this.R),
          ol(this.s),
          af(this.s),
          (this.s.W = !1),
          ol(this.H),
          ol(this.o),
          (this.o.T = []),
          Br(this.o),
          (this.o.wa = 1),
          Or(this.ma),
          Or(this.H),
          Tc().stop();
      });
    var cf = function () {
      var t = z([0, ff, 1, wf, 2, pf, 3, vf]);
      Il.call(this, t);
    };
    g(cf, Il);
    var ff = Ll(
        [
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [ge, 115, 206],
          [[1, 1300, 1251, 75, 37], 112, 197],
          [[1, 0, 1208, 81, 43], 112, 191],
          [[1, 0, 1254, 75, 37], 112, 192],
          [[1, 1305, 1210, 75, 38], 112, 189],
          [[1, 1066, 1244, 75, 38], 112, 187],
          [[1, 1144, 1244, 75, 38], 112, 180],
          [[1, 1222, 1244, 75, 38], 112, 174],
          [[1, 504, 1262, 75, 37], 112, 165],
          [[1, 1305, 1163, 75, 44], 112, 148],
          [[1, 232, 1273, 74, 47], 113, 135],
          [[1, 155, 1273, 74, 59], 114, 116],
          [[1, 78, 1273, 74, 64], 114, 101],
          [[1, 658, 1273, 69, 68], 116, 81],
          [[1, 309, 1277, 69, 68], 116, 69],
          [[1, 730, 1280, 69, 68], 116, 55],
          [[1, 802, 1280, 69, 68], 116, 41],
          [[1, 1066, 1285, 69, 68], 116, 26],
          [[1, 1138, 1285, 69, 68], 116, 21],
          [[1, 1210, 1285, 69, 68], 116, 18],
          [[1, 1313, 30, 67, 69], 118, 15],
          [[1, 1282, 1291, 69, 68], 116, 16],
          [[1, 0, 1294, 69, 68], 116, 19],
          [ye, 116, 20],
          [ye, 116, 20],
          [ye, 116, 20],
          [ye, 116, 20],
          [ye, 116, 20],
          [ye, 116, 20],
        ],
        83,
      ),
      wf = Ll(
        [
          [[1, 582, 1273, 73, 64], 112, 21],
          [[1, 72, 1340, 52, 45], 132, 26],
          [[1, 232, 1323, 58, 50], 131, 19],
          [[1, 738, 1351, 51, 47], 133, 17],
          [[1, 1044, 1356, 51, 46], 133, 18],
          [[1, 792, 1351, 51, 47], 133, 18],
          [[1, 1098, 1356, 51, 46], 133, 19],
          [[1, 1205, 1356, 50, 46], 120, 5],
          [[1, 1258, 1362, 50, 45], 77, 0],
          [[1, 788, 1401, 47, 44], 29, 16],
          [[1, 656, 1404, 46, 42], 19, 22],
          [[1, 1002, 1405, 46, 42], 19, 20],
          [[1, 1051, 1405, 46, 42], 19, 17],
          [[1, 1100, 1405, 46, 42], 19, 19],
        ],
        83,
      ),
      pf = Ll(
        [
          [me, 60, 84],
          [me, 60, 84],
          [me, 60, 84],
          [me, 60, 84],
          [[1, 1315, 1073, 59, 54], 66, 92],
          [[1, 1313, 170, 61, 53], 67, 96],
          [be, 68, 98],
          [be, 68, 98],
          [[1, 1315, 1073, 59, 54], 66, 92],
          [Se, 67, 96],
          [Se, 67, 96],
          [He, 68, 98],
          [He, 68, 98],
          [[1, 443, 1322, 54, 50], 53, 82],
          [[1, 1101, 223, 54, 51], 17, 53],
          [[1, 576, 1340, 51, 51], 0, 27],
          [[1, 874, 1324, 54, 50], 3, 26],
          [[1, 931, 1324, 54, 50], 35, 26],
          [[1, 988, 1324, 53, 50], 72, 25],
          [[1, 1101, 169, 55, 51], 137, 21],
          [[1, 155, 1335, 53, 50], 198, 20],
          [[1, 630, 1344, 51, 50], 254, 18],
          [[1, 293, 1348, 51, 50], 329, 18],
          [[1, 684, 1351, 51, 50], 366, 18],
          [[1, 1152, 1356, 50, 50], 407, 18],
          [[1, 614, 166, 11, 29], 446, 23],
        ],
        83,
      ),
      vf = Al(
        [
          [1, 0, 1365, 49, 66],
          [1, 500, 1373, 49, 66],
          [1, 500, 1373, 49, 66],
          [1, 500, 1373, 49, 66],
          [1, 500, 1373, 49, 66],
          [1, 500, 1373, 49, 66],
          [1, 443, 1375, 49, 66],
          [1, 211, 1376, 49, 66],
          [1, 846, 1377, 49, 66],
          [1, 898, 1377, 49, 66],
          [1, 898, 1377, 49, 66],
          [1, 898, 1377, 49, 66],
          [1, 898, 1377, 49, 66],
          [1, 898, 1377, 49, 66],
          [1, 950, 1377, 49, 66],
          [1, 347, 1378, 49, 66],
          [1, 52, 1388, 49, 66],
          [1, 104, 1388, 49, 66],
          [1, 156, 1388, 49, 66],
          [1, 552, 1394, 49, 66],
          [1, 604, 1397, 49, 66],
          [1, 604, 1397, 49, 66],
          [1, 604, 1397, 49, 66],
          [1, 263, 1401, 49, 66],
        ],
        83,
        0,
        0,
      ),
      df = 83 * ff.length,
      gf = 83 * vf.length,
      yf = bl.ka(),
      mf = function (t) {
        (this.w = !1),
          (this.H = new Zr()),
          (this.s = t),
          (this.T = new Ml(fe)),
          $r(this.H, this.T),
          (this.U = new eu()),
          $r(this.H, this.U),
          (this.V = new Ml(Re)),
          (this.$ = new ml("#000", 640, 360)),
          (this.$.s = 461),
          $r(this.H, this.$),
          (this.R = new cf()),
          (this.R.s = 3),
          qr(this.R, 500, 90),
          $r(this.H, this.R),
          (this.S = new ml("#fff", 640, 360)),
          $r(this.H, this.S),
          (this.S.s = 560);
      };
    g(mf, Tl),
      (mf.prototype.Ja = function () {
        $r(yf.o, this.H),
          $r(this.H, this.s),
          qr(this.V, 110, 273),
          (this.V.s = 2),
          $r(this.H, this.V),
          qr(this.T, Ur),
          this.s.qa(8),
          zr(this.s, 1),
          qr(this.s, -Cl(this.s) / 2 - 5, 272),
          (this.s.s = 4),
          (this.U.o = !0),
          (this.o = xc.Ba),
          $r(this.H, this.o),
          zr(this.o, 1),
          (this.o.s = 2),
          (this.o.o = !1),
          this.o.qa(10),
          qr(this.o, 540, 130),
          (this.R.o = !1),
          this.R.qa(3),
          (this.S.o = !1),
          (this.S.wa = 0),
          qr(this.$, 0, 0),
          tl(this.s, new Qr(this.$, 1e3, null, new Cn(-640, 0))),
          el(this.s, 800, null, new Cn(Dr(this.V).x + 10, 272));
        var t = this;
        nl(this.s, 0, function () {
          t.s.qa(22);
          var i = Dr(t.s);
          qr(t.s, i.x + 2, i.y - 30);
        }),
          nl(this.s, 249, function () {
            Or(t.V), hf(t.s);
          }),
          nl(this.s, 300, function () {
            ee.Zb.play(),
              el(t.T, 1700, null, xc.backgroundPosition || kr, null, os);
          }),
          el(
            this.s,
            700,
            null,
            new Cn(520, -this.s.R.Ca[4] / 2),
            function () {
              zr(t.s, Sc());
            },
            ss,
          ),
          il(this.s, 300),
          el(
            this.s,
            700,
            new Cn(-Cl(this.s) / 2, 360 + this.s.R.Ca[4] / 2),
            Hc(),
            null,
            es,
          ),
          nl(this.s, 0, function () {
            t.o.o = !0;
          }),
          nl(this.o, 200, function () {
            t.R.o = !0;
          }),
          $l(this.o, 8, 200),
          $l(this.o, 11, gf - 200),
          $l(this.o, 9, 83, null, null, function () {
            ee.zc.play(), zr(t.o, 0.27);
          }),
          nl(this.o, 1e3, function () {
            (t.S.o = !0),
              (t.S.wa = 0),
              il(t.H, 100),
              tl(t.H, new rl(t.S, 1400, 0, 1));
          }),
          tl(
            this.o,
            new rf(1500, 0.27, 1, function (i) {
              zr(t.o, i);
            }),
          ),
          nl(this.o, 0, function () {
            zr(t.o, 1),
              qr(t.o, rc),
              (t.R.o = !1),
              (t.U.o = !1),
              af(t.s),
              t.s.qa(0),
              hf(t.s),
              ee.Ac.play();
          }),
          $l(this.o, 12, 0),
          sl(this.o, new rl(t.S, 200, 1, 0)),
          $l(this.o, 13, hc),
          nl(this.o, hc, function () {
            t.w = !0;
          });
      }),
      (mf.prototype.Ka = function () {
        ol(this.T),
          ol(this.s),
          af(this.s),
          ol(this.H),
          ol(this.o),
          13 != this.o.state && this.o.qa(13),
          qr(this.o, rc),
          zr(this.o, 1),
          (this.o.o = !0),
          (this.o.s = 459),
          Or(this.V),
          Or(this.H);
      }),
      re.ka();
    var bf = function (t, i) {
      var n = z([
        0,
        [{ Ca: Jh, duration: 0 }],
        1,
        [{ Ca: Jh, duration: 0 }],
        2,
        [{ Ca: Kh, duration: 0 }],
        3,
        Al(Sf, Tf, 0, 0),
        4,
        Al(Hf, Tf, -3, 0),
      ]);
      Il.call(this, n), qr(this, t, i);
    };
    g(bf, Il);
    var Sf = [
        Jh,
        [2, 1286, 211, 42, 31],
        [2, 1621, 543, 42, 31],
        [2, 1813, 575, 42, 31],
        [2, 1621, 577, 42, 31],
        [2, 2828, 633, 42, 31],
        [2, 2828, 667, 42, 31],
        [2, 2432, 684, 42, 31],
        [2, 2677, 703, 42, 31],
        Kh,
      ],
      Hf = [
        [2, 1985, 719, 41, 38],
        [2, 2029, 719, 41, 38],
        [2, 1721, 724, 41, 38],
        [2, 1765, 724, 41, 38],
        [2, 1809, 729, 41, 38],
        [2, 1853, 729, 41, 38],
        [2, 1615, 731, 41, 38],
        [2, 1659, 731, 41, 38],
        [2, 2677, 737, 41, 38],
        [2, 1529, 745, 41, 38],
        [2, 1116, 747, 41, 38],
        [2, 1160, 747, 41, 38],
      ],
      Tf = 1e3 / 12,
      Rf = Sf.length * Tf,
      xf = Hf.length * Tf,
      kf = Jh[3];
    bf.prototype.update = function (t) {
      bf.Da.update.call(this, t),
        (t = 1),
        1 == this.state && (t += 0.1 * Math.max(0, Math.sin(this.ma / 100))),
        zr(this, t);
    };
    var Mf = { 2: !0, 3: !0 },
      Uf = { 0: !0, 1: !0, 4: !0 };
    bf.prototype.qa = function (t) {
      this.state == t ||
        (3 == this.state && 2 == t) ||
        (4 == this.state && 1 == t) ||
        (Mf[t] && Uf[this.state]
          ? (ol(this), $l(this, 2, Rf), (t = 3))
          : Uf[t] && Mf[this.state] && (ol(this), $l(this, 0, xf), (t = 4)),
        bf.Da.qa.call(this, t));
    };
    var Ef = function (t, i, n, s, e, o, h, a) {
      Ir.call(this),
        (this.H = t),
        (this.U = e + "px " + s),
        (this.fillStyle = o || "#000"),
        (this.R = h ? h : "left"),
        (this.T = a),
        qr(this, i, n);
    };
    g(Ef, Ir),
      (Ef.prototype.va = function (t) {
        Ef.Da.va.call(this, t),
          t.save(),
          (t.font = this.U),
          this.fillStyle && (t.fillStyle = this.fillStyle),
          this.T && ((t.shadowColor = this.T), (t.shadowBlur = 5)),
          (t.textAlign = this.R),
          t.fillText(this.H, 0, 0),
          t.restore();
      });
    var Af = Au.ka(),
      Lf = function (t) {
        for (Zr.call(this), this.U = t, this.H = [], t = 0; 5 > t; t++) {
          var i = new bf(kf * (t + 1), 25);
          this.H.push(i), $r(this, i);
        }
        Cf(this),
          (this.w = 0),
          (this.R = new Ef(
            this.w.toString(),
            640 - (bt ? 74 : 25),
            37,
            "'Itim', sans-serif",
            40,
            "orange",
            "right",
            "black",
          )),
          $r(this, this.R),
          Af.o.push(this);
      };
    g(Lf, Zr),
      (Lf.prototype.Na = function (t, i) {
        if (10 == t && i > 5) this.H[this.H.length - 1].qa(2);
        else if (2 == t) {
          ol(this);
          var n = this;
          this.w < i
            ? tl(
                this,
                new rf(300, this.w, i, function (t) {
                  (n.w = Math.ceil(t)), (n.R.H = n.w.toString());
                }),
              )
            : ((this.w = i), (this.R.H = this.w.toString()));
        }
      }),
      (Lf.prototype.update = function (t) {
        Lf.Da.update.call(this, t), Cf(this);
      });
    var Cf = function (t) {
        for (var i = t.$, n = 0; 5 > n; n++) {
          var s = 0;
          n > t.U.w - 1 ? (s = 2) : n == t.U.w - 1 && (s = 1), i[n].qa(s);
        }
      },
      Vf = function (t) {
        Zr.call(this);
        var i = t.position,
          n = new Ef(
            "+" + t.ab.toString(),
            0,
            0,
            "'Itim', sans-serif",
            24,
            t.color,
            "center",
          );
        $r(this, n),
          qr(this, i.x, i.y - 30),
          (this.wa = 0),
          (this.s = 470),
          hl(this, new Qr(this, 400, null, new Cn(i.x, i.y - 60), ns)),
          hl(
            this,
            new rl(n, 400, 1, 0, function () {
              Or(n);
            }),
          ),
          hl(this, new kc(this, 1.1 * (320 > i.x ? -1 : 1), 0, 2));
      };
    g(Vf, Zr);
    var Wf = Au.ka(),
      If = function () {
        Zr.call(this),
          (this.W = this.H = 0),
          (this.R = new Zr()),
          $r(this, this.R),
          (this.ya = 0),
          (this.w = new Ef(
            "0",
            315,
            340,
            "'Itim', sans-serif",
            32,
            "orange",
            "center",
            "black",
          )),
          (this.w.s = 470),
          hl(this, new kc(this.w, 0.7, 3)),
          (this.w.o = !1),
          (this.U = new Ml(pe)),
          (this.U.s = -1),
          zr(this.U, 0.5),
          (this.U.wa = 0.6),
          qr(this.U, 5, -10),
          $r(this.w, this.U),
          $r(this, this.w),
          (this.ma = ee.Tb),
          Au.ka().o.push(this);
      };
    g(If, Zr);
    var $f = [ee.jc, ee.Lc, ee.Mc, ee.Nc];
    (If.prototype.Na = function (t, i) {
      !this.o || (5 != t && 11 != t)
        ? this.o && 0 < this.W && (8 == t || 17 == t)
          ? (ol(this.R),
            sl(this.R, new rl(this.U, 200, 0.6, 0)),
            tl(this.R, new rl(this.w, 200, 1, 0)),
            this.ra())
          : 13 == t && (this.ya = this.H)
        : (ol(this.R),
          (this.R.T = []),
          this.W++,
          2 <= this.W
            ? (2 == this.W
                ? (hl(this, new rl(this.w, 200, 0, 1)),
                  hl(this, new rl(this.U, 200, 0, 0.6)))
                : ((this.w.wa = 1), (this.U.wa = 0.6)),
              (this.w.o = !0),
              (this.w.H = " x " + this.W),
              il(this.R, 500),
              sl(this.R, new rl(this.U, 500, 0.6, 0)),
              tl(this.R, new rl(this.w, 500, 1, 0, w(this.ra, this))))
            : nl(this.R, 1e3, w(this.ra, this)),
          (this.ma = $f[(this.W - 1) % $f.length]),
          (i.ab *= this.W),
          Of(this, this.H + i.ab),
          $r(this, new Vf(i)));
    }),
      (If.prototype.ra = function () {
        (this.W = 0), (this.ma = ee.Tb);
      });
    var Of = function (t, i) {
        (t.H = i),
          Lu(Wf, 2, t.H),
          si(),
          wt.Xa && (document.cookie = "sessionHighScore=" + Math.floor(t.H));
      },
      Pf = function (t, i) {
        (this.x = t), (this.y = i);
      };
    g(Pf, Cn);
    var qf = function (t) {
      return Math.sqrt(t.x * t.x + t.y * t.y);
    };
    Pf.prototype.scale = Cn.prototype.scale;
    var Df = re.ka(),
      zf = function () {
        Ir.call(this),
          (this.R = 0),
          (this.ha = new Cn(0, 0)),
          (this.w = []),
          (this.T = []),
          (this.H = []),
          (this.U = []),
          (this.W = []);
      };
    g(zf, Ir),
      (zf.prototype.update = function (t) {
        (this.R += t),
          (t = Fr(this)),
          (this.w = [new Cn(0, -t.o / t.H), this.ha]),
          (this.w = Gf(this, this.w[0], this.w[1], 3)),
          (this.T = Gf(
            this,
            this.w[parseInt(Math.random() * this.w.length * 0.2, 10)],
            null,
            2,
          )),
          (this.H = Gf(
            this,
            this.w[parseInt(Math.random() * this.w.length * 0.5, 10)],
            null,
            2,
          )),
          (this.U = Gf(this, this.H[this.H.length - 1], null, 2)),
          (this.W = Gf(this, this.H[this.H.length - 1], null, 2));
      }),
      (zf.prototype.va = function (t) {
        var i = 8 + 4 * Math.cos((3 * this.R) / 1e3);
        t.save(),
          (t.globalCompositeOperation = "overlay"),
          (t.shadowColor = "#7fa7fe"),
          Ff(t, this.w, i),
          Ff(t, this.T, 0.5 * i),
          Ff(t, this.H, 0.3 * i),
          Ff(t, this.U, 0.2 * i),
          Ff(t, this.W, 0.1 * i),
          t.restore();
      });
    var Gf = function (t, i, n, s) {
        var e = 0.5 < Math.random() ? -1 : 1;
        s = Math.pow(2, s) + 1 - 1;
        var o = [i];
        return (
          n ||
            (n = new Cn(
              i.x + (20 * Math.random() + 10) * e,
              i.y + 10 * Math.random() + 30,
            )),
          (o[s] = n),
          Bf(t, o, 0, s),
          o
        );
      },
      Bf = function (t, i, n, s) {
        if (n + 1 != s) {
          var e = Math.floor((n + s) / 2),
            o = i[n],
            h = i[s];
          (i[e] = new Cn(
            (o.x + h.x) / 2 + (20 * Math.random() - 10),
            (o.y + h.y) / 2 + (10 * Math.random() - 5),
          )),
            Bf(t, i, n, e),
            Bf(t, i, e, s);
        }
      },
      Ff = function (t, i, n) {
        for (var s = 0; s < i.length - 1; s += 1) {
          var e = i[s],
            o = i[s + 1];
          t.save(), t.translate(e.x, e.y), t.scale(0.2, 0.2);
          var h = o.x - e.x,
            e = o.y - e.y,
            o = Math.sqrt(h * h + e * e);
          t.rotate(Math.atan2(e, h) + 0.5 * Math.PI),
            t.scale(2 * n, 0.14 * o),
            Df.va(ea, t, -10, -40, 1),
            t.restore(),
            (n -= 0.5),
            (n = Math.max(0, n));
        }
        for (t.beginPath(), t.moveTo(i[0].x, i[0].y), s = 1; s < i.length; s++)
          t.lineTo(i[s].x, i[s].y);
        (t.lineWidth = n), (t.strokeStyle = "white"), t.stroke(), t.closePath();
      },
      Nf = re.ka(),
      Xf = function (t) {
        Ir.call(this), (this.w = t);
      };
    g(Xf, Ir),
      (Xf.prototype.va = function (t) {
        for (var i = this.w.length, n = -5, s = 0; i > s; s++)
          var e = Su[this.w[s]], n = n + (e[3] + 5);
        for (n = -n / 2, s = 0; i > s; s++)
          (e = Su[this.w[s]]),
            Nf.va(e, t, Math.floor(n), Math.floor(-e[4] / 2)),
            (n += e[3] + 5);
      });
    var _f = Au.ka(),
      jf = function (t, i, n, s, e, o, h) {
        Il.call(this, t, h),
          (this.ab = i),
          (this.Ma = new zf()),
          (this.Ma.o = !1),
          $r(this, this.Ma),
          (this.w = n),
          (this.W = 320 > s),
          (this.tb = new Xf(n)),
          qr(this.tb, this.W ? -7 : 7, o),
          (this.tb.s = 1),
          $r(this, this.tb),
          (this.H = 0),
          (this.Aa = Ul(t[2])),
          (this.U = Ul(t[3])),
          (this.Gc = Ul(t[5])),
          qr(this, s, e),
          (this.s = e + this.R.Ca[4] / 2),
          (this.wa = 0.8),
          hl(this, new kc(this, 0.8, 5)),
          _f.o.push(this);
      };
    g(jf, Il);
    var Yf = Al([[2, 1957, 236, 83, 105]], 83, 0, 0),
      Jf = Al(
        [
          [2, 1701, 522, 109, 91],
          [2, 1173, 538, 109, 91],
          [2, 1285, 538, 109, 91],
          [2, 1397, 543, 109, 91],
          [2, 1509, 543, 109, 91],
          [2, 1509, 543, 109, 91],
          [2, 1509, 543, 109, 91],
          [2, 1509, 543, 109, 91],
        ],
        83,
        0,
        0,
      ),
      Kf = Al(
        [
          [2, 1998, 604, 97, 112],
          [2, 1813, 614, 97, 112],
          [2, 1621, 616, 97, 112],
          [2, 1129, 632, 97, 112],
          [2, 1229, 632, 97, 112],
          [2, 2728, 633, 97, 112],
          [2, 1329, 637, 97, 112],
          [2, 1429, 637, 97, 112],
        ],
        83,
        0,
        0,
      ),
      Qf = Al(
        [
          [2, 1957, 236, 83, 105],
          [2, 1035, 312, 83, 105],
          [2, 1173, 426, 83, 105],
          [2, 1721, 616, 83, 105],
          [2, 1529, 637, 83, 105],
          [2, 196, 683, 83, 105],
          [2, 2098, 684, 83, 105],
          [2, 2184, 684, 83, 105],
          [2, 2184, 684, 83, 105],
        ],
        83,
        0,
        0,
      );
    jf.prototype.La = function (t) {
      if (t > 0) {
        this.H = t;
        var i = Dr(this),
          n = Hc(),
          s = 1 - 0.2 * Sc();
        $l(this, 1, t, Dr(this), new Pf(A(i.x, n.x, s), A(i.y, n.y, s)));
      }
    };
    var Zf = function (t) {
      (t.wa = 0), hl(t, new rl(t, 1e3, 0, 0.8));
    };
    (t = jf.prototype),
      (t.$a = function () {
        return 6 == this.state;
      }),
      (t.Db = function () {
        var t = this;
        $l(this, 4, this.Aa, null, null, function () {
          (t.wa = 0.8), hl(t, new rl(t, 500, 0.8, 0));
        }),
          $l(t, 6, 500);
      }),
      (t.Lb = function (t) {
        return this.w[0] != t ? !1 : 6 == t ? (Lu(_f, 19), !0) : this.Mb();
      }),
      (t.Mb = function () {
        var t = this.w.shift(),
          t = yu[t];
        if (this.Gb()) tw(this, t);
        else {
          Lu(_f, 11, { ab: this.ab, position: Dr(this), color: t }), this.qa(3);
          var i = this;
          hl(
            this,
            new Jr(this.U, null, function () {
              i.sc();
            }),
          ),
            this.Nb();
        }
        return !0;
      }),
      (t.sc = function () {
        this.qa(0);
      }),
      (t.Gb = function () {
        return 0 == this.w.length;
      }),
      (t.Nb = e);
    var tw = function (t, i) {
        ol(t),
          (t.T = []),
          Cu(_f, t),
          t.qa(5),
          $l(t, 6, t.Gc),
          Lu(_f, 5, { ab: t.ab, position: Dr(t), color: i }),
          ee.Ec.play();
      },
      iw = function (t) {
        (t.Ma.o = !0),
          hl(
            t,
            new Jr(500, null, function () {
              t.Ma.o = !1;
            }),
          );
      };
    (jf.prototype.update = function (t) {
      jf.Da.update.call(this, t),
        this.$a()
          ? Or(this)
          : 1 == this.state &&
            (ol(this),
            (this.T = []),
            this.qa(2),
            Lu(_f, 6),
            ee.bc.play(),
            this.Db());
    }),
      (jf.prototype.Na = function (t) {
        19 == t && this.V && this.o && !this.$a() && (iw(this), this.Mb());
      });
    var nw = function (t, i, n, s) {
        var e = z([0, Yf, 2, Qf, 3, Jf, 5, Kf, 6, [Kf[Kf.length - 1]]]);
        return new jf(e, 10, t, i, n, s || -35);
      },
      sw = function (t, i, n, s, e, o) {
        (this.ta = ["^-^|^-^|", "v-^-v-^-", "|-|--|"]),
          (n = z([5, ee.vc])),
          jf.call(this, t, i, Mu(this.ta.shift()), s, e, o, n),
          (this.Ea = s),
          (this.Fa = e);
      };
    g(sw, jf);
    var ew = Al(
        [
          [2, 1733, 262, 69, 105],
          [2, 3314, 709, 69, 105],
          [2, 3386, 709, 69, 105],
          [2, 3458, 709, 69, 105],
          [2, 3530, 709, 69, 105],
          [2, 849, 711, 69, 105],
          [2, 921, 711, 69, 105],
          [2, 1913, 715, 69, 105],
        ],
        83,
        0,
        0,
      ),
      ow = Al(
        [
          [2, 1425, 413, 135, 127],
          [2, 1563, 413, 135, 127],
          [2, 1035, 426, 135, 127],
          [2, 2104, 431, 135, 127],
          [2, 2242, 431, 135, 127],
          [2, 2380, 431, 135, 127],
          [2, 2380, 431, 135, 127],
        ],
        83,
        0,
        0,
      ),
      hw = Al(
        [
          [2, 3517, 369, 97, 120],
          [2, 3517, 369, 97, 120],
          [2, 1998, 481, 97, 120],
          [2, 220, 560, 97, 120],
          [2, 2098, 561, 97, 120],
          [2, 2198, 561, 97, 120],
          [2, 2298, 561, 97, 120],
          [2, 2398, 561, 97, 120],
          [2, 320, 566, 97, 120],
          [2, 420, 566, 97, 120],
          [2, 520, 566, 97, 120],
          [2, 620, 576, 97, 120],
          [2, 620, 576, 97, 120],
          [2, 620, 576, 97, 120],
          [2, 620, 576, 97, 120],
          [2, 620, 576, 97, 120],
          [2, 620, 576, 97, 120],
          [2, 620, 576, 97, 120],
          [2, 620, 576, 97, 120],
          [2, 720, 576, 97, 120],
          [2, 820, 576, 97, 120],
          [2, 2628, 580, 97, 120],
          [2, 2894, 586, 97, 120],
          [2, 2994, 586, 97, 120],
          [2, 3094, 586, 97, 120],
          [2, 3194, 586, 97, 120],
          [2, 3294, 586, 97, 120],
          [2, 3394, 586, 97, 120],
          [2, 3494, 586, 97, 120],
        ],
        83,
        0,
        0,
      ),
      aw = Al(
        [
          [2, 920, 576, 95, 132],
          [2, 920, 576, 95, 132],
          [2, 2498, 663, 95, 132],
          [2, 1018, 665, 95, 132],
          [2, 0, 669, 95, 132],
          [2, 98, 669, 95, 132],
          [2, 98, 669, 95, 132],
        ],
        83,
        0,
        0,
      ),
      rw = El(
        [
          [3, 180, 186, 67, 109],
          [3, 250, 186, 67, 109],
          [3, 320, 186, 67, 109],
          [3, 390, 186, 67, 109],
        ],
        83,
        0,
        0,
      );
    (sw.prototype.Db = function () {
      var t = this;
      $l(this, 9, this.Aa),
        $l(this, 0, this.U, Dr(this), new Cn(this.Ea, this.Fa), function () {
          t.La(t.H);
        });
    }),
      (sw.prototype.Gb = function () {
        return 0 == this.w.length && 0 == this.ta.length;
      }),
      (sw.prototype.Nb = function () {
        if (0 == this.w.length) {
          ol(this);
          var t = this.ta.shift();
          t || tw(this, 0);
          var i = this;
          $l(this, 0, this.U, Dr(this), new Cn(this.Ea, this.Fa), function () {
            U(i.w, Mu(t)), (i.H *= 0.5), i.La(i.H);
          });
        }
      });
    var lw = function (t, i, n, s, e, o, h, a) {
      (s = z([5, ee.wc])),
        jf.call(this, i, n, [], e, o, h, s),
        (this.lb = Ul(i[7])),
        (this.Sb = t),
        (this.Ea = 0),
        (this.kb = ["--^--", "||v||", "|-^-|"]),
        (this.mb = [
          [ku(-30, 295, 8, "---"), ku(20, 140, 8, "|||")],
          [ku(-30, 295, 8, "-|-"), ku(20, 140, 8, "|-|"), ku(30, 295, 9, "^")],
          [ku(-20, 295, 8, "^v"), ku(20, 295, 8, "v-"), ku(30, 295, 9, "-|")],
        ]),
        (this.ta = []),
        (this.Hc = e),
        (this.Jc = o),
        (this.Ia = a),
        (this.Fa = 1200);
    };
    g(lw, jf);
    var uw = Al(
        [
          [6, 1600, 253, 197, 124],
          [6, 1800, 253, 197, 124],
          [6, 2e3, 253, 197, 124],
          [6, 2200, 253, 197, 124],
          [6, 2400, 253, 197, 124],
          [6, 2600, 253, 197, 124],
          [6, 2800, 253, 197, 124],
          [6, 3e3, 253, 197, 124],
          [6, 3200, 253, 197, 124],
        ],
        83,
        0,
        0,
      ),
      cw = Al(
        [
          [6, 0, 231, 197, 124],
          [6, 200, 235, 197, 124],
          [6, 400, 253, 197, 124],
          [6, 600, 253, 197, 124],
          [6, 800, 253, 197, 124],
          [6, 1e3, 253, 197, 124],
          [6, 1200, 253, 197, 124],
          [6, 1400, 253, 197, 124],
          [6, 1400, 253, 197, 124],
        ],
        83,
        0,
        0,
      ),
      fw = Al(
        [
          [6, 1400, 126, 197, 124],
          [6, 1600, 126, 197, 124],
          [6, 1800, 126, 197, 124],
          [6, 2e3, 126, 197, 124],
          [6, 2200, 126, 197, 124],
          [6, 2400, 126, 197, 124],
          [6, 2600, 126, 197, 124],
          [6, 2800, 126, 197, 124],
          [6, 3e3, 126, 197, 124],
          [6, 3200, 126, 197, 124],
          [6, 3400, 126, 197, 124],
          [6, 3400, 126, 197, 124],
          [6, 3400, 126, 197, 124],
          [6, 3400, 126, 197, 124],
          [6, 3600, 126, 197, 124],
          [6, 3800, 126, 197, 124],
          [6, 4e3, 126, 197, 124],
          [6, 4200, 126, 197, 124],
          [6, 4200, 126, 197, 124],
          [6, 4200, 126, 197, 124],
          [6, 4200, 126, 197, 124],
          [6, 4200, 126, 197, 124],
          [6, 4400, 126, 197, 124],
          [6, 4600, 126, 197, 124],
          [6, 4800, 126, 197, 124],
          [6, 5e3, 126, 197, 124],
          [6, 5200, 126, 197, 124],
          [6, 5400, 126, 197, 124],
          [6, 5600, 127, 197, 124],
        ],
        83,
        0,
        0,
      ),
      ww = Al(
        [
          [6, 5732, 0, 197, 124],
          [6, 0, 104, 197, 124],
          [6, 200, 108, 197, 124],
          [6, 400, 126, 197, 124],
          [6, 600, 126, 197, 124],
          [6, 800, 126, 197, 124],
          [6, 1e3, 126, 197, 124],
          [6, 1200, 126, 197, 124],
          [6, 1200, 126, 197, 124],
          [6, 1200, 126, 197, 124],
        ],
        83,
        0,
        0,
      ),
      pw = Al(
        [
          [6, 3400, 253, 197, 124],
          [6, 3600, 253, 197, 124],
          [6, 3800, 253, 197, 124],
          [6, 4e3, 253, 197, 124],
          [6, 4200, 253, 197, 124],
          [6, 4400, 253, 197, 124],
          [6, 4600, 253, 197, 124],
          [6, 4800, 253, 197, 124],
        ],
        83,
        0,
        0,
      ),
      vw = El(
        [
          [6, 5e3, 253, 197, 124],
          [6, 5200, 253, 197, 124],
          [6, 5400, 253, 197, 124],
          [6, 5600, 254, 197, 124],
          [6, 5600, 254, 197, 124],
        ],
        83,
        0,
        0,
      );
    (t = lw.prototype),
      (t.La = function (t) {
        (this.Ia = t), lw.Da.La.call(this, t);
      }),
      (t.Db = function () {
        var t = this;
        $l(this, 9, this.Aa),
          $l(this, 0, this.U, Dr(this), new Cn(this.Hc, this.Jc), function () {
            t.La(t.H);
          });
      }),
      (t.update = function (t) {
        lw.Da.update.call(this, t);
        for (var i = this.ta.length - 1; i >= 0; i--)
          this.ta[i].$a() && this.ta.splice(i, 1);
        if (
          (0 < this.Fa && (this.Fa -= t),
          0 == this.state && (this.Ia -= t),
          8 == this.state && 0 == this.ta.length)
        )
          this.qa(0),
            (this.Ea = 0),
            (t = this.kb.shift()) || tw(this, 0),
            U(this.w, Mu(t)),
            this.La(this.Ia);
        else if (0 == this.state && 0 == this.w.length && 0 >= this.Fa) {
          ol(this), this.qa(7), (this.Ea = 7);
          var n = this;
          $l(this, 8, this.lb, null, null, function () {
            n.Ea = 8;
            var t = n.mb.shift();
            t && ((t = qw(n.Sb, t)), U(n.ta, t));
          });
        }
      }),
      (t.sc = function () {
        this.qa(this.Ea);
      }),
      (t.Gb = function () {
        return 0 == this.w.length && 0 == this.kb.length;
      }),
      (t.Na = function (t, i) {
        if ((lw.Da.Na.call(this, t, i), 6 == t && 2 != this.state)) {
          var n = this.state;
          $l(this, 9, 0), $l(this, n, this.U);
        }
      });
    var dw = function (t, i, n, s, e, o) {
      (n = z([5, ee.xc])),
        jf.call(this, t, i, [], s, e, o, n),
        (this.ta = ["-^v", "v|-", "-^v", "-|v", "|^|"]),
        (this.Ea = s),
        (this.Fa = e);
      var h = this;
      $l(this, 0, 2e3, null, null, function () {
        Hw(h);
      });
    };
    g(dw, jf);
    var gw = Al(
        [
          [8, 1253, 423, 176, 138],
          [8, 1432, 423, 176, 138],
          [8, 1611, 423, 176, 138],
          [8, 1790, 423, 176, 138],
          [8, 1969, 423, 176, 138],
          [8, 2148, 423, 176, 138],
          [8, 0, 564, 176, 138],
          [8, 179, 564, 176, 138],
          [8, 358, 564, 176, 138],
          [8, 537, 564, 176, 138],
          [8, 716, 564, 176, 138],
          [8, 895, 564, 176, 138],
          [8, 1074, 564, 176, 138],
          [8, 1253, 564, 176, 138],
        ],
        83,
        0,
        0,
      ),
      yw = Al(
        [
          [8, 0, 423, 176, 138],
          [8, 179, 423, 176, 138],
          [8, 358, 423, 176, 138],
          [8, 537, 423, 176, 138],
          [8, 716, 423, 176, 138],
          [8, 895, 423, 176, 138],
          [8, 1074, 423, 176, 138],
          [8, 1074, 423, 176, 138],
        ],
        83,
        0,
        0,
      ),
      mw = Al(
        [
          [8, 179, 141, 176, 138],
          [8, 358, 141, 176, 138],
          [8, 537, 141, 176, 138],
          [8, 716, 141, 176, 138],
          [8, 895, 141, 176, 138],
          [8, 1074, 141, 176, 138],
          [8, 1253, 141, 176, 138],
          [8, 1432, 141, 176, 138],
          [8, 1611, 141, 176, 138],
          [8, 1790, 141, 176, 138],
          [8, 1969, 141, 176, 138],
          [8, 2148, 141, 176, 138],
          [8, 0, 282, 176, 138],
          [8, 179, 282, 176, 138],
          [8, 358, 282, 176, 138],
          [8, 358, 282, 176, 138],
          [8, 358, 282, 176, 138],
          [8, 358, 282, 176, 138],
          [8, 358, 282, 176, 138],
          [8, 358, 282, 176, 138],
          [8, 358, 282, 176, 138],
          [8, 537, 282, 176, 138],
          [8, 716, 282, 176, 138],
          [8, 895, 282, 176, 138],
          [8, 1074, 282, 176, 138],
          [8, 1253, 282, 176, 138],
          [8, 1432, 282, 176, 138],
          [8, 1611, 282, 176, 138],
          [8, 1790, 282, 176, 138],
          [8, 1969, 282, 176, 138],
          [8, 2148, 282, 176, 138],
        ],
        83,
        0,
        0,
      ),
      bw = Al(
        [
          [8, 0, 0, 176, 138],
          [8, 179, 0, 176, 138],
          [8, 358, 0, 176, 138],
          [8, 537, 0, 176, 138],
          [8, 716, 0, 176, 138],
          [8, 895, 0, 176, 138],
          [8, 1074, 0, 176, 138],
          [8, 1253, 0, 176, 138],
          [8, 1432, 0, 176, 138],
          [8, 1611, 0, 176, 138],
          [8, 1790, 0, 176, 138],
          [8, 1969, 0, 176, 138],
          [8, 2148, 0, 176, 138],
          [8, 0, 141, 176, 138],
        ],
        83,
        0,
        0,
      ),
      Sw = El(
        [
          [8, 1432, 564, 176, 138],
          [8, 1611, 564, 176, 138],
          [8, 1790, 564, 176, 138],
          [8, 1969, 564, 176, 138],
        ],
        83,
        0,
        0,
      );
    (dw.prototype.Db = function () {
      var t = this;
      $l(this, 9, this.Aa),
        $l(this, 0, this.U, Dr(this), new Cn(this.Ea, this.Fa), function () {
          t.La(t.H);
        });
    }),
      (dw.prototype.Gb = function () {
        return 0 == this.w.length && 0 == this.ta.length;
      }),
      (dw.prototype.Nb = function () {
        if (0 == this.w.length) {
          ol(this), $l(this, 0, this.U, Dr(this), new Cn(this.Ea, this.Fa));
          var t = this;
          $l(this, 0, this.U + 1e3, null, null, function () {
            Hw(t);
          });
        }
      });
    var Hw = function (t) {
        var i = t.ta.shift();
        i || tw(t, 0), U(t.w, Mu(i)), (t.H *= 0.8), t.La(t.H);
      },
      Tw = function (t, i, n, s, e, o, h) {
        (this.Fa = ["^^vv^^vv", "||-||-v-", "--^-|--v"]),
          (s = z([5, ee.yc])),
          jf.call(this, i, n, Mu(this.Fa.shift()), e, o, h, s),
          (this.Sb = t),
          (this.kb = [
            [ku(200, 295, 999, "-")],
            [ku(160, 295, 999, "|")],
            [ku(200, 295, 999, "^")],
            [ku(200, 295, 999, "v")],
            [ku(160, 295, 999, "--")],
            [ku(200, 295, 999, "-|")],
            [ku(160, 295, 999, "-v")],
            [ku(200, 295, 999, "-^")],
            [ku(160, 295, 999, "|-")],
            [ku(200, 295, 999, "||")],
            [ku(160, 295, 999, "|v")],
            [ku(200, 295, 999, "|^")],
            [ku(160, 295, 999, "v-")],
            [ku(200, 295, 999, "v|")],
            [ku(160, 295, 999, "^-")],
            [ku(200, 295, 999, "^|")],
            [ku(160, 295, 999, "-"), ku(200, 295, 999, "-")],
            [ku(160, 295, 999, "-"), ku(200, 295, 999, "|")],
            [ku(160, 295, 999, "-"), ku(200, 295, 999, "v")],
            [ku(160, 295, 999, "-"), ku(200, 295, 999, "^")],
            [ku(160, 295, 999, "|"), ku(200, 295, 999, "-")],
            [ku(160, 295, 999, "|"), ku(200, 295, 999, "|")],
            [ku(160, 295, 999, "|"), ku(200, 295, 999, "v")],
            [ku(160, 295, 999, "|"), ku(200, 295, 999, "^")],
            [ku(160, 295, 999, "v"), ku(200, 295, 999, "-")],
            [ku(160, 295, 999, "v"), ku(200, 295, 999, "|")],
            [ku(160, 295, 999, "^"), ku(200, 295, 999, "-")],
            [ku(160, 295, 999, "^"), ku(200, 295, 999, "|")],
          ]),
          (this.Ia = 2500),
          (this.ta = []),
          (this.lb = e),
          (this.mb = o),
          (this.Ea = 1e3);
      };
    g(Tw, jf);
    var Rw = Al(
        [
          [10, 2691, 198, 204, 195],
          [10, 2898, 198, 204, 195],
          [10, 3105, 198, 204, 195],
          [10, 3312, 198, 204, 195],
          [10, 3519, 198, 204, 195],
          [10, 3726, 198, 204, 195],
          [10, 3933, 198, 204, 195],
        ],
        83,
        0,
        0,
      ),
      xw = Al(
        [
          [10, 1449, 198, 204, 195],
          [10, 1656, 198, 204, 195],
          [10, 1863, 198, 204, 195],
          [10, 2070, 198, 204, 195],
          [10, 2277, 198, 204, 195],
          [10, 2484, 198, 204, 195],
          [10, 2484, 198, 204, 195],
        ],
        83,
        0,
        0,
      ),
      kw = Al(
        [
          [10, 1242, 0, 204, 195],
          [10, 1449, 0, 204, 195],
          [10, 1656, 0, 204, 195],
          [10, 1449, 0, 204, 195],
          [10, 1863, 0, 204, 195],
          [10, 2070, 0, 204, 195],
          [10, 2277, 0, 204, 195],
          [10, 2484, 0, 204, 195],
          [10, 2691, 0, 204, 195],
          [10, 2484, 0, 204, 195],
          [10, 2898, 0, 204, 195],
          [10, 3105, 0, 204, 195],
          [10, 3312, 0, 204, 195],
          [10, 3519, 0, 204, 195],
          [10, 3726, 0, 204, 195],
          [10, 3933, 0, 204, 195],
          [10, 3933, 0, 204, 195],
          [10, 3933, 0, 204, 195],
          [10, 3933, 0, 204, 195],
          [10, 3933, 0, 204, 195],
          [10, 3933, 0, 204, 195],
          [10, 3933, 0, 204, 195],
          [10, 3933, 0, 204, 195],
          [10, 4140, 0, 204, 195],
          [10, 4347, 0, 204, 195],
          [10, 4554, 0, 204, 195],
          [10, 4554, 0, 204, 195],
          [10, 4554, 0, 204, 195],
          [10, 4554, 0, 204, 195],
          [10, 4554, 0, 204, 195],
          [10, 4554, 0, 204, 195],
          [10, 4554, 0, 204, 195],
          [10, 4554, 0, 204, 195],
          [10, 4554, 0, 204, 195],
          [10, 4761, 0, 204, 195],
          [10, 4968, 0, 204, 195],
          [10, 5175, 0, 204, 195],
          [10, 5382, 0, 204, 195],
          [10, 0, 198, 204, 195],
          [10, 207, 198, 204, 195],
          [10, 207, 198, 204, 195],
          [10, 207, 198, 204, 195],
          [10, 207, 198, 204, 195],
          [10, 207, 198, 204, 195],
          [10, 207, 198, 204, 195],
          [10, 207, 198, 204, 195],
          [10, 207, 198, 204, 195],
          [10, 414, 198, 204, 195],
          [10, 621, 198, 204, 195],
          [10, 828, 198, 204, 195],
          [10, 1035, 198, 204, 195],
          [10, 1242, 198, 204, 195],
        ],
        83,
        0,
        0,
      ),
      Mw = Al(
        [
          [10, 0, 0, 204, 195],
          [10, 207, 0, 204, 195],
          [10, 414, 0, 204, 195],
          [10, 621, 0, 204, 195],
          [10, 828, 0, 204, 195],
          [10, 1035, 0, 204, 195],
          [10, 1035, 0, 204, 195],
        ],
        83,
        0,
        0,
      ),
      Uw = El(
        [
          [10, 4140, 198, 204, 195],
          [10, 4347, 198, 204, 195],
          [10, 4554, 198, 204, 195],
          [10, 4761, 198, 204, 195],
          [10, 4968, 198, 204, 195],
          [10, 5175, 198, 204, 195],
          [10, 5175, 198, 204, 195],
          [10, 5175, 198, 204, 195],
          [10, 5175, 198, 204, 195],
        ],
        83,
        0,
        0,
      ),
      Ew = 83 * Uw.length;
    (Tw.prototype.Db = function () {
      var t = this;
      $l(this, 9, this.Aa),
        $l(this, 0, Ew, Dr(this), new Cn(this.lb, this.mb), function () {
          t.La(t.H);
        });
    }),
      (Tw.prototype.update = function (t) {
        Tw.Da.update.call(this, t);
        for (var i = this.ta.length - 1; i >= 0; i--)
          this.ta[i].$a() && this.ta.splice(i, 1);
        if (0 == this.state && 0 == this.ta.length)
          if (0 < this.Ea) this.Ea -= t;
          else {
            for (
              t = this.kb[Math.floor(Math.random() * this.kb.length)], i = 0;
              i < t.length;
              i++
            )
              t[i].s = this.Ia;
            (t = qw(this.Sb, t)), U(this.ta, t), (this.Ea = 500);
          }
      }),
      (Tw.prototype.Gb = function () {
        return 0 == this.w.length && 0 == this.Fa.length;
      }),
      (Tw.prototype.Nb = function () {
        if (0 == this.w.length) {
          ol(this);
          var t = this.Fa.shift();
          t || tw(this, 0);
          var i = this;
          $l(this, 0, this.U, Dr(this), new Cn(this.lb, this.mb), function () {
            U(i.w, Mu(t)), (i.Ia *= 0.8), i.La(i.H);
          });
        }
      });
    var Aw = Au.ka(),
      Lw = function (t, i) {
        var n = z([0, Cw, 2, Cw, 3, Cw, 5, Vw, 6, [Vw[Vw.length - 1]]]);
        jf.call(this, n, 20, [4], t, i, -35);
      };
    g(Lw, jf);
    var Cw = El(
        [
          [2, 2990, 709, 78, 63],
          [2, 3071, 709, 78, 63],
          [2, 3152, 709, 78, 63],
          jh,
          jh,
          jh,
          jh,
          jh,
        ],
        83,
        0,
        0,
      ),
      Vw = Al(
        [
          [2, 1337, 68, 78, 63],
          [2, 1808, 143, 78, 63],
          [2, 2104, 350, 78, 63],
          [2, 1875, 387, 78, 63],
          [2, 687, 699, 78, 63],
          [2, 768, 699, 78, 63],
          [2, 2596, 703, 78, 63],
          [2, 2828, 709, 78, 63],
          [2, 2909, 709, 78, 63],
          [2, 2909, 709, 78, 63],
          [2, 2909, 709, 78, 63],
          [2, 2909, 709, 78, 63],
        ],
        83,
        0,
        0,
      );
    Lw.prototype.Mb = function () {
      return Lu(Aw, 18), Lw.Da.Mb.call(this);
    };
    var Ww = Au.ka(),
      Iw = function (t, i) {
        Ir.call(this),
          (this.w = t),
          (this.H = null),
          (this.T = i),
          (this.R = null),
          Ww.o.push(this);
      };
    g(Iw, Ir),
      (Iw.prototype.reset = function () {
        var t = xc.Hb(this)[0];
        this.H && Or(this.H), (this.H = t), $r(this, t), (this.R = null);
      });
    var $w = function (t) {
        return new Jr(t);
      },
      Ow = function (t) {
        var i = new jr();
        return (
          (i.ub = function () {
            return t.w.$.length == (t.R && !t.R.$a() ? 1 : 0);
          }),
          i
        );
      },
      Pw = function (t, i) {
        return new Yr(function () {
          qw(t, i);
        });
      },
      qw = function (t, i) {
        for (var n = [], s = 0; s < i.length; s++) {
          var e = i[s];
          if (!(4 == e.w[0] && 5 <= t.T.w)) {
            var o;
            (o =
              0 < e.w.length && 4 == e.w[0]
                ? new Lw(e.o.x, e.o.y)
                : nw(e.w.slice(), e.o.x, e.o.y)),
              Zf(o),
              0 < e.s && o.La(e.s),
              zr(o, Sc()),
              $r(t.w, o),
              n.push(o);
          }
        }
        return n;
      },
      Dw = function (t) {
        var i = ku(5, 295, 14, "");
        return new Yr(function () {
          var n;
          n = i.o.x;
          var s = i.o.y,
            e = z([0, ew, 2, aw, 9, rw, 3, ow, 5, hw, 6, [hw[hw.length - 1]]]);
          (n = new sw(e, 100, 0, n, s, -60)), Zf(n), n.La(i.s), $r(t.w, n);
        });
      },
      zw = function (t) {
        var i = ku(-5, 217.5, 12, "");
        return new Yr(function () {
          var n;
          n = i.o.x;
          var s = i.o.y,
            e = i.s,
            o = z([
              0,
              uw,
              8,
              uw,
              7,
              pw,
              2,
              ww,
              9,
              vw,
              3,
              cw,
              5,
              fw,
              6,
              [fw[fw.length - 1]],
            ]);
          (n = new lw(t, o, 100, 0, n, s, -60, e)), Zf(n), $r(t.w, n);
        });
      },
      Gw = function (t) {
        var i = ku(20, 245, 3.8, "");
        return new Yr(function () {
          var n;
          n = i.o.x;
          var s = i.o.y,
            e = z([0, gw, 2, bw, 9, Sw, 3, yw, 5, mw, 6, [mw[mw.length - 1]]]);
          (n = new dw(e, 100, 0, n, s, -60)), Zf(n), n.La(i.s), $r(t.w, n);
        });
      },
      Bw = function (t) {
        var i = ku(5, 295, 12, "");
        return new Yr(function () {
          var n;
          n = i.o.x;
          var s = i.o.y,
            e = z([0, Rw, 2, Mw, 9, Uw, 3, xw, 5, kw, 6, [kw[kw.length - 1]]]);
          (n = new Tw(t, e, 100, 0, n, s, -60)), Zf(n), n.La(i.s), $r(t.w, n);
        });
      },
      Fw = function (t, i) {
        return new Yr(function () {
          var n = nw(Mu(i), 0, 0, -105),
            s = xc.Ba;
          s.w = n;
          var e = Dr(s);
          qr(s.w, e.x - 50, e.y),
            (s.w.ab = 200),
            (s.w.wa = 0),
            (s.w.s = s.s + 1),
            wc(s),
            $r(t.w, n);
        });
      },
      Nw = function (t, i) {
        for (
          var n = function (n) {
              return function () {
                if ((Or(i[n]), n < i.length - 1)) {
                  var s = i[n + 1];
                  t.H && Or(t.H), (t.H = s), $r(t, s);
                } else Lu(Ww, 1);
              };
            },
            s = 0;
          s < i.length;
          s++
        )
          i[s].wb = n(s);
      };
    Iw.prototype.Na = function (t) {
      20 != t ||
        (this.R && !this.R.$a()) ||
        ((t = Eu(190, 295)),
        (t = new Lw(t.x, t.y)),
        Zf(t),
        zr(t, Sc()),
        $r(this.w, t),
        (this.R = t));
    };
    var Xw = Au.ka(),
      _w = bl.ka(),
      jw = function (t, i) {
        (this.o = t),
          (this.T = i),
          (this.S = new Ir()),
          (this.R = new Iw(this.S, this.o)),
          (this.$ = new Lf(this.o)),
          (this.H = new If()),
          (this.H.o = !1),
          (this.s = new Ir()),
          (this.s.o = !1),
          (this.V = 0),
          Xw.o.push(this),
          $r(this.s, this.o),
          $r(this.s, this.S),
          $r(this.s, this.R),
          $r(this.s, this.H),
          (this.$.s = 462),
          $r(this.s, this.$);
      };
    g(jw, Tl),
      (jw.prototype.Na = function (t, i) {
        switch (t) {
          case 4:
            if (!this.s.o) break;
            if (!tf(this.o, i)) break;
            for (var n, s = this.S.$, e = !1, o = 0; (n = s[o++]); )
              n.$a() || (e = n.Lb(i) || e);
            e || Lu(Xw, 17), Ru[i] ? Ru[i].play() : this.H.ma.play();
            break;
          case 7: // TODO: pointer down
          case 9: // TODO: poniter move
            if (!this.s.o) break;
            ef(this.o);
            break;
          case 8:
            if (!this.s.o) break;
            of(this.o);
            break;
          case 1: // TODO: level complete
            ol(this.o), Lu(Xw, 13), (this.V = 1);
            break;
          case 0:
            Up(this.T), (this.R.o = !1);
            break;
          case 16: // TODO: game over
            this.V = 7;
            break;
          case 15:
            Or(this.s), this.o.reset(), (s = this.H), Of(s, 0), (s.ya = 0);
            break;
          case 14:
            nf(this.o), (s = this.H), Of(s, s.ya), Yw(this);
        }
      });
    var Yw = function (t) {
      Zc(t.o), Pr(t.S), t.R.reset();
    };
    (jw.prototype.Ja = function () {
      (this.s.o = !0),
        (this.V = 0),
        $r(this.s, this.o),
        ol(this.o),
        qr(this.o, Hc()),
        Zc(this.o),
        (this.o.s = 180 + this.o.R.Ca[4] / 2),
        zr(this.o, Sc()),
        (this.H.o = !0),
        (this.R.o = !0),
        xc.Ba && $r(this.s, xc.Ba),
        xc.uc && hf(this.o),
        $r(_w.o, this.s),
        Mp(this.T);
    }),
      (jw.prototype.Ka = function () {
        (this.s.o = !1),
          (this.H.o = !1),
          xc.Ba && (ol(xc.Ba), (xc.Ba.T = []), Or(xc.Ba)),
          af(this.o),
          Or(this.s),
          Up(this.T),
          ol(this.o),
          ee.ac.stop();
      }),
      (jw.prototype.update = function () {
        return this.V;
      });
    var Jw = function (t, i, n, s) {
      (this.o = t),
        (this.s = i),
        (this.w = Math.abs(n)),
        (this.H = s || !1),
        this.H || ((this.o += this.w), (this.s += this.w));
    };
    g(Jw, rn);
    var Kw = function (t, i, n) {
      (t.o = i), (t.s = n), t.H || ((t.o += t.w), (t.s += t.w));
    };
    (Jw.prototype.contains = function (t, i) {
      return (
        Math.sqrt((this.o - t) * (this.o - t) + (this.s - i) * (this.s - i)) <=
        this.w
      );
    }),
      (Jw.prototype.va = function (t) {
        t.beginPath(),
          t.arc(this.o, this.s, this.w, 0, 2 * Math.PI, !0),
          t.fill(),
          t.stroke();
      });
    var Qw = function (t, i, n, s, o, h, a, r, l) {
      (o = z([0, Al([o], 0, 0, 0), 1, Al([h || o], 0, 0, 0)])),
        Il.call(this, o),
        (this.Aa = a),
        (this.w = new Jw(t, i, n, !0)),
        (this.H = s),
        (this.ta = r),
        (this.U = l || e),
        qr(this, t, i);
    };
    g(Qw, Il);
    var Zw = function (t, i, n, s, e, o) {
        var h = mp;
        o = o || 0;
        var h = R(h, function (t) {
            t: if (((t = t.Ca), r(t) && r(i) && t.length == i.length)) {
              for (var n = t.length, s = 0; n > s; s++)
                if (t[s] !== i[s]) {
                  t = !1;
                  break t;
                }
              t = !0;
            } else t = !1;
            return t;
          }) || { x: 0, y: 0 },
          a = ae(re.ka(), i) / 2;
        return new Qw(h.x + a + o, h.y + a, a, t, i, n, s, e);
      },
      tp = function (t) {
        var i = Fr(t);
        Kw(t.w, i.s, i.o),
          t.qa(0),
          t.U(!1),
          qn(t.H, t.w, function (i) {
            "mouseup" == i
              ? t.Aa()
              : "mouseover" == i
                ? (t.qa(1), t.U(!0))
                : "mouseout" == i && (t.qa(0), t.U(!1));
          }),
          Sn(t.H.o, t.w);
      },
      ip = function (t) {
        bn(t.H.o, t.w);
      },
      np = function (t, i, n, s, e, o, h) {
        var a = t.font;
        t.font = sp("", s, n);
        for (var r = ep(t, i, o); r.length > h && s > e; )
          (t.font = sp("", --s, n)), (r = ep(t, i, o));
        for (i = 0; i < r.length; i++)
          for (; t.measureText(r[i]).width > o && s > e; )
            t.font = sp("", --s, n);
        return (
          (t.font = a), { vb: r, fontFamily: n, fontSize: s, fontStyle: "" }
        );
      },
      sp = function (t, i, n) {
        return t + " " + i + "px " + n;
      },
      ep = function (t, i, n) {
        if (((i = i.match(/[^\s-]+-?/g)), !i || 1 > i.length)) return [""];
        for (var s = i[0], e = [], o = 1; o < i.length; o++) {
          var h = s + ("-" == s[s.length - 1] ? "" : " ") + i[o];
          t.measureText(h).width > n ? (e.push(s), (s = i[o])) : (s = h);
        }
        return e.push(s), e;
      },
      op = function (t, i, n, s, e, o, h, a, r, l, u, c) {
        if (
          (Ef.call(this, i, n, s, h, a, e, o),
          (this.w = np(t, i, h, a, r, l, u)),
          c)
        ) {
          t = new Ir();
          var f = this;
          (t.va = function (t) {
            t.fillStyle = "#000";
            var i = f.w;
            t.font = sp(i.fontStyle, i.fontSize, i.fontFamily);
            for (var n = 0, s = 0; s < i.vb.length; s++)
              n = Math.max(n, t.measureText(i.vb[s]).width);
            var e = n + 40,
              s = f.w.vb.length * a + 20,
              i = -s / 2,
              n = -e / 2,
              e = e / 2,
              s = s / 2;
            t.beginPath(),
              t.moveTo(n + 20, i),
              t.lineTo(e - 20, i),
              t.quadraticCurveTo(e, i, e, i + 20),
              t.lineTo(e, s - 20),
              t.quadraticCurveTo(e, s, e - 20, s),
              t.lineTo(n + 20, s),
              t.quadraticCurveTo(n, s, n, s - 20),
              t.lineTo(n, i + 20),
              t.quadraticCurveTo(n, i, n + 20, i),
              t.fill();
          }),
            (t.wa = 0.7),
            (t.s = -1),
            qr(t, 0, -5),
            $r(this, t);
        }
      };
    g(op, Ef),
      (op.prototype.va = function (t) {
        (t.fillStyle = this.fillStyle), (t.textAlign = this.R);
        var i = this.w,
          n =
            this.w.fontSize / 4 -
            ((this.w.vb.length - 1) / 2) * this.w.fontSize,
          s = this.w.fontSize,
          e = t.font;
        t.font = sp(i.fontStyle, i.fontSize, i.fontFamily);
        for (var o = 0; o < i.vb.length; o++) t.fillText(i.vb[o], 0, n + o * s);
        t.font = e;
      });
    var hp = function (t, i) {
      (this.width = t), (this.height = i);
    };
    (hp.prototype.ceil = function () {
      return (
        (this.width = Math.ceil(this.width)),
        (this.height = Math.ceil(this.height)),
        this
      );
    }),
      (hp.prototype.floor = function () {
        return (
          (this.width = Math.floor(this.width)),
          (this.height = Math.floor(this.height)),
          this
        );
      }),
      (hp.prototype.round = function () {
        return (
          (this.width = Math.round(this.width)),
          (this.height = Math.round(this.height)),
          this
        );
      }),
      (hp.prototype.scale = function (t, i) {
        var n = u(i) ? i : t;
        return (this.width *= t), (this.height *= n), this;
      }),
      (!gi && !vi) || (vi && 9 <= Number(Ti)) || (gi && ki("1.9.1")),
      vi && ki("9");
    var ap = function (t) {
      gs.call(this),
        (this.o = t),
        Ni(t, rp, this.S, !1, this),
        Ni(t, "click", this.H, !1, this);
    };
    g(ap, gs);
    var rp = gi ? "keypress" : "keydown";
    (ap.prototype.S = function (t) {
      (13 == t.S || (yi && 3 == t.S)) && lp(this, t);
    }),
      (ap.prototype.H = function (t) {
        lp(this, t);
      });
    var lp = function (t, i) {
      var n = new cp(i);
      if (ys(t, n)) {
        n = new up(i);
        try {
          ys(t, n);
        } finally {
          i.stopPropagation();
        }
      }
    };
    ap.prototype.s = function () {
      ap.Da.s.call(this),
        Yi(this.o, rp, this.S, !1, this),
        Yi(this.o, "click", this.H, !1, this),
        delete this.o;
    };
    var up = function (t) {
      Li.call(this, t.o), (this.type = "action");
    };
    g(up, Li);
    var cp = function (t) {
      Li.call(this, t.o), (this.type = "beforeaction");
    };
    g(cp, Li);
    var fp = function (t, i, n, s, e) {
      on.call(this),
        (this.U = t),
        (this.ma = i),
        (this.ha = n),
        (this.W = s),
        e &&
          (this.w && this.unlisten(this.w, "action", this.H),
          e &&
            ((this.w = new ap(e)),
            oi(this, p(hi, this.w)),
            (this.H = w(this.S, this)),
            this.listen(this.w, "action", this.H)));
    };
    g(fp, on),
      (fp.prototype.S = function () {
        wp() && !wi("Trident") && !wi("MSIE") && window.gapi && window.gapi.load
          ? (window.gapi.load("share", w(this.T, this)), Gt("gplus,li"))
          : (window.open("https://plus.google.com/share?url=" + this.U),
            Gt("gplus,lo"));
      });
    var wp = function () {
      if (!window.gbar) return !1;
      var t = !!(window.gbar.sos && 0 < window.gbar.sos().length),
        i = !(!window.gbar.so || !window.gbar.so());
      return t || i;
    };
    fp.prototype.T = function () {
      if (window.gapi && window.gapi.share) {
        var t = {
            items: [
              {
                type: "http://schema.org/WebPage",
                id: location.protocol + "//" + location.host,
                properties: { url: [this.U], name: [this.ma], image: [this.W] },
              },
            ],
          },
          i = window.location.toString().match(/[?&]authuser=(\d+)/),
          i = i && i[1],
          n = wp() || !!window.google.doodle.sf;
        window.gapi.share.lightbox(t, {
          isLoggedInForGooglePlus: n,
          onLoginPopupBlocked: function () {
            Gt("gplus,popupblocked");
          },
          onLoginStateChanged: w(function () {
            d("google.doodle.sf", !0), this.T();
          }, this),
          editorText: this.ha,
          sessionIndex: i || "",
          sourceForLogging: "doodle",
        });
      }
    };
    var pp = function (t) {
        return 0 == t.indexOf("//") ? "https:" + t : t;
      },
      vp = function (t) {
        Gt(["share", t, "x"].join());
      },
      dp = function () {
        return Wt("shortlink", "http://www.google.com/?doodle=28464230");
      },
      gp = function (t) {
        return Ot("Share Message").replace(/\[.*\]/, "" + t);
      },
      yp = function () {
        var t = dp(),
          t = pp(t),
          i = new Y("http://www.facebook.com/sharer.php"),
          n = new at();
        lt(n, "u", t), Q(i, n), window.open(i.toString()), vp(2);
      },
      btnOffset = 42,
      mp = [
        // TODO: button positions
        { Ca: xe, x: 350 + btnOffset, y: 141 },
        { Ca: ke, x: 350 + btnOffset, y: 141 },
        { Ca: Me, x: 431 + btnOffset, y: 141 },
        { Ca: Ue, x: 431 + btnOffset, y: 141 },
        { Ca: Ee, x: 511, y: 141 },
        { Ca: Ae, x: 511, y: 141 },
        { Ca: Nh, x: 0, y: 0 },
        { Ca: ba, x: 528, y: 231 },
        { Ca: Sa, x: 528, y: 231 },
        { Ca: Ha, x: 474, y: 231 },
        { Ca: Ta, x: 474, y: 231 },
        { Ca: Ra, x: 366, y: 231 },
        { Ca: xa, x: 366, y: 231 },
        { Ca: ka, x: 445, y: 231 },
        { Ca: Ma, x: 420, y: 231 },
        { Ca: Ua, x: 420, y: 231 },
      ],
      bp = Au.ka(),
      Sp = function (t, i, n) {
        (this.ya = i), (this.ma = n), (this.V = this.T = !1), (this.H = 0);
        var s = this;
        (n = i ? -40 : 0),
          (this.btnReplay = Zw(
            t,
            xe,
            ke,
            function () {
              s.T = !0;
            },
            Ot("End Screen - Replay"),
          )),
          (this.btnNewGame = Zw(
            t,
            Me,
            Ue,
            function () {
              s.V = !0;
            },
            Ot("End Screen - New Game"),
            n,
          )),
          (this.btnSearch = Zw(t, Ee, Ae, Vt, Ot("Search - Icon"), n)),
          (this.btnShareGooglePlus = Zw(
            t,
            Ra,
            xa,
            function () {
              var t = dp(),
                i = gp(s.H),
                t = pp(t);
              new fp(
                t,
                window.google.doodle.alt || "",
                i,
                "https://www.google.com/logos/2016/halloween16/share.png",
              ).S();
            },
            Ot("Share - G+"),
          )),
          (this.btnShareTweet = Zw(
            t,
            Ma,
            Ua,
            function () {
              var t = dp(),
                i = gp(s.H),
                t = pp(t);
              window.open(
                "http://twitter.com/intent/tweet?status=" +
                  encodeURIComponent(String(i + "\n" + t)),
              ),
                vp(3);
            },
            Ot("Share - Twitter"),
          )),
          (this.btnShareFacebook = Zw(t, Ha, Ta, yp, Ot("Share - Facebook"))),
          (this.btnShareEmail = Zw(
            t,
            ba,
            Sa,
            function () {
              var t = s.H;
              vp(5);
              var i,
                n = window.location,
                e = dp(),
                t = gp(t),
                e = pp(e),
                t = { subject: It, body: t + "\n" + e },
                e = new at();
              for (i in t) lt(e, i, t[i]);
              (i = new Y("mailto:")), Q(i, e), (n.href = i.toString());
            },
            Ot("Share - E-mail"),
          )),
          (this.btnShare = Zw(
            t,
            ka,
            ka,
            function () {
              // TODO: on share button click
            },
            Ot("Share"),
          )),
          (this.o = [this.btnNewGame /*, this.btnSearch */]),
          i || this.o.push(this.btnReplay),
          si(),
          // TODO: uncomment to show share buttons
          // wt.Sa
          //   ? this.o.push(this.btnShare)
          //   : (this.o = this.o.concat([this.btnShareGooglePlus, this.btnShareTweet, this.btnShareFacebook, this.btnShareEmail])),
          (this.s = new Ir()),
          (this.s.s = 461),
          (t = new Ml(i ? Nh : Fh)),
          qr(t, 320, 180),
          $r(this.s, t),
          (this.S = new Ir()),
          $r(this.s, this.S),
          zr(this.S, 0.9),
          qr(this.S, 46, 45),
          S(this.o, function (t) {
            $r(s.S, t);
          }),
          (this.R = null),
          (this.$ = new Ef(
            "0",
            466,
            150,
            "'Itim', sans-serif",
            40,
            "white",
            "center",
          )),
          $r(this.s, this.$),
          bp.o.push(this);
      };
    g(Sp, Tl),
      (Sp.prototype.Ja = function () {
        (this.V = this.T = !1),
          this.R ||
            ((this.R = new op(
              this.ma,
              Ot("Happy Halloween!"),
              466,
              85,
              "white",
              "center",
              "'Itim', sans-serif",
              36,
              20,
              244,
              1,
              !1,
            )),
            $r(this.s, this.R)),
          $r(bl.ka().o, this.s),
          S(this.o, function (t) {
            tp(t);
          }),
          this.ya || (Tc().stop(), ee.$b.play());
      }),
      (Sp.prototype.Ka = function () {
        Or(this.s),
          ee.Qb.stop(),
          ee.$b.stop(),
          S(this.o, function (t) {
            ip(t);
          });
      }),
      (Sp.prototype.update = function () {
        return this.T ? (Lu(bp, 14), xc.state) : this.V ? (Lu(bp, 15), 13) : 0;
      }),
      (Sp.prototype.Na = function (t, i) {
        2 == t && ((this.H = i), (this.$.H = "" + this.H));
      });
    var Hp = re.ka(),
      Tp = function () {
        (this.H = 0), Rp(this, 0, 0);
      },
      Rp = function (t, i, n) {
        (t.w = i),
          (t.o = n),
          (t.V = 0.8 * Math.random()),
          (t.T = 0.5 * Math.random() + 0.9),
          (t.s = Math.random() + 2),
          (t.S = -0.2),
          (t.R = 2 * Math.random() * Math.PI);
      };
    (Tp.prototype.update = function (t, i, n) {
      (this.$ = i),
        (this.U = n),
        (this.H = t),
        (this.w += Math.cos(this.R) * this.T),
        (this.o += Math.sin(this.R) * this.T),
        (this.o += this.S),
        (this.s -= 0.05),
        (this.S += 0.04),
        2 >= this.s && Rp(this, this.$, this.U);
    }),
      (Tp.prototype.va = function (t) {
        t.save(), (t.globalAlpha = 0.2 * Math.sin(this.s) * this.s);
        var i = this.H * (0.5 - 2 * this.V + 0.2 * this.H);
        Hp.va(Yh, t, this.w - 4, this.o - 4, 0.1 * i, !0),
          (t.globalAlpha = 0.5 * this.s + 0.2 * this.H),
          (i = Math.sin(this.w) + 0.15 * this.V + 0.2 * this.H),
          Hp.va(da, t, this.w - 4, this.o - 4, 0.3 * i, !0),
          t.restore();
      });
    var xp = Au.ka(),
      kp = function (t) {
        if (
          (Ir.call(this),
          (this.w = []),
          (this.tb = []),
          (this.hb = []),
          (this.lb = this.mb = this.Ma = 0),
          (this.U = new Cn(0, 0)),
          (this.T = new Cn(0, 0)),
          (this.ma = new Cn(0, 0)),
          (this.ya = new Cn(0, 0)),
          (this.Fa = new Cn(0, 0)),
          (this.W = new Cn(0, 0)),
          Ep(this),
          (this.kb = t),
          (this.Aa = []),
          Lp)
        )
          for (t = 0; 100 > t; t++) this.Aa.push(new Tp());
        (this.Ia = !1),
          (this.R = this.H = this.Ea = this.ta = this.Oa = this.ra = 0);
      };
    g(kp, Ir);
    var Mp = function (t) {
        t.Ia ||
          (qn(t.kb, yn, function (i, n, s) {
            t.handleEvent(i, n, s);
          }),
          (t.Ia = !0));
      },
      Up = function (t) {
        t.Ia && (bn(t.kb.o, yn), (t.Ia = !1), (t.ha = !1), Ep(t));
      },
      Ep = function (t) {
        (t.w = []),
          (t.hb = []),
          (t.Ma = 0),
          (t.U.x = 640),
          (t.U.y = 360),
          (t.T.x = 0),
          (t.T.y = 0),
          (t.ya.y = 360),
          (t.ma.y = 0),
          (t.ra = 0),
          (t.Oa = 0),
          (t.ta = 0),
          (t.Ea = 0),
          (t.H = 0),
          (t.R = 0);
      },
      Ap = function (t) {
        if (3 > t.Ma || 3 > t.w.length) return null;
        var i,
          n = t.T,
          s = t.U;
        i = new Pf(n.x - s.x, n.y - s.y);
        var e = qf(i),
          o = t.U.y,
          h = t.T.y,
          s = t.Fa,
          n = t.W,
          a = i.y / 3,
          r = E(e / 320, 0, 1),
          l = 10 < t.Ma / ((i.x / 2 + i.y / 2) / 2);
        if (3 < i.x / i.y) return [2, r];
        if (
          3 > t.Oa &&
          ((3 < i.y / i.x && 2 > t.ra) || (5 < i.y / i.x && 4 > t.ra))
        )
          return [0, r];
        var u = [[0], [0, 0], [0, 0, 0]];
        if (0 < i.y)
          for (var c = 0, f = t.w.length; f - 1 > c; c++)
            for (
              var w = t.hb[c], p = (t.w[c][1] - o) / i.y, v = 0;
              v < u.length;
              v++
            )
              u[v][Math.floor(E(p * (v + 1), 0, v))] += w;
        return (
          (i = qf(new Pf(n.x - s.x, n.y - s.y))),
          (c = e / 3),
          c > i && ((r = 1 - E(i / c, 0, 1)), u[1][0] > u[1][1] && !l)
            ? [4, r]
            : 3 == t.ra ||
                (u[2][1] > 0.4 * u[0][0] &&
                  ((s.y < o + a && n.y > h - a) ||
                    (n.y < o + a && s.y > h - a)))
              ? [6, r]
              : ((e /= 6),
                (r = Wn(t.ya, s)),
                (o = Vn(r)),
                (a = Wn(n, t.ya)),
                (h = Vn(a)),
                o > e &&
                h > e &&
                ((r = L(r.x, r.y)),
                (a = L(a.x, a.y)),
                (r > 270 && 90 > a) ||
                  (r > 180 && 270 > r && a > 90 && 180 > a))
                  ? ((r = E(1 - Math.abs(o - Math.min(o, h)) / o, 0, 1)),
                    [1, r])
                  : ((o = Wn(t.ma, s)),
                    (s = Vn(o)),
                    (n = Wn(n, t.ma)),
                    (t = Vn(n)),
                    s > e &&
                    t > e &&
                    ((e = L(o.x, o.y)),
                    (n = L(n.x, n.y)),
                    (90 > e && n > 270) ||
                      (e > 90 && 180 > e && n > 180 && 270 > n))
                      ? ((r = E(1 - Math.abs(s - Math.min(s, t)) / s, 0, 1)),
                        [3, r])
                      : null))
        );
      };
    kp.prototype.va = function (t) {
      t.save();
      var i = v() - this.lb,
        n = !this.ha && 500 > i;
      if (
        (this.ha || n) &&
        (n && (t.globalAlpha = 1 - i / 500), this.Fa && this.w.length)
      ) {
        for (
          (n = Ap(this))
            ? ((i = bu[n[0]]),
              (n = n[1]),
              (n = E(n, 0, 1)),
              (i =
                "rgb(" +
                [
                  Math.round(n * i[0] + (1 - n) * lu[0]),
                  Math.round(n * i[1] + (1 - n) * lu[1]),
                  Math.round(n * i[2] + (1 - n) * lu[2]),
                ].join() +
                ")"))
            : (i = "white"),
            t.strokeStyle = i,
            t.lineWidth = 10,
            t.lineCap = "round",
            t.beginPath(),
            t.moveTo(this.Fa.x, this.Fa.y),
            i = this.w.length,
            n = 0;
          i - 2 > n;
          n++
        )
          t.quadraticCurveTo(
            this.w[n][0],
            this.w[n][1],
            (this.w[n][0] + this.w[n + 1][0]) / 2,
            (this.w[n][1] + this.w[n + 1][1]) / 2,
          );
        if (
          (i > 1 &&
            t.quadraticCurveTo(
              this.w[n][0],
              this.w[n][1],
              this.w[n + 1][0],
              this.w[n + 1][1],
            ),
          t.stroke(),
          (i = this.w.length),
          i > 0 &&
            (t.beginPath(),
            t.arc(this.w[i - 1][0], this.w[i - 1][1], 10, 0, 2 * Math.PI),
            (t.fillStyle = "white"),
            t.fill(),
            Lp))
        )
          for (
            t.globalCompositeOperation = "lighter",
              n = i - 1,
              i = this.W.x - (n > 0 ? this.w[n - 1][0] : 0),
              n = this.W.y - (n > 0 ? this.w[n - 1][1] : 0),
              i = Math.sqrt(i * i + n * n),
              i = Math.min(i, 1.5),
              n = 0;
            n < this.Aa.length;
            n++
          )
            this.ha && this.Aa[n].va(t),
              this.Aa[n].update(i, this.W.x, this.W.y);
      }
      t.restore();
    };
    var Lp = !Ht,
      Cp = function (t, i, n) {
        t.ha &&
          ((t.ha = !1),
          (t.W = new Cn(i, n)),
          (t.lb = v()),
          (i = Ap(t)),
          a(i) && 0 < i.length ? ((t.mb = i[0]), Lu(xp, 4, t.mb)) : Lu(xp, 8));
      };
    kp.prototype.handleEvent = function (t, i, n) {
      switch (t) {
        case "mousemove":
          if (8 > i || 8 > n || i > 632 || n > 352) Cp(this, i, n);
          else if (this.ha) {
            if (
              (this.w.push([i, n]),
              this.tb.push(new Cn(i, n)),
              (t = this.w.length - 1),
              t > 0)
            ) {
              t = this.w[t - 1];
              var s = t[1] - n,
                e = Math.abs(s);
              0 == this.Ea && e > 3.75
                ? (this.Oa++, (this.Ea = s / e))
                : 0 > s * this.Ea
                  ? ((this.R += e),
                    15 < this.R && (this.Oa++, (this.R = 0), (this.Ea = s / e)))
                  : 0 < s * this.Ea &&
                    ((this.R -= e), -7.5 > this.R && (this.R = 0)),
                (s = t[0] - i),
                (e = Math.abs(s)),
                0 == this.ta && e > 3.75
                  ? (this.ra++, (this.ta = s / e))
                  : 0 > s * this.ta
                    ? ((this.H += e),
                      15 < this.H &&
                        (this.ra++, (this.H = 0), (this.ta = s / e)))
                    : 0 < s * this.ta &&
                      ((this.H -= e), -7.5 > this.H && (this.H = 0)),
                (t = Math.sqrt(Math.pow(i - t[0], 2) + Math.pow(n - t[1], 2))),
                this.hb.push(t),
                (this.Ma += t);
            }
            (this.U.x = Math.min(this.U.x, i)),
              (this.U.y = Math.min(this.U.y, n)),
              (this.T.x = Math.max(this.T.x, i)),
              (this.T.y = Math.max(this.T.y, n)),
              n > this.ma.y && ((this.ma.x = i), (this.ma.y = n)),
              n < this.ya.y && ((this.ya.x = i), (this.ya.y = n)),
              (this.W = new Cn(i, n)),
              Lu(xp, 9);
          }
          break;
        case "mousedown":
          for (Ep(this), t = 0; t < this.Aa.length; t++) Rp(this.Aa[t], i, n);
          (this.w = []),
            (this.tb = []),
            (this.ha = !0),
            (this.Fa = new Cn(i, n)),
            Lu(xp, 7);
          break;
        case "mouseup":
          Cp(this, i, n);
          break;
        case "mouseout":
          Cp(this, i, n);
      }
    };
    var Vp = bl.ka(),
      Wp = function (t, i) {
        (this.o = t), (this.T = this.R = 0);
        var n;
        re.ka(),
          (n = Xh[3]),
          (this.W = new Cn(-n / 2, 40)),
          (this.ma = new Cn(n / 2, 40)),
          (this.ha = new Cn(-n / 2, 120)),
          (this.ra = new Cn(n / 2, 120)),
          (this.V = i);
      };
    g(Wp, Tl);
    var Ip = z([0, 1400, 1, 900, 2, 900, 3, 1200]);
    (Wp.prototype.Ja = function () {
      (this.s = new Ir()),
        (this.s.s = 461),
        (this.H = new Ml(Xh)),
        qr(this.H, this.W),
        $r(
          this.H,
          new op(
            this.V,
            Ot("Level Start - Ready"),
            -90,
            3,
            "black",
            "left",
            "'Itim', sans-serif",
            53,
            20,
            260,
            1,
            !1,
          ),
        ),
        (this.S = new Ml(_h)),
        qr(this.S, this.ha),
        $r(
          this.S,
          new op(
            this.V,
            Ot("Level Start - Set"),
            -90,
            3,
            "black",
            "left",
            "'Itim', sans-serif",
            53,
            20,
            260,
            1,
            !1,
          ),
        ),
        (this.$ = new op(
          this.V,
          Ot("Level Start - Draw!"),
          320,
          80,
          "white",
          "center",
          "'Itim', sans-serif",
          53,
          26.5,
          640,
          1,
          !0,
        )),
        qr(this.$, 320, 80),
        (this.U = new op(
          this.V,
          xc.title,
          320,
          105,
          "white",
          "center",
          "'Itim', sans-serif",
          53,
          26.5,
          640,
          2,
          !0,
        )),
        (this.R = 0),
        $r(Vp.o, this.s),
        $r(Vp.o, this.o),
        (this.o.s = 2),
        qr(this.o, Hc()),
        zr(this.o, Sc()),
        Zc(this.o),
        xc.Ba && $r(Vp.o, xc.Ba),
        xc.uc && hf(this.o),
        $p(this, 0);
    }),
      (Wp.prototype.Ka = function () {
        Or(this.s), Or(this.o), (this.o.s = 0), af(this.o), xc.Ba && Or(xc.Ba);
      }),
      (Wp.prototype.update = function (t) {
        if (((this.R += t), this.R >= Ip[this.T])) {
          if (((this.R = 0), 3 == this.T)) return 1;
          $p(this, this.T + 1);
        }
        return 0;
      });
    var $p = function (t, i) {
        switch (i) {
          case 0:
            $r(t.s, t.U);
            break;
          case 1:
            Or(t.U), $r(t.s, t.H), el(t.H, 500, null, t.ma);
            break;
          case 2:
            $r(t.s, t.S), el(t.S, 500, null, t.ra);
            break;
          case 3:
            el(t.H, 300, null, t.W), el(t.S, 300, null, t.ha), $r(t.s, t.$);
        }
        t.T = i;
      },
      Op = re.ka(),
      Pp = bl.ka(),
      qp = function (t, i) {
        (this.w = !1),
          (this.s = new Zr()),
          (this.S = t),
          (this.ra = new Ml(ve)),
          qr(this.ra, 320, 180),
          $r(this.s, this.ra),
          $r(this.s, new eu()),
          (this.ha = new Ol(Pl, ql, Dl, zl, Gl)),
          qr(this.ha, 160, 170),
          $r(this.s, this.ha),
          (this.ma = new Ol(Bl, Bl, Fl, Nl, Xl)),
          qr(this.ma, 65, 250),
          $r(this.s, this.ma),
          (this.W = new Ol(_l, jl, Yl, Jl, Kl)),
          qr(this.W, 480, 170),
          $r(this.s, this.W),
          (this.U = new Ol(Ql, Zl, tu, iu, nu)),
          qr(this.U, 575, 230),
          $r(this.s, this.U),
          (this.R = new Zr());
        var n = new Ml(Rr);
        qr(n, Cl(n) / 2, 180);
        var s = new ml("#fff", 869, 360);
        qr(s, Cl(n) - 2, 0);
        var e = new Ml(xr);
        qr(e, Cl(n) + 865 + Cl(e) / 2, 180),
          $r(this.R, n),
          $r(this.R, s),
          $r(this.R, e),
          (this.R.s = 462),
          $r(this.s, this.R),
          (this.o = new Wu()),
          $r(this.s, this.o),
          (this.$ = new cf()),
          qr(this.$, 212, 89),
          (this.$.s = 461),
          $r(this.s, this.$),
          (this.Aa = new ml("#000", 640, 360)),
          (this.Aa.s = 461),
          $r(this.s, this.Aa);
        var o = this;
        (this.T = new Qw(
          600,
          337,
          20,
          i,
          Ea,
          null,
          function () {
            o.w = !0;
          },
          "",
          function (t) {
            this.wa = t ? 1 : 0.8;
          },
        )),
          zr(this.T, 0.5),
          (this.T.wa = 0.8),
          (this.T.s = 470),
          $r(this.s, this.T),
          (this.V = new Ml(ue)),
          (this.H = new Ml(ce)),
          $r(this.V, this.H),
          qr(this.V, 48, 337),
          (this.V.s = 470),
          zr(this.V, 0.8),
          $r(this.s, this.V);
      };
    g(qp, Tl);
    var Dp = [Op.o[he(1)], Op.o[he(20)], ee.Ib.nb];
    qp.prototype.Ja = function () {
      Ut(),
        ee.jc.nb.s(),
        tp(this.T),
        (this.T.o = !0),
        (this.H.wa = 0),
        (this.V.o = !0),
        (this.V.wa = 0.8),
        tl(this.H, new rl(this.H, 600, 0, 0.8)),
        tl(this.H, new rl(this.H, 600, 0.8, 0)),
        tl(this.H, new rl(this.H, 600, 0, 0.8)),
        tl(this.H, new rl(this.H, 600, 0.8, 0)),
        tl(this.H, new rl(this.H, 600, 0, 0.8)),
        sl(this.H, new rl(this.V, 600, 0.8, 0)),
        tl(this.H, new rl(this.H, 600, 0.8, 0)),
        Vl(this.ra, ve),
        qr(this.S, 320, 224),
        this.S.qa(17),
        $r(this.s, this.S),
        (this.U.o = !0),
        (this.W.o = !0),
        (this.ma.o = !0),
        (this.ha.o = !0),
        (this.R.o = !1),
        (this.o.o = !1),
        this.o.qa(0),
        qr(this.Aa, 640, 0),
        (this.ya = new Ml(ic)),
        qr(this.ya, -35, 60),
        this.$.qa(0),
        $l(this.$, 1, df),
        $r(Pp.o, this.s),
        nl(this.s, 0, function () {
          ee.Ib.play(0, !1);
        });
      var t = this;
      $l(this.S, 18, jc, null, null, function () {
        $l(t.ha, 1, 0), $l(t.W, 1, 83), $l(t.U, 1, 166);
      }),
        nl(this.s, 4731, function () {
          qr(t.o, 300, 125), (t.o.o = !0);
        }),
        $l(this.o, 1, nc),
        $l(this.o, 2, 498),
        $l(this.o, 3, 996),
        nl(this.o, 0, function () {
          qr(t.R, -1958, 0),
            (t.R.o = !0),
            il(t.R, 996),
            el(t.R, 1660, null, new Cn(640, 0));
        }),
        $l(this.o, 4, sc, null, null, function () {
          $r(t.o, t.ya);
        }),
        $l(this.o, 5, ec, null, null, function () {
          t.o.removeChild(t.ya);
        }),
        $l(this.o, 7, oc),
        nl(this.o, 240, function () {
          zp(t);
        }),
        Bs(mc, e);
    };
    var zp = function (t) {
      Vl(t.ra, de),
        (t.U.o = !1),
        (t.W.o = !1),
        (t.ma.o = !1),
        (t.ha.o = !1),
        $l(t.S, 19, 0),
        $l(t.$, 2, 0),
        nl(t.o, 1162, function () {
          $l(t.o, 6, 0), el(t.o, 830, null, new Cn(640 + Cl(t.o) / 2, 125));
        }),
        $l(t.S, 20, Xc),
        $l(t.S, 21, _c),
        $l(t.S, 8, Yc, null, null, function () {
          el(t.Aa, 1e3, null, new Cn(0, 0)), (t.T.o = !1), (t.V.o = !1);
        }),
        el(t.S, 1e3, new Cn(340, 224), new Cn(640 + Cl(t.S) / 2, 224)),
        nl(t.S, 1e3, function () {
          t.w = !0;
        });
    };
    qp.prototype.Ka = function () {
      Or(this.ya),
        ip(this.T),
        ol(this.s),
        ol(this.U),
        ol(this.W),
        ol(this.ma),
        ol(this.ha),
        ol(this.o),
        ol(this.R),
        ol(this.S),
        ol(this.H),
        ee.Ib.stop(),
        Or(this.s);
    };
    var Gp = Au.ka(),
      Bp = bl.ka(),
      Fp = function (t) {
        (this.w = !1),
          (this.S = new Zr()),
          (this.o = t),
          (this.s = new Ml(Ah)),
          (this.s.s = 461),
          hl(this.s, new kc(this.s, 0.5, 4)),
          $r(this.S, this.s),
          (this.V = new Ef(
            Ot("Level Complete"),
            0,
            -60,
            "'Itim', sans-serif",
            53,
            "white",
            "center",
          )),
          (this.V.wa = 0.8),
          $r(this.s, this.V),
          (this.H = new Ml(Te)),
          qr(this.H, 0, 40),
          $r(this.s, this.H),
          (this.R = 0),
          Gp.o.push(this);
      };
    g(Fp, Tl);
    var Np = [
      new Cn(-190, 40),
      new Cn(-98, 40),
      new Cn(5, 40),
      new Cn(111, 40),
      new Cn(220, 40),
    ];
    (Fp.prototype.Ja = function () {
      ee.dc.play(), qr(this.o, Hc()), $r(this.S, this.o), $r(Bp.o, this.S);
      for (var t = 0; t < this.R; t++) {
        var i = new Ml(Lh);
        qr(i, Np[t]), $r(this.H, i);
      }
      (t = new Ml(Lh)),
        qr(t, Np[this.R]),
        (t.wa = 0),
        $r(this.H, t),
        qr(this.s, 640 + Cl(this.s) / 2, 180),
        $l(this.o, 9, 500),
        nl(this.o, 0, function () {
          ee.Pc.play();
        }),
        nl(this.o, 1e3, function () {
          ee.Oc.play();
        }),
        il(this.o, Fc - 1e3),
        Tc().stop(),
        ee.dc.play(),
        tl(this.o, new Qr(this.s, 500, null, new Cn(320, 180))),
        il(this.o, 200),
        nl(this.o, 0, function () {
          ee.Ic.play();
        }),
        tl(this.o, new rl(t, 200, 0, 1));
      var n = this;
      il(this.o, 200),
        $l(this.o, 0, 0),
        il(this.o, 1e3),
        tl(this.o, new Qr(this.s, 500, null, new Cn(-Cl(this.s) / 2, 180))),
        nl(this.o, 500, function () {
          n.w = !0;
        });
    }),
      (Fp.prototype.Ka = function () {
        ol(this.o), Pr(this.H), Or(this.S);
      }),
      (Fp.prototype.Na = function (t, i) {
        12 == t && (this.R = i);
      });
    var Xp = Au.ka(),
      _p = bl.ka(),
      jp = function (t, i) {
        (this.w = !1),
          (this.s = t),
          (this.H = i),
          (this.o = new ml("black", 640, 360)),
          (this.o.s = 461);
      };
    g(jp, Tl);
    var Yp = null,
      Jp = null;
    (jp.prototype.Ja = function () {
      (xc = bc[this.s]),
        // TODO: Level start
        Bs(Rc(), e),
        Yp
          ? Vl(Yp, xc.background)
          : ((Yp = new Ml(xc.background)),
            (Yp.s = -1),
            qr(Yp, 320, 180),
            $r(_p.o, Yp)),
        qr(Yp, xc.backgroundPosition || kr),
        Jp ? Pr(Jp) : ((Jp = new Ir()), $r(_p.o, Jp));
      for (var t = xc.Bb, i = 0; i < t.length; i++) {
        var n = new Ml(t[i]);
        void 0 != t[i][0].z && (n.s = t[i][0].z), $r(Jp, n);
      }
      Yw(this.H),
        Lu(Xp, 12, this.s),
        (this.w = !0),
        $r(_p.o, this.o),
        Tc().play(0, !0);
    }),
      (jp.prototype.reset = function () {
        Jp = Yp = null;
      }),
      (jp.prototype.Ka = function () {
        Or(this.o);
      });
    var Kp = function (t) {
      Ml.call(this, t), (this.s = 462), qr(this, kr);
    };
    g(Kp, Ml);
    var Qp = function (t) {
        tl(
          t,
          new Jr(2e3, function (i) {
            Gr(t, (0.1 * 17) / i);
          }),
        ),
          nl(t, 0, function () {
            Qp(t);
          });
      },
      Zp = bl.ka(),
      tv = function (t, i) {
        (this.w = !1),
          (this.S = t),
          (this.R = i || null),
          (this.o = new Zr()),
          (this.H = new ml(iv[this.S], 640, 360)),
          (this.H.s = 461),
          $r(this.o, this.H),
          (this.s = new Kp(nv[this.S])),
          $r(this.o, this.s);
      };
    g(tv, Tl);
    var iv = z([0, "white", 1, "black"]),
      nv = z([0, [0, 83, 0, 80, 80], 1, [0, 0, 0, 80, 80]]);
    (tv.prototype.Ja = function () {
      (this.s.wa = 0),
        Br(this.s),
        Gr(this.s, -20),
        Qp(this.s),
        sv(this),
        $r(Zp.o, this.o);
    }),
      (tv.prototype.Ka = function () {
        Or(this.o), ol(this.o), ol(this.s);
      });
    var sv = function (t) {
        Bs(t.R || Rc(), function () {
          ol(t.o),
            0 < t.s.wa && tl(t.o, new rl(t.s, 200, t.s.wa, 0)),
            nl(t.o, 0, function () {
              t.w = !0;
            });
        }),
          il(t.o, 500),
          tl(t.o, new rl(t.s, 200, 0, 1));
      },
      ev = bl.ka(),
      ov = function (t) {
        (this.w = !1),
          (this.H = new Ir()),
          (this.o = t),
          (this.s = new ml("#000", 640, 360)),
          (this.s.s = 461),
          $r(this.H, this.s);
      };
    g(ov, Tl),
      (ov.prototype.Ja = function () {
        $r(this.H, this.o), $r(ev.o, this.H), qr(this.s, 0, 0);
        var t = Hc();
        qr(this.o, -Cl(this.o) / 2, t.y), zr(this.o, Sc());
        var i = this;
        tl(this.s, new Qr(this.s, 1e3, null, new Cn(-640, 0))),
          il(this.o, 200),
          sf(this.o, t, function () {
            i.w = !0;
          });
      }),
      (ov.prototype.Ka = function () {
        ol(this.o), ol(this.s), Or(this.H);
      });
    var hv = bl.ka(),
      av = function (t) {
        (this.w = !1), (this.s = new Ir()), (this.o = t);
      };
    g(av, Tl),
      (av.prototype.Ja = function () {
        $r(this.s, this.o), $r(hv.o, this.s);
        var t = Hc(),
          i = this;
        qr(this.o, t),
          zr(this.o, Sc()),
          sf(this.o, new Cn(640 + Cl(this.o) / 2, t.y), function () {
            i.w = !0;
          });
      }),
      (av.prototype.Ka = function () {
        ol(this.o), Or(this.s);
      });
    var rv = function () {
      (this.o = this.s = this.H = 0), Au.ka().o.push(this);
    };
    o(rv);
    var lv = { 0: !0, 1: !0, 5: !0, 10: !0, 11: !0, 12: !0 };
    (rv.prototype.reset = function () {
      this.o = this.s = this.H = 0;
    }),
      (rv.prototype.Na = function (t, i) {
        2 == t
          ? (this.H = i)
          : 3 == t
            ? (this.s = i)
            : 12 == t
              ? (this.o = i)
              : 15 == t && this.reset();
      }),
      (rv.prototype.log = function (t, i) {
        if (!lv[t]) {
          var n = v(),
            e = this.w ? n - this.w : 0;
          (this.w = n),
            (n = window.document),
            (n = "CSS1Compat" == n.compatMode ? n.documentElement : n.body),
            (n = new hp(n.clientWidth, n.clientHeight)),
            (n = n.width > n.height),
            Gt(
              [
                "halloween16",
                "s:" + t,
                "v:" + (s(i) ? i : "_"),
                "gs:" + this.H,
                "ls:" + this.s,
                "l:" + this.o,
                "dt:" + e,
                "t:" + (s(Ht) ? (Ht ? "1" : "0") : "_"),
                "w:" + (s(n) ? (n ? "1" : "0") : "_"),
                "o:" +
                  ("orientation" in window
                    ? parseInt(window.orientation, 10)
                    : "_"),
              ].join(),
            );
        }
      });
    var uv = rv.ka(),
      cv = function (t) {
        (this.H = t), fv(this), this.H[this.w].Ja();
      },
      fv = function (t) {
        s(t.w) && t.H[t.w] && t.H[t.w].Ka(),
          (t.R = 0),
          (!ii() || (xt() && (!yt || bt))) && (t.R = 1),
          (t.w = wv[t.R]);
      },
      wv = [
        2, 22, 3, 24, 13, 10, 4, 9, 5, 6, 19, 11, 12, 21, 14, 10, 5, 6, 19, 11,
        12, 21, 15, 10, 5, 6, 19, 11, 12, 21, 16, 10, 5, 6, 19, 11, 12, 21, 17,
        18, 5, 6, 20, 8, 23,
      ];
    cv.prototype.update = function (t) {
      if ((t = this.H[this.w].update(t))) {
        if (1 == t && this.R < wv.length - 1) t = wv[++this.R];
        else {
          var i = wv.indexOf(t);
          -1 != i && (this.R = i);
        }
        this.H[this.w].Ka(), (this.w = t), this.H[this.w].Ja(), uv.log(t);
      }
    };
    var pv = function (t, i) {
      Ir.call(this), (this.w = 0), qr(this, t, i);
    };
    g(pv, Ir),
      (pv.prototype.update = function (t) {
        this.w += t;
      }),
      (pv.prototype.va = function (t) {
        var i = Math.min(1, this.w / 1500);
        t.save(),
          (t.lineCap = "round"),
          (t.lineJoin = "round"),
          (t.lineWidth = 3),
          (t.strokeStyle = "white"),
          t.translate(-476, -163),
          ru(t, i, fu),
          t.restore();
      });
    var vv = function (t) {
      Ir.call(this),
        (this.H = this.w = 0),
        (this.T = Hu[t]),
        (this.R = yu[t]),
        (this.U = Ht ? uu : cu),
        qr(this, Tu[t].x, Tu[t].y);
    };
    g(vv, Ir),
      (vv.prototype.update = function (t) {
        (this.w += t), (this.H = jn(E((this.w % 2e3) / 1e3, 0, 1)));
      }),
      (vv.prototype.va = function (t) {
        t.save(),
          (t.lineWidth = 10),
          (t.lineCap = "round"),
          (t.lineJoin = "round"),
          (t.strokeStyle = this.R);
        var i;
        (i = ru(t, this.H, this.T)),
          (i = new Cn(Jn(i, 1), Kn(i, 1))),
          this.U(t, i.x, i.y),
          t.restore();
      });
    var dv = Au.ka(),
      gv = bl.ka(),
      yv = function (t, i, n, s, e) {
        (this.w = !1),
          (this.$ = s),
          (this.o = e),
          (this.Ba = new Zr()),
          (this.U = i),
          (this.V = []),
          (this.W = t),
          (this.H = new Ir()),
          qr(this.H, 320, 70),
          (this.H.s = 465),
          $r(this.Ba, this.H),
          (this.H.o = !1),
          $r(
            this.H,
            new op(
              this.W,
              Ot("Tutorial"),
              0,
              0,
              "white",
              "center",
              "'Itim', sans-serif",
              50,
              20,
              400,
              2,
              !0,
            ),
          ),
          (this.R = new vv(i)),
          (this.R.s = 464),
          (this.R.o = !1),
          $r(this.Ba, this.R),
          (this.s = 0);
      };
    g(yv, Tl),
      (t = yv.prototype),
      (t.Ja = function () {
        dv.o.push(this),
          qr(this.o, 320, 180),
          Zc(this.o),
          $r(this.Ba, this.o),
          (this.T = nw([this.U], 550, 198)),
          qr(this.T, 690, 180),
          (this.S = new pv(-20, -30)),
          (this.S.o = !1),
          $r(this.T, this.S),
          this.V.push(this.T),
          $r(this.Ba, this.T),
          this.S && (this.S.o = !1),
          (this.R.o = !1),
          $r(gv.o, this.Ba),
          this.qa(1),
          Mp(this.$);
      }),
      (t.Ka = function () {
        Up(this.$), ol(this.Ba), ol(this.o), Cu(dv, this);
        for (var t = 0; t < this.V.length; t++) this.Ba.removeChild(this.V[t]);
        (this.V = []), Or(this.Ba), (this.s = 0);
      }),
      (t.update = function () {
        return 6 == this.s ? 1 : 0;
      }),
      (t.Na = function (t, i) {
        switch (t) {
          case 4:
            if (i != this.U) {
              this.qa(3), of(this.o);
              break;
            }
            tf(this.o, i);
            for (var n = 0; n < this.V.length; n++) this.V[n].Lb(i);
            Ru[i] ? Ru[i].play() : ee.Tb.play(),
              this.S && this.S.o && hl(this.Ba, new rl(this.S, 200, 1, 0));
            break;
          case 5:
            var s = this;
            tl(
              this.Ba,
              new Jr(500, null, function () {
                s.qa(5);
              }),
            );
            break;
          case 8:
            (3 == this.s || 2 == this.s) && (this.qa(3), of(this.o));
            break;
          case 7:
            (3 == this.s || 2 == this.s) && (this.qa(4), ef(this.o));
            break;
          case 9:
            (3 != this.s && 2 != this.s && 4 != this.s) || ef(this.o);
        }
      }),
      (t.qa = function (t) {
        switch (t) {
          case 1:
            mv(this);
            break;
          case 2:
            bv(this);
            break;
          case 3:
            (this.H.o = !0), (this.R.o = !0);
            break;
          case 4:
            ol(this.Ba), (this.H.o = !1), (this.R.o = !1);
            break;
          case 5:
            Up(this.$), (this.H.o = !1), (this.R.o = !1), (this.H.o = !1);
            var i = this;
            nl(this.o, 1e3, function () {
              i.qa(6);
            });
        }
        this.s = t;
      });
    var mv = function (t) {
        $l(t.o, 12, 500),
          $l(t.o, 13, 1e3),
          $l(t.o, 0, Nc),
          el(t.T, 2e3, null, new Cn(490, 180), function () {
            t.qa(2);
          });
      },
      bv = function (t) {
        Zc(t.o),
          (t.H.o = !0),
          t.S && (t.S.o = !0),
          tl(
            t.Ba,
            new Jr(2e3, null, function () {
              t.qa(3);
            }),
          );
      },
      Sv = bl.ka(),
      Hv = function () {
        (this.w = !1), (this.o = new ml("#000", 640, 360)), (this.o.s = 461);
      };
    g(Hv, Tl),
      (Hv.prototype.Ja = function () {
        $r(Sv.o, this.o),
          qr(this.o, 640, 0),
          tl(this.o, new Qr(this.o, 1e3, new Cn(640, 0), new Cn(0, 0)));
        var t = this;
        tl(
          this.o,
          new Jr(1e3, null, function () {
            t.w = !0;
          }),
        );
      }),
      (Hv.prototype.Ka = function () {
        ol(this.o), Or(this.o);
      });
    var Tv = ne.ka(),
      Rv = re.ka(),
      xv = fs.ka(),
      kv = bl.ka(),
      Mv = function (t, i) {
        Pn.call(this, t, i);
      };
    g(Mv, Pn);
    var Uv = function (t, i) {
      ei.call(this),
        (this.w = i.getContext("2d")),
        ws(this.w),
        (this.o = new Mv(t, i)),
        oi(this, p(hi, this.o));
      var n = this.o.o,
        s = this.o.H;
      (this.T = !0),
        (this.S = !1),
        (this.U = v()),
        (this.H = null),
        ni() &&
          ((this.H = new us(t, n)),
          oi(this, p(hi, this.H)),
          ii() ||
            (cs(this.H, function () {
              Dn.ka().stop();
            }),
            Dn.ka().start()));
      var n = new Uc(),
        e = new kp(this.o);
      (e.s = 461), $r(kv.o, e);
      var o = new jw(n, e),
        n = z([
          2,
          new xl(this.o, this.H),
          6,
          o,
          3,
          new qp(n, this.o),
          5,
          new Wp(n, this.w),
          7,
          new Sp(this.o, !1, this.w),
          8,
          new Sp(this.o, !0, this.w),
          4,
          new yv(this.w, 2, 0, e, n),
          9,
          new yv(this.w, 0, 0, e, n),
          10,
          new ov(n),
          11,
          new av(n),
          12,
          new Hv(),
          13,
          new jp(0, o),
          14,
          new jp(1, o),
          15,
          new jp(2, o),
          16,
          new jp(3, o),
          17,
          new jp(4, o),
          18,
          new mf(n),
          19,
          new Fp(n),
          20,
          new uf(n),
          21,
          new tv(1),
          22,
          new tv(0, Dp),
          23,
          new tv(0),
          24,
          new tv(1, mc),
        ]);
      (this.ha = [n[13], n[14], n[15], n[16], n[17]]),
        (this.W = new cv(n)),
        s.listen(
          t,
          "contextmenu",
          function (t) {
            t.preventDefault();
          },
          !1,
        );
    };
    g(Uv, ei),
      (Uv.prototype.s = function () {
        for (var t, i = 0; (t = this.ha[i++]); ) t.reset();
        fv(this.W), kv.reset(), Uv.Da.s.call(this);
      }),
      (Uv.prototype.start = function () {
        // TODO: Game start
        !this.o.W.H || St ? ((this.S = !0), this.$()) : Lv();
      }),
      (Uv.prototype.$ = function () {
        // TODO: Update loop
        if (this.T) {
          qt(this.$, 17, this);
          var t = v(),
            i = Math.min(t - this.U, 50);
          (this.U = t),
            this.W.update(i),
            Sl(i, this.w),
            this.o.update(),
            (t = this.o),
            null != document[Mn] && t.ma.va(t.w, this.w, t.$, 0, t.T);
        } else this.S = !1;
      });
    var Ev = null,
      Av = function () {
        var t = document.getElementById("game"),
          i = t ? t.querySelector("canvas") : null;
        Rv.s(0, function () {
          (Ev = new Uv(t, i)), Ev.start();
        });
        Xs(t);
        ee.Ib.nb.s();
      },
      Lv = function () {
        // TODO: on minimize
        var t = Ev;
        t && (t.T = !1);
      };
    !(function (t, i, n) {
      var s = function () {
          t(), window.lol && window.lol();
        },
        e = function () {
          vs(s, i), s();
        };
      google && google.x ? google.x({ id: "DOODLE" }, e) : e();
    })(
      function () {
        var t = document.getElementById("game"),
          i = t ? t.querySelector("canvas") : null;
        if (i) {
          if ((si(), wt.Va)) {
            var n = document.querySelector("meta[name=viewport]");
            n && -1 == n.content.indexOf("user-scalable=no")
              ? n.setAttribute("content", n.content + ",user-scalable=no")
              : ((n = document.createElement("meta")),
                n.setAttribute("name", "viewport"),
                n.setAttribute(
                  "content",
                  "width=device-width,user-scalable=no",
                ),
                t.appendChild(n));
          }
          ii()
            ? Av()
            : Ni(i, "click", function () {
                if ((Av(), i))
                  if (Vi(i)) i.Wb("click");
                  else {
                    var t = nn(i);
                    if (t) {
                      var n,
                        s = 0,
                        e = "click".toString();
                      for (n in t.o)
                        if (!e || n == e)
                          for (
                            var o = t.o[n].concat(), h = 0;
                            h < o.length;
                            ++h
                          )
                            Ji(o[h]) && ++s;
                    }
                  }
              });
        }
      },
      function () {
        Ys();
        for (var t, i = Rv, n = 0; (t = i.o[n]); n++) t.H = [];
        Lv(), hi(Ev), (Ev = null);
      },
    );
    window.pauseGame = function () {
      window.PAUSE_GAME = true;
      Ev.o.W.o();
    };
    window.resumeGame = function () {
      window.PAUSE_GAME = false;
      Ev.o.W.o();
    };
  }.call(this);
