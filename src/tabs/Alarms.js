import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles.js';
import {alarmOn, alarmOff, cityChange, alarmChange} from '../redux-state-container/actions.js';

const Alarms = (props) => {
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <View style={[styles.container, {backgroundColor: currentState.currentColor}]}>
            <Text style={styles.city}>ALARMS</Text>
            <Text style={styles.ampm}> {currentState.alarm}</Text>
        </View>
    );
}

export default Alarms;