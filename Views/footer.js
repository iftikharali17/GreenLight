import React from "react";
import { View, Image, Text, Button, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View >
      <LinearGradient colors={['#D9F9FF', '#00b5ec']} 
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.container}>
      <Image style={styles.inputIcon} source={require('e:/Full-stack-course/GreenLight/assets/images/home.jpg')}/>
      <Image style={styles.inputIcon} source={require('e:/Full-stack-course/GreenLight/assets/images/calendar.png')}/>
      <Image style={styles.inputIcon} source={require('e:/Full-stack-course/GreenLight/assets/images/gear.png')}/>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
