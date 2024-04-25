import dotenv from 'dotenv';

dotenv.config();
const config = {
    user: 'postgres',
    host: 'localhost',
    database: process.env.DB_Name,
    password: process.env.DB_Password,
    port: process.env.DB_PORT,
}

export default config;