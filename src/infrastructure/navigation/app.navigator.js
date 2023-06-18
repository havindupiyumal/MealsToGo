import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screens";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

import { RestaurantsProvider } from "../../services/restaurants/restaurants.context";
import { LocationProvider } from "../../services/location/location.context";
import { FavouritesProvider } from "../../services/favourites/favourites.context";

const TAB_ICONS = {
  Restaurants: {
    focused: "restaurant",
    outlined: "restaurant-outline",
  },
  Map: {
    focused: "map",
    outlined: "map-outline",
  },
  Settings: {
    focused: "settings",
    outlined: "settings-outline",
  },
};

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      const iconName = focused
        ? TAB_ICONS[route.name]["focused"]
        : TAB_ICONS[route.name]["outlined"];

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const Tab = createBottomTabNavigator();

export const ApplicationNavigationTabs = () => {
  return (
    <LocationProvider>
      <RestaurantsProvider>
        <FavouritesProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </FavouritesProvider>
      </RestaurantsProvider>
    </LocationProvider>
  );
};
