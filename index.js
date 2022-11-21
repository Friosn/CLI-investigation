import inquirer from "inquirer";
import fs from "fs";
import path from "path";

inquirer
  .prompt([
    {
      type: "list",
      name: "src",
      message: "Do you want to create the basic file structure?",
      choices: ["Yes", "No"],
    },
  ])
  .then((answers) => {
    if (answers.src === "Yes") {
      fs.writeFile("generating.js", "I am a damm file duh!", () =>
        console.log("All went right, folder created 🧙🏼‍♂️")
      );
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Meeeec! It could not be rendered");
    } else {
      console.log("something went wrong");
    }
  });
