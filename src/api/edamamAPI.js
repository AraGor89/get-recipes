import * as axios from "axios";

const APP_ID = "ca77737b";
const APP_KEY = "8de8a047cbcb1268485e3c0cce18189f	";
const BASEURL = "https://api.edamam.com/search?";

export const recipeApi = {
  getRecipe(mealName, fromItem = 0, toItem = 10) {
    return axios.get(
      `${BASEURL}q=${mealName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${fromItem}&to=${toItem}`
    );
  },
};
//rafce
