import { createCanvas, loadImage } from "canvas";
import { load } from "nsfwjs";

export default async function isInapropiate(photo: Express.Multer.File) {

    let nsfw = await load();

    const image = await loadImage(photo.buffer);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

    const predictions = await nsfw.classify(canvas as unknown as HTMLCanvasElement);

    enum categories {
        Porn = 'Porn',
        Hentai = 'Hentai',
        Sexy = 'Sexy'
    }

    const isNSFW = predictions.some(
        ({ className, probability }) => categories[className] && probability > 0.75
    );

    return isNSFW;
}