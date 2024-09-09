import { Request, Response } from "express";
import { sendHome } from "../controllers/utils/home.js";
import { sendLogout } from "../controllers/utils/logout.js";
import {sendLS } from "../controllers/utils/l_s.js";

export const l_s = {
   getIndex: (_: Request, res: Response) => {
	  sendLS(res, 200, {
		 err_msg: "",
		 required_msg: "denotes a field needing input"
	  });
   },
   postLogin: (req: Request, res: Response) => {                                
	  req.authed ?
		 sendLogout(res, {
			first_name: req.user.first_name,
            last_name: req.user.last_name
	  	 })
		 :
		 sendLS(res, 401, {
            err_msg: "user is not registered",
			required_msg: ""
		 });
   },
   postLogout: (req: Request, res: Response) => {
	  sendHome(res);
	  req.authed = false;
   },
   postSignup: (req: Request, res: Response) => {
	  console.log(res, req);
   }
};  
