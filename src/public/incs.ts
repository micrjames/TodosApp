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
	inputs.forEach((input, idx) => {
	   utils.doInput(idx, input, forms.login);
	});
});

export { loginForm, signupForm, loginToggleBtn, signupToggleBtn, signupLoginErrMsg };
