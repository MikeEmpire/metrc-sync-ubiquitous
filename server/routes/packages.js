const express = require("express");

const router = express.Router();

const packages_api = require("../api/packages_api");

/**
 * @swagger
 * /api/packages:
 *   get:
 *     summary: Able to retrieve all active packages
 *     description: Able to get all active packages
 *     tags:
 *       - Packages
 *     parameters:
 *       - in: query
 *         name: lastModifiedEnd
 *         type: string
 *       - in: query
 *         name: lastModifiedStart
 *         type: string
 *     responses:
 *       200:
 *         description: Retrieved all queried active packages
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *             activePackages:
 *               type: array
 *               description: Retrieved all of the queried active packages
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                      type: integer
 *                   Label:
 *                      type: string
 *                   PackageType:
 *                      type; string
 *                   SourceHarvestNames:
 *                      type: string
 *                   RoomId:
 *                      type: integer
 *                   RoomName:
 *                      type: string
 *                   Quantity:
 *                      type: integer
 *                   UNitOfMeasureName:
 *                      type: string
 *                   UnitOfMeasureAbbreviation:
 *                      type: string
 *                   PatientLicenseNumber:
 *                      type: string
 *                   ProductId:
 *                      type: integer
 *                   ProductName:
 *                      type: string
 *                   ProductCategoryName:
 *                      type: string
 *                   ItemStrainName:
 *                      type: string
 *                   ItemUnitCbdPercent:
 *                      type: integer
 *                   ItemUnitCbdContent:
 *                      type: integer
 *                   ItemUnitCbdContentUnitOfMeasureName:
 *                      type: string
 *                   ItemUnitThcPercent:
 *                      type: integer
 *                   ItemUnitThcContent:
 *                      type: integer
 *                   ItemUnitThcContentUnitOfMeasureName:
 *                      type: string
 *                   ItemUnitVolume:
 *                      type: integer
 *                   ItemUnitVolumeUnitOfMeasureName:
 *                      type: string
 *                   ItemUnitWeight:
 *                      type: integer
 *                   ItemUnitWeightUnitOfMeasureName:
 *                      type: string
 *                   ItemServingSize:
 *                      type: integer
 *                   ItemSupplyDurationDays:
 *                      type: string
 *                   ItemUnitQuantity:
 *                      type: integer
 *                   ItemUnitQuantityUnitOfMeasureName:
 *                      type: string
 *                   Note:
 *                      type: string
 *                   PackagedDate:
 *                      type: date
 *                   InitialLabTestingState:
 *                      type: string
 *                   LabTestingState:
 *                      type: string
 *                   LabTestingStateDate:
 *                      type: date
 *                   IsProductionBatch:
 *                      type: boolean
 *                   ProductionBatchNumber:
 *                      type: integer
 *                   IsTradeSample:
 *                      type: boolean
 *                   IsTestingSample:
 *                      type: boolean
 *                   IsProcessValidationTestingSample:
 *                      type: boolean
 *                   ProductRequiresRemediation:
 *                      type: boolean
 *                   ContainsRemediatedProduct:
 *                      type: boolean
 *                   RemediationDate:
 *                      type: date
 *                   ReceivedFromManifestNumber:
 *                      type: string
 *                   ReceivedFromFacilityLicenseNumber:
 *                      type: string
 *                   ReceivedFromFacilityName:
 *                      type: string
 *                   ReceivedDateTime:
 *                      type: date
 *                   IsOnHold:
 *                      type: boolean
 *                   ArchivedDate:
 *                      type: date
 *                   FinishedDate:
 *                      type: date
 *                   LastModified:
 *                      type: date
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.get("/", packages_api.getActivePackages);

/**
 * @swagger
 * /api/packages:
 *   post:
 *     summary: Able to create a package
 *     description: Able to create a package
 *     requestBody:
 *        description: Request object for creating a package
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of plants to harvest
 *                 items:
 *                    type: object
 *                    properties:
 *                      Tag:
 *                        type: string
 *                      Room:
 *                        type: string
 *                      Item:
 *                        type: string
 *                      Quantity:
 *                        type: integer
 *                      UnitOfMeasure:
 *                        type: string
 *                      PatientLicenseNumber:
 *                        type: string
 *                      Note:
 *                        type: date
 *                      IsProductionBatch:
 *                        type: boolean
 *                      ProductionBatchNumber:
 *                        type: string
 *                      ProductRequiresRemediation:
 *                        type: boolean
 *                      ActualDate:
 *                          type: date
 *                      Ingredients:
 *                          type: array
 *                          description: Used to describe the contents of a package
 *                          items:
 *                              type: object
 *                              properties:
 *                                  Package:
 *                                      type: string
 *                                  Quantity:
 *                                      type: integer
 *                                  UnitOfMeasure:
 *                                      type: string
 *     tags:
 *       - Packages
 *     responses:
 *       200:
 *         description: Successfully created package
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
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
router.post("/", packages_api.createPackages);

/**
 * @swagger
 * /api/packages/planting:
 *   post:
 *     summary: Able to create a plant group from a package
 *     description: Able to create a plant group from a package
 *     requestBody:
 *        description: Request object for creating a plant group from a package (immature)
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of packages to create
 *                 items:
 *                    type: object
 *                    properties:
 *                      PackageLabel:
 *                        type: string
 *                      PackageAdjustmentAmount:
 *                        type: string
 *                      PackageAdjustmentUnitOfMeasureName:
 *                        type: string
 *                      PlantBatchName:
 *                        type: integer
 *                      PlantBatchType:
 *                        type: string
 *                      PlantCount:
 *                        type: integer
 *                      RoomName:
 *                        type: string
 *                      StrainName:
 *                        type: string
 *                      PatientLicenseNumber:
 *                        type: string
 *                      PlantedDate:
 *                        type: date
 *                      UnpackagedDate:
 *                          type: date
 *     tags:
 *       - Packages
 *     responses:
 *       200:
 *         description: Successfully created plant group from package
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *       500:
 *         description: Incorrect API Key
 *       400:
 *         description: METRC Plant Group details are invalid
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          description: There are some errors in the request body. Values must be adjusted
 * 
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.post("/planting", packages_api.createPlantGroupPackage);

module.exports = router;
