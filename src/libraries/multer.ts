import multer from "multer"

const memoryStorage = multer.memoryStorage();
const upload = multer({ storage: memoryStorage });

export const uploadFile = upload.single("image");
export const uploadFiles = upload.array("images", 10);