const { METRC_URL } = require("../../constants");
const getAPICall = require("../../helpers/getAPICall");
const postAPICall = require("../../helpers/postAPICall");

exports.getActiveReceipts = async (req, res, next) => {
  const url = `${METRC_URL(req)}/sales/v1/receipts/active`;
  return getAPICall(req, res, next, url);
};

exports.editReceipt = async (req, res, next) => {
  const url = `${METRC_URL(req)}/sales/v1/receipts`;
  const method = "put";
  return postAPICall(req, res, next, url, null, method);
};

exports.saveReceipt = async (req, res, next) => {
  const url = `${METRC_URL(req)}/sales/v1/receipts`;
  return postAPICall(req, res, next, url);
};

exports.deleteReceipt = async (req, res, next) => {
  const { id } = req.params;
  const url = `${METRC_URL(req)}/sales/v1/receipts/${id}`;
  const method = "delete";
  return postAPICall(req, res, next, url, null, method, true);
};
