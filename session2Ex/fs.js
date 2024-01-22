const fs = require("fs");

/*fs.writeFile("./example.txt", "Hola Koders!", (err) => {
  if (err) throw err;
  console.log("File created succesfully");
});
*/

/*fs.writeFile("./deleteFile.txt", "This will be deleted", (err) => {
  if (err) throw err;
  console.log("File created");
});

/*fs.readFile("./example.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

fs.appendFile("./example.txt", ` Updated ${new Date()}`, (err) => {
  if (err) throw err;
  console.log("File updated");
});

/*fs.unlink("./deleteFile.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});*/
