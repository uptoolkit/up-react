export function isArray(object:any) {
    return Object.prototype.toString.call(object) === '[object Array]';
}

export function isFile(object:any) {
    return object instanceof File || object instanceof FileList;
}

export function merge(a:any, b:any) {
    for (const key in b) {
        a[key] = cloneDeep(b[key]);
    }
}

export function cloneDeep(object:any) {
    if (object === null) {
        return null;
    }

    if (isFile(object)) {
        return object;
    }

    if (Array.isArray(object)) {
        const clone:any = [];

        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                clone[key] = cloneDeep(object[key]);
            }
        }

        return clone;
    }

    if (typeof object === 'object') {
        const clone:any = {};

        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                clone[key] = cloneDeep(object[key]);
            }
        }

        return clone;
    }

    return object;
}
