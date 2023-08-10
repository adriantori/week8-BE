"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const fs = __importStar(require("node:fs"));
const app_root_path_1 = __importDefault(require("app-root-path"));
exports.router = (0, express_1.Router)();
//hello
exports.router.get('/', (req, res) => {
    res.send("Welcome to Codegree API");
});
//get all transaction
exports.router.get('/transaction', (req, res) => {
    const jsonContent = fs.readFileSync(`${app_root_path_1.default}\\model\\transaction.json`);
    res.send(jsonContent);
});
//push transaction
exports.router.post('/transaction', (req, res) => {
    fs.readFile(`${app_root_path_1.default}\\model\\transaction.json`, 'utf8', function (err, data) {
        var transactions = JSON.parse(data);
        transactions.push(req.body);
        fs.writeFile(`${app_root_path_1.default}\\model\\transaction.json`, JSON.stringify(transactions), function (err) {
            if (err)
                throw err;
            res.send('Insert data successful');
        });
    });
});
//get transaction by id
exports.router.get('/transaction/:id', (req, res) => {
    // First retrieve existing user list
    fs.readFile(`${app_root_path_1.default}\\model\\transaction.json`, 'utf8', function (err, data) {
        const transactions = JSON.parse(data);
        const transaction = transactions[+req.params.id - 1];
        if (!transaction) {
            res.send("Data not found");
        }
        else {
            res.send(`${transaction['id']}`);
        }
        ;
    });
});
//delete transaction by id
exports.router.delete('/transaction/:id', (req, res) => {
    fs.readFile(`${app_root_path_1.default}\\model\\transaction.json`, 'utf8', function (err, data) {
        const transactions = JSON.parse(data);
        const transaction = transactions[+req.params.id - 1];
        if (!transaction) {
            res.send("Data not found");
        }
        else {
            delete transactions[+req.params.id - 1];
            fs.writeFile(`${app_root_path_1.default}\\model\\transaction.json`, JSON.stringify(transactions), function (err) {
                if (err)
                    throw err;
            });
            res.send(transactions);
        }
        ;
    });
});
//patch by id
exports.router.patch('/transaction/:id', (req, res) => {
    fs.readFile(`${app_root_path_1.default}\\model\\transaction.json`, 'utf8', function (err, data) {
        const transactions = JSON.parse(data);
        const transaction = transactions[+req.params.id - 1];
        const { name, detail, amount } = req.body;
        if (!transaction) {
            res.send("Data not found");
        }
        else {
            if (name)
                transaction.name = name;
            if (detail)
                transaction.detail = detail;
            if (amount)
                transaction.amount = amount;
            fs.writeFile(`${app_root_path_1.default}\\model\\transaction.json`, JSON.stringify(transactions), function (err) {
                if (err)
                    throw err;
            });
            res.send(transactions);
        }
        ;
    });
});
