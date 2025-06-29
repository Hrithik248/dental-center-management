import {
  Box,
  Button,
  TextField,
  Alert
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';

const users = [
  { id: '1', role: 'Admin', email: 'admin@entnt.in', password: 'admin123' },
  { id: '2', role: 'Patient', email: 'john@entnt.in', password: 'patient123', patientId: 'p1' },
];

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      dispatch(login(user));
      navigate('/'+ user.role.toLocaleLowerCase() +'/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextField
        margin="normal"
        fullWidth
        required
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        required
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: 'purple',
          '&:hover': {
            backgroundColor: '#6a1b9a',
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
