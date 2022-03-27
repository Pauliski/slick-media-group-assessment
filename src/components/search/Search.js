import React, { useState } from "react";
import { SearchField, SearchTitle, SearchWrapper } from "./style";

const Search = ({ makeApiCall }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    const searchString = value.replace(" ", "+");
    if (value.trim().length) {
      makeApiCall(searchString);
    }
  };
  return (
    <SearchWrapper>
      <SearchTitle>Search</SearchTitle>
      <SearchField value={inputValue} onChange={(e) => handleChange(e)} />
    </SearchWrapper>
  );
};

export default Search;
