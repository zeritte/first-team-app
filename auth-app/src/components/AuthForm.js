import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {
  emailValidate,
  nameValidate,
  passwordValidate,
} from "../textValidator";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, isRegister = false, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null); // @?? useState('') olabilir miydi, bos string false yerine gecmeyebilir
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    if (isRegister) setNameError(nameValidate(name));
  }, [isRegister, name]);

  useEffect(() => {
    setEmailError(emailValidate(email));
  }, [email]);

  useEffect(() => {
    setPasswordError(passwordValidate(password));
  }, [password]);

  const navigation = useNavigation();

  // To determine the route of a screen to go when correctly formatted inputs are given and the button appears.
  let buttonRouteName = "Profile";
  if (isRegister) buttonRouteName = "Login";

  return (
    <SafeAreaView style={{ flex: 4 }}>
      <ScrollView>
        <Text style={styles.header}>{headerText}</Text>
        {isRegister && (
          //fragment --> <></> @?? tam olarak neydi
          <View>
            <Input
              label="Name"
              value={name}
              onChangeText={setName}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {nameError && <Text style={styles.errorMessage}>{nameError}</Text>}
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
        {emailError && <Text style={styles.errorMessage}>{emailError}</Text>}
        <Spacer />
        <Input
          secureTextEntry // bu sifrenin gozukmemesini sagliyor
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {passwordError && (
          <Text style={styles.errorMessage}>{passwordError}</Text>
        )}
        {/* kisaltma */}
        {/* isRegister kontrolune ihtiyac kalmadi çünkü zaten loginscreen için nameError default null olacak @?? "(isRegister && !(nameError || emailError || passwordError)) yerine asagidaki satır"*/}
        {!(nameError || emailError || passwordError) && (
          <Button
            title={submitButtonText}
            onPress={() => navigation.navigate(buttonRouteName)}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 12,
    marginLeft: 5,
  },
  header: {
    color: "lightslategrey",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
});

export default AuthForm;
