import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

import { SearchBar } from "../../../components/SearchBar/SearchBar.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndriod = Platform.OS === "andriod";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:  ${StatusBar.currentHeight}px`},
  background-color: ${(props) => props.theme.colors.ui.primary}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

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
