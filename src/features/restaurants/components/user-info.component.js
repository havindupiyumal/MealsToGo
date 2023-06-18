import React, { useContext } from "react";
import { Alert } from "react-native";
import { Chip } from "react-native-paper";
import styled from "styled-components/native";

const InformationContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
`;

const Content = styled(Chip)`
  padding-left: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const UserInfo = ({ navigation }) => {
  const { currentUser } = useContext(AuthenticationContext);

  const onPressHandler = () => {
    Alert.alert("", "Go to ", [
      {
        text: "Cancel",
      },
      { text: "Settings", onPress: () => navigation.navigate("Settings") },
    ]);
  };

  return (
    <InformationContainer>
      <Content selected icon="account-circle" onPress={onPressHandler}>
        <Text variant="body">Welcome </Text>
        <Text variant="body">{currentUser.email} </Text>
      </Content>
    </InformationContainer>
  );
};
