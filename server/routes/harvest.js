const express = require("express");

const router = express.Router();

const harvest_api = require("../api/harvest_api");

router.get("/:id", harvest_api.getHarvestById);

/**
 * @swagger
 * /api/harvests:
 *   get:
 *     summary: Able to retrieve all active Harvests
 *     description: Able to get all active Harvests
 *     parameters:
 *       - in: query
 *         name: lastModifiedStart
 *         type: string
 *       - in: query
 *         name: lastModifiedEnd
 *         type: string
 *     tags:
 *       - Harvests
 *     responses:
 *       200:
 *         description: Retrieved all Harvests
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Success Message
 *                  activeHarvests:
 *                    type: array
 *                    description: Retrieved all of the queried active items
 *                    items:
 *                      type: object
 *                      properties:
 *                        Id:
 *                           type: integer
 *                        Name:
 *                           type: string
 *                        SourceStrainCount:
 *                           type; integer
 *                        SourceStrainNames:
 *                           type: string
 *                        Strains:
 *                           type: Array
 *                           description: All of the strains associated with a harvest
 *                           items:
 *                               type: string
 *                        DryingRoomId:
 *                           type: integer
 *                        DryingRoomName:
 *                           type: string
 *                        PatientLicenseNumber:
 *                           type: string
 *                        CurrentWeight:
 *                           type: integer
 *                        TotalWasteWeight:
 *                           type: integer
 *                        PlantCount:
 *                           type: integer
 *                        TotalWetWeight:
 *                           type: integer
 *                        TotalRestoredWeight:
 *                           type: integer
 *                        PackageCount:
 *                           type: integer
 *                        TotalPackagedWeight:
 *                           type: integer
 *                        UnitOfWeightName:
 *                           type: string
 *                        LabTestingState:
 *                           type: string
 *                        LabTestingStateDate:
 *                           type: string
 *                        IsOnHold:
 *                           type: boolean
 *                        HarvestStartDate:
 *                           type: date
 *                        FinishedDate:
 *                           type: date
 *                        ArchivedDate:
 *                           type: date
 *                        LastModified:
 *                           type: date
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.get("/", harvest_api.getActiveHarvests);

/**
 * @swagger
 * /api/harvest/inactive:
 *   get:
 *     parameters:
 *       - in: query
 *         name: lastModifiedStart
 *         type: string
 *       - in: query
 *         name: lastModifiedEnd
 *         type: string
 *     summary: Able to retrieve all inactive Harvests
 *     description: Able to get all inactive Harvests
 *     tags:
 *       - Harvests
 *     responses:
 *       200:
 *         description: Retrieved all Inactive Harvests
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Success Message
 *                  inactiveHarvests:
 *                    type: array
 *                    description: Retrieved all of the queried active items
 *                    items:
 *                      type: object
 *                      properties:
 *                        Id:
 *                           type: integer
 *                        Name:
 *                           type: string
 *                        SourceStrainCount:
 *                           type; integer
 *                        SourceStrainNames:
 *                           type: string
 *                        Strains:
 *                           type: Array
 *                           description: All of the strains associated with a harvest
 *                           items:
 *                               type: string
 *                        DryingRoomId:
 *                           type: integer
 *                        DryingRoomName:
 *                           type: string
 *                        PatientLicenseNumber:
 *                           type: string
 *                        CurrentWeight:
 *                           type: integer
 *                        TotalWasteWeight:
 *                           type: integer
 *                        PlantCount:
 *                           type: integer
 *                        TotalWetWeight:
 *                           type: integer
 *                        TotalRestoredWeight:
 *                           type: integer
 *                        PackageCount:
 *                           type: integer
 *                        TotalPackagedWeight:
 *                           type: integer
 *                        UnitOfWeightName:
 *                           type: string
 *                        LabTestingState:
 *                           type: string
 *                        LabTestingStateDate:
 *                           type: string
 *                        IsOnHold:
 *                           type: boolean
 *                        HarvestStartDate:
 *                           type: date
 *                        FinishedDate:
 *                           type: date
 *                        ArchivedDate:
 *                           type: date
 *                        LastModified:
 *                           type: date
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.get("/inactive", harvest_api.getInactiveHarvests);

/**
 * @swagger
 * /api/harvest/onhold:
 *   get:
 *     summary: Able to retrieve all onhold Harvests
 *     description: Able to get all onhold Harvests
 *     parameters:
 *       - in: query
 *         name: lastModifiedStart
 *         type: string
 *       - in: query
 *         name: lastModifiedEnd
 *         type: string
 *     tags:
 *       - Harvests
 *     responses:
 *       200:
 *         description: Retrieved all OnHold Harvests
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Success Message
 *                  inactiveHarvests:
 *                    type: array
 *                    description: Retrieved all of the queried on hold harvests
 *                    items:
 *                      type: object
 *                      properties:
 *                        Id:
 *                           type: integer
 *                        Name:
 *                           type: string
 *                        SourceStrainCount:
 *                           type; integer
 *                        SourceStrainNames:
 *                           type: string
 *                        Strains:
 *                           type: Array
 *                           description: All of the strains associated with a harvest
 *                           items:
 *                               type: string
 *                        DryingRoomId:
 *                           type: integer
 *                        DryingRoomName:
 *                           type: string
 *                        PatientLicenseNumber:
 *                           type: string
 *                        CurrentWeight:
 *                           type: integer
 *                        TotalWasteWeight:
 *                           type: integer
 *                        PlantCount:
 *                           type: integer
 *                        TotalWetWeight:
 *                           type: integer
 *                        TotalRestoredWeight:
 *                           type: integer
 *                        PackageCount:
 *                           type: integer
 *                        TotalPackagedWeight:
 *                           type: integer
 *                        UnitOfWeightName:
 *                           type: string
 *                        LabTestingState:
 *                           type: string
 *                        LabTestingStateDate:
 *                           type: string
 *                        IsOnHold:
 *                           type: boolean
 *                        HarvestStartDate:
 *                           type: date
 *                        FinishedDate:
 *                           type: date
 *                        ArchivedDate:
 *                           type: date
 *                        LastModified:
 *                           type: date
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.get("/onhold", harvest_api.getOnHoldHarvests);

/**
 * @swagger
 * /api/harvest/package:
 *   post:
 *     summary: Able to create a package from a harvest
 *     description: Able to create a package from a harvest
 *     requestBody:
 *        description: Request object for creating a package from a harvest
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of packages to create
 *                 items:
 *                    type: object
 *                    properties:
 *                      Tag:
 *                        type: string
 *                      Room:
 *                        type: string
 *                      Item:
 *                        type: string
 *                      UnitOfWeight:
 *                        type: integer
 *                      PatientLicenseNumber:
 *                        type: string
 *                      Note:
 *                        type: integer
 *                      IsProductionBatch:
 *                        type: boolean
 *                      ProductionBatchNumber:
 *                        type: integer
 *                      IsTradeSample:
 *                        type: boolean
 *                      RemediateProduct:
 *                        type: boolean
 *                      RemediationProductId:
 *                        type: integer
 *                      RemediationDate:
 *                        type: date
 *                      RemediationSteps:
 *                        type: string
 *                      ActualDate:
 *                        type: date
 *                      Ingredients:
 *                        type: array
 *                        description: Used to describe the contents of the package
 *                        items:
 *                          type: object
 *                          properties:
 *                              HarvestId:
 *                                  type: integer
 *                              HarvestName:
 *                                  type: string
 *                              Weight:
 *                                  type: integer
 *                              UnitOfWeight:
 *                                  type: string
 *     tags:
 *       - Harvests
 *     responses:
 *       200:
 *         description: Successfully created package
 *         content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          description: Success Message
 *       500:
 *         description: Incorrect API Key
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
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.post("/package", harvest_api.createPackage);

/**
 * @swagger
 * /api/harvest/waste:
 *   post:
 *     summary: Able to remove waste from a harvest
 *     description: Able to remove waste from a harvest
 *     requestBody:
 *        description: Request object for removing waste from a harvest
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of packages to create
 *                 items:
 *                    type: object
 *                    properties:
 *                      Id:
 *                        type: integer
 *                      WasteType:
 *                        type: string
 *                      UnitOfWeight:
 *                        type: string
 *                      WasteWeight:
 *                        type: integer
 *                      ActualDate:
 *                        type: integer
 *     tags:
 *       - Harvests
 *     responses:
 *       200:
 *         description: Successfully removed waste
 *         content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          description: Success Message
 *       500:
 *         description: Incorrect API Key
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
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.post("/waste", harvest_api.recordWaste);

router.get("/waste/types", harvest_api.getWasteTypes);

router.post('/finish', harvest_api.finishHarvest);

router.post('/unfinish', harvest_api.unfinishHarvest)

router.post('/move', harvest_api.moveHarvest)

module.exports = router;
