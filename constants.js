const METRC_URL =
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

const VENDOR_API_KEY =
  process.env.NODE_ENV === "development"
    ? "Pt36rQnuKsKhQyrpDrPJ2vmYQFUXH3RRGC2M6C-VKwoVy89Y"
    : process.env.VENDOR_API_KEY;

module.exports = {
  METRC_URL,
  DEV_USER_API_KEY,
  VENDOR_API_KEY,
  GROLENS_URL,
};
