export const getOrganizationByIdquery= 'SELECT * FROM organization WHERE id = $1';
export const getItemByTypequery = 'SELECT * FROM item WHERE type = $1';
export const getPricingquery = 'SELECT * from pricing WHERE organization_id = $1 AND zone = $2 and item_id = $3';