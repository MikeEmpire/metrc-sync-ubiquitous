const axios = require("axios");

const { encodeAuthKey } = require("../../helpers/encodeAuthKey");
const { returnMETRCErr } = require("../../helpers/index");
const { METRC_URL } = require("../../constants");

let updatedParams;

exports.getHarvestById = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const { id } = req.params;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL}/harvests/v1/${id}`;
    const queriedHarvest = await axios
      .get(url, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (Object.keys(queriedHarvest).includes("FinishedDate")) {
      return res.status(200).send({
        message: "Retrieved Queried Harvest",
        queriedHarvest,
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.getActiveHarvests = async (req, res, next) => {
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

    const url = `${METRC_URL}/harvests/v1/active`;
    const activeHarvests = await axios
      .get(url, {
        params: updatedParams,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (Array.isArray(activeHarvests)) {
      return res.status(200).send({
        message: "Retrieved Active Harvests",
        activeHarvests,
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.getInactiveHarvests = async (req, res, next) => {
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
    const url = `${METRC_URL}/harvests/v1/inactive`;
    const inactiveHarvests = await axios
      .get(url, {
        params: updatedParams,
        headers,
      })
      .then((response) => response.data)
      .catch((err) =>
        res
          .status(err.response.status)
          .send({ message: err.response.data[0].message })
      );

    if (inactiveHarvests === undefined) {
      return res.status(400).send({
        message: "Unable to get inactive harvests",
      });
    }
    return res.status(200).send({
      message: "Retrieved inactive harvests",
      inactiveHarvests,
    });
  } catch (err) {
    return next(err);
  }
};

exports.getOnHoldHarvests = async (req, res, next) => {
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
    const url = `${METRC_URL}/harvests/v1/onhold`;
    const onHoldHarvests = await axios
      .get(url, {
        params: updatedParams,
        headers,
      })
      .then((response) => response.data)
      .catch((err) =>
        res
          .status(err.response.status)
          .send({ message: err.response.data[0].message })
      );

    if (onHoldHarvests === undefined) {
      return res.status(400).send({
        message: "Unable to get onhold harvests",
      });
    }
    return res.status(200).send({
      message: "Retrieved onhold harvests",
      onHoldHarvests,
    });
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

    const url = `${METRC_URL}/harvests/v1/create/packages`;
    const packageInfo = req.body; // should be an array of objects

    const METRCResponse = await axios
      .post(url, packageInfo, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCResponse === "") {
      return res.status(200).send({
        message: "Created Package",
        packageInfo,
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.getWasteTypes = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);
    const url = `${METRC_URL}/harvests/v1/waste/types`;
    const wasteTypes = await axios
      .get(url, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) =>
        res
          .status(err.response.status)
          .send({ message: err.response.data[0].message })
      );

    if (wasteTypes === undefined) {
      return res.status(400).send({
        message: "Unable to retrieve waste types",
      });
    }
    return res.status(200).send({
      message: "Retrieved waste types",
      wasteTypes,
    });
  } catch (err) {
    return next(err);
  }
};

exports.recordWaste = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL}/harvests/v1/removewaste`;
    const recordWaste = req.body; // should be an array of objects

    const wasteResponse = await axios
      .post(url, recordWaste, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (wasteResponse === "") {
      return res.status(200).send({
        message: "Successfully recorded waste",
      });
    }

    return null;
  } catch (err) {
    return next(err);
  }
};

exports.finishHarvest = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL}/harvests/v1/finish`;
    const harvestToFinish = req.body; // should be an array of objects

    const METRCResponse = await axios
      .post(url, harvestToFinish, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCResponse === "") {
      return res.status(200).send({
        message: "Finished Harvest",
        finishedHarvest: harvestToFinish,
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

exports.unfinishHarvest = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const authContent = authorization.split(" ");

    const [licenseNumber, apiKey] = authContent;

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL}/harvests/v1/unfinish`;
    const harvestToUnfinish = req.body; // should be an array of objects

    const METRCResponse = await axios
      .post(url, harvestToUnfinish, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (METRCResponse === "") {
      return res.status(200).send({
        message: "Unfinished Harvest!",
        unfinishedHarvest: harvestToUnfinish,
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};
