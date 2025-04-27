"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryConfig = exports.dburl = exports.port = exports.database = exports.sucess = exports.error = exports.runing = void 0;
const config_1 = __importDefault(require("dotenv/config"));
const debug_1 = __importDefault(require("debug"));
config_1.default;
const { PORT, DBURL, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } = process.env;
exports.runing = (0, debug_1.default)("Application:[runing]");
exports.error = (0, debug_1.default)("Application:[error]");
exports.sucess = (0, debug_1.default)("Application:[sucess]");
exports.database = (0, debug_1.default)("Application:[database]");
exports.port = PORT;
exports.dburl = DBURL;
exports.cloudinaryConfig = {
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    cloud_name: CLOUDINARY_CLOUD_NAME
};
//# sourceMappingURL=config.js.map