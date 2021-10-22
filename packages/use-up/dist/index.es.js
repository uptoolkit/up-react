var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import Config from "js-config-helper";
import * as axios from "axios";
import { message as message$1, notification as notification$1 } from "antd";
import Form from "js-form-helper";
class I18n {
  __(key, data = null, locale = null) {
    return this.get(key, data, locale);
  }
  add(translations, locale = null) {
    if (!locale) {
      locale = this.locale;
    }
    this.translations.set(locale, Object.assign({}, this.translations.get(locale), translations));
  }
  choice(key, count = 1, data = null, locale = null) {
    if (!locale) {
      locale = this.locale;
    }
    let translation = null;
    const translations = this.fetch(`${locale}.${key}`);
    if (!translations) {
      if (typeof window !== "undefined" && this.options.storeNotFounds) {
        window[this.options.globalName]._notFounds.push(key);
      }
      if (this.forceDisplayKeys) {
        if (data) {
          return this.constructor.replaceString(key, data);
        }
        return key;
      }
      return "";
    }
    const parts = translations.split("|");
    parts.some((p) => {
      translation = this.constructor.matchChoiceCount(p, count);
      return translation;
    });
    if (translation === false) {
      translation = count > 1 ? parts[1] : parts[0];
    }
    return this._returnString(key, translation, data);
  }
  constructor(translations = {}, defaultLocale = "en", options = {}) {
    options = Object.assign({
      globalName: "translations",
      forceDisplayKeys: true,
      storeNotFounds: true
    }, options);
    this.forceDisplayKeys = options.forceDisplayKeys;
    this.locale = defaultLocale;
    this.translations = new Map();
    if (typeof window !== "undefined" && options.globalName) {
      if (window[options.globalName] === void 0) {
        window[options.globalName] = {};
      }
      translations = Object.assign({}, window[options.globalName], translations);
      if (options.storeNotFounds) {
        window[options.globalName]._notFounds = [];
      }
    }
    this.set(translations, this.locale);
    this.options = options;
  }
  static decodeHtml(source) {
    if (typeof document !== "undefined") {
      const txt = document.createElement("textarea");
      txt.innerHTML = source;
      return txt.value;
    }
    return source;
  }
  fetch(key) {
    const keys = key.split(".");
    const locale = keys.shift();
    let source = this.translations.get(locale);
    keys.forEach((k) => {
      if (source) {
        source = source[k];
      }
    });
    return source;
  }
  get(key, data = null, locale = null) {
    if (typeof data === "string") {
      locale = data;
      data = null;
    }
    if (!locale) {
      locale = this.locale;
    }
    const content = this.fetch(`${locale}.${key}`);
    return this._returnString(key, content, data);
  }
  has(key, locale = null) {
    if (!locale) {
      locale = this.locale;
    }
    return this.fetch(`${locale}.${key}`) !== void 0;
  }
  static matchChoiceCount(translation, count) {
    const match = translation.match(/^[{[]([^[\]{}]*)[}\]](.*)/);
    if (!match) {
      return false;
    }
    if (match[1].includes(",")) {
      const [from, to] = match[1].split(",", 2);
      if (to === "*" && count >= from || from === "*" && count <= to || count >= from && count <= to) {
        return match[2];
      }
    }
    return parseInt(match[1], 10) === count ? match[2] : null;
  }
  static replaceString(translation, data) {
    if (!data) {
      return translation;
    }
    return Object.entries(data).reduce((acc, [key, value]) => {
      value = String(value);
      const placeholder = key.toLowerCase();
      return acc.replace(`:${placeholder}`, value).replace(`:${placeholder.toUpperCase()}`, value.toUpperCase()).replace(`:${placeholder.charAt(0).toUpperCase()}${placeholder.slice(1)}`, `${value.charAt(0).toUpperCase()}${value.slice(1)}`);
    }, translation);
  }
  _returnString(key, content, data) {
    if (typeof content !== "string" && this.forceDisplayKeys) {
      content = key;
      if (this.options.storeNotFounds && typeof window !== "undefined") {
        window[this.options.globalName]._notFounds.push(key);
      }
    }
    if (data) {
      content = this.constructor.replaceString(content, data);
    }
    return this.constructor.decodeHtml(content);
  }
  setLocale(locale) {
    this.locale = locale;
  }
  set(translations, locale = null) {
    if (!locale) {
      locale = this.locale;
    }
    this.translations.set(locale, translations);
  }
}
function createI18n(translations = {}, defaultLocale = "en", options = {}) {
  return new I18n(translations, defaultLocale, options);
}
let api;
let http;
let config;
let i18n;
let store;
let form;
let formApi;
let message;
let notification;
let exported;
function useUp(options) {
  if (options) {
    config = new Config(options);
    http = config.get("override.http") || axios.create();
    api = config.get("override") || axios.create({
      baseURL: config.get("api.url")
    });
    if (!config.has("exclude.form")) {
      form = function(data, options2) {
        return new Form(data, __spreadValues(__spreadValues({}, {
          http
        }), options2));
      };
      formApi = function(data, options2) {
        return new Form(data, __spreadValues(__spreadValues({}, {
          http: api
        }), options2));
      };
    }
    if (!config.has("exclude.message")) {
      message = config.get("override.message") || message$1;
    }
    if (!config.has("exclude.notification")) {
      notification = config.get("override.notification") || notification$1;
    }
    if (!config.has("exclude.i18n")) {
      const translations = options.translations[options.locale];
      i18n = createI18n(translations, options.locale, {
        globalName: "translations",
        forceDisplayKeys: true,
        storeNotFounds: true
      });
    }
    store = config.get("override.store");
    exported = {
      config,
      api,
      http,
      i18n,
      form,
      formApi,
      store,
      t: i18n == null ? void 0 : i18n.__.bind(i18n),
      __: i18n == null ? void 0 : i18n.__.bind(i18n),
      choice: i18n == null ? void 0 : i18n.choice.bind(i18n),
      message,
      notification
    };
    if (config.has("debug")) {
      console.log("\u2934 useUp() accessible vars :", exported);
    }
  }
  return exported;
}
export { api, config, exported, form, formApi, http, i18n, message, notification, store, useUp };
