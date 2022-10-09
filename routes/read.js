import express from "express";
import { readBirthday } from "../controllers/read.js";

const router = express.Router();

router.get("/birthday", readBirthday);

export default router;
