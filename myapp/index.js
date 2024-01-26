const express = require("express");
const app = express();
const port = 3000;
const hostname = "localhost";

const usersRoutes = require("./src/routes/users");

app.use(usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello Koders");
});

app.get("/hi", (req, res) => {
  res.send("Hi!");
});

app.post("/", (req, res) => {
  res.status(201).send("Post aceptado");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname} port ${port}`);
});
