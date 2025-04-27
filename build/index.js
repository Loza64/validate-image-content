"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const config_1 = require("./config");
const app_1 = __importDefault(require("./app"));
const server = (0, http_1.createServer)(app_1.default);
server.listen(config_1.port, () => { (0, config_1.runing)(`on port: ${config_1.port}`); });
//# sourceMappingURL=index.js.map