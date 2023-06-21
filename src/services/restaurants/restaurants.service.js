import camelize from "camelize";

import { host } from "../../utils/env";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return fetch(`${host}/placesNearby?location=${location}`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const restaurantResultTransformer = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    const isClosedTemporarily =
      restaurant.business_status === "CLOSED_TEMPORARILY" ? true : false;

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: isClosedTemporarily,
    };
  });
  return camelize(mappedResults);
};
