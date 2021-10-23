import mongoose from "mongoose";

const{ Schema } = mongoose;

const synodalSchema = new Schema({
    idSynodal: String,
    name: String,
    email:String
});

const Synodal = mongoose.model("Synodal", synodalSchema);

export default Synodal;