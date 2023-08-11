import { Request, Response, Router } from "express";
export const router = Router();

//hello
const helloWorld = (req: Request, res: Response) => {
    res.send("Welcome to Codegree API")
};

export default helloWorld;
