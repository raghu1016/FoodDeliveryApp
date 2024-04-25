
import db from '../db/index.js'
import { calculatePrice } from '../utils/calculatePrice.js';

export const getPrice = async (req,res)=>{

    try{
        // console.log(req.body);
        const {organization_id,zone,item_type,total_distance} = req.body;

        if(!organization_id || !zone || !item_type|| !total_distance){
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const total_price = await calculatePrice(organization_id,zone,item_type,total_distance);

        res.status(200).json({total_price:total_price});
    }
    catch(err){
        res.status(500).json({ error: 'Internal server error'});
    }
}

export const getPriceDetail = async (req,res)=>{
    try{
        const query = 'SELECT * FROM PRICING';

        const results = await db(query);
    
        if(results){
            res.status(200).json(results.rows[0]);
        }
    }
    catch (err){
        console.log(err);
    }
}