import mongoose from "mongoose";

const{ Schema } = mongoose;

const studentSchema = new Schema({
    idStudent: String,
    name: String,
    email: String
});

const Student = mongoose.model("Student", studentSchema);

export default Student;