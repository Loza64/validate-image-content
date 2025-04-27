"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkImage = void 0;
const nsfw_1 = __importDefault(require("../libraries/nsfw"));
const sendResponse = (res, state, message) => {
    res.status(state).json({
        state: state >= 200 && state < 300 ? "success" : "error",
        message
    });
};
const checkImage = async (req, res, next) => {
    const image = req.file;
    const isNSFW = await (0, nsfw_1.default)(image);
    if (!isNSFW) {
        sendResponse(res, 200, "La imagen es apropiada");
        return Promise.resolve();
    }
    sendResponse(res, 400, "La imagen contiene contenido inapropiado");
    return Promise.resolve();
};
exports.checkImage = checkImage;
//# sourceMappingURL=controller.js.map