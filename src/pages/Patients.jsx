import { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Tooltip
} from '@mui/material';
import { Add, Edit, Delete, ExpandMore } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { addPatient, deletePatient, updatePatient } from '../store/patientSlice';

const initialForm = { name: '', dob: '', contact: '', healthInfo: '' };

const Patients = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.patients || []);
  const user = useSelector((state) => state.auth.user);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);

  const handleOpen = (patient = null) => {
    setEditId(patient?.id || null);
    setForm(patient || initialForm);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setForm(initialForm);
    setEditId(null);
  };

  const handleSubmit = () => {
    if (editId) {
      dispatch(updatePatient({ ...form, id: editId }));
    } else {
      dispatch(addPatient(form));
    }
    handleClose();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      dispatch(deletePatient(id));
    }
  };

  const isAdmin = user?.role === 'Admin';

  return (
    <Box bgcolor="#fff" minHeight="100vh" px={3} py={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight={600} color="purple">
          Patient Management
        </Typography>
        {isAdmin && (
          <Button variant="contained" color="secondary" startIcon={<Add />} onClick={() => handleOpen()}>
            Add Patient
          </Button>
        )}
      </Box>

      {patients.map((patient) => (
        <Accordion key={patient.id}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight={600} color="purple">
              {patient.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="textSecondary" gutterBottom><strong>DOB:</strong> {patient.dob}</Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom><strong>Contact:</strong> {patient.contact}</Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom><strong>Health Info:</strong> {patient.healthInfo}</Typography>

            {isAdmin && (
              <Box mt={1}>
                <Tooltip title="Edit">
                  <IconButton color="primary" onClick={() => handleOpen(patient)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton color="error" onClick={() => handleDelete(patient.id)}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      ))}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editId ? 'Edit Patient' : 'Add Patient'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Full Name"
            fullWidth
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Date of Birth"
            type="date"
            fullWidth
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            value={form.dob}
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Contact"
            fullWidth
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Health Info"
            fullWidth
            value={form.healthInfo}
            onChange={(e) => setForm({ ...form, healthInfo: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="secondary">
            {editId ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Patients;
