const { response, request } = require("express");
const { getMusic_BL, getMusicID_BL } = require("../business-logic/music.bl");

const { GenericResponse, CustomMessages } = require("../helpers");

const db = [
  {
    id: 1,
    nombre: "Cancion 1",
    artista: "Artista 1",
    estudio: "Music Group Inc.",
  },
  {
    id: 2,
    nombre: "Cancion 2",
    artista: "Artista 2",
    estudio: "Global Music Inc.",
  },
  {
    id: 3,
    nombre: "Cancion 3",
    artista: "Artista 3",
    estudio: "Music Group Inc.",
  },
];

const getMusic_CT = async (req = request, res = response) => {
  const resp = new GenericResponse();
  try {
    const musica = await getMusic_BL();
    resp.msg = "Lista de canciones obtenida";
    resp.data = musica;
    return res.json(resp);
  } catch (error) {
    resp.ok = false;
    resp.msg = CustomMessages.error_500;
    return res.status(500).json(resp);
  }
};

const getMusicPorLetra_CT = async (req = request, res = response) => {
  const resp = new GenericResponse();
  try {
    const { name } = req.params;
    resp.msg = "Cancion obtenida";
    const cancion = await getMusicID_BL(name);
    if (!cancion) {
      resp.ok = false;
      resp.msg = `No se encontro la cancion con el nombre ${name} `;
      return res.status(404).json(resp);
    }
    resp.data = cancion;
    return res.json(resp);
  } catch (error) {
    console.log(error);
    resp.ok = false;
    resp.msg = CustomMessages.error_500;
    return res.status(500).json(resp);
  }
};

module.exports = {
  getMusic_CT,
  getMusicPorLetra_CT,
};
