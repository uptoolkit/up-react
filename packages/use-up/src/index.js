var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "js-config-helper", "axios", "@cherrypulp/i18n", "antd", "js-form-helper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUp = exports.exported = exports.notification = exports.message = exports.formApi = exports.form = exports.store = exports.i18n = exports.config = exports.http = exports.api = void 0;
    const js_config_helper_1 = __importDefault(require("js-config-helper"));
    const axios_1 = __importDefault(require("axios"));
    const i18n_1 = require("@cherrypulp/i18n");
    const antd_1 = require("antd");
    const js_form_helper_1 = __importDefault(require("js-form-helper"));
    /**
     * useUp helper function
     *
     * @param options
     */
    function useUp(options) {
        if (options) {
            // @ts-ignore
            exports.config = new js_config_helper_1.default(options);
            // @ts-ignore
            exports.http = exports.config.get('override.http') || axios_1.default.create();
            // @ts-ignore
            exports.api = exports.config.get('override') || axios_1.default.create({
                baseURL: exports.config.get('api.url'),
            });
            // Define form helper and wrapper from the Form Lib
            if (!exports.config.has('exclude.form')) {
                exports.form = function (data, options) {
                    // @ts-ignore
                    return new js_form_helper_1.default(data, {
                        ...{
                            http: exports.http
                        },
                        ...options
                    });
                };
                exports.formApi = function (data, options) {
                    // @ts-ignore
                    return new js_form_helper_1.default(data, {
                        ...{
                            http: exports.api
                        },
                        ...options
                    });
                };
            }
            if (!exports.config.has('exclude.message')) {
                exports.message = exports.config.get('override.message') || antd_1.message;
            }
            if (!exports.config.has('exclude.notification')) {
                exports.notification = exports.config.get('override.notification') || antd_1.notification;
            }
            if (!exports.config.has('exclude.i18n')) {
                // @ts-ignore
                const translations = options.translations[options.locale];
                exports.i18n = (0, i18n_1.createI18n)(translations, options.locale, {
                    globalName: 'translations',
                    forceDisplayKeys: true,
                    storeNotFounds: true, // store every key that are not found in a variable called "_notFounds" inside the global
                });
            }
            exports.store = exports.config.get('override.store');
            exports.exported = {
                config: exports.config,
                api: exports.api,
                http: exports.http,
                i18n: exports.i18n,
                form: exports.form,
                formApi: exports.formApi,
                store: exports.store,
                t: exports.i18n?.__.bind(exports.i18n),
                __: exports.i18n?.__.bind(exports.i18n),
                choice: exports.i18n?.choice.bind(exports.i18n),
                message: exports.message,
                notification: exports.notification,
            };
            if (exports.config.has('debug')) {
                console.log('⤴ useUp() accessible vars :', exports.exported);
            }
        }
        return exports.exported;
    }
    exports.useUp = useUp;
});
