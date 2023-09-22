const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");
const updateData = require("./updateData");

const heroesPath = path.join(__dirname, "heroes.json");

const listHeroes = async () => {
  const data = await fs.readFile(heroesPath, "utf8");
  return JSON.parse(data);
};

const getHeroById = async (heroId) => {
  const heroes = await listHeroes();
  const result = heroes.find((item) => item._id === heroId);
  return result || null;
};

const deleteHeroByID = async (heroId) => {
  console.log("deleteHeroByID", heroId);
  const heroes = await listHeroes();

  const index = heroes.findIndex((item) => item._id === heroId);

  if (index === -1) {
    return null;
  }

  const deletedHero = heroes.splice(index, 1);
  updateData(heroes);
  return deletedHero[0] || null;
};

const addHero = async (req) => {
  const heroes = await listHeroes();

  const newHero = {
    _id: v4(),
    ...req,
  };

  heroes.push(newHero);

  await updateData(heroes);
  return newHero;
};

const updateHero = async (heroId, body) => {
  const heroes = await listHeroes();

  const index = heroes.findIndex((item) => item._id === heroId);

  if (index === -1) {
    return null;
  }

  heroes[index] = { _id: heroId, ...body };
  await updateData(heroes);
  return heroes[index];
};

module.exports = {
  listHeroes,
  getHeroById,
  deleteHeroByID,
  addHero,
  updateHero,
};
