"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const uuid_1 = require("uuid");
exports.router = (0, express_1.Router)();
let transactionData = [];
//get
exports.router.get("/api/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(transactionData);
}));
//get id
//post
exports.router.post("/api/", (req, res) => {
    const transaction = req.body;
    transactionData.push(Object.assign(Object.assign({}, transaction), { id: (0, uuid_1.v4)() }));
    res.send(`Transaction ${transaction.name} has been added successfully`);
});
//put
//delete
