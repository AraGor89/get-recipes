const initialState = {
  login: "Bon",
  password: "appetit",
  initialized: false,
  falseAttemptsCount: 0,
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
    case LOGIN_SUBMIT:
      return {
        ...state,
        initialized: action.toggle,
      };
    case INCREMENT_FALSE_ATTEMPTS_COUNT:
      return {
        ...state,
        falseAttemptsCount: (state.falseAttemptsCount += 1),
      };

    default:
      return state;
  }
};

const LOGIN = "LOGIN";
const PASSWORD = "PASSWORD";
const LOGIN_SUBMIT = "LOGIN_SUBMIT";
const INCREMENT_FALSE_ATTEMPTS_COUNT = "INCREMENT_FALSE_ATTEMPTS_COUNT";
export const loginAC = (login) => ({ type: LOGIN, login });
export const passwordAC = (password) => ({ type: PASSWORD, password });
export const loginSubmitAC = (toggle) => ({ type: LOGIN_SUBMIT, toggle });
export const incrementFalseAttemptsAC = () => ({
  type: INCREMENT_FALSE_ATTEMPTS_COUNT,
});

export default authReducer;
