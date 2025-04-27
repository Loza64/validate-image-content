import { NextFunction, Response, Request } from "express";
import { validationResult } from "express-validator";
import { error } from "../config";

interface ValidationError {
    type: string;
    path: string;
    msg: string;
    location: string;
}

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const validator = validationResult(req);

    if (!validator.isEmpty()) {

        const errors = validator.array() as ValidationError[];

        let data: Record<string, string> = errors.reduce(
            (acc: Record<string, string>, error) => {
                acc[error.path] = error.msg;
                return acc;
            }, {}
        );

        res.status(400).json({ status: "error", message: "Errores de validación de entrada", data });

        error(data);
        return;
    }

    next();
};