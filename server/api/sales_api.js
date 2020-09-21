const axios = require("axios");

const { encodeAuthKey } = require("../../helpers/encodeAuthKey");
const { METRC_URL } = require("../../constants");

exports.saveReceipt = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const authContent = authorization.split(" ");
    const [licenseNumber, apiKey] = authContent;
    const { headers, params } = await encodeAuthKey(licenseNumber, apiKey);

    const url = `${METRC_URL}/sales/v1/receipts`;
    const receiptInfo = req.body; // should be an array of objects

    return axios
      .post(url, receiptInfo, {
        params,
        headers
      })
      .then(response => {
        if (response.data === "") {
          return res.status(200).send({
            message: "Successfully sent data to METRC!",
            response: response.data
          });
        }

        return res.status(400).send({
          message: "Something went wrong, review the request again",
          response: response.data
        });
      })
      .catch(err =>
        res
          .status(err.response.status)
          .send({ message: err.response.data[0].message })
      );
  } catch (err) {
    return next(err);
  }
};
