import fs from "fs";

const addSrc = () => {
  fs.writeFile(".src", "do not fuck with me", () => {
    console.log("can you create yourself? please?");
  });
};

addSrc();
