const { Router } = require("express");

const {
  getMusicShazam_CT,
  getMusicShazamID_CT,
} = require("../controllers/shazam.controller");

const router = Router();

router.get("/", getMusicShazam_CT);
router.get("/:id", getMusicShazamID_CT);

module.exports = router;
