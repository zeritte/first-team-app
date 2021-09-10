import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { emailValidate, nameValidate, passwordValidate } from "../textValidator";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, isRegister = false, submitButtonText }) => {
  const navigation = useNavigation();
  // useState'leri en küçük objede/component'te oluşturmak lazım yoksa o componenti ilgilendirmeyen useState'lerden dolayı sayfa yeniden çalıştırıldığında gereksiz yere büütün useState'ler çalışır.
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [buttonRouteName] = useState(isRegister ? "Login" : "Profile"); // using useState for variables is important because it is the way react understands what to update or not
  // yukarıdaki gibi useState kullanımı bunu bir fonksiyon şeklinde yazmaya göre şu şekilde fayda sağlar: o alanda değişiklik olmadığı sürece tekrar bu fonksiyonu çalıştırmamış oluruz, bir kez hesaplanır ve herhangi bir değişiklik olması beklenir
  // complexity olarak cheap(ucuz) fonksiyonlar için pek bir fark oluşturmaz ama expensive olanlar(maliyetli) için uygulamayı yavaşlatır ve hafıza kullanımını etkiler

  useEffect(() => {
    if (isRegister) setNameError(nameValidate(name));
  }, [isRegister, name]);

  useEffect(() => {
    setEmailError(emailValidate(email));
  }, [email]);

  useEffect(() => {
    setPasswordError(passwordValidate(password));
  }, [password]);

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
          <Button title={submitButtonText} onPress={() => navigation.navigate(buttonRouteName)} />
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
