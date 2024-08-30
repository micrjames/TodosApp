import { routeIter } from "./routes/routeIter.js";

export const utils = {
   getDefaultRegexp : (routes: routeIter[]): RegExp => {
	  let regexpStr = "[^(";

	  regexpStr += `/${routes[0].label}`;
	  for(let i = 0; i < routes.length; i++) {
		 regexpStr += `|`;
		 regexpStr += `/${routes[i].label}`;
	  }

	  regexpStr += ")]";
	  
	  return new RegExp(regexpStr);
   }
};
