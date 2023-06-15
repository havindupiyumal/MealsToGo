import React, { useContext, useState, useEffect } from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../utils/safe-area.component";
import { LoadingIndicator } from "../../../utils/loading-indicator";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Search } from "../../../features/restaurants/components/search.component";

import { SearchContainer, RestaurantList } from "./restaurants.screen.styles";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Search />
      </SearchContainer>

      {error && <Text variant="error">{error}</Text>}

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
