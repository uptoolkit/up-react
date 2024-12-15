import React from "react";
import { Config } from 'js-config-helper';
import { AxiosInstance } from 'axios';
import { Form } from "js-form-helper";
import i18next, { InitOptions, TFunction } from 'i18next';
export interface UpOptions {
    debug?: boolean;
    project?: {
        name: string;
        url: string;
        logo: {
            src: string;
        };
    };
    i18n?: InitOptions;
    api?: {
        url: string;
    };
    graphql?: {
        url?: string;
        client?: any;
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
export declare let exported: exportedVars | any;
export declare let UpInit: boolean;
/**
 * Setup
 *
 * @param options
 */
export declare const setUp: (options: UpOptions) => Promise<any>;
/**
 * useUp helper function
 *
 */
export declare const useUp: () => exportedVars;
export interface Props {
    options: UpOptions;
    children?: React.ReactNode;
}
export declare const UpContext: React.Context<{}>;
/**
 * UpProvider should be wrapped in the early stage of your app
 *
 * @param options
 * @param children
 * @constructor
 */
export declare function UpProvider({ options, children }: Props): import("react/jsx-runtime").JSX.Element;
