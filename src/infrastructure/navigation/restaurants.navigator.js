import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantScreen } from "../../../src/features/restaurants/screens/restaurants.screen";
import { RestaurantsDetailsScreen } from "../../../src/features/restaurants/screens/restaurants-details.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator headerMode="none">
      <RestaurantsStack.Screen
        name="RestaurantsView"
        component={RestaurantScreen}
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        })}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={RestaurantsDetailsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
