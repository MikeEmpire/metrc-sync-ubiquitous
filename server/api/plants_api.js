const axios = require("axios");

const { returnMETRCErr } = require("../../helpers/index");
const { encodeAuthKey } = require("../../helpers/encodeAuthKey");
const { METRC_URL } = require("../../constants");

let updatedParams;

exports.getVegetativePlants = async (req, res, next) => {
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
    const url = `${METRC_URL(req)}/plants/v1/vegetative`;
    const vegetativePlants = await axios
      .get(url, {
        params: updatedParams,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (!Array.isArray(vegetativePlants)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Vegetative Plants",
      vegetativePlants,
    });
  } catch (err) {
    return next(err);
  }
};

exports.getFloweringPlants = async (req, res, next) => {
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
    const url = `${METRC_URL(req)}/plants/v1/flowering`;
    const floweringPlants = await axios
      .get(url, {
        params: updatedParams,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (!Array.isArray(floweringPlants)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Flowering Plants",
      floweringPlants,
    });
  } catch (err) {
    return next(err);
  }
};

exports.getInactivePlants = async (req, res, next) => {
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
    const url = `${METRC_URL(req)}/plants/v1/inactive`;
    const inactivePlants = await axios
      .get(url, {
        params: updatedParams,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));
    if (!Array.isArray(inactivePlants)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Flowering Plants",
      inactivePlants,
    });
  } catch (err) {
    return next(err);
  }
};

exports.getOnHoldPlants = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL(req)}/harvests/v1/onhold`;
    const onHoldPlants = await axios
      .get(url, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (Array.isArray(onHoldPlants)) {
      return res.status(200).send({
        message: "Retrieved onhold plants",
        onHoldPlants,
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.createClones = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const planting = req.body; // should be an array of objects
    const url = `${METRC_URL(req)}/plants/v1/create/plantings`;
    const METRCResponse = await axios
      .post(url, planting, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCResponse === "") {
      return res.status(200).send({
        message: "Created planting",
        planting,
      });
    }

    return null;
  } catch (err) {
    return next(err);
  }
};

exports.destroyPlants = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL(req)}/plants/v1/destroyplants`;
    const plants = req.body; // should be an array of objects

    const METRCResponse = await axios
      .post(url, plants, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCResponse === "") {
      return res.status(200).send({
        message: "Deleted plants",
        plants,
      });
    }
    return null;
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

    const url = `${METRC_URL(req)}/plants/v1/changegrowthphases`;
    const plants = req.body; // should be an array of objects

    const METRCResponse = await axios
      .post(url, plants, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCResponse === "") {
      return res.status(200).send({
        message: "Changed growth phases of plants",
        plants,
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.recordHarvest = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL(req)}/plants/v1/harvestplants`;
    const harvestInfo = req.body; // should be an array of objects

    const recordHarvestResponse = await axios
      .post(url, harvestInfo, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (recordHarvestResponse === "") {
      return res.status(200).send({
        message: "Successfully sent data to METRC!",
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.recordManicure = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL(req)}/plants/v1/manicureplants`;
    const manicureInfo = req.body; // should be an array of objects

    const recordManicureResponse = await axios
      .post(url, manicureInfo, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (recordManicureResponse === "") {
      return res.status(200).send({
        message: "Successfully sent data to METRC!",
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.movePlants = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const planting = req.body; // should be an array of objects
    const url = `${METRC_URL(req)}/plants/v1/moveplants`;
    const METRCResponse = await axios
      .post(url, planting, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCResponse === "") {
      return res.status(200).send({
        message: "Moved Plants!",
        planting,
      });
    }

    return null;
  } catch (err) {
    return next(err);
  }
};

exports.getWasteMethods = async (req, res, next) => {
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
    const url = `${METRC_URL(req)}/plants/v1/waste/methods`;
    const methods = await axios
      .get(url, {
        params: updatedParams,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (!Array.isArray(methods)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Waste Methods",
      methods,
    });
  } catch (err) {
    return next(err);
  }
};

exports.getWasteReasons = async (req, res, next) => {
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
    const url = `${METRC_URL(req)}/plants/v1/waste/reasons`;
    const reasons = await axios
      .get(url, {
        params: updatedParams,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (!Array.isArray(reasons)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Waste Reasons",
      reasons,
    });
  } catch (err) {
    return next(err);
  }
};
