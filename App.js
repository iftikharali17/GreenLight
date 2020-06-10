import "react-native-gesture-handler";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signupform from "./components/signupform";
import LoginForm from "./components/loginform";
import LandingPage from "./components/LandingPage";
import DoctorDetails from "./Views/Card"; 

function DoctorCard() {
  return (
    <View>
      <DoctorDetails />
    </View>
  );
}

function patientView({ navigation }) {
  return (
    <View>
      <LandingPage navigation={navigation} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
}

function login({ navigation }) {
  return (
    <View style={styles.container}>
      <LoginForm navigation={navigation} />
    </View>
  );
}

function signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Signupform navigation={navigation} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={signup} />
        <Stack.Screen name="PatientView" component={patientView} />
        <Stack.Screen name="DoctorCard" component={DoctorCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const green = StyleSheet.create({
  colors: {
    color: "rgb(50, 255, 40)",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
