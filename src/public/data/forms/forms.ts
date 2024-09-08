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
			 { 
				msg: "Must start with a letter (lowercase or capital).",
				pattern: "^[a-zA-Z]"
			 },
			 { 
				msg: "Must have at least five characters (letters or numbers).",
				pattern: "[a-zA-Z0-9]{5}"
			 }
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
			 { 
				msg: "Must have more than seven characters.",
				pattern: "[^#]{7}"
			 },
			 { 
				msg: "Must have at least one digit.",
				pattern: "[0-9]{1}"
			 },
			 { 
				msg: "Must contain at least uppercase character.",
				pattern: "[A-Z]{1}"
			 }
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
			 name: "first_name",
			 type: "text",
			 pattern: "^[A-Z][a-z]+(?:\s)?$",
			 placeholder: "i.e. Enter your First Name Here"
		  },
		  errs: [
			 { 
				msg: "Must contain one name.",
				pattern: ""
			 },
			 { 
				msg: "Must contain only letters.",
				pattern: ""
			 },
			 { 
				msg: "Must start with a capital letters",
				pattern: ""
			 },
		  ]
	  },
	  {
		  label: {
			 for: "signup-form-last-name",
			 text: "Last Name"
		  },
		  input: {
			 id: "signup-form-last-name",
			 name: "last_name",
			 type: "text",
			 pattern: "^[A-Z][a-z]+(?:\s)?$",
			 placeholder: "i.e. Enter your Name Last Here"
		  },
		  errs: [
			 { 
				msg: "Must contain one name.",
				pattern: ""
			 },
			 { 
				msg: "Must contain only letters.",
				pattern: ""
			 },
			 { 
				msg: "Must start with a capital letters",
				pattern: ""
			 },
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
		   { 
			  msg: "Must start with a letter (lowercase or capital).",
			  pattern: ""
		   },
		   { 
			  msg: "Must have at least five character.",
			  pattern: ""
		   }
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
		   { 
			  msg: "Must have more than seven characters.",
			  pattern: ""
		   },
		   { 
			  msg: "Must have at least one digit.",
			  pattern: ""
		   },
		   { 
			  msg: "Must contain at least uppercase character.",
			  pattern: ""
		   }
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
		   { 
			  msg: "Must have more than seven characters",
			  pattern: ""
		   },
		   { 
			  msg: "Must have at least one digit.",
			  pattern: ""
		   },
		   { 
			  msg: "Must contain at least uppercase character.",
			  pattern: ""
		   }
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
		   { 
			  msg: "Must contain at least one word character.",
			  pattern: ""
		   },
		   { 
			  msg: "May, then, contain one of the following: +, ., a word character, or a hyphen.",
			  pattern: ""
		   },
		   { 
			  msg: "Must, then, contain the @ symbol.",
			  pattern: ""
		   },
		   { 
			  msg: "Then, finally, must contain a series of extension characters following a . symbol.",
			  pattern: ""
		   }
		]
	  }
	 ]
};
