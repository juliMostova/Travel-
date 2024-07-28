import React from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";
import video from ".././assets/image/130229-746386458_small.mp4";

function Footer() {
  return (
    <div className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="content">
      <div className="top">
        <span>𝒯𝓇𝒶𝓋𝑒𝓁 </span>
        <span>𝓌𝒾𝓉𝒽 𝓊𝓈!</span>
      </div>
      <div className="social_media">
        <a href="/">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-square-twitter"></i>
        </a>
      </div>

      <div className="bottom">
        <Link to="/contact">
          <h4>Contact us</h4>
        </Link> 
       </div>
       </div>
    </div>
  );
}

export default Footer;
