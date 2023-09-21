const fs = require("fs").promises;
const path = require("path");

const heroesPath = path.join(__dirname, "heroes.json");

const listHeroes = async () => {
  const data = await fs.readFile(heroesPath, "utf8");
  return JSON.parse(data);
};

const getHeroById = async (heroId) => {
  const heroes = await listHeroes();
  const result = heroes.find((item) => item.id === heroId);
  return result || null;
};

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
