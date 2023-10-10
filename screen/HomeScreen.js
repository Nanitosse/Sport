import { Text, View, Animated, StyleSheet, Button, ScrollView, } from 'react-native';
// import { useState } from 'react';
import { Card, } from 'react-native-elements';
import { FIELDS } from '../shared/field';
// import { PARTNERS } from '../shared/partner';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../component/LoadingComponent';
import { useEffect, useRef, useState } from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';





const HomeScreen = ({ navigation }) => {
    const [status, setStatus] = useState({});
    const video = useRef(null);

   
    const scaleValue = useRef(new Animated.Value(0)).current;
    const scaleAnimation = Animated.timing(scaleValue, {
        toVAlue: 1,
        duration: 1500,
        useNativeDriver: true
    }, [])

    useEffect(() => {
        scaleAnimation.start()
    })

    

    return (

        <View style={styles.backgroundVideo}>
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'stretch' ,marginTop:30 }}>
                    <Button
                        title='Press'
                        onPress={() => navigation.navigate("Directory")}
                        color='black'

                    />

                    <Video
                        autoplay={true}
                        ref={video}
                        style={styles.video}
                        source={require('../assets/images/videoplayback.mp4')}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <Video
                        autoplay={true}
                        ref={video}
                        style={styles.video}
                        source={require('../assets/images/videoplayback1.mp4')}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />


                </View>


            </ScrollView >


    
        </View >



    )




}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'center',
        width: 400,
        height: 500,

    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    // buttons: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
});




export default HomeScreen;