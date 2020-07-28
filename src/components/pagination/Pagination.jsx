import React from "react";
import style from "./pagination.module.scss";

function Pagination({
  recipes,
  getRecipesTHUNK,
  fromItem,
  toItem,
  moreResults,
}) {
  const handleNext = () => {
    let from = fromItem + 10;
    let to = toItem + 10;
    getRecipesTHUNK(from, to);
  };
  const handlePrev = () => {
    let from = fromItem - 10;
    let to = toItem - 10;
    getRecipesTHUNK(from, to);
  };
  return (
    <div className={style.paginationContainer}>
      {recipes.length !== 0 && (
        <div>
          {fromItem > 0 && (
            <span className={style.prev} onClick={handlePrev}>
              Prev
            </span>
          )}
          {moreResults && (
            <span className={style.next} onClick={handleNext}>
              Next
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default Pagination;
