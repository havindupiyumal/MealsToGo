import React from "react";

import "./restaurants-details.styles";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { MenuItems } from "../components/menu-items.component";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safe-area.component";

export const RestaurantsDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <Spacer position="top" size="large">
        <RestaurantInfoCard restaurant={restaurant} />
        <MenuItems />
      </Spacer>
    </SafeArea>
  );
};
