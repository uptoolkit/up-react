declare class Errors {
    /**
     * Create a new Errors instance.
     */
    constructor(errors?: {});
    /**
     * Get all the errors.
     *
     * @return {object}
     */
    all(): any;
    /**
     * Determine if any errors exists for the given field or object.
     *
     * @param {string} field
     */
    has(field: any): any;
    first(field: any): any;
    get(field: any): any;
    /**
     * Determine if we have any errors.
     * Or return errors for the given keys.
     *
     * @param {array} keys
     */
    any(keys?: any[]): {};
    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
    record(errors?: {}): void;
    /**
     * Clear a specific field, object or all error fields.
     *
     * @param {string|null} field
     */
    clear(field: any): void;
}
export default Errors;
