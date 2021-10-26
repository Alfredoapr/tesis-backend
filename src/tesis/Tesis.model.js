import mongoose from "mongoose";
import Synodal from "../synodal/Synodal.model";

const { Schema } = mongoose;

const thesisSchema = new Schema({
    thesisId: String,
    name: String,
    year: Number,
    tags: [String],
    school: String,
    resume: String,
    pdfRoute: String,
    status: Number,
    statusMessage: String,
    synodals: [String],
    director: String,
    authors: [String]
});

const Thesis = mongoose.model("Thesis", thesisSchema);

export default Thesis;