const multer = require("multer");
const path = require("path");
// const fs = require("fs/promises");
// const { v4 } = require("uuid");

const tempDir = path.join(__dirname, "../", "temp");
const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

// const heroes = [];

module.exports = upload;
// !!!!!!
// upload.single("cover");
// upload.array("cover", 8)
// !!!!!!!!!
// const heroesDir = path.join(__dirname, "public", "heroes");

// router.post("/image", upload.single("cover"), async (req, res) => {
//   // console.log(req.body);
//   // console.log(`./temp/${req.file.filename}`);
//   const { path: tempDir, originalname } = req.file;
//   const resultUpload = path.join(heroesDir, originalname);
//   await fs.rename(tempDir, resultUpload);
//   const cover = path.join( "heroes", originalname);
//   const newHero = {
//     id: v4(),
//     ...req.body,
//     cover,
//   };
//   heroes.push(newHero);
//   req.statusCode(201).json(newHero);
// });
