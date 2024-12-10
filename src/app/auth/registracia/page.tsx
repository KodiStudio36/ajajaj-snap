"use client"; // Add this line

import { signIn } from 'next-auth/react';
import { Button, Typography, Container } from '@mui/material';
import { useTheme } from "../../../components/ThemeProvider";

const Register = () => {
  const theme = useTheme();

  return (
    <Container>
      <Typography style={{ color: theme.theme.palette.text.primary }} variant="h4">Register</Typography>
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
