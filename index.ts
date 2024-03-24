#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 3 + 1);

const answers = await inquirer.prompt([

    {
     name: "userGuessed",
     type: "number",
     message: "Please, Guess a Number Between (1 to 3): " 
    }

]);

if(answers.userGuessed === randomNumber){
   console.log("Congratulations! You are Winner, You Guessed a Correct Number");
   
} else {
   console.log("Loser! You are Lose, You Guessed Incorrect Number, Please Try Again");
    
}