import { StyleSheet, Text, View, Alert, PanResponder, Share } from "react-native";
import { Card, Icon } from "react-native-elements";
import { baseUrl } from "../../shared/baseUrl";
import * as Animatable from 'react-native-animatable';
import { useRef } from "react";


const RenderField = (props) => {
    const { item } = props;
    const view = useRef();
    const isLeftSwipe = ({ dx }) => dx < -100;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            view.current
                .rubberBand(1000)
                .then((endState) => console.log(endState.finished ? 'finished' : 'canceled'))


        },
        onPanResponderEnd: (e, gestureState) => {
            console.log('pan responder end', gestureState);
            if (isLeftSwipe(gestureState)) {
                Alert.alert(
                    'Add Favorite',
                    'Are you sure you want to add' +
                    item.name +
                    'to favorites ?',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                            onPress: () => console.log('Cancel Pressed')
                        },
                        {
                            text: 'OK',
                            onPress: () =>
                                props.isFavorite
                                    ? console.log('Already set as a favorite')
                                    : props.markFavorite()

                        }
                    ],
                    { cancelable: false }
                )


            }


        }
    })
    const shareField = (title, message, url) => {
        Share.share(
            {
                title,
                message: `${title}: ${message} ${url}`,
                url
            },
            {
                dialogTitle:'Share' + title
            }
        )

    }


    if (item) {
        return (
            <Animatable.View
                animation='fadeInDownBig'
                duration={2000}
                delay={1000}
                {...panResponder.panHandlers}
                ref={view}
            >
                <Card containerStyle={{ padding: 0, width: 270, height: 250 }}>
                    <Card.Image source={{ uri: baseUrl + item.image }}>
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Text
                                style={styles.cardText}
                            >
                                {item.name}
                            </Text>

                        </View>
                    </Card.Image>
                    <View style={styles.cardRow}>

                        <Icon
                            name={props.isFavorite ? 'heart' : 'heart-o'}
                            onPress={() =>
                                props.isFavorite
                                    ? console.log('Already set as a favorite')
                                    : props.markFavorite()
                            }
                            type='font-awesome'
                            color='#f50'
                            raised
                            reverse
                        />
                        <Icon
                            name='pencil'
                            onPress={() => props.onShowModal()}

                            type='font-awesome'
                            color='#f50'
                            raised
                            reverse
                        />
                        <Icon
                            name='share'
                            onPress={() => shareField(
                                item.name,
                                item.description,
                                baseUrl+item.image

                            )}

                            type='font-awesome'
                            color='#f50'
                            raised
                            reverse
                        />
                    </View>
                </Card>
            </Animatable.View>
        )
    }
    return <View />;

}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    },

    cardRow: {
        alignitem: 'center',
        justifyContent: "centre",
        flex: 3,
        flexDirection: 'row',
        margin: 20,
    },

    cardText: {
        textShadow: 'rgba(0,0,0,1)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,


    }
});



export default RenderField;
