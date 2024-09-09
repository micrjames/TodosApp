import { Request, Response } from "express";
import path from "path";
import { utils } from "../utils.js";
import { forms } from "../data/forms/forms.js";
import bcrypt from "bcryptjs";

export const l_s = {
   getIndex: (_: Request, res: Response) => {
	  res.status(200).render(path.resolve(utils.__dirname, "./public/views/l_s.ejs"), {
		 err_msg: "",
         header: "Login/Signup Below",
		 login: "Login",
		 signup: "Signup",
		 forms,
		 required_msg: "denotes a field needing input"
	  });
   },
   postLogin: (req: Request, res: Response) => {                                
	  if(req.authed)
         res.status(200).render(path.resolve(utils.__dirname, "./public/views/logout.ejs"), {
			first_name: req.user.first_name,
            last_name: req.user.last_name
         });
      else
         res.status(401).render(path.resolve(utils.__dirname, "./public/views/l_s.ejs"), {
            err_msg: "user is not registered",
            header: "Login/Signup Below",
            login: "Login",
            signup: "Signup",
            forms,
			required_msg: ""
		 });
   },
   postLogout: (req: Request, res: Response) => {
	  res.status(200).render(path.resolve(utils.__dirname, "./public/views/home.ejs"), {
		 view: "View Todos",
		 about: "About Todos"
	  });
	  req.authed = false;
   },
   postSignup: (req: Request, res: Response) => {
	  console.log(res, req);
   }
};  
