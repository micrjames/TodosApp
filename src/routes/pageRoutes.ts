import express from "express";
import { home } from "../controllers/home.js";
import { about } from "../controllers/about.js";
import { defaultController } from "../controllers/default.js";

export const pageRoutes = express.Router();

pageRoutes.get("/", home.getIndex);
pageRoutes.get("/about", about.getIndex);
pageRoutes.get(/[^(/home|/about|/todos)]/, defaultController.getIndex);   
