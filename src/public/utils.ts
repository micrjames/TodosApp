export const utils = {
   changeClass : (context: HTMLElement, currClass: string, newClass: string) => {
	   context.classList.remove(currClass);
	   context.classList.add(newClass);
   },
   checkAgainstRegExp: (pattern: string, value: string, cb: (passesTest: boolean) => void) => {
	   const regExp = new RegExp(pattern);
	   const passesTest = regExp.test(value);
	   cb(passesTest);
   }
};

