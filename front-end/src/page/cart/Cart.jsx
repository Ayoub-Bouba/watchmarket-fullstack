import React, { useEffect, useState } from "react";
import "./cart.css";
import Footer from "../../component/Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://localhost:3005/cart");
        setCart(res.data);
      } catch (err) {
        console.error("problime", err);
      }
    };
    fetchProduct();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3005/cart/${id}`);
      setCart(cart.filter((item)=>item.id!==id))
    } catch (err) {
      console.error("problime", err);
    }
    toast.success("product is delete")
  };
  return (
    <div>
      <div className="cart_container">
        <div className="sec_hero">
          <div className="logo">
            TIM<span>O</span>RA
          </div>
          <h2>Shopping Cart</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus.
          </p>
        </div>
        <div className="table">
          <h5 className="title">My Watch</h5>
          {cart.map((item) => (
            <div key={item.id}>
              <div className="cart">
                <div className="cart_img">
                  <Link to={`/product/${item.id}`} ><img id="img" src={item.image} /> </Link>
                </div>
                <div className="cart_content">
                  <h5>{item.name} </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <h4>{item.price} dh</h4>
                  <input
                    type="number"
                    style={{
                      padding: "6px 12px",
                      width: "60px",
                    }}
                    aria-label="QTY"
                  />
                </div>
                <Link onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
