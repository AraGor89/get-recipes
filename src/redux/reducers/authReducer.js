const initialState = {
  login: "",
  password: "",
  initialized: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.login,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.password,
      };

    default:
      return state;
  }
};

const LOGIN = "LOGIN";
const PASSWORD = "PASSWORD";

export default authReducer;
