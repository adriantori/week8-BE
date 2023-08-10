import { Request, Response, Router } from "express";
import { v4 } from "uuid";
import * as fs from "node:fs";

import appRoot from 'app-root-path';

export const router = Router();
let transactionData: Array<string|number> = [];

//hello
router.get('/', (req: Request, res: Response) => {
    res.send("Welcome to Codegree API")
});

//get all transaction
router.get('/transaction', (req: Request, res: Response) => {
    const jsonContent = fs.readFileSync(`${appRoot}\\model\\transaction.json`);
    res.send(jsonContent);
});

//push transaction
router.post('/transaction', (req: Request, res: Response) => {
    fs.readFile(`${appRoot}\\model\\transaction.json`, 'utf8', function (err, data) {
        var transactions = JSON.parse(data);
        transactions.push(req.body);    
        fs.writeFile(`${appRoot}\\model\\transaction.json`, JSON.stringify(transactions), function(err){
          if (err) throw err;
          res.send('Insert data successful');
        });
    })
});

//get transaction by id
router.get('/transaction/:id', (req: Request, res: Response) => {
    // First retrieve existing user list
    fs.readFile(`${appRoot}\\model\\transaction.json`, 'utf8', function (err, data) {
        const transactions = JSON.parse( data );
        const transaction = transactions[+req.params.id-1] ;
        if(!transaction){
            res.send("Data not found");
        }else{ 
            res.send(`${transaction['id']}`);
        };
     });
});

//delete transaction by id
router.delete('/transaction/:id', (req: Request, res: Response) => {
    fs.readFile(`${appRoot}\\model\\transaction.json`, 'utf8', function (err, data) {
        const transactions = JSON.parse( data );
        const transaction = transactions[+req.params.id-1] ;
        if(!transaction){
            res.send("Data not found");
        }else{ 
            delete transactions[+req.params.id-1];
            fs.writeFile(`${appRoot}\\model\\transaction.json`, JSON.stringify(transactions), function(err){
                if (err) throw err;
              });
            res.send(transactions);
        };
     });
});

//patch by id
router.patch('/transaction/:id', (req: Request, res: Response) => {
    fs.readFile(`${appRoot}\\model\\transaction.json`, 'utf8', function (err, data) {
        const transactions = JSON.parse( data );
        const transaction = transactions[+req.params.id-1] ;
        const { name, detail, amount } = req.body;

        if(!transaction){
            res.send("Data not found");
        }else{ 
            
            if(name) transaction.name = name;
            if(detail) transaction.detail = detail;
            if(amount) transaction.amount = amount;
            fs.writeFile(`${appRoot}\\model\\transaction.json`, JSON.stringify(transactions), function(err){
                if (err) throw err;
              });
            res.send(transactions);
        };
     });
});

