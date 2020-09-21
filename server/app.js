require("dotenv").config();
/** *********************************** */
//* ****// Dependencies
/** *********************************** */

// common utils

// Express dependencies
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const path = require("path");

/** *********************************** */
//* ****// Variable Declaration
/** *********************************** */

require("dotenv").load();

const app = express();

/** *********************************** */
//* ****// Setup Handlebars Template Engine
/** *********************************** */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

/** *********************************** */
//* ****// Express & Webpack Middleware
/** *********************************** */

app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cors()); // Enable CORS from client-side
app.use(compression());
app.use(express.static(path.join(__dirname, "/public")));

/** *********************************** */
//* ****// Initalize Port listen
/** *********************************** */

module.exports = app
