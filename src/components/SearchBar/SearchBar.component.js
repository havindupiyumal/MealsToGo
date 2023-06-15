import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

export const SearchBar = ({
  placeholder,
  searchQuery,
  onChangeText,
  onSubmitEditing,
}) => {
  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      value={searchQuery}
    />
  );
};
