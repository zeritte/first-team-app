import React from 'react';
import { View, StyleSheet } from 'react-native';

// @?? children ozel bir prop mu
const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 7, 
  }
});

export default Spacer;
