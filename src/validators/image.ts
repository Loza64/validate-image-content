import { body } from "express-validator";

export const imageValidation = [
    body("image").custom(async (value, { req }) => {
        try {
            const photo = req.file as Express.Multer.File

            if (!photo) {
                throw new Error("No se ha enviado ninguna imagen");
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
        } catch (error) {
            throw new Error("Error en la validación de la imagen: " + (error as Error).message);
        }
    }),
];