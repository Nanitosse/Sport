import { useSelector } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import Loading from '../component/LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const FavoritesScreen = ({ navigation }) => {
    const { fieldsArray, isLoading, errMess } = useSelector((state) => state.fields);
    const favorites = useSelector((state) => state.favorites);
    const renderFavoriteItem = ({ item  }) => {
        return (
            <ListItem
                onPress={ ()=>
                    navigation.navigate("Directory",{
                        screen:'FieldInfo',
                         params:{item}

                    })
                    

                }
            >
                <Avatar rounded source={{uri: baseUrl + item.image}}/>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>

                </ListItem.Content>
            </ListItem>
        )

    }
    if (isLoading) {
        return <Loading />
    }
    if (errMess) {
        return (
            <View>
                <Text>{errMess}</Text>

            </View>
        )
    }

    return (
        <FlatList
            data={fieldsArray.filter((field) => favorites.includes(field.id))}
            renderItem={renderFavoriteItem}
             keyExtractor={(item) => item.id.toString()}
        />
    )


};

export default FavoritesScreen