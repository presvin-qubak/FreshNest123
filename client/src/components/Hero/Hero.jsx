import React from "react";
import "./Hero.css";
import hero_banner from '../../assets/hero_banner.jpg'
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero"
     style={{
        backgroundImage: `url(${hero_banner})`,
      }}>
    

      <div className="hero-left">
        <h1>
          Fresh Groceries <br />
          Delivered to <span>Your Doorstep</span>
        </h1>

        <p>
          Shop fresh fruits, vegetables, dairy products, snacks,
          and daily essentials at the best prices.
        </p>

        <button className="shop-btn"
        onClick={()=>navigate("/shop")}>
          Shop Now
        </button>
      </div>


    </section>
  );
};

export default Hero;