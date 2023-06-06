import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";

import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
}

const TAB_ICONS = {
  Restaurants: {
    focused: "restaurant",
    outlined: "restaurant-outline",
  },
  Map: {
    focused: "map",
    outlined: "map-outline",
  },
  Settings: {
    focused: "settings",
    outlined: "settings-outline",
  },
};

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      const iconName = focused
        ? TAB_ICONS[route.name]["focused"]
        : TAB_ICONS[route.name]["outlined"];

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const Tab = createBottomTabNavigator();

const ApplicationNavigationTabs = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [oswaldFontsLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoFontsLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldFontsLoaded || !latoFontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsProvider>
          <NavigationContainer>
            <ApplicationNavigationTabs />
          </NavigationContainer>
        </RestaurantsProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
