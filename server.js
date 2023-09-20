const app = require("./app");

const PORT = 3006;

app.listen(PORT, () => {
  console.log(`сервер работает! : http://localhost:${PORT}`);
});
