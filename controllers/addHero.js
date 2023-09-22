const { HttpError } = require("../helpers");
// const heroes = require("../models/heroes");
const Joi = require("joi");
const Hero = require("../models/hero");
const path = require("path");
const fs = require("fs/promises");
const { v4 } = require("uuid");

const addSchema = Joi.object({
  _id: Joi.string().required(),
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  origin_description: Joi.string().required(),
  superpowers: Joi.string().required(),
  catch_phrase: Joi.string().required(),
});

const heroesDir = path.join(__dirname, "../", "public", "heroes");

const addHero = async (req, res) => {
  const request = JSON.parse(req.body.jsonData);
  const id = v4();
  const requestWithId = { _id: id, ...request };
  // try {
  const { error } = addSchema.validate(requestWithId);
  // const result = await heroes.addHero(req.body);

  if (error) {
    throw HttpError(400, error.message);
  } else {
    const { path: tempDir } = req.file;
    // const { path: tempDir, originalname } = req.file;
    const resultUpload = path.join(heroesDir, `${id}.webp`);
    console.log(requestWithId);
    await fs.rename(tempDir, resultUpload);
    const cover = path.join("heroes", `${id}.webp`);
    // const newHero = [cover];
    const resultForDB = { ...requestWithId, imageUrl: cover };
    const result = await Hero.create(resultForDB);
    res.status(201).json(result);

    // const result = await heroes.addHero(req.body);
    // res.status(201).json(result);
  }
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = addHero;
