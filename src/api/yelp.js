import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 7sdyqtEdMbJDQ5FUZN54iCuCPzHSEJdyRB0wWanIIbORY3guZIWRSw7vlKV_6BeND0U-u36Tl0cUwK9p1CYbDURRmWYeekFJCqHI1k_qZKIKBv76D1mB2ecddZfUYHYx",
  },
});
