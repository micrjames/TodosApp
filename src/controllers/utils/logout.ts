import { Response } from "express";   
import { send } from "./send.js";

export const sendLogout = (res: Response, name: {
   first_name: string;
   last_name: string;
} = { first_name: "", last_name: ""}) => {
   send(res, {
	  status: 200,
	  view: "./public/views/logout.ejs",
	  data: name 
   });
};
