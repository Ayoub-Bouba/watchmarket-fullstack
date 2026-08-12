import MyheroSection from "../../component/MyheroSection";
import "./home.css";
import Newsletter from "./Newsletter";
import Footer from "../../component/Footer";
import ProductCard from "../../component/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [product, setProduct] = useState([]);
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
  return (
    <div className="home-hero">
      <MyheroSection />
      <div className="section_product">
        <div className="containe_pro">
          <h5 className="shop">SHOP</h5>
          <h2>Best Sellers</h2>
          <p>The pieces our customers keep comming back for</p>
          <ProductCard product={product}/>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
