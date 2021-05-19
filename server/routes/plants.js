const express = require("express");

const router = express.Router();

const plants_api = require("../api/plants_api");

/**
 * @swagger
 * /api/plants/flowering:
 *   get:
 *     summary: Able to retrieve flowering plants
 *     description: Able to get all flowering plants
 *     tags:
 *       - Plants
 *     parameters:
 *       - in: query
 *         name: lastModifiedEnd
 *         type: string
 *       - in: query
 *         name: lastModifiedStart
 *         type: string
 *     responses:
 *       200:
 *         description: Retrieved all queried flowering plants
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *             FloweringPlants:
 *               type: array
 *               description: Retrieved all of the queried flowering plants
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                      type: integer
 *                   Label:
 *                      type: string
 *                   State:
 *                      type; string
 *                   GrowthPhase:
 *                      type: string
 *                   PlantBatchId:
 *                      type: integer
 *                   PlantBatchName:
 *                      type: string
 *                   PlantBatchTypeName:
 *                      type: string
 *                   StrainId:
 *                      type: integer
 *                   StrainName:
 *                      type: string
 *                   RoomId:
 *                      type: integer
 *                   RoomName:
 *                      type: string
 *                   PatientLicenseNumber:
 *                      type: string
 *                   HarvestId:
 *                      type: integer
 *                   HarvestedUnitOfWeightName:
 *                      type: string
 *                   HarvestCount:
 *                      type: integer
 *                   IsOnHold:
 *                      type: boolean
 *                   PlantedDate:
 *                      type: date
 *                   VegetativeDate:
 *                      type: date
 *                   FloweringDate:
 *                      type: date
 *                   DestroyedDate:
 *                      type: date
 *                   DestroyedNote:
 *                      type: string
 *                   DestroyedByUserName:
 *                      type: string
 *                   LastModified:
 *                      type: date
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.get("/flowering", plants_api.getFloweringPlants);

router.get("/vegetative", plants_api.getVegetativePlants);

/**
 * @swagger
 * /api/plants/inactive:
 *   get:
 *     summary: Able to retrieve inactive plants
 *     description: Able to get all inactive plants
 *     tags:
 *       - Plants
 *     parameters:
 *       - in: query
 *         name: lastModifiedEnd
 *         type: string
 *       - in: query
 *         name: lastModifiedStart
 *         type: string
 *     responses:
 *       200:
 *         description: Retrieved all queried inactive plants
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *             inactivePlants:
 *               type: array
 *               description: Retrieved all of the queried inactive plants
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                      type: integer
 *                   Label:
 *                      type: string
 *                   State:
 *                      type; string
 *                   GrowthPhase:
 *                      type: string
 *                   PlantBatchId:
 *                      type: integer
 *                   PlantBatchName:
 *                      type: string
 *                   PlantBatchTypeName:
 *                      type: string
 *                   StrainId:
 *                      type: integer
 *                   StrainName:
 *                      type: string
 *                   RoomId:
 *                      type: integer
 *                   RoomName:
 *                      type: string
 *                   PatientLicenseNumber:
 *                      type: string
 *                   HarvestId:
 *                      type: integer
 *                   HarvestedUnitOfWeightName:
 *                      type: string
 *                   HarvestCount:
 *                      type: integer
 *                   IsOnHold:
 *                      type: boolean
 *                   PlantedDate:
 *                      type: date
 *                   VegetativeDate:
 *                      type: date
 *                   FloweringDate:
 *                      type: date
 *                   DestroyedDate:
 *                      type: date
 *                   DestroyedNote:
 *                      type: string
 *                   DestroyedByUserName:
 *                      type: string
 *                   LastModified:
 *                      type: date
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.get("/inactive", plants_api.getInactivePlants);
/**
 * @swagger
 * /api/plants/onhold:
 *   get:
 *     summary: Able to retrieve onhold plants
 *     description: Able to get all onhold plants
 *     tags:
 *       - Plants
 *     parameters:
 *       - in: query
 *         name: lastModifiedEnd
 *         type: string
 *       - in: query
 *         name: lastModifiedStart
 *         type: string
 *     responses:
 *       200:
 *         description: Retrieved all queried onhold plants
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *             OnHoldPlants:
 *               type: array
 *               description: Retrieved all of the queried onhold plants
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                      type: integer
 *                   Label:
 *                      type: string
 *                   State:
 *                      type; string
 *                   GrowthPhase:
 *                      type: string
 *                   PlantBatchId:
 *                      type: integer
 *                   PlantBatchName:
 *                      type: string
 *                   PlantBatchTypeName:
 *                      type: string
 *                   StrainId:
 *                      type: integer
 *                   StrainName:
 *                      type: string
 *                   RoomId:
 *                      type: integer
 *                   RoomName:
 *                      type: string
 *                   PatientLicenseNumber:
 *                      type: string
 *                   HarvestId:
 *                      type: integer
 *                   HarvestedUnitOfWeightName:
 *                      type: string
 *                   HarvestCount:
 *                      type: integer
 *                   IsOnHold:
 *                      type: boolean
 *                   PlantedDate:
 *                      type: date
 *                   VegetativeDate:
 *                      type: date
 *                   FloweringDate:
 *                      type: date
 *                   DestroyedDate:
 *                      type: date
 *                   DestroyedNote:
 *                      type: string
 *                   DestroyedByUserName:
 *                      type: string
 *                   LastModified:
 *                      type: date
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.get("/onhold", plants_api.getOnHoldPlants);

/**
 * @swagger
 * /api/plants/clones:
 *   post:
 *     summary: Able to create clones from existing plants
 *     description: Able to create clones from existing plants in the facility (Not manually used in the GroLens App)
 *     requestBody:
 *       description: Mandatory fields for creating a clone
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *                type: array
 *                description: Array of items
 *                items:
 *                  type: object
 *                  properties:
 *                    PlantLabel:
 *                      type: string
 *                    PlantBatchName:
 *                      type: string
 *                    PlantBatchType:
 *                      type: string
 *                    PlantCount:
 *                      type: integer
 *                    StrainName:
 *                      type: string
 *                    PatientLicenseNumber:
 *                      type: string
 *                    ActualDate:
 *                      type: date
 *     tags:
 *       - Plants
 *     responses:
 *       200:
 *         description: Successfully created clone
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *             ClonedPlanting:
 *               type: object
 *               description: Retrieved all of the queried onhold plants
 *               properties:
 *                   Id:
 *                      type: integer
 *                   Label:
 *                      type: string
 *                   State:
 *                      type; string
 *                   GrowthPhase:
 *                      type: string
 *                   PlantBatchId:
 *                      type: integer
 *                   PlantBatchName:
 *                      type: string
 *                   PlantBatchTypeName:
 *                      type: string
 *                   StrainId:
 *                      type: integer
 *                   StrainName:
 *                      type: string
 *                   RoomId:
 *                      type: integer
 *                   RoomName:
 *                      type: string
 *                   PatientLicenseNumber:
 *                      type: string
 *                   HarvestId:
 *                      type: integer
 *                   HarvestedUnitOfWeightName:
 *                      type: string
 *                   HarvestCount:
 *                      type: integer
 *                   IsOnHold:
 *                      type: boolean
 *                   PlantedDate:
 *                      type: date
 *                   VegetativeDate:
 *                      type: date
 *                   FloweringDate:
 *                      type: date
 *                   DestroyedDate:
 *                      type: date
 *                   DestroyedNote:
 *                      type: string
 *                   DestroyedByUserName:
 *                      type: string
 *                   LastModified:
 *                      type: date
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
router.post("/clones", plants_api.createClones);

/**
 * @swagger
 * /api/plants/changegrowthphase:
 *   post:
 *     summary: Able to change growth phase of plants
 *     description: Able to change grwoth phase of existing plants
 *     requestBody:
 *        description: Request object for changing growth phase of multiple plants
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of plants to change phase
 *                 items:
 *                    type: object
 *                    properties:
 *                      Name:
 *                        type: string
 *                      Count:
 *                        type: integer
 *                      StartingTag:
 *                        type: string
 *                      GrowthPhase:
 *                        type: string
 *                      NewRoom:
 *                        type: string
 *                      GrowthDate:
 *                        type: string
 *                      PatientLicenseNumber:
 *                        type: string
 *     tags:
 *       - Plants
 *     responses:
 *       200:
 *         description: Successfully changed phase of plant
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *             ClonedPlanting:
 *               type: object
 *               description: Retrieved all of the queried onhold plants
 *               properties:
 *                   Id:
 *                      type: integer
 *                   Label:
 *                      type: string
 *                   State:
 *                      type; string
 *                   GrowthPhase:
 *                      type: string
 *                   PlantBatchId:
 *                      type: integer
 *                   PlantBatchName:
 *                      type: string
 *                   PlantBatchTypeName:
 *                      type: string
 *                   StrainId:
 *                      type: integer
 *                   StrainName:
 *                      type: string
 *                   RoomId:
 *                      type: integer
 *                   RoomName:
 *                      type: string
 *                   PatientLicenseNumber:
 *                      type: string
 *                   HarvestId:
 *                      type: integer
 *                   HarvestedUnitOfWeightName:
 *                      type: string
 *                   HarvestCount:
 *                      type: integer
 *                   IsOnHold:
 *                      type: boolean
 *                   PlantedDate:
 *                      type: date
 *                   VegetativeDate:
 *                      type: date
 *                   FloweringDate:
 *                      type: date
 *                   DestroyedDate:
 *                      type: date
 *                   DestroyedNote:
 *                      type: string
 *                   DestroyedByUserName:
 *                      type: string
 *                   LastModified:
 *                      type: date
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
router.post("/changegrowthphase", plants_api.changeGrowthPhase);

/**
 * @swagger
 * /api/plants/harvest:
 *   post:
 *     summary: Able to record harvest of a plant
 *     description: Able to record harvest of a plant
 *     requestBody:
 *        description: Request object for changing growth phase of multiple plants
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of plants to harvest
 *                 items:
 *                    type: object
 *                    properties:
 *                      Plant:
 *                        type: string
 *                      Weight:
 *                        type: integer
 *                      UnitOfWeight:
 *                        type: string
 *                      DryingRoom:
 *                        type: string
 *                      HarvestName:
 *                        type: string
 *                      PatientLicenseNumber:
 *                        type: string
 *                      ActualDate:
 *                        type: date
 *     tags:
 *       - Plants
 *     responses:
 *       200:
 *         description: Successfully changed phase of plants
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
router.post("/harvest", plants_api.recordHarvest);

/**
 * @swagger
 * /api/plants/manicure:
 *   post:
 *     summary: Able to record the manicure of a plant
 *     description: Able to record the manicure of a plant
 *     requestBody:
 *        description: Request object for changing growth phase of multiple plants
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of plants to harvest
 *                 items:
 *                    type: object
 *                    properties:
 *                      Plant:
 *                        type: string
 *                      Weight:
 *                        type: integer
 *                      UnitOfWeight:
 *                        type: string
 *                      DryingRoom:
 *                        type: string
 *                      HarvestName:
 *                        type: string
 *                      PatientLicenseNumber:
 *                        type: string
 *                      ActualDate:
 *                        type: date
 *     tags:
 *       - Plants
 *     responses:
 *       200:
 *         description: Successfully changed phase of plants
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
router.post("/manicure", plants_api.recordManicure);

/**
 * @swagger
 * /api/plants/destroy:
 *   delete:
 *     summary: Able to delete a plant from a facility
 *     description: Delete a plant from a facility
 *     requestBody:
 *        description: Request object for deleting a plant group
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of plants to delete
 *                 items:
 *                    type: object
 *                    properties:
 *                      Id:
 *                        type: integer
 *                      Label:
 *                        type: string
 *                      ReasonNote:
 *                        type: string
 *                      ActualDate:
 *                        type: date
 *     tags:
 *       - Plants
 *     responses:
 *       200:
 *         description: Successfully deleted the requested plants
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
router.post("/destroy", plants_api.destroyPlants);

router.post("/move", plants_api.movePlants);

router.get("/wastemethods", plants_api.getWasteMethods);

router.get('/wastereasons', plants_api.getWasteReasons)

module.exports = router;
