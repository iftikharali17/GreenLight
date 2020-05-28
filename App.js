import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={green.colors}> Shits gone real. </Text>
      <Text style={green.colors}> wHere you at Ifti </Text>
    </View>
  );
}

const green = StyleSheet.create({
  colors: {
    color: "rgb(50, 255, 40)",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
