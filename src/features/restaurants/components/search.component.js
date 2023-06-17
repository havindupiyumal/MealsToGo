import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { FavouritesBar } from "../../../components/favourites/favoruites-bar.component";

export const Search = ({ navigation }) => {
  const [isFavouritesBarVisible, setFavouritesBarVisible] = useState(false);

  const { favourites } = useContext(FavouritesContext);

  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onSubmitEditingHandler = () => search(searchKeyword);

  const onChangeTextHandler = (text) => setSearchKeyword(text);

  const favoruitesBarVisibleHandler = () =>
    setFavouritesBarVisible(!isFavouritesBarVisible);

  useEffect(() => {
    onSubmitEditingHandler();
  }, []);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <>
      <Searchbar
        icon={isFavouritesBarVisible ? "heart-remove" : "heart-outline"}
        iconColor="tomato"
        onIconPress={favoruitesBarVisibleHandler}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={onSubmitEditingHandler}
        onChangeText={onChangeTextHandler}
      />
      {isFavouritesBarVisible ? (
        <FavouritesBar favourites={favourites} navigation={navigation} />
      ) : null}
    </>
  );
};
