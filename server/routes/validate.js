const Router = require("express-promise-router");

const router = new Router();

const validate_api = require("../api/validate_api");

/**
 * @swagger
 * components:
 *   schemas:
 *      Strain:
 *         type: object
 * 
 * /api/validate:
 *   post:
 *     summary: Validate the API Key
 *     description: Able to validate the METRC credentials are correct
 *     tags:
 *       - Validate
 *     responses:
 *       200:
 *         description: Correct API Key
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Credential validation message
 *             strains:
 *               type: array
 *               description: All of the strains in the facility
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
router.post('/', validate_api.validateMETRCInfo);

module.exports = router;
