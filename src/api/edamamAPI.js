import * as axios from "axios";

const APP_ID = "ca77737b";
const APP_KEY = "8de8a047cbcb1268485e3c0cce18189f	";
const FOOD_BASEURL = "https://api.edamam.com/search?";

export const recipeApi = {
  getRecipe(mealName, fromItem = 0, toItem = 10) {
    return axios.get(
      `${FOOD_BASEURL}q=${mealName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${fromItem}&to=${toItem}`
    );
  },
};

const DRINK_BASEURL = "www.thecocktaildb.com/api/json/v1/1/search.php?";
export const drinksApi = {
  getDrinks(drinkName) {
    // console.log(
    //   "`${DRINK_BASEURL}s=${drinkName}`",
    //   `${DRINK_BASEURL}s=${drinkName}`
    // );
    return axios.get(
      `${"https://api.api-ninjas.com/v1/cocktail?name="}${drinkName}`
    );
  },
};
