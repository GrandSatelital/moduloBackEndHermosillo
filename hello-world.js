const http = require("node:http"); //Importamos la biblioteca de node "http"

const hostname = "127.0.0.1"; // Servidor name: localhost
const port = 3000; // Puerto que se usará para establecer conexión

const server = http.createServer((req, res) => {
  //Función para crear el servidor
  res.statusCode = 200; //Código de status
  res.setHeader("Content-Type", "application/json"); // Header => content type define el contenido del body
  res.end("{msg: 'Hello World'}"); // Body
});

server.listen(port, hostname, () => {
  // Función para escuchar requests de clientes
  console.log(`Server running at http://${hostname}:${port}/`); // El callback se va a ejecutar cuando el servidor esté escuchando
});
