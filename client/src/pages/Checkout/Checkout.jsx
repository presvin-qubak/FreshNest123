import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-hot-toast";
import "./Checkout.css";


const Checkout = () => {

  const { cartItems } = useContext(StoreContext);

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };



  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );



  const handleOrder = async () => {


    if (cartItems.length === 0) {

      toast.error("Your cart is empty");
      return;

    }



    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {

      toast.error("Please fill all details");
      return;

    }



    try {


      const response = await fetch(
        "http://localhost:5000/api/orders",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },


          body: JSON.stringify({

            customer: formData,

            items: cartItems,

            totalAmount: totalAmount,

          }),

        }
      );



      const data = await response.json();



      if (response.ok) {


        toast.success(data.message);



        setFormData({

          name: "",
          phone: "",
          address: "",
          city: "",
          pincode: ""

        });



        setTimeout(() => {


          navigate("/place-order", {

            state: {

              order: data.order

            }

          });


        }, 1000);



      } else {


        toast.error(data.message);


      }



    } catch (error) {


      console.log(error);

      toast.error("Server Error");


    }


  };




  return (

    <div className="checkout-container">



      <button
        className="checkout-close"
        onClick={() => navigate(-1)}
      >
        ✕
      </button>




      <h1>
        Checkout
      </h1>




      <div className="checkout-box">



        <div className="checkout-form">


          <h2>
            Delivery Details
          </h2>




          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />




          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />




          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />




          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />




          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
          />


        </div>






        <div className="order-summary">


          <h2>
            Order Summary
          </h2>




          {
            cartItems.map((item) => (

              <div
                className="summary-item"
                key={item.id}
              >


                <span>
                  {item.name} x {item.quantity}
                </span>



                <span>
                  ₹{item.price * item.quantity}
                </span>



              </div>

            ))
          }





          <hr />




          <h3>
            Total: ₹{totalAmount}
          </h3>




          <button
            className="place-order-btn"
            onClick={handleOrder}
          >
            Place Order
          </button>



        </div>




      </div>




    </div>

  );

};


export default Checkout;