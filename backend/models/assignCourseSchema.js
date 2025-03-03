const mongoose = require("mongoose");

//assignCourseSchema
const assignCourseSchema = new mongoose.Schema({
    studentId: { type: mongoose.Types.ObjectId, ref: "student" },
    courseId: { type: mongoose.Types.ObjectId, ref: "course" },
});


//Model
const AssignCourse = mongoose.model("assignCourse", assignCourseSchema);

module.exports = AssignCourse;