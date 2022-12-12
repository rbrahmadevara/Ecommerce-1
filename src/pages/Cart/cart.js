import { useEffect, useState } from "react";
import axios from "axios";
import "../Products/style.css";
import { removeFromCart } from "../../components/Axios/axios";
export const Cart = ({ setToast }) => {
  const [itemsInCart, setCartItems] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/cart");
      console.log("this is data", data.carts);
      setCartItems(data.carts);
    })();
  }, []);
  return (
    <div>
      <h2 className="head-m">Cart</h2>
      <div className="items-w">
        {itemsInCart?.map((item) => (
          <div className="Card" id={item.id}>
            <img className="Item-image" src={item.image} alt="" />
            <div className="Item-Brand">
              <div>{item.name}</div>
              <span> Rs.{item.price} </span>
            </div>
            <div className="Item-Brand">
              <button
                onClick={() => removeFromCart(item, setCartItems, setToast)}
              >
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
