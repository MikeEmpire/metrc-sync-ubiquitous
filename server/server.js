require("dotenv").config();

/** *********************************** */
//* ****// Dependencies
/** *********************************** */

const app = require('./app');

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
  console.log(`You are listening to Andre ${PORT}`);
});
