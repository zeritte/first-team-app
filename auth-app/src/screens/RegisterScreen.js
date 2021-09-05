import React from 'react';
import { StyleSheet, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Create New Account"
        isRegister
        submitButtonText="REGISTER"
      />
      <NavLink
        routeName="Login"
        text="Already have an account? Log in instead!"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default RegisterScreen;
