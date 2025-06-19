import React, { useEffect, useState } from "react";
import { Card, CardContent, Box } from "@mui/material";
import StudentCardActions from "./StudentCardActions";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    course: "",
    profileImage: "",
  });

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  const saveStudents = (newStudents) => {
    localStorage.setItem("students", JSON.stringify(newStudents));
    setStudents(newStudents);
  };

  const handleDelete = (idx) => {
    const newStudents = students.filter((_, i) => i !== idx);
    saveStudents(newStudents);
    if (editIndex === idx) {
      setEditIndex(null);
    }
  };

  const handleEdit = (idx) => {
    setEditIndex(idx);
    setEditForm(students[idx]);
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditForm({ name: "", email: "", course: "", profileImage: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!editForm.name || !editForm.email) {
      alert("Name and Email are required");
      return;
    }
    const newStudents = [...students];
    newStudents[editIndex] = editForm;
    saveStudents(newStudents);
    setEditIndex(null);
    setEditForm({ name: "", email: "", course: "", profileImage: "" });
  };

  if (students.length === 0) {
    return (
      <Box mt={4} textAlign="center">
        No students registered yet.
      </Box>
    );
  }

  return (
    <>
      <h2>STUDENT DETAILS</h2>
      <Box mt={4} display="flex" flexDirection="row" gap={2} flexWrap="wrap">
        {students.map((student, idx) => (
          <Card
            key={idx}
            elevation={3}
            sx={{
              width: 300,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                cursor: "pointer",
              },
            }}
          >
            <CardContent>
              <StudentCardActions
                student={student}
                isEditing={editIndex === idx}
                editForm={editForm}
                onChange={handleChange}
                onEdit={() => handleEdit(idx)}
                onDelete={() => handleDelete(idx)}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default StudentDetails;
