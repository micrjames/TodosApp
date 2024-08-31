import { Request, Response } from "express";
import path from "path";
import { utils } from "../utils.js";

export const defaultController = {
   getIndex: (_: Request, res: Response) => {
	  // res.render("index.ejs");
	  res.status(404).sendFile(path.resolve(utils.__dirname, "./public/oops.html"));
   }
};  
