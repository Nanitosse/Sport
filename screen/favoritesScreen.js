import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import Loading from '../component/LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { SwipeRow } from 'react-native-swipe-list-view'
import { toggleFavorite } from '../features/favorite/favoriteSlice';

const FavoritesScreen = ({ navigation }) => {
    const { fieldsArray, isLoading, errMess } = useSelector((state) => state.fields);
    const favorites = useSelector((state) => state.favorites);
    const dispactch = useDispatch();


    const renderFavoriteItem = ({ item }) => {
        return (
            <SwipeRow leftOpenValue={100}>
                <View style={StyleSheet.deleteView}>
                    <TouchableOpacity
                        style={styles.deleteTouchable}
                        onPress={()=>dispactch( toggleFavorite(item.id))}
                    >
                        <Text style = {styles.deleText}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ListItem
                        onPress={() =>
                            navigation.navigate("Directory", {
                                screen: 'FieldInfo',
                                params: { item }

                            })


                        }
                    >
                        <Avatar rounded source={{ uri: baseUrl + item.image }} />
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>

                        </ListItem.Content>
                    </ListItem>
                </View>
            </SwipeRow >
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


const styles = StyleSheet.create({
    deleteView :{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItem: 'center', 
        flex:1

    },

    deleteTouchable:{
        backgroundColor:'red',
        height: '100%', 
        justifyContent: 'center'

    }, 
    deleText:{
        color:'white',
        fontWeight:'700',
        textAlign: 'center',
        fontSize: 16,
        width: 100

    }

})

export default FavoritesScreen