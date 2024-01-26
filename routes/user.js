import express from "express";

import {  signin, signup } from "../controllers/user.js";
import { userValidator, validate } from "../middlewares/validator.js";

const router = express.Router();

router.post("/create", userValidator, validate, signup);
router.post('/signin', signin);

export default router;
