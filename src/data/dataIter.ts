export interface ITodo {
   id: number;
   title: string;
   description: string;
   completed: boolean;
};

type whichForm = string | string;
interface ILabel {
	for: string;
	text: string;
}
interface IInput {
	id: string;
	name: string;
	type: string;
	pattern: string;
	placeholder: string;
}
type errMsg = Record<'msg', string>;
interface IFormControl {
    label: ILabel;
	input: IInput;
	errs: errMsg[];
};
export type IForms = Record<whichForm, IFormControl[]>;
