(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "use-up"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUp = void 0;
    const use_up_1 = require("use-up");
    Object.defineProperty(exports, "useUp", { enumerable: true, get: function () { return use_up_1.useUp; } });
});
