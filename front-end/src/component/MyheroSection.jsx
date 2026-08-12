import React from "react";

import { Link } from "react-router-dom";
import "./component.css"
function MyheroSection() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <h5>COLLECTION</h5>
          <div className="logo">TIM<span>O</span>RA</div>
          <p> Lost time is never found agine</p>
          <Link to="/">
            <button className="btn">Shop Now</button>
          </Link>
        </div>
        <img className="img_hero" src="/image/slideImage/img.jpg"  />
      </div>
    </div>
  );
}

export default MyheroSection;
