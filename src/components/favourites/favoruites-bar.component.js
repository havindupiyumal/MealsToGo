import React from "react";
import styled from "styled-components";
import { ScrollView, Platform, TouchableOpacity } from "react-native";

import { Text } from "../typography/text.component";
import { Spacer } from "../spacer/spacer.component";

import { Item, CompactImage, CompactWebView } from "./favourites-bar.styles";

const FavouritesBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const isAndroid = Platform.OS === "android";

export const FavouritesBar = ({ favourites, navigation }) => {
  if (favourites && !favourites.length) return null;

  const Image = isAndroid ? CompactWebView : CompactImage;

  return (
    <>
      <Spacer position="left" size="large">
        <Spacer position="top" size="small">
          <Text variant="error">Favourites</Text>
        </Spacer>
      </Spacer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FavouritesBarContainer>
          {favourites &&
            favourites.map((favoruite) => (
              <TouchableOpacity
                key={favoruite.placeId}
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant: favoruite,
                  })
                }
              >
                <Item>
                  <Image source={{ uri: favoruite.photos[0] }} />
                  <Text variant="caption">{favoruite.name}</Text>
                </Item>
              </TouchableOpacity>
            ))}
        </FavouritesBarContainer>
      </ScrollView>
    </>
  );
};
