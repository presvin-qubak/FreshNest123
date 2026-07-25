import React, { useContext } from "react";
import "./ProductCard.css";
import { StoreContext } from "../../context/StoreContext";
import {
  FaRegHeart,
  FaHeart,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useContext(StoreContext);

  if (!product) return null;

  // Find product in cart
  const cartProduct = cartItems.find(
    (item) => item.id === product.id
  );

  const quantity = cartProduct ? cartProduct.quantity : 0;

  // Check wishlist
  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div className="product-card">

      {/* Product Image */}
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {/* Wishlist */}
        <button
          className="wishlist-btn"
          onClick={() =>
            isWishlisted
              ? removeFromWishlist(product.id)
              : addToWishlist(product)
          }
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      {/* Product Details */}
      <div className="product-info">

        {/* Stock + Rating */}
        <div className="product-top">

          <div className="stock-badge">
            <FaCheckCircle />
            <span>In Stock</span>
          </div>

          <div className="product-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>4.8</span>
          </div>

        </div>

        {/* Product Name */}
        <h3 className="cart-name">
          {product.name}
        </h3>

        {/* Description */}
        <p className="cart-description">
          {product.description}
        </p>

        {/* Footer */}
        <div className="product-footer">

          <span className="cart-price">
            ₹{product.price}
          </span>

          {quantity === 0 ? (
            <button
              className="cart-button"
              onClick={() => addToCart(product)}
            >
              Add Cart
            </button>
          ) : (
            <div className="quantity-box">

              <button
                className="qty-btn"
                onClick={() =>
                  decreaseQuantity(product.id)
                }
              >
                -
              </button>

              <span className="quantity">
                {quantity}
              </span>

              <button
                className="qty-btn"
                onClick={() =>
                  increaseQuantity(product.id)
                }
              >
                +
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default ProductCard;