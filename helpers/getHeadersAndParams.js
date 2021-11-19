const { encodeAuthKey } = require("./encodeAuthKey");

const getHeadersAndParams = async (req) => {
  const { authorization } = req.headers;
  const { state } = req.query;

  const authContent = authorization.split(" ");

  const [licenseNumber, apiKey] = authContent;

  const { headers, params } = await encodeAuthKey(licenseNumber, apiKey, state);
  return { headers, params };
};

module.exports = getHeadersAndParams;
