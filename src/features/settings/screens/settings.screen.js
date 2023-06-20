import React, { useContext, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../utils/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import styled from "styled-components";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { currentUser, logOutUser } = useContext(AuthenticationContext);

  const [profilePhoto, setProfilePhoto] = useState(null);

  const logOutHandler = () => {
    Alert.alert("Logout", "Are you sure, you want to logout ?", [
      {
        text: "Not Now",
      },
      { text: "Logout", onPress: () => logOutUser() },
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

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={null}>
          {profilePhoto !== null ? (
            <Avatar.Image size={80} source={{ uri: profilePhoto }} />
          ) : (
            <Avatar.Icon size={120} icon="human" backgroundColor="#2182BD" />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{currentUser && currentUser.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          style={{ padding: 16 }}
          title="Profile Photo"
          description="Change Profile Photo"
          left={(props) => <List.Icon {...props} color="black" icon="camera" />}
          onPress={() => navigation.navigate("Camera")}
        />
        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={logOutHandler}
        />
      </List.Section>
    </SafeArea>
  );
};
