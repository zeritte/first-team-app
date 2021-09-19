import React from "react";
import { StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm headerText="Login to Account" submitButtonText="LOGIN" />
      <NavLink text="Don't have an account? Register instead." routeName="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default LoginScreen;
