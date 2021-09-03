import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { setNavigator } from './src/navigationRef';

// @?? sayfalar arasu gecis navigasyon ayari react 5-6 olmali
// bu kisim duzektilecek rn6 navigation ayarina gore
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