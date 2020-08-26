import IConnection from "../Interfaces/IConnection";
import dotenv from 'dotenv';
dotenv.config();

export const log : IConnection = {
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_ROOT_PASSWORD,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_ROOT_USERNAME
};