import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

import { SearchContainer } from "./search.styles";

import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onSubmitEditingHandler = () => search(searchKeyword);

  const onChangeTextHandler = (text) => setSearchKeyword(text);

  useEffect(() => {
    onSubmitEditingHandler();
  }, []);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={onSubmitEditingHandler}
        onChangeText={onChangeTextHandler}
        icon="map"
      />
    </SearchContainer>
  );
};
