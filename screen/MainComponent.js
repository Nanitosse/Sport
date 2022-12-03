import { useState } from "react";
import { Platform, View } from "react-native";
import { FIELDS } from "../shared/field";
import DirectoryScreen from './directoryScreen';

import FieldInfoScreen from "./fieldInfoScreen";
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Directory"
            screnOptions={{
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTinColor: "#fff"
            }}

        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'field Direct' }}
            />
            <Stack.Screen
                name='FieldInfo'
                component={FieldInfoScreen}
                options={({ route }) => ({
                    title: route.params.item.name

                })

                }
            />

        </Stack.Navigator>
    )

}


const Main = () => {

    return (
        <View 
            style={{ flex: 1 , paddingTop:Platform.OS==='ios'? 0 : Constants.statusBarHeight}}
        >
            <DirectoryNavigator/>
            

        </View>
    )

}


export default Main;