import { useEffect, useState } from "react";
import "./style.css";
import {
  addtocart,
  addToWishlist,
  getProductsfromDB
} from "../../components/Axios/axios";
export const Products = ({ setToast }) => {
  const [itemsTobeDisplayed, setItems] = useState([]);
  useEffect(() => {
    getProductsfromDB(setItems);
  }, []);

  return (
    <div className="items">
      {itemsTobeDisplayed.map((item) => (
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
            <button onClick={() => addToWishlist(item, setToast)}>
              Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
