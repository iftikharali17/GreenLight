import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.footer}>Placeholder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "darkslateblue",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    color: "#fff",
    fontSize: 23,
    alignItems: "center",
  },
});

export default Footer;
