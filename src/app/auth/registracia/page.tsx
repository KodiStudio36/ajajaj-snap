"use client"; // Add this line

import { signIn } from 'next-auth/react';
import { Button, Typography, Container } from '@mui/material';

const Register = () => {
  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <Button 
        variant="contained" 
        onClick={() => signIn('google')} // Use the same Google sign-in method
        sx={{ marginTop: '16px' }}
      >
        Register with Google
      </Button>
    </Container>
  );
};

export default Register;
