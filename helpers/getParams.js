const { encodeAuthKey } = require("./encodeAuthKey");

const getParams = async (headers) => {
  const { authorization } = headers;
  const authContent = authorization.split(" ");
  const [licenseNumber, apiKey] = authContent;
  return ({ headers, params } = await encodeAuthKey(licenseNumber, apiKey));
};

module.exports = getParams;
