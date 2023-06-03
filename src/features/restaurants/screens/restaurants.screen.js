import React from "react";

import { SearchBar } from "../../../components/SearchBar/SearchBar.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utils/safe-area.component";

import { SearchContainer, RestaurantList } from "./restaurants.screen.styles";

import { Spacer } from "../../../components/spacer/spacer.component";

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar placeholder="Search Restaurants" />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
