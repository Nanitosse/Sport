import { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Switch, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';



const ReservationScreen = () => {

    [trainees, setTrainees] = useState(1)
    const [calis, setCalis] = useState(false)
    const [weight, setWeight] = useState(false)
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === 'ios');
        setDate(currentDate);
    };


    const handleReservation = () => {
        console.log('trainees', trainees);
        console.log('calis', calis);
        console.log('weight', weight);
        console.log('date', date);
        setCalis(1);
        setWeight(false);
        setDate(new Date());
        setShowCalendar(false);
    }

    return (
        <ScrollView>
            <View style={StyleSheet.formRow}>
                <Text style={{ color:'white'}}>Number of trainees</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={trainees}
                    onValueChange={(itemValue) => setTrainees(itemValue)}
                >
                    <Picker.Item label='1' value={1} />
                    <Picker.Item label='2' value={2} />
                    <Picker.Item label='3' value={3} />
                    <Picker.Item label='4' value={4} />
                    <Picker.Item label='5' value={5} />
                    <Picker.Item label='6' value={6} />
                </Picker>
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Calisthenics</Text>
                <Switch
                    style={styles.formItem}
                    value={calis}
                    trackColor={{ true: "#5637DD", false: null }}
                    onValueChange={(value) => setCalis(value)}
                />
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Weight</Text>
                <Switch
                    style={styles.formItem}
                    value={weight}
                    trackColor={{ true: "#5637DD", false: null }}
                    onValueChange={(value) => setWeight(value)}
                />
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}> Date</Text>
                <Button
                    onPress={() => setShowCalendar(!showCalendar)}
                    title={date.toLocaleDateString('en-US')}
                    color='honeydew'
                    accessibilityLabel=' TApe me to select a reservation date'

                />
            </View>
            {
                showCalendar && (
                    <DateTimePicker
                        style={styles.formItem}
                        value={date}
                        mode='date'
                        display='default'
                        onChange={onDateChange}
                    />
                )
            }
            <View style={styles.formRow}>
                <Button
                    onPress={() => handleReservation()}
                    title='Search Availability'
                    color='white'
                    accessibilityLabel='Tap me to search for available campsites to reserve'

                />


            </View>


        </ScrollView>
    )
}

const styles= StyleSheet.create({
    formRow:{
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
        flexDirection: 'row ',
        margin:20
    },
    formLabel:{
        fontSize:18,
        flex:2,
        color:'white'
    },
    formItem:{
        flex:1
    }

})

export default ReservationScreen