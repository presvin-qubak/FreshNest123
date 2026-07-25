import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PlaceOrder.css";


const PlaceOrder = () => {

  const navigate = useNavigate();

  const location = useLocation();


  // Receive order from Checkout
  const order = location.state?.order;


  const orderId = order?._id || "Processing";


  return (

    <div className="place-order-container">


      <button
        className="order-close"
        onClick={() => navigate(-1)}
      >
        ✕
      </button>



      <div className="success-card">


        <div className="success-icon">
          ✓
        </div>



        <h1>
          Order Placed Successfully!
        </h1>



        <p>
          Thank you for shopping with FreshNest.
          Your order will be delivered soon.
        </p>



        <h3 className="order-id">
          Order ID: #{orderId}
        </h3>



        <button
          className="continue-btn"
          onClick={() => navigate("/shop")}
        >
          Continue Shopping
        </button>



        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>



      </div>


    </div>

  );
};


export default PlaceOrder;