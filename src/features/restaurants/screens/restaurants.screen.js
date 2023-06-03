import React from "react";

import { SearchBar } from "../../../components/SearchBar/SearchBar.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer,
} from "./restaurants.screen.styles";

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar placeholder="Search Restaurants" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard restaurant={{}} />
      </RestaurantListContainer>
    </SafeArea>
  );
};
