export class Form {
    constructor(form, cb) {
        this._data = {};
        this.formEl = form;
        this.fieldInputs = this.inputs;
        this._textareas = this.textareas;
        this.formEl.addEventListener("submit", event => {
            event.preventDefault();
            this.inputsNames.forEach((name, i) => {
                if (name)
                    this._data[name] = this.values[i];
            });
            this.textareasNames.forEach((name, i) => {
                if (name)
                    this._data[name] = this._textareas[i].value;
            });
            cb(this._data);
        });
    }
    formElements(type) {
        const fieldEls = this.formEl.elements;
        let fieldElements = [];
        for (let i = 0; i < fieldEls.length; i++) {
            if (fieldEls[i].nodeName === type)
                fieldElements = [...fieldElements, fieldEls[i]];
        }
        return fieldElements;
    }
    get inputs() {
        let fieldInputs = this.formElements("INPUT");
        return fieldInputs;
    }
    get textareas() {
        let textareas = this.formElements("TEXTAREA");
        return textareas;
    }
    get textareasNames() {
        return this._textareas.map(textarea => {
            var _a;
            return (_a = textarea.attributes.getNamedItem("name")) === null || _a === void 0 ? void 0 : _a.value;
        });
    }
    get btns() {
        let btns = [];
        btns = this.formElements("BUTTON");
        return btns;
    }
    whichBtn(type) {
        let button = null;
        for (let i = 0; i < this.btns.length; i++)
            if (this.btns[i].type == type)
                button = this.btns[i];
        return button;
    }
    reset() {
        this.form.reset();
    }
    get resetBtn() {
        return this.whichBtn("reset");
    }
    get submitBtn() {
        return this.whichBtn("submit");
    }
    get values() {
        let values = [];
        for (let i = 0; i < this.inputs.length; i++)
            values = [...values, this.inputs[i].value];
        return values;
    }
    get inputsNames() {
        return this.fieldInputs.map(fieldInput => {
            var _a;
            return (_a = fieldInput.attributes.getNamedItem("name")) === null || _a === void 0 ? void 0 : _a.value;
        });
    }
    get data() {
        return this._data;
    }
    get form() {
        return this.formEl;
    }
}
