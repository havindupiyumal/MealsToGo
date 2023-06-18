import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import LottiView from "lottie-react-native";

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

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -20px;
  left: -20px;
  padding: ${(props) => props.theme.space[2]};
  /* z-index: 99999; */
`;

export const Animation = styled(LottiView)`
  width: 60px;
  height: 51px;
  color: red;
`;

export const FavouriteIcon = ({ restaurant }) => {
  const { isRestaurantAFavourites, toggleRestaurantFavourite } =
    useContext(FavouritesContext);

  const toggleFavourite = () => {
    toggleRestaurantFavourite(restaurant);
  };

  const icon = isRestaurantAFavourites(restaurant) ? "heart" : "hearto";

  return (
    <FavouriteButton onPress={toggleFavourite}>
      {isRestaurantAFavourites(restaurant) && (
        <AnimationWrapper>
          <Animation
            loop={false}
            autoPlay
            source={require("../../../assets/favourite.json")}
          />
        </AnimationWrapper>
      )}

      <FavoruiteHeartIcon name={icon} size={25} />
    </FavouriteButton>
  );
};
