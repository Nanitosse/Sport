
import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import Video from 'react-native-video';
import  video from '../assets/images/videoplayback1.mp4'; 



const CalisScreen = ()=>{
    const VideoPlayer= React.useRef();

    const FullScreen = ()=>{
        if(VideoPlayer.current){
            VideoPlayer.current.presentFullscreenPlayer();

        }
    }

    return(
        <View>
            <Video
               ref={VideoPlayer}
               source={video}
               style={styles.backgroundVideo}
               repeat={true}

            />
            <TouchableOpacity onPress={FullScreen}>
                <Text>Go Full Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CalisScreen;
