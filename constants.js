const METRC_URL =
  process.env.NODE_ENV === "development"
    ? "https://sandbox-api-mi.metrc.com"
    : process.env.METRC_URL;

const GROLENS_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : process.env.GROLENS_URL;

// YOON: User API key is different for every user: this particular key fallback is for dev/sandbox testing
const DEV_USER_API_KEY =
  process.env.NODE_ENV === "development"
    ? "piNo4VXHYPqlQFIZQKclMgQKigJsnx7zSQ9fq3iOtlpLvE0o"
    : process.env.USER_API_KEY;

const VENDOR_API_KEY =
  process.env.NODE_ENV === "development"
    ? "OfVdhqmU0-qnQdSotBZJQ5vyAojJp2x8TxlKuHI-ut7yggtS"
    : process.env.VENDOR_API_KEY;

module.exports = {
  METRC_URL,
  DEV_USER_API_KEY,
  VENDOR_API_KEY,
  GROLENS_URL,
};
