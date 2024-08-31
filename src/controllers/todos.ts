import { Request, Response } from "express";
import { todos } from "../data/data.js";
import path from "path";
import { utils } from "../utils.js";

export const todosController = {
   getTodos: (_: Request, res: Response) => {
	  res.status(200).render(path.resolve(utils.__dirname, "./public/todos.ejs"));
   }
};  
