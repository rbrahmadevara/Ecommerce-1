import { useEffect, useState } from "react";
import "../Products/style.css";
import {
  addtocart,
  getWishlistsfromDB,
  removeFromWishlist
} from "../../components/Axios/axios";
export const Wishlist = ({ setToast }) => {
  const [wishlistedItems, setWishlistItems] = useState([]);
  useEffect(() => {
    getWishlistsfromDB(setWishlistItems);
  }, []);
  return (
    <div>
      <h2 className="head-m">Wishlist</h2>
      <div className="items-w">
        {wishlistedItems?.map((item) => (
          <div className="Card" id={item.id}>
            <img className="Item-image" src={item.image} alt="" />
            <div className="Item-Brand">
              <div>{item.name}</div>
              <span> Rs.{item.price} </span>
            </div>
            <div className="Item-Brand">
              <button onClick={() => addtocart(item, setToast)}>
                Add to Cart
              </button>
              <button
                onClick={() =>
                  removeFromWishlist(item, setWishlistItems, setToast)
                }
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
