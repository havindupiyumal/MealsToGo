import React, { useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";

export const SearchBar = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
