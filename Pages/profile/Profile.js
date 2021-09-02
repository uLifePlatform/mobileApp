import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import {Text, StyleSheet, View, StatusBar, Image, TouchableOpacity} from "react-native";
import {Card, TextInput, Title, Button, Avatar} from "react-native-paper";
import {CardTitle} from "react-native-paper/src/components/Card/CardTitle";
import {Link, useHistory} from "react-router-dom";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function () {
    return (
        <>
        <View>
            <Image
            style={styles.profilepic}
            source={require('./pictures/profile.jpg')}
            />
        </View>
        <View style={styles.profilename}>
            <Text style={styles.profilenametext}>Mark Novak</Text>
        </View>
        <View style={styles.username}>
            <Text style={styles.usernametext}> @username</Text>
        </View>
        <View style={styles.follower}>
            <Text style={styles.followertext}>Followers</Text>
            <Text style={styles.num}>30</Text>
        </View>
        <View>
            <Text>Events</Text>
            <Text style={styles.num}>2</Text>
        </View>
        </>              
    );

}
const styles = StyleSheet.create({ 
    profilepic: {
        borderRadius: 200,
        marginTop: 80,
        height:100,
        width:100, 
        marginLeft: 30,
        flexDirection:"row",
    },
    profilenametext: {
        fontWeight: "bold",
        fontSize:20,
        flexDirection:"row",
        marginLeft: 25,
    },
    usernametext: {
        marginLeft: 20,
    },
    followertext: {
        fontSize:15,
    },
    num: {
        fontWeight: "bold",
        fontSize: 20,
    },
}); 