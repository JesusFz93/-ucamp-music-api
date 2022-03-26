var axios = require("axios").default;

// var options = {
//   method: "GET",
//   url: "https://shazam.p.rapidapi.com/search",
//   params: { term: "kiss the rain", locale: "en-US", offset: "0", limit: "5" },
//   headers: {
//     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//     "X-RapidAPI-Key": "e7cf1537a2msh499ceaeef5f4b6dp145629jsn8cd74e2f61c8",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

const { response, request } = require("express");

const { GenericResponse, CustomMessages } = require("../helpers");

const getMusicShazam_CT = async (req = request, res = response) => {
  const resp = new GenericResponse();
  try {
    var options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/search",
      params: {
        term: "kiss the rain",
        locale: "en-US",
        offset: "0",
        limit: "5",
      },
      headers: {
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
        "X-RapidAPI-Key": "e7cf1537a2msh499ceaeef5f4b6dp145629jsn8cd74e2f61c8",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    resp.msg = "Lista de canciones obtenidaShazam";
    resp.data = [];
    return res.json(resp);
  } catch (error) {
    console.log(error);
    resp.ok = false;
    resp.msg = CustomMessages.error_500;
    return res.status(500).json(resp);
  }
};

const getMusicShazamID_CT = (req = request, res = response) => {
  const resp = new GenericResponse();
  try {
    const { id } = req.params;
    resp.msg = "Cancion obtenidaShazam" + id;
    resp.data = [];
    return res.json(resp);
  } catch (error) {
    console.log(error);
    resp.ok = false;
    resp.msg = CustomMessages.error_500;
    return res.status(500).json(resp);
  }
};

module.exports = {
  getMusicShazam_CT,
  getMusicShazamID_CT,
};
