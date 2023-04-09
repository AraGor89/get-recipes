import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { drinksApi } from "../../api/edamamAPI";
import Search from "./../../components/Search";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  console.log("drinks", drinks);
  const handleSearch = async () => {
    if (!!search) {
      const res = await drinksApi.getDrinks(search);
      if (!!res) {
        setDrinks(res.data);
      } else {
        setDrinks([]);
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

export default Drinks;
