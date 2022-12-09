
import { Platform, View, Image,StyleSheet,Text } from "react-native";
import { FIELDS } from "../shared/field";
import DirectoryScreen from './directoryScreen';
import FieldInfoScreen from "./fieldInfoScreen";
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen'
import ContactScreen from "./ContactScreen";
import AboutUs from "./About";
import logo from "../assets/images/logo.jpg"



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

const AboutNavigator = () => {
   const  Stack = createStackNavigator()

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

    return (
        <View
            style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
                drawerContent={CustomDrawerContent}
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