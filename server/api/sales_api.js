const { METRC_URL } = require("../../constants");
const postAPICall = require("../../helpers/postAPICall");

exports.saveReceipt = async (req, res, next) => {
  const url = `${METRC_URL(req)}/sales/v1/receipts`;
  return postAPICall(req, res, next, url);
};
