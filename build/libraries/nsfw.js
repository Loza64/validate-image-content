"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isInapropiate;
const canvas_1 = require("canvas");
const nsfwjs_1 = require("nsfwjs");
async function isInapropiate(photo) {
    let nsfw = await (0, nsfwjs_1.load)();
    const image = await (0, canvas_1.loadImage)(photo.buffer);
    const canvas = (0, canvas_1.createCanvas)(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    const predictions = await nsfw.classify(canvas);
    let categories;
    (function (categories) {
        categories["Porn"] = "Porn";
        categories["Hentai"] = "Hentai";
        categories["Sexy"] = "Sexy";
    })(categories || (categories = {}));
    const isNSFW = predictions.some(({ className, probability }) => categories[className] && probability > 0.75);
    console.log(isNSFW);
    return isNSFW;
}
//# sourceMappingURL=nsfw.js.map