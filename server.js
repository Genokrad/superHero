const mongoose = require("mongoose");

const app = require("./app");

// const { DB_HOST } = require("./config");
const { DB_HOST } = process.env;

// const DB_HOST =
//   "mongodb+srv://yaroslav:C5mglvlYkS90O0Qa@cluster0.7mpsuua.mongodb.net/hero_reader";

const PORT = 3006;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .then(() => console.log("Server running. Use our API on port: 3006"))
  .then(() => console.log("connected"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
// .then(() => {
//   app.listen(PORT, () => {
//     console.log(`сервер работает! : http://localhost:${PORT}`);
//   });
// })
// .catch((error) => {
//   console.log(error.message);
//   process.exit(1);
// });

const some = "4";
some = 3;
