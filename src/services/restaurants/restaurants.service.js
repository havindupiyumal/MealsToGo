import { mocks, mockImages } from "./mock/index";

import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("restaurants not found");
    resolve(mock);
  });
};

export const restaurantResultTransformer = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    const isClosedTemporarily =
      restaurant.business_status === "CLOSED_TEMPORARILY" ? true : false;

    return {
      ...restaurant,
      photos: restaurant.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      }),
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: isClosedTemporarily,
    };
  });
  return camelize(mappedResults);
};
