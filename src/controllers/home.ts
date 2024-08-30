import { Request, Response } from "express";

export const home = {
   getIndex: (_: Request, res: Response) => {
	  // res.render("index.ejs");
	  res.status(200).send("Home Page.");
   }
};  
