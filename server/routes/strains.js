const express = require("express");

const router = express.Router();

const strain_api = require("../api/strain_api");

/**
 * @swagger
 * /api/strains:
 *   get:
 *     summary: Get All Strains
 *     description: Get All Strains associated with a facility
 *     tags:
 *       - Strains
 *     responses:
 *       200:
 *         description: Retrieved All Strains
 *         content:
 *          appllication/json:
 *              schema:
 *                  type: array
 *                  description: array of Strains
 *                  items:
 *                      type: object
 *                      properties:
 *                          Name:
 *                              type: string
 *                          TestingStatus:
 *                              type: string
 *                          ThcLevel:
 *                              type: integer
 *                          CbdLevel:
 *                              type: integer
 *                          IndicaPercentage:
 *                              type: integer
 *                          SativaPercentage:
 *                              type: integer
 *                          Genetics:
 *                              type: string
 *                          IsUsed:
 *                              type: boolean
 *                      example:
 *                          Name: Gelato
 *                          TestingStatus: None
 *                          ThcLevel: 12
 *                          CbdLevel: 30
 *                          IndicaPercentage: 30
 *                          SativaPercentage: 40
 *                          Genetics: 12% Sativa / 30% Indica - Hybrid
 *                          IsUsed: true
 *                  
 *       500:
 *         description: Incorrect API Key
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          description: Error Message
 *                  example:
 *                      message: Missing METRC User API key
 * 
 */
router.get("/", strain_api.getMETRCStrains);

/**
 * @swagger
 * /api/strains:
 *   post:
 *     summary: Create a Strain
 *     description: Create a Strain that is associated with a facility
 *     requestBody:
 *      description: Mandatory fields for creating strains
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  description: array of strains
 *                  items:
 *                      type: object
 *                      properties:
 *                          Name:
 *                              type: string
 *                          TestingStatus:
 *                              type: string
 *                          ThcLevel:
 *                              type: integer
 *                          CbdLevel:
 *                              type: integer
 *                          IndicaPercentage:
 *                              type: integer
 *                          SativaPercentage:
 *                              type: integer
 *     tags:
 *       - Strains
 *     responses:
 *       200:
 *         description: Successfully Created All Strains
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          description: success message
 *                  example:
 *                      message: Successfully created all of your requested strains
 *       500:
 *         description: Incorrect API Key
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          description: Error Message
 *                  example:
 *                      message: Missing METRC User API key
 *       400:
 *         description: No data was submitted
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          description: Error Message
 *                  example:
 *                      message: No data was submitted
 */
router.post("/", strain_api.addStrains);

router.put('/', strain_api.updateMETRCStrains)

module.exports = router;
