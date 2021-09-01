import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { emailValidate, nameValidate, passwordValidate } from '../textValidator';
import Spacer from './Spacer';

const AuthForm = ({ errorMessage, headerText, isRegister, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  /* @?? -> !! hataları validator'de döndürmek daha iyi olur */
  useEffect(() => {
    if (!nameValidate(name)) {
        setNameError("Your name should be 5 or more characters and doesn't include space(' ')")
    }
  }, [name])

  useEffect(() => {
    if (!emailValidate(email)) {
        setEmailError("Your email should include one '@' sign and two dots('.')!")
    }
  }, [email])

  useEffect(() => {
    if (!passwordValidate(password)) {
        setPasswordError("Your password should be at least 6 characters!")
    }
  }, [password])

  return (
    <SafeAreaView>
      <ScrollView>
      <Text style={styles.header}>{headerText}</Text>
      {isRegister ? (
        <Input
          label="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          autoCorrect={false}
        />
      ) : null}
      {isRegister && !nameValidate(name) ? <Text style={styles.errorMessage}>{nameError}</Text> : null}
      <Spacer/>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {emailValidate(email) ? null : <Text style={styles.errorMessage}>{emailError}</Text>}
      <Spacer/>
      <Input
        secureTextEntry // bu sifrenin gozukmemesini sagliyor
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {passwordValidate(password) ? null : <Text style={styles.errorMessage}>{passwordError}</Text>}{errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
        {isRegister && emailValidate(email) && nameValidate(name) && passwordValidate(password) ? <Button
          title={submitButtonText}/> : null
        }
        {!isRegister && emailValidate(email) && passwordValidate(password) ? <Button
          title={submitButtonText}/> : null
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginLeft: 5
  },
  header: {
    color: 'lightslategrey',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  }
});

export default AuthForm;
