import { Request, Response } from "express";

export const defaultController = {
   getIndex: (_: Request, res: Response) => {
	  // res.render("index.ejs");
	  res.status(404).send("<h1>resource not found</h1>");
   }
};  
