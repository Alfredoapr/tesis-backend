import mongoose from "mongoose";

const { Schema } = mongoose;

const thesisSchema = new Schema({
    thesisId: String,
    name: String,
    year: Number,
    tags: [String],
    school: String,
    resume: String,
    pdfRout: String,
    status: Number,
    statusMessage: String
});

const Thesis = mongoose.model("Thesis", thesisSchema);

export default Thesis;