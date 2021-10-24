import I18n from "@cherrypulp/i18n";
import { Store } from "@reduxjs/toolkit";
import { MessageInstance } from "antd/lib/message";
import { NotificationInstance } from "antd/es/notification";
import { ApolloClient } from "@apollo/client";
export declare let api: object | null | any;
export declare let http: object | null | any;
export declare let config: any;
export declare let i18n: I18n | null;
export declare let store: Store<object> | unknown | null;
export declare let form: any | null;
export declare let formApi: any | null;
export declare let message: MessageInstance | null;
export declare let notification: NotificationInstance | null;
export declare let graphqlClient: ApolloClient<any> | any;
export interface UpOptions {
    debug?: boolean;
    project?: {
        name: string;
        url: string;
        logo: {
            src: string;
        };
    };
    i18n?: Record<string, unknown>;
    storeMode?: "reactive" | "vuex";
    store?: Store<unknown | object>;
    api?: {
        url: string;
    };
    graphql?: {
        url?: string;
        client?: string;
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
export declare let exported: exportedVars | any;
/**
 * useUp helper function
 *
 * @param options
 */
export declare function useUp(options?: UpOptions): exportedVars | any;
