import { NextFunction, Request, Response } from "express";
import isInapropiate from "../libraries/nsfw";


const sendResponse = (res: Response, state: number, message: string) => {
    res.status(state).json({
        state: state >= 200 && state < 300 ? "success" : "error",
        message
    });
};


export const checkImageContent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const image = req.file as unknown as Express.Multer.File;
    const isNSFW = await isInapropiate(image);

    if (!isNSFW) {
        sendResponse(res, 200, "La imagen es apropiada");
        return Promise.resolve();
    }

    sendResponse(res, 400, "La imagen contiene contenido inapropiado");
    return Promise.resolve();

}