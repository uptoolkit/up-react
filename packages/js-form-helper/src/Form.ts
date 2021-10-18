// @ts-nocheck
import Errors from './Errors';
import {guardAgainstReservedFieldName, isArray, isFile, merge, objectToFormData} from './util';
import * as Validator from 'validatorjs';

class Form {
    // @ts-ignore
    private processing: boolean;
    // @ts-ignore
    private successful: boolean;
    private errors: any;
    // @ts-ignore
    private __options: object | null;
    // @ts-ignore
    private initial: object | null;

    /**
     * Create a new Form instance.
     *
     * @param {object} data
     * @param {object} options
     */
    constructor(data = {}, options = {}) {
        this.processing = false;
        this.successful = false;

        this.withData(data)
            .withOptions(options)
            .withErrors({});
    }

    withData(data: any) {
        if (isArray(data)) {
            data = data.reduce((carry: any, element: any) => {
                carry[element] = '';
                return carry;
            }, {});
        }

        this.setInitialValues(data);

        this.errors = new Errors();
        this.processing = false;
        this.successful = false;

        for (const field in data) {
            guardAgainstReservedFieldName(field);

            // @ts-ignore
            this[field] = data[field];
        }

        return this;
    }

    withErrors(errors: any) {
        this.errors = new Errors(errors);

        return this;
    }

    withOptions(options: any) {
        this.__options = {
            resetOnSuccess: true,
        };

        if (options.hasOwnProperty('resetOnSuccess')) {
            // @ts-ignore
            this.__options.resetOnSuccess = options.resetOnSuccess;
        }

        if (options.hasOwnProperty('onSuccess')) {
            this.onSuccess = options.onSuccess;
        }

        if (options.hasOwnProperty('onFail')) {
            this.onFail = options.onFail;
        }

        const windowAxios = typeof window === 'undefined' ? false : window.axios

        // @ts-ignore
        this.__http = options.http || windowAxios || axios;

        // @ts-ignore
        if (!this.__http) {
            throw new Error(
                'No http library provided. Either pass an http option, or install axios.'
            );
        }

        return this;
    }

    /**
     * Fetch all relevant data for the form.
     */
    data() {
        const data = {};

        for (const property in this.initial) {
            data[property] = this[property];
        }

        return data;
    }

    /**
     * Fetch specific data for the form.
     *
     * @param {array} fields
     * @return {object}
     */
    only(fields: any) {
        return fields.reduce((filtered: any, field: any) => {
            // @ts-ignore
            filtered[field] = this[field];
            return filtered;
        }, {});
    }

    /**
     * Reset the form fields.
     */
    reset() {
        // @ts-ignore
        merge(this, this.initial);

        this.errors.clear();
    }

    setInitialValues(values: object) {
        this.initial = {};

        merge(this.initial, values);
    }

    populate(data: object) {
        Object.keys(data).forEach(field => {
            guardAgainstReservedFieldName(field);

            if (this.hasOwnProperty(field)) {
                // @ts-ignore
                merge(this, {[field]: data[field]});
            }
        });

        return this;
    }

    /**
     * Clear the form fields.
     */
    clear() {
        for (const field in this.initial) {
            // @ts-ignore
            this[field] = '';
        }

        this.errors.clear();
    }

    /**
     * Send a POST request to the given URL.
     *
     * @param {string} url
     */
    post(url: string) {
        return this.submit('post', url);
    }

    /**
     * Send a PUT request to the given URL.
     *
     * @param {string} url
     */
    put(url: string) {
        return this.submit('put', url);
    }

    /**
     * Send a PATCH request to the given URL.
     *
     * @param {string} url
     */
    patch(url: string) {
        return this.submit('patch', url);
    }

    /**
     * Send a DELETE request to the given URL.
     *
     * @param {string} url
     */
    delete(url: string) {
        return this.submit('delete', url);
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType: string, url: string) {
        this.__validateRequestType(requestType);
        this.errors.clear();
        this.processing = true;
        this.successful = false;

        return new Promise((resolve, reject) => {
            this.__http[requestType](
                url,
                this.hasFiles() ? objectToFormData(this.data()) : this.data()
            )
                .then(response => {
                    this.processing = false;
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.processing = false;
                    this.onFail(error);

                    reject(error);
                });
        });
    }

    /**
     * @returns {boolean}
     */
    hasFiles() {
        for (const property in this.initial) {
            if (this.hasFilesDeep(this[property])) {
                return true;
            }
        }

        return false;
    };

    /**
     * @param {Object|Array} object
     * @returns {boolean}
     */
    hasFilesDeep(object) {
        if (object === null) {
            return false;
        }

        if (typeof object === 'object') {
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    if (this.hasFilesDeep(object[key])) {
                        return true;
                    }
                }
            }
        }

        if (Array.isArray(object)) {
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    return this.hasFilesDeep(object[key]);
                }
            }
        }

        return isFile(object);
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data) {
        this.successful = true;

        if (this.__options.resetOnSuccess) {
            this.reset();
        }
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} data
     */
    onFail(error) {
        this.successful = false;

        if (error.response && error.response.data.errors) {
            this.errors.record(error.response.data.errors);
        }
    }

    /**
     * Get the error message(s) for the given field.
     *
     * @param field
     */
    hasError(field) {
        return this.errors.has(field);
    }

    /**
     * Get the first error message for the given field.
     *
     * @param {string} field
     * @return {string}
     */
    getError(field) {
        return this.errors.first(field);
    }

    /**
     * Get the error messages for the given field.
     *
     * @param {string} field
     * @return {array}
     */
    getErrors(field) {
        return this.errors.get(field);
    }

    __validateRequestType(requestType) {
        const requestTypes = ['get', 'delete', 'head', 'post', 'put', 'patch'];

        if (requestTypes.indexOf(requestType) === -1) {
            throw new Error(
                `\`${requestType}\` is not a valid request type, ` +
                `must be one of: \`${requestTypes.join('`, `')}\`.`
            );
        }
    }

    /**
     * Validate actual forms based on Laravel rules
     *
     * @param rules
     * @param customErrorMessages
     */
    validate(rules:object, customErrorMessages?: object) {

        this.errors.clear();
        this.processing = true;
        this.successful = false;

        let validation = new Validator(this.data(), rules);

        if (validation.fails()) {
            this.successful = false;
            this.errors.record(validation.errors.all());
        } else {
            this.successful = true;
        }
    }

    static create(data = {}) {
        return new Form().withData(data);
    }
}

export default Form;
