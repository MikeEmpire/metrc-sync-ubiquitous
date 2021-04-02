const { VENDOR_API_KEY } = require("../constants");

const encodeAuthKey = async (licenseNumber, metrcUserKey, state) => {
  let authKeyPlainText;
  let authKeyBase64;

  if (!metrcUserKey) throw new Error("Missing METRC user API key");

  if (!licenseNumber) throw new Error("Missing License Number!");
  const vendorKey = VENDOR_API_KEY(state);
  authKeyPlainText = `${vendorKey}:${metrcUserKey}`;
  authKeyBase64 = `Basic ${Buffer.from(authKeyPlainText).toString("base64")}`;

  return {
    headers: {
      Authorization: authKeyBase64,
    },
    params: {
      licenseNumber,
    },
  };
};

const getAuthorization = (req) => {
  const { authorization } = req.headers;

  const authContent = authorization.split(" ");

  const [licenseNumber, apiKey] = authContent;

  return encodeAuthKey(licenseNumber, apiKey);
};

module.exports = {
  encodeAuthKey,
  getAuthorization,
};
