const express = require("express");
const Joi = require("joi");

const router = express.Router();

const heroes = require("../../models/heroes");

const { HttpError } = require("../../helpers");

const addSchema = Joi.object({
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  origin_description: Joi.string().required(),
  superpowers: Joi.string().required(),
  catch_phrase: Joi.string().required(),
});

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
  console.log(req.body);
  try {
    const { error } = addSchema.validate(req.body);
    // const result = await heroes.addHero(req.body);
    console.log(req.body);
    if (error) {
      throw HttpError(400, error.message);
    } else {
      const result = await heroes.addHero(req.body);
      res.status(201).json(result);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:heroId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:heroId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
