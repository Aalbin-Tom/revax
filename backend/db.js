import  mongoose from "mongoose"

export const connectDB = () => {
    try {
        const conn = mongoose.connect('mongodb://127.0.0.1:27017/revaxLLP')
        console.log(`connected mongo`);
    } catch (error) {
        console.log(`error:${error}`);
        process.exit();
    }
}