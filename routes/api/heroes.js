const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");
const { ctrlWrapper, upload } = require("../../helpers");
// const { ctrlWrapper, isValidId } = require("../../helpers");
// const { ctrlWrapper, validateBody } = require("../../helpers");
// const { addSchema } = require("../../schemas/hero");
//

// !!!!! //////////////////////////////////////////////////

// !!!!! //////////////////////////////////////////////////

router.get("/", ctrlWrapper(ctrl.listHeroes));

router.get("/:heroId", ctrlWrapper(ctrl.getHeroById));

router.post("/", upload.single("image"), ctrlWrapper(ctrl.addHero));

router.put("/:heroId", upload.single("image"), ctrlWrapper(ctrl.updateHero));

// router.patch("/:heroId/images", ctrlWrapper(ctrl.updateImages));

router.delete("/:heroId", ctrlWrapper(ctrl.deleteHero));

module.exports = router;
