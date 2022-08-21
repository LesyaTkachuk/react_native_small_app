import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Template = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Template</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    color: "#131313",
  },
});

export default Template;
