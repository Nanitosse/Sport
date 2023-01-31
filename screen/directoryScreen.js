import { FlatList, View, Text, SafeAreaView } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from "react";
import { FIELDS } from "../shared/field";
import Loading from "../component/LoadingComponent";
import { useSelector } from 'react-redux';
import { Tile } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
import * as Animatable from 'react-native-animatable';




const DirectoryScreen = ({ navigation }) => {
    const fields = useSelector((state) => state.fields)

    if (fields.isLoading) {
        return <Loading />
    }
    if (fields.errMess) {
        return (
            <View>
                <Text>{fields.errMess}</Text>
            </View>
        );

    }
    const renderDirectoryItem = ({ item }) => {
        return (
            <Animatable.View
                animation='fadeInRightBig'
                duration={2000}
                delay={1000}
            >
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() =>
                        navigation.navigate('FieldInfo', { item })
                    }
                    imageSrc={{ uri: baseUrl + item.image }}
                />
            </Animatable.View>


        )
    };

    return (
        <FlatList
            style={{ flex: 1 }}
            data={fields.fieldsArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}

        />
    )

}


export default DirectoryScreen; 