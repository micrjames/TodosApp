import express, { Express, NextFunction, Request, Response } from "express";
import { pageRoutes } from "./routes/pageRoutes.js";
import { todosRoutes } from "./routes/todosRoutes.js";
import { utils } from "./utils.js";
import { users } from "./data/users/users.js";
import dotenv from "dotenv";
import path from "path";
import bcrypt from "bcryptjs";
import { forms } from "./data/forms/forms.js";

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      authed: boolean;
	  user: {
		 first_name: string;
		 last_name: string;
		 username: string;
		 password: string;
		 confirm_password: string;
		 email: string; 
	  }
    }
  }
}

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(utils.__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", pageRoutes);
app.use("/todos", todosRoutes);

const authed = (req: Request, _: Response, next: NextFunction) => {
    req.authed = false;
    const { username, password } = req.body;
    const user = users.filter(user => user.username === username).pop();
	if(user) {
		req.authed = true;
		req.user = user;
	}
	next();
};

app.post("/login", authed, (req: Request, res: Response) => {
	if(req.authed)
	   res.status(200).render(path.resolve(utils.__dirname, "./public/views/logout.ejs"), {
		  first_name: req.user.first_name,
		  last_name: req.user.last_name
	   });
	else
	   res.status(200).render(path.resolve(utils.__dirname, "./public/views/l_s.ejs"), {
			   err_msg: "user is not registered",
			   header: "Login/Signup Below",
			   login: "Login",
			   signup: "Signup",
			   forms
	  });
});
app.post("/signout", (req: Request, res: Response) => {
   res.status(200).render(path.resolve(utils.__dirname, "./public/views/home.ejs"), {
	  view: "View Todos",
	  about: "About Todos"
   });
   req.authed = false;
});
app.post("/signup", (__: Request, _: Response) => {
});

app.listen(PORT, () => {
   console.log(`[server]: Server is running at port: ${PORT}`);
});
