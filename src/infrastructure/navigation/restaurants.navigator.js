import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { RestaurantScreen } from "../../../src/features/restaurants/screens/restaurants.screen";
import { RestaurantsDetailsScreen } from "../../../src/features/restaurants/screens/restaurants-details.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        gestureEnabled: true,
        CardStyleInterpolators: CardStyleInterpolators.forModalPresentationIOS,
      })}
    >
      <RestaurantsStack.Screen
        name="RestaurantsView"
        component={RestaurantScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={RestaurantsDetailsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
