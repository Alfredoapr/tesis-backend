import mongoose from "mongoose";

const{ Schema } = mongoose;

const teacherSchema = new Schema({
    teacherId: String,
    name: String,
    email:String
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;