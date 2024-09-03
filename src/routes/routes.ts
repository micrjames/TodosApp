import { routesIter } from "./routesIter";
import { home } from "../controllers/home.js";
import { about } from "../controllers/about.js";
import { l_s } from "../controllers/l-s.js";
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
	  {
		 label: "l-s",
		 route: "/l-s",
		 controller: l_s.getIndex
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
