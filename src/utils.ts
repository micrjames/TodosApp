import { routeIter } from "./routes/routeIter.js";

export const utils = {
   getDefaultRegexp : (...routes: routeIter[][]): RegExp => {
	  let regexpStr = "[^(";

	  // regexpStr += `/${routes[0][0].label}`;
	  for(let j = 0; j < routes.length; j++) {
		 for(let i = 0; i < routes[j].length; i++) {
			const label = routes[j][i].label;
			if(label !== "") regexpStr += `|`;
			regexpStr += `/${label}`;
		 }
	  }

	  regexpStr += ")]";
	  
	  return new RegExp(regexpStr);
   }
};
