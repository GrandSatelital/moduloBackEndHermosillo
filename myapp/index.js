const express = require("express");
const app = express();
const port = 3000;
const hostname = "localhost";

app.get("/", (req, res) => {
  res.send("Hello Koders");
});

app.get("/hi", (req, res) => {
  res.send("Hi!");
});

app.get("/users", (req, res) => {
  res.send("Users page");
});

app.post("/", (req, res) => {
  res.status(201).send("Post aceptado");
});

app.post("/users", (req, res) => {
  res.status(201).send("User accepted");
});

app.put("/users", (req, res) => {
  res.status(200).send("User updated");
});

app.delete("/users", (req, res) => {
  res.status(204).send("User deleted");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname} port ${port}`);
});
