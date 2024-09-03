import { Request, Response } from "express";
import path from "path";
import { utils } from "../utils.js";
import { forms } from "../data/data.js";

export const l_s = {
   getIndex: (_: Request, res: Response) => {
	  res.status(200).render(path.resolve(utils.__dirname, "./public/views/l_s.ejs"), {
         header: "Login/Signup Below",
		 login: "Login",
		 signup: "Signup",
		 forms
	  });
   }
};  
