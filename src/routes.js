import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import Home from "./pages/Home";
import TimerSettings from "./pages/TimerSettings";
import Header from "./components/Header/Header";
 
const Routes = () => {
    return (
        <NavigationContainer>
          <Navigator
            screenOptions={{
              headerShown: false,
              // cardStyle: { backgroundColor: "#fef3f5" },
            }}
          >
            <Screen
              name="Home"
              component={Home}
              options={{ 
                    gestureEnabled: false,
                    headerShown: true,
                    header: () => (
                    <Header title="Pomodoro Timer" showCancel={false} />
                    ), 
                }}
            />
            <Screen
              name="TimerSettings"
              component={TimerSettings}
              options={{
                headerShown: true,
                header: () => (
                  <Header title="Timer Settings" showCancel={false} />
                ),
              }}
            />
          </Navigator>
        </NavigationContainer>
      );
}

export default Routes;
