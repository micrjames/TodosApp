import { NextFunction, Request, Response } from "express";
import { User } from "./data/users/userIter.js";
import bcrypt from "bcryptjs";

export const authed = (users: User[]) => { 
    return (req: Request, _: Response, next: NextFunction) => {
	   req.authed = false;
	   const { username, password } = req.body;
	   const user = users.filter(user => user.username === username).pop();
	   if(user) {
		   req.authed = true;
		   req.user = user;
	   }
	   next();
	};
};
