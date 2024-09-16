import { NextFunction, Request, Response } from "express";
import { User } from "./data/users/userIter.js";
import bcrypt from "bcryptjs";

export const authed = () => { 
    return (req: Request, _: Response, next: NextFunction) => {
	   req.authed = false;
	   const { username, password } = req.body;

	   const userFiltered: User = users.filter(user => user.username === username).pop();
	   if(userFiltered) {
		   req.authed = true;
		   req.user = userFiltered;
	   }
	   next();
	};
};
