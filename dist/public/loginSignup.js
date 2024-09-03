export const toggleFormState = function (startState, endState) {
    var _a;
    const startStateBtn = startState[0];
    const startStateForm = startState[1];
    if (startStateForm === null || startStateForm === void 0 ? void 0 : startStateForm.classList.contains("hidden"))
        startStateForm === null || startStateForm === void 0 ? void 0 : startStateForm.classList.remove("hidden");
    if (startStateBtn) {
        startStateBtn.style.backgroundColor = "gray";
        startStateBtn.style.borderTopStyle = "solid";
        startStateBtn.style.borderRightStyle = "solid";
        startStateBtn.style.borderLeftStyle = "solid";
    }
    (_a = endState[1]) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    const endStateBtn = endState[0];
    const endStateBtnStyle = endStateBtn === null || endStateBtn === void 0 ? void 0 : endStateBtn.style;
    if (endStateBtnStyle) {
        endStateBtn.style.backgroundColor = "#646464";
        endStateBtnStyle.borderTopStyle = "dotted";
        endStateBtnStyle.borderRightStyle = "dotted";
    }
};
