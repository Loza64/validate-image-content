import environment from "dotenv/config";
import debug from "debug";

environment;

const { PORT, DBURL, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } = process.env

export const runing = debug("Application:[runing]")
export const error = debug("Application:[error]")
export const sucess = debug("Application:[sucess]")
export const database = debug("Application:[database]")

export const port = PORT
export const dburl = DBURL

export const cloudinaryConfig = {
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    cloud_name: CLOUDINARY_CLOUD_NAME
} 