import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles.js';

import { Audio } from 'expo-av';

//import {mounted, start, stopTime, changeColor, alarmMounting, alarmMounted, alarmOn, alarmOff, cityChange, alarmChange, metric, imperial, startFetch, stopFetch, fetchData} from './actions.js';
import {mounted, startTime, stopTime, changeColor, alarmOn, alarmOff, alarmSound, alarmNoSound, alarmChange, startFetch, stopFetch, fetchData} from '../redux-state-container/actions.js';

const FormatImage = (props) => {
    var toReturn = "";
    switch (props.imageData) {
        case "cloudy": toReturn = <Image style={styles.icon} source={require("../images/cloudy.png")}/>; break;
        case "foggy": toReturn = <Image style={styles.icon} source={require("../images/foggy.png")}/>; break;
        case "no": toReturn = <Image style={styles.icon} source={require("../images/no.png")}/>; break;
        case "partrycloudy": toReturn = <Image style={styles.icon} source={require("../images//partrycloudy.png")}/>; break;
        case "rainy": toReturn = <Image style={styles.icon} source={require("../images/rainy.png")}/>; break;
        case "snowy": toReturn = <Image style={styles.icon} source={require("../images/snowy.png")}/>; break;
        case "sunny": toReturn = <Image style={styles.icon} source={require("../images/sunny.png")}/>; break;
        case "stormy": toReturn = <Image style={styles.icon} source={require("../images/stormy.png")}/>; break;
        default: toReturn = <Image style={styles.icon} source={require("../images/no.png")}/>; break;
    }
    return toReturn;
}

const Home = (props) => {
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();

    const [sound, setSound] = useState();

    if (!currentState.mounted) {
        dispatch(fetchData());
        dispatch(startTime());
        dispatch(startFetch());
        dispatch(mounted());
    }
    
    async function playGreeting() {
        var greeting;
        console.log('Loading Greeting');
        switch (currentState.ampm) {
            case "AM": greeting = Audio.Sound.createAsync( require('../sounds/greet_goodmorning.mp3') ); break;
            case "PM": greeting = Audio.Sound.createAsync( require('../sounds/greet_hello.mp3') ); break;
            default: greeting = Audio.Sound.createAsync( require('../sounds/greet_hello.mp3') ); break;
        }
        const { sound } = await greeting;
        setSound(sound);
        console.log('Playing Greeting');
        await sound.playAsync();
    }


    async function playIts() {
        console.log('Loading ITS');
        const { sound } = await Audio.Sound.createAsync( require('../sounds/its.mp3') );
        setSound(sound);
        console.log('Playing ITS');
        await sound.playAsync();
    }

    async function playHour() {
        var time = currentState.time.split(" ");
        var hour;
        console.log('Loading Hour');
        switch (parseInt(time[0])) {
            case 0: hour = Audio.Sound.createAsync( require('../sounds/hour_12.mp3') ); break;
            case 1: hour = Audio.Sound.createAsync( require('../sounds/hour_1.mp3') ); break;
            case 2: hour = Audio.Sound.createAsync( require('../sounds/hour_2.mp3') ); break;
            case 3: hour = Audio.Sound.createAsync( require('../sounds/hour_3.mp3') ); break;
            case 4: hour = Audio.Sound.createAsync( require('../sounds/hour_4.mp3') ); break;
            case 5: hour = Audio.Sound.createAsync( require('../sounds/hour_5.mp3') ); break;
            case 6: hour = Audio.Sound.createAsync( require('../sounds/hour_6.mp3') ); break;
            case 7: hour = Audio.Sound.createAsync( require('../sounds/hour_7.mp3') ); break;
            case 8: hour = Audio.Sound.createAsync( require('../sounds/hour_8.mp3') ); break;
            case 9: hour = Audio.Sound.createAsync( require('../sounds/hour_9.mp3') ); break;
            case 10: hour = Audio.Sound.createAsync( require('../sounds/hour_10.mp3') ); break;
            case 11: hour = Audio.Sound.createAsync( require('../sounds/hour_11.mp3') ); break;
            case 12: hour = Audio.Sound.createAsync( require('../sounds/hour_12.mp3') ); break;
            default: hour = Audio.Sound.createAsync( require('../sounds/hour_12.mp3') ); break;
        }
        const { sound } = await hour;
        setSound(sound);
        console.log('Playing Hour');
        await sound.playAsync();
    }

    async function playMin() {
        var time = currentState.time.split(" ");
        var min;
        console.log('Loading Mins');
        switch (parseInt(time[1])) {
            case 1: min = Audio.Sound.createAsync( require('../sounds/min_1.mp3') ); break;
            case 2: min = Audio.Sound.createAsync( require('../sounds/min_2.mp3') ); break;
            case 3: min = Audio.Sound.createAsync( require('../sounds/min_3.mp3') ); break;
            case 4: min = Audio.Sound.createAsync( require('../sounds/min_4.mp3') ); break;
            case 5: min = Audio.Sound.createAsync( require('../sounds/min_5.mp3') ); break;
            case 6: min = Audio.Sound.createAsync( require('../sounds/min_6.mp3') ); break;
            case 7: min = Audio.Sound.createAsync( require('../sounds/min_7.mp3') ); break;
            case 8: min = Audio.Sound.createAsync( require('../sounds/min_8.mp3') ); break;
            case 9: min = Audio.Sound.createAsync( require('../sounds/min_9.mp3') ); break;
            case 10: min = Audio.Sound.createAsync( require('../sounds/min_10.mp3') ); break;
            case 11: min = Audio.Sound.createAsync( require('../sounds/min_11.mp3') ); break;
            case 12: min = Audio.Sound.createAsync( require('../sounds/min_12.mp3') ); break;
            case 13: min = Audio.Sound.createAsync( require('../sounds/min_13.mp3') ); break;
            case 14: min = Audio.Sound.createAsync( require('../sounds/min_14.mp3') ); break;
            case 15: min = Audio.Sound.createAsync( require('../sounds/min_15.mp3') ); break;
            case 16: min = Audio.Sound.createAsync( require('../sounds/min_16.mp3') ); break;
            case 17: min = Audio.Sound.createAsync( require('../sounds/min_17.mp3') ); break;
            case 18: min = Audio.Sound.createAsync( require('../sounds/min_18.mp3') ); break;
            case 19: min = Audio.Sound.createAsync( require('../sounds/min_19.mp3') ); break;
            case 20: min = Audio.Sound.createAsync( require('../sounds/min_20.mp3') ); break;
            case 21: min = Audio.Sound.createAsync( require('../sounds/min_21.mp3') ); break;
            case 22: min = Audio.Sound.createAsync( require('../sounds/min_22.mp3') ); break;
            case 23: min = Audio.Sound.createAsync( require('../sounds/min_23.mp3') ); break;
            case 24: min = Audio.Sound.createAsync( require('../sounds/min_24.mp3') ); break;
            case 25: min = Audio.Sound.createAsync( require('../sounds/min_25.mp3') ); break;
            case 26: min = Audio.Sound.createAsync( require('../sounds/min_26.mp3') ); break;
            case 27: min = Audio.Sound.createAsync( require('../sounds/min_27.mp3') ); break;
            case 28: min = Audio.Sound.createAsync( require('../sounds/min_28.mp3') ); break;
            case 29: min = Audio.Sound.createAsync( require('../sounds/min_29.mp3') ); break;
            case 30: min = Audio.Sound.createAsync( require('../sounds/min_30.mp3') ); break;
            case 31: min = Audio.Sound.createAsync( require('../sounds/min_31.mp3') ); break;
            case 32: min = Audio.Sound.createAsync( require('../sounds/min_32.mp3') ); break;
            case 33: min = Audio.Sound.createAsync( require('../sounds/min_33.mp3') ); break;
            case 34: min = Audio.Sound.createAsync( require('../sounds/min_34.mp3') ); break;
            case 35: min = Audio.Sound.createAsync( require('../sounds/min_35.mp3') ); break;
            case 36: min = Audio.Sound.createAsync( require('../sounds/min_36.mp3') ); break;
            case 37: min = Audio.Sound.createAsync( require('../sounds/min_37.mp3') ); break;
            case 38: min = Audio.Sound.createAsync( require('../sounds/min_38.mp3') ); break;
            case 39: min = Audio.Sound.createAsync( require('../sounds/min_39.mp3') ); break;
            case 40: min = Audio.Sound.createAsync( require('../sounds/min_40.mp3') ); break;
            case 41: min = Audio.Sound.createAsync( require('../sounds/min_41.mp3') ); break;
            case 42: min = Audio.Sound.createAsync( require('../sounds/min_42.mp3') ); break;
            case 43: min = Audio.Sound.createAsync( require('../sounds/min_43.mp3') ); break;
            case 44: min = Audio.Sound.createAsync( require('../sounds/min_44.mp3') ); break;
            case 45: min = Audio.Sound.createAsync( require('../sounds/min_45.mp3') ); break;
            case 46: min = Audio.Sound.createAsync( require('../sounds/min_46.mp3') ); break;
            case 47: min = Audio.Sound.createAsync( require('../sounds/min_47.mp3') ); break;
            case 48: min = Audio.Sound.createAsync( require('../sounds/min_48.mp3') ); break;
            case 49: min = Audio.Sound.createAsync( require('../sounds/min_49.mp3') ); break;
            case 50: min = Audio.Sound.createAsync( require('../sounds/min_50.mp3') ); break;
            case 51: min = Audio.Sound.createAsync( require('../sounds/min_51.mp3') ); break;
            case 52: min = Audio.Sound.createAsync( require('../sounds/min_52.mp3') ); break;
            case 53: min = Audio.Sound.createAsync( require('../sounds/min_53.mp3') ); break;
            case 54: min = Audio.Sound.createAsync( require('../sounds/min_54.mp3') ); break;
            case 55: min = Audio.Sound.createAsync( require('../sounds/min_55.mp3') ); break;
            case 56: min = Audio.Sound.createAsync( require('../sounds/min_56.mp3') ); break;
            case 57: min = Audio.Sound.createAsync( require('../sounds/min_57.mp3') ); break;
            case 58: min = Audio.Sound.createAsync( require('../sounds/min_58.mp3') ); break;
            case 59: min = Audio.Sound.createAsync( require('../sounds/min_59.mp3') ); break;
            default: min = Audio.Sound.createAsync( require('../sounds/min_00.mp3') ); break;
        }
        const { sound } = await min;
        setSound(sound);
        console.log('Playing Mins');
        await sound.playAsync();
    }

    async function playAmpm() {
        var ampm;
        console.log('Loading AMPM');
        switch (currentState.ampm) {
            case "AM": ampm = Audio.Sound.createAsync( require('../sounds/ampm_am.mp3') ); break;
            case "PM": ampm = Audio.Sound.createAsync( require('../sounds/ampm_pm.mp3') ); break;
            default: ampm = Audio.Sound.createAsync( require('../sounds/ampm_am.mp3') ); break;
        }
        const { sound } = await ampm;
        setSound(sound);
        console.log('Playing AMPM');
        await sound.playAsync();
    }

    async function playDay() {
        var day;
        console.log('Loading Day');
        switch (currentState.day) {
            case "sunday": day = Audio.Sound.createAsync( require('../sounds/week_sunday.mp3') ); break;
            case "monday": day = Audio.Sound.createAsync( require('../sounds/week_monday.mp3') ); break;
            case "tuesday": day = Audio.Sound.createAsync( require('../sounds/week_tuesday.mp3') ); break;
            case "wednesday": day = Audio.Sound.createAsync( require('../sounds/week_wednesday.mp3') ); break;
            case "thursday": day = Audio.Sound.createAsync( require('../sounds/week_thursday.mp3') ); break;
            case "friday": day = Audio.Sound.createAsync( require('../sounds/week_friday.mp3') ); break;
            case "saturday": day = Audio.Sound.createAsync( require('../sounds/week_saturday.mp3') ); break;
            default: day = Audio.Sound.createAsync( require('../sounds/week_sunday.mp3') ); break;
        }
        const { sound } = await day;
        setSound(sound);
        console.log('Playing Day');
        await sound.playAsync();
    }

    async function playWeather() {
        var weather;
        console.log('Loading Weather');
        switch(currentState.image){
            case 'sunny': weather = Audio.Sound.createAsync( require('../sounds/music_sunny.mp3') ); break;
            case 'partrycloudy': weather = Audio.Sound.createAsync( require('../sounds/music_partrycloudy.mp3') ); break;
            case 'cloudy': weather = Audio.Sound.createAsync( require('../sounds/music_cloudy.mp3') ); break;
            case 'rainy': weather = Audio.Sound.createAsync( require('../sounds/music_rainy.mp3') ); break;
            case 'stormy': weather = Audio.Sound.createAsync( require('../sounds/music_stormy.mp3') ); break;
            case 'snowy': weather = Audio.Sound.createAsync( require('../sounds/music_snowy.mp3') ); break;
            case 'foggy': weather = Audio.Sound.createAsync( require('../sounds/music_foggy.mp3') ); break;
            case 'no': weather = Audio.Sound.createAsync( require('../sounds/music_sunny.mp3') ); break;
            default: weather = Audio.Sound.createAsync( require('../sounds/music_sunny.mp3') ); break;          
        }
        const { sound } = await weather;
        setSound(sound);
        console.log('Playing Weather');
        await sound.playAsync();
    }

    async function playMusic() {
        var music;
        console.log('Loading Music');
        switch(currentState.image){
            case 'sunny': music = Audio.Sound.createAsync( require('../sounds/m1.mp3') ); break;
            case 'partrycloudy': music = Audio.Sound.createAsync( require('../sounds/m2.mp3') ); break;
            case 'cloudy': music = Audio.Sound.createAsync( require('../sounds/m3.mp3') ); break;
            case 'rainy': music = Audio.Sound.createAsync( require('../sounds/m4.mp3') ); break;
            case 'stormy': music = Audio.Sound.createAsync( require('../sounds/m5.mp3') ); break;
            case 'snowy': music = Audio.Sound.createAsync( require('../sounds/m6.mp3') ); break;
            case 'foggy': music = Audio.Sound.createAsync( require('../sounds/m7.mp3') ); break;
            case 'no' : music = Audio.Sound.createAsync( require('../sounds/m8.mp3') ); break;
            default: music = Audio.Sound.createAsync( require('../sounds/m8.mp3') ); break;             
        }
        const { sound } = await music;
        setSound(sound);
        console.log('Playing Music');
        await sound.playAsync();
    }

    function sleep (fn) {
        return new Promise((resolve) => {
          setTimeout(() => resolve(fn()), 950)
        })
    }

    function sleepLong (fn) {
        return new Promise((resolve) => {
          setTimeout(() => resolve(fn()), 2800)
        })
    }

    async function playAll() {
        await sleep(playGreeting);
        await sleep(playIts);
        await sleep(playHour);
        await sleep(playMin);
        await sleep(playAmpm);
        await sleep(playDay);
        await sleep(playWeather);
        await sleepLong(playMusic);
    }

    async function stop() {
        await sound.stopAsync();
        await sound.unloadAsync();
    }

    if ((currentState.alarm == currentState.time.substring(0,5)) && 
        (currentState.time.substring(6)=='00') && 
        !currentState.alarmStatus) {
            dispatch(alarmOn());
    }

    if (!currentState.alarmSoundStatus && currentState.alarmStatus) {
        dispatch(alarmSound());
        playAll();
    }

    if (!currentState.alarmStatus && currentState.alarmSoundStatus) {
        dispatch(alarmNoSound());
        stop();
    }

    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

    return (
        <View style={[styles.container, {backgroundColor: currentState.currentColor}]}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(changeColor())}>
            <Ionicons name={'ios-color-filter-outline'} size={20} color={'#778899'}/></TouchableOpacity>
        </View>
        <View style={styles.buttonData}>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(fetchData())}>
            <Ionicons name={'refresh'} size={20} color={'#778899'}/></TouchableOpacity>
        </View>
            <View style={styles.row}>
            <Text>
                <Text style={styles.time}>{currentState.time}</Text>
                <Text style={styles.ampm}> {currentState.ampm}</Text>
            </Text>
            </View>
            <FormatImage imageData={currentState.image} />
            <Text style={styles.city}>{currentState.city}</Text>
            <Text style={styles.temp}>{currentState.temp}{currentState.currentUnit}/{currentState.feelsLike}{currentState.currentUnit}</Text>
            <Text></Text>
            <View style={styles.row}>
            <TouchableOpacity style={styles.alarmStyle} onPress={() => dispatch(alarmOn())}>
            <Text style={styles.unitButton}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.alarmStyle} onPress={() => dispatch(alarmOff())}>
            <Text style={styles.unitButton}>Stop</Text>
            </TouchableOpacity>
            </View>
        </View>
    );    
}

export default Home;