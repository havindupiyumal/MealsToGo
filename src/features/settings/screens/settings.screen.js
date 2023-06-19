import React, { useContext } from "react";
import { Alert } from "react-native";
import { List, Avatar } from "react-native-paper";

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

  const logOutHandler = () => {
    Alert.alert("Logout", "Are you sure, you want to logout ?", [
      {
        text: "Not Now",
      },
      { text: "Logout", onPress: () => logOutUser() },
    ]);
  };

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={120} icon="human" backgroundColor="#2182BD" />
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
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={logOutHandler}
        />
      </List.Section>
    </SafeArea>
  );
};
