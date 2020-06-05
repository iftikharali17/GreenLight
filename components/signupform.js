import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const SignupForm = () => {
  const [value, setValue] = useState();
  return (
    <View>
      <Text style={styles.title}>Login Form </Text>
      <View>
        <TextInput 
          style={styles.input}
          placeholder="First Name" />
        <TextInput 
          style={styles.input}
          placeholder="Last Name" />
        <TextInput 
          style={styles.input}
          placeholder="Email" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm Password"
        />
        <TextInput 
          style={styles.input}
          placeholder="Date of Birth" />
        <TextInput 
          style={styles.input}
          placeholder="Insurance company" />
        <TextInput 
          style={styles.input}
          placeholder="Insurance Number" />
        <TextInput 
          style={styles.input}
          placeholder="Phone Number" />
        
      </View>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  title: {
    color:'white',
    fontSize: 24,
    
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})