import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  InputLabel,
  Card,
  CardContent,
} from "@mui/material";
import "./RegisterStudent.css";

export default function RegisterStudent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    profileImage: null,
  });

  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const mockCourses = [
      { id: 1, name: "Mechanical Engineering" },
      { id: 2, name: "Electrical Engineering" },
      { id: 3, name: "Civil Engineering" },
      { id: 4, name: "Computer Engineering" },
      { id: 5, name: "Chemical Engineering" },
      { id: 6, name: "Aerospace Engineering" },
      { id: 7, name: "Biomedical Engineering" },
      { id: 8, name: "Industrial Engineering" },
    ];
    setTimeout(() => {
      setCourses(mockCourses);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData({ ...formData, profileImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = 'Email must include "@"';
    }
    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.profileImage)
      newErrors.profileImage = "Profile image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newStudent = {
          name: formData.name,
          email: formData.email,
          course: formData.course,
          profileImage: reader.result,
        };
        const storedStudents =
          JSON.parse(localStorage.getItem("students")) || [];
        storedStudents.push(newStudent);
        localStorage.setItem("students", JSON.stringify(storedStudents));
        setFormData({
          name: "",
          email: "",
          course: "",
          profileImage: null,
        });
        alert("Student registered successfully!");
      };
      reader.readAsDataURL(formData.profileImage);
    }
  };

  return (
    <>
      <h2>REGISTER STUDENT</h2>
      <Box className="form-container">
        <Card className="form-card" elevation={3}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Enrollment Form
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Name"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel id="course-label">Enrolled Course</InputLabel>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`custom-select ${errors.course ? "error-border" : ""}`}
                  >
                    <option value="">-- Select a course --</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.name}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                  {errors.course && (
                    <Typography variant="caption" color="error">
                      {errors.course}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="profileImage">Profile Image</InputLabel>
                  <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    onChange={handleChange}
                    className="file-input"
                  />
                  {errors.profileImage && (
                    <Typography variant="caption" color="error">
                      {errors.profileImage}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} className="center-button">
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
