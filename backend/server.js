import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

console.log("JWT SECRET:", process.env.JWT_SECRET);


import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";


const app = express();


connectDB();


app.use(cors());

app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/orders", orderRoutes);


app.get("/", (req,res)=>{

    res.send("API Running");

});


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(`Server running on ${PORT}`);

});