const filePath = require("./filePath");
const fs = require("fs/promises");

const updateData = async (data) => {
  const newHero = fs.writeFile(filePath, JSON.stringify(data, null, 2));
  return newHero;
};

module.exports = updateData;
