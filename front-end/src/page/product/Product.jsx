import React, { useEffect, useState } from "react";
import "./product.css";
import ProductCard from "../../component/ProductCard";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Footer from "../../component/Footer";
function Product() {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://localhost:3000/product");
        setProduct(res.data);
      } catch (err) {
        console.error("problime", err);
      }
    };
    fetchProduct();
  }, []);
  const filterProducts=product.filter((item)=>{
    return item.name.toLowerCase().includes(search.toLowerCase())
  })
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="pro_content">
        <form onSubmit={handleSubmit} className="search">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
          />
          <button>
            <SearchIcon />{" "}
          </button>
        </form>
        <div className={`section_product`}>
          <div className="containe_pro">
            <h5 className="shop">SHOP</h5>
            <h2>Best Sellers</h2>
            <p>The pieces our customers keep comming back for</p>
            <ProductCard product={filterProducts} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
