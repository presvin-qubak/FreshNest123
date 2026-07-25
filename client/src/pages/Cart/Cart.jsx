import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  // Product Total
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Order Summary
  const subtotal = grandTotal;
  const deliveryCharge = subtotal >= 500 ? 0 : 50;
  const tax = Math.round(subtotal * 0.05);
  const finalTotal = subtotal + deliveryCharge + tax;

  return (
    <div className="cart-container">

      {/* Close Button */}
      <button
        className="cart-close"
        onClick={() => navigate(-1)}
      >
        ✕
      </button>

      <h2 className="cart-title">My Cart</h2>

      {cartItems.length === 0 ? (
        <h3 className="empty-cart">
          Your cart is empty
        </h3>
      ) : (
        <>
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              className="cart-card"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-info">

                <h3>{item.name}</h3>

                <p>
                  <strong>Price:</strong> ₹{item.price}
                </p>

                {/* Quantity Controls */}
                <div className="cart-quantity">

                  <button
                    className="qty-btn"
                    onClick={() => {
                      if (item.quantity === 1) {
                        removeFromCart(item.id);
                      } else {
                        decreaseQuantity(item.id);
                      }
                    }}
                  >
                    -
                  </button>

                  <span className="quantity">
                    {item.quantity}
                  </span>

                  <button
                    className="qty-btn"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                </div>

                <p>
                  <strong>Total:</strong> ₹
                  {item.price * item.quantity}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

          {/* Order Summary */}
          <div className="cart-bottom">

            <div className="cart-total">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="summary-row">
                <span>Delivery Charge</span>
                <span>
                  {deliveryCharge === 0
                    ? "FREE"
                    : `₹${deliveryCharge}`}
                </span>
              </div>

              <div className="summary-row">
                <span>GST (5%)</span>
                <span>₹{tax}</span>
              </div>

              <hr />

              <div className="summary-row total">
                <span>Grand Total</span>
                <span>₹{finalTotal}</span>
              </div>

              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;