const axios = require("axios");

const { returnMETRCErr } = require("../../helpers/index");

const { encodeAuthKey } = require("../../helpers/encodeAuthKey");

const { METRC_URL } = require("../../constants");

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
        lastModifiedEnd
      };
    } else {
      updatedParams = {
        ...params
      };
    }
    const url = `${METRC_URL}/packages/v1/active`;
    const activePackages = await axios
      .get(url, {
        params: updatedParams,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (!Array.isArray(activePackages)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Active Packages",
      activePackages
    });
  } catch (err) {
    return next(err);
  }
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
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (METRCGroupAdded === "") {
      return res.status(200).send({
        message: "Created Package"
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
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (METRCGroupAdded === "") {
      return res.status(200).send({
        message: "Created Plant Batch"
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};
