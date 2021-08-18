import React from "react";
import {StyleSheet, View} from "react-native";
import {BottomNavigation} from "react-native-paper";

// Pages
import Home from '../Pages/Home/index'
import Event from '../Pages/Event/index';
import Messages from '../Pages/Messages/index';
import Profile from '../Pages/Profile/index'

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        flexDirection: "column"
    }
})

function App() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'event', title: 'Event', icon: 'calendar'},
        {key: 'messages', title: 'Messages', icon: 'message'},
        {key: 'home', title: 'Home', icon: 'home'},
        {key: 'profile', title: 'Profile', icon: 'account'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        event: Event,
        messages: Messages,
        home: Home,
        profile: Profile
    });

    return (
        <View style={styles.wrapper}>
            <BottomNavigation
                barStyle={{backgroundColor: 'white'}}
                navigationState={{index, routes}}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </View>
    );
}

export default App