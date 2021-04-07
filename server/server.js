require("dotenv").config();

/** *********************************** */
//* ****// Dependencies
/** *********************************** */

const app = require("./app");
const logger = require("morgan");

/** *********************************** */
//* ****// Middleware initialization
/** *********************************** */

app.use(logger("dev"));

/** *********************************** */
//* ****// Initialize Routes
/** *********************************** */

require("./routes")(app);

const PORT = 444;

/** *********************************** */
//* ****// Initalize Port listen
/** *********************************** */

app.listen(process.env.PORT || PORT, () => {
  // eslint-disable-next-line
  console.log(
    `You are listening to Andre ${PORT}, ENV: ${process.env.NODE_ENV}`
  );
});
