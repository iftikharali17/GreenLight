import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet, Alert } from "react-native";
import axios from "axios";

const SignupForm = ({ navigation }) => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordeval: "",
    dob: "",
    insuranceComp: "",
    insuranceNr: "",
    phoneNr: "",
  });

  const handlechange = () => {
    const mydata = {
      first_name: value.firstName,
      insurance_company: value.insuranceComp,
      insurance_number: value.insuranceNr,
      email: value.email,
      password: value.password,
      last_name: value.lastName,
      dob: new Date(value.dob),
      mobile_number: value.phoneNr,
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    axios
      .post("http://localhost:2000/signup/create/patient", mydata, headers)

      .then(function (response) {
        // handle success
        console.log(response);
        Alert.alert("Successful", "Patient created sucessfully", {
          text: "To the doctors",
        });
        setTimeout(() => {
          navigation.navigate("PatientView");
        }, 10000);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <View>
      <Text style={styles.title}>SignUp</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={value.firstName}
          onChange={(e) => setValue({ ...value, firstName: e.target.value })}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={value.lastName}
          onChange={(e) => setValue({ ...value, lastName: e.target.value })}
        />
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
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm Password"
          value={value.passwordeval}
          onChange={(e) => setValue({ ...value, passwordeval: e.target.value })}
        />
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={value.dob}
          onChange={(e) => setValue({ ...value, dob: e.target.value })}
        />
        <TextInput
          style={styles.input}
          placeholder="Insurance company"
          value={value.insuranceComp}
          onChange={(e) =>
            setValue({ ...value, insuranceComp: e.target.value })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Insurance Number"
          value={value.insuranceNr}
          onChange={(e) => setValue({ ...value, insuranceNr: e.target.value })}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={value.phoneNr}
          onChange={(e) => setValue({ ...value, phoneNr: e.target.value })}
        />
        <Button title="Submit" onPress={handlechange} style={styles.input} />
      </View>
    </View>
  );
};

export default SignupForm;

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
