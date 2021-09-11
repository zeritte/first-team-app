import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkIsLoggedIn = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const value = await AsyncStorage.getItem('key_mail')

    if (keys.includes(value)) {
      setIsLoggedIn(true)
    }  else {
      setIsLoggedIn(false)
    }
    // local storage a bak
    // email kayitli mi diye
    // kontrol et
    // eger kayitli email varsa,
    // setIsLoggedIn(true)
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;

// () => {
//   return (
//     <App
//       ref={(navigator) => { // @??
//       setNavigator(navigator);}}
//     />
//   );
// }
