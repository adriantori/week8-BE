import { Request, Response, Router } from "express";
import transactions from "../models/model";

import * as fs from "node:fs";
import appRoot from 'app-root-path';

export const router = Router();

//hello
router.get('/', (req: Request, res: Response) => {
    res.send("Welcome to Codegree API")
});

//get all transaction
router.get('/transaction', (req: Request, res: Response) => {
    res.send(transactions);
});

//push transaction
router.post('/transaction', (req: Request, res: Response) => {
    const input = req.body;

    transactions.push(input);
    res.json({
        message: "Transaction success",
        input,
    });
});

//get transaction by id
router.get('/transaction/:id', (req: Request, res: Response) => {
    const currTransaction = transactions;
    for(let i = 0; i < currTransaction.length; i++){
        if(currTransaction[i].id == +req.params.id){
            res.send(currTransaction[i]);
        }
    }
});

//delete transaction by id
router.delete('/transaction/:id', (req: Request, res: Response) => {
    const currTransaction = transactions;
});

//put by id
router.put('/transaction/:id', (req: Request, res: Response) => {
    const currTransaction = transactions;
    const { id, name, detail, amount } = req.body;

    if(id) currTransaction

});

//patch by id
router.patch('/transaction/:id', (req: Request, res: Response) => {
    const currTransaction = transactions;
    const { id, name, detail, amount } = req.body;

    //if(id){}

});

