import React from "react";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";

import {
  Item,
  CompactImage,
  CompactWebView,
} from "./restaurant-compact-view.styles";

import { FavouriteIcon } from "../favourites/favourites-icon.component";

const isAndroid = Platform.OS === "android";

export const RestaurantCompactView = ({ restaurant }) => {
  const { photos, name } = restaurant;

  const Image = isAndroid ? CompactWebView : CompactImage;

  return (
    <>
      <FavouriteIcon restaurant={restaurant} />
      <Item>
        <Image source={{ uri: photos[0] }} />
        <Text variant="caption">{name}</Text>
      </Item>
    </>
  );
};
