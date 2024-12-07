import express from "express";
import dotenv from "dotenv";

dotenv.config();

express.json();

const app = express();
const PORT = process.env.APP_PORT;

app.listen(PORT, () => console.log(`API listening in port ${PORT}`));
