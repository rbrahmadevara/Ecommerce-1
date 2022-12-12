import axios from "axios";
import faker from "faker";
export async function addtocart(item, setToast) {
  const { data } = await axios.post("/api/addToCart", item);
  setToast({
    flag: true,
    message: "Added to Cart"
  });
}
export async function addToWishlist(item, setToast) {
  const { data } = await axios.post("/api/addToWishlist", item);
  setToast({
    flag: true,
    message: "Added to Wishlist"
  });
}
export async function removeFromWishlist(item, setWishlistItems, setToast) {
  const { data } = await axios.delete(`/api/wishlist/${item.id}`);
  setWishlistItems(data.wishlists);
  setToast({
    flag: true,
    message: "Removed from Wishlist"
  });
}
export async function getProductsfromDB(setItems) {
  const { data } = await axios.get("/api/products");
  setItems(data.products);
}

export async function getWishlistsfromDB(setWishlistItems) {
  const { data } = await axios.get("/api/wishlist");
  setWishlistItems(data.wishlists);
}
export async function removeFromCart(item, setCartItems, setToast) {
  const { data } = await axios.delete(`/api/cart/${item.id}`);
  setCartItems(data.carts);
  setToast({
    flag: true,
    message: "Removed from Cart"
  });
}
// export async function addProdcuts() {
//   const db = [...Array(50)].map((item) => ({
//     id: faker.random.uuid(),
//     name: faker.commerce.productName(),
//     image: faker.random.image(),
//     price: faker.commerce.price()
//   }));
//   const { data } = await axios.post(`/api/productsAdded`, db);
//   console.log("this is me", data);
// }
