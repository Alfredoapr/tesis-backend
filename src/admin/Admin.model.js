import mongoose from "mongoose";

const{ Schema } = mongoose;

const adminSchema = new Schema({
    idAdmin: String,
    name: String,
    email:String
});

const Admin = mongoose.model("Synodal", adminSchema);

export default Admin;