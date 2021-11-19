const axios = require("axios");

const { returnMETRCErr } = require(".");
const getHeadersAndParams = require("./getHeadersAndParams");

const postAPICall = async (req, res, next, url, message, method, noReqBody) => {
  try {
    let responseMessage = "Success!";
    if (message) {
      responseMessage = message;
    }

    let methodToUse = await method;

    if (!methodToUse) {
      methodToUse = "post";
    }

    const { headers, params } = await getHeadersAndParams(req);

    const data = await req.body;
    let dataRes = {};
    if (noReqBody) {
      dataRes = await axios[methodToUse](url, { params, headers })
        .then((asyncRes) => asyncRes.data)
        .catch((err) => returnMETRCErr(err, res, req));
    } else {
      dataRes = await axios[methodToUse](url, data, {
        params,
        headers,
      })
        .then((asyncRes) => asyncRes.data)
        .catch((err) => returnMETRCErr(err, res, req));
    }

    const { error } = res.locals;

    if (typeof dataRes === "object") {
      if (error) {
        return null;
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
