import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";
//Asynch Storage utility Functions
const storeFavourites = async (favourites, key) => {
  try {
    const jsonValue = JSON.stringify(favourites);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getFavourites = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const FavouritesContext = createContext({
  favourites: [],
  isRestaurantAFavourites: () => null,
  toggleRestaurantFavourite: () => null,
});

// Utility Functions
const isRestaurantInTheFavourites = (favourites, restaurant) => {
  if (favourites) {
    const existingRestaurantItem = favourites.find(
      (favourite) => favourite.placeId === restaurant.placeId
    );
    if (existingRestaurantItem) return true;
  }
  return false;
};
const addFavourite = (favourites, restaurant) => {
  if (!isRestaurantInTheFavourites(favourites, restaurant)) {
    // This checfk is necessary for first favourite check.
    if (favourites) {
      return [...favourites, restaurant];
    } else {
      return [restaurant];
    }
  }
};

const removeFavourite = (favourites, restaurant) => {
  if (isRestaurantInTheFavourites(favourites, restaurant)) {
    return favourites.filter(
      (favourite) => favourite.placeId !== restaurant.placeId
    );
  }
};

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const { currentUser } = useContext(AuthenticationContext);

  //load asynch storage favourites on component mount
  useEffect(() => {
    if (currentUser != null) {
      const key = `@favourites-${currentUser.uid}`;
      const getFavouritesFromStorage = async () => {
        const savedFavourites = await getFavourites(key);
        setFavourites(savedFavourites);
      };
      getFavouritesFromStorage();
    }
  }, [currentUser]);

  // save Favourites whenever favoruites changes
  useEffect(() => {
    if (currentUser != null) {
      const key = `@favourites-${currentUser.uid}`;
      storeFavourites(favourites, key);
    }
  }, [favourites, currentUser]);

  // API functions
  const isRestaurantAFavourites = (restaurant) =>
    isRestaurantInTheFavourites(favourites, restaurant);

  const toggleRestaurantFavourite = (restaurant) => {
    if (isRestaurantInTheFavourites(favourites, restaurant)) {
      setFavourites(removeFavourite(favourites, restaurant));
    } else {
      setFavourites(addFavourite(favourites, restaurant));
    }
  };

  // Exposed API
  const value = {
    favourites,
    isRestaurantAFavourites,
    toggleRestaurantFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
