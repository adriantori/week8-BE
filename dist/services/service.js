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
exports.find = exports.findAll = void 0;
//in-memory storage
let transactions = {
    1: {
        id: 1,
        type: "cash in",
        name: "gaji",
        detail: "gaji bulanan",
        amount: 2000000
    },
    2: {
        id: 2,
        type: "cash out",
        name: "gaming",
        detail: "steam sale",
        amount: 500000
    }
};
//service methods
const findAll = () => __awaiter(void 0, void 0, void 0, function* () { return Object.values(transactions); });
exports.findAll = findAll;
const find = (id) => __awaiter(void 0, void 0, void 0, function* () { return transactions[id]; });
exports.find = find;
