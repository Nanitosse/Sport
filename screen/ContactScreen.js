import { Text, View, Modal, StyleSheet, Alert } from "react-native"
import { useState } from "react";
import { Input, Button, Icon } from "react-native-elements";
import * as MailComposer from 'expo-mail-composer'




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
        Alert.alert('pleas enter your contact')
           
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
                    <View style={{ backgroundColor: 'white', borderRadius: 10, flex: 1, marginTop: 90 }}>
                        <Input
                            placeholder="Full-Name"
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            onChangeText={(name) => setNAme(name)}
                            value={name}
                        />
                        <Input
                            placeholder="Phone Number"
                            // leftIcon={{ type: 'font-awesome', name: 'mobile-o' }}
                            onChangeText={(phone) => setPhone(phone)}
                            value={phone}
                        />
                        <Input
                            placeholder="Email"
                            leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                            onChangeText={(email) => setEmail(email)}
                            value={email}
                        />
                        <Input
                            placeholder="Address"
                            leftIcon={{ type: 'font-awesome', name: 'address-card' }}
                            onChangeText={(address) => setAddress(address)}
                            value={address}
                        />
                        <View>
                            <Button
                                onPress={() => setModal(false)}
                                style={{ color: 'blue', justifyContent: 'center', marginTop: 25, padding: 15 }}
                                title='Cancel'
                            />
                        </View>
                        <View>
                            <Button
                                onPress={() => {
                                    handelSubmit();
                                    resetForm();
                                }}
                                style={{ color: 'blue', justifyContent: 'center', marginTop: 25, padding: 15 }}
                                title='Submit'
                            />
                            <Button
                                onPress={() => sendMail()}
                                buttonStyle={{ backgroundColor: '#5637DD', margin: 40 }}
                                title='Send Email'
                                icon={
                                    <Icon
                                        name='envelope-o'
                                        type='font-awesome'
                                        color='#fff'
                                        iconStyle={{marginright:10}}

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
            color: 'blue',
            padding: 0,
            justifyContent: 'center',
            marginTop: 30,


        }
    }
})


export default ContactScreen;


