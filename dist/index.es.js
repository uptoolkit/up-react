import { jsx as P, Fragment as dt } from "react/jsx-runtime";
import { createContext as gt, useState as Y, useEffect as vt } from "react";
import { Config as wt } from "js-config-helper";
import X from "axios";
import { Form as K } from "js-form-helper";
import k from "i18next";
import { initReactI18next as _t } from "react-i18next";
import { createHttpLink as Ot, ApolloClient as xt, InMemoryCache as Et, ApolloProvider as St } from "@apollo/client";
var R = function(t, e) {
  return R = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
  }, R(t, e);
};
function at(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  R(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var m = function() {
  return m = Object.assign || function(e) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, m.apply(this, arguments);
};
function qt(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
}
var L = "Invariant Violation", Q = Object.setPrototypeOf, jt = Q === void 0 ? function(t, e) {
  return t.__proto__ = e, t;
} : Q, x = function(t) {
  at(e, t);
  function e(n) {
    n === void 0 && (n = L);
    var r = t.call(this, typeof n == "number" ? L + ": " + n + " (see https://github.com/apollographql/invariant-packages)" : n) || this;
    return r.framesToPop = 1, r.name = L, jt(r, e.prototype), r;
  }
  return e;
}(Error);
function E(t, e) {
  if (!t)
    throw new x(e);
}
var st = ["debug", "log", "warn", "error", "silent"], At = st.indexOf("log");
function S(t) {
  return function() {
    if (st.indexOf(t) >= At) {
      var e = console[t] || console.log;
      return e.apply(console, arguments);
    }
  };
}
(function(t) {
  t.debug = S("debug"), t.log = S("log"), t.warn = S("warn"), t.error = S("error");
})(E || (E = {}));
function d(t) {
  try {
    return t();
  } catch {
  }
}
const W = d(function() {
  return globalThis;
}) || d(function() {
  return window;
}) || d(function() {
  return self;
}) || d(function() {
  return global;
}) || d(function() {
  return d.constructor("return this")();
});
var Z = "__", tt = [Z, Z].join("DEV");
function Tt() {
  try {
    return Boolean(__DEV__);
  } catch {
    return Object.defineProperty(W, tt, {
      value: d(function() {
        return process.env.NODE_ENV;
      }) !== "production",
      enumerable: !1,
      configurable: !0,
      writable: !0
    }), W[tt];
  }
}
const N = Tt();
function b(t) {
  try {
    return t();
  } catch {
  }
}
var M = b(function() {
  return globalThis;
}) || b(function() {
  return window;
}) || b(function() {
  return self;
}) || b(function() {
  return global;
}) || b(function() {
  return b.constructor("return this")();
}), $ = !1;
function Ct() {
  M && !b(function() {
    return process.env.NODE_ENV;
  }) && !b(function() {
    return process;
  }) && (Object.defineProperty(M, "process", {
    value: {
      env: {
        NODE_ENV: "production"
      }
    },
    configurable: !0,
    enumerable: !1,
    writable: !0
  }), $ = !0);
}
Ct();
function et() {
  $ && (delete M.process, $ = !1);
}
function I(t, e) {
  if (!Boolean(t))
    throw new Error(e);
}
const Pt = 10, lt = 2;
function kt(t) {
  return C(t, []);
}
function C(t, e) {
  switch (typeof t) {
    case "string":
      return JSON.stringify(t);
    case "function":
      return t.name ? `[function ${t.name}]` : "[function]";
    case "object":
      return Lt(t, e);
    default:
      return String(t);
  }
}
function Lt(t, e) {
  if (t === null)
    return "null";
  if (e.includes(t))
    return "[Circular]";
  const n = [...e, t];
  if (Nt(t)) {
    const r = t.toJSON();
    if (r !== t)
      return typeof r == "string" ? r : C(r, n);
  } else if (Array.isArray(t))
    return Dt(t, n);
  return It(t, n);
}
function Nt(t) {
  return typeof t.toJSON == "function";
}
function It(t, e) {
  const n = Object.entries(t);
  if (n.length === 0)
    return "{}";
  if (e.length > lt)
    return "[" + Vt(t) + "]";
  const r = n.map(
    ([o, i]) => o + ": " + C(i, e)
  );
  return "{ " + r.join(", ") + " }";
}
function Dt(t, e) {
  if (t.length === 0)
    return "[]";
  if (e.length > lt)
    return "[Array]";
  const n = Math.min(Pt, t.length), r = t.length - n, o = [];
  for (let i = 0; i < n; ++i)
    o.push(C(t[i], e));
  return r === 1 ? o.push("... 1 more item") : r > 1 && o.push(`... ${r} more items`), "[" + o.join(", ") + "]";
}
function Vt(t) {
  const e = Object.prototype.toString.call(t).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof t.constructor == "function") {
    const n = t.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return e;
}
class Ut {
  constructor(e, n = "GraphQL request", r = {
    line: 1,
    column: 1
  }) {
    typeof e == "string" || I(!1, `Body must be a string. Received: ${kt(e)}.`), this.body = e, this.name = n, this.locationOffset = r, this.locationOffset.line > 0 || I(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || I(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Rt() {
  return et();
}
function Mt() {
  __DEV__ ? E(typeof N == "boolean", N) : E(typeof N == "boolean", 39);
}
Rt();
Mt();
function $t(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition" && !!e.name;
  }).map(function(e) {
    return e.name.value;
  })[0] || null;
}
function Bt(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n)
    return (n = n.call(t)).next.bind(n);
  if (Array.isArray(t) || (n = zt(t)) || e && t && typeof t.length == "number") {
    n && (t = n);
    var r = 0;
    return function() {
      return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zt(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return nt(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return nt(t, e);
  }
}
function nt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function rt(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function F(t, e, n) {
  return e && rt(t.prototype, e), n && rt(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var G = function() {
  return typeof Symbol == "function";
}, H = function(t) {
  return G() && Boolean(Symbol[t]);
}, J = function(t) {
  return H(t) ? Symbol[t] : "@@" + t;
};
G() && !H("observable") && (Symbol.observable = Symbol("observable"));
var Ft = J("iterator"), B = J("observable"), pt = J("species");
function T(t, e) {
  var n = t[e];
  if (n != null) {
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    return n;
  }
}
function _(t) {
  var e = t.constructor;
  return e !== void 0 && (e = e[pt], e === null && (e = void 0)), e !== void 0 ? e : l;
}
function Gt(t) {
  return t instanceof l;
}
function v(t) {
  v.log ? v.log(t) : setTimeout(function() {
    throw t;
  });
}
function j(t) {
  Promise.resolve().then(function() {
    try {
      t();
    } catch (e) {
      v(e);
    }
  });
}
function ht(t) {
  var e = t._cleanup;
  if (e !== void 0 && (t._cleanup = void 0, !!e))
    try {
      if (typeof e == "function")
        e();
      else {
        var n = T(e, "unsubscribe");
        n && n.call(e);
      }
    } catch (r) {
      v(r);
    }
}
function z(t) {
  t._observer = void 0, t._queue = void 0, t._state = "closed";
}
function Ht(t) {
  var e = t._queue;
  if (!!e) {
    t._queue = void 0, t._state = "ready";
    for (var n = 0; n < e.length && (yt(t, e[n].type, e[n].value), t._state !== "closed"); ++n)
      ;
  }
}
function yt(t, e, n) {
  t._state = "running";
  var r = t._observer;
  try {
    var o = T(r, e);
    switch (e) {
      case "next":
        o && o.call(r, n);
        break;
      case "error":
        if (z(t), o)
          o.call(r, n);
        else
          throw n;
        break;
      case "complete":
        z(t), o && o.call(r);
        break;
    }
  } catch (i) {
    v(i);
  }
  t._state === "closed" ? ht(t) : t._state === "running" && (t._state = "ready");
}
function D(t, e, n) {
  if (t._state !== "closed") {
    if (t._state === "buffering") {
      t._queue.push({
        type: e,
        value: n
      });
      return;
    }
    if (t._state !== "ready") {
      t._state = "buffering", t._queue = [{
        type: e,
        value: n
      }], j(function() {
        return Ht(t);
      });
      return;
    }
    yt(t, e, n);
  }
}
var Jt = /* @__PURE__ */ function() {
  function t(n, r) {
    this._cleanup = void 0, this._observer = n, this._queue = void 0, this._state = "initializing";
    var o = new Yt(this);
    try {
      this._cleanup = r.call(void 0, o);
    } catch (i) {
      o.error(i);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var e = t.prototype;
  return e.unsubscribe = function() {
    this._state !== "closed" && (z(this), ht(this));
  }, F(t, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), t;
}(), Yt = /* @__PURE__ */ function() {
  function t(n) {
    this._subscription = n;
  }
  var e = t.prototype;
  return e.next = function(r) {
    D(this._subscription, "next", r);
  }, e.error = function(r) {
    D(this._subscription, "error", r);
  }, e.complete = function() {
    D(this._subscription, "complete");
  }, F(t, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), t;
}(), l = /* @__PURE__ */ function() {
  function t(n) {
    if (!(this instanceof t))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof n != "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = n;
  }
  var e = t.prototype;
  return e.subscribe = function(r) {
    return (typeof r != "object" || r === null) && (r = {
      next: r,
      error: arguments[1],
      complete: arguments[2]
    }), new Jt(r, this._subscriber);
  }, e.forEach = function(r) {
    var o = this;
    return new Promise(function(i, u) {
      if (typeof r != "function") {
        u(new TypeError(r + " is not a function"));
        return;
      }
      function f() {
        c.unsubscribe(), i();
      }
      var c = o.subscribe({
        next: function(s) {
          try {
            r(s, f);
          } catch (a) {
            u(a), c.unsubscribe();
          }
        },
        error: u,
        complete: i
      });
    });
  }, e.map = function(r) {
    var o = this;
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    var i = _(this);
    return new i(function(u) {
      return o.subscribe({
        next: function(f) {
          try {
            f = r(f);
          } catch (c) {
            return u.error(c);
          }
          u.next(f);
        },
        error: function(f) {
          u.error(f);
        },
        complete: function() {
          u.complete();
        }
      });
    });
  }, e.filter = function(r) {
    var o = this;
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    var i = _(this);
    return new i(function(u) {
      return o.subscribe({
        next: function(f) {
          try {
            if (!r(f))
              return;
          } catch (c) {
            return u.error(c);
          }
          u.next(f);
        },
        error: function(f) {
          u.error(f);
        },
        complete: function() {
          u.complete();
        }
      });
    });
  }, e.reduce = function(r) {
    var o = this;
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    var i = _(this), u = arguments.length > 1, f = !1, c = arguments[1], s = c;
    return new i(function(a) {
      return o.subscribe({
        next: function(y) {
          var p = !f;
          if (f = !0, !p || u)
            try {
              s = r(s, y);
            } catch (w) {
              return a.error(w);
            }
          else
            s = y;
        },
        error: function(y) {
          a.error(y);
        },
        complete: function() {
          if (!f && !u)
            return a.error(new TypeError("Cannot reduce an empty sequence"));
          a.next(s), a.complete();
        }
      });
    });
  }, e.concat = function() {
    for (var r = this, o = arguments.length, i = new Array(o), u = 0; u < o; u++)
      i[u] = arguments[u];
    var f = _(this);
    return new f(function(c) {
      var s, a = 0;
      function y(p) {
        s = p.subscribe({
          next: function(w) {
            c.next(w);
          },
          error: function(w) {
            c.error(w);
          },
          complete: function() {
            a === i.length ? (s = void 0, c.complete()) : y(f.from(i[a++]));
          }
        });
      }
      return y(r), function() {
        s && (s.unsubscribe(), s = void 0);
      };
    });
  }, e.flatMap = function(r) {
    var o = this;
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    var i = _(this);
    return new i(function(u) {
      var f = [], c = o.subscribe({
        next: function(a) {
          if (r)
            try {
              a = r(a);
            } catch (p) {
              return u.error(p);
            }
          var y = i.from(a).subscribe({
            next: function(p) {
              u.next(p);
            },
            error: function(p) {
              u.error(p);
            },
            complete: function() {
              var p = f.indexOf(y);
              p >= 0 && f.splice(p, 1), s();
            }
          });
          f.push(y);
        },
        error: function(a) {
          u.error(a);
        },
        complete: function() {
          s();
        }
      });
      function s() {
        c.closed && f.length === 0 && u.complete();
      }
      return function() {
        f.forEach(function(a) {
          return a.unsubscribe();
        }), c.unsubscribe();
      };
    });
  }, e[B] = function() {
    return this;
  }, t.from = function(r) {
    var o = typeof this == "function" ? this : t;
    if (r == null)
      throw new TypeError(r + " is not an object");
    var i = T(r, B);
    if (i) {
      var u = i.call(r);
      if (Object(u) !== u)
        throw new TypeError(u + " is not an object");
      return Gt(u) && u.constructor === o ? u : new o(function(f) {
        return u.subscribe(f);
      });
    }
    if (H("iterator") && (i = T(r, Ft), i))
      return new o(function(f) {
        j(function() {
          if (!f.closed) {
            for (var c = Bt(i.call(r)), s; !(s = c()).done; ) {
              var a = s.value;
              if (f.next(a), f.closed)
                return;
            }
            f.complete();
          }
        });
      });
    if (Array.isArray(r))
      return new o(function(f) {
        j(function() {
          if (!f.closed) {
            for (var c = 0; c < r.length; ++c)
              if (f.next(r[c]), f.closed)
                return;
            f.complete();
          }
        });
      });
    throw new TypeError(r + " is not observable");
  }, t.of = function() {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    var u = typeof this == "function" ? this : t;
    return new u(function(f) {
      j(function() {
        if (!f.closed) {
          for (var c = 0; c < o.length; ++c)
            if (f.next(o[c]), f.closed)
              return;
          f.complete();
        }
      });
    });
  }, F(t, null, [{
    key: pt,
    get: function() {
      return this;
    }
  }]), t;
}();
G() && Object.defineProperty(l, Symbol("extensions"), {
  value: {
    symbol: B,
    hostReportError: v
  },
  configurable: !0
});
function Xt(t) {
  var e, n = t.Symbol;
  if (typeof n == "function")
    if (n.observable)
      e = n.observable;
    else {
      typeof n.for == "function" ? e = n.for("https://github.com/benlesh/symbol-observable") : e = n("https://github.com/benlesh/symbol-observable");
      try {
        n.observable = e;
      } catch {
      }
    }
  else
    e = "@@observable";
  return e;
}
var g;
typeof self < "u" ? g = self : typeof window < "u" ? g = window : typeof global < "u" ? g = global : typeof module < "u" ? g = module : g = Function("return this")();
Xt(g);
var ot = l.prototype, it = "@@observable";
ot[it] || (ot[it] = function() {
  return this;
});
function Kt(t) {
  for (var e = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    if (e.indexOf(o) < 0)
      throw __DEV__ ? new x("illegal argument: ".concat(o)) : new x(27);
  }
  return t;
}
function Qt(t, e) {
  var n = m({}, t), r = function(i) {
    typeof i == "function" ? n = m(m({}, n), i(n)) : n = m(m({}, n), i);
  }, o = function() {
    return m({}, n);
  };
  return Object.defineProperty(e, "setContext", {
    enumerable: !1,
    value: r
  }), Object.defineProperty(e, "getContext", {
    enumerable: !1,
    value: o
  }), e;
}
function Wt(t) {
  var e = {
    variables: t.variables || {},
    extensions: t.extensions || {},
    operationName: t.operationName,
    query: t.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? $t(e.query) || void 0 : ""), e;
}
function ut(t, e) {
  return e ? e(t) : l.of();
}
function O(t) {
  return typeof t == "function" ? new mt(t) : t;
}
function q(t) {
  return t.request.length <= 1;
}
var Zt = function(t) {
  at(e, t);
  function e(n, r) {
    var o = t.call(this, n) || this;
    return o.link = r, o;
  }
  return e;
}(Error), mt = function() {
  function t(e) {
    e && (this.request = e);
  }
  return t.empty = function() {
    return new t(function() {
      return l.of();
    });
  }, t.from = function(e) {
    return e.length === 0 ? t.empty() : e.map(O).reduce(function(n, r) {
      return n.concat(r);
    });
  }, t.split = function(e, n, r) {
    var o = O(n), i = O(r || new t(ut));
    return q(o) && q(i) ? new t(function(u) {
      return e(u) ? o.request(u) || l.of() : i.request(u) || l.of();
    }) : new t(function(u, f) {
      return e(u) ? o.request(u, f) || l.of() : i.request(u, f) || l.of();
    });
  }, t.execute = function(e, n) {
    return e.request(Qt(n.context, Wt(Kt(n)))) || l.of();
  }, t.concat = function(e, n) {
    var r = O(e);
    if (q(r))
      return __DEV__ && E.warn(new Zt("You are calling concat on a terminating link, which will have no effect", r)), r;
    var o = O(n);
    return q(o) ? new t(function(i) {
      return r.request(i, function(u) {
        return o.request(u) || l.of();
      }) || l.of();
    }) : new t(function(i, u) {
      return r.request(i, function(f) {
        return o.request(f, u) || l.of();
      }) || l.of();
    });
  }, t.prototype.split = function(e, n, r) {
    return this.concat(t.split(e, n, r || new t(ut)));
  }, t.prototype.concat = function(e) {
    return t.concat(this, e);
  }, t.prototype.request = function(e, n) {
    throw __DEV__ ? new x("request is not implemented") : new x(22);
  }, t.prototype.onError = function(e, n) {
    if (n && n.error)
      return n.error(e), !1;
    throw e;
  }, t.prototype.setOnError = function(e) {
    return this.onError = e, this;
  }, t;
}();
function te(t) {
  return new mt(function(e, n) {
    var r = qt(e, []);
    return new l(function(o) {
      var i, u = !1;
      return Promise.resolve(r).then(function(f) {
        return t(f, e.getContext());
      }).then(e.setContext).then(function() {
        u || (i = n(e).subscribe({
          next: o.next.bind(o),
          error: o.error.bind(o),
          complete: o.complete.bind(o)
        }));
      }).catch(o.error.bind(o)), function() {
        u = !0, i && i.unsubscribe();
      };
    });
  });
}
let V, U, h, ee, ft, ct, A, bt = !1;
const ne = async function(e) {
  h = new wt(e), U = h.get("override.http") || X.create(), V = h.get("override") || X.create({
    baseURL: h.get("api.url")
  }), h.has("exclude.form") || (ft = function(r, o) {
    return new K(r, {
      http: U,
      ...o
    });
  }, ct = function(r, o) {
    return new K(r, {
      http: V,
      ...o
    });
  }), h.has("exclude.i18n") || e.i18n && await k.use(_t).init(e.i18n);
  let n;
  if (!h.has("exclude.graphql"))
    if (h.has("graphql.client"))
      n = h.get("graphql.client");
    else {
      const r = Ot({
        uri: e.graphql.url
      }), o = te(async (i, { headers: u }) => {
        const f = localStorage.getItem("accessToken");
        return {
          headers: {
            ...u,
            Authorization: f ? `Bearer ${f}` : ""
          }
        };
      });
      n = new xt({
        link: o.concat(r),
        cache: new Et()
      });
    }
  return A = {
    config: h,
    api: V,
    http: U,
    i18n: k,
    form: ft,
    formApi: ct,
    store: ee,
    graphqlClient: n,
    t: k.t
  }, h.has("debug") && console.log("\u2934 useUp() accessible vars :", A), bt = !0, A;
}, pe = function() {
  return bt || console.warn("Up is not initialized, you must run setUp() first or add an UpProvider !"), A;
}, re = gt({});
function he({ options: t, children: e }) {
  const [n, r] = Y(!0), [o, i] = Y(), u = async () => {
    const f = await ne(t);
    i(f), r(!1);
  };
  return vt(() => {
    u().then(() => console.log("loaded"));
  }, []), o ? /* @__PURE__ */ P(re.Provider, {
    value: o,
    children: /* @__PURE__ */ P(St, {
      client: o.graphqlClient,
      children: e
    })
  }) : /* @__PURE__ */ P(dt, {});
}
export {
  re as UpContext,
  bt as UpInit,
  he as UpProvider,
  A as exported,
  ne as setUp,
  pe as useUp
};
