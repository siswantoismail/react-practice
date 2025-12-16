import axios from "axios";

export default function getProducts(callback) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("There was an error fetching the products!", error);
    });
}
