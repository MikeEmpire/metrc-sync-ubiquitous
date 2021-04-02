const { METRC_URL } = require("../../constants");
const getAPICall = require("../../helpers/getAPICall");
const postAPICall = require("../../helpers/postAPICall");

exports.getIncomingTransfers = async (req, res, next) => {
  const url = `${METRC_URL(req)}/transfers/v1/incoming`;
  return getAPICall(req, res, next, url);
};

exports.getTransfersByTemplates = async (req, res, next) => {
  const { id } = req.params;
  const url = `${METRC_URL(req)}/transfers/v1/templates/${id}/deliveries`;
  return getAPICall(req, res, next, url);
};

exports.getOutgoingTransfers = async (req, res, next) => {
  const url = `${METRC_URL(req)}/transfers/v1/outgoing`;
  return getAPICall(req, res, next, url);
};

exports.getTransferTypes = async (req, res, next) => {
  const url = `${METRC_URL(req)}/transfers/v1/types`;
  return getAPICall(req, res, next, url);
};

exports.getTemplates = async (req, res, next) => {
  const url = `${METRC_URL(req)}/transfers/v1/templates`;
  return getAPICall(req, res, next, url);
};

exports.getTransportDetail = async (req, res, next) => {
  const { id } = req.params;
  const url = `${METRC_URL(req)}/transfers/v1/templates/${id}/transporters/details`;
  return getAPICall(req, res, next, url);
};

exports.getPackageByIdTransfer = async (req, res, next) => {
  const { id } = req.params;
  const url = `${METRC_URL(req)}/transfers/v1/templates/delivery/${id}/packages`;
  return getAPICall(req, res, next, url);
};

exports.createTransferTemplate = async (req, res, next) => {
  const url = `${METRC_URL(req)}/transfers/v1/templates`;
  return postAPICall(req, res, next, url);
};

exports.createExternalTransfer = async (req, res, next) => {
  const url = `${METRC_URL(req)}/transfers/v1/external/incoming`;
  const message = "Successfully created the External Transfer";
  return postAPICall(req, res, next, url, message);
};

exports.updateTransferTemplate = async (req, res, next) => {
  const url = `${METRC_URL(req)}/transfers/v1/templates`;
  const message = "Successfully updated the external transfer";
  const method = "put";
  return postAPICall(req, res, next, url, message, method);
};
