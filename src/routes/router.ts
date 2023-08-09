import { Request, Response, Router } from "express";
import { v4 } from "uuid";

export const router = Router();
let transactionData: Array<string|number> = [];

//get
router.get("/api/", async (req: Request, res: Response) => {
    res.send("get success");
});

//test
router.get("/", (req: Request, res: Response) => {
    res.send("get success");
});

//get id

//post
router.post("/api/", (req: Request, res: Response) => {
    const transaction = req.body;
    transactionData.push({...transaction, id:v4()});
    res.send(`Transaction ${transaction.name} has been added successfully`);
});

//put

//delete