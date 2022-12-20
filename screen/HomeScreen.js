import { Text, View, ScrollView } from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-elements';
import { FIELDS } from '../shared/field';
// import { PARTNERS } from '../shared/partner';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';



const FeaturedItem = () => {

    // if (item) {
    return (
        <Card containerStyle={{ padding: 0, height: 300, }} >
            <Card.Image source={require('../assets/images/logo.jpg')} containerStyle={{ borderRadius: 400 / 5 }}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize:20
                        }}
                    >
                        {/* {item.name} */}
                    </Text>
                </View>
            </Card.Image>
            <Text style={{
                margin: 20, 
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: 'green',
                fontSize:14
            }}>SPORTS
            </Text>
        </Card>
    );
    // }
    // return <View />;



}

const HomeScreen = () => {

    // const [field, setField]= useState(FIELDS);
    //  const featField = field.find((item) => item.featured);


    return (
        <ScrollView>
            <FeaturedItem />

        </ScrollView>
    )




}

export default HomeScreen;