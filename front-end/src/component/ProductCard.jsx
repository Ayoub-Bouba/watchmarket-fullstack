import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function ProductCard({ product }) {
  const {id} =  useParams()
  return (
    <div>
      <div className="product_content">
        {product.length > 0 ? (
          product.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className="prod" >
                <img src={item.image} alt="" />
                <h5>{item.name}</h5>
                <h4>Meridian Steel</h4>
                <h6>{item.price} dh</h6>
              </div>
            </Link>
          ))
        ) : (
          <p className="no_found">No products found</p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
