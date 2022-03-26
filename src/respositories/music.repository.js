const { Artista } = require("../models");

const getMusic_RP = async () => {
  return await Artista.find();
};

const getMusicID_RP = async (name) => {
  return await Artista.findOne({ name });
};

module.exports = {
  getMusic_RP,
  getMusicID_RP,
};
