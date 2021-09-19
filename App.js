import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function sleep(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

function App() {
  const [initialRouteName, setInitialRouteName] = useState(null);
  const { getItem } = useAsyncStorage('@email_key');

  const checkIsLoggedIn = async () => {
    await sleep(3);
    const email = await getItem();

    if (email !== null) {
      setInitialRouteName('Profile');
    } else {
      setInitialRouteName('Register');
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  if (initialRouteName === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
