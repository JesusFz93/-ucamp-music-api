const { response, request } = require("express");

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

const getMusic_CT = (req = request, res = response) => {
  const resp = new GenericResponse();
  try {
    resp.msg = "Lista de canciones obtenida";
    resp.data = [...db];
    return res.json(resp);
  } catch (error) {
    resp.ok = false;
    resp.msg = CustomMessages.error_500;
    return res.status(500).json(resp);
  }
};

const getMusicPorLetra_CT = (req = request, res = response) => {
  const resp = new GenericResponse();
  try {
    const { id } = req.params;
    resp.msg = "Cancion obtenida";
    const cancion = db.find((c) => c.id === parseInt(id));
    if (!cancion) {
      resp.ok = false;
      resp.msg = `No se encontro la cancion con el nombre ${id} `;
      return res.status(404).json(resp);
    }
    resp.data = [cancion];
    return res.json(resp);
  } catch (error) {
    resp.ok = false;
    resp.msg = CustomMessages.error_500;
    return res.status(500).json(resp);
  }
};

module.exports = {
  getMusic_CT,
  getMusicPorLetra_CT,
};
