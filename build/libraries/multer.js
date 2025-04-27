"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFiles = exports.uploadFile = void 0;
const multer_1 = __importDefault(require("multer"));
const memoryStorage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: memoryStorage });
exports.uploadFile = upload.single("image");
exports.uploadFiles = upload.array("images", 10);
//# sourceMappingURL=multer.js.map