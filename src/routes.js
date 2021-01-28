import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home/Home';
import TimerSettings from './pages/TimerSettings/TimerSettings';
import Header from './components/Header/Header';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: "#fef3f5" },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
          headerShown: true,
          header: () => <Header title="Pomotimer" showReturn={false} />,
        }}
      />
      <Screen
        name="TimerSettings"
        component={TimerSettings}
        options={{
          headerShown: true,
          header: () => <Header title="Timer Settings" showSettings={false} />,
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
