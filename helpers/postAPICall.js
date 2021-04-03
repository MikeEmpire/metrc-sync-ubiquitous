const axios = require("axios");

const { returnMETRCErr } = require(".");
const { encodeAuthKey } = require("./encodeAuthKey");

const postAPICall = async (req, res, next, url, message, method) => {
  try {
    const { state } = req.query;
    // Add plant group to METRC so data can be accurately logged
    const { authorization } = req.headers;

    let methodToUse = method;

    if (!methodToUse) {
      method = "post";
    }

    const authContent = authorization.split(" ");
    let responseMessage = "Success!";
    const [licenseNumber, apiKey] = authContent;
    if (message) {
      responseMessage = message;
    }

    const { headers, params } = await encodeAuthKey(
      licenseNumber,
      apiKey,
      state
    );

    const data = req.body;

    const postRes = await axios[methodToUse](url, data, {
      params,
      headers,
    })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

    if (typeof postRes === "object") {
      const success = {
        responseMessage,
        postRes,
      };
      if (postRes.Warnings) {
        const { Warnings } = postRes;
        if (Warnings.length > 0) {
          success.warnings = postRes.warnings;
        }
      }
      if (postRes.Ids) {
        const { Ids } = postRes;
        if (Ids.length > 0) {
          success.Ids = postRes.Ids;
        }
      }
      return res.status(200).send(success);
    }

    if (postRes === "") {
      return res.status(200).send({
        responseMessage,
      });
    }
    return null;
  } catch (err) {
    return next(err);
  }
};

module.exports = postAPICall;
