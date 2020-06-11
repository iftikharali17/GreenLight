import React, { useState } from "react";
import { View, TouchableHighlight, Text, TextInput, StyleSheet, Alert } from "react-native";
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
      <View>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.headline}>It’s quick and easy.</Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="First Name"
          value={value.firstName}
          onChange={(e) => setValue({ ...value, firstName: e.target.value })}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Last Name"
          value={value.lastName}
          onChange={(e) => setValue({ ...value, lastName: e.target.value })}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          placeholder="Password"
          value={value.password}
          onChange={(e) => setValue({ ...value, password: e.target.value })}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          placeholder="Confirm Password"
          value={value.passwordeval}
          onChange={(e) => setValue({ ...value, passwordeval: e.target.value })}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="YYYY-MM-DD"
          value={value.dob}
          onChange={(e) => setValue({ ...value, dob: e.target.value })}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Insurance company"
          value={value.insuranceComp}
          onChange={(e) =>
            setValue({ ...value, insuranceComp: e.target.value })
          }
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Insurance Number"
          value={value.insuranceNr}
          onChange={(e) => setValue({ ...value, insuranceNr: e.target.value })}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Phone Number"
          value={value.phoneNr}
          onChange={(e) => setValue({ ...value, phoneNr: e.target.value })}
        />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.submitButton]} 
        onPress={handlechange}>
        <Text style={styles.signupText}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    padding: 5,
    marginRight: 28,
    color: "white",
    fontSize: 24,
  },
  headline: {
    textAlign: 'center',
    padding: 5,
    marginRight: 28,
    color: "white",
    fontSize: 14,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      // borderBottomColor: '#F5FCFF',
      backgroundColor: '#E2E0DB',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:8,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:26,
      // borderBottomColor: '#e327e3',
      flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  submitButton: {
    backgroundColor: "#00b5ec",
  },
  signupText: {
    color: 'white',
  }
});
