import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

const { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST, DB_PORT } = process.env;

export const sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  dialect: "postgres",
  port: Number(DB_PORT) || 5432,
  models: [__dirname + "/Models"],
});
