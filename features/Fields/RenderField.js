import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import { baseUrl } from "../../shared/baseUrl";


const RenderField = (props) => {
    const { item } = props;
    if (item) {
        return (
            <Card containerStyle={{ padding: 0, width: 270, height: 250 }}>
                <Card.Image source={{uri:baseUrl + item.image}}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={ styles.cardText}        
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
                </View>
            </Card>
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