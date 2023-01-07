import { useState } from 'react';
import RenderField from '../features/Fields/RenderField'
import { FlatList, StyleSheet, Text, View, Button, Modal, } from 'react-native';
// import { COMMENTS } from '../shared/comment';
import { Input, Icon, Rating } from 'react-native-elements';
import { postComment } from '../features/comments/commentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favorite/favoriteSlice';


const FieldInfoScreen = ({ route }) => {
    const { item } = route.params;
    const comments = useSelector((state) => state.comments);
    // const [favorite, setFavorite] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState();
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    handleSubmit = () => {
        const newComment = {
            rating,
            author,
            text,
            itemId: item.id,

        }

        dispatch(postComment(newComment));
        setShowModal(!showModal);

    }

    const resetForm = () => {
        setRating();
        setAuthor('');
        setText('');

    }


    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                {/* <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text> */}
                <Rating
                    readonly={true}
                    style={{ alignItems: 'flex-start', paddingVertical: '5%' }}
                    startingValue={rating}
                    imageSize={10}
                />
                <Text style={{ fontSize: 12 }}>
                    {`---${item.author},${item.date}`}
                </Text>
            </View>

        )
    }
    return (
        <>
            <FlatList
                data={comments.commentsArray.filter((comment) => comment.itemId === item.id)}
                renderItem={renderCommentItem}
                // keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    marginHorizontal: 10,
                    paddingVertical: 10,
                }}
                ListHeaderComponent={
                    <>
                        <RenderField
                            item={item}
                            isFavorite={favorites.includes(item.id)}
                            markFavorite={() => dispatch(toggleFavorite(item.id))}
                            onShowModal={() => setShowModal(!showModal)}
                        />
                        <Text style={styles.commentsTitle}>Comments</Text>
                    </>
                }


            />

            <Modal
                animationType='slide'
                transparent={false}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}

            >

                <View style={styles.modal}>
                    <Rating
                        showRating
                        startingValue={rating}
                        tintColor='bue-Sky'
                        type='star'
                        onFinishRating={(rating) => setRating(rating)}
                        style={{ paddingVertical: 10 }}
                        imageSize={40}
                    />
                    <Input
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        onChangeText={(author) => setAuthor(author)}
                        value={author}
                        placeholder="Full-Name"
                    />
                    <Input

                        leftIconContainerStyle={{ paddingRight: 40 }}
                        onChangeText={(text) => setText(text)}
                        value={text}
                        leftIcon={{ type: 'font-awesome', name: "comment-o" }}
                        placeholder='Comment'
                        autoCorrect={false}
                    />
                    <View style={{ margin: 10 }}>
                        <Button
                            title='Submit'
                            color="blue"
                            onPress={
                                () => {
                                    handleSubmit();
                                    resetForm();
                                }
                            }
                        />


                    </View>
                    <View style={{ margin: 10 }}>
                        <Button
                            onPress={() => setShowModal(!showModal)}
                            color="blue"
                            title='Cancel'
                        />

                    </View>
                </View>

            </Modal>
        </>


    )
}

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#4348D',
        padding: 0,
        paddingTop: 0
    },

    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'honeydew'

    },

    modal: {
        justifyContent: 'center',
        margin: 20
    }

})

export default FieldInfoScreen;