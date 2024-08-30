import express, { Express } from "express";
import { pageRoutes } from "./routes/pageRoutes.js";
import { todosRoutes } from "./routes/todosRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", pageRoutes);
app.use("/todos", todosRoutes);
   
app.listen(PORT, () => {
   console.log(`[server]: Server is running at port: ${PORT}`);
});
