const { default: Axios } = require("axios");
const { METRC_URL } = require("../../constants");
const { returnMETRCErr } = require("../../helpers");
const { encodeAuthKey } = require("../../helpers/encodeAuthKey");
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

exports.deleteReceipt = async (req, res) => {
  const { id } = req.params;
  const { state } = req.query;

  const { authorization } = req.headers;

  const authContent = authorization.split(" ");
  const [licenseNumber, apiKey] = authContent;

  const { headers, params } = await encodeAuthKey(licenseNumber, apiKey, state);
  const url = `${METRC_URL(req)}/sales/v1/receipts/${id}`;

  const deleteRes = await Axios.delete(url, {
    headers,
    params,
  })
    .then((response) => response.data)
    .catch((err) => returnMETRCErr(err, res));

  if (deleteRes === "") {
    return res.status(200).send({
      message: "Success",
      deleteRes,
    });
  }
};
