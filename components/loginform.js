import React, { useState } from "react";
import { View, Image, TouchableHighlight, Button, Text, TextInput, StyleSheet } from "react-native";
import {Fonts} from "./Fonts.js";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const LoginForm = ({ navigation }) => {
  const [value, setValue] = useState({ email: "", password: "" });

  const handlePress = async () => {
    const mydata = {
      email: value.email,
      password: value.password,
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    await axios
      .post(
        "https://backontrackgreenlight.herokuapp.com/login",
        mydata,
        headers
      )

      .then(function (response) {
        // handle successc
        console.log(response);
        // storeData(response.data);      Later usage with async storage
        navigation.navigate("PatientView");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  // Final version will have this included

  // const storeData = async (authtoken) => {
  //   try {
  //     let token = await AsyncStorage.setItem("value", authtoken);
  //     console.log(authtoken);
  //     navigation.navigate("PatientView");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const displayData = async () => {
  //   try {
  //     let user = await AsyncStorage.getItem("user");
  //     alert(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/doodle/48/000000/mail-contact.png'}}/>
        <TextInput
          style={styles.inputs}
          placeholder=" Email"
          underlineColorAndroid='transparent'
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        </View>
        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/plasticine/100/000000/key.png'}}/>
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          placeholder="Password"
          underlineColorAndroid='transparent'
          value={value.password}
          onChange={(e) => setValue({ ...value, password: e.target.value })}
        />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
        onPress={handlePress}>
        <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.KaushanScript,
    textAlign: 'center',
    padding: 15,
    marginRight: 28,
    color: "white",
    fontSize: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#E2E0DB',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#e327e3',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
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
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});