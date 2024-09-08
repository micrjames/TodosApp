import { errMsg, IFormControl } from "./data/forms/formIter.js";

export const utils = {
   changeClass : (context: HTMLElement, currClass: string, newClass: string) => {
	   context.classList.remove(currClass);
	   context.classList.add(newClass);
   },
   checkAgainstRegExp: (pattern: string, value: string, cb: (passesTest: boolean) => void) => {
	   const regExp = new RegExp(pattern);
	   const passesTest = regExp.test(value);
	   cb(passesTest);
   },
   togglePassword: (input: HTMLFormElement, target: HTMLElement) => {
	   if(target.classList.contains('hide')) {
		  utils.changeClass(target, 'hide', 'show');
		  input.type = 'text';
	   }
	   else if(target.classList.contains('show')) {
		  utils.changeClass(target, 'show', 'hide');
		  input.type = 'password';
	   }
   },
   setPanel: (context: HTMLElement, color: string) => {
	   context.style.borderColor = color;
	   for(const child of context.children) {
		  (child.lastElementChild as HTMLElement).style.color = color;
	   }
   },
   changePanel: (input: HTMLFormElement, context: HTMLElement, colors: {valid: string; invalid: string}) => {
	   let color: string;
	   if(input.validity.valid) {
		  color = colors.valid;
	   } else {
		  color = colors.invalid;
	   }
	   utils.setPanel(context, color);
   },
   changeOnRegExpPass: (passed: boolean, context: HTMLElement) => {
	   let currClass: string;
	   let nextClass: string;
	   if(passed) {
		  currClass = 'x';
		  nextClass = 'checked';
	   } else {
		  currClass = 'checked';
		  nextClass = 'x';
	   }
	   utils.changeClass(context, currClass, nextClass);
   },
   doOnInput: (input: HTMLFormElement, context: HTMLElement, errs: errMsg[]) => {
	   const value = input.value;
	   const label = input.previousElementSibling;
	   if(value) label?.classList.remove('required');
	   else label?.classList.add('required');
	   errs.forEach((inputErr, idx) => {
		  const errorMsgListItem = context?.children[idx] as HTMLElement;
		  utils.checkAgainstRegExp(inputErr.pattern, value, passed => {
			 utils.changeOnRegExpPass(passed, errorMsgListItem);
		  });
	   });
	   utils.changePanel(input, context, { valid: 'green', invalid: 'red' });
   },
   doInput: (idx: number, input: HTMLFormElement, data: IFormControl[]) => {
	   const inputErrs = data[idx].errs;
	   let errorMsg: HTMLElement;
	   const inputNextSibling = input.nextElementSibling as HTMLElement;
	   if(inputNextSibling?.classList.contains('toggle_password')) {
		  errorMsg = inputNextSibling?.nextElementSibling as HTMLElement;
		  inputNextSibling.addEventListener("click", event => {
			 const target = event.target as HTMLElement;
			 utils.togglePassword(input, target);
		  });
	   } else {
		  errorMsg = inputNextSibling;
	   }
	   input.addEventListener("input", _ => {
		  utils.doOnInput(input, errorMsg, inputErrs);
	   });
   }
};
