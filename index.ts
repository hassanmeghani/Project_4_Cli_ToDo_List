#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;

while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "What you want to add in your Todos:",
    },
    {
      name: "addMore",
      type: "confirm",
      message: "Do you want to add another Todo?",
      default: false,
    },
  ]);
  todos.push(addTask.todo);
  condition = addTask.addMore;
  console.log(todos);
}
console.log("Here is your final ToDo list!");
console.log("Thankyou for using ToDo!");
