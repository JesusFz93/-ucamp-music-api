const {
  getMusic_RP,
  getMusicID_RP,
} = require("../respositories/music.repository");

const getMusic_BL = async () => {
  return await getMusic_RP();
};

const getMusicID_BL = async (name) => {
  return await getMusicID_RP(name);
};

module.exports = {
  getMusic_BL,
  getMusicID_BL,
};
