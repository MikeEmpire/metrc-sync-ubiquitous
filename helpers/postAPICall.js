const axios = require("axios");

const { returnMETRCErr } = require(".");
const { encodeAuthKey } = require("./encodeAuthKey");

const postAPICall = async (req, res, next, url, message, method) => {
  try {
    // Add plant group to METRC so data can be accurately logged
    const { authorization } = req.headers;

    let methodToUse = method;

    if (!methodToUse) {
      method = "post";
    }

    const authContent = authorization.split(" ");
    let responseMessage = "Success!";
    const [licenseNumber, apiKey] = authContent;
    if (!message) {
      responseMessage = message;
    }

    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const data = req.body;

    const postRes = await axios
      .post(url, data, {
        params,
        headers,
      })
      .then((response) => response.data)
      .catch((err) => returnMETRCErr(err, res));

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
