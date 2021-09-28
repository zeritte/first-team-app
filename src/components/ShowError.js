import React from 'react';
import { Icon, Text, View } from 'react-native-elements';
import { countAt, countDot, nameLength, nameSpace, passwordLength } from '../textValidator';

// @ işareti için ayrı kontrol ve metin ve ayrıca bir boolean  for nameerror useEffect hata varsa true dönmeli
// her ikisi de true olurse en son return null olmalı
// . işareti için de aynı şeyler. tek metin olmalı ve metin her şekilde gözükmeli tek farkla hata varsa x yoksa tik işaretiyle. belki de bunun için error component oluşturabilirim

const PositiveTick = () => <Icon name="check" type="evilicons" size={24} color="green" />;
const NegativeCross = () => <Icon name="close-o" type="evilicons" size={24} color="red" />;

const ShowError = ({ type, name, email, password }) => {
  switch (type) {
    case 'name':
      return (
        <View>
          {/* console.log(nameLength(name)); */}
          {nameLength(name) ? <PositiveTick /> : <NegativeCross />}
          <Text>greater than 5</Text>
          {nameSpace(name) ? <PositiveTick /> : <NegativeCross />}
          <Text>Not include space</Text>
        </View>
      );
    case 'email':
      return (
        <View>
          {countAt(email) ? <PositiveTick /> : <NegativeCross />}
          <Text>Includes @</Text>
          {countDot(email) ? <PositiveTick /> : <NegativeCross />}
          <Text>Includes 2 .</Text>
        </View>
      );
    case 'password':
      return (
        <View>
          {passwordLength(password) ? <PositiveTick /> : <NegativeCross />}
          <Text>greater than 6</Text>
        </View>
      );
    default:
      return null;
  }
};

export default ShowError;
