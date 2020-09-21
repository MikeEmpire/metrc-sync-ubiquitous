const express = require("express");

const router = express.Router();

const sales_api = require("../api/sales_api");

/**
 * @swagger
 * /api/sales:
 *   post:
 *     summary: Submitted a Sales Transaction
 *     description: Save all sales transaction
 *     tags:
 *       - Sales
 *     responses:
 *       200:
 *         description: Saved all submitted sales
 *         schema:
 *           type: object
 *           properties:
 *             Sales:
 *               type: array
 *               description: Saved necessary sales transactions
 *               items:
 *                 type: object
 *                 properties:
 *                   SalesDateTime:
 *                      type: string
 *                   SalesCustomerType:
 *                      type: string
 *                   PatientLicenseNumber:
 *                      type: string
 *                   IdentificationMethod:
 *                      type: string
 *                   Transactions:
 *                      type: object
 *                      properties:
 *                          PackageLabel:
 *                              type: string
 *                          Quantity:
 *                              type: integer
 *                          UnitOfMeasure:
 *                              type: string
 *                          TotalAmount:
 *                              type: integer
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.post("/", sales_api.saveReceipt);

module.exports = router;
