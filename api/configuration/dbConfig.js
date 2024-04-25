import dotenv from 'dotenv';

dotenv.config();
const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB_Name,
    password: process.env.DB_Password,
    port: process.env.DB_PORT,
    ssl: true,
    connectionString:`postgres://${process.env.USER}:${process.env.DB_Password}@${process.env.HOST}:5432/${process.env.DB_Name}` // e.g. postgres://user:password@host:5432/database
}

export default config;