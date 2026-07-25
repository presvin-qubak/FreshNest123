import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FaHeart, FaTruck, FaStar } from "react-icons/fa";
import "./Wishlist.css";

const Wishlist = () => {
  const {
    wishlist,
    cartItems,
    addToCart,
    removeFromWishlist,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleMoveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <div className="wishlist">

      <button
        className="wishlist-close"
        onClick={() => navigate(-1)}
      >
        ✕
      </button>

      <div className="wishlist-header">
        <h1>
          <FaHeart color="#ef4444" /> My Wishlist
        </h1>

        <p>{wishlist.length} Items Saved</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <h2>Your Wishlist is Empty</h2>
          <p>Save your favourite products to buy them later.</p>
        </div>
      ) : (
        <div className="wishlist-grid">

          {wishlist.map((item) => {
            const inCart = cartItems.some(
              (cartItem) => cartItem.id === item.id
            );

            return (
              <div
                className="wishlist-card"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="wishlist-content">

                  <span className="stock">
                    In Stock
                  </span>

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>(4.8)</span>
                  </div>

                  <h4>₹{item.price}</h4>

                  <div className="delivery">
                    <FaTruck />
                    <span>Free Delivery</span>
                  </div>

                  <div className="wishlist-buttons">

                    {!inCart ? (
                      <button
                        className="cart-btn"
                        onClick={() =>
                          handleMoveToCart(item)
                        }
                      >
                        Move to Cart
                      </button>
                    ) : (
                      <button
                        className="cart-btn added"
                        disabled
                      >
                        Already in Cart
                      </button>
                    )}

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromWishlist(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      )}
    </div>
  );
};

export default Wishlist;