import React from "react";
import style from "./search.module.scss";

function Search({ mealNameChangeAC, getRecipesTHUNK, mealName, initialized }) {
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      handleMealSearch();
    }
  };
  const handleNameChange = (e) => {
    mealNameChangeAC(e.target.value);
  };
  const handleMealSearch = () => {
    if (mealName) {
      getRecipesTHUNK();
      // mealNameChangeAC("");
    }
  };
  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        value={mealName}
        onChange={handleNameChange}
        placeholder="You look hungry"
        onKeyDown={keyPress}
        disabled={!initialized}
      />
      <button onClick={handleMealSearch} disabled={!initialized}>
        {" "}
        HUNT{" "}
      </button>
    </div>
  );
}

export default Search;
