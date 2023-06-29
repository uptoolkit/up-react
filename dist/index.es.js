import { jsx as l, Fragment as w } from "react/jsx-runtime";
import { createContext as C, useState as u, useEffect as q } from "react";
import { Config as y } from "js-config-helper";
import f from "axios";
import { Form as m } from "js-form-helper";
import a from "i18next";
import { initReactI18next as I } from "react-i18next";
import { ApolloClient as P, InMemoryCache as b, ApolloProvider as A } from "@apollo/client";
let s, c, e, F, d, g, o, h = !1;
const L = async function(r) {
  e = new y(r), c = e.get("override.http") || f.create(), s = e.get("override") || f.create({
    baseURL: e.get("api.url")
  }), e.has("exclude.form") || (d = function(i, t) {
    return new m(i, {
      http: c,
      ...t
    });
  }, g = function(i, t) {
    return new m(i, {
      http: s,
      ...t
    });
  }), e.has("exclude.i18n") || r.i18n && await a.use(I).init(r.i18n);
  let n;
  return e.has("exclude.graphql") || (e.has("graphql.client") ? n = e.get("graphql.client") : n = new P({
    uri: r.graphql.url,
    cache: new b()
  })), o = {
    config: e,
    api: s,
    http: c,
    i18n: a,
    form: d,
    formApi: g,
    store: F,
    graphqlClient: n,
    t: a.t
  }, e.has("debug") && console.log("\u2934 useUp() accessible vars :", o), h = !0, o;
}, G = function() {
  return h || console.warn("Up is not initialized, you must run setUp() first or add an UpProvider !"), o;
}, R = C({});
function H({ options: p, children: r }) {
  const [n, i] = u(!0), [t, U] = u(), x = async () => {
    const v = await L(p);
    U(v), i(!1);
  };
  return q(() => {
    x().then(() => console.log("loaded"));
  }, []), t ? /* @__PURE__ */ l(R.Provider, {
    value: t,
    children: /* @__PURE__ */ l(A, {
      client: t.graphqlClient,
      children: r
    })
  }) : /* @__PURE__ */ l(w, {});
}
export {
  R as UpContext,
  h as UpInit,
  H as UpProvider,
  o as exported,
  L as setUp,
  G as useUp
};
