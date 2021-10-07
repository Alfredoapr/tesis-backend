import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.siq3i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        console.log("Database connected");
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;