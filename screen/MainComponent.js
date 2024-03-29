
import { Platform, View, Image, StyleSheet, Text, Alert, ToastAndroid, Animated } from "react-native";
// import { FIELDS } from "../shared/field";
// import DirectoryScreen from './directoryScreen';
// import FieldInfoScreen from "./fieldInfoScreen";
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen'
import ContactScreen from "./ContactScreen";
import AboutUs from "./About";
import logo from "../assets/images/logo.jpg";
import { useState } from "react";
import ReservationScreen from "./ReservationScreen";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { fetchFields } from "../features/Fields/fieldsSlice";
// import { fetchComments } from "../features/comments/commentsSlice";
// import { fetchPartners } from '../features/partners/partnersSlice';
import FavoritesScreen from "./favoritesScreen";
import { Icon } from "react-native-elements";
import Loading from "../component/LoadingComponent";
import LoginScreen from "./logingScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import RegisterScreen from "./RegisterScreen";
import React, { useLayoutEffect } from "react";
import NetInfo from '@react-native-community/netinfo';
import SplashScreen from "./SplashScreen";
import CalisScreen from './CalisScreen';
import NutriScreen from "./nutritionScreen";





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
const ReservationNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Resevation'
                component={ReservationScreen}
                options={{ title: 'Reservation Search' }}
            />


        </Stack.Navigator>
    )

}



const AboutNavigator = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Ab'
                component={AboutUs}
                options={{ title: '' }}
            />

        </Stack.Navigator>
    )
}





const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Splash'
        >

            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home', headerShown: false }}
            />
            <Stack.Screen
                name="Splash" component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='calisthenics' 
                component={CalisScreen}
                options={{title: 'BodyWeight',headerShown: true }}
            />
            <Stack.Screen
                name='Intake' 
                component={NutriScreen}
                options={{title: 'Nutrition',headerShown: true }}
            />
        </Stack.Navigator>
    )
}
const FavoritesNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='favorites'
                component={FavoritesScreen}
                options={({ navigation }) => ({
                    title: 'favorite fields',
                    headerLeft: () => (
                        <Icon
                            name='heart'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )


                })}
            />


        </Stack.Navigator>
    )

}


const LoginNavigator = () => {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name='log-in'
                component={LoginScreen}



                options={

                    ({ navigation, route }) => ({
                        headerTitle: getFocusedRouteNameFromRoute(route),
                        headerLeft: () => (
                            <Icon
                                name={
                                    getFocusedRouteNameFromRoute(route) ===
                                        { RegisterScreen }
                                        ? 'user-plus'
                                        : 'sign-in'

                                }
                                type='font-awesome'
                                iconStyle={styles.stackIcon}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        )


                    })}
            />


        </Stack.Navigator>
    )

}

// const DirectoryNavigator = () => {
//     const Stack = createStackNavigator();

//     return (
//         <Stack.Navigator
//             initialRouteName="Directory"
//             screenOptions={{ headerShow: false }}r
//         >
//             <Stack.Screen
//                 name='Fields'
//                 component={DirectoryScreen}
//                 options={{ title: 'fields', headerShown: false }}
//             />
//             {/* <Stack.Screen
//                 name='FieldInfo'
//                 component={FieldInfoScreen}
//                 options={({ route }) => ({
//                     title: route.params.item.name

//                 })

//                 }
//             /> */}

//         </Stack.Navigator>
//     )

// }

const CustomDrawerContent = (props) => (

    <DrawerContentScrollView {...props}>
        <View >
            <View style={{ flex: 1 }}>
                <Image source={logo} style={StyleSheet.drawerImage} />
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>


);


const Main = () => {
    const dispatch = useDispatch();
    // useEffect(
    //     () => {
    //         dispatch(fetchFields());
    //         dispatch(fetchComments());
    //         dispatch(fetchPartners());
    //     }, [dispatch]
    // );

    useEffect(() => {

        async function Hello() {
            const connectionInfo = await NetInfo.fetch();
            if (Platform.OS === 'ios') {
                Alert.alert(
                    'initial Network Connectivity type:',
                    connectionInfo.type
                );
            } else {
                ToastAndroid.show(
                    'initial Network Connectivity Type:' + connectionInfo.type,
                    ToastAndroid.LONG
                );
            }
        }

        const unsubscribeNetInfo = NetInfo.addEventListener(
            (connectionInfo) => {
                handleConnectivityChange(connectionInfo);
            }

        )
        return unsubscribeNetInfo;



    }, [])
    const handleConnectivityChange = (connectionInfo) => {
        let connectionMsg = 'you arew now connected to an active network';
        switch (connectionInfo.type) {
            case 'none':
                connectionMsg = ' no  network is active ';
                break;
            case 'unknown':
                connectionMsg = 'the network connection is unknown';
                break;
            case 'cellular':
                connectionMsg = ' you are now connected to  the cellular  network ';
                break;
            case 'wifi':
                connectionMsg = 'you are connected  to a wifi network';
                break;
        }
        Platform.OS === 'ios'
            ? Alert.alert('connection change:', connectionMsg)
            : ToastAndroid.show(connectionMsg, ToastAndroid.LONG);

    };



    return (
        <View
            style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}
        >
            <Drawer.Navigator
                initialRouteName='Splash'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
                drawerContent={CustomDrawerContent}
                screenOptions={{
                    headerShown: ({ navigation, route }) => {
                        route.name === 'Splash' ? false : true

                    }
                }}


            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ headerShown: false }}

                />

                {/* <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Directory' }}
                /> */}
                <Drawer.Screen
                    name='ReserveTraining'
                    component={ReservationNavigator}
                    options={{ title: 'Reservation' }}
                />
                <Drawer.Screen
                    name='Favorites'
                    component={FavoritesNavigator}
                    options={{
                        title: 'My Favorites',

                    }}

                />
                <Drawer.Screen
                    name='login'
                    component={LoginNavigator}

                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{ title: "contact" }}
                />
                <Drawer.Screen
                    name='AboutUs'
                    component={AboutNavigator}
                    options={{ title: "AboutUs" }}
                />

            </Drawer.Navigator>


        </View>
    )

}




const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: 'black',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },

    drawerHeaderText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 2,
        height: 2,
        width: 2,
    }

});

export default Main;
