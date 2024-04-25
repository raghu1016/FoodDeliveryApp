import db from '../db/index.js'
import { getItemByTypequery } from '../db/queries.js';


export const getItemByType = async(item_type)=>{
        const results = await db(getItemByTypequery,[item_type]);

        return results.rows[0];

}