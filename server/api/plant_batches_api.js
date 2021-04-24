const { METRC_URL } = require("../../constants");
const getAPICall = require("../../helpers/getAPICall");
const postAPICall = require("../../helpers/postAPICall");

exports.getActiveBatches = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plantbatches/v1/active`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getBatchByLabel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const url = `${METRC_URL(req)}/plantbatches/v1/${id}`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getInactiveBatches = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plantbatches/v1/inactive`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.addPlantGroup = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plantbatches/v1/createplantings`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.movePlantBatch = async (req, res, next) => {
  try {
    // Add plant group to METRC so data can be accurately logged
    const url = `${METRC_URL(req)}/plantbatches/v1/moveplantbatches`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.changeGrowthPhase = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plantbatches/v1/changegrowthphase`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.deletePlantBatch = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plantbatches/v1/destroy`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.createPackage = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/plantbatches/v1/createpackages`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};
