const { METRC_URL } = require("../../constants");
const postAPICall = require("../../helpers/postAPICall");
const getAPICall = require("../../helpers/getAPICall");

exports.createItem = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/items/v1/create`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getItems = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/items/v1/active`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/items/v1/update`;
    return postAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};

exports.getItemCategories = async (req, res, next) => {
  try {
    const url = `${METRC_URL(req)}/items/v1/categories`;
    return getAPICall(req, res, next, url);
  } catch (err) {
    return next(err);
  }
};
