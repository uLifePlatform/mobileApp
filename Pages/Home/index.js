import {View} from "react-native";
import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Default from "./routes/Default";


class Home extends React.Component{
    render(){
        return (           
           <View>
                <NativeRouter>
                    <Route path='/' component={Default}/>
                </NativeRouter>
           </View>
        )
    }
}

export default Home