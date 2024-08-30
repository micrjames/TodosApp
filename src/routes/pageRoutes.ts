import express from "express";
import { defaultController } from "../controllers/default.js";
import { routes } from "./routes.js";
import { utils } from "../utils.js";

export const pageRoutes = express.Router();

pageRoutes.get(routes[0].route, routes[0].controller);
pageRoutes.get(routes[1].route, routes[1].controller);
pageRoutes.get(utils.getDefaultRegexp(routes), defaultController.getIndex);   
