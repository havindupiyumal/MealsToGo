import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onSubmitEditingHandler = () => search(searchKeyword);

  const onChangeTextHandler = (text) => setSearchKeyword(text);

  useEffect(() => {
    onSubmitEditingHandler();
  }, []);

  return (
    <Searchbar
      placeholder="Search for a location"
      value={searchKeyword}
      onSubmitEditing={onSubmitEditingHandler}
      onChangeText={onChangeTextHandler}
    />
  );
};
