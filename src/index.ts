import express, { Express } from "express";
import { pageRoutes } from "./routes/pageRoutes.js";
import { todosRoutes } from "./routes/todosRoutes.js";
import { utils } from "./utils.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(cors({ origin: `http://localhost:${PORT}`  }));
app.use(express.static(path.join(utils.__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", pageRoutes);
app.use("/todos", todosRoutes);
   
app.listen(PORT, () => {
   console.log(`[server]: Server is running at port: ${PORT}`);
});
