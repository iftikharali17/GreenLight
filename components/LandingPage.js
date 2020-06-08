import React, { useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

const LandingPage = () => {
  return (
    <View>
      <Text>Hello you are welcome</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LandingPage;
