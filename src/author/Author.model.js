import mongoose from "mongoose";

const{ Schema } = mongoose;

const authorSchema = new Schema({
    idAuthor: String,
    name: String,
    email:String
});

const Author = mongoose.model("Author", authorSchema);

export default Author;