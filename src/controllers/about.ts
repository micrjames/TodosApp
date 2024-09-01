import { Request, Response } from "express";
import path from "path";
import { utils } from "../utils.js";

export const about = {
   getIndex: (_: Request, res: Response) => {
	  res.status(200).render(path.resolve(utils.__dirname, "./public/views/about.ejs"));
   }
};  
