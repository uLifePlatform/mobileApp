import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import {Text, StyleSheet, View, StatusBar, Image, TouchableOpacity} from "react-native";
import {Card, TextInput, Title, Button, Avatar} from "react-native-paper";
import {CardTitle} from "react-native-paper/src/components/Card/CardTitle";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function Login({ navigation }) {
    function loginUser(){
    }
    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')
    const [isSecureEntry, setIsSecureEntry] =useState(true)
    const [iconName, changeIconName] =useState("eye-slash")
    return (
        <>
        <View>
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
        </View>
        <View>
            <Animatable.Image
            animation = "bounceIn"
            duraton = "300"
            style={styles.logo}
            source={require('./pictures/loginpic.png')}/>
        </View>
        <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    size={20}
                />
            <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    value={username}
                    onChangeText={SetUsername}
                    placeholderTextColor="#666666"
                    autoCapitalize="none"
            />
        </View>    
        <View style={styles.password}>
                <FontAwesome 
                    name="lock"
                    size={25}
                />
            <TextInput
                    secureTextEntry={isSecureEntry}
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="#666666"
                    value={password}
                    onChangeText={SetPassword}
                    autoCapitalize="none"
            />
            <TouchableOpacity onPress={()=>{
                setIsSecureEntry((prev)=> !prev)
                changeIconName(isSecureEntry === true ? "eye" : "eye-slash")
                changeIconName(isSecureEntry === false ? "eye-slash" : "eye")
                }}>
                <Icon size={15} name={iconName}/>
            </TouchableOpacity> 
        </View>
        <View style={styles.loginbut}>
        <Button mode="contained" loading="" color="#02D0F3" onPress={() => console.log('Pressed')}>
        <Text style={styles.textbutton}>Login</Text>
        </Button>
        </View> 
        <View style={styles.tosignup}>
            <Text style={styles.tosignuptext}>Don't have an account?</Text>
        </View> 
        <View>
        <Button style={styles.signbut} mode="Outlined" color="#02D0F3" onPress={() => navigation.push("SingUp")}>
            Sign-up
        </Button>
        </View>
        </> 
              
    );
} 
const styles = StyleSheet.create({

    logo: {
        height:200,
        width:240, 
        marginTop: 120,
        marginHorizontal:60,
    }, 
    action: {
        flexDirection: 'row',
        marginTop: 60,
        paddingBottom: 5,
        marginHorizontal: 5,
    },
    password: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginHorizontal: 5,
    },
    textInput: {
        backgroundColor: 'white',
        height:40,
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        marginHorizontal: 9,
        color: '#05375a'
    },
    loginbut: {
        marginLeft:100,
        width:160,
        marginTop: 25,
        borderRadius: 20,
    },
    tosignuptext: {
        fontSize:10,
    }, 
    tosignup:{    
        marginTop: 130,
        alignItems:"center"
    },
    signbut:{
        marginLeft:124,
        width:110,
    }, 
}); 