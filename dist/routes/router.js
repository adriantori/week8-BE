"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const helloWorld_js_1 = __importDefault(require("../controllers/helloWorld.js"));
const getAllTransaction_1 = __importDefault(require("../controllers/getAllTransaction"));
const postTransaction_1 = __importDefault(require("../controllers/postTransaction"));
const getTransactionById_1 = __importDefault(require("../controllers/getTransactionById"));
const deleteTransaction_1 = __importDefault(require("../controllers/deleteTransaction"));
const putTransaction_1 = __importDefault(require("../controllers/putTransaction"));
const patchTransaction_1 = __importDefault(require("../controllers/patchTransaction"));
const pageNotFound_1 = __importDefault(require("../controllers/pageNotFound"));
exports.router = (0, express_1.Router)();
//hello
exports.router.get('/', helloWorld_js_1.default);
//getAllTransaction
exports.router.get('/transaction', getAllTransaction_1.default);
//push transaction
exports.router.post('/transaction', postTransaction_1.default);
//get transaction by id
exports.router.get('/transaction/:id', getTransactionById_1.default);
//delete transaction by id
exports.router.delete('/transaction/:id', deleteTransaction_1.default);
//put by id
exports.router.put('/transaction/:id', putTransaction_1.default);
//patch by id
exports.router.patch('/transaction/:id', patchTransaction_1.default);
//page not found
exports.router.get("*", pageNotFound_1.default);
