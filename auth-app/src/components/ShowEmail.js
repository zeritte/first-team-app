import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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

    } 
});
  