import Config from 'js-config-helper';
/// <reference path="axios.d.ts" />
import * as axios from "axios";
import I18n, {createI18n} from "@cherrypulp/i18n";
import {Store} from "@reduxjs/toolkit";
import {message as messageAnt, notification as notificationAnt} from 'antd';
import {MessageInstance} from "antd/lib/message";
import {NotificationInstance} from "antd/es/notification";
import Form from "js-form-helper";

let UpSingleton: Function;

let api:  object | null | any;
let http: object | null | any;
let config: any;
let i18n: I18n | null;
let store: Store<object> | unknown | null;
let form: any | null;
let formApi: any | null;
let message: MessageInstance | null;
let notification: NotificationInstance | null;

interface UpOptions {
    debug?: boolean,
    project?: {
        name: string,
        url: string,
        logo: {
            src: string
        }
    };
    i18n?: Record<string, unknown>;
    storeMode?: "reactive" | "vuex";
    store?: Store<unknown | object>;
    api?: {
        url: string; // Url endpoint of your API
    };
    translations?: Record<string, object | string>;
    locale?: string;
    locales?: string[];
    exclude?: string[];
}

/**
 * useUp helper function
 *
 * @param options
 * @param override
 */
export const useUp = (options?: UpOptions, override = true) => {

    if (options) {

        // @ts-ignore
        config = new Config(options);

        // @ts-ignore
        http = config.get('override.http') || axios.create();

        // @ts-ignore
        api = config.get('override') || axios.create({
            baseURL: config.get('api.url'),
        });

        // Define form helper and wrapper from the Form Lib
        if (!config.has('exclude.form')) {

            form = function (data: object, options: object) {
                // @ts-ignore
                return new Form(data, {
                    ...{
                        http
                    },
                    ...options
                });
            }

            formApi = function (data: object, options: object) {
                // @ts-ignore
                return new Form(data, {
                    ...{
                        http: api
                    },
                    ...options
                });
            }
        }

        if (!config.has('exclude.message')) {
            message = config.get('override.message') || messageAnt;
        }

        if (!config.has('exclude.notification')) {
            notification = config.get('override.notification') || notificationAnt;
        }

        if (!config.has('exclude.i18n')) {
            // @ts-ignore
            const translations = options.translations[options.locale];

            i18n = createI18n(translations, options.locale, {
                globalName: 'translations', // name of the autoloaded global variable
                forceDisplayKeys: true, // display the key if the label is not found (else it return an empty string)
                storeNotFounds: true, // store every key that are not found in a variable called "_notFounds" inside the global
            });
        }

        store = config.get('override.store');

        const exported = {
            config,
            api,
            http,
            i18n,
            form,
            formApi,
            store,
            t: i18n?.__.bind(i18n),
            __: i18n?.__.bind(i18n),
            choice: i18n?.choice.bind(i18n),
            message: message,
            notification: notification,
        }

        if (config.has('debug')) {
            console.log('⤴ useUp() accessible vars :', exported);
        }

        if (override) {
            UpSingleton = () => {
                return exported;
            };
        }
    }

    return UpSingleton();
};

export default useUp;