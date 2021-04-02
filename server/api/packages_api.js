const axios = require("axios");

const { returnMETRCErr } = require("../../helpers/index");

const { encodeAuthKey } = require("../../helpers/encodeAuthKey");

const { METRC_URL } = require("../../constants");
const getAPICall = require("../../helpers/getAPICall");

let updatedParams;

exports.getActivePackages = async (req, res, next) => {
  try {
    const { lastModifiedStart, lastModifiedEnd } = req.query;

    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);
    if (lastModifiedEnd !== "" && lastModifiedStart !== "") {
      updatedParams = {
        ...params,
        lastModifiedStart,
        lastModifiedEnd,
      };
    } else {
      updatedParams = {
        ...params,
      };
    }
    const url = `${METRC_URL}/packages/v1/active`;
    const activePackages = await axios
      .get(url, {
        params: updatedParams,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (!Array.isArray(activePackages)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Active Packages",
      activePackages,
    });
  } catch (err) {
    return next(err);
  }
};

exports.getPackageById = async (req, res, next) => {
  const { id } = req.params;
  const url = `${METRC_URL}/packages/v1/${id}`;
  return getAPICall(req, res, next, url);
};

exports.getPackageByLabel = async (req, res, next) => {
  const { label } = req.params;
  const url = `${METRC_URL}/packages/v1/${label}`;
  return getAPICall(req, res, next, url);
};

exports.createPackages = async (req, res, next) => {
  try {
    // Add plant group to METRC so data can be accurately logged
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const packageToCreate = req.body;

    const packageUrl = `${METRC_URL}/packages/v1/create`;

    const METRCGroupAdded = await axios
      .post(packageUrl, packageToCreate, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCGroupAdded === "") {
      return res.status(200).send({
        message: "Created Package",
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.createPlantGroupPackage = async (req, res, next) => {
  try {
    // Add plant group to METRC so data can be accurately logged
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const plantGroup = req.body;

    const createPlantGroupUrl = `${METRC_URL}/packages/v1/create/plantings`;

    const METRCGroupAdded = await axios
      .post(createPlantGroupUrl, plantGroup, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCGroupAdded === "") {
      return res.status(200).send({
        message: "Created Plant Batch",
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.changeItem = async (req, res, next) => {
  try {
    // Add plant group to METRC so data can be accurately logged
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const plantGroup = req.body;

    const url = `${METRC_URL}/packages/v1/change/item`;

    const METRCGroupAdded = await axios
      .post(url, plantGroup, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCGroupAdded === "") {
      return res.status(200).send({
        message: "Created Plant Batch",
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.adjustPackage = async (req, res, next) => {
  try {
    // Add plant group to METRC so data can be accurately logged
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const adjustment = req.body;

    const url = `${METRC_URL}/packages/v1/adjust`;

    const adjustItemRes = await axios
      .post(url, adjustment, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (adjustItemRes === "") {
      return res.status(200).send({
        message: "Adjusted Item",
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.finishPackage = async (req, res, next) => {
  try {
    // Add plant group to METRC so data can be accurately logged
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const packageToFinish = req.body;

    const url = `${METRC_URL}/packages/v1/finish`;

    const adjustItemRes = await axios
      .post(url, packageToFinish, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (adjustItemRes === "") {
      return res.status(200).send({
        message: "Adjusted Item",
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.unfinishPackage = async (req, res, next) => {
  try {
    // Add plant group to METRC so data can be accurately logged
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const packageToUnfinish = req.body;

    const url = `${METRC_URL}/packages/v1/unfinish`;

    const adjustItemRes = await axios
      .post(url, packageToUnfinish, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (adjustItemRes === "") {
      return res.status(200).send({
        message: "Unfinished Package",
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.getAdjustmentReasons = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);
    const url = `${METRC_URL}/packages/v1/adjust/reasons`;
    const adjustmentReasons = await axios
      .get(url, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (!Array.isArray(adjustmentReasons)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Active Packages",
      adjustmentReasons,
    });
  } catch (err) {
    return next(err);
  }
};
