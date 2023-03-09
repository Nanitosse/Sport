import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from 'react-native';
import { CheckBox, Input, Button, Icon } from 'react-native-elements';
import *as  SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterScreen from "./RegisterScreen";

const RegisterTab = () => {
    return <ScrollView></ScrollView>
}
const Tab = createBottomTabNavigator();
const LoginScreen = () => {
    const Options = {
        activeBackgroundColor: 'lightgreen',
        inactiveBackgroundColor: 'lightgreen',
        activeTinColor: 'chartreuse',
        inactiveTinColor: 'lightgreen',
        labelStyle: { fontSize: 16 },
        headerShown: false

    };


    return (
        <Tab.Navigator
            tabBarOptions={Options}
        >
            <Tab.Screen
                name='Sing-In'
                component={LoginTab}
                color='lightgreen'
                type="clear"
                options={{
                    tabaBarIcon: (props) => {
                        return (
                            <Icon
                                name='sign-in'
                                type="font-awesome"
                                color={props.color}
                            />

                        )

                    }
                }}


            />
            <Tab.Screen
                name='Register'
                component={RegisterScreen}
                options={{
                    tabaBarIcon: (props) => {
                        return (
                            <Icon
                                name='user-plus'
                                type="font-awesome"
                                color={props.color}
                            />

                        )

                    }
                }}


            />

        </Tab.Navigator>
    )
}

const LoginTab = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handlelogin = () => {
        console.log('userName: ', userName);
        console.log('password:', password);
        console.log('remember:', remember)

        if (remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    userName,
                    password
                })

            ).catch((error) => console.log('could not save  user info', error))
        } else {
            SecureStore.deleteItemAsync('userinfo').catch(
                (error) => console.log('Could not delete user info', error)
            );



        }
    }
    useEffect(() => {
        SecureStore.getItemAsync('userinfo').then((userdata) => {
            const userinfo = JSON.parse(userdata);
            if (userinfo) {
                setUserName(userinfo.userName);
                setPassword(userinfo.password);
                setRemember(true);
            }

        });
    }, []);

    return (
        <View style={Styles.container}>
            <Input
                placeholder=" Username"
                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                onChangeText={(text) => setUserName(text)}
                value={userName}
                containerStyle={Styles.formInput}
                leftIconContainerStyle={Styles.formIcon}
            />
            <Input
                placeholder=" password"
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                onChangeText={(text) => setPassword(text)}
                value={password}
                containerStyle={Styles.formInput}
                leftIconContainerStyle={Styles.formIcon}
            />
            <CheckBox
                title='Remember Me'
                center
                checked={remember}
                onPress={() => setRemember(!remember)}
                containerStyle={Styles.formCheckbox}
            />
            <View style={Styles.formButton}>
                <Button
                    onPress={() => handlelogin()}
                    title='Login'
                    color='alice-blue'
                    icon={
                        <Icon
                            name='sign-in'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{ backgroundColor: 'transparent' }}
                />
            </View>
            <View style={Styles.formButton}>
                <Button
                    onPress={() => navigation.navigate('RegisterScreen')}
                    title='Register'
                    type="aliceblue"
                    icon={
                        <Icon
                            name='user-plus'
                            type='font-awesome'
                            color='blue'
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    titleStyle={{ color: 'blue' }}
                />
            </View>
        </View>

    )


}


const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20
    },
    formIcon: {
        marginRight: 10,
    },
    formInput: {
        padding: 10
    },
    formCheckbox: {
        margin: 10,
        backgroundColor: null
    },
    formButton: {
        margin: 40
    }

})

export default LoginScreen;