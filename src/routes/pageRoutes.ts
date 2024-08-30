import express from "express";
import { defaultController } from "../controllers/default.js";
import { routes } from "./routes.js";
import { utils } from "../utils.js";

export const pageRoutes = express.Router();

routes.pages.forEach(page => {
   pageRoutes.get(page.route, page.controller);
});
pageRoutes.get(utils.getDefaultRegexp(routes.pages, routes.todos), defaultController.getIndex);   
