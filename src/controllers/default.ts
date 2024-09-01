import { Request, Response } from "express";
import path from "path";
import { utils } from "../utils.js";

export const defaultController = {
   getIndex: (_: Request, res: Response) => {
	  res.status(404).render(path.resolve(utils.__dirname, "./public/views/oops.ejs"));
   }
};  
