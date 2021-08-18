import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { setNavigator } from './src/navigationRef';

// switchnavigator'a gerek yok
const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Register: RegisterScreen,
      Login: LoginScreen,
    }),
  });

  const App = createAppContainer(switchNavigator);
  
  export default () => {
    return (
        <App 
          ref={(navigator) => { // @??
            setNavigator(navigator);
          }}
        />
    );
  }