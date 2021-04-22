const { METRC_URL } = require("../../constants");
const getAPICall = require("../../helpers/getAPICall");
const postAPICall = require("../../helpers/postAPICall");

exports.addStrains = async (req, res, next) => {
  const url = `${METRC_URL(req)}/strains/v1/create`;
  return postAPICall(req, res, next, url);
};

exports.getMETRCStrains = async (req, res, next) => {
  const url = `${METRC_URL(req)}/strains/v1/active`;
  return getAPICall(req, res, next, url);
};

exports.updateMETRCStrains = async (req, res, next) => {
  const url = `${METRC_URL(req)}/strains/v1/update`;
  return postAPICall(req, res, next, url);
};
