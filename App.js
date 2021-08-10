import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";

// Layouts
import Login from './Layouts/Login'
import EventCreate from './Pages/EventCreate/view'

export default function App() {
    return (
        <NativeRouter>
            <View>
                <Route exact path="/" component={Login}/>
                <Route path="/event-create" component={EventCreate}/>
            </View>
        </NativeRouter>
    );
}
