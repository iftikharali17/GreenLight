import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const LandingPage = () => {
  const [doctors, doctorData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:2000/all")

      .then(function (response) {
        // handle success
        doctorData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

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
