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
  const result = heroes.find((item) => item.id === heroId);
  return result || null;
};

const deleteHeroByID = async (heroId) => {
  console.log("deleteHeroByID", heroId);
  const heroes = await listHeroes();

  const index = heroes.findIndex((item) => item.id === heroId);

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
    id: v4(),
    ...req,
    // nickname: req.nickname,
    // real_name: req.real_name,
    // origin_description: req.origin_description,
    // superpowers: req.superpowers,
    // catch_phrase: req.catch_phrase,
  };

  heroes.push(newHero);

  await updateData(heroes);
  return newHero;
};

const updateHero = async (heroId, body) => {
  const heroes = await listHeroes();

  const index = heroes.findIndex((item) => item.id === heroId);

  if (index === -1) {
    return null;
  }

  heroes[index] = { id: heroId, ...body };
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
