import React from "react";
import {NativeRouter, Link} from "react-router-native";
import {Route} from "react-router-dom";


// Layouts
import Login from './Layouts/Login'
import Main from './Layouts/App'

function App() {
    return (
        <NativeRouter>
            <Route exact path="/" component={Main}/>
        </NativeRouter>
    );
}

export default App