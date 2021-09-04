import React from "react";
import { StyleSheet, View } from "react-native";
import TaskCreator from "../components/TaskCreator";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <TaskCreator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
