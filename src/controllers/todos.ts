import { Request, Response } from "express";
import { todos } from "../data/data.js";

export const todosController = {
   getTodos: (_: Request, res: Response) => {
	  res.status(200).json(todos);
   }
};  
