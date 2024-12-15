import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import { Config } from 'js-config-helper';
import { AxiosInstance } from 'axios';
import { Form } from 'js-form-helper';
import i18next, { InitOptions, TFunction } from 'i18next';

interface UpOptions {
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
interface exportedVars {
    config: Config;
    api: AxiosInstance;
    http: AxiosInstance;
    i18n: typeof i18next;
    form: (values?: any, options?: any) => Form;
    formApi: (values?: any, options?: any) => Form;
    graphqlClient: any;
    t: TFunction;
}
declare let exported: exportedVars | any;
declare let UpInit: boolean;
/**
 * Setup
 *
 * @param options
 */
declare const setUp: (options: UpOptions) => Promise<any>;
/**
 * useUp helper function
 *
 */
declare const useUp: () => exportedVars;
interface Props {
    options: UpOptions;
    children?: React.ReactNode;
}
declare const UpContext: React.Context<{}>;
/**
 * UpProvider should be wrapped in the early stage of your app
 *
 * @param options
 * @param children
 * @constructor
 */
declare function UpProvider({ options, children }: Props): react_jsx_runtime.JSX.Element;

export { type Props, UpContext, UpInit, type UpOptions, UpProvider, exported, type exportedVars, setUp, useUp };
