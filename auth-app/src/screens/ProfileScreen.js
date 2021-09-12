import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import ShowEmail from "../components/ShowEmail";
import TaskCreator from "../components/TaskCreator";

const ProfileScreen = () => {

  onSubmit = async () => { // daha guzel bi isim bul fonksiyona
    try {
      await AsyncStorage.removeItem("key_mail")

    }
    catch (e){
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <TaskCreator />
      <ShowEmail />
      <Button title='LOG OUT' onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProfileScreen;
