"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const config_1 = require("../config");
const errorHandler = (err, res, next) => {
    (0, config_1.error)(err.message || 'Something went wrong');
    res.status(err.status || 500).json({ status: "error", message: err.message || 'Something went wrong' });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errors.js.map