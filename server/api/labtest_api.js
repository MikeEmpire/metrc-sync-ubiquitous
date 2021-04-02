const { METRC_URL } = require("../../constants");
const postAPICall = require("../../helpers/postAPICall");

exports.recordLabTest = async (req, res, next) => {
  const url = `${METRC_URL(req)}/labtests/v1/record`;
  return postAPICall(req, res, next, url);
};
