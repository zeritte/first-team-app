import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Login to Account"
        isRegister={false}
        submitButtonText="LOGIN"
      />
      <NavLink
        text="Don't have an account? Register instead."
        routeName="Register"
      />
    </View>
  );
};

LoginScreen.navigationOptions = () => {
  return {
    header: () => false,
  }  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default LoginScreen;
