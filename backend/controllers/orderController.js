import Order from "../models/Order.js";


// Create Order

export const createOrder = async (req,res)=>{

  try{

    const {
      customer,
      items,
      totalAmount
    } = req.body;



    if(
      !customer ||
      !items ||
      items.length === 0
    ){

      return res.status(400).json({
        message:"Invalid order data"
      });

    }



    const order = await Order.create({

      customer,

      items,

      totalAmount

    });



    res.status(201).json({

      message:"Order placed successfully",

      order

    });



  }catch(error){

    res.status(500).json({

      message:error.message

    });

  }

};