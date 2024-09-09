import { Request, Response } from "express";
import { sendHome } from "./utils/home.js";

export const home = {
   getIndex: (_: Request, res: Response) => {
	  sendHome(res);
   }
};  
