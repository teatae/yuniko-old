const initialState = {
  mounted: 0,
  colorId: 3,
  currentColor: "#9ACEFE",

  currentUnit: "°C",
  currentUnitName: "metric",

  apiKey: "",

  loading: 0,
  city: "",
  image: "no",
  temp: "???",
  feelsLike: "???",
  data: null,

  alarm: "",
  alarmStatus: 0,
  alarmSoundStatus: 0,
  time: "???",
  ampm: "???",
  day: "???"
};

export const reducer = (state = initialState, action) => {
  const color = ["#FF8BC8","#C68DFE","#FE8C8C","#9ACEFE","#A5EC5E"];
  const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const unit = ["°C","°F"];
  const unitType = ["metric","imperial"];
  switch(action.type) {
    case 'MOUNTED': return {... state, mounted: 1}
    case 'COLOR_CHANGE': return {... state, currentColor: color[(state.colorId+1)%5], colorId: (state.colorId+1)%5}
    case 'METRIC': return {... state, currentUnit: unit[0], currentUnitName: unitType[0]}
    case 'IMPERIAL': return {... state, currentUnit: unit[1], currentUnitName: unitType[1]}
    case 'ALARM_ON': return {... state, alarmStatus: 1}
    case 'ALARM_OFF': return {... state, alarmStatus: 0}
    case 'ALARM_SOUND': return {... state, alarmSoundStatus: 1}
    case 'ALARM_NOSOUND': return {... state, alarmSoundStatus: 0}
    case 'CITY_CHANGE': return {... state, city: action.value}
    case 'API_CHANGE': return {... state, apiKey: action.value}
    case 'ALARM_CHANGE': return {... state, alarm: action.value}
    case 'TIME_TICK':
      var time = new Date();
      var formatTime = time.toLocaleTimeString().split(":");
      if (formatTime[2].substring(2) != "") {
        state.ampm = formatTime[2].substring(3);
        formatTime[0] = formatTime[0]%12
        if (formatTime[0] < 10) { formatTime[0] = "0"+formatTime[0]%12; }
        formatTime = formatTime.join(" ").substring(0,8);
      } else {
        if (formatTime[0]/12 < 1) {
          state.ampm = "AM";
        } else {
          state.ampm = "PM";
        }
        formatTime[0] = formatTime[0]%12;
        if (formatTime[0] < 10) {
          formatTime[0] = "0"+formatTime[0]%12;
        }
        formatTime = formatTime.join(" ");
      }
      return {... state, time: formatTime, ampm: state.ampm, day: weekday[time.getDay()]}
      
    case 'SoundStatus': return {... state, loading: 1}
    case 'SUCCESS':
      var weatherData = JSON.parse(JSON.stringify(action.data));
      var imageData = 'no';
      var weatherId = weatherData.weather[0].id+"";
      switch (weatherId.charAt(0)) {
        case '2': imageData = "stormy"; break;
        case '3': imageData = "rainy"; break;
        case '5': imageData = "rainy"; break;
        case '6': imageData = "snowy"; break;
        case '7': imageData = "foggy"; break;
        case '8':
          switch (weatherId.charAt(2)) {
            case '0': imageData = "sunny"; break;
            case '1': imageData = "partrycloudy"; break;
            default: imageData = "cloudy"; break;
          } break;
          default: imageData = "no"; break;
        }
        return{
          ... state,
          loading: 0,
          data: weatherData,
          temp: weatherData.main.temp,
          feelsLike: weatherData.main.feels_like,
          city: weatherData.name,
          image: imageData
        }
      case 'FAILURE':
        return {
          ... state,
          loading: 0,
          data: ['MOUNTED'],
          temp: "???",
          feelsLike: "???",
          city: "Wrong city input!! ",
          image: "no"
        }
    default: return state;
  }
};