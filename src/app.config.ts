import express, { urlencoded } from "express";
import routes from "@Routes/index.routes";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/", routes);

export default app;
