import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ApplicationNavigationTabs } from "./app.navigator";
import { AuthenticationNavigator } from "./authentication.navigation";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { currentUser } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {currentUser != null ? (
        <ApplicationNavigationTabs />
      ) : (
        <AuthenticationNavigator />
      )}
    </NavigationContainer>
  );
};
