const express = require("express");

const router = express.Router();

const heroes = require("../../models/heroes");

const { HttpError } = require("../../helpers");

router.get("/", async (req, res, next) => {
  try {
    const result = await heroes.listHeroes();
    res.json(result);
  } catch (error) {
    next(error);
    // res.status(500).json({
    //   message: "Server error",
    // });
  }
});

router.get("/:heroId", async (req, res, next) => {
  try {
    const { heroId } = req.params;
    const result = await heroes.getHeroById(heroId);
    if (result) {
      res.json(result);
    } else {
      throw HttpError(404, "Hero not found");
      // const error = new Error("Hero not found");
      // error.status = 404;
      // throw error;
      // res.status(404).json({ message: "Hero not found" });
    }
  } catch (error) {
    next(error);
    // const { status = 500, message = "Server error" } = error;
    // res.status(status).json({
    //   message,
    // });
  }
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
