import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { recipeApi } from "../../api/edamamAPI";
import Search from "./../../components/Search";

const Fastfood = () => {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (!!search) {
      const res = await recipeApi.getRecipe(search);
      if (!!res?.data?.count) {
        setFood(res.data);
      } else {
        setFood([]);
      }
    }
  };

  const handleKey = (e) => {
    if (e.which === 13) handleSearch();
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Typography component="div">
      <Search
        search={search}
        handleKey={handleKey}
        handleSearch={handleSearch}
        handleSearchInput={handleSearchInput}
      />
    </Typography>
  );
};

export default Fastfood;
