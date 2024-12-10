"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Typography, Container } from '@mui/material';
import { signOut } from 'next-auth/react';

const SignOutPage = () => {
  const router = useRouter();

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' }); // Sign out and redirect to home
  };

  const handleCancel = () => {
    router.push('/'); // Redirect back to the home page
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        Are you sure you want to sign out?
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleSignOut}
        sx={{ marginBottom: '8px' }}
      >
        Yes, Sign Out
      </Button>
      <Button variant="outlined" onClick={handleCancel}>
        Cancel
      </Button>
    </Container>
  );
};

export default SignOutPage;
