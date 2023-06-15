import React, { createContext, useEffect, useState, useMemo } from "react";

import { locationRequest, locationDataTransform } from "./location.service";

export const LocationContext = createContext({
  location: "",
  search: () => null,
  keyword: "",
  error: null,
  isLoading: false,
});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState("Antwerp");
  const [keyword, setKeyword] = useState("Antwerp");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const search = (searchQuery) => {
    setIsLoading(true);
    setKeyword(searchQuery);
    if (!searchQuery.length) {
      return;
    }
    locationRequest(searchQuery.toLowerCase())
      .then(locationDataTransform)
      .then((results) => {
        setIsLoading(false);
        setError(null);
        setLocation(results);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  const value = {
    location,
    search,
    keyword,
    setKeyword,
    error,
    isLoading,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
