import React from "react";
import { View, StyleSheet} from "react-native";
import { Button, TextInput } from "react-native-paper";

let style = StyleSheet.create({
    filter:{
        flex: 0,
        padding: 10,
        flexDirection: 'column',
    },
})

class Filter extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        // Checks if fillter is toggled.
        // If props is false null is returned.
        if(!this.props.warn || this.props.warn == false){
            return null
        }
        return(
            <View style={style.filter}>    
               
                    <TextInput type="text" placeholder="Test ..."/>
                    <TextInput type="text" placeholder="Test ..."/>
                    <TextInput type="text" placeholder="Test ..."/>
                    <TextInput type="text" placeholder="Test ..."/>
                    <TextInput type="text" placeholder="Test ..."/>
                    <TextInput type="text" placeholder="Test ..."/>
                    <Button 
                    icon="camera" 
                    mode='contained'
                    onPress={()=>console.log("test")}
                    style={style.button}
                    >Filter</Button>
                              
            </View>
        )
    }
}

Filter.defaultProps = {
    warn: false
}


export default Filter