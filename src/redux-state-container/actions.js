import axios from 'axios';

export const mounted = () => {
    return {
        type: 'MOUNTED'
    }
}

let timeTimer = null;
export const startTime = () => (dispatch) => {
  clearInterval(timeTimer);
  timeTimer = setInterval(() => dispatch(timeTick()), 1000);
}
export const stopTime = () => {
    clearInterval(timeTimer);
    return {
        type: 'TIME_STOP'
    }
}
export const timeTick = () => {
    return {
        type: 'TIME_TICK'
    }
}

export const changeColor = () => {
    return {
        type: 'COLOR_CHANGE'
    }
}

export const alarmOn = () => {
    return {
        type: 'ALARM_ON'
    }
}

export const alarmOff = () => {
    return {
        type: 'ALARM_OFF'
    }
}

export const alarmSound = () => {
    return {
        type: 'ALARM_SOUND'
    }
}

export const alarmNoSound = () => {
    return {
        type: 'ALARM_NOSOUND'
    }
}

export const cityChange = (city) => {
    return {
        type: 'CITY_CHANGE',
        value: city
    }
}

export const alarmChange = (alarm) => {
    return {
        type: 'ALARM_CHANGE',
        value: alarm
    }
}

export const apiChange = (city) => {
    return {
        type: 'API_CHANGE',
        value: city
    }
}

export const metric = () => {
    return {
        type: 'METRIC'
    }
}

export const imperial = () => {
    return {
        type: 'IMPERIAL'
    }
}

let fetchTimer = null;
export const startFetch = () => (dispatch) => {
  clearInterval(fetchTimer);
  fetchTimer = setInterval(() => dispatch(fetchData()), 30000);
}
export const stopFetch = () => {
    console.log("stop timer")
    clearInterval(fetchTimer);
    return {
        type: 'FETCH_STOP'
    }
}
export const fetchData = () => async(dispatch, getState) => {
    var state = getState();
    dispatch({type: 'REQUEST'});
    try {
        console.log("fetching api data");
        const request_url = "http://api.openweathermap.org/data/2.5/weather?appid=" + state.apiKey + "&q=" + state.city + "&units=" + state.currentUnitName + "&mode=json";
        //const request_url = "http://api.openweathermap.org/data/2.5/weather?appid=" + "apikey" + "&q=" + "Montreal" + "&units=" + "metric" + "&mode=json";
        const response = await axios.get(request_url);
        dispatch({type: 'SUCCESS', data: response.data});
    } catch (error) {
        console.log("error");
        dispatch({type: 'FAILURE'})
    }
};