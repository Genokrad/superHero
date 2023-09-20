const heroes = require("./heroes.json");

const listHeroes = async () => {
  return heroes;
};

const getHeroById = async (heroId) => {};

const removeHero = async (heroId) => {};

const addHero = async (body) => {};

const updateHero = async (heroId, body) => {};

module.exports = {
  listHeroes,
  getHeroById,
  removeHero,
  addHero,
  updateHero,
};
