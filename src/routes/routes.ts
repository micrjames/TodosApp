import { routesIter } from "./routesIter";
import { home } from "../controllers/home.js";
import { about } from "../controllers/about.js";
import { todosController } from "../controllers/todos.js";

export const routes: routesIter = {
   "pages": [
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
   ],
   "todos": [
	  {
		 label: "todos",
         route: "/",
         controller: todosController.getTodos
      },
   ]
};
