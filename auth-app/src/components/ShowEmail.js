import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default () => {
  const [value, setValue] = useState("");
  const { getItem } = useAsyncStorage("@email_key");

  useEffect(() => {
    writeEmail();
  }, []);

  const writeEmail = async () => {
    const item = await getItem();
    setValue(item);
  };

  return (
    <View >
      <Text style={styles.textEmail}>
          {value}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textEmail: {
      fontSize: 30,
      marginTop: 20,
      textAlign: 'center'
  }
});


{/* <TouchableOpacity onPress={() => writeItemToStorage(Math.random().toString(36).substr(2, 5))}>
</TouchableOpacity> */}
//   const writeItemToStorage = async (newValue) => {
//     await setItem(newValue);
//     setValue(newValue);
//   };
