import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

const MainForm = ({ email, hallo, cards }) => {
  return (
    <View style={styles.Item}>
      <View style={styles.ItemView}>
        <Text onPress={() => console.log({ hallo })} style={styles.ItemText}>
          {email}
        </Text>
        <Button title="More Info" onPress={cards} />
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

export default MainForm;
