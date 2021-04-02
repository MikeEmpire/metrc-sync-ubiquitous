const axios = require('axios');
const { returnMETRCErr } = require('.');
const { encodeAuthKey } = require("./encodeAuthKey");

const getAPICall = async (req, res, next, url) => {
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
    const data = await axios
      .get(url, {
        params: updatedParams,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (!Array.isArray(data)) {
      return null;
    }
    return res.status(200).send({
      message: "Retrieved Data",
      data,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = getAPICall;
