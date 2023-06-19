import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const FavouritesContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
`;

export const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Title = styled(Text)`
  text-align: center;
  font-size: 20px;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      <FavouritesContainer>
        <FavouritesList
          data={favourites}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.placeId}
        />
      </FavouritesContainer>
    </SafeArea>
  );
};
