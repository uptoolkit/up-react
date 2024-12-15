import React, {createContext, useEffect, useState} from "react";
import {Config} from 'js-config-helper';
import axios, {AxiosInstance} from 'axios';
import {Form} from "js-form-helper";
import i18next, {InitOptions, TFunction} from 'i18next';
import {initReactI18next} from "react-i18next";

let api: object | null | any;
let http: object | null | any;
let config: any | null;
let form: any | null;
let formApi: any | null;

export interface UpOptions {
    debug?: boolean,
    project?: {
        name: string,
        url: string,
        logo: {
            src: string
        }
    };
    i18n?: InitOptions;
    api?: {
        url: string; // Url endpoint of your API
    };
    graphql?: {
        url?: string; // Url endpoint of your API
        client?: any; // Url endpoint of your API
    };
    exclude?: string[];
    loading?: boolean;
    setLoading?: (loading: boolean) => void;
}

export interface exportedVars {
    config: Config;
    api: AxiosInstance;
    http: AxiosInstance;
    i18n: typeof i18next;
    form: (values?: any, options?: any) => Form;
    formApi: (values?: any, options?: any) => Form;
    graphqlClient: any;
    t: TFunction;
}

export let exported: exportedVars | any;

export let UpInit = false;

/**
 * Setup
 *
 * @param options
 */
export const setUp = async function setUp(options: UpOptions) {

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

    if (!config.has('exclude.i18n')) {
        if (options.i18n) {
            await i18next
                .use(initReactI18next)
                .init(options.i18n);
        }
    }

    exported = {
        config,
        api,
        http,
        i18n: i18next,
        form,
        formApi,
        t: i18next.t,
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
export const useUp = function (): exportedVars {

    if (!UpInit) {
        console.warn('Up is not initialized, you must run setUp() first or add an UpProvider !');
    }

    return exported;
}

export interface Props {
    options: UpOptions,
    children?: React.ReactNode;
}

export const UpContext = createContext({});

/**
 * UpProvider should be wrapped in the early stage of your app
 *
 * @param options
 * @param children
 * @constructor
 */
export function UpProvider({options, children}: Props) {
    const [loading, setLoading] = useState(true);
    const [up, setInitUp] = useState<exportedVars>();

    const initUp = async () => {
        const up = await setUp({
            ...options,
            loading,
            setLoading
        });
        setInitUp(up);
        setLoading(false);
    }

    useEffect(() => {
        initUp().then(() => {
            options.debug && console.log('Up loaded')
        });
    }, []);

    if (!up) {
        return <></>
    }

    return (<UpContext.Provider value={up}>
            {children}
        </UpContext.Provider>
    );
}
