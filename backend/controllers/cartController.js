import { Types } from "mongoose";
import Product from "../models/productsModel.js"
const { ObjectId } = Types;

export const addItemCart = async (req, res) => {
   console.log(req.body);
   const {id , quantity} = req.body
   const ids = new  ObjectId(id)
   try {
      const product = await Product.findOne({ _id: ids})
      if (!product) {
         res.json({
            message: "there is no product"
         })
      }

      const cart = req.session.cart || {};
      cart[product._id] = cart[product._id] || 0;
      
      if (quantity > product.quantity) {
         return res.status(400).json({ message: 'Quantity exceeds available stock.' });
      }
      
      cart[product._id] += parseInt(quantity, 10);
      req.session.cart = cart 
      
      console.log(cart,"llllllllllllllll");
   } catch (error) {
      console.error(error);
      res.status(500).json({
         message: "Error retrieving product"
      });
   }
}


export const getcart =async (req,res)=>{

   const cart = req.session.cart || {};
   console.log(cart,"kkkk");
}