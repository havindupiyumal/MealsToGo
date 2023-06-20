import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { Chip } from "react-native-paper";
import styled from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const InformationContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
`;

const Content = styled(Chip)`
  padding-left: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

import { Text } from "../../../components/typography/text.component";

export const UserInfo = ({ navigation }) => {
  const { currentUser } = useContext(AuthenticationContext);

  const [profilePhoto, setProfilePhoto] = useState(null);

  const onPressHandler = () => {
    Alert.alert("", "Go to ", [
      {
        text: "Cancel",
      },
      { text: "Settings", onPress: () => navigation.navigate("Settings") },
    ]);
  };

  const getUserPhoto = async (user) => {
    try {
      const uri = await AsyncStorage.getItem(`@user-image-${user.uid}`);
      setProfilePhoto(uri);
    } catch (e) {
      console.log("Settings Error :- ", e);
    }
  };

  // this runs whenever the the screen is in focus
  useFocusEffect(
    React.useCallback(() => {
      getUserPhoto(currentUser);
    }, [currentUser])
  );

  const icon = profilePhoto ? { uri: profilePhoto } : "account-circle";
  return (
    <InformationContainer>
      <Content selected source={icon} onPress={onPressHandler}>
        <Text variant="body">Welcome </Text>
        <Text variant="body">{currentUser.email} </Text>
      </Content>
    </InformationContainer>
  );
};
