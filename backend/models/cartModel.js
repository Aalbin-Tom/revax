import mongoose from "mongoose"

const CartSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: false,
    }
);
const Cart = mongoose.model("Cart", CartSchema);
export default Cart;