import db from '../db/index.js'
import { getOrganizationByIdquery } from '../db/queries.js';
export const getOrganizationById = async(organization_id)=>{
    const results= await db(getOrganizationByIdquery,[organization_id]);

    return results.rows[0];
}