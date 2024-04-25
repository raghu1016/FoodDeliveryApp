import express from 'express'
import { getPrice, getPriceDetail } from '../controllers/getPrice.controller.js';

const router = express.Router();

 /** GET Methods */
    /**
     * @openapi
     * '/api/price':
     *  get:
     *     tags:
     *     - Price Controller
     *     summary: Get a price details 
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.get('/price',getPriceDetail);

    /**
     * @openapi
     * '/api/price':
     *  post:
     *     tags:
     *     - Price Controller
     *     summary: Calculate total price based on parameters
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - organization_id
     *              -  item_type
     *              -  zone
     *              -  total_distance
     *            properties:
     *              organization_id:
     *                type: integer
     *                default: 1
     *              item_type:
     *                type: string
     *                default: perishable
     *              total_distance:
     *                type: integer
     *                default: 10
     *              zone:
     *                type: string
     *                default: central
     *     responses:
     *      200:
     *        description: Total price calulated 
     *      400:
     *        description: Failed to get data from database
     *      404:
     *        description: Failed to calculate total price
     *      500:
     *        description: Server Error
     */

router.post('/price',getPrice);

export default router;