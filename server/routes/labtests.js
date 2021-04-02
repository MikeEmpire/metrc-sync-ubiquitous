const express = require("express");

const router = express.Router();

const labtests_api = require("../api/labtest_api");

router.post("/", labtests_api.recordLabTest);

module.exports = router;
