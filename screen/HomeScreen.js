import { Text, View, ScrollView } from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-elements';
// import { FIELDS } from '../shared/field';
// import { PARTNERS } from '../shared/partner';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


const FeaturedItem = ({ item }) => {

    if (item) {
        return (
            <Card containerStyle={{ padding: 0, }}>
                <Card.Image source={require(baseUrl+ item.image)} >
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>{item.name}</Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        )

    }
    return <View/>



}

const HomeScreen = () => {
    // const [fields, setFields] = useState(FIELDS);
    // const [partners, setPartners] = useState(PARTNERS);
    const  fields= useSelector((state)=>state.fields);
    const  partners= useSelector((state)=>state.partners);
    const featField = fields.fieldsArray.find((item) => item.featured);
    const featPartner = partners.partnersArray.find((partner) => partner.featured);

    return (
        <ScrollView>
            <FeaturedItem item={featField} />
            <FeaturedItem item={featPartner} />
        </ScrollView>
    )
    // return (
    //     <FeaturedItem />

    // )
}

export default HomeScreen;