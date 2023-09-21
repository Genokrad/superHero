const { HttpError } = require("../helpers");
const heroes = require("../models/heroes");

const deleteHero = async (req, res) => {
  console.log(req.params);
  // try {
  const { heroId } = req.params;
  const result = await heroes.deleteHeroByID(heroId);
  if (!result) {
    throw HttpError(404, "Hero not found");
  }
  res.json(result);
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = deleteHero;
