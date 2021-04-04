import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './redux-state-container/reducers.js';

import Home from './tabs/Home.js';
import AddAlarm from './tabs/AddAlarm.js';
import Alarms from './tabs/Alarms.js';
import Settings from './tabs/Settings.js';

//import { loadState, saveState } from './redux-state-container/localStorage.js';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const App = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'time' : 'time-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-settings-sharp' : 'ios-settings-outline';
              } else if (route.name === 'add Alarm') {
                iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
              } else if (route.name === 'Alarms') {
                iconName = focused ? 'alarm' : 'alarm-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" options={{ title: 'HOME' }} component={Home} />
          <Tab.Screen name="add Alarm" options={{ title: 'EDIT ALARM' }} component={AddAlarm} />
          <Tab.Screen name="Alarms" options={{ title: 'ALARMS' }} component={Alarms} />
          <Tab.Screen name="Settings" options={{ title: 'SETTINGS' }} component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const Tab = createBottomTabNavigator();
export default App;