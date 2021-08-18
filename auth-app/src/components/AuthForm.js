import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { emailValidate, nameValidate, passwordValidate } from '../textValidator';
import Spacer from './Spacer';

const AuthForm = ({ errorMessage, headerText, isRegister, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  /*
return (
  <View>
     <Text>Şifrenizi Girin:</Text>
     <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
     />
     <Text>{password}</Text>
     {password.length <= 5 ? <Text>Şifreniz 5 karakterden uzun olmalıdır!</Text> : null}
  </View>
);
*/
  return (
    <>
      <Spacer>
        <Text h3={style=styles.header}>{headerText}</Text>
      </Spacer>
      {isRegister ? (
        <Input style={styles.name}
          label="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          autoCorrect={false}
        />
      ) : null}
      {isRegister && !nameValidate(name) ? <Text style={styles.errorMessage}>Your name should be 5 or more characters and doesn't include space(' ')!</Text> : null}
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        //onChangeText={() => {setEmail}} @?? bu sekilde yapinca ekranda her yazdiktan sonra siliyordu neden
        autoCapitalize="none"
        autoCorrect={false}
      />
      {emailValidate(email) ? null : <Text style={styles.errorMessage}>Your email should include one '@' sign and two dots('.')!</Text>}
      
      <Input
        secureTextEntry // bu sifrenin gozukmemesini sagliyor
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {passwordValidate(password) ? null : <Text style={styles.errorMessage}>Your password should be at least 6 characters!</Text>}
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        {emailValidate(email) && nameValidate(name) && passwordValidate(password) ? <Button
          title={submitButtonText}/> : null
        }
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  },
  header: {
    marginTop: 20
  },
  name: {
    marginTop: 150
  }
});

export default AuthForm;
