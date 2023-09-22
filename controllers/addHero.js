const { HttpError } = require("../helpers");
// const heroes = require("../models/heroes");
const Joi = require("joi");
const Hero = require("../models/hero");

const addSchema = Joi.object({
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  origin_description: Joi.string().required(),
  superpowers: Joi.string().required(),
  catch_phrase: Joi.string().required(),
});

const addHero = async (req, res) => {
  // try {
  const { error } = addSchema.validate(req.body);
  // const result = await heroes.addHero(req.body);

  if (error) {
    throw HttpError(400, error.message);
  } else {
    const result = await Hero.create(req.body);
    res.status(201).json(result);
    // const result = await heroes.addHero(req.body);
    // res.status(201).json(result);
  }
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = addHero;
