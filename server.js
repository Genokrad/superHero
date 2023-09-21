const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://yaroslav:C5mglvlYkS90O0Qa@cluster0.7mpsuua.mongodb.net/hero_reader";

const PORT = 3006;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`сервер работает! : http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
