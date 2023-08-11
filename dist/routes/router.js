"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const model_1 = __importDefault(require("../models/model"));
exports.router = (0, express_1.Router)();
//hello
exports.router.get('/', (req, res) => {
    res.send("Welcome to Codegree API");
});
//get all transaction
exports.router.get('/transaction', (req, res) => {
    res.send(model_1.default);
});
//push transaction
exports.router.post('/transaction', (req, res) => {
    const input = req.body;
    model_1.default.push(input);
    res.json({
        message: "Transaction success",
        input,
    });
});
//get transaction by id
exports.router.get('/transaction/:id', (req, res) => {
    const currTransaction = model_1.default;
    for (let i = 0; i < currTransaction.length; i++) {
        if (currTransaction[i].id == +req.params.id) {
            res.send(currTransaction[i]);
        }
    }
});
//delete transaction by id
exports.router.delete('/transaction/:id', (req, res) => {
    const currTransaction = model_1.default;
});
//put by id
exports.router.put('/transaction/:id', (req, res) => {
    const currTransaction = model_1.default;
    const { id, name, detail, amount } = req.body;
    if (id)
        currTransaction;
});
//patch by id
exports.router.patch('/transaction/:id', (req, res) => {
    const currTransaction = model_1.default;
    const { id, name, detail, amount } = req.body;
    //if(id){}
});
