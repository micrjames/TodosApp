import { Response } from "express";   
import { forms } from "../../data/forms/forms.js";
import { send } from "./send.js";

export const sendLS = (res: Response, status: number, msgs: {
														 err_msg: string;
														 required_msg: string;	
													  }) => {
   send(res, { 
	  status,
	  view: "./public/views/l_s.ejs",
	  data: {
		 err_msg: msgs.err_msg,
		 header: "Login/Signup Below",
		 login: "Login",
		 signup: "Signup",
		 forms,
		 required_msg: msgs.required_msg
	  }
   });														 
};
