const axios = require("axios");

const { returnMETRCErr } = require(".");
const { encodeAuthKey } = require("./encodeAuthKey");

const postAPICall = async (req, res, next, url, message, method, noReqBody) => {
  try {
    const { state } = await req.query;
    // Add plant group to METRC so data can be accurately logged
    const { authorization } = await req.headers;

    let methodToUse = await method;

    if (!methodToUse) {
      methodToUse = "post";
    }

    const authContent = await authorization.split(" ");
    let responseMessage = await "Success!";
    const [licenseNumber, apiKey] = await authContent;
    if (message) {
      responseMessage = message;
    }

    const { headers, params } = await encodeAuthKey(
      licenseNumber,
      apiKey,
      state
    );

    const data = await req.body;
    let dataRes = {};
    if (noReqBody) {
      response = await axios[methodToUse](url, { params, headers })
        .then((response) => response.data)
        .catch((err) => returnMETRCErr(err, res, req));
    } else {
      response = await axios[methodToUse](url, data, {
        params,
        headers,
      })
        .then((response) => response.data)
        .catch((err) => returnMETRCErr(err, res, req));
    }

    const { error } = res.locals

    if (typeof dataRes === "object") {
      if (error) {
        return null
      }
      const success = {
        responseMessage,
        dataRes,
      };
      if (dataRes.Warnings) {
        const { Warnings } = dataRes;
        if (Warnings.length > 0) {
          success.warnings = dataRes.warnings;
        }
      }
      if (dataRes.Ids) {
        const { Ids } = dataRes;
        if (Ids.length > 0) {
          success.Ids = dataRes.Ids;
        }
      }
      return res.status(200).send(success);
    }

    if (dataRes === "") {
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
