import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import createRoutes from "./routes/create.js";
import readRoutes from "./routes/read.js";

const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/create", createRoutes);
app.use("/api/read", readRoutes);

export default app;
