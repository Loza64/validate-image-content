"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller/controller");
const multer_1 = require("../libraries/multer");
const router = (0, express_1.Router)();
router.post('/upload/image', multer_1.uploadFile, controller_1.checkImage);
exports.default = router;
//# sourceMappingURL=routes.js.map