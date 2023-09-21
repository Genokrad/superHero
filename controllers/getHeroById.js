const { HttpError } = require("../helpers");
const heroes = require("../models/heroes");

const getHeroById = async (req, res) => {
  // try {
  const { heroId } = req.params;
  const result = await heroes.getHeroById(heroId);
  if (result) {
    res.json(result);
  } else {
    throw HttpError(404, "Hero not found");
    // const error = new Error("Hero not found");
    // error.status = 404;
    // throw error;
    // res.status(404).json({ message: "Hero not found" });
  }
  // } catch (error) {
  //   next(error);
  //   // const { status = 500, message = "Server error" } = error;
  //   // res.status(status).json({
  //   //   message,
  //   // });
  // }
};

module.exports = getHeroById;
