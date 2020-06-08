import React, { useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

const LandingPage = () => {
  const { doc, docset } = useState([
    {
      id: 1,
      Name: "Morris",
    },
    {
      id: 2,
      Name: "Harris",
    },
    {
      id: 3,
      Name: "Heilsbringer",
    },
    {
      id: 4,
      Name: "Untertane",
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {doc.map((item) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
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

export default landingPage;
