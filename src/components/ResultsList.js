import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantDetails from "./RestaurantDetails";

const ResultsList = ({ title, restaurants, navigation }) => {
  if (!restaurants?.length) {
    return null;
  }
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      {restaurants && (
        <>
          <Text style={styles.count}>Restaurants: {restaurants.length}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            keyExtractor={(restaurant) => restaurant?.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Result", { id: item.id })}
              >
                <RestaurantDetails restaurant={item}></RestaurantDetails>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // padding: 20,
    // flex: 1,
    // alignItems: "center",
  },
  count: {
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#131313",
  },
});

export default withNavigation(ResultsList);
