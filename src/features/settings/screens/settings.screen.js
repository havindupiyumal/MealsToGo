import React, { useContext } from "react";
import { View, Alert } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CustomButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const SettingsScreen = () => {
  const { logOutUser } = useContext(AuthenticationContext);

  const logOutHandler = () => {
    Alert.alert("Logout", "Are you sure, you want to logout ?", [
      {
        text: "Not Now",
      },
      { text: "Logout", onPress: () => logOutUser() },
    ]);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Spacer size="large">
        <CustomButton
          icon="lock-open-outline"
          mode="contained"
          onPress={logOutHandler}
          title="Main"
        >
          Logout
        </CustomButton>
      </Spacer>
    </View>
  );
};
