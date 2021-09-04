import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TaskCreator = () => {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    if (!task) return;
    setTaskItems([...taskItems, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTaskItems(taskItems.filter((t) => t.id !== id)); // tasklerin içinde dolanarak mı arıyor @??
  };

  return (
    <View style={styles.container}>
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
          <TouchableOpacity onPress={() => addTask()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <ScrollView style={{ width: "100%", marginTop: 10 }}>
        {taskItems?.map((task) => (
          // @??  Each child in a list should have a unique "key" prop hatası
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
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "turquoise",
    borderRadius: 25,
    height: 40,
    justifyContent: "center",
    marginHorizontal: 20,
    width: 40,
  },
  buttonText: {
    fontSize: 25,
  },
  container: {
    flex: 1,
  },
  header: {
    textAlign: "center",
    fontSize: 35,
    margin: 10,
  },
  deleteIcon: {
    marginRight: 10,
  },
  keyboardArea: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
  },
  keyboardInput: {
    marginLeft: -15,
    padding: 5,
    // textAlign: "center",
    width: 460,
  },
  task: {
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 25,
    height: 40,
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 15,
    paddingVertical: 5,
    textAlign: "center",
    width: 385,
  },
  taskText: {
    fontSize: 20,
    justifyContent: "flex-start",
    margin: 30,
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "turquoise",
    borderRadius: 25,
    flex: 1,
    marginHorizontal: 25,
    marginRight: -15,
    paddingVertical: 5,
    textAlign: "center",
  },
});

export default TaskCreator; // bunu bu şekilde yazmak ne işe yarıyor @??
