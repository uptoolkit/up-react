import { Config } from 'js-config-helper';
/// <reference path="axios.d.ts" />
import * as axios from 'axios';
import { createI18n } from "@cherrypulp/i18n";
import { message as messageAnt, notification as notificationAnt } from 'antd';
import { Form } from "js-form-helper";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createContext, useState } from 'react';
export const UpContext = createContext(undefined);
export let api;
export let http;
export let config;
export let i18n;
export let store;
export let form;
export let formApi;
export let message;
export let notification;
export let graphqlClient;
export let exported;
/**
 * useUp helper function
 *
 * @param options
 */
export function useUp(options) {
    if (options) {
        // @ts-ignore
        config = new Config(options);
        // @ts-ignore
        http = config.get('override.http') || axios.create();
        // @ts-ignore
        api = config.get('override') || axios.create({
            baseURL: config.get('api.url'),
        });
        const [loading, setLoading] = useState(false);
        // Define form helper and wrapper from the Form Lib
        if (!config.has('exclude.form')) {
            form = function (data, options) {
                // @ts-ignore
                return new Form(data, {
                    ...{
                        http
                    },
                    ...options
                });
            };
            formApi = function (data, options) {
                // @ts-ignore
                return new Form(data, {
                    ...{
                        http: api
                    },
                    ...options
                });
            };
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
                globalName: 'translations',
                forceDisplayKeys: true,
                storeNotFounds: true, // store every key that are not found in a variable called "_notFounds" inside the global
            });
        }
        if (!config.has('exclude.graphql')) {
            if (config.has('graphql.client')) {
                graphqlClient = config.get('graphql.client');
            }
            else if (config.has('graphql.url')) {
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
            loading,
            setLoading,
            graphqlClient,
            t: i18n?.__.bind(i18n),
            __: i18n?.__.bind(i18n),
            choice: i18n?.choice.bind(i18n),
            message: message,
            notification: notification,
        };
        if (config.has('debug')) {
            console.log('⤴ useUp() accessible vars :', exported);
        }
    }
    return exported;
}
