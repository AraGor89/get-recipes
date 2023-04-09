import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";

const Search = ({ search, handleKey, handleSearchInput, handleSearch }) => {
  return (
    <Typography component="div">
      <TextField
        value={search}
        onKeyDown={handleKey}
        onChange={handleSearchInput}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Typography>
  );
};

export default Search;
