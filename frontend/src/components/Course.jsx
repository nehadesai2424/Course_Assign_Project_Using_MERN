import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Course() {

    //for CourseView
    const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);

    //Modal for add student
    const [showStudentModal, setShowStudentModal] = useState(false);

    //Modal for add course
    const [showCourseModal, setShowCourseModal] = useState(false);

    //Modal for assign course
    const [showAssignModal, setShowAssignModal] = useState(false);

    //STUDENT------------------------------------------------------------------------------------

    //to get data
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        // console.log(import.meta.env.VITE_BASEURL);
        axios.get(import.meta.env.VITE_BASEURL + "/student")
            .then((res) => {
                // console.log(res.data.data);
                setStudentData(res.data.data);
            })
    }, [])

    //to post data
    const [student, setStudent] = useState({
        name: "",
        qualification: "",
        email: "",
        mobile: ""
    });

    // Handle Input Change
    const handleChangeStudentData = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };


    // Handle Form Submission
    const handleSubmitStudentData = async (e) => {
        e.preventDefault();

        try {
            const responseStudent = await axios.post(import.meta.env.VITE_BASEURL + "/student", student);
            //alert(response.data.message); // Success message
            setStudent({ name: "", qualification: "", email: "", mobile: "" }); // Clear form
        } catch (error) {
            console.error("Error adding name:", error);
        }
    };


    //COURSES------------------------------------------------------------------------------------

    //to get course data
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        // console.log(import.meta.env.VITE_BASEURL);
        axios.get(import.meta.env.VITE_BASEURL + "/course")
            .then((res) => {
                // console.log(res.data.data);
                setCourseData(res.data.data);
            })
    }, [])

    //to post
    const [course, setCourse] = useState({
        name: "",
        description: "",
        duration: "",
        fees: ""
    });

    // Handle Input Change
    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(import.meta.env.VITE_BASEURL + "/course", course);
            //alert(response.data.message); // Success message
            setCourse({ name: "", description: "", duration: "", fees: "" }); // Clear form
        } catch (error) {
            console.error("Error adding course:", error);
        }
    };


    ///ASSIGN COURSE---------------------------------------------------------------------------------------------

    const [selectedStudent, setSelectedStudent] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");

    // Handle form submission
    const handleAssign = (e) => {
        e.preventDefault();
        if (!selectedStudent || !selectedCourse) {
            alert("Please select both student and course");
            return;
        }

        axios.post(import.meta.env.VITE_BASEURL + "/assign-course", {
            studentId: selectedStudent,
            courseId: selectedCourse
        })
            // .then((res) => alert(res.data.message))
            .then((res) => {
                alert("Course Assigned")
                // Clear the form after submission
                setSelectedStudent("");
                setSelectedCourse("");
            })
            .catch((err) => console.error("Error assigning course:", err));
    };


    //to get data...............................................................................

    const [assignedCourse, setAssignedCourse] = useState([]);

    function fetchStudentCourse(id) {

        axios.get(import.meta.env.VITE_BASEURL + "/assign-course/" + id)
            .then((res) => {
                // console.log(res.data.data);
                setAssignedCourse(res.data.data);
            })
    }

    //---------------------------------------------------------------------------------------------------------
    ///DELETE ASSIGN COURSE
    // const [deletedCourse, setDeletedCourse] = useState([]);
    // function DeleteStudentCourse(id) {
    //     alert(id)
    //     axios.delete(import.meta.env.VITE_BASEURL + "/assign-course/" + id)
    //         .then((res) => {
    //             console.log(res.data.data);
    //             setAssignedCourse(res.data.data);
    //         })
    // }


    //--------------------------------------------------------------------------------------------------------------------

    return (
        <>
            <div className='bg-light'>
                <div className='text-center border shadow bg-white p-2'>
                    <h3 className='text-primary'><i class="fa-solid fa-laptop"></i> <i>iGAP Technologies</i></h3>
                </div>
                <div className="row mx-5">

                    <div className="col-md-3 border my-5 p-3 shadow me-5 bg-white" style={{ height: "550px" }}>
                        <div className='text-center'>

                            <label className="form-label fw-bold"><h4>Select Student</h4></label>
                            <select
                                className="form-control mb-4 shadow"
                                value={selectedStudent.name}
                                onChange={(e) => fetchStudentCourse(e.target.value)
                                }
                            >
                                <option value="">-- Select Name --</option>
                                {
                                    studentData.map((student) => {
                                        // console.log(studentData);

                                        return (
                                            <option value={student._id}>{student.name}</option>
                                        )
                                    })
                                }
                            </select><hr /><br />

                            {/* ADD STUDENT */}

                            {/* Button to Open Modal */}
                            <button
                                className="btn btn-primary mb-4"
                                style={{ width: "200px" }}
                                onClick={() => setShowStudentModal(true)}
                            >
                                <i className="fa-solid fa-user-plus mx-2"></i> Add Student
                            </button>

                            {/* Modal */}
                            {showStudentModal && (
                                <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content p-3">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Add Student</h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    onClick={() => setShowStudentModal(false)}
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">Name</label>
                                                        <input type="text" className="form-control" name='name' placeholder="Enter Name" value={student.name} onChange={handleChangeStudentData} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">Qualification</label>
                                                        <input type="text" className="form-control" name='qualification' placeholder="Enter Qualification" value={student.qualification} onChange={handleChangeStudentData} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">Email</label>
                                                        <input type="email" className="form-control" name='email' placeholder="Enter Email" value={student.email} onChange={handleChangeStudentData} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">Mobile</label>
                                                        <input type="tel" className="form-control" name='mobile' placeholder="Enter Mobile" value={student.mobile} onChange={handleChangeStudentData} />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-success" onClick={handleSubmitStudentData}>Save Student</button>
                                                <button className="btn btn-danger" onClick={() => setShowStudentModal(false)}>Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}


                            {/* ADD COURSE */}

                            {/* Button to Open Modal */}
                            <button
                                className="btn btn-success mb-4"
                                style={{ width: "200px" }}
                                onClick={() => setShowCourseModal(true)}
                            >
                                <i className="fa-solid fa-plus mx-2"></i> Add Course
                            </button>

                            {/* Modal */}
                            {showCourseModal && (
                                <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Add Course</h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    onClick={() => setShowCourseModal(false)}
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">Course Name</label>
                                                        <input type="text" className="form-control" name="name" placeholder="Enter Course Name" value={course.name} onChange={handleChange} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">Description</label>
                                                        <textarea className="form-control" rows="3" name="description" placeholder="Enter Description" value={course.description} onChange={handleChange}></textarea>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">Duration</label>
                                                        <input type="text" className="form-control" name="duration" placeholder="Enter Duration (e.g., 3 months)" value={course.duration} onChange={handleChange} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">Fees</label>
                                                        <input type="number" className="form-control" name="fees" placeholder="Enter Fees" value={course.fees} onChange={handleChange} />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-success" onClick={handleSubmit}>Save Course</button>
                                                <button className="btn btn-danger" onClick={() => setShowCourseModal(false)}>Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ASSIGN COURSE */}
                            {/* Button to Open Modal */}
                            <button
                                className="btn btn-danger mb-4"
                                style={{ width: "200px" }}
                                onClick={() => setShowAssignModal(true)}
                            >
                                ASSIGN COURSE
                            </button>

                            {/* Modal */}
                            {showAssignModal && (
                                <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Assign Course</h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    onClick={() => setShowAssignModal(false)}
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    {/* Name Select */}
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">Select Student</label>
                                                        <select
                                                            className="form-control mb-4 shadow"
                                                            //value={selectedName}
                                                            // onChange={(e) => setSelectedName(e.target.value)}
                                                            // onChange={(e) => alert(e.target.value)}
                                                            value={selectedStudent}
                                                            onChange={(e) => setSelectedStudent(e.target.value)}
                                                        >
                                                            <option value="">-- Select Name --</option>
                                                            {
                                                                studentData.map((student) => {
                                                                    return (
                                                                        <option key={student._id} value={student._id}>{student.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>

                                                    {/* Course Select */}
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">Select Course</label>
                                                        <select
                                                            className="form-control mb-4 shadow"
                                                            //value={selectedName}
                                                            // onChange={(e) => setSelectedName(e.target.value)}
                                                            //onChange={(e) => (e.target.value)}
                                                            value={selectedCourse}
                                                            onChange={(e) => setSelectedCourse(e.target.value)}
                                                        >
                                                            <option value="">-- Select Course --</option>
                                                            {
                                                                courseData.map((course) => {
                                                                    return (
                                                                        <option key={course._id} value={course._id}>{course.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-success" onClick={handleAssign}>Assign Course</button>
                                                <button className="btn btn-danger" onClick={() => setShowAssignModal(false)}>Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <br />

                            {/* <a href=""><i class="fa-solid fa-gear fa-flip-vertical fa-xl text-dark"></i></a>
                            <a href="/students"><h6 style={{ marginTop: "145px" }}>View Student's Details</h6></a> */}

                            <div style={{ display: "flex", alignItems: "center", gap: "40px", marginTop: "145px" }}>

                                <a href=""><i className="fa-solid fa-gear fa-flip-vertical fa-xl text-muted"></i></a>
                                <a href="/students"><h6 style={{ margin: 0 }}>View Student's Details</h6></a>
                            </div>

                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------------ */}
                    {/* Course Content */}
                    <div className="col-md-8 border my-5 p-3 shadow bg-white" >
                        <h2 className='text-center fw-bold mt-3'>COURSES</h2><hr />

                        <div className="container">
                            <div className="row my-4">
                                {
                                    assignedCourse.length > 0 ? (
                                        assignedCourse.map((eachData, index) => (
                                            <div className="col-md-6 mb-3" key={index}>
                                                <div className="card text-center shadow">
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-4">{eachData.courseId.name}</h5>
                                                        <button
                                                            className="btn btn-success text-white px-4"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#courseModal"
                                                            onClick={() => setSelectedCourseDetails(eachData.courseId)}
                                                        >
                                                            View
                                                        </button>

                                                        {/* <button className='btn btn-danger ms-2'><i class="fa-solid fa-trash"></i></button> */}
                                                        <button className='btn btn-danger ms-2'
                                                        // onClick={(e) => DeleteStudentCourse(e.target.value)}
                                                        >
                                                            Remove
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-12 text-center">
                                            <h4 className="text-danger">No courses assigned.</h4>
                                        </div>
                                    )
                                }
                            </div>

                            {/* Modal */}
                            <div className="modal fade" id="courseModal" tabIndex="-1" aria-labelledby="modalTitle" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content p-3">
                                        <div className="modal-header">
                                            <h5>COURSE DETAILS</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <h4 className="mb-4 fw-bold">{selectedCourseDetails?.name || "Course Details"}</h4>
                                            <p><strong>Description: </strong>{selectedCourseDetails?.description || "No details available."}</p>
                                            <p><strong>Duration: </strong>{selectedCourseDetails?.duration || "No duration available."}</p>
                                            <p><strong>Fees: </strong>₹ {selectedCourseDetails?.fees || "No details available."}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course

