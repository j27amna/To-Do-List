#! usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoques = await inquirer.prompt([
        {
            name: "ques1",
            type: "input",
            message: "What's on your to-do list?"
        },
        {
            name: "ques2",
            type: "confirm",
            message: "Is there something more you wanna add?",
            default: "true"
        }
    ]);
    todos.push(todoques.ques1);
    console.log(`Don't forget to do ${todoques.ques1}`);
    condition = todoques.ques2;
}
;
