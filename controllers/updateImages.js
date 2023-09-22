const { HttpError } = require("../helpers");
// const heroes = require("../models/heroes");
const Joi = require("joi");
const Hero = require("../models/hero");

const addSchema = Joi.object({
  images: Joi.array().items(Joi.string().uri().required()),
});

const updateImages = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  } else {
    const { heroId } = req.params;
    const result = await Hero.findByIdAndUpdate(heroId, req.body, {
      new: true,
    });
    // const result = await heroes.updateHero(heroId, req.body);
    if (!result) {
      throw HttpError(404, "Hero not found");
    }
    res.status(201).json(result);
  }
};

module.exports = updateImages;
