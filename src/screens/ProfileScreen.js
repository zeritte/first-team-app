import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import ShowEmail from "../components/ShowEmail";
import TaskCreator from "../components/TaskCreator";

const ProfileScreen = ({ navigation }) => {
  const { removeItem } = useAsyncStorage("@email_key");

  const removeEmail = async () => {
    await removeItem();
    navigation.navigate("Login"); // navigation özelliğini sayfalarda bu şekilde, componentlerde useNavigation kullanmak daha uygun
  };

  return (
    <View style={styles.container}>
      <ShowEmail />
      <TaskCreator />
      <Button title="LOG OUT" onPress={removeEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProfileScreen;
