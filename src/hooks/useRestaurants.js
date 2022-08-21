import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState({});
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);

  const searchApi = async (searchTerm) => {
    try {
      setError("");
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san hose",
        },
      });
      const restaurantsData = response.data.businesses;
      const total = response.data.total;
      setTotal(total);

      const costEffective = restaurantsData.filter(
        (restaurant) => restaurant.price === "$"
      );
      const bitPricier = restaurantsData.filter(
        (restaurant) => restaurant.price === "$$"
      );
      const bigSpender = restaurantsData.filter(
        (restaurant) => restaurant.price === "$$$"
      );

      setRestaurants({ costEffective, bitPricier, bigSpender });
    } catch (e) {
      setError("Something went wrong...");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, total, restaurants, error];
};
