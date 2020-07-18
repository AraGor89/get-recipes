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
//response.data.hits.
////hits is array
//////recipe.calories
//////recipe.image
//////recipe.label(name)
//////recipe.health(“vegan”, “vegetarian”, “paleo”, “dairy-free”, “gluten-free”, “wheat-free”, “fat-free”, “low-sugar”, “egg-free”, “peanut-free”, “tree-nut-free”, “soy-free”, “fish-free”, “shellfish-free” (labels are per serving))
//////recipe.ingredients(obj[arr])
//////recipe.totalWeight

//https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

// try {
//   recipeApi.getRecipe("pizza", 10, 20).then((response) => {
//     console.log(response.data);
//   });
// } catch (err) {
//   console.log(err);
// }
