const { METRC_URL } = require("../../constants");
const getAPICall = require("../../helpers/getAPICall");

exports.getHarvestById = async (req, res, next) => {
  const { id } = req.params;
  const url = `${METRC_URL(req)}/harvests/v1/${id}`;
  return getAPICall(req, res, next, url);
};

exports.getActiveHarvests = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/harvests/v1/active`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getInactiveHarvests = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/harvests/v1/inactive`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getOnHoldHarvests = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/harvests/v1/onhold`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.createPackage = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/harvests/v1/create/packages`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getWasteTypes = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/harvests/v1/waste/types`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.recordWaste = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/harvests/v1/removewaste`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.finishHarvest = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/harvests/v1/finish`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.unfinishHarvest = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/harvests/v1/unfinish`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};
