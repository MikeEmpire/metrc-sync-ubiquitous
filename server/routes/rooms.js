const express = require("express");

const router = express.Router();

const rooms_api = require("../api/rooms_api");

/**
 * @swagger
 * /api/rooms:
 *   post:
 *     summary: Endpoint to create rooms in METRC
 *     description: Create rooms to be considered active
 *     tags:
 *       - Rooms
 *     responses:
 *       200:
 *         description: Create All Rooms
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *             Rooms:
 *               type: array
 *               description: Created all of the requested rooms
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                      type: integer
 *                   Name:
 *                      type: string
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
router.post('/', rooms_api.addRooms);

/**
 * @swagger
 * /api/rooms:
 *   get:
 *     summary: Get All Active Rooms
 *     description: Get All Active Rooms associated with a facility
 *     tags:
 *       - Rooms
 *     responses:
 *       200:
 *         description: Retrieved All Rooms
 *         schema:
 *           type: Array
 *           properties:
 *             Rooms:
 *               type: array
 *               description: all of the strains in the facility
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                      type: integer
 *                   Name:
 *                      type: string
 *                   TestingStatus:
 *                      type: string
 *                   ThcLevel:
 *                      type: integer
 *                   CbdLevel:
 *                      type: integer
 *                   IndicaPercentage:
 *                      type: integer
 *                   SativaPercentage:
 *                      type: integer
 *                   IsUsed:
 *                      type: boolean
 *                   Genetics:
 *                      type: string
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 * 
 */
router.get('/', rooms_api.getRooms);

router.get("/types", rooms_api.getRoomTypes);

router.put('/', rooms_api.updateRoom);

module.exports = router;
