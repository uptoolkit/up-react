import {Store} from "@reduxjs/toolkit";
import React, {createContext, useEffect, useState} from "react";
import {Config} from 'js-config-helper';
import axios, {AxiosInstance} from 'axios';
import {message as messageAnt, notification as notificationAnt} from 'antd';
import {MessageInstance} from "antd/lib/message";
import {NotificationInstance} from "antd/es/notification";
import {Form} from "js-form-helper";
import fetch from 'cross-fetch';
import {
    ApolloClient, ApolloProvider, HttpLink,
    InMemoryCache, NormalizedCacheObject
} from "@apollo/client";
import i18next, {InitOptions, TFunction} from 'i18next';
import {initReactI18next} from "react-i18next";

let api: object | null | any;
let http: object | null | any;
let config: any;
let store: Store<object> | unknown | null;
let form: any | null;
let formApi: any | null;
let message: MessageInstance | null;
let notification: NotificationInstance | null;
let graphqlClient: ApolloClient<any> | any;

export interface UpOptions<Store = any> {
    debug?: boolean,
    project?: {
        name: string,
        url: string,
        logo: {
            src: string
        }
    };
    i18n?: InitOptions;
    storeMode?: "reactive" | "redux";
    store?: Store;
    api?: {
        url: string; // Url endpoint of your API
    };
    graphql?: {
        url?: string; // Url endpoint of your API
        client?: ApolloClient<any>; // Url endpoint of your API
    };
    exclude?: string[];
}

export interface exportedVars<Store = any> {
    config: Config;
    api: AxiosInstance;
    http: AxiosInstance;
    i18n: typeof i18next;
    form: Form;
    formApi: Form;
    graphqlClient: ApolloClient<NormalizedCacheObject>;
    store?: Store;
    t: TFunction;
    message?: MessageInstance;
    notification?: NotificationInstance;
}

export let exported: exportedVars<Store> | any;

export let UpInit = false;

/**
 * Setup
 *
 * @param options
 */
export const setUp = async function setUp<Store = any>(options: UpOptions<Store>): Promise<exportedVars<Store>> {

    config = new Config(options);

    http = config.get('override.http') || axios.create();

    api = config.get('override') || axios.create({
        baseURL: config.get('api.url'),
    });

    // Define form helper and wrapper from the Form Lib
    if (!config.has('exclude.form')) {

        form = function (data: object, options: object) {
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
        if (options.i18n) {
            await i18next
                .use(initReactI18next)
                .init(options.i18n);
        }
    }

    if (!config.has('exclude.graphql')) {
        if (config.has('graphql.client')) {
            graphqlClient = config.get('graphql.client');
        } else if (config.has('graphql.url')) {
            graphqlClient = new ApolloClient({
                link: new HttpLink({ uri: '/graphql', fetch }),
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
        message: message,
        notification: notification,
    };

    if (config.has('debug')) {
        console.log('⤴ useUp() accessible vars :', exported);
    }

    UpInit = true;

    return exported;
}

/**
 * useUp helper function
 *
 */
export const useUp = function <Store = any>(): exportedVars<Store> {

    if (!UpInit) {
        console.warn('Up is not initialized, you must run setUp() first or add an UpProvider !');
    }

    return exported;
}

export interface Props<Store = any> {
    options: UpOptions<Store>,
    children?: React.ReactNode;
}

export const UpContext = createContext({});

export function UpProvider<T = any>({options, children}: Props<T>) {

    const [up, setInit] = useState<null | exportedVars<T>>();

    useEffect(() => {
        async function getUp() {
            const data = await setUp<T>(options);
            setInit(data);
        }
        getUp();
    }, []);

    if (!up) {
        return <></>;
    }

    return (
        <UpContext.Provider
            value={up}
        >
            <ApolloProvider client={up.graphqlClient}>
                {children}
            </ApolloProvider>
        </UpContext.Provider>
    );
};
