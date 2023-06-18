import React, { useContext, useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { Alert, ActivityIndicator } from "react-native";

import { Text } from "../../../components/typography/text.component";

import {
  BackgroundImage,
  BackgroundImageCover,
  ContentContainer,
  AuthButton,
  Title,
  ErrorContainer,
} from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const { isLoading, error, loginUser } = useContext(AuthenticationContext);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const onLoginAttempt = () => {
    if (!username || !password) {
      Alert.alert("Alert", "Email and Password can't be empty ?", [
        {
          text: "Ok",
        },
      ]);
      return;
    }
    loginUser(username, password);
  };

  return (
    <BackgroundImage>
      <BackgroundImageCover />
      <Title>MealsToGo</Title>
      <ContentContainer>
        <Spacer size="large">
          <TextInput
            label="E-mail"
            onChangeText={setUsername}
            keyboardType="email-address"
            autoCapitalize="none"
            value={username}
          />
        </Spacer>
        <Spacer size="large">
          <TextInput
            label="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
          />
        </Spacer>
        {!isLoading && error && (
          <ErrorContainer>
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
          </ErrorContainer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="login"
            mode="contained"
            onPress={onLoginAttempt}
            title="Login"
          >
            {isLoading ? <ActivityIndicator /> : "Login"}
          </AuthButton>
        </Spacer>
        <Spacer size="large">
          <AuthButton
            icon="arrow-left"
            mode="contained"
            onPress={() => navigation.navigate("Main")}
            title="Main"
          >
            Go To Main
          </AuthButton>
        </Spacer>
      </ContentContainer>
    </BackgroundImage>
  );
};
