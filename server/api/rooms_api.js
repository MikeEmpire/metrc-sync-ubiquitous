const { METRC_URL } = require("../../constants");
const postAPICall = require("../../helpers/postAPICall");
const getAPICall = require("../../helpers/getAPICall");

exports.getRooms = async (req, res, next) => {
  const url = `${METRC_URL(req)}/locations/v1/active`;
  return getAPICall(req, res, next, url);
};

exports.getRoomTypes = async (req, res, next) => {
  const url = `${METRC_URL(req)}/locations/v1/types`;
  return getAPICall(req, res, next, url);
};

exports.addRooms = async (req, res, next) => {
  const url = `${METRC_URL(req)}/locations/v1/create`;
  return postAPICall(req, res, next, url);
};

exports.updateRoom = async (req, res, next) => {
  const url = `${METRC_URL(req)}/locations/v1/update`;
  return postAPICall(req, res, next, url);
};
