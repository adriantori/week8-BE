import { Request, Response, Router } from "express";
export const router = Router();

//pageNotFound
const pageNotFound = (req: Request, res: Response) => {
    res.send(`<h1>page not found</h1>`);
};

export default pageNotFound;
