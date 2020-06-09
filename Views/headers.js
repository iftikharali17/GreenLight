import React from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";

const header = ({ title }) => {
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

export default header;
