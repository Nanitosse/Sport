import { Text, View, Modal, StyleSheet, Alert } from "react-native"
import { useState } from "react";
import { Input, Button, Icon, Card } from "react-native-elements";
import * as MailComposer from 'expo-mail-composer';




const ContactScreen = () => {
    const [modal, setModal] = useState(false);
    const [name, setNAme] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const sendMail = () => {
        MailComposer.composeAsync({
            recipients: ['nanitosse@gmail.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'

        });
    }

    const print = () => {
        Alert.alert(' contact-US')

    }

    const resetForm = () => {
        setNAme(''),
            setPhone('')
        setEmail('')
        setAddress('')
    }
    const handelSubmit = () => {
        console.log({
            Name: name,
            Phone: phone,
            Email: email,
            Address: address


        })



    }

    return (
        <View style={styles.centeredView}>

            <View style={{ marginBottom: 2, }}>
                <Text>Press the Button to Open the Contact Form</Text>
                <Button
                    onPress={() => setModal(true)}
                    style={styles.hide}
                    title='OPEN'
                />
            </View>
            <Modal
                // presentationStyle="overFullScreen"
                animationType="slide"
                visible={modal}
                transparent={true}
                onShow={() => print()}
            >
                <View style={{ backgroundColor: 'transparent', flex: 1 }}>
                    <View style={{ backgroundColor: 'transparent', borderRadius: 10, flex: 1, marginTop: 90 }}>
                        <Card

                        >
                            <Card.Title>Contact-US</Card.Title>
                            <Text>Address</Text>
                            <Text>State:NJ</Text>
                            <Text>City: JerseyCity</Text>
                            <Text>Complexe: </Text>
                            <Text>Phone-Number: 2019360720</Text>
                            <Text>Email: nanitosse@gmail.com</Text>
                        </Card>
                        <View>
                            <Button
                                onPress={() => {
                                    setModal(false)
                                }}
                                style={{ color: 'transparent', justifyContent: 'center', marginTop: 10, padding: 15 }}
                                title='Cancel'
                            />
                        </View>
                        <View>
                            <Button
                                onPress={() => sendMail()}
                                buttonStyle={{ backgroundColor: 'transparent', marginTop:-10 }}
                                title='Send Email'
                                icon={
                                    <Icon
                                        name='envelope-o'
                                        type='font-awesome'
                                        color='transparent'
                                        iconStyle={{ marginright: 10, }}

                                    />
                                }
                            />
                        </View>

                    </View>
                </View>
            </Modal>
        </View>








    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    container: {
        modal: {
            justifyContent: 'center',
            margin: 0,

        },
        text: {
            color: 'yellow',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontStyle: 'italic'
        },
        button: {
            color: 'blue',
            justifyContent: 'center',
            padding: 0,
        },
        hide: {
            color: 'green',
            padding: 0,
            justifyContent: 'center',
            marginTop: 30,


        }
    }
})


export default ContactScreen;


