import { Request, Response } from "express";
import path from "path";
import { utils } from "../utils.js";

export const home = {
   getIndex: (_: Request, res: Response) => {
	  // res.render("index.ejs");
	  res.status(200).sendFile(path.resolve(utils.__dirname, "./public/main.html"));
   }
};  
