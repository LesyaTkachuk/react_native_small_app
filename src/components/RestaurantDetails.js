import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ResultsList from "./ResultsList";

const RestaurantDetails = ({ restaurant }) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.text}>{restaurant.name}</Text>
      <Text style={styles.rating}>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
    marginRight: 20,
    flex: 1,
    // alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    color: "#131313",
    marginBottom: 2,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 6,
  },
  rating: {
    color: "grey",
  },
});

export default RestaurantDetails;
