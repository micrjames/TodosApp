import { loginForm, signupForm, loginToggleBtn, signupToggleBtn, signupLoginErrMsg } from "./incs.js";
import { toggleFormState } from "./loginSignup.js";

const loginState = [loginToggleBtn, loginForm];
const signupState = [signupToggleBtn, signupForm];

if(loginState !== undefined && signupState !== undefined) {
   toggleFormState(loginState, signupState);
   loginToggleBtn?.addEventListener("click", function() {
	   toggleFormState(loginState, signupState);
   });

   signupToggleBtn?.addEventListener("click", function() {
	   toggleFormState(signupState, loginState);
   });
}
