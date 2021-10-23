import mongoose from "mongoose";

const{ Schema } = mongoose;

const directorSchema = new Schema({
    idDirector: String,
    name: String,
    email:String
});

const Director = mongoose.model("Director", directorSchema);

export default Director;