import environment from "dotenv/config";
import debug from "debug";

environment;

const { PORT } = process.env

export const runing = debug("Application:[runing]")
export const error = debug("Application:[error]")

export const port = PORT