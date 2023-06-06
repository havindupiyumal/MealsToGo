import React, { useContext } from "react";

import { SearchBar } from "../../../components/SearchBar/SearchBar.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../utils/safe-area.component";
import { LoadingIndicator } from "../../../utils/loading-indicator";

import { SearchContainer, RestaurantList } from "./restaurants.screen.styles";

import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Text } from "../../../components/typography/text.component";

export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar placeholder="Search Restaurants" />
      </SearchContainer>

      {error && <Text variant="error">Error loading Data!!!</Text>}

      {isLoading ? (
        <LoadingIndicator size={50} />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item) => item.placeId}
        />
      )}
    </SafeArea>
  );
};
