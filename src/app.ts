import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

//routes
import { router } from "./routes/router";

dotenv.config();

const app: Express = express();
const port: number = +!process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/", router);

app.listen(port, "0.0.0.0",() => {
    console.log(`server listen ${port}`);
});
