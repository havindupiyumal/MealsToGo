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

export const RegisterScreen = ({ navigation }) => {
  const { isLoading, error, registerUser } = useContext(AuthenticationContext);

  const [displayName, setDisplayName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const onRegisterAttempt = () => {
    if (!username || !password || !confirmPassword) return;

    if (password !== confirmPassword) {
      Alert.alert("", "Invalid Password. Passwords needs to macth.", [
        { text: "Ok" },
      ]);
    }

    registerUser(username, password, displayName);
  };

  return (
    <BackgroundImage>
      <BackgroundImageCover />
      <Title>MealsToGo</Title>
      <ContentContainer>
        <Spacer size="large">
          <TextInput
            name="displayName"
            onChangeText={setDisplayName}
            type="text"
            value={displayName}
            label="Display Name"
          />
        </Spacer>
        <Spacer size="large">
          <TextInput
            name="username"
            onChangeText={setUsername}
            type="text"
            value={username}
            label="Email"
          />
        </Spacer>
        <Spacer size="large">
          <TextInput
            label="password"
            onChangeText={setPassword}
            secureTextEntry={true}
            value={password}
          />
        </Spacer>
        <Spacer size="large">
          <TextInput
            label="confirm Password"
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
            value={confirmPassword}
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
            icon="account-plus"
            mode="contained"
            onPress={onRegisterAttempt}
            title="Register"
          >
            {isLoading ? <ActivityIndicator /> : "Register"}
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
