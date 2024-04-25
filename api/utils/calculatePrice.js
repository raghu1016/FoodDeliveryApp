import { getOrganizationById } from "../models/organization.model.js";
import { getItemByType } from "../models/item.model.js";
import { getPricingDetails } from "../models/price.model.js";

export const calculatePrice = async (organization_id,zone,item_type,total_distance)=>{

    try{
        const organization = await getOrganizationById(organization_id);

        if(!organization){
            throw new Error('Failed to get organization');
        }

        const item = await getItemByType(item_type);

        if(!item){
            throw new Error('Failed to get item');
        }
    
        const pricing = await getPricingDetails(organization_id,zone,item.id);

        if(!pricing){
            throw new Error('Failed to get pricing');
        }

        let total_price = pricing.fixed_price;

        if(total_distance>pricing.base_distance_in_km){
            const extra_distance = total_distance-pricing.base_distance_in_km;
            if(item_type ==="perishable"){
                total_price+=extra_distance*pricing.km_price;
            }
            else if (item_type ==="non-perishable"){
                total_price+=extra_distance*pricing.km_price;
            }
        }

        return total_price;
    }
    catch(err){
        throw new Error('Failed to calculate price');
    }
    
    
}