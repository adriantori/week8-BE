"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
//hello
const helloWorld = (req, res) => {
    res.send("Welcome to Codegree API");
};
exports.default = helloWorld;
