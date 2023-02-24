import { createPool } from "mysql2/promise";

export const pool = new createPool({
    host: 'localhost',
    user: 'js',
    password: 'js',
    database: 'jswebapicountry'
});