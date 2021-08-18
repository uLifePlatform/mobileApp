import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper'

// Function is used when response is returned
let style = StyleSheet.create({
    overlay:{
        alignItems: 'center',
        width: '80%',
        height: '50%',
        margin: 0,
        justifyContent: 'center',
        flex: 0
    }
})

function Response(props){
    return(
        <Card style={style.overlay}>
            <Text>Test</Text>
        </Card>
    )
}

export default Response