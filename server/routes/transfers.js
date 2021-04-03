const express = require("express");

const router = express.Router();

const transfers_api = require("../api/transfer_api");

router.get("/incoming", transfers_api.getIncomingTransfers);

router.get("/outgoing", transfers_api.getOutgoingTransfers);

router.get("/templates", transfers_api.getTemplates);

router.get("/templates/details/:id", transfers_api.getTransfersByTemplates);

router.get("/details/:id", transfers_api.getTransportDetail);

router.post("/templates", transfers_api.createTransferTemplate);

router.post("/external", transfers_api.createExternalTransfer);

router.put("/templates", transfers_api.updateTransferTemplate);

router.get("/types", transfers_api.getTransferTypes);

router.get("/package/:id", transfers_api.getPackageByIdTransfer);

router.put("/external/incoming", transfers_api.updateExternalIncomingTransfer);

module.exports = router;
