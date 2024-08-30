import express from "express";
import { todosController } from "../controllers/todos.js";
export const todosRoutes = express.Router();
todosRoutes.get("/", todosController.getTodos);
