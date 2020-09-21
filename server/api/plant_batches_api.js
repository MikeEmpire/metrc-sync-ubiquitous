const axios = require("axios");

const { returnMETRCErr } = require("../../helpers/index");
const { encodeAuthKey } = require("../../helpers/encodeAuthKey");
const { METRC_URL } = require("../../constants");
const getParams = require('../../helpers/getParams')

let updatedParams;

exports.getActiveBatches = async (req, res, next) => {
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
    const url = `${METRC_URL}/plantbatches/v1/active`;
    const activeBatches = await axios
      .get(url, {
        params: updatedParams,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (!Array.isArray(activeBatches)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Active Plant Batches",
      activeBatches
    });
  } catch (err) {
    return next(err);
  }
};

exports.getBatchByLabel = async (req, res, next) => {
  try {

    const { authorization } = req.headers;

    const { id } = req.params

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);
    const url = `${METRC_URL}/plantbatches/v1/${id}`;
    const queriedBatch = await axios
      .get(url, {
        params,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (typeof queriedBatch !== 'object') {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Queried Batch!",
      queriedBatch
    });
  } catch (err) {
    return next(err);
  }
};

exports.getInactiveBatches = async (req, res, next) => {
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
    const url = `${METRC_URL}/plantbatches/v1/inactive`;
    const inactiveBatches = await axios
      .get(url, {
        params: updatedParams,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (!Array.isArray(inactiveBatches)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved inactive Plant Batches",
      inactiveBatches
    });
  } catch (err) {
    return next(err);
  }
};

exports.addPlantGroup = async (req, res, next) => {
  try {
    const { headers, params } = await getParams(req.headers);

    const plantGroup = req.body;

    const addPlantGroupUrl = `${METRC_URL}/plantbatches/v1/createplantings`;

    const METRCGroupAdded = await axios
      .post(addPlantGroupUrl, plantGroup, {
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

exports.movePlantBatch = async (req, res, next) => {
  try {
    // Add plant group to METRC so data can be accurately logged
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const plantGroup = req.body;

    const moveBatchUrl = `${METRC_URL}/plantbatches/v1/moveplantbatches`;

    const METRCGroupMoved = await axios
      .post(moveBatchUrl, plantGroup, {
        params,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (METRCGroupMoved === "") {
      return res.status(200).send({
        message: "METRC batch has been destroyed",
        METRCGroupMoved
      });
    }
    return null
  } catch (err) {
    return next(err);
  }
};

exports.changeGrowthPhase = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const plantGroup = req.body;

    const moveBatchUrl = `${METRC_URL}/plantbatches/v1/changegrowthphase`;

    const METRCGroupMoved = await axios
      .post(moveBatchUrl, plantGroup, {
        params,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (METRCGroupMoved === "") {
      return res.status(200).send({
        message: "METRC batch has moved phases",
        METRCGroupMoved
      });
    }
    return null
  } catch (err) {
    return next(err);
  }
};

exports.deletePlantBatch = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const batch = req.body;

    const destroyBatchUrl = `${METRC_URL}/plantbatches/v1/destroy`;

    const METRCBatchDestroyed = await axios
      .post(destroyBatchUrl, batch, {
        params,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (METRCBatchDestroyed === "") {
      return res.status(200).send({
        message: "METRC batch has been destroyed",
        METRCBatchDestroyed
      });
    }

    return null
    
  } catch (err) {
    return next(err);
  }
};

exports.createPackage = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const immaturePlantPackage = req.body;

    const createPackageUrl = `${METRC_URL}/plantbatches/v1/createpackages`;

    const METRCPackage = await axios
      .post(createPackageUrl, immaturePlantPackage, {
        params,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (METRCPackage !== "") {
      return null;
    }
    return res.status(200).send({
      message: "Successfully created the packages!",
      METRCPackage
    });
  } catch (err) {
    return next(err);
  }
};
