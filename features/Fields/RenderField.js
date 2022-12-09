import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";


const RenderField = (props) => {
    const { item } = props;
    if (item) {
        return (
            <Card containerStyle={{ padding: 0, width: 250, height: 220 }}>
                <Card.Image source={item.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: "center",
                                fontSize: 30,


                            }}
                        >
                            {item.name}
                        </Text>

                    </View>
                </Card.Image>

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
    }
});



export default RenderField;