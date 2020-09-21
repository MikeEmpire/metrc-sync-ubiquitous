// Creating Auth Key for METRC requests
const { VENDOR_API_KEY } = require('../config');

const encodeAuthKey = userApiKey => {
  const authKeyPlaintext = `${VENDOR_API_KEY}:${userApiKey}`;
  const authKeyBase64 = Buffer.from(authKeyPlaintext).toString('base64');

  return `Basic ${authKeyBase64}`;
};

module.exports = encodeAuthKey;
