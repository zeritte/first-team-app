import * as React from 'react'; // bu * ne demek
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { setNavigator } from './src/navigationRef';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '' }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: '' }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: '' }}/>
      </Stack.Navigator>
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