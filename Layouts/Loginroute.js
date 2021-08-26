import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

import Login from "D:/delo/Ulife/git/mobileApp/Pages/login/Login";
import SignUp from "D:/delo/Ulife/git/mobileApp/Pages/signup/signUp";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={SignUp}/>
            <Route exact path="/SignUp" component={SignUp}/>
          </Switch>
        </View>
      </NativeRouter>
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