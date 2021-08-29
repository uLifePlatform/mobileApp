import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import {Text, StyleSheet, View, StatusBar, Image, TouchableOpacity} from "react-native";
import {Card, TextInput, Title, Button, Avatar} from "react-native-paper";
import {CardTitle} from "react-native-paper/src/components/Card/CardTitle";
import {Link, useHistory} from "react-router-dom";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

export default function () {
    const history = useHistory()
    const [gender, SetGender] = useState();
    const [isSecureEntry, setIsSecureEntry] =useState(true)
    const [isSecureEntry2, setIsSecureEntry2] =useState(true)
    const [iconName, changeIconName] =useState("eye-slash")
    const [iconName2, changeIconName2] =useState("eye-slash")
    const [date, setDate] = useState(new Date)
    return (
        <>
        <View style={styles.backarrow}>
            <TouchableOpacity onPress={()=> history.goBack()}>
                <Icon name="chevron-left" size={20}/>
            </TouchableOpacity>
        </View>
        <View style={styles.title}>
            <Text style={styles.titletext}>SignUp</Text>
        </View>
        <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    size={20}
                />
            <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    placeholderTextColor="#666666"
                    autoCapitalize="none"
            />
            <Icon size={20} name={"check-circle"} color="green"/>
        </View> 
        <View style={styles.action}>
                <FontAwesome 
                    name="envelope"
                    size={20}
                />
            <TextInput
                    style={styles.textInput}
                    placeholder="Email"
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
        <View style={styles.password}>
                <FontAwesome 
                    name="lock"
                    size={25}
                />
            <TextInput
                    secureTextEntry={isSecureEntry2}
                    style={styles.textInput}
                    placeholder="Repeat Password"
                    placeholderTextColor="#666666"
                    autoCapitalize="none"
            />
            <TouchableOpacity onPress={()=>{
                setIsSecureEntry2((prev)=> !prev)
                changeIconName2(isSecureEntry2 === true ? "eye" : "eye-slash")
                changeIconName2(isSecureEntry2 === false ? "eye-slash" : "eye")
                }}>
                <Icon size={15} name={iconName2}/>
            </TouchableOpacity> 
        </View>  
        <Picker
        label="Gender"
        mode= "dialog"
        style={styles.spol}
        selectedValue={SetGender}
        onValueChange={(itemValue, itemIndex) =>
        SetGender(itemValue)
        }>
        <Picker.Item label="Male" value="MALE" />
        <Picker.Item label="Female" value="FEMALE" />
        <Picker.Item label="Other" value="OTHER" />
        </Picker>
        <DatePicker date={date} onDateChange={setDate} /> 
        <View style={styles.signinbut}>
        <Button mode="contained" loading="" color="#02D0F3" onPress={() => console.log('Pressed')}>
        <Text style={styles.textbutton}>SignUp</Text>
        </Button>
        </View> 
        </>              
    );

}
const styles = StyleSheet.create({ 
    title: {
    alignItems:"center",
    marginTop: 40,                                                                                               
    paddingBottom: 110,
    },
    titletext:{
        fontWeight: "bold",
        fontSize:30,
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 15,
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
    password: {
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 15,
        marginHorizontal: 5,
    },
    signinbut: {
        marginLeft:100,
        width:160,
        marginTop: 60,
    },
    backarrow: {
        marginTop: 50,
        marginLeft: 22,
    },
    spol: {
        marginLeft: 35,
        marginTop: 10,
    }
}); 