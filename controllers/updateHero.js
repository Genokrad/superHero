const { HttpError } = require("../helpers");
const heroes = require("../models/heroes");
const Joi = require("joi");

const addSchema = Joi.object({
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  origin_description: Joi.string().required(),
  superpowers: Joi.string().required(),
  catch_phrase: Joi.string().required(),
});

const updateHero = async (req, res) => {
  // console.log(req.params);
  // try {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  } else {
    const { heroId } = req.params;
    const result = await heroes.updateHero(heroId, req.body);
    if (!result) {
      throw HttpError(404, "Hero not found");
    }
    res.status(201).json(result);
  }
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = updateHero;
