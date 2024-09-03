import { loginForm, signupForm, loginToggleBtn, signupToggleBtn } from "./incs.js";
import { toggleFormState } from "./loginSignup.js";
const loginState = [loginToggleBtn, loginForm];
const signupState = [signupToggleBtn, signupForm];
if (loginState !== undefined && signupState !== undefined) {
    toggleFormState(loginState, signupState);
    loginToggleBtn === null || loginToggleBtn === void 0 ? void 0 : loginToggleBtn.addEventListener("click", function () {
        toggleFormState(loginState, signupState);
    });
    signupToggleBtn === null || signupToggleBtn === void 0 ? void 0 : signupToggleBtn.addEventListener("click", function () {
        toggleFormState(signupState, loginState);
    });
}
