import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Shits gone real. </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#00ff00",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
