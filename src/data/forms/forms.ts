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
			 pattern: "^(?!.*[#])(?=.*[A-Z])(?=.*[0-9]).{8,}",

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
			 for: "signup-form-first-name",
			 text: "First Name"
		  },
		  input: {
			 id: "signup-form-first-name",
			 name: "first-name",
			 type: "text",
			 pattern: "^[A-Z][a-z]+(?:\s)?$",
			 placeholder: "i.e. Enter your First Name Here"
		  },
		  errs: [
			 { msg: "Must contain one name." },
			 { msg: "Must contain only letters." },
			 { msg: "Must start with a capital letters" },
		  ]
	  },
	  {
		  label: {
			 for: "signup-form-last-name",
			 text: "Last Name"
		  },
		  input: {
			 id: "signup-form-last-name",
			 name: "last-name",
			 type: "text",
			 pattern: "^[A-Z][a-z]+(?:\s)?$",
			 placeholder: "i.e. Enter your Name Last Here"
		  },
		  errs: [
			 { msg: "Must contain one name." },
			 { msg: "Must contain only letters." },
			 { msg: "Must start with a capital letters" },
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
            pattern: "^(?!.*[#])(?=.*[A-Z])(?=.*[0-9]).{8,}$",
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
		   pattern: "^(?!.*[#])(?=.*[A-Z])(?=.*[0-9]).{8,}$",
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
           pattern: "\w+{3,}@{4, 8}\.(com|org|net)$",
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
