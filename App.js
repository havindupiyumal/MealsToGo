import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { SearchBar } from "./src/components/SearchBar/SearchBar.component";

const isAndriod = Platform.OS === "andriod";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar placeholder="Search Restaurants" />
        </View>
        <View style={styles.listView}>
          <Text>List</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndriod ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  searchBar: {
    // backgroundColor: "green",
    padding: 16,
  },
  listView: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
