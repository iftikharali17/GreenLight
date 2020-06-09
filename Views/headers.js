import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "darkslateblue",
    alignItems: "center",
  },
  header: {
    color: "#fff",
    fontSize: 23,
  },
});

export default Header;
