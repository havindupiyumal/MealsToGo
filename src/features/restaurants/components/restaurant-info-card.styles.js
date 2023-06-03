import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import { Image } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingView = styled.View`
  flex-direction: row;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(Image)`
  width: 18px;
  height: 18px;
`;
// keep the layout theme consistent. Not necessary
export const Rating = styled(SvgXml)``;
export const OpenNow = styled(SvgXml)``;
