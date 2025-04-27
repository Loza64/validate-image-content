import { body } from "express-validator";

export const imageValidation = [
    body("image").custom(async (value, { req }) => {
        const photo = req.files!.image as Express.Multer.File | Express.Multer.File[] | undefined;

        if (!photo) {
            throw new Error("No se ha enviado ninguna imagen");
        }

        if (Array.isArray(photo)) {
            throw new Error("Se ha enviado más de una imagen");
        }
        if (photo.size > 5 * 1024 * 1024) {
            throw new Error("La imagen es demasiado grande");
        }
        if (!photo.mimetype.startsWith("image/")) {
            throw new Error("El archivo no es una imagen");
        }
        if (photo.mimetype !== "image/jpeg" && photo.mimetype !== "image/png" && photo.mimetype !== "image/gif") {
            throw new Error("El formato de la imagen no es válido");
        }
        return true;
    }),
];