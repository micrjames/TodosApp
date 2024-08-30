import { routeIter } from "./routeIter";
import { home } from "../controllers/home.js";
import { about } from "../controllers/about.js";
import { todosController } from "../controllers/todos.js";

export const routes: routeIter[] = [
   {
	  label: "",
	  route: "/",
      controller: home.getIndex
   },
   {
	  label: "about",
	  route: "/about",
      controller: about.getIndex
   },
   {
	  label: "todos",
	  route: "/",
      controller: todosController.getTodos
   },
];
