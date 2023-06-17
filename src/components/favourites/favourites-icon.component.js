import React, { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: red;
  position: absolute;
  top: 25px;
  right: 1px;
  width: 64px;
  z-index: 9;
`;

const FavoruiteHeartIcon = styled(AntDesign)`
  color: red;
`;

export const FavouriteIcon = ({ restaurant }) => {
  const { isRestaurantAFavourites, toggleRestaurantFavourite } =
    useContext(FavouritesContext);

  const toggleFavourite = () => toggleRestaurantFavourite(restaurant);

  const icon = isRestaurantAFavourites(restaurant) ? "heart" : "hearto";

  return (
    <FavouriteButton onPress={toggleFavourite}>
      <FavoruiteHeartIcon name={icon} size={25} />
    </FavouriteButton>
  );
};
