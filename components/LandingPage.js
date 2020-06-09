import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainView from "../Views/MainView";
import Header from "../Views/headers";
import Footer from "../Views/footer";

const LandingPage = ({ navigation }) => {
  const [doctors, setDoctors] = useState([]);
  const hallos = () => {
    console.log("hallo");
  };
  const shipit = () => {
    navigation.navigate("DoctorCard");
  };

  useEffect(() => {
    axios
      .get("http://localhost:2000/all")

      .then(function (response) {
        // handle success
        setDoctors(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Doctors" />
      <FlatList
        data={doctors}
        renderItem={({ item }) => (
          <MainView
            email={item.email}
            hallo="Du bist in der muschi"
            cards={shipit}
          />
        )}
      />
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "green",
  },
});

export default LandingPage;
