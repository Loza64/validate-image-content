"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const config_1 = require("../config");
const validate = (req, res, next) => {
    const validator = (0, express_validator_1.validationResult)(req);
    if (!validator.isEmpty()) {
        const errors = validator.array();
        let data = errors.reduce((acc, error) => {
            acc[error.path] = error.msg;
            return acc;
        }, {});
        res.status(400).json({ status: "error", message: "Errores de validación de entrada", data });
        (0, config_1.error)(data);
        return;
    }
    next();
};
exports.validate = validate;
//# sourceMappingURL=validator.js.map