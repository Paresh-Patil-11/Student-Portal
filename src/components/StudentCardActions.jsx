import React from "react";
import { Button, TextField, Stack, Grid, Typography, Avatar } from "@mui/material";

const StudentCardActions = ({
  student,
  isEditing,
  editForm,
  onChange,
  onEdit,
  onDelete,
  onSave,
  onCancel,
}) => {
  if (isEditing) {
    return (
      <Stack spacing={2}>
        <TextField
          label="Name"
          name="name"
          value={editForm.name}
          onChange={onChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={editForm.email}
          onChange={onChange}
          fullWidth
        />
        <TextField
          label="Course"
          name="course"
          value={editForm.course}
          onChange={onChange}
          fullWidth
        />
        <TextField
          label="Profile Image URL"
          name="profileImage"
          value={editForm.profileImage}
          onChange={onChange}
          fullWidth
        />
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={onSave}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    );
  }

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar
            src={student.profileImage}
            alt={student.name}
            sx={{ width: 64, height: 64 }}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="h6">{student.name}</Typography>
          <Typography variant="body2">{student.email}</Typography>
          <Typography variant="body2" color="text.secondary">
            Course: {student.course}
          </Typography>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={1} mt={2} justifyContent="flex-end">
        <Button variant="outlined" color="primary" size="small" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="outlined" color="error" size="small" onClick={onDelete}>
          Delete
        </Button>
      </Stack>
    </>
  );
};

export default StudentCardActions;
