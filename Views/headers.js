import React from "react";
import { View, Image, Text, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Header = ({ title }) => {
  return (
    <View>
      <LinearGradient colors={['#D9F9FF', '#00b5ec']} 
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.container}>
      <Image style={styles.inputIcon} source={require('e:/Full-stack-course/GreenLight/assets/images/doctor.jpg')}/>
      <Text style={styles.header}>{title}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  header: {
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

export default Header;
