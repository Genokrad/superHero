const heroes = require("../models/heroes");

const listHeroes = async (req, res) => {
  // try {
  const page = parseInt(req.query.page) || 1; // Номер страницы (по умолчанию 1)
  const pageSize = parseInt(req.query.pageSize) || 5; // Количество элементов на странице (по умолчанию 10)

  const heroesData = await heroes.listHeroes();

  // Рассчитайте индексы начала и конца для элементов на текущей странице
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Выберите только элементы на текущей странице
  const heroesOnPage = heroesData.slice(startIndex, endIndex);

  res.json({
    page,
    pageSize,
    totalItems: heroesData.length,
    heroes: heroesOnPage,
  });

  // } catch (error) {
  //   next(error);
  //   // res.status(500).json({
  //   //   message: "Server error",
  //   // });
  // }
};

module.exports = listHeroes;
