export function formsReducer(state, action) {
  const component = action.formComponent;
  switch (action.type) {
    case "formTyping": {
      return {
        ...state,
        [component]: {
          ...state[component],
          [action.name]: action.value,
        },
      };
    }
  }
}

export const initState = {
  generalInfo: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  educationInfo: {
    university: "",
    major: "",
    dateOfStudy: "",
  },
  practicalInfo: {
    company: "",
    position: "",
    responsibility: "",
    previousWorkStartDate: "",
    previousWorkEndDate: "",
  },
};
