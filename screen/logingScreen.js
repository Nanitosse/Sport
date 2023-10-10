import { useEffect, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { CheckBox, Input, Button, Icon } from 'react-native-elements';
import *as  SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterScreen from "./RegisterScreen";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



const Tab = createBottomTabNavigator();
const LoginScreen = () => {
    const Options = {
        activeBackgroundColor: 'transparent',
        inactiveBackgroundColor: 'lightgreen',
        activeTinColor: '',
        inactiveTinColor: 'lightgreen',
        labelStyle: { fontSize: 16 },
        headerShown: false,
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        elevation: 0,

    };


    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    elevation: 0,
                    activeBackgroundColor: 'green',
                }

            }}


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
                color='transparent'
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

const LoginTab = ({ navigation, route }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handlelogin = () => {
        // console.log('userName: ', userName);
        // console.log('password:', password);
        console.log('remember:', remember)

        if (remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    email,
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
                setEmail(userinfo.email);
                setPassword(userinfo.password);
                setRemember(true);
            }

        });
    }, []);


    // const handle = async () => {
    //     const user = await signInWithEmailAndPassword(email, password);
    //     if (user) {
    //       navigation.navigate('HomeScreen')

    //     }else{
    //         console.log('faild')
    //     }




    // }

    const handleSign = () => {
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                // User signed in successfully
                const user = userCredential.user;
                console.log(`User ${user.uid} signed in`);
            })
            .catch((error) => {
                // Handle sign-in error
                console.error(error);
            });


    }
    const handlefunctions = () => {
        handleSign();
        handlelogin();

    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
        >
            <View style={Styles.container}>
                <Input
                    placeholder=" Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
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
                        onPress={() => handlefunctions()}
                        title='Login'
                        color='transparent'
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
            </View>
        </KeyboardAvoidingView>

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
