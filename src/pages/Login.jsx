import { Box, Container, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                mt: 8,
                p: 4,
                backgroundColor: 'white',
                boxShadow: 3,
                borderRadius: 3,
                }}
            >
                <Typography
                variant="h4"
                sx={{ mb: 2, color: 'purple', fontWeight: 600, textAlign: 'center' }}
                >
                Dental Center Login
                </Typography>
                <LoginForm />
            </Box>
        </Container>
    )
};

export default Login;