import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const childForm = ({ email, hallo }) => {
  return (
    <View style={styles.Item}>
      <View style={styles.ItemView}>
        <Text onPress={() => console.log({ hallo })} style={styles.ItemText}>
          {email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Item: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  ItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ItemText: {
    fontSize: 18,
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 70,
  },
});

export default childForm;
