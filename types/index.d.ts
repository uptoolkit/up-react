import { Store } from "@reduxjs/toolkit";
import React from "react";
import { Config } from 'js-config-helper';
import { AxiosInstance } from 'axios';
import { MessageInstance } from "antd/lib/message";
import { NotificationInstance } from "antd/es/notification";
import { Form } from "js-form-helper";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import i18next, { InitOptions, TFunction } from 'i18next';
export interface UpOptions<StoreType> {
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
    store?: StoreType;
    api?: {
        url: string;
    };
    graphql?: {
        url?: string;
        client?: ApolloClient<any>;
    };
    exclude?: string[];
}
export interface exportedVars<Store> {
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
export declare const setUp: <Store_1>(options: any) => Promise<exportedVars<Store_1>>;
/**
 * useUp helper function
 *
 */
export declare const useUp: <Store_1>() => exportedVars<Store_1>;
export interface Props {
    options: UpOptions<Store>;
    children?: React.ReactNode;
}
export declare const UpContext: React.Context<{}>;
export declare function UpProvider<T = unknown>({ options, children }: Props): JSX.Element;
