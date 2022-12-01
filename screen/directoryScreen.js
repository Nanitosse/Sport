import { FlatList, Viwe, Text, SafeAreaView } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';


const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item }) => {
        return (
            <ListItem onPress={() => props.onPress(item.id)} >
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
            data={props.fields}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}

        />
    )

}

export default DirectoryScreen; 