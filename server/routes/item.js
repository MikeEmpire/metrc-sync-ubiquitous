const express = require("express");

const router = express.Router();

const item_api = require("../api/item_api");

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Able to create an item
 *     description: Able to create an item
 *     requestBody:
 *        description: Request object for creating a item
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 description: array of items to create
 *                 items:
 *                    type: object
 *                    properties:
 *                      ItemCategory:
 *                        type: string
 *                      Name:
 *                        type: string
 *                      UnitOfMeasure:
 *                        type: string
 *                      Strain:
 *                        type: integer
 *                      ItemBrand:
 *                        type: string
 *                      AdministrationMethod:
 *                        type: integer
 *                      UnitCbdPercent:
 *                        type: integer
 *                      UnitCbdContent:
 *                        type: integer
 *                      UnitCbdContentUnitOfMeasure:
 *                        type: string
 *                      UnitVolume:
 *                        type: integer
 *                      UnitVolumeUnitOfMeasure:
 *                        type: string
 *                      UnitWeight:
 *                        type: integer
 *                      UnitWeightUnitOfMeasure:
 *                        type: string
 *                      ServingSize:
 *                        type: integer
 *                      SupplyDurationDays:
 *                        type: integer
 *                      Ingredients:
 *                        type: object
 *     tags:
 *       - Items
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
router.post("/", item_api.createItem);

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Able to retrieve all active Items
 *     description: Able to get all active Items
 *     tags:
 *       - Items
 *     responses:
 *       200:
 *         description: Retrieved all queried active packages
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                        message:
 *                          type: string
 *                          description: Success Message
 *                        activeItems:
 *                          type: array
 *                          description: Retrieved all of the queried active items
 *                          items:
 *                            type: object
 *                            properties:
 *                              Id:
 *                                 type: integer
 *                              Name:
 *                                 type: string
 *                              ProductCategoryName:
 *                                 type; string
 *                              ProductCategoryType:
 *                                 type: string
 *                              QuantityType:
 *                                 type: string
 *                              DefaultLabTestingState:
 *                                 type: integer
 *                              UnitOfMeasureName:
 *                                 type: string
 *                              ApprovalStatus:
 *                                 type: integer
 *                              StrainId:
 *                                 type: integer
 *                              StrainName:
 *                                 type: string
 *                              AdministraationMethod:
 *                                 type: string
 *                              UnitCbdPercent:
 *                                 type: integer
 *                              UnitCbdContent:
 *                                 type: integer
 *                              UnitCbdContentUnitOfMeasureName:
 *                                 type: string
 *                              UnitThcPercent:
 *                                 type: integer
 *                              UnitThcContent:
 *                                 type: integer
 *                              UnitThcContentUnitOfMeasureName:
 *                                 type: string
 *                              UnitVolume:
 *                                 type: integer
 *                              UnitVolumeUnitOfMeasureName:
 *                                 type: string
 *                              UnitWeight:
 *                                 type: string
 *                              UnitWeightMeasureOfName:
 *                                 type: string
 *                              ServingSize:
 *                                 type: integer
 *                              SupplyDurationDays:
 *                                 type: integer
 *                              UnitQuantity:
 *                                 type: integer
 *                              UnitQuantityUnitOfMeasureName:
 *                                 type: string
 *                              Ingredients:
 *                                 type: string
 *                              IsUsed:
 *                                 type: boolean
 *       400:
 *         description: Unable to create the item in METRC
 *         content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                         type: string
 *                         description: Description of error. Could be duplicate item name, wrong zone, etc
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *         content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: Error telling user that credentials are invalid
 *
 */
router.get("/", item_api.getItems);

/**
 * @swagger
 * /api/items/categories:
 *   get:
 *     summary: Able to retrieve all active Item categories
 *     description: Able to get all active Item categories
 *     tags:
 *       - Items
 *     responses:
 *       200:
 *         description: Retrieved all item categories
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Success Message
 *             activeItems:
 *               type: array
 *               description: Retrieved all of the queried active items
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                      type: integer
 *                   Name:
 *                      type: string
 *                   ProductCategoryType:
 *                      type; string
 *                   QuantityType:
 *                      type: string
 *                   RequiresStrain:
 *                      type: boolean
 *                   RequiresItemBrand:
 *                      type: boolean
 *                   RequiresAdministraionMethod:
 *                      type: boolean
 *                   RequiresUnitCbdPrecent:
 *                      type: boolean
 *                   RequiresUnitThcPercent:
 *                      type: boolean
 *                   RequiresUnitThcContent:
 *                      type: boolean
 *                   RequiresUnitVolume:
 *                      type: boolean
 *                   RequiresUnitWeight:
 *                      type: boolean
 *                   RequiresServingSize:
 *                      type: boolean
 *                   RequiresSupplyDurationDays:
 *                      type: boolean
 *                   RequiresIngredients:
 *                      type: boolean
 *                   RequiresProductPhoto:
 *                      type: boolean
 *                   CanContainSeeds:
 *                      type: boolean
 *                   CanBeRemediated:
 *                      type: boolean
 *       401:
 *         description: Incorrect API Key Or METRC User Key
 *
 */
router.get("/categories", item_api.getItemCategories);

router.put("/", item_api.updateItem);

module.exports = router;
