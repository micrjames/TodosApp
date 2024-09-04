import { loginForm, signupForm, loginToggleBtn, signupToggleBtn, signupLoginErrMsg } from "./incs.js";
import { toggleFormState } from "./loginSignup.js";

const loginState = [loginToggleBtn, loginForm];
const signupState = [signupToggleBtn, signupForm];

if(loginState !== undefined && signupState !== undefined) {
   toggleFormState(loginState, signupState);
   loginToggleBtn?.addEventListener("click", event => {
	   event.preventDefault();
	   toggleFormState(loginState, signupState);
	   signupForm.reset();
   });

   signupToggleBtn?.addEventListener("click", event => {
	   event.preventDefault();
	   toggleFormState(signupState, loginState);
	   loginForm.reset();
   });
}
