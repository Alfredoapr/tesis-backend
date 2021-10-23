import mongoose from "mongoose";

const{ Schema } = mongoose;

const managerSchema = new Schema({
    idManager: String,
    name: String,
    email:String
});

const Manager = mongoose.model("Manager", managerSchema);

export default Manager;