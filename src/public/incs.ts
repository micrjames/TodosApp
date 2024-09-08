import { Form } from "./Form/Form.js";
import { forms } from "./data/forms/forms.js";
import { utils } from "./utils.js";

const body = document.body;
const main = body.firstElementChild;

const signupLoginErrMsg = main?.children.namedItem("signup-login-error-message");

const signupLogin = main?.children.namedItem("signup-login");
const signupLoginHdr = signupLogin?.children.namedItem("signup-login-hdr");
const signupLoginHdrBtnGroup = signupLoginHdr?.children.namedItem("signup-login-hdr-btn-group");

const loginToggleBtn = signupLoginHdrBtnGroup?.children[0];
const signupToggleBtn = signupLoginHdrBtnGroup?.children[1];

const signupForm = new Form(document.forms[0]);
const loginForm = new Form(document.forms[1], inputs => {
    const loginFormData = forms.login;
	inputs.forEach((input, idx) => {
	   const inputErrs = loginFormData[idx].errs;
	   input.addEventListener("input", _ => {
		  const value = input.value;
		  const label = input.previousElementSibling;
		  if(value) label?.classList.remove('required');
		  else label?.classList.add('required');
		  const errorMsg = input.nextElementSibling as HTMLElement;
		  const valid = input.validity.valid;
		  inputErrs.forEach((inputErr, idx) => {
			 const errorMsgListItem = errorMsg?.children[idx] as HTMLElement;
			 utils.checkAgainstRegExp(inputErr.pattern, value, passed => {
				if(passed) {
				   utils.changeClass(errorMsgListItem, 'x', 'checked');
				} else {
				   utils.changeClass(errorMsgListItem, 'checked', 'x');
				}
			 });
		  });
		  if(valid) {
			 errorMsg.style.borderColor = 'green';
			 errorMsg.style.backgroundColor = 'gray';
			 for(const li of errorMsg.children) {
				(li as HTMLElement).style.backgroundColor = 'gray';
				const hr = li.lastElementChild as HTMLElement;
				hr.style.color = 'green';
			 }
		  } else {
			 errorMsg.style.borderColor = 'red';
			 errorMsg.style.backgroundColor = 'lightred';
			 for(const li of errorMsg.children) {
				(li as HTMLElement).style.backgroundColor = 'lightred';
				const hr = li.lastElementChild as HTMLElement;
				hr.style.color = 'red';
			 }
		  }
	   });
	});
});

export { loginForm, signupForm, loginToggleBtn, signupToggleBtn, signupLoginErrMsg };
