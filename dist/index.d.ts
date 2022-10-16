import { Store } from "@reduxjs/toolkit";
import React from "react";
import { Config } from 'js-config-helper';
import { AxiosInstance } from 'axios';
import { MessageInstance } from "antd/lib/message";
import { NotificationInstance } from "antd/es/notification";
import { Form } from "js-form-helper";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import i18next, { InitOptions, TFunction } from 'i18next';
export interface UpOptions<Store = any> {
    debug?: boolean;
    project?: {
        name: string;
        url: string;
        logo: {
            src: string;
        };
    };
    i18n?: InitOptions;
    storeMode?: "reactive" | "redux";
    store?: Store;
    api?: {
        url: string;
    };
    graphql?: {
        url?: string;
        client?: ApolloClient<any>;
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
export declare let exported: exportedVars<Store> | any;
export declare let UpInit: boolean;
/**
 * Setup
 *
 * @param options
 */
export declare const setUp: <Store_1 = any>(options: UpOptions<Store_1>) => Promise<exportedVars<Store_1>>;
/**
 * useUp helper function
 *
 */
export declare const useUp: <Store_1 = any>() => exportedVars<Store_1>;
export interface Props<Store = any> {
    options: UpOptions<Store>;
    children?: React.ReactNode;
}
export declare const UpContext: React.Context<{}>;
export declare function UpProvider<T = any>({ options, children }: Props<T>): JSX.Element;
