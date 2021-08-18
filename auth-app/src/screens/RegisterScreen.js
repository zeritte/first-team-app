import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationActions, NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const RegisterScreen = ({ navigation }) => {

  // onWillFocus : clearErrorMessage olacak
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus="" />
      <AuthForm
        //errorMessage="" // state.errorMessage olacak
        headerText="Create New Account"
        isRegister={true}
        submitButtonText="REGISTER"
      />
      <NavLink
        routeName="Login"
        text="Already have an account? Log in instead!"
      />
    </View>
  );
};

// sayfanin en ust kisminda yukaridaki "headerText" ksiminin gorunmesini engelliyor
RegisterScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default RegisterScreen;
