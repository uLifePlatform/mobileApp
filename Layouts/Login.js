import React from "react";
import {Button, Text, StyleSheet, View} from "react-native";
import {Card, TextInput} from "react-native-paper";
import {CardTitle} from "react-native-paper/src/components/Card/CardTitle";
import {useHistory} from "react-router-dom";


function Login() {
    const history = useHistory()

    function loginUser(){
        history.push('/event-create')
    }

    return (
        <Card>
            <View>
                <TextInput
                    label="email"
                />
                <TextInput
                    label="email"
                />
                <Button title="Login" onPress={()=>loginUser}/>
            </View>
        </Card>
    );

}


export default Login