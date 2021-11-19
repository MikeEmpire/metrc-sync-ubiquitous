const { default: axios } = require("axios");
const { METRC_URL } = require("../../constants");
const getAPICall = require("../../helpers/getAPICall");
const getHeadersAndParams = require("../../helpers/getHeadersAndParams");
const postAPICall = require("../../helpers/postAPICall");

exports.getVegetativePlants = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/vegetative`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getFloweringPlants = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/flowering`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getInactivePlants = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/inactive`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getOnHoldPlants = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/harvests/v1/onhold`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.createClones = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/create/plantings`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.destroyPlants = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/destroyplants`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.changeGrowthPhase = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/changegrowthphases`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.recordHarvest = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/harvestplants`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.recordManicure = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/manicureplants`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.movePlants = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/moveplants`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getWasteMethods = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/waste/methods`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getWasteReasons = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plants/v1/waste/reasons`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getPlantByLabel = async (req, res, next) => {
  try {
    const { label } = req.params;
    const url = `${METRC_URL(req)}/plants/v1/${label}`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getPlantsByLabels = async (req, res, next) => {
  try {
    const ids = req.body;
    const { headers, params } = await getHeadersAndParams(req);

    const apiCalls = [];
    for (let i = 0; i < ids.length; i++) {
      const url = `${METRC_URL(req)}/plants/v1/${ids[i]}`;
      apiCalls.push(axios.get(url, { params, headers }));
    }
    return axios.all(apiCalls).then(async (...labelRes) => {
      const responses = labelRes.flat();
      const data = [];
      for (let i = 0; i < responses.length; i++) {
        const { status } = responses[i];
        if (status && status === 200) {
          data.push(responses[i].data);
        }
      }
      return res.status(200).send({ data });
    });
  } catch (err) {
    return next(err);
  }
};
