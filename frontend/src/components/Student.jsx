import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Student() {
    const [studentData, setStudentData] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const [isEditing, setIsEditing] = useState(false);
    const [editedStudent, setEditedStudent] = useState(null);

    // Fetch student data
    useEffect(() => {
        axios.get(import.meta.env.VITE_BASEURL + "/student")
            .then((res) => {
                setStudentData(res.data.data);
            })
            .catch((error) => console.error("Error fetching students:", error));
    }, []);

    // Handle student selection
    const handleStudentChange = (event) => {
        const studentId = event.target.value;
        const student = studentData.find((s) => s._id === studentId);
        setSelectedStudent(student);
        setEditedStudent({ ...student }); // Initialize editedStudent state
        setIsEditing(false); // Ensure editing mode is off when selecting a new student
    };

    // Handle input change for editing
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedStudent((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Toggle edit mode
    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    // Save edited student data
    const handleSave = () => {
        axios.put(import.meta.env.VITE_BASEURL + `/student/${editedStudent._id}`, editedStudent)
            .then(() => {
                // Update studentData with the edited student
                setStudentData((prev) =>
                    prev.map((s) => (s._id === editedStudent._id ? editedStudent : s))
                );
                setSelectedStudent(editedStudent);
                setIsEditing(false);
            })
            .catch((error) => console.error("Error updating student:", error));
    };

    //--------------------------------------------------------------------------------------------------------------
    return (
        <>
            <div className="bg-light">
                <div className='text-center border shadow bg-white p-2'>
                    <h3 className='text-primary'><i class="fa-solid fa-laptop"></i> <i>iGAP Technologies</i></h3>
                </div>
                <div className="row mx-5">

                    {/* Student list */}
                    <div className="col-md-3 border my-5 p-3 shadow me-5 bg-white" style={{ height: "550px" }}>
                        <div className='text-center'>

                            <label className="form-label fw-bold"><h4>Select Student</h4></label>
                            <select
                                className="form-control mb-4 shadow"
                                defaultValue=""
                                onChange={handleStudentChange}
                            >
                                <option value="">-- Select Name --</option>
                                {studentData.length > 0 ? (
                                    studentData.map((student) => (
                                        <option key={student._id} value={student._id}>
                                            {student.name}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>Loading students...</option>
                                )}
                            </select><hr /><br />

                            <div>
                                <h2 className='mb-4 text-muted'>Students</h2>
                                <i class="fa-solid fa-list fa-2xl text-muted"></i>
                            </div>
                            {/* <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "230px" }}>
                                <a href=""><i className="fa-solid fa-gear fa-flip-vertical fa-xl text-muted"></i></a>
                                <p className='text-muted mt-3'>____________________________________</p>
                            </div> */}

                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "240px" }}>
                                <a href=""><i className="fa-solid fa-gear fa-flip-vertical fa-xl text-muted"></i></a>
                                <hr style={{ flex: 1, borderTop: "1px solid black", marginTop:"25px"}} />
                            </div>


                        </div>
                    </div>


                    {/* Student details */}
                    <div className="col-md-8 border my-5 p-3 shadow bg-white">
                        <h2 className='text-center fw-bold mt-3'>Student Details</h2><hr />

                        <div className="container">


                            {selectedStudent ? (
                                <div className="card shadow mx-auto my-5" style={{ width: '500px' }}>
                                    <div className="card-header text-center py-3">
                                        <h4>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control text-center"
                                                    value={editedStudent.name}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                selectedStudent.name
                                            )}
                                        </h4>
                                    </div>
                                    <div className="card-body px-5 py-4">
                                        <p><strong>Qualification : </strong>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="qualification"
                                                    className="form-control"
                                                    value={editedStudent.qualification}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                selectedStudent.qualification
                                            )}
                                        </p>
                                        <p><strong>Email : </strong>
                                            {isEditing ? (
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    value={editedStudent.email}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                selectedStudent.email
                                            )}
                                        </p>
                                        <p><strong>Mobile : </strong>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="mobile"
                                                    className="form-control"
                                                    value={editedStudent.mobile}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                selectedStudent.mobile
                                            )}
                                        </p>
                                    </div>
                                    <div className="card-footer text-center bg-light text-muted py-3">
                                        {isEditing ? (
                                            <>
                                                <button className="btn btn-success px-4 py-2 rounded-pill fw-bold me-2" onClick={handleSave}>
                                                    Save
                                                </button>
                                                <button className="btn btn-danger px-4 py-2 rounded-pill fw-bold" onClick={toggleEditMode}>
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <button className="btn btn-primary px-5 py-2 rounded-pill fw-bold" onClick={toggleEditMode}>
                                                Edit
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <h4 className="text-center text-danger">No student selected.</h4>
                            )}

                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default Student