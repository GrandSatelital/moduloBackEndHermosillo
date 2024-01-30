const express = require("express");

const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const readDB = new Promise((resolve, reject) => {
    fs.readFile("./src/lib/db.json", "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
  readDB
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

/*Practica: modificar el endpoint post /users para que lea el archivo JSON compartido en clase, el cual contiene un arreglo de usuarios y agregue un nuevo usuario al arreglo. 
Nota: el archivo JSON se debe guardar con el nuevo usuario. 
TIP: recuerda que puedes usar el código de tu practica anterior donde se leía y actualizaba el contenido de un archivo JSON*/

router.post("/", (req, res) => {
  const readDB = new Promise((resolve, reject) => {
    fs.readFile("./src/lib/db.json", "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
  readDB
    .then((dbJson) => {
      const user = req.body;
      dbJson.push(user);
      fs.writeFile(
        "./src/lib/db.json",
        JSON.stringify(dbJson, null, 4),
        (err) => {
          if (err) res.status(400).send("User not created");
          res.status(200).send("User created");
        }
      );
    })
    .catch(() => {
      res.status(400).send("Couldn't read DB");
    });
});

router.put("/", (req, res) => {
  res.status(200).send("User updated");
});

router.delete("/", (req, res) => {
  res.status(204).send("User deleted");
});

module.exports = router;
