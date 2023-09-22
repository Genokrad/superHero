const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");
// const { ctrlWrapper, isValidId } = require("../../helpers");
// const { ctrlWrapper, validateBody } = require("../../helpers");
// const { addSchema } = require("../../schemas/hero");
//
router.get("/", ctrlWrapper(ctrl.listHeroes));

router.get("/:heroId", ctrlWrapper(ctrl.getHeroById));

router.post("/", ctrlWrapper(ctrl.addHero));

router.put("/:heroId", ctrlWrapper(ctrl.updateHero));

router.put("/:heroId/images", ctrlWrapper(ctrl.updateImages));

router.delete("/:heroId", ctrlWrapper(ctrl.deleteHero));

module.exports = router;
