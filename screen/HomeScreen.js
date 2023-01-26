import { Text, View, Animated, StyleSheet, Button } from 'react-native';
// import { useState } from 'react';
import { Card } from 'react-native-elements';
import { FIELDS } from '../shared/field';
// import { PARTNERS } from '../shared/partner';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../component/LoadingComponent';
import { useEffect, useRef, useState } from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';









// const FeaturedItem = (props) => {
//     const video = React.useRef(null);
//     const { item } = props;
//     if (props.isLoading) {
//         return <Loading />
//     }
//     if (props.errMess) {
//         return (
//             <View><Text>{props.errMess}</Text></View>
//         )
//     }

//     if (item) {
//         return (

//             // <Card containerStyle={{ padding: 0, height: 200, }} >
//             //     <Card.Image source={{ uri: baseUrl + item.image }} >
//             //         <View style={{ justifyContent: 'center', flex: 1 }}>
//             //             <Text
//             //                 style={{
//             //                     color: 'white',
//             //                     textAlign: 'center',
//             //                     fontSize: 20
//             //                 }}
//             //             >
//             //                 {item.name}
//             //             </Text>
//             //         </View>
//             //     </Card.Image>
//             //     <Text style={{ margin: 20 }}>{item.desciption}</Text>




//             // </Card>

//         );
//     }
//     return <View />;



// }

const HomeScreen = () => {
    const [status, setStatus] = useState({});
    const video = useRef(null);

    // const [field, setField]= useState(FIELDS);
    //  const featField = field.find((item) => item.featured);
    // const fields = useSelector((state) => state.fields);
    // const comments = useSelector((state) => state.comments);
    // const partners = useSelector((state) => state.partners);
    // const featField = fields.fieldsArray.find((item) => item.featured)
    // const featComment = comments.commentsArray.find((item) => item.featured)
    // const featPartner = partners.partnersArray.find((item) => item.featured);
    const scaleValue = useRef(new Animated.Value(0)).current;
    const scaleAnimation = Animated.timing(scaleValue, {
        toVAlue: 1,
        duration: 1500,
        useNativeDriver: true
    }, [])

    useEffect(() => {
        scaleAnimation.start()
    })

    // return (
    //     // <Animated.ScrollView style={{ transform: [{ scale: scaleValue }] }}>
    //     {/* <FeaturedItem
    //             item={featField}
    //             isLoading={fields.isLoading}
    //             errMess={fields.errMess}
    //         />
    //         <FeaturedItem item={featComment} />
    //         <FeaturedItem
    //             item={featPartner}
    //             isLoading={partners.isLoading}
    //             errMess={partners.errMess}
    //         /> */}

    //     // </Animated.ScrollView>





    // )



    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={require('../assets/images/videoplayback.mp4')}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>


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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});




export default HomeScreen;