import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Asynch Storage utility Functions
const storeFavourites = async (favourites) => {
  try {
    const jsonValue = JSON.stringify(favourites);
    await AsyncStorage.setItem("@favourites", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getFavourites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@favourites");
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
    return [...favourites, restaurant];
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

  //load asynch storage favourites on component mount
  useEffect(() => {
    const getFavouritesFromStorage = async () => {
      const savedFavourites = await getFavourites();
      console.log(savedFavourites);
      setFavourites(savedFavourites);
    };
    getFavouritesFromStorage();
  }, []);

  // save Favourites whenever favoruites changes
  useEffect(() => {
    storeFavourites(favourites);
  }, [favourites]);

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
