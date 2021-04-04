import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles.js';
import {cityChange, metric, imperial, fetchData, apiChange} from '../redux-state-container/actions.js';

const Settings = (props) => {
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <View style={[styles.container, {backgroundColor: currentState.currentColor}]}>
        <View style={styles.buttonData}>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(fetchData())}>
            <Ionicons name={'checkmark'} size={22} color={'#778899'}/></TouchableOpacity>
        </View>
        <Text style={styles.city}>YOUR LOCATION</Text>
        <TextInput style={styles.locationInput} placeholder="Enter city "
        onChangeText={city => dispatch(cityChange(city))}/>
        <Text style={styles.city}>TEMPERATURE</Text>
        <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={ () => { dispatch(metric()); dispatch(fetchData()) } }>
        <Text style={styles.unitButton}>°C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ () => { dispatch(imperial()); dispatch(fetchData()) } }>
        <Text style={styles.unitButton}>°F</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.city}>OPENWEATHERMAP</Text>
        <Text style={styles.city}>API KEY</Text>
        <TextInput style={styles.locationInput} placeholder="Enter API KEY "
        onChangeText={apiKey => dispatch(apiChange(apiKey))}/>
        </View>
    );
}

export default Settings;