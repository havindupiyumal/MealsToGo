import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ApplicationNavigationTabs } from "./app.navigator";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <ApplicationNavigationTabs />
    </NavigationContainer>
  );
};
