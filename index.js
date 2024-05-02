#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.rgb(204, 85, 0)("\n\t\t         _____________________________________________________________________\n\n\t\t       \t   ---------------> wellcome this brain test game <---------------\n\t\t        _____________________________________________________________________ \n"));
let questions = await inquirer.prompt([{
        name: "ques",
        type: "input",
        message: chalk.rgb(156, 45, 89)("\t\t\t\t\t   Kindly Enter Your Name : "),
        validate: (input) => {
            if (!input || /^\d+$/.test(input)) {
                return chalk.red("\n\t\t\t\t\  Please Enter Only Alphabetic Words");
            }
            else {
                return true;
            }
        }
    }]);
// sccore variable
let score = [0];
// name variable 
let name = questions.ques;
console.log(chalk.bold.rgb(173, 216, 230).underline(`\n\t\t\t\t\t     lets start the quiz ${name}\n\n`));
// function 
async function askQuestion(names) {
    //asking  question one 
    let quest1 = await inquirer.prompt([{
            name: "q1",
            type: "list",
            message: chalk.magenta(" QUESTION 01 : In TypeScript, what does the as keyword primarily enable?"),
            choices: ["a) Type assertion",
                "b) Type inference",
                "c) Type coercion",
                "d) Type checking"]
        }]);
    if (quest1.q1 == "a) Type assertion") {
        console.log(chalk.rgb(255, 204, 0)(`\n\tWOW!! ${name} Congratulation... Your Answer Is Correct 
            \t\tYou Got 1 point \n`));
        score.push(5);
    }
    else {
        console.log(chalk.rgb(204, 0, 0)(`\n\tOo the answer is inaccurate.... The correct answer is Option A ("Type assertion")
    You Got 0 point\n`));
    }
    // asking question 2 
    let quest2 = await inquirer.prompt([{
            name: "q2",
            type: "list",
            message: chalk.magenta(" QUESTION 02 : What does the in keyword do in TypeScript?"),
            choices: ["a) It's used for creating type aliases",
                "b) It's used to check if a property exists in an object",
                "c) It's used to declare index signatures in interfaces",
                "d) It's used to denote a function type"]
        }]);
    if (quest2.q2 == "b) It's used to check if a property exists in an object") {
        console.log(chalk.rgb(255, 204, 0)(`\n\tWOW!! ${name} Congratulation... Your Answer Is Correct 
         \t\tyou Got 1 point\n `));
        score.push(5);
    }
    else {
        console.log(chalk.rgb(204, 0, 0)(`\n\tOo the answer is inaccurate.... The correct answer is Option B ("It's used to check if a property exists in an object")
         You Got 0 point\n`));
    }
    // asking question 3 
    let quest3 = await inquirer.prompt([{
            name: "q3",
            type: "list",
            message: chalk.magenta("  QUESTION 03 : Which of the following is true about TypeScript's unknown type?"),
            choices: ["a) It allows any type to be assigned to it without type-checking",
                "b) It's similar to the any type but with stricter type-checking",
                "c) It's a subtype of all types, except any and never",
                "d) It's used to represent types that are not yet known to TypeScript "]
        }]);
    if (quest3.q3 == "c) It's a subtype of all types, except any and never") {
        console.log(chalk.rgb(255, 204, 0)(`\n\tWOW!! ${name} Congratulation... Your Answer Is Correct 
      \t\t   You Got 1 point\n `));
        score.push(5);
    }
    else {
        console.log(chalk.rgb(204, 0, 0)(`\n\tOo the answer is inaccurate.... The correct answer is Option C ("It's a subtype of all types, except any and never")
            You Got 0 point\n`));
    } // asking question 4
    let quest4 = await inquirer.prompt([{
            name: "q4",
            type: "list",
            message: chalk.magenta("  QUESTION 04 : What is the key difference between a TypeScript interface and a type alias?"),
            choices: ["a)  Interfaces can extend classes, while type aliases cannot.",
                "b) Type aliases can represent primitive types, while interfaces cannot.",
                "c)  Interfaces can be implemented by classes, while type aliases cannot.",
                "d) Type aliases can represent union and intersection types, while interfaces cannot"]
        }]);
    if (quest4.q4 == "b) Type aliases can represent primitive types, while interfaces cannot.") {
        console.log(chalk.rgb(255, 204, 0)(`\n\tWOW!! ${name} Congratulation... Your Answer Is Correct 
        \t\tYou Got 1 point\n `));
        score.push(5);
    }
    else {
        console.log(chalk.rgb(204, 0, 0)(`\n\tOo the answer is inaccurate.... The correct answer is Option B ("Type aliases can represent primitive types, while interfaces cannot.")
         You Got 0 point\n`));
    }
    //  asking question 5
    let quest5 = await inquirer.prompt([{
            name: "q5",
            type: "list",
            message: chalk.magenta("  QUESTION 05 : What is the purpose of the 'readonly' keyword in TypeScript"),
            choices: ["a)  It indicates that a variable cannot be reassigned",
                "b) It indicates that a variable cannot be accessed outside its scope",
                "c) It indicates that a variable can only be accessed in a read-only mode",
                "d) It indicates that a variable can only be assigned once"]
        }]);
    if (quest5.q5 == "a)  It indicates that a variable cannot be reassigned") {
        console.log(chalk.rgb(255, 204, 0)(`\n\tWOW!! ${name} Congratulation... Your Answer Is Correct 
       \t\t  You  Got 1 point\n `));
        score.push(5);
    }
    else {
        console.log(chalk.rgb(204, 0, 0)(`\n\tOo the answer is inaccurate.... The correct answer is Option A ("It indicates that a variable cannot be reassigne")
         You Got 0 point\n`));
    }
    // asking question 6 
    let quest6 = await inquirer.prompt([{
            name: "q6",
            type: "list",
            message: chalk.magenta("  QUESTION 06 : What is the purpose of the 'keyof' keyword in TypeScript"),
            choices: ["a) It returns the type of keys in an object",
                "b) It returns the values of keys in an object",
                "c)It returns the length of keys in an object",
                "d) It returns the index of a specific key in an object"]
        }]);
    if (quest6.q6 == "a) It returns the type of keys in an object") {
        console.log(chalk.rgb(255, 204, 0)(`\n\tWOW!! ${name} Congratulation... Your Answer Is Correct 
       \t\t You Got 1 point\n `));
        score.push(5);
    }
    else {
        console.log(chalk.rgb(204, 0, 0)(`\n\tOo the answer is inaccurate.... The correct answer is Option A (" It returns the type of keys in an object")
           You Got 0 point\n`));
    }
    let totalnum = score.reduce((total, plus) => { return total + plus; });
    if (totalnum > 20) {
        console.log(chalk.bold.rgb(173, 216, 230)(`\n\t\t\t\t\t   ~~~~~~~~~~~~~ Your work is truly outstanding.you got ${totalnum} out of 30 in your quiz~~~~~~~~~~~~~`));
    }
    else {
        console.log(chalk.bold.rgb(173, 216, 230)(`\n\t\t\t\t\t  ~~~~~~~~~~~~~ NICE you got ${totalnum} out of 30 in your quiz ~~~~~~~~~~~~~`));
    }
    console.log(chalk.bold.rgb(204, 85, 0)("\n\t\t\t         _____________________________________________________________________\n\n\t\t       \t\t   ---------------> THANK YOU FOR ATTEMPT THIS QUIZ <---------------\n\t\t\t        _____________________________________________________________________ \n"));
}
askQuestion(name);
