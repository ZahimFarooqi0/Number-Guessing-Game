#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(("\n \t\t\t") + chalk_1.default.bold.underline.bgRed.black("Welcome To Number-Guessing-Game"));
console.log("\n");
let randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer_1.default.prompt([{ message: "Kindly Enter Your Guessed Number (1-10) : ", type: "number", name: "userguessednumber" }]);
if (answer.userguessednumber === randomnumber) {
    console.log(("\n") + chalk_1.default.bgBlue.italic.red("Congraluations You Won !!!"));
}
else {
    console.log(("\n") + chalk_1.default.bgBlue.italic.red("Better Luck Next Time"));
}
