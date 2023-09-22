const { HttpError } = require("../helpers");
// const heroes = require("../models/heroes");
const Joi = require("joi");
const Hero = require("../models/hero");
// const { v4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");

const addSchema = Joi.object({
  _id: Joi.string().required(),
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  origin_description: Joi.string().required(),
  superpowers: Joi.string().required(),
  catch_phrase: Joi.string().required(),
});

const heroesDir = path.join(__dirname, "../", "public", "heroes");

const updateHero = async (req, res) => {
  console.log(req.body);
  const { heroId } = req.params;
  const request = JSON.parse(req.body.jsonData);
  // const id = v4();
  const requestWithId = { _id: heroId, ...request };

  const { error } = addSchema.validate(requestWithId);
  if (error) {
    throw HttpError(400, error.message);
  } else {
    const { path: tempDir } = req.file;
    fs.unlink(path.join(heroesDir, `${heroId}.webp`), (err) => {
      if (err) {
        console.error("Ошибка при удалении файла:", err);
      } else {
        console.log(
          "Файл успешно удален:",
          path.join(heroesDir, `${heroId}.webp`)
        );
      }
    });
    const resultUpload = path.join(heroesDir, `${heroId}.webp`);
    await fs.rename(tempDir, resultUpload);
    const cover = path.join("heroes", `${heroId}.webp`);
    const result = await Hero.findByIdAndUpdate(
      heroId,
      { ...requestWithId, imageUrl: cover },
      {
        new: true,
      }
    );
    // const result = await heroes.updateHero(heroId, req.body);
    if (!result) {
      throw HttpError(404, "Hero not found");
    }
    res.status(201).json(result);
  }
};

module.exports = updateHero;
