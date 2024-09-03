import { IForms } from "./formIter";

export const forms: IForms = {
	 login: [{
		  label: {
			 for: "login-form-username",
			 text: "User Name"
		  },
		  input: {
			 id: "login-form-username",
			 name: "username",
			 type: "text",
			 pattern: "^[a-zA-Z][a-zA-Z0-9]{4,}$",
			 placeholder: "i.e. Enter your User Name Here"
		  },
		  errs: [
			 { msg: "Must start with a letter (lowercase or capital)." },
			 { msg: "Must have at least five character." }
		  ]
	  },
	  {
		  label: {
			 for: "login-form-password",
			 text: "Password"
		  },
		  input: {
			 id: "login-form-password",
			 name: "password",
			 type: "password",
			 pattern: "^(?!.*[#!])(?=.*[A-Z])(?=.*[0-9]).{8,}",
			 placeholder: "i.e. Enter your Password Here"
		  },
		  errs: [
			 { msg: "Must have more than seven characters." },
			 { msg: "Must have at least one digit."},
			 { msg: "Must contain at least uppercase character." }
		  ]
	  }
	 ],
	 signup: [{
		  label: {
			 for: "signup-form-name",
			 text: "Name"
		  },
		  input: {
			 id: "signup-form-name",
			 name: "name",
			 type: "text",
			 pattern: "^[a-zA-Z]+(?:\s[a-zA-Z]+)?$",
			 placeholder: "i.e. Enter your Name Here"
		  },
		  errs: [
			 { msg: "Must contain at least two names (first and last)." },
			 { msg: "Must contain a space." }
		  ]
	  },
	  {
		label: {
		   for: "signup-form-username",
		   text: "User Name"
		},
		input: {
           id: "signup-form-username",
           name: "username",
           type: "text",
           pattern: "^[a-zA-Z][a-zA-Z0-9]{4,}$",
           placeholder: "i.e. Enter your User Name Here",
		},
		errs: [
		   { msg: "Must start with a letter (lowercase or capital)." },
		   { msg: "Must have at least five character." }
		]
	  },
	  {
		label: {
		   for: "signup-form-password",
		   text: "Password"
		},
		input: {
            id: "signup-form-password",
            name: "password",
            type: "password",
            pattern: "^(?!.*[#!])(?=.*[A-Z])(?=.*[0-9]).{8,}$",
            placeholder: "i.e. Enter your Password Here"
		},
		errs: [
		   { msg: "Must have more than seven characters." },
		   { msg: "Must have at least one digit." },
		   { msg: "Must contain at least uppercase character." }
		]
	  },
	  {
		label: {
		   for: "signup-form-password-confirm",
		   text: "Confirm Password"
		},
		input: {
		   id: "signup-form-password",
		   name: "confirm_password",
		   type: "password",
		   pattern: "^(?!.*[#!])(?=.*[A-Z])(?=.*[0-9]).{8,}$",
		   placeholder: "i.e. Confirm your Password Here",
		},
		errs: [
		   { msg: "Must have more than seven characters" },
		   { msg: "Must have at least one digit." },
		   { msg: "Must contain at least uppercase character." }
		]
	  },
	  {
		label: {
		   for: "signup-form-email",
		   text: "Email"
		},
		input: {
		   id: "signup-form-email",
           name: "email",
           type: "email",
           pattern: "^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$",
           placeholder: "i.e. Enter an Email"
		},
		errs: [
		   { msg: "Must contain at least one word character." },
		   { msg: "May, then, contain one of the following: +, ., a word character, or a hyphen." },
		   { msg: "Must, then, contain the @ symbol." },
		   { msg: "Then, finally, must contain a series of extension characters following a . symbol." }
		]
	  }
	 ]
};
