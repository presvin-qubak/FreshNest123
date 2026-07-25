import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./ProductDetails.css";


const ProductDetails = () => {


  const { id } = useParams();

  const navigate = useNavigate();


  const { food_list, addToCart } = useContext(StoreContext);



  const product = food_list.find(

    (item) => item.id === Number(id)

  );



  if(!product){

    return (

      <h2>
        Product Not Found
      </h2>

    );

  }





  return (

    <div className="product-details">


      <button
        className="close-btn"
        onClick={()=>navigate(-1)}
      >
        ✕
      </button>



      <img
        src={product.image}
        alt={product.name}
      />



      <div>

        <h1>
          {product.name}
        </h1>


        <h2>
          ₹{product.price}
        </h2>


        <p>
          {product.description}
        </p>



        <button
          onClick={()=>addToCart(product)}
        >
          Add To Cart
        </button>


      </div>


    </div>

  );

};


export default ProductDetails;