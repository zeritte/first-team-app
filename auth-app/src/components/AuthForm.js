import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { emailValidate, nameValidate, passwordValidate } from "../textValidator";
import Spacer from "./Spacer";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const AuthForm = ({ headerText, isRegister = false, submitButtonText }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [buttonRouteName] = useState(isRegister ? "Login" : "Profile"); // using useState for variables is important because its the way react understands what to update or not
  const { setItem } = useAsyncStorage("@email_key");

  useEffect(() => {
    if (isRegister) setNameError(nameValidate(name));
  }, [isRegister, name]);

  useEffect(() => {
    setEmailError(emailValidate(email));
  }, [email]);

  useEffect(() => {
    setPasswordError(passwordValidate(password));
  }, [password]);

  //AsyncStorage

  // register ---> login ----> profile

  const onSubmit = async () => {
    if (buttonRouteName === "Profile") {
      await setItem(email);
    }
    navigation.navigate(buttonRouteName);
  };

  return (
    <SafeAreaView style={{ flex: 4 }}>
      <ScrollView>
        <Text style={styles.header}>{headerText}</Text>
        {isRegister && (
          <View>
            <Input
              label="Name"
              value={name}
              onChangeText={setName}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {!!nameError && <Text style={styles.errorMessage}>{nameError}</Text>}
          </View>
        )}
        <Spacer />
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {!!emailError && <Text style={styles.errorMessage}>{emailError}</Text>}
        <Spacer />
        <Input
          secureTextEntry // bu sifrenin gozukmemesini sagliyor
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {!!passwordError && <Text style={styles.errorMessage}>{passwordError}</Text>}
        {!(nameError || emailError || passwordError) && (
          <Button title={submitButtonText} onPress={onSubmit} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 12,
    marginLeft: 5
  },
  header: {
    color: "lightslategrey",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center"
  }
});

export default AuthForm;
