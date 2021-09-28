import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Text, Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { emailValidate, nameValidate, passwordValidate } from '../textValidator';
import ShowError from './ShowError';
import Spacer from './Spacer';

const AuthForm = ({ headerText, isRegister = false, submitButtonText }) => {
  const navigation = useNavigation();
  // useState'leri en küçük objede/component'te oluşturmak lazım yoksa o componenti ilgilendirmeyen useState'lerden dolayı sayfa yeniden çalıştırıldığında gereksiz yere büütün useState'ler çalışır.
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [buttonRouteName] = useState(isRegister ? 'Login' : 'Profile'); // using useState for variables is important because it is the way react understands what to update or not
  // yukarıdaki gibi useState kullanımı bunu bir fonksiyon şeklinde yazmaya göre şu şekilde fayda sağlar: o alanda değişiklik olmadığı sürece tekrar bu fonksiyonu çalıştırmamış oluruz, bir kez hesaplanır ve herhangi bir değişiklik olması beklenir
  // complexity olarak cheap(ucuz) fonksiyonlar için pek bir fark oluşturmaz ama expensive olanlar(maliyetli) için uygulamayı yavaşlatır ve hafıza kullanımını etkiler
  const { setItem } = useAsyncStorage('@email_key');

  useEffect(() => {
    if (isRegister) setNameError(nameValidate(name));
  }, [isRegister, name]);

  useEffect(() => {
    setEmailError(emailValidate(email));
  }, [email]);

  useEffect(() => {
    setPasswordError(passwordValidate(password));
  }, [password]);

  const onSubmit = async () => {
    if (buttonRouteName === 'Profile') {
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
              label="Your Name"
              value={name}
              onChangeText={setName}
              placeholder="Name"
              leftIcon={<Icon name="account-circle" type="materialicon" size={24} color="gray" />}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {!!nameError && <ShowError type="name" name={name} />}
          </View>
        )}
        <Spacer />
        <Input
          label="Your Email Address"
          value={email}
          onChangeText={setEmail}
          placeholder="@.."
          leftIcon={<Icon name="email" type="zocial" size={24} color="gray" />}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {!!emailError && <ShowError type="email" email={email} />}
        <Spacer />
        <Input
          secureTextEntry // bu sifrenin gozukmemesini sagliyor
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          leftIcon={<Icon name="lock" type="materialicon" size={24} color="gray" />}
          autoCapitalize="none"
          autoCorrect={false}
          formType="password"
        />
        {/* onSubmitEditing={() => navigation.navigate(buttonRouteName)} @?? bunu burada yapabilir miyiz? */}
        {!!passwordError && <ShowError type="password" password={password} />}
        {!(nameError || emailError || passwordError) && (
          <Button title={submitButtonText} onPress={onSubmit} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    color: 'lightslategrey',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginLeft: 5
  }
});

export default AuthForm;
