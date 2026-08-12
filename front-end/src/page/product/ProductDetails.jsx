import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Footer from "../../component/Footer";
import ProductCard from "../../component/ProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("https://6a7b345a8c69b3eb4a17f8bd.mockapi.io/api/product");
        setProduct(res.data);
      } catch (err) {
        console.error("problime", err);
      }
    };
    fetchProduct();
  }, []);
  const pro = product.find((item) => {
    return item.id == id;
  });
  if (!pro) {
    return <p>Loading ....</p>;
  }
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://6a7b345a8c69b3eb4a17f8bd.mockapi.io/api/cart`, pro);
    } 
    catch (err) {
      console.error("problime", err);
    }
    toast.success("save is done")
  };
  function sendToWhatsApp(prod) {
    const phoneNumber = "212773194771"; 

    const productUrl = `${window.location.origin}/product/${prod.id}`;

    const message = `مرحبا، بغيت نتأكد من هاد المنتج:
📦 ${prod.name}
💰 ${prod.price} DH 
🔗 ${productUrl}`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
  }
  return (
    <div>
      <div className="pro_details">
        <div className="sec_img">
          <div className="big_img">
            <img src={pro.image} alt="" />
          </div>
          <div className="small_img">
            <img src={pro.image} />
            <img src={pro.image} />
            <img src={pro.image} />
            <img src={pro.image} />
          </div>
        </div>
        <div className="pro_content">
          <h2>{pro.name} </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, ex?
          </p>
          <div className="price_stars">
            <h3>{pro.price} dh</h3>
            <div className="icons">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
            </div>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            nulla veritatis, error illo, vitae atque unde rerum nihil dolor
            blanditiis 
          </p>
          <div className="btn">
            <button id="btn1" onClick={handleSave}>
              ADD TO CART
            </button>
            <button id="btn2" onClick={()=>sendToWhatsApp(pro)} >Contact My <FaWhatsapp/></button>
          </div>
        </div>
      </div>
      <div className="section_product">
        <div className="containe_pro">
          <h5 className="shop">SHOP</h5>
          <h2>The Same Sellers</h2>
          <p>The pieces our customers keep comming back for</p>
          <ProductCard product={product} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;
