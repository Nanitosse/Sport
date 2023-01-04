import { useState } from 'react';
import RenderField from '../features/Fields/RenderField'
import { FlatList, StyleSheet, Text, View, Button, Modal, } from 'react-native';
import { COMMENTS } from '../shared/comment';
import { Input, Icon, Rating } from 'react-native-elements';
import { postComment } from '../features/comments/commentsSlice';
import { useDispatch } from 'react-redux';


const FieldInfoScreen = ({ route }) => {
    const { item } = route.params;
    const [comments, setCommnets] = useState(COMMENTS);
    const [favorite, setFavorite] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState();
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const dispatch= useDispatch();

    handleSubmit = () => {
        const newComment = {
            rating,
            author,
            text,
            itemId: item.id,

        }

    
        setShowModal(!showModal);
        
        dispatch(postComment(newComment));
        
       
        
        
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
                    style={{alignItems:'flex-start', paddingVertical:'5%'}}
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
                            isFavorite={favorite}
                            markFavorite={() => setFavorite(true)}
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