import { FlatList, View, Text, SafeAreaView } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from "react";
import { FIELDS } from "../shared/field";
import Loading from "../component/LoadingComponent";
import { useSelector } from 'react-redux';
import { Tile } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";




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
            // <ListItem onPress={()=>navigation.navigate('FieldInfo',{item})}r >
            //     <Avatar source={item.image} />
            //     <ListItem.Content>
            //         <ListItem.Title>{item.name}</ListItem.Title>
            //     </ListItem.Content>
            // </ListItem>
            <Tile
                title={item.name}
                caption={item.description}
                featured
                onPress={() =>
                    navigation.navigate('FieldInfo', { item })
                }
                imageSrc={{ uri: baseUrl + item.image }}
            />


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