import cors from "cors";
import express, { Response, Request } from "express";
import { errorHandler } from "./middlewares/errors";
import morgan from "morgan";
import router from "./routes/routes";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/rest/route/server/", router, errorHandler);
app.get('/favicon.ico', (req: Request, res: Response) => { res.status(204).end() });

export default app;