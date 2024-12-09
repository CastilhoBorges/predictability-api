import express, { urlencoded } from "express";
import router from "@Routes/Index.routes";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/", router);

export default app;
