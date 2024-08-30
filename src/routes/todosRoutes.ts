import express from "express";
import { routes } from "./routes.js";
export const todosRoutes = express.Router();

routes.todos.forEach(todo => {
   todosRoutes.get(todo.route, todo.controller);
});
