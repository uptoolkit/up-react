import {Config} from 'js-config-helper';
/// <reference path="axios.d.ts" />
import * as axios from 'axios';
import I18n, {createI18n} from "@cherrypulp/i18n";
import {Store} from "@reduxjs/toolkit";
import {message as messageAnt, notification as notificationAnt} from 'antd';
import {MessageInstance} from "antd/lib/message";
import {NotificationInstance} from "antd/es/notification";
import Form from "js-form-helper";
import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

export let api: object | null | any;
export let http: object | null | any;
export let config: any;
export let i18n: I18n | null;
export let store: Store<object> | unknown | null;
export let form: any | null;
export let formApi: any | null;
export let message: MessageInstance | null;
export let notification: NotificationInstance | null;
export let graphqlClient: ApolloClient<any> | any;

export interface UpOptions {
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

export interface exportedVars {
    config: boolean;
    api: boolean;
    http: boolean;
    i18n: boolean;
    form: boolean;
    formApi: boolean;
    store?: boolean;

    t?(key: string, data?: object, lang?: string): string | any;

    __?(key: string, data?: object, lang?: string): string | any;

    choice?(key: string, count?: number, data?: any, locale?: string): string | any;

    message?: MessageInstance;
    notification?: NotificationInstance;
}

export let exported: exportedVars | any;

/**
 * useUp helper function
 *
 * @param options
 */
export function useUp(options?: UpOptions): exportedVars | any {

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


        if (!config.has('exclude.graphql')) {
            if (config.has('graphql.client')) {
                graphqlClient = config.get('graphql.client');
            } else if(config.has('graphql.url')) {
                graphqlClient = new ApolloClient({
                    uri: config.get('graphql.url'),
                    cache: new InMemoryCache()
                });
            }
        }

        store = config.get('override.store');

        exported = {
            config,
            api,
            http,
            i18n,
            form,
            formApi,
            store,
            graphqlClient,
            t: i18n?.__.bind(i18n),
            __: i18n?.__.bind(i18n),
            choice: i18n?.choice.bind(i18n),
            message: message,
            notification: notification,
        }

        if (config.has('debug')) {
            console.log('⤴ useUp() accessible vars :', exported);
        }
    }

    return exported;
}