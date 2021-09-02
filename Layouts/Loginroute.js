import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "D:/delo/Ulife/git/mobileApp/Pages/login/Login";
import SignUp from "D:/delo/Ulife/git/mobileApp/Pages/signup/signUp";
 
const AuthStack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" Component={Login}  />  
          <AuthStack.Screen name="SignUp" Component={SignUp}  />
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});