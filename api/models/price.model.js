import db from '../db/index.js';
import { getPricingquery } from '../db/queries.js';
export const getPricingDetails = async(organization_id,zone,item_id)=>{

    const results = await db(getPricingquery,[organization_id,zone,item_id]);
    
    return results.rows[0];
}