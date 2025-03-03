const mongoose = require("mongoose");


//courseSchema
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    fees: { type: String, required: true },
});


//Model
const Course = mongoose.model("course", courseSchema);

module.exports = Course;