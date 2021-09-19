import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default () => {
  const [email, setEmail] = useState("");
  const { getItem } = useAsyncStorage("@email_key");

  useEffect(() => {
    getEmail();
  }, []);

  const getEmail = async () => {
    const item = await getItem();
    setEmail(item);
  };

  return (
    <View >
      <Text style={styles.textEmail}>
          {email}
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
