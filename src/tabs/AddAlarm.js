import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles.js';
import {alarmOn, alarmOff, cityChange, alarmChange} from '../redux-state-container/actions.js';

const AddAlarm = (props) => {
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
    <View style={[styles.container, {backgroundColor: currentState.currentColor}]}>
    <Text style={styles.city}>EDIT ALARM</Text>
        <TextInput style={styles.locationInput} placeholder="Use format 1259 (HHMM) "
        onChangeText={ alarm => dispatch(alarmChange(alarm.substring(0,2)+" "+alarm.substring(2)))} />
    </View>
    );
}

export default AddAlarm;