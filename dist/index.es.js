import { jsx as c, Fragment as w } from "react/jsx-runtime";
import { createContext as b, useState as p, useEffect as y } from "react";
import { Config as C } from "js-config-helper";
import l from "axios";
import { Form as m } from "js-form-helper";
import s from "i18next";
import { initReactI18next as I } from "react-i18next";
let a, u, t, d, U, i, g = !1;
const P = async function(r) {
  return t = new C(r), u = t.get("override.http") || l.create(), a = t.get("override") || l.create({
    baseURL: t.get("api.url")
  }), t.has("exclude.form") || (d = function(n, e) {
    return new m(n, {
      http: u,
      ...e
    });
  }, U = function(n, e) {
    return new m(n, {
      http: a,
      ...e
    });
  }), t.has("exclude.i18n") || r.i18n && await s.use(I).init(r.i18n), i = {
    config: t,
    api: a,
    http: u,
    i18n: s,
    form: d,
    formApi: U,
    t: s.t
  }, t.has("debug") && console.log("\u2934 useUp() accessible vars :", i), g = !0, i;
}, k = function() {
  return g || console.warn("Up is not initialized, you must run setUp() first or add an UpProvider !"), i;
}, F = b({});
function q({ options: o, children: r }) {
  const [n, e] = p(!0), [f, x] = p(), h = async () => {
    const v = await P({
      ...o,
      loading: n,
      setLoading: e
    });
    x(v), e(!1);
  };
  return y(() => {
    h().then(() => {
      o.debug && console.log("Up loaded");
    });
  }, []), f ? /* @__PURE__ */ c(F.Provider, {
    value: f,
    children: r
  }) : /* @__PURE__ */ c(w, {});
}
export {
  F as UpContext,
  g as UpInit,
  q as UpProvider,
  i as exported,
  P as setUp,
  k as useUp
};
