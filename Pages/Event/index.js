import React from "react";
import {View, StyleSheet} from "react-native";
import { NativeRouter, Route } from "react-router-native";
import SystemBarMargin from "../../Helpers/SystemBarMargin";

// Routes imports
import EventHome from "./routes/EventHome";

let styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        borderWidth: 1
    }
})

class Event extends React.Component{
    render() {
        return(
            <View style={[SystemBarMargin.android, styles.wrapper]}>
                <NativeRouter>
                    <Route path='/' component={EventHome}/>
                </NativeRouter>
            </View>
        )
    }
}

export default Event