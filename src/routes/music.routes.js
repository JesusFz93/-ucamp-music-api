const { Router } = require("express");

const {
  getMusic_CT,
  getMusicPorLetra_CT,
} = require("../controllers/music.controller");

const router = Router();

router.get("/", getMusic_CT);
router.get("/:id", getMusicPorLetra_CT);

module.exports = router;

// {
//   "_id": {
//       "$oid": "623f4b987e1032ef0e6af073"
//   },
//   "nombre": "Ed Sheeran",
//   "foto": "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/9/6/4/0/9640a9aa5c9fd17dd1a3015756725789.jpg",
//   "album": {
//       "id_album": "1",
//       "nombre_album": "Divide",
//       "portada": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Bhnu4NBcXWiO1H2mHqN6gXaPMAa4WkWKvg&usqp=CAU"
//   },
//   "genero_Musical": "Pop"
// }
