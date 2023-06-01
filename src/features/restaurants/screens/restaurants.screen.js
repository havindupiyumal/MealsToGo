import React from "react";
import { View, Text, StyleSheet, Platform, SafeAreaView } from "react-native";

import { SearchBar } from "../../../components/SearchBar/SearchBar.component";
import { RestaurantInfo } from "../components/restaurant-info.component";

const isAndriod = Platform.OS === "andriod";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar placeholder="Search Restaurants" />
      </View>
      <View style={styles.listView}>
        <RestaurantInfo restaurant={{}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndriod ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  searchBar: {
    padding: 16,
  },
  listView: {
    flex: 1,
    padding: 16,
  },
});
