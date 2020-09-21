const express = require("express");

const router = express.Router();

const plant_batches_api = require("../api/plant_batches_api");

/**
 * @swagger
 * /api/plantbatches/active:
 *   get:
 *     summary: Able to retrieve active plant batches on a specific date
 *     description: Able to retrieve active plant batches on a specific date
 *     tags:
 *       - Plant Batches
 *     parameters:
 *       - in: query
 *         name: lastModifiedEnd
 *         type: string
 *       - in: query
 *         name: lastModifiedStart
 *         type: string
 *     responses:
 *       200:
 *         description: Retrieved all queried plant batches
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *             activeBatches:
 *               type: array
 *               description: Retrieved all queried plant batches
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                      type: integer
 *                   Name:
 *                      type: string
 *                   Type:
 *                      type; string
 *                   RoomId:
 *                      type: integer
 *                   RoomName:
 *                      type: string
 *                   StrainId:
 *                      type: integer
 *                   StrainName:
 *                      type: string
 *                   PatientLicenseNumber:
 *                      type: string
 *                   UntrackedCount:
 *                      type: integer
 *                   Count:
 *                      type: integer
 *                   TrackedCount:
 *                      type: integer
 *                   PackagedCount:
 *                      type: string
 *                   HarvestedCount:
 *                      type: integer
 *                   DestroyedCount:
 *                      type: integer
 *                   SourcePackageId:
 *                      type: integer
 *                   SourcePackageLabel:
 *                      type: struing
 *                   SourcePlantId:
 *                      type: integer
 *                   SourcePlantLabel:
 *                      type: integer
 *                   PlantedDate:
 *                      type: date
 *                   LastModifiedDate:
 *                      type: date
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.get("/active", plant_batches_api.getActiveBatches);

/**
 * @swagger
 * /api/plantbatches/inactive:
 *   get:
 *     summary: Able to retrieve inactive plant batches on a specific date
 *     description: Able to retrieve inactive plant batches on a specific date
 *     tags:
 *       - Plant Batches
 *     parameters:
 *       - in: query
 *         name: lastModifiedEnd
 *         type: string
 *       - in: query
 *         name: lastModifiedStart
 *         type: string
 *     responses:
 *       200:
 *         description: Retrieved all queried inactive plant batches
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *             inactiveBatches:
 *               type: array
 *               description: Retrieved all queried inactive plant batches
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                      type: integer
 *                   Name:
 *                      type: string
 *                   Type:
 *                      type; string
 *                   RoomId:
 *                      type: integer
 *                   RoomName:
 *                      type: string
 *                   StrainId:
 *                      type: integer
 *                   StrainName:
 *                      type: string
 *                   PatientLicenseNumber:
 *                      type: string
 *                   UntrackedCount:
 *                      type: integer
 *                   Count:
 *                      type: integer
 *                   TrackedCount:
 *                      type: integer
 *                   PackagedCount:
 *                      type: string
 *                   HarvestedCount:
 *                      type: integer
 *                   DestroyedCount:
 *                      type: integer
 *                   SourcePackageId:
 *                      type: integer
 *                   SourcePackageLabel:
 *                      type: struing
 *                   SourcePlantId:
 *                      type: integer
 *                   SourcePlantLabel:
 *                      type: integer
 *                   PlantedDate:
 *                      type: date
 *                   LastModifiedDate:
 *                      type: date
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.get("/inactive", plant_batches_api.getInactiveBatches);

/**
 * @swagger
 * /api/plantbatches:
 *   post:
 *     summary: Able to create plant batches that will correspond with a license
 *     description: Able to create a plant group that will correspond with a license
 *     requestBody:
 *       description: Mandatory fields for creating a plant group
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *                type: array
 *                description: Array of plant groups to create
 *                items:
 *                  type: object
 *                  properties:
 *                    Name:
 *                      type: string
 *                    Type:
 *                      type: string
 *                    Count:
 *                      type: integer
 *                    Strain:
 *                      type: string
 *                    Room:
 *                      type: string
 *                    PatientLicenseNumber:
 *                      type: string
 *                    ActualDate:
 *                      type: date
 *     tags:
 *       - Plant Batches
 *     responses:
 *       200:
 *         description: Successfully created Plant Group in METRC
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
router.post("/", plant_batches_api.addPlantGroup);

/**
 * @swagger
 * /api/plantbatches/move:
 *   post:
 *     summary: Able to change growth phase of plant groups
 *     description: Able to change grwoth phase of existing plant groups
 *     requestBody:
 *        description: Request object for changing growth phase of multiple plant groups
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of plant groups to change phase
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
 *                        type: date
 *                      PatientLicenseNumber:
 *                        type: string
 *     tags:
 *       - Plant Batches
 *     responses:
 *       200:
 *         description: Successfully changed phase of plant group
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *       500:
 *         description: Incorrect API Key
 *       405:
 *         description: No data was submitted
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: The requested resource does not support http method 'POST'.
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.post("/move", plant_batches_api.movePlantBatch);

/**
 * @swagger
 * /api/plantbatches/package:
 *   post:
 *     summary: Able to create a package from a plant group
 *     description: Able to change grwoth phase of existing plant groups
 *     requestBody:
 *        description: Request object for changing growth phase of multiple plant groups
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of plant groups to change phase
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
 *       - Plant Batches
 *     responses:
 *       200:
 *         description: Successfully changed phase of plant group
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
router.post("/package", plant_batches_api.createPackage);

/**
 * @swagger
 * /api/plantbatches/growthphase:
 *   put:
 *     summary: Able to change growth phase of a plant group
 *     description: Able to change grwoth phase of existing plant groups
 *     requestBody:
 *        description: Request object for changing growth phase of multiple plant groups
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of plant groups to change phase
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
 *              examples:
 *                PlantGroup1:
 *                  summary: An example of a plant group to be transferred
 *                  value:
 *                    Name: ExamplePlantBatch (Could be a plant group METRC Tag)
 *                    Count: 30
 *                    StartingTag: 1AFF2932929d
 *                    GrowthPhase: Flowering
 *                    NewRoom: Flowering Room
 *                    GrowthDate: 2015-12-15
 *                    PatientLicenseNumber: null
 *     tags:
 *       - Plant Batches
 *     responses:
 *       200:
 *         description: Successfully changed phase of plant group
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
router.put("/growthphase", plant_batches_api.changeGrowthPhase);

/**
 * @swagger
 * /api/plantbatches/deletebatch:
 *   put:
 *     summary: Able to delete a plant batch
 *     description: Able to delete a plant batch
 *     requestBody:
 *        description: Able to delete a plant batch that is associated with a plant batch
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of plant groups to refactor
 *                 items:
 *                    type: object
 *                    properties:
 *                      PlantBatch:
 *                        type: string
 *                      Count:
 *                        type: integer
 *                      ReasonNote:
 *                        type: string
 *                      ActualDate:
 *                        type: date
 *              examples:
 *                PlantGroup1:
 *                  summary: An example of a plant group to be transferred
 *                  value:
 *                    PlantBatch: ExamplePlantBatch (Could be a plant group METRC Tag)
 *                    Count: 30
 *                    ReasonNote: Plant Group got attacked by pesticides
 *                    ACtualDate: 2015-12-15
 *     tags:
 *       - Plant Batches
 *     responses:
 *       200:
 *         description: Successfully deleted plant group
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
router.put("/deletebatch", plant_batches_api.deletePlantBatch);

router.get("/:id", plant_batches_api.getBatchByLabel);

module.exports = router;
