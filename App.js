import "react-native-gesture-handler";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={green.colors}>This is the login</Text>
      <Button
        title="Landing Page"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

function signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={green.colors}>This is the Singup</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={signup} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Home" component={HomeScreen} />
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
