import express from "express";
import { getUsuarios } from "../controllers/usuario.js";

const router = express.Router();

router.get("/", getUsuarios);

export default router;