import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";

const LoginForm = () => {
  const [value, setValue] = useState();
  return (
    <View>
      <Text style={styles.title}>LogIn</Text>
      <View>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        />
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
