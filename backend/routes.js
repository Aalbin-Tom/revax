import express from "express"
import { getAllproducts, addproducts } from "./controllers/productController.js"
import { addItemCart, getcart } from "./controllers/cartController.js"

const router = express.Router()

router.post("/addProduct", addproducts)
router.get("/allProduct", getAllproducts)
router.post("/addItemCart", addItemCart)
router.get("/getCart", getcart)


export default router