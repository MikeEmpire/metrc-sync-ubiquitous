const { METRC_URL } = require("../../constants");
const getAPICall = require("../../helpers/getAPICall");
const postAPICall = require("../../helpers/postAPICall");

exports.getActivePackages = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/packages/v1/active`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getPackageById = async (req, res, next) => {
  const { id } = req.params;
  const url = `${METRC_URL(req)}/packages/v1/${id}`;
  return getAPICall(req, res, next, url);
};

exports.getPackageByLabel = async (req, res, next) => {
  const { label } = req.params;
  const url = `${METRC_URL(req)}/packages/v1/${label}`;
  return getAPICall(req, res, next, url);
};

exports.createPackages = async (req, res, next) => {
  try {
    const packageUrl = `${METRC_URL(req)}/packages/v1/create`;
    return postAPICall(req, res, next, packageUrl);
  } catch (err) {
    return next(err);
  }
};

exports.createPlantGroupPackage = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/packages/v1/create/plantings`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.changeItem = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/packages/v1/change/item`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.adjustPackage = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/packages/v1/adjust`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.finishPackage = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/packages/v1/finish`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.unfinishPackage = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/packages/v1/unfinish`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getAdjustmentReasons = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/packages/v1/adjust/reasons`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};
