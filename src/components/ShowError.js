import React from 'react';
import { Icon, Text, View } from 'react-native-elements';
import { countAt, countDot, nameLength, nameSpace, passwordLength } from '../textValidator';

// @ işareti için ayrı kontrol ve metin ve ayrıca bir boolean  for nameerror useEffect hata varsa true dönmeli
// her ikisi de true olurse en son return null olmalı
// . işareti için de aynı şeyler. tek metin olmalı ve metin her şekilde gözükmeli tek farkla hata varsa x yoksa tik işaretiyle. belki de bunun için error component oluşturabilirim

export const emailValidate = (email) => {
  // '@' isareti ve 2 adet nokta icermeli
  if (countAt(email) && countDot(email)) return false;
  return "Your email should include one '@' sign and two dots('.')!";
};

export const nameValidate = (name) => {
  // isim 5 karakterden buyuk ve bosluksuz olmali
  if (nameLength(name) && nameSpace(name)) return false;
  return "Your name should be 5 or more characters and doesn't include space(' ')";
};

export const passwordValidate = (password) => {
  // sifre en az 6 karakter olmali
  if (passwordLength(password)) return false;
  return 'Your password should be at least 6 characters!';
};

const ShowError = (type, name, email, password) => {
  switch (type) {
    case 'name':
      return (
        <View>
          {nameLength(name) ? (
            <Icon name="check" type="evilicons" size={24} color="green" />
          ) : (
            <Icon name="close-o" type="evilicons" size={24} color="red" />
          )}
          <Text>greater than 5</Text>
          {nameSpace(name) ? (
            <Icon name="check" type="evilicons" size={24} color="green" />
          ) : (
            <Icon name="close-o" type="evilicons" size={24} color="red" />
          )}
          <Text>Not include space</Text>
        </View>
      );
    case 'email':
      return (
        <View>
          {countAt(email) ? (
            <Icon name="check" type="evilicons" size={24} color="green" />
          ) : (
            <Icon name="close-o" type="evilicons" size={24} color="red" />
          )}
          <Text>Includes @</Text>
          {countDot(email) ? (
            <Icon name="check" type="evilicons" size={24} color="green" />
          ) : (
            <Icon name="close-o" type="evilicons" size={24} color="red" />
          )}
          <Text>Includes 2 .</Text>
        </View>
      );
    case 'password':
      return (
        <View>
          {passwordLength(password) ? (
            <Icon name="check" type="evilicons" size={24} color="green" />
          ) : (
            <Icon name="close-o" type="evilicons" size={24} color="red" />
          )}
          <Text>greater than 6</Text>
        </View>
      );
    default:
      return null;
  }
};

// const styles = StyleSheet.create({
// });

export default ShowError;
