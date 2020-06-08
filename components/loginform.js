import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const LoginForm = ({ navigation }) => {
  const [value, setValue] = useState({ email: "", password: "" });

  const handlePress = () => {
    const mydata = {
      email: value.email,
      password: value.password,
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    axios
      .post("http://localhost:2000/login", mydata, headers)

      .then(function (response) {
        // handle success
        storeData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const storeData = async (authtoken) => {
    try {
      let token = await AsyncStorage.setItem("value", authtoken);
      console.log(authtoken);
    } catch (e) {
      // saving error
    }
  };

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem("user");
      alert(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.title}>LogIn</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          value={value.password}
          onChange={(e) => setValue({ ...value, password: e.target.value })}
        />

        <Button title="onpress" onPress={handlePress} />
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
