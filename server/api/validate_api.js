const axios = require("axios");
const { encodeAuthKey } = require("../../helpers/encodeAuthKey");
const { METRC_URL } = require("../../constants");

exports.validateMETRCInfo = async (req, res, next) => {
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
        headers
      })
      .then(response => response.data);

    return res.status(200).send({
      message: "Valid credentials!",
      strains: METRCStrains
    });
  } catch (err) {
    return next(err);
  }
};
