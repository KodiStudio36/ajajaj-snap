// src/sections/NonAuthHomeView.tsx

"use client"

import { Container, Typography } from "@mui/material";
import { useTheme } from "../components/ThemeProvider"; // Adjust the import based on your file structure

export default function NonAuthHomeView() {
  const theme = useTheme();

  return (
    <Container>
      <Typography style={{ color: theme.theme.palette.text.primary }} variant="body1" sx={{ mt: 2 }}>
        Domovská stránka - NEprihlásený user
      </Typography>
      <Typography style={{ color: theme.theme.palette.text.primary }}>
        Registrujte sa, aby ste mohli pridať príspevky a zobraziť profil.
      </Typography>
    </Container>
  );
}
