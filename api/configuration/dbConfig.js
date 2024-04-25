import dotenv from 'dotenv';

dotenv.config();
const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB_Name,
    password: process.env.DB_Password,
    port: process.env.DB_PORT,
}

export default config;