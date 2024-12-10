// src/app/auth/prihlasenie/page.tsx

"use client"; // Add this line

import { signIn } from 'next-auth/react';
import { Button, Typography, Container } from '@mui/material';
import { useTheme } from "../../../components/ThemeProvider";

const SignIn = () => {
  const theme = useTheme();

  return (
    <Container>
      <Typography style={{ color: theme.theme.palette.text.primary }} variant="h4">Sign In</Typography>
      <Button
        variant="contained"
        onClick={() => signIn('google')}
        sx={{ marginTop: '16px' }}
      >
        Sign in with Google
      </Button>
    </Container>
  );
};

export default SignIn;