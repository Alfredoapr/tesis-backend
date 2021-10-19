import mongoose from "mongoose";

const { Schema } = mongoose;

const thesisSchema = new Schema({
    thesisId: String,
    name: String,
    year: Number,
    tags: [String],
    school: String
});

const Thesis = mongoose.model("Thesis", thesisSchema);

export default Thesis;