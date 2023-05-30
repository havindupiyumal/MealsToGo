import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';

const isAndriod = Platform.OS === 'andriod';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar} >
          <Text>Search</Text>
        </View>
        <View style={styles.listView} >
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
    backgroundColor: '#fff',
  },
  searchBar: {
    backgroundColor: 'green',
    padding: 16,
  },
  listView: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  }
});
