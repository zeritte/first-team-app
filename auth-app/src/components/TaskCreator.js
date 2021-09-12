import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default () => {
  const [task, setTask] = useState(""); // @?? içerikle alakalı
  const [taskItems, setTaskItems] = useState([]); // @?? arrayin boyutu ile alakalı bir şey, içerisindeki elemanla ilgili değil

  const addTask = () => {
    if (!task) return;
    setTaskItems([...taskItems, { id: Date.now().toString(), isSelected: false, text: task }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTaskItems(taskItems.filter((t) => t.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <KeyboardAvoidingView style={styles.keyboardInput}>
        <View style={styles.keyboardArea}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setTask}
            placeholder="Add Task"
            style={styles.textInput}
            value={task}
          />
          <TouchableOpacity onPress={() => addTask()} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <ScrollView style={{ width: "100%", marginTop: 10 }}>
        {taskItems?.map((task) => (
          // @??  Each child in a list should have a unique "key" prop hatası
          // map ile alakalı
          <View key={task.id} style={styles.task}>
            <Text style={styles.taskText}>{task.text}</Text>
            <TouchableOpacity style={styles.deleteIcon}>
              <MaterialIcons
                color="black"
                name="delete"
                onPress={() => deleteTask(task.id)}
                size={24}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "turquoise",
    borderRadius: 25,
    flex: 0.8,
    paddingVertical: 5,
    textAlign: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "turquoise",
    borderRadius: 25,
    flex: 0.2,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 25
  },
  container: {
    flex: 1
  },
  header: {
    textAlign: "center",
    fontSize: 35,
    margin: 10
  },
  deleteIcon: {
    marginRight: 10
  },
  keyboardArea: {
    flexDirection: "row",
    paddingHorizontal: 10
  },
  keyboardInput: {
    padding: 5
  },
  task: {
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 25,
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 15,
    padding: 10,
    textAlign: "center",
    flexDirection: "row"
  },
  taskText: {
    fontSize: 20,
    justifyContent: "flex-start",
    textAlign: "center"
  }
});
