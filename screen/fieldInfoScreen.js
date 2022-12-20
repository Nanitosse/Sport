import { useState } from 'react';
import RenderField from '../features/Fields/RenderField'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { COMMENTS } from '../shared/comment'


const FieldInfoScreen = ({ route }) => {
    const { item } = route.params;
    const [comments, setCommnets] = useState(COMMENTS);
    const [favorite, setFavorite] = useState(false);

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>
                    {`---${item.author},${item.date}`}
                </Text>
            </View>

        )
    }
    return (
        <FlatList
            data={comments.filter((comment) => comment.itemId === item.id)}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
                marginHorizontal: 10,
                paddingVertical: 10,
            }}
            ListHeaderComponent={
                <>
                    <RenderField
                        item={item}
                        isFavorite= {favorite}
                        markFavorite={()=>setFavorite(true)}
                    />
                    <Text style={styles.commentsTitle}>Comments</Text>
                </>
            }


        />
    )
}

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#4348D',
        padding: 10,
        paddingTop: 30
    },

    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'honeydew'
        
    }

})

export default FieldInfoScreen;