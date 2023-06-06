import React, { createContext, useEffect, useState, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantResultTransformer,
} from "./restaurants.service";

export const RestaurantsContext = createContext({
  restaurants: [],
  error: null,
  isLoading: false,
});

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setError(null);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantResultTransformer)
        .then((results) => {
          setIsLoading(false);
          setError(null);
          setRestaurants(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

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
