const express = require("express");

const router = express.Router();

const transfers_api = require("../api/transfer_api");

router.get("/incoming", transfers_api.getIncomingTransfers);

router.get("/outgoing", transfers_api.getOutgoingTransfers);

router.get('/templates', transfers_api.getTemplates);

router.get('/templates/:id', transfers_api.getTransfersByTemplates)

router.post('/templates', transfers_api.createTransferTemplate)

router.post("/external", transfers_api.createExternalTransfer);

router.get("/types", transfers_api.getTransferTypes);

module.exports = router;
