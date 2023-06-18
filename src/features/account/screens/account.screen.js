import React from "react";

import {
  BackgroundImage,
  BackgroundImageCover,
  ContentContainer,
  AuthButton,
  Title,
} from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
      <BackgroundImageCover />
      <Title>MealsToGo</Title>
      <ContentContainer>
        <AuthButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
          title="Login"
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="account-plus"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
            title="Register"
          >
            Register
          </AuthButton>
        </Spacer>
      </ContentContainer>
    </BackgroundImage>
  );
};
