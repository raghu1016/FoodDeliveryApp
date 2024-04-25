import pg from 'pg';
import config from '../configuration/dbConfig.js'

const Pool = pg.Pool;
const pool = new Pool(config);

const query = (text,params)=>{
    return  pool.query(text,params);
}

export default query;