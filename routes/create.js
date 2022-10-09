import express from "express";
import { createBirthday } from "../controllers/create.js";

const router = express.Router();

router.post("/birthday", createBirthday);

export default router;
