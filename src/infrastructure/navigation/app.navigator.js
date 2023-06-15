import React from "react";
import { View, Text } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantScreen } from "../../../src/features/restaurants/screens/restaurants.screen";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
}

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
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
