import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";

import {
  restaurantsRequest,
  restaurantResultTransformer,
} from "./restaurants.service";

import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext({
  restaurants: [],
  error: null,
  isLoading: false,
});

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (locationValue) => {
    setIsLoading(true);
    setError(null);
    setRestaurants([]);
    restaurantsRequest(locationValue)
      .then(restaurantResultTransformer)
      .then((results) => {
        setIsLoading(false);
        setError(null);
        setRestaurants(results);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error.toString());
      });
  };

  useEffect(() => {
    const locationValue = location.lat + "," + location.lng;
    retrieveRestaurants(locationValue);
  }, [location]);

  const value = {
    restaurants,
    error,
    isLoading,
  };

  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  );
};
