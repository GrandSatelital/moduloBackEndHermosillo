const fs = require("fs");

const command = process.argv[2];
const fileName = process.argv[3];

const startProject = () => {
  fs.mkdir(fileName, (err) => {
    if (err) throw err;
    console.log("Folder created");
    fs.writeFile(fileName + "/index.html", "", (err) => {
      if (err) throw err;
      console.log("File created");
    });
  });
};
