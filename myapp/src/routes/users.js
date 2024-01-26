const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.send("Users page");
});

router.put("/users", (req, res) => {
  res.status(200).send("User updated");
});

router.delete("/users", (req, res) => {
  res.status(204).send("User deleted");
});

router.post("/users", (req, res) => {
  res.status(201).send("User accepted");
});

module.exports = router;
