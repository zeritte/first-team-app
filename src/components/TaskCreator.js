import React, { useEffect, useState } from "react";
import {
  CheckBox,
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
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default () => {
  const [text, setText] = useState(""); // buradaki useState kullanıcın metin girdiği alanla alakalı, yani kaydedilmeyen alan
  const [taskItems, setTaskItems] = useState([]); // buradaki useState ise kullanıcın kaydettiği task'lerin bulunduğu kısım, yani kayıtlı tasklerin görünümüyle alakalı yapacağımız değişiklikte burayı referans almalıyız 
  const { getItem, setItem } = useAsyncStorage("@todo_text");
  
  useEffect(() => {
    saveText();
  }, [text]);

  useEffect(() => {
    retrieveText();
  }, []);
  
  const addTask = () => {
    if (!task) return;
    setTaskItems([...taskItems, { id: Date.now().toString(), isSelected: false, text: task }]);
    setText("");
  };

  const deleteTask = (id) => {
    setTaskItems(taskItems.filter((t) => t.id !== id));
  };

  const retrieveText = async () => {
    const item = await getItem();
    setText(item);
  };

  const saveText = async () => {
    if (!text) return;
    await setItem(text);
  };

  const taskCompletion = (id) => {
    const theItem = taskItems.filter((t) => t.id === id)[0];
    // SORU: checkbox işaretlenince aşağı iniyor veya geri tik kaldırılınca yine aşağı iniyor. - ÇÖZÜM: "javascript change object in array"
    if (theItem.isSelected) theItem.isSelected = false;
    else theItem.isSelected = true;
    setTaskItems([...taskItems.filter((t) => t.id !== id), theItem]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <KeyboardAvoidingView style={styles.keyboardInput}>
        <View style={styles.keyboardArea}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setText}
            onSubmitEditing={addTask} // () => addTask() ile addTask aynı, fonksiyonun çalıştırılabilir halini(addTask()) çağırınca sayfa her render edildiğinde  kod o satıra gelmese de o fonksiyon çağrılır
            placeholder="Add Task"
            style={styles.textInput}
            value={text}
          />
          <TouchableOpacity onPress={() => addTask()} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <ScrollView style={{ width: "100%", marginTop: 10 }}>
        {taskItems?.map((task) => (
          // Each child in a list should have a unique "key" prop hatası(View elemanına key prop'u ekleyerek çözdük) map ile alakalı, çünkü map içindeki her elemanın özel bir key'i olması lazım.
          // Aynı keyli elemanları tutmadığı için key değeri olmayan elemanlar da benzer kabul edilip içerisinde tutulmuyor.
          <View key={task.id} style={styles.task}>
            {/* SORU: View'e style eklemeyince aşağıdaki checkbox, text ve deleteicon flex özelliği atamama rağmen alt alta sıralandı. 
            ELCEVAP: Çünkü flexDirection parent(wrapper) elemanın alacağı ve ve altındaki elemanlarına uygulayacağı bir styling */}
            {/* <Text style={styles.taskText}>{task.text}</Text> */}
            <CheckBox
              value={task.isSelected}
              style={styles.checkBox}
              onValueChange={() => taskCompletion(task.id)}
            />
            {task.isSelected ? (
              <Text style={styles.strikeThroughText}>{task.text}</Text>
            ) : (
              <Text style={styles.taskText}>{task.text}</Text>
            )}
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
  checkBox: {
    flex: 1
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
    flex: 1,
    marginRight: 10
  },
  keyboardArea: {
    flexDirection: "row",
    paddingHorizontal: 10
  },
  keyboardInput: {
    padding: 5
  },
  strikeThroughText: {
    // SORU: flexDirection değerini row veya column yapmam bir şeyi değiştirmedi - ELCEVAP: Baba çocuğuna hükmeder.
    flex: 8,
    fontSize: 16,
    justifyContent: "space-around",
    textAlign: "left",
    textDecorationLine: "line-through"
    //line-through is the trick(püf noktası) 
  },
  task: {
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 25,
    marginHorizontal: 20,
    marginTop: 15,
    padding: 10,
    textAlign: "center",
    flexDirection: "row"
  },
  taskText: {
    flex: 8,
    /*
    SORU: bu değer 120 iken checkbox işaretlenmiyordu neden? - ELCEVAP: Çünkü o elemanın minwidth değeri ile alakalı, definition dosyasına bakabilirsin minwidth için, 
    flexin etkili olup olmadığını anlamak için border verip kontrol edebilirsin
    */
    fontSize: 16,
    justifyContent: "space-around",
    textAlign: "left"
  }
});
