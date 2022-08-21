import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.root}>
      <Feather name="search" size={30} color="black" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        placeholder="Search"
        style={styles.inputStyle}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F0EEEE",
    marginTop: 10,
    minHeight: 50,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 10,
    // flex: 1,
    // alignItems: "center",
    // padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    color: "#131313",
  },
  inputStyle: {
    // borderColor: "black",
    // borderWidth: 1,
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: "center",
  },
});

export default SearchBar;
