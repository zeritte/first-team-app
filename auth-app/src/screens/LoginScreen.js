import React from "react";
import { StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

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
/*
// @?? burasi muhtemelen RN6'da yok - duzeltilmeli
LoginScreen.navigationOptions = () => {
  return {
    header: () => false,
  }  
};
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  }
});

export default LoginScreen;
