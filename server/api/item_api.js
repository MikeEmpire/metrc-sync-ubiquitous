const axios = require("axios");

const { returnMETRCErr } = require("../../helpers/index");
const { encodeAuthKey } = require("../../helpers/encodeAuthKey");
const { METRC_URL } = require("../../constants");

exports.createItem = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const item = req.body; // should be an array of objects
    const url = `${METRC_URL(req)}/items/v1/create`;
    const METRCResponse = await axios
      .post(url, item, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCResponse === "") {
      return res.status(200).send({
        message: "Created Item",
      });
    }

    return null;
  } catch (err) {
    return next(err);
  }
};

exports.getItems = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL(req)}/items/v1/active`;
    const METRCResponse = await axios
      .get(url, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (Array.isArray(METRCResponse)) {
      return res.status(200).send({
        message: "Retrieved Items",
        items: METRCResponse,
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const item = req.body; // expects an array of objects

    const url = `${METRC_URL(req)}/items/v1/update`;
    const METRCResponse = await axios
      .post(url, item, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCResponse === "") {
      return res.status(200).send({
        message: "Updated Item",
      });
    }
  } catch (err) {
    return next(err);
  }
};

exports.getItemCategories = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL(req)}/items/v1/categories`;
    const METRCResponse = await axios
      .get(url, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (Array.isArray(METRCResponse)) {
      return res.status(200).send({
        message: "Retrieved Items",
        itemCategories: METRCResponse,
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};
