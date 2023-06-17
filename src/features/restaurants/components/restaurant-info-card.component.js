import React from "react";
import { Button } from "react-native";
import Star from "../../../../assets/start";
import Open from "../../../../assets/open";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { FavouriteIcon } from "../../../components/favourites/favourites-icon.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  RatingView,
  SectionEnd,
  Icon,
  Rating,
  OpenNow,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    placeId,
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
    <RestaurantCard key={placeId} elevation={5}>
      <FavouriteIcon restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="body">{name}</Text>
        <Spacer position="top" size="medium">
          <Section>
            <RatingView>
              {ratingArray.map((_, i) => (
                <Rating
                  key={`star-${restaurant.placeId}-${i}`}
                  xml={Star}
                  height={20}
                  width={20}
                />
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
