import { createContext, useState, useEffect } from "react";
import { Config } from "js-config-helper";
import axios from "axios";
import { message as message$1, notification as notification$1 } from "antd";
import { Form } from "js-form-helper";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { jsx, Fragment } from "react/jsx-runtime";
let api;
let http;
let config;
let store;
let form;
let formApi;
let message;
let notification;
let graphqlClient;
let exported;
let UpInit = false;
const setUp = async function setUp2(options) {
  config = new Config(options);
  http = config.get("override.http") || axios.create();
  api = config.get("override") || axios.create({
    baseURL: config.get("api.url")
  });
  if (!config.has("exclude.form")) {
    form = function(data, options2) {
      return new Form(data, {
        ...{
          http
        },
        ...options2
      });
    };
    formApi = function(data, options2) {
      return new Form(data, {
        ...{
          http: api
        },
        ...options2
      });
    };
  }
  if (!config.has("exclude.message")) {
    message = config.get("override.message") || message$1;
  }
  if (!config.has("exclude.notification")) {
    notification = config.get("override.notification") || notification$1;
  }
  if (!config.has("exclude.i18n")) {
    await i18next.use(initReactI18next).init(options.i18n);
  }
  if (!config.has("exclude.graphql")) {
    if (config.has("graphql.client")) {
      graphqlClient = config.get("graphql.client");
    } else if (config.has("graphql.url")) {
      graphqlClient = new ApolloClient({
        uri: config.get("graphql.url"),
        cache: new InMemoryCache()
      });
    }
  }
  exported = {
    config,
    api,
    http,
    i18n: i18next,
    form,
    formApi,
    store,
    graphqlClient,
    t: i18next.t,
    message,
    notification
  };
  if (config.has("debug")) {
    console.log("\u2934 useUp() accessible vars :", exported);
  }
  UpInit = true;
  return exported;
};
const useUp = function() {
  if (!UpInit) {
    console.warn("Up is not initialized, you must run setUp() first or add an UpProvider !");
  }
  return exported;
};
const UpContext = createContext({});
function UpProvider({
  options,
  children
}) {
  const [up, setInit] = useState();
  useEffect(() => {
    setUp(options).then((data) => {
      setInit(data);
    });
  }, []);
  if (!up) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx(UpContext.Provider, {
    value: up,
    children: /* @__PURE__ */ jsx(ApolloProvider, {
      client: up.graphqlClient,
      children
    })
  });
}
export { UpContext, UpInit, UpProvider, exported, setUp, useUp };
