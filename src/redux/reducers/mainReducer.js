import { recipeApi } from "./../../api/edamamAPI";

const initialState = {
  count: null,
  fromItem: 0,
  mealResultArray: [],
  moreResults: true,
  mealName: "",
  toItem: 10,
  err: "",
  isFetching: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MEAL_NAME_CHANGE":
      return {
        ...state,
        mealName: action.mealName,
      };
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case "SET_INCOMING_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        err: action.err,
      };

    default:
      return state;
  }
};

const MEAL_NAME_CHANGE = "MEAL_NAME_CHANGE";
export const mealNameChangeAC = (mealName) => ({
  type: MEAL_NAME_CHANGE,
  mealName,
});

const SET_ERROR = "SET_ERROR";
const setErrorAC = (err) => ({ type: SET_ERROR, err });

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const isFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

const SET_INCOMING_DATA = "SET_INCOMING_DATA";
const setIncomingAC = (
  count,
  fromItem,
  mealResultArray,
  moreResults,
  toItem
) => ({
  type: SET_INCOMING_DATA,
  payload: {
    count,
    fromItem,
    mealResultArray,
    moreResults,
    toItem,
  },
});

export const getRecipesTHUNK = (from, to) => (dispatch, getState) => {
  let mealName = getState().mainReducer.mealName;
  dispatch(isFetchingAC(true));
  recipeApi
    .getRecipe(mealName, from, to)
    .then((response) => {
      console.log(response.data);
      let { count, from, hits, more, to } = response.data;
      dispatch(setIncomingAC(count, from, hits, more, to));
      dispatch(isFetchingAC(false));
    })
    .catch((errors) => {
      dispatch(setErrorAC(errors.message));
    });
};

export default mainReducer;
