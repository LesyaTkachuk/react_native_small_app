import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, total, restaurants, error] = useRestaurants();

  const { costEffective, bitPricier, bigSpender } = restaurants;

  return (
    <>
      <Text style={styles.text}>SearchScreen</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {/* {error ? <Text>{error}</Text> : <Text>We have found {total}</Text>} */}
      <ScrollView>
        <ResultsList title="Cost Effective" restaurants={costEffective}/>
        <ResultsList title="Bit Pricier" restaurants={bitPricier}/>
        <ResultsList title="Big Spender" restaurants={bigSpender}/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    padding: 20,
    flex: 1,
    borderColor: "red",
    borderWidth: 5,
    // alignItems: "center",
  },
  searchBar: {
    marginBottom: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    color: "#131313",
  },
});

export default SearchScreen;
