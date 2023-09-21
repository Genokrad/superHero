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

const removeHero = async (heroId) => {};

const addHero = async (req) => {
  const heroes = await listHeroes();
  // const { nickname, real_name, phone } = req;
  console.log(req);
  const newHero = {
    id: v4(),
    nickname: req.nickname,
    real_name: req.real_name,
    origin_description: req.origin_description,
    superpowers: req.superpowers,
    catch_phrase: req.catch_phrase,
  };

  heroes.push(newHero);

  await updateData(heroes);
  return newHero;
};

const updateHero = async (heroId, body) => {};

module.exports = {
  listHeroes,
  getHeroById,
  removeHero,
  addHero,
  updateHero,
};
