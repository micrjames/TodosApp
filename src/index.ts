import express, { Express } from "express";
import { authed } from "./middleware.js";
import { pageRoutes } from "./routes/pageRoutes.js";
import { todosRoutes } from "./routes/todosRoutes.js";
import { l_s } from "./controllers/l-s.js";
import { utils } from "./utils.js";
import { users } from "./data/users/users.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(utils.__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", pageRoutes);
app.use("/todos", todosRoutes);

app.post("/login", authed(users), l_s.postLogin);
app.post("/logout", l_s.postLogout);
app.post("/signup", l_s.postSignup);

app.listen(PORT, () => {
   console.log(`[server]: Server is running at port: ${PORT}`);
});
