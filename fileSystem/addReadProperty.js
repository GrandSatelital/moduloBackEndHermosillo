/*
Generar un método el cuál obtenga información de un archivo local (.JSON) y agregue la clave "read" con valor "true"

Criterios de aceptación:
- La ruta del archivo JSON debe obtenerse por argumentos
- La clave read debe guardarse en el archivo no solo en pantalla

NOTA: se puede usar JSON.stringify y JSON.parse
*/
const fs = require("fs");

const path = process.argv[2];

fs.readFile(path, "utf8", (err, data) => {
  if (err) throw err;

  let jsonToObject = JSON.parse(data);

  jsonToObject.read = true;

  let propertyToAdd = JSON.stringify(jsonToObject, null, 4);

  fs.writeFile(path, propertyToAdd, (err) => {
    if (err) throw err;
    else {
      console.log("File updated succesfully");
    }
  });
});
