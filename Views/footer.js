import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CA87E3",
    alignItems: "center",
  },
  header: {
    color: "#fff",
    fontSize: 23,
  },
});

export default Footer;
