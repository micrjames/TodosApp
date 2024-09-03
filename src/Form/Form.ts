import { dataObj } from "./utils/utils";

export class Form {
   private formEl: HTMLFormElement;
   private fieldInputs: HTMLFormElement[];
   private _textareas: HTMLTextAreaElement[];
   private submitButton!: HTMLButtonElement;
   private _data: dataObj = {};
   
   constructor(form: HTMLFormElement, cb: (data: dataObj) => void) {
	  this.formEl = form;
	  this.fieldInputs = this.inputs;
          this._textareas = this.textareas;

	  this.formEl.addEventListener("submit", event => {
		 event.preventDefault();

		 this.inputsNames.forEach((name, i) => {
			if(name)
			   this._data[name] = this.values[i];
		 });
         this.textareasNames.forEach((name, i) => {
			if(name)
			   this._data[name] = this._textareas[i].value;
		 });
		 cb(this._data);
	  });
   }
   private formElements(type: string): Element[] {
	  const fieldEls: HTMLFormControlsCollection = this.formEl.elements;
	  let fieldElements: Element[] = [];
	  for(let i = 0; i < fieldEls.length; i++) {
		 if(fieldEls[i].nodeName === type)
			fieldElements = [...fieldElements, fieldEls[i]];
	  }
	  return fieldElements;
   }
   get inputs(): HTMLFormElement[] {
	  let fieldInputs: Element[] = this.formElements("INPUT");
	  return fieldInputs as HTMLFormElement[];
   }
   get textareas(): HTMLTextAreaElement[] {
	  let textareas: Element[] = this.formElements("TEXTAREA");
	  return textareas as HTMLTextAreaElement[];
   }
   get textareasNames(): (string | undefined)[] {
	  return this._textareas.map(textarea => {
		 return textarea.attributes.getNamedItem("name")?.value;
	  });
   }
   get btns(): HTMLButtonElement[] {
	  let btns: HTMLButtonElement[] = [];
	  btns = this.formElements("BUTTON") as HTMLButtonElement[];
	  return btns;
   }
   private whichBtn(type: string): (HTMLButtonElement | null) {
	  let button: (HTMLButtonElement | null) = null;
	  for(let i = 0; i < this.btns.length; i++)
		 if(this.btns[i].type == type)
			button = this.btns[i];
	  return button;
   }
   reset() {
	  this.form.reset();
   }
   get resetBtn(): (HTMLButtonElement | null) {
	  return this.whichBtn("reset");
   }
   get submitBtn(): (HTMLButtonElement | null) {
	  return this.whichBtn("submit");
   }
   get values(): (string | number)[] {
		 let values: (string | number)[] = [];
		 for(let i = 0; i < this.inputs.length; i++)
			values = [...values, this.inputs[i].value];
		 return values;
   }
   get inputsNames(): (string | undefined)[] {
	  return this.fieldInputs.map(fieldInput => {
		 return fieldInput.attributes.getNamedItem("name")?.value;
	  });
   }
   get data(): dataObj {
      return this._data;
   }
   get form(): HTMLFormElement {
	  return this.formEl;
   }
}
