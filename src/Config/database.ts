import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { User } from "@Models/User.js";
import { Transaction } from "@Models/Transaction.js";
import { DailySpending } from "@Models/DailySpending.js";
import { AverageSpendingDay } from "@Models/AverageSpending.js";

dotenv.config();

const { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST, DB_PORT } = process.env;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  dialect: "postgres",
  port: Number(DB_PORT) || 5432,
});

sequelize.addModels([User, Transaction, AverageSpendingDay, DailySpending]);

export default sequelize;
