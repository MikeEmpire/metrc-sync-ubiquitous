const axios = require("axios");
const { encodeAuthKey } = require("../../helpers/encodeAuthKey");
const { returnMETRCErr } = require("../../helpers/index");
const getParams = require("../../helpers/getParams");
const { METRC_URL } = require("../../constants");

exports.addStrains = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const authContent = authorization.split(" ");
    const [licenseNumber, apiKey] = authContent;
    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);
    const strains = req.body;

    const url = `${METRC_URL(req)}/strains/v1/create`;

    const METRCStrains = await axios
      .post(url, strains, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch(
        (err) =>
          res
            .status(err.response.status)
            .send({ message: err.response.data.Message }) // Tyler - data is not an array here / Message is capitalized
      );

    if (METRCStrains === undefined) {
      return res.status(400).send({
        message: "Unable to sync strains",
      });
    }
    return res.status(200).send({
      message: "Added Strains to METRC",
      METRCStrains,
      strains,
    });
  } catch (err) {
    return next(err);
  }
};

exports.getMETRCStrains = async (req, res, next) => {
  try {
    /*
     * Objective: Make sure user has valid credentials
     */

    const { authorization } = req.headers;
    const authContent = authorization.split(" ");
    const [licenseNumber, apiKey] = authContent;
    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const getMETRCStrains = `${METRC_URL(req)}/strains/v1/active`;

    const METRCStrains = await axios
      .get(getMETRCStrains, {
        params,
        headers,
      })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((err) =>
        res
          .status(err.response.status)
          .send({ message: err.response.data[0].message })
      );

    return res.status(200).send({
      message: "Valid credentials!",
      strains: METRCStrains,
    });
  } catch (err) {
    return next(err);
  }
};

exports.updateMETRCStrains = async (req, res, next) => {
  try {
    const updatedStrains = req.body;

    const { headers, params } = await getParams(req.headers);

    const url = `${METRC_URL(req)}/strains/v1/update`;

    const strains = await axios
      .post(url, updatedStrains, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (strains !== "") {
      return null;
    }
    return res.status(200).send({
      message: `Success!`,
      strains,
    });
  } catch (err) {
    return next(err);
  }
};
