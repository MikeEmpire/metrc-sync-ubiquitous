/**
 * @swagger
 * /validate:
 *   post:
 *     summary: Validate the API Key
 *     description: Able to validate the METRC credentials are correct
 *     tags:
 *       - Validation
 *     parameters:
 *       - in: query
 *         name: sort
 *         type: string
 *         enum:
 *           - yes
 *           - no
 *     responses:
 *       200:
 *         description: Correct API Key
 *         schema:
 *           type: object
 *           properties:
 *             animals:
 *               type: array
 *               description: all the animals
 *               items:
 *                 type: string
 */
