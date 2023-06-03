import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { FlatList } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:  ${StatusBar.currentHeight}px`},
  background-color: ${(props) => props.theme.colors.ui.primary}
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
