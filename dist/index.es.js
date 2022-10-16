import { createContext as ee, useState as te, useEffect as re } from "react";
import { Config as ie } from "js-config-helper";
import q from "axios";
import { message as oe, notification as ne } from "antd";
import { Form as C } from "js-form-helper";
import { ApolloClient as se, HttpLink as ae, InMemoryCache as fe, ApolloProvider as ue } from "@apollo/client";
import x from "i18next";
import { initReactI18next as le } from "react-i18next";
import { jsx as U, Fragment as ce } from "react/jsx-runtime";
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function de(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var R = { exports: {} };
(function(h, l) {
  var d = typeof self < "u" ? self : he, p = function() {
    function n() {
      this.fetch = !1, this.DOMException = d.DOMException;
    }
    return n.prototype = d, new n();
  }();
  (function(n) {
    (function(u) {
      var c = {
        searchParams: "URLSearchParams" in n,
        iterable: "Symbol" in n && "iterator" in Symbol,
        blob: "FileReader" in n && "Blob" in n && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in n,
        arrayBuffer: "ArrayBuffer" in n
      };
      function z(e) {
        return e && DataView.prototype.isPrototypeOf(e);
      }
      if (c.arrayBuffer)
        var G = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], V = ArrayBuffer.isView || function(e) {
          return e && G.indexOf(Object.prototype.toString.call(e)) > -1;
        };
      function w(e) {
        if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
          throw new TypeError("Invalid character in header field name");
        return e.toLowerCase();
      }
      function j(e) {
        return typeof e != "string" && (e = String(e)), e;
      }
      function E(e) {
        var t = {
          next: function() {
            var r = e.shift();
            return { done: r === void 0, value: r };
          }
        };
        return c.iterable && (t[Symbol.iterator] = function() {
          return t;
        }), t;
      }
      function o(e) {
        this.map = {}, e instanceof o ? e.forEach(function(t, r) {
          this.append(r, t);
        }, this) : Array.isArray(e) ? e.forEach(function(t) {
          this.append(t[0], t[1]);
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
          this.append(t, e[t]);
        }, this);
      }
      o.prototype.append = function(e, t) {
        e = w(e), t = j(t);
        var r = this.map[e];
        this.map[e] = r ? r + ", " + t : t;
      }, o.prototype.delete = function(e) {
        delete this.map[w(e)];
      }, o.prototype.get = function(e) {
        return e = w(e), this.has(e) ? this.map[e] : null;
      }, o.prototype.has = function(e) {
        return this.map.hasOwnProperty(w(e));
      }, o.prototype.set = function(e, t) {
        this.map[w(e)] = j(t);
      }, o.prototype.forEach = function(e, t) {
        for (var r in this.map)
          this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
      }, o.prototype.keys = function() {
        var e = [];
        return this.forEach(function(t, r) {
          e.push(r);
        }), E(e);
      }, o.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
          e.push(t);
        }), E(e);
      }, o.prototype.entries = function() {
        var e = [];
        return this.forEach(function(t, r) {
          e.push([r, t]);
        }), E(e);
      }, c.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
      function _(e) {
        if (e.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }
      function F(e) {
        return new Promise(function(t, r) {
          e.onload = function() {
            t(e.result);
          }, e.onerror = function() {
            r(e.error);
          };
        });
      }
      function X(e) {
        var t = new FileReader(), r = F(t);
        return t.readAsArrayBuffer(e), r;
      }
      function $(e) {
        var t = new FileReader(), r = F(t);
        return t.readAsText(e), r;
      }
      function J(e) {
        for (var t = new Uint8Array(e), r = new Array(t.length), a = 0; a < t.length; a++)
          r[a] = String.fromCharCode(t[a]);
        return r.join("");
      }
      function I(e) {
        if (e.slice)
          return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }
      function S() {
        return this.bodyUsed = !1, this._initBody = function(e) {
          this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : c.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : c.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : c.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : c.arrayBuffer && c.blob && z(e) ? (this._bodyArrayBuffer = I(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || V(e)) ? this._bodyArrayBuffer = I(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : c.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, c.blob && (this.blob = function() {
          var e = _(this);
          if (e)
            return e;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? _(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(X);
        }), this.text = function() {
          var e = _(this);
          if (e)
            return e;
          if (this._bodyBlob)
            return $(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(J(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, c.formData && (this.formData = function() {
          return this.text().then(W);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var K = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function Q(e) {
        var t = e.toUpperCase();
        return K.indexOf(t) > -1 ? t : e;
      }
      function m(e, t) {
        t = t || {};
        var r = t.body;
        if (e instanceof m) {
          if (e.bodyUsed)
            throw new TypeError("Already read");
          this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new o(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0);
        } else
          this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new o(t.headers)), this.method = Q(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && r)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(r);
      }
      m.prototype.clone = function() {
        return new m(this, { body: this._bodyInit });
      };
      function W(e) {
        var t = new FormData();
        return e.trim().split("&").forEach(function(r) {
          if (r) {
            var a = r.split("="), s = a.shift().replace(/\+/g, " "), i = a.join("=").replace(/\+/g, " ");
            t.append(decodeURIComponent(s), decodeURIComponent(i));
          }
        }), t;
      }
      function Y(e) {
        var t = new o(), r = e.replace(/\r?\n[\t ]+/g, " ");
        return r.split(/\r?\n/).forEach(function(a) {
          var s = a.split(":"), i = s.shift().trim();
          if (i) {
            var v = s.join(":").trim();
            t.append(i, v);
          }
        }), t;
      }
      S.call(m.prototype);
      function y(e, t) {
        t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new o(t.headers), this.url = t.url || "", this._initBody(e);
      }
      S.call(y.prototype), y.prototype.clone = function() {
        return new y(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new o(this.headers),
          url: this.url
        });
      }, y.error = function() {
        var e = new y(null, { status: 0, statusText: "" });
        return e.type = "error", e;
      };
      var Z = [301, 302, 303, 307, 308];
      y.redirect = function(e, t) {
        if (Z.indexOf(t) === -1)
          throw new RangeError("Invalid status code");
        return new y(null, { status: t, headers: { location: e } });
      }, u.DOMException = n.DOMException;
      try {
        new u.DOMException();
      } catch {
        u.DOMException = function(t, r) {
          this.message = t, this.name = r;
          var a = Error(t);
          this.stack = a.stack;
        }, u.DOMException.prototype = Object.create(Error.prototype), u.DOMException.prototype.constructor = u.DOMException;
      }
      function B(e, t) {
        return new Promise(function(r, a) {
          var s = new m(e, t);
          if (s.signal && s.signal.aborted)
            return a(new u.DOMException("Aborted", "AbortError"));
          var i = new XMLHttpRequest();
          function v() {
            i.abort();
          }
          i.onload = function() {
            var g = {
              status: i.status,
              statusText: i.statusText,
              headers: Y(i.getAllResponseHeaders() || "")
            };
            g.url = "responseURL" in i ? i.responseURL : g.headers.get("X-Request-URL");
            var T = "response" in i ? i.response : i.responseText;
            r(new y(T, g));
          }, i.onerror = function() {
            a(new TypeError("Network request failed"));
          }, i.ontimeout = function() {
            a(new TypeError("Network request failed"));
          }, i.onabort = function() {
            a(new u.DOMException("Aborted", "AbortError"));
          }, i.open(s.method, s.url, !0), s.credentials === "include" ? i.withCredentials = !0 : s.credentials === "omit" && (i.withCredentials = !1), "responseType" in i && c.blob && (i.responseType = "blob"), s.headers.forEach(function(g, T) {
            i.setRequestHeader(T, g);
          }), s.signal && (s.signal.addEventListener("abort", v), i.onreadystatechange = function() {
            i.readyState === 4 && s.signal.removeEventListener("abort", v);
          }), i.send(typeof s._bodyInit > "u" ? null : s._bodyInit);
        });
      }
      return B.polyfill = !0, n.fetch || (n.fetch = B, n.Headers = o, n.Request = m, n.Response = y), u.Headers = o, u.Request = m, u.Response = y, u.fetch = B, Object.defineProperty(u, "__esModule", { value: !0 }), u;
    })({});
  })(p), p.fetch.ponyfill = !0, delete p.fetch.polyfill;
  var b = p;
  l = b.fetch, l.default = b.fetch, l.fetch = b.fetch, l.Headers = b.Headers, l.Request = b.Request, l.Response = b.Response, h.exports = l;
})(R, R.exports);
const pe = /* @__PURE__ */ de(R.exports);
let O, P, f, ye, M, H, L, k, D, A, N = !1;
const be = async function(l) {
  return f = new ie(l), P = f.get("override.http") || q.create(), O = f.get("override") || q.create({
    baseURL: f.get("api.url")
  }), f.has("exclude.form") || (M = function(d, p) {
    return new C(d, {
      http: P,
      ...p
    });
  }, H = function(d, p) {
    return new C(d, {
      http: O,
      ...p
    });
  }), f.has("exclude.message") || (L = f.get("override.message") || oe), f.has("exclude.notification") || (k = f.get("override.notification") || ne), f.has("exclude.i18n") || l.i18n && await x.use(le).init(l.i18n), f.has("exclude.graphql") || (f.has("graphql.client") ? D = f.get("graphql.client") : f.has("graphql.url") && (D = new se({
    link: new ae({
      uri: "/graphql",
      fetch: pe
    }),
    cache: new fe()
  }))), A = {
    config: f,
    api: O,
    http: P,
    i18n: x,
    form: M,
    formApi: H,
    store: ye,
    graphqlClient: D,
    t: x.t,
    message: L,
    notification: k
  }, f.has("debug") && console.log("\u2934 useUp() accessible vars :", A), N = !0, A;
}, Ue = function() {
  return N || console.warn("Up is not initialized, you must run setUp() first or add an UpProvider !"), A;
}, me = ee({});
function Oe({
  options: h,
  children: l
}) {
  const [d, p] = te();
  return re(() => {
    async function b() {
      const n = await be(h);
      p(n);
    }
    b();
  }, []), d ? /* @__PURE__ */ U(me.Provider, {
    value: d,
    children: /* @__PURE__ */ U(ue, {
      client: d.graphqlClient,
      children: l
    })
  }) : /* @__PURE__ */ U(ce, {});
}
export {
  me as UpContext,
  N as UpInit,
  Oe as UpProvider,
  A as exported,
  be as setUp,
  Ue as useUp
};
