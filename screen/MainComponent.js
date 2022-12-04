import { useState } from "react";
import { Platform, View } from "react-native";
import { FIELDS } from "../shared/field";
import DirectoryScreen from './directoryScreen';
import FieldInfoScreen from "./fieldInfoScreen";
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen'
import ContactScreen from "./ContactScreen";


const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: 'blue-Sky' }
};

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Con'
                component={ContactScreen}
                options={{ title: '' }}
            />


        </Stack.Navigator>
    )

}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Ho'
                component={HomeScreen}
                options={{ title: '' }}
            />


        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Directory"
            screenOptions={screenOptions}

        >
            <Stack.Screen
                name='Direc'
                component={DirectoryScreen}
                options={{ title: 'fields' }}
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
            style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Directory' }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{ title: "contact" }}
                />

            </Drawer.Navigator>


        </View>
    )

}


export default Main;