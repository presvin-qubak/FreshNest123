// src/context/StoreContext.jsx

import { createContext, useState } from "react";
import products from "../data/product.js";


export const StoreContext = createContext();



const StoreContextProvider = ({ children }) => {


  // Product data
  const food_list = products;



  const [cartItems, setCartItems] = useState([]);

  const [wishlist, setWishlist] = useState([]);




  // ======================
  // ADD TO CART
  // ======================

  const addToCart = (product) => {


    const exist = cartItems.find(

      (item) => item.id === product.id

    );



    if (exist) {


      setCartItems(

        cartItems.map((item) =>


          item.id === product.id

            ?

            {
              ...item,
              quantity: item.quantity + 1
            }

            :

            item


        )

      );



    } else {


      setCartItems([

        ...cartItems,

        {
          ...product,
          quantity: 1
        }

      ]);


    }


  };





  // ======================
  // INCREASE QUANTITY
  // ======================

  const increaseQuantity = (id) => {


    setCartItems(

      cartItems.map((item) =>


        item.id === id

          ?

          {
            ...item,
            quantity: item.quantity + 1
          }

          :

          item


      )

    );


  };






  // ======================
  // DECREASE QUANTITY
  // ======================

  const decreaseQuantity = (id) => {


    setCartItems(

      cartItems

      .map((item)=>


        item.id === id

        ?

        {
          ...item,
          quantity:item.quantity - 1
        }

        :

        item


      )

      .filter(
        (item)=> item.quantity > 0
      )

    );


  };







  // ======================
  // REMOVE CART
  // ======================

  const removeFromCart = (id)=>{


    setCartItems(

      cartItems.filter(

        (item)=> item.id !== id

      )

    );


  };







  // ======================
  // WISHLIST
  // ======================


  const addToWishlist = (product)=>{


    const exist = wishlist.find(

      (item)=> item.id === product.id

    );



    if(!exist){


      setWishlist([

        ...wishlist,

        product

      ]);


    }


  };






  const removeFromWishlist = (id)=>{


    setWishlist(

      wishlist.filter(

        (item)=> item.id !== id

      )

    );


  };








  // Cart badge count

  const cartCount = cartItems.reduce(

    (total,item)=>

      total + item.quantity,

    0

  );








  return (

    <StoreContext.Provider

      value={{


        // Products

        food_list,



        // Cart

        cartItems,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart,

        cartCount,



        // Wishlist

        wishlist,

        addToWishlist,

        removeFromWishlist



      }}

    >

      {children}


    </StoreContext.Provider>


  );


};



export default StoreContextProvider;