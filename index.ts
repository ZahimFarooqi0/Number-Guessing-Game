#!/usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log(("\n \t\t\t")+chalk.bold.underline.bgRed.black("Welcome To Number-Guessing-Game"))
console.log("\n");
let randomnumber = Math.floor(Math.random()*10+1);
const answer = await inquirer.prompt([{ message:"Kindly Enter Your Guessed Number (1-10) : ",type:"number",name: "userguessednumber"}])
if(answer.userguessednumber===randomnumber){
    console.log(("\n")+chalk.bgBlue.italic.red("Congraluations You Won !!!"));
}else{
    console.log(("\n")+chalk.bgBlue.italic.red("Better Luck Next Time"));
}