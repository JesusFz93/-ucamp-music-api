const { Router } = require("express");

const {
  getMusic_CT,
  getMusicPorLetra_CT,
} = require("../controllers/music.controller");

const router = Router();

router.get("/", getMusic_CT);
router.get("/:id", getMusicPorLetra_CT);

module.exports = router;
