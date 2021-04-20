const STATE_ABBREVIATIONS = {
  michigan: "mi",
  oregon: "or",
  oklahoma: "ok",
  california: "ca",
};

const URL =
  process.env.NODE_ENV === "development"
    ? "https://sandbox-api-ok.metrc.com"
    : process.env.METRC_URL;

const GROLENS_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : process.env.GROLENS_URL;

// YOON: User API key is different for every user: this particular key fallback is for dev/sandbox testing
const DEV_USER_API_KEY =
  process.env.NODE_ENV === "development"
    ? "O6-GVAUBnJxzgQo7ptJeRgSJ26OHAClx4f5g6WAVLiGOKsnh"
    : process.env.USER_API_KEY;

const V_API_KEY =
  process.env.NODE_ENV === "development"
    ? "Pt36rQnuKsKhQyrpDrPJ2vmYQFUXH3RRGC2M6C-VKwoVy89Y"
    : process.env.VENDOR_API_KEY;

const DEV_VENDOR_API_DICT = {
  california: "3F16j6eJ5q4aqdGGDEjIfqoZymDzRzshGFJ7QCiP-ofOhaoC",
  oklahoma: "Pt36rQnuKsKhQyrpDrPJ2vmYQFUXH3RRGC2M6C-VKwoVy89Y",
  oregon: "-EKz8Mu8FZK2OOrMMHkC10rrs5aufypU5rYdFCxpndtZ7A9S",
};

const DEV_VENDOR_USER_DICT = {
  california: "FusVbe4Yv6W1DGNuxKNhByXU6RO6jSUPcbRCoRDD98VNXc4D",
};

// const DEV_USER_API_DICT = {
//   oklahoma: "O6-GVAUBnJxzgQo7ptJeRgSJ26OHAClx4f5g6WAVLiGOKsnh",
//   oregon: "4ABk0xpkhATaOhFgB81dses94sRCBA2jqV5xrAwX9fpUPZO6",
// };

const METRC_URL = (req) => {
  const { state } = req.query;
  if (!state) {
    return URL;
  }
  const lowercaseState = state.toLowerCase();
  const shortenedState = STATE_ABBREVIATIONS[lowercaseState];
  if (process.env.NODE_ENV === "development") {
    const sandboxUrl = `https://sandbox-api-${shortenedState}.metrc.com`;
    return sandboxUrl;
  }
  const envKey = `${state.toUpperCase()}_METRC_URL`;
  return process.env[envKey];
};

const VENDOR_API_KEY = (state) => {
  if (!state) {
    return V_API_KEY;
  }
  const lowercaseState = state.toLowerCase();
  if (process.env.NODE_ENV === "development") {
    const sandboxUrl = DEV_VENDOR_API_DICT[lowercaseState];
    return sandboxUrl;
  }
  return process.env.METRC_URL;
};

module.exports = {
  METRC_URL,
  DEV_USER_API_KEY,
  VENDOR_API_KEY,
  GROLENS_URL,
};
