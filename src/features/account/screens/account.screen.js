import React from "react";
import LottiView from "lottie-react-native";

import {
  BackgroundImage,
  BackgroundImageCover,
  ContentContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
      <BackgroundImageCover />
      <AnimationWrapper>
        <LottiView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
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
