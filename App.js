import React from "react";
import {NativeRouter, Link} from "react-router-native";
import {Route} from "react-router-dom";


// Layouts
//import Login from './Layouts/Loginroute'
import SignUp from './Pages/signup/signUp' 
import Login from './Pages/login/Login' 
import Profile from './Pages/profile/Profile'
import EventCreate from './Pages/EventCreate/view'

function App() {
    return (
        <NativeRouter>
            <View>
                <Route exact path="/" component={SignUp}/>
                <Route path="/event-create" component={EventCreate}/>
            </View>
        </NativeRouter>
    );
} 

export default App