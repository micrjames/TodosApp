import { Response } from "express";   
import path from "path";
import { utils } from "../../utils.js";
import { forms } from "../../data/forms/forms.js";
import { send } from "./send.js";

export const sendLS = (res: Response, status: number, msgs: {
														 err_msg: string;
														 required_msg: string;	
													  }) => {
   res.status(status).render(path.resolve(utils.__dirname, "./public/views/l_s.ejs"), {
		 err_msg: msgs.err_msg,
		 header: "Login/Signup Below",
		 login: "Login",
		 signup: "Signup",
		 forms,
		 required_msg: msgs.required_msg
   });
};
