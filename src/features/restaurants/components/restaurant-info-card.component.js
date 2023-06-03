import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import Star from "../../../../assets/start";
import Open from "../../../../assets/open";

import { Card } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const RatingView = styled.View`
  flex-direction: row;
`;

const SectionEnd = styled.View`
  flex-direction: row;
  justify-content: space-between;
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
        <Text variant="body">{name}</Text>
        <Spacer position="top" size="medium">
          <Section>
            <RatingView>
              {ratingArray.map(() => (
                <Rating xml={Star} height={20} width={20} />
              ))}
            </RatingView>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <OpenNow xml={Open} height={20} width={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
        </Spacer>
        <Spacer position="top" size="medium">
          <Text variant="caption">{address}</Text>
        </Spacer>
      </Info>
    </RestaurantCard>
  );
};
