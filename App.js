import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { List, SList } from "./components/List";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text>Primera Clase de React Native - TOP 27</Text>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <List />
      <SList />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    gap: 15,
    backgroundColor: "#fff",
  },
});
