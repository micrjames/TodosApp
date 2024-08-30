import express from "express";
import { todosController } from "../controllers/todos.js";
import { routes } from "./routes.js";
export const todosRoutes = express.Router();
todosRoutes.get(routes[2].route, routes[2].controller);
