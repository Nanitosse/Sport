import { Text, View, ScrollView } from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-elements';
import { FIELDS } from '../shared/field';
// import { PARTNERS } from '../shared/partner';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../component/LoadingComponent';





const FeaturedItem = ( props ) => {
    const { item } = props;
    if (props.isLoading) {
        return <Loading />
    }
    if (props.errMess) {
        return (
            <View><Text>{props.errMess}</Text></View>
        )
    }

    if (item) {
        return (
            <Card containerStyle={{ padding: 0, height: 200, }} >
                <Card.Image source={{ uri: baseUrl + item.image }} >
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.desciption}</Text>




            </Card>
        );
    }
    return <View />;



}

const HomeScreen = () => {

    // const [field, setField]= useState(FIELDS);
    //  const featField = field.find((item) => item.featured);
    const fields = useSelector((state) => state.fields);
    const comments = useSelector((state) => state.comments);
    const partners = useSelector((state) => state.partners);
    const featField = fields.fieldsArray.find((item) => item.featured)
    const featComment = comments.commentsArray.find((item) => item.featured)
    const featPartner = partners.partnersArray.find((item) => item.featured);


    return (
        <ScrollView>
            <FeaturedItem
                item={featField}
                isLoading={fields.isLoading}
                errMess={fields.errMess}
            />
            <FeaturedItem item={featComment} />
            <FeaturedItem
                item={featPartner}
                isLoading={partners.isLoading}
                errMess={partners.errMess}
            />

        </ScrollView>
    )




}

export default HomeScreen;