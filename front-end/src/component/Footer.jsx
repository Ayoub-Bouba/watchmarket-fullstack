import React from "react";

function Footer() {
  return (
    <div>
      <section className="sec_footer">
        <div className="content_footer">
          <div className="f1">
            <div className="logo_con">
              <div className="logo">TIM<span>O</span>RA</div>
              <p>
                Fine timepieces designed in-studio, built to be worn for decades
                — not seasons.
              </p>
            </div>
            <div className="shop">
              <h2>SHOP</h2>
              <div className="con">
                <span>Chronograph</span>
                <span>Classic</span>
                <span>Sport</span>
              </div>
            </div>
          </div>
          <div className="f2">
            <div className="company">
              <h2>COMPANY</h2>
              <div className="con">
                <span>Our Story</span>
                <span>Craftsmanship</span>
                <span>contact</span>
              </div>
            </div>
            <div className="follow">
              <h2>FOLLOW</h2>
              <div className="con">
                <span>Instagram</span>
                <span>WhatsApp</span>
                <span>TikTok</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
    <span>© 2026 Timora. All rights reserved.</span>
    <span>Made with patience.</span>
  </div>
      </section>
    </div>
  );
}

export default Footer;
