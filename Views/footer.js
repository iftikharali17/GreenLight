import React from "react";
import { View, Image, Text, Button, TextInput, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.inputIcon} source={require('e:/Full-stack-course/GreenLight/assets/images/calendar.png')}/>
      <Image style={styles.inputIcon} source={require('e:/Full-stack-course/GreenLight/assets/images/gear.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#00b5ec",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    color: "white",
    fontSize: 24,
    alignItems: "center",
  },
  inputIcon:{
    width:40,
    height:40,
    // borderRadius: 30,
    justifyContent: 'center',
  }
});

export default Footer;
