const mongoose = require("mongoose");


//studentSchema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
});


//Model
const Student = mongoose.model("student", studentSchema);

module.exports = Student;