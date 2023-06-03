import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";

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
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
