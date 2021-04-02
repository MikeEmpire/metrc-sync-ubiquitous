const express = require("express");

const router = express.Router();

const facilities_api = require("../api/facilities_api");

router.get("/", facilities_api.getFacilities);

module.exports = router;
