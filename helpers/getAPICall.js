const axios = require("axios");
const { returnMETRCErr } = require(".");
const getHeadersAndParams = require("./getHeadersAndParams");

const getAPICall = async (req, res, next, url) => {
  try {
    const { lastModifiedStart, lastModifiedEnd } = req.query;
    const { headers, params } = await getHeadersAndParams(req);
    let updatedParams = params;

    if (lastModifiedEnd && lastModifiedStart) {
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
      .catch((err) => returnMETRCErr(err, res, req));
    if (typeof data === "object") {
      return res.status(200).send({
        message: "Retrieved Data",
        data,
      });
    }
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
