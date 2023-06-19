import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../utils/safe-area.component";
import { LoadingIndicator } from "../../../utils/loading-indicator";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Search } from "../../../features/restaurants/components/search.component";
import { UserInfo } from "../../../features/restaurants/components/user-info.component";

import { SearchContainer, RestaurantList } from "./restaurants.screen.styles";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { FadeIn } from "../../../components/animations/fade.animation";

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <UserInfo navigation={navigation} />

      <SearchContainer>
        <Search navigation={navigation} />
      </SearchContainer>

      {error && <Text variant="error">{error}</Text>}

      {isLoading ? (
        <LoadingIndicator size={50} />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeIn duration="1500">
                  <RestaurantInfoCard restaurant={item} />
                </FadeIn>
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.placeId}
        />
      )}
    </SafeArea>
  );
};
