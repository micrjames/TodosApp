export const toggleFormState = function(startState: (Element | undefined)[], endState: (Element | undefined)[]) {
   const startStateBtn = startState[0] as HTMLButtonElement;
   const startStateForm = startState[1];
   if(startStateForm?.classList.contains("hidden")) startStateForm?.classList.remove("hidden");
   if(startStateBtn) {
	  startStateBtn.style.backgroundColor = "gray";
	  startStateBtn.style.borderTopStyle = "solid";
	  startStateBtn.style.borderRightStyle = "solid";
	  startStateBtn.style.borderLeftStyle = "solid";
   }

   endState[1]?.classList.add("hidden");
   const endStateBtn = endState[0] as HTMLButtonElement;
   const endStateBtnStyle = endStateBtn?.style;
   if(endStateBtnStyle) {
	  endStateBtn.style.backgroundColor = "#646464";
	  endStateBtnStyle.borderTopStyle = "dotted";
	  endStateBtnStyle.borderRightStyle = "dotted";
   }
};
