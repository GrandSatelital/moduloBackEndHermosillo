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

const createHtml = () => {
  fs.writeFile(fileName + ".html", "", (err) => {
    if (err) throw err;
    console.log("File created");
  });
};

const createJs = () => {
  fs.access("./js", fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdir("./js", (err) => {
        if (err) throw err;
        console.log("Folder js created");
        fs.writeFile("./js/" + fileName + ".js", "", (err) => {
          if (err) throw err;
          console.log(`File ${fileName}.js created`);
        });
      });
    } else {
      fs.writeFile("./js/" + fileName + ".js", "", (err) => {
        if (err) throw err;
        console.log(`File ${fileName}.js created`);
      });
    }
  });
};

const createCss = () => {
  fs.access("./css", fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdir("./css", (err) => {
        if (err) throw err;
        console.log("Folder css created");
        fs.writeFile("./css/" + fileName + ".css", "", (err) => {
          if (err) throw err;
          console.log(`File ${fileName}.css created`);
        });
      });
    } else {
      fs.writeFile("./css/" + fileName + ".css", "", (err) => {
        if (err) throw err;
        console.log(`File ${fileName}.css created`);
      });
    }
  });
};

createCss();
