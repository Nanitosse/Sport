import { FlatList, Viwe, Text, SafeAreaView } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from "react";
import { FIELDS } from "../shared/field";




const DirectoryScreen = ({navigation}) => {
    const [fields , setFields]= useState(FIELDS);
    const renderDirectoryItem = ({ item }) => {
        return (
            <ListItem onPress={()=>navigation.navigate('FieldInfo',{item})}r >
                <Avatar source={item.image} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    };

    return (
        <FlatList
            style={{ flex:1 }}
            data={fields}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}

        />
    )

}


export default DirectoryScreen; 