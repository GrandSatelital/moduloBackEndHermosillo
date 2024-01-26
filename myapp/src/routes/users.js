const express = require("express");
const router = express.Router();
const fs = require("fs/promises");
const { resolve } = require("path");

router.get("/", (req, res) => {
  const getDB = fs
    .readFile("./src/lib/db.json", "utf-8")
    .then((data) => {
      return res.status(200).send(JSON.parse(data));
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

/*Practica: modificar el endpoint post /users para que lea el archivo JSON compartido en clase, el cual contiene un arreglo de usuarios y agregue un nuevo usuario al arreglo. 
Nota: el archivo JSON se debe guardar con el nuevo usuario. 
TIP: recuerda que puedes usar el código de tu practica anterior donde se leía y actualizaba el contenido de un archivo JSON*/

router.post("/", (req, res) => {
  let bodyData = req.body;

  const readDB = fs
    .readFile("./src/lib/db.json", "utf-8")
    .then((data) => {
      let object = JSON.parse(data);
      object.push(bodyData);
      return object; // Devuelve el objeto para que esté disponible para la siguiente promesa
    })
    .catch((err) => {
      throw err;
    });

  readDB
    .then((object) => {
      const updateDB = fs
        .writeFile("./src/lib/db.json", JSON.stringify(object, null, 4))
        .then(() => {
          res.status(200).send("Users DB updated");
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/", (req, res) => {
  res.status(200).send("User updated");
});

router.delete("/", (req, res) => {
  res.status(204).send("User deleted");
});

module.exports = router;
