
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBox,
  FaCheckCircle,
  FaTruck,
  FaHome,
} from "react-icons/fa";
import "./Orders.css";

const Orders = () => {
  const navigate = useNavigate();

  // Temporary order data
  // Later this will come from your backend
  const orders = [
    {
      id: "FM1001",
      date: "25 July 2026",
      items: 3,
      total: 450,
      status: "Preparing",
    },
  ];

  const getStatusStep = (status) => {
    const steps = [
      "Placed",
      "Confirmed",
      "Preparing",
      "Out for Delivery",
      "Delivered",
    ];

    return steps.indexOf(status);
  };

  const getStatusMessage = (status) => {
    switch (status) {
      case "Placed":
        return "Your order has been placed successfully.";

      case "Confirmed":
        return "Your order has been confirmed by FreshMart.";

      case "Preparing":
        return "Your order is currently being prepared.";

      case "Out for Delivery":
        return "Your order is out for delivery.";

      case "Delivered":
        return "Your order has been delivered successfully.";

      default:
        return "Your order is being processed.";
    }
  };

  return (
    <div className="orders-page">

      {/* Header */}
      <div className="orders-header">

        {/* Close Button */}
        <button
          className="orders-close"
          onClick={() => navigate(-1)}
          aria-label="Close orders"
        >
          ✕
        </button>

        <h1>My Orders</h1>

        <p>
          Track your current and previous orders
        </p>

      </div>

      {/* Orders */}
      <div className="orders-container">

        {orders.length === 0 ? (

          /* No Orders */
          <div className="no-orders">

            <FaBox />

            <h2>No Orders Yet</h2>

            <p>
              You haven't placed any orders yet.
            </p>

            <button
              onClick={() => navigate("/shop")}
            >
              Start Shopping
            </button>

          </div>

        ) : (

          /* Orders List */
          orders.map((order) => {

            const currentStep = getStatusStep(order.status);

            return (

              <div
                className="order-card"
                key={order.id}
              >

                {/* Order Header */}
                <div className="order-top">

                  <div>

                    <h2>
                      Order #{order.id}
                    </h2>

                    <p>
                      Ordered on {order.date}
                    </p>

                  </div>

                  <div className="order-price">
                    ${order.total}
                  </div>

                </div>


                {/* Order Information */}
                <div className="order-info">

                  <span>
                    {order.items} Items
                  </span>

                  <span className="current-status">
                    Current Status: {order.status}
                  </span>

                </div>


                {/* Order Tracking */}
                <div className="tracking">

                  {/* 1. Placed */}
                  <div
                    className={`tracking-step ${
                      currentStep >= 0
                        ? "active"
                        : ""
                    }`}
                  >

                    <div className="tracking-icon">
                      <FaBox />
                    </div>

                    <p>
                      Placed
                    </p>

                  </div>


                  {/* 2. Confirmed */}
                  <div
                    className={`tracking-step ${
                      currentStep >= 1
                        ? "active"
                        : ""
                    }`}
                  >

                    <div className="tracking-icon">
                      <FaCheckCircle />
                    </div>

                    <p>
                      Confirmed
                    </p>

                  </div>


                  {/* 3. Preparing */}
                  <div
                    className={`tracking-step ${
                      currentStep >= 2
                        ? "active"
                        : ""
                    }`}
                  >

                    <div className="tracking-icon">
                      <FaBox />
                    </div>

                    <p>
                      Preparing
                    </p>

                  </div>


                  {/* 4. Out for Delivery */}
                  <div
                    className={`tracking-step ${
                      currentStep >= 3
                        ? "active"
                        : ""
                    }`}
                  >

                    <div className="tracking-icon">
                      <FaTruck />
                    </div>

                    <p>
                      Out for Delivery
                    </p>

                  </div>


                  {/* 5. Delivered */}
                  <div
                    className={`tracking-step ${
                      currentStep >= 4
                        ? "active"
                        : ""
                    }`}
                  >

                    <div className="tracking-icon">
                      <FaHome />
                    </div>

                    <p>
                      Delivered
                    </p>

                  </div>

                </div>


                {/* Current Status Message */}
                <div className="status-message">

                  <strong>
                    {getStatusMessage(order.status)}
                  </strong>

                  <p>
                    We'll update the status when your
                    order moves to the next step.
                  </p>

                </div>

              </div>

            );

          })

        )}

      </div>

    </div>
  );
};

export default Orders;

