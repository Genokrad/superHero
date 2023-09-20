const express = require("express");

const router = express.Router();

const heroes = require("../../models/heroes");

router.get("/", async (req, res, next) => {
  const result = await heroes.listHeroes();
  res.json(result);
});

router.get("/:heroId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:heroId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:heroId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
