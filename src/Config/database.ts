import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { User } from "@Models/Entity/User";
import { Transaction } from "@Models/Entity/Transaction";
import { DailySpending } from "@Models/Entity/DailySpending";
import { AverageSpendingDay } from "@Models/Entity/AverageSpending";

dotenv.config();

const { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST, DB_PORT } = process.env;

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
