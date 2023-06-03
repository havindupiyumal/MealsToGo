import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import Star from "../../../../assets/start";
import Open from "../../../../assets/open";

import { Card } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.caption}
  color: ${(props) => props.theme.colors.ui.primary};
  padding-top: ${(props) => props.theme.sizes[0]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.sizes[0]};
`;

const RatingView = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.sizes[1]};
`;

const SectionEnd = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.sizes[1]};
`;

const ClosedTemporary = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.error};
`;

const Icon = styled(Image)`
  width: 18px;
  height: 18px;
`;
// keep the layout theme consistent. Not necessary
const Rating = styled(SvgXml)``;
const OpenNow = styled(SvgXml)``;

export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <RatingView>
            {ratingArray.map(() => (
              <Rating xml={Star} height={20} width={20} />
            ))}
          </RatingView>
          <SectionEnd>
            {isClosedTemporarily && (
              <ClosedTemporary>CLOSED TEMPORARY</ClosedTemporary>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <OpenNow xml={Open} height={20} width={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
