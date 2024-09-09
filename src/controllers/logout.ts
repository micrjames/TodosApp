import { Request, Response } from "express";
import { sendLogout } from "../controllers/utils/logout.js";

export const logout = {
   getIndex: (_: Request, res: Response) => {
	  sendLogout(res);
   }
};  
