const { HttpError } = require("../helpers");
const Hero = require("../models/hero");
// const heroes = require("../models/heroes");

const getHeroById = async (req, res) => {
  const { heroId } = req.params;
  console.log(heroId);
  // const result = await heroes.getHeroById(heroId);
  const result = await Hero.findById(heroId);
  console.log(result);
  if (!result) {
    throw HttpError(404, "Hero not found");
  }
  res.json(result);
};

module.exports = getHeroById;
