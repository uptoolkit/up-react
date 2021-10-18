declare class Form {
    private processing;
    private successful;
    private errors;
    private __options;
    private initial;
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     * @param {object} options
     */
    constructor(data?: {}, options?: {});
    withData(data: any): this;
    withErrors(errors: any): this;
    withOptions(options: any): this;
    /**
     * Fetch all relevant data for the form.
     */
    data(): {};
    /**
     * Fetch specific data for the form.
     *
     * @param {array} fields
     * @return {object}
     */
    only(fields: any): any;
    /**
     * Reset the form fields.
     */
    reset(): void;
    setInitialValues(values: object): void;
    populate(data: object): this;
    /**
     * Clear the form fields.
     */
    clear(): void;
    /**
     * Send a POST request to the given URL.
     *
     * @param {string} url
     */
    post(url: string): Promise<unknown>;
    /**
     * Send a PUT request to the given URL.
     *
     * @param {string} url
     */
    put(url: string): Promise<unknown>;
    /**
     * Send a PATCH request to the given URL.
     *
     * @param {string} url
     */
    patch(url: string): Promise<unknown>;
    /**
     * Send a DELETE request to the given URL.
     *
     * @param {string} url
     */
    delete(url: string): Promise<unknown>;
    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType: string, url: string): Promise<unknown>;
    /**
     * @returns {boolean}
     */
    hasFiles(): boolean;
    /**
     * @param {Object|Array} object
     * @returns {boolean}
     */
    hasFilesDeep(object: any): any;
    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data: any): void;
    /**
     * Handle a failed form submission.
     *
     * @param {object} data
     */
    onFail(error: any): void;
    /**
     * Get the error message(s) for the given field.
     *
     * @param field
     */
    hasError(field: any): any;
    /**
     * Get the first error message for the given field.
     *
     * @param {string} field
     * @return {string}
     */
    getError(field: any): any;
    /**
     * Get the error messages for the given field.
     *
     * @param {string} field
     * @return {array}
     */
    getErrors(field: any): any;
    __validateRequestType(requestType: any): void;
    /**
     * Validate actual forms based on Laravel rules
     *
     * @param rules
     * @param customErrorMessages
     */
    validate(rules: object, customErrorMessages?: object): void;
    static create(data?: {}): Form;
}
export default Form;
