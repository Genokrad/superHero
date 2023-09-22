const { isValidObjectId } = require("mongoose");
const HttpError = require("./httpError"); // Изменено на импорт объекта HttpError

const isValidId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not a valid id`)); // Используйте new для создания экземпляра HttpError
    return; // Добавьте return, чтобы прервать выполнение функции после вызова next
  }
  next();
};

module.exports = isValidId;
