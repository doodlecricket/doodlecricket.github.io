const assetsPath = "/doodle-snake/assets/";

try {
  var s_tCb = function (a) {
    this.jk = a;
  };
} catch (e) {
  _DumpException(e);
}
try {
  s_a("aLUfP");
  var s_1m = function (a) {
    s_H.call(this, a.Ka);
    var b = this;
    this.window = a.service.window.get();
    this.wa = this.jk();
    this.oa = window.orientation;
    this.ka = function () {
      var c = b.jk(),
        d =
          b.V$a() &&
          90 === Math.abs(window.orientation) &&
          b.oa === -1 * window.orientation;
      b.oa = window.orientation;
      if (c !== b.wa || d) {
        b.wa = c;
        d = s_g(b.Zd);
        for (var e = d.next(); !e.done; e = d.next()) {
          e = e.value;
          var f = new s_tCb(c);
          try {
            e(f);
          } catch (g) {
            s_ca(g);
          }
        }
      }
    };
    this.Zd = new Set();
    this.window.addEventListener("resize", this.ka);
    this.V$a() && this.window.addEventListener("orientationchange", this.ka);
  };
  s_r(s_1m, s_H);
  s_1m.kb = s_H.kb;
  s_1m.Ea = function () {
    return {
      service: {
        window: s_mj,
      },
    };
  };
  s_1m.prototype.addListener = function (a) {
    this.Zd.add(a);
  };
  s_1m.prototype.removeListener = function (a) {
    this.Zd.delete(a);
  };
  s_1m.prototype.jk = function () {
    if (s_uCb()) {
      var a = s_eh(this.window);
      a = new s_Yg(
        a.width,
        Math.round(
          (a.width * this.window.innerHeight) / this.window.innerWidth,
        ),
      );
    } else
      a =
        this.Zb() || (s_ma() ? s_uCb() : this.window.visualViewport)
          ? s_eh(this.window)
          : new s_Yg(this.window.innerWidth, this.window.innerHeight);
    return a.height < a.width;
  };
  s_1m.prototype.destroy = function () {
    this.window.removeEventListener("resize", this.ka);
    this.window.removeEventListener("orientationchange", this.ka);
  };
  var s_uCb = function () {
    return s_ma() && s_$e.IC() && !navigator.userAgent.includes("GSA");
  };
  s_1m.prototype.Zb = function () {
    return s_vCb;
  };
  s_1m.prototype.V$a = function () {
    return "orientation" in window;
  };
  var s_vCb = !1;
  s_nj(s_0Ja, s_1m);
  s_vCb = !0;
  s_b();
} catch (e) {
  _DumpException(e);
}
try {
  s_a("pHXghd");
  var s_F_c = function () {
    s_nka.apply(this, arguments);
  };
  s_r(s_F_c, s_nka);
  s_F_c.prototype.initialize = function () {
    s_G_c();
    s_H_c();
  };
  var s_H_c = function () {},
    s_G_c = function () {};
  s_zga().MBb(s_F_c);
  s_G_c = function () {
    s_Id(s_kd(s_Kob), s_6ob);
    s_Id(s_kd(s_Pob), s_2ob);
    s_Id(s_kd(s_lpb), s_2ob);
  };
  s_b();
} catch (e) {
  _DumpException(e);
}
try {
  s_a("wQlYve");
  var s_2m = new s_ij(s_Bl);
  s_b();
} catch (e) {
  _DumpException(e);
}
try {
  var s_4m = function (a, b, c) {
    s_Ve.call(this);
    this.rI = a;
    this.wa = b || 0;
    this.ka = c;
    this.Eu = s_Re(this.oa, this);
  };
  s_Ue(s_4m, s_Ve);
  s_4m.prototype.ef = 0;
  s_4m.prototype.kc = function () {
    s_4m.Uc.kc.call(this);
    this.stop();
    delete this.rI;
    delete this.ka;
  };
  s_4m.prototype.start = function (a) {
    this.stop();
    this.ef = s_Qh(this.Eu, void 0 !== a ? a : this.wa);
  };
  var s_HCb = function (a) {
    a.isActive() || a.start(void 0);
  };
  s_4m.prototype.stop = function () {
    this.isActive() && s_Rh(this.ef);
    this.ef = 0;
  };
  s_4m.prototype.fire = function () {
    this.stop();
    this.oa();
  };
  s_4m.prototype.isActive = function () {
    return 0 != this.ef;
  };
  s_4m.prototype.oa = function () {
    this.ef = 0;
    this.rI && this.rI.call(this.ka);
  };
} catch (e) {
  _DumpException(e);
}
try {
  var s_DOb = function (a) {
      for (var b = Math.random, c = a.length - 1; 0 < c; c--) {
        var d = Math.floor(b() * (c + 1)),
          e = a[c];
        a[c] = a[d];
        a[d] = e;
      }
    },
    s_rp = function (a) {
      return s_Tta.ix(a);
    },
    s_sp = function (a) {
      for (var b in s_Zc) s_Zc[b].delete(a);
    },
    s_EOb = function (a, b) {
      a = s_xd(a);
      s_hd(document.body, a, {
        U5c: b,
        iNa: !0,
      });
    },
    s_tp = function (a, b) {
      return (a.kk[b] && a.kk[b]) || null;
    },
    s_FOb = function (a, b) {
      return s_tp(a, b);
    },
    s_up = function (a) {
      return a.kk.slice();
    },
    s_vp = function (a, b) {
      return a.find('[jsname="' + b + '"]');
    },
    s_wp = function (a) {
      if (0 < a.kk.length) return s_Ej(a.kk[0]);
    },
    s_xp = function (a, b) {
      return s_Hj(a, '[jsname="' + b + '"]');
    },
    s_yp = function (a, b, c) {
      b = s_ne(b);
      return new s_je(s_gd(a.lN, b, c));
    },
    s_zp = function (a, b, c) {
      b = s_ne(b);
      b = s_yp(a, b, c);
      if (1 <= b.size()) return b.eq(0);
      throw Error("vb`" + c + "`" + a);
    },
    s_Ap = function (a, b) {
      return a.Hu(b).then();
    },
    s_GOb = function (a) {
      s_Ve.call(this);
      this.ka = [];
      this.oa = a.ownerDocument.body;
    };
  s_r(s_GOb, s_Ve);
  s_GOb.prototype.kc = function () {
    for (var a = this.ka, b = 0; b < a.length; b++) s_zd(a[b]);
    this.ka = [];
    s_Ve.prototype.kc.call(this);
  };
  s_GOb.prototype.listen = function (a, b, c) {
    a = s_Kd(this.oa, a, b, c);
    this.ka.push(a);
    return a;
  };
  s_GOb.prototype.listenOnce = function (a, b, c) {
    var d = this,
      e;
    return (e = this.listen(
      a,
      function () {
        d.Ds(e);
        e = null;
        b.apply(this, arguments);
      },
      c,
    ));
  };
  s_GOb.prototype.Ds = function (a) {
    var b = s_zd(a);
    return (b = s_Aa(this.ka, a) && b);
  };
  var s_Bp = function (a) {
      var b = a.Yh.oa;
      b || ((b = a.Yh.oa = new s_GOb(a.lN)), a.Pc(b));
      return b;
    },
    s_Cp = function (a) {
      return a.Yh.ka ? a.Yh.ka : (a.Yh.ka = new s_Yj(a));
    },
    s_HOb = function (a, b) {
      var c = a instanceof s_Gj ? a.el() : a,
        d = s_ke(c);
      return new s_Mh(function (e) {
        (function g() {
          var k = s__j(a, b);
          0 < k.size() || "complete" == d.readyState ? e(k) : s_Qh(g, 50);
        })();
      });
    },
    s_Dp = function (a, b) {
      return s_HOb(a.lN, b).then(function (c) {
        if (0 < c.size()) return c.eq(0);
        throw Error("vb`" + b + "`" + a);
      });
    },
    s_IOb = function (a) {
      this.wa = a;
      this.oa = new s_dd();
      this.ka = null;
    };
  s_IOb.prototype.init = function (a) {
    this.ka ||
      (this.ka = s_Rqa(
        new s_ega(
          this.wa.map(function (b) {
            return b(a);
          }),
        ),
        this.oa,
      ));
    return this.ka;
  };
  s_IOb.prototype.done = function () {
    return this.oa;
  };
  var s_JOb = function (a, b) {
      b &&
        ((a[s_cga] = new s_IOb(b)),
        a[s_cga].done().addCallback(function () {
          a[s_cga] = null;
        }));
    },
    s_Ep = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    },
    s_KOb = function (a, b, c) {
      var d = 0,
        e = function () {
          d = 0;
        };
      return function (f) {
        d || ((d = s_ba.setTimeout(e, b)), a.apply(c, arguments));
      };
    },
    s_LOb = function (a) {
      var b = a.indexOf("#");
      0 < b && (a = a.substring(0, b));
      b = a.match(/[?&]body=/gi);
      if (!b) return !0;
      if (1 < b.length) return !1;
      a = a.match(/[?&]body=([^&]*)/)[1];
      if (!a) return !0;
      try {
        decodeURIComponent(a);
      } catch (c) {
        return !1;
      }
      return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a);
    },
    s_MOb = function (a) {
      (s_Pka(a, "sms:") && s_LOb(a)) || (a = "about:invalid#zClosurez");
      return s_Cc(a);
    },
    s_Fp = function (a, b) {
      b = b instanceof s_Lb ? b : s_Hg(b, /^data:audio\//i.test(b));
      a.src = s_Mb(b);
    },
    s_Gp = function (a, b) {
      a %= b;
      return 0 > a * b ? a + b : a;
    },
    s_Hp = function (a, b) {
      for (a = s_soa(a); 0 < a.length; ) {
        var c = a.pop();
        if (b(c)) return c;
        for (c = c.lastElementChild; c; c = c.previousElementSibling) a.push(c);
      }
      return null;
    },
    s_NOb = function (a, b) {
      return new s_5h(a.x, a.y, b.width, b.height);
    },
    s_Ip = function (a) {
      if (!a.getBoundingClientRect) return null;
      a = s_Mpa(s_Gpa, a);
      return new s_Yg(a.right - a.left, a.bottom - a.top);
    },
    s_OOb = {
      name: "plac",
    },
    s_Jp = function (a) {
      return s_Bj("jsname", a);
    },
    s_Kp = function (a) {
      return function (b) {
        return b != a;
      };
    },
    s_Lp = function (a, b) {
      return 2 == arguments.length
        ? function (c) {
            return s_j(c, a) == b;
          }
        : function (c) {
            return s_2d(c, a);
          };
    },
    s_POb = function (a) {
      return a instanceof s_je ? a.el() : a;
    },
    s_S = function (a, b) {
      s_bta(b);
      b.prototype.s1 || (b.prototype.s1 = {});
      a &&
        (s_ld.Ub().register(a, b),
        (b.create = function (c, d, e) {
          var f = new s_1ia(c, d, e, b);
          return s_od(c, b, f).addCallback(function (g) {
            s_JOb(g, f.ka);
          });
        }));
    },
    s_QOb = function (a) {
      var b = s_bGa(a);
      if ("undefined" == typeof b) throw Error("Ob");
      var c = new s_zk(null);
      a = s_aGa(a);
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a[d];
        Array.isArray(f) ? s_lGa(c, e, f) : c.add(e, f);
      }
      return c;
    },
    s_ROb = function (a, b) {
      switch (s_Jk(b)) {
        case 1:
          "ltr" !== a.dir && (a.dir = "ltr");
          break;
        case -1:
          "rtl" !== a.dir && (a.dir = "rtl");
          break;
        default:
          a.removeAttribute("dir");
      }
    },
    s_Mp = function (a) {
      s_S(void 0, a);
    };
} catch (e) {
  _DumpException(e);
}
try {
  var s_rUb = function (a, b) {
      var c = s_sc(a).toString();
      if (/#/.test(c)) throw Error("xa");
      var d = /\?/.test(c) ? "&" : "?";
      b.forEach(function (e, f) {
        e = e instanceof Array ? e : [e];
        for (var g = 0; g < e.length; g++) {
          var k = e[g];
          null !== k &&
            void 0 !== k &&
            ((c +=
              d + encodeURIComponent(f) + "=" + encodeURIComponent(String(k))),
            (d = "&"));
        }
      });
      return s_Ac(c);
    },
    s_sUb = function (a) {
      return (a = s_D(a)) ? a : null;
    };
} catch (e) {
  _DumpException(e);
}
try {
  var s_SUb = function (a, b, c) {
      var d = new s_vi("", s_1pa);
      s_QUb(
        new s_RUb(function () {
          return d;
        }),
        a,
      );
      c(d, b);
      return b;
    },
    s_TUb = function (a, b) {
      var c = new s_vi("", s_1pa);
      b(a, c);
      return new s_RUb(function () {
        return c;
      }).serialize(c);
    },
    s_UUb = function (a) {
      return a ? "1" : "0";
    },
    s_VUb = function (a) {
      return "1" == a;
    };
  var s_WUb = function () {};
  s_WUb.prototype.serialize = function (a) {
    var b = [];
    a = s_g(a);
    for (var c = a.next(); !c.done; c = a.next()) b.push(c.value);
    return b.join(",");
  };
  s_WUb.prototype.ka = function (a) {
    for (var b = /(?:^|[^`])(?:(?:``)*),/, c = b.exec(a), d = []; null !== c; )
      (c = c.index + c[0].length),
        d.push(a.substring(0, c - 1)),
        (a = a.substring(c)),
        (c = b.exec(a));
    d.push(a);
    return d;
  };
  var s_XUb = function () {};
  s_XUb.prototype.serialize = function (a) {
    return a.replace(/`/g, "``").replace(/,/g, "`,");
  };
  s_XUb.prototype.ka = function (a) {
    return a.replace(/`,/g, ",").replace(/``/g, "`");
  };
  var s_YUb = function () {
    this.wa = new s_WUb();
    this.oa = new s_XUb();
  };
  s_YUb.prototype.serialize = function (a) {
    var b = [];
    a = s_g(a);
    for (var c = a.next(); !c.done; c = a.next())
      b.push(this.oa.serialize(c.value));
    return this.wa.serialize(b);
  };
  s_YUb.prototype.ka = function (a) {
    var b = [];
    a = s_g(this.wa.ka(a));
    for (var c = a.next(); !c.done; c = a.next()) b.push(this.oa.ka(c.value));
    return b;
  };
  var s_ZUb = new s_YUb();
  var s_RUb = function (a) {
    this.ka = new s_lyb(
      new s_5pa(":"),
      s_ZUb.wa,
      void 0 === a
        ? function () {
            return new Map();
          }
        : a,
    );
  };
  s_RUb.prototype.serialize = function (a) {
    var b = new Map();
    a = s_g(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      var d = s_g(c.value);
      c = d.next().value;
      d = d.next().value;
      b.set(c, s_ZUb.oa.serialize(d));
    }
    return this.ka.serialize(b);
  };
  var s_QUb = function (a, b) {
    a = a.ka.ka(b);
    b = s_g(a);
    for (var c = b.next(); !c.done; c = b.next()) {
      var d = s_g(c.value);
      c = d.next().value;
      d = d.next().value;
      a.set(c, s_ZUb.oa.ka(d));
    }
    return a;
  };
  var s__Ub = function (a) {
      return a.toString();
    },
    s_0Ub = function (a) {
      return Number(a);
    };
  var s_zq = function (a, b) {
      this.ka = a;
      this.oa = b;
    },
    s_Aq = function (a, b, c, d, e) {
      b = a.ka.get(b);
      void 0 !== b ? c.call(a.oa, d(b)) : e.call(a.oa);
    },
    s_1Ub = function (a, b, c, d, e) {
      var f = [];
      b = a.ka.getAll(b);
      e && 0 != b.length && (b = s_ZUb.ka(b.join(",")));
      e = s_g(b);
      for (b = e.next(); !b.done; b = e.next()) f.push(d(b.value));
      c.call(a.oa, f);
    },
    s_Bq = function (a, b, c, d) {
      s_Aq(a, b, c, s_We, d);
    },
    s_Cq = function (a, b, c, d) {
      s_Aq(a, b, c, s_0Ub, d);
    },
    s_Dq = function (a, b, c, d) {
      s_Aq(a, b, c, s_VUb, d);
    },
    s_2Ub = function (a, b, c, d, e, f) {
      s_Aq(
        a,
        b,
        c,
        function (g) {
          return s_SUb(g, new d(), e.xU);
        },
        f,
      );
    },
    s_Eq = function (a, b, c, d, e) {
      b.call(a.oa) ? ((b = c.call(a.oa)), a.ka.set(e, d(b))) : a.ka.delete(e);
    },
    s_3Ub = function (a, b, c, d, e) {
      a.ka.delete(d);
      b = b.call(a.oa);
      if (b.length)
        if (e) {
          e = [];
          var f = s_g(b);
          for (b = f.next(); !b.done; b = f.next()) e.push(c(b.value));
          a.ka.append(d, s_ZUb.serialize(e));
        } else
          for (e = s_g(b), b = e.next(); !b.done; b = e.next())
            a.ka.append(d, c(b.value));
      else a.ka.delete(d);
    },
    s_Fq = function (a, b, c, d) {
      s_Eq(a, b, c, s_We, d);
    },
    s_Gq = function (a, b, c, d) {
      s_Eq(a, b, c, s__Ub, d);
    },
    s_Hq = function (a, b, c, d) {
      s_Eq(a, b, c, s_UUb, d);
    },
    s_Iq = function (a, b, c, d, e) {
      s_Eq(
        a,
        b,
        c,
        function (f) {
          return s_TUb(f, d.yU);
        },
        e,
      );
    };
} catch (e) {
  _DumpException(e);
}
try {
  var s_EVb = function (a, b) {
      for (var c = Array(a.length), d = 0; d < a.length; d++)
        c[d] = {
          index: d,
          value: a[d],
        };
      var e = b || s_Ha;
      s_Ia(c, function (f, g) {
        return e(f.value, g.value) || f.index - g.index;
      });
      for (b = 0; b < a.length; b++) a[b] = c[b].value;
    },
    s_YVb = function (a) {
      var b = a.triggerElement,
        c = a.interactionContext,
        d = a.userAction,
        e = a.hQb,
        f = a.data,
        g,
        k,
        h,
        l,
        m,
        n,
        p;
      return s_t(function (q) {
        if (1 == q.ka)
          return s_FVb ? q.Xb(2) : s_s(q, s_mc(s_dj, s_ga().ka), 3);
        2 != q.ka && (s_FVb = q.oa);
        g = s_FVb.ka();
        b && (g = g.ka(b, d));
        if (c || f) {
          k = new s_vk();
          c && s_d(k, 6, c);
          if (f) {
            s_GVb(f);
            var r = new s_0b(""),
              t;
            for (t in f) r.searchParams.set(t, f[t]);
            h = r;
            l = new s_HVb();
            r = new s_zq(h.searchParams, l);
            s_Bq(r, "ct", l.kQe, l.bvd);
            s_Bq(r, "cad", l.iQe, l.Zud);
            s_Bq(r, "url", l.W9c, l.M9c);
            s_Bq(r, "mid", l.T9c, l.J9c);
            s_Bq(r, "fun", l.LPe, l.Gud);
            s_Cq(r, "altimagesseen", l.cPe, l.bud);
            s_Cq(r, "autoswipes", l.jPe, l.hud);
            s_Bq(r, "predicate", l.ORe, l.Hwd);
            s_Bq(r, "filtertext", l.R9c, l.OGb);
            s_Bq(r, "cshid", l.lPe, l.kud);
            s_Dq(r, "cld", l.vQe, l.nvd);
            s_Dq(r, "flb", l.wQe, l.ovd);
            s_Cq(r, "jl", l.xQe, l.pvd);
            s_Cq(r, "lgd", l.fRe, l.Wvd);
            s_Cq(r, "mlt", l.yQe, l.qvd);
            s_Cq(r, "ltd", l.eRe, l.Vvd);
            s_Dq(r, "lvc", l.zQe, l.rvd);
            s_Dq(r, "poz", l.AQe, l.svd);
            s_Dq(r, "qop", l.BQe, l.tvd);
            s_Dq(r, "mtl", l.CQe, l.uvd);
            s_Cq(r, "zld", l.gRe, l.Xvd);
            s_Bq(r, "agsac", l.bPe, l.Ytd);
            s_Aq(r, "pntst", l.XQe, s_IVb, l.Ovd);
            s_Cq(r, "pntfc", l.WQe, l.Nvd);
            s_Bq(r, "pnte", l.VQe, l.Mvd);
            s_Bq(r, "sfc", l.uRe, l.lwd);
            s_Cq(r, "iqidx", l.VPe, l.Qud);
            s_Bq(r, "segment_text", l.eQe, l.Uud);
            s_Bq(r, "crust", l.rPe, l.uud);
            s_Dq(r, "scas", l.kRe, l.cwd);
            s_Bq(r, "dsq", l.aSe, l.Twd);
            s_Bq(r, "ddq", l.ZRe, l.Swd);
            s_Bq(r, "prov", l.lQe, l.cvd);
            s_Bq(r, "serv", l.mQe, l.dvd);
            s_Bq(r, "tr", l.nQe, l.evd);
            s_Bq(r, "webp", l.oQe, l.fvd);
            s_Aq(r, "fpc", l.S9c, s_JVb, l.I9c);
            s_Cq(r, "sidx", l.YRe, l.Rwd);
            s_Cq(r, "bidx", l.VRe, l.Owd);
            s_Cq(r, "idx", l.WRe, l.Pwd);
            s_Cq(r, "stmt", l.XRe, l.Qwd);
            s_Bq(r, "item", l.wPe, l.xud);
            s_Aq(r, "action", l.xPe, s_KVb, l.yud);
            s_Bq(r, "hl", l.P9c, l.G9c);
            s_Aq(r, "after", l.BRe, s_LVb, l.wwd);
            s_Cq(r, "cst", l.ERe, l.zwd);
            s_Aq(r, "interaction", l.DRe, s_MVb, l.ywd);
            s_Bq(r, "lang", l.zRe, l.twd);
            s_Bq(r, "sl", l.V9c, l.L9c);
            s_Bq(
              r,
              "tl",
              l.setTranslationTargetLanguage,
              l.clearTranslationTargetLanguage,
            );
            s_Aq(r, "stp", l.ARe, s_NVb, l.uwd);
            s_Cq(r, "ql", l.CRe, l.xwd);
            s_Aq(r, "event", l.GRe, s_OVb, l.Bwd);
            s_Aq(r, "spkr", l.HRe, s_PVb, l.Cwd);
            s_Cq(r, "textlen", l.IRe, l.Dwd);
            s_Cq(r, "time", l.FRe, l.Awd);
            s_Aq(r, "voice", l.JRe, s_QVb, l.Ewd);
            s_Bq(r, "lei", l.uQe, l.mvd);
            s_Bq(r, "cid", l.PQe, l.Gvd);
            s_Bq(r, "oid", l.SQe, l.Jvd);
            s_Dq(r, "subscribed", l.TQe, l.Kvd);
            s_Cq(r, "categoryid", l.QQe, l.Hvd);
            s_Aq(r, "mokas", l.RQe, s_RVb, l.Ivd);
            s_1Ub(r, "topProductIds", l.UQe, s_We, !0);
            s_Bq(r, "aqid", l.N9c, l.E9c);
            s_Cq(r, "arfpi", l.fPe, l.eud);
            s_Cq(r, "arfsii", l.gPe, l.fud);
            s_Dq(r, "arfbac", l.ePe, l.dud);
            s_Cq(r, "authuser", l.O9c, l.F9c);
            s_Dq(r, "isNationalMap", l.ZPe, l.Rud);
            s_Cq(r, "radius", l.qPe, l.tud);
            s_Bq(r, "sabjti", l.QPe, l.Jud);
            s_Aq(r, "vwd", l.TRe, s_SVb, l.Nwd);
            s_Aq(r, "vpp", l.SRe, s_TVb, l.Mwd);
            s_Aq(r, "stl", l.U9c, s_UVb, l.K9c);
            s_Aq(r, "prnuid", l.YQe, s_VVb, l.Pvd);
            s_Dq(r, "jbd_pda_s", l.dQe, l.Tud);
            s_Bq(r, "eventdate", l.CPe, l.Cud);
            s_Bq(r, "eventname", l.Q9c, l.H9c);
            s_Cq(r, "cdot", l.mPe, l.qud);
            s_Bq(r, "mskb", l.FQe, l.wvd);
            s_Bq(r, "shdeb", l.hQe, l.Yud);
            r = s_Vf(new s_4Fa(), s_WVb, l);
            s_h(k, 15, r);
          }
          g = g.wa(k);
        }
        if (e)
          for (m = s_g(e), n = m.next(); !n.done; n = m.next())
            (p = n.value), (g = g.oa(p.element, s_XVb[p.type]));
        g.log();
        s_Ee(q);
      });
    },
    s_ZVb = function (a) {
      if (a instanceof s_Lg) return a;
      a = s_7d(a);
      a = s_Mg(a);
      a = s_Rka(a.replace(/  /g, " &#160;"));
      return s_l(a);
    },
    s__Vb = s_ib(s_5ca, function (a, b, c) {
      b = s_mb(b, c);
      if (null != b && b.length) {
        c = s_ama(a, c);
        for (var d = 0; d < b.length; d++) {
          var e = b[d];
          if ("number" === typeof e) {
            var f = a.ka;
            s_Uba(e);
            s_Tf(f, s_7a, s_8a);
          } else (e = s_nb(e)), s_Tf(a.ka, e.lo, e.hi);
        }
        s_bma(a, c);
      }
    }),
    s_0Vb = function (a) {
      if (s_hna.test(a.type)) {
        var b =
          void 0 !== s_ba.URL && void 0 !== s_ba.URL.createObjectURL
            ? s_ba.URL
            : void 0 !== s_ba.createObjectURL
              ? s_ba
              : null;
        if (null == b) throw Error("x");
        a = b.createObjectURL(a);
      } else a = "about:invalid#zClosurez";
      return s_Cc(a);
    },
    s_1Vb = function (a, b) {
      b = b.cloneNode(!0).childNodes;
      for (s_qh(a); b.length; ) a.appendChild(b[0]);
    },
    s_2Vb = function (a) {
      s_uh(a.ownerNode || a.owningElement || a);
    },
    s_3Vb = {
      name: "ess",
    },
    s_4Vb = {
      name: "lrs",
    },
    s_5Vb = function (a) {
      s_C.call(this, a);
    };
  s_r(s_5Vb, s_C);
  var s_6Vb = [s_5Vb, 2, s_B, 3, s_z];
  var s_8Vb = function (a) {
    s_C.call(this, a, -1, s_7Vb);
  };
  s_r(s_8Vb, s_C);
  var s_9Vb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_9Vb, s_C);
  var s_$Vb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_$Vb, s_C);
  var s_aWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_aWb, s_C);
  var s_7Vb = [3],
    s_bWb = [
      s_8Vb,
      1,
      s_A,
      [s_9Vb, 1, s_B, 2, s_B, 3, s_y],
      2,
      s_A,
      [s_$Vb, 1, s_6f, 2, s_6f, 3, s_y],
      3,
      s_mg,
      [s_aWb, 1, s_B, 2, s_$f, 3, s_y],
    ];
  var s_cWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_cWb, s_C);
  var s_dWb = [s_cWb, 1, s_B, 3, s_y];
  var s_eWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_eWb, s_C);
  var s_fWb = [
    s_eWb,
    1,
    s_$f,
    2,
    s_$f,
    3,
    s_$f,
    8,
    s_$f,
    4,
    s_$f,
    5,
    s_$f,
    6,
    s_$f,
    7,
    s_$f,
    9,
    s_$f,
    10,
    s_B,
  ];
  var s_5q = function (a) {
    s_C.call(this, a, -1, s_gWb);
  };
  s_r(s_5q, s_C);
  s_5q.prototype.getType = function () {
    return s_c(this, 2);
  };
  s_5q.prototype.setType = function (a) {
    return s_d(this, 2, a);
  };
  var s_6q = function (a) {
    s_C.call(this, a);
  };
  s_r(s_6q, s_C);
  s_6q.prototype.getType = function () {
    return s_c(this, 1);
  };
  s_6q.prototype.setType = function (a) {
    return s_d(this, 1, a);
  };
  var s_gWb = [3],
    s_hWb = [s_6q, 1, s_B, 2, s_B, 3, s_6f, 4, s_6f, 5, s_6f],
    s_iWb = [s_5q, 2, s_B, 1, s_A, s_hWb, 3, s_mg, s_hWb];
  var s_jWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_jWb, s_C);
  s_jWb.prototype.getPlayerType = function () {
    return s_c(this, 5);
  };
  s_jWb.prototype.fza = function () {
    return s_c(this, 6);
  };
  s_jWb.prototype.getVideoUrl = function () {
    return s_c(this, 7);
  };
  s_jWb.prototype.Iz = function () {
    return s_f(this, s_5Vb, 10);
  };
  var s_kWb = [
    s_jWb,
    1,
    s_A,
    s_fWb,
    2,
    s_A,
    s_iWb,
    3,
    s_A,
    s_dWb,
    9,
    s_A,
    s_bWb,
    4,
    s_6f,
    14,
    s_y,
    5,
    s_B,
    6,
    s_z,
    7,
    s_z,
    11,
    s_B,
    10,
    s_A,
    s_6Vb,
    12,
    s_y,
    13,
    s_z,
  ];
  var s_lWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_lWb, s_C);
  var s_mWb = [s_lWb, 1, s_x];
  var s_nWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_nWb, s_C);
  var s_oWb = [s_nWb, 1, s_6f, 2, s_B, 3, s_y, 4, s_y, 5, s_y, 6, s_y];
  var s_pWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_pWb, s_C);
  s_pWb.prototype.ti = function () {
    return s_w(this, 1);
  };
  var s_qWb = [2, 3, 7],
    s_rWb = [
      s_pWb,
      1,
      s_z,
      2,
      s_ng,
      s_oWb,
      s_qWb,
      3,
      s_8f,
      s_qWb,
      7,
      s_vg,
      s_qWb,
    ];
  var s_sWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_sWb, s_C);
  s_sWb.prototype.getType = function () {
    return s_fb(this, 1, 0);
  };
  s_sWb.prototype.setType = function (a) {
    return s_d(this, 1, a);
  };
  var s_tWb = [s_sWb, 1, s_B, 4, s_A, s_rWb, 6, s_z];
  var s_vWb = function (a) {
    s_C.call(this, a, -1, s_uWb);
  };
  s_r(s_vWb, s_C);
  var s_uWb = [1],
    s_wWb = [s_vWb, 1, s_7f];
  var s_yWb = function (a) {
    s_C.call(this, a, -1, s_xWb);
  };
  s_r(s_yWb, s_C);
  var s_xWb = [1],
    s_zWb = [s_yWb, 1, s_7f];
  var s_AWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_AWb, s_C);
  s_AWb.prototype.ti = function () {
    return s_w(this, 1);
  };
  s_AWb.prototype.Pi = function () {
    return s_wf(this, s_5a(this, s_7q, 12));
  };
  var s_7q = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    s_BWb = [
      s_AWb,
      1,
      s_z,
      2,
      s_z,
      3,
      s_8f,
      s_7q,
      4,
      s_8f,
      s_7q,
      5,
      s_8f,
      s_7q,
      6,
      s_8f,
      s_7q,
      7,
      s_lg,
      s_7q,
      8,
      s_ng,
      s_wWb,
      s_7q,
      9,
      s_ng,
      s_zWb,
      s_7q,
      10,
      s_vg,
      s_7q,
      11,
      s_vg,
      s_7q,
      12,
      s_2f,
      s_7q,
      13,
      s_lg,
      s_7q,
      14,
      s_2f,
      s_7q,
      15,
      s_dg,
      s_7q,
    ];
  var s_CWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_CWb, s_C);
  var s_DWb = [1, 2],
    s_EWb = [s_CWb, 1, s_lg, s_DWb, 2, s_ng, s_BWb, s_DWb];
  var s_FWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_FWb, s_C);
  var s_GWb = [s_FWb, 1, s_B, 5, s_A, s_EWb, 3, s_3f, 4, s_3f];
  var s_IWb = function (a) {
    s_C.call(this, a, -1, s_HWb);
  };
  s_r(s_IWb, s_C);
  var s_HWb = [2],
    s_JWb = [s_IWb, 1, s_A, s_tWb, 2, s_mg, s_GWb];
  var s_LWb = function (a) {
    s_C.call(this, a, -1, s_KWb);
  };
  s_r(s_LWb, s_C);
  var s_KWb = [1],
    s_MWb = [s_LWb, 1, s_mg, s_JWb];
  var s_OWb = function (a) {
    s_C.call(this, a, -1, s_NWb);
  };
  s_r(s_OWb, s_C);
  var s_NWb = [3],
    s_PWb = [s_OWb, 1, s_A, s_tWb, 2, s_B, 3, s_7f];
  var s_RWb = function (a) {
    s_C.call(this, a, -1, s_QWb);
  };
  s_r(s_RWb, s_C);
  var s_QWb = [4],
    s_SWb = [s_RWb, 1, s_z, 2, s_A, s_MWb, 3, s_A, s_mWb, 4, s_mg, s_PWb];
  var s_UWb = function (a) {
    s_C.call(this, a, -1, s_TWb);
  };
  s_r(s_UWb, s_C);
  var s_TWb = [1],
    s_VWb = [s_UWb, 1, s_mg, s_SWb];
  var s_WWb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_WWb, s_C);
  var s_XWb = [s_WWb, 1, s_z, 2, s_z];
  var s_ZWb = function (a) {
    s_C.call(this, a, -1, s_YWb);
  };
  s_r(s_ZWb, s_C);
  s_ZWb.prototype.vN = function () {
    return s_f(this, s_UWb, 1);
  };
  var s_YWb = [2],
    s__Wb = [s_ZWb, 1, s_A, s_VWb, 2, s_mg, s_XWb];
  var s_0Wb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_0Wb, s_C);
  var s_1Wb = [s_0Wb];
  var s_2Wb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_2Wb, s_C);
  var s_3Wb = [s_2Wb, 1, s_A, s_tWb];
  var s_4Wb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_4Wb, s_C);
  var s_5Wb = [s_4Wb, 1, s_A, s_tWb, 2, s_A, s_EWb];
  var s_6Wb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_6Wb, s_C);
  var s_7Wb = [s_6Wb, 1, s_A, s_tWb, 2, s_B];
  var s_8Wb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_8Wb, s_C);
  var s_9Wb = [s_8Wb, 1, s_A, s_tWb, 2, s_A, s_EWb, 3, s_B];
  var s_$Wb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_$Wb, s_C);
  var s_aXb = [s_$Wb];
  var s_bXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_bXb, s_C);
  var s_cXb = [s_bXb, 1, s_A, s_PWb];
  var s_dXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_dXb, s_C);
  var s_eXb = [s_dXb, 1, s_A, s_MWb];
  var s_gXb = function (a) {
    s_C.call(this, a, -1, s_fXb);
  };
  s_r(s_gXb, s_C);
  var s_fXb = [1],
    s_hXb = [s_gXb, 1, s_mg, s_tWb];
  var s_iXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_iXb, s_C);
  var s_jXb = [1, 2],
    s_kXb = [s_iXb, 1, s_ng, s_hXb, s_jXb, 2, s_ng, s_eXb, s_jXb];
  var s_lXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_lXb, s_C);
  var s_mXb = [s_lXb, 1, s_B, 2, s_A, s_tWb, 3, s_A, s_EWb, 4, s_B];
  var s_nXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_nXb, s_C);
  var s_oXb = [s_nXb];
  var s_pXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_pXb, s_C);
  var s_8q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    s_qXb = [
      s_pXb,
      1,
      s_ng,
      s_mXb,
      s_8q,
      2,
      s_ng,
      s_5Wb,
      s_8q,
      3,
      s_ng,
      s_3Wb,
      s_8q,
      4,
      s_ng,
      s_1Wb,
      s_8q,
      5,
      s_ng,
      s_9Wb,
      s_8q,
      6,
      s_ng,
      s_7Wb,
      s_8q,
      7,
      s_ng,
      s_cXb,
      s_8q,
      8,
      s_ng,
      s_oXb,
      s_8q,
      9,
      s_ng,
      s_kXb,
      s_8q,
      10,
      s_ng,
      s_aXb,
      s_8q,
    ];
  var s_rXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_rXb, s_C);
  var s_sXb = [s_rXb, 1, s_A, s_mWb];
  var s_uXb = function (a) {
    s_C.call(this, a, -1, s_tXb);
  };
  s_r(s_uXb, s_C);
  var s_tXb = [1],
    s_vXb = [s_uXb, 1, s_mg, s_qXb, 3, s_A, s_sXb];
  var s_wXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_wXb, s_C);
  s_wXb.prototype.vN = function () {
    return s_f(this, s_UWb, 1);
  };
  var s_xXb = [s_wXb, 1, s_A, s_VWb, 2, s_A, s_vXb, 3, s_0f, 4, s_z];
  var s_yXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_yXb, s_C);
  s_yXb.prototype.getResponse = function () {
    return s_f(this, s_wXb, 2);
  };
  var s_zXb = [s_yXb, 1, s_A, s__Wb, 2, s_A, s_xXb];
  var s_AXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_AXb, s_C);
  var s_BXb = [s_AXb, 1, s_A, s_zXb];
  var s_CXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_CXb, s_C);
  var s_DXb = [s_CXb, 1, s_B, 2, s_6f, 3, s_x];
  var s_EXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_EXb, s_C);
  var s_FXb = [s_EXb, 1, s_x, 2, s_6f, 3, s_6f];
  var s_GXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_GXb, s_C);
  var s_IXb = function (a) {
      var b = new s_GXb();
      return s_Af(b, 1, s_HXb, a);
    },
    s_JXb = function (a) {
      var b = new s_GXb();
      return s_Af(b, 2, s_HXb, a);
    },
    s_KXb = function () {
      var a = new s_GXb();
      return s_zf(a, 3, s_HXb, !0);
    },
    s_HXb = [1, 2, 3],
    s_LXb = [
      s_GXb,
      1,
      s_ng,
      s_FXb,
      s_HXb,
      2,
      s_ng,
      s_DXb,
      s_HXb,
      3,
      s_ig,
      s_HXb,
    ];
  var s_HVb = function (a) {
    s_C.call(this, a, -1, s_MXb);
  };
  s_r(s_HVb, s_C);
  s_ = s_HVb.prototype;
  s_.kQe = function (a) {
    return s_d(this, 1, a);
  };
  s_.bvd = function () {
    return s_1a(this, 1);
  };
  s_.iQe = function (a) {
    return s_d(this, 2, a);
  };
  s_.Zud = function () {
    return s_1a(this, 2);
  };
  s_.getUrl = function () {
    return s_w(this, 3);
  };
  s_.W9c = function (a) {
    return s_d(this, 3, a);
  };
  s_.M9c = function () {
    return s_1a(this, 3);
  };
  s_.Ec = function () {
    return s_w(this, 4);
  };
  s_.T9c = function (a) {
    return s_d(this, 4, a);
  };
  s_.J9c = function () {
    return s_1a(this, 4);
  };
  s_.De = function () {
    return s_k(this, 4);
  };
  s_.LPe = function (a) {
    return s_d(this, 5, a);
  };
  s_.Gud = function () {
    return s_1a(this, 5);
  };
  s_.cPe = function (a) {
    return s_d(this, 6, a);
  };
  s_.bud = function () {
    return s_1a(this, 6);
  };
  s_.jPe = function (a) {
    return s_d(this, 7, a);
  };
  s_.hud = function () {
    return s_1a(this, 7);
  };
  s_.ORe = function (a) {
    return s_d(this, 8, a);
  };
  s_.Hwd = function () {
    return s_1a(this, 8);
  };
  s_.R9c = function (a) {
    return s_d(this, 9, a);
  };
  s_.OGb = function () {
    return s_1a(this, 9);
  };
  s_.lPe = function (a) {
    return s_d(this, 10, a);
  };
  s_.kud = function () {
    return s_1a(this, 10);
  };
  s_.vQe = function (a) {
    return s_d(this, 11, a);
  };
  s_.nvd = function () {
    return s_1a(this, 11);
  };
  s_.wQe = function (a) {
    return s_d(this, 12, a);
  };
  s_.ovd = function () {
    return s_1a(this, 12);
  };
  s_.xQe = function (a) {
    return s_d(this, 13, a);
  };
  s_.pvd = function () {
    return s_1a(this, 13);
  };
  s_.fRe = function (a) {
    return s_d(this, 14, a);
  };
  s_.Wvd = function () {
    return s_1a(this, 14);
  };
  s_.yQe = function (a) {
    return s_d(this, 15, a);
  };
  s_.qvd = function () {
    return s_1a(this, 15);
  };
  s_.eRe = function (a) {
    return s_d(this, 16, a);
  };
  s_.Vvd = function () {
    return s_1a(this, 16);
  };
  s_.zQe = function (a) {
    return s_d(this, 17, a);
  };
  s_.rvd = function () {
    return s_1a(this, 17);
  };
  s_.AQe = function (a) {
    return s_d(this, 18, a);
  };
  s_.svd = function () {
    return s_1a(this, 18);
  };
  s_.BQe = function (a) {
    return s_d(this, 19, a);
  };
  s_.tvd = function () {
    return s_1a(this, 19);
  };
  s_.CQe = function (a) {
    return s_d(this, 20, a);
  };
  s_.uvd = function () {
    return s_1a(this, 20);
  };
  s_.gRe = function (a) {
    return s_d(this, 21, a);
  };
  s_.Xvd = function () {
    return s_1a(this, 21);
  };
  s_.bPe = function (a) {
    return s_d(this, 22, a);
  };
  s_.Ytd = function () {
    return s_1a(this, 22);
  };
  s_.XQe = function (a) {
    return s_d(this, 23, a);
  };
  s_.Ovd = function () {
    return s_1a(this, 23);
  };
  s_.WQe = function (a) {
    return s_d(this, 24, a);
  };
  s_.Nvd = function () {
    return s_1a(this, 24);
  };
  s_.VQe = function (a) {
    return s_d(this, 25, a);
  };
  s_.Mvd = function () {
    return s_1a(this, 25);
  };
  s_.uRe = function (a) {
    return s_d(this, 26, a);
  };
  s_.lwd = function () {
    return s_1a(this, 26);
  };
  s_.VPe = function (a) {
    return s_d(this, 27, a);
  };
  s_.Qud = function () {
    return s_1a(this, 27);
  };
  s_.eQe = function (a) {
    return s_d(this, 28, a);
  };
  s_.Uud = function () {
    return s_1a(this, 28);
  };
  s_.rPe = function (a) {
    return s_d(this, 29, a);
  };
  s_.uud = function () {
    return s_1a(this, 29);
  };
  s_.kRe = function (a) {
    return s_d(this, 30, a);
  };
  s_.cwd = function () {
    return s_1a(this, 30);
  };
  s_.aSe = function (a) {
    return s_d(this, 31, a);
  };
  s_.Twd = function () {
    return s_1a(this, 31);
  };
  s_.ZRe = function (a) {
    return s_d(this, 32, a);
  };
  s_.Swd = function () {
    return s_1a(this, 32);
  };
  s_.lQe = function (a) {
    return s_d(this, 33, a);
  };
  s_.cvd = function () {
    return s_1a(this, 33);
  };
  s_.mQe = function (a) {
    return s_d(this, 34, a);
  };
  s_.dvd = function () {
    return s_1a(this, 34);
  };
  s_.nQe = function (a) {
    return s_d(this, 35, a);
  };
  s_.evd = function () {
    return s_1a(this, 35);
  };
  s_.oQe = function (a) {
    return s_d(this, 36, a);
  };
  s_.fvd = function () {
    return s_1a(this, 36);
  };
  s_.S9c = function (a) {
    return s_d(this, 37, a);
  };
  s_.I9c = function () {
    return s_1a(this, 37);
  };
  s_.YRe = function (a) {
    return s_d(this, 38, a);
  };
  s_.Rwd = function () {
    return s_1a(this, 38);
  };
  s_.VRe = function (a) {
    return s_d(this, 39, a);
  };
  s_.Owd = function () {
    return s_1a(this, 39);
  };
  s_.WRe = function (a) {
    return s_d(this, 40, a);
  };
  s_.Pwd = function () {
    return s_1a(this, 40);
  };
  s_.XRe = function (a) {
    return s_d(this, 41, a);
  };
  s_.Qwd = function () {
    return s_1a(this, 41);
  };
  s_.wPe = function (a) {
    return s_d(this, 42, a);
  };
  s_.xud = function () {
    return s_1a(this, 42);
  };
  s_.xPe = function (a) {
    return s_d(this, 43, a);
  };
  s_.yud = function () {
    return s_1a(this, 43);
  };
  s_.P9c = function (a) {
    return s_d(this, 44, a);
  };
  s_.G9c = function () {
    return s_1a(this, 44);
  };
  s_.BRe = function (a) {
    return s_d(this, 45, a);
  };
  s_.wwd = function () {
    return s_1a(this, 45);
  };
  s_.ERe = function (a) {
    return s_d(this, 46, a);
  };
  s_.zwd = function () {
    return s_1a(this, 46);
  };
  s_.DRe = function (a) {
    return s_d(this, 47, a);
  };
  s_.ywd = function () {
    return s_1a(this, 47);
  };
  s_.zRe = function (a) {
    return s_d(this, 48, a);
  };
  s_.twd = function () {
    return s_1a(this, 48);
  };
  s_.V9c = function (a) {
    return s_d(this, 49, a);
  };
  s_.L9c = function () {
    return s_1a(this, 49);
  };
  s_.setTranslationTargetLanguage = function (a) {
    return s_d(this, 50, a);
  };
  s_.clearTranslationTargetLanguage = function () {
    return s_1a(this, 50);
  };
  s_.ARe = function (a) {
    return s_d(this, 51, a);
  };
  s_.uwd = function () {
    return s_1a(this, 51);
  };
  s_.CRe = function (a) {
    return s_d(this, 52, a);
  };
  s_.xwd = function () {
    return s_1a(this, 52);
  };
  s_.GRe = function (a) {
    return s_d(this, 53, a);
  };
  s_.Bwd = function () {
    return s_1a(this, 53);
  };
  s_.HRe = function (a) {
    return s_d(this, 54, a);
  };
  s_.Cwd = function () {
    return s_1a(this, 54);
  };
  s_.IRe = function (a) {
    return s_d(this, 55, a);
  };
  s_.Dwd = function () {
    return s_1a(this, 55);
  };
  s_.FRe = function (a) {
    return s_d(this, 56, a);
  };
  s_.Awd = function () {
    return s_1a(this, 56);
  };
  s_.JRe = function (a) {
    return s_d(this, 57, a);
  };
  s_.Ewd = function () {
    return s_1a(this, 57);
  };
  s_.uQe = function (a) {
    return s_d(this, 58, a);
  };
  s_.mvd = function () {
    return s_1a(this, 58);
  };
  s_.PQe = function (a) {
    return s_d(this, 59, a);
  };
  s_.Gvd = function () {
    return s_1a(this, 59);
  };
  s_.SQe = function (a) {
    return s_d(this, 60, a);
  };
  s_.Jvd = function () {
    return s_1a(this, 60);
  };
  s_.TQe = function (a) {
    return s_d(this, 61, a);
  };
  s_.Kvd = function () {
    return s_1a(this, 61);
  };
  s_.QQe = function (a) {
    return s_d(this, 62, a);
  };
  s_.Hvd = function () {
    return s_1a(this, 62);
  };
  s_.RQe = function (a) {
    return s_h(this, 63, a);
  };
  s_.Ivd = function () {
    return s_h(this, 63);
  };
  s_.UQe = function (a) {
    return s_yb(this, 64, a);
  };
  s_.N9c = function (a) {
    return s_d(this, 65, a);
  };
  s_.E9c = function () {
    return s_1a(this, 65);
  };
  s_.fPe = function (a) {
    return s_d(this, 66, a);
  };
  s_.eud = function () {
    return s_1a(this, 66);
  };
  s_.gPe = function (a) {
    return s_d(this, 67, a);
  };
  s_.fud = function () {
    return s_1a(this, 67);
  };
  s_.ePe = function (a) {
    return s_d(this, 80, a);
  };
  s_.dud = function () {
    return s_1a(this, 80);
  };
  s_.O9c = function (a) {
    return s_d(this, 68, a);
  };
  s_.F9c = function () {
    return s_1a(this, 68);
  };
  s_.ZPe = function (a) {
    return s_d(this, 69, a);
  };
  s_.Rud = function () {
    return s_1a(this, 69);
  };
  s_.qPe = function (a) {
    return s_d(this, 70, a);
  };
  s_.tud = function () {
    return s_1a(this, 70);
  };
  s_.QPe = function (a) {
    return s_d(this, 71, a);
  };
  s_.Jud = function () {
    return s_1a(this, 71);
  };
  s_.TRe = function (a) {
    return s_h(this, 72, a);
  };
  s_.Nwd = function () {
    return s_h(this, 72);
  };
  s_.SRe = function (a) {
    return s_h(this, 73, a);
  };
  s_.Mwd = function () {
    return s_h(this, 73);
  };
  s_.U9c = function (a) {
    return s_h(this, 74, a);
  };
  s_.K9c = function () {
    return s_h(this, 74);
  };
  s_.YQe = function (a) {
    return s_h(this, 75, a);
  };
  s_.Pvd = function () {
    return s_h(this, 75);
  };
  s_.dQe = function (a) {
    return s_d(this, 76, a);
  };
  s_.Tud = function () {
    return s_1a(this, 76);
  };
  s_.CPe = function (a) {
    return s_d(this, 77, a);
  };
  s_.Cud = function () {
    return s_1a(this, 77);
  };
  s_.Q9c = function (a) {
    return s_d(this, 78, a);
  };
  s_.H9c = function () {
    return s_1a(this, 78);
  };
  s_.mPe = function (a) {
    return s_d(this, 79, a);
  };
  s_.qud = function () {
    return s_1a(this, 79);
  };
  s_.FQe = function (a) {
    return s_d(this, 81, a);
  };
  s_.wvd = function () {
    return s_1a(this, 81);
  };
  s_.hQe = function (a) {
    return s_d(this, 82, a);
  };
  s_.Yud = function () {
    return s_1a(this, 82);
  };
  var s_NXb = function (a) {
    s_C.call(this, a);
  };
  s_r(s_NXb, s_C);
  var s_PXb = function (a) {
    s_C.call(this, a, -1, s_OXb);
  };
  s_r(s_PXb, s_C);
  var s_RXb = function (a) {
    s_C.call(this, a, -1, s_QXb);
  };
  s_r(s_RXb, s_C);
  var s_MXb = [64],
    s_OXb = [1],
    s_QXb = [1],
    s_SXb = [s_RXb, 1, s_tg],
    s_WVb = s_xb(119, s_HVb);
  s_5Fa[119] = s_Xf(s_WVb, [
    s_HVb,
    1,
    s_z,
    2,
    s_z,
    3,
    s_z,
    4,
    s_z,
    5,
    s_z,
    6,
    s_x,
    7,
    s_x,
    8,
    s_z,
    9,
    s_z,
    10,
    s_z,
    11,
    s_y,
    12,
    s_y,
    13,
    s_3f,
    14,
    s_3f,
    15,
    s_3f,
    16,
    s_3f,
    17,
    s_y,
    18,
    s_y,
    19,
    s_y,
    20,
    s_y,
    21,
    s_x,
    22,
    s_z,
    23,
    s_B,
    24,
    s_x,
    25,
    s_z,
    26,
    s_z,
    27,
    s_x,
    28,
    s_z,
    29,
    s_z,
    30,
    s_y,
    31,
    s_z,
    32,
    s_z,
    33,
    s_z,
    34,
    s_z,
    35,
    s_z,
    36,
    s_z,
    37,
    s_B,
    38,
    s_x,
    39,
    s_x,
    40,
    s_x,
    41,
    s_x,
    42,
    s_z,
    43,
    s_B,
    44,
    s_z,
    45,
    s_B,
    46,
    s_x,
    47,
    s_B,
    48,
    s_z,
    49,
    s_z,
    50,
    s_z,
    51,
    s_B,
    52,
    s_x,
    53,
    s_B,
    54,
    s_B,
    55,
    s_x,
    56,
    s_x,
    57,
    s_B,
    58,
    s_z,
    59,
    s_9f,
    60,
    s_9f,
    61,
    s_y,
    62,
    s_x,
    63,
    s_A,
    [s_PXb, 1, s_mg, [s_NXb, 1, s_5f, 2, s_5f, 3, s_0f]],
    64,
    s__Vb,
    65,
    s_z,
    66,
    s_x,
    67,
    s_x,
    80,
    s_y,
    68,
    s_x,
    69,
    s_y,
    70,
    s_x,
    71,
    s_z,
    72,
    s_A,
    s_kWb,
    73,
    s_A,
    s_LXb,
    74,
    s_A,
    s_BXb,
    75,
    s_A,
    s_SXb,
    76,
    s_y,
    77,
    s_z,
    78,
    s_z,
    79,
    s_x,
    81,
    s_z,
    82,
    s_z,
  ]);
  var s_KVb = function (a) {
    return {
      select: 1,
      deselect: 2,
    }[a];
  };
  var s_JVb = function (a) {
    return {
      webhp: 1,
    }[a];
  };
  var s_IVb = function (a) {
    return {
      success: 1,
      error: 2,
    }[a];
  };
  var s_LVb = function (a) {
    return {
      init: 1,
      tts_on: 2,
      fem_tts_on: 3,
      mas_tts_on: 4,
      src_tts_on: 5,
      tts_off: 6,
      fem_tts_off: 7,
      mas_tts_off: 8,
      src_tts_off: 9,
      clear_source: 10,
      too_long: 11,
      error: 12,
      copy_target: 13,
      swap: 14,
      lang_change: 15,
      suggest: 16,
      ignoreSpelling: 17,
      source_edit: 18,
      voice_on: 19,
      voice_off: 20,
      lens_open: 21,
      lens_fail: 22,
      edit: 23,
      edit_cancel: 24,
      pick_bilingual: 25,
      assistant_chip: 26,
    }[a];
  };
  var s_NVb = function (a) {
    return {
      rglr: 1,
      rcnt: 2,
      srch: 3,
    }[a];
  };
  var s_MVb = function (a) {
    return {
      edit: 1,
      voice: 2,
    }[a];
  };
  var s_PVb = function (a) {
    return {
      tgt: 1,
      tgt_fem: 2,
      tgt_mas: 3,
      src: 4,
    }[a];
  };
  var s_OVb = function (a) {
    return {
      ttsstart: 1,
      ttsstop: 2,
      ttsplaystart: 3,
    }[a];
  };
  var s_QVb = function (a) {
    return {
      start: 1,
      stop: 2,
      onstart: 3,
      noinput: 4,
      onspeechstart: 5,
      abort: 6,
    }[a];
  };
  var s_RVb = function (a) {
    var b = s_ZUb.ka(a);
    a = [];
    for (var c = 0; c < b.length; c += 3) {
      var d = a,
        e = d.push;
      var f = new s_NXb();
      f = s_d(f, 1, b[c]);
      f = s_d(f, 2, b[c + 1]);
      f = s_d(f, 3, Number(b[c + 2]));
      e.call(d, f);
    }
    b = new s_PXb();
    return s_9a(b, 1, a);
  };
  var s_VVb = function (a) {
    return s_5b(a, s_SXb);
  };
  var s_UVb = function (a) {
    return s_5b(a, s_BXb);
  };
  var s_TVb = function (a) {
    return s_5b(a, s_LXb);
  };
  var s_SVb = function (a) {
    return s_5b(a, s_kWb);
  };
  var s_9q = function (a, b) {
      b = void 0 === b ? {} : b;
      return s_TXb({
        triggerElement: b.triggerElement,
        interactionContext: b.interactionContext,
        userAction: b.userAction,
        hQb: a,
        data: b.data,
        Aab: b.Aab,
      });
    },
    s_T = function (a, b) {
      b = void 0 === b ? {} : b;
      return s_TXb({
        triggerElement: a,
        interactionContext: b.interactionContext,
        userAction: b.userAction,
        data: b.data,
        Aab: b.Aab,
      });
    },
    s_TXb = s_YVb,
    s_UXb = s_YVb,
    s_FVb,
    s_VXb = {},
    s_XVb =
      ((s_VXb.show = 1),
      (s_VXb.hide = 2),
      (s_VXb.insert = 3),
      (s_VXb["dedupe-insert"] = 4),
      (s_VXb.copy = 5),
      s_VXb),
    s_WXb = new Set(
      "ct cad url mid fun altimagesseen autoswipes predicate filtertext cshid cld flb jl lgd mlt ltd lvc poz qop mtl zld agsac pntst pntfc pnte sfc iqidx segment_text crust scas dsq ddq prov serv tr webp fpc sidx bidx idx stmt item action hl after cst interaction lang sl tl stp ql event spkr textlen time voice lei cid oid subscribed categoryid mokas topProductIds aqid arfpi arfsii arfbac authuser isNationalMap radius sabjti vwd vpp stl prnuid jbd_pda_s eventdate eventname cdot mskb shdeb".split(
        " ",
      ),
    ),
    s_GVb = function (a) {
      var b = [],
        c;
      for (c in a) s_WXb.has(c) || b.push(c);
      0 < b.length && s_ac(Error("Ad`" + b));
    };
  s_bea = function (a) {
    return s_Pi(a);
  };
  s_TXb = function (a) {
    if (a.Aab) return s_UXb(a);
    a.data && s_GVb(a.data);
    return s_$da(a);
  };
} catch (e) {
  _DumpException(e);
}
try {
  var s_hr = function () {
      return (
        !s_SYb() &&
        (s_ka("iPod") || s_ka("iPhone") || s_ka("Android") || s_ka("IEMobile"))
      );
    },
    s_SYb = function () {
      return (
        s_ka("iPad") || (s_ka("Android") && !s_ka("Mobile")) || s_ka("Silk")
      );
    },
    s_ir = function () {
      return !s_hr() && !s_SYb();
    };
} catch (e) {
  _DumpException(e);
}
try {
  var s_TYb = function (a) {
      if (!arguments.length) return [];
      for (
        var b = [], c = arguments[0].length, d = 1;
        d < arguments.length;
        d++
      )
        arguments[d].length < c && (c = arguments[d].length);
      for (d = 0; d < c; d++) {
        for (var e = [], f = 0; f < arguments.length; f++)
          e.push(arguments[f][d]);
        b.push(e);
      }
      return b;
    },
    s_jr = new Map(),
    s_UYb = s_G("FLsy8");
  s_jr.set("abuse_dropdown", s_UYb);
  var s_VYb = s_G("baGTZc");
  s_jr.set("ac_ar", s_VYb);
  var s_WYb = s_G("bh3Zn");
  s_jr.set("ac_bc", s_WYb);
  var s_XYb = s_G("M3Mlu");
  s_jr.set("ac_be", s_XYb);
  var s_YYb = s_G("jnvnaf");
  s_jr.set("ac_bt", s_YYb);
  var s_ZYb = s_G("sQFYsc");
  s_jr.set("ac_cs", s_ZYb);
  var s__Yb = s_G("bkL5dc");
  s_jr.set("ac_fc", s__Yb);
  var s_0Yb = s_G("T973lb");
  s_jr.set("ac_fe", s_0Yb);
  var s_1Yb = s_G("uwoEDe");
  s_jr.set("ac_ir", s_1Yb);
  var s_2Yb = s_G("lgrA4c");
  s_jr.set("ac_lvs", s_2Yb);
  var s_3Yb = s_G("u16dZe");
  s_jr.set("ac_rc", s_3Yb);
  var s_4Yb = s_G("ZcZT7");
  s_jr.set("accept", s_4Yb);
  var s_5Yb = s_G("QRorz");
  s_jr.set("acex", s_5Yb);
  var s_6Yb = s_G("XsfZhc");
  s_jr.set("actn_lch", s_6Yb);
  var s_7Yb = s_G("HRlsE");
  s_jr.set("actn_lcl", s_7Yb);
  var s_8Yb = s_G("euqYIe");
  s_jr.set("actn_rdp", s_8Yb);
  var s_9Yb = s_G("VotO5e");
  s_jr.set("actn_sch", s_9Yb);
  var s_$Yb = s_G("CXIWfd");
  s_jr.set("actn_scl", s_$Yb);
  var s_aZb = s_G("Fre9gc");
  s_jr.set("actn_srt", s_aZb);
  var s_bZb = s_G("xok12c");
  s_jr.set("add_related_product_click", s_bZb);
  var s_cZb = s_G("DkkcUc");
  s_jr.set("add_to_home_screen_action", s_cZb);
  var s_dZb = s_G("gmWxtb");
  s_jr.set("addphoto", s_dZb);
  var s_eZb = s_G("ASLTGc");
  s_jr.set("addvideo", s_eZb);
  var s_fZb = s_G("z70VDd");
  s_jr.set("aj_bck", s_fZb);
  var s_gZb = s_G("H5cAG");
  s_jr.set("aj_dcp", s_gZb);
  var s_hZb = s_G("MTDbVc");
  s_jr.set("aj_ecp", s_hZb);
  var s_iZb = s_G("lHwYG");
  s_jr.set("aj_ficlk", s_iZb);
  var s_jZb = s_G("NIrDeb");
  s_jr.set("aj_mbclk", s_jZb);
  var s_kZb = s_G("a61FBe");
  s_jr.set("aj_qliclk", s_kZb);
  var s_lZb = s_G("Kqqsbb");
  s_jr.set("aj_rcclk", s_lZb);
  var s_mZb = s_G("Nvt4Cf");
  s_jr.set("aj_sbclk", s_mZb);
  var s_nZb = s_G("pLNu0c");
  s_jr.set("aj_vcclk", s_nZb);
  var s_oZb = s_G("LRV2xe");
  s_jr.set("aj_wvcl", s_oZb);
  var s_pZb = s_G("imAz2c");
  s_jr.set("ampclosed", s_pZb);
  var s_qZb = s_G("T6x6xf");
  s_jr.set("ampview", s_qZb);
  var s_rZb = s_G("xfBPd");
  s_jr.set("ampvis", s_rZb);
  var s_sZb = s_G("xJr8Ff");
  s_jr.set("answer", s_sZb);
  var s_tZb = s_G("FToVDf");
  s_jr.set("answerListClose", s_tZb);
  var s_uZb = s_G("XqrqAb");
  s_jr.set("answer_button_clicked", s_uZb);
  var s_vZb = s_G("GSRtwb");
  s_jr.set("app_dl", s_vZb);
  var s_wZb = s_G("rKRqBc");
  s_jr.set("apply", s_wZb);
  var s_xZb = s_G("RPnKAb");
  s_jr.set("apply_feedback_style", s_xZb);
  var s_yZb = s_G("F7mjVb");
  s_jr.set("asyncComplete", s_yZb);
  var s_zZb = s_G("xBaS2c");
  s_jr.set("asyncError", s_zZb);
  var s_AZb = s_G("wUVKEf");
  s_jr.set("asyncFilled", s_AZb);
  var s_BZb = s_G("sW77Jf");
  s_jr.set("asyncLoading", s_BZb);
  var s_CZb = s_G("pob4qc");
  s_jr.set("asyncReset", s_CZb);
  var s_DZb = s_G("zVy2Zd");
  s_jr.set("attributionClicked", s_DZb);
  var s_EZb = s_G("GIaasc");
  s_jr.set("audg_upgrade", s_EZb);
  var s_FZb = s_G("STNFMd");
  s_jr.set("auto_expand", s_FZb);
  var s_GZb = s_G("u6JqG");
  s_jr.set("b_cs", s_GZb);
  var s_HZb = s_G("pOKbc");
  s_jr.set("ba_el", s_HZb);
  var s_IZb = s_G("XUvoxf");
  s_jr.set("ba_ls", s_IZb);
  var s_JZb = s_G("w3YEEc");
  s_jr.set("back_action", s_JZb);
  var s_KZb = s_G("hD9DJb");
  s_jr.set("bd_cancel_business", s_KZb);
  var s_LZb = s_G("Qc1oQ");
  s_jr.set("bd_redirect_to_GMB", s_LZb);
  var s_MZb = s_G("San1hb");
  s_jr.set("before_collapse", s_MZb);
  var s_NZb = s_G("JyxW2d");
  s_jr.set("before_expand", s_NZb);
  var s_OZb = s_G("IVUAVd");
  s_jr.set("blank", s_OZb);
  var s_PZb = s_G("OoU6Je");
  s_jr.set("bs_close", s_PZb);
  var s_QZb = s_G("u3CCGe");
  s_jr.set("bs_closed", s_QZb);
  var s_RZb = s_G("womQne");
  s_jr.set("bs_open", s_RZb);
  var s_SZb = s_G("RJHW");
  s_jr.set("bs_opened", s_SZb);
  var s_TZb = s_G("N8p5be");
  s_jr.set("buttonClick", s_TZb);
  var s_UZb = s_G("SIz2E");
  s_jr.set("cal_enter_day", s_UZb);
  var s_VZb = s_G("Es1Dad");
  s_jr.set("cal_leave_day", s_VZb);
  var s_WZb = s_G("cO7eI");
  s_jr.set("cal_select_day", s_WZb);
  var s_XZb = s_G("Tfq1Fd");
  s_jr.set("calculator_switch_to_home_budget", s_XZb);
  var s_YZb = s_G("Ftrhz");
  s_jr.set("calculator_switch_to_monthly_payment", s_YZb);
  var s_ZZb = s_G("Dfidg");
  s_jr.set("cancel", s_ZZb);
  var s__Zb = s_G("LeYGHd");
  s_jr.set("cancelQuestion", s__Zb);
  var s_0Zb = s_G("elVNVc");
  s_jr.set("cancel_discard", s_0Zb);
  var s_1Zb = s_G("mCPMIf");
  s_jr.set("cancel_form", s_1Zb);
  var s_2Zb = s_G("I0oyDf");
  s_jr.set("canvas_change", s_2Zb);
  var s_3Zb = s_G("ssGjLd");
  s_jr.set("carousel_scrolled", s_3Zb);
  var s_4Zb = s_G("cn69xf");
  s_jr.set("categorySelect", s_4Zb);
  var s_5Zb = s_G("Wtqxqe");
  s_jr.set("cc_input_value_change", s_5Zb);
  var s_6Zb = s_G("eoysHf");
  s_jr.set("cc_selected_value_change", s_6Zb);
  var s_7Zb = s_G("hKgkec");
  s_jr.set("cc_swap", s_7Zb);
  var s_8Zb = s_G("J9CM2d");
  s_jr.set("change_active_index", s_8Zb);
  var s_9Zb = s_G("RQkP6b");
  s_jr.set("change_associated_topic", s_9Zb);
  var s_$Zb = s_G("SJKe6b");
  s_jr.set("change_loc", s_$Zb);
  var s_a_b = s_G("W3WT0c");
  s_jr.set("change_sort", s_a_b);
  var s_b_b = s_G("tRMLve");
  s_jr.set("change_source", s_b_b);
  var s_c_b = s_G("M2DtDd");
  s_jr.set("chart_touch", s_c_b);
  var s_d_b = s_G("AKIwde");
  s_jr.set("checkin", s_d_b);
  var s_e_b = s_G("nCYvoe");
  s_jr.set("checkout", s_e_b);
  var s_f_b = s_G("ZXzOJd");
  s_jr.set("chip", s_f_b);
  var s_g_b = s_G("QxCCNc");
  s_jr.set("chip_selected", s_g_b);
  var s_h_b = s_G("PFy8sf");
  s_jr.set("ci", s_h_b);
  var s_i_b = s_G("ZAPqle");
  s_jr.set("ci_if", s_i_b);
  var s_j_b = s_G("YIQI0c");
  s_jr.set("ci_pi", s_j_b);
  var s_k_b = s_G("Rrdfj");
  s_jr.set("cl", s_k_b);
  var s_l_b = s_G("wxLm");
  s_jr.set("cl_mi", s_l_b);
  var s_m_b = s_G("r7r31");
  s_jr.set("clearText", s_m_b);
  var s_n_b = s_G("Cpljcb");
  s_jr.set("clear_fil", s_n_b);
  var s_o_b = s_G("TbY9Lc");
  s_jr.set("clear_filter", s_o_b);
  var s_p_b = s_G("xiGls");
  s_jr.set("clear_filters", s_p_b);
  var s_q_b = s_G("hmb6Ye");
  s_jr.set("clear_menu_item", s_q_b);
  var s_r_b = s_G("RPeSGc");
  s_jr.set("Click", s_r_b);
  var s_s_b = s_G("wjdXse");
  s_jr.set("clickChip", s_s_b);
  var s_t_b = s_G("DUaFse");
  s_jr.set("clickFollow", s_t_b);
  var s_u_b = s_G("jqFClf");
  s_jr.set("clickMic", s_u_b);
  var s_v_b = s_G("xvdpvd");
  s_jr.set("clickMobileOverviewTile", s_v_b);
  var s_w_b = s_G("NNgXy");
  s_jr.set("clickNumAnswers", s_w_b);
  var s_x_b = s_G("Bk6Ofd");
  s_jr.set("clickOverviewCategory", s_x_b);
  var s_y_b = s_G("rNIyee");
  s_jr.set("clickOverviewTile", s_y_b);
  var s_z_b = s_G("dfZ86b");
  s_jr.set("clickPost", s_z_b);
  var s_A_b = s_G("fHVUcb");
  s_jr.set("clickReplace", s_A_b);
  var s_B_b = s_G("u29aGd");
  s_jr.set("clickThankYouPage", s_B_b);
  var s_C_b = s_G("ScNsG");
  s_jr.set("clickUndo", s_C_b);
  var s_D_b = s_G("QTy97");
  s_jr.set("clickViewAll", s_D_b);
  var s_E_b = s_G("DWTZ7c");
  s_jr.set("click_answer", s_E_b);
  var s_F_b = s_G("YRcfKf");
  s_jr.set("click_answer_button", s_F_b);
  var s_G_b = s_G("Iv5xjd");
  s_jr.set("click_change_fact", s_G_b);
  var s_H_b = s_G("khnv9e");
  s_jr.set("click_close_button", s_H_b);
  var s_I_b = s_G("nrSNlf");
  s_jr.set("click_follow_deeplink", s_I_b);
  var s_J_b = s_G("cI5FGd");
  s_jr.set("click_missing_fact", s_J_b);
  var s_K_b = s_G("TilCCd");
  s_jr.set("click_more_button", s_K_b);
  var s_L_b = s_G("kX7O9c");
  s_jr.set("click_question", s_L_b);
  var s_M_b = s_G("gMSTqb");
  s_jr.set("click_reaction", s_M_b);
  var s_N_b = s_G("MWKZJd");
  s_jr.set("click_row", s_N_b);
  var s_O_b = s_G("kLurm");
  s_jr.set("click_share_button", s_O_b);
  var s_P_b = s_G("SIjSfe");
  s_jr.set("click_suggested_fact", s_P_b);
  var s_Q_b = s_G("rhVEn");
  s_jr.set("click_view_all_questions", s_Q_b);
  var s_R_b = s_G("On0jHb");
  s_jr.set("click_view_answer", s_R_b);
  var s_S_b = s_G("lxXtyd");
  s_jr.set("click_vote_button", s_S_b);
  var s_T_b = s_G("Sdjjec");
  s_jr.set("closeCompImmersive", s_T_b);
  var s_U_b = s_G("Cp5AA");
  s_jr.set("closeDialog", s_U_b);
  var s_V_b = s_G("WFKY7c");
  s_jr.set("closeFpState", s_V_b);
  var s_W_b = s_G("CTPuBe");
  s_jr.set("closeGifSelector", s_W_b);
  var s_X_b = s_G("VWIDGc");
  s_jr.set("closeIV", s_X_b);
  var s_Y_b = s_G("bHlLW");
  s_jr.set("closeModal", s_Y_b);
  var s_Z_b = s_G("GR2IZb");
  s_jr.set("closePage", s_Z_b);
  var s___b = s_G("uDhGee");
  s_jr.set("closePresto", s___b);
  var s_0_b = s_G("Fo0Zmd");
  s_jr.set("closeRIV", s_0_b);
  var s_1_b = s_G("LCPY0d");
  s_jr.set("closeTicketsDialog", s_1_b);
  var s_2_b = s_G("EkG9Kc");
  s_jr.set("closeTryOn", s_2_b);
  var s_3_b = s_G("I6Hk5");
  s_jr.set("close_button_action", s_3_b);
  var s_4_b = s_G("mLJ4Tb");
  s_jr.set("close_button_clicked", s_4_b);
  var s_5_b = s_G("yO1Xhe");
  s_jr.set("close_click", s_5_b);
  var s_6_b = s_G("C7nb9c");
  s_jr.set("close_clicked", s_6_b);
  var s_7_b = s_G("OFAOeb");
  s_jr.set("close_dialog", s_7_b);
  var s_8_b = s_G("JEmxj");
  s_jr.set("close_expandable_content", s_8_b);
  var s_9_b = s_G("mTqD2");
  s_jr.set("close_feedback", s_9_b);
  var s_$_b = s_G("o2W8Ec");
  s_jr.set("close_feedback_starter_dialog", s_$_b);
  var s_a0b = s_G("ojWJW");
  s_jr.set("close_fpv", s_a0b);
  var s_b0b = s_G("sBnhle");
  s_jr.set("close_fullpage", s_b0b);
  var s_c0b = s_G("TPhhUb");
  s_jr.set("close_immersive", s_c0b);
  var s_d0b = s_G("A2ljuf");
  s_jr.set("close_language_picker", s_d0b);
  var s_e0b = s_G("zJrr8e");
  s_jr.set("close_lightbox", s_e0b);
  var s_f0b = s_G("E2DPGe");
  s_jr.set("close_onboardingBanner", s_f0b);
  var s_g0b = s_G("j6elkf");
  s_jr.set("close_popup", s_g0b);
  var s_h0b = s_G("SDholc");
  s_jr.set("close_promo", s_h0b);
  var s_i0b = s_G("WfCwMc");
  s_jr.set("close_reviews_dialog", s_i0b);
  var s_j0b = s_G("R3WvEf");
  s_jr.set("close_thank_you_dialog", s_j0b);
  var s_k0b = s_G("xh7EKb");
  s_jr.set("close_view", s_k0b);
  var s_l0b = s_G("hMTL1d");
  s_jr.set("close_why_this_result_dialog", s_l0b);
  var s_m0b = s_G("J4x5Zb");
  s_jr.set("closed", s_m0b);
  var s_n0b = s_G("AGP3D");
  s_jr.set("closing_cross_click", s_n0b);
  var s_o0b = s_G("AJnhzf");
  s_jr.set("cls_dg", s_o0b);
  var s_p0b = s_G("KsPF8c");
  s_jr.set("co", s_p0b);
  var s_q0b = s_G("E7WQoe");
  s_jr.set("compare_filter_update", s_q0b);
  var s_r0b = s_G("PqpN0e");
  s_jr.set("complex_click", s_r0b);
  var s_s0b = s_G("PAgvYd");
  s_jr.set("complex_exit", s_s0b);
  var s_t0b = s_G("vd8hte");
  s_jr.set("compose_question", s_t0b);
  var s_u0b = s_G("vvjigf");
  s_jr.set("composer_cancel", s_u0b);
  var s_v0b = s_G("HaYcCc");
  s_jr.set("conf_sl", s_v0b);
  var s_w0b = s_G("iT1goe");
  s_jr.set("confirm_discard", s_w0b);
  var s_x0b = s_G("SoGc2c");
  s_jr.set("contestant_click", s_x0b);
  var s_y0b = s_G("fH3a5c");
  s_jr.set("contestant_score_change", s_y0b);
  var s_z0b = s_G("v3gned");
  s_jr.set("continue_to_site", s_z0b);
  var s_A0b = s_G("gWtsbd");
  s_jr.set("copy_code", s_A0b);
  var s_B0b = s_G("uJqyff");
  s_jr.set("createSite", s_B0b);
  var s_C0b = s_G("SjYL9d");
  s_jr.set("csoff", s_C0b);
  var s_D0b = s_G("H3cfOc");
  s_jr.set("cson", s_D0b);
  var s_E0b = s_G("EormBc");
  s_jr.set("ct_ia", s_E0b);
  var s_F0b = s_G("gEKQDb");
  s_jr.set("ct_ic", s_F0b);
  var s_G0b = s_G("dOwrvc");
  s_jr.set("cu_open_dialog", s_G0b);
  var s_H0b = s_G("bC8xSc");
  s_jr.set("custom_dialog_send", s_H0b);
  var s_I0b = s_G("FqZ93");
  s_jr.set("custom_dialog_show", s_I0b);
  var s_J0b = s_G("hQXqwd");
  s_jr.set("d3bn_up", s_J0b);
  var s_K0b = s_G("JRx8oe");
  s_jr.set("date_step", s_K0b);
  var s_L0b = s_G("Lpp5Ab");
  s_jr.set("dates_changed", s_L0b);
  var s_M0b = s_G("IoCZ2");
  s_jr.set("dcu", s_M0b);
  var s_N0b = s_G("qOIWId");
  s_jr.set("dd_cancel_delete", s_N0b);
  var s_O0b = s_G("m3zqKe");
  s_jr.set("dd_confirm_delete", s_O0b);
  var s_P0b = s_G("JPZ0Pe");
  s_jr.set("dd_dismissed", s_P0b);
  var s_Q0b = s_G("ERBpD");
  s_jr.set("dd_ok", s_Q0b);
  var s_R0b = s_G("Z8J2Ob");
  s_jr.set("debugDocButtonPress", s_R0b);
  var s_S0b = s_G("tPak1b");
  s_jr.set("dec", s_S0b);
  var s_T0b = s_G("LjVEJd");
  s_jr.set("delete_chip", s_T0b);
  var s_U0b = s_G("SKAaMe");
  s_jr.set("desclink", s_U0b);
  var s_V0b = s_G("A8nJ6b");
  s_jr.set("description1_input_change", s_V0b);
  var s_W0b = s_G("sczChb");
  s_jr.set("description2_input_change", s_W0b);
  var s_X0b = s_G("AsnBmb");
  s_jr.set("destination_overlay_clicked", s_X0b);
  var s_Y0b = s_G("kXTKoe");
  s_jr.set("destination_overlay_mouseenter", s_Y0b);
  var s_Z0b = s_G("Evbz4");
  s_jr.set("destination_overlay_mouseleave", s_Z0b);
  var s__0b = s_G("EWuz5d");
  s_jr.set("destination_selected", s__0b);
  var s_00b = s_G("tg9G5c");
  s_jr.set("dg_display_content", s_00b);
  var s_10b = s_G("orHqSd");
  s_jr.set("dialog_cancel", s_10b);
  var s_20b = s_G("RPNbBd");
  s_jr.set("dialog_cancel_button_clicked", s_20b);
  var s_30b = s_G("Vkia7b");
  s_jr.set("dialog_closed", s_30b);
  var s_40b = s_G("VWfVjc");
  s_jr.set("dialog_ok_button_clicked", s_40b);
  var s_50b = s_G("aftQmf");
  s_jr.set("dialog_rates_update", s_50b);
  var s_60b = s_G("uV5She");
  s_jr.set("directions_state_push", s_60b);
  var s_70b = s_G("vQVDrf");
  s_jr.set("disable_send_button", s_70b);
  var s_80b = s_G("jQAnd");
  s_jr.set("dismiss", s_80b);
  var s_90b = s_G("qmzh0d");
  s_jr.set("dismiss_form", s_90b);
  var s_$0b = s_G("NiU3ee");
  s_jr.set("dismiss_warmup", s_$0b);
  var s_a1b = s_G("TgMM6");
  s_jr.set("dismissed", s_a1b);
  var s_b1b = s_G("lvNy4b");
  s_jr.set("displayClearButton", s_b1b);
  var s_c1b = s_G("DxtH2b");
  s_jr.set("dkp", s_c1b);
  var s_d1b = s_G("JxehRb");
  s_jr.set("dlt_md", s_d1b);
  var s_e1b = s_G("AA80Ke");
  s_jr.set("dmp_expand_more_item", s_e1b);
  var s_f1b = s_G("CrxsIb");
  s_jr.set("done", s_f1b);
  var s_g1b = s_G("kNOP9c");
  s_jr.set("dp_menu_reg_caption", s_g1b);
  var s_h1b = s_G("V4hLle");
  s_jr.set("dp_resolve", s_h1b);
  var s_i1b = s_G("SCQ4Hd");
  s_jr.set("dst_close_kp", s_i1b);
  var s_j1b = s_G("L3XzFc");
  s_jr.set("dt5_dismiss", s_j1b);
  var s_k1b = s_G("uTJIk");
  s_jr.set("dt5_more_info", s_k1b);
  var s_l1b = s_G("YCyyCf");
  s_jr.set("duf_eekp", s_l1b);
  var s_m1b = s_G("CpItae");
  s_jr.set("duf_init", s_m1b);
  var s_n1b = s_G("YuhXef");
  s_jr.set("duf_sekp", s_n1b);
  var s_o1b = s_G("NmE0xf");
  s_jr.set("duffyClose", s_o1b);
  var s_p1b = s_G("P12Uf");
  s_jr.set("duffyReady", s_p1b);
  var s_q1b = s_G("welXHc");
  s_jr.set("dum1", s_q1b);
  var s_r1b = s_G("RGzmzc");
  s_jr.set("dum2", s_r1b);
  var s_s1b = s_G("dRyxqe");
  s_jr.set("dum3", s_s1b);
  var s_t1b = s_G("n9owOb");
  s_jr.set("dum4", s_t1b);
  var s_u1b = s_G("XqLU4b");
  s_jr.set("ed_AllEvents", s_u1b);
  var s_v1b = s_G("YI5p9d");
  s_jr.set("ed_HomePage", s_v1b);
  var s_w1b = s_G("kEHEgb");
  s_jr.set("ed_Progressbar", s_w1b);
  var s_x1b = s_G("jjNZnb");
  s_jr.set("ed_ResultsPage", s_x1b);
  var s_y1b = s_G("XXaZKd");
  s_jr.set("ed_SavedPage", s_y1b);
  var s_z1b = s_G("h21E7b");
  s_jr.set("ed_filled", s_z1b);
  var s_A1b = s_G("wYmjnf");
  s_jr.set("ed_loading", s_A1b);
  var s_B1b = s_G("oVHaYc");
  s_jr.set("ed_menuClick", s_B1b);
  var s_C1b = s_G("Rbj2J");
  s_jr.set("edit", s_C1b);
  var s_D1b = s_G("Iu9urb");
  s_jr.set("edit_arrival", s_D1b);
  var s_E1b = s_G("qm6LG");
  s_jr.set("edit_date", s_E1b);
  var s_F1b = s_G("NSJpVd");
  s_jr.set("edit_departure", s_F1b);
  var s_G1b = s_G("kpPysf");
  s_jr.set("edu_b", s_G1b);
  var s_H1b = s_G("C0jIpc");
  s_jr.set("edu_u", s_H1b);
  var s_I1b = s_G("PQ1OU");
  s_jr.set("eh_retry", s_I1b);
  var s_J1b = s_G("IGuefc");
  s_jr.set("email_input_validated", s_J1b);
  var s_K1b = s_G("YVwGCc");
  s_jr.set("enable_send_button", s_K1b);
  var s_L1b = s_G("a8roX");
  s_jr.set("ended", s_L1b);
  var s_M1b = s_G("oCVaib");
  s_jr.set("enter_gallery_view", s_M1b);
  var s_N1b = s_G("XwT0l");
  s_jr.set("enter_immersive", s_N1b);
  var s_O1b = s_G("FvAg6e");
  s_jr.set("enter_immersive_view", s_O1b);
  var s_P1b = s_G("T0cLR");
  s_jr.set("eob_sb_ra", s_P1b);
  var s_Q1b = s_G("AEWXLc");
  s_jr.set("ep_close", s_Q1b);
  var s_R1b = s_G("yVOZ7d");
  s_jr.set("ep_idback", s_R1b);
  var s_S1b = s_G("ZW0ne");
  s_jr.set("ep_idopen", s_S1b);
  var s_T1b = s_G("Vmvuuc");
  s_jr.set("ep_o", s_T1b);
  var s_U1b = s_G("kxhOy");
  s_jr.set("ercs_hide", s_U1b);
  var s_V1b = s_G("OaXUlc");
  s_jr.set("ercs_show", s_V1b);
  var s_W1b = s_G("AKXI3e");
  s_jr.set("errorRetry", s_W1b);
  var s_X1b = s_G("C9oCse");
  s_jr.set("esb_as", s_X1b);
  var s_Y1b = s_G("xKag5d");
  s_jr.set("exit_view", s_Y1b);
  var s_Z1b = s_G("OXD6tc");
  s_jr.set("expand", s_Z1b);
  var s__1b = s_G("F2wUFc");
  s_jr.set("expand_click", s__1b);
  var s_01b = s_G("u0Mvte");
  s_jr.set("f_f", s_01b);
  var s_11b = s_G("zCBidc");
  s_jr.set("f_mis", s_11b);
  var s_21b = s_G("GZOiOb");
  s_jr.set("fc_ftn", s_21b);
  var s_31b = s_G("qJ508e");
  s_jr.set("fc_ftp", s_31b);
  var s_41b = s_G("XQFOyc");
  s_jr.set("fc_hmc", s_41b);
  var s_51b = s_G("EKXOFe");
  s_jr.set("fc_if", s_51b);
  var s_61b = s_G("EEZOrb");
  s_jr.set("fc_sm", s_61b);
  var s_71b = s_G("WlVt1");
  s_jr.set("fcd_cls", s_71b);
  var s_81b = s_G("K55ecc");
  s_jr.set("fce", s_81b);
  var s_91b = s_G("jUyrtc");
  s_jr.set("feedback", s_91b);
  var s_$1b = s_G("QOgKb");
  s_jr.set("fetch_offers", s_$1b);
  var s_a2b = s_G("jIVsxf");
  s_jr.set("fever_open", s_a2b);
  var s_b2b = s_G("tFVAV");
  s_jr.set("filter_button_register", s_b2b);
  var s_c2b = s_G("EctIRc");
  s_jr.set("filter_buttons_change", s_c2b);
  var s_d2b = s_G("VjBphb");
  s_jr.set("fin-atw", s_d2b);
  var s_e2b = s_G("DPzf8");
  s_jr.set("fl_ap", s_e2b);
  var s_f2b = s_G("dMeVOd");
  s_jr.set("flights_filled", s_f2b);
  var s_g2b = s_G("tctIJf");
  s_jr.set("flp_sbsbs_clrs", s_g2b);
  var s_h2b = s_G("FCirM");
  s_jr.set("flt_fo_updated", s_h2b);
  var s_i2b = s_G("Ky6Rkd");
  s_jr.set("focus", s_i2b);
  var s_j2b = s_G("f2om9");
  s_jr.set("focusDestination", s_j2b);
  var s_k2b = s_G("gqcBzb");
  s_jr.set("focusMoreButton", s_k2b);
  var s_l2b = s_G("AVjhmb");
  s_jr.set("focusOnNextCard", s_l2b);
  var s_m2b = s_G("cJ6dfc");
  s_jr.set("focusOnReactButton", s_m2b);
  var s_n2b = s_G("SQvVZc");
  s_jr.set("focusOrigin", s_n2b);
  var s_o2b = s_G("zh5SId");
  s_jr.set("focus_begin_sentinel", s_o2b);
  var s_p2b = s_G("D6s9Lb");
  s_jr.set("focus_end_sentinel", s_p2b);
  var s_q2b = s_G("ie7Cfd");
  s_jr.set("follow", s_q2b);
  var s_r2b = s_G("t3L5Dd");
  s_jr.set("fp_s", s_r2b);
  var s_s2b = s_G("GlWk7e");
  s_jr.set("fpml_open", s_s2b);
  var s_t2b = s_G("spTdzd");
  s_jr.set("fpv_ac", s_t2b);
  var s_u2b = s_G("kGTzi");
  s_jr.set("fpv_back", s_u2b);
  var s_v2b = s_G("GK8ajb");
  s_jr.set("fpv_close", s_v2b);
  var s_w2b = s_G("RlhuIc");
  s_jr.set("fpv_fg", s_w2b);
  var s_x2b = s_G("B206Ve");
  s_jr.set("fpv_fl", s_x2b);
  var s_y2b = s_G("Zmznff");
  s_jr.set("fpv_open", s_y2b);
  var s_z2b = s_G("Ms5Ldd");
  s_jr.set("fpv_st", s_z2b);
  var s_A2b = s_G("AgAWmc");
  s_jr.set("fpv_tc", s_A2b);
  var s_B2b = s_G("nNRzZb");
  s_jr.set("full_review_snippet", s_B2b);
  var s_C2b = s_G("Cysts");
  s_jr.set("fullscreen_expander_click", s_C2b);
  var s_D2b = s_G("KJg4v");
  s_jr.set("fw_atw_cl", s_D2b);
  var s_E2b = s_G("gBBazc");
  s_jr.set("fw_atw_open", s_E2b);
  var s_F2b = s_G("LuGk5");
  s_jr.set("fw_change_tab", s_F2b);
  var s_G2b = s_G("xDEzyf");
  s_jr.set("fw_chart_filled", s_G2b);
  var s_H2b = s_G("vAfRge");
  s_jr.set("fw_chart_update_error", s_H2b);
  var s_I2b = s_G("ukYEA");
  s_jr.set("fw_clear_comparison", s_I2b);
  var s_J2b = s_G("ziwzFb");
  s_jr.set("fw_close_searchbox", s_J2b);
  var s_K2b = s_G("wwLXJe");
  s_jr.set("fw_compare", s_K2b);
  var s_L2b = s_G("vLU9fb");
  s_jr.set("fw_ctap", s_L2b);
  var s_M2b = s_G("ZEkUSe");
  s_jr.set("fw_flw_clk", s_M2b);
  var s_N2b = s_G("zJhEab");
  s_jr.set("fw_forced_retry", s_N2b);
  var s_O2b = s_G("BLb79e");
  s_jr.set("fw_period", s_O2b);
  var s_P2b = s_G("bHJcAf");
  s_jr.set("fw_pvu", s_P2b);
  var s_Q2b = s_G("Yb9zf");
  s_jr.set("fw_retry", s_Q2b);
  var s_R2b = s_G("nDqH6b");
  s_jr.set("fw_unflw_clk", s_R2b);
  var s_S2b = s_G("YP69Ee");
  s_jr.set("fw_vcu", s_S2b);
  var s_T2b = s_G("ayHzMd");
  s_jr.set("g_dropdown_hide", s_T2b);
  var s_U2b = s_G("k2B5Ae");
  s_jr.set("g_dropdown_show", s_U2b);
  var s_V2b = s_G("QNVdCc");
  s_jr.set("gci_hidden", s_V2b);
  var s_W2b = s_G("JDhVeb");
  s_jr.set("gci_shown", s_W2b);
  var s_X2b = s_G("Kfk0ae");
  s_jr.set("getSelectedDateTime", s_X2b);
  var s_Y2b = s_G("yQeBBb");
  s_jr.set("getTickets", s_Y2b);
  var s_Z2b = s_G("rfXfvb");
  s_jr.set("get_started_click", s_Z2b);
  var s__2b = s_G("h6pGz");
  s_jr.set("ghs_open_profile", s__2b);
  var s_02b = s_G("DTdsTb");
  s_jr.set("ghs_profile_render_reviews", s_02b);
  var s_12b = s_G("gnVgJ");
  s_jr.set("glass_pane_clicked", s_12b);
  var s_22b = s_G("gBMYof");
  s_jr.set("go", s_22b);
  var s_32b = s_G("moyYcd");
  s_jr.set("go_back", s_32b);
  var s_42b = s_G("ymDEcd");
  s_jr.set("go_back_click", s_42b);
  var s_52b = s_G("IoXUrb");
  s_jr.set("go_next", s_52b);
  var s_62b = s_G("qAEft");
  s_jr.set("go_previous", s_62b);
  var s_72b = s_G("Iet60b");
  s_jr.set("gws_travel_header_date_change", s_72b);
  var s_82b = s_G("pe2SBf");
  s_jr.set("gws_travel_header_date_selector_init", s_82b);
  var s_92b = s_G("LlCLOc");
  s_jr.set("gws_travel_header_destination_change", s_92b);
  var s_$2b = s_G("RRj9gb");
  s_jr.set("gws_travel_header_destination_selector_init", s_$2b);
  var s_a3b = s_G("gpjJc");
  s_jr.set("gws_travel_header_origin_change", s_a3b);
  var s_b3b = s_G("UvuFvb");
  s_jr.set("gws_travel_header_origin_selector_init", s_b3b);
  var s_c3b = s_G("laYkg");
  s_jr.set("gws_travel_radio_item_selected", s_c3b);
  var s_d3b = s_G("MB0gs");
  s_jr.set("handleDepartureTimeAnchor", s_d3b);
  var s_e3b = s_G("ZxdNge");
  s_jr.set("handleGridAsync", s_e3b);
  var s_f3b = s_G("ldwWoc");
  s_jr.set("handleHelpLinkClick", s_f3b);
  var s_g3b = s_G("TenKae");
  s_jr.set("handle_retry", s_g3b);
  var s_h3b = s_G("w9jYwf");
  s_jr.set("handlelog", s_h3b);
  var s_i3b = s_G("QA7M0e");
  s_jr.set("hc", s_i3b);
  var s_j3b = s_G("HFmTs");
  s_jr.set("hcu", s_j3b);
  var s_k3b = s_G("ax8kmd");
  s_jr.set("headerBackClick", s_k3b);
  var s_l3b = s_G("mGmCM");
  s_jr.set("headerButtonClick", s_l3b);
  var s_m3b = s_G("T5iJ3d");
  s_jr.set("headline1_input_change", s_m3b);
  var s_n3b = s_G("L6Q9tc");
  s_jr.set("headline2_input_change", s_n3b);
  var s_o3b = s_G("jW3Yr");
  s_jr.set("headline3_input_change", s_o3b);
  var s_p3b = s_G("LUhmId");
  s_jr.set("hero_carousel_call_to_action_card_hidden", s_p3b);
  var s_q3b = s_G("L2VP2d");
  s_jr.set("hero_carousel_call_to_action_card_shown", s_q3b);
  var s_r3b = s_G("fLWhif");
  s_jr.set("hide", s_r3b);
  var s_s3b = s_G("exxHnc");
  s_jr.set("hidePostsContainer", s_s3b);
  var s_t3b = s_G("cAdRff");
  s_jr.set("hide_feedback_style", s_t3b);
  var s_u3b = s_G("ZvRO4b");
  s_jr.set("hide_popup", s_u3b);
  var s_v3b = s_G("DHmRgd");
  s_jr.set("hide_progress_bar", s_v3b);
  var s_w3b = s_G("q8xDqd");
  s_jr.set("highlight_differences_click", s_w3b);
  var s_x3b = s_G("Ms7ZL");
  s_jr.set("hlcreg", s_x3b);
  var s_y3b = s_G("nG1cab");
  s_jr.set("hlthumbloaded", s_y3b);
  var s_z3b = s_G("BX65Y");
  s_jr.set("hlthumbreg", s_z3b);
  var s_A3b = s_G("hCFzwb");
  s_jr.set("hrkc_filled", s_A3b);
  var s_B3b = s_G("CcRSe");
  s_jr.set("hsel", s_B3b);
  var s_C3b = s_G("topvzf");
  s_jr.set("hybhd_no", s_C3b);
  var s_D3b = s_G("xUUlfb");
  s_jr.set("hybhd_yes", s_D3b);
  var s_E3b = s_G("i4g41");
  s_jr.set("hz_save", s_E3b);
  var s_F3b = s_G("QvSnAb");
  s_jr.set("hz_save_desktop", s_F3b);
  var s_G3b = s_G("taFxMb");
  s_jr.set("ica_bc", s_G3b);
  var s_H3b = s_G("N8puvd");
  s_jr.set("ikp_kpheightchange", s_H3b);
  var s_I3b = s_G("o6tN2e");
  s_jr.set("ikpd_resetAllFilters", s_I3b);
  var s_J3b = s_G("QuxpZe");
  s_jr.set("im_bbar_foryou", s_J3b);
  var s_K3b = s_G("i88Qob");
  s_jr.set("im_close", s_K3b);
  var s_L3b = s_G("cdqQpb");
  s_jr.set("im_goto_browse", s_L3b);
  var s_M3b = s_G("nsU21c");
  s_jr.set("im_sethome", s_M3b);
  var s_N3b = s_G("fm0Gjb");
  s_jr.set("im_update_pp", s_N3b);
  var s_O3b = s_G("m0JTmc");
  s_jr.set("inc", s_O3b);
  var s_P3b = s_G("CGa7Z");
  s_jr.set("initUserAnswer", s_P3b);
  var s_Q3b = s_G("FeOxMd");
  s_jr.set("init_selection_menu", s_Q3b);
  var s_R3b = s_G("D3Bqie");
  s_jr.set("input_url_changed_event", s_R3b);
  var s_S3b = s_G("Dv3che");
  s_jr.set("iq_click", s_S3b);
  var s_T3b = s_G("sYd32b");
  s_jr.set("iq_open", s_T3b);
  var s_U3b = s_G("TqYNVe");
  s_jr.set("iqci", s_U3b);
  var s_V3b = s_G("UwNLdb");
  s_jr.set("iqco", s_V3b);
  var s_W3b = s_G("lknOzc");
  s_jr.set("iqi", s_W3b);
  var s_X3b = s_G("EAzaEf");
  s_jr.set("iqo", s_X3b);
  var s_Y3b = s_G("qC6MLc");
  s_jr.set("issueQuery", s_Y3b);
  var s_Z3b = s_G("yu5ICf");
  s_jr.set("issueQueryOnEnter", s_Z3b);
  var s__3b = s_G("u9GSyd");
  s_jr.set("item_impression", s__3b);
  var s_03b = s_G("O6xCud");
  s_jr.set("item_selection", s_03b);
  var s_13b = s_G("PdWSXe");
  s_jr.set("ivg_o", s_13b);
  var s_23b = s_G("FcZxxd");
  s_jr.set("ivlbx_c", s_23b);
  var s_33b = s_G("L2bEUd");
  s_jr.set("jackpotCollapse", s_33b);
  var s_43b = s_G("KqdRxe");
  s_jr.set("join_click", s_43b);
  var s_53b = s_G("bvfVp");
  s_jr.set("keep_subscriptions_button_action", s_53b);
  var s_63b = s_G("Jj4R5e");
  s_jr.set("kercs_hide", s_63b);
  var s_73b = s_G("rCNWAd");
  s_jr.set("kercs_show", s_73b);
  var s_83b = s_G("MdD72e");
  s_jr.set("keyword_change", s_83b);
  var s_93b = s_G("AVrwU");
  s_jr.set("kno_shr_close_button_clicked", s_93b);
  var s_$3b = s_G("g2CGSd");
  s_jr.set("kp_display", s_$3b);
  var s_a4b = s_G("vAWO1");
  s_jr.set("kp_expand", s_a4b);
  var s_b4b = s_G("q993ff");
  s_jr.set("kx_c", s_b4b);
  var s_c4b = s_G("GXyQvf");
  s_jr.set("kx_e", s_c4b);
  var s_d4b = s_G("AP0axe");
  s_jr.set("kx_lum_tc", s_d4b);
  var s_e4b = s_G("AnP30d");
  s_jr.set("kx_t", s_e4b);
  var s_f4b = s_G("KbF57e");
  s_jr.set("lcm_close_lightbox", s_f4b);
  var s_g4b = s_G("YJMZUb");
  s_jr.set("lcm_lightbox_closed", s_g4b);
  var s_h4b = s_G("QFR3de");
  s_jr.set("lcm_load_close_lightbox", s_h4b);
  var s_i4b = s_G("klllfd");
  s_jr.set("lcm_load_lightbox", s_i4b);
  var s_j4b = s_G("pD9K6e");
  s_jr.set("lcm_open_lightbox", s_j4b);
  var s_k4b = s_G("Z4HFie");
  s_jr.set("lhd_close", s_k4b);
  var s_l4b = s_G("bXV9df");
  s_jr.set("lhd_open_timeline", s_l4b);
  var s_m4b = s_G("Jmd3pd");
  s_jr.set("lhd_remove", s_m4b);
  var s_n4b = s_G("hI0W5d");
  s_jr.set("lightbox_back_arrow_click", s_n4b);
  var s_o4b = s_G("jvp1jd");
  s_jr.set("lightbox_closed", s_o4b);
  var s_p4b = s_G("BOB9X");
  s_jr.set("lightbox_rendered", s_p4b);
  var s_q4b = s_G("CEYmub");
  s_jr.set("list_collapse", s_q4b);
  var s_r4b = s_G("xZxrDc");
  s_jr.set("list_expand", s_r4b);
  var s_s4b = s_G("Yd9lhc");
  s_jr.set("load_answers", s_s4b);
  var s_t4b = s_G("nlsrAf");
  s_jr.set("load_mini_app_evt", s_t4b);
  var s_u4b = s_G("UTq3ib");
  s_jr.set("location_changed", s_u4b);
  var s_v4b = s_G("DJ3tH");
  s_jr.set("logInteraction", s_v4b);
  var s_w4b = s_G("v9u8eb");
  s_jr.set("log_interaction", s_w4b);
  var s_x4b = s_G("p54dce");
  s_jr.set("lpi_hide", s_x4b);
  var s_y4b = s_G("gVmWPe");
  s_jr.set("lpi_show", s_y4b);
  var s_z4b = s_G("YNdIHd");
  s_jr.set("lpvt_a", s_z4b);
  var s_A4b = s_G("sWia1d");
  s_jr.set("lpvt_ofp", s_A4b);
  var s_B4b = s_G("jB8N3b");
  s_jr.set("lr_ml_rl", s_B4b);
  var s_C4b = s_G("toW8ab");
  s_jr.set("lrl_dgt", s_C4b);
  var s_D4b = s_G("MtRv2e");
  s_jr.set("lrl_expand", s_D4b);
  var s_E4b = s_G("fUTM9c");
  s_jr.set("lrl_flt", s_E4b);
  var s_F4b = s_G("evOy4d");
  s_jr.set("lrl_gsv", s_F4b);
  var s_G4b = s_G("cvECUb");
  s_jr.set("lrl_lfpfp", s_G4b);
  var s_H4b = s_G("sQ8SYe");
  s_jr.set("lrl_mldc", s_H4b);
  var s_I4b = s_G("clInec");
  s_jr.set("lrl_mlwo", s_I4b);
  var s_J4b = s_G("vEgZYd");
  s_jr.set("lrl_omc", s_J4b);
  var s_K4b = s_G("Svr2kd");
  s_jr.set("lrl_rlt", s_K4b);
  var s_L4b = s_G("avTALe");
  s_jr.set("lrl_slt", s_L4b);
  var s_M4b = s_G("beWcs");
  s_jr.set("lrl_ub", s_M4b);
  var s_N4b = s_G("qffiL");
  s_jr.set("lrl_ufp", s_N4b);
  var s_O4b = s_G("dEP0Je");
  s_jr.set("lrl_ufs", s_O4b);
  var s_P4b = s_G("mHkyle");
  s_jr.set("lrl_umap", s_P4b);
  var s_Q4b = s_G("EMePed");
  s_jr.set("lrl_umld", s_Q4b);
  var s_R4b = s_G("gPCGOe");
  s_jr.set("lrlh_mlt", s_R4b);
  var s_S4b = s_G("qlXvkd");
  s_jr.set("ltc_ct", s_S4b);
  var s_T4b = s_G("ixBNRb");
  s_jr.set("ltc_hf", s_T4b);
  var s_U4b = s_G("NGQSXb");
  s_jr.set("ltc_hnf", s_U4b);
  var s_V4b = s_G("SGIGO");
  s_jr.set("ltc_umh", s_V4b);
  var s_W4b = s_G("OXNLkd");
  s_jr.set("ltd_dts_o", s_W4b);
  var s_X4b = s_G("b8aFIc");
  s_jr.set("ltd_dts_select", s_X4b);
  var s_Y4b = s_G("EAc3");
  s_jr.set("ltdl_o", s_Y4b);
  var s_Z4b = s_G("DEI5gd");
  s_jr.set("ltdl_u", s_Z4b);
  var s__4b = s_G("KDfox");
  s_jr.set("ltssc", s__4b);
  var s_04b = s_G("SZjTS");
  s_jr.set("lud_hp", s_04b);
  var s_14b = s_G("fFbcn");
  s_jr.set("lud_sp", s_14b);
  var s_24b = s_G("DGy2Ae");
  s_jr.set("luh_new_dates", s_24b);
  var s_34b = s_G("Lj6oJf");
  s_jr.set("luh_new_occupancy", s_34b);
  var s_44b = s_G("UkbUbc");
  s_jr.set("lupqa_rc", s_44b);
  var s_54b = s_G("kwM37c");
  s_jr.set("lur_ac", s_54b);
  var s_64b = s_G("la4CRe");
  s_jr.set("lur_dc", s_64b);
  var s_74b = s_G("UldYre");
  s_jr.set("lur_hbh", s_74b);
  var s_84b = s_G("RLVNwc");
  s_jr.set("lur_ht", s_84b);
  var s_94b = s_G("QZiNOb");
  s_jr.set("lur_ipc", s_94b);
  var s_$4b = s_G("gYZ0mc");
  s_jr.set("lur_mca", s_$4b);
  var s_a5b = s_G("cKneUb");
  s_jr.set("lur_mca_mo", s_a5b);
  var s_b5b = s_G("RP4Mxb");
  s_jr.set("lur_mo_redirect", s_b5b);
  var s_c5b = s_G("BafACc");
  s_jr.set("lur_mo_show", s_c5b);
  var s_d5b = s_G("LzWDg");
  s_jr.set("lur_mo_skip", s_d5b);
  var s_e5b = s_G("b6GAud");
  s_jr.set("lur_moa", s_e5b);
  var s_f5b = s_G("zIokse");
  s_jr.set("lur_mob", s_f5b);
  var s_g5b = s_G("ckbVEf");
  s_jr.set("lur_more", s_g5b);
  var s_h5b = s_G("tOn8sc");
  s_jr.set("lur_pca", s_h5b);
  var s_i5b = s_G("kU2sh");
  s_jr.set("lur_pcp", s_i5b);
  var s_j5b = s_G("K1Nfie");
  s_jr.set("lur_ql", s_j5b);
  var s_k5b = s_G("hTVxh");
  s_jr.set("lur_roa", s_k5b);
  var s_l5b = s_G("Z3Wu3b");
  s_jr.set("managePhotos", s_l5b);
  var s_m5b = s_G("DeSC5d");
  s_jr.set("mapResultClicked", s_m5b);
  var s_n5b = s_G("lfOIbd");
  s_jr.set("mapResultFocused", s_n5b);
  var s_o5b = s_G("Ld1Dp");
  s_jr.set("mapResultUnfocused", s_o5b);
  var s_p5b = s_G("tDwp1b");
  s_jr.set("map_measle_clicked", s_p5b);
  var s_q5b = s_G("QFF3mc");
  s_jr.set("mapslite_collapse", s_q5b);
  var s_r5b = s_G("LfvHXc");
  s_jr.set("mapslite_expand", s_r5b);
  var s_s5b = s_G("BpaUgb");
  s_jr.set("maybe_close_dialog", s_s5b);
  var s_t5b = s_G("qsFgoc");
  s_jr.set("menu_item_hover", s_t5b);
  var s_u5b = s_G("D8Lb9b");
  s_jr.set("menu_item_select", s_u5b);
  var s_v5b = s_G("hoI9Hf");
  s_jr.set("mic_c", s_v5b);
  var s_w5b = s_G("TsIQQ");
  s_jr.set("mic_q", s_w5b);
  var s_x5b = s_G("n3GEde");
  s_jr.set("minesweeper_closed", s_x5b);
  var s_y5b = s_G("SQnxSb");
  s_jr.set("minesweeper_closed_really", s_y5b);
  var s_z5b = s_G("FDLTB");
  s_jr.set("missingFacts_submit", s_z5b);
  var s_A5b = s_G("DmdsEb");
  s_jr.set("mlzc_in", s_A5b);
  var s_B5b = s_G("K4BaX");
  s_jr.set("mlzc_out", s_B5b);
  var s_C5b = s_G("vWynKd");
  s_jr.set("more_details_expand", s_C5b);
  var s_D5b = s_G("fp6Yzc");
  s_jr.set("more_editorial_reviews_expand", s_D5b);
  var s_E5b = s_G("MS0zad");
  s_jr.set("more_reviews_expand", s_E5b);
  var s_F5b = s_G("zyOHAe");
  s_jr.set("more_sellers_expand", s_F5b);
  var s_G5b = s_G("oE9Gyb");
  s_jr.set("mortgage_journey_switch_card_variant", s_G5b);
  var s_H5b = s_G("Y8TfYb");
  s_jr.set("mtl_no", s_H5b);
  var s_I5b = s_G("t2LXyc");
  s_jr.set("mtl_open_timeline", s_I5b);
  var s_J5b = s_G("LVD4fb");
  s_jr.set("mtl_open_visit_in_timeline", s_J5b);
  var s_K5b = s_G("duBRkc");
  s_jr.set("mtl_yes", s_K5b);
  var s_L5b = s_G("nhkWAc");
  s_jr.set("navigateToList", s_L5b);
  var s_M5b = s_G("VBCV5b");
  s_jr.set("nearby_data_cancelled", s_M5b);
  var s_N5b = s_G("t6Uln");
  s_jr.set("nearby_data_changed", s_N5b);
  var s_O5b = s_G("ayyJzc");
  s_jr.set("nearby_focus_changed", s_O5b);
  var s_P5b = s_G("qCDGAc");
  s_jr.set("nearby_reset", s_P5b);
  var s_Q5b = s_G("V5CTde");
  s_jr.set("nearby_selection_changed", s_Q5b);
  var s_R5b = s_G("k4JWkb");
  s_jr.set("nearby_visible", s_R5b);
  var s_S5b = s_G("bbzv8c");
  s_jr.set("newListClick", s_S5b);
  var s_T5b = s_G("ppr9Le");
  s_jr.set("new_list_name_input", s_T5b);
  var s_U5b = s_G("B7bCbf");
  s_jr.set("newslisbonampvis", s_U5b);
  var s_V5b = s_G("FStrbe");
  s_jr.set("next_round_button_action", s_V5b);
  var s_W5b = s_G("x3sULc");
  s_jr.set("nhh_hh", s_W5b);
  var s_X5b = s_G("Dv9UPe");
  s_jr.set("nhh_sh", s_X5b);
  var s_Y5b = s_G("JRj7b");
  s_jr.set("no", s_Y5b);
  var s_Z5b = s_G("C5K7id");
  s_jr.set("no_vote", s_Z5b);
  var s__5b = s_G("sYARUb");
  s_jr.set("not_sure_vote", s__5b);
  var s_05b = s_G("IfmYKc");
  s_jr.set("nothing", s_05b);
  var s_15b = s_G("zfGbX");
  s_jr.set("oae", s_15b);
  var s_25b = s_G("tqVnZd");
  s_jr.set("occupancyItemSelect", s_25b);
  var s_35b = s_G("YWdESc");
  s_jr.set("occupancyTipSelect", s_35b);
  var s_45b = s_G("JrFnu");
  s_jr.set("ol_sce", s_45b);
  var s_55b = s_G("NPm9of");
  s_jr.set("oli_ise", s_55b);
  var s_65b = s_G("osF6Sb");
  s_jr.set("onDepartureChange", s_65b);
  var s_75b = s_G("uaI3Fc");
  s_jr.set("onDepartureClick", s_75b);
  var s_85b = s_G("NnIfpb");
  s_jr.set("onDepartureKeydown", s_85b);
  var s_95b = s_G("tv1okb");
  s_jr.set("onKeyup", s_95b);
  var s_$5b = s_G("l7aB3");
  s_jr.set("onReturnChange", s_$5b);
  var s_a6b = s_G("fSTfjb");
  s_jr.set("onReturnClick", s_a6b);
  var s_b6b = s_G("CRlef");
  s_jr.set("onReturnKeydown", s_b6b);
  var s_c6b = s_G("bqYzze");
  s_jr.set("onSubmit", s_c6b);
  var s_d6b = s_G("WeX5A");
  s_jr.set("onTextAreaBlur", s_d6b);
  var s_e6b = s_G("cC51fd");
  s_jr.set("onTextAreaFocus", s_e6b);
  var s_f6b = s_G("udkv9c");
  s_jr.set("onUndoDelete", s_f6b);
  var s_g6b = s_G("JNdFab");
  s_jr.set("onUndoPost", s_g6b);
  var s_h6b = s_G("x6CN9d");
  s_jr.set("on_click", s_h6b);
  var s_i6b = s_G("qWM9Pb");
  s_jr.set("openAgencyFullPageView", s_i6b);
  var s_j6b = s_G("ZEj6Fc");
  s_jr.set("openAsyncIV", s_j6b);
  var s_k6b = s_G("njhMke");
  s_jr.set("openBilling", s_k6b);
  var s_l6b = s_G("d3pwf");
  s_jr.set("openCompImmersive", s_l6b);
  var s_m6b = s_G("w8LuGb");
  s_jr.set("openEditPageIframe", s_m6b);
  var s_n6b = s_G("i4fbAe");
  s_jr.set("openExistencePageIframe", s_n6b);
  var s_o6b = s_G("M2p4Ud");
  s_jr.set("openFpState", s_o6b);
  var s_p6b = s_G("g1WpEf");
  s_jr.set("openIV", s_p6b);
  var s_q6b = s_G("qGkuTc");
  s_jr.set("openLocationErrorLearnMore", s_q6b);
  var s_r6b = s_G("CAYlA");
  s_jr.set("openModalOnEnter", s_r6b);
  var s_s6b = s_G("zpnX8");
  s_jr.set("openOpeningDatePageIframe", s_s6b);
  var s_t6b = s_G("qoT2hd");
  s_jr.set("openRIV", s_t6b);
  var s_u6b = s_G("SftXQb");
  s_jr.set("openReviews", s_u6b);
  var s_v6b = s_G("aaxfFc");
  s_jr.set("openReviewsPage", s_v6b);
  var s_w6b = s_G("hzIcyc");
  s_jr.set("open_browse", s_w6b);
  var s_x6b = s_G("Tas91");
  s_jr.set("open_contestant_dialog", s_x6b);
  var s_y6b = s_G("G05OQb");
  s_jr.set("open_country_menu", s_y6b);
  var s_z6b = s_G("GMvR9");
  s_jr.set("open_currency_menu", s_z6b);
  var s_A6b = s_G("BEyJ0b");
  s_jr.set("open_dialog", s_A6b);
  var s_B6b = s_G("E4Ft5e");
  s_jr.set("open_ep", s_B6b);
  var s_C6b = s_G("qldGJd");
  s_jr.set("open_feedback", s_C6b);
  var s_D6b = s_G("nAOxvc");
  s_jr.set("open_focus_state", s_D6b);
  var s_E6b = s_G("KX6Cpb");
  s_jr.set("open_immersive_from_footer", s_E6b);
  var s_F6b = s_G("zNJ2Wc");
  s_jr.set("open_immersive_from_see_more", s_F6b);
  var s_G6b = s_G("CUBNXd");
  s_jr.set("open_immersive_from_view_more_footer", s_G6b);
  var s_H6b = s_G("zLIbed");
  s_jr.set("open_immersive_list", s_H6b);
  var s_I6b = s_G("w24fLd");
  s_jr.set("open_language_menu", s_I6b);
  var s_J6b = s_G("D2c0je");
  s_jr.set("open_link", s_J6b);
  var s_K6b = s_G("VAsF9c");
  s_jr.set("open_loyalty_card_dialog", s_K6b);
  var s_L6b = s_G("ODRgl");
  s_jr.set("open_price_finder_airports_tab", s_L6b);
  var s_M6b = s_G("LCRkI");
  s_jr.set("open_price_finder_dates_tab", s_M6b);
  var s_N6b = s_G("Ygrzle");
  s_jr.set("open_price_finder_trends_tab", s_N6b);
  var s_O6b = s_G("dgvzRd");
  s_jr.set("open_sharing", s_O6b);
  var s_P6b = s_G("l6nHgf");
  s_jr.set("open_why_this_result_dialog", s_P6b);
  var s_Q6b = s_G("UrUWBe");
  s_jr.set("opened", s_Q6b);
  var s_R6b = s_G("uounjb");
  s_jr.set("openvideo", s_R6b);
  var s_S6b = s_G("y8cm6");
  s_jr.set("ort", s_S6b);
  var s_T6b = s_G("A6SDQe");
  s_jr.set("page_close", s_T6b);
  var s_U6b = s_G("jrGCTe");
  s_jr.set("pagination", s_U6b);
  var s_V6b = s_G("ne5Qjc");
  s_jr.set("pagination_click", s_V6b);
  var s_W6b = s_G("fYTN6");
  s_jr.set("pathways_cd", s_W6b);
  var s_X6b = s_G("muBpVb");
  s_jr.set("pathways_mj", s_X6b);
  var s_Y6b = s_G("Nd0FU");
  s_jr.set("pause", s_Y6b);
  var s_Z6b = s_G("lqrOab");
  s_jr.set("pg_as", s_Z6b);
  var s__6b = s_G("X1tkp");
  s_jr.set("pg_init", s__6b);
  var s_06b = s_G("dalsm");
  s_jr.set("pg_reset", s_06b);
  var s_16b = s_G("SbKtme");
  s_jr.set("pg_resize", s_16b);
  var s_26b = s_G("MT827e");
  s_jr.set("pg_rs", s_26b);
  var s_36b = s_G("rR6zNc");
  s_jr.set("pg_scroll_by", s_36b);
  var s_46b = s_G("cxBrFd");
  s_jr.set("pg_select", s_46b);
  var s_56b = s_G("ahRH5d");
  s_jr.set("pg_visible", s_56b);
  var s_66b = s_G("X7mqGf");
  s_jr.set("pg_wd", s_66b);
  var s_76b = s_G("muwdcb");
  s_jr.set("phone_number_input_change", s_76b);
  var s_86b = s_G("kJCxac");
  s_jr.set("plab_filled", s_86b);
  var s_96b = s_G("PpjOQb");
  s_jr.set("place_impression", s_96b);
  var s_$6b = s_G("CXcSbf");
  s_jr.set("place_list_impression", s_$6b);
  var s_a7b = s_G("Q3M3p");
  s_jr.set("place_list_selection", s_a7b);
  var s_b7b = s_G("BNI0te");
  s_jr.set("place_selection", s_b7b);
  var s_c7b = s_G("PXEikf");
  s_jr.set("play", s_c7b);
  var s_d7b = s_G("XVSVJ");
  s_jr.set("post", s_d7b);
  var s_e7b = s_G("r3B9od");
  s_jr.set("postQuestion", s_e7b);
  var s_f7b = s_G("s7h7Kb");
  s_jr.set("post_review", s_f7b);
  var s_g7b = s_G("GzuROd");
  s_jr.set("pp_apply", s_g7b);
  var s_h7b = s_G("iGJiGc");
  s_jr.set("pp_cr", s_h7b);
  var s_i7b = s_G("qsUVWb");
  s_jr.set("pp_transit", s_i7b);
  var s_j7b = s_G("EOqIqc");
  s_jr.set("ppl_new_list_save", s_j7b);
  var s_k7b = s_G("xpg2td");
  s_jr.set("ppldc_cancel", s_k7b);
  var s_l7b = s_G("gQ3Inb");
  s_jr.set("ppldc_submit", s_l7b);
  var s_m7b = s_G("E5OIPb");
  s_jr.set("ppli_validity_change", s_m7b);
  var s_n7b = s_G("UigYZc");
  s_jr.set("pqa_refr", s_n7b);
  var s_o7b = s_G("MC2Qub");
  s_jr.set("pqa_rld", s_o7b);
  var s_p7b = s_G("f1dLTd");
  s_jr.set("pqapq", s_p7b);
  var s_q7b = s_G("HygsKf");
  s_jr.set("prevreg", s_q7b);
  var s_r7b = s_G("Zan0xb");
  s_jr.set("privacy_reminder_ack", s_r7b);
  var s_s7b = s_G("pw7lrc");
  s_jr.set("product_viewer_close", s_s7b);
  var s_t7b = s_G("VV2w3e");
  s_jr.set("promo_hidden", s_t7b);
  var s_u7b = s_G("SA8Q7d");
  s_jr.set("prs_btn", s_u7b);
  var s_v7b = s_G("EOZdIf");
  s_jr.set("prs_dltb", s_v7b);
  var s_w7b = s_G("qhAyde");
  s_jr.set("prs_drc", s_w7b);
  var s_x7b = s_G("i5o9xd");
  s_jr.set("prs_eqb", s_x7b);
  var s_y7b = s_G("eUCYd");
  s_jr.set("prs_invb", s_y7b);
  var s_z7b = s_G("YQoRed");
  s_jr.set("pt_visible", s_z7b);
  var s_A7b = s_G("wMw2zc");
  s_jr.set("pt_wd", s_A7b);
  var s_B7b = s_G("oLMRYb");
  s_jr.set("pv_open", s_B7b);
  var s_C7b = s_G("BXPIfc");
  s_jr.set("pw_close_help_bubble", s_C7b);
  var s_D7b = s_G("lra9Sd");
  s_jr.set("pw_expand_list", s_D7b);
  var s_E7b = s_G("QMCQsb");
  s_jr.set("q_fltr", s_E7b);
  var s_F7b = s_G("q2SOuc");
  s_jr.set("qmp_accepted", s_F7b);
  var s_G7b = s_G("GlVBXd");
  s_jr.set("qmp_closed_external_interaction", s_G7b);
  var s_H7b = s_G("Cyuxg");
  s_jr.set("qmp_dismissed", s_H7b);
  var s_I7b = s_G("SCaxHe");
  s_jr.set("qmp_impression", s_I7b);
  var s_J7b = s_G("bFyHQc");
  s_jr.set("r_dropdown", s_J7b);
  var s_K7b = s_G("MCXmXe");
  s_jr.set("r_fetch", s_K7b);
  var s_L7b = s_G("lQsRMe");
  s_jr.set("r_less", s_L7b);
  var s_M7b = s_G("M7VP");
  s_jr.set("r_more", s_M7b);
  var s_N7b = s_G("oYr6mb");
  s_jr.set("radio_button_select", s_N7b);
  var s_O7b = s_G("lhF2hf");
  s_jr.set("rates_tab_date_updated", s_O7b);
  var s_P7b = s_G("FRbR6d");
  s_jr.set("rating_reviews_filter_changed", s_P7b);
  var s_Q7b = s_G("DyJeWe");
  s_jr.set("rb_sel", s_Q7b);
  var s_R7b = s_G("PoXwOe");
  s_jr.set("redirect", s_R7b);
  var s_S7b = s_G("PQUfAc");
  s_jr.set("refinement_click", s_S7b);
  var s_T7b = s_G("n5SQrd");
  s_jr.set("refresh", s_T7b);
  var s_U7b = s_G("S9gw3");
  s_jr.set("reload", s_U7b);
  var s_V7b = s_G("pFaOI");
  s_jr.set("reloadBegin", s_V7b);
  var s_W7b = s_G("okdFEf");
  s_jr.set("reloadComplete", s_W7b);
  var s_X7b = s_G("rIIBSe");
  s_jr.set("removeValue", s_X7b);
  var s_Y7b = s_G("EdIMhb");
  s_jr.set("remove_category", s_Y7b);
  var s_Z7b = s_G("A7ipdf");
  s_jr.set("remove_related_product_click", s_Z7b);
  var s__7b = s_G("r1uOxc");
  s_jr.set("remove_slice", s__7b);
  var s_07b = s_G("Yana2b");
  s_jr.set("rendered", s_07b);
  var s_17b = s_G("XxQQme");
  s_jr.set("repeatLastToggle", s_17b);
  var s_27b = s_G("JytXBd");
  s_jr.set("reportAbuse", s_27b);
  var s_37b = s_G("llPG6b");
  s_jr.set("reportAbuseClosed", s_37b);
  var s_47b = s_G("C0JUmb");
  s_jr.set("reportAbuseCompleted", s_47b);
  var s_57b = s_G("lWnQEd");
  s_jr.set("reset", s_57b);
  var s_67b = s_G("wzFgbd");
  s_jr.set("resetAnswerEltVisibility", s_67b);
  var s_77b = s_G("UU7nXc");
  s_jr.set("reset_filter", s_77b);
  var s_87b = s_G("PIP8ge");
  s_jr.set("reset_filters", s_87b);
  var s_97b = s_G("rVPsYc");
  s_jr.set("reset_prefs", s_97b);
  var s_$7b = s_G("V2d4ic");
  s_jr.set("resizeDialog", s_$7b);
  var s_a8b = s_G("E3Bvbc");
  s_jr.set("retry", s_a8b);
  var s_b8b = s_G("BCnupb");
  s_jr.set("retryCreate", s_b8b);
  var s_c8b = s_G("fGuDhf");
  s_jr.set("review_change", s_c8b);
  var s_d8b = s_G("LrFTB");
  s_jr.set("rftd_cancel", s_d8b);
  var s_e8b = s_G("o5MxI");
  s_jr.set("rftd_confirm", s_e8b);
  var s_f8b = s_G("jSgCSb");
  s_jr.set("ri", s_f8b);
  var s_g8b = s_G("b4yxXb");
  s_jr.set("rivReport", s_g8b);
  var s_h8b = s_G("rCL7Md");
  s_jr.set("rivReportClose", s_h8b);
  var s_i8b = s_G("KEb0yd");
  s_jr.set("rre_filled", s_i8b);
  var s_j8b = s_G("Ksyfkc");
  s_jr.set("rre_loading", s_j8b);
  var s_k8b = s_G("FXEfUe");
  s_jr.set("rs_change", s_k8b);
  var s_l8b = s_G("FcJH6e");
  s_jr.set("rs_drag", s_l8b);
  var s_m8b = s_G("W6SIHd");
  s_jr.set("rvc_loaded", s_m8b);
  var s_n8b = s_G("CdB9wc");
  s_jr.set("s_mis", s_n8b);
  var s_o8b = s_G("TrLn7d");
  s_jr.set("sae_attribute_value_changed", s_o8b);
  var s_p8b = s_G("e5ZAhf");
  s_jr.set("sae_enum_entrypoint_clicked", s_p8b);
  var s_q8b = s_G("gRTnvf");
  s_jr.set("sae_enum_value_changed", s_q8b);
  var s_r8b = s_G("QRz83c");
  s_jr.set("sae_finished", s_r8b);
  var s_s8b = s_G("QPZbod");
  s_jr.set("sae_send", s_s8b);
  var s_t8b = s_G("y3Vdjc");
  s_jr.set("saveAndCloseDialog", s_t8b);
  var s_u8b = s_G("XxoD9c");
  s_jr.set("saveAndClosePage", s_u8b);
  var s_v8b = s_G("fWdoHc");
  s_jr.set("save_fil", s_v8b);
  var s_w8b = s_G("EbYrh");
  s_jr.set("save_loc", s_w8b);
  var s_x8b = s_G("sjI0bd");
  s_jr.set("sb_apply_new_query", s_x8b);
  var s_y8b = s_G("oPMgqe");
  s_jr.set("sb_clear_query", s_y8b);
  var s_z8b = s_G("w0nFNe");
  s_jr.set("sb_dismiss_sb_promo", s_z8b);
  var s_A8b = s_G("TPvldc");
  s_jr.set("sb_openOverlay", s_A8b);
  var s_B8b = s_G("kBBtlf");
  s_jr.set("sbc_init", s_B8b);
  var s_C8b = s_G("EMVgtd");
  s_jr.set("sbc_rb", s_C8b);
  var s_D8b = s_G("y92Jg");
  s_jr.set("sbc_rr", s_D8b);
  var s_E8b = s_G("aywrDf");
  s_jr.set("sbc_rs", s_E8b);
  var s_F8b = s_G("T4QYIb");
  s_jr.set("sbc_ry", s_F8b);
  var s_G8b = s_G("GpyWd");
  s_jr.set("sbc_sc", s_G8b);
  var s_H8b = s_G("gkAnmb");
  s_jr.set("sbc_su", s_H8b);
  var s_I8b = s_G("L5jysd");
  s_jr.set("sc", s_I8b);
  var s_J8b = s_G("qVN0Rc");
  s_jr.set("sc_dm", s_J8b);
  var s_K8b = s_G("OaAmdd");
  s_jr.set("sc_em", s_K8b);
  var s_L8b = s_G("J5Sgjd");
  s_jr.set("sc_f", s_L8b);
  var s_M8b = s_G("sEZ0nb");
  s_jr.set("sc_nf", s_M8b);
  var s_N8b = s_G("JnGzAc");
  s_jr.set("sc_rfir", s_N8b);
  var s_O8b = s_G("OW9R3e");
  s_jr.set("sc_sc", s_O8b);
  var s_P8b = s_G("A8F2wc");
  s_jr.set("scc_ir", s_P8b);
  var s_Q8b = s_G("NdNKIc");
  s_jr.set("scc_iu", s_Q8b);
  var s_R8b = s_G("nUQosc");
  s_jr.set("scc_ou", s_R8b);
  var s_S8b = s_G("ItCYyf");
  s_jr.set("scs_change", s_S8b);
  var s_T8b = s_G("QaMsec");
  s_jr.set("scs_changed", s_T8b);
  var s_U8b = s_G("aFgeo");
  s_jr.set("searchResultSelect", s_U8b);
  var s_V8b = s_G("VTonCc");
  s_jr.set("seating_class_selected", s_V8b);
  var s_W8b = s_G("Lesnae");
  s_jr.set("see_full_definition", s_W8b);
  var s_X8b = s_G("CLdVjd");
  s_jr.set("select", s_X8b);
  var s_Y8b = s_G("DUAVQd");
  s_jr.set("selectDate", s_Y8b);
  var s_Z8b = s_G("h4aKNc");
  s_jr.set("select_date", s_Z8b);
  var s__8b = s_G("nDReve");
  s_jr.set("select_filter", s__8b);
  var s_08b = s_G("Mdwgte");
  s_jr.set("select_icon", s_08b);
  var s_18b = s_G("DbzZ8e");
  s_jr.set("select_tab", s_18b);
  var s_28b = s_G("ifokhb");
  s_jr.set("select_time", s_28b);
  var s_38b = s_G("y255Sd");
  s_jr.set("select_variant", s_38b);
  var s_48b = s_G("WrmHw");
  s_jr.set("selected_day_more_info", s_48b);
  var s_58b = s_G("l5VQod");
  s_jr.set("send_button", s_58b);
  var s_68b = s_G("YK0zEb");
  s_jr.set("seniority_checkbox_change", s_68b);
  var s_78b = s_G("WaQAqf");
  s_jr.set("set_active_index", s_78b);
  var s_88b = s_G("XnhSNc");
  s_jr.set("set_value", s_88b);
  var s_98b = s_G("WD8Fbd");
  s_jr.set("sfod", s_98b);
  var s_$8b = s_G("FcFZBc");
  s_jr.set("sfsd", s_$8b);
  var s_a9b = s_G("ukC0xf");
  s_jr.set("sg_destroy", s_a9b);
  var s_b9b = s_G("yyIcWe");
  s_jr.set("sg_enter", s_b9b);
  var s_c9b = s_G("O4Yjgc");
  s_jr.set("sg_force_render", s_c9b);
  var s_d9b = s_G("QXXTBc");
  s_jr.set("sg_init", s_d9b);
  var s_e9b = s_G("wlSX1b");
  s_jr.set("sg_leave", s_e9b);
  var s_f9b = s_G("lOZbfb");
  s_jr.set("sg_render", s_f9b);
  var s_g9b = s_G("qveIt");
  s_jr.set("sg_request_scroll", s_g9b);
  var s_h9b = s_G("UNgbke");
  s_jr.set("sg_reset", s_h9b);
  var s_i9b = s_G("IDmUHc");
  s_jr.set("sg_resize", s_i9b);
  var s_j9b = s_G("TYcwNe");
  s_jr.set("sg_scroll", s_j9b);
  var s_k9b = s_G("OkdfC");
  s_jr.set("sg_scroll_end", s_k9b);
  var s_l9b = s_G("nHNlJd");
  s_jr.set("sg_scroll_to", s_l9b);
  var s_m9b = s_G("xPYrhf");
  s_jr.set("sg_select", s_m9b);
  var s_n9b = s_G("jKkd5b");
  s_jr.set("short_review_snippet", s_n9b);
  var s_o9b = s_G("ipJzUe");
  s_jr.set("show", s_o9b);
  var s_p9b = s_G("zGBrwf");
  s_jr.set("showPostsContainer", s_p9b);
  var s_q9b = s_G("LaICie");
  s_jr.set("showPriceTrackerCallout", s_q9b);
  var s_r9b = s_G("eCQ7Lc");
  s_jr.set("showQuestions", s_r9b);
  var s_s9b = s_G("Cmatge");
  s_jr.set("showReportAbuse", s_s9b);
  var s_t9b = s_G("xfiuue");
  s_jr.set("showSingleQuestion", s_t9b);
  var s_u9b = s_G("fi6QFc");
  s_jr.set("showWhereToWatchContent", s_u9b);
  var s_v9b = s_G("uu6Def");
  s_jr.set("showWriteAnswer", s_v9b);
  var s_w9b = s_G("C21qod");
  s_jr.set("showWriteQuestion", s_w9b);
  var s_x9b = s_G("fIfKLd");
  s_jr.set("show_and_focus", s_x9b);
  var s_y9b = s_G("xWNAmb");
  s_jr.set("show_category", s_y9b);
  var s_z9b = s_G("wpyVFd");
  s_jr.set("show_date_picker", s_z9b);
  var s_A9b = s_G("nh2V6b");
  s_jr.set("show_default_price_link", s_A9b);
  var s_B9b = s_G("RAnfQd");
  s_jr.set("show_first_page", s_B9b);
  var s_C9b = s_G("BN90pb");
  s_jr.set("show_fullpage", s_C9b);
  var s_D9b = s_G("M8pjge");
  s_jr.set("show_more_courses_click", s_D9b);
  var s_E9b = s_G("ApAeid");
  s_jr.set("show_progress_bar", s_E9b);
  var s_F9b = s_G("Zly1te");
  s_jr.set("show_spinner", s_F9b);
  var s_G9b = s_G("d9VaKb");
  s_jr.set("sht_d", s_G9b);
  var s_H9b = s_G("d4FDpc");
  s_jr.set("sign_in_button_clicked", s_H9b);
  var s_I9b = s_G("fzC9Oc");
  s_jr.set("skip_action", s_I9b);
  var s_J9b = s_G("MFH1Re");
  s_jr.set("slider_c", s_J9b);
  var s_K9b = s_G("t2wa1b");
  s_jr.set("slider_change", s_K9b);
  var s_L9b = s_G("Ji8xae");
  s_jr.set("slider_f", s_L9b);
  var s_M9b = s_G("etIODb");
  s_jr.set("slider_s", s_M9b);
  var s_N9b = s_G("OO5L0");
  s_jr.set("smartanswersIframeLoaded", s_N9b);
  var s_O9b = s_G("JyZjwc");
  s_jr.set("smr_close", s_O9b);
  var s_P9b = s_G("eFzeOd");
  s_jr.set("smr_less", s_P9b);
  var s_Q9b = s_G("xeWuLc");
  s_jr.set("smr_more", s_Q9b);
  var s_R9b = s_G("af4Kse");
  s_jr.set("snackbar_action", s_R9b);
  var s_S9b = s_G("phr6yd");
  s_jr.set("snake_closed", s_S9b);
  var s_T9b = s_G("syKPke");
  s_jr.set("snake_closed_really", s_T9b);
  var s_U9b = s_G("Lyezge");
  s_jr.set("snfwos", s_U9b);
  var s_V9b = s_G("seM7Qe");
  s_jr.set("sngtp", s_V9b);
  var s_W9b = s_G("svO1Hc");
  s_jr.set("sp_ir", s_W9b);
  var s_X9b = s_G("EocvOb");
  s_jr.set("sponsored_click", s_X9b);
  var s_Y9b = s_G("hcY69");
  s_jr.set("srp_hd", s_Y9b);
  var s_Z9b = s_G("ABuafc");
  s_jr.set("srp_uhd", s_Z9b);
  var s__9b = s_G("MLk1mc");
  s_jr.set("ssaw", s__9b);
  var s_09b = s_G("ESIHdd");
  s_jr.set("ssdc", s_09b);
  var s_19b = s_G("XbaL7c");
  s_jr.set("ssdo", s_19b);
  var s_29b = s_G("cyt5gd");
  s_jr.set("ssx_async", s_29b);
  var s_39b = s_G("KBmTfe");
  s_jr.set("start_feedback_dialog", s_39b);
  var s_49b = s_G("yAKDfb");
  s_jr.set("stopPropagation", s_49b);
  var s_59b = s_G("W2IkFd");
  s_jr.set("stream_close_signin_bubble", s_59b);
  var s_69b = s_G("TT63Ef");
  s_jr.set("stream_create_account", s_69b);
  var s_79b = s_G("mwGkq");
  s_jr.set("stream_filter_click", s_79b);
  var s_89b = s_G("BFix0d");
  s_jr.set("stream_signin", s_89b);
  var s_99b = s_G("z1jogd");
  s_jr.set("submit_form", s_99b);
  var s_$9b = s_G("n5ep2");
  s_jr.set("submit_votes", s_$9b);
  var s_a$b = s_G("t07jE");
  s_jr.set("subscription_dialog_ok", s_a$b);
  var s_b$b = s_G("EOrO7b");
  s_jr.set("subscription_success", s_b$b);
  var s_c$b = s_G("l1XcXe");
  s_jr.set("subscription_undo", s_c$b);
  var s_d$b = s_G("EJBECc");
  s_jr.set("sv_dismiss_efy_promo", s_d$b);
  var s_e$b = s_G("dHWdfe");
  s_jr.set("sv_dismiss_ye_promo", s_e$b);
  var s_f$b = s_G("cXPm6d");
  s_jr.set("switch_to_list", s_f$b);
  var s_g$b = s_G("LRrrGf");
  s_jr.set("switch_to_map", s_g$b);
  var s_h$b = s_G("jeZwFd");
  s_jr.set("ta_is", s_h$b);
  var s_i$b = s_G("fdgmid");
  s_jr.set("ta_isc", s_i$b);
  var s_j$b = s_G("wGAPfc");
  s_jr.set("ta_rc", s_j$b);
  var s_k$b = s_G("VC04sf");
  s_jr.set("ta_suhs", s_k$b);
  var s_l$b = s_G("rk4YD");
  s_jr.set("ta_tch", s_l$b);
  var s_m$b = s_G("SONxme");
  s_jr.set("ta_ti", s_m$b);
  var s_n$b = s_G("DuGcz");
  s_jr.set("ta_ts", s_n$b);
  var s_o$b = s_G("wjeEFe");
  s_jr.set("ta_tsr", s_o$b);
  var s_p$b = s_G("HjaMx");
  s_jr.set("taft_u", s_p$b);
  var s_q$b = s_G("bBurvb");
  s_jr.set("tag_click", s_q$b);
  var s_r$b = s_G("QMGRvd");
  s_jr.set("tb_hs", s_r$b);
  var s_s$b = s_G("D2wIvb");
  s_jr.set("tb_ts", s_s$b);
  var s_t$b = s_G("wSjSEf");
  s_jr.set("tbh_b", s_t$b);
  var s_u$b = s_G("OaodZ");
  s_jr.set("tbh_bp", s_u$b);
  var s_v$b = s_G("DRQMhe");
  s_jr.set("tbh_br", s_v$b);
  var s_w$b = s_G("ECJeN");
  s_jr.set("tbh_dl", s_w$b);
  var s_x$b = s_G("kbUJpd");
  s_jr.set("tbh_fb", s_x$b);
  var s_y$b = s_G("xx7Gwf");
  s_jr.set("tbh_hardReload", s_y$b);
  var s_z$b = s_G("WFQo0e");
  s_jr.set("tbh_navPay", s_z$b);
  var s_A$b = s_G("pTUmNc");
  s_jr.set("tbh_sc", s_A$b);
  var s_B$b = s_G("I6yAZd");
  s_jr.set("tbh_softReload", s_B$b);
  var s_C$b = s_G("xuweOe");
  s_jr.set("tbh_sr", s_C$b);
  var s_D$b = s_G("wkco4c");
  s_jr.set("tbh_te", s_D$b);
  var s_E$b = s_G("YDImOb");
  s_jr.set("tc", s_E$b);
  var s_F$b = s_G("MpH3lc");
  s_jr.set("tc_gr", s_F$b);
  var s_G$b = s_G("RQMtR");
  s_jr.set("tc_is", s_G$b);
  var s_H$b = s_G("OjRMeb");
  s_jr.set("tc_lzbsa", s_H$b);
  var s_I$b = s_G("PHrifd");
  s_jr.set("tc_tmf", s_I$b);
  var s_J$b = s_G("RRnHid");
  s_jr.set("test_url_event", s_J$b);
  var s_K$b = s_G("ihAaH");
  s_jr.set("text_updated", s_K$b);
  var s_L$b = s_G("Kno7lb");
  s_jr.set("textareaInput", s_L$b);
  var s_M$b = s_G("Su5uq");
  s_jr.set("textarea_change", s_M$b);
  var s_N$b = s_G("qU4wyb");
  s_jr.set("textarea_click", s_N$b);
  var s_O$b = s_G("ilyIyb");
  s_jr.set("th_cr", s_O$b);
  var s_P$b = s_G("DycXF");
  s_jr.set("thank_you_closed", s_P$b);
  var s_Q$b = s_G("va4bCb");
  s_jr.set("thank_you_got_it", s_Q$b);
  var s_R$b = s_G("zE9j8b");
  s_jr.set("thank_you_got_it_internal", s_R$b);
  var s_S$b = s_G("k1uud");
  s_jr.set("ticket_type_selected", s_S$b);
  var s_T$b = s_G("r4uG5c");
  s_jr.set("tl_ListViewUp", s_T$b);
  var s_U$b = s_G("KM3CD");
  s_jr.set("tl_ajacClick", s_U$b);
  var s_V$b = s_G("X412Db");
  s_jr.set("tl_alertDeleteFailure", s_V$b);
  var s_W$b = s_G("J2jBAe");
  s_jr.set("tl_alert_header_click", s_W$b);
  var s_X$b = s_G("GoJgKc");
  s_jr.set("tl_ap_direct_clk", s_X$b);
  var s_Y$b = s_G("y0uiWe");
  s_jr.set("tl_applyFacetChangeFilter", s_Y$b);
  var s_Z$b = s_G("qMFwVd");
  s_jr.set("tl_applyfilter", s_Z$b);
  var s__$b = s_G("bCEElf");
  s_jr.set("tl_chipChanges", s__$b);
  var s_0$b = s_G("olB8Lb");
  s_jr.set("tl_clearFilters", s_0$b);
  var s_1$b = s_G("ESBbkb");
  s_jr.set("tl_closeFilters", s_1$b);
  var s_2$b = s_G("zmUFSd");
  s_jr.set("tl_close_dialog", s_2$b);
  var s_3$b = s_G("QHacHd");
  s_jr.set("tl_create_account", s_3$b);
  var s_4$b = s_G("O8cgKb");
  s_jr.set("tl_detailSetHome", s_4$b);
  var s_5$b = s_G("ezYxZe");
  s_jr.set("tl_detailSetHomeExternal", s_5$b);
  var s_6$b = s_G("liTr7e");
  s_jr.set("tl_detailSetHomeInternal", s_6$b);
  var s_7$b = s_G("Cbynxd");
  s_jr.set("tl_detail_page_selected", s_7$b);
  var s_8$b = s_G("kRYx6d");
  s_jr.set("tl_doWebSearch", s_8$b);
  var s_9$b = s_G("zGIBSc");
  s_jr.set("tl_edit_alert", s_9$b);
  var s_$$b = s_G("XM2p3e");
  s_jr.set("tl_eventsFeedback", s_$$b);
  var s_aac = s_G("YxTZ7b");
  s_jr.set("tl_exploreOnBackUp", s_aac);
  var s_bac = s_G("VuAzs");
  s_jr.set("tl_fileInternalBug", s_bac);
  var s_cac = s_G("DY1qXb");
  s_jr.set("tl_fulllist", s_cac);
  var s_dac = s_G("Y31HZc");
  s_jr.set("tl_hideFilters", s_dac);
  var s_eac = s_G("LJVKFd");
  s_jr.set("tl_hide_new_alert_bubble", s_eac);
  var s_fac = s_G("z75bhf");
  s_jr.set("tl_hide_sign_in_bubble", s_fac);
  var s_gac = s_G("doiGD");
  s_jr.set("tl_id_b", s_gac);
  var s_hac = s_G("Mphmuf");
  s_jr.set("tl_id_s", s_hac);
  var s_iac = s_G("Wubo7b");
  s_jr.set("tl_itemDetailUp", s_iac);
  var s_jac = s_G("wK3DS");
  s_jr.set("tl_listScroll", s_jac);
  var s_kac = s_G("OvkIef");
  s_jr.set("tl_new_query_from_spelling", s_kac);
  var s_lac = s_G("AQGPWe");
  s_jr.set("tl_open_ibp_detail_page", s_lac);
  var s_mac = s_G("vXKRcf");
  s_jr.set("tl_open_my_events", s_mac);
  var s_nac = s_G("x0Nlee");
  s_jr.set("tl_open_remove_alert_dialog", s_nac);
  var s_oac = s_G("AXaEjd");
  s_jr.set("tl_openim", s_oac);
  var s_pac = s_G("eOj1F");
  s_jr.set("tl_openim_events", s_pac);
  var s_qac = s_G("SkM3cd");
  s_jr.set("tl_openim_on_pivot_pill", s_qac);
  var s_rac = s_G("dhb9N");
  s_jr.set("tl_recommendationClick", s_rac);
  var s_sac = s_G("vOB2D");
  s_jr.set("tl_redirect_to_pathways", s_sac);
  var s_tac = s_G("metMte");
  s_jr.set("tl_refresh", s_tac);
  var s_uac = s_G("eVdcac");
  s_jr.set("tl_refreshFilters", s_uac);
  var s_vac = s_G("itYAhe");
  s_jr.set("tl_reloadPage", s_vac);
  var s_wac = s_G("iS7L4d");
  s_jr.set("tl_remove_alert", s_wac);
  var s_xac = s_G("RbV3pd");
  s_jr.set("tl_save_change", s_xac);
  var s_yac = s_G("O5Ojlf");
  s_jr.set("tl_save_fp_open", s_yac);
  var s_zac = s_G("U4t0ef");
  s_jr.set("tl_sblogin", s_zac);
  var s_Aac = s_G("kv4Bi");
  s_jr.set("tl_searchJobsNearMe", s_Aac);
  var s_Bac = s_G("hLhP4d");
  s_jr.set("tl_searchOverlayUp", s_Bac);
  var s_Cac = s_G("h4JHk");
  s_jr.set("tl_sign_in", s_Cac);
  var s_Dac = s_G("xIDvG");
  s_jr.set("tl_tab_change", s_Dac);
  var s_Eac = s_G("h7qVpd");
  s_jr.set("tl_unsave", s_Eac);
  var s_Fac = s_G("NcjH2b");
  s_jr.set("tlspl_admissionsTabLink", s_Fac);
  var s_Gac = s_G("MhSDjf");
  s_jr.set("tlspl_costTabLink", s_Gac);
  var s_Hac = s_G("FPiITb");
  s_jr.set("tlspl_majorsTabLink", s_Hac);
  var s_Iac = s_G("kHaGtd");
  s_jr.set("tlspl_outcomesTabLink", s_Iac);
  var s_Jac = s_G("LWrIBf");
  s_jr.set("tlspl_rankingsTabLink", s_Jac);
  var s_Kac = s_G("qqjP9c");
  s_jr.set("tlspl_studentsTabLink", s_Kac);
  var s_Lac = s_G("x6Ur6c");
  s_jr.set("toggle", s_Lac);
  var s_Mac = s_G("CDABkf");
  s_jr.set("toggleReport", s_Mac);
  var s_Nac = s_G("AAEOVc");
  s_jr.set("toggle_dialog", s_Nac);
  var s_Oac = s_G("Q6E6pd");
  s_jr.set("toggle_filters", s_Oac);
  var s_Pac = s_G("VhD3Je");
  s_jr.set("toggle_result", s_Pac);
  var s_Qac = s_G("euNvlf");
  s_jr.set("tooltip_clicked", s_Qac);
  var s_Rac = s_G("VTwOjf");
  s_jr.set("tooltip_clk", s_Rac);
  var s_Sac = s_G("Iigoee");
  s_jr.set("tp_btn", s_Sac);
  var s_Tac = s_G("uQxhTd");
  s_jr.set("tr_update_source_language", s_Tac);
  var s_Uac = s_G("lWUBqb");
  s_jr.set("tr_update_target_language", s_Uac);
  var s_Vac = s_G("Vkiw8b");
  s_jr.set("track_price_tab_selected", s_Vac);
  var s_Wac = s_G("AqPvyf");
  s_jr.set("trh_md", s_Wac);
  var s_Xac = s_G("NO1mPe");
  s_jr.set("trh_rl", s_Xac);
  var s_Yac = s_G("tSqP7d");
  s_jr.set("trh_tr", s_Yac);
  var s_Zac = s_G("e3pB5e");
  s_jr.set("trigger_review", s_Zac);
  var s__ac = s_G("ZWi99");
  s_jr.set("trivia_load_new_questions", s__ac);
  var s_0ac = s_G("pRcZtd");
  s_jr.set("try_update_booking_module_again", s_0ac);
  var s_1ac = s_G("vQsond");
  s_jr.set("tsp_af", s_1ac);
  var s_2ac = s_G("dUtpAb");
  s_jr.set("tsp_caf", s_2ac);
  var s_3ac = s_G("NwhgCd");
  s_jr.set("tsp_taf", s_3ac);
  var s_4ac = s_G("pu37M");
  s_jr.set("tt_item_clicked", s_4ac);
  var s_5ac = s_G("E9iXr");
  s_jr.set("tts", s_5ac);
  var s_6ac = s_G("Wt6FZb");
  s_jr.set("udc_os", s_6ac);
  var s_7ac = s_G("vanyv");
  s_jr.set("ugcpe_hide", s_7ac);
  var s_8ac = s_G("C35vr");
  s_jr.set("ugcpe_show", s_8ac);
  var s_9ac = s_G("BjjpIb");
  s_jr.set("ugcpes_hide", s_9ac);
  var s_$ac = s_G("rR1xdf");
  s_jr.set("ugcpes_show", s_$ac);
  var s_abc = s_G("PhP6Hb");
  s_jr.set("ugcum_current", s_abc);
  var s_bbc = s_G("OXIkx");
  s_jr.set("ugcum_suggested", s_bbc);
  var s_cbc = s_G("KIWqmd");
  s_jr.set("undoFollow", s_cbc);
  var s_dbc = s_G("ZgiJMe");
  s_jr.set("undoLess", s_dbc);
  var s_ebc = s_G("p1TRoe");
  s_jr.set("undoMore", s_ebc);
  var s_fbc = s_G("wgBkwe");
  s_jr.set("undoUnfollow", s_fbc);
  var s_gbc = s_G("qd9w8b");
  s_jr.set("undo_remove", s_gbc);
  var s_hbc = s_G("hWOCUc");
  s_jr.set("unfollow", s_hbc);
  var s_ibc = s_G("RFvGYb");
  s_jr.set("unsubscription_dialog_ok", s_ibc);
  var s_jbc = s_G("ppnaM");
  s_jr.set("unsubscription_success", s_jbc);
  var s_kbc = s_G("pWewhb");
  s_jr.set("updateDatetimepickerUI", s_kbc);
  var s_lbc = s_G("YKS1lf");
  s_jr.set("update_dates", s_lbc);
  var s_mbc = s_G("WkLI3d");
  s_jr.set("update_filters", s_mbc);
  var s_nbc = s_G("ALJOGd");
  s_jr.set("update_refinements", s_nbc);
  var s_obc = s_G("etj8Wb");
  s_jr.set("update_ui", s_obc);
  var s_pbc = s_G("VJLV1b");
  s_jr.set("va_ch_ac", s_pbc);
  var s_qbc = s_G("P1QkRd");
  s_jr.set("va_cp_ps", s_qbc);
  var s_rbc = s_G("OPzWc");
  s_jr.set("vh_add", s_rbc);
  var s_sbc = s_G("NdLu7e");
  s_jr.set("vh_hc", s_sbc);
  var s_tbc = s_G("oH6Yu");
  s_jr.set("vh_remove", s_tbc);
  var s_ubc = s_G("W0NJqf");
  s_jr.set("view_selected_destination_flights", s_ubc);
  var s_vbc = s_G("z0tx3");
  s_jr.set("visible", s_vbc);
  var s_wbc = s_G("tUSYcd");
  s_jr.set("visit_feed", s_wbc);
  var s_xbc = s_G("Bcfvyc");
  s_jr.set("visit_settings", s_xbc);
  var s_ybc = s_G("zHbw5e");
  s_jr.set("vlb_c", s_ybc);
  var s_zbc = s_G("qEa63c");
  s_jr.set("vote_current", s_zbc);
  var s_Abc = s_G("zR8YH");
  s_jr.set("vote_dont_know", s_Abc);
  var s_Bbc = s_G("qH6Zmd");
  s_jr.set("vote_none", s_Bbc);
  var s_Cbc = s_G("lW2ddd");
  s_jr.set("vote_suggested", s_Cbc);
  var s_Dbc = s_G("lAN9Ad");
  s_jr.set("vpl_c", s_Dbc);
  var s_Ebc = s_G("gmenb");
  s_jr.set("wcc_ia", s_Ebc);
  var s_Fbc = s_G("GflfK");
  s_jr.set("wcc_x", s_Fbc);
  var s_Gbc = s_G("j6Puic");
  s_jr.set("wcr_ei", s_Gbc);
  var s_Hbc = s_G("iJXDmc");
  s_jr.set("website_input_change", s_Hbc);
  var s_Ibc = s_G("fSrBvc");
  s_jr.set("why_these_results_expand", s_Ibc);
  var s_Jbc = s_G("IOWeBc");
  s_jr.set("wo_move_tab", s_Jbc);
  var s_Kbc = s_G("QRB2tf");
  s_jr.set("wo_return_focus", s_Kbc);
  var s_Lbc = s_G("eBdsGd");
  s_jr.set("x", s_Lbc);
  var s_Mbc = s_G("C7xow");
  s_jr.set("xpd_a", s_Mbc);
  var s_Nbc = s_G("V5K74e");
  s_jr.set("xpd_c", s_Nbc);
  var s_Obc = s_G("s3zb5e");
  s_jr.set("xpd_e", s_Obc);
  var s_kr = s_G("xNpQtd");
  s_jr.set("xpd_r", s_kr);
  var s_Pbc = s_G("Ep2Mgc");
  s_jr.set("xpd_rm", s_Pbc);
  var s_Qbc = s_G("U6VCqe");
  s_jr.set("xpd_rt", s_Qbc);
  var s_Rbc = s_G("YUNlzf");
  s_jr.set("xpd_t", s_Rbc);
  var s_Sbc = s_G("QJfxib");
  s_jr.set("xpl", s_Sbc);
  var s_Tbc = s_G("YWWULd");
  s_jr.set("yes", s_Tbc);
  var s_Ubc = s_G("dzRIIf");
  s_jr.set("yes_vote", s_Ubc);
  var s_lr = function (a) {
    return s_jr.get(a);
  };
} catch (e) {
  _DumpException(e);
}
try {
  var s_Mdc = function (a) {
      if (s_bd.has(a)) {
        var b = s_ke(a);
        s_Jaa(s_bd.get(a), function (c) {
          return !s_Pd(b.body, c);
        });
        a.setAttribute("__IS_OWNER", 0 < s_bd.get(a).length);
      }
    },
    s_Ndc = function (a) {
      s_Mdc(a.getRoot().el());
    },
    s_Odc = function (a, b, c) {
      var d = s_di(a);
      b instanceof s_Ug && ((c = b.y), (b = b.x));
      s_$h(a, a.offsetLeft + (b - d.x), a.offsetTop + (Number(c) - d.y));
    },
    s_Pdc = function (a) {
      if (
        (a.altKey && !a.ctrlKey) ||
        a.metaKey ||
        (112 <= a.keyCode && 123 >= a.keyCode)
      )
        return !1;
      if (s_Fr(a.keyCode)) return !0;
      switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
          return !1;
        case 0:
          return !s_gf;
        default:
          return 166 > a.keyCode || 183 < a.keyCode;
      }
    },
    s_Fr = function (a) {
      if (
        (48 <= a && 57 >= a) ||
        (96 <= a && 106 >= a) ||
        (65 <= a && 90 >= a) ||
        ((s_hf || s_ff) && 0 == a)
      )
        return !0;
      switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
        case 163:
        case 58:
          return !0;
        case 173:
          return s_gf;
        default:
          return !1;
      }
    },
    s_Qdc = function (a) {
      switch (a) {
        case 61:
          return 187;
        case 59:
          return 186;
        case 173:
          return 189;
        case 224:
          return 91;
        case 0:
          return 224;
        default:
          return a;
      }
    };
} catch (e) {
  _DumpException(e);
}
try {
  var s_uw = function (a, b) {
      var c = 0 === a ? "Height" : "Width";
      if (s_hr() && s_la())
        return s_$e.M3()
          ? 0 === a
            ? s_jh().innerHeight
            : s_jh().innerWidth
          : 0 === a
            ? Math.round(s_jh().outerHeight / (s_jh().devicePixelRatio || 1))
            : Math.round(s_jh().outerWidth / (s_jh().devicePixelRatio || 1));
      if (s_Vaa() && s_la()) {
        if (s_$e.Tfe()) {
          b = s_jh().outerWidth;
          c = s_jh().screen.width;
          var d = s_jh().screen.height,
            e = s_jh().devicePixelRatio;
          (0 < e && e < Number.MAX_VALUE) || (e = 1);
          for (var f = null, g = 0 === a, k = 0; k < s_1Fc.length; k++) {
            var h = s_1Fc[k],
              l = k % 2 ? s_1Fc[k - 1] : s_1Fc[k + 1];
            if (s_Sg(b, h, 5)) {
              f = g ? l : h;
              break;
            }
          }
          null === f && (f = 1 === a ? c : d);
          return f / e;
        }
        if (1 === a) return s_jh().document.documentElement.offsetWidth;
        a = screen.height / screen.width;
        (0 < a && a < Number.MAX_VALUE) || (a = 1);
        b = s_jh().outerHeight / s_jh().outerWidth;
        if ((1 < b && 1 > a) || (1 > b && 1 < a)) a = 1 / a;
        return Math.round(s_jh().document.documentElement.offsetWidth * a);
      }
      return b
        ? s_jh().document.documentElement["client" + c]
        : s_jh()["inner" + c]
          ? s_jh()["inner" + c]
          : s_jh().document.documentElement &&
              s_jh().document.documentElement["offset" + c]
            ? s_jh().document.documentElement["offset" + c]
            : 0;
    },
    s_1Fc = [600, 1024, 800, 1200];
} catch (e) {
  _DumpException(e);
}
try {
  var s_9Fc = function (a) {
      if (s_gf) a = s_Qdc(a);
      else if (s_jf && s_hf)
        switch (a) {
          case 93:
            a = 91;
        }
      return a;
    },
    s_$Fc = function (a, b, c, d, e, f) {
      if (s_jf && e) return s_Fr(a);
      if (e && !d) return !1;
      if (!s_gf) {
        "number" === typeof b && (b = s_9Fc(b));
        var g = 17 == b || 18 == b || (s_jf && 91 == b);
        if (((!c || s_jf) && g) || (s_jf && 16 == b && (d || f))) return !1;
      }
      if ((s_hf || s_ff) && d && c)
        switch (a) {
          case 220:
          case 219:
          case 221:
          case 192:
          case 186:
          case 189:
          case 187:
          case 188:
          case 190:
          case 191:
          case 192:
          case 222:
            return !1;
        }
      if (s_ef && d && b == a) return !1;
      switch (a) {
        case 13:
          return s_gf ? (f || e ? !1 : !(c && d)) : !0;
        case 27:
          return !(s_hf || s_ff || s_gf);
      }
      return s_gf && (d || e || f) ? !1 : s_Fr(a);
    },
    s_aGc = function (a, b, c, d) {
      s_Ag.call(this, d);
      this.type = "key";
      this.keyCode = a;
      this.charCode = b;
      this.repeat = c;
    };
  s_Ue(s_aGc, s_Ag);
  var s_xw = function (a, b) {
    s_Gg.call(this);
    a && this.attach(a, b);
  };
  s_Ue(s_xw, s_Gg);
  s_ = s_xw.prototype;
  s_.xc = null;
  s_.Qob = null;
  s_.LWb = null;
  s_.Rob = null;
  s_.U_ = -1;
  s_.nra = -1;
  s_.NEb = !1;
  var s_bGc = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45,
    },
    s_cGc = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45,
    },
    s_dGc = s_jf && s_gf;
  s_ = s_xw.prototype;
  s_.xza = function (a) {
    (s_hf || s_ff) &&
      ((17 == this.U_ && !a.ctrlKey) ||
        (18 == this.U_ && !a.altKey) ||
        (s_jf && 91 == this.U_ && !a.metaKey)) &&
      this.resetState();
    -1 == this.U_ &&
      (a.ctrlKey && 17 != a.keyCode
        ? (this.U_ = 17)
        : a.altKey && 18 != a.keyCode
          ? (this.U_ = 18)
          : a.metaKey && 91 != a.keyCode && (this.U_ = 91));
    s_$Fc(a.keyCode, this.U_, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
      ? ((this.nra = s_9Fc(a.keyCode)), s_dGc && (this.NEb = a.altKey))
      : this.handleEvent(a);
  };
  s_.resetState = function () {
    this.nra = this.U_ = -1;
  };
  s_.U2d = function (a) {
    this.resetState();
    this.NEb = a.altKey;
  };
  s_.handleEvent = function (a) {
    var b = a.Je,
      c = b.altKey;
    if (s_ef && "keypress" == a.type) {
      var d = this.nra;
      var e = 13 != d && 27 != d ? b.keyCode : 0;
    } else
      (s_hf || s_ff) && "keypress" == a.type
        ? ((d = this.nra),
          (e =
            0 <= b.charCode && 63232 > b.charCode && s_Fr(d) ? b.charCode : 0))
        : ("keypress" == a.type
            ? (s_dGc && (c = this.NEb),
              b.keyCode == b.charCode
                ? 32 > b.keyCode
                  ? ((d = b.keyCode), (e = 0))
                  : ((d = this.nra), (e = b.charCode))
                : ((d = b.keyCode || this.nra), (e = b.charCode || 0)))
            : ((d = b.keyCode || this.nra), (e = b.charCode || 0)),
          s_jf && 63 == e && 224 == d && (d = 191));
    var f = (d = s_9Fc(d));
    d
      ? 63232 <= d && d in s_bGc
        ? (f = s_bGc[d])
        : 25 == d && a.shiftKey && (f = 9)
      : b.keyIdentifier &&
        b.keyIdentifier in s_cGc &&
        (f = s_cGc[b.keyIdentifier]);
    if (
      !s_gf ||
      "keypress" != a.type ||
      s_$Fc(f, this.U_, a.shiftKey, a.ctrlKey, c, a.metaKey)
    )
      (a = f == this.U_),
        (this.U_ = f),
        (b = new s_aGc(f, e, a, b)),
        (b.altKey = c),
        this.dispatchEvent(b);
  };
  s_.Ca = function () {
    return this.xc;
  };
  s_.attach = function (a, b) {
    this.Rob && this.detach();
    this.xc = a;
    this.Qob = s_m(this.xc, "keypress", this, b);
    this.LWb = s_m(this.xc, "keydown", this.xza, b, this);
    this.Rob = s_m(this.xc, "keyup", this.U2d, b, this);
  };
  s_.detach = function () {
    this.Qob &&
      (s_Eg(this.Qob),
      s_Eg(this.LWb),
      s_Eg(this.Rob),
      (this.Rob = this.LWb = this.Qob = null));
    this.xc = null;
    this.nra = this.U_ = -1;
  };
  s_.kc = function () {
    s_xw.Uc.kc.call(this);
    this.detach();
  };
} catch (e) {
  _DumpException(e);
}
try {
  var s_TTc = function () {
      var a = s_uw(0, !0),
        b = s_uw(1, !0);
      return a < b;
    },
    s_UTc = function () {
      var a = s_6c("client"),
        b = s_6c("source");
      return !!(
        /\sGSA\//.test(s_ia()) ||
        /^mobilesearchapp/.test(a) ||
        /^mobilesearchapp/.test(b)
      );
    },
    s_Yx = function (a) {
      if (window.addEventListener) {
        for (var b = 0; b < s_VTc.length; b++) if (s_VTc[b] === a) return;
        s_VTc.push(a);
        s_WTc();
      }
    },
    s_Zx = function (a) {
      for (var b = 0; b < s_VTc.length; b++)
        if (s_VTc[b] === a) {
          s_VTc.splice(b, 1);
          break;
        }
    },
    s_ZTc = function () {
      var a = s_TTc(),
        b =
          "orientation" in window &&
          !s_UTc() &&
          90 === Math.abs(window.orientation) &&
          s_XTc === -1 * window.orientation;
      s_XTc = window.orientation;
      if (a !== s_YTc || b) {
        var c = new s_tCb(a);
        s_YTc = a;
        a = {};
        b = s_g(s_VTc);
        for (
          var d = b.next();
          !d.done;
          a = {
            Wyb: a.Wyb,
          },
            d = b.next()
        )
          (a.Wyb = d.value),
            s_Lh(
              (function (e) {
                return function () {
                  e.Wyb(c);
                };
              })(a),
            );
      }
    },
    s_WTc = function () {
      if (!s__Tc) {
        s_YTc = s_TTc();
        s_XTc = window.orientation;
        "orientation" in window &&
          !s_UTc() &&
          window.addEventListener("orientationchange", s_ZTc, !1);
        var a;
        s_UTc()
          ? (a = function () {
              setTimeout(s_ZTc, 10);
            })
          : 0 <= s_ia().indexOf("CriOS")
            ? (a = function () {
                setTimeout(s_ZTc, 100);
              })
            : (a = s_ZTc);
        window.addEventListener("resize", a, !1);
        s__Tc = !0;
      }
    },
    s_YTc,
    s_XTc,
    s_VTc = [],
    s__Tc = !1;
} catch (e) {
  _DumpException(e);
}
try {
  var s_nNd = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  };
  var s_sNd = function (a) {
      var b = {};
      a = String(a);
      var c = s_oNd(a);
      if (s_pNd.test(c)) return (b.XT = s_qNd(c)), (b.type = "hex"), b;
      c = s_rNd(a);
      if (c.length) return (b.XT = s_PE(c)), (b.type = "rgb"), b;
      if (s_nNd && (c = s_nNd[a.toLowerCase()]))
        return (b.XT = c), (b.type = "named"), b;
      throw Error("Nh`" + a);
    },
    s_tNd = function (a) {
      return !!(
        s_pNd.test(s_oNd(a)) ||
        s_rNd(a).length ||
        (s_nNd && s_nNd[a.toLowerCase()])
      );
    },
    s_uNd = /#(.)(.)(.)/,
    s_qNd = function (a) {
      if (!s_pNd.test(a)) throw Error("Ph`" + a);
      4 == a.length && (a = a.replace(s_uNd, "#$1$1$2$2$3$3"));
      return a.toLowerCase();
    },
    s_QE = function (a) {
      a = s_qNd(a);
      a = parseInt(a.slice(1), 16);
      return [a >> 16, (a >> 8) & 255, a & 255];
    },
    s_vNd = function (a, b, c) {
      a = Number(a);
      b = Number(b);
      c = Number(c);
      if (a != (a & 255) || b != (b & 255) || c != (c & 255))
        throw Error("Qh`" + a + "`" + b + "`" + c);
      b = (a << 16) | (b << 8) | c;
      return 16 > a
        ? "#" + (16777216 | b).toString(16).slice(1)
        : "#" + b.toString(16);
    },
    s_PE = function (a) {
      return s_vNd(a[0], a[1], a[2]);
    },
    s_wNd = function (a, b, c) {
      a /= 255;
      b /= 255;
      c /= 255;
      var d = Math.max(a, b, c),
        e = Math.min(a, b, c),
        f = 0,
        g = 0,
        k = 0.5 * (d + e);
      d != e &&
        (d == a
          ? (f = (60 * (b - c)) / (d - e))
          : d == b
            ? (f = (60 * (c - a)) / (d - e) + 120)
            : d == c && (f = (60 * (a - b)) / (d - e) + 240),
        (g = 0 < k && 0.5 >= k ? (d - e) / (2 * k) : (d - e) / (2 - 2 * k)));
      return [Math.round(f + 360) % 360, g, k];
    },
    s_xNd = function (a, b, c) {
      0 > c ? (c += 1) : 1 < c && --c;
      return 1 > 6 * c
        ? a + 6 * (b - a) * c
        : 1 > 2 * c
          ? b
          : 2 > 3 * c
            ? a + (b - a) * (2 / 3 - c) * 6
            : a;
    },
    s_yNd = function (a, b, c) {
      a /= 360;
      if (0 == b) c = b = a = 255 * c;
      else {
        var d = 0.5 > c ? c * (1 + b) : c + b - b * c;
        var e = 2 * c - d;
        c = 255 * s_xNd(e, d, a + 1 / 3);
        b = 255 * s_xNd(e, d, a);
        a = 255 * s_xNd(e, d, a - 1 / 3);
      }
      return [Math.round(c), Math.round(b), Math.round(a)];
    },
    s_pNd = /^#(?:[0-9a-f]{3}){1,2}$/i,
    s_zNd =
      /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
    s_rNd = function (a) {
      var b = a.match(s_zNd);
      if (b) {
        a = Number(b[1]);
        var c = Number(b[2]);
        b = Number(b[3]);
        if (0 <= a && 255 >= a && 0 <= c && 255 >= c && 0 <= b && 255 >= b)
          return [a, c, b];
      }
      return [];
    },
    s_oNd = function (a) {
      return "#" == a.charAt(0) ? a : "#" + a;
    },
    s_ANd = function (a) {
      a = s_QE(a);
      return s_wNd(a[0], a[1], a[2]);
    },
    s_RE = function (a, b, c) {
      c = s_Qg(c, 0, 1);
      return [
        Math.round(b[0] + c * (a[0] - b[0])),
        Math.round(b[1] + c * (a[1] - b[1])),
        Math.round(b[2] + c * (a[2] - b[2])),
      ];
    },
    s_SE = function (a, b) {
      return s_RE([0, 0, 0], a, b);
    };
} catch (e) {
  _DumpException(e);
}
try {
  var s_BNd = function (a) {
      var b = b || 0;
      return function () {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
      };
    },
    s_TE = function (a, b, c) {
      s_Ve.call(this);
      this.ef = null;
      this.oa = !1;
      this.rI = a;
      this.wa = c;
      this.ka = b || window;
      this.Eu = s_Re(this.Yfc, this);
    };
  s_Ue(s_TE, s_Ve);
  s_ = s_TE.prototype;
  s_.start = function () {
    this.stop();
    this.oa = !1;
    var a = s_CNd(this),
      b = s_DNd(this);
    a && !b && this.ka.mozRequestAnimationFrame
      ? ((this.ef = s_m(this.ka, "MozBeforePaint", this.Eu)),
        this.ka.mozRequestAnimationFrame(null),
        (this.oa = !0))
      : (this.ef =
          a && b
            ? a.call(this.ka, this.Eu)
            : this.ka.setTimeout(s_BNd(this.Eu), 20));
  };
  s_.stop = function () {
    if (this.isActive()) {
      var a = s_CNd(this),
        b = s_DNd(this);
      a && !b && this.ka.mozRequestAnimationFrame
        ? s_Eg(this.ef)
        : a && b
          ? b.call(this.ka, this.ef)
          : this.ka.clearTimeout(this.ef);
    }
    this.ef = null;
  };
  s_.fire = function () {
    this.stop();
    this.Yfc();
  };
  s_.isActive = function () {
    return null != this.ef;
  };
  s_.Yfc = function () {
    this.oa && this.ef && s_Eg(this.ef);
    this.ef = null;
    this.rI.call(this.wa, s_Te());
  };
  s_.kc = function () {
    this.stop();
    s_TE.Uc.kc.call(this);
  };
  var s_CNd = function (a) {
      a = a.ka;
      return (
        a.requestAnimationFrame ||
        a.webkitRequestAnimationFrame ||
        a.mozRequestAnimationFrame ||
        a.oRequestAnimationFrame ||
        a.msRequestAnimationFrame ||
        null
      );
    },
    s_DNd = function (a) {
      a = a.ka;
      return (
        a.cancelAnimationFrame ||
        a.cancelRequestAnimationFrame ||
        a.webkitCancelRequestAnimationFrame ||
        a.mozCancelRequestAnimationFrame ||
        a.oCancelRequestAnimationFrame ||
        a.msCancelRequestAnimationFrame ||
        null
      );
    };
} catch (e) {
  _DumpException(e);
}
try {
  var s_ENd = function (a) {
      return 0 < a ? 1 : 0 > a ? -1 : a;
    },
    s_FNd = {},
    s_GNd = null,
    s_UE = null,
    s_VE = function (a) {
      var b = s_Fa(a);
      b in s_FNd || (s_FNd[b] = a);
      s_HNd();
    },
    s_WE = function (a) {
      a = s_Fa(a);
      delete s_FNd[a];
      s_Fb(s_FNd) && s_UE && s_UE.stop();
    },
    s_INd = function () {
      var a = s_UE && s_UE.isActive();
      s_da(s_UE);
      s_UE = null;
      s_GNd = s_ba;
      a && s_HNd();
    },
    s_HNd = function () {
      s_UE ||
        (s_GNd
          ? (s_UE = new s_TE(function (b) {
              s_JNd(b);
            }, s_GNd))
          : (s_UE = new s_4m(function () {
              s_JNd(s_Te());
            }, 20)));
      var a = s_UE;
      a.isActive() || a.start();
    },
    s_JNd = function (a) {
      s_Ab(s_FNd, function (b) {
        b.Co(a);
      });
      s_Fb(s_FNd) || s_HNd();
    };
} catch (e) {
  _DumpException(e);
}
try {
  var s_ASd,
    s_BSd = s_4d().Xe().documentElement;
  s_ASd = s_BSd.requestFullscreen
    ? "fullscreenchange"
    : s_BSd.webkitRequestFullscreen
      ? "webkitfullscreenchange"
      : s_BSd.mozRequestFullScreen
        ? "mozfullscreenchange"
        : s_BSd.msRequestFullscreen
          ? "MSFullscreenChange"
          : "fullscreenchange";
  var s_cF = function () {
      var a = s_4d().Xe(),
        b = a.body;
      return !!(
        (b.webkitRequestFullscreen && a.webkitFullscreenEnabled) ||
        (b.mozRequestFullScreen && a.mozFullScreenEnabled) ||
        (b.msRequestFullscreen && a.msFullscreenEnabled) ||
        (b.requestFullscreen && a.fullscreenEnabled)
      );
    },
    s_CSd = function (a, b) {
      if (a.requestFullscreen) return a.requestFullscreen(b);
      if (a.webkitRequestFullscreen) return a.webkitRequestFullscreen();
      if (a.mozRequestFullScreen) return a.mozRequestFullScreen();
      if (a.msRequestFullscreen) return a.msRequestFullscreen();
    },
    s_DSd = function () {
      var a = s_4d().Xe();
      a.exitFullscreen
        ? a.exitFullscreen()
        : a.webkitCancelFullScreen
          ? a.webkitCancelFullScreen()
          : a.mozCancelFullScreen
            ? a.mozCancelFullScreen()
            : a.msExitFullscreen && a.msExitFullscreen();
    },
    s_dF = function () {
      var a = s_4d().Xe();
      return !!(
        a.webkitIsFullScreen ||
        a.mozFullScreen ||
        a.msFullscreenElement ||
        a.fullscreenElement
      );
    };
} catch (e) {
  _DumpException(e);
}
try {
  var s_0ee = function (a) {
      this.src = a;
      this.oa = !1;
      this.Ba = [];
    },
    s_1ee = function (a) {
      if (!a.oa) {
        a.oa = !0;
        a = s_g(a.Ba);
        for (var b = a.next(); !b.done; b = a.next()) (b = b.value), b();
      }
    };
  s_0ee.prototype.isLoaded = function () {
    return this.oa;
  };
  var s_2ee = s_ia(),
    s_3ee =
      s_2ee.includes("iPad") ||
      s_2ee.includes("iPhone") ||
      s_2ee.includes("iPod"),
    s_$G = function (a, b) {
      this.Ba = a;
      this.dZ = b;
      this.wa = this.oa = this.ka = null;
      this.Aa = !1;
    };
  s_$G.prototype.init = function (a) {
    var b = this;
    if (!s_4ee) return !1;
    if (this.ka) return !0;
    this.ka = new (s_ba.AudioContext || s_ba.webkitAudioContext)();
    this.oa = this.ka.createGain();
    this.oa.connect(this.ka.destination);
    for (
      var c = s_g(Object.values(this.Ba)), d = c.next();
      !d.done;
      d = c.next()
    )
      d.value.init(this.ka);
    c = s_g(Object.values(this.dZ));
    for (d = c.next(); !d.done; d = c.next()) d.value.init(this.ka, this.oa);
    s_3ee &&
      (s_5ee(this),
      s_Cg(a, "touchend", function () {
        s_5ee(b);
      }));
    return !0;
  };
  var s_6ee = function (a) {
      a.Aa ||
        ((a.wa = a.ka.createBufferSource()),
        (a.wa.buffer = a.ka.createBuffer(1, 1, 22050)),
        a.wa.connect(a.ka.destination),
        s_Cg(a.wa, "ended", function () {
          a.Aa = !0;
        }),
        a.wa.start(0));
    },
    s_5ee = function (a) {
      a.ka && !a.Aa && ((null !== a.wa && a.Aa) || s_6ee(a));
    };
  s_$G.prototype.isInitialized = function () {
    return !!this.ka;
  };
  s_$G.prototype.getContext = function () {
    return this.ka;
  };
  s_$G.prototype.destroy = function () {
    this.ka.close();
    this.ka = null;
  };
  s_$G.prototype.reset = function () {
    for (
      var a = s_g(Object.values(this.Ba)), b = a.next();
      !b.done;
      b = a.next()
    )
      b.value.Ba = [];
    a = s_g(Object.values(this.dZ));
    for (b = a.next(); !b.done; b = a.next()) b.value.stop();
  };
  var s_7ee = function (a) {
      a.oa && (a.oa.gain.value = 0);
    },
    s_8ee = function (a) {
      a.oa && (a.oa.gain.value = 1);
    },
    s_4ee =
      !(!s_ba.AudioContext && !s_ba.webkitAudioContext) && !!s_ba.GainNode,
    s_aH = function (a, b, c) {
      this.ka = a;
      this.name = b;
      this.duration = c;
      this.wa = {};
      this.Aa = this.oa = this.Ba = null;
      this.Da = 0;
    };
  s_aH.prototype.init = function (a, b) {
    this.oa = a;
    this.Aa = b;
    this.oa.createGain && (this.Ba = this.oa.createGain());
  };
  var s_9ee = function (a) {
    if (a.oa)
      for (
        var b = 1e3 * a.oa.currentTime,
          c = s_g(Object.keys(a.wa)),
          d = c.next();
        !d.done;
        d = c.next()
      ) {
        d = d.value;
        var e = a.wa[d];
        !e.Cke && e.playTime + a.duration < b && delete a.wa[d];
      }
  };
  s_aH.prototype.play = function (a, b) {
    a = void 0 === a ? 0 : a;
    b = void 0 === b ? !1 : b;
    if (!this.oa || !this.Aa) return -1;
    s_9ee(this);
    a = this.oa.currentTime + a / 1e3;
    var c = this.oa.createBufferSource();
    this.Ba
      ? (c.connect(this.Ba), this.Ba.connect(this.Aa))
      : c.connect(this.Aa);
    c.loop = b;
    try {
      c.buffer = this.ka.sB(this.name);
    } catch (e) {
      return -1;
    }
    c.playbackRate.value = 1;
    c.start(a, 0);
    var d = this.Da++;
    this.wa[String(d)] = {
      node: c,
      playTime: 1e3 * a,
      Cke: b,
    };
    return d;
  };
  s_aH.prototype.stop = function (a) {
    s_9ee(this);
    if (void 0 !== a) {
      if (this.wa[a]) {
        try {
          this.wa[a].node.stop(0);
        } catch (c) {}
        delete this.wa[a];
      }
    } else {
      a = s_g(Object.keys(this.wa));
      for (var b = a.next(); !b.done; b = a.next()) this.stop(b.value);
    }
  };
  var s_bH = function (a, b, c, d) {
    d = void 0 === d ? 314 : d;
    s_0ee.call(this, assetsPath + b + ".bin");
    this.index = c;
    this.wa = d;
    this.ka = null;
    this.Aa = {};
    this.status = 0;
  };
  s_r(s_bH, s_0ee);
  s_bH.prototype.getStatus = function () {
    return this.status;
  };
  s_bH.prototype.init = function (a) {
    this.ka = a;
  };
  s_bH.prototype.preload = function (a) {
    var b = this;
    if ((0 === this.status || (void 0 === a ? 0 : a)) && this.ka) {
      var c = new s_qm();
      c.setResponseType("arraybuffer");
      c.listen("complete", function () {
        s_$ee(b, c);
      });
      c.send(this.src);
      this.status = 1;
    }
  };
  var s_$ee = function (a, b) {
    b = b.getResponse();
    var c = s_afe(a, new Uint8Array(b)),
      d = Object.keys(c);
    a.status = 2;
    var e = function (f, g) {
      g && f && (a.Aa[f] = g);
      0 === d.length
        ? ((a.status = 3), s_1ee(a))
        : ((f = d.shift()),
          a.ka.decodeAudioData(c[f], function (k) {
            e(f, k);
          }));
    };
    e(null, null);
  };
  s_bH.prototype.sB = function (a) {
    return this.Aa[a];
  };
  var s_afe = function (a, b) {
    var c = {},
      d = {},
      e = {},
      f = 0,
      g = !1;
    0 === b[0] && (g = !0);
    Object.entries(a.index).forEach(function (l) {
      var m = s_g(l);
      l = m.next().value;
      m = m.next().value;
      d[l] = [];
      e[l] = [];
      var n = b[m];
      g && (n |= b[++m] << 8);
      f += n;
      for (var p = 0; p < n; p++)
        g
          ? (d[l].push(b[m + 1] | (b[m + 2] << 8)), (m += 2))
          : d[l].push(b[++m]);
      for (p = 0; p < n; p++)
        g
          ? (e[l].push(b[m + 1] | (b[m + 2] << 8)), (m += 2))
          : e[l].push(b[++m]);
    });
    var k = 2 * f + Object.keys(a.index).length;
    g && ((k *= 2), (k += 2));
    var h = b[k];
    ++k;
    g && ((h |= b[k] << 8), ++k);
    Object.entries(a.index).forEach(function (l) {
      var m = s_g(l);
      l = m.next().value;
      m.next();
      var n = 0;
      s_Ka(
        d[l],
        function (v) {
          n += a.wa - (b[k + 32 * v + 2] & 2 ? 0 : 1);
        },
        a,
      );
      c[l] = new ArrayBuffer(n);
      m = new Uint8Array(c[l]);
      for (var p = 0, q = 0; q < d[l].length; q++) {
        var r = k + 32 * d[l][q],
          t = a.wa - (b[r + 2] & 2 ? 0 : 1),
          u = k + 32 * h + e[l][q] * (a.wa - 32);
        m.set(b.subarray(r, r + 32), p);
        p += 32;
        m.set(b.subarray(u, u + t - 32), p);
        p += t - 32;
      }
    });
    return c;
  };
} catch (e) {
  _DumpException(e);
}
try {
  var s_sie = function (a) {
    function b() {
      if (!s_ir()) {
        var e = "",
          f = "",
          g = "",
          k = 0;
        if (s_TTc()) {
          var h = window.innerHeight;
          var l = window.innerWidth;
          if (0 > window.orientation && 180 >= window.orientation) {
            e = "rotate(90deg)";
            k = l;
            var m = 0;
          } else (e = "rotate(-90deg)"), (k = 0), (m = h);
          f = "0 0";
          g = "absolute";
        } else (h = window.innerWidth), (l = window.innerHeight), (m = 0);
        s_E(c, "transform", e);
        s_E(c, "transformOrigin", f);
        s_E(c, "position", g);
        s_E(c, "width", h + "px");
        s_E(c, "height", l + "px");
        s_E(c, "left", k + "px");
        s_E(c, "top", m + "px");
      }
    }
    var c = document.body,
      d = !1;
    s_Yx(b);
    b();
    a.Pc({
      dispose: function () {},
      isDisposed: function () {
        return d;
      },
    });
    return function () {
      d = !0;
      s_Zx(b);
    };
  };
} catch (e) {
  _DumpException(e);
}
try {
  s_a("pKhWu");
  var s_Nne = function (a) {
      a = Math.floor(a);
      if (0 >= a) return "00:00:000";
      var b = Math.floor(a / 6e4);
      return 99 < b
        ? "99:99:999"
        : b.toString().padStart(2, "0") +
            ":" +
            (Math.floor(a / 1e3) % 60).toString().padStart(2, "0") +
            ":" +
            (a % 1e3).toString().padStart(3, "0");
    },
    s__H = function (a) {
      return (a.x << 16) | a.y;
    },
    s_One = function (a) {
      switch (a) {
        case "LEFT":
          return "RIGHT";
        case "RIGHT":
          return "LEFT";
        case "UP":
          return "DOWN";
        case "DOWN":
          return "UP";
        default:
          return "NONE";
      }
    },
    s_0H = function (a, b, c, d) {
      return Math.max(Math.abs(a - c), Math.abs(b - d));
    },
    s_Pne = function (a) {
      return 0 === a || 1 === a
        ? 0
        : -a * Math.log2(a) - (1 - a) * Math.log2(1 - a);
    },
    s_Qne = s_if ? 175 : 135,
    s_Rne = new s_Ug(15, 30),
    s_1H = [145, 145, 145],
    s_2H = [100, 100, 100],
    s_3H = [
      ["#4E7CF6", "#17439F"],
      ["#19D8E6", "#15B5C1"],
      ["#B648F2", "#910FD7"],
      ["#ED44B5", "#C31388"],
      ["#F53D40", "#D00B0E"],
      ["#F69C3C", "#EA7E0B"],
      ["#ECD613", "#D9C512"],
      ["#35B63E", "#298E30"],
      ["#6B6B6B", "#404040"],
      ["#F2F2F2", "#D9D9D9"],
      ["#000000", "#FFFFFF"],
      ["#3888F8", "#E4425E"],
      ["#B749EC", "#EF8826"],
      ["#F53AA2", "#F5D40E"],
      ["#F9B202", "#4CBD1E"],
      ["#39C14C", "#3A79F2"],
      ["#6B6B6B", "#F2F2F2"],
      ["#F2F2F2", "#6B6B6B"],
    ],
    s_Sne = [5, 4, 7, 7, 1, 2, 0, 3, 9, 8, 0, 14, 15, 15, 11, 12, 17, 16],
    s_Tne = [
      {
        base: "#e7471d",
        target: "#808080",
        threshold: 10,
      },
      {
        base: "#eaca23",
        target: "#909090",
        threshold: 10,
      },
      {
        base: "#ea7f00",
        target: "#909090",
        threshold: 10,
      },
      {
        base: "#9823af",
        target: "#808080",
        threshold: 10,
      },
      {
        base: "#ef8d15",
        target: "#909090",
        threshold: 10,
      },
      {
        base: "#49c527",
        target: "#7a7a7a",
        threshold: 360,
      },
      {
        base: "#9823af",
        target: "#808080",
        threshold: 10,
      },
      {
        base: "#f40000",
        target: "#808080",
        threshold: 10,
      },
      {
        base: "#e7471d",
        target: "#808080",
        threshold: 10,
      },
      {
        base: "#ff9900",
        target: "#909090",
        threshold: 10,
      },
      {
        base: "#f26e4d",
        target: "#858585",
        threshold: 10,
      },
      {
        base: "#009900",
        target: "#858585",
        threshold: 10,
      },
      {
        base: "#e7471d",
        target: "#909090",
        threshold: 10,
      },
      {
        base: "#00a10d",
        target: "#808080",
        threshold: 1,
      },
      {
        base: "#00c919",
        target: "#858585",
        threshold: 360,
      },
      {
        base: "#efce13",
        target: "#909090",
        threshold: 10,
      },
      {
        base: "#fe8a00",
        target: "#858585",
        threshold: 10,
      },
      {
        base: "#ff886c",
        target: "#909090",
        threshold: 15,
      },
      {
        base: "#ca953e",
        target: "#909090",
        threshold: 10,
      },
      {
        base: "#ff4040",
        target: "#858585",
        threshold: 10,
      },
      {
        base: "#fc2d00",
        target: "#808080",
        threshold: 10,
      },
    ],
    s_Une = [
      0.2, 0.35, 0.25, 0.15, 0.3, 0.35, 0.15, 0.2, 0.25, 0.3, 0.25, 0.2, 0.25,
      0.25, 0.25, 0.4, 0.3, 0.3, 0.25, 0.2, 0.2,
    ],
    s_Vne = [
      0, 0, 0, 0, 0, 0.075, 0.15, 0, 0, 0.125, 0, 0, 0.05, 0.075, 0.1, 0, 0.1,
      0.1,
    ],
    s_Wne = "#4E7CF6 #5499C7 #AF7AC5 #E74C3C #F39C12 #CCC31C #27AE60".split(
      " ",
    ),
    s_Xne = ["#808080", "#9E9E9E", "#808080", "#616161"],
    s_4H = [
      "#aad751 #a2d149 #94bd46 #578a34 #38640e #4a752c #4dc1f9".split(" "),
      "#494351 #443e4c #3d3644 #2c2730 #453d4d #262428 #2a2640".split(" "),
      "#deeced #d1e4e6 #b9d4d5 #879fa1 #506486 #75898a #8cbfd9".split(" "),
      "#6e3535 #673232 #633131 #a33e3e #642b2b #762d2d #292e4c".split(" "),
      "#f2d78c #eccd79 #e6c770 #977b26 #594d26 #725e1d #5fb7e3".split(" "),
      "#3f5543 #3b4f3f #334737 #253227 #354b38 #202822 #2b375a".split(" "),
      "#b4d0f9 #a3c5f5 #94baf0 #275ba5 #11325f #1d457c #42a5f0".split(" "),
      "#432c68 #3d285d #3a2956 #604096 #3f305a #432a6f #32224f".split(" "),
    ],
    s_Yne =
      "#f4c20d #db3236 #4885ed #ed44b5 #b648f2 #48e6f1 #f4840d #008744".split(
        " ",
      );
  var s_5H = function (a, b, c) {
      this.path = a;
      this.wa = b;
      this.context = c;
      this.loaded = !1;
      this.zr = new Image();
      this.zr.crossOrigin = "Anyonymous";
      this.oa = document.createElement("canvas").getContext("2d");
      this.ka = document.createElement("canvas").getContext("2d");
      this.Ba = this.Aa = "";
      this.Da = -1;
      s_Zne(this);
    },
    s_Zne = function (a) {
      a.zr.src = a.path;
      s_Cg(a.zr, "load", function () {
        a.loaded = !0;
        s_6H(a);
        "" !== a.Aa &&
          "" !== a.Ba &&
          (s_7H(a, a.Aa, a.Ba, a.Da), (a.Aa = ""), (a.Ba = ""), (a.Da = 0));
      });
    },
    s_6H = function (a) {
      a.loaded &&
        ((a.oa.canvas.width = a.zr.width),
        (a.oa.canvas.height = a.zr.height),
        a.oa.clearRect(0, 0, a.oa.canvas.width, a.oa.canvas.height),
        a.oa.drawImage(a.zr, 0, 0),
        (a.ka.canvas.width = a.zr.width),
        (a.ka.canvas.height = a.zr.height),
        a.ka.clearRect(0, 0, a.ka.canvas.width, a.ka.canvas.height),
        a.ka.drawImage(a.zr, 0, 0));
    },
    s_7H = function (a, b, c, d) {
      d = void 0 === d ? -1 : d;
      if (a.loaded) {
        s_6H(a);
        b = s_ANd(b);
        c = s_ANd(c);
        for (
          var e = 0 === b[2] ? 1 : c[2] / b[2],
            f = a.oa.getImageData(0, 0, a.oa.canvas.width, a.oa.canvas.height),
            g = f.data,
            k = 0;
          k < g.length;
          k += 4
        )
          if (0 < g[k + 3]) {
            var h = s_wNd(g[k], g[k + 1], g[k + 2]),
              l = Math.abs(h[0] - b[0]);
            180 < l && (l = 360 - l);
            l = 0 <= d && l >= d;
            1 > h[2] && !l && ((h[0] = c[0]), (h[1] = c[1]), (h[2] *= e));
            h = s_yNd(h[0], h[1], h[2]);
            g[k] = h[0];
            g[k + 1] = h[1];
            g[k + 2] = h[2];
          }
        a.ka.putImageData(f, 0, 0);
      } else (a.Aa = b), (a.Ba = c), (a.Da = d);
    };
  s_5H.prototype.render = function (a, b, c, d, e) {
    if (this.loaded) {
      var f = c ? c.x : 0;
      c = c ? c.y : 0;
      this.context.translate(b.x, b.y);
      this.context.rotate(d);
      this.context.drawImage(
        this.ka.canvas,
        0,
        this.qd() * a,
        this.Bd(),
        this.qd(),
        f * e,
        c * e,
        this.Bd() * e,
        this.qd() * e,
      );
      this.context.rotate(-d);
      this.context.translate(-b.x, -b.y);
    }
  };
  s_5H.prototype.Bd = function () {
    return this.zr.width;
  };
  s_5H.prototype.qd = function () {
    return this.zr.height / this.wa;
  };
  var s__ne = function (a, b, c) {
    this.ka = a;
    this.settings = b;
    this.oa = c;
    this.wa = [];
    for (a = 0; 21 > a; a++)
      (b = new s_5H(
        assetsPath + "apple_" + ((10 > a ? "0" : "") + a) + ".png",
        1,
        this.oa,
      )),
        (c = s_Tne[a]),
        s_7H(b, c.base, c.target, c.threshold),
        this.wa.push(b);
  };
  s__ne.prototype.render = function (a, b) {
    var c = b.Gb.clone();
    c.x = c.x * this.ka.ka.oa + this.ka.ka.oa / 2;
    c.y = c.y * this.ka.ka.oa + this.ka.ka.oa / 2;
    if (s_8H(this.settings, 6) && !b.Lo && !this.ka.ik) {
      var d = b.Gb.clone();
      d.x += 0 < b.ox.x ? b.wd.x : 0;
      d.y += 0 < b.ox.y ? b.wd.y : 0;
      d.x = d.x * this.ka.ka.oa + this.ka.ka.oa / 2;
      d.y = d.y * this.ka.ka.oa + this.ka.ka.oa / 2;
      c.x = c.x * (1 - a) + d.x * a;
      c.y = c.y * (1 - a) + d.y * a;
      d =
        (this.ka.ka.oa / 10) *
        (2 * Math.abs(2 * (a + 0.25 - Math.floor(a + 0.75))) - 1);
      0 === b.ox.x && (c.x += d * Math.sign(b.wd.x));
      0 === b.ox.y && (c.y += d * Math.sign(b.wd.y));
    }
    d = this.ka.jyc(b, a);
    var e = 0 < b.type && b.type < this.wa.length ? b.type : 0,
      f = b.KX ? this.wa[e].ka.canvas : this.wa[e].oa.canvas;
    s_8H(this.settings, 11) &&
      (this.oa.globalAlpha = s_9H(
        this.ka,
        a,
        b.xh,
        b.KX || s_0ne(this.settings) ? 0.2 : s_Une[e],
      ));
    this.oa.drawImage(f, 0, 0, 128, 128, c.x - d / 2, c.y - d / 2, d, d);
    s_$H(this.settings) &&
      ((a = new s_Ug(
        this.ka.ka.ka.width * this.ka.ka.oa - c.x,
        this.ka.ka.ka.height * this.ka.ka.oa - c.y,
      )),
      this.oa.save(),
      this.oa.translate(a.x, a.y),
      this.oa.rotate(Math.PI),
      18 === e && this.oa.scale(-1, 1),
      this.oa.drawImage(f, 0, 0, 128, 128, -(d / 2), -(d / 2), d, d),
      this.oa.restore());
    this.oa.globalAlpha = 1;
  };
  var s_1ne = function (a, b, c, d) {
    this.settings = a;
    this.oa = b;
    this.wa = c;
    this.Aa = d;
    this.ka = [];
  };
  s_1ne.prototype.reset = function () {
    this.ka = [];
    var a = s_2ne(this.settings);
    if (a) {
      if (
        (this.ka.push(s_aI(this, -1, -2)),
        this.ka.push(s_aI(this, -1, 2)),
        0 !== this.settings.wa)
      )
        if (1 !== this.settings.Aa) {
          this.ka.push(s_aI(this, -3, -3));
          this.ka.push(s_aI(this, -3, 3));
          this.ka.push(s_aI(this, -5, -4));
          this.ka.push(s_aI(this, -5, 4));
          2 === this.settings.wa &&
            (this.ka.push(s_aI(this, -7, -5)),
            this.ka.push(s_aI(this, -7, 5)),
            this.ka.push(s_aI(this, 1, -1)),
            this.ka.push(s_aI(this, 1, 1)));
          var b = s_g(this.ka);
          for (c = b.next(); !c.done; c = b.next())
            c.value.Gb.x += (1 === this.settings.wa ? 2 : 1) - (s_if ? 1 : 0);
        } else {
          this.ka[0].Gb.x += 2;
          this.ka[0].Gb.y += 1;
          this.ka[1].Gb.x += 2;
          --this.ka[1].Gb.y;
          this.ka.push(s_aI(this, 0, -3));
          this.ka.push(s_aI(this, 0, 3));
          this.ka.push(s_aI(this, -2, -3));
          this.ka.push(s_aI(this, -2, 3));
          if (s_if)
            for (b = s_g(this.ka), c = b.next(); !c.done; c = b.next())
              --c.value.Gb.x;
          2 === this.settings.wa &&
            (s_if
              ? (this.ka.push(s_aI(this, -2, -5)),
                this.ka.push(s_aI(this, -2, 5)),
                this.ka.push(s_aI(this, -4, -5)),
                this.ka.push(s_aI(this, -4, 5)))
              : (this.ka.push(s_aI(this, -4, -3)),
                this.ka.push(s_aI(this, -4, 3)),
                this.ka.push(s_aI(this, -6, -3)),
                this.ka.push(s_aI(this, -6, 3))));
        }
    } else if (
      (this.ka.push(s_aI(this, 0, 0)),
      0 !== this.settings.wa &&
        (this.ka.push(s_aI(this, -2, -2)),
        this.ka.push(s_aI(this, -2, 2)),
        2 === this.settings.wa))
    ) {
      this.ka.push(s_aI(this, 2, -2));
      this.ka.push(s_aI(this, 2, 2));
      b = s_g(this.ka);
      for (var c = b.next(); !c.done; c = b.next())
        c.value.Gb.x -= 2 === this.settings.Aa ? 2 : 1;
    }
    c = Math.floor((this.wa.ka[0].x + s_bI(this.wa, 0).x) / 2);
    b = 1 === this.oa.ka.width % 2;
    if (s_8H(this.settings, 7)) {
      var d = this.ka[0].Gb.x - c;
      c = 1 === this.oa.ka.height % 2;
      c = s_if && b && !c;
      var e = s_8H(this.settings, 7) && a;
      !b || c || e || (d += 1);
      s_if || 1 === this.settings.Aa || (d += 1);
      e = s_g(this.ka);
      for (c = e.next(); !c.done; c = e.next()) c.value.Gb.x -= d;
      if (a) {
        a = 0;
        d = s_g(this.ka);
        for (c = d.next(); !c.done; c = d.next()) a = Math.min(a, c.value.Gb.x);
        if (0 > a)
          for (d = s_g(this.ka), c = d.next(); !c.done; c = d.next())
            c.value.Gb.x -= a;
      }
      c =
        s_8H(this.settings, 2) &&
        !s_8H(this.settings, 8) &&
        !s_8H(this.settings, 9);
      if (!s_if && 0 === this.settings.wa && c)
        for (a = s_g(this.ka), c = a.next(); !c.done; c = a.next())
          --c.value.Gb.x;
      if (s_$H(this.settings) && b && 0 !== this.settings.wa) {
        b = !1;
        a = s_g(this.ka);
        for (c = a.next(); !c.done; c = a.next())
          c.value.Gb.x === Math.floor(this.oa.ka.width / 2) && (b = !0);
        if (b)
          for (b = s_g(this.ka), c = b.next(); !c.done; c = b.next())
            --c.value.Gb.x;
      }
    }
    if (s_8H(this.settings, 11))
      for (c = this.ka.length, b = 0; b < c; b++)
        (a = s_aI(this, 0, 0)),
          (a.Gb.x = this.ka[b].Gb.x),
          (a.Gb.y = this.ka[b].Gb.y + 1),
          --this.ka[b].Gb.y,
          s_2ne(this.settings) &&
            (1 !== this.settings.Aa && 2 === this.settings.wa
              ? s_8H(this.settings, 7)
                ? 2 === this.settings.Aa
                  ? (a.Gb.x -= 2)
                  : (--a.Gb.x, (a.Gb.y += 1))
                : --a.Gb.x
              : 1 === this.settings.Aa &&
                0 !== this.settings.wa &&
                (s_8H(this.settings, 7)
                  ? 1 === this.settings.wa
                    ? (--a.Gb.x, --a.Gb.y)
                    : ((a.Gb.x += 2), (this.ka[b].Gb.y += 1))
                  : (--a.Gb.x, (this.ka[b].Gb.x += 1)))),
          (a.xh = !1),
          this.ka.push(a);
    if (s_8H(this.settings, 2))
      for (
        c = Math.floor(42 / this.ka.length), b = 0;
        b < this.ka.length;
        b += 2
      )
        (this.ka[b].type = s_3ne(this)),
          (this.ka[b + 1].type = this.ka[b].type),
          0 < b &&
            21 !== this.settings.Da &&
            ((this.ka[b].type = (this.ka[b].type + b * c) % 21),
            (this.ka[b + 1].type = this.ka[b].type));
    else
      for (b = s_g(this.ka), c = b.next(); !c.done; c = b.next())
        c.value.type = s_3ne(this);
    for (c = 0; c < this.ka.length; c++) {
      b = this.ka[c];
      a = !1;
      this.oa.y8(b.Gb) || (a = !0);
      d = s_8H(this.settings, 7) && s_8H(this.settings, 8);
      if (
        b.Gb.equals(this.wa.ka[0]) ||
        ((s_$H(this.settings) || d) &&
          s_cI(this.oa, b.Gb).equals(this.wa.ka[0]))
      )
        s_8H(this.settings, 15) ? (a = !0) : (b.Gb.x += 1);
      for (d = 1; d < this.wa.ka.length; d++)
        if (
          b.Gb.equals(this.wa.ka[d]) ||
          (s_8H(this.settings, 7) && s_cI(this.oa, b.Gb).equals(this.wa.ka[d]))
        )
          a = !0;
      d = s_8H(this.settings, 7) && s_8H(this.settings, 8);
      e = s_$H(this.settings) || d;
      for (var f = c + 1; f < this.ka.length; f++) {
        var g = this.ka[f];
        if (b.Gb.equals(g.Gb) || (e && s_cI(this.oa, b.Gb).equals(g.Gb)))
          a = !0;
      }
      a && (a = this.oa.Aa(null, d ? 6 : 2)) && (b.Gb = a);
    }
    if (s_8H(this.settings, 6))
      for (b = s_g(this.ka), c = b.next(); !c.done; c = b.next())
        s_4ne(this, c.value, new Map(), [], new Set());
  };
  s_1ne.prototype.update = function () {
    for (var a = s_g(this.ka), b = a.next(); !b.done; b = a.next())
      (b = b.value),
        b.Lo ||
          ((b.Cx = (b.Cx + 1) % 6),
          s_8H(this.settings, 6) &&
            (b.ox.x && (b.Gb.x += b.wd.x),
            b.ox.y && (b.Gb.y += b.wd.y),
            s_8H(this.settings, 4) &&
              (0 > b.Gb.x
                ? (b.Gb.x += this.oa.ka.width)
                : b.Gb.x >= this.oa.ka.width && (b.Gb.x -= this.oa.ka.width),
              0 > b.Gb.y
                ? (b.Gb.y += this.oa.ka.height)
                : b.Gb.y >= this.oa.ka.height &&
                  (b.Gb.y -= this.oa.ka.height))));
  };
  var s_aI = function (a, b, c) {
      return {
        Gb: new s_Ug(
          Math.floor((3 * a.oa.ka.width) / 4) + b,
          Math.floor(a.oa.ka.height / 2) + c,
        ),
        Cx: 0,
        type: -1,
        Lo: !1,
        wd: s_8H(a.settings, 6) ? s_5ne() : new s_Ug(0, 0),
        ox: new s_Ug(1, 1),
        KX: !1,
        xh: !0,
      };
    },
    s_6ne = function (a, b, c) {
      a.ka[b].Gb = c;
      a.ka[b].Cx = 0;
      a.ka[b].Lo = !0;
      s_8H(a.settings, 6) && (a.ka[b].wd = s_5ne());
    },
    s_8ne = function (a, b, c, d) {
      a.ka.push(s_aI(a, 0, 0));
      a.ka[a.ka.length - 1].Gb.x = b.x;
      a.ka[a.ka.length - 1].Gb.y = b.y;
      a.ka[a.ka.length - 1].Lo = !0;
      a.ka[a.ka.length - 1].Ija = c;
      a.ka[a.ka.length - 1].xh = d;
      var e = s_3ne(a);
      a.ka[a.ka.length - 1].type = e;
      s_8H(a.settings, 2)
        ? ((b = s_8H(a.settings, 7) ? s_cI(a.oa, b) : null),
          (b = a.oa.Aa(b, 2))
            ? (a.ka.push(s_aI(a, 0, 0)),
              (a.ka[a.ka.length - 1].Gb.x = b.x),
              (a.ka[a.ka.length - 1].Gb.y = b.y),
              (a.ka[a.ka.length - 1].Lo = !0),
              (a.ka[a.ka.length - 1].Ija = c),
              (a.ka[a.ka.length - 1].type = e),
              (a.ka[a.ka.length - 1].xh = d),
              s_8H(a.settings, 10) &&
                ((c = 0.5 > Math.random()),
                (a.ka[a.ka.length - 1].KX = c),
                (a.ka[a.ka.length - 2].KX = !c)))
            : a.ka.pop())
        : s_8H(a.settings, 10) &&
          s_7ne(a) &&
          0.5 > Math.random() &&
          ((c = a.ka[a.ka.length - 1].Gb.clone()),
          (a.ka[a.ka.length - 1].Gb = a.ka[a.ka.length - 2].Gb.clone()),
          (a.ka[a.ka.length - 2].Gb = c));
    },
    s_7ne = function (a) {
      var b = a.oa.Aa(null, 4);
      if (b) {
        var c = s_aI(a, 0, 0);
        c.Gb = b;
        c.KX = !0;
        c.Lo = !0;
        c.type = s_3ne(a);
        a.ka.push(c);
        return !0;
      }
      return !1;
    },
    s_3ne = function (a) {
      if (21 === a.settings.Da) {
        for (var b = new Set(), c = 0; 21 > c; c++) b.add(c);
        a = s_g(a.ka);
        for (c = a.next(); !c.done; c = a.next()) b.delete(c.value.type);
        return 0 < b.size
          ? Array.from(b)[Math.floor(Math.random() * b.size)]
          : 0;
      }
      if (s_8H(a.settings, 2) && (s_8H(a.settings, 8) || s_8H(a.settings, 9))) {
        b = new Set();
        var d = s_g(a.ka);
        for (c = d.next(); !c.done; c = d.next()) b.add(c.value.type);
        for (a = a.settings.Da; b.has(a); ) a = (a + 1) % 21;
        return a;
      }
      return a.settings.Da;
    },
    s_5ne = function () {
      var a = new s_Ug(
        0.5 > Math.random() ? -0.5 : 0.5,
        0.5 > Math.random() ? -0.5 : 0.5,
      );
      0.25 > Math.random() && (0.5 > Math.random() ? (a.x = 0) : (a.y = 0));
      return a;
    },
    s_9ne = function (a, b, c, d) {
      for (var e = s_g(a.ka), f = e.next(); !f.done; f = e.next())
        (f = f.value), f.Lo || s_4ne(a, f, b, c, d);
    },
    s_4ne = function (a, b, c, d, e) {
      var f = {};
      s_8H(a.settings, 4) ||
        (0 >= b.Gb.x
          ? (f.left = !0)
          : b.Gb.x >= a.oa.ka.width - 1 && (f.right = !0),
        0 >= b.Gb.y
          ? (f.top = !0)
          : b.Gb.y >= a.oa.ka.height - 1 && (f.bottom = !0));
      var g = 0 === b.Gb.y % 1;
      if (0 === b.Gb.x % 1 || g) {
        g = [];
        for (var k = 1; k < a.wa.ka.length; k++) {
          var h = a.wa.ka[k];
          (s_8H(a.settings, 11) && b.xh !== a.wa.wa[k]) ||
            ((s_8H(a.settings, 3) && 1 !== (h.x + h.y) % 2) ||
              g.push(a.wa.ka[k]),
            s_8H(a.settings, 7) &&
              ((s_8H(a.settings, 3) && 1 !== (h.x + h.y) % 2) ||
                g.push(s_bI(a.wa, k))));
        }
        c = s_g(c.values());
        for (k = c.next(); !k.done; k = c.next())
          (k = k.value),
            (s_8H(a.settings, 11) && b.xh !== k.xh) || k.qL || g.push(k.Gb);
        d = s_g(d);
        for (c = d.next(); !c.done; c = d.next())
          (c = c.value),
            (s_8H(a.settings, 11) && b.xh !== c.xh) ||
              (g.push(c.Gb), s_8H(a.settings, 7) && g.push(s_cI(a.oa, c.Gb)));
        e = s_g(e);
        for (d = e.next(); !d.done; d = e.next())
          (d = d.value),
            (s_8H(a.settings, 11) && b.xh !== d.xh) ||
              (g.push(d.Gb), s_8H(a.settings, 7) && g.push(s_cI(a.oa, d.Gb)));
        g = s_g(g);
        for (e = g.next(); !e.done; e = g.next())
          (e = e.value),
            s_dI(e, b, f),
            s_8H(a.settings, 4) &&
              (0 === e.x
                ? s_dI(new s_Ug(e.x + a.oa.ka.width, e.y), b, f)
                : e.x === a.oa.ka.width - 1 &&
                  s_dI(new s_Ug(e.x - a.oa.ka.width, e.y), b, f),
              0 === e.y
                ? s_dI(new s_Ug(e.x, e.y + a.oa.ka.height), b, f)
                : e.y === a.oa.ka.height - 1 &&
                  s_dI(new s_Ug(e.x, e.y - a.oa.ka.height), b, f),
              0 === e.x && 0 === e.y
                ? s_dI(
                    new s_Ug(e.x + a.oa.ka.width, e.y + a.oa.ka.height),
                    b,
                    f,
                  )
                : e.x === a.oa.ka.width - 1 &&
                  0 === e.y &&
                  s_dI(
                    new s_Ug(e.x - a.oa.ka.width, e.y + a.oa.ka.height),
                    b,
                    f,
                  ),
              0 === e.x && e.y === a.oa.ka.height - 1
                ? s_dI(
                    new s_Ug(e.x + a.oa.ka.width, e.y - a.oa.ka.height),
                    b,
                    f,
                  )
                : e.x === a.oa.ka.width - 1 &&
                  e.y === a.oa.ka.height - 1 &&
                  s_dI(
                    new s_Ug(e.x - a.oa.ka.width, e.y - a.oa.ka.height),
                    b,
                    f,
                  ));
      }
      if (1 < a.ka.length) {
        e = [];
        d = s_g(a.ka);
        for (g = d.next(); !g.done; g = d.next())
          (g = g.value),
            (s_8H(a.settings, 11) && b.xh !== g.xh) ||
              (e.push(g),
              s_$H(a.settings) &&
                e.push({
                  Gb: s_cI(a.oa, g.Gb),
                  Cx: 0,
                  type: -1,
                  Lo: !1,
                  wd: new s_Ug(-g.wd.x, -g.wd.y),
                  ox: g.ox.clone(),
                }));
        if (s_8H(a.settings, 4)) {
          d = [];
          e = s_g(e);
          for (g = e.next(); !g.done; g = e.next())
            (g = g.value),
              d.push(g),
              d.push({
                Gb: new s_Ug(g.Gb.x - a.oa.ka.width, g.Gb.y - a.oa.ka.height),
                Cx: 0,
                type: -1,
                Lo: !1,
                wd: g.wd.clone(),
                ox: g.ox.clone(),
              }),
              d.push({
                Gb: new s_Ug(g.Gb.x, g.Gb.y - a.oa.ka.height),
                Cx: 0,
                type: -1,
                Lo: !1,
                wd: g.wd.clone(),
                ox: g.ox.clone(),
              }),
              d.push({
                Gb: new s_Ug(g.Gb.x + a.oa.ka.width, g.Gb.y - a.oa.ka.height),
                Cx: 0,
                type: -1,
                Lo: !1,
                wd: g.wd.clone(),
                ox: g.ox.clone(),
              }),
              d.push({
                Gb: new s_Ug(g.Gb.x - a.oa.ka.width, g.Gb.y),
                Cx: 0,
                type: -1,
                Lo: !1,
                wd: g.wd.clone(),
                ox: g.ox.clone(),
              }),
              d.push({
                Gb: new s_Ug(g.Gb.x + a.oa.ka.width, g.Gb.y),
                Cx: 0,
                type: -1,
                Lo: !1,
                wd: g.wd.clone(),
                ox: g.ox.clone(),
              }),
              d.push({
                Gb: new s_Ug(g.Gb.x - a.oa.ka.width, g.Gb.y + a.oa.ka.height),
                Cx: 0,
                type: -1,
                Lo: !1,
                wd: g.wd.clone(),
                ox: g.ox.clone(),
              }),
              d.push({
                Gb: new s_Ug(g.Gb.x, g.Gb.y + a.oa.ka.height),
                Cx: 0,
                type: -1,
                Lo: !1,
                wd: g.wd.clone(),
                ox: g.ox.clone(),
              }),
              d.push({
                Gb: new s_Ug(g.Gb.x + a.oa.ka.width, g.Gb.y + a.oa.ka.height),
                Cx: 0,
                type: -1,
                Lo: !1,
                wd: g.wd.clone(),
                ox: g.ox.clone(),
              });
          e = d;
        }
        a = s_g(e);
        for (g = a.next(); !g.done; g = a.next())
          (g = g.value),
            g.Gb.equals(b.Gb) ||
              ((e = 1 > Math.abs(g.Gb.x - b.Gb.x)),
              (k = 1 >= Math.abs(g.Gb.x - b.Gb.x)),
              (c = 1 >= Math.abs(g.Gb.y - b.Gb.y)),
              (d = k && g.Gb.x < b.Gb.x),
              (k = k && g.Gb.x > b.Gb.x),
              (h = c && g.Gb.y < b.Gb.y),
              (c = c && g.Gb.y > b.Gb.y),
              1 > Math.abs(g.Gb.y - b.Gb.y) &&
                (d ? (f.left = !0) : k && (f.right = !0)),
              e && (h ? (f.top = !0) : c && (f.bottom = !0)),
              d && h
                ? (f.topLeft = !0)
                : k && h
                  ? (f.topRight = !0)
                  : k && c
                    ? (f.bottomRight = !0)
                    : d && c && (f.bottomLeft = !0));
      }
      b.ox.x = 1;
      b.ox.y = 1;
      for (a = 0; 2 > a; a++) {
        g = 0 === a;
        e = 0 > b.wd.x;
        d = 0 < b.wd.x;
        c = 0 > b.wd.y;
        k = 0 < b.wd.y;
        if ((e && f.left) || (d && f.right)) g ? (b.wd.x *= -1) : (b.ox.x = 0);
        if ((c && f.top) || (k && f.bottom)) g ? (b.wd.y *= -1) : (b.ox.y = 0);
        if (
          (e && c && f.topLeft && !f.top && !f.left) ||
          (d && c && f.topRight && !f.top && !f.right) ||
          (d && k && f.bottomRight && !f.bottom && !f.right) ||
          (e && k && f.bottomLeft && !f.bottom && !f.left)
        )
          g ? ((b.wd.x *= -1), (b.wd.y *= -1)) : ((b.ox.x = 0), (b.ox.y = 0));
      }
    },
    s_dI = function (a, b, c) {
      var d = 0 === b.Gb.x % 1,
        e = 0 === b.Gb.y % 1,
        f = a.x === Math.floor(b.Gb.x) || a.x === Math.ceil(b.Gb.x),
        g = 1 >= Math.abs(a.x - b.Gb.x),
        k = 1 >= Math.abs(a.y - b.Gb.y),
        h = g && a.x < b.Gb.x;
      g = g && a.x > b.Gb.x;
      var l = k && a.y < b.Gb.y;
      k = k && a.y > b.Gb.y;
      if (a.y === Math.floor(b.Gb.y) || a.y === Math.ceil(b.Gb.y))
        h ? (c.left = !0) : g && (c.right = !0);
      f && (l ? (c.top = !0) : k && (c.bottom = !0));
      d &&
        e &&
        (h && l
          ? (c.topLeft = !0)
          : g && l
            ? (c.topRight = !0)
            : g && k
              ? (c.bottomRight = !0)
              : h && k && (c.bottomLeft = !0));
    },
    s_$ne = function (a) {
      var b = 0;
      if (s_8H(a.settings, 10)) {
        a = s_g(a.ka);
        for (var c = a.next(); !c.done; c = a.next()) c.value.KX || b++;
      } else b = a.ka.length;
      return b;
    };
  s_1ne.prototype.shuffle = function (a) {
    for (var b = this.ka.length - 1; 0 < b; b--) {
      var c = Math.floor(Math.random() * (b + 1));
      if (a) {
        var d = this.ka[b].xh;
        this.ka[b].xh = this.ka[c].xh;
        this.ka[c].xh = d;
      }
      d = this.ka[b];
      this.ka[b] = this.ka[c];
      this.ka[c] = d;
    }
  };
  s_1ne.prototype.clear = function () {
    this.ka = [];
  };
  s_1ne.prototype.refresh = function () {
    for (var a = s_g(this.ka), b = a.next(); !b.done; b = a.next())
      b.value.Lo = !1;
  };
  s_1ne.prototype.sA = function () {
    for (var a = s_g(this.ka), b = a.next(); !b.done; b = a.next())
      (b = b.value), (b.xh = !b.xh);
  };
  var s_aoe = function (a, b, c, d) {
      this.ka = a;
      this.settings = b;
      this.context = c;
      this.oa = d;
    },
    s_boe = function (a) {
      a.oa.fillStyle = s_eI(a.settings, a.settings.ka, 0);
      a.oa.fillRect(0, 0, a.oa.canvas.width, a.oa.canvas.height);
      for (var b = 0; b < a.ka.ka.ka.width; b++)
        for (var c = 0; c < a.ka.ka.ka.height; c++)
          0 !== (b + c) % 2 &&
            ((a.oa.fillStyle = s_eI(a.settings, a.settings.ka, 1)),
            a.oa.fillRect(
              b * a.ka.ka.oa,
              c * a.ka.ka.oa,
              a.ka.ka.oa,
              a.ka.ka.oa,
            ));
    };
  var s_coe = function (a, b) {
    this.settings = a;
    this.Aa = b;
    this.ka = new s_Yg(0, 0);
    this.oa = 0;
    this.Ba = new s_Ug(0, 0);
    this.wa = [];
    this.Da = 0;
  };
  s_coe.prototype.reset = function () {
    this.Ba = new s_Ug(0, 0);
    s_8H(this.settings, 3) &&
      s_8H(this.settings, 4) &&
      (1 === this.ka.width % 2 && ((this.ka.width += 1), (this.Ba.x += 1)),
      1 === this.ka.height % 2 && ((this.ka.height += 1), (this.Ba.y += 1)));
    this.wa = [];
    for (var a = 0; a < this.ka.height; a++) {
      this.wa.push([]);
      for (var b = 0; b < this.ka.width; b++) this.wa[a].push(0);
    }
    this.Da = 0;
  };
  var s_fI = function (a, b) {
    a = a.wa[b.y][b.x];
    return 0 !== a && 3 !== a;
  };
  s_coe.prototype.y8 = function (a) {
    return 0 <= a.x && a.x < this.ka.width && 0 <= a.y && a.y < this.ka.height;
  };
  var s_doe = function (a, b) {
      for (b = b.clone(); 0 > b.x; ) b.x += a.ka.width;
      for (; b.x >= a.ka.width; ) b.x -= a.ka.width;
      for (; 0 > b.y; ) b.y += a.ka.height;
      for (; b.y >= a.ka.height; ) b.y -= a.ka.height;
      return b;
    },
    s_eoe = function (a, b, c) {
      return s_8H(a.settings, 4)
        ? Math.min(
            Math.abs(b.x - c.x) + Math.abs(b.y - c.y),
            Math.abs(b.x + a.ka.width - c.x) + Math.abs(b.y - c.y),
            Math.abs(b.x - a.ka.width - c.x) + Math.abs(b.y - c.y),
            Math.abs(b.x - c.x) + Math.abs(b.y + a.ka.height - c.y),
            Math.abs(b.x - c.x) + Math.abs(b.y - a.ka.height - c.y),
            Math.abs(b.x + a.ka.width - c.x) +
              Math.abs(b.y + a.ka.height - c.y),
            Math.abs(b.x + a.ka.width - c.x) +
              Math.abs(b.y - a.ka.height - c.y),
            Math.abs(b.x - a.ka.width - c.x) +
              Math.abs(b.y + a.ka.height - c.y),
            Math.abs(b.x - a.ka.width - c.x) +
              Math.abs(b.y - a.ka.height - c.y),
          )
        : Math.abs(b.x - c.x) + Math.abs(b.y - c.y);
    },
    s_foe = function (a, b, c) {
      return s_8H(a.settings, 4)
        ? Math.min(
            s_Vg(b, c),
            s_Vg(b, new s_Ug(c.x - a.ka.width, c.y - a.ka.height)),
            s_Vg(b, new s_Ug(c.x, c.y - a.ka.height)),
            s_Vg(b, new s_Ug(c.x + a.ka.width, c.y - a.ka.height)),
            s_Vg(b, new s_Ug(c.x - a.ka.width, c.y)),
            s_Vg(b, new s_Ug(c.x + a.ka.width, c.y)),
            s_Vg(b, new s_Ug(c.x - a.ka.width, c.y + a.ka.height)),
            s_Vg(b, new s_Ug(c.x, c.y + a.ka.height)),
            s_Vg(b, new s_Ug(c.x + a.ka.width, c.y + a.ka.height)),
          )
        : s_Vg(b, c);
    },
    s_goe = function (a) {
      return 1 === a.ka.width % 2 && 1 === a.ka.height % 2;
    },
    s_cI = function (a, b) {
      return new s_Ug(a.ka.width - 1 - b.x, a.ka.height - 1 - b.y);
    },
    s_gI = function (a, b) {
      b.x > a.ka.width - 1
        ? (b.x -= a.ka.width)
        : 0 > b.x && (b.x += a.ka.width);
      b.y > a.ka.height - 1
        ? (b.y -= a.ka.height)
        : 0 > b.y && (b.y += a.ka.height);
      return b;
    },
    s_hoe = function (a) {
      a.Da = (a.Da + 1) % 2;
    };
  var s_ioe = function (a, b, c, d, e) {
      this.ka = a;
      this.settings = b;
      this.Aa = c;
      this.wa = d;
      this.Ba = e;
      this.oa = new s_5H(assetsPath + "box.png", 8, this.wa);
    },
    s_joe = function (a, b, c, d) {
      b =
        s_goe(a.ka.ka) &&
        b.Gb.x === Math.floor(a.ka.ka.ka.width / 2) &&
        b.Gb.y === Math.floor(a.ka.ka.ka.height / 2);
      s_8H(a.settings, 7) &&
        !b &&
        ((b = new s_Ug(
          a.ka.ka.ka.width * a.ka.ka.oa - d.x,
          a.ka.ka.ka.height * a.ka.ka.oa - d.y,
        )),
        a.wa.drawImage(
          a.oa.ka.canvas,
          128,
          0,
          128,
          128,
          b.x - c / 2,
          b.y - c / 2,
          c,
          c,
        ));
      a.wa.drawImage(
        a.oa.ka.canvas,
        0,
        0,
        128,
        128,
        d.x - c / 2,
        d.y - c / 2,
        c,
        c,
      );
    },
    s_koe = function (a, b, c, d) {
      a.Aa.fillStyle =
        0 === (b.x + b.y) % 2
          ? s_eI(a.settings, a.settings.ka, 0)
          : s_eI(a.settings, a.settings.ka, 1);
      var e = -1 === b.x || b.x === a.ka.ka.ka.width ? d : 1;
      d = -1 === b.y || b.y === a.ka.ka.ka.height ? d : 1;
      a.Aa.fillRect(
        (-1 === b.x ? a.ka.ka.oa * (1 - e) : 0) + c.x + b.x * a.ka.ka.oa,
        (-1 === b.y ? a.ka.ka.oa * (1 - d) : 0) + c.y + b.y * a.ka.ka.oa,
        e * a.ka.ka.oa,
        d * a.ka.ka.oa,
      );
      if (s_8H(a.settings, 7)) {
        var f = s_cI(a.ka.ka, b);
        a.Aa.fillRect(
          (-1 === b.x ? 0 : a.ka.ka.oa * (1 - e)) + c.x + f.x * a.ka.ka.oa,
          (-1 === b.y ? 0 : a.ka.ka.oa * (1 - d)) + c.y + f.y * a.ka.ka.oa,
          e * a.ka.ka.oa,
          d * a.ka.ka.oa,
        );
      }
    },
    s_moe = function (a) {
      for (var b = s_g(a.ka.Aa.wa), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        c = d.clone();
        c.x = c.x * a.ka.ka.oa + a.ka.ka.oa / 2;
        c.y = c.y * a.ka.ka.oa + a.ka.ka.oa / 2;
        d =
          2 +
          ((d.x + d.y) % 2) +
          (2 === a.settings.Aa || s_0ne(a.settings) ? 2 : 0);
        s_loe(a, d, c, 0, 0);
        if (s_8H(a.settings, 4))
          for (var e = s_g(a.ka.Lb), f = e.next(); !f.done; f = e.next())
            (f = f.value), s_loe(a, d, c, f.x, f.y);
      }
    },
    s_loe = function (a, b, c, d, e) {
      a.Ba.drawImage(
        a.oa.ka.canvas,
        128 * b,
        0,
        128,
        128,
        c.x - a.ka.ka.oa / 2 + d,
        c.y - a.ka.ka.oa / 2 + e,
        a.ka.ka.oa,
        a.ka.ka.oa,
      );
    };
  var s_hI = {
      wz: new s_bH(
        assetsPath,
        "game_audio.5",
        {
          BOX: 0,
          DOWN: 59,
          EAT: 78,
          FLIP: 101,
          KEY: 142,
          LEFT: 173,
          PORTAL: 192,
          REVERSE: 253,
          RIGHT: 314,
          UP: 333,
        },
        418,
      ),
    },
    s_iI = {
      X6c: new s_aH(s_hI.wz, "BOX", 757.551),
      DOWN: new s_aH(s_hI.wz, "DOWN", 235.102),
      w8c: new s_aH(s_hI.wz, "EAT", 287.347),
      P8c: new s_aH(s_hI.wz, "FLIP", 522.449),
      Qhd: new s_aH(s_hI.wz, "KEY", 391.837),
      LEFT: new s_aH(s_hI.wz, "LEFT", 235.102),
      Mjd: new s_aH(s_hI.wz, "PORTAL", 783.673),
      okd: new s_aH(s_hI.wz, "REVERSE", 783.673),
      RIGHT: new s_aH(s_hI.wz, "RIGHT", 235.102),
      UP: new s_aH(s_hI.wz, "UP", 235.102),
    },
    s_noe = function () {
      s_$G.call(this, s_hI, s_iI);
    };
  s_r(s_noe, s_$G);
  var s_ooe = function (a, b, c, d, e) {
    this.settings = a;
    this.ka = b;
    this.Aa = c;
    this.Da = d;
    this.Ba = e;
    this.oa = new Set();
    this.wa = new Set();
  };
  s_ooe.prototype.reset = function () {
    this.oa = new Set();
    this.wa = new Set();
    if (s_8H(this.settings, 9) && !s_8H(this.settings, 8)) {
      for (var a = 0; a + 1 < this.Da.ka.length; a += 2) {
        var b = this.Da.ka[a].Gb.clone(),
          c = this.Da.ka[a + 1].Gb.clone(),
          d = s_8H(this.settings, 11) ? a < this.Da.ka.length / 2 : !0;
        this.oa.add({
          Gb: b,
          prev: null,
          Lo: !1,
          xh: d,
        });
        s_poe(this, c, 0);
      }
      this.Da.clear();
    }
  };
  var s_soe = function (a, b) {
      var c = b ? a.Aa.Qa : a.Aa.Oa;
      c.z4 = !1;
      var d = b ? s_bI(a.Aa, 0) : a.Aa.ka[0];
      b = b ? s_One(a.Aa.Da) : a.Aa.Da;
      for (var e = s_g(a.oa), f = e.next(); !f.done; f = e.next())
        if (((f = f.value), f.xh && d.equals(f.Gb))) {
          f.prev = f.Gb.clone();
          switch (b) {
            case "RIGHT":
              f.Gb.x += 1;
              break;
            case "LEFT":
              --f.Gb.x;
              break;
            case "DOWN":
              f.Gb.y += 1;
              break;
            case "UP":
              --f.Gb.y;
          }
          if (
            s_8H(a.settings, 7) &&
            s_goe(a.ka) &&
            f.Gb.x === Math.floor(a.ka.ka.width / 2) &&
            f.Gb.y === Math.floor(a.ka.ka.height / 2)
          ) {
            var g = s_cI(a.ka, f.prev);
            a.Ba.Pq.push({
              Gb: new s_Ug(g.x * a.ka.oa, g.y * a.ka.oa),
              wd: new s_Ug(12 * (f.prev.x - f.Gb.x), 12 * (f.prev.y - f.Gb.y)),
              angle: 0,
              tE: 20 * Math.random() - 10,
              size: 1,
              Xz: 1,
              type: 3,
            });
          }
          g = !1;
          s_8H(a.settings, 14) &&
            0 <= f.Gb.y &&
            f.Gb.y < a.ka.wa.length &&
            0 <= f.Gb.x &&
            f.Gb.x < a.ka.wa[f.Gb.y].length &&
            s_fI(a.ka, f.Gb) &&
            (g = !0);
          s_8H(a.settings, 6) &&
            0 <= f.Gb.x &&
            f.Gb.x < a.ka.ka.width &&
            0 <= f.Gb.y &&
            f.Gb.y < a.ka.ka.height &&
            3 === a.ka.wa[f.Gb.y][f.Gb.x] &&
            (g = !0);
          if (
            0 > f.Gb.x ||
            f.Gb.x >= a.ka.ka.width ||
            0 > f.Gb.y ||
            f.Gb.y >= a.ka.ka.height ||
            g
          )
            if (s_8H(a.settings, 4) && !g)
              0 > f.Gb.x
                ? ((f.Gb.x += a.ka.ka.width),
                  (f.prev = f.Gb.clone()),
                  (f.prev.x += 1))
                : f.Gb.x >= a.ka.ka.width &&
                  ((f.Gb.x -= a.ka.ka.width),
                  (f.prev = f.Gb.clone()),
                  --f.prev.x),
                0 > f.Gb.y
                  ? ((f.Gb.y += a.ka.ka.height),
                    (f.prev = f.Gb.clone()),
                    (f.prev.y += 1))
                  : f.Gb.y >= a.ka.ka.height &&
                    ((f.Gb.y -= a.ka.ka.height),
                    (f.prev = f.Gb.clone()),
                    --f.prev.y);
            else {
              g = !0;
              var k = s_qoe(a);
              if (k) (f.Gb = k), (f.Lo = !0);
              else {
                a.oa.delete(f);
                break;
              }
            }
          g || ((c.z4 = !0), (c.t6 = 0), (c.Uea = 0), (c.KO = !1), (c.iG = 0));
          g = s_g(a.wa);
          for (k = g.next(); !k.done; k = g.next())
            if (((k = k.value), f.Gb.equals(k))) {
              s_roe(a, f);
              a.wa.delete(k);
              if (s_8H(a.settings, 7))
                for (
                  f = s_cI(a.ka, k), g = s_g(a.wa), k = g.next();
                  !k.done;
                  k = g.next()
                )
                  if (((k = k.value), k.equals(f))) {
                    a.wa.delete(k);
                    break;
                  }
              c.z4 = !1;
              c.KO = !0;
              c.iG = 10;
              break;
            }
        }
    },
    s_toe = function (a, b, c, d) {
      b = c ? s_cI(a.ka, b) : b;
      c = c ? s_One(a.Aa.direction) : a.Aa.direction;
      for (var e = s_g(a.oa), f = e.next(); !f.done; f = e.next())
        if (((f = f.value), f.xh && f.Gb.equals(b))) {
          var g = f.Gb.clone();
          switch (c) {
            case "RIGHT":
              g.x += 1;
              break;
            case "LEFT":
              --g.x;
              break;
            case "DOWN":
              g.y += 1;
              break;
            case "UP":
              --g.y;
          }
          s_8H(a.settings, 4) &&
            (0 > g.x
              ? (g.x += a.ka.ka.width)
              : g.x >= a.ka.ka.width && (g.x -= a.ka.ka.width),
            0 > g.y
              ? (g.y += a.ka.ka.height)
              : g.y >= a.ka.ka.height && (g.y -= a.ka.ka.height));
          if (
            0 <= g.y &&
            g.y < a.ka.wa.length &&
            0 <= g.x &&
            g.x < a.ka.wa[g.y].length &&
            s_fI(a.ka, g)
          ) {
            var k =
              s_8H(a.settings, 7) &&
              s_goe(a.ka) &&
              f.Gb.x === Math.floor(a.ka.ka.width / 2) &&
              f.Gb.y === Math.floor(a.ka.ka.height / 2);
            if (5 !== a.ka.wa[g.y][g.x] && 7 !== a.ka.wa[g.y][g.x] && !k)
              switch (((f.prev = f.Gb.clone()), (g = 1 / 3), a.Aa.direction)) {
                case "RIGHT":
                  f.Gb.x += g;
                  break;
                case "LEFT":
                  f.Gb.x -= g;
                  break;
                case "DOWN":
                  f.Gb.y += g;
                  break;
                case "UP":
                  f.Gb.y -= g;
              }
            d();
          }
        }
    },
    s_roe = function (a, b) {
      s_iI.X6c.play();
      s_8ne(a.Da, b.Gb, b.Ija, b.xh);
      var c = b.prev ? b.prev : b.Gb,
        d = new s_Ug(
          ((b.Gb.x + c.x) * a.ka.oa) / 2,
          ((b.Gb.y + c.y) * a.ka.oa) / 2,
        );
      c = new s_Ug(12 * (b.Gb.x - c.x), 12 * (b.Gb.y - c.y));
      var e = a.ka.oa / 2;
      a.Ba.Pq.push({
        Gb: d.clone(),
        wd: c.clone(),
        angle: 0,
        tE: 20 * Math.random() - 10,
        size: 1,
        Xz: 6,
        type: 3,
      });
      a.Ba.Pq.push({
        Gb: new s_Ug(d.x, d.y - e),
        wd: c.clone(),
        angle: 0,
        tE: 20 * Math.random() - 10,
        size: 1,
        Xz: 7,
        type: 3,
      });
      a.Ba.Pq.push({
        Gb: new s_Ug(d.x, d.y + e),
        wd: c.clone(),
        angle: 0,
        tE: 20 * Math.random() - 10,
        size: 1,
        Xz: 7,
        type: 3,
      });
      a.Ba.Pq.push({
        Gb: new s_Ug(d.x - e, d.y),
        wd: c.clone(),
        angle: 90,
        tE: 20 * Math.random() - 10,
        size: 1,
        Xz: 7,
        type: 3,
      });
      a.Ba.Pq.push({
        Gb: new s_Ug(d.x + e, d.y),
        wd: c.clone(),
        angle: 90,
        tE: 20 * Math.random() - 10,
        size: 1,
        Xz: 7,
        type: 3,
      });
      s_8H(a.settings, 7) &&
        ((d = s_cI(a.ka, null !== b.prev ? b.prev : b.Gb)),
        a.Ba.Pq.push({
          Gb: new s_Ug(d.x * a.ka.oa, d.y * a.ka.oa),
          wd: new s_Ug(-c.x, -c.y),
          angle: 0,
          tE: 20 * Math.random() - 10,
          size: 1,
          Xz: 1,
          type: 3,
        }));
      a.oa.delete(b);
    },
    s_qoe = function (a) {
      var b = a.ka.Aa(null, 7);
      if (!b) return null;
      var c = b.clone();
      0 === c.x && 0 === a.ka.wa[c.y][c.x + 1] && (c.x += 1);
      c.x === a.ka.ka.width - 1 && 0 === a.ka.wa[c.y][c.x - 1] && --c.x;
      0 === c.y && 0 === a.ka.wa[c.y + 1][c.x] && (c.y += 1);
      c.y === a.ka.ka.height - 1 && 0 === a.ka.wa[c.y - 1][c.x] && --c.y;
      for (var d = s_g(a.wa), e = d.next(); !e.done; e = d.next())
        if (c.equals(e.value)) return b;
      return 3 >= s_eoe(a.ka, a.Aa.ka[0], c) ? b : c;
    },
    s_uoe = function (a, b) {
      var c = s_qoe(a),
        d = a.ka.Aa(c, 8);
      c &&
        d &&
        (a.oa.add({
          Gb: c,
          prev: null,
          Lo: !0,
          xh: !0,
        }),
        s_poe(a, d, b));
    },
    s_poe = function (a, b, c) {
      c = (a.oa.size + c) * (s_8H(a.settings, 7) ? 2 : 1);
      a.wa.size >= c ||
        (a.wa.add(b), s_8H(a.settings, 7) && a.wa.add(s_cI(a.ka, b)));
    };
  s_ooe.prototype.refresh = function () {
    for (var a = s_g(this.oa), b = a.next(); !b.done; b = a.next())
      b.value.Lo = !1;
  };
  s_ooe.prototype.sA = function () {
    for (var a = s_g(this.oa), b = a.next(); !b.done; b = a.next())
      (b = b.value), (b.xh = !b.xh);
  };
  var s_voe = {
      Vec: new s_bH(
        assetsPath,
        "end_audio",
        {
          DEATH: 0,
          WIN: 49,
        },
        418,
      ),
    },
    s_woe = {
      vzb: new s_aH(s_voe.Vec, "DEATH", 626.939),
      WIN: new s_aH(s_voe.Vec, "WIN", 914.286),
    },
    s_xoe = function () {
      s_$G.call(this, s_voe, s_woe);
    };
  s_r(s_xoe, s_$G);
  var s_yoe = function (a, b, c) {
    this.ka = a;
    this.settings = b;
    this.oa = c;
    this.wa = new s_5H(assetsPath + "key_types.png", 5, this.oa);
  };
  s_yoe.prototype.render = function (a) {
    for (var b = s_g(this.ka.Ba.keys), c = b.next(); !c.done; c = b.next()) {
      var d = a;
      c = c.value;
      var e = c.Gb.clone();
      e.x = e.x * this.ka.ka.oa + this.ka.ka.oa / 2;
      e.y = e.y * this.ka.ka.oa + this.ka.ka.oa / 2;
      var f = 1.2 * this.ka.ka.oa * (c.Lo && !this.ka.ik ? d : 1);
      if (!c.Lo && ("NONE" !== this.ka.oa.direction || s_zoe(this.ka.oa))) {
        var g = (c.Cx + (this.ka.ik ? 0 : d)) / 6,
          k = s_Pne(g);
        0 === g && (k = 0);
        f *= 1 + k * this.ka.uc;
        f = Math.round(f);
      }
      s_8H(this.settings, 11) &&
        (this.oa.globalAlpha = s_9H(this.ka, d, c.xh, 0.3));
      this.oa.drawImage(
        this.wa.oa.canvas,
        128 * c.type,
        0,
        128,
        128,
        e.x - f / 2,
        e.y - f / 2,
        f,
        f,
      );
      s_8H(this.settings, 7) &&
        ((d = new s_Ug(
          this.ka.ka.ka.width * this.ka.ka.oa - e.x,
          this.ka.ka.ka.height * this.ka.ka.oa - e.y,
        )),
        this.oa.save(),
        this.oa.translate(d.x, d.y),
        this.oa.rotate(Math.PI),
        this.oa.drawImage(
          this.wa.oa.canvas,
          128 * c.type,
          0,
          128,
          128,
          -(f / 2),
          -(f / 2),
          f,
          f,
        ),
        this.oa.restore());
      this.oa.globalAlpha = 1;
    }
  };
  var s_Aoe = function (a, b, c, d) {
      this.ka = a;
      this.settings = b;
      this.wa = c;
      this.oa = d;
      this.Aa = new s_5H(assetsPath + "mine.png", 10, this.wa);
    },
    s_Eoe = function (a, b) {
      for (var c = s_g(a.ka.Ga.wa), d = c.next(); !d.done; d = c.next()) {
        var e = a;
        d = d.value;
        e.oa.globalAlpha = 0.75 * Math.max(0, (d.ticks - b) / 4);
        s_Boe(e, d, d.Gb, 0, 0);
        if (s_8H(e.settings, 4))
          for (var f = s_g(e.ka.Lb), g = f.next(); !g.done; g = f.next())
            (g = g.value), s_Boe(e, d, d.Gb, g.x, g.y);
        e.oa.globalAlpha = 1;
      }
      c = s_g(a.ka.Ga.oa);
      for (d = c.next(); !d.done; d = c.next()) {
        e = a;
        g = b;
        var k = d.value;
        d = new s_Ug(k.Gb.x * e.ka.ka.oa, k.Gb.y * e.ka.ka.oa);
        var h = 3 * e.ka.ka.oa;
        f = 1;
        s_8H(e.settings, 11) && (f = s_9H(e.ka, g, k.xh, 0.3));
        e.oa.globalAlpha = Math.min(1, (k.Cx + g) / 2) * f;
        e.oa.strokeStyle = "#f23606";
        e.oa.lineWidth = e.ka.ka.oa / 12;
        e.oa.lineDashOffset = e.ka.ka.oa / 8;
        e.oa.setLineDash([e.ka.ka.oa / 4, e.ka.ka.oa / 4]);
        s_Coe(e, d, 0, 0, h);
        if (s_8H(e.settings, 4))
          for (var l = s_g(e.ka.Lb), m = l.next(); !m.done; m = l.next())
            (m = m.value), s_Coe(e, d, m.x, m.y, h);
        e.oa.globalAlpha = 1;
        if (0 < k.koa && !e.ka.ik) {
          m = (3 - (k.koa - g)) / 3;
          g = h * m;
          e.oa.globalAlpha = 0.15 * s_Pne(m) * f;
          e.oa.fillStyle = "#f23606";
          s_Doe(e, d, 0, 0, g);
          if (s_8H(e.settings, 4))
            for (f = s_g(e.ka.Lb), m = f.next(); !m.done; m = f.next())
              (h = m.value), s_Doe(e, d, h.x, h.y, g);
          e.oa.globalAlpha = 1;
        }
      }
    },
    s_Coe = function (a, b, c, d, e) {
      a.oa.beginPath();
      a.oa.rect(
        b.x + a.ka.ka.oa / 2 - e / 2 + c,
        b.y + a.ka.ka.oa / 2 - e / 2 + d,
        e,
        e,
      );
      a.oa.stroke();
    },
    s_Doe = function (a, b, c, d, e) {
      a.oa.fillRect(
        b.x + a.ka.ka.oa / 2 - e / 2 + c,
        b.y + a.ka.ka.oa / 2 - e / 2 + d,
        e,
        e,
      );
    },
    s_Boe = function (a, b, c, d, e) {
      a.oa.fillStyle = b.jie;
      a.oa.fillRect(c.x + d, c.y + e, a.ka.ka.oa, a.ka.ka.oa);
      a.oa.fillStyle = b.hAd;
      a.oa.beginPath();
      a.oa.arc(
        c.x + a.ka.ka.oa / 2 + d,
        c.y + a.ka.ka.oa / 2 + e,
        a.ka.ka.oa / 4,
        0,
        2 * Math.PI,
      );
      a.oa.fill();
    };
  var s_Foe = function (a, b, c) {
    this.ka = a;
    this.settings = b;
    this.oa = c;
    this.wa = new s_5H(assetsPath + "key_types_dark.png", 5, this.oa);
  };
  s_Foe.prototype.render = function (a) {
    for (
      var b = s_g(this.ka.Da.wa.values()), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = a;
      c = c.value;
      if (!c.qL && !c.aC) {
        var e = new s_Ug(
            c.Gb.x * this.ka.ka.oa + this.ka.ka.oa / 2,
            c.Gb.y * this.ka.ka.oa + this.ka.ka.oa / 2,
          ),
          f = this.ka.ka.oa * (c.Lo ? d : 1);
        s_8H(this.settings, 11) &&
          (this.oa.globalAlpha = s_9H(
            this.ka,
            d,
            c.xh,
            0 === (c.Gb.x + c.Gb.y) % 2 ? 0.365 : 0.265,
          ));
        this.oa.fillStyle = s_eI(this.settings, this.settings.ka, 3);
        this.oa.fillRect(e.x - f / 2, e.y - f / 2, f, f);
        void 0 !== c.Ija &&
          0 <= c.Ija &&
          (s_8H(this.settings, 11) &&
            (this.oa.globalAlpha = s_9H(this.ka, d, c.xh, 0.2)),
          this.oa.drawImage(
            this.wa.ka.canvas,
            128 * c.Ija,
            0,
            128,
            128,
            e.x - f / 2,
            e.y - f / 2,
            f,
            f,
          ));
        this.oa.globalAlpha = 1;
      }
    }
  };
  var s_Goe = function (a, b, c, d, e, f, g, k) {
    this.ka = a;
    this.settings = b;
    this.oa = c;
    this.wa = d;
    this.Da = e;
    this.Aa = f;
    this.Ba = g;
    this.Ga = k;
  };
  s_Goe.prototype.render = function () {
    for (var a = s_g(this.ka.Oa.Pq), b = a.next(); !b.done; b = a.next()) {
      var c = b.value,
        d = Math.round(c.Gb.x + this.ka.ka.oa / 2),
        e = Math.round(c.Gb.y + this.ka.ka.oa / 2),
        f = (c.angle * Math.PI) / 180;
      b = 1 === c.type ? c.size : Math.min(1, c.size);
      4 === c.type && c.aC
        ? s_Hoe(this.Ga, b, new s_Ug(d, e), f, c.aC)
        : (this.oa.save(),
          this.oa.translate(d, e),
          this.oa.rotate(f),
          0 === c.type &&
            ((this.oa.fillStyle = s_eI(this.settings, this.settings.ka, 3)),
            this.oa.fillRect(
              -(this.ka.ka.oa / 2) * b,
              -(this.ka.ka.oa / 2) * b,
              this.ka.ka.oa * b,
              this.ka.ka.oa * b,
            )),
          1 === c.type
            ? this.oa.drawImage(
                this.wa.wa[c.Xz].ka.canvas,
                0,
                0,
                128,
                128,
                -(this.ka.ka.oa / 2) * b,
                -(this.ka.ka.oa / 2) * b,
                this.ka.ka.oa * b,
                this.ka.ka.oa * b,
              )
            : 2 === c.type
              ? ((c = this.Ba.Aa),
                this.oa.drawImage(
                  c.oa.canvas,
                  0,
                  (c.wa - 1) * c.qd(),
                  c.Bd(),
                  c.qd(),
                  -(this.ka.ka.oa / 2) * b,
                  -(this.ka.ka.oa / 2) * b,
                  this.ka.ka.oa * b,
                  this.ka.ka.oa * b,
                ))
              : void 0 !== c.Xz &&
                0 <= c.Xz &&
                this.oa.drawImage(
                  0 === c.type ? this.Da.wa.ka.canvas : this.Aa.oa.ka.canvas,
                  128 * c.Xz,
                  0,
                  128,
                  128,
                  -(this.ka.ka.oa / 2) * b,
                  -(this.ka.ka.oa / 2) * b,
                  this.ka.ka.oa * b,
                  this.ka.ka.oa * b,
                ),
          this.oa.restore());
    }
    a = s_g(this.ka.Oa.oa);
    for (b = a.next(); !b.done; b = a.next())
      (b = b.value),
        (c = Math.round(b.Gb.x + this.ka.ka.oa / 6)),
        (d = Math.round(b.Gb.y + this.ka.ka.oa / 9)),
        (e = 0.025 * b.wd.x),
        this.oa.save(),
        this.oa.translate(c, d),
        this.oa.rotate(e),
        (c = Math.min(1, b.size)),
        (this.oa.fillStyle = b.color),
        this.oa.fillRect(
          -(this.ka.ka.oa / 6) * c,
          -(this.ka.ka.oa / 9) * c,
          (this.ka.ka.oa / 3) * c,
          (this.ka.ka.oa / 4.5) * c,
        ),
        this.oa.restore();
  };
  var s_Ioe = function (a, b, c, d) {
    this.ka = a;
    this.settings = b;
    this.oa = c;
    this.wa = d;
  };
  s_Ioe.prototype.render = function (a) {
    for (var b = s_g(this.ka.Ma.oa), c = b.next(); !c.done; c = b.next()) {
      var d = a,
        e = c.value;
      c = new s_Ug(
        e.Gb.x * this.ka.ka.oa + this.ka.ka.oa / 2,
        e.Gb.y * this.ka.ka.oa + this.ka.ka.oa / 2,
      );
      var f = this.ka.ik ? 0 : d,
        g = (e.Cx + f) / 6,
        k = (Math.sin(g * Math.PI * 2) + 1) / 2;
      0 === g && (k = 0);
      var h =
        0.5 *
        this.ka.ka.oa *
        (e.Vja ? Math.sqrt(1 - d) : 1) *
        (e.Lo && !this.ka.ik ? 0.3 + 0.7 * d : 1);
      h = Math.round(h * (1 + 0.4 * k));
      f = Math.max(0, e.jda - 1 + f);
      f = e.oNa ? f : f + 1;
      f = s_jI(
        this.ka,
        f / (this.ka.oa.ka.length - 1),
        f,
        this.ka.oa.Xa ? d : 0,
        e.s4a,
      );
      f = s_QE(f);
      var l = s_PE(s_SE(f, 0.15 * k));
      f = s_PE(s_SE(f, 0.05 * (1 - k)));
      var m = s_8H(this.settings, 4) ? this.oa : this.wa;
      s_8H(this.settings, 11) && (m.globalAlpha = s_9H(this.ka, d, e.xh));
      m.fillStyle = l;
      m.beginPath();
      m.arc(c.x, c.y, h, 0, 2 * Math.PI);
      m.fill();
      d = (h / 8) * k;
      d = new s_Ug(
        d * Math.cos(2 * g * Math.PI),
        d * Math.sin(2 * g * Math.PI),
      );
      k = h * (0.5 + 0.25 * k);
      m.fillStyle = f;
      m.beginPath();
      m.arc(c.x + d.x, c.y + d.y, k, 0, 2 * Math.PI);
      m.fill();
      m.globalAlpha = 1;
    }
  };
  var s_Joe = function (a, b, c) {
    this.ka = a;
    this.settings = b;
    this.oa = c;
    this.wa = new s_5H(assetsPath + "blink.png", 9, this.oa);
    this.Da = new s_5H(assetsPath + "eat.png", 15, this.oa);
    this.Ba = new s_5H(assetsPath + "die.png", 37, this.oa);
    this.Aa = new s_5H(assetsPath + "tongue.png", 21, this.oa);
    this.Ga = new s_5H(assetsPath + "effect.png", 21, this.oa);
    this.La = new s_5H(assetsPath + "blink.png", 9, this.oa);
    this.Qa = new s_5H(assetsPath + "eat.png", 15, this.oa);
    this.Oa = new s_5H(assetsPath + "die.png", 37, this.oa);
    this.Ra = new s_5H(assetsPath + "tongue.png", 21, this.oa);
    this.Ma = new s_5H(assetsPath + "blink.png", 9, this.oa);
    this.Xa = new s_5H(assetsPath + "eat.png", 15, this.oa);
    this.Sa = new s_5H(assetsPath + "die.png", 37, this.oa);
    s_7H(this.Ma, "#5282F2", "#909090");
    s_7H(this.Xa, "#5282F2", "#909090");
    s_7H(this.Sa, "#5282F2", "#909090");
  };
  s_Joe.prototype.render = function (a, b, c) {
    var d = a,
      e = Math.pow(d, 0.2);
    this.ka.ik &&
      (a =
        3 === this.ka.oa.Ga
          ? 1
          : 2 === this.ka.oa.Ga
            ? 1 - a
            : 1 === this.ka.oa.Ga
              ? 1 - Math.pow(a, 0.5) / 2
              : 0.5);
    if ("NONE" === this.ka.oa.direction || this.ka.oa.Ma) a = 0;
    for (
      var f = new s_Ug(
          this.ka.oa.ka[0].x * this.ka.ka.oa + this.ka.ka.oa / 2,
          this.ka.oa.ka[0].y * this.ka.ka.oa + this.ka.ka.oa / 2,
        ),
        g = this.ka.oa.ka.length - 1;
      0 <= g;
      g--
    ) {
      var k = (this.ka.oa.ka[g].x + this.ka.oa.ka[g].y) % 2,
        h = s_8H(this.settings, 3) && 0 < g && 0 === k,
        l =
          s_8H(this.settings, 13) &&
          !s_8H(this.settings, 11) &&
          !this.ka.ik &&
          0 < g &&
          g < this.ka.oa.Ra.length &&
          0 === this.ka.oa.Ra[g],
        m = h || l;
      this.oa.lineCap =
        g === this.ka.oa.ka.length - 1 ||
        ((1 >= this.ka.ticks || 0 < this.ka.oa.Ga) &&
          g === this.ka.oa.ka.length - 2) ||
        (this.ka.ik && 0 === g) ||
        (this.ka.ik &&
          g === this.ka.oa.ka.length - 2 &&
          this.ka.oa.ka[this.ka.oa.ka.length - 2].equals(
            this.ka.oa.ka[this.ka.oa.ka.length - 1],
          )) ||
        (this.ka.ik && g === this.ka.oa.ka.length - 2 && s_8H(this.settings, 7))
          ? "round"
          : "butt";
      if (s_8H(this.settings, 3) || s_8H(this.settings, 11))
        this.oa.lineCap = this.ka.ik && 0 === g ? "round" : "butt";
      if (0 === g) {
        var n = this.ka.oa.ka[0].clone();
        "LEFT" === this.ka.oa.direction
          ? (--n.x, 0 > n.x && (n.x = this.ka.ka.ka.width - 1))
          : "RIGHT" === this.ka.oa.direction
            ? ((n.x += 1), n.x >= this.ka.ka.ka.width && (n.x = 0))
            : "UP" === this.ka.oa.direction
              ? (--n.y, 0 > n.y && (n.y = this.ka.ka.ka.height - 1))
              : "DOWN" === this.ka.oa.direction &&
                ((n.y += 1), n.y >= this.ka.ka.ka.height && (n.y = 0));
      } else n = this.ka.oa.ka[g - 1].clone();
      h = this.ka.oa.ka[g].clone();
      var p =
        g === this.ka.oa.ka.length - 1
          ? this.ka.oa.nb.clone()
          : this.ka.oa.ka[g + 1].clone();
      var q = void 0;
      l = s_g(this.ka.Ma.oa);
      for (var r = l.next(); !r.done; r = l.next())
        if (((r = r.value), h.equals(r.Gb) && (this.ka.ik || g >= r.jda))) {
          q = r;
          r.oNa ? (n = h.clone()) : (p = h.clone());
          break;
        }
      l = h.clone();
      r = h.clone();
      l.x *= this.ka.ka.oa;
      l.y *= this.ka.ka.oa;
      r.x *= this.ka.ka.oa;
      r.y *= this.ka.ka.oa;
      -1 === h.x - p.x || 1 < h.x - p.x
        ? ((r.x += this.ka.ka.oa), (r.y += this.ka.ka.oa / 2))
        : 1 === h.x - p.x || -1 > h.x - p.x
          ? (r.y += this.ka.ka.oa / 2)
          : -1 === h.y - p.y || 1 < h.y - p.y
            ? ((r.y += this.ka.ka.oa), (r.x += this.ka.ka.oa / 2))
            : 1 === h.y - p.y || -1 > h.y - p.y
              ? (r.x += this.ka.ka.oa / 2)
              : ((r.x += this.ka.ka.oa / 2), (r.y += this.ka.ka.oa / 2));
      -1 === h.x - n.x || 1 < h.x - n.x
        ? ((l.x += this.ka.ka.oa), (l.y += this.ka.ka.oa / 2))
        : 1 === h.x - n.x || -1 > h.x - n.x
          ? (l.y += this.ka.ka.oa / 2)
          : -1 === h.y - n.y || 1 < h.y - n.y
            ? ((l.y += this.ka.ka.oa), (l.x += this.ka.ka.oa / 2))
            : 1 === h.y - n.y || -1 > h.y - n.y
              ? (l.x += this.ka.ka.oa / 2)
              : ((l.x += this.ka.ka.oa / 2), (l.y += this.ka.ka.oa / 2));
      if (0 === g) {
        f = a;
        var t =
            !s_kI(this.settings) &&
            ((0 === this.ka.oa.ka[0].x && "LEFT" === this.ka.oa.direction) ||
              (this.ka.oa.ka[0].x === this.ka.ka.ka.width - 1 &&
                "RIGHT" === this.ka.oa.direction) ||
              (0 === this.ka.oa.ka[0].y && "UP" === this.ka.oa.direction) ||
              (this.ka.oa.ka[0].y === this.ka.ka.ka.height - 1 &&
                "DOWN" === this.ka.oa.direction)),
          u = this.ka.oa.ka[0].clone(),
          v = this.ka.oa.ka[0].clone();
        switch (this.ka.oa.direction) {
          case "RIGHT":
            u.x += 1;
            v.x += 2;
            break;
          case "LEFT":
            --u.x;
            v.x -= 2;
            break;
          case "DOWN":
            u.y += 1;
            v.y += 2;
            break;
          case "UP":
            --u.y, (v.y -= 2);
        }
        s_8H(this.settings, 4) && (s_gI(this.ka.ka, u), s_gI(this.ka.ka, v));
        if (!s_8H(this.settings, 14)) {
          if (
            s_8H(this.settings, 1) ||
            s_8H(this.settings, 8) ||
            s_8H(this.settings, 13)
          ) {
            var w = this.ka.Da.wa.get(s__H(u));
            t = t || (this.ka.ka.y8(u) && void 0 !== w && !w.qL && w.xh);
          }
          s_8H(this.settings, 9) &&
            this.ka.ka.y8(u) &&
            this.ka.ka.y8(v) &&
            7 === this.ka.ka.wa[u.y][u.x] &&
            s_fI(this.ka.ka, v) &&
            (t = !0);
          s_8H(this.settings, 7) &&
            ((v = s_bI(this.ka.oa, 0)), (t = t || u.equals(v)));
        }
        t && (f = Math.min(a, 0.5));
        l.x = l.x * f + r.x * (1 - f);
        l.y = l.y * f + r.y * (1 - f);
        this.ka.oa.direction === this.ka.oa.Da || b
          ? ((this.ka.oa.Lc = l.clone()), (this.ka.oa.Xd = a))
          : this.ka.ik ||
            ((f = (a - this.ka.oa.Xd) / (1 - this.ka.oa.Xd)),
            (l.x = l.x * f + this.ka.oa.Lc.x * (1 - f)),
            (l.y = l.y * f + this.ka.oa.Lc.y * (1 - f)));
        f = l.clone();
      } else
        g === this.ka.oa.ka.length - 1 &&
          ((t = a),
          0 < this.ka.oa.Sa &&
            (t = 2 === this.ka.oa.ka.length ? 0.5 - a / 2 : 0),
          (r.x = r.x * (1 - t) + l.x * t),
          (r.y = r.y * (1 - t) + l.y * t));
      s_8H(this.settings, 5) &&
        (g !== this.ka.oa.ka.length - 1 || this.ka.oa.Ma
          ? 0 === g &&
            this.ka.oa.Ma &&
            (s_kI(this.settings) ||
              s_8H(this.settings, 2) ||
              ((l.x = this.ka.oa.Yc.x * (1 - e) + l.x * e),
              (l.y = this.ka.oa.Yc.y * (1 - e) + l.y * e)),
            (f = l.clone()))
          : (this.ka.oa.Yc = r.clone()));
      w = this.oa.createLinearGradient(l.x, l.y, r.x, r.y);
      0 === g
        ? ((t = 0), (u = a / (this.ka.oa.ka.length - 1)))
        : g === this.ka.oa.ka.length - 1
          ? ((t =
              a / (this.ka.oa.ka.length - 1) +
              (g - 1) / (this.ka.oa.ka.length - 1)),
            (u = 1))
          : ((t =
              a / (this.ka.oa.ka.length - 1) +
              (g - 1) / (this.ka.oa.ka.length - 1)),
            (u =
              a / (this.ka.oa.ka.length - 1) + g / (this.ka.oa.ka.length - 1)));
      v = Math.max(0, g - 1 + a);
      w.addColorStop(0, s_jI(this.ka, t, v, d, !1));
      w.addColorStop(1, s_jI(this.ka, u, v + 1, d, !1));
      this.oa.strokeStyle = w;
      w = Math.min(1, (this.ka.oa.ka.length - 4) / 12);
      var x = (g / this.ka.oa.ka.length) * w;
      this.ka.oa.Ma &&
        (x = x * d + (1 - g / this.ka.oa.ka.length) * w * (1 - d));
      w = 0.4 * this.ka.ka.oa;
      this.oa.lineWidth = 0.8 * this.ka.ka.oa * (1 - x) + w * x;
      if (s_8H(this.settings, 3))
        for (x = 0; x < this.ka.oa.La.length; x++)
          if (4 > Math.abs(this.ka.oa.La[x].m6 - g)) {
            x =
              1 +
              (1 - 2 * Math.abs((4 - (g - this.ka.oa.La[x].m6) + a) / 8 - 0.5));
            this.ka.ik &&
              ((x =
                3 === this.ka.oa.Ga
                  ? x * (0.5 + (1 - d) / 2)
                  : 2 === this.ka.oa.Ga
                    ? ((1 - d) / 2) * x
                    : 1),
              (x = Math.max(1, x)));
            x = 1 + (x - 1) * (this.ka.ka.oa / this.oa.lineWidth - 1);
            x = 1 + (x - 1) * (1 - g / this.ka.oa.ka.length);
            this.oa.lineWidth *= x;
            break;
          }
      x = h.clone();
      var y =
        !m && !(s_8H(this.settings, 3) && 0 === g && 0 === k && !this.ka.ik);
      k = h.y - n.y + (h.y - p.y);
      k =
        (0 !== h.x - n.x + (h.x - p.x) && 0 !== k) ||
        (this.ka.oa.Ma && 0 === g);
      m = s_8H(this.settings, 11) && !s_8H(this.settings, 3);
      if (y) {
        s_8H(this.settings, 11) &&
          ((y =
            (s_8H(this.settings, 3) ? 0.125 : 0.2) +
            (s_8H(this.settings, 7) || s_0ne(this.settings)
              ? 0
              : s_Vne[this.settings.oa])),
          (this.oa.globalAlpha = s_9H(this.ka, d, this.ka.oa.wa[g], y)));
        this.oa.beginPath();
        this.oa.moveTo(l.x, l.y);
        if (k) {
          h.x = h.x * this.ka.ka.oa + this.ka.ka.oa / 2;
          h.y = h.y * this.ka.ka.oa + this.ka.ka.oa / 2;
          if (g === this.ka.oa.ka.length - 1 && 0 === this.ka.oa.Sa) {
            y = m && this.ka.oa.wa[g];
            if (s_8H(this.settings, 3) || m) {
              var z = new s_Ug(h.x + (h.x - l.x), h.y + (h.y - l.y)),
                A = Math.pow(a, y ? 1 : 1 / 3);
              r.x = r.x * (1 - A) + z.x * A;
              r.y = r.y * (1 - A) + z.y * A;
              r.x = r.x * (1 - a) + l.x * a;
              r.y = r.y * (1 - a) + l.y * a;
            }
            y = Math.pow(a, y ? 2 : 1);
            h.x = h.x * (1 - y) + ((l.x + r.x) / 2) * y;
            h.y = h.y * (1 - y) + ((l.y + r.y) / 2) * y;
          } else
            0 === g &&
              ((y = this.ka.oa.Ma ? 1 - d : a),
              (h.x = h.x * y + ((l.x + r.x) / 2) * (1 - y)),
              (h.y = h.y * y + ((l.y + r.y) / 2) * (1 - y)));
          this.oa.quadraticCurveTo(h.x, h.y, r.x, r.y);
        } else this.oa.lineTo(r.x, r.y);
        this.oa.stroke();
        A = 0;
        y = !1;
        z = "NONE" === this.ka.oa.direction && 0 === this.ka.Mg;
        if (m && g === this.ka.oa.ka.length - 1) {
          this.oa.fillStyle = s_jI(
            this.ka,
            u - (z ? 0.35 : 0),
            g - (z ? 1 : 0),
            d,
            !1,
          );
          this.oa.beginPath();
          if (!this.ka.oa.wa[g] || (this.ka.La && !s_8H(this.settings, 2))) {
            if (k)
              (p =
                x.x !== p.x
                  ? x.x < p.x
                    ? (3 * Math.PI) / 2
                    : Math.PI / 2
                  : x.y < p.y
                    ? 0
                    : Math.PI),
                (n =
                  p -
                  (0 < this.ka.oa.Sa
                    ? p
                    : x.x !== n.x
                      ? x.x < n.x
                        ? (3 * Math.PI) / 2
                        : Math.PI / 2
                      : x.y < n.y
                        ? 0
                        : Math.PI)),
                n > Math.PI
                  ? (n -= 2 * Math.PI)
                  : n < -Math.PI && (n += 2 * Math.PI),
                (A = p + n * Math.pow(a, 0.36));
            else if (q && q.oNa)
              switch (q.Ywa) {
                default:
                case "UP":
                  A = 0;
                  break;
                case "RIGHT":
                  A = Math.PI / 2;
                  break;
                case "DOWN":
                  A = Math.PI;
                  break;
                case "LEFT":
                  A = (3 * Math.PI) / 2;
              }
            else
              x.equals(n)
                ? ((n = this.ka.oa.ka[g - 2].clone()),
                  (A =
                    x.x !== n.x
                      ? x.x < n.x
                        ? Math.PI / 2
                        : (3 * Math.PI) / 2
                      : x.y < n.y
                        ? Math.PI
                        : 0))
                : (A =
                    x.x !== n.x
                      ? x.x < n.x
                        ? Math.PI / 2
                        : (3 * Math.PI) / 2
                      : x.y < n.y
                        ? Math.PI
                        : 0);
            this.oa.arc(r.x, r.y, this.oa.lineWidth / 2, A, A + Math.PI);
          } else
            this.oa.arc(r.x, r.y, this.oa.lineWidth / 2, 0, 2 * Math.PI),
              (y = !0);
          this.oa.fill();
        }
        s_8H(this.settings, 7) &&
          ((p = new s_Ug(c.width - l.x, c.height - l.y)),
          (n = new s_Ug(c.width - r.x, c.height - r.y)),
          (q = this.oa.createLinearGradient(p.x, p.y, n.x, n.y)),
          q.addColorStop(0, s_jI(this.ka, t, v, d, !0)),
          q.addColorStop(1, s_jI(this.ka, u, v + 1, d, !0)),
          (this.oa.strokeStyle = q),
          this.oa.beginPath(),
          this.oa.moveTo(p.x, p.y),
          k
            ? ((p = new s_Ug(c.width - h.x, c.height - h.y)),
              this.oa.quadraticCurveTo(p.x, p.y, n.x, n.y))
            : this.oa.lineTo(n.x, n.y),
          this.oa.stroke(),
          m &&
            g === this.ka.oa.ka.length - 1 &&
            ((this.oa.fillStyle = s_jI(
              this.ka,
              u - (z ? 0.35 : 0),
              g - (z ? 1 : 0),
              d,
              !0,
            )),
            this.oa.beginPath(),
            y
              ? this.oa.arc(n.x, n.y, this.oa.lineWidth / 2, 0, 2 * Math.PI)
              : ((p = A + Math.PI),
                this.oa.arc(n.x, n.y, this.oa.lineWidth / 2, p, p + Math.PI)),
            this.oa.fill()));
      }
      n = this.settings;
      if (
        !(s_8H(n, 5) || s_8H(n, 2) || s_8H(n, 3) || s_8H(n, 11) || s_8H(n, 13))
      )
        for (n = 0; n < this.ka.oa.La.length; n++)
          if (this.ka.oa.La[n].m6 === g) {
            n = this.ka.oa.La[n];
            p = s_jI(
              this.ka,
              t * a + u * (1 - a),
              v,
              this.ka.oa.Xa ? d : 0,
              !1,
            );
            l = new s_Ug(l.x * (1 - a) + r.x * a, l.y * (1 - a) + r.y * a);
            k &&
              ((r = 0.5 * (1 - Math.abs(a - 0.5) / 0.5)),
              (l.x = l.x * (1 - r) + h.x * r),
              (l.y = l.y * (1 - r) + h.y * r));
            h = Math.max(
              0,
              0.7 * (1 - (n.m6 + 2 * a) / (n.f$b + 6)) * this.ka.ka.oa,
            );
            1 > n.m6 + 2 * a && (h *= n.m6 + 2 * a);
            this.ka.ik &&
              (h =
                3 === this.ka.oa.Ga
                  ? h * (0.5 + (1 - d) / 2)
                  : 2 === this.ka.oa.Ga
                    ? ((1 - d) / 2) * h
                    : 0);
            if (h < 0.75 * w) break;
            n.s4a &&
              ((l.x = c.width - l.x),
              (l.y = c.height - l.y),
              (p = s_jI(
                this.ka,
                t * a + u * (1 - a),
                v,
                this.ka.oa.Xa ? d : 0,
                !0,
              )));
            this.oa.fillStyle = p;
            this.oa.beginPath();
            this.oa.arc(l.x, l.y, h, 0, 2 * Math.PI);
            this.oa.fill();
            break;
          }
    }
    s_8H(this.settings, 11) && (this.oa.globalAlpha = 1);
    s_8H(this.settings, 4) && (this.ka.oa.Wm = f);
    s_8H(this.settings, 7) &&
      s_Koe(
        this,
        new s_Ug(
          this.ka.ka.ka.width * this.ka.ka.oa - f.x,
          this.ka.ka.ka.height * this.ka.ka.oa - f.y,
        ),
        d,
        !1,
        !0,
      );
    s_Koe(this, f, d);
  };
  var s_Koe = function (a, b, c, d, e) {
      d = void 0 === d ? !1 : d;
      var f = (e = void 0 === e ? !1 : e) ? a.ka.oa.Qa : a.ka.oa.Oa,
        g = b.clone(),
        k = b.clone();
      if (s_kI(a.settings) && !d) {
        d = !1;
        var h = b.clone(),
          l = e ? s_One(a.ka.oa.direction) : a.ka.oa.direction,
          m = "LEFT" === l || "RIGHT" === l;
        l = "UP" === l || "DOWN" === l;
        h.x < a.ka.ka.oa / 2 && m
          ? ((d = !0), (h.x += a.ka.ka.ka.width * a.ka.ka.oa))
          : h.x > a.ka.ka.ka.width * a.ka.ka.oa - a.ka.ka.oa / 2 && m
            ? ((d = !0), (h.x -= a.ka.ka.ka.width * a.ka.ka.oa))
            : h.y < a.ka.ka.oa / 2 && l
              ? ((d = !0), (h.y += a.ka.ka.ka.height * a.ka.ka.oa))
              : h.y > a.ka.ka.ka.height * a.ka.ka.oa - a.ka.ka.oa / 2 &&
                l &&
                ((d = !0), (h.y -= a.ka.ka.ka.height * a.ka.ka.oa));
        d && s_Koe(a, h, c, !0, e);
      }
      if (
        !a.ka.ik ||
        "NONE" === a.ka.oa.direction ||
        a.ka.La ||
        (s_8H(a.settings, 11) && !a.ka.oa.wa[0])
      )
        (a.oa.fillStyle = e
          ? s_jI(a.ka, 0, 0, c, !0)
          : s_jI(a.ka, 0, 0, c, !1)),
          a.oa.beginPath(),
          a.oa.arc(
            b.x,
            b.y,
            s_8H(a.settings, 3) ? 0.4 * a.ka.ka.oa : a.oa.lineWidth / 2,
            0,
            2 * Math.PI,
          ),
          a.oa.fill();
      d = (a.ka.ka.oa / 30) * (a.ka.oa.Ma ? c : 1);
      h = m = 0;
      switch (a.ka.oa.Da) {
        case "UP":
          h = -Math.PI / 2;
          break;
        case "DOWN":
          h = Math.PI / 2;
          break;
        case "LEFT":
          h = Math.PI;
          break;
        case "NONE":
        case "RIGHT":
          h = 0;
      }
      if (a.ka.oa.Ma) m = h;
      else
        switch ("NONE" !== a.ka.oa.Ba ? a.ka.oa.Ba : a.ka.oa.direction) {
          case "UP":
            m = -Math.PI / 2;
            break;
          case "DOWN":
            m = Math.PI / 2;
            break;
          case "LEFT":
            m = Math.PI;
            break;
          case "NONE":
          case "RIGHT":
            m = 0;
        }
      Math.abs(m - h) >= Math.PI &&
        (0 < m ? (h += 2 * Math.PI) : (m += 2 * Math.PI));
      h = m * c + h * (1 - c);
      a.ka.oa.direction !== a.ka.oa.Da && 1 < a.ka.oa.Ga && (h = m);
      e && (h += Math.PI);
      m = 1 < a.ka.oa.Aa && !a.ka.oa.Xa;
      l = f.z4 && !a.ka.ik;
      if ((a.ka.ik && !a.ka.nb) || l)
        l
          ? (f = 0)
          : 3 === a.ka.oa.Ga
            ? (f = Math.floor((4 * c) / 2))
            : 2 === a.ka.oa.Ga
              ? (f = Math.floor(2 + (4 * c) / 2))
              : 1 === a.ka.oa.Ga
                ? (f = 4 + Math.floor(16 * c))
                : ((f = a.Ba.wa - 20),
                  (f = Math.floor(
                    20 + ((((8 - a.ka.oa.Vb + c) / 8) * f) % f),
                  ))),
          (g = new s_Ug(((l ? -6.25 : -5) * a.Ba.Bd()) / 8, -a.Ba.qd() / 2)),
          (k = l ? 0.875 : 1),
          m || (e ? a.Oa : a.Ba).render(f, b, g, h, d * k),
          0 < a.ka.oa.Aa &&
            (1 === a.ka.oa.Aa
              ? (a.oa.globalAlpha = 1 - c)
              : a.ka.oa.Xa && (a.oa.globalAlpha = c),
            a.Sa.render(f, b, g, h, d * k),
            (a.oa.globalAlpha = 1));
      else {
        var n = a.ka.ka.oa / 2,
          p = (4 * Math.PI) / 5;
        g.x += Math.cos(h + p) * n;
        g.y += Math.sin(h + p) * n;
        k.x += Math.cos(h - p) * n;
        k.y += Math.sin(h - p) * n;
        n = 0 < f.t6 ? Math.floor(((4 - f.t6 + c) / 4) * a.wa.wa) % a.wa.wa : 0;
        p = e ? Math.PI : 0;
        if (a.ka.nb && !a.ka.zc) p = 2 * Math.random() * Math.PI;
        else if (1 < a.ka.oa.Aa) p = h - Math.PI / 2;
        else if ("NONE" !== a.ka.oa.direction) {
          var q = s_Loe(a.ka.oa, a.ka.wa.ka, e, s_$H(a.settings));
          0 < a.ka.wa.ka.length && (p = s_Moe(a, q, b));
          if (0 < a.ka.Ba.keys.length) {
            var r = s_Loe(a.ka.oa, a.ka.Ba.keys, e, s_8H(a.settings, 7));
            if (
              s_Vg(a.ka.oa.ka[0], r) < s_Vg(a.ka.oa.ka[0], q) ||
              0 === a.ka.wa.ka.length
            )
              p = s_Moe(a, r, b);
          }
          0 < a.ka.Aa.oa.size &&
            ((r = s_Loe(a.ka.oa, a.ka.Aa.oa, e, s_8H(a.settings, 7))),
            s_Vg(a.ka.oa.ka[0], r) < s_Vg(a.ka.oa.ka[0], q) ||
              0 === a.ka.wa.ka.length) &&
            (p = s_Moe(a, r, b));
        }
        Math.abs(p - f.nQ) >= Math.PI &&
          (p = 0 < p ? p - 2 * Math.PI : p + 2 * Math.PI);
        f.nQ = 0.9 * f.nQ + 0.1 * p;
        f.nQ > Math.PI
          ? (f.nQ -= 2 * Math.PI)
          : f.nQ < -Math.PI && (f.nQ += 2 * Math.PI);
        p = new s_Ug(-a.wa.Bd() / 2, -a.wa.qd() / 2);
        q = f.nQ;
        0 < a.ka.oa.Aa &&
          ((r = 2 * h - f.nQ),
          1 < a.ka.oa.Aa
            ? (q = r)
            : ((r -= q),
              r > Math.PI
                ? (r -= 2 * Math.PI)
                : r < -Math.PI && (r += 2 * Math.PI),
              (q += r * (1 - c))));
        m ||
          ((e ? a.La : a.wa).render(n, g, p, f.nQ, d),
          (e ? a.La : a.wa).render(n, k, p, q, d));
        (f.KO || 0 < a.ka.oa.Aa) && !l
          ? (f.iG = 10 <= f.iG ? 10 : f.iG + 0.6)
          : 0 !== f.iG &&
            (10 > f.iG && (f.iG = 10),
            (f.iG += 0.3),
            f.iG >= a.Da.wa && (f.iG = 0));
        r = new s_Ug(-a.Da.Bd() / 4, -a.Da.qd() / 2);
        m || (e ? a.Qa : a.Da).render(Math.floor(f.iG), b, r, h, d);
        0 < a.ka.oa.Aa &&
          (1 === a.ka.oa.Aa
            ? (a.oa.globalAlpha = 1 - c)
            : a.ka.oa.Xa && (a.oa.globalAlpha = c),
          a.Ma.render(n, g, p, f.nQ, d),
          a.Ma.render(n, k, p, q, d),
          a.Xa.render(Math.floor(f.iG), b, r, h, d),
          (a.oa.globalAlpha = 1));
        !f.KO &&
          0 === f.iG &&
          0 < f.Uea &&
          !l &&
          ((c = Math.floor(((7 - f.Uea + c) / 7) * a.Aa.wa) % a.Aa.wa),
          (f = new s_Ug(a.Aa.Bd() / 7, -a.Aa.qd() / 2)),
          (e ? a.Ra : a.Aa).render(c, b, f, h, d));
      }
    },
    s_Moe = function (a, b, c) {
      return Math.atan2(
        b.y * a.ka.ka.oa + a.ka.ka.oa / 2 - c.y,
        b.x * a.ka.ka.oa + a.ka.ka.oa / 2 - c.x,
      );
    };
  var s_Noe = function (a, b, c) {
    this.oa = a;
    this.settings = b;
    this.ka = c;
    this.wa = new s_5H(assetsPath + "cracks.png", 4, this.ka);
  };
  s_Noe.prototype.render = function (a) {
    for (
      var b = s_g(this.oa.Ra.oa.values()), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = a;
      c = c.value;
      if (c.aC) {
        var e = new s_Ug(
            c.Gb.x * this.oa.ka.oa + this.oa.ka.oa / 2,
            c.Gb.y * this.oa.ka.oa + this.oa.ka.oa / 2,
          ),
          f = c.Lo ? d : 1;
        s_8H(this.settings, 11) &&
          (this.ka.globalAlpha = s_9H(
            this.oa,
            d,
            c.xh,
            0 === (c.Gb.x + c.Gb.y) % 2 ? 0.365 : 0.265,
          ));
        s_Hoe(this, f, e, c.aC.angle, c.aC);
        this.ka.globalAlpha = 1;
      }
    }
  };
  var s_Hoe = function (a, b, c, d, e) {
    a.ka.save();
    a.ka.translate(c.x, c.y);
    a.ka.rotate(d);
    a.ka.scale(b, b);
    a.ka.fillStyle = e.color;
    b = a.oa.ka.oa;
    c = b / 2;
    switch (e.type) {
      default:
      case 1:
        a.ka.fillRect(-c, -c, b, b);
        break;
      case 2:
        a.ka.beginPath();
        a.ka.moveTo(-c, c);
        a.ka.lineTo(-c, 0);
        a.ka.quadraticCurveTo(-c, -c, 0, -c);
        a.ka.lineTo(c, -c);
        a.ka.lineTo(c, c);
        a.ka.lineTo(-c, c);
        a.ka.fill();
        break;
      case 0:
        a.ka.beginPath(),
          a.ka.moveTo(-c, c),
          a.ka.lineTo(-c, 0),
          a.ka.arc(0, 0, c, Math.PI, 0),
          a.ka.moveTo(c, 0),
          a.ka.lineTo(c, c),
          a.ka.lineTo(-c, c),
          a.ka.fill();
    }
    e.xJa &&
      ((c = a.ka.globalAlpha),
      (a.ka.globalAlpha = 0.25 * c),
      a.ka.rotate(e.Wsc),
      a.ka.drawImage(
        a.wa.oa.canvas,
        128 * e.Xsc,
        0,
        128,
        128,
        -b / 2,
        -b / 2,
        b,
        b,
      ),
      (a.ka.globalAlpha = c));
    a.ka.restore();
  };
  var s_Poe = function (a, b, c) {
      this.ka = a;
      this.settings = b;
      this.canvas = c;
      this.Ra = new s_Yg(0, 0);
      this.context = c.getContext("2d");
      this.oa = s_Ooe();
      this.wa = s_Ooe();
      this.La = s_Ooe();
      this.Ba = s_Ooe();
      this.Aa = s_Ooe();
      this.Qa = new s_aoe(this.ka, this.settings, this.context, this.La);
      this.Ga = new s_Joe(this.ka, this.settings, this.oa);
      this.Sa = new s__ne(this.ka, this.settings, this.oa);
      this.Oa = new s_Foe(this.ka, this.settings, this.oa);
      this.nb = new s_Ioe(this.ka, this.settings, this.oa, this.wa);
      this.Cb = new s_yoe(this.ka, this.settings, this.oa);
      this.Da = new s_ioe(
        this.ka,
        this.settings,
        this.context,
        this.oa,
        this.wa,
      );
      this.Ma = new s_Aoe(this.ka, this.settings, this.oa, this.wa);
      this.Xa = new s_Noe(this.ka, this.settings, this.oa);
      this.Db = new s_Goe(
        this.ka,
        this.settings,
        this.oa,
        this.Sa,
        this.Oa,
        this.Da,
        this.Ma,
        this.Xa,
      );
    },
    s_Ooe = function () {
      return document.createElement("canvas").getContext("2d");
    },
    s_Qoe = function (a) {
      return new s_Yg(
        a.oa.canvas.width -
          (s_8H(a.settings, 4) ? a.ka.ka.oa * (4 - a.ka.ka.Ba.x) : 0),
        a.oa.canvas.height -
          (s_8H(a.settings, 4) ? a.ka.ka.oa * (4 - a.ka.ka.Ba.y) : 0),
      );
    };
  s_Poe.prototype.render = function (a, b) {
    this.ka.ik && this.ka.nb && (a = 0);
    this.oa.clearRect(0, 0, this.oa.canvas.width, this.oa.canvas.height);
    this.wa.clearRect(0, 0, this.wa.canvas.width, this.wa.canvas.height);
    this.context.fillStyle = s_eI(this.settings, this.settings.ka, 3);
    this.context.fillRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height,
    );
    s_8H(this.settings, 4) &&
      (this.oa.save(),
      this.oa.translate(2 * this.ka.ka.oa, 2 * this.ka.ka.oa),
      this.nb.render(a));
    this.Ga.render(a, b, s_Qoe(this));
    b = s_g(this.ka.wa.ka);
    for (var c = b.next(); !c.done; c = b.next()) this.Sa.render(a, c.value);
    this.Cb.render(a);
    b = this.Da;
    c = a;
    for (var d = s_g(b.ka.Aa.oa), e = d.next(); !e.done; e = d.next()) {
      var f = b,
        g = c;
      e = e.value;
      var k = e.Gb.clone();
      if (e.prev) {
        var h = e.prev.clone();
        k.x = k.x * g + h.x * (1 - g);
        k.y = k.y * g + h.y * (1 - g);
      }
      k.x = k.x * f.ka.ka.oa + f.ka.ka.oa / 2;
      k.y = k.y * f.ka.ka.oa + f.ka.ka.oa / 2;
      h = f.ka.ka.oa * (e.Lo && !f.ka.ik ? g : 1);
      s_8H(f.settings, 11) &&
        (f.wa.globalAlpha = s_9H(
          f.ka,
          g,
          e.xh,
          0 === (e.Gb.x + e.Gb.y) % 2 ? 0.365 : 0.265,
        ));
      s_joe(f, e, h, k);
      if (s_8H(f.settings, 4) && null !== e.prev) {
        g = f.ka.ka.oa * f.ka.ka.ka.width;
        var l = f.ka.ka.oa * f.ka.ka.ka.height;
        0 === e.Gb.x && 0 > e.prev.x
          ? s_joe(f, e, h, new s_Ug(k.x + g, k.y))
          : e.Gb.x === f.ka.ka.ka.width - 1 &&
            e.prev.x > f.ka.ka.ka.width - 1 &&
            s_joe(f, e, h, new s_Ug(k.x - g, k.y));
        0 === e.Gb.y && 0 > e.prev.y
          ? s_joe(f, e, h, new s_Ug(k.x, k.y + l))
          : e.Gb.y === f.ka.ka.ka.height - 1 &&
            e.prev.y > f.ka.ka.ka.height - 1 &&
            s_joe(f, e, h, new s_Ug(k.x, k.y - l));
      }
      f.wa.globalAlpha = 1;
    }
    s_8H(this.settings, 4) || s_Roe(this);
    b = this.Ma;
    c = a;
    d = s_g(b.ka.Ga.oa);
    for (e = d.next(); !e.done; e = d.next())
      (f = b),
        (k = c),
        (g = e.value),
        (e = new s_Ug(g.Gb.x * f.ka.ka.oa, g.Gb.y * f.ka.ka.oa)),
        s_8H(f.settings, 11) && (f.wa.globalAlpha = s_9H(f.ka, k, g.xh, 0.3)),
        (k = Math.min(f.Aa.wa - 1, Math.floor(((g.Cx + k) / 2) * f.Aa.wa))),
        (g = f.ka.ka.oa / f.Aa.Bd()),
        f.Aa.render(k, e, null, 0, g),
        (f.wa.globalAlpha = 1);
    d = s_g(b.ka.Ga.Aa);
    for (e = d.next(); !e.done; e = d.next())
      (f = b),
        (e = e.value),
        (f.wa.globalAlpha = ((e.ticks - c) / 3) * 0.8),
        (f.wa.fillStyle = e.color),
        (k = 3 * f.ka.ka.oa),
        f.wa.fillRect(e.Gb.x - k / 2, e.Gb.y - k / 2, k, k),
        (f.wa.globalAlpha = 1);
    !s_8H(this.settings, 4) && s_8H(this.settings, 12) && s_Eoe(this.Ma, a);
    !s_8H(this.settings, 4) && s_8H(this.settings, 9) && s_moe(this.Da);
    s_8H(this.settings, 4) || this.nb.render(a);
    this.Oa.render(a);
    this.Xa.render(a);
    s_8H(this.settings, 13);
    b = this.Ga;
    c = s_Qoe(this);
    0 < b.ka.oa.uc &&
      ((d = b.ka.ka.oa / 30),
      (f = Math.floor(((6 - b.ka.oa.uc + a) / 6) * b.Ga.wa) % b.Ga.wa),
      (e = new s_Ug(
        b.ka.oa.Cb.x * b.ka.ka.oa + b.ka.ka.oa / 2,
        b.ka.oa.Cb.y * b.ka.ka.oa + b.ka.ka.oa / 2,
      )),
      (k = new s_Ug(-b.Ga.Bd(), -b.Ga.qd() / 2)),
      b.Ga.render(f, e, k, b.ka.oa.Pb, d),
      s_8H(b.settings, 7) &&
        b.Ga.render(
          f,
          new s_Ug(c.width - e.x, c.height - e.y),
          k,
          b.ka.oa.Pb + Math.PI,
          d,
        ));
    this.Db.render();
    f = e = 0;
    1 < this.ka.oa.Ga &&
      ((e = 8 * Math.random() - 4), (f = 8 * Math.random() - 4));
    if (s_8H(this.settings, 4)) {
      b = e;
      c = f;
      d = this.Qa;
      d.context.fillStyle = s_eI(d.settings, d.settings.ka, 0);
      d.context.fillRect(0, 0, d.context.canvas.width, d.context.canvas.height);
      d.context.fillStyle = s_eI(d.settings, d.settings.ka, 1);
      f = new s_Ug(
        (d.context.canvas.width / 2) % d.ka.ka.oa,
        (d.context.canvas.height / 2) % d.ka.ka.oa,
      );
      e = !1;
      0 !== a ||
      d.ka.ik ||
      ("LEFT" !== d.ka.oa.direction && "UP" !== d.ka.oa.direction)
        ? !d.ka.Db ||
          ("RIGHT" !== d.ka.oa.direction && "DOWN" !== d.ka.oa.direction) ||
          (e = !0)
        : (e = !0);
      k = new s_Ug(d.ka.oa.Wm.x % d.ka.ka.oa, d.ka.oa.Wm.y % d.ka.ka.oa);
      for (g = -1; g < d.ka.ka.ka.width + 3; g++)
        for (h = -1; h < d.ka.ka.ka.height + 3; h++)
          Math.abs((g + h) % 2) !== (d.ka.ka.Da + (e ? 1 : 0)) % 2 &&
            d.context.fillRect(
              g * d.ka.ka.oa - k.x + f.x,
              h * d.ka.ka.oa - k.y + f.y,
              d.ka.ka.oa,
              d.ka.ka.oa,
            );
      this.oa.restore();
      this.Aa.clearRect(0, 0, this.Aa.canvas.width, this.Aa.canvas.height);
      this.Aa.drawImage(this.oa.canvas, 0, 0);
      this.oa.clearRect(0, 0, this.oa.canvas.width, this.oa.canvas.height);
      d = Math.round(
        this.oa.canvas.width / 2 - this.ka.oa.Wm.x - 2 * this.ka.ka.oa,
      );
      f = Math.round(
        this.oa.canvas.height / 2 - this.ka.oa.Wm.y - 2 * this.ka.ka.oa,
      );
      e = 2 * this.ka.ka.oa;
      k = d >= -e;
      g = d <= e;
      h = f <= e;
      l = this.ka.ka.ka.width * this.ka.ka.oa;
      var m = this.ka.ka.ka.height * this.ka.ka.oa;
      f >= -e &&
        (k && this.oa.drawImage(this.Aa.canvas, d - l, f - m),
        g && this.oa.drawImage(this.Aa.canvas, d + l, f - m),
        this.oa.drawImage(this.Aa.canvas, d, f - m));
      k && this.oa.drawImage(this.Aa.canvas, d - l, f);
      g && this.oa.drawImage(this.Aa.canvas, d + l, f);
      h &&
        (k && this.oa.drawImage(this.Aa.canvas, d - l, f + m),
        g && this.oa.drawImage(this.Aa.canvas, d + l, f + m),
        this.oa.drawImage(this.Aa.canvas, d, f + m));
      this.oa.drawImage(this.Aa.canvas, d, f);
      s_Roe(this);
      s_8H(this.settings, 9) &&
        (this.wa.save(),
        this.wa.translate(d + 2 * this.ka.ka.oa, f + 2 * this.ka.ka.oa),
        s_moe(this.Da),
        this.wa.restore());
      s_8H(this.settings, 12) &&
        (this.wa.save(),
        this.wa.translate(d + 2 * this.ka.ka.oa, f + 2 * this.ka.ka.oa),
        s_Eoe(this.Ma, a),
        this.wa.restore());
      a = (this.oa.canvas.width - this.context.canvas.width) / 2;
      d = (this.oa.canvas.height - this.context.canvas.height) / 2;
      this.context.drawImage(this.wa.canvas, b - a, c - d);
      this.context.drawImage(this.oa.canvas, b - a, c - d);
    } else {
      b = Math.round((this.context.canvas.width - this.Ba.canvas.width) / 2);
      c = Math.round((this.context.canvas.height - this.Ba.canvas.height) / 2);
      this.Ba.drawImage(this.La.canvas, e, f);
      this.Ba.drawImage(this.wa.canvas, e, f);
      this.Ba.drawImage(this.oa.canvas, e, f);
      if (s_8H(this.settings, 9))
        for (
          d = this.Da,
            f = new s_Ug(b + e, c + f),
            e = s_g(d.ka.Aa.oa),
            k = e.next();
          !k.done;
          k = e.next()
        )
          if (
            ((k = k.value),
            (g = null !== k.prev || d.ka.La ? a : 1),
            k.xh &&
              (0 === k.Gb.x
                ? s_koe(d, new s_Ug(-1, k.Gb.y), f, g)
                : k.Gb.x === d.ka.ka.ka.width - 1 &&
                  s_koe(d, new s_Ug(d.ka.ka.ka.width, k.Gb.y), f, g),
              0 === k.Gb.y
                ? s_koe(d, new s_Ug(k.Gb.x, -1), f, g)
                : k.Gb.y === d.ka.ka.ka.height - 1 &&
                  s_koe(d, new s_Ug(k.Gb.x, d.ka.ka.ka.height), f, g)),
            null !== k.prev || (!k.xh && d.ka.La))
          )
            (k = null !== k.prev ? k.prev : k.Gb),
              0 === k.x
                ? s_koe(d, new s_Ug(-1, k.y), f, 1 - a)
                : k.x === d.ka.ka.ka.width - 1 &&
                  s_koe(d, new s_Ug(d.ka.ka.ka.width, k.y), f, 1 - a),
              0 === k.y
                ? s_koe(d, new s_Ug(k.x, -1), f, 1 - a)
                : k.y === d.ka.ka.ka.height - 1 &&
                  s_koe(d, new s_Ug(k.x, d.ka.ka.ka.height), f, 1 - a);
      this.context.drawImage(this.Ba.canvas, b, c);
    }
  };
  var s_Roe = function (a) {
    a.wa.globalCompositeOperation = "destination-atop";
    a.wa.fillStyle = s_eI(a.settings, a.settings.ka, 2);
    a.wa.fillRect(0, 0, a.wa.canvas.width, a.wa.canvas.height);
    a.wa.drawImage(a.oa.canvas, 0, a.ka.ka.oa / 6);
    a.wa.globalCompositeOperation = "source-over";
  };
  var s_Soe = function (a) {
      this.Yc = a;
      this.Wm = this.Da = 0;
      this.nb = "";
      this.Hb = this.Ma = 0;
      this.Pb = "";
      this.Ba =
        this.oa =
        this.Db =
        this.Vb =
        this.Cb =
        this.Aa =
        this.Ra =
        this.Oa =
        this.Xa =
        this.wa =
          0;
      this.zc = !1;
      this.Sa = this.ka = this.Lb = this.uc = 0;
      this.Lc = !1;
      this.Ga = void 0;
      this.La = new Set();
      this.Qa = new Map();
      this.Sc = new Map();
      a = s_$g("DIV", "vuOknd", this.Yc);
      for (var b = /trophy_(.*).png/, c = 0; c < a.length; c++) {
        var d = a[c];
        if (1 === d.children.length) {
          var e = b.exec(d.children[0].src);
          e && 2 <= e.length
            ? ((e = "" === e[1] ? NaN : Number(e[1])),
              isNaN(e) || (this.Qa.set(e, d), this.Sc.set(d, e)))
            : (this.Qa.set(15, d), this.Sc.set(d, 15));
        }
      }
    },
    s_8H = function (a, b) {
      return 15 === a.Ma && a.La.has(b) ? !0 : a.Ma === b;
    },
    s_eI = function (a, b, c) {
      return s_Toe(a) ? a.Ga[c] : s_4H[b][c];
    };
  s_Soe.prototype.OG = function () {
    return s_Toe(this)
      ? !1
      : 1 === this.ka || 3 === this.ka || 5 === this.ka || 7 === this.ka
        ? !0
        : !1;
  };
  var s_0ne = function (a) {
      return 0 !== a.ka || s_Toe(a);
    },
    s_Toe = function (a) {
      return void 0 !== a.Ga && 7 === a.Ga.length;
    },
    s_kI = function (a) {
      return s_8H(a, 14) || s_8H(a, 4);
    },
    s_2ne = function (a) {
      return s_8H(a, 2) || s_8H(a, 8) || s_8H(a, 9) || s_8H(a, 10);
    },
    s_$H = function (a) {
      return s_8H(a, 7)
        ? s_8H(a, 2) ||
            s_8H(a, 5) ||
            s_8H(a, 9) ||
            s_8H(a, 10) ||
            s_8H(a, 11) ||
            (s_8H(a, 6) && s_8H(a, 12))
        : !1;
    },
    s_Uoe = function (a, b) {
      for (var c = new Set(), d = 1; 14 > d; d++) c.add(d);
      d = new Set();
      b && (d.add(b), c.delete(b));
      do
        if (
          ((b = Array.from(c)),
          (b = b[Math.floor(Math.random() * b.length)]),
          d.add(b),
          c.delete(b),
          a)
        )
          break;
      while (0 < c.size && (0.3 > Math.random() || 2 > d.size));
      return d;
    },
    s_Voe = function (a) {
      a.La.clear();
      var b = [];
      a.Qa.forEach(function (e, f) {
        s_rj(e, "lH9Ipd") && b.push(f);
      });
      if (0 === b.length) a.La = s_Uoe(!0);
      else if (1 === b.length) a.La = 15 !== b[0] ? s_Uoe(!1, b[0]) : s_Uoe(!1);
      else
        for (var c = s_g(b), d = c.next(); !d.done; d = c.next())
          a.La.add(d.value);
    },
    s_Woe = function (a) {
      var b = "c";
      a = Array.from(a.La).sort(function (d, e) {
        return d - e;
      });
      a = s_g(a);
      for (var c = a.next(); !c.done; c = a.next()) b += c.value;
      return b;
    },
    s_Xoe = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c;
      s_8H(a, 15) ? (c = s_Woe(a)) : (c = b ? a.Hb : a.Ma);
      return (
        c +
        "," +
        (b ? a.Xa : a.wa) +
        "," +
        (b ? a.Ra : a.Oa) +
        "," +
        (b ? a.Cb : a.Aa)
      );
    };
  s_Soe.prototype.toString = function () {
    var a = s_8H(this, 15) ? s_Woe(this) : this.Ma;
    return (
      "v=10,color=" +
      this.Vb +
      ",apple=" +
      this.Da +
      ",mode=" +
      a +
      ",count=" +
      this.wa +
      ",speed=" +
      this.Oa +
      ",size=" +
      this.Aa +
      ",theme=" +
      this.uc
    );
  };
  var s_Yoe = function (a, b, c, d, e, f, g) {
    this.settings = a;
    this.ka = b;
    this.Aa = c;
    this.oa = d;
    this.Ba = e;
    this.wa = f;
    this.Da = g;
    this.keys = [];
  };
  s_Yoe.prototype.reset = function () {
    this.keys = [];
    if (s_8H(this.settings, 8)) {
      for (var a = 0; a + 1 < this.oa.ka.length; a += 2) {
        var b = this.oa.ka[a].Gb.clone(),
          c = this.oa.ka[a + 1].Gb.clone(),
          d = Math.floor(a / 2);
        d =
          21 !== this.settings.Da || s_8H(this.settings, 11)
            ? (d + this.settings.Da) % 5
            : s_Zoe(this);
        var e = s_8H(this.settings, 11) ? a < this.oa.ka.length / 2 : !0;
        s__oe(this.wa, b, {
          Gb: b,
          Lo: !1,
          Ija: d,
          qL: !1,
          xh: e,
        });
        if (s_8H(this.settings, 7)) {
          var f = s_cI(this.ka, b);
          s__oe(this.wa, f, {
            Gb: f,
            Lo: !1,
            qL: !1,
            xh: e,
          });
        }
        this.keys.push({
          Gb: c,
          Rra: b.clone(),
          Cx: 0,
          type: d,
          Lo: !1,
          xh: e,
        });
      }
      this.oa.clear();
    }
  };
  var s_Zoe = function (a) {
    var b = new Set([0, 1, 2, 3, 4]);
    a = s_g(a.keys);
    for (var c = a.next(); !c.done; c = a.next()) b.delete(c.value.type);
    return 0 < b.size ? Array.from(b)[Math.floor(Math.random() * b.size)] : 0;
  };
  s_Yoe.prototype.update = function () {
    for (var a = s_g(this.keys), b = a.next(); !b.done; b = a.next())
      (b = b.value), b.Lo || (b.Cx = (b.Cx + 1) % 6);
  };
  var s_1oe = function (a) {
      for (var b = 0; b < a.keys.length; b++) {
        var c = a.keys[b];
        if (
          c.xh &&
          (a.Aa.ka[0].equals(c.Gb) ||
            (s_8H(a.settings, 7) && s_bI(a.Aa, 0).equals(c.Gb)))
        ) {
          s_0oe(a, c, b);
          break;
        }
      }
      a.keys.sort(function (d, e) {
        return d.Gb.y - e.Gb.y;
      });
    },
    s_0oe = function (a, b, c) {
      s_iI.Qhd.play();
      s_2oe(a.wa, b.Rra);
      s_8H(a.settings, 7) && s_2oe(a.wa, s_cI(a.ka, b.Rra));
      if (s_8H(a.settings, 9)) {
        var d = {
          Gb: b.Rra.clone(),
          prev: null,
          Lo: !1,
          Ija: b.type,
          xh: !0,
        };
        a.Da.oa.add(d);
      } else s_8ne(a.oa, b.Rra, b.type, !0);
      a.Ba.Pq.push({
        Gb: new s_Ug(b.Rra.x * a.ka.oa, b.Rra.y * a.ka.oa),
        wd: new s_Ug(20 * Math.random() - 10, -20 * Math.random()),
        angle: 0,
        tE: 20 * Math.random() - 10,
        size: 1,
        Xz: b.type,
        type: 0,
      });
      s_8H(a.settings, 7) &&
        ((d = s_cI(a.ka, b.Rra)),
        a.Ba.Pq.push({
          Gb: new s_Ug(d.x * a.ka.oa, d.y * a.ka.oa),
          wd: new s_Ug(20 * Math.random() - 10, -20 * Math.random()),
          angle: 0,
          tE: 20 * Math.random() - 10,
          size: 1,
          Xz: -1,
          type: 0,
        }));
      s_8H(a.settings, 3) ||
        a.Aa.La.push({
          m6: 0,
          f$b: a.Aa.ka.length + 1,
          s4a: !a.Aa.ka[0].equals(b.Gb),
        });
      a.keys.splice(c, 1);
    },
    s_3oe = function (a, b, c, d) {
      b =
        21 !== a.settings.Da || s_8H(a.settings, 11)
          ? a.oa.ka[b].Ija
          : s_Zoe(a);
      s__oe(a.wa, d, {
        Gb: d,
        Lo: !0,
        Ija: b,
        qL: !1,
        xh: !0,
      });
      if (s_8H(a.settings, 7)) {
        var e = s_cI(a.ka, d);
        s__oe(a.wa, e, {
          Gb: e,
          Lo: !1,
          qL: !1,
          xh: !0,
        });
      }
      a.keys.push({
        Gb: c.clone(),
        Rra: d.clone(),
        Cx: 0,
        type: b,
        Lo: !0,
        xh: !0,
      });
    };
  s_Yoe.prototype.refresh = function () {
    for (var a = s_g(this.keys), b = a.next(); !b.done; b = a.next())
      b.value.Lo = !1;
  };
  s_Yoe.prototype.sA = function () {
    for (var a = s_g(this.keys), b = a.next(); !b.done; b = a.next())
      (b = b.value), (b.xh = !b.xh);
  };
  var s_4oe = {
      uHa: new s_bH(
        assetsPath,
        "minesweeper_audio",
        {
          MINE_1: 0,
          MINE_2: 73,
          MINE_3: 142,
          MINE_4: 209,
          MINE_5: 272,
          PLANT_FLAG: 357,
        },
        385,
      ),
    },
    s_5oe = {
      UCb: new s_aH(s_4oe.uHa, "MINE_1", 864),
      VCb: new s_aH(s_4oe.uHa, "MINE_2", 816),
      WCb: new s_aH(s_4oe.uHa, "MINE_3", 792),
      XCb: new s_aH(s_4oe.uHa, "MINE_4", 744),
      YCb: new s_aH(s_4oe.uHa, "MINE_5", 1008),
      DUa: new s_aH(s_4oe.uHa, "PLANT_FLAG", 432),
    },
    s_6oe = function () {
      s_$G.call(this, s_4oe, s_5oe);
    };
  s_r(s_6oe, s_$G);
  var s_7oe = function (a, b, c, d, e, f) {
    this.settings = a;
    this.ka = b;
    this.Da = c;
    this.La = d;
    this.Ga = e;
    this.Ba = f;
    this.oa = new Set();
    this.wa = new Set();
    this.Aa = new Set();
  };
  s_7oe.prototype.reset = function () {
    this.oa = new Set();
    this.wa = new Set();
    this.Aa = new Set();
  };
  var s_ape = function (a, b, c, d) {
      for (var e = s_g(a.oa), f = e.next(); !f.done; f = e.next()) {
        var g = a;
        f = f.value;
        var k = b,
          h = c,
          l = d,
          m = !1;
        0 < f.koa && --f.koa;
        if (0 === f.koa || 0 !== s_8oe(g, f, 0)) {
          m = !0;
          g.oa.delete(f);
          switch (Math.floor(5 * Math.random())) {
            default:
            case 0:
              s_5oe.UCb.play();
              break;
            case 1:
              s_5oe.VCb.play();
              break;
            case 2:
              s_5oe.WCb.play();
              break;
            case 3:
              s_5oe.XCb.play();
              break;
            case 4:
              s_5oe.YCb.play();
          }
          g.Ga.Pq.push({
            Gb: new s_Ug(f.Gb.x * g.ka.oa, f.Gb.y * g.ka.oa),
            wd: new s_Ug(20 * Math.random() - 10, -20 * Math.random()),
            angle: 0,
            tE: 20 * Math.random() - 10,
            size: 1,
            type: 2,
          });
        }
        if (m && s_8H(g.settings, 9))
          for (var n = s_g(g.Ba.oa), p = n.next(); !p.done; p = n.next())
            (p = p.value),
              p.xh === f.xh && s_9oe(g, p.Gb, f, 1) && s_roe(g.Ba, p);
        p = s_8oe(g, f, 1);
        n = !1;
        0 !== p &&
          (-1 === f.koa
            ? (f.koa = 3)
            : k ||
              !m ||
              1 !== p ||
              s_8H(g.settings, 14) ||
              ((n = !0),
              (k = g),
              s_woe.vzb.play(),
              h(),
              s_$oe(k.Da),
              (k.Da.Ga = 0),
              l()));
        if (m) {
          m = n;
          l = s_Yne[Math.floor(Math.random() * s_Yne.length)];
          n = g.Ga;
          h = f.Gb;
          for (k = 0; 10 > k; k++) {
            p = new s_Ug(
              h.x * n.ka.oa + Math.random() * n.ka.oa,
              h.y * n.ka.oa + Math.random() * n.ka.oa,
            );
            var q = new s_Ug(20 * Math.random() - 10, -35 * Math.random());
            var r = 0.2 * Math.random();
            r = s_PE(s_SE(s_QE(l), r));
            p = {
              Gb: p,
              wd: q,
              color: r,
              size: 2 + 2 * Math.random(),
              midpoint: 0,
            };
            -15 < p.wd.y && (p.wd.y = -15);
            5 > Math.abs(p.wd.x) && (p.wd.x = 5 * (0 < p.wd.x ? 1 : -1));
            p.midpoint = p.Gb.x + 2 * p.wd.x;
            n.oa.add(p);
          }
          g.wa.add({
            Gb: new s_Ug(f.Gb.x * g.ka.oa, f.Gb.y * g.ka.oa),
            ticks: 4,
            jie: l,
            hAd: s_PE(s_SE(s_QE(l), 0.35)),
          });
          m &&
            g.Aa.add({
              Gb: new s_Ug(
                f.Gb.x * g.ka.oa + g.ka.oa / 2,
                f.Gb.y * g.ka.oa + g.ka.oa / 2,
              ),
              ticks: 3,
              color: l,
            });
        }
      }
    },
    s_8oe = function (a, b, c) {
      if (b.xh && s_9oe(a, a.Da.ka[0], b, c)) return 1;
      if (s_8H(a.settings, 6))
        for (var d = s_g(a.La.ka), e = d.next(); !e.done; e = d.next())
          if (((e = e.value), e.xh === b.xh && s_9oe(a, e.Gb, b, c))) return 3;
      if (s_8H(a.settings, 9))
        for (d = s_g(a.Ba.oa), e = d.next(); !e.done; e = d.next())
          if (
            ((e = e.value),
            e.xh === b.xh && null !== e.prev && s_9oe(a, e.Gb, b, c))
          )
            return 7;
      return 0;
    },
    s_9oe = function (a, b, c, d) {
      return s_bpe(a, b, c) <= d ||
        (s_8H(a.settings, 7) && s_bpe(a, s_cI(a.ka, b), c) <= d)
        ? !0
        : !1;
    },
    s_bpe = function (a, b, c) {
      var d = s_0H(b.x, b.y, c.Gb.x, c.Gb.y);
      s_8H(a.settings, 4) &&
        (d = Math.min(
          d,
          s_0H(b.x - a.ka.ka.width, b.y - a.ka.ka.height, c.Gb.x, c.Gb.y),
          s_0H(b.x, b.y - a.ka.ka.height, c.Gb.x, c.Gb.y),
          s_0H(b.x + a.ka.ka.width, b.y - a.ka.ka.height, c.Gb.x, c.Gb.y),
          s_0H(b.x - a.ka.ka.width, b.y, c.Gb.x, c.Gb.y),
          s_0H(b.x + a.ka.ka.width, b.y, c.Gb.x, c.Gb.y),
          s_0H(b.x - a.ka.ka.width, b.y + a.ka.ka.height, c.Gb.x, c.Gb.y),
          s_0H(b.x, b.y + a.ka.ka.height, c.Gb.x, c.Gb.y),
          s_0H(b.x + a.ka.ka.width, b.y + a.ka.ka.height, c.Gb.x, c.Gb.y),
        ));
      return d;
    };
  s_7oe.prototype.sA = function () {
    for (var a = s_g(this.oa), b = a.next(); !b.done; b = a.next())
      (b = b.value), (b.xh = !b.xh);
  };
  var s_cpe = function (a, b, c) {
    this.settings = a;
    this.ka = b;
    this.Aa = c;
    this.wa = new Map();
    this.oa = [];
  };
  s_cpe.prototype.reset = function () {
    this.wa = new Map();
    this.oa = [];
    for (var a = 0; a < this.ka.ka.height; a++) {
      this.oa.push([]);
      for (var b = 0; b < this.ka.ka.width; b++) {
        var c =
          !s_8H(this.settings, 4) &&
          ((0 === b && (1 === a || a === this.ka.ka.height - 2)) ||
            (b === this.ka.ka.width - 1 &&
              (1 === a || a === this.ka.ka.height - 2)) ||
            (0 === a && (1 === b || b === this.ka.ka.width - 2)) ||
            (a === this.ka.ka.height - 1 &&
              (1 === b || b === this.ka.ka.width - 2)));
        this.oa[a].push(c ? 1 : 0);
      }
    }
    s_8H(this.settings, 7) &&
      s_goe(this.ka) &&
      ((a = new s_Ug(
        Math.floor(this.ka.ka.width / 2),
        Math.floor(this.ka.ka.height / 2),
      )),
      s__oe(this, a, {
        Gb: a,
        Lo: !1,
        qL: !0,
        xh: !0,
      }));
  };
  var s_dpe = function (a, b) {
      for (var c = 0; c < a.ka.ka.width; c++)
        for (var d = 0; d < a.ka.ka.height; d++)
          0 < a.oa[d][c] && b.add((c << 16) | d);
      c = [];
      for (d = 0; d < a.ka.ka.width; d++)
        for (var e = 0; e < a.ka.ka.height; e++)
          3 >= s_eoe(a.ka, a.Aa.ka[0], new s_Ug(d, e)) ||
            (s_8H(a.settings, 7) &&
              3 >= s_eoe(a.ka, s_bI(a.Aa, 0), new s_Ug(d, e))) ||
            b.has((d << 16) | e) ||
            c.push(new s_Ug(d, e));
      return 0 < c.length ? c[Math.floor(Math.random() * c.length)] : null;
    },
    s__oe = function (a, b, c) {
      a.wa.set(s__H(b), c);
      a.oa[b.y][b.x]++;
    },
    s_2oe = function (a, b) {
      a.wa.delete(s__H(b));
      a.oa[b.y][b.x]--;
    },
    s_epe = function (a, b) {
      s__oe(a, b, {
        Gb: b,
        Lo: !0,
        qL: !1,
        xh: !s_8H(a.settings, 11),
      });
      var c = [
        new s_Ug(b.x - 1, b.y - 1),
        new s_Ug(b.x, b.y - 1),
        new s_Ug(b.x + 1, b.y - 1),
        new s_Ug(b.x - 1, b.y),
        new s_Ug(b.x + 1, b.y),
        new s_Ug(b.x - 1, b.y + 1),
        new s_Ug(b.x, b.y + 1),
        new s_Ug(b.x + 1, b.y + 1),
      ];
      if (s_8H(a.settings, 4))
        for (var d = s_g(c), e = d.next(); !e.done; e = d.next())
          s_gI(a.ka, e.value);
      c = s_g(c);
      for (e = c.next(); !e.done; e = c.next())
        (e = e.value), a.ka.y8(e) && a.oa[e.y][e.x]++;
      if (!s_8H(a.settings, 4)) {
        e = a.ka.ka;
        if (0 === b.x || b.x === e.width - 1)
          0 <= b.y - 2 && a.oa[b.y - 2][b.x]++,
            b.y + 2 <= e.height - 1 && a.oa[b.y + 2][b.x]++;
        if (0 === b.y || b.y === e.height - 1)
          0 <= b.x - 2 && a.oa[b.y][b.x - 2]++,
            b.x + 2 <= e.width - 1 && a.oa[b.y][b.x + 2]++;
        if ((0 === b.x && 2 === b.y) || (2 === b.x && 0 === b.y))
          a.oa[2][0]++, a.oa[0][2]++;
        if (
          (b.x === e.width - 3 && 0 === b.y) ||
          (b.x === e.width - 1 && 2 === b.y)
        )
          a.oa[0][e.width - 3]++, a.oa[2][e.width - 1]++;
        if (
          (0 === b.x && b.y === e.height - 3) ||
          (2 === b.x && b.y === e.height - 1)
        )
          a.oa[e.height - 3][0]++, a.oa[e.height - 1][2]++;
        if (
          (b.x === e.width - 3 && b.y === e.height - 1) ||
          (b.x === e.width - 1 && b.y === e.height - 3)
        )
          a.oa[e.height - 3][e.width - 1]++, a.oa[e.height - 1][e.width - 3]++;
      }
    };
  s_cpe.prototype.refresh = function () {
    for (var a = s_g(this.wa.values()), b = a.next(); !b.done; b = a.next())
      b.value.Lo = !1;
  };
  s_cpe.prototype.sA = function () {
    for (var a = s_g(this.wa.values()), b = a.next(); !b.done; b = a.next())
      (b = b.value), b.qL || (b.xh = !b.xh);
  };
  var s_fpe = function (a, b) {
    this.settings = a;
    this.ka = b;
    this.wa = 0;
    this.Pq = [];
    this.oa = new Set();
  };
  s_fpe.prototype.reset = function () {
    this.Pq = [];
    this.oa = new Set();
  };
  var s_gpe = {
      CHa: new s_bH(
        assetsPath,
        "poison_audio",
        {
          BURP: 0,
          DIZZY_1: 27,
          DIZZY_2: 42,
          DIZZY_3: 57,
          DIZZY_4: 72,
          SQUISH: 87,
        },
        418,
      ),
    },
    s_hpe = {
      Y6c: new s_aH(s_gpe.CHa, "BURP", 339.592),
      j8c: new s_aH(s_gpe.CHa, "DIZZY_1", 182.857),
      k8c: new s_aH(s_gpe.CHa, "DIZZY_2", 182.857),
      l8c: new s_aH(s_gpe.CHa, "DIZZY_3", 182.857),
      m8c: new s_aH(s_gpe.CHa, "DIZZY_4", 182.857),
      Ykc: new s_aH(s_gpe.CHa, "SQUISH", 470.204),
    },
    s_ipe = function () {
      s_$G.call(this, s_gpe, s_hpe);
    };
  s_r(s_ipe, s_$G);
  var s_jpe = function (a, b, c, d) {
    this.settings = a;
    this.wa = b;
    this.ka = c;
    this.Da = d;
    this.oa = [];
    this.Aa = [];
    this.Ba = 0;
  };
  s_jpe.prototype.reset = function () {
    this.oa = [];
    this.Aa = [];
  };
  s_jpe.prototype.update = function () {
    this.Aa = [];
    for (var a = 0; a < this.oa.length; a++) {
      var b = this.oa[a];
      b.Vja
        ? (this.Aa.push(this.oa[a]), this.oa.splice(a, 1), a--)
        : b.Lo || (b.Cx = (b.Cx + 1) % 6);
    }
  };
  var s_kpe = function (a, b, c, d, e, f) {
    b = {
      Gb: b,
      Cx: 0,
      jda: 0,
      Vja: !1,
      oNa: c,
      Lo: !0,
      Nrb: null,
      Ywa: d,
      xh: c || !s_8H(a.settings, 11),
      s4a: f,
    };
    s_8H(a.settings, 5) && s_8H(a.settings, 11) && c && (b.xh = e[1]);
    return b;
  };
  s_jpe.prototype.refresh = function () {
    for (var a = s_g(this.oa), b = a.next(); !b.done; b = a.next())
      b.value.Lo = !1;
  };
  s_jpe.prototype.sA = function () {
    for (var a = s_g(this.oa), b = a.next(); !b.done; b = a.next())
      (b = b.value), (b.xh = !b.xh);
  };
  var s_lpe = function (a, b) {
    this.settings = a;
    this.oa = b;
    this.ka = [];
    this.nb = new s_Ug(0, 0);
    this.Sc = new s_Ug(0, 0);
    this.Lc = new s_Ug(0, 0);
    this.Xd = 0;
    this.Wm = new s_Ug(0, 0);
    this.Sa = 0;
    this.La = [];
    this.direction = "NONE";
    this.Da = "RIGHT";
    this.Hb = "NONE";
    this.Lb = !1;
    this.Ga = 0;
    this.Cb = new s_Ug();
    this.Vb = this.uc = this.Pb = 0;
    this.Ce = s_3H[0][0];
    this.We = s_3H[0][1];
    this.Oa = {
      t6: 0,
      Gga: 0,
      nQ: 0,
      iG: 0,
      KO: !1,
      Uea: 0,
      ula: 0,
      z4: !1,
    };
    this.Qa = {
      t6: 0,
      Gga: 0,
      nQ: 0,
      iG: 0,
      KO: !1,
      Uea: 0,
      ula: 0,
      z4: !1,
    };
    this.zc = !1;
    this.Db = [];
    this.Ba = "NONE";
    this.Ma = !1;
    this.Yc = new s_Ug(0, 0);
    this.Aa = 0;
    this.Xa = !1;
    this.wa = [];
    this.Ra = [];
  };
  s_lpe.prototype.reset = function () {
    this.Hb = "NONE";
    this.Lb = !1;
    this.direction = "NONE";
    this.Da = "RIGHT";
    this.ka = [];
    this.ka.push(
      new s_Ug(
        Math.floor(this.oa.ka.width / 4),
        Math.floor(this.oa.ka.height / 2),
      ),
    );
    this.ka.push(
      new s_Ug(
        Math.floor(this.oa.ka.width / 4) - 1,
        Math.floor(this.oa.ka.height / 2),
      ),
    );
    this.ka.push(
      new s_Ug(
        Math.floor(this.oa.ka.width / 4) - 2,
        Math.floor(this.oa.ka.height / 2),
      ),
    );
    this.ka.push(
      new s_Ug(
        Math.floor(this.oa.ka.width / 4) - 3,
        Math.floor(this.oa.ka.height / 2),
      ),
    );
    if (0 > this.ka[this.ka.length - 1].x)
      for (
        var a = this.ka[this.ka.length - 1].x, b = s_g(this.ka), c = b.next();
        !c.done;
        c = b.next()
      )
        c.value.x -= a;
    if (s_if && s_8H(this.settings, 7) && 1 === this.settings.Aa)
      for (a = s_g(this.ka), c = a.next(); !c.done; c = a.next())
        c.value.y = Math.floor(this.oa.ka.height / 5);
    if (
      !s_if &&
      s_8H(this.settings, 3) &&
      ((c = this.ka[0]), 0 === (c.x + c.y) % 2)
    )
      for (a = s_g(this.ka), c = a.next(); !c.done; c = a.next()) --c.value.x;
    this.wa = [];
    this.Ra = [];
    for (c = 0; c < this.ka.length; c++) this.wa.push(!0), this.Ra.push(1);
    this.nb = this.ka[2];
    this.Sc = this.ka[2];
    this.Lc = this.ka[0];
    this.Xd = 0;
    this.La = [];
    this.Ga = 0;
    this.Sa = s_8H(this.settings, 3) ? 2 : 0;
    this.zc = !1;
    this.Aa = 0;
    this.Xa = !1;
    this.Ba = "NONE";
    this.Ma = !1;
    this.Yc = new s_Ug(0, 0);
    s_mpe(this);
    this.uc = this.Vb = 0;
  };
  var s_$oe = function (a) {
      a.Hb = "NONE";
      a.Lb = !1;
      "NONE" !== a.Ba && ((a.direction = a.Ba), (a.Ba = "NONE"));
    },
    s_npe = function (a, b) {
      a.direction = b;
      a.Lb = !0;
      a.Hb = "NONE";
      a.Ba = "NONE";
      a.zc = !1;
    },
    s_ope = function (a) {
      return "NONE" === a.direction ? a.Da : a.direction;
    },
    s_ppe = function (a) {
      switch (a.direction) {
        case "DOWN":
          s_iI.DOWN.play();
          break;
        case "UP":
          s_iI.UP.play();
          break;
        case "LEFT":
          s_iI.LEFT.play();
          break;
        case "RIGHT":
          s_iI.RIGHT.play();
      }
    },
    s_qpe = function (a, b, c, d, e) {
      e = void 0 === e ? !1 : e;
      0 === b.t6
        ? Math.random() < b.Gga || 1 === a.Aa
          ? ((b.t6 = 4), (b.Gga = 0))
          : (b.Gga += 0.005)
        : --b.t6;
      if (0 === c.length + (s_8H(a.settings, 8) ? d.length : 0)) b.KO = !1;
      else {
        var f = s_Loe(a, c, e, s_$H(a.settings)),
          g = e ? s_bI(a, 0) : a.ka[0];
        if (s_8H(a.settings, 6)) b.KO = 3 > s_Vg(g, f);
        else {
          var k = e ? s_One(a.direction) : a.direction;
          b.KO =
            3 > s_Vg(g, f) &&
            !("RIGHT" === k && g.x > f.x) &&
            !("LEFT" === k && g.x < f.x) &&
            !("UP" === k && g.y < f.y) &&
            !("DOWN" === k && g.y > f.y);
        }
        0 < d.length &&
          !b.KO &&
          ((a = s_Loe(a, d, e, s_8H(a.settings, 7))), (b.KO = 3 > s_Vg(g, a)));
      }
      0 === b.Uea
        ? Math.random() < b.ula
          ? ((b.Uea = 7), (b.ula = 0))
          : ((b.ula += 0.0012),
            c.some(function (h) {
              return h.Lo;
            }) && (b.ula += 0.0036))
        : b.KO || 0 !== b.iG
          ? (b.Uea = 0)
          : --b.Uea;
    },
    s_Loe = function (a, b, c, d) {
      if (0 === a.ka.length) return new s_Ug(0, 0);
      c = c ? s_bI(a, 0) : a.ka[0];
      for (
        var e = Infinity,
          f = new s_Ug(Infinity, Infinity),
          g = s_g(b),
          k = g.next();
        !k.done;
        k = g.next()
      )
        if (((k = k.value), k.xh)) {
          var h = s_Vg(k.Gb, c);
          h < e && ((e = h), (f = k.Gb));
        }
      if (d)
        for (b = s_g(b), k = b.next(); !k.done; k = b.next())
          (d = k.value),
            d.xh &&
              ((d = s_cI(a.oa, d.Gb)),
              (g = s_Vg(d, c)),
              g < e && ((e = g), (f = d)));
      if (s_8H(a.settings, 4))
        for (a = s_g(a.Db), b = a.next(); !b.done; b = a.next())
          (b = b.value), (d = s_Vg(b, c)), d < e && ((e = d), (f = b));
      return f;
    },
    s_rpe = function (a) {
      "NONE" !== a.direction && ((a.Da = a.direction), (a.direction = "NONE"));
    },
    s_mpe = function (a) {
      a.Oa.t6 = 0;
      a.Oa.Gga = 0;
      a.Oa.KO = !1;
      a.Oa.nQ = 0;
      a.Oa.z4 = !1;
      a.Oa.iG = 0;
      a.Oa.Uea = 0;
      a.Oa.ula = 0;
      a.Qa.t6 = 0;
      a.Qa.Gga = 0;
      a.Qa.KO = !1;
      a.Qa.nQ = Math.PI;
      a.Qa.z4 = !1;
      a.Qa.iG = 0;
      a.Qa.Uea = 0;
      a.Qa.ula = 0;
    },
    s_spe = function (a) {
      return s_8H(a.settings, 2) && a.zc;
    },
    s_bI = function (a, b) {
      return 0 > b || b >= a.ka.length ? new s_Ug(-1, -1) : s_cI(a.oa, a.ka[b]);
    },
    s_upe = function (a, b, c, d) {
      a.Db = [];
      b = s_g(b);
      for (var e = b.next(); !e.done; e = b.next())
        (e = e.value),
          e.xh &&
            (s_tpe(a, e.Gb), s_$H(a.settings) && s_tpe(a, s_cI(a.oa, e.Gb)));
      c = s_g(c);
      for (b = c.next(); !b.done; b = c.next())
        (b = b.value),
          b.xh &&
            (s_tpe(a, b.Gb), s_8H(a.settings, 7) && s_tpe(a, s_cI(a.oa, b.Gb)));
      d = s_g(d);
      for (c = d.next(); !c.done; c = d.next())
        (c = c.value),
          c.xh &&
            (s_tpe(a, c.Gb), s_8H(a.settings, 7) && s_tpe(a, s_cI(a.oa, c.Gb)));
    },
    s_tpe = function (a, b) {
      var c = a.oa.ka.width,
        d = a.oa.ka.height;
      a.Db.push(new s_Ug(b.x - c, b.y - d));
      a.Db.push(new s_Ug(b.x, b.y - d));
      a.Db.push(new s_Ug(b.x + c, b.y - d));
      a.Db.push(new s_Ug(b.x - c, b.y));
      a.Db.push(new s_Ug(b.x + c, b.y));
      a.Db.push(new s_Ug(b.x - c, b.y + d));
      a.Db.push(new s_Ug(b.x, b.y + d));
      a.Db.push(new s_Ug(b.x + c, b.y + d));
    },
    s_vpe = function (a) {
      a.ka = a.ka.reverse();
      s_8H(a.settings, 11) && a.wa.reverse();
      s_8H(a.settings, 13) && a.Ra.reverse();
      a.direction = "NONE";
      var b = a.ka[0].x - a.ka[1].x,
        c = a.ka[0].y - a.ka[1].y;
      s_kI(a.settings) &&
        (1 < b ? (b = -1) : -1 > b && (b = 1),
        1 < c ? (c = -1) : -1 > c && (c = 1),
        a.oa.y8(a.ka[0]) || (a.ka[0] = s_doe(a.oa, a.ka[0])));
      1 === b
        ? (a.Da = "RIGHT")
        : -1 === b
          ? (a.Da = "LEFT")
          : 1 === c
            ? (a.Da = "DOWN")
            : -1 === c && (a.Da = "UP");
      a.Ba = a.Da;
      a.Hb = "NONE";
      a.nb = a.ka[a.ka.length - 1];
      a.Sc = a.nb;
      a.Lc = a.ka[0];
      (s_8H(a.settings, 10) && 0 !== a.Aa) || s_mpe(a);
      a.Lb = !1;
      a.Ma = !0;
    },
    s_zoe = function (a) {
      return a.Ma || "NONE" !== a.Ba;
    },
    s_wpe = function (a) {
      a.Ma = !1;
      "NONE" !== a.Ba && ((a.direction = a.Ba), (a.Ba = "NONE"));
    };
  s_lpe.prototype.sA = function () {
    for (var a = 0; a < this.wa.length; a++) this.wa[a] = !this.wa[a];
  };
  var s_xpe = {
      clc: new s_bH(
        assetsPath,
        "statues_audio",
        {
          CRUMBLE: 0,
          STATUE: 69,
        },
        418,
      ),
    },
    s_ype = {
      pzb: new s_aH(s_xpe.clc, "CRUMBLE", 888.163),
      blc: new s_aH(s_xpe.clc, "STATUE", 522.449),
    },
    s_zpe = function () {
      s_$G.call(this, s_xpe, s_ype);
    };
  s_r(s_zpe, s_$G);
  var s_Ape = function (a, b, c, d, e) {
    this.settings = a;
    this.ka = b;
    this.wa = c;
    this.Ga = d;
    this.Ba = e;
    this.oa = new Map();
    this.Da = new Set();
    this.Aa = 0;
  };
  s_Ape.prototype.reset = function () {
    this.oa.clear();
    this.Da.clear();
    this.Aa = 0;
  };
  var s_Bpe = function (a, b) {
      var c = a.oa.get(b);
      a.oa.delete(b);
      s_2oe(a.Ba, c.Gb);
      a.Ga.Pq.push({
        Gb: new s_Ug(c.Gb.x * a.ka.oa, c.Gb.y * a.ka.oa),
        wd: new s_Ug(16 * Math.random() - 8, -15 * Math.random()),
        angle: (180 * c.aC.angle) / Math.PI,
        tE: 20 * Math.random() - 10,
        size: 1,
        Xz: -1,
        type: 4,
        aC: c.aC,
      });
    },
    s_Cpe = function (a, b, c) {
      for (var d = s_g(a.oa.keys()), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        var f = a.oa.get(e);
        s_eoe(a.ka, b, f.Gb) <= c &&
          (s_Bpe(a, e),
          s_8H(a.settings, 7) && f.aC && -1 !== f.aC.t4a && s_Bpe(a, f.aC.t4a));
      }
    },
    s_Epe = function (a, b) {
      return s_Dpe(a, b.x, b.y);
    },
    s_Dpe = function (a, b, c) {
      b = (b << 16) | c;
      return ((c = a.oa.get(b)) && c.aC && !c.aC.xJa) ||
        (void 0 === c && s_8H(a.settings, 1) && a.Ba.wa.get(b))
        ? !0
        : !1;
    },
    s_lI = function (a, b, c, d, e) {
      if (!(0 > c || 0 > d || c >= a.ka.ka.width || d >= a.ka.ka.height)) {
        var f = b[d][c],
          g = !e || 1 >= f.oCa;
        (f.OHc && g) ||
          ((f.OHc = !0),
          e && 1 < f.oCa && --f.oCa,
          1 === f.oCa &&
            (s_kI(a.settings)
              ? ((e = s_gI(a.ka, new s_Ug(c - 1, d))),
                s_lI(a, b, e.x, e.y, !0),
                (e = s_gI(a.ka, new s_Ug(c + 1, d))),
                s_lI(a, b, e.x, e.y, !0),
                (e = s_gI(a.ka, new s_Ug(c, d - 1))),
                s_lI(a, b, e.x, e.y, !0),
                (c = s_gI(a.ka, new s_Ug(c, d + 1))),
                s_lI(a, b, c.x, c.y, !0))
              : (s_lI(a, b, c - 1, d, !0),
                s_lI(a, b, c + 1, d, !0),
                s_lI(a, b, c, d - 1, !0),
                s_lI(a, b, c, d + 1, !0))));
      }
    },
    s_mI = function (a, b, c) {
      if (a.ka.y8(c) && !a.oa.get(s__H(c))) {
        var d = b[c.y][c.x];
        d.nxc ||
          ((d.nxc = !0),
          1 <= d.oCa &&
            ((d.fmc = !0),
            a.Aa++,
            s_kI(a.settings)
              ? (s_mI(a, b, s_gI(a.ka, new s_Ug(c.x - 1, c.y))),
                s_mI(a, b, s_gI(a.ka, new s_Ug(c.x + 1, c.y))),
                s_mI(a, b, s_gI(a.ka, new s_Ug(c.x, c.y - 1))),
                s_mI(a, b, s_gI(a.ka, new s_Ug(c.x, c.y + 1))))
              : (s_mI(a, b, new s_Ug(c.x - 1, c.y)),
                s_mI(a, b, new s_Ug(c.x + 1, c.y)),
                s_mI(a, b, new s_Ug(c.x, c.y - 1)),
                s_mI(a, b, new s_Ug(c.x, c.y + 1)))));
      }
    };
  var s_Fpe = function (a, b, c) {
    this.settings = a;
    this.menu = b;
    this.header = c;
    this.ticks = this.Xa = 0;
    this.Sa = s_Qne;
    this.Mg = 0;
    this.Qa = new Map();
    this.ik = !1;
    this.Cb = -1;
    this.zc = this.nb = !1;
    this.uc = 1;
    this.Hb = null;
    this.Pb = 0;
    this.Db = !1;
    this.Lb = [];
    this.La = !1;
    this.ka = new s_coe(this.settings, this.Vb.bind(this));
    this.Oa = new s_fpe(this.settings, this.ka);
    this.oa = new s_lpe(this.settings, this.ka);
    this.wa = new s_1ne(this.settings, this.ka, this.oa, this.Oa);
    this.Da = new s_cpe(this.settings, this.ka, this.oa);
    this.Ma = new s_jpe(this.settings, this.ka, this.oa, this.wa);
    this.Aa = new s_ooe(this.settings, this.ka, this.oa, this.wa, this.Oa);
    this.Ba = new s_Yoe(
      this.settings,
      this.ka,
      this.oa,
      this.wa,
      this.Oa,
      this.Da,
      this.Aa,
    );
    this.Ga = new s_7oe(
      this.settings,
      this.ka,
      this.oa,
      this.wa,
      this.Oa,
      this.Aa,
    );
    this.Ra = new s_Ape(this.settings, this.ka, this.oa, this.Oa, this.Da);
  };
  s_ = s_Fpe.prototype;
  s_.reset = function () {
    this.Hb = null;
    this.Oa.reset();
    this.ka.reset();
    this.oa.reset();
    this.Da.reset();
    this.Ma.reset();
    this.Ga.reset();
    this.Ra.reset();
    this.wa.reset();
    this.La = !1;
    var a = s_8H(this.settings, 11) && !s_8H(this.settings, 2);
    (s_8H(this.settings, 8) || s_8H(this.settings, 9) || a) &&
      this.wa.shuffle(a);
    this.Ba.reset();
    this.Aa.reset();
    if (s_8H(this.settings, 8) && s_8H(this.settings, 9)) {
      a = s_g(this.Ba.keys);
      for (var b = a.next(); !b.done; b = a.next())
        s_poe(this.Aa, b.value.Gb.clone(), this.Ba.keys.length);
    }
    if (s_8H(this.settings, 10))
      for (a = this.wa, b = 0; b + 1 < a.ka.length; b += 2) {
        var c = 0.5 > Math.random();
        a.ka[b].KX = c;
        a.ka[b + 1].KX = !c;
      }
    this.ik = !1;
    this.Cb = -1;
    this.zc = this.nb = !1;
    this.ticks = this.Pb = this.Mg = 0;
    a: switch (this.settings.Oa) {
      case 1:
        a = 0.66;
        break a;
      case 2:
        a = 1.33;
        break a;
      default:
        a = 1;
    }
    this.Sa = s_Qne * a;
    this.Db = !1;
    s_8H(this.settings, 4) &&
      (s_upe(this.oa, this.wa.ka, this.Ba.keys, this.Aa.oa),
      (a = this.ka.ka.width * this.ka.oa),
      (b = this.ka.ka.height * this.ka.oa),
      (this.Lb = [
        new s_Ug(-a, -b),
        new s_Ug(0, -b),
        new s_Ug(a, -b),
        new s_Ug(-a, 0),
        new s_Ug(a, 0),
        new s_Ug(-a, b),
        new s_Ug(0, b),
        new s_Ug(a, b),
      ]));
    a = this.oa;
    b = this.wa.ka;
    s_8H(a.settings, 7) &&
      0 < b.length &&
      (a.ka[0].x === b[0].Gb.x - 1 ||
        (s_8H(a.settings, 6) && 0 === a.settings.Aa)) &&
      ((a.Oa.KO = !0), s_$H(a.settings) && (a.Qa.KO = !0));
  };
  s_.update = function (a) {
    for (
      var b = this.Oa,
        c =
          0.0175 *
          (a - b.wa) *
          (0 === b.settings.Oa ? 1 : 1 === b.settings.Oa ? 1.33 : 0.66),
        d = 0;
      d < b.Pq.length;
      d++
    ) {
      var e = b.Pq[d];
      1 !== e.type &&
        ((e.wd.y += 4 * c),
        (e.Gb.x += e.wd.x * c),
        (e.Gb.y += e.wd.y * c),
        (e.angle += e.tE * c));
      var f = 0.025;
      1 === e.type
        ? (f = 0.5)
        : 4 === e.type
          ? (f = 0.065)
          : s_8H(b.settings, 4) && (f = 0.05);
      e.size = Math.max(0, e.size - c * f);
      s_8H(b.settings, 4) &&
        ((f = b.ka.ka.height * b.ka.oa),
        e.Gb.y > f && (e.Gb.y -= f),
        (f = b.ka.ka.width * b.ka.oa),
        0 > e.Gb.x ? (e.Gb.x += f) : e.Gb.x > f && (e.Gb.x -= f));
      0 >= e.size && (b.Pq.splice(d, 1), d--);
    }
    c *= 0.55;
    d = s_g(b.oa);
    for (e = d.next(); !e.done; e = d.next())
      (e = e.value),
        0 > e.wd.y
          ? (e.wd.y += 4 * c)
          : ((e.wd.x += 1.2 * c * (e.Gb.x < e.midpoint ? 1 : -1)),
            (e.wd.y = 0.5 * Math.abs(e.wd.x))),
        (e.Gb.x += e.wd.x * c),
        (e.Gb.y += e.wd.y * c),
        (e.size = Math.max(0, e.size - 0.1 * c)),
        s_8H(b.settings, 4) &&
          ((f = b.ka.ka.height * b.ka.oa),
          0 > e.Gb.y ? (e.Gb.y += f) : e.Gb.y > f && (e.Gb.y -= f),
          (f = b.ka.ka.width * b.ka.oa),
          0 > e.Gb.x
            ? ((e.Gb.x += f), (e.midpoint += f))
            : e.Gb.x > f && ((e.Gb.x -= f), (e.midpoint -= f))),
        0 >= e.size && b.oa.delete(e);
    b.wa = a;
    b = !1;
    if ("NONE" !== this.oa.direction || s_zoe(this.oa))
      for (; a - this.Xa >= this.Sa; )
        (this.Xa += this.Sa), this.ticks++, this.tick(), (b = !0);
    else (this.Xa = a), (b = !0);
    return b;
  };
  s_.tick = function () {
    for (
      var a = this.ik, b = s_g(this.Aa.oa), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a && null !== d.prev && (d.Gb = d.prev);
      d.prev = null;
    }
    var e = this.oa,
      f = this.ik;
    0 < e.Aa &&
      (e.Aa--,
      (e.Xa = !1),
      0 < e.Aa &&
        ((e.Oa.t6 = 0), (e.Oa.Gga = 0), (e.Qa.t6 = 0), (e.Qa.Gga = 0)),
      0 !== e.Aa || f || s_hpe.Y6c.play());
    for (var g = this.Ga, k = s_g(g.oa), h = k.next(); !h.done; h = k.next())
      h.value.Cx += 1;
    for (var l = s_g(g.wa), m = l.next(); !m.done; m = l.next()) {
      var n = m.value;
      --n.ticks;
      0 >= n.ticks && g.wa.delete(n);
    }
    for (var p = s_g(g.Aa), q = p.next(); !q.done; q = p.next()) {
      var r = q.value;
      --r.ticks;
      0 >= r.ticks && g.Aa.delete(r);
    }
    this.La = this.Db = !1;
    if (this.ik || this.nb) {
      var t = this.oa,
        u = this.sA.bind(this);
      if (3 === t.Ga) t.Ga = 2;
      else if (2 === t.Ga) {
        t.Ga = 1;
        t.ka.shift();
        null !== t.nb && t.ka.push(t.nb);
        s_8H(t.settings, 11) &&
          (t.wa.shift(),
          t.ka.length > t.wa.length && t.wa.push(t.wa[t.wa.length - 1]),
          t.wa[0] || u());
        s_hoe(t.oa);
        t.nb = t.Sc;
        var v = t.ka[0].x - t.ka[1].x,
          w = t.ka[0].y - t.ka[1].y;
        s_kI(t.settings) &&
          (1 < v ? (v = -1) : -1 > v && (v = 1),
          1 < w ? (w = -1) : -1 > w && (w = 1));
        0 < v
          ? (t.direction = "RIGHT")
          : 0 > v
            ? (t.direction = "LEFT")
            : 0 < w
              ? (t.direction = "DOWN")
              : 0 > w && (t.direction = "UP");
        t.Da = t.direction;
      } else 1 === t.Ga && (t.Ga = 0);
      0 < t.Vb ? t.Vb-- : (t.Vb = 8);
      0 < t.uc && --t.uc;
      if (0 < this.oa.Ga) {
        for (
          var x = this.Ra, y = x.oa.size, z = x.wa.ka, A = 0;
          A < z.length;
          A++
        )
          s_Cpe(x, z[A], 0), (x.wa.Ra[A] = 1);
        y !== x.oa.size && s_ype.pzb.play();
      }
    } else
      a: {
        if (s_8H(this.settings, 9) || s_8H(this.settings, 10)) {
          var C = this.ka;
          if (C.wa.length === C.ka.height && C.wa[0].length === C.ka.width) {
            for (var B = this.ka, D = 0; D < B.ka.height; D++)
              for (var E = 0; E < B.ka.width; E++) B.wa[D][E] = 0;
            for (var G = this.oa, F = 0; F < G.ka.length - 1; F++) {
              var H = G.ka[F];
              if (
                !(
                  (s_8H(G.settings, 3) && 0 === (H.x + H.y) % 2) ||
                  (s_8H(G.settings, 11) && !G.wa[F]) ||
                  0 !== H.x % 1 ||
                  0 !== H.y % 1 ||
                  0 > H.y ||
                  H.y >= G.oa.wa.length ||
                  0 > H.x ||
                  H.x >= G.oa.wa[0].length
                ) &&
                ((G.oa.wa[H.y][H.x] = 1), s_8H(G.settings, 7))
              ) {
                var I = s_bI(G, F);
                G.oa.wa[I.y][I.x] = 1;
              }
            }
            for (
              var J = this.wa, L = [], M = s_g(J.ka), O = M.next();
              !O.done;
              O = M.next()
            ) {
              var P = O.value;
              if (P.xh)
                if (s_8H(J.settings, 6)) {
                  var V = new s_Ug(
                      Math.floor(P.Gb.x + P.wd.x),
                      Math.floor(P.Gb.y + P.wd.y),
                    ),
                    T = new s_Ug(
                      Math.ceil(P.Gb.x + P.wd.x),
                      Math.ceil(P.Gb.y + P.wd.y),
                    );
                  0 <= T.y &&
                    T.y < J.oa.ka.height &&
                    (0 <= T.x && T.x < J.oa.ka.width && L.push(T),
                    0 <= V.x &&
                      V.x < J.oa.ka.width &&
                      L.push(new s_Ug(V.x, T.y)));
                  0 <= V.y &&
                    V.y < J.oa.ka.height &&
                    (0 <= T.x &&
                      T.x < J.oa.ka.width &&
                      L.push(new s_Ug(T.x, V.y)),
                    0 <= V.x && V.x < J.oa.ka.width && L.push(V));
                } else L.push(P.Gb.clone());
            }
            for (var K = s_g(L), R = K.next(); !R.done; R = K.next()) {
              var Y = R.value,
                Z = s_8H(J.settings, 6) ? 3 : 2;
              J.oa.wa[Y.y][Y.x] = Z;
              if (s_$H(J.settings)) {
                var fa = s_cI(J.oa, Y);
                J.oa.wa[fa.y][fa.x] = Z;
              }
            }
            for (
              var ia = this.Ba, ba = s_g(ia.keys), ca = ba.next();
              !ca.done;
              ca = ba.next()
            ) {
              var na = ca.value;
              if (
                na.xh &&
                ((ia.ka.wa[na.Gb.y][na.Gb.x] = 6), s_8H(ia.settings, 7))
              ) {
                var U = s_cI(ia.ka, na.Gb);
                ia.ka.wa[U.y][U.x] = 6;
              }
            }
            for (
              var Ga = this.Aa, Aa = s_g(Ga.oa), va = Aa.next();
              !va.done;
              va = Aa.next()
            ) {
              var Ta = va.value;
              if (
                Ta.xh &&
                ((Ga.ka.wa[Ta.Gb.y][Ta.Gb.x] = 7), s_8H(Ga.settings, 7))
              ) {
                var Ca = s_cI(Ga.ka, Ta.Gb);
                Ga.ka.wa[Ca.y][Ca.x] = 7;
              }
            }
            for (
              var La = this.Da, gb = s_g(La.wa.values()), bb = gb.next();
              !bb.done;
              bb = gb.next()
            ) {
              var X = bb.value;
              X.xh && !X.qL && X.xh && (La.ka.wa[X.Gb.y][X.Gb.x] = 5);
            }
            for (
              var ja = this.Ga, qa = s_g(ja.oa), Pa = qa.next();
              !Pa.done;
              Pa = qa.next()
            ) {
              var la = Pa.value;
              la.xh && (ja.ka.wa[la.Gb.y][la.Gb.x] = 9);
            }
          }
        }
        this.wa.update();
        this.Ba.update();
        this.Ma.update();
        this.khb();
        if (s_zoe(this.oa)) {
          var ea = this.oa;
          ea.Ma
            ? ((ea.Ma = !1),
              "NONE" !== ea.Ba ||
                s_8H(ea.settings, 2) ||
                ((("LEFT" === ea.direction && "DOWN" !== ea.Da) ||
                  ("DOWN" === ea.direction && "LEFT" === ea.Da) ||
                  ("UP" === ea.direction && "RIGHT" !== ea.Da) ||
                  ("RIGHT" === ea.direction && "UP" === ea.Da)) &&
                  s_hoe(ea.oa)))
            : ((ea.direction = ea.Ba),
              (ea.Ba = "NONE"),
              s_8H(ea.settings, 2) ||
                (("LEFT" === ea.direction || "UP" === ea.direction) &&
                  s_hoe(ea.oa)));
          s_8H(this.settings, 6) &&
            s_9ne(this.wa, this.Da.wa, this.Ba.keys, this.Aa.oa);
          s_8H(this.settings, 12) &&
            s_ape(this.Ga, this.ik, this.khb.bind(this), this.GAb.bind(this));
        } else {
          var sa = this.oa,
            Ya = this.ytd.bind(this),
            ta = sa.ka[0].clone(),
            ra = s_kI(sa.settings);
          switch (sa.direction) {
            case "LEFT":
              --ta.x;
              ra && 0 > ta.x && (ta.x = sa.oa.ka.width - 1);
              break;
            case "RIGHT":
              ta.x += 1;
              ra && ta.x >= sa.oa.ka.width && (ta.x = 0);
              break;
            case "UP":
              --ta.y;
              ra && 0 > ta.y && (ta.y = sa.oa.ka.height - 1);
              break;
            case "DOWN":
              (ta.y += 1), ra && ta.y >= sa.oa.ka.height && (ta.y = 0);
          }
          if (!s_8H(sa.settings, 14) && Ya(ta)) var Ka = !0;
          else {
            sa.ka.unshift(ta);
            s_8H(sa.settings, 11) && sa.wa.unshift(!0);
            if (s_8H(sa.settings, 13)) {
              sa.Ra.unshift(1);
              for (var Ha = 0; Ha < sa.Ra.length; Ha++)
                0 > sa.Ra[Ha] && (sa.Ra[Ha] = 0);
            }
            Ka = !1;
          }
          if (!Ka) {
            s_hoe(this.ka);
            var oa = this.oa;
            0 === oa.Sa
              ? ((oa.Sc = oa.nb),
                (oa.nb = oa.ka.pop()),
                s_8H(oa.settings, 11) && oa.wa.pop(),
                s_8H(oa.settings, 13) && oa.Ra.pop())
              : (oa.Sa = Math.max(0, oa.Sa - 1));
            this.oa.direction !== this.oa.Da ? this.Pb++ : (this.Pb = 0);
            this.oa.Lb = !1;
            this.oa.Da = this.oa.direction;
            for (var ua = this.oa, Qa = 0; Qa < ua.La.length; Qa++)
              (ua.La[Qa].m6 += 2),
                ua.La[Qa].m6 >= ua.La[Qa].f$b && (ua.La.splice(Qa, 1), Qa--);
            s_8H(this.settings, 8) && s_1oe(this.Ba);
            if (
              s_8H(this.settings, 9) &&
              (s_soe(this.Aa, !1), s_8H(this.settings, 7))
            ) {
              s_soe(this.Aa, !0);
              var ha = this.oa;
              ha.Oa.z4 = ha.Oa.z4 || ha.Qa.z4;
              ha.Qa.z4 = ha.Oa.z4;
            }
            for (
              var Ba = !1, Ea = (this.oa.zc = !1), Fa = 0;
              Fa < this.wa.ka.length;
              Fa++
            ) {
              var xa = this.wa.ka[Fa];
              if (xa.xh) {
                var Ia = !1;
                if (s_8H(this.settings, 6)) {
                  var ya =
                    1 > s_foe(this.ka, this.oa.ka[0], xa.Gb) ||
                    1 > s_foe(this.ka, this.oa.ka[1], xa.Gb);
                  if (s_8H(this.settings, 7)) {
                    var ib = s_bI(this.oa, 1);
                    Ia =
                      1 > s_foe(this.ka, s_bI(this.oa, 0), xa.Gb) ||
                      1 > s_foe(this.ka, ib, xa.Gb);
                  }
                } else
                  (ya = this.oa.ka[0].equals(xa.Gb)),
                    s_8H(this.settings, 7) &&
                      (Ia = s_bI(this.oa, 0).equals(xa.Gb));
                if (ya || Ia) {
                  var cb = xa.KX;
                  Ea ||
                    ((Ea = !0),
                    cb
                      ? s_hpe.Ykc.play()
                      : s_8H(this.settings, 2)
                        ? s_iI.Mjd.play()
                        : s_8H(this.settings, 5)
                          ? s_iI.okd.play()
                          : s_8H(this.settings, 11)
                            ? s_iI.P8c.play()
                            : s_iI.w8c.play());
                  if (s_8H(this.settings, 10)) {
                    b: {
                      var Ua = this.wa,
                        Ra = Fa,
                        tb = this.jyc.bind(this);
                      if (cb) {
                        var db = Ua.wa;
                        0 === db.Aa && (db.Xa = !0);
                        db.Aa = Math.max(8, Math.floor((2 * db.ka.length) / 3));
                        s_$oe(db);
                      } else if (!s_8H(Ua.settings, 2)) {
                        for (
                          var Xa = [], Va = 0, Da = s_g(Ua.ka), wa = Da.next();
                          !wa.done;
                          wa = Da.next()
                        ) {
                          var Sa = wa.value;
                          Sa.xh && (Va++, Sa.KX && Xa.push(Sa));
                        }
                        if (0 === Xa.length) {
                          var Ma = !1;
                          break b;
                        }
                        if (Xa.length >= Va / 2 || null === Ua.oa.Aa(null, 2))
                          for (
                            var Za = Xa[Math.floor(Math.random() * Xa.length)],
                              ma = 0;
                            ma < Ua.ka.length;
                            ma++
                          )
                            if (Ua.ka[ma].Gb.equals(Za.Gb) && Ua.ka[ma].KX) {
                              var Ja = tb(Ua.ka[ma], 0) / Ua.oa.oa;
                              Ua.Aa.Pq.push({
                                Gb: new s_Ug(
                                  Ua.ka[ma].Gb.x * Ua.oa.oa,
                                  Ua.ka[ma].Gb.y * Ua.oa.oa,
                                ),
                                wd: new s_Ug(0, 0),
                                angle: 0,
                                tE: 0,
                                size: Ja,
                                Xz: Ua.ka[ma].type,
                                type: 1,
                              });
                              if (s_8H(Ua.settings, 7)) {
                                var Na = s_cI(Ua.oa, Ua.ka[ma].Gb);
                                Ua.Aa.Pq.push({
                                  Gb: new s_Ug(
                                    Na.x * Ua.oa.oa,
                                    Na.y * Ua.oa.oa,
                                  ),
                                  wd: new s_Ug(0, 0),
                                  angle: 180,
                                  tE: 0,
                                  size: Ja,
                                  Xz: Ua.ka[ma].type,
                                  type: 1,
                                });
                              }
                              Ua.ka.splice(ma, 1);
                              if (ma <= Ra) {
                                Ma = !0;
                                break b;
                              }
                              break;
                            }
                      }
                      Ma = !1;
                    }
                    Ma && Fa--;
                  }
                  if (!cb) {
                    s_8H(this.settings, 3)
                      ? (this.oa.Sa += 2)
                      : (this.oa.Sa += 1);
                    this.Mg++;
                    var W = s_Xoe(this.settings);
                    (!this.Qa.has(W) || this.Mg > this.Qa.get(W)) &&
                      this.Qa.set(W, this.Mg);
                    var za = this.header,
                      $a = this.Mg,
                      ab = this.ticks,
                      nb = this.Sa;
                    if (25 === $a || 50 === $a || 100 === $a)
                      s_Bh(za.Aa, $a), s_Bh(za.Ba, s_Nne(ab * nb));
                  }
                  (s_8H(this.settings, 3) &&
                    0 < this.oa.La.length &&
                    4 >= this.oa.La[this.oa.La.length - 1].m6 &&
                    this.oa.La[this.oa.La.length - 1].s4a === Ia) ||
                    this.oa.La.push({
                      m6: 0,
                      f$b: this.oa.ka.length + 1,
                      s4a: s_8H(this.settings, 7) ? Ia : !1,
                    });
                  var Wa = s_8H(this.settings, 5) && !this.ik;
                  Wa && (Ba = !0);
                  if (s_8H(this.settings, 2))
                    if (0 !== this.wa.ka.length % 2) {
                      this.wa.ka.splice(0, this.wa.ka.length);
                      break;
                    } else {
                      Ba = !0;
                      var pa = this.Ma,
                        eb = Fa,
                        lb = ya,
                        fb = lb ? pa.ka.direction : s_One(pa.ka.direction);
                      if (Wa) {
                        var Oa = pa.ka.direction;
                        s_vpe(pa.ka);
                        fb = lb ? pa.ka.Ba : s_One(pa.ka.Ba);
                        pa.ka.direction = Oa;
                        pa.ka.Da = Oa;
                        pa.ka.Ba = "NONE";
                        for (
                          var mb = s_g(pa.oa), sb = mb.next();
                          !sb.done;
                          sb = mb.next()
                        ) {
                          var hb = sb.value;
                          hb.Vja || (hb.jda = pa.ka.ka.length - 1 - hb.jda);
                          hb.oNa = !hb.oNa;
                          if (hb.oNa && 0 < hb.jda) {
                            var ub = pa.ka.ka[hb.jda - 1],
                              jb = pa.ka.ka[hb.jda];
                            ub.x < jb.x
                              ? (hb.Ywa = "LEFT")
                              : ub.x > jb.x
                                ? (hb.Ywa = "RIGHT")
                                : ub.y < jb.y
                                  ? (hb.Ywa = "UP")
                                  : ub.y > jb.y && (hb.Ywa = "DOWN");
                          } else hb.Ywa = s_One(hb.Ywa);
                        }
                      }
                      var Bb = pa.Da.ka[0 === eb % 2 ? eb + 1 : eb - 1],
                        xb = lb ? pa.ka.ka[0].clone() : s_bI(pa.ka, 0),
                        N = Bb.Gb.clone();
                      s_8H(pa.settings, 6) &&
                        (0 !== N.x % 1 && (N.x -= Bb.wd.x),
                        0 !== N.y % 1 && (N.y -= Bb.wd.y),
                        s_8H(pa.settings, 4) &&
                          (pa.wa.y8(N) || (N = s_doe(pa.wa, N))));
                      pa.ka.ka.unshift(lb ? N : s_cI(pa.wa, N));
                      s_8H(pa.settings, 11) && pa.ka.wa.unshift(!1);
                      cb ? pa.Ba++ : (pa.ka.Sa = Math.max(0, pa.ka.Sa - 1));
                      var Q = s_kpe(pa, xb, !0, fb, pa.ka.wa, !lb),
                        rb = s_kpe(pa, N, !1, fb, pa.ka.wa, !lb);
                      Q.Nrb = rb;
                      rb.Nrb = Q;
                      pa.oa.push(Q);
                      pa.oa.push(rb);
                      if (s_8H(pa.settings, 7)) {
                        var da = s_cI(pa.wa, N),
                          aa = s_One(fb),
                          wb = s_kpe(pa, s_cI(pa.wa, xb), !0, aa, pa.ka.wa, lb),
                          yb = s_kpe(pa, da, !1, aa, pa.ka.wa, lb);
                        wb.Nrb = yb;
                        yb.Nrb = wb;
                        pa.oa.push(wb);
                        pa.oa.push(yb);
                        pa.ka.Qa.iG = 0;
                        pa.ka.Qa.KO = !1;
                      }
                      pa.ka.Oa.iG = 0;
                      pa.ka.Oa.KO = !1;
                      pa.ka.zc = !0;
                    }
                  var pb = Wa && !s_8H(this.settings, 2);
                  pb && s_vpe(this.oa);
                  if (
                    s_8H(this.settings, 1) &&
                    !this.ik &&
                    !cb &&
                    (1 === this.Mg % 2 || s_8H(this.settings, 11))
                  ) {
                    var zb = s_dpe(this.Da, s_Gpe(this, null, 5));
                    zb &&
                      (s_epe(this.Da, zb),
                      s_8H(this.settings, 7) &&
                        s_epe(this.Da, s_cI(this.ka, zb)));
                  }
                  if (s_8H(this.settings, 13)) {
                    if (pb) {
                      var vb = this.Ra,
                        Db = vb.oa.size;
                      s_Cpe(vb, vb.wa.ka[0], 3);
                      vb.wa.Ra[0] = 1;
                      vb.wa.Ra[1] = 1;
                      vb.wa.Ra[2] = 1;
                      vb.wa.Ra[3] = 1;
                      Db !== vb.oa.size && s_ype.pzb.play();
                    }
                    for (
                      var ob = this.Ra,
                        Kb = ob.wa.ka,
                        Lb = !1,
                        Cb = s_g(ob.oa.keys()),
                        Rb = Cb.next();
                      !Rb.done;
                      Rb = Cb.next()
                    ) {
                      var Eb = Rb.value,
                        Nb = void 0;
                      if (null == (Nb = ob.oa.get(Eb).aC) ? 0 : Nb.xJa)
                        s_Bpe(ob, Eb), (Lb = !0);
                    }
                    Lb && s_ype.pzb.play();
                    var Ob = Math.min(
                        0.4,
                        Kb.length / ((ob.ka.ka.width * ob.ka.ka.height) / 6),
                      ),
                      Tb = s_g(ob.oa.keys());
                    for (Rb = Tb.next(); !Rb.done; Rb = Tb.next()) {
                      var Hb = ob.oa.get(Rb.value);
                      if (
                        Math.random() < Ob &&
                        Hb.aC &&
                        Hb.aC.Qvb >= ob.wa.ka.length &&
                        ((Hb.aC.xJa = !0), s_8H(ob.settings, 7))
                      ) {
                        var Xb = ob.oa.get(Hb.aC.t4a);
                        Xb && Xb.aC && (Xb.aC.xJa = !0);
                      }
                    }
                    for (
                      var Ib = this.Ra,
                        gc = this.Lc.bind(this),
                        Wb = Ib.wa.ka,
                        Pb =
                          s_8H(Ib.settings, 5) && !s_8H(Ib.settings, 2) ? 2 : 1;
                      Pb < Wb.length;
                      Pb++
                    ) {
                      var Qb = Wb[Pb].clone();
                      if (
                        !(
                          Ib.Ba.wa.get(s__H(Qb)) ||
                          (s_8H(Ib.settings, 3) && 0 === (Qb.x + Qb.y) % 2)
                        )
                      ) {
                        Ib.wa.Ra[Pb] = -1;
                        var Sb = 0;
                        if (Pb === Wb.length - 1) {
                          var Yb = 0;
                          var ec = Wb[Pb - 1],
                            kb = Qb.x - ec.x,
                            qb = Qb.y - ec.y;
                          s_kI(Ib.settings) &&
                            (-1 > kb ? (kb = 1) : 1 < kb && (kb = -1),
                            -1 > qb ? (qb = 1) : 1 < qb && (qb = -1));
                          -1 === kb
                            ? (Sb = (3 * Math.PI) / 2)
                            : 1 === kb
                              ? (Sb = Math.PI / 2)
                              : -1 === qb
                                ? (Sb = 0)
                                : 1 === qb && (Sb = Math.PI);
                        } else if (s_8H(Ib.settings, 2) && 1 === Pb) Yb = 1;
                        else {
                          var zc = Wb[Pb + 1],
                            ac = Wb[Pb - 1],
                            cc = Qb.x - zc.x + (Qb.x - ac.x),
                            Ub = Qb.y - zc.y + (Qb.y - ac.y);
                          s_kI(Ib.settings) &&
                            (-1 > cc ? (cc = 1) : 1 < cc && (cc = -1),
                            -1 > Ub ? (Ub = 1) : 1 < Ub && (Ub = -1));
                          0 !== cc && 0 !== Ub
                            ? ((Yb = 2),
                              (Sb =
                                -1 === cc
                                  ? -1 === Ub
                                    ? 0
                                    : (3 * Math.PI) / 2
                                  : -1 === Ub
                                    ? Math.PI / 2
                                    : Math.PI))
                            : (Yb = 1);
                        }
                        var nc = gc(Pb / Wb.length, Pb, 0, !1),
                          Ac = {
                            Gb: Qb,
                            Lo: !0,
                            qL: !1,
                            xh: !0,
                            aC: {
                              xJa: !1,
                              Qvb: Pb,
                              t4a: -1,
                              color: nc,
                              type: Yb,
                              angle: Sb,
                              Xsc: Math.floor(4 * Math.random()),
                              Wsc:
                                (Math.floor(4 * Math.random()) * Math.PI) / 2,
                            },
                          },
                          wc = Ib,
                          Vb = Qb,
                          lc = Ac;
                        wc.oa.set(s__H(Vb), lc);
                        s__oe(wc.Ba, Vb, lc);
                        if (s_8H(Ib.settings, 7)) {
                          var bc = s_cI(Ib.ka, Qb),
                            ic = Sb + Math.PI,
                            qc = gc(Pb / Wb.length, Pb, 0, !0),
                            oc = Ib,
                            Bc = bc,
                            Fc = {
                              Gb: bc,
                              Lo: !0,
                              qL: !1,
                              xh: !0,
                              aC: {
                                xJa: !1,
                                Qvb: Pb,
                                t4a: s__H(Qb),
                                color: qc,
                                type: Yb,
                                angle: ic,
                                Xsc: Math.floor(4 * Math.random()),
                                Wsc:
                                  (Math.floor(4 * Math.random()) * Math.PI) / 2,
                              },
                            };
                          oc.oa.set(s__H(Bc), Fc);
                          s__oe(oc.Ba, Bc, Fc);
                          Ac.aC.t4a = s__H(bc);
                        }
                      }
                    }
                    s_ype.blc.play();
                    var Mb = Ib;
                    Mb.Da.clear();
                    if (!s_8H(Mb.settings, 14)) {
                      for (var vc = [], rc = 0; rc < Mb.ka.ka.height; rc++) {
                        vc.push([]);
                        for (var Cc = 0; Cc < Mb.ka.ka.width; Cc++) {
                          var Jc = s_Dpe(Mb, Cc, rc),
                            Dc = vc[rc],
                            pc = Dc.push;
                          if (Jc) var Gc = -1;
                          else {
                            var hc = Mb,
                              Zb = Cc,
                              mc = rc,
                              dc = 0;
                            s_kI(hc.settings)
                              ? (s_Epe(hc, s_gI(hc.ka, new s_Ug(Zb - 1, mc))) &&
                                  dc++,
                                s_Epe(hc, s_gI(hc.ka, new s_Ug(Zb + 1, mc))) &&
                                  dc++,
                                s_Epe(hc, s_gI(hc.ka, new s_Ug(Zb, mc - 1))) &&
                                  dc++,
                                s_Epe(hc, s_gI(hc.ka, new s_Ug(Zb, mc + 1))) &&
                                  dc++)
                              : ((0 === Zb || s_Dpe(hc, Zb - 1, mc)) && dc++,
                                (Zb === hc.ka.ka.width - 1 ||
                                  s_Dpe(hc, Zb + 1, mc)) &&
                                  dc++,
                                (0 === mc || s_Dpe(hc, Zb, mc - 1)) && dc++,
                                (mc === hc.ka.ka.height - 1 ||
                                  s_Dpe(hc, Zb, mc + 1)) &&
                                  dc++);
                            Gc = 4 - dc;
                          }
                          pc.call(Dc, {
                            oCa: Gc,
                            OHc: Jc,
                            nxc: !1,
                            fmc: !1,
                          });
                        }
                      }
                      for (var Hc = 0; Hc < Mb.ka.ka.height; Hc++)
                        for (var xc = 0; xc < Mb.ka.ka.width; xc++)
                          s_lI(Mb, vc, xc, Hc, !1);
                      Mb.Aa = 0;
                      s_mI(Mb, vc, Mb.wa.ka[0]);
                      if (
                        0.25 <=
                        Mb.Aa /
                          (Mb.Aa +
                            (Mb.ka.ka.width * Mb.ka.ka.height -
                              Mb.Aa -
                              Mb.oa.size))
                      )
                        for (var Fb = 0; Fb < Mb.ka.ka.height; Fb++)
                          for (var sc = 0; sc < Mb.ka.ka.width; sc++) {
                            var Kc = vc[Fb][sc];
                            Kc.fmc || (Kc.oCa = 0);
                          }
                      for (var Lc = 0; Lc < Mb.ka.ka.height; Lc++)
                        for (var jc = 0; jc < Mb.ka.ka.width; jc++)
                          1 >= vc[Lc][jc].oCa && Mb.Da.add((jc << 16) | Lc);
                    }
                  }
                  if (s_8H(this.settings, 2)) var Mc = !0;
                  else if (s_8H(this.settings, 10) && xa.KX) Mc = !1;
                  else {
                    var Ec = s_8H(this.settings, 6) || s_8H(this.settings, 7);
                    Mc = this.IUc(Fa, !Ec, null);
                  }
                  if (Mc)
                    if (s_8H(this.settings, 2)) {
                      var fc = 0 === Fa % 2 ? Fa + 1 : Fa - 1;
                      21 === this.settings.Da &&
                        ((this.wa.ka[Fa].type = s_3ne(this.wa)),
                        (this.wa.ka[fc].type = this.wa.ka[Fa].type));
                      var tc = this.wa,
                        Pc = Fa,
                        kc = this.IUc.bind(this),
                        Nc = 0 === tc.settings.wa && !s_8H(tc.settings, 11),
                        Oc = kc(Pc, !1, null);
                      if (s_8H(tc.settings, 8) || s_8H(tc.settings, 9))
                        tc.ka.splice(Math.min(Pc, fc), 2);
                      else {
                        var Tc = s_8H(tc.settings, 7)
                            ? s_cI(tc.oa, tc.ka[Pc].Gb)
                            : null,
                          gd = kc(fc, Nc, Tc);
                        (Oc && gd) || tc.ka.splice(Math.min(Pc, fc), 2);
                      }
                    } else
                      21 === this.settings.Da && (xa.type = s_3ne(this.wa));
                  else this.wa.ka.splice(Fa, 1), Fa--;
                  if (
                    s_8H(this.settings, 10) &&
                    !s_8H(this.settings, 8) &&
                    !s_8H(this.settings, 9) &&
                    !cb
                  ) {
                    for (
                      var Ab = this.wa, yc = 0, Vc = s_g(Ab.ka), Xc = Vc.next();
                      !Xc.done;
                      Xc = Vc.next()
                    )
                      Xc.value.KX && yc++;
                    yc < Ab.ka.length / 2 && s_7ne(Ab);
                  }
                  if (s_8H(this.settings, 12)) {
                    var Ic = this.Ga,
                      Wc = Ic.ka.Aa(null, 9);
                    Wc &&
                      (s_5oe.DUa.play(),
                      Ic.oa.add({
                        Gb: Wc,
                        koa: -1,
                        Cx: 0,
                        xh: !s_8H(Ic.settings, 11),
                      }),
                      s_8H(Ic.settings, 7) &&
                        Ic.oa.add({
                          Gb: s_cI(Ic.ka, Wc),
                          koa: -1,
                          Cx: 0,
                          xh: !s_8H(Ic.settings, 11),
                        }));
                  }
                  s_8H(this.settings, 11) && (this.sA(), (Ba = !0));
                  if (Ba) break;
                }
              }
            }
            if (
              s_8H(this.settings, 12) &&
              (s_ape(
                this.Ga,
                this.ik,
                this.khb.bind(this),
                this.GAb.bind(this),
              ),
              this.ik)
            )
              break a;
            for (
              var Uc = s_g(this.Ra.oa.values()), hd = Uc.next();
              !hd.done;
              hd = Uc.next()
            )
              hd.value.aC.Qvb += 1;
            var id = this.oa;
            "NONE" !== id.Hb && (s_npe(id, id.Hb), s_ppe(id));
            b: {
              var Gb = this.oa;
              if (0 < Gb.Aa && !Gb.Lb) {
                var $b = new Set(),
                  Sc = "NONE" !== Gb.direction ? Gb.direction : Gb.Ba;
                if ("LEFT" === Sc || "RIGHT" === Sc)
                  $b.add("UP"), $b.add("DOWN");
                else if ("UP" === Sc || "DOWN" === Sc)
                  $b.add("LEFT"), $b.add("RIGHT");
                else break b;
                if (!s_8H(Gb.settings, 14))
                  if (s_8H(Gb.settings, 4)) {
                    var uc = new s_Ug(Gb.ka[0].x - 1, Gb.ka[0].y),
                      jd = new s_Ug(Gb.ka[0].x + 1, Gb.ka[0].y),
                      cd = new s_Ug(Gb.ka[0].x, Gb.ka[0].y - 1),
                      dd = new s_Ug(Gb.ka[0].x, Gb.ka[0].y + 1);
                    s_gI(Gb.oa, uc);
                    s_gI(Gb.oa, jd);
                    s_gI(Gb.oa, cd);
                    s_gI(Gb.oa, dd);
                    s_fI(Gb.oa, uc) && $b.delete("LEFT");
                    s_fI(Gb.oa, jd) && $b.delete("RIGHT");
                    s_fI(Gb.oa, cd) && $b.delete("UP");
                    s_fI(Gb.oa, dd) && $b.delete("DOWN");
                  } else
                    (0 === Gb.ka[0].x ||
                      s_fI(Gb.oa, new s_Ug(Gb.ka[0].x - 1, Gb.ka[0].y))) &&
                      $b.delete("LEFT"),
                      (Gb.ka[0].x === Gb.oa.ka.width - 1 ||
                        s_fI(Gb.oa, new s_Ug(Gb.ka[0].x + 1, Gb.ka[0].y))) &&
                        $b.delete("RIGHT"),
                      (0 === Gb.ka[0].y ||
                        s_fI(Gb.oa, new s_Ug(Gb.ka[0].x, Gb.ka[0].y - 1))) &&
                        $b.delete("UP"),
                      (Gb.ka[0].y === Gb.oa.ka.height - 1 ||
                        s_fI(Gb.oa, new s_Ug(Gb.ka[0].x, Gb.ka[0].y + 1))) &&
                        $b.delete("DOWN");
                var od = Array.from($b);
                if (0 < od.length)
                  switch (
                    (s_npe(Gb, od[Math.floor(Math.random() * od.length)]),
                    Gb.direction)
                  ) {
                    case "DOWN":
                      s_hpe.j8c.play();
                      break;
                    case "UP":
                      s_hpe.k8c.play();
                      break;
                    case "LEFT":
                      s_hpe.l8c.play();
                      break;
                    case "RIGHT":
                      s_hpe.m8c.play();
                  }
              }
            }
            for (
              var Qc = this.Ma, ad = s_g(Qc.oa), rd = ad.next();
              !rd.done;
              rd = ad.next()
            ) {
              for (
                var ed = rd.value, sd = !1, kd = ed.jda;
                kd < Qc.ka.ka.length;
                kd++
              ) {
                var ud = ed.Gb.equals(Qc.ka.ka[kd]),
                  Yc = s_8H(Qc.settings, 7) && ed.Gb.equals(s_bI(Qc.ka, kd));
                if (ud || Yc) {
                  sd = !0;
                  ed.jda = kd;
                  s_8H(Qc.settings, 10) &&
                    0 < Qc.Ba &&
                    kd === Qc.ka.ka.length - 1 &&
                    ud &&
                    (Qc.Ba--,
                    (Qc.ka.Sc = Qc.ka.nb),
                    (Qc.ka.nb = Qc.ka.ka.pop()),
                    s_8H(Qc.settings, 11) && Qc.ka.wa.pop(),
                    (sd = !1));
                  break;
                }
              }
              sd || (ed.Vja = !0);
            }
            var Zc = this.wa,
              $c = 0;
            if (s_8H(Zc.settings, 10) || s_8H(Zc.settings, 11))
              for (
                var td = s_g(Zc.ka), ld = td.next();
                !ld.done;
                ld = td.next()
              ) {
                var vd = ld.value;
                !vd.KX && vd.xh && $c++;
              }
            else $c = Zc.ka.length;
            var S = $c;
            var wd = this.Ba,
              Rc = 0;
            if (s_8H(wd.settings, 8))
              for (
                var bd = s_g(wd.keys), pd = bd.next();
                !pd.done;
                pd = bd.next()
              )
                pd.value.xh && Rc++;
            var qd = Rc;
            var fd = this.Aa,
              zd = 0;
            if (s_8H(fd.settings, 9))
              for (
                var Cd = s_g(fd.oa), xd = Cd.next();
                !xd.done;
                xd = Cd.next()
              )
                xd.value.xh && zd++;
            if (0 === S + qd + zd) {
              s_woe.WIN.play();
              this.nb = this.ik = !0;
              s_Hpe(this.menu, 1400, this.Mg);
              s_8H(this.settings, 5) && this.oa.Ma && (this.oa.Ma = !1);
              s_8H(this.settings, 11) &&
                (this.oa.wa[0] || this.sA(), (this.La = !1));
              var Ad = this.header,
                Dd = this.ticks,
                Ed = this.Sa;
              s_Bh(Ad.Aa, "ALL");
              s_Bh(Ad.Ba, s_Nne(Dd * Ed));
              this.Cb = this.ticks;
            } else
              s_8H(this.settings, 6) &&
                s_9ne(this.wa, this.Da.wa, this.Ba.keys, this.Aa.oa);
            var md = this.oa,
              yd = this.wa.ka,
              nd = this.Ba.keys;
            s_qpe(md, md.Oa, yd, nd);
            s_8H(md.settings, 7) && s_qpe(md, md.Qa, yd, nd, !0);
            s_8H(this.settings, 4) &&
              s_upe(this.oa, this.wa.ka, this.Ba.keys, this.Aa.oa);
          }
        }
      }
  };
  s_.khb = function () {
    this.wa.refresh();
    this.Da.refresh();
    this.Ma.refresh();
    this.Ba.refresh();
    this.Aa.refresh();
  };
  s_.ytd = function (a) {
    this.ka.y8(a) || this.eFa();
    for (var b = 1; b < this.oa.ka.length - 1; b++) {
      var c = (this.oa.ka[b].x + this.oa.ka[b].y) % 2;
      c =
        (s_8H(this.settings, 3) && 0 === c) ||
        (s_8H(this.settings, 11) && !this.oa.wa[b]);
      this.oa.ka[b].equals(a) && !c && (this.eFa(), (this.Db = !0));
    }
    if (s_8H(this.settings, 7))
      for (b = 0; b < this.oa.ka.length - 1; b++)
        (c = (this.oa.ka[b].x + this.oa.ka[b].y) % 2),
          (c =
            (s_8H(this.settings, 3) && 0 === c && 0 !== b) ||
            (s_8H(this.settings, 11) && !this.oa.wa[b])),
          s_bI(this.oa, b).equals(a) &&
            !c &&
            (this.eFa(), 0 < b && (this.Db = !0));
    s_8H(this.settings, 9) &&
      !this.ik &&
      (s_toe(this.Aa, a, !1, this.eFa.bind(this)),
      s_8H(this.settings, 7) &&
        !this.ik &&
        s_toe(this.Aa, a, !0, this.eFa.bind(this)));
    (s_8H(this.settings, 1) ||
      s_8H(this.settings, 7) ||
      s_8H(this.settings, 8) ||
      s_8H(this.settings, 13)) &&
      !this.ik &&
      ((b = this.Da.wa.get(s__H(a))),
      void 0 !== b && b.xh && (this.eFa(), b.qL && (this.Db = !0)),
      s_8H(this.settings, 7) &&
        ((a = this.Da.wa.get(s__H(s_cI(this.ka, a)))),
        void 0 !== a && a.xh && this.eFa()));
    return this.ik;
  };
  s_.eFa = function () {
    if (!this.ik) {
      s_woe.vzb.play();
      var a = this.oa;
      a.Sa = 0;
      s_mpe(a);
      a.Vb = 0;
      a.Ga = 3;
      a.uc = 6;
      a.Cb = a.ka[0].clone();
      "RIGHT" === a.direction
        ? ((a.Cb.x += 0.5), (a.Pb = 0))
        : "LEFT" === a.direction
          ? ((a.Cb.x -= 0.5), (a.Pb = Math.PI))
          : "UP" === a.direction
            ? ((a.Cb.y -= 0.5), (a.Pb = -Math.PI / 2))
            : "DOWN" === a.direction
              ? ((a.Cb.y += 0.5), (a.Pb = Math.PI / 2))
              : (a.Pb = 0);
      a = this.Ma;
      if (s_8H(a.settings, 2) && 0 < a.Aa.length)
        for (var b = s_g(a.Aa), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.oa.push(c), (c.Cx = 0), (c.jda = 0), (c.Vja = !1);
      this.GAb();
    }
  };
  s_.GAb = function () {
    this.ik = !0;
    this.Cb = this.ticks;
    s_8H(this.settings, 11) && (this.La = !1);
    s_8H(this.settings, 5) && s_wpe(this.oa);
    s_Hpe(this.menu, 1400, this.Mg);
  };
  s_.IUc = function (a, b, c) {
    var d =
        s_8H(this.settings, 14) ||
        s_8H(this.settings, 6) ||
        s_8H(this.settings, 7) ||
        s_8H(this.settings, 11),
      e = s_8H(this.settings, 7) ? 2 : 1,
      f = this.oa.ka.length * e,
      g = (s_$ne(this.wa) - 1) * e;
    e =
      s_8H(this.settings, 6) || s_8H(this.settings, 7)
        ? Math.max(0, this.oa.Sa - 1) * e
        : 0;
    return d && f + g + e >= this.ka.ka.width * this.ka.ka.height
      ? !1
      : s_8H(this.settings, 8)
        ? ((b = this.Vb(null, 6)),
          (c = s_dpe(this.Da, s_Gpe(this, b, 5))),
          b &&
            c &&
            (s_3oe(this.Ba, a, b, c),
            s_8H(this.settings, 9) &&
              s_poe(this.Aa, b.clone(), this.Ba.keys.length)),
          !1)
        : s_8H(this.settings, 9)
          ? (s_uoe(this.Aa, this.Ba.keys.length), !1)
          : (c = this.Vb(c, 2))
            ? (s_6ne(this.wa, a, c),
              b &&
                this.wa.ka.sort(function (k, h) {
                  return k.Gb.y - h.Gb.y;
                }),
              !0)
            : !1;
  };
  s_.jyc = function (a, b) {
    var c = s_8H(this.settings, 6) ? 1.65 : 1.2;
    c = this.ka.oa * c * (a.Lo ? b : 1);
    a.Lo ||
      ("NONE" === this.oa.direction && !s_zoe(this.oa)) ||
      s_8H(this.settings, 6) ||
      ((a = (a.Cx + (this.ik ? 0 : b)) / 6),
      (b = s_Pne(a)),
      0 === a && (b = 0),
      (c *= 1 + b * this.uc),
      (c = Math.round(c)));
    return c;
  };
  var s_Gpe = function (a, b, c) {
    for (var d = [], e = a.oa, f = 0; f < e.ka.length; f++) {
      var g = e.ka[f];
      (s_8H(e.settings, 3) && 0 < f && 0 === (g.x + g.y) % 2) ||
        (d.push(g), s_8H(e.settings, 7) && d.push(s_cI(e.oa, g)));
    }
    e = a.wa;
    f = 2 === c;
    f = s_8H(e.settings, 11) && !s_8H(e.settings, 2) && f;
    g = s_g(e.ka);
    for (var k = g.next(); !k.done; k = g.next())
      if (((k = k.value), !f || k.xh))
        d.push(k.Gb), s_$H(e.settings) && d.push(s_cI(e.oa, k.Gb));
    e = s_g(a.Da.wa.values());
    for (f = e.next(); !f.done; f = e.next()) d.push(f.value.Gb);
    e = s_g(a.Ma.oa);
    for (f = e.next(); !f.done; f = e.next()) d.push(f.value.Gb);
    e = a.Ba;
    f = s_g(e.keys);
    for (g = f.next(); !g.done; g = f.next())
      (g = g.value),
        d.push(g.Gb),
        s_8H(e.settings, 7) && d.push(s_cI(e.ka, g.Gb));
    e = a.Aa;
    f = s_g(e.oa);
    for (g = f.next(); !g.done; g = f.next())
      (g = g.value),
        d.push(g.Gb),
        s_8H(e.settings, 7) && d.push(s_cI(e.ka, g.Gb));
    e = s_g(e.wa);
    for (f = e.next(); !f.done; f = e.next()) d.push(f.value);
    e = s_g(a.Ga.oa);
    for (f = e.next(); !f.done; f = e.next()) d.push(f.value.Gb);
    b && d.push(b);
    e = (s_$H(a.settings) && 2 === c) || (s_8H(a.settings, 7) && 2 !== c);
    b = new Set();
    d = s_g(d);
    for (f = d.next(); !f.done; f = d.next())
      (f = f.value), b.add(s__H(f)), e && b.add(s__H(s_cI(a.ka, f)));
    if (s_8H(a.settings, 13) && (2 === c || 6 === c || 7 === c))
      for (a = s_g(a.Ra.Da), f = a.next(); !f.done; f = a.next())
        b.add(f.value);
    return b;
  };
  s_Fpe.prototype.Vb = function (a, b) {
    a = s_Gpe(this, a, b);
    var c = new Set();
    if (s_8H(this.settings, 3)) {
      for (var d = 0; d < this.ka.ka.width; d++)
        for (var e = 0; e < this.ka.ka.height; e++)
          if (!a.has((d << 16) | e)) {
            var f = 0;
            s_kI(this.settings)
              ? (a.has(s__H(s_gI(this.ka, new s_Ug(d - 1, e)))) && f++,
                a.has(s__H(s_gI(this.ka, new s_Ug(d + 1, e)))) && f++,
                a.has(s__H(s_gI(this.ka, new s_Ug(d, e - 1)))) && f++,
                a.has(s__H(s_gI(this.ka, new s_Ug(d, e + 1)))) && f++)
              : ((0 === d || a.has(((d - 1) << 16) | e)) && f++,
                (d === this.ka.ka.width - 1 || a.has(((d + 1) << 16) | e)) &&
                  f++,
                (0 === e || a.has((d << 16) | (e - 1))) && f++,
                (e === this.ka.ka.height - 1 || a.has((d << 16) | (e + 1))) &&
                  f++);
            2 < f && c.add((d << 16) | e);
          }
      c = s_g(c);
      for (d = c.next(); !d.done; d = c.next()) a.add(d.value);
    }
    if ((s_8H(this.settings, 2) && 2 === b) || 7 === b || 4 === b || 9 === b)
      for (b = 0; b < this.ka.ka.width; b++)
        for (c = 0; c < this.ka.ka.height; c++)
          3 >= s_eoe(this.ka, this.oa.ka[0], new s_Ug(b, c)) &&
            (a.add((b << 16) | c),
            s_8H(this.settings, 7) &&
              a.add(s__H(s_cI(this.ka, new s_Ug(b, c)))));
    b = Math.floor(
      Math.random() * (this.ka.ka.width * this.ka.ka.height - a.size),
    );
    for (d = c = 0; d < this.ka.ka.width; d++)
      for (e = 0; e < this.ka.ka.height; e++)
        if (!a.has((d << 16) | e) && c++ === b) return new s_Ug(d, e);
    return null;
  };
  s_Fpe.prototype.sA = function () {
    this.oa.sA();
    this.wa.sA();
    this.Da.sA();
    this.Ma.sA();
    this.Ba.sA();
    this.Aa.sA();
    this.Ga.sA();
    this.La = !0;
  };
  var s_9H = function (a, b, c, d) {
      a = a.La ? b : 1;
      c && (a = 1 - a);
      return 1 - (1 - (void 0 === d ? 0.2 : d)) * a;
    },
    s_jI = function (a, b, c, d, e) {
      d = void 0 === d ? 0 : d;
      e = void 0 === e ? !1 : e;
      a.oa.Ma && 10 !== a.settings.oa && (b = b * d + (1 - b) * (1 - d));
      var f = 0 < a.oa.Aa;
      if (10 === a.settings.oa) {
        var g = e ? s_Xne : s_Wne;
        e = s_QE(g[Math.floor(c) % g.length]);
        var k = s_QE(
          g[Math.floor(c >= a.oa.ka.length - 1 ? c : c + 1) % g.length],
        );
        if (a.oa.Ma) {
          var h = a.oa.ka.length - 1 - c,
            l = s_QE(g[Math.floor(h) % g.length]);
          g = s_QE(g[Math.floor(0 >= h ? h : h - 1) % g.length]);
          e = s_RE(e, l, d);
          k = s_RE(k, g, d);
        }
        f &&
          (1 === a.oa.Aa
            ? ((e = s_RE(e, s_1H, d)), (k = s_RE(k, s_2H, d)))
            : a.oa.Xa
              ? ((e = s_RE(e, s_1H, 1 - d)), (k = s_RE(k, s_2H, 1 - d)))
              : ((e[0] = s_1H[0]),
                (e[1] = s_1H[1]),
                (e[2] = s_1H[2]),
                (k[0] = s_2H[0]),
                (k[1] = s_2H[1]),
                (k[2] = s_2H[2])));
        a = a.settings.OG() ? 0.075 : 0.15;
        return s_PE(s_SE(s_RE(k, e, f ? 0 : c % 1), b * a));
      }
      k = s_3H[s_Sne[a.settings.oa]];
      c = s_QE(e ? k[0] : a.oa.Ce);
      e = s_QE(e ? k[1] : a.oa.We);
      f &&
        (1 === a.oa.Aa
          ? ((c = s_RE(c, s_1H, d)), (e = s_RE(e, s_2H, d)))
          : a.oa.Xa
            ? ((c = s_RE(c, s_1H, 1 - d)), (e = s_RE(e, s_2H, 1 - d)))
            : ((c[0] = s_1H[0]),
              (c[1] = s_1H[1]),
              (c[2] = s_1H[2]),
              (e[0] = s_2H[0]),
              (e[1] = s_2H[1]),
              (e[2] = s_2H[2])));
      f = a.settings.OG() && 10 > a.settings.oa ? 0.5 : 1;
      return s_PE(s_RE(e, c, b * Math.min(1, a.oa.ka.length / 12) * f));
    };
  s_Fpe.prototype.Lc = function (a, b, c, d) {
    a = s_ANd(s_jI(this, a, b, c, d));
    b = s_ANd(s_eI(this.settings, this.settings.ka, 3));
    a[2] = b[2];
    a[1] /= 2;
    return s_PE(s_yNd(a[0], a[1], a[2]));
  };
  var s_Ipe = function (a, b, c, d, e, f, g, k, h, l, m, n) {
      this.settings = a;
      this.kqa = b;
      this.Qa = c;
      this.La = d;
      this.Oa = e;
      this.Ga = f;
      this.Ma = g;
      this.Da = k;
      this.wa = h;
      this.Ra = l;
      this.Aa = m;
      this.Ba = n;
      this.oa = this.ka = !1;
    },
    s_Jpe = function (a) {
      s_yj(a.wa, "LaTyvd");
      a.oa = !s_rj(a.wa, "LaTyvd");
      s_9q([new s_Qi(a.wa, a.oa ? "show" : "hide")]);
    };
  s_Ipe.prototype.lfa = function (a) {
    this.Ma.src = a
      ? assetsPath + "volume_off_white_24dp.png"
      : assetsPath + "volume_up_white_24dp.png";
  };
  var s_nI = function (a, b, c, d, e, f, g, k, h, l, m, n, p, q, r, t) {
    this.settings = a;
    this.Da = b;
    this.Xa = c;
    this.Ba = d;
    this.Ga = e;
    this.Qa = f;
    this.Vb = g;
    this.zc = k;
    this.Ra = h;
    this.uc = l;
    this.Lb = m;
    this.Oa = n;
    this.Pb = p;
    this.Wm = q;
    this.Sc = r;
    this.Lc = t;
    this.visible = !0;
    this.La = [];
    this.wa = "score";
    this.jk = !1;
    this.Aa = this.Ba.getContext("2d");
    this.oa = new s_5H(assetsPath + "end_empty.png", 1, this.Aa);
    this.Ma = new s_5H(assetsPath + "default_end.png", 1, this.Aa);
    this.Yc = new s_5H(assetsPath + "rainbow_end.png", 1, this.Aa);
    this.Cb = new s_5H(assetsPath + "gradient_end.png", 1, this.Aa);
    this.Sa = new s_5H(assetsPath + "speed_01.png", 1, this.Aa);
    this.nb = new s_5H(assetsPath + "speed_02.png", 1, this.Aa);
    this.Ga = e;
    this.Qa = f;
    a = [];
    for (b = 0; b < this.Qa.children.length; b++)
      if (((c = this.Qa.children[b]), 0 < c.children.length))
        for (c = s_g(c.children), d = c.next(); !d.done; d = c.next())
          if (((d = d.value), "" !== d.id)) {
            a.push(d);
            break;
          }
    this.ka = {
      Bib: -1,
      bKa: new s_Ug(0, 0),
      uoa: new s_Ug(0, 0),
      ala: null,
      lP: 0 < a.length ? a[0] : document.createElement("div"),
      X4: -1,
      Ar: new s_Ug(0, 0),
      swb: new Map(),
      targetY: 45,
      Gra: new s_Ug(0, 0),
      rows: a,
      Vsa: new Map(),
    };
    a = s_g(this.ka.rows);
    for (d = a.next(); !d.done; d = a.next())
      (b = d.value), this.ka.Vsa.set(b.id, b);
    s_Kpe(this, this.ka.lP);
  };
  s_nI.prototype.isVisible = function () {
    return this.visible;
  };
  s_nI.prototype.update = function () {
    if (this.isVisible())
      if ("settings" === this.wa)
        for (
          var a = s_ti(this.Ga),
            b = 0 <= this.ka.Bib ? s_Rne : new s_Ug(0, 0),
            c = s_g(this.ka.rows),
            d = c.next();
          !d.done;
          d = c.next()
        ) {
          d = d.value;
          var e = s_ai(d).x,
            f = this.ka.swb.get(d.id);
          if (this.ka.Gra.x >= b.x && void 0 !== f) {
            e = 0.25 * f + 0.75 * e;
            f = s_li(d).width;
            var g = a.width / 2;
            s_$h(d, Math.max(g - f, Math.min(g, e)), 0);
          }
        }
      else "score" === this.wa && s_Lpe(this);
  };
  var s_Mpe = function (a) {
      for (var b = s_g(a.La), c = b.next(); !c.done; c = b.next())
        s_Zi(c.value);
      a.La = [];
    },
    s_Hpe = function (a, b, c) {
      s_Npe(a);
      s_Mpe(a);
      a.La.push(
        s_Yi(function () {
          s_Ope(a, !0, c);
        }, b),
      );
    },
    s_Ope = function (a, b, c) {
      s_Mpe(a);
      b && !a.visible
        ? (a.Drb(),
          s_E(a.Da, "visibility", "visible"),
          s_E(a.Da, "opacity", "1"),
          s_9q([new s_Qi(a.Da, "show")], {
            data: {
              fun: "score=" + c,
            },
          }))
        : "0" !== s_6h(a.Da, "opacity") &&
          a.visible &&
          (s_E(a.Da, "opacity", "0"),
          s_9q([new s_Qi(a.Da, "hide")]),
          a.La.push(
            s_Yi(function () {
              s_E(a.Da, "visibility", "hidden");
            }, 300),
          ));
      a.visible = b;
    },
    s_Ppe = function (a, b) {
      a.jk = b;
    },
    s_Qpe = function (a) {
      return a.visible && "settings" === a.wa;
    },
    s_Rpe = function (a) {
      0 !== a.settings.Sa || a.settings.Ga
        ? (s_7H(a.oa, s_4H[0][0], s_eI(a.settings, a.settings.Sa, 0)),
          s_E(a.Xa, "background-color", s_eI(a.settings, a.settings.Sa, 6)))
        : (s_6H(a.oa), s_E(a.Xa, "background-color", ""));
    },
    s_Lpe = function (a) {
      "" !== a.settings.nb && (a.Lb.src = a.settings.nb);
      "" !== a.settings.Pb && (a.Wm.src = a.settings.Pb);
      if (0 !== a.settings.Xa) {
        var b = 2 === a.settings.Xa;
        s_uj(a.Oa, "LaTyvd");
        s_E(a.Pb, "transform", b ? "scale(0.8)" : "scale(0.9)");
        for (var c = 0; c < a.Oa.children.length; c++) {
          var d = a.Oa.children[c];
          d instanceof HTMLImageElement && (d.src = a.Lb.src);
          1 >= c && (b ? s_uj(d, "LaTyvd") : s_sj(d, "LaTyvd"));
        }
      } else s_sj(a.Oa, "LaTyvd"), s_E(a.Pb, "transform", "");
      15 === a.settings.Hb ? s_uj(a.Ra, "LaTyvd") : s_sj(a.Ra, "LaTyvd");
      0 === a.settings.Ba || 10 === a.settings.Ba
        ? s_6H(a.Ma)
        : s_7H(a.Ma, "#5282F2", s_3H[a.settings.Ba][0]);
      if (10 < a.settings.Ba) {
        b = s_3H[a.settings.Ba][1];
        if (16 === a.settings.Ba || 17 === a.settings.Ba) b = "#AFAFAF";
        s_7H(a.Cb, "#5282F2", b);
      }
      s_Rpe(a);
      s_Npe(a);
    },
    s_Npe = function (a) {
      a.Aa.clearRect(0, 0, a.Ba.width, a.Ba.height);
      var b = a.Ba.width / a.oa.Bd(),
        c = new s_Ug(0, a.Ba.height - a.oa.qd() * b),
        d = 0.75 * b;
      if (1 === a.settings.Ra) {
        var e = new s_Ug(
          a.Ba.width - (a.Sa.Bd() + 18) * d,
          c.y - (a.Sa.qd() - 15) * d,
        );
        a.Sa.render(0, e, new s_Ug(0, 0), 0, d);
      } else
        2 === a.settings.Ra &&
          ((e = new s_Ug(
            a.Ba.width - (a.nb.Bd() + 15) * d,
            c.y - (a.nb.qd() - 30) * d,
          )),
          a.nb.render(0, e, new s_Ug(0, 0), 0, d));
      if (1 === a.settings.Cb) a.oa.render(0, c, new s_Ug(0, 0), 0, 1.5 * b);
      else if (2 === a.settings.Cb) {
        d = 0.75 * b;
        e = 10 / 11.5;
        var f = 2 / 3;
        a.oa.render(0, c, new s_Ug(0, 0), 0, d);
        a.oa.render(0, c, new s_Ug(a.oa.Bd() * e, 0), 0, d);
        a.oa.render(0, c, new s_Ug(0, a.oa.qd() * f), 0, d);
        a.oa.render(0, c, new s_Ug(a.oa.Bd() * e, a.oa.qd() * f), 0, d);
      } else a.oa.render(0, c, new s_Ug(0, 0), 0, b);
      c = new s_Ug(0 !== a.settings.Ra ? -10 : 0, c.y - a.Ma.qd() * b);
      10 === a.settings.Ba
        ? a.Yc.render(0, c, new s_Ug(0, 0), 0, b)
        : a.Ma.render(0, c, new s_Ug(0, 0), 0, b);
      10 < a.settings.Ba && a.Cb.render(0, c, new s_Ug(0, 0), 0, b);
    };
  s_nI.prototype.Drb = function () {
    this.wa = "score";
    s_Spe(this);
  };
  s_nI.prototype.Z1b = function () {
    this.wa = "settings";
    s_Spe(this);
    for (var a = s_g(this.ka.rows), b = a.next(); !b.done; b = a.next())
      s_oI(this, b.value, !0);
    s_T(this.Vb);
  };
  s_nI.prototype.D1b = function () {
    this.wa = "combo";
    s_Spe(this);
    s_T(this.Ra);
  };
  var s_Spe = function (a) {
    ("settings" === a.wa ? s_uj : s_sj)(a.Ga, "LaTyvd");
    ("score" === a.wa ? s_uj : s_sj)(a.Xa, "LaTyvd");
    ("combo" === a.wa ? s_uj : s_sj)(a.zc, "LaTyvd");
    ("score" === a.wa ? s_uj : s_sj)(a.Vb, "LaTyvd");
    ("score" !== a.wa ? s_uj : s_sj)(a.uc, "LaTyvd");
  };
  s_nI.prototype.PQb = function (a) {
    var b = this.settings.Sc.get(a);
    if (b) {
      var c = s_rj(a, "lH9Ipd");
      s_yj(a, "lH9Ipd");
      15 !== b
        ? s_uj(this.settings.Qa.get(15), "lH9Ipd")
        : 15 !== b ||
          c ||
          this.settings.Qa.forEach(function (d, e) {
            15 !== e && s_uj(d, "lH9Ipd");
          });
    }
  };
  var s_Kpe = function (a, b) {
      for (var c = s_g(a.ka.rows), d = c.next(); !d.done; d = c.next())
        s_uj(d.value, "qfPtwe");
      a.ka.lP = b;
      s_sj(a.ka.lP, "qfPtwe");
    },
    s_Upe = function (a, b, c) {
      if (s_Qpe(a))
        if (0 !== c) {
          b = -1;
          for (var d = 0; d < a.ka.rows.length; d++)
            if (a.ka.lP === a.ka.rows[d]) {
              b = d;
              break;
            }
          -1 !== b &&
            ((c = b + c),
            0 > c
              ? (c = a.ka.rows.length - 1)
              : c >= a.ka.rows.length && (c = 0),
            s_Kpe(a, a.ka.rows[c]));
        } else
          0 !== b &&
            ((c = s_Tpe(a, a.ka.lP) + b),
            0 > c
              ? (c = a.ka.lP.children.length - 1)
              : c >= a.ka.lP.children.length && (c = 0),
            s_oI(a, a.ka.lP, !0, c));
    },
    s_Wpe = function (a, b, c, d, e) {
      if (s_Qpe(a)) {
        a.ka.Bib = Date.now();
        b = s_Vpe(a, b, c);
        a.ka.bKa.x = b.x;
        a.ka.bKa.y = b.y;
        a.ka.uoa.x = b.x;
        a.ka.uoa.y = b.y;
        if (0 < e.children.length) {
          a.ka.ala = e;
          e = s_g(e.children);
          for (b = e.next(); !b.done; b = e.next())
            if (((b = b.value), "" !== b.id)) {
              s_Kpe(a, b);
              break;
            }
          e = s_li(a.ka.lP).width;
          d = (d - s_ai(a.ka.lP).x) / e;
          a.ka.X4 =
            0 <= d && 1 > d && !a.jk
              ? Math.floor(d * a.ka.lP.children.length)
              : -1;
        }
        a.ka.Ar.x = s_ai(a.ka.lP).x;
        a.ka.Ar.y = s_ai(a.Qa).y;
        a.ka.swb.set(a.ka.lP.id, a.ka.Ar.x);
        a.ka.targetY = a.ka.Ar.y;
        a.ka.Gra.x = 0;
        a.ka.Gra.y = 0;
        s_m(
          s_if ? a.ka.ala : document,
          s_if ? "touchmove" : "mousemove",
          a.Hb,
          !1,
          a,
        );
        s_m(
          s_if ? a.ka.ala : document,
          s_if ? "touchend" : "mouseup",
          a.Db,
          !1,
          a,
        );
        a.ka.ala && s_sj(a.ka.ala, "thso6e");
      }
    };
  s_nI.prototype.Hb = function (a) {
    s_Qpe(this) &&
      ((a = s_Vpe(this, a.clientX, a.clientY)),
      (this.ka.uoa.x = a.x),
      (this.ka.uoa.y = a.y),
      (a = this.ka.uoa.y - this.ka.bKa.y),
      this.ka.swb.set(
        this.ka.lP.id,
        this.ka.Ar.x + (this.ka.uoa.x - this.ka.bKa.x),
      ),
      (this.ka.targetY = this.ka.Ar.y + a),
      (this.ka.Gra.x = Math.max(
        this.ka.Gra.x,
        Math.abs(this.ka.uoa.x - this.ka.bKa.x),
      )),
      (this.ka.Gra.y = Math.max(
        this.ka.Gra.y,
        Math.abs(this.ka.uoa.y - this.ka.bKa.y),
      )),
      s_oI(this, this.ka.lP, !1));
  };
  s_nI.prototype.Db = function () {
    if (s_Qpe(this)) {
      s_Dg(
        s_if ? this.ka.ala : document,
        s_if ? "touchmove" : "mousemove",
        this.Hb,
        !1,
        this,
      );
      s_Dg(
        s_if ? this.ka.ala : document,
        s_if ? "touchend" : "mouseup",
        this.Db,
        !1,
        this,
      );
      var a = Date.now() - this.ka.Bib,
        b = s_Tna(this.ka.Gra);
      500 > a && 10 > b && -1 !== this.ka.X4
        ? s_oI(this, this.ka.lP, !0, this.ka.X4)
        : s_oI(this, this.ka.lP, !0);
      this.ka.Bib = -1;
      this.ka.ala && s_uj(this.ka.ala, "thso6e");
    }
  };
  var s_Vpe = function (a, b, c) {
      if (!a.jk) return new s_Ug(b, c);
      a = window.screen.orientation.angle;
      return 0 > a && 180 >= a ? new s_Ug(c, -b) : new s_Ug(-c, b);
    },
    s_Tpe = function (a, b) {
      a = s_ti(a.Ga);
      var c = s_li(b).width;
      return Math.min(
        b.children.length - 1,
        Math.max(
          0,
          Math.floor(((a.width / 2 - s_ai(b).x) / c) * b.children.length),
        ),
      );
    },
    s_oI = function (a, b, c, d) {
      d = void 0 === d ? -1 : d;
      d = -1 !== d ? d : s_Tpe(a, b);
      for (var e = 0; e < b.children.length; e++) {
        var f = b.children[e];
        e === d
          ? (s_uj(f, "SsAred"), s_sj(f, "tuJOWd"))
          : (s_sj(f, "SsAred"), s_uj(f, "tuJOWd"));
      }
      c &&
        ((c = s_ti(a.Ga)),
        (e = s_li(b).width / b.children.length),
        a.ka.swb.set(b.id, c.width / 2 - (d + 0.5) * e));
      c = 0 <= d && d < b.children.length ? b.children[d] : null;
      switch (b.id) {
        case "apple":
          a.settings.Wm = d;
          null !== c && (a.settings.nb = c.src);
          break;
        case "trophy":
          a.settings.Hb = d;
          null !== c && (a.settings.Pb = c.src);
          break;
        case "count":
          a.settings.Xa = d;
          break;
        case "speed":
          a.settings.Ra = d;
          break;
        case "size":
          a.settings.Cb = d;
          break;
        case "color":
          a.settings.Db = d;
          a.settings.Ba =
            a.settings.Db >= s_3H.length
              ? Math.floor(Math.random() * s_3H.length)
              : a.settings.Db;
          a.settings.zc = !1;
          break;
        case "theme":
          (a.settings.Lb = d),
            (a.settings.Sa =
              a.settings.Lb >= s_4H.length
                ? Math.floor(Math.random() * s_4H.length)
                : a.settings.Lb),
            (a.settings.Lc = !1);
      }
      s_Lpe(a);
    };
  s_nI.prototype.V9b = function () {
    if (this.visible) {
      if ("settings" === this.wa) {
        var a = Math.floor(21 * Math.random());
        a += a >= this.settings.Wm ? 1 : 0;
        var b = Math.floor(13 * Math.random());
        b += b >= this.settings.Hb ? 1 : 0;
        var c = Math.floor(Math.random() * s_3H.length);
        c += c >= this.settings.Db ? 1 : 0;
        var d = 0.25 > Math.random() ? (0.25 > Math.random() ? 2 : 1) : 0,
          e = 0.25 > Math.random() ? (0.25 > Math.random() ? 2 : 1) : 0,
          f = 0.33 > Math.random() ? (0.33 > Math.random() ? 2 : 1) : 0,
          g = Math.floor(Math.random() * s_4H.length);
        g += g >= this.settings.Lb ? 1 : 0;
        s_oI(this, this.ka.Vsa.get("apple"), !0, a);
        s_oI(this, this.ka.Vsa.get("trophy"), !0, b);
        s_oI(this, this.ka.Vsa.get("count"), !0, f);
        s_oI(this, this.ka.Vsa.get("speed"), !0, d);
        s_oI(this, this.ka.Vsa.get("size"), !0, e);
        s_oI(this, this.ka.Vsa.get("color"), !0, c);
        s_oI(this, this.ka.Vsa.get("theme"), !0, g);
      } else if ("combo" === this.wa) {
        var k = s_Uoe(!1);
        this.settings.Qa.forEach(function (h, l) {
          k.has(l) ? s_sj(h, "lH9Ipd") : s_uj(h, "lH9Ipd");
        });
      }
      s_T(this.uc);
    }
  };
  var s_pI = function (a) {
    s_n.call(this, a.Ka);
    var b = this;
    this.settings = new s_Soe(this.getRoot().el());
    this.muted = this.wa = this.Ma = !1;
    this.closed = !0;
    this.Aa = new s_noe();
    this.Ba = new s_xoe();
    this.Ga = new s_ipe();
    this.Da = new s_6oe();
    this.La = new s_zpe();
    this.Kd = a.service.Kd;
    this.Oa = function () {};
    s_VE(this);
    this.Qa = new s_xw(document);
    s_m(this.Qa, "key", function (c) {
      return b.LD(c);
    });
    s_m(this.getRoot().el(), "touchstart", function (c) {
      return b.OD(c);
    });
    s_m(this.getRoot().el(), "touchmove", function (c) {
      return b.DQ(c);
    });
    s_m(this.getRoot().el(), "touchend", function (c) {
      return b.VT(c);
    });
    this.Kd.addListener(function () {
      s_Xpe(b);
    });
    s_E(this.Ca("y7GBZ").el(), "visibility", "hidden");
    this.menu = new s_nI(
      this.settings,
      this.Ca("XRjYde").el(),
      this.Ca("Rs1rF").el(),
      this.Ca("kAVrAc").Hd(),
      this.Ca("akczce").el(),
      this.Ca("wXSCdb").el(),
      this.Ca("iyH4Cb").el(),
      this.Ca("VODc4e").el(),
      this.Ca("oUUYK").el(),
      this.Ca("qycu7d").el(),
      this.Ca("h6Ousc").Hd(),
      this.Ca("piGvM").el(),
      this.Ca("lFrxS").el(),
      this.Ca("LpoWPe").Hd(),
      this.Ca("LOtDEe").el(),
      this.Ca("Vp6PHf").el(),
    );
    this.header = new s_Ipe(
      this.settings,
      this.Ca("P0FCKc").el(),
      this.Ca("A0kWCf").el(),
      this.Ca("E5ziSe").el(),
      this.Ca("lh7ff").Hd(),
      this.Ca("UEI8qf").Hd(),
      this.Ca("N7ntOd").Hd(),
      this.Ca("p57eQc").el(),
      this.Ca("Fh1nkd").el(),
      this.Ca("yddQF").el(),
      this.Ca("DIdRlc").el(),
      this.Ca("lulO0b").el(),
    );
    this.ka = new s_Fpe(this.settings, this.menu, this.header);
    this.oa = new s_Poe(this.ka, this.settings, this.Ca("UzWXSb").Hd());
    s_if ||
      s_rd("snake.speedrun", function () {
        s_Jpe(b.header);
      });
    s_rd("snake.setCustomTheme", function (c, d, e, f, g, k, h) {
      s_tNd(c) &&
        s_tNd(d) &&
        s_tNd(e) &&
        s_tNd(f) &&
        s_tNd(g) &&
        s_tNd(k) &&
        s_tNd(h) &&
        ((b.settings.Ga = [c, d, e, f, g, k, h]),
        s_Rpe(b.menu),
        s_Ype(b),
        s_boe(b.oa.Qa));
    });
    s_rd("snake.clearCustomTheme", function () {
      b.settings.Ga = void 0;
      s_Rpe(b.menu);
      s_Ype(b);
      s_boe(b.oa.Qa);
    });
    this.getData("isStandalone").isDefined() && (this.pAa(), this.Mca());
  };
  s_r(s_pI, s_n);
  s_pI.Ea = function () {
    return {
      service: {
        Kd: s_2m,
      },
    };
  };
  s_ = s_pI.prototype;
  s_.cNd = function () {
    return this.settings;
  };
  s_.INb = function () {
    return this.ka;
  };
  s_.qQd = function () {
    return this.menu;
  };
  s_.CUd = function () {
    return this.menu.ka;
  };
  s_.eia = function () {
    return this.oa.canvas;
  };
  s_.tNd = function () {
    return s_6h(this.Ca("P0FCKc").el(), "background-color");
  };
  s_.WTd = function () {
    return s_6h(this.Ca("Rs1rF").el(), "background-color");
  };
  s_.yPa = function () {
    if (this.menu.isVisible() || this.ka.ik) {
      var a = this.settings;
      a.Vb = a.Db;
      a.Da = a.Wm;
      a.Ma = a.Hb;
      a.wa = a.Xa;
      a.Oa = a.Ra;
      a.Aa = a.Cb;
      a.uc = a.Lb;
      s_8H(a, 15) && s_Voe(a);
      a.Vb >= s_3H.length
        ? a.zc
          ? (a.oa = Math.floor(Math.random() * s_3H.length))
          : ((a.oa = a.Ba), (a.zc = !0))
        : ((a.oa = a.Vb), (a.zc = !1));
      a.Ba = a.oa;
      a.uc >= s_4H.length
        ? a.Lc
          ? (a.ka = Math.floor(Math.random() * s_4H.length))
          : ((a.ka = a.Sa), (a.Lc = !0))
        : ((a.ka = a.uc), (a.Lc = !1));
      a.Sa = a.ka;
      a = this.header;
      s_8H(a.settings, 14) ? s_uj(a.Da, "LaTyvd") : s_sj(a.Da, "LaTyvd");
      "" !== a.settings.nb && (a.Oa.src = a.settings.nb);
      "" !== a.settings.Pb && (a.Ga.src = a.settings.Pb);
      a = this.ka.oa;
      if (0 === a.settings.oa || 10 === a.settings.oa)
        (a.Ce = s_3H[0][0]), (a.We = s_3H[0][1]);
      else {
        var b = s_3H[a.settings.oa];
        a.Ce = b[0];
        a.We = b[1];
      }
      s_8H(a.settings, 7) && ((a.Aa = 0), (a.Xa = !1));
      a = this.oa;
      if (0 === a.settings.oa || 10 === a.settings.oa)
        (b = a.Ga), s_6H(b.wa), s_6H(b.Da), s_6H(b.Ba), s_6H(b.Aa);
      else {
        b = a.Ga;
        var c = a.ka.oa.Ce;
        s_7H(b.wa, "#5282F2", c);
        s_7H(b.Da, "#5282F2", c);
        s_7H(b.Ba, "#5282F2", c);
        c = s_ANd(c);
        var d = s_ANd("#C73104");
        d[0] = (c[0] + 180) % 360;
        s_7H(b.Aa, "#C73104", s_PE(s_yNd(d[0], d[1], d[2])));
      }
      s_8H(a.settings, 7) &&
        ((b = s_jI(a.ka, 0, 0, 0, !0)),
        (c = a.Ga),
        s_7H(
          c.Ra,
          "#C73104",
          10 === a.settings.oa ? s_Wne[0] : s_3H[a.settings.oa][0],
        ),
        s_7H(c.Aa, "#C73104", b),
        s_7H(c.La, "#5282F2", b),
        s_7H(c.Qa, "#5282F2", b),
        s_7H(c.Oa, "#5282F2", b));
      s_Ype(this);
      s_T(this.Ca("NSjDf").el(), {
        data: {
          fun: this.settings.toString(),
        },
      });
      this.reset();
    }
  };
  var s_Ype = function (a) {
    if (0 !== a.settings.ka || a.settings.Ga) {
      s_E(a.header.kqa, "background-color", s_eI(a.settings, a.settings.ka, 5));
      var b = a.oa,
        c = s_eI(a.settings, a.settings.ka, 0);
      s_7H(b.Oa.wa, s_4H[0][4], s_eI(a.settings, a.settings.ka, 4));
      s_7H(b.Da.oa, s_4H[0][0], c, 5);
    } else
      s_E(a.header.kqa, "background-color", ""),
        (a = a.oa),
        s_6H(a.Oa.wa),
        s_6H(a.Da.oa);
  };
  s_pI.prototype.reset = function () {
    this.ka.ka.oa = 0;
    this.Lca();
    try {
      this.resetState();
    } catch (a) {}
  };
  s_pI.prototype.resetState = function (a) {
    a = void 0 === a ? !0 : a;
    this.ka.reset();
    s_8H(this.settings, 10) && s_hpe.Ykc.ka.preload();
    s_8H(this.settings, 12) && s_5oe.DUa.ka.preload();
    s_8H(this.settings, 13) && s_ype.blc.ka.preload();
    var b = 0 !== this.settings.Ma || this.ka.Qa.has(s_Xoe(this.settings));
    this.header.ka = b;
    b = this.header;
    s_Bh(b.Aa, "25");
    s_Bh(b.Ba, "--:--:---");
    this.wa = this.jk();
    this.menu.jk = this.wa;
    a && s_Ope(this.menu, !1, this.ka.Mg);
  };
  var s_Xpe = function (a) {
    s_if &&
      (s_rpe(a.ka.oa),
      s_Ppe(a.menu, a.jk()),
      s_Kh(function () {
        a.Lca();
      }));
  };
  s_ = s_pI.prototype;
  s_.j2b = function () {
    s_Xpe(this);
  };
  s_.jk = function () {
    return "orientation" in window && this.Kd.jk();
  };
  s_.LD = function (a) {
    if (!this.closed) {
      var b = s_ope(this.ka.oa),
        c = s_spe(this.ka.oa),
        d = s_Qpe(this.menu);
      switch (a.keyCode) {
        case 77:
          this.lfa();
          break;
        case 32:
        case 82:
        case 13:
          (this.menu.isVisible() || this.ka.ik) && this.yPa();
          break;
        case 38:
        case 87:
          d
            ? s_Upe(this.menu, 0, -1)
            : ("DOWN" !== b || c) && s_Zpe(this, "UP");
          break;
        case 40:
        case 83:
          d ? s_Upe(this.menu, 0, 1) : ("UP" !== b || c) && s_Zpe(this, "DOWN");
          break;
        case 37:
        case 65:
          d
            ? s_Upe(this.menu, -1, 0)
            : ("RIGHT" !== b || c) && s_Zpe(this, "LEFT");
          break;
        case 39:
        case 68:
          d
            ? s_Upe(this.menu, 1, 0)
            : ("LEFT" !== b || c) && s_Zpe(this, "RIGHT");
          break;
        case 27:
          this.cDc(!0);
          break;
        case 84:
          s_if || s_Jpe(this.header);
          break;
        default:
          return;
      }
      a.preventDefault();
    }
  };
  s_.OD = function (a) {
    a.target === this.oa.canvas && a.preventDefault();
  };
  s_.DQ = function (a) {
    a.preventDefault();
    a = a.Je.touches[0];
    if (this.ka.Hb) {
      if (this.menu.isVisible() || this.ka.ik) return;
      var b = a.clientX - this.ka.Hb.x,
        c = a.clientY - this.ka.Hb.y;
      if (this.jk()) {
        var d = window.screen.orientation.angle;
        0 > d && 180 >= d
          ? ((d = c), (c = -b), (b = d))
          : ((d = c), (c = b), (b = -d));
      }
      if (
        Math.max(Math.abs(b), Math.abs(c)) <
        40 * (1 + 0.5 * Math.min(2, this.ka.Pb))
      )
        return;
      d = s_ope(this.ka.oa);
      var e = s_spe(this.ka.oa),
        f = "NONE";
      Math.abs(b) > Math.abs(c)
        ? (0 < b && ("LEFT" !== d || e) && (f = "RIGHT"),
          0 > b && ("RIGHT" !== d || e) && (f = "LEFT"))
        : (0 < c && ("UP" !== d || e) && (f = "DOWN"),
          0 > c && ("DOWN" !== d || e) && (f = "UP"));
      s_Zpe(this, f);
    }
    this.ka.Hb = new s_Ug(a.clientX, a.clientY);
  };
  s_.VT = function (a) {
    a.target === this.oa.canvas && a.preventDefault();
    this.ka.Hb = null;
  };
  var s_Zpe = function (a, b) {
    if (!(a.menu.isVisible() || a.ka.ik || a.closed)) {
      var c = a.ka.oa,
        d = "NONE" !== c.Ba ? c.Ba : c.direction,
        e = d === b && "NONE" === c.Ba;
      0 < c.Aa
        ? ("NONE" === c.direction && "NONE" !== c.Da && (c.direction = c.Da),
          1 !== c.Aa || e || "NONE" !== c.Hb || (c.Hb = b))
        : ("NONE" === b ||
            e ||
            (c.Lb
              ? (c.Hb = b)
              : ((c.Da = "NONE" === d ? b : d),
                (c.direction = b),
                (c.Lb = !0),
                s_ppe(c)),
            c.Ma ||
              "NONE" === c.Ba ||
              s_8H(c.settings, 2) ||
              (("LEFT" === c.direction || "UP" === c.direction) && s_hoe(c.oa)),
            (c.Ba = "NONE")),
          (c.zc = !1));
      a.nqa();
      s_woe.vzb.ka.preload();
    }
  };
  s_ = s_pI.prototype;
  s_.nqa = function () {
    var a = this.Ca("IoE5Ec").el();
    s_ni(a, 0);
    s_Yi(function () {
      s_E(a, "visibility", "hidden");
    }, 200);
  };
  s_.Co = function (a) {
    if (this.Ma && !this.closed) {
      var b = this.ka.update(a);
      this.render((a - this.ka.Xa) / this.ka.Sa, b);
      this.menu.update();
      b = this.header;
      var c = this.ka.Sa;
      b.oa &&
        s_Bh(
          b.Ra,
          s_Nne(
            this.ka.ik && 0 < this.ka.Cb && "NONE" !== this.ka.oa.direction
              ? this.ka.Cb * c
              : this.ka.ticks * c + (a - this.ka.Xa),
          ),
        );
    }
  };
  s_.pAa = function () {
    var a = this.getRoot().el();
    this.Aa.init(a);
    this.Ba.init(a);
    this.Ga.init(a);
    this.Da.init(a);
    this.La.init(a);
    s_iI.DOWN.ka.preload();
  };
  s_.Mca = function () {
    this.wa = this.jk();
    this.menu.jk = this.wa;
    this.Oa = s_sie(this);
    this.Lca();
    this.resetState(!1);
    this.Ma = !0;
    this.closed = !1;
  };
  s_.Lca = function () {
    var a = s_ti(this.oa.canvas);
    if (0 !== a.width) {
      var b = a.width,
        c = a.height,
        d = !this.jk() && !this.wa;
      b -= d ? 40 : 0;
      c -= d ? 40 : 0;
      a: switch (this.settings.Aa) {
        case 2:
          var e = 512;
          break a;
        case 1:
          e = 96;
          break a;
        default:
          e = 256;
      }
      d = this.ka;
      var f = d.ka;
      e = (b * c) / e;
      f.oa
        ? (f.oa = Math.min(
            Math.floor(b / f.ka.width),
            Math.floor(c / f.ka.height),
          ))
        : ((f.oa = Math.floor(Math.sqrt(e))),
          (f.ka = new s_Yg(Math.floor(b / f.oa), Math.floor(c / f.oa))));
      d.uc = d.ka.oa / 128;
      b = this.oa;
      b.Ra = a;
      b.canvas.width = b.Ra.width;
      b.canvas.height = b.Ra.height;
      b.La.canvas.width = b.ka.ka.ka.width * b.ka.ka.oa;
      b.La.canvas.height = b.ka.ka.ka.height * b.ka.ka.oa;
      b.Ba.canvas.width = b.ka.ka.ka.width * b.ka.ka.oa;
      b.Ba.canvas.height = b.ka.ka.ka.height * b.ka.ka.oa;
      a = s_8H(b.settings, 4) ? 4 : 0;
      b.oa.canvas.width = (b.ka.ka.ka.width + a) * b.ka.ka.oa;
      b.oa.canvas.height = (b.ka.ka.ka.height + a) * b.ka.ka.oa;
      b.Aa.canvas.width = b.oa.canvas.width;
      b.Aa.canvas.height = b.oa.canvas.height;
      b.wa.canvas.width = (b.ka.ka.ka.width + a) * b.ka.ka.oa;
      b.wa.canvas.height = (b.ka.ka.ka.height + a) * b.ka.ka.oa;
      s_boe(this.oa.Qa);
      a = this.menu;
      b = s_ti(a.Ba);
      0 < b.width &&
        0 < b.height &&
        ((a.Aa.canvas.width = b.width), (a.Aa.canvas.height = b.height));
      s_Npe(a);
    }
  };
  s_.render = function (a, b) {
    this.oa.render(a, b);
    a = String(
      this.ka.Qa.has(s_Xoe(this.settings))
        ? this.ka.Qa.get(s_Xoe(this.settings))
        : 0,
    );
    b = this.header;
    var c = this.ka.Mg;
    s_E(b.Ga, "visibility", b.ka ? "visible" : "hidden");
    s_E(b.La, "visibility", b.ka ? "visible" : "hidden");
    s_Bh(b.Qa, c);
    s_Bh(b.La, a);
    a = String(
      this.ka.Qa.has(s_Xoe(this.settings, !0))
        ? this.ka.Qa.get(s_Xoe(this.settings, !0))
        : 0,
    );
    b = this.menu;
    s_Bh(b.Sc, this.ka.Mg);
    s_Bh(b.Lc, a);
  };
  s_.Ls = function () {
    s_9q([new s_Qi(this.getRoot().el(), "hide")]);
    this.Oa();
    this.trigger(s_lr("snake_closed"));
  };
  s_.XDa = function () {
    this.closed = !0;
    s_Mpe(this.menu);
  };
  s_.cDc = function (a) {
    a = void 0 === a ? !1 : a;
    (!s_8H(this.settings, 14) && !a) ||
      this.ka.ik ||
      this.menu.isVisible() ||
      ((this.ka.zc = !0),
      (this.ka.ik = !0),
      (this.ka.nb = !0),
      s_Hpe(this.menu, 0, this.ka.Mg),
      (a = this.ka.oa),
      "NONE" !== a.direction && (a.nb = a.ka[a.ka.length - 1]),
      s_8H(this.settings, 5) && s_wpe(this.ka.oa),
      s_8H(this.settings, 11) && (this.ka.La = !1),
      this.ka.khb(),
      (a = (Date.now() - this.ka.Xa) / this.ka.Sa),
      (this.ka.Cb = this.ka.ticks + a));
  };
  s_.lfa = function () {
    this.muted = !this.muted;
    this.header.lfa(this.muted);
    this.muted
      ? (s_7ee(this.Aa),
        s_7ee(this.Ba),
        s_7ee(this.Ga),
        s_7ee(this.Da),
        s_7ee(this.La))
      : (s_8ee(this.Aa),
        s_8ee(this.Ba),
        s_8ee(this.Ga),
        s_8ee(this.Da),
        s_8ee(this.La));
  };
  s_.Z1b = function () {
    this.menu.Z1b();
  };
  s_.D1b = function () {
    this.menu.D1b();
  };
  s_.Drb = function () {
    this.menu.Drb();
  };
  s_.PQb = function (a) {
    this.menu.PQb(a.targetElement.el());
  };
  s_.sme = function (a) {
    s_Qpe(this.menu) &&
      (s_if ||
        0 !== a.event.button ||
        s_Wpe(
          this.menu,
          a.event.clientX,
          a.event.clientY,
          a.event.offsetX,
          a.targetElement.el(),
        ));
  };
  s_.xme = function (a) {
    if (s_Qpe(this.menu)) {
      var b = a.event;
      if (
        s_if &&
        void 0 !== b.touches &&
        null !== b.touches &&
        0 !== b.touches.length
      ) {
        a = a.targetElement.el();
        b = b.touches[0];
        var c = a.getBoundingClientRect();
        s_Wpe(this.menu, b.clientX, b.clientY, b.pageX - c.left, a);
      }
    }
  };
  s_.V9b = function () {
    this.menu.V9b();
  };
  s_.O2e = function () {
    s_Lpe(this.menu);
  };
  s_J(s_pI.prototype, "aNnDbe", function () {
    return this.O2e;
  });
  s_J(s_pI.prototype, "Km979c", function () {
    return this.V9b;
  });
  s_J(s_pI.prototype, "wGlzEb", function () {
    return this.xme;
  });
  s_J(s_pI.prototype, "NB8Tmd", function () {
    return this.sme;
  });
  s_J(s_pI.prototype, "oAxMnf", function () {
    return this.PQb;
  });
  s_J(s_pI.prototype, "AFvrle", function () {
    return this.Drb;
  });
  s_J(s_pI.prototype, "siBdCd", function () {
    return this.D1b;
  });
  s_J(s_pI.prototype, "rxqFXd", function () {
    return this.Z1b;
  });
  s_J(s_pI.prototype, "DGXxE", function () {
    return this.lfa;
  });
  s_J(s_pI.prototype, "nPcntd", function () {
    return this.cDc;
  });
  s_J(s_pI.prototype, "DtamMe", function () {
    return this.XDa;
  });
  s_J(s_pI.prototype, "pRhyN", function () {
    return this.Ls;
  });
  s_J(s_pI.prototype, "N9WUh", function () {
    return this.Lca;
  });
  s_J(s_pI.prototype, "SQ1Mjf", function () {
    return this.Mca;
  });
  s_J(s_pI.prototype, "qJhGM", function () {
    return this.pAa;
  });
  s_J(s_pI.prototype, "Q9K5of", function () {
    return this.j2b;
  });
  s_J(s_pI.prototype, "JrrOHc", function () {
    return this.yPa;
  });
  s_J(s_pI.prototype, "FLGh5d", function () {
    return this.WTd;
  });
  s_J(s_pI.prototype, "CA8Mtd", function () {
    return this.tNd;
  });
  s_J(s_pI.prototype, "TrTq0c", function () {
    return this.eia;
  });
  s_J(s_pI.prototype, "PJl2Ef", function () {
    return this.CUd;
  });
  s_J(s_pI.prototype, "jzB25", function () {
    return this.qQd;
  });
  s_J(s_pI.prototype, "YDgswc", function () {
    return this.INb;
  });
  s_J(s_pI.prototype, "SDpWVc", function () {
    return this.cNd;
  });
  s_S(s_JKa, s_pI);
  s_b();
} catch (e) {
  _DumpException(e);
}
