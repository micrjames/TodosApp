import { Response } from "express";   
import { data } from "../../data/controllers/data.js"; 
import { send } from "./send.js";

export const sendHome = (res: Response) => {
   send(res, {
	  status: 200,
	  view: "./public/views/home.ejs",
	  data: data.home
   });
};
