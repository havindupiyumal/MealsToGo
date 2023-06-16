import React from "react";
import { Callout } from "react-native-maps";

import { RestaurantCompactView } from "../../../components/restaurant/rastaurant-compact-view.component";

export const MapCallout = ({ restaurant, navigation }) => {
  return (
    <Callout
      onPress={() =>
        navigation.navigate("RestaurantDetails", { restaurant: restaurant })
      }
      key={restaurant.placeId}
      tooltip={true}
      style={{ backgroundColor: "#ffffff" }}
    >
      <RestaurantCompactView restaurant={restaurant} />
    </Callout>
  );
};
